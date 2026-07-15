import time
from wasmer import engine, Store, Module, Instance
from wasmer_compiler_llvm import Compiler

def main():
	# 1. Wasmファイルの読み込み
	with open("./wa.wasm", "rb") as f:
		wasm_bytes = f.read()

	# 2. StoreとModuleの作成
	store = Store(engine.JIT(Compiler))
	module = Module(store, wasm_bytes)

	# 3. インスタンス化
	instance = Instance(module)

	# 4. エクスポートされた関数を取得
	calc = instance.exports.calc

	for _ in range(20):
		start_time = time.perf_counter()
		for _ in range(1000):
			calc(1000000)
		end_time = time.perf_counter()

		print(end_time - start_time, "s")

if __name__ == "__main__":
	main()
