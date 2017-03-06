require('shelljs/global')

/* global echo, exec */
echo('install global dependencies...')
exec('npm install  webpack')
exec('npm install node-sass --SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/')
