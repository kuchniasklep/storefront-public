System.register(["./index-c11c20c8.system.js","./listing-0df71ca3.system.js","./index-4810e2ad.system.js"],(function(t){"use strict";var n,e,i;return{setters:[function(t){n=t.r;e=t.h},function(t){i=t.l},function(){}],execute:function(){var r="";var a=t("ks_page_listing",function(){function t(t){n(this,t)}t.prototype.componentWillLoad=function(){var t=document.getElementById(this.listingData);var n=JSON.parse(t.innerHTML);Object.keys(n).map((function(t){i.set(t,n[t])}))};t.prototype.render=function(){var t=i.get("bottomDescription");var n=i.get("infoBanner");var r=i.get("tags");var a=i.get("navigation");var o=i.get("filters");var s=i.get("products");return e("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},n?e("ks-info-banner",{image:n.image,color:n.color,width:n.width,height:n.height,name:n.name,link:n.link,theme:n.theme}):null,e("ks-listing-header",null),a?e("ks-listing-navigation",{products:a.products},(o===null||o===void 0?void 0:o.length)>0?e("ks-filtering",{"base-url":a.base},o.map((function(t){return(t===null||t===void 0?void 0:t.items.length)>0?e("ks-filter",{name:t.name,active:t.active},t.items.map((function(n){if(t.type=="checkbox"){n=n;return e("ks-filter-checkbox",{name:n.name,value:n.value,text:n.content})}if(t.type=="color"){n=n;return e("ks-filter-color",{name:n.name,value:n.value,color:n.content})}if(t.type=="color"){n=n;return e("ks-filter-slider",{name:n.name,values:n.values,snap:n.snap,steps:n.steps,from:n.from,to:n.to})}return null}))):null}))):null,e("ks-sorting",{post:a.paginationBase}),e("ks-pagination",{count:a.count,current:a.current,base:a.paginationBase,pattern:a.pattern})):null,(s===null||s===void 0?void 0:s.length)>0?e("ks-product-container",null,s.map((function(t){return e("ks-product-card",{"product-id":t.id,link:t.link,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice})}))):null,a?e("ks-listing-navigation",{products:a.products},e("ks-pagination",{count:a.count,current:a.current,base:a.base,pattern:a.pattern})):null,t||(r===null||r===void 0?void 0:r.length)>0?e("ks-listing-footer",{description:t},(r===null||r===void 0?void 0:r.length)>0?e("div",{slot:"tags"},r.map((function(t){return e("a",{href:t.link},t.name)}))):null):null)};return t}());a.style=r}}}));