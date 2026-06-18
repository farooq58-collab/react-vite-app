import fs from 'fs';
import readline from 'readline';

async function processLineByLine() {
  const fileStream = fs.createReadStream('C:/Users/Dell/.gemini/antigravity/brain/aca3cc68-554a-46e5-9d0b-e03d981e960c/.system_generated/logs/transcript.jsonl');

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

  fs.writeFileSync('./scratch/parsed_aca.txt', output);
  console.log('Parsed successfully');
}

processLineByLine();
