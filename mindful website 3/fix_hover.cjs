const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const hoverRegex = /(?<![a-zA-Z0-9-])hover:([a-zA-Z0-9_/\-\[\]#%\.]+)/g;
content = content.replace(hoverRegex, (match, p1) => {
  return `${match} active:${p1}`;
});

const groupHoverRegex = /(?<![a-zA-Z0-9-])group-hover:([a-zA-Z0-9_/\-\[\]#%\.]+)/g;
content = content.replace(groupHoverRegex, (match, p1) => {
  return `${match} group-active:${p1}`;
});

fs.writeFileSync('src/App.jsx', content);
console.log('Fixed hovers');
