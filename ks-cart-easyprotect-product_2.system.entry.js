System.register(["./index-229c64eb.system.js","./cart-bc94dbfb.system.js","./cart-2f547b5e.system.js","./price-a8e38dc6.system.js","./index-0ecc4079.system.js","./fetch-8edb5396.system.js","./dataLayer-4a0db88d.system.js","./commonDynamic-aeb37ba1.system.js","./common-ed4cb7b7.system.js"],(function(t){"use strict";var e,r,a,o,n,i,s;return{setters:[function(t){e=t.r;r=t.h;a=t.g},function(t){o=t.c},function(t){n=t.e;i=t.g},function(t){s=t.p},function(){},function(){},function(){},function(){},function(){}],execute:function(){var c="ks-cart-easyprotect-product{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}ks-cart-easyprotect-product .image{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;max-width:80px;max-height:80px;margin-right:10px}ks-cart-easyprotect-product .info{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;border-radius:10px;padding:10px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:5px 0;min-height:68px;font-family:var(--font-emphasis);-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;background-color:#f2f2f2;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-cart-easyprotect-product:hover .info{background-color:#e2e2e2}ks-cart-easyprotect-product[active] .info{color:white;background-color:#4e2e82}ks-cart-easyprotect-product .info .warranty{font-weight:700}@media (max-width: 420px){ks-cart-easyprotect-product{font-size:15px}ks-cart-easyprotect-product .image{max-width:50px;max-height:50px;margin:0 5px}ks-cart-easyprotect-product .info{padding:8px 10px 8px 15px}ks-cart-easyprotect-product .info .warranty{font-size:14px}}";var p=t("ks_cart_easyprotect_product",function(){function t(t){e(this,t);this.image=undefined;this.name=undefined;this.warranty="";this.active=false}t.prototype.render=function(){return[r("div",{class:"image"},r("ks-img2",{src:this.image,width:200,height:200})),r("div",{class:"info"},r("div",{class:"name",innerHTML:this.name}),this.warranty?r("div",{class:"warranty"},this.warranty):null)]};return t}());p.style=c;var d='ks-cart-easyprotect-warranty{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:#f2f2f2;margin-bottom:10px}ks-cart-easyprotect-warranty .name{position:relative;margin:8px 15px;max-height:50px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;font-family:var(--font-emphasis)}ks-cart-easyprotect-warranty .name:after{content:"";position:absolute;top:30px;right:0;width:30%;height:20px;background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(90%, rgb(242, 242, 242)));background:linear-gradient(to right, rgba(255, 255, 255, 0), rgb(242, 242, 242) 90%)}ks-cart-easyprotect-warranty .control{display:-ms-flexbox;display:flex}ks-cart-easyprotect-warranty .info{min-width:135px;font-family:var(--font-emphasis);font-weight:700;background-color:var(--easyprotect-color)}ks-cart-easyprotect-warranty .price{height:40px;min-width:80px;line-height:40px;text-align:center;background-color:#64419c !important;color:#ffffff}ks-cart-easyprotect-warranty .warranty-select{position:relative}ks-cart-easyprotect-warranty .warranty-select ks-icon{position:absolute;top:6px;right:5px;color:white;pointer-events:none}ks-cart-easyprotect-warranty select{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;outline:none;border:none;background:none;color:#ffffff;padding:10px 30px 10px 10px}ks-cart-easyprotect-warranty select option{color:#151515}ks-cart-easyprotect-warranty:not([product-id]) .warranty-select{color:white !important;padding:7px 20px}ks-cart-easyprotect-warranty .close{-ms-flex-item-align:stretch;align-self:stretch;min-width:40px;border-style:none;outline-style:none;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;background-color:var(--easyprotect-color);color:#ffffff;border-left:#64419c 1px solid}ks-cart-easyprotect-warranty .close ks-icon{line-height:unset !important}ks-cart-easyprotect-warranty .close:hover{background-color:var(--easyprotect-color-hover)}ks-cart-easyprotect-warranty .close:active{background-color:var(--easyprotect-color-active)}@media (min-width: 860px){ks-cart-easyprotect-warranty[insured] .info,ks-cart-easyprotect-warranty:not([product-id]) .info{display:-ms-flexbox;display:flex;min-width:200px}ks-cart-easyprotect-warranty .name{text-overflow:ellipsis;white-space:nowrap;width:100%}ks-cart-easyprotect-warranty .control{-ms-flex:1 0 auto;flex:1 0 auto}}@media (max-width: 420px){ks-cart-easyprotect-warranty{display:inline-block}ks-cart-easyprotect-warranty .info{display:-ms-flexbox;display:flex;width:100%}ks-cart-easyprotect-warranty .warranty-select{width:100%;padding-top:3px}ks-cart-easyprotect-warranty .warranty-select ks-icon{top:8px}ks-cart-easyprotect-warranty .name{margin:12px 15px}ks-cart-easyprotect-warranty .price{width:50%}}';var l=t("ks_cart_easyprotect_warranty",function(){function t(t){e(this,t);this.productId=undefined;this.insured=undefined;this.active=undefined;this.name=undefined;this.time=undefined;this.price=undefined}t.prototype.componentWillLoad=function(){var t=this;if(this.productId){if(!this.active)this.active=Object.keys(o.get("easyprotect")[this.productId])[0];this.update();o.onChange("easyprotect",(function(){return t.update()}))}};t.prototype.componentWillUpdate=function(){if(this.productId){this.root.querySelector("select").value=this.active;this.update()}};t.prototype.update=function(){if(o.get("easyprotect")[this.productId]===undefined)return;this.name=o.get("products")[this.productId].name;this.options=o.get("easyprotect")[this.productId];this.entries=Object.entries(this.options);this.price=this.options[this.active]};t.prototype.render=function(){var t=this;var e=s(this.price);return[r("div",{class:"name",innerHTML:this.name.replace("<br>"," "),title:this.name.replace("<br>"," ").replace(/(<([^>]+)>)/gi,"")}),r("div",{class:"control"},r("div",{class:"info"},r("div",{class:"warranty-select"},this.productId?[r("select",{onChange:function(){return t.change()}},this.entries.map((function(e){var a=e[0],o=e[1];return r("option",{value:a,selected:t.active==a},t.months(parseInt(a)))}))),r("ks-icon",{name:"chevron-down"})]:this.months(this.time)),r("div",{class:"price"},e)),this.productId&&this.insured?r("button",{class:"close",onClick:function(){return t.remove()}},r("ks-icon",{name:"x"})):null)]};t.prototype.change=function(){var t;this.active=this.root.querySelector("select").value;if(this.insured)n((t={},t[this.productId]=this.active,t))};t.prototype.remove=function(){i(this.productId)};t.prototype.months=function(t){var e=parseInt("".concat(t)["".concat(t).length-1]);var r="miesięcy";if(t==0)r="miesiąc";else if(t>=5&&t<=21)r="miesięcy";else if(t>21&&e>=2&&e<=4)r="miesiące";return"".concat(t," ").concat(r)};Object.defineProperty(t.prototype,"root",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());l.style=d}}}));