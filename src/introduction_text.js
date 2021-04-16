const introduction = () => {
    console.log("");
    console.log("Hello!");
    console.log("To start enter the name of the channel you want to collect the points chests. Then press Enter and wait for the collection to begin.");
    console.log("");
    console.log("Note:");
    console.log("[1] Don't forget to configure your chrome browser directory in the src/twitch_collect.js folder");
    console.log("[2] You must be logged into your twitch account for points to be collected.");
    console.log('[3] If you see the message "Chest Unavailable" 3 times in a row, restart the script.');
    console.log("");
}

module.exports = introduction