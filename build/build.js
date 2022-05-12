const fs = require('fs');
const path = require('path');

// dist目录
let distPath = path.resolve(__dirname, '../dist');
// serve.js目录
let servePath = path.resolve(__dirname, '../dist/umi.server.js');
const files = fs.readdirSync(distPath);
let umiJs = '';
let umiCss = '';
files.forEach(item => {
  if (item.includes('umi') && !item.includes('serve')) {
    if (item.includes('js')) {
      umiJs = item;
    }
    if (item.includes('css')) {
      umiCss = item
    }
  }
});

let content = fs.readFileSync(servePath, 'utf8');
content=content.replace(/umi.js/gi,umiJs ).replace(/umi.css/gi,umiCss)
fs.writeFileSync(servePath, content);
