var __awaiter=this&&this.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o["throw"](e))}catch(t){i(t)}}function c(e){e.done?n(e.value):r(e.value).then(a,s)}c((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return c([e,t])}}function c(a){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,r&&(i=a[0]&2?r["return"]:a[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;if(r=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(s){a=[6,s];r=0}finally{o=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var o=0,r=t.length,i;o<r;o++){if(i||!(o in t)){if(!i)i=Array.prototype.slice.call(t,0,o);i[o]=t[o]}}return e.concat(i||Array.prototype.slice.call(t))};System.register(["./index-0660128e.system.js","./common-0ccf6d0a.system.js","./core-class-0c9894c5.system.js","./pagination-e2e00ef9.system.js","./thumbs-351964c8.system.js","./commonDynamic-40a181cb.system.js","./tracker-028a18f5.system.js","./index-af3dd464.system.js"],(function(e){"use strict";var t,n,o,r,i,a,s,c,l,d,p,u,f;return{setters:[function(e){t=e.r;n=e.h;o=e.c;r=e.e;i=e.H},function(e){a=e.c},function(e){s=e.S},function(e){c=e.P},function(e){l=e.T},function(e){d=e.c},function(e){p=e.t;u=e.e;f=e.r},function(){}],execute:function(){var h="ks-category-sidebar .category>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar .category>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar .category>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar .category>.children>a{padding:4px 0px}ks-category-sidebar .category:not(.open)>.children{max-height:0px !important;opacity:0}ks-category-sidebar .category.open>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}";var m=e("ks_category_sidebar",function(){function e(e){t(this,e);this.level=3;this.open=[]}e.prototype.click=function(e,t){var n=this.open;if(n.length==t+1){if(n[t]==e){n.pop();console.log(n)}else n[t]=e}else if(n.length>t){var o=n[0]==e;n.splice(t,n.length-t);if(!o)n=__spreadArray(__spreadArray([],n,true),[e],false)}else n=__spreadArray(__spreadArray([],n,true),[e],false);this.open=__spreadArray([],n,true);console.log(this.open)};e.prototype.render=function(){var e=this;return a.get("categories").map((function(t,n){return e.element(t,n)}))};e.prototype.element=function(e,t,o){var r=this;if(o===void 0){o=0}var i="children"in e&&o+1<this.level;var a=this.open.length>0&&this.open[o]==t;var s=["category",a?"open":null].join(" ");return n("div",{class:s},n("div",{class:"name",onClick:function(){return r.click(t,o)}},n("span",null,e.name),i?n("ks-icon",{name:a?"minus":"plus"}):null),i?n("div",{class:"children"},e.children.map((function(e,t){return"children"in e?r.element(e,t,o+1):n("a",{href:e.url},e.name)})),n("a",{href:e.url,class:"seeall"},"Zobacz wszystko")):null)};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());m.style=h;var g="ks-development-warning{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:20px 15px;font-family:var(--font-emphasis);font-size:17px;font-weight:700;line-height:15px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;background-color:rgb(255, 196, 0);color:rgb(0, 0, 0)}ks-development-warning>span{margin-right:8px}@media only screen and (max-width: 959px){ks-development-warning{font-size:14px;line-height:14px}}@media only screen and (max-width: 480px){ks-development-warning{font-size:13px;line-height:13px}}";var w=e("ks_development_warning",function(){function e(e){t(this,e)}e.prototype.render=function(){return[n("span",null,a.get("developmentWarning")),n("ks-icon",{name:"alert-triangle"})]};return e}());w.style=g;var y="ks-dialog{display:block}ks-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;padding:30px;line-height:24px}ks-dialog[nopadding] .content{padding:0px !important}@media (max-width: 720px){ks-dialog .content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;padding:20px}ks-dialog[smallmobile] .content{height:auto;width:90%}}@media (max-width: 420px){ks-dialog .content{font-size:13px;line-height:18px;padding:15px}ks-dialog[smallmobile] .content{height:auto;min-width:280px}}ks-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-dialog .close{position:absolute;top:20px;right:20px;border-style:none;outline-style:none;background-color:transparent;z-index:200;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog[dark] .close{color:white}ks-dialog .overlay{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;padding:30px;background-color:rgba(255,255,255, 0.8);-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog .opaque{background-color:#ffffff}ks-dialog .overlay>div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-box-sizing:border-box;box-sizing:border-box;max-width:800px;width:80%;text-align:center}ks-dialog .overlay>div>*{-webkit-animation:vertical-swipe-in-short 0.5s;animation:vertical-swipe-in-short 0.5s}ks-dialog .overlay .header{font-family:var(--font-emphasis);font-size:20px;font-weight:700}";var k=e("ks_dialog",function(){function e(e){t(this,e);this.closed=r(this,"closed",7);this.close=true;this.loading=false;this.success=false;this.failure=false;this.heading="";this.message=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.overlay.show();return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.overlay.hide();return[2]}))}))};e.prototype.showLoading=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.loading=true;this.close=false;return[2]}))}))};e.prototype.showSuccess=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n=this;return __generator(this,(function(o){this.heading=e;this.message=t;setTimeout((function(){n.success=true;n.loading=false;n.close=true}),400);return[2]}))}))};e.prototype.showFailure=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n=this;return __generator(this,(function(o){this.heading=e;this.message=t;setTimeout((function(){n.failure=true;n.loading=false;n.close=true}),400);return[2]}))}))};e.prototype.closeHandler=function(){var e=this;if(this.success||this.failure){setTimeout((function(){e.success=false;e.failure=false}),400)}};e.prototype.render=function(){var e=this;return n("ks-overlay",{dark:this.dark,close:this.close,onClosed:function(){return e.closeHandler()}},n("div",{class:"content"},this.close?n("button",{class:"close",onClick:function(){return e.hide()}},n("ks-icon",{name:"x",size:1.3})):null,n("slot",null),this.loading?n("div",{class:"overlay"},n("ks-loader",{large:true,dark:true})):null,this.success||this.failure?n("div",{class:"overlay opaque"},n("div",null,n("ks-icon",{name:this.success?"check":"alert-triangle",size:4}),n("p",{class:"header"},this.heading),n("p",null,this.message))):null))};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());k.style=y;var v="ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}";s.use([c,l]);var b=e("ks_error_popup",function(){function e(e){t(this,e);this.name="";this.message="";this.stack="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.name=e.name;this.message=e.message;this.stack=e.stack===undefined?"":e.stack;this.overlay.show();this.visible="visible";return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.render=function(){var e=this;var t="".concat(this.name,": ").concat(this.message);var o="";var r=this.stack;var i=parseInt(this.name);if(!isNaN(i)){if(i>=400&&i<500)o="Wystąpił błąd aplikacji. ";if(i>=500)o="Wystąpił błąd serwera. ";r+=t}else o="Wystąpił błąd aplikacji. ";o+="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";var a="User-agent: ".concat(navigator.userAgent);return n("ks-overlay",{dark:true},n("div",{class:"content ".concat(this.visible)},n("div",{class:"bar"},n("div",{class:"title"},t),n("div",{class:"close",onClick:function(){return e.hide()}},n("ks-icon",{name:"x",size:1.2}))),n("div",{class:"message"},o),n("div",{class:"data"},a,n("span",{class:"stack"},r))))};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());b.style=v;var x="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";s.use([c,l]);var _=e("ks_message_popup",function(){function e(e){t(this,e);this.name="";this.message="";this.link="";this.linkname="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(e,t,n,o){if(n===void 0){n=""}if(o===void 0){o=""}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.name=e;this.message=t;this.linkname=n;this.link=o;this.overlay.show();this.visible="visible";return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.render=function(){return n("ks-dialog",null,n("div",{class:"title"},this.name),n("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?n("ks-button",{secondary:true,round:true,link:this.link,name:this.linkname}):null)};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());_.style=x;var j=function(){function e(){this.ttq=new Promise((function(e){var t=setInterval((function(){if(ttq!==undefined){e(ttq);clearInterval(t)}}),100)}))}e.prototype.pageview=function(e,t){this.ttq.then((function(e){e.track("Browse")}))};e.prototype.product=function(e,t){if(t===void 0){t=""}this.ttq.then((function(t){t.track("ViewContent",{content_type:"product",content_id:e.id,content_name:e.name,currency:e.currency,price:e.currentPrice,quantity:1,value:e.currentPrice})}))};e.prototype.listing=function(e,t){};e.prototype.addToCart=function(e,t){this.ttq.then((function(t){t.track("AddToCart",{content_type:"product",content_id:e.id,content_name:e.name,currency:e.currency,price:e.currentPrice,quantity:e.quantity,value:e.currentPrice*e.quantity})}))};e.prototype.order_checkout=function(e,t,n){var o=this;this.ttq.then((function(e){e.track("StartCheckout",{contents:o.transformProducts(t.products),value:t.productValue,currency:t.currency})}))};e.prototype.order_form=function(e,t,n){var o=this;this.ttq.then((function(e){e.track("AddBilling",{contents:o.transformProducts(t.products),value:t.productValue,currency:t.currency})}))};e.prototype.order_placed=function(e,t,n){var o=this;this.ttq.then((function(e){e.track("Checkout",{contents:o.transformProducts(t.products),value:t.productValue,currency:t.currency})}))};e.prototype.search=function(e){};e.prototype.subscribe=function(e,t){};e.prototype.transformProducts=function(e){return e.map((function(e){return{content_id:e.id,content_type:"product",content_name:e.name,quantity:e.quantity,price:e.currentPrice}}))};return e}();var z=function(){function e(e){var t=e.split(", ");this.pixel=new Promise((function(e){!function(e,t,n,o,r,i,a){if(e.fbq)return;r=e.fbq=function(){r.callMethod?r.callMethod.apply(r,arguments):r.queue.push(arguments)};if(!e._fbq)e._fbq=r;r.push=r;r.loaded=!0;r.version="2.0";r.queue=[];i=t.createElement(n);i.async=!0;i.src=o;a=t.getElementsByTagName(n)[0];a.parentNode.insertBefore(i,a)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");t.forEach((function(e){fbq("init",e)}));e(fbq)}))}e.prototype.pageview=function(e,t){this.pixel.then((function(e){e("track","PageView",{},{eventID:t})}))};e.prototype.product=function(e,t){if(t===void 0){t=""}this.pixel.then((function(n){n("track","ViewContent",{content_type:"product",content_name:e.name,value:e.currentPrice,currency:e.currency,content_ids:[e.id]},{eventID:t})}))};e.prototype.listing=function(e,t){};e.prototype.addToCart=function(e,t){this.pixel.then((function(n){n("track","AddToCart",{content_type:"product",content_name:e.name,value:e.currentPrice,currency:e.currency,contents:[{id:e.id,quantity:e.quantity}]},{eventID:t})}))};e.prototype.order_checkout=function(e,t,n){var o=this;this.pixel.then((function(e){e("track","InitiateCheckout",{contents:o.transformProducts(t.products),content_type:"product",value:t.productValue,currency:t.currency},{eventID:n})}))};e.prototype.order_form=function(e,t,n){};e.prototype.order_placed=function(e,t,n){var o=this;this.pixel.then((function(e){e("track","Purchase",{contents:o.transformProducts(t.products),content_type:"product",value:t.productValue,currency:t.currency},{eventID:n})}))};e.prototype.search=function(e){this.pixel.then((function(t){t("track","Search",{search_string:e})}))};e.prototype.subscribe=function(e,t){};e.prototype.transformProducts=function(e){return e.map((function(e){return{id:e.id,quantity:e.quantity}}))};return e}();var q=function(){function e(){}e.prototype.init=function(e){if(e===void 0){e=undefined}var t,n;if((t=window._edrone)===null||t===void 0?void 0:t.page_loaded)(n=window._edrone)===null||n===void 0?void 0:n.init(e)};e.prototype.relativeToAbsolute=function(e){return e.includes("http")?e:document.baseURI+e};e.prototype.pageview=function(e,t){if(!e.loggedIn||!e.customer)return;var n=e.customer;window._edrone=window._edrone||{};window._edrone.email=n.email;window._edrone.first_name=n.firstName;window._edrone.last_name=n.lastName;window._edrone.subscriber_status=n.subscriber?1:0;window._edrone.country=n.countryISO2;window._edrone.city=n.city;window._edrone.phone=n.phone;this.init()};e.prototype.product=function(e,t){if(t===void 0){t=""}window._edrone=window._edrone||{};window._edrone.product_skus=e.model;window._edrone.product_ids=e.id;window._edrone.product_titles=encodeURI(e.name);if((e===null||e===void 0?void 0:e.images.length)>0)window._edrone.product_images=encodeURI(this.relativeToAbsolute(e.images[0].full.url));window._edrone.product_urls=encodeURI(this.relativeToAbsolute(document.location.href));window._edrone.product_availability=e.availability;window._edrone.product_category_ids=e.categories.map((function(e){return e.id})).join("~");window._edrone.product_category_names=e.categories.map((function(e){return e.name})).join("~");window._edrone.action_type="product_view";this.init()};e.prototype.listing=function(e,t){window._edrone=window._edrone||{};var n=e.breadcrumbs.filter((function(e){return e.id!="0"}));window._edrone.product_category_ids=n.map((function(e){return e.id})).join("~");window._edrone.product_category_names=n.map((function(e){return e.name})).join("~");window._edrone.action_type="category_view";this.init()};e.prototype.addToCart=function(e,t){window._edrone=window._edrone||{};window._edrone.product_ids=e.id;window._edrone.product_skus=e.sku;window._edrone.product_titles=e.name;window._edrone.product_images=encodeURI(this.relativeToAbsolute(e.imageFull));window._edrone.product_urls=encodeURI(this.relativeToAbsolute(e.link));window._edrone.product_category_ids=e.categories.map((function(e){return e.id})).join("~");window._edrone.product_category_names=e.categories.map((function(e){return e.name})).join("~");window._edrone.action_type="add_to_cart";this.init()};e.prototype.order_checkout=function(e,t,n){if(!e.loggedIn||!e.customer)return;var o=e.customer;window._edrone=window._edrone||{};window._edrone.email=o.email;window._edrone.first_name=o.firstName;window._edrone.last_name=o.lastName;window._edrone.subscriber_status=o.subscriber?1:0;window._edrone.country=o.countryISO2;window._edrone.city=o.city;window._edrone.phone=o.phone;window._edrone.action_type="other";this.init()};e.prototype.order_form=function(e,t,n){};e.prototype.order_placed=function(e,t,n){var o=this;var r=e.customer;var i=t.products;window._edrone=window._edrone||{};window._edrone.email=r.email;window._edrone.first_name=r.firstName;window._edrone.last_name=r.lastName;window._edrone.subscriber_status=r.subscriber?1:0;window._edrone.product_skus=i.map((function(e){return e.sku})).join("|");window._edrone.product_ids=i.map((function(e){return e.id})).join("|");window._edrone.product_titles=i.map((function(e){return encodeURI(e.id)})).join("|");window._edrone.product_images=i.map((function(e){return encodeURI(o.relativeToAbsolute(e.image))})).join("|");window._edrone.product_urls=i.map((function(e){return encodeURI(o.relativeToAbsolute(e.link))})).join("|");window._edrone.product_counts=i.map((function(e){return e.quantity})).join("|");window._edrone.product_category_ids=i.map((function(e){return e.categories.map((function(e){return e.id})).join("~")})).join("|");window._edrone.product_category_names=i.map((function(e){return e.categories.map((function(e){return e.name})).join("~")})).join("|");window._edrone.order_id=t.id;window._edrone.country=r.countryISO2;window._edrone.city=r.city;window._edrone.base_currency=r.currency;window._edrone.order_currency=t.currency;window._edrone.base_payment_value=t.productValue;window._edrone.order_payment_value=t.productValue;window._edrone.action_type="order";this.init()};e.prototype.search=function(e){};e.prototype.subscribe=function(e,t){window._edrone=window._edrone||{};window._edrone.customer_tags=t.place;window._edrone.email=t.email;window._edrone.subscriber_status=t.subscriber?1:0;if(e.loggedIn&&e.customer){var n=e.customer;window._edrone.first_name=n.firstName;window._edrone.last_name=n.lastName;window._edrone.country=n.countryISO2;window._edrone.city=n.city;window._edrone.phone=n.phone}window._edrone.action_type="subscribe";this.init(false)};return e}();var I="ks-page-base{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:100vh}";var P=e("ks_page_base",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.commonData);var t=JSON.parse(e.innerHTML);Object.keys(t).map((function(e){a.set(e,t[e])}));{var n=document.getElementById(this.commonDynamicData);var o=JSON.parse(n.innerHTML);Object.keys(o).map((function(e){d.set(e,o[e])}));setTimeout((function(){d.set("loaded",true)}),100);this.track()}};e.prototype.track=function(){p.get("loaded").then((function(){var e=d.get("tracking");var t=function(e){return p.set("trackers",__spreadArray(__spreadArray([],p.get("trackers"),true),[e],false))};if(e.tiktok)t(new j);if(e.facebook)t(new z(e.facebook));if(e.edrone)t(new q);u((function(t){return t===null||t===void 0?void 0:t.pageview(d.state,e.pageview)}));f()}))};e.prototype.render=function(){var e,t;return n(i,null,!this.skipbase&&n("ks-page-header",null),n("slot",null),!this.skipbase&&n("ks-page-footer",null),n("ks-newsletter-popup",{displayOnLoad:a.get("newsletterPopup"),api:d.get("api").newsletter,"login-link":a.get("loginLink"),"register-link":a.get("registerLink"),"logged-in":d.get("loggedIn"),email:(e=d.get("customer"))===null||e===void 0?void 0:e.email,subscribed:(t=d.get("customer"))===null||t===void 0?void 0:t.subscriber}),n("ks-product-suggestions",{api:a.get("suggestionApi")}),n("ks-error-popup",null),n("ks-message-popup",null),n("ks-cookie-popup",{message:a.get("cookieMessage"),button:a.get("cookieButton"),delay:a.get("cookieDelay")}))};return e}());P.style=I;var A="ks-page-footer{display:block;overflow:hidden;background-color:var(--footer-color);color:var(--footer-text-color);font-size:16px}ks-page-footer .about{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:50px 70px 40px 70px;margin:auto}ks-page-footer .contact>span:first-of-type{display:block;color:var(--footer-heading-color);font-family:var(--font-emphasis);font-weight:700;font-size:18px;margin:0 0 15px 0}ks-page-footer .contact a,ks-page-footer .contact>span{display:block;text-decoration:none !important;font-size:16px;margin-bottom:5px;color:var(--footer-text-color);-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-page-footer .contact a:hover{color:var(--footer-text-color-hover)}ks-page-footer .contact a:active{color:var(--footer-text-color-active)}ks-page-footer .contact ks-icon{margin-right:5px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;min-height:100px}ks-page-footer .newsletter{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-flow:column nowrap;flex-flow:column nowrap;text-align:center;padding:0 0 0 30px;-ms-flex-negative:0;flex-shrink:0}ks-page-footer .newsletter>div{font-family:var(--font-emphasis)}ks-page-footer .newsletter>div:last-of-type{font-size:48px;line-height:40px;font-weight:700;margin:5px 0 20px 0}ks-page-footer .newsletter ks-button{width:100%}ks-page-footer .portals{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px;border-top:solid 1px #2b2b2b}ks-page-footer .portals>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:10px}ks-page-footer .separator{width:1px;height:35px;margin:0 20px;background-color:#2b2b2b}ks-page-footer .software{background-color:var(--footer-color-darker);color:var(--footer-text-color-darker);font-size:13px;text-align:center;padding:10px}ks-page-footer .software>a{color:var(--footer-text-color-darker)}@media only screen and (max-width: 1060px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:50px 30px 40px 30px}ks-page-footer .contact{max-width:220px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}ks-page-footer .newsletter{margin-top:40px;padding:40px 0 0 0;border-top:solid 1px #2b2b2b}ks-page-footer .newsletter ks-button{max-width:290px}}@media only screen and (max-width: 640px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:30px}ks-page-footer .links{margin-top:0px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}ks-page-footer .links>*{margin-top:40px;margin-right:0px;padding:0}ks-page-footer .newsletter>div{font-size:14px}ks-page-footer .newsletter>div:last-of-type{font-size:40px;margin-bottom:10px}}";var S=e("ks_page_footer",function(){function e(e){t(this,e)}e.prototype.render=function(){var e=a.get("phone");var t=a.get("email");var o=a.get("workingHours");var r=a.get("company");var i=a.get("address");var s=a.get("softwareLink");return[n("div",{class:"about"},n("div",{class:"links"},a.get("footerLinks").map((function(e){return n("ks-footer-links",{heading:e.name},e.items.map((function(e){return n("li",null,n("a",{href:e.link},e.name))})))})),n("div",{class:"contact"},n("span",null,"Kontakt"),n("a",{style:{display:"none"}}),n("a",{href:"tel:".concat(e)},n("ks-icon",{name:"phone"}),n("span",null,e)),n("a",{href:"mailto:".concat(t)},n("ks-icon",{name:"mail"}),n("span",null,t)),n("span",null,n("ks-icon",{name:"clock",size:.9})," ",o),n("span",null,n("ks-icon",{name:"home",size:.9})," ",r),n("span",null,n("ks-icon",{name:"map-pin",size:.9})," ",i))),n("div",{class:"newsletter"},n("div",null,"Zapisz się do naszego newslettera i zyskaj"),n("div",null,"KUPON 10ZŁ"),n("ks-button",{light:true,border:true,name:"ZAPISZ SIĘ",onClick:function(){return document.querySelector("ks-newsletter-popup").Show()}}))),n("div",{class:"portals"},n("div",null,a.get("social").map((function(e){return n("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image})}))),n("div",null,a.get("reviewers").map((function(e){return n("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image})})))),n("div",{class:"software"},n("a",{href:s,rel:"nofollow"},"Oprogramowanie sklepu ShopGold"))]};return e}());S.style=A;var T=e("ks_page_header",function(){function e(e){t(this,e)}e.prototype.render=function(){return n(i,null,a.get("developmentWarning")?n("ks-development-warning",null):null,n("ks-top-banner",null),n("ks-navbar",null))};return e}());var C="ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);transform:translateX(100%);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);transform:translateX(-100%)}";s.use([c,l]);var O=e("ks_sidepanel",function(){function e(e){t(this,e);this.name="";this.message="";this.stack="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.overlay.show();setTimeout((function(){e.visible="visible"}),10);return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.onClosed=function(){this.visible="hidden"};e.prototype.render=function(){var e=this;return n("ks-overlay",{dark:true},n("nav",{class:"content ".concat(this.visible)},n("button",{class:"close",onClick:function(){return e.hide()}},n("ks-icon",{name:"x"})),n("slot",null)))};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());O.style=C;var N="ks-top-banner{display:block;position:relative;padding:10px 10px;font-family:var(--font-emphasis);font-size:15px;font-weight:700;line-height:15px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-top-banner[hidden]{display:none}ks-top-banner .container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:inherit !important;text-decoration:none !important;text-align:center}ks-top-banner ks-img2{width:auto;height:35px;margin:-8px 3px -8px 0px}@media only screen and (max-width: 959px){ks-top-banner{font-size:14px;line-height:14px}}@media only screen and (max-width: 480px){ks-top-banner{font-size:13px;line-height:13px}}";var D=e("ks_top_banner",function(){function e(e){t(this,e)}e.prototype.render=function(){var e=a.get("topNotice");if(!e||Object.keys(e).length<=0)return n(i,{hidden:true});var t=[e.image?n("ks-img2",{vertical:true,sync:true,src:e.image}):null,n("span",null,e.message)];return n(i,{style:{backgroundColor:e.color,color:e.textColor}},e.link?n("a",{class:"container",href:e.link},t):n("div",{class:"container"},t))};return e}());D.style=N}}}));