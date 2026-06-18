import https from 'https';

const url = 'https://mindful.com.pk/';

console.log(`Sending secure GET request to ${url}...`);

const req = https.get(url, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log('HEADERS:', JSON.stringify(res.headers, null, 2));

  let body = '';
  res.on('data', (chunk) => {
    body += chunk;
  });

  res.on('end', () => {
    console.log('BODY LENGTH:', body.length);
    console.log('BODY PREVIEW (first 1000 chars):');
    console.log(body.substring(0, 1000));
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();
