import 'dotenv/config'; // To use our .env
const puppeteer = require('puppeteer-extra');
import fs from 'fs';
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
import moment from 'moment';

puppeteer.use(StealthPlugin());

const HomeDepotFunctions = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath:
      'C:/Program Files/BraveSoftware/Brave-Browser-Beta/Application/brave.exe',
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page
    .goto(process.env.HOME_DEPOT, { waitUntil: 'load' })
    .then(async () => {
      const elOne = await page.$(process.env.CATEGORIES_HD);
      if (!fs.existsSync('./deals/homedepot.png')) {
        await elOne.screenshot({ path: `./deals/homedepot.png` });
        await page.close();
        await browser.close();
      } else {
        fs.rm('./deals/homedepot.png', async (err: any) => {
          if (err) throw err;

          await elOne.screenshot({ path: `./deals/homedepot.png` });
          await page.close();
          await browser.close();
        });
      }
    });
};
const LowesFunctions = async () => {
  const browser2 = await puppeteer.launch({
    headless: true,
    executablePath:
      'C:/Program Files/BraveSoftware/Brave-Browser-Beta/Application/brave.exe',
  });
  const pg2 = await browser2.newPage();
  await pg2.setViewport({ width: 1920, height: 1080 });
  await pg2.goto(process.env.LOWES, { waitUntil: 'load' }).then(async () => {
    const el2 = await pg2.$(process.env.CATEGORIES_LOWES);
    if (!fs.existsSync('./deals/lowes.png')) {
      await el2.screenshot({ path: `./deals/lowes.png` });
      await pg2.close();
      await browser2.close();
    } else {
      fs.rm('./deals/lowes.png', async (err: any) => {
        if (err) throw err;

        await el2.screenshot({ path: `./deals/lowes.png` });
        await pg2.close();
        await browser2.close();
      });
    }
  });
};

async function main() {
  setInterval(async () => {
    if (moment().format('HH') === '00') {
      await HomeDepotFunctions();
      await LowesFunctions();
    } else {
      console.log('Not time to run');
    }
  }, 60000);
}
main();
