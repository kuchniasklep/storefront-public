var __awaiter=this&&this.__awaiter||function(n,t,e,r){function o(n){return n instanceof e?n:new e((function(t){t(n)}))}return new(e||(e=Promise))((function(e,i){function u(n){try{c(r.next(n))}catch(t){i(t)}}function a(n){try{c(r["throw"](n))}catch(t){i(t)}}function c(n){n.done?e(n.value):o(n.value).then(u,a)}c((r=r.apply(n,t||[])).next())}))};var __generator=this&&this.__generator||function(n,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(n){return function(t){return c([n,t])}}function c(u){if(r)throw new TypeError("Generator is already executing.");while(e)try{if(r=1,o&&(i=u[0]&2?o["return"]:u[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;if(o=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:e.label++;return{value:u[1],done:false};case 5:e.label++;o=u[1];u=[0];continue;case 7:u=e.ops.pop();e.trys.pop();continue;default:if(!(i=e.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){e=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){e.label=u[1];break}if(u[0]===6&&e.label<i[1]){e.label=i[1];i=u;break}if(i&&e.label<i[2]){e.label=i[2];e.ops.push(u);break}if(i[2])e.ops.pop();e.trys.pop();continue}u=t.call(n,e)}catch(a){u=[6,a];o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./fetch-060f4a54.system.js","./commonDynamic-dfad52e4.system.js"],(function(n){"use strict";var t,e;return{setters:[function(n){t=n.j},function(n){e=n.c}],execute:function(){n({C:u,i:o});var r=new AbortController;function o(){var n=e.get("api").inpostFrontend;return t("".concat(n,"/getbinding"),{}).then((function(n){return n.json()}))}window.iziGetPayData=function(n,o,i){var u=e.get("api").inpostFrontend;var a=window.iziGetBrowserData();return t("".concat(u,"/getpaydata"),{browser:a,phonePrefix:n,phoneNumber:o,bindingPlace:i}).then((function(n){return n.json()})).then((function(){return r.abort()}))};function i(n,t,e){if(t===void 0){t=0}if(e===void 0){e=200}return __awaiter(this,void 0,void 0,(function(){var r;var o=this;return __generator(this,(function(i){r=function(i,u,a){return __awaiter(o,void 0,void 0,(function(){var o;return __generator(this,(function(c){switch(c.label){case 0:if(t>0&&a>=t){u();return[2]}return[4,n()];case 1:o=c.sent();if(!o||Object.keys(o).length===0)setTimeout((function(){return r(i,u,a+1)}),e);else i(o);return[2]}}))}))};return[2,new Promise((function(n,t){return r(n,t,0)}))]}))}))}window.iziGetIsBound=function(){var n=e.get("api").inpostFrontend;r.abort();r=new AbortController;var o=function(){return t("".concat(n,"/isbound"),{},r.signal).then((function(n){return n.json()})).catch((function(){return null}))};return i(o,30)};window.iziGetOrderComplete=function(){return Promise.resolve({action:"string",redirect:"string"})};window.iziBindingDelete=function(){var n=e.get("api").inpostFrontend;return t("".concat(n,"/bindingdelete"),{}).then((function(n){return n.json()})).then((function(){return r.abort()}))};function u(n){window.iziCanBeBound(n).then((function(t){return t?window.iziAddToCart(n):null}))}window.iziCanBeBound=function(n){var r=e.get("api").inpostFrontend;return t("".concat(r,"/canbebound"),{product_id:n}).then((function(n){return n.json()}))};window.iziAddToCart=function(n){var r=e.get("api").inpostFrontend;return t("".concat(r,"/addtocart"),{product_id:n}).then((function(n){return n.json()})).then((function(n){return a(n.product_count)}))};window.iziMobileLink=function(){var n=e.get("api").inpostFrontend;return t("".concat(n,"/mobilelink"),{}).then((function(n){return n.json()}))};function a(n){console.log("InpostUpdateCount");var t=new CustomEvent("inpost-update-count",{detail:n});var e=Array.from(document.getElementsByTagName("inpost-izi-button"));e.forEach((function(n){return n.dispatchEvent(t)}))}}}}));