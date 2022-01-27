System.register(["./index-c11c20c8.system.js","./tracker-a7f5f909.system.js","./product-9acd6387.system.js","./productDynamic-df7660cc.system.js","./index-4810e2ad.system.js"],(function(t){"use strict";var e,n,r,a,i;return{setters:[function(t){e=t.r;n=t.h},function(t){r=t.e},function(t){a=t.p},function(t){i=t.p},function(){}],execute:function(){var o="ks-page-product>ks-page-base>h3{text-align:center;margin-top:15px}ks-page-product>ks-page-base>ks-product-container{margin-bottom:15px}";var u=t("ks_page_product",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){var t=document.getElementById(this.productData);var e=JSON.parse(t.innerHTML);Object.keys(e).map((function(t){a.set(t,e[t])}));this.setDefaultTrait();{var n=document.getElementById(this.productDynamicData);var r=JSON.parse(n.innerHTML);Object.keys(r).map((function(t){i.set(t,r[t])}));setTimeout((function(){i.set("loaded",true)}),100);this.track()}};t.prototype.setDefaultTrait=function(){if(!(a===null||a===void 0?void 0:a.get("traits")))return;var t=a.get("traits").reduce((function(t,e){return t+"x"+e.id+"-"+e.items[0].id}),"");a.set("traitIDs",t)};t.prototype.track=function(){var t,e;r((function(t){return t===null||t===void 0?void 0:t.product(i.get("eventId"),a.get("id"),a.get("name"),parseFloat(a.get("currentPrice")),a.get("currency"))}));var n=a.get("breadcrumbs");(t=window.dataLayer)===null||t===void 0?void 0:t.push({ecomm_prodid:a.get("id"),ecomm_pagetype:"product",ecomm_totalvalue:a.get("currentPrice")});(e=window.dataLayer)===null||e===void 0?void 0:e.push({type:"product",name:a.get("currentPrice"),brand:a.get("brand").name,category:n[n.length-1].name,availability:a.get("shippingTime")})};t.prototype.render=function(){if(!(a===null||a===void 0?void 0:a.get("name")))return false;var t=a.get("infoBanner");var e=a.get("points");var r=a.get("installments");var i=a.get("tags");var o=a.get("variants");var u=a.get("tabs");var l=a.get("youtube");var c=a.get("comments");var s=a.get("similar");var d=a.get("accessories");var p=a.get("model")||a.get("catalog");var g=a.get("ean");return n("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t?n("ks-info-banner",{image:t.image,color:t.color,width:t.width,height:t.height,name:t.name,link:t.link,theme:t.theme}):null,n("ks-container",null,n("ks-product-notify",null),n("ks-product-admin",null),n("ks-product-info",null,a.get("traits")?n("ks-product-traits",null):null,n("ks-product-purchase",null),n("ks-product-shipping",null),a.get("warranty")?n("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:a.get("warrantyLink")},a.get("warranty")):null,e?n("ks-product-tooltip",{message:e.message},n("ks-product-attribute",{icon:"gift"},e.shortMessage)):null,p||g?n("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:true},n("span",{style:{marginRight:"15px"}},p?n("span",{style:{marginRight:"7px"}},"Model: ",p," "):null,g?n("span",null,"EAN: ",g):null)):null,n("div",{class:"buttons"},n("ks-product-negotiate",null,n("ks-product-button",null,a.get("negotiate").heading)),r.payuId&&r.payuKey||r.caParameters?n("ks-product-installments",{name:r.button},r.payuId&&r.payuKey?n("ks-product-calculator-payu",{price:a.get("currentPrice"),"pos-id":r.payuId,"api-key":r.payuKey},n("ks-product-button",{icon:r.payuIcon})):null,r.caParameters?n("ks-product-calculator-ca",{price:a.get("currentPrice"),parameters:r.caParameters},n("ks-product-button",{icon:r.caIcon})):null):null),n("ks-product-brand",{slot:"brand"}))),(i===null||i===void 0?void 0:i.length)>0||(o===null||o===void 0?void 0:o.length)>0?n("ks-container",{padding:true},(i===null||i===void 0?void 0:i.length)>0&&!((o===null||o===void 0?void 0:o.length)>0)?n("ks-product-tags",null):null,(o===null||o===void 0?void 0:o.length)>0?n("ks-product-variants",null):null):null,(u===null||u===void 0?void 0:u.length)>0?n("ks-container",null,n("ks-product-tabs",{names:u.map((function(t){return t.name})).join(", ")},u.map((function(t,e){return n("ks-product-tab",{name:t.name,open:e==0,main:e==0,content:t.content})})))):null,(i===null||i===void 0?void 0:i.length)>0&&(o===null||o===void 0?void 0:o.length)>0?n("ks-container",{padding:true},n("ks-product-tags",null)):null,l||c?n("ks-container",null,l.map((function(t){return n("ks-product-youtube",{"video-id":t})})),c?n("ks-product-comments",null):null):null,(s===null||s===void 0?void 0:s.length)>0?[n("h3",null,a.get("similarHeading")),n("ks-product-container",null,s.map((function(t){return n("ks-product-card",{"product-id":t.id,link:t.link,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice})})))]:null,(d===null||d===void 0?void 0:d.length)>0?[n("h3",null,a.get("accessoriesHeading")),n("ks-product-container",null,d.map((function(t){return n("ks-product-card",{"product-id":t.id,link:t.link,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice})})))]:null)};return t}());u.style=o}}}));