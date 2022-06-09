#!/bin/sh
set -eu
SCRIPT_DIR=$(cd $(dirname $0) && pwd)
cd $SCRIPT_DIR

function move() {
    cd ..
    cd $1
    return 0
}

move server
npm start