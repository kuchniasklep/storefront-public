System.register(["./index-10c04d38.system.js"],(function(n){"use strict";var e,t;return{setters:[function(n){e=n.g;t=n.f}],execute:function(){var r=function(n,e,t){var r=n.get(e);if(!r){n.set(e,[t])}else if(!r.includes(t)){r.push(t)}};var u=function(n,e){var t;return function(){var r=[];for(var u=0;u<arguments.length;u++){r[u]=arguments[u]}if(t){clearTimeout(t)}t=setTimeout((function(){t=0;n.apply(void 0,r)}),e)}};var i=function(n){return!("isConnected"in n)||n.isConnected};var o=u((function(n){for(var e=0,t=n.keys();e<t.length;e++){var r=t[e];n.set(r,n.get(r).filter(i))}}),2e3);var f=function(){if(typeof e!=="function"){return{}}var n=new Map;return{dispose:function(){return n.clear()},get:function(t){var u=e();if(u){r(n,t,u)}},set:function(e){var r=n.get(e);if(r){n.set(e,r.filter(t))}o(n)},reset:function(){n.forEach((function(n){return n.forEach(t)}));o(n)}}};var c=function(n,e){if(e===void 0){e=function(n,e){return n!==e}}var t=new Map(Object.entries(n!==null&&n!==void 0?n:{}));var r={dispose:[],get:[],set:[],reset:[]};var u=function(){t=new Map(Object.entries(n!==null&&n!==void 0?n:{}));r.reset.forEach((function(n){return n()}))};var i=function(){r.dispose.forEach((function(n){return n()}));u()};var o=function(n){r.get.forEach((function(e){return e(n)}));return t.get(n)};var f=function(n,u){var i=t.get(n);if(e(u,i,n)){t.set(n,u);r.set.forEach((function(e){return e(n,u,i)}))}};var c=typeof Proxy==="undefined"?{}:new Proxy(n,{get:function(n,e){return o(e)},ownKeys:function(n){return Array.from(t.keys())},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}},has:function(n,e){return t.has(e)},set:function(n,e,t){f(e,t);return true}});var a=function(n,e){r[n].push(e);return function(){s(r[n],e)}};var v=function(e,t){var r=a("set",(function(n,r){if(n===e){t(r)}}));var u=a("reset",(function(){return t(n[e])}));return function(){r();u()}};var g=function(){var n=[];for(var e=0;e<arguments.length;e++){n[e]=arguments[e]}var t=n.reduce((function(n,e){if(e.set){n.push(a("set",e.set))}if(e.get){n.push(a("get",e.get))}if(e.reset){n.push(a("reset",e.reset))}if(e.dispose){n.push(a("dispose",e.dispose))}return n}),[]);return function(){return t.forEach((function(n){return n()}))}};var p=function(n){var e=t.get(n);r.set.forEach((function(t){return t(n,e,e)}))};return{state:c,get:o,set:f,on:a,onChange:v,use:g,dispose:i,reset:u,forceUpdate:p}};var s=function(n,e){var t=n.indexOf(e);if(t>=0){n[t]=n[n.length-1];n.length--}};var a=n("c",(function(n,e){var t=c(n,e);t.use(f());return t}))}}}));