var __awaiter=this&&this.__awaiter||function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r["throw"](e))}catch(t){i(t)}}function c(e){e.done?n(e.value):o(e.value).then(a,u)}c((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(t){return c([e,t])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(u){a=[6,u];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./tracker-dbb87cd8.system.js","./commonDynamic-ae951e05.system.js","./fetch-7c249dbd.system.js"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.e},function(e){n=e.c},function(e){r=e.F}],execute:function(){e("a",o);function o(e,o,a,u,c,s,f){if(c===void 0){c=""}if(s===void 0){s=1}if(f===void 0){f=""}return __awaiter(this,void 0,void 0,(function(){var d,l,p,h,v;var y=this;return __generator(this,(function(w){d=document.querySelector("ks-error-popup");l=document.querySelector("ks-message-popup");p=document.querySelector("ks-navbar");h=new FormData;h.append("id",e);h.append("ilosc",o.toString());h.append("nazwa",a);h.append("value",u.toString());h.append("cechy",c);h.append("akcja","dodaj");h.append("miejsce",s.toString());v=n.get("api").addToCart;return[2,r(v,h).then((function(e){return __awaiter(y,void 0,void 0,(function(){return __generator(this,(function(t){return[2,e.json()]}))}))})).then((function(n){return __awaiter(y,void 0,void 0,(function(){return __generator(this,(function(r){if(!n.status){if(n.productLink)l.show("Wymagany wybór cechy",n.message,"Przejdź do produktu",f);else l.show("Błąd dodawania produktu",n.message);return[2]}p.IncrementCart(o.toString());i(e,a);if(n.event)t((function(t){return t===null||t===void 0?void 0:t.addToCart(n.event,e,a,u,1,"PLN")}));return[2]}))}))})).catch((function(e){d.show(e)}))]}))}))}function i(e,t){var n=document.querySelector("ks-product-suggestions");n.show(e,t)}}}}));