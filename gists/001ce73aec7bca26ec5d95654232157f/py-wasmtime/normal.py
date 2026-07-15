import time
from wasmtime import Engine, Store, Module, Linker

def main():
	# 1. Wasmtimeの環境を初期化
	engine = Engine()
	store = Store(engine)
	linker = Linker(engine)

	# WASI（システムインターフェース）の機能をリンク環境に定義
	linker.define_wasi()

	# 2. Wasmファイルの読み込みとモジュール化
	wasm_path = "./wa.wasm"
	module = Module.from_file(engine, wasm_path)

	# 3. インスタンス化（Wasmを実行可能な状態にする）
	instance = linker.instantiate(store, module)

	# 4. エクスポートされた関数を取得
	# instance.exports(store) の中にRustで定義した関数が入っています
	exports = instance.exports(store)
	calc = exports["calc"]

	# 5. 実行
	for _ in range(20):
		start_time = time.perf_counter()
		for _ in range(1000):
			calc(store, 1000000)
		end_time = time.perf_counter()

		print(end_time - start_time, "s")

if __name__ == "__main__":
	main()
