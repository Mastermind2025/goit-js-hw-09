const t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){e=setInterval(o,700)})),n.addEventListener("click",(function(){clearInterval(e)}));let e=null,o=function(){return document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};
//# sourceMappingURL=01-color-switcher.e00a9c62.js.map
