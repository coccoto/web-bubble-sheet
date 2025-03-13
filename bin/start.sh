#!/bin/bash
set -eu

function runServer() {
    cd "$1"
    npm run start || exit 1
}

# 本スクリプトファイルのディレクトリをセットする
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)

# server ディレクトリをセットする
SERVER_DIR="$SCRIPT_DIR/../server"

# サーバーを実行する
runServer "$SERVER_DIR"
