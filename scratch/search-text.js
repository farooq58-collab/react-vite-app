import fs from 'fs';
import path from 'path';

const searchDir = '.';
const searchTerm = 'Kaiser';

function searchFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        searchFiles(fullPath);
      }
    } else {
      if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.php')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.toLowerCase().includes(searchTerm.toLowerCase())) {
          console.log(`Found "${searchTerm}" in: ${fullPath}`);
        }
      }
    }
  }
}

console.log(`Searching for "${searchTerm}"...`);
searchFiles(searchDir);
console.log('Search complete.');
