const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

fs.rmSync('./public', { recursive: true, force: true });
fs.mkdirSync('./public', { recursive: true });

execSync('browserify index.js -t babelify | uglifyjs -o ./public/bundle.js', { stdio: 'inherit' });

execSync('node ./build/generate-index-html.js prod', { stdio: 'inherit' });

fs.copyFileSync('./style.css', './public/style.css');
fs.cpSync('./images', './public/images', { recursive: true });

console.log("Prod build završen! Datoteke se nalaze u <project-root>/public direktoriju.");