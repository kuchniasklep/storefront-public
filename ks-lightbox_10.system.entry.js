var __awaiter=this&&this.__awaiter||function(t,e,r,o){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,n){function s(t){try{l(o.next(t))}catch(e){n(e)}}function a(t){try{l(o["throw"](t))}catch(e){n(e)}}function l(t){t.done?r(t.value):i(t.value).then(s,a)}l((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,i,n,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return l([t,e])}}function l(s){if(o)throw new TypeError("Generator is already executing.");while(r)try{if(o=1,i&&(n=s[0]&2?i["return"]:s[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,s[1])).done)return n;if(i=0,n)s=[s[0]&2,n.value];switch(s[0]){case 0:case 1:n=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(n=r.trys,n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){r.label=s[1];break}if(s[0]===6&&r.label<n[1]){r.label=n[1];n=s;break}if(n&&r.label<n[2]){r.label=n[2];r.ops.push(s);break}if(n[2])r.ops.pop();r.trys.pop();continue}s=e.call(t,r)}catch(a){s=[6,a];i=0}finally{o=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(t,e,r){if(r||arguments.length===2)for(var o=0,i=e.length,n;o<i;o++){if(n||!(o in e)){if(!n)n=Array.prototype.slice.call(e,0,o);n[o]=e[o]}}return t.concat(n||Array.prototype.slice.call(e))};System.register(["./index-3484848d.system.js","./core-class-0c9894c5.system.js","./pagination-e2e00ef9.system.js","./thumbs-351964c8.system.js","./productDynamic-e0a63c1b.system.js","./product-8db249af.system.js","./fetch-7c249dbd.system.js","./commonDynamic-4569184d.system.js","./validate-347c285d.system.js","./index-4afdae1e.system.js"],(function(t){"use strict";var e,r,o,i,n,s,a,l,d,c,u,p,f;return{setters:[function(t){e=t.r;r=t.h;o=t.c;i=t.e;n=t.H},function(t){s=t.S},function(t){a=t.P},function(t){l=t.T},function(t){d=t.p},function(t){c=t.p},function(t){u=t.F},function(t){p=t.c},function(t){f=t.V},function(){}],execute:function(){var h="ks-lightbox{display:block}ks-lightbox .content{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;padding:10px;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-lightbox .close{position:absolute;top:15px;right:15px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color);border-radius:100%;padding:5px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;z-index:1000000;transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;-webkit-transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease,\n                -webkit-transform 0.1s ease}ks-lightbox .close:hover{background-color:var(--lightbox-element-color-hover);-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05)}ks-lightbox .close:active{background-color:var(--lightbox-element-color-active);-webkit-transform:scale(0.95, 0.95);transform:scale(0.95, 0.95)}ks-lightbox .lightbox-full{width:100%;-ms-flex:1;flex:1}ks-lightbox .lightbox-thumb{margin-top:10px;width:100%}ks-lightbox .lightbox-thumb .swiper-slide{height:70px;width:70px;overflow:hidden;opacity:0.6;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-lightbox .lightbox-thumb .swiper-slide:hover{opacity:0.8}ks-lightbox .lightbox-thumb .swiper-slide-thumb-active{opacity:1 !important}ks-lightbox .swiper-pagination{display:none}ks-lightbox .swiper-pagination{bottom:0px !important;padding:5px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color)}ks-lightbox .swiper-pagination-bullet{background-color:#ffffff}ks-lightbox .swiper-pagination-bullet-active{background-color:#ffffff}@media only screen and (max-width: 720px){ks-lightbox .content{padding:0}ks-lightbox .swiper-pagination{display:block}ks-lightbox .lightbox-thumb{display:none !important}ks-lightbox .lightbox-full .swiper-slide ks-img img{border-radius:0px}}";s.use([a,l]);var b=t("ks_lightbox",function(){function t(t){e(this,t)}t.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};t.prototype.show=function(t){if(t===void 0){t=0}return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(r){this.overlay.show().then((function(){var r;if(e.carousel==undefined){e.thumbs=new s(".lightbox-thumb",{observer:true,observeParents:true,grabCursor:true,slidesPerView:"auto",centerInsufficientSlides:true,watchSlidesVisibility:true,watchSlidesProgress:true,spaceBetween:10,resistanceRatio:.7});e.carousel=new s(".lightbox-full",{observer:true,observeParents:true,centeredSlides:true,slidesPerView:"auto",spaceBetween:20,preventInteractionOnTransition:true,thumbs:{swiper:e.thumbs},pagination:{el:".swiper-pagination"}})}(r=e.carousel)===null||r===void 0?void 0:r.slideTo(t,0,false)}));return[2]}))}))};t.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.overlay.hide();return[2]}))}))};t.prototype.render=function(){var t=this;return r("ks-overlay",{dark:true},r("div",{class:"content"},r("div",{class:"swiper-container lightbox-full"},r("div",{class:"swiper-wrapper"},this.data.map((function(t){return r("div",{class:"swiper-slide"},r("ks-img",{contained:true,center:true,target:".lightbox-full",src:t.full.url,width:t.full.width,height:t.full.height}))}))),r("div",{class:"swiper-pagination"})),r("div",{class:"swiper-container lightbox-thumb"},r("div",{class:"swiper-wrapper"},this.data.map((function(t){return r("div",{class:"swiper-slide"},r("ks-img",{contained:true,center:true,src:t.thumb.url,width:t.thumb.width,height:t.thumb.height}))}))))),r("div",{class:"close",onClick:function(){return t.overlay.hide()}},r("ks-icon",{name:"x",size:1.2})))};Object.defineProperty(t.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());b.style=h;var m="ks-product-admin{display:none}ks-product-admin[enabled]{display:block}ks-product-admin .bar{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;background-color:#181818;color:white}ks-product-admin .set .bar{background-color:#353535}ks-product-admin .bar>div{-ms-flex:0 1 auto;flex:0 1 auto;white-space:nowrap}ks-product-admin .bar>div:not(.links).name{-ms-flex:1 1 auto;flex:1 1 auto;width:100%;overflow:hidden;text-overflow:ellipsis}ks-product-admin .bar>div:not(.links){padding:17px}ks-product-admin .bar>.links{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex:1;flex:1}ks-product-admin .bar>.links .button{display:block;padding:17px;color:white;background-color:#252525;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;border-style:none;outline-style:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-product-admin .bar>.links .button:hover{color:white;background-color:#353535}ks-product-admin .bar>.links .button:active{color:white;background-color:#454545}ks-product-admin .bar>.links .button:nth-child(2n){background-color:#303030}ks-product-admin .bar>.links .button:nth-child(2n):hover{background-color:#404040}ks-product-admin .bar>.links .button:nth-child(2n):active{background-color:#505050}ks-product-admin .distributors{display:table;background-color:#000000;color:#ffffff;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}ks-product-admin .distributors[hidden]{display:none !important;visibility:hidden !important}ks-product-admin .distributors th{font-weight:700;font-size:15.5px !important;font-family:var(--font-emphasis);border-bottom:2px solid #181818;border-right:2px solid #181818}ks-product-admin .distributors td{font-weight:500;font-size:14px;border-right:2px solid #181818}ks-product-admin .distributors th,ks-product-admin .distributors td{text-align:center;padding:8px 20px}ks-product-admin .distributors th:first-child,ks-product-admin .distributors td:first-child{text-align:left}ks-product-admin .distributors *:last-child td{padding:8px 20px 14px 20px}ks-product-admin td.overwrite{color:var(--color-secondary)}@media only screen and (max-width: 640px) and (min-width: 340px){ks-product-admin .bar{font-size:14px}ks-product-admin .bar>div:not(.links){padding:17px 10px}}@media only screen and (max-width: 420px){ks-product-admin .bar{font-size:12px}ks-product-admin .bar>div:not(.links){padding:17px 8px}ks-product-admin .bar .hide-mobile{display:none !important}}@media only screen and (max-width: 960px){ks-product-admin .bar>.links button{display:none !important}ks-product-admin .distributors{display:none !important;visibility:hidden !important}}";var k=t("ks_product_admin",function(){function t(t){e(this,t);this.expanded=false;this.enabled=false}t.prototype.render=function(){var t=this;var e;var o=d.get("adminBar");this.enabled=!!d.get("loaded")&&!!Object.keys(o).length;if(!this.enabled)return null;var i=((e=o===null||o===void 0?void 0:o.set)===null||e===void 0?void 0:e.length)>0;return[r("div",{class:"bar"},this.currentSettings(o),r("div",{class:"links"},r("a",{class:"button",href:o.link},r("ks-icon",{name:"edit"})),this.hasDistributors(o)||i?r("button",{class:"button",onClick:function(){return t.expanded=!t.expanded}},r("ks-icon",{name:this.expanded?"chevron-up":"chevron-down"})):null)),i?r("div",{class:"set",hidden:!this.expanded},o.set.map((function(e){return[r("div",{class:"bar"},r("div",{class:"name"},e.name),t.currentSettings(e),r("div",{class:"links"},r("a",{class:"button",href:e.link},r("ks-icon",{name:"edit"})))),t.distributors(e)]}))):null,this.distributors(o)]};t.prototype.hasDistributors=function(t){var e;return((e=t===null||t===void 0?void 0:t.distributors)===null||e===void 0?void 0:e.length)>0};t.prototype.distributors=function(t){var e;return this.hasDistributors(t)?r("div",{class:"distributors",hidden:!this.expanded},r("tr",null,r("th",null,"Dystrybutor"),r("th",null,"Czas wysyłki"),r("th",null,"Stan zewnętrzny"),r("th",null,"Tryb niedostępności"),r("th",null,"Komunikaty")),(e=t===null||t===void 0?void 0:t.distributors)===null||e===void 0?void 0:e.map((function(t){return r("tr",{class:t.overwrite&&"overwrite"},r("td",null,t.name),r("td",null,t.time),r("td",null,t.quantity),r("td",null,t.unavailableMode),r("td",null,t.warning))}))):null};t.prototype.currentSettings=function(t){return[r("div",null,r("ks-icon",{name:"home"})," ",t.homeQuantity),t.externalQuantity!=""?r("div",null,r("ks-icon",{name:"truck"})," ",t.externalQuantity):null,t.availability!=""?r("div",null,r("ks-icon",{class:"hide-mobile",name:"x-octagon"})," ",t.availability):null,t.overwrite?r("div",null,r("ks-icon",{class:"hide-mobile",name:"alert-octagon"})," Nadpisany"):null]};return t}());k.style=m;var g="ks-product-brand{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;right:0;left:0}ks-product-brand>a{display:block;max-width:150px;height:60px;transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;-webkit-transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease,\n                -webkit-transform 0.3s ease}ks-product-brand>a:hover{opacity:0.8}ks-product-brand>a:active{opacity:0.5;-webkit-transform:scale(0.95);transform:scale(0.95)}ks-product-brand img{width:unset !important}@media (max-width: 960px){ks-product-brand{-ms-flex-pack:center;justify-content:center}}";var x=t("ks_product_brand",function(){function t(t){e(this,t)}t.prototype.render=function(){var t=c.get("brand");if(!t)return null;return r("a",{href:t.link},r("ks-img2",{src:t.logo,alt:t.name,width:t.width,height:t.height}))};return t}());x.style=g;var v="ks-product-history>ks-product-attribute{cursor:pointer}ks-product-history .history{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ks-product-history h3{margin-top:5px}ks-product-history .list{overflow-y:auto;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-product-history .list>*{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}ks-product-history .list>*>span:first-child{margin-right:30px}ks-product-history .list>*>span:last-child{margin-right:10px;font-weight:600}";var y=t("ks_product_history",function(){function t(t){e(this,t);this.data=null}t.prototype.componentDidRender=function(){this.panel=this.root.querySelector("ks-sidepanel")};t.prototype.open=function(){var t=this;this.panel.show();var e=new FormData;e.append("id",this.productId);u(this.api,e).then((function(t){return t.json()})).then((function(e){return t.data=e}))};t.prototype.render=function(){var t=this;if(!this.name)return;return[r("ks-product-attribute",{icon:"calendar",faded:true,onClick:function(){return t.open()}},this.name),r("ks-sidepanel",{left:true},r("div",{class:"history"},r("h3",null,this.name),this.data!==null?r("div",{class:"list"},this.data.map((function(t){return r("div",{class:"entry"},r("span",null,t.date),r("span",null,t.price))}))):r("ks-loader",{dark:true,large:true})))]};Object.defineProperty(t.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());y.style=v;var w="ks-product-installments{display:block;position:relative}ks-product-installments>.arrow{display:none;position:absolute;bottom:-5px;left:50%;-webkit-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-installments>.content{display:none;position:absolute;top:55px;width:100%;z-index:10;background-color:var(--color-dark);border-radius:20px;overflow:hidden}ks-product-installments[active]>.arrow{display:block}ks-product-installments[active]>.content{display:block}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]{background-color:#222222}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:hover{background-color:#2e2e2e}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:active{background-color:#3a3a3a}";var _=t("ks_product_installments",function(){function t(t){e(this,t);this.name="";this.active=false}t.prototype.clickOutside=function(t){var e=t.target;if(!e.closest("ks-product-installments"))this.active=false;return e};t.prototype.render=function(){var t=this;return[r("ks-product-button",{onClick:function(){return t.active=!t.active}},this.name),r("div",{class:"arrow"}),r("div",{class:"content"},r("slot",null))]};Object.defineProperty(t.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());_.style=w;var z="ks-product-notify-edrone{display:block}ks-product-notify-edrone fieldset{border:none;margin:0;padding:0}ks-product-notify-edrone .info{text-align:center;margin-bottom:40px}ks-product-notify-edrone .info a{text-decoration:none;color:black;margin:0 5px}ks-product-notify-edrone h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify-edrone ks-input-check{margin-bottom:5px}ks-product-notify-edrone ks-button{margin-top:20px}";var j=t("ks_product_notify_edrone",function(){function t(t){e(this,t)}t.prototype.requestHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r,o,i,n;var s=this;return __generator(this,(function(a){switch(a.label){case 0:e=c.get("notifyStrings");r=c.get("id");o=p.get("tracking").edroneWishlistApi;t.preventDefault();return[4,f(this.root.querySelector("form"))];case 1:if(!a.sent())return[2];this.dialog.showLoading();i=t.target;n=new FormData(i);n.append("app_id",p.get("tracking").edroneAppId);n.append("topic_id",r);n.append("topic_campaign_id","0");return[4,fetch(o,{body:n,method:"post"}).then((function(){s.dialog.showSuccess(e.successHeading,e.successParagraph)})).catch((function(t){return __awaiter(s,void 0,void 0,(function(){var r;return __generator(this,(function(o){r="";if(!window.navigator.onLine)r="Brak internetu.";else if(t.message!="")r=t.message;console.log(t.message);this.dialog.showFailure(e.errorHeading,r);return[2]}))}))}))];case 2:a.sent();return[2]}}))}))};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.dialog.show();return[2]}))}))};t.prototype.componentDidLoad=function(){this.dialog=this.root.querySelector("ks-dialog")};t.prototype.render=function(){var t=this;var e=c.get("notifyStrings");return r("ks-dialog",null,r("form",{onSubmit:function(e){return t.requestHandler(e)}},r("fieldset",null,r("div",{class:"info"},r("h3",null,e.heading),r("p",null,e.paragraph)),r("ks-input-text",{email:true,name:"email",required:true,nomessage:true,placeholder:"E-mail",icon:"mail"}),r("ks-input-check",{name:"zgoda",required:true,nomessage:true,label:e.agreement}),r("ks-button",{submit:true,name:"POWIADOM MNIE"}))))};Object.defineProperty(t.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());j.style=z;var L="ks-product-purchase{display:-ms-flexbox;display:flex;margin:10px 0 15px 0;width:100%}ks-product-purchase>button{position:relative;overflow:hidden;border-style:none;outline-style:none;border-radius:50px;margin-right:10px;background-color:var(--color-secondary);color:var(--text-color-secondary);font-family:var(--product-price-font);font-size:18px;font-weight:700;-webkit-transition:var(--transition-background-color),\n                var(--transition-color);transition:var(--transition-background-color),\n                var(--transition-color)}ks-product-purchase button:hover{background-color:var(--color-secondary-hover)}ks-product-purchase button:active{background-color:var(--color-secondary-active)}ks-product-purchase button.disabled{background-color:#e4e4e4;color:var(--text-color-faded);font-size:17px;line-height:17px}ks-product-purchase button.disabled:hover{background-color:#cfcfcf}ks-product-purchase button.disabled:active{background-color:#bdbdbd}@media only screen and (max-width: 1200px){ks-product-purchase button{font-family:var(--product-price-font);font-size:var(--product-price-size-small);line-height:var(--product-price-size-small)}}@media only screen and (max-width: 960px){ks-product-purchase{-ms-flex-pack:center;justify-content:center;margin-top:10px;max-width:400px}ks-product-purchase>button.fav{-ms-flex-order:3;order:3;margin-right:0px}ks-product-purchase>ks-product-count{-ms-flex-order:1;order:1}ks-product-purchase>button.cart{-ms-flex-order:2;order:2;max-width:none}}@media only screen and (max-width: 560px){ks-product-purchase{-ms-flex-wrap:wrap;flex-wrap:wrap}}ks-product-purchase>button.cart{max-width:300px;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-purchase>button.fav{-ms-flex:0 0 auto;flex:0 0 auto;padding:13px;line-height:0px;background-color:#e4e4e4;color:var(--text-color-faded)}ks-product-purchase>button.fav ks-icon{-webkit-transform:rotate(0);transform:rotate(0);transition:-webkit-transform 0.1s ease;-webkit-transition:-webkit-transform 0.1s ease;transition:transform 0.1s ease;transition:transform 0.1s ease, -webkit-transform 0.1s ease}ks-product-purchase>button.fav:hover ks-icon{-webkit-transform:rotate(72deg);transform:rotate(72deg)}ks-product-purchase button.loading{color:transparent}ks-product-purchase button ks-loader{opacity:0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-purchase button.loading ks-loader{opacity:1}ks-product-purchase button.fav.completed{color:transparent;background-color:var(--color-secondary) !important}ks-product-purchase button.fav ks-icon.completed{position:absolute;top:50%;left:50%;opacity:0;color:white;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity);-webkit-transition-delay:0.3s;transition-delay:0.3s}ks-product-purchase button.fav.completed ks-icon.completed{opacity:1}";var S=t("ks_product_purchase",function(){function t(t){e(this,t);this.addToCart=i(this,"addToCart",7);this.addToFavourites=i(this,"addToFavourites",7);this.cartText="Do koszyka";this.availabilityText="Powiadom o dostępności";this.favouritesIcon="star";this.cartAnimation=false;this.favouritesAnimation=false}t.prototype.CartHandler=function(){if(c.get("availability")>0){if(!c.get("cartLoading"))this.addToCart.emit()}else document.querySelector("ks-product-notify-edrone").show()};t.prototype.FavouritesHandler=function(){if(!c.get("favouritesLoading")&&!c.get("favouritesCompleted")){this.addToFavourites.emit()}};t.prototype.render=function(){var t=this;var e=c.get("availability")>0;if(c.get("cartLoading"))this.cartAnimation=true;else setTimeout((function(){t.cartAnimation=false}),300);if(c.get("favouritesLoading"))this.favouritesAnimation=true;else setTimeout((function(){t.favouritesAnimation=false}),300);var o=["fav",c.get("favouritesCompleted")?"completed":null,c.get("favouritesLoading")?"loading":null];return[r("button",{onClick:function(){return t.CartHandler()},class:"cart"+(c.get("cartLoading")?" loading":"")+(e?"":" disabled")},e?this.cartText:this.availabilityText,r("ks-loader",{oversized:true,running:this.cartAnimation})),e?r("ks-product-count",null):null,r("button",{onClick:function(){return t.FavouritesHandler()},class:o.join(" ")},r("ks-icon",{name:this.favouritesIcon}),r("ks-loader",{running:this.favouritesAnimation}),r("ks-icon",{class:"completed",name:"check"}))]};Object.defineProperty(t.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());S.style=L;var P="ks-product-tags{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ks-product-tags div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-product-tags a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 15px;margin:2px;border-radius:20px;font-size:14px;font-family:var(--font-emphsis);text-align:center;background-color:#252525;color:white}ks-product-tags ks-button{display:none;margin-top:8px}@media (max-width: 1200px){ks-product-tags a{width:calc(33.33% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+7){display:none}ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 800px){ks-product-tags a{width:calc(50% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+5){display:none}ks-product-tags[expandable='2'] ks-button,ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 460px){ks-product-tags a{width:100%}ks-product-tags:not([expanded]) a:nth-child(n+4){display:none}ks-product-tags[expandable] ks-button{display:initial}}";var A=t("ks_product_tags",function(){function t(t){e(this,t);this.expanded=false}t.prototype.componentWillLoad=function(){var t=c.get("tags").length;if(t>6)this.expandable=3;else if(t>4)this.expandable=2;else if(t>3)this.expandable=1};t.prototype.render=function(){var t=this;return[r("div",null,c.get("tags").map((function(t){return r("a",{href:t.link},t.name)}))),r("ks-button",{transparent:true,narrower:true,round:true,icon:this.expanded?"minus":"plus",onClick:function(){return t.expanded=!t.expanded}})]};Object.defineProperty(t.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());A.style=P;var F="ks-product-tooltip{display:block;position:relative}ks-product-tooltip .message,ks-product-tooltip .arrow{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;position:absolute;z-index:2;opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-product-tooltip .message{background-color:#252525;color:#ffffff;padding:17px 20px;margin-top:5px;border-radius:20px;font-size:15px;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-product-tooltip .arrow{bottom:-10px;left:80px;-webkit-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-tooltip[active] .message,ks-product-tooltip[active] .arrow{opacity:1}";var T=t("ks_product_tooltip",function(){function t(t){e(this,t);this.active=false}t.prototype.onMouseover=function(){this.active=true};t.prototype.onMouseout=function(){this.active=false};t.prototype.render=function(){return[r("slot",null),r("div",{class:"arrow"}),r("div",{class:"message"},this.message)]};return t}());T.style=F;var C="ks-review-product{display:block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);font-family:var(--font-emphasis)}ks-review-product .summary{display:-ms-flexbox;display:flex}ks-review-product .summary>*{width:70%;padding:20px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}ks-review-product .summary>*:not(:last-child){border-right:#dddddd solid 1px}ks-review-product .summary .positivity{width:100%}ks-review-product .summary .message{font-size:16px}ks-review-product .summary .content{font-size:32px;font-weight:700}ks-review-product .summary .bar{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:300px}ks-review-product .summary .right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:60%}ks-review-product .summary .bar .progress{height:10px;position:relative;background:#f2f2f2;border-radius:5px;margin-left:5px;width:100%;overflow:hidden}ks-review-product .summary .bar .progress>span{display:block;height:100%;background-color:rgb(255 195 0);position:relative;overflow:hidden}ks-review-product .reviews{border-top:#dddddd solid 1px}ks-review-product .review{padding:13px 18px}ks-review-product .review:not(:last-child){border-bottom:#dddddd solid 1px}ks-review-product .review .top{display:-ms-flexbox;display:flex}ks-review-product .review .top .date{margin-left:10px}ks-review-product .stars{display:-ms-flexbox;display:flex;max-width:120px;margin-bottom:10px}ks-review-product .stars .off{opacity:0.3}@media (max-width: 600px){ks-review-product .summary{-ms-flex-wrap:wrap;flex-wrap:wrap}ks-review-product .summary .count,ks-review-product .summary .average{width:50%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:#dddddd solid 1px}ks-review-product .summary .positivity{width:100%}}";var D=t("ks_review_product",function(){function t(t){e(this,t)}t.prototype.render=function(){var t=this;var e=c.get("reviewProducts");var o=e.length;var i=parseFloat((e.reduce((function(t,e){return t+e.rating}),0)/o).toFixed(2));var s=parseFloat((e.filter((function(t){return t.rating>=4})).length/o*100).toFixed(2));var a=parseFloat((e.filter((function(t){return t.rating<4&&t.rating>2})).length/o*100).toFixed(2));var l=parseFloat((e.filter((function(t){return t.rating<=2})).length/o*100).toFixed(2));return r(n,null,r("div",{class:"summary"},r("div",{class:"count"},r("div",{class:"message"},"Liczba opinii:"),r("div",{class:"content"},o)),r("div",{class:"average"},r("div",{class:"message"},"Średnia opinia:"),r("div",{class:"content"},i,"/5")),r("div",{class:"positivity"},r("div",{class:"bar"},r("span",null,"Pozytywne:"),r("div",{class:"right"},r("span",null,s,"%"),r("div",{class:"progress"},r("span",{style:{width:"".concat(s,"%")}})))),r("div",{class:"bar"},r("span",null,"Neutralne:"),r("div",{class:"right"},r("span",null,a,"%"),r("div",{class:"progress"},r("span",{style:{width:"".concat(a,"%")}})))),r("div",{class:"bar"},r("span",null,"Negatywne:"),r("div",{class:"right"},r("span",null,l,"%"),r("div",{class:"progress"},r("span",{style:{width:"".concat(l,"%")}})))))),r("div",{class:"reviews"},e.map((function(e){return r("div",{class:"review"},r("div",{class:"top"},r("div",{class:"stars"},t.stars(e.rating)),r("div",{class:"date"},e.date)),r("div",{class:"content"},e.review))}))))};t.prototype.stars=function(t){var e=this;return __spreadArray([],Array(5).keys(),true).map((function(r){return e.star(Math.round(t)>=r+1)}))};t.prototype.star=function(t){return r("svg",{class:t?"":"off",width:"100%",height:"100%",viewBox:"0 0 50 50",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2"}},r("g",{transform:"matrix(1,0,0,1,0,2.38729)"},r("path",{d:"M25,0L30.613,17.275L48.776,17.275L34.082,27.951L39.695,45.225L25,34.549L10.305,45.225L15.918,27.951L1.224,17.275L19.387,17.275L25,0Z",style:{fill:"rgb(255 195 0)"}})))};return t}());D.style=C}}}));