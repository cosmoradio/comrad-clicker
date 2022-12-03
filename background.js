var script = document.createElement("script");
script.src = chrome.extension.getURL('injected.js')
document.querySelector('head').appendChild(script);
//document.querySelector("body").addEventListener('load', injected_main(), false);
document.getElementsByTagName("body")[0].setAttribute("onLoad", "injected_main()");
