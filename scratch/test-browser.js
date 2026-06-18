import puppeteer from 'puppeteer-core';

(async () => {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  
  console.log("Launching Edge...");
  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: edgePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  } catch (e) {
    console.error("Failed to launch Edge, trying Chrome...");
    const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  const page = await browser.newPage();

  // Listen for console logs on the parent page
  page.on('console', msg => {
    console.log(`[PARENT CONSOLE] ${msg.type().toUpperCase()}: ${msg.text()}`);
  });

  // Capture errors on the parent page
  page.on('pageerror', err => {
    console.error(`[PARENT ERROR]: ${err.toString()}`);
  });

  // Capture network failures
  page.on('requestfailed', request => {
    console.error(`[REQUEST FAILED] ${request.url()} - ${request.failure().errorText}`);
  });

  console.log("Navigating to test page...");
  await page.goto('http://localhost:4173/test-iframe.html', { waitUntil: 'load' });

  // Monitor frame console and errors
  page.on('framenavigated', frame => {
    console.log(`Frame navigated: ${frame.url()}`);
  });

  console.log("Waiting 5 seconds for React app to mount and render...");
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Inspect the iframe
  const frames = page.frames();
  console.log(`Total frames detected: ${frames.length}`);
  
  for (const frame of frames) {
    if (frame !== page.mainFrame()) {
      console.log(`Checking iframe: ${frame.url()}`);
      
      // Check for console logs/errors inside the iframe by evaluating code in it
      const frameLogs = await frame.evaluate(() => {
        // We can check if there are any specific errors or elements in the iframe DOM
        const root = document.getElementById('root');
        return {
          rootExists: !!root,
          rootHTML: root ? root.innerHTML.substring(0, 1000) : 'not found',
          bodyHeight: document.body ? document.body.scrollHeight : 0,
          docHeight: document.documentElement ? document.documentElement.scrollHeight : 0,
          windowHeight: window.innerHeight,
          scrollY: window.scrollY
        };
      });
      console.log("Iframe DOM details:", frameLogs);
    }
  }

  // Get parent page iframe height
  const parentIframeHeight = await page.evaluate(() => {
    const iframe = document.getElementById('test-iframe');
    return iframe ? {
      styleHeight: iframe.style.height,
      offsetHeight: iframe.offsetHeight
    } : 'iframe not found';
  });
  console.log("Parent page iframe element dimensions:", parentIframeHeight);

  await browser.close();
  console.log("Done.");
  process.exit(0);
})();
