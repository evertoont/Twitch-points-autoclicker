const CHROME_PATH = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
const PROFILE_PATH = `${process.env['USERPROFILE']}\\AppData\\Local\\Google\\Chrome\\User Data`;

const puppeteer = require("puppeteer-core");
const readlineSync = require("readline-sync");

let channel = readlineSync.question("https://www.twitch.tv/");

async function openBrowser() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    executablePath: CHROME_PATH,
    userDataDir: PROFILE_PATH,
    args: ["--disable-extensions"],
  });

  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);
  await page.goto(`https://www.twitch.tv/${channel}`);

}

openBrowser()