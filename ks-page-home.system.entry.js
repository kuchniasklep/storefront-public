System.register(["./index-3484848d.system.js","./home-74293d1f.system.js","./loadCommon-ffa5aa41.system.js","./index-4afdae1e.system.js","./common-3952d158.system.js","./commonDynamic-af70983b.system.js","./tracker-7f3a2dbd.system.js"],(function(e){"use strict";var n,t,a,i,r;return{setters:[function(e){n=e.r;t=e.h;a=e.B},function(e){i=e.h},function(e){r=e.l},function(){},function(){},function(){},function(){}],execute:function(){var s="ks-page-home{display:block}ks-page-home>*>h3{font-size:24px;margin:25px 0;text-align:center}ks-page-home .logo-banner-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:10px}";var o=e("ks_page_home",function(){function e(e){n(this,e)}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.homeData);var n=JSON.parse(e.innerHTML);Object.keys(n).map((function(e){i.set(e,n[e])}));r(this.commonData,this.commonDynamicData,a)};e.prototype.render=function(){var e=i.get("banners");var n=i.get("featured");var a=i.get("info");var r=i.get("products");var s=i.get("recipes");var o=i.get("recipesHeading");var c=i.get("recipesMore");var l=i.get("articles");var m=i.get("articlesHeading");var g=i.get("articlesMore");var u=i.get("seeMore");var d=i.get("reviewAverage");return t("ks-page-base",{loadCommon:false,skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e?t("ks-banner-container",null,e.map((function(e,n){return t("ks-banner",{sync:n==0,active:n==0,name:e.name,color:e.color,link:e.link,image:e.image,webp:e.webp,width:e.width,height:e.height,theme:e.theme})}))):null,a?t("ks-homepage-info",null,t("h1",{slot:"mainHeading"},a.mainHeading),t("p",{slot:"mainContent"},a.mainParagraph),t("h2",{slot:"firstHeading"},a.firstHeading),t("p",{slot:"firstContent"},a.firstParagraph),t("h2",{slot:"secondHeading"},a.secondHeading),t("p",{slot:"secondContent"},a.secondParagraph),t("h2",{slot:"thirdHeading"},a.thirdHeading),t("p",{slot:"thirdContent"},a.thirdParagraph)):null,d?t("ks-review-average",{href:d.href,message:d.message,reviews:d.reviews,months:d.months,totalReviews:d.totalReviews,average:d.average,example:d.example}):null,r?t("ks-homepage-products",null,r.map((function(e){return t("ks-product-container",null,e.products.map((function(e){return t("ks-product-card",{"product-id":e.id,link:e.link,sku:e.sku,name:e.name,img:e.image,imgFull:e.imageFull,webp:e.webp,currentPrice:e.currentPrice,previousPrice:e.previousPrice,unavailable:e.unavailable,currency:e.currency,categories:e.categories})})))}))):null,n?t("ks-featured-container",null,n.map((function(e){return t("ks-featured",{slot:e.side,name:e.name,image:e.image,webp:e.webp,link:e.link,width:e.width,height:e.height})}))):null,s?[t("h3",null,o),t("ks-article-container",null,s.map((function(e){return t("ks-recipe-card",{heading:e.heading,cuisine:e.cuisine,category:e.category,link:e.link,image:e.image,webp:e.webp,width:e.width,height:e.height,"cuisine-link":e.cuisineLink,"category-link":e.categoryLink})}))),t("ks-see-more",{href:c,text:u})]:null,l?[t("h3",null,m),t("ks-article-container",null,l.map((function(e){return t("ks-article-card",{link:e.link,heading:e.heading,image:e.image,webp:e.webp,date:e.date,views:e.views},t("p",null,e.description))}))),t("ks-see-more",{href:g,text:u})]:null)};return e}());o.style=s}}}));