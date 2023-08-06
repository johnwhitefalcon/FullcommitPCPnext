
const puppeteer = require('puppeteer');

export default async function handler(req, res) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://localhost:4000/page9');

  // Get the height of the page and calculate the y-coordinate for the top of the bottom half
  const { height } = await page.evaluate(() => ({ height: document.body.scrollHeight }));
  const y = 200;

  // Take a screenshot of the bottom half of the page
  const data = await page.screenshot({
    path: 'C:/JCtest/pup2.png',
    clip: { x: 0, y, width: 800, height: y }
  });


}






