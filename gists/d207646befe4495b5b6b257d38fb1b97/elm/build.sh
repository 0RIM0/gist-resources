#!/bin/bash

cd "$(dirname "$0")"
elm make src/Main.elm --output main.js
rm -rf _pages_
mkdir _pages_
cp index.html style.css sw.js app.js main.js _pages_
rm main.js
