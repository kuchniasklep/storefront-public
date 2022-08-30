var __awaiter=this&&this.__awaiter||function(t,e,o,n){function i(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,r){function a(t){try{l(n.next(t))}catch(e){r(e)}}function s(t){try{l(n["throw"](t))}catch(e){r(e)}}function l(t){t.done?o(t.value):i(t.value).then(a,s)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var o={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(a){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,i&&(r=a[0]&2?i["return"]:a[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;if(i=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;i=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(r=o.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(a[0]===6&&o.label<r[1]){o.label=r[1];r=a;break}if(r&&o.label<r[2]){o.label=r[2];o.ops.push(a);break}if(r[2])o.ops.pop();o.trys.pop();continue}a=e.call(t,o)}catch(s){a=[6,s];i=0}finally{n=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-9d88b83b.system.js","./core-class-0c9894c5.system.js","./pagination-e2e00ef9.system.js","./thumbs-351964c8.system.js","./productDynamic-3877b2af.system.js","./product-d7d84e39.system.js","./fetch-7c249dbd.system.js","./common-098bffa5.system.js","./commonDynamic-d55a0d0e.system.js","./validate-347c285d.system.js","./index-901f8c50.system.js"],(function(t){"use strict";var e,o,n,i,r,a,s,l,d,c,u,p,f;return{setters:[function(t){e=t.r;o=t.h;n=t.g;i=t.e},function(t){r=t.S},function(t){a=t.P},function(t){s=t.T},function(t){l=t.p},function(t){d=t.p},function(t){c=t.F},function(t){u=t.c},function(t){p=t.c},function(t){f=t.V},function(){}],execute:function(){var h="ks-lightbox{display:block}ks-lightbox .content{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;padding:10px;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-lightbox .close{position:absolute;top:15px;right:15px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color);border-radius:100%;padding:5px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;z-index:1000000;transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;-webkit-transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease,\n                -webkit-transform 0.1s ease}ks-lightbox .close:hover{background-color:var(--lightbox-element-color-hover);-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05)}ks-lightbox .close:active{background-color:var(--lightbox-element-color-active);-webkit-transform:scale(0.95, 0.95);transform:scale(0.95, 0.95)}ks-lightbox .lightbox-full{width:100%;-ms-flex:1;flex:1}ks-lightbox .lightbox-thumb{margin-top:10px;width:100%}ks-lightbox .lightbox-thumb .swiper-slide{height:70px;width:70px;overflow:hidden;opacity:0.6;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-lightbox .lightbox-thumb .swiper-slide:hover{opacity:0.8}ks-lightbox .lightbox-thumb .swiper-slide-thumb-active{opacity:1 !important}ks-lightbox .swiper-pagination{display:none}ks-lightbox .swiper-pagination{bottom:0px !important;padding:5px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color)}ks-lightbox .swiper-pagination-bullet{background-color:#ffffff}ks-lightbox .swiper-pagination-bullet-active{background-color:#ffffff}@media only screen and (max-width: 720px){ks-lightbox .content{padding:0}ks-lightbox .swiper-pagination{display:block}ks-lightbox .lightbox-thumb{display:none !important}ks-lightbox .lightbox-full .swiper-slide ks-img img{border-radius:0px}}";r.use([a,s]);var b=t("ks_lightbox",function(){function t(t){e(this,t)}t.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};t.prototype.show=function(t){if(t===void 0){t=0}return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(o){this.overlay.show().then((function(){var o;if(e.carousel==undefined){e.thumbs=new r(".lightbox-thumb",{observer:true,observeParents:true,grabCursor:true,slidesPerView:"auto",centerInsufficientSlides:true,watchSlidesVisibility:true,watchSlidesProgress:true,spaceBetween:10,resistanceRatio:.7});e.carousel=new r(".lightbox-full",{observer:true,observeParents:true,centeredSlides:true,slidesPerView:"auto",spaceBetween:20,preventInteractionOnTransition:true,thumbs:{swiper:e.thumbs},pagination:{el:".swiper-pagination"}})}(o=e.carousel)===null||o===void 0?void 0:o.slideTo(t,0,false)}));return[2]}))}))};t.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.overlay.hide();return[2]}))}))};t.prototype.render=function(){var t=this;return o("ks-overlay",{dark:true},o("div",{class:"content"},o("div",{class:"swiper-container lightbox-full"},o("div",{class:"swiper-wrapper"},this.data.map((function(t){return o("div",{class:"swiper-slide"},o("ks-img",{contained:true,center:true,target:".lightbox-full",src:t.full.url,width:t.full.width,height:t.full.height}))}))),o("div",{class:"swiper-pagination"})),o("div",{class:"swiper-container lightbox-thumb"},o("div",{class:"swiper-wrapper"},this.data.map((function(t){return o("div",{class:"swiper-slide"},o("ks-img",{contained:true,center:true,src:t.thumb.url,width:t.thumb.width,height:t.thumb.height}))}))))),o("div",{class:"close",onClick:function(){return t.overlay.hide()}},o("ks-icon",{name:"x",size:1.2})))};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());b.style=h;var m="ks-product-admin{display:none}ks-product-admin[enabled]{display:block}ks-product-admin .bar{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;background-color:#181818;color:white}ks-product-admin .set .bar{background-color:#353535}ks-product-admin .bar>div{-ms-flex:0 1 auto;flex:0 1 auto;white-space:nowrap}ks-product-admin .bar>div:not(.links).name{-ms-flex:1 1 auto;flex:1 1 auto;width:100%;overflow:hidden;text-overflow:ellipsis}ks-product-admin .bar>div:not(.links){padding:17px}ks-product-admin .bar>.links{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex:1;flex:1}ks-product-admin .bar>.links .button{display:block;padding:17px;color:white;background-color:#252525;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;border-style:none;outline-style:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-product-admin .bar>.links .button:hover{color:white;background-color:#353535}ks-product-admin .bar>.links .button:active{color:white;background-color:#454545}ks-product-admin .bar>.links .button:nth-child(2n){background-color:#303030}ks-product-admin .bar>.links .button:nth-child(2n):hover{background-color:#404040}ks-product-admin .bar>.links .button:nth-child(2n):active{background-color:#505050}ks-product-admin .distributors{display:table;background-color:#000000;color:#ffffff;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}ks-product-admin .distributors[hidden]{display:none !important;visibility:hidden !important}ks-product-admin .distributors th{font-weight:700;font-size:15.5px !important;font-family:var(--font-emphasis);border-bottom:2px solid #181818;border-right:2px solid #181818}ks-product-admin .distributors td{font-weight:500;font-size:14px;border-right:2px solid #181818}ks-product-admin .distributors th,ks-product-admin .distributors td{text-align:center;padding:8px 20px}ks-product-admin .distributors th:first-child,ks-product-admin .distributors td:first-child{text-align:left}ks-product-admin .distributors *:last-child td{padding:8px 20px 14px 20px}ks-product-admin td.overwrite{color:var(--color-secondary)}@media only screen and (max-width: 640px) and (min-width: 340px){ks-product-admin .bar{font-size:14px}ks-product-admin .bar>div:not(.links){padding:17px 10px}}@media only screen and (max-width: 420px){ks-product-admin .bar{font-size:12px}ks-product-admin .bar>div:not(.links){padding:17px 8px}ks-product-admin .bar .hide-mobile{display:none !important}}@media only screen and (max-width: 960px){ks-product-admin .bar>.links button{display:none !important}ks-product-admin .distributors{display:none !important;visibility:hidden !important}}";var k=t("ks_product_admin",function(){function t(t){e(this,t);this.expanded=false;this.enabled=false}t.prototype.render=function(){var t=this;var e;var n=l.get("adminBar");this.enabled=!!l.get("loaded")&&!!Object.keys(n).length;if(!this.enabled)return null;var i=((e=n===null||n===void 0?void 0:n.set)===null||e===void 0?void 0:e.length)>0;return[o("div",{class:"bar"},this.currentSettings(n),o("div",{class:"links"},o("a",{class:"button",href:n.link},o("ks-icon",{name:"edit"})),this.hasDistributors(n)||i?o("button",{class:"button",onClick:function(){return t.expanded=!t.expanded}},o("ks-icon",{name:this.expanded?"chevron-up":"chevron-down"})):null)),i?o("div",{class:"set",hidden:!this.expanded},n.set.map((function(e){return[o("div",{class:"bar"},o("div",{class:"name"},e.name),t.currentSettings(e),o("div",{class:"links"},o("a",{class:"button",href:e.link},o("ks-icon",{name:"edit"})))),t.distributors(e)]}))):null,this.distributors(n)]};t.prototype.hasDistributors=function(t){var e;return((e=t===null||t===void 0?void 0:t.distributors)===null||e===void 0?void 0:e.length)>0};t.prototype.distributors=function(t){var e;return this.hasDistributors(t)?o("div",{class:"distributors",hidden:!this.expanded},o("tr",null,o("th",null,"Dystrybutor"),o("th",null,"Czas wysyłki"),o("th",null,"Stan zewnętrzny"),o("th",null,"Tryb niedostępności"),o("th",null,"Komunikaty")),(e=t===null||t===void 0?void 0:t.distributors)===null||e===void 0?void 0:e.map((function(t){return o("tr",{class:t.overwrite&&"overwrite"},o("td",null,t.name),o("td",null,t.time),o("td",null,t.quantity),o("td",null,t.unavailableMode),o("td",null,t.warning))}))):null};t.prototype.currentSettings=function(t){return[o("div",null,o("ks-icon",{name:"home"})," ",t.homeQuantity),t.externalQuantity!=""?o("div",null,o("ks-icon",{name:"truck"})," ",t.externalQuantity):null,t.availability!=""?o("div",null,o("ks-icon",{class:"hide-mobile",name:"x-octagon"})," ",t.availability):null,t.overwrite?o("div",null,o("ks-icon",{class:"hide-mobile",name:"alert-octagon"})," Nadpisany"):null]};return t}());k.style=m;var g="ks-product-brand{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;right:0;left:0}ks-product-brand>a{display:block;max-width:150px;height:60px;transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;-webkit-transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease,\n                -webkit-transform 0.3s ease}ks-product-brand>a:hover{opacity:0.8}ks-product-brand>a:active{opacity:0.5;-webkit-transform:scale(0.95);transform:scale(0.95)}ks-product-brand img{width:unset !important}@media (max-width: 960px){ks-product-brand{-ms-flex-pack:center;justify-content:center}}";var x=t("ks_product_brand",function(){function t(t){e(this,t)}t.prototype.render=function(){var t=d.get("brand");if(!t)return null;return o("a",{href:t.link},o("ks-img2",{src:t.logo,alt:t.name,width:t.width,height:t.height}))};return t}());x.style=g;var v="ks-product-history>ks-product-attribute{cursor:pointer}ks-product-history .history{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ks-product-history h3{margin-top:5px}ks-product-history .list{overflow-y:auto;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-product-history .list>*{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}ks-product-history .list>*>span:first-child{margin-right:30px}ks-product-history .list>*>span:last-child{margin-right:10px;font-weight:600}";var y=t("ks_product_history",function(){function t(t){e(this,t);this.data=null}t.prototype.componentDidRender=function(){this.panel=this.root.querySelector("ks-sidepanel")};t.prototype.open=function(){var t=this;this.panel.show();var e=new FormData;e.append("id",this.productId);c(this.api,e).then((function(t){return t.json()})).then((function(e){return t.data=e}))};t.prototype.render=function(){var t=this;if(!this.name)return;return[o("ks-product-attribute",{icon:"calendar",faded:true,onClick:function(){return t.open()}},this.name),o("ks-sidepanel",{left:true},o("div",{class:"history"},o("h3",null,this.name),this.data!==null?o("div",{class:"list"},this.data.map((function(t){return o("div",{class:"entry"},o("span",null,t.date),o("span",null,t.price))}))):o("ks-loader",{dark:true,large:true})))]};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());y.style=v;var w="ks-product-installments{display:block;position:relative}ks-product-installments>.arrow{display:none;position:absolute;bottom:-5px;left:50%;-webkit-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-installments>.content{display:none;position:absolute;top:55px;width:100%;z-index:10;background-color:var(--color-dark);border-radius:20px;overflow:hidden}ks-product-installments[active]>.arrow{display:block}ks-product-installments[active]>.content{display:block}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]{background-color:#222222}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:hover{background-color:#2e2e2e}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:active{background-color:#3a3a3a}";var _=t("ks_product_installments",function(){function t(t){e(this,t);this.name="";this.active=false}t.prototype.clickOutside=function(t){var e=t.target;if(!e.closest("ks-product-installments"))this.active=false;return e};t.prototype.render=function(){var t=this;return[o("ks-product-button",{onClick:function(){return t.active=!t.active}},this.name),o("div",{class:"arrow"}),o("div",{class:"content"},o("slot",null))]};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());_.style=w;var z="ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify .info a{text-decoration:none;color:black;margin:0 5px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";var j=t("ks_product_notify",function(){function t(t){e(this,t)}t.prototype.requestHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,o,n,i,r;var a=this;return __generator(this,(function(s){switch(s.label){case 0:e=d.get("notifyStrings");o=d.get("id");n=p.get("api").notifyAvailability;t.preventDefault();return[4,f(this.root.querySelector("form"))];case 1:if(!s.sent())return[2];this.dialog.showLoading();i=t.target;r=new FormData(i);r.append("product",o);return[4,fetch(n,{body:r,method:"post"}).then((function(t){return __awaiter(a,void 0,void 0,(function(){return __generator(this,(function(e){return[2,t.json()]}))}))})).then((function(t){return __awaiter(a,void 0,void 0,(function(){var o;return __generator(this,(function(n){o="status"in t&&"heading"in t&&"paragraph"in t;if(!o)throw new Error(e.errorParagraph);if(t.status=="success")this.dialog.showSuccess(t.heading,t.paragraph);else this.dialog.showFailure(t.heading,t.paragraph);return[2]}))}))})).catch((function(t){return __awaiter(a,void 0,void 0,(function(){var o;return __generator(this,(function(n){o="";if(!window.navigator.onLine)o="Brak internetu.";else if(t.message!="")o=t.message;console.log(t.message);this.dialog.showFailure(e.errorHeading,o);return[2]}))}))}))];case 2:s.sent();return[2]}}))}))};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.dialog.show();return[2]}))}))};t.prototype.componentDidLoad=function(){this.dialog=this.root.querySelector("ks-dialog")};t.prototype.render=function(){var t=this;var e=d.get("notifyStrings");return o("ks-dialog",null,o("form",{onSubmit:function(e){return t.requestHandler(e)}},o("fieldset",null,o("div",{class:"info"},o("h3",null,e.heading),o("p",null,e.paragraph),o("a",{href:"mailto:"+u.get("email")},u.get("email"))," •",o("a",{href:"tel:"+u.get("phone")},u.get("phone"))),o("ks-input-text",{email:true,name:"email",required:true,nomessage:true,placeholder:"E-mail",icon:"mail"}),o("ks-input-check",{checked:true,name:"backorders",nomessage:true,label:e.backorders}),o("ks-input-check",{name:"zgoda",required:true,nomessage:true,label:e.agreement}),o("ks-button",{submit:true,name:"POWIADOM MNIE"}))))};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());j.style=z;var S="ks-product-purchase{display:-ms-flexbox;display:flex;margin:10px 0 15px 0;width:100%}ks-product-purchase>button{position:relative;overflow:hidden;border-style:none;outline-style:none;border-radius:50px;margin-right:10px;background-color:var(--color-secondary);color:var(--text-color-secondary);font-family:var(--product-price-font);font-size:18px;font-weight:700;-webkit-transition:var(--transition-background-color),\n                var(--transition-color);transition:var(--transition-background-color),\n                var(--transition-color)}ks-product-purchase button:hover{background-color:var(--color-secondary-hover)}ks-product-purchase button:active{background-color:var(--color-secondary-active)}ks-product-purchase button.disabled{background-color:#e4e4e4;color:var(--text-color-faded);font-size:17px;line-height:17px}ks-product-purchase button.disabled:hover{background-color:#cfcfcf}ks-product-purchase button.disabled:active{background-color:#bdbdbd}@media only screen and (max-width: 1200px){ks-product-purchase button{font-family:var(--product-price-font);font-size:var(--product-price-size-small);line-height:var(--product-price-size-small)}}@media only screen and (max-width: 960px){ks-product-purchase{-ms-flex-pack:center;justify-content:center;margin-top:10px;max-width:400px}ks-product-purchase>button.fav{-ms-flex-order:3;order:3;margin-right:0px}ks-product-purchase>ks-product-count{-ms-flex-order:1;order:1}ks-product-purchase>button.cart{-ms-flex-order:2;order:2;max-width:none}}@media only screen and (max-width: 560px){ks-product-purchase{-ms-flex-wrap:wrap;flex-wrap:wrap}}ks-product-purchase>button.cart{max-width:300px;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-purchase>button.fav{-ms-flex:0 0 auto;flex:0 0 auto;padding:13px;line-height:0px;background-color:#e4e4e4;color:var(--text-color-faded)}ks-product-purchase>button.fav ks-icon{-webkit-transform:rotate(0);transform:rotate(0);transition:-webkit-transform 0.1s ease;-webkit-transition:-webkit-transform 0.1s ease;transition:transform 0.1s ease;transition:transform 0.1s ease, -webkit-transform 0.1s ease}ks-product-purchase>button.fav:hover ks-icon{-webkit-transform:rotate(72deg);transform:rotate(72deg)}ks-product-purchase button.loading{color:transparent}ks-product-purchase button ks-loader{opacity:0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-purchase button.loading ks-loader{opacity:1}ks-product-purchase button.fav.completed{color:transparent;background-color:var(--color-secondary) !important}ks-product-purchase button.fav ks-icon.completed{position:absolute;top:50%;left:50%;opacity:0;color:white;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity);-webkit-transition-delay:0.3s;transition-delay:0.3s}ks-product-purchase button.fav.completed ks-icon.completed{opacity:1}";var T=t("ks_product_purchase",function(){function t(t){e(this,t);this.addToCart=i(this,"addToCart",7);this.addToFavourites=i(this,"addToFavourites",7);this.cartText="Do koszyka";this.availabilityText="Powiadom o dostępności";this.favouritesIcon="star";this.cartAnimation=false;this.favouritesAnimation=false}t.prototype.CartHandler=function(){if(d.get("availability")>0){if(!d.get("cartLoading"))this.addToCart.emit()}else document.querySelector("ks-product-notify").show()};t.prototype.FavouritesHandler=function(){if(!d.get("favouritesLoading")&&!d.get("favouritesCompleted")){this.addToFavourites.emit()}};t.prototype.render=function(){var t=this;var e=d.get("availability")>0;if(d.get("cartLoading"))this.cartAnimation=true;else setTimeout((function(){t.cartAnimation=false}),300);if(d.get("favouritesLoading"))this.favouritesAnimation=true;else setTimeout((function(){t.favouritesAnimation=false}),300);var n=["fav",d.get("favouritesCompleted")?"completed":null,d.get("favouritesLoading")?"loading":null];return[o("button",{onClick:function(){return t.CartHandler()},class:"cart"+(d.get("cartLoading")?" loading":"")+(e?"":" disabled")},e?this.cartText:this.availabilityText,o("ks-loader",{oversized:true,running:this.cartAnimation})),e?o("ks-product-count",null):null,o("button",{onClick:function(){return t.FavouritesHandler()},class:n.join(" ")},o("ks-icon",{name:this.favouritesIcon}),o("ks-loader",{running:this.favouritesAnimation}),o("ks-icon",{class:"completed",name:"check"}))]};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());T.style=S;var C="ks-product-tags{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ks-product-tags div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-product-tags a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 15px;margin:2px;border-radius:20px;font-size:14px;font-family:var(--font-emphsis);text-align:center;background-color:#252525;color:white}ks-product-tags ks-button{display:none;margin-top:8px}@media (max-width: 1200px){ks-product-tags a{width:calc(33.33% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+7){display:none}ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 800px){ks-product-tags a{width:calc(50% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+5){display:none}ks-product-tags[expandable='2'] ks-button,ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 460px){ks-product-tags a{width:100%}ks-product-tags:not([expanded]) a:nth-child(n+4){display:none}ks-product-tags[expandable] ks-button{display:initial}}";var P=t("ks_product_tags",function(){function t(t){e(this,t);this.expanded=false}t.prototype.componentWillLoad=function(){var t=d.get("tags").length;if(t>6)this.expandable=3;else if(t>4)this.expandable=2;else if(t>3)this.expandable=1};t.prototype.render=function(){var t=this;return[o("div",null,d.get("tags").map((function(t){return o("a",{href:t.link},t.name)}))),o("ks-button",{transparent:true,narrower:true,round:true,icon:this.expanded?"minus":"plus",onClick:function(){return t.expanded=!t.expanded}})]};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());P.style=C;var D="ks-product-tooltip{display:block;position:relative}ks-product-tooltip .message,ks-product-tooltip .arrow{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;position:absolute;z-index:2;opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-product-tooltip .message{background-color:#252525;color:#ffffff;padding:17px 20px;margin-top:5px;border-radius:20px;font-size:15px;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-product-tooltip .arrow{bottom:-10px;left:80px;-webkit-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-tooltip[active] .message,ks-product-tooltip[active] .arrow{opacity:1}";var W=t("ks_product_tooltip",function(){function t(t){e(this,t);this.active=false}t.prototype.onMouseover=function(){this.active=true};t.prototype.onMouseout=function(){this.active=false};t.prototype.render=function(){return[o("slot",null),o("div",{class:"arrow"}),o("div",{class:"message"},this.message)]};return t}());W.style=D;var A="ks-zaufane-product{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:1200px;width:100%;margin-left:auto;margin-right:auto;background:white}ks-zaufane-product .ekomi-widget-container .prc.container-fluid{padding:20px}ks-zaufane-product .ekomi-widget-container .row{margin:0px !important}ks-zaufane-product .prc .rating-details{background:none}ks-zaufane-product .prc .review{border-bottom:1px solid #e3e3e3}";var L=t("ks_zaufane_product",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){{var t=document.getElementsByClassName("ekomi-widget-"+this.token);for(var e=0;e<t.length;e++){this.registerWidget(window,this.token)}}};t.prototype.registerWidget=function(t,e){t["_ekomiWidgetsServerUrl"]="https://widgets.ekomi.com";t["_customerId"]=this.customer;if(t["_language"]==undefined){t["_language"]=new Array}t["_language"][e]="auto";if(typeof t["_ekomiWidgetTokens"]!=="undefined"){t["_ekomiWidgetTokens"][t["_ekomiWidgetTokens"].length]=e}else{t["_ekomiWidgetTokens"]=new Array(e)}if(typeof window.ekomiWidgetJs=="undefined"){window.ekomiWidgetJs=true;var o=document.createElement("script");o.src="https://sw-assets.ekomiapps.de/static_resources/widget.js";var n=document.getElementsByTagName("head")[0];n.appendChild(o)}else{if(typeof window.ekomiWidgetMain!="undefined"){window.ekomiWidgetMain("ajax",e)}}return true};t.prototype.render=function(){return[o("div",{id:"widget-container",class:"data-ekomi-emp ekomi-widget-container ekomi-widget-"+this.token}),o("div",{id:"ekomi-product-widget-identifier",class:"prod-data-emp",style:{display:"none"}},this.product),o("a",{href:"https://www.ekomi-pl.com/opinie-kuchniasklep.html",target:"_blank"},o("img",{alt:"kuchniasklep.pl Reviews with ekomi-pl.com",src:"https://smart-widget-assets.ekomiapps.de/resources/ekomi_logo.png",style:{display:"none"}}))]};return t}());L.style=A}}}));