import{r as t,B as n,h as l}from"./index-b2de1977.js";import{e as o}from"./tracker-7d15eac4.js";import{p as r}from"./product-3b8233ee.js";import{p as e}from"./productDynamic-4b334966.js";import{c as a}from"./commonDynamic-e598d690.js";import{D as i}from"./dataLayer-51bf6ba7.js";import"./index-bca22170.js";const s=class{constructor(n){t(this,n)}componentWillLoad(){const t=document.getElementById(this.productData),l=JSON.parse(t.innerHTML);if(Object.keys(l).map((t=>{r.set(t,l[t])})),this.setDefaultTrait(),n.isBrowser){const t=document.getElementById(this.productDynamicData),n=JSON.parse(t.innerHTML);Object.keys(n).map((t=>{e.set(t,n[t])})),setTimeout((()=>{e.set("loaded",!0)}),100),this.track()}}setDefaultTrait(){if(!(null==r?void 0:r.get("traits")))return;const t=r.get("traits").reduce(((t,n)=>t+"x"+n.id+"-"+n.items[0].id),"");r.set("traitIDs",t)}track(){i.product(r.state,e.get("eventId")),o((t=>null==t?void 0:t.product(r.state,e.get("eventId"))))}render(){var t;if(!(null==r?void 0:r.get("name")))return!1;const n=r.get("infoBanner"),o=r.get("productBanner"),e=r.get("points"),i=r.get("recycle"),s=r.get("installments"),u=r.get("tags"),c=r.get("variants"),d=r.get("tabs"),p=r.get("youtube"),k=r.get("similar"),m=r.get("accessories"),g=r.get("model")||r.get("catalog"),v=r.get("ean"),b=r.get("reviewAverage");return l("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},n?l("ks-info-banner",{image:n.image,color:n.color,width:n.width,height:n.height,name:n.name,link:n.link,theme:n.theme}):null,l("ks-container",null,l("ks-product-notify-edrone",null),l("ks-product-admin",null),l("ks-product-info",null,r.get("traits")?l("ks-product-traits",null):null,l("ks-product-purchase",null),l("ks-product-shipping",null),r.get("warranty")?l("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:r.get("warrantyLink")},r.get("warranty")):null,e?l("ks-product-tooltip",{message:e.message},l("ks-product-attribute",{icon:"gift"},e.shortMessage)):null,i?l("ks-product-tooltip",{message:i.message},l("ks-product-attribute",{icon:"recycle"},i.shortMessage)):null,(null==s?void 0:s.attributeMessage)?l("ks-product-attribute",{icon:"dollar-sign"},null==s?void 0:s.attributeMessage):null,g||v?l("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:!0},l("span",{style:{marginRight:"15px"}},g?l("span",{style:{marginRight:"7px"}},"Model: ",g," "):null,v?l("span",null,"EAN: ",v):null)):null,l("ks-product-history",{name:r.get("history"),productId:r.get("id"),api:a.get("api").productHistory}),l("div",{class:"buttons"},r.get("negotiateEnabled")?l("ks-product-negotiate",null,l("ks-product-button",null,r.get("negotiate").heading)):null,s.payuId&&s.payuKey||s.caParameters?l("ks-product-installments",{name:s.button},s.payuId&&s.payuKey?l("ks-product-calculator-payu",{price:r.get("currentPrice"),"pos-id":s.payuId,"api-key":s.payuKey},l("ks-product-button",{icon:s.payuIcon})):null,s.caParameters?l("ks-product-calculator-ca",{price:r.get("currentPrice"),parameters:s.caParameters},l("ks-product-button",{icon:s.caIcon})):null):null),l("ks-product-brand",{slot:"brand"}))),o&&(null==o?void 0:o.image)?l("ks-container",null,l("ks-info-banner",{image:o.image,color:o.color,width:o.width,height:o.height,name:o.name,link:o.link})):null,(null==u?void 0:u.length)>0||(null==c?void 0:c.length)>0?l("ks-container",{padding:!0},(null==u?void 0:u.length)>0&&!((null==c?void 0:c.length)>0)?l("ks-product-tags",null):null,(null==c?void 0:c.length)>0?l("ks-product-variants",null):null):null,(null==d?void 0:d.length)>0?l("ks-container",null,l("ks-product-tabs",{names:d.map((t=>t.name)).join(", ")},d.map(((t,n)=>l("ks-product-tab",{name:t.name,open:0==n,main:0==n,content:t.content}))))):null,(null===(t=r.get("reviewProducts"))||void 0===t?void 0:t.length)>0?l("ks-container",null,l("ks-review-product",null)):null,(null==u?void 0:u.length)>0&&(null==c?void 0:c.length)>0?l("ks-container",{padding:!0},l("ks-product-tags",null)):null,p?l("ks-container",null,p.map((t=>l("ks-product-youtube",{"video-id":t})))):null,(null==k?void 0:k.length)>0?[l("h3",null,r.get("similarHeading")),l("ks-product-container",null,k.map((t=>l("ks-product-card",{product:t}))))]:null,(null==m?void 0:m.length)>0?[l("h3",null,r.get("accessoriesHeading")),l("ks-product-container",null,m.map((t=>l("ks-product-card",{product:t}))))]:null,b?l("ks-review-average",{href:b.href,message:b.message,reviews:b.reviews,months:b.months,totalReviews:b.totalReviews,average:b.average,example:b.example}):null)}};s.style="ks-page-product>ks-page-base>h3{text-align:center;margin-top:15px}ks-page-product>ks-page-base>ks-product-container{margin-bottom:15px}";export{s as ks_page_product}