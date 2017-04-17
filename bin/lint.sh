#!/bin/bash

ROOT=$PWD
ARGUMENTS=( "$@" )

if [ -z "${NODE_ENV}" ]
then
  NODE_ENV="development"
fi

if [ "${NODE_ENV}" == "development" ]
then
  ${ROOT}/node_modules/.bin/eslint .
fi

for argument in "${ARGUMENTS[@]}"
do
  if [ "$argument" == "install" ]
  then
    npm install
  elif [ "$argument" != "lint" ]; then
    npm run "$argument"
  fi
done
