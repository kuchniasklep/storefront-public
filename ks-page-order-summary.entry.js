import{r,h as e}from"./index-6e14abe0.js";import{c as t}from"./index-a26ba0e6.js";const o=t({eventId:"",heading:"",returnString:"",returnLink:"",orderNumber:"",orderNumberString:"",orderDate:"",orderStatus:"",orderStatusString:"",orderPayment:"",orderPaymentString:"",orderShipping:"",orderShippingString:"",orderValue:"",orderValueString:"",proFormaApi:"",proFormaString:"",documentApi:"",documentString:"",payment:{}}),a=class{constructor(e){r(this,e)}componentWillLoad(){const r=document.getElementById(this.orderData),e=JSON.parse(r.innerHTML);Object.keys(e).map((r=>{o.set(r,e[r])}))}render(){const r=o.get("payment");return e("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e("ks-order-summary-container",{heading:o.get("heading"),"return-heading":o.get("returnString"),"return-link":o.get("returnLink")},e("ks-order-summary-field",{dark:!0,large:!0},e("span",{slot:"left"},o.get("orderNumberString")," - ",o.get("orderNumber")),e("span",{slot:"right"},o.get("orderDate"))),e("div",null,e("ks-order-summary-field",null,e("span",{slot:"left"},o.get("orderStatusString")),e("span",{slot:"right"},o.get("orderStatus"))),e("ks-order-separator",null),e("ks-order-summary-field",null,e("span",{slot:"left"},o.get("orderPaymentString")),e("span",{slot:"right"},o.get("orderPayment"))),e("ks-order-separator",null),e("ks-order-summary-field",null,e("span",{slot:"left"},o.get("orderShippingString")),e("span",{slot:"right"},o.get("orderShipping"))),e("ks-order-separator",null),e("ks-order-summary-field",null,e("span",{slot:"left"},o.get("orderValueString")),e("span",{id:"totalOrderValue",slot:"right"},o.get("orderValue")))),e("ks-order-summary-field",{single:!0},e("div",{innerHTML:r.info}),"creditagricole"==r.type?e("form",{action:"https://ewniosek.credit-agricole.pl/eWniosek/simulator.jsp",method:"post",name:"payform",id:"payform",class:"cmxform"},"';",r.form.map((r=>e("input",{type:"hidden",value:r.value,name:r.name}))),e("div",{class:"paymentContainer"},";",e("ks-order-summary-payment",{text:r.button,image:r.logo,color:"#009b9d",hover:"#14b1b3",active:"#1fbdbf"}))):"payu"==r.type?e("form",{action:"https://www.platnosci.pl/paygw/UTF/NewPayment",method:"post",name:"payform",class:"cmxform"},r.form.map((r=>e("input",{type:"hidden",value:r.value,name:r.name}))),e("div",{class:"paymentContainer"},e("ks-order-summary-payment",{text:r.button,image:r.logo,color:"#5eb009",hover:"#6eb920",active:"#7ebe2e"}))):null),e("ks-order-button-pair",{split:55,"link-left":o.get("proFormaApi"),"link-right":o.get("documentApi")},e("span",{slot:"left"},o.get("proFormaString")),e("span",{slot:"right"},o.get("documentString")))))}};a.style="ks-page-order-summary ks-order-summary-container{display:block;padding:0px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:1200px;width:100%;margin:20px auto;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}";export{a as ks_page_order_summary}