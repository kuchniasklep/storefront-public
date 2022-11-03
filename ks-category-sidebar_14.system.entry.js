var __awaiter=this&&this.__awaiter||function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function a(e){try{l(o.next(e))}catch(t){r(t)}}function s(e){try{l(o["throw"](e))}catch(t){r(t)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,i&&(r=a[0]&2?i["return"]:a[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;if(i=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){n.label=a[1];break}if(a[0]===6&&n.label<r[1]){n.label=r[1];r=a;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(a);break}if(r[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(s){a=[6,s];i=0}finally{o=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var o=0,i=t.length,r;o<i;o++){if(r||!(o in t)){if(!r)r=Array.prototype.slice.call(t,0,o);r[o]=t[o]}}return e.concat(r||Array.prototype.slice.call(t))};System.register(["./index-3484848d.system.js","./common-3952d158.system.js","./core-class-0c9894c5.system.js","./pagination-e2e00ef9.system.js","./thumbs-351964c8.system.js","./commonDynamic-af70983b.system.js","./fetch-89de6a18.system.js","./validate-347c285d.system.js","./tracker-7f3a2dbd.system.js","./loadCommon-ffa5aa41.system.js","./index-4afdae1e.system.js"],(function(e){"use strict";var t,n,o,i,r,a,s,l,p,c,u,d,f,g,h;return{setters:[function(e){t=e.r;n=e.h;o=e.c;i=e.e;r=e.H;a=e.B},function(e){s=e.c},function(e){l=e.S},function(e){p=e.P},function(e){c=e.T},function(e){u=e.c},function(e){d=e.F},function(e){f=e.V},function(e){g=e.e},function(e){h=e.l},function(){}],execute:function(){var m="ks-category-sidebar .category>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar .category>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar .category>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar .category>.children>a{padding:4px 0px}ks-category-sidebar .category:not(.open)>.children{max-height:0px !important;opacity:0}ks-category-sidebar .category.open>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}";var x=e("ks_category_sidebar",function(){function e(e){t(this,e);this.level=3;this.open=[]}e.prototype.click=function(e,t){var n=this.open;if(n.length==t+1){if(n[t]==e){n.pop();console.log(n)}else n[t]=e}else if(n.length>t){var o=n[0]==e;n.splice(t,n.length-t);if(!o)n=__spreadArray(__spreadArray([],n,true),[e],false)}else n=__spreadArray(__spreadArray([],n,true),[e],false);this.open=__spreadArray([],n,true);console.log(this.open)};e.prototype.render=function(){var e=this;return s.get("categories").map((function(t,n){return e.element(t,n)}))};e.prototype.element=function(e,t,o){var i=this;if(o===void 0){o=0}var r="children"in e&&o+1<this.level;var a=this.open.length>0&&this.open[o]==t;var s=["category",a?"open":null].join(" ");return n("div",{class:s},n("div",{class:"name",onClick:function(){return i.click(t,o)}},n("span",null,e.name),r?n("ks-icon",{name:a?"minus":"plus"}):null),r?n("div",{class:"children"},e.children.map((function(e,t){return"children"in e?i.element(e,t,o+1):n("a",{href:e.url},e.name)})),n("a",{href:e.url,class:"seeall"},"Zobacz wszystko")):null)};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());x.style=m;var k="ks-development-warning{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:20px 15px;font-family:var(--font-emphasis);font-size:17px;font-weight:700;line-height:15px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;background-color:rgb(255, 196, 0);color:rgb(0, 0, 0)}ks-development-warning>span{margin-right:8px}@media only screen and (max-width: 959px){ks-development-warning{font-size:14px;line-height:14px}}@media only screen and (max-width: 480px){ks-development-warning{font-size:13px;line-height:13px}}";var b=e("ks_development_warning",function(){function e(e){t(this,e)}e.prototype.render=function(){return[n("span",null,s.get("developmentWarning")),n("ks-icon",{name:"alert-triangle"})]};return e}());b.style=k;var v="ks-dialog{display:block}ks-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;padding:30px;line-height:24px}ks-dialog[nopadding] .content{padding:0px !important}@media (max-width: 720px){ks-dialog .content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;padding:20px}ks-dialog[smallmobile] .content{height:auto;width:90%}}@media (max-width: 420px){ks-dialog .content{font-size:13px;line-height:18px;padding:15px}ks-dialog[smallmobile] .content{height:auto;min-width:280px}}ks-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-dialog .close{position:absolute;top:20px;right:20px;border-style:none;outline-style:none;background-color:transparent;z-index:200;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog[dark] .close{color:white}ks-dialog .overlay{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;padding:30px;background-color:rgba(255,255,255, 0.8);-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog .opaque{background-color:#ffffff}ks-dialog .overlay>div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-box-sizing:border-box;box-sizing:border-box;max-width:800px;width:80%;text-align:center}ks-dialog .overlay>div>*{-webkit-animation:vertical-swipe-in-short 0.5s;animation:vertical-swipe-in-short 0.5s}ks-dialog .overlay .header{font-family:var(--font-emphasis);font-size:20px;font-weight:700}";var y=e("ks_dialog",function(){function e(e){t(this,e);this.closed=i(this,"closed",7);this.close=true;this.loading=false;this.success=false;this.failure=false;this.heading="";this.message=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.overlay.show();return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.overlay.hide();return[2]}))}))};e.prototype.showLoading=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.loading=true;this.close=false;return[2]}))}))};e.prototype.showSuccess=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n=this;return __generator(this,(function(o){this.heading=e;this.message=t;setTimeout((function(){n.success=true;n.loading=false;n.close=true}),400);return[2]}))}))};e.prototype.showFailure=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n=this;return __generator(this,(function(o){this.heading=e;this.message=t;setTimeout((function(){n.failure=true;n.loading=false;n.close=true}),400);return[2]}))}))};e.prototype.closeHandler=function(){var e=this;if(this.success||this.failure){setTimeout((function(){e.success=false;e.failure=false}),400)}};e.prototype.render=function(){var e=this;return n("ks-overlay",{dark:this.dark,close:this.close,onClosed:function(){return e.closeHandler()}},n("div",{class:"content"},this.close?n("button",{class:"close",onClick:function(){return e.hide()}},n("ks-icon",{name:"x",size:1.3})):null,n("slot",null),this.loading?n("div",{class:"overlay"},n("ks-loader",{large:true,dark:true})):null,this.success||this.failure?n("div",{class:"overlay opaque"},n("div",null,n("ks-icon",{name:this.success?"check":"alert-triangle",size:4}),n("p",{class:"header"},this.heading),n("p",null,this.message))):null))};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());y.style=v;var w="ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}";l.use([p,c]);var _=e("ks_error_popup",function(){function e(e){t(this,e);this.name="";this.message="";this.stack="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.name=e.name;this.message=e.message;this.stack=e.stack===undefined?"":e.stack;this.overlay.show();this.visible="visible";return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.render=function(){var e=this;var t="".concat(this.name,": ").concat(this.message);var o="";var i=this.stack;var r=parseInt(this.name);if(!isNaN(r)){if(r>=400&&r<500)o="Wystąpił błąd aplikacji. ";if(r>=500)o="Wystąpił błąd serwera. ";i+=t}else o="Wystąpił błąd aplikacji. ";o+="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";var a="User-agent: ".concat(navigator.userAgent);return n("ks-overlay",{dark:true},n("div",{class:"content ".concat(this.visible)},n("div",{class:"bar"},n("div",{class:"title"},t),n("div",{class:"close",onClick:function(){return e.hide()}},n("ks-icon",{name:"x",size:1.2}))),n("div",{class:"message"},o),n("div",{class:"data"},a,n("span",{class:"stack"},i))))};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());_.style=w;var z="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";l.use([p,c]);var j=e("ks_message_popup",function(){function e(e){t(this,e);this.name="";this.message="";this.link="";this.linkname="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(e,t,n,o){if(n===void 0){n=""}if(o===void 0){o=""}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){this.name=e;this.message=t;this.linkname=n;this.link=o;this.overlay.show();this.visible="visible";return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.render=function(){return n("ks-dialog",null,n("div",{class:"title"},this.name),n("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?n("ks-button",{secondary:true,round:true,link:this.link,name:this.linkname}):null)};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());j.style=z;var S="ks-navbar-language-button{display:block;position:relative;height:70px}ks-navbar-language-button>.button{outline-style:none;text-decoration:none !important;min-width:60px;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:var(--navbar-text-color) !important;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-navbar-language-button>.button:hover{background-color:var(--navbar-color-hover)}ks-navbar-language-button>.button:active{background-color:var(--navbar-color-active)}ks-navbar-language-button>.name{position:absolute;bottom:-28px;z-index:2147483649;width:250%;left:-75%;font-size:14px;text-transform:uppercase;text-align:center;color:var(--navbar-text-color);opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}ks-navbar-language-button>.button:hover+.name{opacity:1}ks-navbar-language-button .flag{height:100%;width:100%;max-width:30px;max-height:30px;border-radius:30px;overflow:hidden;border:solid 2px white;background-color:white}ks-navbar-language-button .symbol{position:absolute;top:0;right:3px;min-width:25px;height:25px;padding:0px 1px 0px 0px;margin-top:8px;border-radius:500px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#000000;color:var(--navbar-text-color);font-size:16px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}ks-navbar-language-button .symbol.small{font-size:14px}ks-navbar-language-button[sidebar]{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;height:34px;cursor:pointer}ks-navbar-language-button[sidebar] .button{background-color:transparent !important;min-width:34px;-webkit-transform:translateX(3px);transform:translateX(3px)}ks-navbar-language-button[sidebar] .flag{border:solid 2px black;background-color:black;line-height:0}ks-navbar-language-button[sidebar] .name{position:static;text-transform:none;opacity:1;color:#000000;font-size:unset;text-align:unset}";var C=e("ks_navbar_language_button",function(){function e(e){t(this,e)}e.prototype.render=function(){var e=s.get("language");var t=e.flag;var o=s.get("currency");var i=o.symbol;var r=o.symbol.length>1?" small":"";return[n("div",{class:"button","aria-label":this.name},n("div",{class:"flag"},n("ks-img2",{src:t})),this.sidebar?null:n("span",{class:"symbol"+r},i)),n("div",{class:"name"},this.name)]};return e}());C.style=S;var P="ks-navbar-language-panel nav{padding:10px 0px 10px 0px !important}ks-navbar-language-panel .language,ks-navbar-language-panel .currency{display:-ms-flexbox;display:flex;padding:10px 23px;height:50px;max-height:50px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}ks-navbar-language-panel .language.active,ks-navbar-language-panel .currency.active{background-color:#e1e1e1}ks-navbar-language-panel .language:hover,ks-navbar-language-panel .currency:hover{background-color:#ececec}ks-navbar-language-panel .language:active,ks-navbar-language-panel .currency:active{background-color:#cecece}ks-navbar-language-panel .flag{max-height:35px;max-width:35px;border-radius:50px;border:2px solid #303030;background-color:#303030;overflow:hidden}ks-navbar-language-panel .tag{background-color:black;color:white;font-size:14px;display:-ms-flexbox;display:flex}ks-navbar-language-panel .code{padding:5px 10px;width:27px;text-align:center}ks-navbar-language-panel .symbol{background-color:#303030;padding:5px 10px;width:15px;text-align:center}ks-navbar-language-panel .title{padding:10px 23px;border-bottom:1px solid black;font-size:18px;font-weight:700;font-family:var(--font-emphasis)}ks-navbar-language-panel .title:not(:first-of-type){margin-top:20px}";var D=e("ks_navbar_language_panel",function(){function e(e){t(this,e);this.toggled=false}e.prototype.componentDidRender=function(){this.sidepanel=this.root.querySelector("ks-sidepanel")};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.sidepanel.show();return[2]}))}))};e.prototype.languageChange=function(e){if(s.get("languageDomainChange")){var t=new URL(document.location.href);t.port="";t.hostname=e.domain;document.location.href=t.href;return}var n=new FormData;n.append("id",e.id.toString());d(u.get("api").changeLanguage,n).then((function(){return document.location.reload()}))};e.prototype.currencyChange=function(e){var t=new FormData;t.append("id",e.id.toString());d(u.get("api").changeCurrency,t).then((function(){return document.location.reload()}))};e.prototype.render=function(){var e=this;var t=s.get("translations");var o=s.get("languages");var i=s.get("language").id;var r=s.get("currencies");var a=s.get("currency").id;return n("ks-sidepanel",null,n("div",{class:"title"},t.panelLanguage),o.map((function(t){return n("div",{class:t.id==i?"language active":"language",onClick:function(){return e.languageChange(t)}},n("div",{class:"name"},t.name),n("div",{class:"flag"},n("ks-img2",{src:t.flag})))})),n("div",{class:"title"},t.panelCurrency),r.map((function(t){return n("div",{class:t.id==a?"currency active":"currency",onClick:function(){return e.currencyChange(t)}},n("div",{class:"name"},t.name),n("div",{class:"tag"},n("div",{class:"code"},t.code),n("div",{class:"symbol"},t.symbol)))})))};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());D.style=P;var q="ks-newsletter-popup-edrone{display:block}ks-newsletter-popup-edrone form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;height:100%;width:100%;max-width:720px}ks-newsletter-popup-edrone .info{padding:60px 60px 20px 60px;fill:#252525;-ms-flex:1 0 auto;flex:1 0 auto;min-height:10px}ks-newsletter-popup-edrone .info .top{width:100%;margin-bottom:10px;font-size:initial;max-height:30px}ks-newsletter-popup-edrone .info .heading{width:100%;font-family:var(--font-emphasis);font-size:initial;max-height:80px;margin-bottom:10px}ks-newsletter-popup-edrone .info p{text-align:center;margin-top:10px}ks-newsletter-popup-edrone .buttons{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:10px;margin-top:30px}ks-newsletter-popup-edrone .inputs{padding:0px 20px}ks-newsletter-popup-edrone .close{color:black !important}ks-newsletter-popup-edrone .button{padding:0px 20px 20px 20px}ks-newsletter-popup-edrone ks-input-check{margin:0px 20px 20px 20px;font-size:13px;line-height:18px}@media (max-width: 720px){ks-newsletter-popup-edrone .info .heading{max-height:50px}ks-newsletter-popup-edrone .email{font-size:16px}}@media (max-width: 540px){ks-newsletter-popup-edrone .info{padding:70px 25px 20px 25px;min-height:140px}ks-newsletter-popup-edrone .info .top{display:none}ks-newsletter-popup-edrone .info p{font-size:13px}ks-newsletter-popup-edrone ks-input-check{font-size:11px;line-height:16px}ks-newsletter-popup-edrone ks-input-check{margin:15px}ks-newsletter-popup-edrone .info .heading{width:100%;max-height:40px}}";var L=e("ks_newsletter_popup_edrone",function(){function e(e){t(this,e);this.displayOnLoad=false;this.success=false}e.prototype.componentDidLoad=function(){var e=this;this.dialog=this.root.querySelector("ks-dialog");if(this.displayOnLoad&&document.cookie.search("newsletterPopup=tak")==-1){setTimeout((function(){e.Show()}),4e3)}};e.prototype.requestHandler=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,o;return __generator(this,(function(i){switch(i.label){case 0:e.preventDefault();return[4,f(this.root.querySelector("form"))];case 1:if(!i.sent())return[2];this.dialog.showLoading();t=e.target;n=new FormData(t);this.track(n.get("email"),n.get("name"));o=s.get("translations");this.dialog.showSuccess(o.newsletterPopupSuccessHeading,o.newsletterPopupSuccessMessage);this.success=true;return[2]}}))}))};e.prototype.track=function(e,t){var n={email:e,name:t,subscriber:true,place:"Zapis do newslettera | Popup"};console.log(n);g((function(e){return e===null||e===void 0?void 0:e.subscribe(u.state,n)}))};e.prototype.Show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.dialog.show();return[2]}))}))};e.prototype.SetCookie=function(){var e="";var t=new Date;t.setMonth(t.getMonth()+1);e="expires="+t.toUTCString()+"; ";document.cookie="newsletterPopup=tak; "+e+"path=/";if(this.success){this.success=false}};e.prototype.render=function(){var e=this;var t=s.get("translations");return[n("ks-dialog",{dark:true,smallmobile:true,nopadding:true,onClosed:function(){return e.SetCookie()}},n("form",{onSubmit:function(t){return e.requestHandler(t)}},n("div",{class:"info"},n("svg",{class:"top",viewBox:t.newsletterPopupHeadingTopSize,width:909,height:45},n("text",{x:"0",y:"12"},t.newsletterPopupHeadingTop)),n("svg",{class:"heading",viewBox:t.newsletterPopupHeadingBottomSize,width:960,height:130},n("text",{x:"-1",y:"12"},t.newsletterPopupHeadingBottom)),n("p",null,t.newsletterPopupMessage)),n("div",{class:"inputs"},n("ks-input-text",{email:true,center:true,required:true,placeholder:t.newsletterPopupEmail,name:"email"}),n("ks-input-text",{center:true,required:true,placeholder:t.newsletterPopupName,name:"name"})),n("ks-input-check",{large:true,required:true,nomessage:true,name:"zgoda",label:t.newsletterPopupAgreement}),n("div",{class:"button"},n("ks-button",{submit:true,round:true,name:t.newsletterPopupSubmit}))))]};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());L.style=q;var H="ks-newsletter-side-button{position:fixed;right:0;top:200px;z-index:10000;-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-webkit-text-orientation:mixed;text-orientation:mixed;display:-ms-flexbox;display:flex;color:white;font-size:18px;font-family:var(--font-emphasis);padding:20px 8px;border-radius:20px 0px 0px 20px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;background-color:#000000;-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease}@media (max-width: 640px) or (max-height: 540px){ks-newsletter-side-button{display:none}}ks-newsletter-side-button:hover{background-color:#1f1f1f}ks-newsletter-side-button:active{background-color:#2c2c2c}ks-newsletter-side-button .label{font-size:20px;line-height:20px}ks-newsletter-side-button ks-icon{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg);margin:15px 0px}ks-newsletter-side-button .benefit{text-transform:uppercase;font-weight:700}";var A=e("ks_newsletter_side_button",function(){function e(e){t(this,e)}e.prototype.clickHandler=function(){var e;(e=document.querySelector("ks-newsletter-popup-edrone"))===null||e===void 0?void 0:e.Show()};e.prototype.render=function(){var e=s.get("translations");return[n("div",{class:"label"},e.newsletterSideLeft),n("ks-icon",{name:"mail"}),n("div",{class:"benefit"},e.newsletterSideRight)]};return e}());A.style=H;var X="ks-page-base{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:100vh}";var O=e("ks_page_base",function(){function e(e){t(this,e);this.loadCommon=true}e.prototype.componentWillLoad=function(){if(this.loadCommon)h(this.commonData,this.commonDynamicData,a)};e.prototype.render=function(){return n(r,null,!this.skipbase&&n("ks-page-header",null),n("slot",null),!this.skipbase&&n("ks-page-footer",null),n("ks-newsletter-popup-edrone",{displayOnLoad:s.get("newsletterPopup")}),s.get("newsletterSideButton")?n("ks-newsletter-side-button",null):null,n("ks-product-suggestions",{api:s.get("suggestionApi")}),n("ks-error-popup",null),n("ks-message-popup",null),n("ks-cookie-popup",{message:s.get("cookieMessage"),button:s.get("cookieButton"),delay:s.get("cookieDelay")}))};return e}());O.style=X;var T="ks-page-footer{display:block;overflow:hidden;background-color:var(--footer-color);color:var(--footer-text-color);font-size:16px}ks-page-footer .about{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:50px 70px 40px 70px;margin:auto}ks-page-footer .contact>span:first-of-type{display:block;color:var(--footer-heading-color);font-family:var(--font-emphasis);font-weight:700;font-size:18px;margin:0 0 15px 0}ks-page-footer .contact a,ks-page-footer .contact>span{display:block;text-decoration:none !important;font-size:16px;margin-bottom:5px;color:var(--footer-text-color);-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-page-footer .contact a:hover{color:var(--footer-text-color-hover)}ks-page-footer .contact a:active{color:var(--footer-text-color-active)}ks-page-footer .contact ks-icon{margin-right:5px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;min-height:100px}ks-page-footer .newsletter{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-flow:column nowrap;flex-flow:column nowrap;text-align:center;padding:0 0 0 30px;-ms-flex-negative:0;flex-shrink:0}ks-page-footer .newsletter>div{font-family:var(--font-emphasis)}ks-page-footer .newsletter>div:last-of-type{font-size:48px;line-height:40px;font-weight:700;margin:5px 0 20px 0}ks-page-footer .newsletter ks-button{width:100%}ks-page-footer .portals{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px;border-top:solid 1px #2b2b2b}ks-page-footer .portals>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:10px}ks-page-footer .separator{width:1px;height:35px;margin:0 20px;background-color:#2b2b2b}ks-page-footer .software{background-color:var(--footer-color-darker);color:var(--footer-text-color-darker);font-size:13px;text-align:center;padding:10px}ks-page-footer .software>a{color:var(--footer-text-color-darker)}@media only screen and (max-width: 1060px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:50px 30px 40px 30px}ks-page-footer .contact{max-width:220px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}ks-page-footer .newsletter{margin-top:40px;padding:40px 0 0 0;border-top:solid 1px #2b2b2b}ks-page-footer .newsletter ks-button{max-width:290px}}@media only screen and (max-width: 640px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:30px}ks-page-footer .links{margin-top:0px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}ks-page-footer .links>*{margin-top:40px;margin-right:0px;padding:0}ks-page-footer .newsletter>div{font-size:14px}ks-page-footer .newsletter>div:last-of-type{font-size:40px;margin-bottom:10px}}";var B=e("ks_page_footer",function(){function e(e){t(this,e)}e.prototype.render=function(){var e=s.get("phone");var t=s.get("email");var o=s.get("workingHours");var i=s.get("company");var r=s.get("address");var a=s.get("softwareLink");var l=s.get("translations");return[n("div",{class:"about"},n("div",{class:"links"},s.get("footerLinks").map((function(e){return n("ks-footer-links",{heading:e.name},e.items.map((function(e){return n("li",null,n("a",{href:e.link},e.name))})))})),n("div",{class:"contact"},n("span",null,l.footerContact),n("a",{style:{display:"none"}}),n("a",{href:"tel:".concat(e)},n("ks-icon",{name:"phone"}),n("span",null,e)),n("a",{href:"mailto:".concat(t)},n("ks-icon",{name:"mail"}),n("span",null,t)),n("span",null,n("ks-icon",{name:"clock",size:.9})," ",o),n("span",null,n("ks-icon",{name:"home",size:.9})," ",i),n("span",null,n("ks-icon",{name:"map-pin",size:.9})," ",r))),n("div",{class:"newsletter"},n("div",null,l.footerNewsletterSmall),n("div",null,l.footerNewsletterLarge),n("ks-button",{light:true,border:true,name:l.footerNewsletterSubmit,onClick:function(){var e;return(e=document.querySelector("ks-newsletter-popup-edrone"))===null||e===void 0?void 0:e.Show()}}))),n("div",{class:"portals"},n("div",null,s.get("social").map((function(e){return n("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image})}))),n("div",null,s.get("reviewers").map((function(e){return n("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image})})))),n("div",{class:"software"},n("a",{href:a,rel:"nofollow"},l.footerSoftware))]};return e}());B.style=T;var N=e("ks_page_header",function(){function e(e){t(this,e)}e.prototype.render=function(){return n(r,null,s.get("developmentWarning")?n("ks-development-warning",null):null,n("ks-top-banner",null),n("ks-navbar",null))};return e}());var R="ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);transform:translateX(100%);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);transform:translateX(-100%)}";l.use([p,c]);var M=e("ks_sidepanel",function(){function e(e){t(this,e);this.name="";this.message="";this.stack="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.overlay.show();setTimeout((function(){e.visible="visible"}),10);return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.onClosed=function(){this.visible="hidden"};e.prototype.render=function(){var e=this;return n("ks-overlay",{dark:true},n("nav",{class:"content ".concat(this.visible)},n("button",{class:"close",onClick:function(){return e.hide()}},n("ks-icon",{name:"x"})),n("slot",null)))};Object.defineProperty(e.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());M.style=R;var W="ks-top-banner{display:block;position:relative;padding:10px 10px;font-family:var(--font-emphasis);font-size:15px;font-weight:700;line-height:15px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-top-banner[hidden]{display:none}ks-top-banner .container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:inherit !important;text-decoration:none !important;text-align:center}ks-top-banner ks-img2{width:auto;height:35px;margin:-8px 3px -8px 0px}@media only screen and (max-width: 959px){ks-top-banner{font-size:14px;line-height:14px}}@media only screen and (max-width: 480px){ks-top-banner{font-size:13px;line-height:13px}}";var F=e("ks_top_banner",function(){function e(e){t(this,e)}e.prototype.render=function(){var e=s.get("topNotice");if(!e||Object.keys(e).length<=0)return n(r,{hidden:true});var t=[e.image?n("ks-img2",{vertical:true,sync:true,src:e.image}):null,n("span",null,e.message)];return n(r,{style:{backgroundColor:e.color,color:e.textColor}},e.link?n("a",{class:"container",href:e.link},t):n("div",{class:"container"},t))};return e}());F.style=W}}}));