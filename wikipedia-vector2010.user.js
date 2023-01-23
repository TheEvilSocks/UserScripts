// ==UserScript==
// @name         Wikipedia Vector2010 Switcher
// @namespace    https://github.com/TheEvilSocks/UserScripts
// @version      0.1
// @description  Use the Vector2010 skin on Wikipedia, without being forced to create an account.
// @author       TheEvilSocks
// @match        https://*.wikipedia.org/wiki/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org
// @grant        none
// @license      WTFPL
// @credits      https://greasyfork.org/en/scripts/447684-%E6%97%A5%E6%9C%AC%E8%AA%9E%E7%89%88wikipedia%E3%81%AE%E3%82%B9%E3%82%AD%E3%83%B3%E3%82%92%E4%BB%A5%E5%89%8D%E3%81%AE%E3%82%82%E3%81%AE%E3%81%AB%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B/code
// ==/UserScript==

(function () {
    'use strict';
    const url = new URL(window.location.href);

    if (!url.searchParams.has("useskin") && url.hostname.split(".")[0].length == 2) {
        url.searchParams.set("useskin", "vector");
        window.location.replace(url);
    }

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        if (!link.href) return;
        const linkUrl = new URL(link.href);
        if (!linkUrl.hostname.endsWith(".wikipedia.org") || linkUrl.hostname.split(".")[0].length != 2)
            return;
        linkUrl.searchParams.set("useskin", "vector");
        link.href = linkUrl;
    });
})();
