System.register(["./index-10c04d38.system.js","./index-afb1cee9.system.js","./fetch-89de6a18.system.js"],(function(e){"use strict";var t,n,a,r;return{setters:[function(e){t=e.r;n=e.h},function(e){a=e.c},function(e){r=e.F}],execute:function(){var i=a({eventId:"",heading:"",message:"",homepage:""});var s="ks-page-order-end .card{display:block;padding:0px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:800px;width:100%;margin:auto;padding:50px 20px;color:var(--card-text-color);text-align:center}ks-page-order-end .card ks-icon{margin-right:10px}ks-page-order-end .card h1{font-size:22px;font-weight:700}ks-page-order-end .card .payment{margin-top:20px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;opacity:1;-webkit-transition:opacity ease 0.3s;transition:opacity ease 0.3s}ks-page-order-end .card .loader{position:relative;height:40px;margin-top:20px}ks-page-order-end .card .buttons{margin-top:10px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-page-order-end .card .buttons ks-button{margin:5px}ks-page-order-end .card h2{margin:20px auto 5px auto;font-weight:700}";var o=e("ks_page_order_end",function(){function e(e){t(this,e);this.skipbase=undefined;this.commonData=undefined;this.commonDynamicData=undefined;this.orderData=undefined;this.displayPayment=true;this.paymentOpacity=true}e.prototype.componentWillLoad=function(){var e=this;var t=document.getElementById(this.orderData);var n=JSON.parse(t.innerHTML);Object.keys(n).map((function(e){i.set(e,n[e])}));this.track();var a=i.get("verify");var r=i.get("orderId");if(a){this.displayPayment=false;this.paymentOpacity=false;this.verify(a,r);setTimeout((function(){e.displayPayment=true}),3e3);setTimeout((function(){e.paymentOpacity=true}),3100)}};e.prototype.verify=function(e,t){var n=this;setTimeout((function(){r(e+"&order=".concat(t)).then((function(a){a.text().then((function(a){if(a=="OK")document.location.reload();else n.verify(e,t)})).catch((function(){return n.verify(e,t)}))})).catch((function(){return n.verify(e,t)}))}),2e3)};e.prototype.track=function(){};e.prototype.render=function(){return n("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},n("div",{class:"card"},n("h1",{class:"heading"},i.get("heading")),n("section",{class:"content"},n("div",{class:"message"},i.get("message")),i.get("error")?[n("h2",null,i.get("errorHeading")),n("div",null,i.get("errorMessage"))]:null,i.get("verify")?n("div",{class:"loader"},n("ks-loader",{dark:true})):null,n("div",{class:"payment",style:{display:this.displayPayment?null:"none",opacity:this.paymentOpacity?null:"0"}},n("slot",null)),n("div",{class:"buttons"},i.get("orderString")?n("ks-button",{round:true,link:i.get("orderLink"),name:i.get("orderString")}):null,n("ks-button",{round:true,link:"/",name:i.get("homepage")})))))};return e}());o.style=s}}}));