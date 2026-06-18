import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const pluginDir = 'mindful-website';
const zipName = 'mindful-website.zip';

try {
  console.log('Building React app...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Preparing plugin directory...');
  if (fs.existsSync(pluginDir)) {
    fs.rmSync(pluginDir, { recursive: true, force: true });
  }
  fs.mkdirSync(pluginDir);

  console.log('Copying dist to plugin...');
  fs.cpSync('dist', path.join(pluginDir, 'dist'), { recursive: true });

  console.log('Copying PHP entry to plugin...');
  fs.copyFileSync('mindful-website.php', path.join(pluginDir, 'mindful-website.php'));

  console.log('Zipping plugin using tar...');
  if (fs.existsSync(zipName)) {
    fs.unlinkSync(zipName);
  }
  execSync(`tar -acf ${zipName} ${pluginDir}`);

  console.log('Cleaning up...');
  fs.rmSync(pluginDir, { recursive: true, force: true });

  console.log(`\n========================================`);
  console.log(`SUCCESS: WordPress plugin archive created!`);
  console.log(`File: ${zipName}`);
  console.log(`========================================\n`);
} catch (error) {
  console.error('Packaging failed:', error);
  process.exit(1);
}
