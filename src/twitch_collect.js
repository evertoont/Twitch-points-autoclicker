const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");
const introduction = require("./introduction_text");
const ENV = require("../env");

introduction();
let channel = readlineSync.question("https://www.twitch.tv/");
let amountOfCollect = 0;

async function openBrowser() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
    args: ["--disable-extensions"],
    executablePath: ENV.CHROME_PATH_LINUX,
  });

  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);

  await page.goto(`https://www.twitch.tv/${channel}`);
  await page.click("[data-a-target='login-button']");

  page.waitForNavigation();
  await page.waitForSelector("#modal-root-header");

  await page.waitForTimeout(2000);
  await page.type("#login-username", ENV.usernameTwitch);
  await page.waitForTimeout(2000);
  await page.type("#password-input", ENV.passwordTwitch);
  await page.click("[data-a-target='passport-login-button']");

  await page.waitForSelector(
    "[data-a-target='verification-code-input-component-input']"
  );
  let verifyCode = readlineSync.question("Enter verify login code: ");
  await page.type("[inputmode='numeric']", verifyCode);

  page.waitForNavigation();

  await page.waitForTimeout(6000);

  try {
    await page.click("[aria-label='Close modal']");
  } catch (error) {
    console.log(">> No modal close <<");
  }

  await page.waitForTimeout(6000);

  try {
    await page.click("[data-a-target='player-overlay-mature-accept']");
  } catch (error) {
    console.log(">> No mature accept <<");
  }

  startCollect(page);
}

async function startCollect(page) {
  console.log("Waiting to collect...");
  await page.waitForTimeout(10000);
  statusPoints = await collectPoints(page);
  printStatusCollect(statusPoints, page);
}

async function collectPoints(page) {
  {
    return await page.evaluate(async () => {
      return await new Promise((resolve) => {
        setTimeout(() => {
          let chestPoints = document.querySelector(
            ".community-points-summary > *:nth-child(2) button"
          );
          let amountPoints = document.querySelector(
            "[data-test-selector='balance-string']"
          ).innerText;

          if (chestPoints) {
            chestPoints.click();
            resolve([true, amountPoints]);
          } else {
            location.reload();
            resolve([false, amountPoints]);
          }
        }, 960000);
      });
    });
  }
}

function printStatusCollect(statusPoints, page) {
  if (statusPoints[0]) {
    console.log(
      `[${(amountOfCollect += 1)}] Bonus Chest Clicked. ${
        statusPoints[1]
      } points. ` + timeString()
    );
  } else {
    console.log("Chest Unavailable. " + timeString());
  }

  startCollect(page);
}

function timeString() {
  let date = new Date();

  hour = date.getHours();
  minute = date.getMinutes();

  return hour + ":" + minute;
}

openBrowser();
