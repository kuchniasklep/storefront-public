System.register(["./index-c11c20c8.system.js","./cart-store-3b9a29b9.system.js","./index-4810e2ad.system.js"],(function(e){"use strict";var t,n,r,c,a;return{setters:[function(e){t=e.r;n=e.h;r=e.H;c=e.g},function(e){a=e.s},function(){}],execute:function(){var o="ks-cart-recycle{display:block;padding:30px}ks-cart-recycle h2{font-size:22px;text-transform:uppercase;font-family:var(--font-emphasis);font-weight:700;margin-top:20px}ks-cart-recycle.hidden{display:none}@media (max-width: 960px){ks-cart-recycle{padding:15px}}";var s=e("ks_cart_recycle",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){var e=this;var t=function(){e.enabled=a.get("recycle").length>0};a.onChange("recycle",t);t()};e.prototype.send=function(e){var t=new Headers;t.append("pragma","no-cache");t.append("cache-control","no-cache");var n=this.root.querySelector("form");e.preventDefault();var r=new FormData(n);fetch(a.get("api").recycleChange,{method:"POST",headers:t,credentials:"same-origin",body:r})};e.prototype.render=function(){var e=this;return n(r,{class:!this.enabled?"hidden":""},n("slot",null),n("form",{method:"post",name:"recycle",onChange:function(t){return e.send(t)}},a.get("recycle").map((function(e){return n("ks-input-check",{name:"recycle["+e.id+"]",value:e.name,label:e.name,checked:e.checked})}))))};Object.defineProperty(e.prototype,"root",{get:function(){return c(this)},enumerable:false,configurable:true});return e}());s.style=o}}}));