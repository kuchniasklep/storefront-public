import{r as t,h as n}from"./index-e340c957.js";import{e as r}from"./tracker-a4a7c425.js";import{p as l}from"./product-679b7505.js";import{p as o}from"./productDynamic-14f58712.js";import"./index-689756ca.js";let e=class{constructor(n){t(this,n)}componentWillLoad(){const t=document.getElementById(this.productData),n=JSON.parse(t.innerHTML);Object.keys(n).map((t=>{l.set(t,n[t])})),this.setDefaultTrait();{const t=document.getElementById(this.productDynamicData),n=JSON.parse(t.innerHTML);Object.keys(n).map((t=>{o.set(t,n[t])})),setTimeout((()=>{o.set("loaded",!0)}),100),this.track()}}setDefaultTrait(){if(!(null==l?void 0:l.get("traits")))return;const t=l.get("traits").reduce(((t,n)=>t+"x"+n.id+"-"+n.items[0].id),"");l.set("traitIDs",t)}track(){var t,n;r((t=>null==t?void 0:t.product(o.get("eventId"),l.get("id"),l.get("name"),parseFloat(l.get("currentPrice")),l.get("currency"))));const e=l.get("breadcrumbs");null===(t=window.dataLayer)||void 0===t||t.push({ecomm_prodid:l.get("id"),ecomm_pagetype:"product",ecomm_totalvalue:l.get("currentPrice")}),null===(n=window.dataLayer)||void 0===n||n.push({type:"product",name:l.get("currentPrice"),brand:l.get("brand").name,category:e[e.length-1].name,availability:l.get("shippingTime")})}render(){if(!(null==l?void 0:l.get("name")))return!1;const t=l.get("infoBanner"),r=l.get("points"),o=l.get("recycle"),e=l.get("installments"),i=l.get("tags"),a=l.get("variants"),u=l.get("tabs"),s=l.get("youtube"),c=l.get("comments"),p=l.get("similar"),d=l.get("accessories"),m=l.get("model")||l.get("catalog"),k=l.get("ean");return n("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t?n("ks-info-banner",{image:t.image,color:t.color,width:t.width,height:t.height,name:t.name,link:t.link,theme:t.theme}):null,n("ks-container",null,n("ks-product-notify",null),n("ks-product-admin",null),n("ks-product-info",null,l.get("traits")?n("ks-product-traits",null):null,n("ks-product-purchase",null),n("ks-product-shipping",null),l.get("warranty")?n("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:l.get("warrantyLink")},l.get("warranty")):null,r?n("ks-product-tooltip",{message:r.message},n("ks-product-attribute",{icon:"gift"},r.shortMessage)):null,o?n("ks-product-tooltip",{message:o.message},n("ks-product-attribute",{icon:"recycle"},o.shortMessage)):null,m||k?n("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:!0},n("span",{style:{marginRight:"15px"}},m?n("span",{style:{marginRight:"7px"}},"Model: ",m," "):null,k?n("span",null,"EAN: ",k):null)):null,n("div",{class:"buttons"},l.get("negotiateEnabled")&&n("ks-product-negotiate",null,n("ks-product-button",null,l.get("negotiate").heading)),e.payuId&&e.payuKey||e.caParameters?n("ks-product-installments",{name:e.button},e.payuId&&e.payuKey?n("ks-product-calculator-payu",{price:l.get("currentPrice"),"pos-id":e.payuId,"api-key":e.payuKey},n("ks-product-button",{icon:e.payuIcon})):null,e.caParameters?n("ks-product-calculator-ca",{price:l.get("currentPrice"),parameters:e.caParameters},n("ks-product-button",{icon:e.caIcon})):null):null),n("ks-product-brand",{slot:"brand"}))),(null==i?void 0:i.length)>0||(null==a?void 0:a.length)>0?n("ks-container",{padding:!0},(null==i?void 0:i.length)>0&&!((null==a?void 0:a.length)>0)?n("ks-product-tags",null):null,(null==a?void 0:a.length)>0?n("ks-product-variants",null):null):null,(null==u?void 0:u.length)>0?n("ks-container",null,n("ks-product-tabs",{names:u.map((t=>t.name)).join(", ")},u.map(((t,r)=>n("ks-product-tab",{name:t.name,open:0==r,main:0==r,content:t.content}))))):null,(null==i?void 0:i.length)>0&&(null==a?void 0:a.length)>0?n("ks-container",{padding:!0},n("ks-product-tags",null)):null,s||c?n("ks-container",null,s.map((t=>n("ks-product-youtube",{"video-id":t}))),c?n("ks-product-comments",null):null):null,(null==p?void 0:p.length)>0?[n("h3",null,l.get("similarHeading")),n("ks-product-container",null,p.map((t=>n("ks-product-card",{"product-id":t.id,link:t.link,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice}))))]:null,(null==d?void 0:d.length)>0?[n("h3",null,l.get("accessoriesHeading")),n("ks-product-container",null,d.map((t=>n("ks-product-card",{"product-id":t.id,link:t.link,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice}))))]:null)}};e.style="ks-page-product>ks-page-base>h3{text-align:center;margin-top:15px}ks-page-product>ks-page-base>ks-product-container{margin-bottom:15px}";export{e as ks_page_product}