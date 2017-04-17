#!/bin/bash

ROOT=$PWD
TARGETS=("app" "utils" "webpack.config.js")
SHRED=`which shred`

npm install --only=dev
npm run compile
npm prune

for target in "${TARGETS[@]}"
do
  if [ ! -z "${SHRED}" ]
  then
    shred --force --zero --remove --verbose ${target}
  else
    rm -rf ${target}
  fi
done

# TODO: deploy "static" directory to CDN
