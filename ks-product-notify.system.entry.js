var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{s(r.next(t))}catch(e){i(e)}}function u(t){try{s(r["throw"](t))}catch(e){i(e)}}function s(t){t.done?n(t.value):o(t.value).then(a,u)}s((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(u){a=[6,u];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-0660128e.system.js","./product-d1927a5f.system.js","./common-0ccf6d0a.system.js","./commonDynamic-40a181cb.system.js","./validate-347c285d.system.js","./index-af3dd464.system.js"],(function(t){"use strict";var e,n,r,o,i,a,u;return{setters:[function(t){e=t.r;n=t.h;r=t.c},function(t){o=t.p},function(t){i=t.c},function(t){a=t.c},function(t){u=t.V},function(){}],execute:function(){var s="ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify .info a{text-decoration:none;color:black;margin:0 5px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";var c=t("ks_product_notify",function(){function t(t){e(this,t)}t.prototype.requestHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n,r,i,s;var c=this;return __generator(this,(function(l){switch(l.label){case 0:e=o.get("notifyStrings");n=o.get("id");r=a.get("api").notifyAvailability;t.preventDefault();return[4,u(this.root.querySelector("form"))];case 1:if(!l.sent())return[2];this.dialog.showLoading();i=t.target;s=new FormData(i);s.append("product",n);return[4,fetch(r,{body:s,method:"post"}).then((function(t){return __awaiter(c,void 0,void 0,(function(){return __generator(this,(function(e){return[2,t.json()]}))}))})).then((function(t){return __awaiter(c,void 0,void 0,(function(){var n;return __generator(this,(function(r){n="status"in t&&"heading"in t&&"paragraph"in t;if(!n)throw new Error(e.errorParagraph);if(t.status=="success")this.dialog.showSuccess(t.heading,t.paragraph);else this.dialog.showFailure(t.heading,t.paragraph);return[2]}))}))})).catch((function(t){return __awaiter(c,void 0,void 0,(function(){var n;return __generator(this,(function(r){n="";if(!window.navigator.onLine)n="Brak internetu.";else if(t.message!="")n=t.message;console.log(t.message);this.dialog.showFailure(e.errorHeading,n);return[2]}))}))}))];case 2:l.sent();return[2]}}))}))};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.dialog.show();return[2]}))}))};t.prototype.componentDidLoad=function(){this.dialog=this.root.querySelector("ks-dialog")};t.prototype.render=function(){var t=this;var e=o.get("notifyStrings");return n("ks-dialog",null,n("form",{onSubmit:function(e){return t.requestHandler(e)}},n("fieldset",null,n("div",{class:"info"},n("h3",null,e.heading),n("p",null,e.paragraph),n("a",{href:"mailto:"+i.get("email")},i.get("email"))," •",n("a",{href:"tel:"+i.get("phone")},i.get("phone"))),n("ks-input-text",{email:true,name:"email",required:true,nomessage:true,placeholder:"E-mail",icon:"mail"}),n("ks-input-check",{checked:true,name:"backorders",nomessage:true,label:e.backorders}),n("ks-input-check",{name:"zgoda",required:true,nomessage:true,label:e.agreement}),n("ks-button",{submit:true,name:"POWIADOM MNIE"}))))};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());c.style=s}}}));