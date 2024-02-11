System.register(["./index-229c64eb.system.js","./product-2705cbfd.system.js","./productDynamic-b710074f.system.js","./common-ed4cb7b7.system.js","./dataLayer-5e2c2bfb.system.js","./index-0ecc4079.system.js","./commonDynamic-b77fc38a.system.js","./fetch-8edb5396.system.js"],(function(t){"use strict";var n,e,a,o,r,i,u;return{setters:[function(t){n=t.r;e=t.B;a=t.h},function(t){o=t.p},function(t){r=t.p},function(t){i=t.c},function(t){u=t.D},function(){},function(){},function(){}],execute:function(){var s="ks-page-product>ks-page-base>h3{text-align:center;margin-top:15px}ks-page-product>ks-page-base>ks-product-container{margin-bottom:15px}";var l=t("ks_page_product",function(){function t(t){n(this,t);this.skipbase=undefined;this.commonData=undefined;this.commonDynamicData=undefined;this.productData=undefined;this.productDynamicData=undefined}t.prototype.componentWillLoad=function(){var t=document.getElementById(this.productData);var n=JSON.parse(t.innerHTML);Object.keys(n).map((function(t){o.set(t,n[t])}));this.setDefaultTrait();if(e.isBrowser){var a=document.getElementById(this.productDynamicData);var i=JSON.parse(a.innerHTML);Object.keys(i).map((function(t){r.set(t,i[t])}));setTimeout((function(){r.set("loaded",true)}),100);this.track()}};t.prototype.setDefaultTrait=function(){if(!(o===null||o===void 0?void 0:o.get("traits")))return;var t=o.get("traits").reduce((function(t,n){return t+"x"+n.id+"-"+n.items[0].id}),"");o.set("traitIDs",t)};t.prototype.track=function(){u.product(o.state,r.get("eventId"))};t.prototype.componentDidUpdate=function(){window.handleInpostIziButtons()};t.prototype.render=function(){var t;if(!(o===null||o===void 0?void 0:o.get("name")))return false;var n=o.get("infoBanner");var e=o.get("productBanner");var r=o.get("points");var u=o.get("recycle");var s=o.get("installments");var l=o.get("tags");var c=o.get("variants");var d=o.get("tabs");var p=o.get("youtube");var g=o.get("similar");var m=o.get("accessories");var v=o.get("model")||o.get("catalog");var k=o.get("ean");var y=o.get("reviewAverage");var f=o.get("strings");return a("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},n?a("ks-content-info-banner",{content:n}):null,a("ks-container",null,a("ks-product-notify-edrone",null),a("ks-product-admin",null),o.get("message")?a("ks-product-message",null):null,a("ks-product-info",null,o.get("traits")?a("ks-product-traits",null):null,a("ks-product-purchase",{cartText:i.get("translations").addToCart,availabilityText:f.notifyAvailability}),a("ks-product-shipping",null),o.get("warranty")?a("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:o.get("warrantyLink")},o.get("warranty")):null,r?a("ks-product-tooltip",{message:r.message},a("ks-product-attribute",{icon:"gift"},r.shortMessage)):null,u?a("ks-product-tooltip",{message:u.message},a("ks-product-attribute",{icon:"recycle"},u.shortMessage)):null,(s===null||s===void 0?void 0:s.attributeMessage)?a("ks-product-attribute",{icon:"dollar-sign"},s===null||s===void 0?void 0:s.attributeMessage):null,o.get("energy")&&o.get("energyLabel")?a("ks-product-image-popup",{image:o.get("energyLabel")},a("ks-product-attribute",{energy:o.get("energy")},"Klasa energetyczna")):null,v||k?a("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:true},a("span",{style:{marginRight:"15px"}},v?a("span",{style:{marginRight:"7px"}},f.model," ",v," "):null,k?a("span",null,f.ean," ",k):null)):null,a("div",{class:"buttons"},o.get("negotiateEnabled")?a("ks-product-negotiate",null,a("ks-product-button",null,o.get("strings").negotiateHeading)):null,s.payuId&&s.payuKey||s.caParameters?a("ks-product-installments",{name:s.button},s.payuId&&s.payuKey?a("ks-product-calculator-payu",{price:o.get("currentPrice"),"pos-id":s.payuId,"api-key":s.payuKey},a("ks-product-button",{icon:s.payuIcon})):null,s.caParameters?a("ks-product-calculator-ca",{price:o.get("currentPrice"),parameters:s.caParameters},a("ks-product-button",{icon:s.caIcon})):null):null),a("ks-product-brand",{slot:"brand"}))),e&&(e===null||e===void 0?void 0:e.image)?a("ks-container",null,a("ks-content-info-banner",{productBanner:e})):null,(l===null||l===void 0?void 0:l.length)>0||(c===null||c===void 0?void 0:c.length)>0?a("ks-container",{padding:true},(l===null||l===void 0?void 0:l.length)>0&&!((c===null||c===void 0?void 0:c.length)>0)?a("ks-product-tags",null):null,(c===null||c===void 0?void 0:c.length)>0?a("ks-product-variants",null):null):null,(d===null||d===void 0?void 0:d.length)>0?a("ks-container",null,a("ks-product-tabs",{names:d.map((function(t){return t.name})).join(", ")},d.map((function(t,n){return a("ks-product-tab",{name:t.name,open:n==0,main:n==0,content:t.content})})))):null,((t=o.get("reviewProducts"))===null||t===void 0?void 0:t.length)>0?a("ks-container",null,a("ks-review-product",null)):null,(l===null||l===void 0?void 0:l.length)>0&&(c===null||c===void 0?void 0:c.length)>0?a("ks-container",{padding:true},a("ks-product-tags",null)):null,p?a("ks-container",null,p.map((function(t){return a("ks-product-youtube",{"video-id":t})}))):null,(g===null||g===void 0?void 0:g.length)>0?[a("h3",null,f.similarHeading),a("ks-product-container",null,g.map((function(t){return a("ks-product-card",{product:t})})))]:null,(m===null||m===void 0?void 0:m.length)>0?[a("h3",null,f.accessoriesHeading),a("ks-product-container",null,m.map((function(t){return a("ks-product-card",{product:t})})))]:null,y?a("ks-content-reviews",{content:y}):null)};return t}());l.style=s}}}));