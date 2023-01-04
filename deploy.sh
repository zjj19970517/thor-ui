#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
pnpm run docs:build

# 进入待发布的目录
# cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git add .
git commit -m 'deploy'

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/zjj19970517/thor-ui.git master:gh-pages
git push -f git@github.com:zjj19970517/thor-ui.git master:gh-pages
cd -
