import { WASI } from "node:wasi"
import { readFile } from "node:fs/promises"

// 1. WASI（システムインターフェース）の初期化
// ※引数や環境変数をRust側に渡したい場合は、ここに設定を追加できます
const wasi = new WASI({
	version: "preview1", // Rustの「wasip1」と合わせる
	args: process.argv,
})

// 2. Wasmファイルをバイナリとして読み込む
// ※パスはRustのターゲットディレクトリに合わせて調整してください
const path = "./wa.wasm"
const buf = await readFile(path)

// 3. WebAssemblyのコンパイルとインスタンス化
const { instance } = await WebAssembly.instantiate(buf, {
	// WASIが要求するシステム関数群（インポート）をWasmに渡す
	wasi_snapshot_preview1: wasi.wasiImport,
})

// 4. WASIをスタートさせる（初期化処理が走る）
wasi.initialize(instance)

// 5. エクスポートされた関数を取得して実行！
const { calc } = instance.exports

for (let i = 0; i < 20; i++) {
	console.time()
	for (let i = 0; i < 1000; i++) {
		calc(1000000n)
	}
	console.timeEnd()
}
