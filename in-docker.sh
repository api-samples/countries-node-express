#!/bin/bash

NODE_VERSION=4.1.0
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

docker run -it --rm -v ${DIR}:/app -w=/app node:${NODE_VERSION} $@
