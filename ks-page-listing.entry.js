import{r as n,h as t}from"./index-1b90b4d2.js";import{c as o}from"./common-46fdf31d.js";import{c as i}from"./index-33fbe4a7.js";import{D as s}from"./dataLayer-d75ea728.js";import"./commonDynamic-3e6c308f.js";import"./fetch-13200e62.js";const e=i({});const r="ks-page-listing{-ms-flex:1 1 0px;flex:1 1 0}ks-page-listing .noresults{width:auto;max-height:300px}";const a=class{constructor(t){n(this,t);this.skipbase=undefined;this.commonData=undefined;this.commonDynamicData=undefined;this.listingData=undefined}componentWillLoad(){const n=document.getElementById(this.listingData);const t=JSON.parse(n.innerHTML);Object.keys(t).map((n=>{e.set(n,t[n])}));this.track()}track(){if(!e.get("query")){s.listing(e.state)}}render(){if(!(e===null||e===void 0?void 0:e.get("title")))return false;const n=e.get("bottomDescription");const i=e.get("infoBanner");const s=e.get("tags");const r=e.get("navigation");const a=e.get("filters");const c=e.get("products");const l=e.get("query");const d=e.get("reviewAverage");const u=o.get("translations");return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},i?t("ks-content-info-banner",{content:i}):null,t("ks-listing-header",{heading:e.get("title"),breadcrumbs:e.get("breadcrumbs"),description:e.get("description"),categories:e.get("categories"),query:l,autocorrect:e.get("autocorrect")}),r&&(c===null||c===void 0?void 0:c.length)>0?t("ks-listing-navigation",{products:r.products},(a===null||a===void 0?void 0:a.length)>0?t("ks-filtering",{"base-url":r.base,query:l,filters:a}):null,t("ks-sorting",{post:r.paginationBase,current:e.get("sorting")}),t("ks-pagination",{count:r.count,current:r.current,base:r.paginationBase,pattern:r.pattern})):null,(c===null||c===void 0?void 0:c.length)>0?t("ks-product-container",null,c.map((n=>t("ks-product-card",{product:n})))):t("ks-nocontent",{"link-name":u.noContentHome,"back-name":u.noContentBack},t("h1",null,e.get("noContentHeading")),t("p",null,e.get("noContentMessage"))),r&&(c===null||c===void 0?void 0:c.length)>0?t("ks-listing-navigation",{products:r.products},t("ks-pagination",{count:r.count,current:r.current,base:r.paginationBase,pattern:r.pattern})):null,n||(s===null||s===void 0?void 0:s.length)>0?t("ks-listing-footer",{description:n},(s===null||s===void 0?void 0:s.length)>0?t("div",{slot:"tags"},s.map((n=>t("a",{href:n.link},n.name)))):null,!l&&r&&(c===null||c===void 0?void 0:c.length)>0&&d?t("ks-content-reviews",{content:d,slot:"comments",grey:true}):null):!l&&r&&(c===null||c===void 0?void 0:c.length)>0&&d?t("ks-content-reviews",{content:d}):null)}};a.style=r;export{a as ks_page_listing};
//# sourceMappingURL=ks-page-listing.entry.js.map