#!/bin/sh
set -eu
SCRIPT_DIR=$(cd $(dirname $0) && pwd)
cd $SCRIPT_DIR

function move() {
    cd ..
    cd $1
    return 0
}

function npmInstall() {
    move $1
    npm install
    cd $SCRIPT_DIR
    return 0
}

function release() {
    move $1
    npm run release
    cd $SCRIPT_DIR
    return 0
}

npmInstall client
release client
echo 'client'

npmInstall server
echo 'server'

echo 'setup complete'