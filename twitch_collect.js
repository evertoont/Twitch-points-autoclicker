const CHROME_PATH = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
const PROFILE_PATH = `${process.env["USERPROFILE"]}\\AppData\\Local\\Google\\Chrome\\User Data`;

const puppeteer = require("puppeteer-core");
const readlineSync = require("readline-sync");

let channel = readlineSync.question("https://www.twitch.tv/");
let amountOfCollect = 0;

async function openBrowser() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    executablePath: CHROME_PATH,
    userDataDir: PROFILE_PATH,
    args: ["--disable-extensions"],
  });

  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);
  await page.goto(`https://www.twitch.tv/${channel}`);

  console.log("Waiting to collect...");

  collectPoints(page);
}

async function collectPoints(page) {
  setInterval(() => {
    page.evaluate(() => {
      let chestPoints = document.querySelector(
        ".community-points-summary .tw-z-above button.tw-button"
      );
      chestPoints.click();
    });

    console.log(`[${amountOfCollect += 1}] Bonus Chest Clicked. ` + timeString());
  }, 960000);
}

function timeString() {
  let date = new Date();

  hour = date.getHours();
  minute = date.getMinutes();

  return hour + ":" + minute;
}

openBrowser();
