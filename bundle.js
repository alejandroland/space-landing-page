!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=()=>'\n        <nav>\n            <a href="#">Home</a>\n            <a href="#">Planets</a>\n            <a href="#">Blog</a>\n            <a href="#">About</a>\n        </nav>\n    ';var o=()=>"\n        <h1>We can understand the universe. That makes us something very special</h1>\n    ";var a=async()=>{try{const e=await fetch("https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos"),t=await e.json();console.log(t);const n=[];for(let e=0;e<4;e++)n.push(t.latest_photos[e].img_src);return n}catch(e){console.log("There was a fetch error: "+e)}};var u=async()=>{const e=await a(),t=document.getElementById("mars-photos"),n=e.map(e=>`<img src="${e}" alt"Mars Photo" />`).join("");return t.innerHTML=n,n};n(0);window.addEventListener("load",u),document.querySelector("header").innerHTML=r(),document.querySelector(".hero").innerHTML=o()}]);