#!/bin/bash

ARGUMENTS=( "$@" )

if [ -z "${NODE_ENV}" ]
then
  NODE_ENV="development"
fi

node_modules/.bin/webpack --progress
return_code=$?
if [ ${return_code} != 0 ]
then
  exit ${return_code}
fi

for argument in "${ARGUMENTS[@]}"
do
  if [ "$argument" == "install" ]
  then
    npm install
  elif [ "$argument" != "compile" ]; then
    npm run "$argument"
  fi

  return_code=$?
  if [ ${return_code} != 0 ]
  then
    exit ${return_code}
  fi
done
