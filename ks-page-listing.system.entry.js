System.register(["./index-3484848d.system.js","./index-4afdae1e.system.js","./tracker-7f3a2dbd.system.js"],(function(e){"use strict";var t,n,i,a;return{setters:[function(e){t=e.r;n=e.h},function(e){i=e.c},function(e){a=e.e}],execute:function(){var r=i({title:"",autocorrect:"",query:"",description:"",bottomDescription:"",infoBanner:{},breadcrumbs:[],categories:[],tags:[],products:[],navigation:{},filters:[],noContentHeading:"",noContentMessage:""});var o="ks-page-listing{-ms-flex:1 1 0px;flex:1 1 0}ks-page-listing .noresults{width:auto;max-height:300px}";var s=e("ks_page_listing",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.listingData);var t=JSON.parse(e.innerHTML);Object.keys(t).map((function(e){r.set(e,t[e])}));this.track()};e.prototype.track=function(){if(!r.get("query"))a((function(e){return e===null||e===void 0?void 0:e.listing(r.state,null)}))};e.prototype.render=function(){if(!(r===null||r===void 0?void 0:r.get("title")))return false;var e=r.get("bottomDescription");var t=r.get("infoBanner");var i=r.get("tags");var a=r.get("navigation");var o=r.get("filters");var s=r.get("products");var l=r.get("query");var u=r.get("reviewAverage");return n("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t?n("ks-info-banner",{image:t.image,color:t.color,width:t.width,height:t.height,name:t.name,link:t.link,theme:t.theme}):null,n("ks-listing-header",{heading:r.get("title"),breadcrumbs:r.get("breadcrumbs"),description:r.get("description"),categories:r.get("categories"),query:l,autocorrect:r.get("autocorrect")}),a&&(s===null||s===void 0?void 0:s.length)>0?n("ks-listing-navigation",{products:a.products},(o===null||o===void 0?void 0:o.length)>0?n("ks-filtering",{"base-url":a.base},l?n("input",{type:"hidden",name:"szukaj",value:l}):null,o.map((function(e){return(e===null||e===void 0?void 0:e.items.length)>0?n("ks-filter",{name:e.name,active:e.active},e.items.map((function(t){if(e.type=="checkbox"){t=t;return n("ks-filter-checkbox",{active:t.active,name:t.name,value:t.value,text:t.content})}if(e.type=="color"){t=t;return n("ks-filter-color",{active:t.active,name:t.name,value:t.value,color:t.content})}if(e.type=="slider"){t=t;return n("ks-filter-slider",{name:t.name,values:t.values,snap:t.snap,steps:t.steps,from:t.from,to:t.to})}return null}))):null}))):null,n("ks-sorting",{post:a.paginationBase}),n("ks-pagination",{count:a.count,current:a.current,base:a.paginationBase,pattern:a.pattern})):null,(s===null||s===void 0?void 0:s.length)>0?n("ks-product-container",null,s.map((function(e){return n("ks-product-card",{"product-id":e.id,link:e.link,sku:e.sku,name:e.name,img:e.image,imgFull:e.imageFull,webp:e.webp,currentPrice:e.currentPrice,previousPrice:e.previousPrice,unavailable:e.unavailable,currency:e.currency,categories:e.categories})}))):n("ks-nocontent",null,n("h1",null,r.get("noContentHeading")),n("p",null,r.get("noContentMessage"))),a&&(s===null||s===void 0?void 0:s.length)>0?n("ks-listing-navigation",{products:a.products},n("ks-pagination",{count:a.count,current:a.current,base:a.paginationBase,pattern:a.pattern})):null,e||(i===null||i===void 0?void 0:i.length)>0?n("ks-listing-footer",{description:e},(i===null||i===void 0?void 0:i.length)>0?n("div",{slot:"tags"},i.map((function(e){return n("a",{href:e.link},e.name)}))):null,!l&&a&&(s===null||s===void 0?void 0:s.length)>0&&u?n("ks-review-average",{slot:"comments",grey:true,href:u.href,message:u.message,reviews:u.reviews,months:u.months,totalReviews:u.totalReviews,average:u.average,example:u.example}):null):!l&&a&&(s===null||s===void 0?void 0:s.length)>0&&u?n("ks-review-average",{href:u.href,message:u.message,reviews:u.reviews,months:u.months,totalReviews:u.totalReviews,average:u.average,example:u.example}):null)};return e}());s.style=o}}}));