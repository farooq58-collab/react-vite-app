import fs from 'fs';

const file = 'c:/Users/Dell/OneDrive/Desktop/mindful website 3/src/App.jsx';
let content = fs.readFileSync(file, 'utf8');

const statsRegex = / {8}\{\/\* Stats Section \*\/\}\n([\s\S]*?)(?= {8}\{\/\* The Real Problem Section \*\/\})/g;
const problemRegex = / {8}\{\/\* The Real Problem Section \*\/\}\n([\s\S]*?)(?= {6}<\/main>)/g;

let statsMatch = statsRegex.exec(content);
let problemMatch = problemRegex.exec(content);

if (statsMatch && problemMatch) {
  let statsCode = statsMatch[0];
  let problemCode = problemMatch[0];
  
  // Also replace the emoji
  statsCode = statsCode.replace(
    '<div className="text-4xl md:text-5xl bg-white/10 p-4 rounded-2xl shadow-inner">🧘‍♂️</div>',
    `<div className="bg-white/10 p-3 md:p-4 rounded-2xl shadow-inner text-white flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 8a4 4 0 1 0 0 8 4 4 0 0 0 2.828-1.172l6.344-6.344A4 4 0 1 1 20 16a4 4 0 0 1-2.828-1.172l-6.344-6.344A4 4 0 0 0 8 8z"></path>
                  </svg>
                </div>`
  );

  let prefix = content.substring(0, statsMatch.index);
  let suffix = content.substring(problemMatch.index + problemCode.length);
  
  let newContent = prefix + problemCode + statsCode + suffix;
  fs.writeFileSync(file, newContent, 'utf8');
  console.log('Swapped successfully');
} else {
  console.log('Regex match failed');
}
