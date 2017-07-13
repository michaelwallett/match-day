#!/bin/sh

if [ "$1" != "" ]; then
  if [ -e "./packages/$1/package.json" ]; then
    ./node_modules/babel-cli/bin/babel.js ./packages/$1/src --out-dir ./packages/$1/dist
  else
    echo "Package $1 was not found"
  fi
else
  for f in packages/*; do
    package=`basename $f`

    if [ -d "$f" ] && [ -d "$f/src" ] && [ -e "$f/package.json" ]; then
      ./node_modules/babel-cli/bin/babel.js $f/src --out-dir $f/dist
    fi
  done
fi
