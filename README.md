# Gist 関連のファイル置き場

Gist に置いてるメモ系に関連するファイルは同じ Gist 内に置いていたが、Gist だと多くのファイルを置いたり、フォルダ構造があるものを置くのに向いてないのでそれらをまとめておくための場所

- `gists/{gist_id}/` 以下に対応する Gist の ID のファイルを配置
- `gists/{gist_id}/_pages_` は Pages で公開
    - パスは `gists/foo/_pages_/1.html` が `/{repository_name}/gists/foo/1.html` に対応
    - Gist ごとに公開したいものやビルド手順が違うと思うので Actions では上記ルールのみで、各フォルダでビルドして public フォルダに配置してコミットする
    - https://0rim0.github.io/gist-resources/gists/***

## Gist Index

Gist には固定表示みたいな機能がないので、このリポジトリの README 内に記載  
特別な Gist 記事へのリンクをまとめる  

- [https://gist.github.com/0RIM0/eaad5bc5d5d8ca82c4f3d448f82d66ce](https://gist.github.com/0RIM0/eaad5bc5d5d8ca82c4f3d448f82d66ce)
    - Gist の検索機能
    - 現在は[別リポジトリ](https://github.com/0RIM0/gist-search)に移動

- [https://gist.github.com/0RIM0/c95b4f31ab3e6b9c0fcc302131d06eb8](https://gist.github.com/0RIM0/c95b4f31ab3e6b9c0fcc302131d06eb8)
    - 1 つの Gist を作るまでもない内容をまとめて書くところ (Bluesky とかの代わり)
    - [Viewer](https://0rim0.github.io/gist-resources/gists/09f81b45220fdc27eee1f32221b391e8/#c95b4f31ab3e6b9c0fcc302131d06eb8)
    - [Writer](https://0rim0.github.io/gist-resources/gists/8c1d8484bfbb513ebfccce929102c147/)

## Gist Tools

- [Gist Search](https://github.com/0RIM0/gist-search)
  - Gist の検索機能
- [Gist Pages](https://github.com/0RIM0/gist-pages)
  - Gist のファイルを Pages のように表示
