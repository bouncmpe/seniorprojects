#!/bin/sh
rm -rf public
hugo --gc --minify
npm_config_yes=true npx pagefind --source "public" --serve