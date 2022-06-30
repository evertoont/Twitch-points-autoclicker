const introduction = () => {
  console.log("");
  console.log("Hello!");
  console.log(
    "To start enter the name of the channel you want to collect the points chests. Then press Enter and wait for the collection to begin."
  );
  console.log("");
  console.log("Note:");
  console.log(
    "[1] Don't forget to configure your chrome browser directory and twitch credientials in the env.js file"
  );
  console.log(
    '[2] If you see the message "Chest Unavailable" 3 times in a row, restart the script.'
  );
  console.log(
    "[3] Change variable `executablePath` for variable in env.js CHROME_PATH_LINUX or CHROME_PATH_WINDOWS"
  );
  console.log("-----------------------------------------------------");
  console.log("Enter the Twitch channel:");
  console.log("");
};

module.exports = introduction;
