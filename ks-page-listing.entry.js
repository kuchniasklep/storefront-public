import{r as e,h as t}from"./index-b2de1977.js";import{c as n}from"./index-bca22170.js";import{e as i}from"./tracker-7d15eac4.js";import{D as o}from"./dataLayer-1eec95fc.js";const s=n({type:"",title:"",autocorrect:"",query:"",description:"",bottomDescription:"",infoBanner:{},breadcrumbs:[],categories:[],tags:[],products:[],navigation:{},filters:[],noContentHeading:"",noContentMessage:""}),a=class{constructor(t){e(this,t)}componentWillLoad(){const e=document.getElementById(this.listingData),t=JSON.parse(e.innerHTML);Object.keys(t).map((e=>{s.set(e,t[e])})),this.track()}track(){s.get("query")||(o.listing(s.state),i((e=>null==e?void 0:e.listing(s.state,null))))}render(){if(!(null==s?void 0:s.get("title")))return!1;const e=s.get("bottomDescription"),n=s.get("infoBanner"),i=s.get("tags"),o=s.get("navigation"),a=s.get("filters"),r=s.get("products"),l=s.get("query"),c=s.get("reviewAverage");return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},n?t("ks-info-banner",{image:n.image,color:n.color,width:n.width,height:n.height,name:n.name,link:n.link,theme:n.theme}):null,t("ks-listing-header",{heading:s.get("title"),breadcrumbs:s.get("breadcrumbs"),description:s.get("description"),categories:s.get("categories"),query:l,autocorrect:s.get("autocorrect")}),o&&(null==r?void 0:r.length)>0?t("ks-listing-navigation",{products:o.products},(null==a?void 0:a.length)>0?t("ks-filtering",{"base-url":o.base},l?t("input",{type:"hidden",name:"szukaj",value:l}):null,a.map((e=>(null==e?void 0:e.items.length)>0?t("ks-filter",{name:e.name,active:e.active},e.items.map((n=>"checkbox"==e.type?t("ks-filter-checkbox",{active:(n=n).active,name:n.name,value:n.value,text:n.content}):"color"==e.type?t("ks-filter-color",{active:(n=n).active,name:n.name,value:n.value,color:n.content}):"slider"==e.type?t("ks-filter-slider",{name:(n=n).name,values:n.values,snap:n.snap,steps:n.steps,from:n.from,to:n.to}):null))):null))):null,t("ks-sorting",{post:o.paginationBase}),t("ks-pagination",{count:o.count,current:o.current,base:o.paginationBase,pattern:o.pattern})):null,(null==r?void 0:r.length)>0?t("ks-product-container",null,r.map((e=>t("ks-product-card",{product:e})))):t("ks-nocontent",null,t("h1",null,s.get("noContentHeading")),t("p",null,s.get("noContentMessage"))),o&&(null==r?void 0:r.length)>0?t("ks-listing-navigation",{products:o.products},t("ks-pagination",{count:o.count,current:o.current,base:o.paginationBase,pattern:o.pattern})):null,e||(null==i?void 0:i.length)>0?t("ks-listing-footer",{description:e},(null==i?void 0:i.length)>0?t("div",{slot:"tags"},i.map((e=>t("a",{href:e.link},e.name)))):null,!l&&o&&(null==r?void 0:r.length)>0&&c?t("ks-review-average",{slot:"comments",grey:!0,href:c.href,message:c.message,reviews:c.reviews,months:c.months,totalReviews:c.totalReviews,average:c.average,example:c.example}):null):!l&&o&&(null==r?void 0:r.length)>0&&c?t("ks-review-average",{href:c.href,message:c.message,reviews:c.reviews,months:c.months,totalReviews:c.totalReviews,average:c.average,example:c.example}):null)}};a.style="ks-page-listing{-ms-flex:1 1 0px;flex:1 1 0}ks-page-listing .noresults{width:auto;max-height:300px}";export{a as ks_page_listing}