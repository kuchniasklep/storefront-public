var __awaiter=this&&this.__awaiter||function(t,n,e,i){function o(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,r){function a(t){try{u(i.next(t))}catch(n){r(n)}}function s(t){try{u(i["throw"](t))}catch(n){r(n)}}function u(t){t.done?e(t.value):o(t.value).then(a,s)}u((i=i.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,o,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(n){return u([t,n])}}function u(a){if(i)throw new TypeError("Generator is already executing.");while(e)try{if(i=1,o&&(r=a[0]&2?o["return"]:a[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;if(o=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:e.label++;return{value:a[1],done:false};case 5:e.label++;o=a[1];a=[0];continue;case 7:a=e.ops.pop();e.trys.pop();continue;default:if(!(r=e.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){e.label=a[1];break}if(a[0]===6&&e.label<r[1]){e.label=r[1];r=a;break}if(r&&e.label<r[2]){e.label=r[2];e.ops.push(a);break}if(r[2])e.ops.pop();e.trys.pop();continue}a=n.call(t,e)}catch(s){a=[6,s];o=0}finally{i=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-10c04d38.system.js","./inpost-pay-ac4e81c6.system.js","./fetch-8edb5396.system.js","./commonDynamic-dfad52e4.system.js","./index-afb1cee9.system.js","./cart-6b90c1a1.system.js","./dataLayer-982eacbe.system.js"],(function(t){"use strict";var n,e,i,o;return{setters:[function(t){n=t.r;e=t.h},function(t){i=t.i;o=t.j},function(){},function(){},function(){},function(){},function(){}],execute:function(){var r="ks-inpost-pay{display:block}ks-inpost-pay inpost-izi-button>*{width:100% !important}";var a=t("ks_inpost_pay",function(){function t(t){n(this,t);this.binding_place="BASKET_SUMMARY";this.product_card=undefined;this.order_create=undefined;this.basket_popup=undefined;this.product="";this.count=undefined;this.data=undefined}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(n){i().then((function(n){t.data=n;if(t.data.hasOwnProperty("client_details"))o()}));return[2]}))}))};t.prototype.componentDidLoad=function(){window.handleInpostIziButtons()};t.prototype.componentDidUpdate=function(){window.handleInpostIziButtons()};t.prototype.render=function(){var t,n,i,o;var r=(n=(t=this.data)===null||t===void 0?void 0:t.client_details)===null||n===void 0?void 0:n.masked_phone_number;var a=(o=(i=this.data)===null||i===void 0?void 0:i.client_details)===null||o===void 0?void 0:o.name;return e("inpost-izi-button",{"data-product-id":this.product,count:this.count,name:a,masked_phone_number:r,language:"pl",variant:"secondary",basket:this.binding_place=="BASKET_SUMMARY",dark_mode:"true",binding_place:this.binding_place})};return t}());a.style=r}}}));