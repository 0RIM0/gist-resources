cargo build --target wasm32-wasip1 --release
cp target/wasm32-wasip1/release/wa.wasm ../node
cp target/wasm32-wasip1/release/wa.wasm ../py-wasmer
cp target/wasm32-wasip1/release/wa.wasm ../py-wasmtime
