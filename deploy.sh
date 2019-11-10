#!/usr/bin/env sh
set -e
yarn docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:mokunshao/vigour.git master:gh-pages
cd -