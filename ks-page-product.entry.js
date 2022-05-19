import{r as t,h as n}from"./index-6e14abe0.js";import{e as l}from"./tracker-7fb8955b.js";import{p as o}from"./product-4b80073e.js";import{p as r}from"./productDynamic-eaaa40fd.js";import{c as i}from"./commonDynamic-3300d49a.js";import"./index-a26ba0e6.js";const a=class{constructor(n){t(this,n)}componentWillLoad(){const t=document.getElementById(this.productData),n=JSON.parse(t.innerHTML);Object.keys(n).map((t=>{o.set(t,n[t])})),this.setDefaultTrait();{const t=document.getElementById(this.productDynamicData),n=JSON.parse(t.innerHTML);Object.keys(n).map((t=>{r.set(t,n[t])})),setTimeout((()=>{r.set("loaded",!0)}),100),this.track()}}setDefaultTrait(){if(!(null==o?void 0:o.get("traits")))return;const t=o.get("traits").reduce(((t,n)=>t+"x"+n.id+"-"+n.items[0].id),"");o.set("traitIDs",t)}track(){var t,n;l((t=>null==t?void 0:t.product(r.get("eventId"),o.get("id"),o.get("name"),parseFloat(o.get("currentPrice")),o.get("currency"))));const i=o.get("breadcrumbs");null===(t=window.dataLayer)||void 0===t||t.push({ecomm_prodid:o.get("id"),ecomm_pagetype:"product",ecomm_totalvalue:o.get("currentPrice")}),null===(n=window.dataLayer)||void 0===n||n.push({type:"product",name:o.get("currentPrice"),brand:o.get("brand").name,category:i[i.length-1].name,availability:o.get("shippingTime")})}render(){if(!(null==o?void 0:o.get("name")))return!1;const t=o.get("infoBanner"),l=o.get("points"),r=o.get("recycle"),a=o.get("installments"),e=o.get("tags"),u=o.get("variants"),s=o.get("tabs"),c=o.get("youtube"),d=o.get("comments"),p=o.get("similar"),m=o.get("accessories"),k=o.get("model")||o.get("catalog"),b=o.get("ean");return n("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t?n("ks-info-banner",{image:t.image,color:t.color,width:t.width,height:t.height,name:t.name,link:t.link,theme:t.theme}):null,n("ks-container",null,n("ks-product-notify",null),n("ks-product-admin",null),n("ks-product-info",null,o.get("traits")?n("ks-product-traits",null):null,n("ks-product-purchase",null),n("ks-product-shipping",null),o.get("warranty")?n("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:o.get("warrantyLink")},o.get("warranty")):null,l?n("ks-product-tooltip",{message:l.message},n("ks-product-attribute",{icon:"gift"},l.shortMessage)):null,r?n("ks-product-tooltip",{message:r.message},n("ks-product-attribute",{icon:"recycle"},r.shortMessage)):null,(null==a?void 0:a.attributeMessage)?n("ks-product-attribute",{icon:"dollar-sign"},null==a?void 0:a.attributeMessage):null,k||b?n("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:!0},n("span",{style:{marginRight:"15px"}},k?n("span",{style:{marginRight:"7px"}},"Model: ",k," "):null,b?n("span",null,"EAN: ",b):null)):null,n("ks-product-history",{name:o.get("history"),productId:o.get("id"),api:i.get("api").productHistory}),n("div",{class:"buttons"},o.get("negotiateEnabled")?n("ks-product-negotiate",null,n("ks-product-button",null,o.get("negotiate").heading)):null,a.payuId&&a.payuKey||a.caParameters?n("ks-product-installments",{name:a.button},a.payuId&&a.payuKey?n("ks-product-calculator-payu",{price:o.get("currentPrice"),"pos-id":a.payuId,"api-key":a.payuKey},n("ks-product-button",{icon:a.payuIcon})):null,a.caParameters?n("ks-product-calculator-ca",{price:o.get("currentPrice"),parameters:a.caParameters},n("ks-product-button",{icon:a.caIcon})):null):null),n("ks-product-brand",{slot:"brand"}))),(null==e?void 0:e.length)>0||(null==u?void 0:u.length)>0?n("ks-container",{padding:!0},(null==e?void 0:e.length)>0&&!((null==u?void 0:u.length)>0)?n("ks-product-tags",null):null,(null==u?void 0:u.length)>0?n("ks-product-variants",null):null):null,(null==s?void 0:s.length)>0?n("ks-container",null,n("ks-product-tabs",{names:s.map((t=>t.name)).join(", ")},s.map(((t,l)=>n("ks-product-tab",{name:t.name,open:0==l,main:0==l,content:t.content}))))):null,(null==e?void 0:e.length)>0&&(null==u?void 0:u.length)>0?n("ks-container",{padding:!0},n("ks-product-tags",null)):null,c||d?n("ks-container",null,c.map((t=>n("ks-product-youtube",{"video-id":t}))),d?n("ks-product-comments",null):null):null,(null==p?void 0:p.length)>0?[n("h3",null,o.get("similarHeading")),n("ks-product-container",null,p.map((t=>n("ks-product-card",{"product-id":t.id,link:t.link,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice,unavailable:t.unavailable}))))]:null,(null==m?void 0:m.length)>0?[n("h3",null,o.get("accessoriesHeading")),n("ks-product-container",null,m.map((t=>n("ks-product-card",{"product-id":t.id,link:t.link,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice,unavailable:t.unavailable}))))]:null)}};a.style="ks-page-product>ks-page-base>h3{text-align:center;margin-top:15px}ks-page-product>ks-page-base>ks-product-container{margin-bottom:15px}";export{a as ks_page_product}