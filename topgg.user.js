// ==UserScript==
// @name         Top.gg voting without ads!
// @version      0.2
// @description  Show the vote button after loading the website, even with adblock on!
// @author       TheEvilSocks
// @match        https://top.gg/bot/*/vote
// @grant        none
// @run-at document-body

// @namespace  https://github.com/TheEvilSocks
// @updateURL   https://raw.githubusercontent.com/TheEvilSocks/UserScripts/master/topgg.user.js
// @downloadURL     https://raw.githubusercontent.com/TheEvilSocks/UserScripts/master/topgg.user.js
// ==/UserScript==

// Hide the add text and show the vote button after they loaded.
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementsByClassName("slider-root")[0].style.display = "block";
        document.getElementById("video-root").style.display = "none";
    }, 10);
});
