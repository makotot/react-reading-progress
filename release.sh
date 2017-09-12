#!/bin/sh

rm -rf release && mkdir release;
yarn run build;
cp -r lib/ README.md package.json webpack.config.babel.js .eslintrc ./release

rm -rf react-reading-progress.tar.gz
rm -rf react-reading-progress.zip
tar -zcvf react-reading-progress.tar.gz ./release
zip -r react-reading-progress.zip ./release
