import{c as e,a as n}from"./_commonjsHelpers-ba3f0406.js";var t=e((function(e){e.exports=function(){function e(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)e[o]=t[o]}return e}return function n(t,o){function r(n,r,u){if("undefined"!=typeof document){"number"==typeof(u=e({},o,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var i in u)u[i]&&(c+="; "+i,!0!==u[i]&&(c+="="+u[i].split(";")[0]));return document.cookie=n+"="+t.write(r,n)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},r=0;r<n.length;r++){var u=n[r].split("="),c=u.slice(1).join("=");try{var i=decodeURIComponent(u[0]);if(o[i]=t.read(c,i),e===i)break}catch(f){}}return e?o[e]:o}},remove:function(n,t){r(n,"",e({},t,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()}));export{t as j}