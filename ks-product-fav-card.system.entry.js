System.register(["./index-5ab56926.system.js","./addToCart-ae4af0d1.system.js","./favourites-e66b616d.system.js","./common-e9ca903a.system.js","./tracker-b01d2a0e.system.js","./index-1eb13b56.system.js","./commonDynamic-e40d9ffc.system.js","./fetch-89de6a18.system.js","./dataLayer-87ddf33f.system.js"],(function(t){"use strict";var a,r,e,s,n;return{setters:[function(t){a=t.r;r=t.h},function(t){e=t.a},function(t){s=t.r},function(t){n=t.c},function(){},function(){},function(){},function(){},function(){}],execute:function(){var i="ks-product-fav-card{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-wrap:nowrap;flex-wrap:nowrap}ks-product-fav-card>a{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;text-decoration:none !important;color:#000 !important}ks-product-fav-card .image{max-height:180px;max-width:180px;margin-right:20px}ks-product-fav-card h3{font-family:var(--font-emphasis);margin-bottom:5px;font-size:20px}ks-product-fav-card p{font-size:15px}ks-product-fav-card .price{font-size:18px;font-family:var(--font-emphasis)}ks-product-fav-card .price .current{font-weight:700;color:var(--color-secondary)}ks-product-fav-card .price .previous{margin:0px 10px;color:#909090}ks-product-fav-card .buttons{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:10px 0px;margin-left:10px}ks-product-fav-card .buttons button{background-color:var(--color-secondary);color:white;border-style:none;width:50px;height:100%;position:relative;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-product-fav-card .buttons button:hover{background-color:var(--color-secondary-hover)}ks-product-fav-card .buttons button:active{background-color:var(--color-secondary-active)}ks-product-fav-card .buttons .cart{border-top:solid 1px var(--color-secondary-darker)}ks-product-fav-card .buttons .cart span{display:none}ks-product-fav-card[unavailable] .buttons .cart{border-top:none;background-color:var(--color-faded);color:var(--color-faded-text)}@media screen and (max-width: 750px){ks-product-fav-card p{display:none}}@media screen and (max-width: 550px){ks-product-fav-card{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}ks-product-fav-card>a{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}ks-product-fav-card .image{margin:0}ks-product-fav-card .buttons{-ms-flex-direction:row;flex-direction:row;margin:0;width:100%}ks-product-fav-card .buttons button{height:40px}ks-product-fav-card .buttons .fav{-ms-flex:1 0 40px;flex:1 0 40px;width:40px;border-radius:100px;margin-right:5px}ks-product-fav-card .buttons .cart{width:100%;border-radius:10px}ks-product-fav-card .buttons .cart ks-icon{display:none}ks-product-fav-card .buttons .cart span{display:inline}}";var o=t("ks_product_fav_card",function(){function t(t){a(this,t);this.unavailable=false;this.linkOnly=false;this.cartLoading=false;this.favLoading=false;this.favSuccess=false}t.prototype.cart=function(){var t=this;this.cartLoading=true;var a=JSON.parse(this.categories);var r={id:this.productId,traitIDs:"",sku:this.sku,brandName:this.brand,name:this.name,link:this.link,image:this.img,imageFull:this.imgFull,currentPrice:parseFloat(this.currentPrice),quantity:1,currency:this.currency,categories:a};e(r,1).then((function(){return t.cartLoading=false}))};t.prototype.favourites=function(){if(this.favLoading)return;this.favLoading=true;s(this.productId).then((function(){location.reload()}))};t.prototype.render=function(){var t=this;var a=n.get("translations");return[r("a",{href:this.link,"aria-label":this.name},r("div",{class:"image"},r("ks-img2",{fill:true,limit:true,center:true,src:this.img,webp:this.webp,width:280,height:280,alt:this.name})),r("div",{class:"info"},r("h3",null,this.name),r("div",{class:"price"},r("span",{class:"current"},this.currentPrice," zł"),this.previousPrice?r("s",{class:"previous"},this.previousPrice," zł"):null),this.summary?r("p",null,this.summary):null)),r("div",{class:"buttons"},r("button",{class:"fav",onClick:function(){return t.favourites()}},this.favLoading?r("ks-loader",null):r("ks-icon",{name:"x"})),r("button",{disabled:this.unavailable,class:"cart",onClick:function(){return t.cart()}},this.cartLoading?r("ks-loader",null):[r("ks-icon",{name:"shopping-bag"}),r("span",null,this.unavailable?a.unavailable:a.addToCart)]))]};return t}());o.style=i}}}));