var __awaiter=this&&this.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function a(t){try{c(r.next(t))}catch(n){o(n)}}function u(t){try{c(r["throw"](t))}catch(n){o(n)}}function c(t){t.done?e(t.value):i(t.value).then(a,u)}c((r=r.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(n){return c([t,n])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(e)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:e.label++;return{value:a[1],done:false};case 5:e.label++;i=a[1];a=[0];continue;case 7:a=e.ops.pop();e.trys.pop();continue;default:if(!(o=e.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){e.label=a[1];break}if(a[0]===6&&e.label<o[1]){e.label=o[1];o=a;break}if(o&&e.label<o[2]){e.label=o[2];e.ops.push(a);break}if(o[2])e.ops.pop();e.trys.pop();continue}a=n.call(t,e)}catch(u){a=[6,u];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./fetch-8edb5396.system.js","./commonDynamic-dfad52e4.system.js","./cart-6b90c1a1.system.js","./dataLayer-982eacbe.system.js"],(function(t){"use strict";var n,e,r,i,o;return{setters:[function(t){n=t.f;e=t.j},function(t){r=t.c},function(t){i=t.c},function(t){o=t.D}],execute:function(){t({C:P,a:d,b:_,c:f,d:g,e:b,f:p,g:m,h:s,i:R,j:L,p:h,r:u,s:l,u:B});function a(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:t=B;return[4,C(i.get("api").reload)];case 1:t.apply(void 0,[n.sent(),false]);return[2]}}))}))}function u(t){return __awaiter(this,void 0,void 0,(function(){var n,e,r,a;var u=this;return __generator(this,(function(c){switch(c.label){case 0:e=(n=i.get("products"))===null||n===void 0?void 0:n[t];if(e)o.removeFromCart(e);return[4,C(i.get("api").productRemove,{id:t})];case 1:r=c.sent();if(r){if(r.products.length==0)document.location.reload();else j("Błąd usuwania produktu",r,(function(t){return __awaiter(u,void 0,void 0,(function(){return __generator(this,(function(n){B(t);return[2]}))}))}))}a=document.querySelector('ks-cart-product[ikey="'.concat(t,'"]'));if(a)a.ResetLoading();return[2]}}))}))}var c=new AbortController;function s(t,n){return __awaiter(this,void 0,void 0,(function(){var e;var r=this;return __generator(this,(function(o){switch(o.label){case 0:c.abort();c=new AbortController;return[4,C(i.get("api").productCount,{id:t,ilosc:n.toString()},c.signal)];case 1:e=o.sent();if(e){j("Błąd ilości produktu",e,(function(t){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(n){if("error"in t)D().show("Błąd ilości produktu",t.error.message);else B(t);if("discount"in t==false)v();return[2]}))}))}))}return[2]}}))}))}function d(t){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(e){switch(e.label){case 0:i.set("loadingDeals",true);return[4,C(i.get("api").addDeal,{id:t})];case 1:n=e.sent();i.set("loadingDeals",false);if(!(!n||"error"in n))return[3,2];D().show("Błąd dodawania gratisu",n.error.message);return[2];case 2:return[4,B(n)];case 3:e.sent();e.label=4;case 4:return[2]}}))}))}function f(t){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(e){switch(e.label){case 0:y("ks-cart-select-shipping");y("ks-cart-select-payment");n=B;return[4,C(i.get("api").countryChange,{data:t})];case 1:n.apply(void 0,[e.sent()]);k("ks-cart-select-shipping");k("ks-cart-select-payment");return[2]}}))}))}function l(t){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(e){switch(e.label){case 0:y("ks-cart-select-payment");n=B;return[4,C(i.get("api").shippingChange,{data:t.toString()})];case 1:n.apply(void 0,[e.sent()]);k("ks-cart-select-payment");return[2]}}))}))}function h(t){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(e){switch(e.label){case 0:n=B;return[4,C(i.get("api").paymentChange,{data:t.toString()})];case 1:n.apply(void 0,[e.sent()]);return[2]}}))}))}function p(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:t=B;return[4,C(i.get("api").discountRemove)];case 1:t.apply(void 0,[n.sent()]);v();return[2]}}))}))}function v(){i.set("discount",{})}function g(t){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(e){switch(e.label){case 0:return[4,C(i.get("api").discountCode,{data:t})];case 1:n=e.sent();j("Błąd dodawania kodu",n,(function(t){B(t)}));k("ks-cart-discount-code");return[2]}}))}))}function _(t){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(e){switch(e.label){case 0:return[4,C(i.get("api").discountPoints,{data:t.toString()})];case 1:n=e.sent();w("ks-cart-discount-container ks-cart-heading");B(n);k("ks-cart-discount-points");return[2]}}))}))}function w(t){var n=document.querySelectorAll(t);var e=0;if(n.length==2)e=n[1].getBoundingClientRect().top-n[0].getBoundingClientRect().top;if(e)window.scrollBy(0,-e)}function b(t){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(r){switch(r.label){case 0:n=i.get("api").easyprotectChange;S();return[4,e(n,t).then((function(t){return t.json()})).then((function(t){return B(t)}))];case 1:r.sent();z();return[2]}}))}))}function m(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:e=i.get("api").easyprotectRemove;S();return[4,n(e,{id:t}).then((function(t){return t.json()})).then((function(t){return B(t)}))];case 1:r.sent();z();return[2]}}))}))}function y(t){var n=document.querySelector(t);if(n&&"StartLoading"in n)n.StartLoading()}function k(t){var n=document.querySelector(t);if(n&&"ResetLoading"in n)n.ResetLoading()}function j(t,n,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){if("message"in n){D().show(t,n.message);delete n.message;setTimeout((function(){e(n)}),200)}else e(n);return[2]}))}))}function C(t,e,r){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){S();return[2,n(t,e,r).then((function(t){return t.json()})).then((function(t){z();return t})).catch((function(t){if(t.name!="AbortError"){z();F().show(t)}return{}}))]}))}))}function B(t,n){if(n===void 0){n=true}Object.keys(t).map((function(n){i.set(n,t[n])}));if("discount"in t==false)this.RemoveDiscount();if(n)P(0)}function S(){i.set("loading",i.get("loading")+1)}function z(){i.set("loading",i.get("loading")-1)}function D(){return document.querySelector("ks-message-popup")}function F(){return document.querySelector("ks-error-popup")}function R(){var t=r.get("api").inpostFrontend;return e("".concat(t,"/getbinding"),{}).then((function(t){return t.json()}))}window.iziGetPayData=function(t,n,i){var o=r.get("api").inpostFrontend;var a=window.iziGetBrowserData();return e("".concat(o,"/getpaydata"),{browser:a,phonePrefix:t,phoneNumber:n,bindingPlace:i}).then((function(t){return t.json()}))};function A(t,n,e){if(n===void 0){n=0}if(e===void 0){e=200}return __awaiter(this,void 0,void 0,(function(){var r;var i=this;return __generator(this,(function(o){r=function(o,a,u){return __awaiter(i,void 0,void 0,(function(){var i;return __generator(this,(function(c){switch(c.label){case 0:if(n>0&&u>=n){a();return[2]}return[4,t()];case 1:i=c.sent();if(!i||Object.keys(i).length===0)setTimeout((function(){return r(o,a,u+1)}),e);else o(i);return[2]}}))}))};return[2,new Promise((function(t,n){return r(t,n,0)}))]}))}))}var T=new AbortController;var x=false;function L(){if(x)return;x=true;var t=r.get("api").inpostFrontend;var n=function(){return e("".concat(t,"/detectchanges"),{},T.signal).then((function(t){return t.json()})).then((function(t){if(t.cartUpdated){a()}setTimeout(n,200)}))};setTimeout(n,1500)}window.iziGetIsBound=function(){var t=r.get("api").inpostFrontend;var n=function(){return e("".concat(t,"/isbound"),{}).then((function(t){return t.json()})).catch((function(){return null}))};return A(n,0,1500).then((function(t){if(Object.keys(t).length>0)L();return t}))};window.iziGetOrderComplete=function(){return Promise.resolve({action:"string",redirect:"string"})};window.iziBindingDelete=function(){var t=r.get("api").inpostFrontend;return e("".concat(t,"/bindingdelete"),{}).then((function(t){return t.json()}))};function P(t){window.iziCanBeBound(t).then((function(n){return n?window.iziAddToCart(t):null}))}window.iziCanBeBound=function(t){var n=r.get("api").inpostFrontend;return e("".concat(n,"/canbebound"),{product_id:t}).then((function(t){return t.json()}))};window.iziAddToCart=function(t){var n=r.get("api").inpostFrontend;return e("".concat(n,"/addtocart"),{product_id:t}).then((function(t){return t.json()})).then((function(t){return q(t.product_count)}))};window.iziMobileLink=function(){var t=r.get("api").inpostFrontend;return e("".concat(t,"/mobilelink"),{}).then((function(t){return t.json()}))};function q(t){console.log("InpostUpdateCount");var n=new CustomEvent("inpost-update-count",{detail:t});var e=Array.from(document.getElementsByTagName("inpost-izi-button"));e.forEach((function(t){return t.dispatchEvent(n)}))}}}}));