System.register(["./index-9d88b83b.system.js","./tracker-dbb87cd8.system.js","./product-16a8c069.system.js","./productDynamic-3877b2af.system.js","./commonDynamic-ae951e05.system.js","./index-901f8c50.system.js"],(function(t){"use strict";var e,n,a,r,i,o;return{setters:[function(t){e=t.r;n=t.h},function(t){a=t.e},function(t){r=t.p},function(t){i=t.p},function(t){o=t.c},function(){}],execute:function(){var u="ks-page-product>ks-page-base>h3{text-align:center;margin-top:15px}ks-page-product>ks-page-base>ks-product-container{margin-bottom:15px}";var l=t("ks_page_product",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){var t=document.getElementById(this.productData);var e=JSON.parse(t.innerHTML);Object.keys(e).map((function(t){r.set(t,e[t])}));this.setDefaultTrait();{var n=document.getElementById(this.productDynamicData);var a=JSON.parse(n.innerHTML);Object.keys(a).map((function(t){i.set(t,a[t])}));setTimeout((function(){i.set("loaded",true)}),100);this.track()}};t.prototype.setDefaultTrait=function(){if(!(r===null||r===void 0?void 0:r.get("traits")))return;var t=r.get("traits").reduce((function(t,e){return t+"x"+e.id+"-"+e.items[0].id}),"");r.set("traitIDs",t)};t.prototype.track=function(){var t,e;a((function(t){return t===null||t===void 0?void 0:t.product(i.get("eventId"),r.get("id"),r.get("name"),parseFloat(r.get("currentPrice")),r.get("currency"))}));var n=r.get("breadcrumbs");(t=window.dataLayer)===null||t===void 0?void 0:t.push({ecomm_prodid:r.get("id"),ecomm_pagetype:"product",ecomm_totalvalue:r.get("currentPrice")});(e=window.dataLayer)===null||e===void 0?void 0:e.push({type:"product",name:r.get("currentPrice"),brand:r.get("brand").name,category:n[n.length-1].name,availability:r.get("shippingTime")})};t.prototype.render=function(){if(!(r===null||r===void 0?void 0:r.get("name")))return false;var t=r.get("infoBanner");var e=r.get("productBanner");var a=r.get("points");var i=r.get("recycle");var u=r.get("installments");var l=r.get("tags");var s=r.get("variants");var c=r.get("tabs");var d=r.get("youtube");var p=r.get("similar");var g=r.get("accessories");var m=r.get("model")||r.get("catalog");var v=r.get("ean");return n("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t?n("ks-info-banner",{image:t.image,color:t.color,width:t.width,height:t.height,name:t.name,link:t.link,theme:t.theme}):null,n("ks-container",null,n("ks-product-notify",null),n("ks-product-admin",null),n("ks-product-info",null,r.get("traits")?n("ks-product-traits",null):null,n("ks-product-purchase",null),n("ks-product-shipping",null),r.get("warranty")?n("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:r.get("warrantyLink")},r.get("warranty")):null,a?n("ks-product-tooltip",{message:a.message},n("ks-product-attribute",{icon:"gift"},a.shortMessage)):null,i?n("ks-product-tooltip",{message:i.message},n("ks-product-attribute",{icon:"recycle"},i.shortMessage)):null,(u===null||u===void 0?void 0:u.attributeMessage)?n("ks-product-attribute",{icon:"dollar-sign"},u===null||u===void 0?void 0:u.attributeMessage):null,m||v?n("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:true},n("span",{style:{marginRight:"15px"}},m?n("span",{style:{marginRight:"7px"}},"Model: ",m," "):null,v?n("span",null,"EAN: ",v):null)):null,n("ks-product-history",{name:r.get("history"),productId:r.get("id"),api:o.get("api").productHistory}),n("div",{class:"buttons"},r.get("negotiateEnabled")?n("ks-product-negotiate",null,n("ks-product-button",null,r.get("negotiate").heading)):null,u.payuId&&u.payuKey||u.caParameters?n("ks-product-installments",{name:u.button},u.payuId&&u.payuKey?n("ks-product-calculator-payu",{price:r.get("currentPrice"),"pos-id":u.payuId,"api-key":u.payuKey},n("ks-product-button",{icon:u.payuIcon})):null,u.caParameters?n("ks-product-calculator-ca",{price:r.get("currentPrice"),parameters:u.caParameters},n("ks-product-button",{icon:u.caIcon})):null):null),n("ks-product-brand",{slot:"brand"}))),e&&(e===null||e===void 0?void 0:e.image)?n("ks-container",null,n("ks-info-banner",{image:e.image,color:e.color,width:e.width,height:e.height,name:e.name,link:e.link})):null,(l===null||l===void 0?void 0:l.length)>0||(s===null||s===void 0?void 0:s.length)>0?n("ks-container",{padding:true},(l===null||l===void 0?void 0:l.length)>0&&!((s===null||s===void 0?void 0:s.length)>0)?n("ks-product-tags",null):null,(s===null||s===void 0?void 0:s.length)>0?n("ks-product-variants",null):null):null,(c===null||c===void 0?void 0:c.length)>0?n("ks-container",null,n("ks-product-tabs",{names:c.map((function(t){return t.name})).join(", ")},c.map((function(t,e){return n("ks-product-tab",{name:t.name,open:e==0,main:e==0,content:t.content})})))):null,(l===null||l===void 0?void 0:l.length)>0&&(s===null||s===void 0?void 0:s.length)>0?n("ks-container",{padding:true},n("ks-product-tags",null)):null,d?n("ks-container",null,d.map((function(t){return n("ks-product-youtube",{"video-id":t})}))):null,n("ks-zaufane-product",{product:r.get("id"),token:"sf15070062a0416b2b0c3",customer:"150700"}),(p===null||p===void 0?void 0:p.length)>0?[n("h3",null,r.get("similarHeading")),n("ks-product-container",null,p.map((function(t){return n("ks-product-card",{"product-id":t.id,link:t.link,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice,unavailable:t.unavailable})})))]:null,(g===null||g===void 0?void 0:g.length)>0?[n("h3",null,r.get("accessoriesHeading")),n("ks-product-container",null,g.map((function(t){return n("ks-product-card",{"product-id":t.id,link:t.link,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice,unavailable:t.unavailable})})))]:null,n("ks-zaufane",{listing:true,nobg:true,token:"sf15070062863aac5f8ea",customer:"150700"}))};return t}());l.style=u}}}));