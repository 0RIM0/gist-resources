# Gist 関連のファイル置き場

Gist に置いてるメモ系に関連するファイルは同じ Gist 内に置いていたが、Gist だと多くのファイルを置いたり、フォルダ構造があるものを置くのに向いてないのでそれらをまとめておくための場所

- `gists/{gist_id}/` 以下に対応する Gist の ID のファイルを配置
- `gists/{gist_id}/public` は Pages で公開
    - パスは `gists/foo/public/1.html` が `/{repository_name}/gists/foo/1.html` に対応
    - Gist ごとに公開したいものやビルド手順が違うと思うので Actions では上記ルールのみで、各フォルダでビルドして public フォルダに配置してコミットする
