#!/usr/bin/env sh

# 忽略错误
set -e

cd ./dist/thor-ui

# 生成日志
conventional-changelog -p angular -i ../CHANGELOG.md -s

cd .. && git add CHANGELOG.md && git commit -m"CHANGELOG"