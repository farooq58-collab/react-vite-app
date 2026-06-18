import fs from 'fs';

const filePath = 'c:/Users/Dell/OneDrive/Desktop/mindful website 3/src/App.jsx';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let output = '';

lines.forEach((line, idx) => {
  if (line.includes('group-hover') || line.includes('hover:') || line.includes('showHeroOverlay') || line.includes('active:')) {
    output += `=== Line ${idx + 1} ===\n`;
    const start = Math.max(0, idx - 5);
    const end = Math.min(lines.length - 1, idx + 5);
    for (let i = start; i <= end; i++) {
      const marker = (i === idx) ? '=> ' : '   ';
      output += `${marker}${i + 1}: ${lines[i]}\n`;
    }
    output += '\n';
  }
});

fs.writeFileSync('c:/Users/Dell/OneDrive/Desktop/mindful website 3/scratch/analyze_hovers.txt', output, 'utf8');
console.log('Analysis complete!');
