System.register(["./index-c11c20c8.system.js","./index-4810e2ad.system.js"],(function(e){"use strict";var t,n,i;return{setters:[function(e){t=e.r;n=e.h},function(e){i=e.c}],execute:function(){var a=i({});var r="ks-page-listing{-ms-flex:1 1 0px;flex:1 1 0}ks-page-listing .noresults{width:auto;max-height:300px}";var o=e("ks_page_listing",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.listingData);var t=JSON.parse(e.innerHTML);Object.keys(t).map((function(e){a.set(e,t[e])}))};e.prototype.render=function(){var e=a.get("bottomDescription");var t=a.get("infoBanner");var i=a.get("tags");var r=a.get("navigation");var o=a.get("filters");var s=a.get("products");var l=a.get("query");return n("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t?n("ks-info-banner",{image:t.image,color:t.color,width:t.width,height:t.height,name:t.name,link:t.link,theme:t.theme}):null,n("ks-listing-header",{heading:a.get("title"),breadcrumbs:a.get("breadcrumbs"),description:a.get("description"),categories:a.get("categories"),query:l,autocorrect:a.get("autocorrect")}),r&&(s===null||s===void 0?void 0:s.length)>0?n("ks-listing-navigation",{products:r.products},(o===null||o===void 0?void 0:o.length)>0?n("ks-filtering",{"base-url":r.base},l?n("input",{type:"hidden",name:"szukaj",value:l}):null,o.map((function(e){return(e===null||e===void 0?void 0:e.items.length)>0?n("ks-filter",{name:e.name,active:e.active},e.items.map((function(t){if(e.type=="checkbox"){t=t;return n("ks-filter-checkbox",{active:t.active,name:t.name,value:t.value,text:t.content})}if(e.type=="color"){t=t;return n("ks-filter-color",{active:t.active,name:t.name,value:t.value,color:t.content})}if(e.type=="slider"){t=t;return n("ks-filter-slider",{name:t.name,values:t.values,snap:t.snap,steps:t.steps,from:t.from,to:t.to})}return null}))):null}))):null,n("ks-sorting",{post:r.paginationBase}),n("ks-pagination",{count:r.count,current:r.current,base:r.paginationBase,pattern:r.pattern})):null,(s===null||s===void 0?void 0:s.length)>0?n("ks-product-container",null,s.map((function(e){return n("ks-product-card",{"product-id":e.id,link:e.link,name:e.name,img:e.image,webp:e.webp,"current-price":e.currentPrice,"previous-price":e.previousPrice,unavailable:e.unavailable})}))):n("ks-nocontent",null,n("h1",null,a.get("noContentHeading")),n("p",null,a.get("noContentMessage"))),r&&(s===null||s===void 0?void 0:s.length)>0?n("ks-listing-navigation",{products:r.products},n("ks-pagination",{count:r.count,current:r.current,base:r.base,pattern:r.pattern})):null,e||(i===null||i===void 0?void 0:i.length)>0?n("ks-listing-footer",{description:e},(i===null||i===void 0?void 0:i.length)>0?n("div",{slot:"tags"},i.map((function(e){return n("a",{href:e.link},e.name)}))):null):null)};return e}());o.style=r}}}));