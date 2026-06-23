const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const useBundle = args[0] === 'prod';

const scriptTag = useBundle
  ? `<script src="bundle.js"></script>`
  : `<script type="module" src="index.js"></script>`;

const templatePath = path.join(__dirname, '../index.template.html');
const outputPath = path.join(__dirname, useBundle ? '../public/index.html' : '../index.html');

const template = fs.readFileSync(templatePath, 'utf8');
const output = template.replace('<!-- SCRIPT_PLACEHOLDER -->', scriptTag);

fs.writeFileSync(outputPath, output);
console.log(`Generirana je index.html datoteka sa stript tagom: ${scriptTag}.`);
console.log(`Lokacija index.html datoteke: ${outputPath}`);