import fs from 'fs';
import readline from 'readline';

async function processLineByLine() {
  const fileStream = fs.createReadStream('C:/Users/Dell/.gemini/antigravity/brain/04d8bc5b-5ac2-45a7-8aa4-d51c4baa696d/.system_generated/logs/transcript.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let output = '';

  for await (const line of rl) {
    try {
      const obj = JSON.parse(line);
      if (obj.type === 'USER_INPUT') {
        output += `=== USER INPUT (step ${obj.step_index}) ===\n${obj.content}\n\n`;
      } else if (obj.type === 'PLANNER_RESPONSE') {
        output += `=== ASSISTANT RESPONSE (step ${obj.step_index}) ===\n${obj.content}\n\n`;
      }
    } catch (e) {
      // ignore
    }
  }

  fs.writeFileSync('./scratch/parsed_history.txt', output);
  console.log('Parsed successfully');
}

processLineByLine();
