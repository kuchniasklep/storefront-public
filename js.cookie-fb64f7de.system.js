System.register(["./_commonjsHelpers-8ab2ac47.system.js"],(function(e){"use strict";var t,r;return{setters:[function(e){t=e.c;r=e.a}],execute:function(){var n=e("j",t((function(e,t){(function(t,r){e.exports=r()})(r,(function(){function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){e[n]=r[n]}}return e}var t={read:function(e){if(e[0]==='"'){e=e.slice(1,-1)}return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function r(t,n){function o(r,o,i){if(typeof document==="undefined"){return}i=e({},n,i);if(typeof i.expires==="number"){i.expires=new Date(Date.now()+i.expires*864e5)}if(i.expires){i.expires=i.expires.toUTCString()}r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i){if(!i[u]){continue}c+="; "+u;if(i[u]===true){continue}c+="="+i[u].split(";")[0]}return document.cookie=r+"="+t.write(o,r)+c}function i(e){if(typeof document==="undefined"||arguments.length&&!e){return}var r=document.cookie?document.cookie.split("; "):[];var n={};for(var o=0;o<r.length;o++){var i=r[o].split("=");var c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);n[u]=t.read(c,u);if(e===u){break}}catch(a){}}return e?n[e]:n}return Object.create({set:o,get:i,remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(t){return r(this.converter,e({},this.attributes,t))},withConverter:function(t){return r(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}var n=r(t,{path:"/"});return n}))})))}}}));