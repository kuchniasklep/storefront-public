import{r as n,h as t}from"./index-6e14abe0.js";import{c as e}from"./index-a26ba0e6.js";const i=e({title:"",autocorrect:"",query:"",description:"",bottomDescription:"",infoBanner:{},breadcrumbs:[],categories:[],tags:[],products:[],navigation:{},filters:[],noContentHeading:"",noContentMessage:""}),o=class{constructor(t){n(this,t)}componentWillLoad(){const n=document.getElementById(this.listingData),t=JSON.parse(n.innerHTML);Object.keys(t).map((n=>{i.set(n,t[n])}))}render(){if(!(null==i?void 0:i.get("title")))return!1;const n=i.get("bottomDescription"),e=i.get("infoBanner"),o=i.get("tags"),s=i.get("navigation"),l=i.get("filters"),a=i.get("products"),r=i.get("query");return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e?t("ks-info-banner",{image:e.image,color:e.color,width:e.width,height:e.height,name:e.name,link:e.link,theme:e.theme}):null,t("ks-listing-header",{heading:i.get("title"),breadcrumbs:i.get("breadcrumbs"),description:i.get("description"),categories:i.get("categories"),query:r,autocorrect:i.get("autocorrect")}),s&&(null==a?void 0:a.length)>0?t("ks-listing-navigation",{products:s.products},(null==l?void 0:l.length)>0?t("ks-filtering",{"base-url":s.base},r?t("input",{type:"hidden",name:"szukaj",value:r}):null,l.map((n=>(null==n?void 0:n.items.length)>0?t("ks-filter",{name:n.name,active:n.active},n.items.map((e=>"checkbox"==n.type?t("ks-filter-checkbox",{active:(e=e).active,name:e.name,value:e.value,text:e.content}):"color"==n.type?t("ks-filter-color",{active:(e=e).active,name:e.name,value:e.value,color:e.content}):"slider"==n.type?t("ks-filter-slider",{name:(e=e).name,values:e.values,snap:e.snap,steps:e.steps,from:e.from,to:e.to}):null))):null))):null,t("ks-sorting",{post:s.paginationBase}),t("ks-pagination",{count:s.count,current:s.current,base:s.paginationBase,pattern:s.pattern})):null,(null==a?void 0:a.length)>0?t("ks-product-container",null,a.map((n=>t("ks-product-card",{"product-id":n.id,link:n.link,name:n.name,img:n.image,webp:n.webp,currentPrice:n.currentPrice,previousPrice:n.previousPrice,unavailable:n.unavailable})))):t("ks-nocontent",null,t("h1",null,i.get("noContentHeading")),t("p",null,i.get("noContentMessage"))),s&&(null==a?void 0:a.length)>0?t("ks-listing-navigation",{products:s.products},t("ks-pagination",{count:s.count,current:s.current,base:s.paginationBase,pattern:s.pattern})):null,n||(null==o?void 0:o.length)>0?t("ks-listing-footer",{description:n},(null==o?void 0:o.length)>0?t("div",{slot:"tags"},o.map((n=>t("a",{href:n.link},n.name)))):null):null,!r&&s&&(null==a?void 0:a.length)>0?t("ks-zaufane",{listing:!0,nobg:!(n||(null==o?void 0:o.length)>0),token:"sf15070062863a8f629c0",customer:"150700"}):null)}};o.style="ks-page-listing{-ms-flex:1 1 0px;flex:1 1 0}ks-page-listing .noresults{width:auto;max-height:300px}";export{o as ks_page_listing}