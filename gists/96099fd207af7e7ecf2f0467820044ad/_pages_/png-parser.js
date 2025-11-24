/**
 * PNG Parser Module
 *
 * This module provides a simple function to parse a PNG ArrayBuffer
 * and extract basic metadata like dimensions and text chunks.
 */

import pako from 'https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako.esm.mjs';

// --- ヘルパー定数と関数 ---

const PNG_SIGNATURE = [137, 80, 78, 71, 13, 10, 26, 10];

const COLOR_TYPES = {
	0: 'Greyscale',
	2: 'Truecolour',
	3: 'Indexed-colour',
	4: 'Greyscale with alpha',
	6: 'Truecolour with alpha'
};

const INTERLACE_METHODS = {
	0: 'No interlace',
	1: 'Adam7 interlace'
};

const RENDERING_INTENTS = {
	0: 'Perceptual',
	1: 'Relative colorimetric',
	2: 'Saturation',
	3: 'Absolute colorimetric'
};

const PHYS_UNITS = {
	0: 'Unknown',
	1: 'Metre'
};

const ICC_DEVICE_CLASSES = {
	'scnr': 'Input device (scanner)',
	'mntr': 'Display device (monitor)',
	'prtr': 'Output device (printer)',
	'link': 'Device link',
	'spac': 'Color space conversion',
	'abst': 'Abstract',
	'nmcl': 'Named color'
};

/**
 * Parses a PNG ArrayBuffer to extract metadata.
 * @param {ArrayBuffer} arrayBuffer The PNG file's ArrayBuffer.
 * @returns {object|null} An object with metadata or null if parsing fails.
 */
export function parse(arrayBuffer) {
	const view = new DataView(arrayBuffer);
	const latin1Decoder = new TextDecoder('latin1');
	const utf8Decoder = new TextDecoder('utf-8');
	const asciiDecoder = new TextDecoder('ascii');

	// 1. Check PNG signature
	for (let i = 0; i < PNG_SIGNATURE.length; i++) {
		if (view.getUint8(i) !== PNG_SIGNATURE[i]) {
			console.error("Invalid PNG signature.");
			return null;
		}
	}

	const chunks = []
	let colorType = null; // IHDRから取得するカラータイプを保持

	let offset = 8; // Start after the 8-byte signature

	// 2. Loop through chunks
	while (offset < view.byteLength) {
		const length = view.getUint32(offset);
		const type = String.fromCharCode(
			view.getUint8(offset + 4),
			view.getUint8(offset + 5),
			view.getUint8(offset + 6),
			view.getUint8(offset + 7)
		);

		const chunkOffset = offset + 8;
		const chunkDataView = new DataView(arrayBuffer, chunkOffset, length);

		const chunk = { type, length }
		chunks.push(chunk)

		// チャンクタイプに応じて情報を抽出
		switch (type) {
			case 'IHDR': {
				chunk.ihdr = {
					width: chunkDataView.getUint32(0),
					height: chunkDataView.getUint32(4),
					bitDepth: chunkDataView.getUint8(8),
					colorType: `${chunkDataView.getUint8(9)} (${COLOR_TYPES[chunkDataView.getUint8(9)] || 'Unknown'})`,
					compressionMethod: chunkDataView.getUint8(10),
					filterMethod: chunkDataView.getUint8(11),
					interlaceMethod: `${chunkDataView.getUint8(12)} (${INTERLACE_METHODS[chunkDataView.getUint8(12)] || 'Unknown'})`,
				}
				// tRNSチャンクの解析で必要になるためカラータイプを保持しておく
				colorType = chunkDataView.getUint8(9);
				break;
			}

			case 'tEXt': {
				const chunkData = new Uint8Array(arrayBuffer, chunkOffset, length);
				const nullSeparatorIndex = chunkData.indexOf(0);
				if (nullSeparatorIndex !== -1) { // ヌル文字の区切りが見つかった場合
					const keyword = latin1Decoder.decode(chunkData.subarray(0, nullSeparatorIndex));
					const text = latin1Decoder.decode(chunkData.subarray(nullSeparatorIndex + 1));
					chunk.text = {
						keyword: keyword,
						text: text
					};
				}
				break;
			}

			case 'iTXt': {
				const chunkData = new Uint8Array(arrayBuffer, chunkOffset, length);
				let currentDataOffset = 0;

				// Keyword
				const keywordEnd = chunkData.indexOf(0, currentDataOffset);
				const keyword = utf8Decoder.decode(chunkData.subarray(currentDataOffset, keywordEnd));
				currentDataOffset = keywordEnd + 1;

				// Compression flag (0: uncompressed, 1: compressed)
				const compressionFlag = chunkData[currentDataOffset++];
				// Compression method (0: deflate)
				currentDataOffset++; // compressionMethodをスキップ

				// Language tag
				const langTagEnd = chunkData.indexOf(0, currentDataOffset);
				const langTag = utf8Decoder.decode(chunkData.subarray(currentDataOffset, langTagEnd));
				currentDataOffset = langTagEnd + 1;

				// Translated keyword
				const transKeywordEnd = chunkData.indexOf(0, currentDataOffset);
				const transKeyword = utf8Decoder.decode(chunkData.subarray(currentDataOffset, transKeywordEnd));
				currentDataOffset = transKeywordEnd + 1;

				// Text
				const compressedTextData = chunkData.subarray(currentDataOffset);

				if (compressionFlag === 0) { // 非圧縮
					const text = utf8Decoder.decode(compressedTextData);
					chunk.text = { text: text };
				} else { // 圧縮済み
					try {
						const decompressed = pako.inflate(compressedTextData);
						const text = utf8Decoder.decode(decompressed);
						chunk.text = { text: text };
					} catch (e) {
						console.error(`iTXtチャンク (${keyword}) の展開に失敗しました:`, e);
						chunk.error = `iTXtチャンク (${keyword}) の展開に失敗しました:${e}`
					}
				}
				if (chunk.text) {
					chunk.text.keyword = keyword;
					chunk.text.langTag = langTag;
					chunk.text.transKeyword = transKeyword;
					chunk.text.compressionFlag = !!compressionFlag;
				}
				break;
			}

			case 'zTXt': {
				const chunkData = new Uint8Array(arrayBuffer, chunkOffset, length);
				const keywordEnd = chunkData.indexOf(0);
				const keyword = latin1Decoder.decode(chunkData.subarray(0, keywordEnd));
				// 圧縮メソッド (0: deflate) の1バイトをスキップ
				const compressedTextData = chunkData.subarray(keywordEnd + 2);
				try {
					const decompressed = pako.inflate(compressedTextData);
					const text = latin1Decoder.decode(decompressed);
					chunk.text = {
						keyword: keyword,
						text: text
					};
				} catch (e) {
					console.error(`zTXtチャンク (${keyword}) の展開に失敗しました:`, e);
					chunk.error = `zTXtチャンク (${keyword}) の展開に失敗しました:${e}`
				}
				break;
			}

			case 'PLTE': {
				if (length % 3 !== 0) {
					chunk.error = 'PLTEチャンクの長さが3の倍数ではありません。';
					break;
				}
				chunk.palette = [];
				for (let i = 0; i < length; i += 3) {
					chunk.palette.push({
						r: chunkDataView.getUint8(i),
						g: chunkDataView.getUint8(i + 1),
						b: chunkDataView.getUint8(i + 2)
					});
				}
				break;
			}

			case 'tRNS': {
				chunk.transparency = {};
				if (colorType === null) {
					chunk.error = "tRNSチャンクを解析する前にIHDRチャンクが見つかりませんでした。";
					break;
				}
				switch (colorType) {
					case 3: // Indexed-colour
						chunk.transparency.paletteAlpha = [];
						for (let i = 0; i < length; i++) {
							chunk.transparency.paletteAlpha.push(chunkDataView.getUint8(i));
						}
						break;
					case 0: // Greyscale
						if (length >= 2) {
							chunk.transparency.gray = chunkDataView.getUint16(0);
						}
						break;
					case 2: // Truecolour
						if (length >= 6) {
							chunk.transparency.rgb = {
								r: chunkDataView.getUint16(0),
								g: chunkDataView.getUint16(2),
								b: chunkDataView.getUint16(4)
							};
						}
						break;
				}
				break;
			}

			case 'iCCP': {
				const iCCPData = new Uint8Array(arrayBuffer, chunkOffset, length);
				const iCCPNullSeparatorIndex = iCCPData.indexOf(0);
				const iCCPKeyword = latin1Decoder.decode(iCCPData.subarray(0, iCCPNullSeparatorIndex));
				// 圧縮メソッド(1バイト)をスキップ
				const compressedProfile = iCCPData.subarray(iCCPNullSeparatorIndex + 2);
				try {
					const decompressedProfile = pako.inflate(compressedProfile);
					const profileView = new DataView(decompressedProfile.buffer);

					// ICCプロファイルの基本情報を抽出
					const deviceClass = String.fromCharCode(
						profileView.getUint8(12), profileView.getUint8(13), profileView.getUint8(14), profileView.getUint8(15)
					);

					let description = '説明タグが見つかりません';
					// タグテーブルを読んで'desc'タグを探す
					const tagCount = profileView.getUint32(128);
					let tagTableOffset = 132;
					for (let i = 0; i < tagCount; i++) {
						const tagSignature = String.fromCharCode(
							profileView.getUint8(tagTableOffset), profileView.getUint8(tagTableOffset + 1), profileView.getUint8(tagTableOffset + 2), profileView.getUint8(tagTableOffset + 3)
						);
						if (tagSignature === 'desc') {
							const tagOffset = profileView.getUint32(tagTableOffset + 4);
							const tagSize = profileView.getUint32(tagTableOffset + 8);
							// 'desc'タグの構造: 8バイトのヘッダ + ヌル終端文字列
							// 実際のテキストはタグデータの12バイト目から始まることが多い
							const descArray = new Uint8Array(decompressedProfile.buffer, tagOffset + 12, tagSize - 12);
							// 末尾のヌル文字などを除去
							const nullCharIndex = descArray.indexOf(0);
							description = asciiDecoder.decode(descArray.subarray(0, nullCharIndex > -1 ? nullCharIndex : undefined));
							break;
						}
						tagTableOffset += 12;
					}

					chunk.profile = {
						keyword: iCCPKeyword,
						deviceClass: `${deviceClass} (${ICC_DEVICE_CLASSES[deviceClass] || 'Unknown'})`,
						description: description,
						profileSize: decompressedProfile.byteLength
					};
				} catch (e) {
					console.error(`iCCPチャンク (${iCCPKeyword}) の展開に失敗しました:`, e);
					chunk.error = `iCCPチャンク (${iCCPKeyword}) の展開に失敗しました:${e}`
				}
				break;
			}

			case 'pHYs': {
				if (length >= 9) {
					const unit = chunkDataView.getUint8(8)
					chunk.phys = {
						ppuX: chunkDataView.getUint32(0),
						ppuY: chunkDataView.getUint32(4),
						unit: `${unit} (${PHYS_UNITS[unit] || 'Unknown'})`,
					}
				}
				break;
			}

			case 'tIME': {
				if (length === 7) {
					const year = chunkDataView.getUint16(0);
					const month = chunkDataView.getUint8(2); // 1-based
					const day = chunkDataView.getUint8(3); // 1-based
					const hour = chunkDataView.getUint8(4); // 0-23
					const minute = chunkDataView.getUint8(5); // 0-59
					const second = chunkDataView.getUint8(6); // 0-60
					chunk.time = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
				}
				break;
			}

			case 'gAMA': {
				if (length === 4) {
					const gamma = chunkDataView.getUint32(0) / 100000; // 100000倍された値
					chunk.gamma = gamma.toFixed(5);
				}
				break;
			}

			case 'cHRM': {
				if (length === 32) { // 8 * 4 bytes
					const whitePointX = chunkDataView.getUint32(0) / 100000;
					const whitePointY = chunkDataView.getUint32(4) / 100000;
					const redX = chunkDataView.getUint32(8) / 100000;
					const redY = chunkDataView.getUint32(12) / 100000;
					const greenX = chunkDataView.getUint32(16) / 100000;
					const greenY = chunkDataView.getUint32(20) / 100000;
					const blueX = chunkDataView.getUint32(24) / 100000;
					const blueY = chunkDataView.getUint32(28) / 100000;
					chunk.chromaticities = {
						whitePoint: { x: whitePointX, y: whitePointY },
						red: { x: redX, y: redY },
						green: { x: greenX, y: greenY },
						blue: { x: blueX, y: blueY }
					};
				}
				break;
			}

			case 'sRGB': {
				if (length === 1) {
					const renderingIntent = chunkDataView.getUint8(0);
					chunk.renderingIntent = `${renderingIntent} (${RENDERING_INTENTS[renderingIntent] || 'Unknown'})`;
				}
				break;
			}

			case 'eXIf': {
				try {
					chunk.exif = EXIF.readEXIFData(chunkDataView);
				} catch (e) {
					console.error(`eXIfチャンクの解析に失敗しました:`, e);
					chunk.error = `eXIfチャンクの解析に失敗しました: ${e.message}`;
				}
				break;
			}

			default:
				break;
		}

		offset += 12 + length; // Move to the next chunk (4[len]+4[type]+len[data]+4[crc])
	}

	return chunks;
}