#!/bin/bash

NODE_VERSION=4.1.0

docker run -it --rm -v ./:/app -w=/app node:${NODE_VERSION} $@
