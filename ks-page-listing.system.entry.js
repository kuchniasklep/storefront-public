System.register(["./index-229c64eb.system.js","./common-ed4cb7b7.system.js","./index-0ecc4079.system.js","./dataLayer-5e2c2bfb.system.js","./commonDynamic-b77fc38a.system.js","./fetch-8edb5396.system.js"],(function(t){"use strict";var n,e,i,o,a;return{setters:[function(t){n=t.r;e=t.h},function(t){i=t.c},function(t){o=t.c},function(t){a=t.D},function(){},function(){}],execute:function(){var s=o({});var r="ks-page-listing{-ms-flex:1 1 0px;flex:1 1 0}ks-page-listing .noresults{width:auto;max-height:300px}";var c=t("ks_page_listing",function(){function t(t){n(this,t);this.skipbase=undefined;this.commonData=undefined;this.commonDynamicData=undefined;this.listingData=undefined}t.prototype.componentWillLoad=function(){var t=document.getElementById(this.listingData);var n=JSON.parse(t.innerHTML);Object.keys(n).map((function(t){s.set(t,n[t])}));this.track()};t.prototype.track=function(){if(!s.get("query")){a.listing(s.state)}};t.prototype.render=function(){if(!(s===null||s===void 0?void 0:s.get("title")))return false;var t=s.get("bottomDescription");var n=s.get("infoBanner");var o=s.get("tags");var a=s.get("navigation");var r=s.get("filters");var c=s.get("products");var l=s.get("query");var u=s.get("reviewAverage");var g=s.get("infocards");var d=i.get("translations");return e("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},n?e("ks-content-info-banner",{content:n}):null,e("ks-listing-header",{heading:s.get("title"),breadcrumbs:s.get("breadcrumbs"),description:s.get("description"),categories:s.get("categories"),query:l,autocorrect:s.get("autocorrect")}),a&&(c===null||c===void 0?void 0:c.length)>0?e("ks-listing-navigation",{products:a.products},(r===null||r===void 0?void 0:r.length)>0?e("ks-filtering",{"base-url":a.base,query:l,filters:r}):null,e("ks-sorting",{post:a.paginationBase,current:s.get("sorting")}),e("ks-pagination",{count:a.count,current:a.current,base:a.paginationBase,pattern:a.pattern})):null,(c===null||c===void 0?void 0:c.length)>0?e("ks-product-container",null,c.map((function(t){return e("ks-product-card",{product:t,flat:true,compare:s.get("compare")})}))):e("ks-nocontent",{"link-name":d.noContentHome,"back-name":d.noContentBack},e("h1",null,s.get("noContentHeading")),e("p",null,s.get("noContentMessage"))),a&&(c===null||c===void 0?void 0:c.length)>0?e("ks-listing-navigation",{products:a.products},e("ks-pagination",{count:a.count,current:a.current,base:a.paginationBase,pattern:a.pattern})):null,(g===null||g===void 0?void 0:g.length)>0?e("ks-info-cards",{data:g}):null,t||(o===null||o===void 0?void 0:o.length)>0?e("ks-listing-footer",{description:t},(o===null||o===void 0?void 0:o.length)>0?e("div",{slot:"tags"},o.map((function(t){return e("a",{href:t.link},t.name)}))):null,!l&&a&&(c===null||c===void 0?void 0:c.length)>0&&u?e("ks-content-reviews",{content:u,slot:"comments",grey:true}):null):!l&&a&&(c===null||c===void 0?void 0:c.length)>0&&u?e("ks-content-reviews",{content:u}):null,s.get("compare")?e("ks-compare-popup",null):null)};return t}());c.style=r}}}));