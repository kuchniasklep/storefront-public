System.register(["./index-3484848d.system.js","./index-4afdae1e.system.js","./dataLayer-efab6aa5.system.js"],(function(e){"use strict";var t,n,i,a,r;return{setters:[function(e){t=e.r;n=e.h},function(e){i=e.c},function(e){a=e.D;r=e.e}],execute:function(){var o=i({title:"",autocorrect:"",query:"",description:"",bottomDescription:"",infoBanner:{},breadcrumbs:[],categories:[],tags:[],products:[],navigation:{},filters:[],noContentHeading:"",noContentMessage:""});var s="ks-page-listing{-ms-flex:1 1 0px;flex:1 1 0}ks-page-listing .noresults{width:auto;max-height:300px}";var l=e("ks_page_listing",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.listingData);var t=JSON.parse(e.innerHTML);Object.keys(t).map((function(e){o.set(e,t[e])}));this.track()};e.prototype.track=function(){if(!o.get("query")){a.listing(o.state);r((function(e){return e===null||e===void 0?void 0:e.listing(o.state,null)}))}};e.prototype.render=function(){if(!(o===null||o===void 0?void 0:o.get("title")))return false;var e=o.get("bottomDescription");var t=o.get("infoBanner");var i=o.get("tags");var a=o.get("navigation");var r=o.get("filters");var s=o.get("products");var l=o.get("query");var u=o.get("reviewAverage");return n("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t?n("ks-info-banner",{image:t.image,color:t.color,width:t.width,height:t.height,name:t.name,link:t.link,theme:t.theme}):null,n("ks-listing-header",{heading:o.get("title"),breadcrumbs:o.get("breadcrumbs"),description:o.get("description"),categories:o.get("categories"),query:l,autocorrect:o.get("autocorrect")}),a&&(s===null||s===void 0?void 0:s.length)>0?n("ks-listing-navigation",{products:a.products},(r===null||r===void 0?void 0:r.length)>0?n("ks-filtering",{"base-url":a.base},l?n("input",{type:"hidden",name:"szukaj",value:l}):null,r.map((function(e){return(e===null||e===void 0?void 0:e.items.length)>0?n("ks-filter",{name:e.name,active:e.active},e.items.map((function(t){if(e.type=="checkbox"){t=t;return n("ks-filter-checkbox",{active:t.active,name:t.name,value:t.value,text:t.content})}if(e.type=="color"){t=t;return n("ks-filter-color",{active:t.active,name:t.name,value:t.value,color:t.content})}if(e.type=="slider"){t=t;return n("ks-filter-slider",{name:t.name,values:t.values,snap:t.snap,steps:t.steps,from:t.from,to:t.to})}return null}))):null}))):null,n("ks-sorting",{post:a.paginationBase}),n("ks-pagination",{count:a.count,current:a.current,base:a.paginationBase,pattern:a.pattern})):null,(s===null||s===void 0?void 0:s.length)>0?n("ks-product-container",null,s.map((function(e){return n("ks-product-card",{"product-id":e.id,link:e.link,sku:e.sku,name:e.name,img:e.image,imgFull:e.imageFull,webp:e.webp,currentPrice:e.currentPrice,previousPrice:e.previousPrice,unavailable:e.unavailable,currency:e.currency,categories:e.categories})}))):n("ks-nocontent",null,n("h1",null,o.get("noContentHeading")),n("p",null,o.get("noContentMessage"))),a&&(s===null||s===void 0?void 0:s.length)>0?n("ks-listing-navigation",{products:a.products},n("ks-pagination",{count:a.count,current:a.current,base:a.paginationBase,pattern:a.pattern})):null,e||(i===null||i===void 0?void 0:i.length)>0?n("ks-listing-footer",{description:e},(i===null||i===void 0?void 0:i.length)>0?n("div",{slot:"tags"},i.map((function(e){return n("a",{href:e.link},e.name)}))):null,!l&&a&&(s===null||s===void 0?void 0:s.length)>0&&u?n("ks-review-average",{slot:"comments",grey:true,href:u.href,message:u.message,reviews:u.reviews,months:u.months,totalReviews:u.totalReviews,average:u.average,example:u.example}):null):!l&&a&&(s===null||s===void 0?void 0:s.length)>0&&u?n("ks-review-average",{href:u.href,message:u.message,reviews:u.reviews,months:u.months,totalReviews:u.totalReviews,average:u.average,example:u.example}):null)};return e}());l.style=s}}}));