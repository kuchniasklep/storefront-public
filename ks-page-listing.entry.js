import{r as t,h as n}from"./index-e3198654.js";import{c as o}from"./common-e4bd89b8.js";import{c as i}from"./index-5a4e318f.js";import{D as e}from"./dataLayer-dbe9d5d4.js";import"./commonDynamic-a3c330fc.js";import"./fetch-1f8a9006.js";import"./js.cookie-2cc1be5d.js";import"./_commonjsHelpers-ba3f0406.js";const s=i({}),r=class{constructor(n){t(this,n),this.skipbase=void 0,this.commonData=void 0,this.commonDynamicData=void 0,this.listingData=void 0}componentWillLoad(){const t=document.getElementById(this.listingData),n=JSON.parse(t.innerHTML);Object.keys(n).map((t=>{s.set(t,n[t])})),this.track()}track(){s.get("query")||e.listing(s.state)}render(){if(!(null==s?void 0:s.get("title")))return!1;const t=s.get("bottomDescription"),i=s.get("infoBanner"),e=s.get("tags"),r=s.get("navigation"),a=s.get("filters"),l=s.get("products"),c=s.get("query"),u=s.get("reviewAverage"),d=s.get("infocards"),m=s.get("info"),p=o.get("translations");return n("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},i?n("ks-content-info-banner",{content:i}):null,n("ks-listing-header",{heading:s.get("title"),breadcrumbs:s.get("breadcrumbs"),description:s.get("description"),categories:s.get("categories"),query:c,autocorrect:s.get("autocorrect"),theme:s.get("theme")}),m?n("ks-listing-info",{data:m}):null,r&&(null==l?void 0:l.length)>0?n("ks-listing-navigation",{products:r.products},(null==a?void 0:a.length)>0?n("ks-filtering",{"base-url":r.base,query:c,filters:a}):null,n("ks-sorting",{post:r.paginationBase,current:s.get("sorting")}),n("ks-pagination",{count:r.count,current:r.current,base:r.paginationBase,pattern:r.pattern})):null,(null==l?void 0:l.length)>0?n("ks-product-container",null,l.map((t=>n("ks-product-card",{product:t,flat:!0,compare:s.get("compare")})))):n("ks-nocontent",{"link-name":p.noContentHome,"back-name":p.noContentBack},n("h1",null,s.get("noContentHeading")),n("p",null,s.get("noContentMessage"))),r&&(null==l?void 0:l.length)>0?n("ks-listing-navigation",{products:r.products},n("ks-pagination",{count:r.count,current:r.current,base:r.paginationBase,pattern:r.pattern})):null,(null==d?void 0:d.length)>0?n("ks-info-cards",{data:d}):null,t||(null==e?void 0:e.length)>0?n("ks-listing-footer",{description:t},(null==e?void 0:e.length)>0?n("div",{slot:"tags"},e.map((t=>n("a",{href:t.link},t.name)))):null,!c&&r&&(null==l?void 0:l.length)>0&&u?n("ks-content-reviews",{content:u,slot:"comments",grey:!0}):null):!c&&r&&(null==l?void 0:l.length)>0&&u?n("ks-content-reviews",{content:u}):null,s.get("compare")?n("ks-compare-popup",null):null)}};r.style="ks-page-listing{-ms-flex:1 1 0px;flex:1 1 0}ks-page-listing .noresults{width:auto;max-height:300px}";export{r as ks_page_listing}