var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function u(t){try{c(r["throw"](t))}catch(e){i(e)}}function c(t){t.done?n(t.value):o(t.value).then(a,u)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return c([t,e])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(u){a=[6,u];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./tracker-dbb87cd8.system.js","./commonDynamic-d55a0d0e.system.js","./fetch-7c249dbd.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.e},function(t){n=t.c},function(t){r=t.F}],execute:function(){t("a",o);function o(t,o){if(o===void 0){o=1}return __awaiter(this,void 0,void 0,(function(){var a,u,c,s,d;var f=this;return __generator(this,(function(l){a=document.querySelector("ks-error-popup");u=document.querySelector("ks-message-popup");c=document.querySelector("ks-navbar");s=new FormData;s.append("id",t.id);s.append("ilosc",t.quantity.toString());s.append("nazwa",t.name);s.append("value",t.currentPrice.toString());s.append("cechy",t.traitIDs);s.append("akcja","dodaj");s.append("miejsce",o.toString());d=n.get("api").addToCart;return[2,r(d,s).then((function(t){return __awaiter(f,void 0,void 0,(function(){return __generator(this,(function(e){return[2,t.json()]}))}))})).then((function(n){return __awaiter(f,void 0,void 0,(function(){return __generator(this,(function(r){if(!n.status){if(n.productLink)u.show("Wymagany wybór cechy",n.message,"Przejdź do produktu",t.link);else u.show("Błąd dodawania produktu",n.message);return[2]}c.IncrementCart(t.quantity.toString());i(t.id,t.name);if(n.event)e((function(e){return e===null||e===void 0?void 0:e.addToCart(t,n.event)}));return[2]}))}))})).catch((function(t){a.show(t)}))]}))}))}function i(t,e){var n=document.querySelector("ks-product-suggestions");n.show(t,e)}}}}));