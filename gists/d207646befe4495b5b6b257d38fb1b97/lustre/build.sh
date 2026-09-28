#!/bin/bash

cd "$(dirname "$0")"
gleam run -m lustre/dev build app

# base 設定がなくてビルド対象は絶対パスになるので相対パス変換
sed -i 's|src="/app.js"|src="app.js"|g' ./_pages_/index.html
