System.register(["./index-bc7fda62.system.js","./product-92d4531d.system.js","./common-b3fb244e.system.js","./index-2a10dbd5.system.js","./common-7b01239a.system.js","./commonDynamic-de888e0c.system.js"],(function(t){"use strict";var n,e,r,o,u,a;return{setters:[function(t){n=t.r;e=t.B;r=t.h;o=t.H},function(t){u=t.p},function(t){a=t.l},function(){},function(){},function(){}],execute:function(){var i="ks-page-product>h3{text-align:center;margin-top:15px}ks-page-product>ks-product-container{margin-bottom:15px}";var l=t("ks_page_product",function(){function t(t){n(this,t)}t.prototype.componentWillLoad=function(){a(this.commonData,this.commonDynamicData,e);var t=document.getElementById(this.productData);var n=JSON.parse(t.innerHTML);Object.keys(n).map((function(t){u.set(t,n[t])}));this.setDefaultTrait()};t.prototype.setDefaultTrait=function(){if(!(u===null||u===void 0?void 0:u.get("traits")))return;var t=u.get("traits").reduce((function(t,n){return t+"x"+n.id+"-"+n.items[0].id}),"");u.set("traitIDs",t)};t.prototype.render=function(){if(!(u===null||u===void 0?void 0:u.get("name")))return false;var t=u.get("infoBanner");var n=u.get("points");var e=u.get("installments");var a=u.get("tags");var i=u.get("variants");var l=u.get("tabs");var s=u.get("youtube");var c=u.get("comments");var d=u.get("similar");var p=u.get("accessories");var g=u.get("model")||u.get("catalog");var m=u.get("ean");return r(o,null,r("ks-page-header",null),t?r("ks-info-banner",{image:t.image,width:t.width,height:t.height,color:t.color,name:t.name}):null,r("ks-container",null,r("ks-product-notify",null),r("ks-product-info",null,u.get("traits")?r("ks-product-traits",null):null,r("ks-product-purchase",null),r("ks-product-shipping",null),u.get("warranty")?r("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:u.get("warrantyLink")},u.get("warranty")):null,n?r("ks-product-tooltip",{message:n.message},r("ks-product-attribute",{icon:"gift"},n.shortMessage)):null,g||m?r("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:true},r("span",{style:{marginRight:"15px"}},g?r("span",{style:{marginRight:"7px"}},"Model: ",g," "):null,m?r("span",null,"EAN: ",m):null)):null,r("div",{class:"buttons"},r("ks-product-negotiate",null,r("ks-product-button",null,u.get("negotiate").heading)),e.payuId&&e.payuKey||e.caParameters?r("ks-product-installments",{name:e.button},e.payuId&&e.payuKey?r("ks-product-calculator-payu",{price:u.get("currentPrice"),"pos-id":e.payuId,"api-key":e.payuKey},r("ks-product-button",{icon:e.payuIcon})):null,e.caParameters?r("ks-product-calculator-ca",{price:u.get("currentPrice"),parameters:e.caParameters},r("ks-product-button",{icon:e.caIcon})):null):null),r("ks-product-brand",{slot:"brand"}))),(a===null||a===void 0?void 0:a.length)>0||(i===null||i===void 0?void 0:i.length)>0?r("ks-container",{padding:true},(a===null||a===void 0?void 0:a.length)>0&&!((i===null||i===void 0?void 0:i.length)>0)?r("ks-product-tags",null):null,(i===null||i===void 0?void 0:i.length)>0?r("ks-product-variants",null):null):null,(l===null||l===void 0?void 0:l.length)>0?r("ks-container",null,r("ks-product-tabs",{names:l.map((function(t){return t.name})).join(", ")},l.map((function(t,n){return r("ks-product-tab",{name:t.name,open:n==0,main:n==0,content:t.content})})))):null,(a===null||a===void 0?void 0:a.length)>0&&(i===null||i===void 0?void 0:i.length)>0?r("ks-container",{padding:true},r("ks-product-tags",null)):null,s||c?r("ks-container",null,s.map((function(t){return r("ks-product-youtube",{"video-id":t})})),c?r("ks-product-comments",null):null):null,(d===null||d===void 0?void 0:d.length)>0?[r("h3",null,u.get("similarHeading")),r("ks-product-container",null,d.map((function(t){return r("ks-product-card",{"product-id":0,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice})})))]:null,(p===null||p===void 0?void 0:p.length)>0?[r("h3",null,u.get("accessoriesHeading")),r("ks-product-container",null,p.map((function(t){return r("ks-product-card",{"product-id":0,name:t.name,img:t.image,webp:t.webp,"current-price":t.currentPrice,"previous-price":t.previousPrice})})))]:null,r("ks-page-footer",null))};return t}());l.style=i}}}));