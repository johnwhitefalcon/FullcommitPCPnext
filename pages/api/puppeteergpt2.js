
const puppeteer = require('puppeteer');

export default async function handler(req, res) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:4000/pagegpt2');

  // Set the coordinates to screenshot
  const { x, y, width, height } = { x: 0, y: -50, width: 2000, height: 1080 };

  // Take a screenshot of the specified coordinates
  const data = await page.screenshot({
    path: 'C:/JCtest/disciplinary.png',
    clip: { x, y, width, height }
  });

  await browser.close();
}




