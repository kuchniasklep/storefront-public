import{r as s,h as e}from"./index-6e14abe0.js";import{c as a}from"./index-a26ba0e6.js";const r=a({eventId:"",heading:"",message:"",homepage:""}),o=class{constructor(e){s(this,e)}componentWillLoad(){const s=document.getElementById(this.orderData),e=JSON.parse(s.innerHTML);Object.keys(e).map((s=>{r.set(s,e[s])}))}render(){return e("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e("h1",{class:"StrNaglowek"},e("span",null,r.get("heading"))),e("section",{class:"StrTresc"},e("div",{class:"Informacja"},r.get("message")),r.get("error")?[e("div",{style:{padding:"7px 5px 7px 0px;"},id:"PlatnoscBladInfo"},r.get("errorString"),":"),e("div",{class:"KomunikatBledu",id:"PlatnoscBladTresc"},r.get("error"))]:null,e("br",null),r.get("order")?e("a",{href:r.get("orderLink"),class:"przycisk Lewy"},r.get("order")):null,e("a",{href:"/",class:"przycisk Prawy"},r.get("homepage")),e("div",{class:"cl"})))}};o.style="";export{o as ks_page_order_success}