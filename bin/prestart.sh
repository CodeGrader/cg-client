#!/bin/bash

ROOT=$PWD
SHRED=`which shred`

if [ -z "${NODE_ENV}" ]
then
  NODE_ENV="development"
fi

if [ "${NODE_ENV}" == "development" ]
then
  if [ ! -z "${SHRED}" ]
  then
    shred --force --zero --remove --verbose ${ROOT}/static/bundle/*
  else
    rm -f ${ROOT}/static/bundle/*
  fi
fi
