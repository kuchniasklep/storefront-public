System.register(["./index-9d88b83b.system.js","./index-901f8c50.system.js"],(function(e){"use strict";var n,t,i;return{setters:[function(e){n=e.r;t=e.h},function(e){i=e.c}],execute:function(){var a=i({banners:[],info:{},products:[],featured:[],recipes:[],recipesHeading:"",recipesMore:"",articles:[],articlesHeading:"",articlesMore:"",seeMore:"",logoBanners:[]});var r="ks-page-home{display:block}ks-page-home>*>h3{font-size:24px;margin:25px 0;text-align:center}ks-page-home .logo-banner-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:10px}";var s=e("ks_page_home",function(){function e(e){n(this,e)}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.homeData);var n=JSON.parse(e.innerHTML);Object.keys(n).map((function(e){a.set(e,n[e])}))};e.prototype.render=function(){var e=a.get("banners");var n=a.get("featured");var i=a.get("info");var r=a.get("products");var s=a.get("recipes");var o=a.get("recipesHeading");var c=a.get("recipesMore");var l=a.get("articles");var g=a.get("articlesHeading");var u=a.get("articlesMore");var p=a.get("seeMore");var d=a.get("logoBanners");return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e?t("ks-banner-container",null,e.map((function(e,n){return t("ks-banner",{sync:n==0,active:n==0,name:e.name,color:e.color,link:e.link,image:e.image,webp:e.webp,width:e.width,height:e.height,theme:e.theme})}))):null,i?t("ks-homepage-info",null,t("h1",{slot:"mainHeading"},i.mainHeading),t("p",{slot:"mainContent"},i.mainParagraph),t("h2",{slot:"firstHeading"},i.firstHeading),t("p",{slot:"firstContent"},i.firstParagraph),t("h2",{slot:"secondHeading"},i.secondHeading),t("p",{slot:"secondContent"},i.secondParagraph),t("h2",{slot:"thirdHeading"},i.thirdHeading),t("p",{slot:"thirdContent"},i.thirdParagraph)):null,t("ks-zaufane",{home:true,token:"sf15070062863a73c5990",customer:"150700"}),r?t("ks-homepage-products",null,r.map((function(e){return t("ks-product-container",null,e.products.map((function(e){return t("ks-product-card",{"product-id":e.id,link:e.link,name:e.name,img:e.image,webp:e.webp,"current-price":e.currentPrice,"previous-price":e.previousPrice,unavailable:e.unavailable})})))}))):null,n?t("ks-featured-container",null,n.map((function(e){return t("ks-featured",{slot:e.side,name:e.name,image:e.image,webp:e.webp,link:e.link,width:e.width,height:e.height})}))):null,s?[t("h3",null,o),t("ks-article-container",null,s.map((function(e){return t("ks-recipe-card",{heading:e.heading,cuisine:e.cuisine,category:e.category,link:e.link,image:e.image,webp:e.webp,width:e.width,height:e.height,"cuisine-link":e.cuisineLink,"category-link":e.categoryLink})}))),t("ks-see-more",{href:c,text:p})]:null,l?[t("h3",null,g),t("ks-article-container",null,l.map((function(e){return t("ks-article-card",{link:e.link,heading:e.heading,image:e.image,webp:e.webp,date:e.date,views:e.views},t("p",null,e.description))}))),t("ks-see-more",{href:u,text:p})]:null,(d===null||d===void 0?void 0:d.length)>0?t("div",{class:"logo-banner-container"},d.map((function(e){return t("ks-logo-banner",{name:e.name,image:e.image,webp:e.webp,link:e.link,width:e.width,height:e.height})}))):null)};return e}());s.style=r}}}));