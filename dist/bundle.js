!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=()=>'\n        <nav>\n            <a href="#">Home</a>\n            <a href="#">Planets</a>\n            <a href="#">Blog</a>\n            <a href="#">About</a>\n        </nav>\n    ';var o=()=>"\n        <h1>We can understand the universe. That makes us something very special</h1>\n    ";var a=async()=>{try{const e=await fetch("https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos"),t=await e.json(),r=[];for(let e=0;e<9;e++)r.push(t.latest_photos[e].img_src);return r}catch(e){console.log("There was a fetch error: "+e)}};var u=async()=>{const e=await a(),t=document.getElementById("mars-photos"),r=e.map(e=>`<img src="${e}" alt"Mars Photo" />`).join("");return t.insertAdjacentHTML("beforeend",r),r};r(0);window.addEventListener("load",u),document.querySelector("header").innerHTML=n(),document.querySelector(".hero").innerHTML=o()}]);