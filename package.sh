#!/usr/bin/env sh

echo $1
fileout="dist/freshy-chrome-extension-"$1".zip"
echo $fileout
zip -r $fileout src/* minimatch/
