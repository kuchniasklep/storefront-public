System.register(["./index-229c64eb.system.js","./index-0ecc4079.system.js"],(function(n){"use strict";var t,i,e;return{setters:[function(n){t=n.r;i=n.h},function(n){e=n.c}],execute:function(){var a=e({});var s="ks-page-articles h1{margin:20px 0 10px 0;text-align:center;font-size:28px;font-weight:700}ks-page-articles ks-listing-navigation{margin:20px 0}ks-page-articles ks-listing-navigation:first-of-type{margin-top:5px}@media screen and (max-width: 600px){ks-page-articles h1{margin:15px 0 0 0;font-size:22px}ks-page-articles ks-listing-navigation{margin-bottom:20px;margin-top:5px}}";var r=n("ks_page_articles",function(){function n(n){t(this,n);this.skipbase=undefined;this.commonData=undefined;this.commonDynamicData=undefined;this.articlesData=undefined}n.prototype.componentWillLoad=function(){var n=document.getElementById(this.articlesData);var t=JSON.parse(n.innerHTML);Object.keys(t).map((function(n){a.set(n,t[n])}))};n.prototype.render=function(){var n=a.get("navigation");var t=a.get("articles");return i("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},i("h1",null,a.get("heading")),n&&n.count>1?i("ks-listing-navigation",null,i("ks-pagination",{count:n.count,current:n.current,base:n.paginationBase,pattern:n.pattern})):null,(t===null||t===void 0?void 0:t.length)>0?i("ks-article-container",null,t.map((function(n){return i("ks-article-card",{link:n.link,heading:n.heading,image:n.image,webp:n.webp,date:n.date,views:n.views},i("p",null,n.description))}))):null,n&&(t===null||t===void 0?void 0:t.length)>0?i("ks-listing-navigation",null,i("ks-pagination",{count:n.count,current:n.current,base:n.paginationBase,pattern:n.pattern})):null)};return n}());r.style=s}}}));