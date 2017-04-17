#!/bin/bash

ARGUMENTS=( "$@" )

if [ -z "${NODE_ENV}" ]
then
  NODE_ENV="development"
fi

node_modules/.bin/webpack --progress

for argument in "${ARGUMENTS[@]}"
do
  if [ "$argument" == "install" ]
  then
    npm install
  elif [ "$argument" != "compile" ]; then
    npm run "$argument"
  fi
done
