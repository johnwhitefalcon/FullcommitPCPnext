

const puppeteer = require('puppeteer');

export default async function handler(req, res) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 3000, height: 2000 });
  await page.goto('http://localhost:4000/pagegpt2');


  // Take a screenshot of the specified coordinates
  const data = await page.screenshot({
    path: 'C:/JCtest/disciplinary.png', fullPage: true
  });

  await browser.close();

  res.status(200).send('Screenshot taken successfully');
}



