#!/bin/bash

set -ex

rm -rf _pages_
mkdir _pages_

apps=(
    angular
    lit
    react
    ripple
    solid
    vue
)

for app in "${apps[@]}"; do
    # vp run をネストできないので回避
    vp exec pnpm run -C "apps/$app" build
    mv apps/$app/dist _pages_/$app
done

cd _pages_
mv angular _angular
mv _angular/angular/browser angular
rm -rf _angular
