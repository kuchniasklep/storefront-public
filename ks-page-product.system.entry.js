System.register(["./index-3484848d.system.js","./tracker-7f3a2dbd.system.js","./product-8db249af.system.js","./productDynamic-e0a63c1b.system.js","./commonDynamic-4569184d.system.js","./dataLayer-263151c7.system.js","./index-4afdae1e.system.js"],(function(t){"use strict";var e,n,a,r,i,o,u,l;return{setters:[function(t){e=t.r;n=t.B;a=t.h},function(t){r=t.e},function(t){i=t.p},function(t){o=t.p},function(t){u=t.c},function(t){l=t.D},function(){}],execute:function(){var s="ks-page-product>ks-page-base>h3{text-align:center;margin-top:15px}ks-page-product>ks-page-base>ks-product-container{margin-bottom:15px}";var c=t("ks_page_product",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){var t=document.getElementById(this.productData);var e=JSON.parse(t.innerHTML);Object.keys(e).map((function(t){i.set(t,e[t])}));this.setDefaultTrait();if(n.isBrowser){var a=document.getElementById(this.productDynamicData);var r=JSON.parse(a.innerHTML);Object.keys(r).map((function(t){o.set(t,r[t])}));setTimeout((function(){o.set("loaded",true)}),100);this.track()}};t.prototype.setDefaultTrait=function(){if(!(i===null||i===void 0?void 0:i.get("traits")))return;var t=i.get("traits").reduce((function(t,e){return t+"x"+e.id+"-"+e.items[0].id}),"");i.set("traitIDs",t)};t.prototype.track=function(){l.product(i.state,o.get("eventId"));r((function(t){return t===null||t===void 0?void 0:t.product(i.state,o.get("eventId"))}))};t.prototype.render=function(){var t;if(!(i===null||i===void 0?void 0:i.get("name")))return false;var e=i.get("infoBanner");var n=i.get("productBanner");var r=i.get("points");var o=i.get("recycle");var l=i.get("installments");var s=i.get("tags");var c=i.get("variants");var d=i.get("tabs");var p=i.get("youtube");var g=i.get("similar");var m=i.get("accessories");var v=i.get("model")||i.get("catalog");var k=i.get("ean");var h=i.get("reviewAverage");return a("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e?a("ks-info-banner",{image:e.image,color:e.color,width:e.width,height:e.height,name:e.name,link:e.link,theme:e.theme}):null,a("ks-container",null,a("ks-product-notify-edrone",null),a("ks-product-admin",null),a("ks-product-info",null,i.get("traits")?a("ks-product-traits",null):null,a("ks-product-purchase",null),a("ks-product-shipping",null),i.get("warranty")?a("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:i.get("warrantyLink")},i.get("warranty")):null,r?a("ks-product-tooltip",{message:r.message},a("ks-product-attribute",{icon:"gift"},r.shortMessage)):null,o?a("ks-product-tooltip",{message:o.message},a("ks-product-attribute",{icon:"recycle"},o.shortMessage)):null,(l===null||l===void 0?void 0:l.attributeMessage)?a("ks-product-attribute",{icon:"dollar-sign"},l===null||l===void 0?void 0:l.attributeMessage):null,v||k?a("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:true},a("span",{style:{marginRight:"15px"}},v?a("span",{style:{marginRight:"7px"}},"Model: ",v," "):null,k?a("span",null,"EAN: ",k):null)):null,a("ks-product-history",{name:i.get("history"),productId:i.get("id"),api:u.get("api").productHistory}),a("div",{class:"buttons"},i.get("negotiateEnabled")?a("ks-product-negotiate",null,a("ks-product-button",null,i.get("negotiate").heading)):null,l.payuId&&l.payuKey||l.caParameters?a("ks-product-installments",{name:l.button},l.payuId&&l.payuKey?a("ks-product-calculator-payu",{price:i.get("currentPrice"),"pos-id":l.payuId,"api-key":l.payuKey},a("ks-product-button",{icon:l.payuIcon})):null,l.caParameters?a("ks-product-calculator-ca",{price:i.get("currentPrice"),parameters:l.caParameters},a("ks-product-button",{icon:l.caIcon})):null):null),a("ks-product-brand",{slot:"brand"}))),n&&(n===null||n===void 0?void 0:n.image)?a("ks-container",null,a("ks-info-banner",{image:n.image,color:n.color,width:n.width,height:n.height,name:n.name,link:n.link})):null,(s===null||s===void 0?void 0:s.length)>0||(c===null||c===void 0?void 0:c.length)>0?a("ks-container",{padding:true},(s===null||s===void 0?void 0:s.length)>0&&!((c===null||c===void 0?void 0:c.length)>0)?a("ks-product-tags",null):null,(c===null||c===void 0?void 0:c.length)>0?a("ks-product-variants",null):null):null,(d===null||d===void 0?void 0:d.length)>0?a("ks-container",null,a("ks-product-tabs",{names:d.map((function(t){return t.name})).join(", ")},d.map((function(t,e){return a("ks-product-tab",{name:t.name,open:e==0,main:e==0,content:t.content})})))):null,((t=i.get("reviewProducts"))===null||t===void 0?void 0:t.length)>0?a("ks-container",null,a("ks-review-product",null)):null,(s===null||s===void 0?void 0:s.length)>0&&(c===null||c===void 0?void 0:c.length)>0?a("ks-container",{padding:true},a("ks-product-tags",null)):null,p?a("ks-container",null,p.map((function(t){return a("ks-product-youtube",{"video-id":t})}))):null,(g===null||g===void 0?void 0:g.length)>0?[a("h3",null,i.get("similarHeading")),a("ks-product-container",null,g.map((function(t){return a("ks-product-card",{"product-id":t.id,link:t.link,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice,unavailable:t.unavailable})})))]:null,(m===null||m===void 0?void 0:m.length)>0?[a("h3",null,i.get("accessoriesHeading")),a("ks-product-container",null,m.map((function(t){return a("ks-product-card",{"product-id":t.id,link:t.link,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice,unavailable:t.unavailable})})))]:null,h?a("ks-review-average",{href:h.href,message:h.message,reviews:h.reviews,months:h.months,totalReviews:h.totalReviews,average:h.average,example:h.example}):null)};return t}());c.style=s}}}));