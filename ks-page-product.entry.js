import{r as t,B as n,h as o}from"./index-e3198654.js";import{e as l}from"./tracker-fca74da4.js";import{p as r}from"./product-b6117ebf.js";import{p as i}from"./productDynamic-d7f32362.js";import{c as a}from"./commonDynamic-1f04aed5.js";import{c as s}from"./common-e4bd89b8.js";import{D as e}from"./dataLayer-1eec95fc.js";import"./index-5a4e318f.js";const u=class{constructor(n){t(this,n),this.skipbase=void 0,this.commonData=void 0,this.commonDynamicData=void 0,this.productData=void 0,this.productDynamicData=void 0}componentWillLoad(){const t=document.getElementById(this.productData),o=JSON.parse(t.innerHTML);if(Object.keys(o).map((t=>{r.set(t,o[t])})),this.setDefaultTrait(),n.isBrowser){const t=document.getElementById(this.productDynamicData),n=JSON.parse(t.innerHTML);Object.keys(n).map((t=>{i.set(t,n[t])})),setTimeout((()=>{i.set("loaded",!0)}),100),this.track()}}setDefaultTrait(){if(!(null==r?void 0:r.get("traits")))return;const t=r.get("traits").reduce(((t,n)=>t+"x"+n.id+"-"+n.items[0].id),"");r.set("traitIDs",t)}track(){e.product(r.state,i.get("eventId")),l((t=>null==t?void 0:t.product(r.state,i.get("eventId"))))}render(){var t;if(!(null==r?void 0:r.get("name")))return!1;const n=r.get("infoBanner"),l=r.get("productBanner"),i=r.get("points"),e=r.get("recycle"),u=r.get("installments"),c=r.get("tags"),d=r.get("variants"),p=r.get("tabs"),m=r.get("youtube"),k=r.get("similar"),v=r.get("accessories"),g=r.get("model")||r.get("catalog"),h=r.get("ean"),b=r.get("reviewAverage"),f=r.get("strings");return o("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},n?o("ks-info-banner",{image:n.image,color:n.color,width:n.width,height:n.height,name:n.name,link:n.link,theme:n.theme}):null,o("ks-container",null,o("ks-product-notify-edrone",null),o("ks-product-admin",null),o("ks-product-info",null,r.get("traits")?o("ks-product-traits",null):null,o("ks-product-purchase",{cartText:s.get("translations").addToCart,availabilityText:f.notifyAvailability}),o("ks-product-shipping",null),r.get("warranty")?o("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:r.get("warrantyLink")},r.get("warranty")):null,i?o("ks-product-tooltip",{message:i.message},o("ks-product-attribute",{icon:"gift"},i.shortMessage)):null,e?o("ks-product-tooltip",{message:e.message},o("ks-product-attribute",{icon:"recycle"},e.shortMessage)):null,(null==u?void 0:u.attributeMessage)?o("ks-product-attribute",{icon:"dollar-sign"},null==u?void 0:u.attributeMessage):null,g||h?o("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:!0},o("span",{style:{marginRight:"15px"}},g?o("span",{style:{marginRight:"7px"}},f.model," ",g," "):null,h?o("span",null,f.ean," ",h):null)):null,o("ks-product-history",{name:r.get("history"),productId:r.get("id"),api:a.get("api").productHistory}),o("div",{class:"buttons"},r.get("negotiateEnabled")?o("ks-product-negotiate",null,o("ks-product-button",null,r.get("negotiate").heading)):null,u.payuId&&u.payuKey||u.caParameters?o("ks-product-installments",{name:u.button},u.payuId&&u.payuKey?o("ks-product-calculator-payu",{price:r.get("currentPrice"),"pos-id":u.payuId,"api-key":u.payuKey},o("ks-product-button",{icon:u.payuIcon})):null,u.caParameters?o("ks-product-calculator-ca",{price:r.get("currentPrice"),parameters:u.caParameters},o("ks-product-button",{icon:u.caIcon})):null):null),o("ks-product-brand",{slot:"brand"}))),l&&(null==l?void 0:l.image)?o("ks-container",null,o("ks-info-banner",{image:l.image,color:l.color,width:l.width,height:l.height,name:l.name,link:l.link})):null,(null==c?void 0:c.length)>0||(null==d?void 0:d.length)>0?o("ks-container",{padding:!0},(null==c?void 0:c.length)>0&&!((null==d?void 0:d.length)>0)?o("ks-product-tags",null):null,(null==d?void 0:d.length)>0?o("ks-product-variants",null):null):null,(null==p?void 0:p.length)>0?o("ks-container",null,o("ks-product-tabs",{names:p.map((t=>t.name)).join(", ")},p.map(((t,n)=>o("ks-product-tab",{name:t.name,open:0==n,main:0==n,content:t.content}))))):null,(null===(t=r.get("reviewProducts"))||void 0===t?void 0:t.length)>0?o("ks-container",null,o("ks-review-product",null)):null,(null==c?void 0:c.length)>0&&(null==d?void 0:d.length)>0?o("ks-container",{padding:!0},o("ks-product-tags",null)):null,m?o("ks-container",null,m.map((t=>o("ks-product-youtube",{"video-id":t})))):null,(null==k?void 0:k.length)>0?[o("h3",null,f.similarHeading),o("ks-product-container",null,k.map((t=>o("ks-product-card",{product:t}))))]:null,(null==v?void 0:v.length)>0?[o("h3",null,f.accessoriesHeading),o("ks-product-container",null,v.map((t=>o("ks-product-card",{product:t}))))]:null,b?o("ks-review-average",{href:b.href,message:b.message,reviews:b.reviews,months:b.months,totalReviews:b.totalReviews,average:b.average,example:b.example}):null)}};u.style="ks-page-product>ks-page-base>h3{text-align:center;margin-top:15px}ks-page-product>ks-page-base>ks-product-container{margin-bottom:15px}";export{u as ks_page_product}