#!/usr/bin/env bash

set -e

# サブディレクトリに配置するアプリ一覧
sub_apps=(
  react
  preact
  vue
  angular
  solid
  lit
  alpine
  hyperhtml
  uhtml
  van
  aurelia
#  stencil
  arrow
#  ripple
  vanilla
)

# 全アプリ（website + 各サブアプリ）
all_apps=("website" "${sub_apps[@]}")

# 1. dist ディレクトリの存在チェック
for app in "${all_apps[@]}"; do
  if [ ! -d "apps/$app/dist" ]; then
    echo "Error: 'apps/$app/dist' が存在しません"
    exit 1
  fi
done

# 2. 移動処理
rm -rf _pages_
mv apps/website/dist _pages_

for app in "${sub_apps[@]}"; do
  if [ "$app" = "angular" ]; then
    mv "apps/$app/dist/angular/browser" "_pages_/$app"
  else
    mv "apps/$app/dist" "_pages_/$app"
  fi
done

echo "Done"
