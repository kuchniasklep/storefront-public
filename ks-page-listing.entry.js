import{r as e,h as t}from"./index-abcf82c7.js";import{c as n}from"./index-0418a9fc.js";import{e as i}from"./tracker-f8c9914d.js";import{D as s}from"./dataLayer-dbbd91bf.js";const o=n({type:"",title:"",autocorrect:"",query:"",description:"",bottomDescription:"",infoBanner:{},breadcrumbs:[],categories:[],tags:[],products:[],navigation:{},filters:[],noContentHeading:"",noContentMessage:""}),r=class{constructor(t){e(this,t)}componentWillLoad(){const e=document.getElementById(this.listingData),t=JSON.parse(e.innerHTML);Object.keys(t).map((e=>{o.set(e,t[e])})),this.track()}track(){o.get("query")||(s.listing(o.state),i((e=>null==e?void 0:e.listing(o.state,null))))}render(){if(!(null==o?void 0:o.get("title")))return!1;const e=o.get("bottomDescription"),n=o.get("infoBanner"),i=o.get("tags"),s=o.get("navigation"),r=o.get("filters"),a=o.get("products"),l=o.get("query"),c=o.get("reviewAverage");return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},n?t("ks-info-banner",{image:n.image,color:n.color,width:n.width,height:n.height,name:n.name,link:n.link,theme:n.theme}):null,t("ks-listing-header",{heading:o.get("title"),breadcrumbs:o.get("breadcrumbs"),description:o.get("description"),categories:o.get("categories"),query:l,autocorrect:o.get("autocorrect")}),s&&(null==a?void 0:a.length)>0?t("ks-listing-navigation",{products:s.products},(null==r?void 0:r.length)>0?t("ks-filtering",{"base-url":s.base},l?t("input",{type:"hidden",name:"szukaj",value:l}):null,r.map((e=>(null==e?void 0:e.items.length)>0?t("ks-filter",{name:e.name,active:e.active},e.items.map((n=>"checkbox"==e.type?t("ks-filter-checkbox",{active:(n=n).active,name:n.name,value:n.value,text:n.content}):"color"==e.type?t("ks-filter-color",{active:(n=n).active,name:n.name,value:n.value,color:n.content}):"slider"==e.type?t("ks-filter-slider",{name:(n=n).name,values:n.values,snap:n.snap,steps:n.steps,from:n.from,to:n.to}):null))):null))):null,t("ks-sorting",{post:s.paginationBase}),t("ks-pagination",{count:s.count,current:s.current,base:s.paginationBase,pattern:s.pattern})):null,(null==a?void 0:a.length)>0?t("ks-product-container",null,a.map((e=>t("ks-product-card",{"product-id":e.id,link:e.link,sku:e.sku,name:e.name,img:e.image,imgFull:e.imageFull,webp:e.webp,currentPrice:e.currentPrice,previousPrice:e.previousPrice,unavailable:e.unavailable,currency:e.currency,categories:e.categories})))):t("ks-nocontent",null,t("h1",null,o.get("noContentHeading")),t("p",null,o.get("noContentMessage"))),s&&(null==a?void 0:a.length)>0?t("ks-listing-navigation",{products:s.products},t("ks-pagination",{count:s.count,current:s.current,base:s.paginationBase,pattern:s.pattern})):null,e||(null==i?void 0:i.length)>0?t("ks-listing-footer",{description:e},(null==i?void 0:i.length)>0?t("div",{slot:"tags"},i.map((e=>t("a",{href:e.link},e.name)))):null,!l&&s&&(null==a?void 0:a.length)>0&&c?t("ks-review-average",{slot:"comments",grey:!0,href:c.href,message:c.message,reviews:c.reviews,months:c.months,totalReviews:c.totalReviews,average:c.average,example:c.example}):null):!l&&s&&(null==a?void 0:a.length)>0&&c?t("ks-review-average",{href:c.href,message:c.message,reviews:c.reviews,months:c.months,totalReviews:c.totalReviews,average:c.average,example:c.example}):null)}};r.style="ks-page-listing{-ms-flex:1 1 0px;flex:1 1 0}ks-page-listing .noresults{width:auto;max-height:300px}";export{r as ks_page_listing}