System.register(["./index-10c04d38.system.js","./price-5a9459e1.system.js","./common-8ecb4f1a.system.js","./index-afb1cee9.system.js"],(function(e){"use strict";var t,i,n,r;return{setters:[function(e){t=e.r;i=e.h;n=e.c},function(e){r=e.p},function(){},function(){}],execute:function(){var s="ks-cart-product-price{display:block;margin-top:10px}ks-cart-product-price>div{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-cart-product-price .sentence{-ms-flex:1;flex:1;font-size:18px;font-weight:700;text-align:center}ks-cart-product-price .price{color:#e21334}ks-cart-product-price .shipping{display:inline-block;margin-left:15px}ks-cart-product-price .edit{-webkit-box-sizing:border-box;box-sizing:border-box;width:auto;max-width:100%}ks-cart-product-price .edit a{padding:3px 20px}@media only screen and (min-width: 960px){ks-cart-product-price .sentence{text-align:right}}@media only screen and (max-width: 959px){ks-cart-product-price .edit{margin-top:10px;width:100%}}@media only screen and (max-width: 640px){ks-cart-product-price .shipping{display:block;margin-left:0;font-size:16px}}";var a=e("ks_cart_product_price",function(){function e(e){t(this,e);this.price=undefined;this.amount=undefined;this.shippingTime="";this.editLink="";this.productTableTotal="";this.backToCart="Wróć do koszyka";this.loading=0;this.loadingDelayed=false}e.prototype.LoadingWatcher=function(){var e=this;if(this.loading){this.loadingTimeout=setTimeout((function(){e.loadingDelayed=true}),300)}else{clearTimeout(this.loadingTimeout);this.loadingDelayed=false}};e.prototype.componentDidLoad=function(){this.root.style.display="block";this.LoadingWatcher()};e.prototype.render=function(){var e=r(this.price);return[i("div",null,i("div",{class:"sentence ks-text-decorated"},this.loadingDelayed&&this.loading?i("div",{class:"uk-animation-fade","uk-spinner":"ratio: 0.7"}):[i("span",null,this.productTableTotal," ",i("span",{class:"price"},e)),this.shippingTime!=""?i("span",{class:"shipping"},this.shippingTime):null]),this.editLink?i("div",{class:"edit"},i("a",{href:this.editLink,class:"uk-button uk-button-default uk-width-1-1"},this.backToCart)):null),i("hr",null)]};Object.defineProperty(e.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{loading:["LoadingWatcher"]}},enumerable:false,configurable:true});return e}());a.style=s}}}));