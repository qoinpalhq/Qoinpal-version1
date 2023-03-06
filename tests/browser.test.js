import { test } from "@playwright/test";
// const { chromium } = require('playwright');

test("test browser", async ({ page }) => {
  // point this to wherever you want
  await page.goto("http://127.0.0.1:5173/");

  // keep browser open
  await page.pause();
});



// (async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   // Your code here
//   await browser.close();
// })();



// await page.click('button');



// await page.type('input[name="username"]', 'myusername');


// await page.screenshot({ path: 'example.png' });
