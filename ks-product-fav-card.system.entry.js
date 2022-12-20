System.register(["./index-5ab56926.system.js","./addToCart-70c5cb5e.system.js","./favourites-0d7183cd.system.js","./common-e9ca903a.system.js","./commonDynamic-e40d9ffc.system.js","./index-1eb13b56.system.js","./fetch-89de6a18.system.js","./dataLayer-687f30f2.system.js"],(function(t){"use strict";var r,a,o,e,s;return{setters:[function(t){r=t.r;a=t.h},function(t){o=t.a},function(t){e=t.r},function(t){s=t.c},function(){},function(){},function(){},function(){}],execute:function(){var i="ks-product-fav-card{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-wrap:nowrap;flex-wrap:nowrap}ks-product-fav-card>a{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;text-decoration:none !important;color:#000 !important}ks-product-fav-card .image{max-height:180px;max-width:180px;margin-right:20px}ks-product-fav-card h3{font-family:var(--font-emphasis);margin-bottom:5px;font-size:20px}ks-product-fav-card p{font-size:15px}ks-product-fav-card .price{font-size:18px;font-family:var(--font-emphasis)}ks-product-fav-card .price .current{font-weight:700;color:var(--color-secondary)}ks-product-fav-card .price .previous{margin:0px 10px;color:#909090}ks-product-fav-card .buttons{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:10px 0px;margin-left:10px}ks-product-fav-card .buttons button{background-color:var(--color-secondary);color:white;border-style:none;width:50px;height:100%;position:relative;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-product-fav-card .buttons button:hover{background-color:var(--color-secondary-hover)}ks-product-fav-card .buttons button:active{background-color:var(--color-secondary-active)}ks-product-fav-card .buttons .cart{border-top:solid 1px var(--color-secondary-darker)}ks-product-fav-card .buttons .cart span{display:none}ks-product-fav-card[unavailable] .buttons .cart{border-top:none;background-color:var(--color-faded);color:var(--color-faded-text)}@media screen and (max-width: 750px){ks-product-fav-card p{display:none}}@media screen and (max-width: 550px){ks-product-fav-card{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}ks-product-fav-card>a{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}ks-product-fav-card .image{margin:0}ks-product-fav-card .buttons{-ms-flex-direction:row;flex-direction:row;margin:0;width:100%}ks-product-fav-card .buttons button{height:40px}ks-product-fav-card .buttons .fav{-ms-flex:1 0 40px;flex:1 0 40px;width:40px;border-radius:100px;margin-right:5px}ks-product-fav-card .buttons .cart{width:100%;border-radius:10px}ks-product-fav-card .buttons .cart ks-icon{display:none}ks-product-fav-card .buttons .cart span{display:inline}}";var n=t("ks_product_fav_card",function(){function t(t){r(this,t);this.unavailable=false;this.linkOnly=false;this.cartLoading=false;this.favLoading=false;this.favSuccess=false}t.prototype.cart=function(){var t=this;this.cartLoading=true;var r={id:this.product.id,traitIDs:"",sku:this.product.sku,brandName:this.product.brandName,name:this.product.name,link:this.product.link,image:this.product.image,imageFull:this.product.imageFull,currentPrice:parseFloat(this.product.currentPrice),quantity:1,currency:this.product.currency,categories:this.product.categories,breadcrumbs:this.product.breadcrumbs};o(r,1).then((function(){return t.cartLoading=false}))};t.prototype.favourites=function(){if(this.favLoading)return;this.favLoading=true;e(this.product.id).then((function(){location.reload()}))};t.prototype.render=function(){var t=this;var r=s.get("translations");return[a("a",{href:this.product.link,"aria-label":this.product.name},a("div",{class:"image"},a("ks-img2",{fill:true,limit:true,center:true,src:this.product.image,webp:this.product.webp,width:280,height:280,alt:this.product.name})),a("div",{class:"info"},a("h3",null,this.product.name),a("div",{class:"price"},a("span",{class:"current"},this.product.currentPrice," zł"),this.product.previousPrice?a("s",{class:"previous"},this.product.previousPrice," zł"):null),this.summary?a("p",null,this.summary):null)),a("div",{class:"buttons"},a("button",{class:"fav",onClick:function(){return t.favourites()}},this.favLoading?a("ks-loader",null):a("ks-icon",{name:"x"})),a("button",{disabled:this.unavailable,class:"cart",onClick:function(){return t.cart()}},this.cartLoading?a("ks-loader",null):[a("ks-icon",{name:"shopping-bag"}),a("span",null,this.unavailable?r.unavailable:r.addToCart)]))]};return t}());n.style=i}}}));