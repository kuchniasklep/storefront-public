var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function i(t){try{c(r.next(t))}catch(e){a(e)}}function u(t){try{c(r["throw"](t))}catch(e){a(e)}}function c(t){t.done?n(t.value):o(t.value).then(i,u)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,i;return i={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function u(t){return function(e){return c([t,e])}}function c(i){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(a=i[0]&2?o["return"]:i[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;if(o=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;o=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){n.label=i[1];break}if(i[0]===6&&n.label<a[1]){n.label=a[1];a=i;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(i);break}if(a[2])n.ops.pop();n.trys.pop();continue}i=e.call(t,n)}catch(u){i=[6,u];o=0}finally{r=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./tracker-b01d2a0e.system.js","./commonDynamic-e40d9ffc.system.js","./fetch-89de6a18.system.js","./dataLayer-1dbd2dd2.system.js"],(function(t){"use strict";var e,n,r,o;return{setters:[function(t){e=t.e},function(t){n=t.c},function(t){r=t.F},function(t){o=t.D}],execute:function(){t("a",a);function a(t,a){if(a===void 0){a=1}return __awaiter(this,void 0,void 0,(function(){var u,c,s,d,f;var l=this;return __generator(this,(function(p){u=document.querySelector("ks-error-popup");c=document.querySelector("ks-message-popup");s=document.querySelector("ks-navbar");d=new FormData;d.append("id",t.id);d.append("ilosc",t.quantity.toString());d.append("nazwa",t.name);d.append("value",t.currentPrice.toString());d.append("cechy",t.traitIDs);d.append("akcja","dodaj");d.append("miejsce",a.toString());f=n.get("api").addToCart;return[2,r(f,d).then((function(t){return __awaiter(l,void 0,void 0,(function(){return __generator(this,(function(e){return[2,t.json()]}))}))})).then((function(n){return __awaiter(l,void 0,void 0,(function(){return __generator(this,(function(r){if(!n.status){if(n.productLink)c.show("Wymagany wybór cechy",n.message,"Przejdź do produktu",t.link);else c.show("Błąd dodawania produktu",n.message);return[2]}s.IncrementCart(t.quantity.toString());i(t.id,t.name);if(n.event){o.addToCart(t,n.event);e((function(e){return e===null||e===void 0?void 0:e.addToCart(t,n.event)}))}return[2]}))}))})).catch((function(t){u.show(t)}))]}))}))}function i(t,e){var n=document.querySelector("ks-product-suggestions");n.show(t,e)}}}}));