import puppeteer from 'puppeteer-core';

(async () => {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  
  console.log("Launching Edge to inspect live site...");
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: edgePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors']
    });
  } catch (e) {
    const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors']
    });
  }

  const page = await browser.newPage();

  // Listen for HTTP response statuses
  page.on('response', response => {
    const status = response.status();
    if (status >= 400) {
      console.log(`[LIVE HTTP ERROR] Status ${status}: ${response.url()}`);
    }
  });

  // Capture all console logs
  page.on('console', msg => {
    console.log(`[LIVE CONSOLE] ${msg.type().toUpperCase()}: ${msg.text()}`);
  });

  // Capture all page errors
  page.on('pageerror', err => {
    console.error(`[LIVE ERROR]: ${err.toString()}`);
  });

  console.log("Navigating to http://mindful.com.pk/927-2/ (the page URL)...");
  try {
    await page.goto('http://mindful.com.pk/927-2/', { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (e) {
    console.error("Navigation failed:", e.message);
  }

  console.log("Waiting 5 seconds to inspect page DOM...");
  await new Promise(resolve => setTimeout(resolve, 5000));

  await browser.close();
  console.log("Done.");
  process.exit(0);
})();
