import fs from 'fs';
import path from 'path';
import readline from 'readline';

const brainDir = 'C:/Users/Dell/.gemini/antigravity/brain';

async function searchTranscripts() {
  const dirs = fs.readdirSync(brainDir).filter(f => fs.statSync(path.join(brainDir, f)).isDirectory() && f !== 'tempmediaStorage');
  
  console.log(`Found ${dirs.length} conversation folders. Searching...`);

  for (const dir of dirs) {
    const transcriptPath = path.join(brainDir, dir, '.system_generated', 'logs', 'transcript.jsonl');
    if (!fs.existsSync(transcriptPath)) continue;

    const fileStream = fs.createReadStream(transcriptPath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    let stepIndex = 0;
    for await (const line of rl) {
      stepIndex++;
      try {
        const obj = JSON.parse(line);
        const content = obj.content || '';
        const lowerContent = content.toLowerCase();
        
        // Search keywords
        if (
          lowerContent.includes('sticker') ||
          lowerContent.includes('animations') ||
          lowerContent.includes('isstickyvisible')
        ) {
          if (obj.type === 'USER_INPUT') {
            console.log(`[Folder ${dir}] Step ${obj.step_index} (USER): ${content.substring(0, 300)}...\n`);
          } else if (obj.type === 'PLANNER_RESPONSE') {
            console.log(`[Folder ${dir}] Step ${obj.step_index} (ASSISTANT): ${content.substring(0, 300)}...\n`);
          }
        }
      } catch (e) {
        // ignore
      }
    }
  }
  console.log('Search complete');
}

searchTranscripts();
