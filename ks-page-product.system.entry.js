System.register(["./index-5ab56926.system.js","./product-ac66a87e.system.js","./productDynamic-9d35b55e.system.js","./dataLayer-7e699a78.system.js","./index-1eb13b56.system.js","./commonDynamic-e40d9ffc.system.js","./fetch-89de6a18.system.js"],(function(t){"use strict";var e,n,a,r,o,i;return{setters:[function(t){e=t.r;n=t.B;a=t.h},function(t){r=t.p},function(t){o=t.p},function(t){i=t.D},function(){},function(){},function(){}],execute:function(){var l="ks-page-product>ks-page-base>h3{text-align:center;margin-top:15px}ks-page-product>ks-page-base>ks-product-container{margin-bottom:15px}";var u=t("ks_page_product",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){var t=document.getElementById(this.productData);var e=JSON.parse(t.innerHTML);Object.keys(e).map((function(t){r.set(t,e[t])}));this.setDefaultTrait();if(n.isBrowser){var a=document.getElementById(this.productDynamicData);var i=JSON.parse(a.innerHTML);Object.keys(i).map((function(t){o.set(t,i[t])}));setTimeout((function(){o.set("loaded",true)}),100);this.track()}};t.prototype.setDefaultTrait=function(){if(!(r===null||r===void 0?void 0:r.get("traits")))return;var t=r.get("traits").reduce((function(t,e){return t+"x"+e.id+"-"+e.items[0].id}),"");r.set("traitIDs",t)};t.prototype.track=function(){i.product(r.state,o.get("eventId"))};t.prototype.render=function(){var t;if(!(r===null||r===void 0?void 0:r.get("name")))return false;var e=r.get("infoBanner");var n=r.get("productBanner");var o=r.get("points");var i=r.get("recycle");var l=r.get("installments");var u=r.get("tags");var s=r.get("variants");var c=r.get("tabs");var d=r.get("youtube");var p=r.get("similar");var g=r.get("accessories");var m=r.get("model")||r.get("catalog");var v=r.get("ean");var k=r.get("reviewAverage");return a("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e?a("ks-info-banner",{image:e.image,color:e.color,width:e.width,height:e.height,name:e.name,link:e.link,theme:e.theme}):null,a("ks-container",null,a("ks-product-notify-edrone",null),a("ks-product-admin",null),a("ks-product-info",null,r.get("traits")?a("ks-product-traits",null):null,a("ks-product-purchase",null),a("ks-product-shipping",null),r.get("warranty")?a("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:r.get("warrantyLink")},r.get("warranty")):null,o?a("ks-product-tooltip",{message:o.message},a("ks-product-attribute",{icon:"gift"},o.shortMessage)):null,i?a("ks-product-tooltip",{message:i.message},a("ks-product-attribute",{icon:"recycle"},i.shortMessage)):null,(l===null||l===void 0?void 0:l.attributeMessage)?a("ks-product-attribute",{icon:"dollar-sign"},l===null||l===void 0?void 0:l.attributeMessage):null,m||v?a("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:true},a("span",{style:{marginRight:"15px"}},m?a("span",{style:{marginRight:"7px"}},"Model: ",m," "):null,v?a("span",null,"EAN: ",v):null)):null,a("div",{class:"buttons"},r.get("negotiateEnabled")?a("ks-product-negotiate",null,a("ks-product-button",null,r.get("negotiate").heading)):null,l.payuId&&l.payuKey||l.caParameters?a("ks-product-installments",{name:l.button},l.payuId&&l.payuKey?a("ks-product-calculator-payu",{price:r.get("currentPrice"),"pos-id":l.payuId,"api-key":l.payuKey},a("ks-product-button",{icon:l.payuIcon})):null,l.caParameters?a("ks-product-calculator-ca",{price:r.get("currentPrice"),parameters:l.caParameters},a("ks-product-button",{icon:l.caIcon})):null):null),a("ks-product-brand",{slot:"brand"}))),n&&(n===null||n===void 0?void 0:n.image)?a("ks-container",null,a("ks-info-banner",{image:n.image,color:n.color,width:n.width,height:n.height,name:n.name,link:n.link})):null,(u===null||u===void 0?void 0:u.length)>0||(s===null||s===void 0?void 0:s.length)>0?a("ks-container",{padding:true},(u===null||u===void 0?void 0:u.length)>0&&!((s===null||s===void 0?void 0:s.length)>0)?a("ks-product-tags",null):null,(s===null||s===void 0?void 0:s.length)>0?a("ks-product-variants",null):null):null,(c===null||c===void 0?void 0:c.length)>0?a("ks-container",null,a("ks-product-tabs",{names:c.map((function(t){return t.name})).join(", ")},c.map((function(t,e){return a("ks-product-tab",{name:t.name,open:e==0,main:e==0,content:t.content})})))):null,((t=r.get("reviewProducts"))===null||t===void 0?void 0:t.length)>0?a("ks-container",null,a("ks-review-product",null)):null,(u===null||u===void 0?void 0:u.length)>0&&(s===null||s===void 0?void 0:s.length)>0?a("ks-container",{padding:true},a("ks-product-tags",null)):null,d?a("ks-container",null,d.map((function(t){return a("ks-product-youtube",{"video-id":t})}))):null,(p===null||p===void 0?void 0:p.length)>0?[a("h3",null,r.get("similarHeading")),a("ks-product-container",null,p.map((function(t){return a("ks-product-card",{product:t})})))]:null,(g===null||g===void 0?void 0:g.length)>0?[a("h3",null,r.get("accessoriesHeading")),a("ks-product-container",null,g.map((function(t){return a("ks-product-card",{product:t})})))]:null,k?a("ks-review-average",{href:k.href,message:k.message,reviews:k.reviews,months:k.months,totalReviews:k.totalReviews,average:k.average,example:k.example}):null)};return t}());u.style=l}}}));