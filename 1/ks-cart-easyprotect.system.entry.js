System.register(["./index-c11c20c8.system.js","./cart-store-d51c95c1.system.js","./index-4810e2ad.system.js"],(function(t){"use strict";var e,s,a,n,r;return{setters:[function(t){e=t.r;s=t.h;a=t.H;n=t.g},function(t){r=t.s},function(){}],execute:function(){var i="ks-cart-easyprotect{display:block;padding:30px}ks-cart-easyprotect.hidden{display:none}ks-cart-easyprotect .top{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;position:relative}ks-cart-easyprotect .top .content{-ms-flex:1 1 auto;flex:1 1 auto}ks-cart-easyprotect .top .content h2{font-size:22px;text-transform:uppercase;font-family:var(--font-emphasis);font-weight:700}ks-cart-easyprotect .top ks-img2{max-width:120px;width:100%;margin-left:10px}ks-cart-easyprotect .insured{margin-top:10px}ks-cart-easyprotect .insured .item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:10px;font-family:var(--font-emphasis);background-color:#f2f2f2;padding:5px 10px}ks-cart-easyprotect .insured .item .name{-ms-flex:1 1 auto;flex:1 1 auto;padding:5px;background-color:#f2f2f2;font-size:16px}ks-cart-easyprotect .insured .item .option{margin:0 10px;font-size:17px;font-weight:700}ks-cart-easyprotect .addproducts .content{padding:20px 20px 0 20px}@media (max-width: 960px){ks-cart-easyprotect{padding:15px}}@media (max-width: 640px){ks-cart-easyprotect .top ks-img2{position:absolute;top:-5px;right:0;max-width:40px;max-height:40px}ks-cart-easyprotect .top .content{font-size:15px}}";var o=t("ks_cart_easyprotect",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){var t=this;var e=function(){t.insured=Object.entries(r.get("insured"));t.enabled=Object.keys(r.get("easyprotect")).length>0};r.onChange("insured",e);r.onChange("easyprotect",e);e()};t.prototype.render=function(){return s(a,{class:!this.enabled?"hidden":""},s("div",{class:"top"},s("div",{class:"content"},s("slot",null)),s("ks-img2",{src:this.image,width:this.width,height:this.height})),s("div",{class:"insured"},this.insured.map((function(t){var e=t[0],a=t[1];return s("ks-cart-easyprotect-warranty",{insured:true,"product-id":e,active:a})}))),s("slot",{name:"bottom"}))};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());o.style=i}}}));