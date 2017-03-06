require('shelljs/global')
const path = require('path')
const fs = require('fs')
const pkg = require('../package.json')

const token = '%VERSION%'
const index = path.resolve('./src/index.js')
var content = fs.readFileSync(index, { encoding: 'utf-8' })
content = content.replace(token, pkg.version)
fs.writeFileSync(index, content)

/* global cd, cp, echo, exec, mv, rm */
echo('building lib...')
rm('-r', '../dist/lib')
exec('webpack --progress --color --config ./build/webpack.prod.config.js')

echo('copying src...')
cp('-R', './src', '../dist/lib/src')
cp('-R', './*.*', '../dist/lib')
cp('-R', './.*', '../dist/lib')

echo('packing lib...')
cd('../dist/lib')
exec('npm pack')
cp('./*.tgz', '../')
mv('./*.tgz', '../vue-options-latest.tgz')

content = content.replace(pkg.version, token)
fs.writeFileSync(index, content)
