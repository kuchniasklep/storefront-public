import{r as t,h as n}from"./index-e3198654.js";import{c as o}from"./common-e4bd89b8.js";import{c as i}from"./index-5a4e318f.js";import{D as s}from"./dataLayer-3d1391b4.js";import"./commonDynamic-1f04aed5.js";import"./fetch-bbb23998.js";const e=i({}),r=class{constructor(n){t(this,n),this.skipbase=void 0,this.commonData=void 0,this.commonDynamicData=void 0,this.listingData=void 0}componentWillLoad(){const t=document.getElementById(this.listingData),n=JSON.parse(t.innerHTML);Object.keys(n).map((t=>{e.set(t,n[t])})),this.track()}track(){e.get("query")||s.listing(e.state)}render(){if(!(null==e?void 0:e.get("title")))return!1;const t=e.get("bottomDescription"),i=e.get("infoBanner"),s=e.get("tags"),r=e.get("navigation"),a=e.get("filters"),l=e.get("products"),c=e.get("query"),u=e.get("reviewAverage"),d=o.get("translations");return n("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},i?n("ks-content-info-banner",{content:i}):null,n("ks-listing-header",{heading:e.get("title"),breadcrumbs:e.get("breadcrumbs"),description:e.get("description"),categories:e.get("categories"),query:c,autocorrect:e.get("autocorrect")}),r&&(null==l?void 0:l.length)>0?n("ks-listing-navigation",{products:r.products},(null==a?void 0:a.length)>0?n("ks-filtering",{"base-url":r.base,query:c,filters:a}):null,n("ks-sorting",{post:r.paginationBase,current:e.get("sorting")}),n("ks-pagination",{count:r.count,current:r.current,base:r.paginationBase,pattern:r.pattern})):null,(null==l?void 0:l.length)>0?n("ks-product-container",null,l.map((t=>n("ks-product-card",{product:t})))):n("ks-nocontent",{"link-name":d.noContentHome,"back-name":d.noContentBack},n("h1",null,e.get("noContentHeading")),n("p",null,e.get("noContentMessage"))),r&&(null==l?void 0:l.length)>0?n("ks-listing-navigation",{products:r.products},n("ks-pagination",{count:r.count,current:r.current,base:r.paginationBase,pattern:r.pattern})):null,t||(null==s?void 0:s.length)>0?n("ks-listing-footer",{description:t},(null==s?void 0:s.length)>0?n("div",{slot:"tags"},s.map((t=>n("a",{href:t.link},t.name)))):null,!c&&r&&(null==l?void 0:l.length)>0&&u?n("ks-content-reviews",{content:u,slot:"comments",grey:!0}):null):!c&&r&&(null==l?void 0:l.length)>0&&u?n("ks-content-reviews",{content:u}):null)}};r.style="ks-page-listing{-ms-flex:1 1 0px;flex:1 1 0}ks-page-listing .noresults{width:auto;max-height:300px}";export{r as ks_page_listing}