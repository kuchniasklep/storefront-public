System.register(["./index-9d88b83b.system.js","./index-901f8c50.system.js"],(function(e){"use strict";var n,t,i;return{setters:[function(e){n=e.r;t=e.h},function(e){i=e.c}],execute:function(){var a=i({});var r="ks-page-recipes ks-article-container{padding:20px 0px;padding:0px 10px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-page-recipes ks-article-container>div{-ms-flex-pack:center;justify-content:center}";var s=e("ks_page_recipes",function(){function e(e){n(this,e)}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.recipesData);var n=JSON.parse(e.innerHTML);Object.keys(n).map((function(e){a.set(e,n[e])}))};e.prototype.render=function(){var e=a.get("navigation");var n=a.get("recipes");return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t("ks-listing-header",{heading:a.get("title"),breadcrumbs:a.get("breadcrumbs"),description:a.get("description"),categories:a.get("categories"),tags:a.get("tags")}),e&&(n===null||n===void 0?void 0:n.length)>0?t("ks-listing-navigation",null,t("ks-pagination",{count:e.count,current:e.current,base:e.paginationBase,pattern:e.pattern})):null,(n===null||n===void 0?void 0:n.length)>0?t("ks-article-container",null,n.map((function(e){return t("ks-recipe-card",{heading:e.heading,link:e.link,cuisine:e.cuisine,"cuisine-link":e.cuisineLink,category:e.category,"category-link":e.categoryLink,image:e.image,width:e.width,height:e.height})}))):null,e&&(n===null||n===void 0?void 0:n.length)>0?t("ks-listing-navigation",null,t("ks-pagination",{count:e.count,current:e.current,base:e.paginationBase,pattern:e.pattern})):null)};return e}());s.style=r}}}));