System.register(["./index-9d88b83b.system.js","./index-901f8c50.system.js","./tracker-dbb87cd8.system.js"],(function(e){"use strict";var r,t,o,n;return{setters:[function(e){r=e.r;t=e.h},function(e){o=e.c},function(e){n=e.e}],execute:function(){var a=o({eventId:"",heading:"",returnString:"",returnLink:"",orderNumber:"",orderNumberString:"",orderDate:"",orderStatus:"",orderStatusString:"",orderPayment:"",orderPaymentString:"",orderShipping:"",orderShippingString:"",orderValue:null,orderValueString:"",proFormaApi:"",proFormaString:"",documentApi:"",documentString:"",payment:{},products:{}});var i="ks-page-order-summary ks-order-summary-container{display:block;padding:0px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:1200px;width:100%;margin:20px auto;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}";var s=e("ks_page_order_summary",function(){function e(e){r(this,e)}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.orderData);var r=JSON.parse(e.innerHTML);Object.keys(r).map((function(e){a.set(e,r[e])}));this.track()};e.prototype.track=function(){var e,r,t;n((function(e){return e===null||e===void 0?void 0:e.order_placed(a.get("eventId"),Object.entries(a.get("products")).map((function(e){var r=e[0],t=e[1];return{id:r,name:t.name,price:t.price,quantity:t.amount}})),a.get("orderValue"),"PLN")}));(e=window.dataLayer)===null||e===void 0?void 0:e.push({ecomm_prodid:Object.keys(a.get("products")),ecomm_pagetype:"purchase",ecomm_totalvalue:a.get("orderValue")});(r=window.dataLayer)===null||r===void 0?void 0:r.push({currency:"PLN",value:a.get("orderValue"),electronic:(t=a===null||a===void 0?void 0:a.get("payment"))===null||t===void 0?void 0:t.electronic,items:Object.entries(a.get("products")).map((function(e){var r=e[0],t=e[1];return{item_id:r,item_name:t.name,currency:"PLN",price:t.price,quantity:t.amount}}))})};e.prototype.render=function(){var e=a.get("payment");return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t("ks-order-summary-container",{heading:a.get("heading"),"return-heading":a.get("returnString"),"return-link":a.get("returnLink")},t("ks-order-summary-field",{dark:true,large:true},t("span",{slot:"left"},a.get("orderNumberString")," - ",a.get("orderNumber")),t("span",{slot:"right"},a.get("orderDate"))),t("div",null,t("ks-order-summary-field",null,t("span",{slot:"left"},a.get("orderStatusString")),t("span",{slot:"right"},a.get("orderStatus"))),t("ks-order-separator",null),t("ks-order-summary-field",null,t("span",{slot:"left"},a.get("orderPaymentString")),t("span",{slot:"right"},a.get("orderPayment"))),t("ks-order-separator",null),t("ks-order-summary-field",null,t("span",{slot:"left"},a.get("orderShippingString")),t("span",{slot:"right"},a.get("orderShipping"))),t("ks-order-separator",null),t("ks-order-summary-field",null,t("span",{slot:"left"},a.get("orderValueString")),t("span",{id:"totalOrderValue",slot:"right"},a.get("orderValue")))),t("ks-order-summary-field",{single:true},t("div",{innerHTML:e.info}),e.type=="platnosc_lukas"?t("form",{action:"https://ewniosek.credit-agricole.pl/eWniosek/simulator.jsp",method:"post",name:"payform",id:"payform",class:"cmxform"},"';",e.form.map((function(e){return t("input",{type:"hidden",value:e.value,name:e.name})})),t("div",{class:"paymentContainer"},";",t("ks-order-summary-payment",{text:e.button,image:e.logo,color:"#009b9d",hover:"#14b1b3",active:"#1fbdbf"}))):e.type=="platnosc_payu"?t("form",{action:"https://www.platnosci.pl/paygw/UTF/NewPayment",method:"post",name:"payform",class:"cmxform"},e.form.map((function(e){return t("input",{type:"hidden",value:e.value,name:e.name})})),t("div",{class:"paymentContainer"},t("ks-order-summary-payment",{text:e.button,image:e.logo,color:"#5eb009",hover:"#6eb920",active:"#7ebe2e"}))):null),t("ks-order-button-pair",{split:55,"link-left":a.get("proFormaApi"),"link-right":a.get("documentApi")},t("span",{slot:"left"},a.get("proFormaString")),t("span",{slot:"right"},a.get("documentString")))))};return e}());s.style=i}}}));