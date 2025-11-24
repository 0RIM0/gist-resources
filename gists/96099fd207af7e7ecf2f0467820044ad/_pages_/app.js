import { parse as parsePng } from './png-parser.js';

export default () => ({
	status: 'idle', // 'idle', 'success', 'error'
	message: '',
	droppedFile: null,
	metadata: [],
	imageUrl: null,
	isDragging: false,

	/**
	 * コンポーネントの状態を初期値にリセットします。
	 */
	resetState() {
		this.status = 'idle';
		this.message = '';
		if (this.imageUrl) {
			URL.revokeObjectURL(this.imageUrl);
		}
		this.imageUrl = null;
		this.metadata = [];
		this.droppedFile = null;
		this.isDragging = false;
	},

	/**
	 * ファイルがドロップされた時に呼ばれるメソッド
	 * @param {DragEvent} event
	 */
	async handleDrop(event) {
		const file = event.dataTransfer.files[0];

		this.resetState();

		if (!file) return;

		this._processFile(file);
	},

	async _processFile(file) {
		if (file.type !== 'image/png') {
			this.status = 'error';
			this.message = 'PNGファイルではありません';
			return;
		}

		try {
			const buffer = await file.arrayBuffer();
			const metadata = parsePng(buffer);

			if (metadata && metadata.length > 0) {
				this.status = 'success';
				this.droppedFile = {
					name: file.name,
					size: file.size,
				};
				this.metadata = metadata;
				this.imageUrl = URL.createObjectURL(file);
			} else {
				// 解析は成功したが、有効なメタデータがなかった場合
				throw new Error("PNGの解析に失敗しました。有効なチャンクが見つかりません。");
			}
		} catch (e) {
			console.error(e);
			this.status = 'error';
			// エラーオブジェクトのメッセージをUIに表示する
			this.message = e.message || 'PNGファイルの解析中に不明なエラーが発生しました。';
		}
	},

	formatBytes(bytes) {
		return (bytes ?? 0).toLocaleString('en-US') + " Bytes"
	},
});