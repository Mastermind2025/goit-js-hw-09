const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){n=setInterval(o,500)})),e.addEventListener("click",(function(){clearInterval(n)}));let n,o=function(){return document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};
//# sourceMappingURL=01-color-switcher.0dcc315d.js.map
