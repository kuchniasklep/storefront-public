import{r as t,B as n,h as o}from"./index-e3198654.js";import{p as l}from"./product-f369d656.js";import{p as r}from"./productDynamic-d7f32362.js";import{c as s}from"./common-e4bd89b8.js";import{D as e}from"./dataLayer-31ff5119.js";import"./index-5a4e318f.js";import"./commonDynamic-a3c330fc.js";import"./fetch-1f8a9006.js";import"./js.cookie-2cc1be5d.js";import"./_commonjsHelpers-ba3f0406.js";const i=class{constructor(n){t(this,n),this.skipbase=void 0,this.commonData=void 0,this.commonDynamicData=void 0,this.productData=void 0,this.productDynamicData=void 0}componentWillLoad(){const t=document.getElementById(this.productData),o=JSON.parse(t.innerHTML);if(Object.keys(o).map((t=>{l.set(t,o[t])})),this.setDefaultTrait(),n.isBrowser){const t=document.getElementById(this.productDynamicData),n=JSON.parse(t.innerHTML);Object.keys(n).map((t=>{r.set(t,n[t])})),setTimeout((()=>{r.set("loaded",!0)}),100),this.track()}}setDefaultTrait(){if(!(null==l?void 0:l.get("traits")))return;const t=l.get("traits").reduce(((t,n)=>t+"x"+n.id+"-"+n.items[0].id),"");l.set("traitIDs",t)}track(){e.product(l.state,r.get("eventId"))}componentDidUpdate(){window.handleInpostIziButtons()}render(){var t;if(!(null==l?void 0:l.get("name")))return!1;const n=l.get("infoBanner"),r=l.get("productBanner"),e=l.get("points"),i=l.get("recycle"),a=l.get("installments"),u=l.get("tags"),c=l.get("variants"),d=l.get("tabs"),p=l.get("youtube"),k=l.get("similar"),m=l.get("accessories"),g=l.get("model")||l.get("catalog"),b=l.get("ean"),v=l.get("reviewAverage"),f=l.get("strings");return o("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},n?o("ks-content-info-banner",{content:n}):null,o("ks-container",null,o("ks-product-notify-edrone",null),o("ks-product-admin",null),l.get("message")?o("ks-product-message",null):null,o("ks-product-info",null,l.get("traits")?o("ks-product-traits",null):null,o("ks-product-purchase",{cartText:s.get("translations").addToCart,availabilityText:f.notifyAvailability}),o("ks-product-shipping",null),l.get("warranty")?o("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:l.get("warrantyLink")},l.get("warranty")):null,e?o("ks-product-tooltip",{message:e.message},o("ks-product-attribute",{icon:"gift"},e.shortMessage)):null,i?o("ks-product-tooltip",{message:i.message},o("ks-product-attribute",{icon:"recycle"},i.shortMessage)):null,(null==a?void 0:a.attributeMessage)?o("ks-product-attribute",{icon:"dollar-sign"},null==a?void 0:a.attributeMessage):null,l.get("energy")&&l.get("energyLabel")?o("ks-product-image-popup",{image:l.get("energyLabel")},o("ks-product-attribute",{energyOld:l.get("energyOld"),energy:l.get("energy")},"Klasa energetyczna")):null,g||b?o("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:!0},o("span",{style:{marginRight:"15px"}},g?o("span",{style:{marginRight:"7px"}},f.model," ",g," "):null,b?o("span",null,f.ean," ",b):null)):null,o("div",{class:"buttons"},l.get("negotiateEnabled")?o("ks-product-negotiate",null,o("ks-product-button",null,l.get("strings").negotiateHeading)):null,a.payuId&&a.payuKey||a.caParameters?o("ks-product-installments",{name:a.button},a.payuId&&a.payuKey?o("ks-product-calculator-payu",{price:l.get("currentPrice"),"pos-id":a.payuId,"api-key":a.payuKey},o("ks-product-button",{icon:a.payuIcon})):null,a.caParameters?o("ks-product-calculator-ca",{price:l.get("currentPrice"),parameters:a.caParameters},o("ks-product-button",{icon:a.caIcon})):null):null),o("ks-product-brand",{slot:"brand"}))),r&&(null==r?void 0:r.image)?o("ks-container",null,o("ks-content-info-banner",{productBanner:r})):null,(null==u?void 0:u.length)>0||(null==c?void 0:c.length)>0?o("ks-container",{padding:!0},(null==u?void 0:u.length)>0&&!((null==c?void 0:c.length)>0)?o("ks-product-tags",null):null,(null==c?void 0:c.length)>0?o("ks-product-variants",null):null):null,(null==d?void 0:d.length)>0?o("ks-container",null,o("ks-product-tabs",{names:d.map((t=>t.name)).join(", ")},d.map(((t,n)=>o("ks-product-tab",{name:t.name,open:0==n,main:0==n,content:t.content}))))):null,(null===(t=l.get("reviewProducts"))||void 0===t?void 0:t.length)>0?o("ks-container",null,o("ks-review-product",null)):null,(null==u?void 0:u.length)>0&&(null==c?void 0:c.length)>0?o("ks-container",{padding:!0},o("ks-product-tags",null)):null,p?o("ks-container",null,p.map((t=>o("ks-product-youtube",{"video-id":t})))):null,(null==k?void 0:k.length)>0?[o("h3",null,f.similarHeading),o("ks-product-container",null,k.map((t=>o("ks-product-card",{product:t}))))]:null,(null==m?void 0:m.length)>0?[o("h3",null,f.accessoriesHeading),o("ks-product-container",null,m.map((t=>o("ks-product-card",{product:t}))))]:null,v?o("ks-content-reviews",{content:v}):null)}};i.style="ks-page-product>ks-page-base>h3{text-align:center;margin-top:15px}ks-page-product>ks-page-base>ks-product-container{margin-bottom:15px}";export{i as ks_page_product}