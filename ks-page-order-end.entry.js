import{r as e,h as t}from"./index-abcf82c7.js";import{c as r}from"./index-0418a9fc.js";import{F as s}from"./fetch-e286f059.js";const a=r({eventId:"",heading:"",message:"",homepage:""}),i=class{constructor(t){e(this,t),this.displayPayment=!0,this.paymentOpacity=!0}componentWillLoad(){const e=document.getElementById(this.orderData),t=JSON.parse(e.innerHTML);Object.keys(t).map((e=>{a.set(e,t[e])})),this.track();const r=a.get("verify"),s=a.get("orderId");r&&(this.displayPayment=!1,this.paymentOpacity=!1,this.verify(r,s),setTimeout((()=>{this.displayPayment=!0}),3e3),setTimeout((()=>{this.paymentOpacity=!0}),3100))}verify(e,t){setTimeout((()=>{s(e+`&order=${t}`).then((r=>{r.text().then((r=>{"OK"==r?document.location.reload():this.verify(e,t)})).catch((()=>this.verify(e,t)))})).catch((()=>this.verify(e,t)))}),2e3)}track(){}render(){return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t("div",{class:"card"},t("h1",{class:"heading"},a.get("heading")),t("section",{class:"content"},t("div",{class:"message"},a.get("message")),a.get("error")?[t("h2",null,a.get("errorHeading")),t("div",null,a.get("errorMessage"))]:null,a.get("verify")?t("div",{class:"loader"},t("ks-loader",{dark:!0})):null,t("div",{class:"payment",style:{display:this.displayPayment?null:"none",opacity:this.paymentOpacity?null:"0"}},t("slot",null)),t("div",{class:"buttons"},a.get("orderString")?t("ks-button",{round:!0,link:a.get("orderLink"),name:a.get("orderString")}):null,t("ks-button",{round:!0,link:"/",name:a.get("homepage")})))))}};i.style="ks-page-order-end .card{display:block;padding:0px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:800px;width:100%;margin:auto;padding:50px 20px;color:var(--card-text-color);text-align:center}ks-page-order-end .card ks-icon{margin-right:10px}ks-page-order-end .card h1{font-size:22px;font-weight:700}ks-page-order-end .card .payment{margin-top:20px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;opacity:1;-webkit-transition:opacity ease 0.3s;transition:opacity ease 0.3s}ks-page-order-end .card .loader{position:relative;height:40px;margin-top:20px}ks-page-order-end .card .buttons{margin-top:10px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-page-order-end .card .buttons ks-button{margin:5px}ks-page-order-end .card h2{margin:20px auto 5px auto;font-weight:700}";export{i as ks_page_order_end}