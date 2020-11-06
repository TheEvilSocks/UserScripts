// ==UserScript==
// @name         Top.gg voting without ads!
// @version      0.1
// @description  Trick top.gg into thinking you don't have adblock, by creating a fake ad element.
// @author       TheEvilSocks
// @match        https://top.gg/bot/*/vote
// @grant        none
// @run-at document-body

// @namespace  https://github.com/TheEvilSocks
// @updateURL   https://raw.githubusercontent.com/TheEvilSocks/UserScripts/master/topgg.user.js
// @downloadURL     https://raw.githubusercontent.com/TheEvilSocks/UserScripts/master/topgg.user.js
// ==/UserScript==


// Create a fake ad to trick the site into thinking you don't have adblock.
let fakeAd = document.createElement("span");
fakeAd.id = "ECKckuBYwZaP";
document.body.appendChild(fakeAd);

// Hide the add text and show the vote button after they loaded.
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("vote-root").style.display = null;
    document.getElementById("video-root").style.display = "none";
});
