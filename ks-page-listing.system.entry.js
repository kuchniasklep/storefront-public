System.register(["./index-229c64eb.system.js","./common-ed4cb7b7.system.js","./index-0ecc4079.system.js","./dataLayer-37eb95e7.system.js","./commonDynamic-37d281db.system.js","./fetch-89de6a18.system.js"],(function(t){"use strict";var n,e,i,o,s;return{setters:[function(t){n=t.r;e=t.h},function(t){i=t.c},function(t){o=t.c},function(t){s=t.D},function(){},function(){}],execute:function(){var a=o({});var r="ks-page-listing{-ms-flex:1 1 0px;flex:1 1 0}ks-page-listing .noresults{width:auto;max-height:300px}";var c=t("ks_page_listing",function(){function t(t){n(this,t);this.skipbase=undefined;this.commonData=undefined;this.commonDynamicData=undefined;this.listingData=undefined}t.prototype.componentWillLoad=function(){var t=document.getElementById(this.listingData);var n=JSON.parse(t.innerHTML);Object.keys(n).map((function(t){a.set(t,n[t])}));this.track()};t.prototype.track=function(){if(!a.get("query")){s.listing(a.state)}};t.prototype.render=function(){if(!(a===null||a===void 0?void 0:a.get("title")))return false;var t=a.get("bottomDescription");var n=a.get("infoBanner");var o=a.get("tags");var s=a.get("navigation");var r=a.get("filters");var c=a.get("products");var u=a.get("query");var l=a.get("reviewAverage");var g=i.get("translations");return e("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},n?e("ks-content-info-banner",{content:n}):null,e("ks-listing-header",{heading:a.get("title"),breadcrumbs:a.get("breadcrumbs"),description:a.get("description"),categories:a.get("categories"),query:u,autocorrect:a.get("autocorrect")}),s&&(c===null||c===void 0?void 0:c.length)>0?e("ks-listing-navigation",{products:s.products},(r===null||r===void 0?void 0:r.length)>0?e("ks-filtering",{"base-url":s.base,query:u,filters:r}):null,e("ks-sorting",{post:s.paginationBase,current:a.get("sorting")}),e("ks-pagination",{count:s.count,current:s.current,base:s.paginationBase,pattern:s.pattern})):null,(c===null||c===void 0?void 0:c.length)>0?e("ks-product-container",null,c.map((function(t){return e("ks-product-card",{product:t})}))):e("ks-nocontent",{"link-name":g.noContentHome,"back-name":g.noContentBack},e("h1",null,a.get("noContentHeading")),e("p",null,a.get("noContentMessage"))),s&&(c===null||c===void 0?void 0:c.length)>0?e("ks-listing-navigation",{products:s.products},e("ks-pagination",{count:s.count,current:s.current,base:s.paginationBase,pattern:s.pattern})):null,t||(o===null||o===void 0?void 0:o.length)>0?e("ks-listing-footer",{description:t},(o===null||o===void 0?void 0:o.length)>0?e("div",{slot:"tags"},o.map((function(t){return e("a",{href:t.link},t.name)}))):null,!u&&s&&(c===null||c===void 0?void 0:c.length)>0&&l?e("ks-content-reviews",{content:l,slot:"comments",grey:true}):null):!u&&s&&(c===null||c===void 0?void 0:c.length)>0&&l?e("ks-content-reviews",{content:l}):null)};return t}());c.style=r}}}));