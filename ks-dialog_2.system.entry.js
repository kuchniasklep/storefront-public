var __awaiter=this&&this.__awaiter||function(t,e,i,o){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function a(t){try{l(o.next(t))}catch(e){r(e)}}function s(t){try{l(o["throw"](t))}catch(e){r(e)}}function l(t){t.done?i(t.value):n(t.value).then(a,s)}l((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,n,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(a){if(o)throw new TypeError("Generator is already executing.");while(i)try{if(o=1,n&&(r=a[0]&2?n["return"]:a[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;if(n=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;n=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(a[0]===6&&i.label<r[1]){i.label=r[1];r=a;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(a);break}if(r[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(s){a=[6,s];n=0}finally{o=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-9d88b83b.system.js"],(function(t){"use strict";var e,i,o,n;return{setters:[function(t){e=t.r;i=t.e;o=t.h;n=t.g}],execute:function(){var r="ks-dialog{display:block}ks-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;padding:30px;line-height:24px}ks-dialog[nopadding] .content{padding:0px !important}@media (max-width: 720px){ks-dialog .content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;padding:20px}ks-dialog[smallmobile] .content{height:auto;width:90%}}@media (max-width: 420px){ks-dialog .content{font-size:13px;line-height:18px;padding:15px}ks-dialog[smallmobile] .content{height:auto;min-width:280px}}ks-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-dialog .close{position:absolute;top:20px;right:20px;border-style:none;outline-style:none;background-color:transparent;z-index:200;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog[dark] .close{color:white}ks-dialog .overlay{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;padding:30px;background-color:rgba(255,255,255, 0.8);-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog .opaque{background-color:#ffffff}ks-dialog .overlay>div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-box-sizing:border-box;box-sizing:border-box;max-width:800px;width:80%;text-align:center}ks-dialog .overlay>div>*{-webkit-animation:vertical-swipe-in-short 0.5s;animation:vertical-swipe-in-short 0.5s}ks-dialog .overlay .header{font-family:var(--font-emphasis);font-size:20px;font-weight:700}";var a=t("ks_dialog",function(){function t(t){e(this,t);this.closed=i(this,"closed",7);this.close=true;this.loading=false;this.success=false;this.failure=false;this.heading="";this.message=""}t.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.overlay.show();return[2]}))}))};t.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.overlay.hide();return[2]}))}))};t.prototype.showLoading=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.loading=true;this.close=false;return[2]}))}))};t.prototype.showSuccess=function(t,e){return __awaiter(this,void 0,void 0,(function(){var i=this;return __generator(this,(function(o){this.heading=t;this.message=e;setTimeout((function(){i.success=true;i.loading=false;i.close=true}),400);return[2]}))}))};t.prototype.showFailure=function(t,e){return __awaiter(this,void 0,void 0,(function(){var i=this;return __generator(this,(function(o){this.heading=t;this.message=e;setTimeout((function(){i.failure=true;i.loading=false;i.close=true}),400);return[2]}))}))};t.prototype.closeHandler=function(){var t=this;if(this.success||this.failure){setTimeout((function(){t.success=false;t.failure=false}),400)}};t.prototype.render=function(){var t=this;return o("ks-overlay",{dark:this.dark,close:this.close,onClosed:function(){return t.closeHandler()}},o("div",{class:"content"},this.close?o("button",{class:"close",onClick:function(){return t.hide()}},o("ks-icon",{name:"x",size:1.3})):null,o("slot",null),this.loading?o("div",{class:"overlay"},o("ks-loader",{large:true,dark:true})):null,this.success||this.failure?o("div",{class:"overlay opaque"},o("div",null,o("ks-icon",{name:this.success?"check":"alert-triangle",size:4}),o("p",{class:"header"},this.heading),o("p",null,this.message))):null))};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());a.style=r;var s="ks-overlay{display:none;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden;z-index:100000;position:fixed;height:100%;width:100%;top:0;left:0;-webkit-backdrop-filter:var(--overlay-filter);backdrop-filter:var(--overlay-filter);background-color:var(--overlay-background);color:var(--overlay-text)}ks-overlay.active{opacity:1.0;-webkit-animation:showanimation 0.3s ease;animation:showanimation 0.3s ease}ks-overlay:not(.active){opacity:0.0;-webkit-animation:hideanimation 0.3s ease;animation:hideanimation 0.3s ease}ks-overlay[dark]{-webkit-backdrop-filter:var(--overlay-dark-filter);backdrop-filter:var(--overlay-dark-filter);background-color:var(--overlay-dark-background);color:var(--overlay-dark-text)}@-webkit-keyframes showanimation{from{opacity:0}to{opacity:1}}@keyframes showanimation{from{opacity:0}to{opacity:1}}@-webkit-keyframes hideanimation{from{opacity:1}to{opacity:0}}@keyframes hideanimation{from{opacity:1}to{opacity:0}}";var l=t("ks_overlay",function(){function t(t){e(this,t);this.closed=i(this,"closed",7);this.dark=false;this.close=true;this.timeoutLength=300;this.body=document.body}t.prototype.componentDidLoad=function(){var t=this;this.root.addEventListener("mousedown",(function(e){if(e.currentTarget==e.target&&t.close)t.hide()}),false)};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){clearTimeout(this.timeout);this.scrollToggle();this.root.classList.add("active");this.root.style.display="flex";return[2]}))}))};t.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){clearTimeout(this.timeout);this.scrollToggle();this.root.classList.remove("active");this.timeout=setTimeout((function(){t.root.style.display="none"}),this.timeoutLength);this.closed.emit();return[2]}))}))};t.prototype.scrollToggle=function(){if(this.body.style.position=="fixed"){this.body.style.position="static";this.body.style.overflowY="auto";this.body.style.width="unset";window.scrollTo(0,this.scroll);return}this.scroll=window.scrollY;this.body.style.position="fixed";this.body.style.top="".concat(-this.scroll,"px");this.body.style.overflowY="scroll";this.body.style.width="100%"};t.prototype.render=function(){return o("slot",null)};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());l.style=s}}}));