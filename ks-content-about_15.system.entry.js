System.register(["./index-229c64eb.system.js","./autoplay-d41245b3.system.js","./pagination-640d78dc.system.js","./marked.umd-556abf5a.system.js","./_commonjsHelpers-8ab2ac47.system.js"],(function(t){"use strict";var e,n,i,a,o,r,s,c,l;return{setters:[function(t){e=t.r;n=t.h;i=t.H;a=t.g},function(t){o=t.A;r=t.w},function(t){s=t.S;c=t.P},function(t){l=t.m},function(){}],execute:function(){var p="ks-content-about{display:block;text-align:center;padding:10px}ks-content-about .main-image{width:150px;margin:auto}ks-content-about h2{margin:15px 0 10px 0}ks-content-about p,ks-content-about h2,ks-content-about h3{max-width:1200px;margin-left:auto;margin-right:auto}ks-content-about .items{margin-top:30px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;gap:10px}ks-content-about .item{max-width:300px;padding:7px}ks-content-about .item ks-img3{width:50px;height:50px;margin:0px auto 10px auto}ks-content-about .item h3{margin-bottom:7px}ks-content-about ks-button{display:none}@media (max-width: 1100px){ks-content-about.expand .items{display:block}ks-content-about.expand .item{max-width:100%}}@media (max-width: 800px){ks-content-about ks-button{display:block}ks-content-about.expand .items{display:none}ks-content-about[expanded].expand .items{display:-ms-flexbox;display:flex}}";var d=t("ks_content_about",function(){function t(t){e(this,t);this.content=undefined;this.expanded=false}t.prototype.render=function(){var t=this;var e=this.content.image;var a=this.content.heading;var o=this.content.paragraph;return n(i,{class:this.content.style},e?n("ks-img3",{class:"main-image",fit:"contain",image:e,webp:this.content.webp,alt:this.content.heading,width:this.content.width,height:this.content.height}):null,a?n("h2",null,a):null,o?n("p",null,o):null,n("div",{class:"items"},this.content.items.map((function(e){return t.item(e)}))),this.content.style=="expand"?n("ks-button",{border:true,round:true,name:this.expanded?"Zwiń":"Rozwiń",onClick:function(){return t.expanded=!t.expanded}}):null)};t.prototype.item=function(t){var e=t.image;var i=t.heading;var a=t.paragraph;return n("div",{class:"item"},e?n("ks-img3",{fit:"contain",image:t.image,webp:t.webp,alt:t.heading,width:t.width,height:t.height}):null,i?n("h3",null,i):null,a?n("p",null,a):null)};return t}());d.style=p;var x="ks-content-articles{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;max-width:1200px;margin:20px auto;width:100%;min-height:10px;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-content-articles>*{width:calc(25% - 10px);margin:5px;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (max-width: 639px){ks-content-articles>*{width:100%}}@media screen and (min-width: 640px) and (max-width: 959px){ks-content-articles>*{width:calc(50% - 10px)}}@media screen and (min-width: 960px) and (max-width: 1199px){ks-content-articles>*{width:calc(33.3333333333% - 10px)}}";var u=t("ks_content_articles",function(){function t(t){e(this,t);this.content=undefined}t.prototype.render=function(){return this.content.articles.map((function(t){return n("ks-article-card",{flat:true,link:t.link,heading:t.heading,image:t.image,webp:t.webp,date:t.date,views:t.views},n("p",null,t.description))}))};return t}());u.style=x;var m="ks-content-banners{display:block;margin:auto;position:relative}ks-content-banners .banner{position:relative;height:auto;max-height:550px;height:100vw}ks-content-banners .banner ks-img3{max-height:550px;height:100%}ks-content-banners .banner .text{position:absolute;inset:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-width:1000px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:auto;padding:50px}ks-content-banners .banner .text.horizontal-left{-ms-flex-align:start;align-items:flex-start;text-align:left}ks-content-banners .banner .text.horizontal-center{-ms-flex-align:center;align-items:center;text-align:center}ks-content-banners .banner .text.horizontal-right{-ms-flex-align:end;align-items:flex-end;text-align:right}ks-content-banners .banner .text.vertical-top{-ms-flex-pack:start;justify-content:flex-start}ks-content-banners .banner .text.vertical-center{-ms-flex-pack:center;justify-content:center}ks-content-banners .banner .text.vertical-bottom{-ms-flex-pack:end;justify-content:flex-end}ks-content-banners .banner .text .mainText{background-color:rgba(0, 0, 0, 0.5);-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);padding:10px 20px;font-size:22px;font-family:var(--font-emphasis)}ks-content-banners .banner .text .aboveText{text-shadow:0px 0 11px black, 0px 0 4px black;font-size:18px;margin-bottom:5px}@media screen and (max-width: 640px){ks-content-banners .banner .text{padding:15px}ks-content-banners .banner .text .mainText{padding:6px 15px;font-size:18px}ks-content-banners .banner .text .aboveText{font-size:16px;margin-bottom:3px}}ks-content-banners .swiper-wrapper{max-height:550px;height:100%}ks-content-banners a{position:relative}ks-content-banners .pagination{position:absolute;left:0;right:0;bottom:0px;height:35px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;opacity:0;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-content-banners[loaded] .pagination{opacity:1}ks-content-banners .swiper-pagination{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:10px}ks-content-banners .swiper-pagination-bullet{height:10px;width:10px;margin:0 5px;opacity:1;-webkit-transition:background-color 0.3s ease,\n                border 0.3s ease;transition:background-color 0.3s ease,\n                border 0.3s ease}ks-content-banners .swiper-pagination-bullet-active{background-color:white;opacity:1}@media (max-width: 638px){ks-content-banners .pagination{display:none}}ks-content-banners[home]{margin-bottom:20px}ks-content-banners[home] .pagination{bottom:-35px}ks-content-banners[home] .swiper-pagination-bullet{background-color:rgba(29, 29, 29, 0.22)}ks-content-banners[home] .swiper-pagination-bullet:hover{background-color:rgba(29, 29, 29, 0.192)}ks-content-banners[home] .swiper-pagination-bullet-active{background-color:rgb(29, 29, 29) !important}";s.use([c,o]);var h=t("ks_content_banners",function(){function t(t){e(this,t);this.window=false;this.rendered=false;this.delay=0;this.autoplay=5e3;this.content=undefined;this.home=undefined;this.loaded=false;this.activeIndex=0}t.prototype.render=function(){var t=this;return n(i,null,n("div",{class:"swiper-container"},n("div",{class:"swiper-wrapper"},this.content.map((function(e,n){return t.banner(e,n,n==0)})))),n("div",{class:"pagination"},n("div",{class:"swiper-pagination"})))};t.prototype.banner=function(t,e,i){return n("a",{class:"banner swiper-slide",style:this.bannerStyle(t),href:t.link?t.link:null},n("ks-img3",{fit:t.fit,sync:i,image:t.image,webp:t.webp,alt:t.name,width:t.width,height:t.height}),n("div",{class:"text "+this.alignmentClass(t)},t.aboveText?n("div",{class:"aboveText"},t.aboveText):null,t.mainText?n("div",{class:"mainText"},t.mainText):null),t.theme&&e==this.activeIndex?n("style",{innerHTML:this.bannerTheme(t)}):null)};t.prototype.bannerStyle=function(t){return{backgroundColor:t.backgroundColor,color:t.textColor}};t.prototype.bannerTheme=function(t){return":root {\n\t\t\t--navbar-color: ".concat(t.theme.navbarColor," !important;\n\t\t\t--navbar-color-hover: ").concat(t.theme.navbarColorHover," !important;\n\t\t\t--navbar-color-active: ").concat(t.theme.navbarColorActive," !important;\n\t\t\t--navbar-category-color: ").concat(t.theme.categoryColor," !important;\n\t\t\t--navbar-category-hover: ").concat(t.theme.categoryColorHover," !important;\n\t\t\t--navbar-category-active: ").concat(t.theme.categoryColorActive," !important;\n\t\t\t--navbar-category-backdrop: ").concat(t.theme.categoryColorBackdrop," !important;\n\t\t}")};t.prototype.alignmentClass=function(t){var e=t.horizontalAlignment||"center";var n=t.verticalAlignment||"center";return"horizontal-".concat(e," vertical-").concat(n)};t.prototype.componentDidLoad=function(){var t=this;r.promise.then((function(){return t.initialize()}))};t.prototype.initialize=function(){var t=this;setTimeout((function(){t.carousel=new s("ks-content-banners .swiper-container",{observer:true,observeParents:true,centeredSlides:true,slidesPerView:"auto",preventInteractionOnTransition:true,grabCursor:true,autoplay:{delay:t.autoplay},pagination:{el:".swiper-pagination",clickable:true}});t.carousel.on("slideChange",(function(){t.activeIndex=t.carousel.activeIndex;console.log(t.activeIndex)}));t.loaded=true}),this.delay)};Object.defineProperty(t.prototype,"root",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());h.style=m;var f="ks-content-button{display:block;margin-bottom:20px}@media screen and (min-width: 420px){ks-content-button.center{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}ks-content-button.left{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}ks-content-button.right{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}ks-content-button a{padding-left:40px;padding-right:40px}}";var b=t("ks_content_button",function(){function t(t){e(this,t);this.text=undefined;this.content=undefined}t.prototype.render=function(){return n(i,{class:this.content.align},n("ks-button",{name:this.content.name,link:this.content.link,nofollow:this.content.nofollow,round:this.content.round,tall:this.content.size=="tall",narrow:this.content.size=="narrow",narrower:this.content.size=="narrower",border:this.content.style=="border",primary:this.content.style=="primary",secondary:this.content.style=="secondary",transparent:this.content.style=="transparent"}))};return t}());b.style=f;var g="ks-content-featured{display:block;-webkit-columns:2;-moz-columns:2;columns:2;-webkit-column-gap:10px;-moz-column-gap:10px;column-gap:10px;max-width:1100px;margin:auto;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-content-featured .featured{display:block;overflow:hidden;border-radius:10px;margin-bottom:10px;opacity:1.0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-content-featured .featured:hover{opacity:0.85}ks-content-featured .featured:active{opacity:0.7}ks-content-featured .featured>*{height:100%}@media screen and (max-width: 720px){ks-content-featured{-webkit-columns:1;-moz-columns:1;columns:1}}";var k=t("ks_content_featured",function(){function t(t){e(this,t);this.content=undefined}t.prototype.render=function(){return this.content.map((function(t){return n("a",{class:"featured",href:t.link},n("ks-img3",{fit:"cover",image:t.image,webp:t.webp,alt:t.name,width:t.width,height:t.height}))}))};return t}());k.style=g;var w="ks-content-featured-with-text{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-content-featured-with-text .featured{-ms-flex:1 1 500px;flex:1 1 500px;position:relative;background-color:#000000;height:500px}ks-content-featured-with-text .featured ks-img3{height:100%;width:100%;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;opacity:1}ks-content-featured-with-text .featured .overlay{position:absolute;inset:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-width:1000px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:auto}ks-content-featured-with-text .featured .overlay.horizontal-left{text-align:left}ks-content-featured-with-text .featured .overlay.horizontal-center{text-align:center}ks-content-featured-with-text .featured .overlay.horizontal-right{text-align:right}ks-content-featured-with-text .featured .overlay.vertical-top{-ms-flex-pack:start;justify-content:flex-start}ks-content-featured-with-text .featured .overlay.vertical-center{-ms-flex-pack:center;justify-content:center}ks-content-featured-with-text .featured .overlay.vertical-bottom{-ms-flex-pack:end;justify-content:flex-end}ks-content-featured-with-text .featured .content{background-color:rgba(0, 0, 0, 0.5);-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);padding:10px 20px;font-size:22px;font-family:var(--font-emphasis);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}ks-content-featured-with-text .featured .content .aboveText{font-size:16px;margin-bottom:-4px;font-weight:500}@media screen and (max-width: 1000px){ks-content-featured-with-text .featured{height:400px}}@media screen and (max-width: 640px){ks-content-featured-with-text .featured{height:300px}ks-content-featured-with-text .featured .content{padding:15px}ks-content-featured-with-text .featured .content .mainText{padding:6px 15px;font-size:18px}ks-content-featured-with-text .featured .content .aboveText{font-size:14px;margin-bottom:-4px}}@media screen and (max-width: 460px){ks-content-featured-with-text .featured .content{-ms-flex-pack:center;justify-content:center;padding:10px 5px 12px 5px}ks-content-featured-with-text .featured .content .text{text-align:center;width:100%;margin-bottom:5px;font-size:17px;font-weight:700}ks-content-featured-with-text .featured .content ks-button>*{padding:6px 20px}}";var y=t("ks_content_featured_with_text",function(){function t(t){e(this,t);this.content=undefined}t.prototype.render=function(){var t=this;return n(i,{style:this.containerStyle()},this.content.featured.map((function(e){return t.featured(e)})))};t.prototype.featured=function(t){return n("div",{class:"featured",style:this.bannerStyle(t)},n("ks-img3",{fit:t.fit,image:t.image,webp:t.webp,alt:t.name,width:t.width,height:t.height}),t.mainText||t.aboveText?n("div",{class:"overlay "+this.alignmentClass(t)},n("div",{class:"content"},n("div",{class:"text"},t.aboveText?n("div",{class:"aboveText"},t.aboveText):null,t.mainText),(t===null||t===void 0?void 0:t.link)?n("ks-button",{link:t.link,round:true,border:true,light:true,narrow:true,name:"Zobacz więcej"}):null)):null)};t.prototype.containerStyle=function(){return{gap:"".concat(this.content.gap,"px")||"unset"}};t.prototype.bannerStyle=function(t){return{backgroundColor:t.backgroundColor,color:t.textColor}};t.prototype.alignmentClass=function(t){var e=t.horizontalAlignment||"center";var n=t.verticalAlignment||"center";return"horizontal-".concat(e," vertical-").concat(n)};return t}());y.style=w;var v='ks-content-link-tiles{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-content-link-tiles .tile{-ms-flex:1 1 350px;flex:1 1 350px;height:280px;position:relative;background-color:#000000}ks-content-link-tiles .tile ks-img3{height:100%;width:100%;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;opacity:1}ks-content-link-tiles .tile:hover ks-img3{opacity:0.5}ks-content-link-tiles .tile ks-img3:after{content:"";position:absolute;inset:0px;background:-webkit-gradient(linear, left top, left bottom, from(rgb(0 0 0 / 60%)), color-stop(35%, rgba(0,0,0,0)));background:linear-gradient(180deg, rgb(0 0 0 / 60%) 0%, rgba(0,0,0,0) 35%)}ks-content-link-tiles .tile .text{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;position:absolute;inset:0px;padding:15px 20px;color:#ffffff}ks-content-link-tiles .tile .heading{font-family:var(--font-emphasis);font-size:22px;text-shadow:0 0 7px black}ks-content-link-tiles .tile .links{opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-content-link-tiles .tile:hover .links{opacity:1}ks-content-link-tiles .tile .links a{display:block;color:white !important;text-decoration:none !important;text-shadow:0 0 4px black}ks-content-link-tiles .tile .links a span{display:inline-block;-webkit-transform:translateX(0px);transform:translateX(0px);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-content-link-tiles .tile .links a:hover span{-webkit-transform:translateX(10px);transform:translateX(10px)}ks-content-link-tiles .tile .links a ks-icon{margin-left:-5px}@media screen and (max-width: 640px){ks-content-link-tiles .tile{height:220px}ks-content-link-tiles .tile .heading{font-size:18px}ks-content-link-tiles .tile .text{padding:10px 15px}ks-content-link-tiles .tile .links{opacity:1}ks-content-link-tiles .tile ks-img3{opacity:0.6}}@media screen and (max-width: 370px){ks-content-link-tiles .tile .links{font-size:13px}}';var z=t("ks_content_link_tiles",function(){function t(t){e(this,t);this.content=undefined}t.prototype.render=function(){var t=this;return n(i,{style:this.containerStyle()},this.content.tiles.map((function(e){return t.tile(e)})))};t.prototype.tile=function(t){return n("div",{class:"tile"},n("ks-img3",{fit:"cover",image:t.image,webp:t.webp,alt:t.name,width:t.width,height:t.height}),n("div",{class:"text"},n("div",{class:"heading"},t.name),n("div",{class:"links"},t.links.map((function(t){return n("a",{href:t.href},n("ks-icon",{name:"chevron-right"}),n("span",null,t.name))})))))};t.prototype.containerStyle=function(){return{gap:"".concat(this.content.gap,"px")||"unset"}};return t}());z.style=v;var _="ks-content-recipes{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;max-width:1200px;margin:20px auto;width:100%;min-height:10px;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-content-recipes>*{width:calc(25% - 10px);margin:5px;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (max-width: 639px){ks-content-recipes>*{width:100%}}@media screen and (min-width: 640px) and (max-width: 959px){ks-content-recipes>*{width:calc(50% - 10px)}}@media screen and (min-width: 960px) and (max-width: 1199px){ks-content-recipes>*{width:calc(33.3333333333% - 10px)}}";var j=t("ks_content_recipes",function(){function t(t){e(this,t);this.content=undefined}t.prototype.render=function(){return this.content.recipes.map((function(t){return n("ks-recipe-card",{flat:true,heading:t.heading,cuisine:t.cuisine,category:t.category,link:t.link,image:t.image,webp:t.webp,width:t.width,height:t.height,"cuisine-link":t.cuisineLink,"category-link":t.categoryLink})}))};return t}());j.style=_;var T="ks-content-separator{display:block}ks-content-separator.zero{padding:0 0}ks-content-separator.small{padding:20px 0}ks-content-separator.medium{padding:30px 0}ks-content-separator.large{padding:50px 0}";var C=t("ks_content_separator",function(){function t(t){e(this,t);this.text=undefined;this.content=undefined}t.prototype.render=function(){return n(i,{class:this.content.spacing},this.content.kind=="line"?n("hr",null):null)};return t}());C.style=T;var S="ks-content-thumbnails{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:5px;max-width:1200px;margin:auto;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-content-thumbnails .thumbnail{-ms-flex:1 1 300px;flex:1 1 300px;max-width:290px;aspect-ratio:2 / 1;border-radius:10px;overflow:hidden;opacity:1.0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-content-thumbnails .thumbnail:hover{opacity:0.85}ks-content-thumbnails .thumbnail:active{opacity:0.7}ks-content-thumbnails .thumbnail>*{height:100%}@media screen and (max-width: 500px){ks-content-thumbnails .thumbnail{max-width:100%}}";var H=t("ks_content_thumbnails",function(){function t(t){e(this,t);this.content=undefined}t.prototype.render=function(){return this.content.map((function(t){return n("a",{class:"thumbnail",href:t.link},n("ks-img3",{fit:"cover",image:t.image,webp:t.webp,alt:t.name,width:t.width,height:t.height}))}))};return t}());H.style=S;var P="ks-description-html{display:block}";var A=t("ks_description_html",function(){function t(t){e(this,t);this.html=undefined}t.prototype.render=function(){return n("div",{innerHTML:this.html})};return t}());A.style=P;var L="ks-description-image{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-bottom:20px}ks-description-image .image{max-width:100%}";var I=t("ks_description_image",function(){function t(t){e(this,t);this.image=undefined;this.width=undefined}t.prototype.render=function(){return n("div",{class:"image",style:{maxWidth:"min(100%,".concat(this.width,"px)")}},n("ks-img2",{src:this.image}))};return t}());I.style=L;var M="ks-description-products{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center;-ms-flex-align:stretch;align-items:stretch;gap:10px;border-top:#f2f2f2 solid 1px;border-bottom:#eeeeee solid 1px;padding:10px 10px 20px 10px}ks-description-products>*{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}ks-description-products[kind='standard']{border:none}ks-description-products[kind='simple']{margin-bottom:20px}@media screen and (max-width: 640px){ks-description-products>*{width:228px}ks-description-products[kind='simple']{margin-bottom:20px}}";var X=t("ks_description_products",function(){function t(t){e(this,t);this.products=undefined;this.kind=undefined}t.prototype.render=function(){var t=this;return this.products.map((function(e){return t.kind=="standard"?n("ks-product-card",{flat:true,product:e}):n("ks-product-simple",{name:e.name,img:e.image,link:e.link,currentPrice:e.currentPrice,previousPrice:e.previousPrice})}))};return t}());X.style=M;var O="ks-description-text{display:block;margin:0 auto 30px auto;max-width:1200px}ks-description-text.left{text-align:left}ks-description-text.center{text-align:center}ks-description-text.right{text-align:right}ks-description-text.nomargin{margin:0 auto}";var W=t("ks_description_text",function(){function t(t){e(this,t);this.text=undefined;this.align=undefined;this.nomargin=undefined}t.prototype.render=function(){var t=this.nomargin?"nomargin":"";return n(i,{class:[this.align,t].join(" "),innerHTML:l.marked.parse(this.text)})};return t}());W.style=O;var Z='ks-description-text-image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0;margin:0 auto 30px auto;max-width:1200px}ks-description-text-image[alignment="top"]{-ms-flex-align:start;align-items:flex-start}ks-description-text-image[alignment="middle"]{-ms-flex-align:center;align-items:center}ks-description-text-image[alignment="bottom"]{-ms-flex-align:end;align-items:flex-end}ks-description-text-image[position="left"]{-ms-flex-direction:row-reverse;flex-direction:row-reverse}ks-description-text-image .image{width:100%;margin:20px 0px 0px 0px}@media (min-width: 960px){ks-description-text-image .text{-ms-flex:1 !important;flex:1 !important}ks-description-text-image .image{width:50%;margin:0px 0px 0px 30px;max-width:500px}ks-description-text-image[position="left"] .image{margin:0px 30px 0px 0px}}';var B=t("ks_description_text_image",function(){function t(t){e(this,t);this.text=undefined;this.image=undefined;this.width=undefined;this.alignment="top";this.position="right"}t.prototype.render=function(){return[n("div",{class:"text",innerHTML:l.marked.parse(this.text)}),n("div",{class:"image",style:{maxWidth:"".concat(this.width,"px")}},n("ks-img2",{horizontal:true,limit:true,src:this.image}))]};return t}());B.style=Z}}}));