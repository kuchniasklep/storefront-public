var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function s(t){try{u(r["throw"](t))}catch(t){i(t)}}function u(t){t.done?n(t.value):o(t.value).then(a,s)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(s){if(r)throw new TypeError("Generator is already executing.");while(a&&(a=0,s[0]&&(n=0)),n)try{if(r=1,o&&(i=s[0]&2?o["return"]:s[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;if(o=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;o=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(t){s=[6,t];o=0}finally{r=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./index-56e4ba05.system.js","./product-a739d20e.system.js","./common-34e3f2b7.system.js","./commonDynamic-6d8da335.system.js","./validate-5b0a0e6b.system.js","./index-c9cb740c.system.js"],(function(t){"use strict";var e,n,r,o,i,a,s;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(t){o=t.p},function(t){i=t.c},function(t){a=t.c},function(t){s=t.V},function(){}],execute:function(){var u="ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify .info a{text-decoration:none;color:black;margin:0 5px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";var c=t("ks_product_notify",function(){function t(t){e(this,t);this.resultHeading=undefined;this.resultParagraph=undefined}t.prototype.requestHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n,r,i,u;var c=this;return __generator(this,(function(f){switch(f.label){case 0:e=o.get("strings");n=o.get("id");r=a.get("api").notifyAvailability;t.preventDefault();return[4,s(this.root.querySelector("form"))];case 1:if(!f.sent())return[2];this.dialog.showLoading();i=t.target;u=new FormData(i);u.append("product",n);return[4,fetch(r,{body:u,method:"post"}).then((function(t){return __awaiter(c,void 0,void 0,(function(){return __generator(this,(function(e){return[2,t.json()]}))}))})).then((function(t){return __awaiter(c,void 0,void 0,(function(){var n;return __generator(this,(function(r){n="status"in t&&"heading"in t&&"paragraph"in t;if(!n)throw new Error(e.notifyErrorParagraph);if(t.status=="success")this.dialog.showSuccess(t.heading,t.paragraph);else this.dialog.showFailure(t.heading,t.paragraph);return[2]}))}))})).catch((function(t){return __awaiter(c,void 0,void 0,(function(){var n;return __generator(this,(function(r){n="";if(!window.navigator.onLine)n=e.noInternet;else if(t.message!="")n=t.message;console.log(t.message);this.dialog.showFailure(e.notifyErrorHeading,n);return[2]}))}))}))];case 2:f.sent();return[2]}}))}))};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.dialog.show();return[2]}))}))};t.prototype.componentDidLoad=function(){this.dialog=this.root.querySelector("ks-dialog")};t.prototype.render=function(){var t=this;var e=o.get("strings");return n("ks-dialog",null,n("form",{onSubmit:function(e){return t.requestHandler(e)}},n("fieldset",null,n("div",{class:"info"},n("h3",null,e.notifyHeading),n("p",null,e.notifyParagraph),n("a",{href:"mailto:"+i.get("email")},i.get("email"))," •",n("a",{href:"tel:"+i.get("phone")},i.get("phone"))),n("ks-input-text",{email:true,name:"email",required:true,nomessage:true,placeholder:"E-mail",icon:"mail"}),n("ks-input-check",{checked:true,name:"backorders",nomessage:true,label:e.notifyBackorders}),n("ks-input-check",{name:"zgoda",required:true,nomessage:true,label:e.notifyAgreement}),n("ks-button",{submit:true,name:e.notifyMe}))))};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());c.style=u}}}));
//# sourceMappingURL=ks-product-notify.system.entry.js.map