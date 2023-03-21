var __awaiter=this&&this.__awaiter||function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{c(o.next(e))}catch(t){r(t)}}function s(e){try{c(o["throw"](e))}catch(t){r(t)}}function c(e){e.done?n(e.value):i(e.value).then(a,s)}c((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return c([e,t])}}function c(a){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,i&&(r=a[0]&2?i["return"]:a[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;if(i=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){n.label=a[1];break}if(a[0]===6&&n.label<r[1]){n.label=r[1];r=a;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(a);break}if(r[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(s){a=[6,s];i=0}finally{o=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-229c64eb.system.js","./dataLayer-9ba1a4d0.system.js","./commonDynamic-37d281db.system.js","./index-0ecc4079.system.js","./fetch-89de6a18.system.js"],(function(e){"use strict";var t,n,o,i;return{setters:[function(e){t=e.r;n=e.h;o=e.g},function(e){i=e.D},function(){},function(){},function(){}],execute:function(){var r=e("ks_order_form",function(){function e(e){t(this,e);this.action=undefined;this.method=undefined;this.destination=undefined;this.button=undefined;this.back=undefined;this.loading=false}e.prototype.render=function(){var e=this;return n("form",{action:this.action,method:this.method,enctype:"application/x-www-form-urlencoded",onSubmit:function(t){return e.Submit(t)}},n("slot",null),n("div",{class:"uk-position-relative uk-margin-medium-top"},n("button",{type:"submit",formnovalidate:true,class:"uk-button uk-button-danger uk-width-1-1 ks-text-decorated",style:{padding:"20px",fontSize:"28px",fontWeight:"700"}},n("span",null,this.button)),this.loading?n("div",{class:"uk-overlay uk-light uk-padding-remove uk-position-cover uk-animation-fade",style:{animationDuration:"0.3s",backgroundColor:"#e21334"}},n("div",{"uk-spinner":"ratio: 1.5",class:"uk-position-center"})):null),n("ks-order-form-modal",{back:this.back}))};e.prototype.Submit=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,o,i,r,a,s,c,r,u,l,d;var f=this;return __generator(this,(function(h){switch(h.label){case 0:e.preventDefault();t=this.root.querySelector("form");n=t.querySelectorAll("ks-input-dynamic, ks-input-select-dynamic, ks-input-select, ks-input-text, ks-input-check");o=Number.MAX_VALUE;i=true;r=0;h.label=1;case 1:if(!(r<n.length))return[3,5];a=n[r];if(a.closest("ks-input-dynamic *")!=null)return[3,4];if(a.closest("ks-order-check-section:not([active])")!=null)return[3,4];if(a.closest("ks-order-enable-section:not([active])")!=null)return[3,4];if(a.closest("*[hidden]")!=null)return[3,4];return[4,a.Validate()];case 2:h.sent();return[4,a.IsValid()];case 3:if(!h.sent()){s=a.getBoundingClientRect().top-document.body.getBoundingClientRect().top;if(s<o)o=s;i=false}h.label=4;case 4:r++;return[3,1];case 5:if(!i)return[3,7];c=new Array;for(r=0;r<t.elements.length;r++){u=t.elements[r];if(u.nodeName==="INPUT"&&u.type!="submit"&&u.name!=""){if((u.type=="checkbox"||u.type=="radio")&&!u.checked)continue;c.push("".concat(u.name,"=").concat(encodeURIComponent(u.value.toString())))}else if(u.nodeName==="SELECT"&&u.name!=""){c.push("".concat(u.name,"=").concat(encodeURIComponent(u.value.toString())))}}l=new FormData;l.append("data",c.join("&"));this.loading=true;d=new Headers;d.append("pragma","no-cache");d.append("cache-control","no-cache");return[4,fetch(this.action,{body:l,method:"POST",headers:d,credentials:"same-origin"}).then((function(e){if(!e.ok)throw e.status;else{var n=t.querySelector("input[type=email]");var o=t.querySelector("input[name=biuletyn]");f.track(n===null||n===void 0?void 0:n.value,o===null||o===void 0?void 0:o.checked);window.location.href=f.destination}})).catch((function(e){var t=e;console.log(e);if(!navigator.onLine)t="Brak połączenia z internetem.";else if(Number.isInteger(e))t="Błąd połączenia - ".concat(e);f.ShowPrompt(t)}))];case 6:h.sent();this.loading=false;return[3,8];case 7:if("scrollBehavior"in document.documentElement.style)window.scroll({top:o-100,behavior:"smooth"});else window.scroll(0,o-100);h.label=8;case 8:return[2]}}))}))};e.prototype.track=function(e,t){if(e===void 0){e=""}if(t===void 0){t=false}if(!e||!t)return;var n={email:e,subscriber:true,place:"Zapis do newslettera | Rejestracja Zamówienie"};i.subscribe(n)};e.prototype.ShowPrompt=function(e){var t=this.root.querySelector("ks-order-form-modal");t.setAttribute("message",e);t.Show()};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}())}}}));