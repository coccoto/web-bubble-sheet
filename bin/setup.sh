#!/bin/bash
set -eu

function npmInstall() {
    cd "$1"
    npm install || exit 1
}

function build() {
    cd "$1"
    npm run release || exit 1
}

# 本スクリプトファイルのディレクトリをセットする
SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)

# client ディレクトリをセットする
CLIENT_DIR="$SCRIPT_DIR/../client"
# server ディレクトリをセットする
SERVER_DIR="$SCRIPT_DIR/../server"

# アプリケーションをセットアップする
npmInstall "$CLIENT_DIR"
build "$CLIENT_DIR"

echo '[INFO] client is complete.'

# アプリケーションをセットアップする
npmInstall "$SERVER_DIR"

echo '[INFO] server is complete.'
