import{r as t,B as n,h as l}from"./index-b2de1977.js";import{p as o}from"./product-3b8233ee.js";import{p as r}from"./productDynamic-4b334966.js";import{D as e}from"./dataLayer-5339341e.js";import"./index-bca22170.js";import"./commonDynamic-e598d690.js";import"./fetch-bbb23998.js";const a=class{constructor(n){t(this,n)}componentWillLoad(){const t=document.getElementById(this.productData),l=JSON.parse(t.innerHTML);if(Object.keys(l).map((t=>{o.set(t,l[t])})),this.setDefaultTrait(),n.isBrowser){const t=document.getElementById(this.productDynamicData),n=JSON.parse(t.innerHTML);Object.keys(n).map((t=>{r.set(t,n[t])})),setTimeout((()=>{r.set("loaded",!0)}),100),this.track()}}setDefaultTrait(){if(!(null==o?void 0:o.get("traits")))return;const t=o.get("traits").reduce(((t,n)=>t+"x"+n.id+"-"+n.items[0].id),"");o.set("traitIDs",t)}track(){e.product(o.state,r.get("eventId"))}render(){var t;if(!(null==o?void 0:o.get("name")))return!1;const n=o.get("infoBanner"),r=o.get("productBanner"),e=o.get("points"),a=o.get("recycle"),s=o.get("installments"),i=o.get("tags"),u=o.get("variants"),c=o.get("tabs"),d=o.get("youtube"),p=o.get("similar"),k=o.get("accessories"),m=o.get("model")||o.get("catalog"),g=o.get("ean"),b=o.get("reviewAverage");return l("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},n?l("ks-info-banner",{image:n.image,color:n.color,width:n.width,height:n.height,name:n.name,link:n.link,theme:n.theme}):null,l("ks-container",null,l("ks-product-notify-edrone",null),l("ks-product-admin",null),l("ks-product-info",null,o.get("traits")?l("ks-product-traits",null):null,l("ks-product-purchase",null),l("ks-product-shipping",null),o.get("warranty")?l("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:o.get("warrantyLink")},o.get("warranty")):null,e?l("ks-product-tooltip",{message:e.message},l("ks-product-attribute",{icon:"gift"},e.shortMessage)):null,a?l("ks-product-tooltip",{message:a.message},l("ks-product-attribute",{icon:"recycle"},a.shortMessage)):null,(null==s?void 0:s.attributeMessage)?l("ks-product-attribute",{icon:"dollar-sign"},null==s?void 0:s.attributeMessage):null,m||g?l("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:!0},l("span",{style:{marginRight:"15px"}},m?l("span",{style:{marginRight:"7px"}},"Model: ",m," "):null,g?l("span",null,"EAN: ",g):null)):null,l("div",{class:"buttons"},o.get("negotiateEnabled")?l("ks-product-negotiate",null,l("ks-product-button",null,o.get("negotiate").heading)):null,s.payuId&&s.payuKey||s.caParameters?l("ks-product-installments",{name:s.button},s.payuId&&s.payuKey?l("ks-product-calculator-payu",{price:o.get("currentPrice"),"pos-id":s.payuId,"api-key":s.payuKey},l("ks-product-button",{icon:s.payuIcon})):null,s.caParameters?l("ks-product-calculator-ca",{price:o.get("currentPrice"),parameters:s.caParameters},l("ks-product-button",{icon:s.caIcon})):null):null),l("ks-product-brand",{slot:"brand"}))),r&&(null==r?void 0:r.image)?l("ks-container",null,l("ks-info-banner",{image:r.image,color:r.color,width:r.width,height:r.height,name:r.name,link:r.link})):null,(null==i?void 0:i.length)>0||(null==u?void 0:u.length)>0?l("ks-container",{padding:!0},(null==i?void 0:i.length)>0&&!((null==u?void 0:u.length)>0)?l("ks-product-tags",null):null,(null==u?void 0:u.length)>0?l("ks-product-variants",null):null):null,(null==c?void 0:c.length)>0?l("ks-container",null,l("ks-product-tabs",{names:c.map((t=>t.name)).join(", ")},c.map(((t,n)=>l("ks-product-tab",{name:t.name,open:0==n,main:0==n,content:t.content}))))):null,(null===(t=o.get("reviewProducts"))||void 0===t?void 0:t.length)>0?l("ks-container",null,l("ks-review-product",null)):null,(null==i?void 0:i.length)>0&&(null==u?void 0:u.length)>0?l("ks-container",{padding:!0},l("ks-product-tags",null)):null,d?l("ks-container",null,d.map((t=>l("ks-product-youtube",{"video-id":t})))):null,(null==p?void 0:p.length)>0?[l("h3",null,o.get("similarHeading")),l("ks-product-container",null,p.map((t=>l("ks-product-card",{product:t}))))]:null,(null==k?void 0:k.length)>0?[l("h3",null,o.get("accessoriesHeading")),l("ks-product-container",null,k.map((t=>l("ks-product-card",{product:t}))))]:null,b?l("ks-review-average",{href:b.href,message:b.message,reviews:b.reviews,months:b.months,totalReviews:b.totalReviews,average:b.average,example:b.example}):null)}};a.style="ks-page-product>ks-page-base>h3{text-align:center;margin-top:15px}ks-page-product>ks-page-base>ks-product-container{margin-bottom:15px}";export{a as ks_page_product}