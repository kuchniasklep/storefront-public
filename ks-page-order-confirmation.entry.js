import{r as e,h as t,g as r}from"./index-6e14abe0.js";import{e as a}from"./tracker-7fb8955b.js";import{c as i}from"./common-3fbec05b.js";import{c as n}from"./commonDynamic-3300d49a.js";import{c as o}from"./index-a26ba0e6.js";const s=o({api:{},totalValue:0,productValue:0,productAmount:0,pointsForOrder:0,totalShippingTime:"",otherValues:[],products:{},easyprotect:[],recycle:[],shipping:{},payment:{},info:{}}),d=class{constructor(t){e(this,t),this.loading=!1}componentWillLoad(){const e=document.getElementById(this.orderData),t=JSON.parse(e.innerHTML);Object.keys(t).map((e=>{s.set(e,t[e])})),this.track()}async Submit(e){e.preventDefault();const t=this.root.querySelector("form.card"),r=t.querySelectorAll("ks-input-dynamic, ks-order-document-select, ks-input-text, ks-input-textarea, ks-input-check, ks-order-inpost, ks-order-pocztapunkt, ks-order-dpd");console.log(t);let a=Number.MAX_VALUE,i=!0;for(let o=0;o<r.length;o++){const e=r[o];if(null==e.closest("ks-input-dynamic *")&&(await e.Validate(),!(await e.IsValid()))){const t=e.getBoundingClientRect().top-document.body.getBoundingClientRect().top;t<a&&(a=t),i=!1}}if(i)this.loading=!0,t.submit();else try{window.scroll({top:a-100,behavior:"smooth"})}catch(n){window.scroll(0,a-100)}}ShowPrompt(e){const t=this.root.querySelector("ks-order-form-modal");t.setAttribute("message",e),t.Show()}track(){var e;a((e=>null==e?void 0:e.order_checkout(s.get("eventId"),Object.entries(s.get("products")).map((([e,t])=>({id:e,name:t.name,price:t.price,quantity:t.amount}))),s.get("totalValue"),"PLN"))),null===(e=window.dataLayer)||void 0===e||e.push({currency:"PLN",value:s.get("totalValue"),items:Object.entries(s.get("products")).map((([e,t])=>({item_id:e,item_name:t.name,currency:"PLN",price:t.price,quantity:t.amount})))})}render(){var e;const r=Object.entries(s.get("products")),a=s.get("shipping"),o=s.get("payment"),d=s.get("info"),l=s.get("api"),c=s.get("easyprotectStrings");return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t("form",{class:"card",action:l.submit,method:"post",onSubmit:e=>this.Submit(e)},t("ks-tracker-order",{form:!0,"event-id":s.get("eventId"),value:s.get("productValue"),products:Object.keys(s.get("products")).join(",")}),t("ks-order-progress",{current:1}),t("div",{class:"uk-padding@m uk-padding-small"},t("ks-cart-product-heading",null),r.map((([e,r])=>t("ks-cart-product",{name:r.name,img:r.img,price:r.price,amount:r.amount,"shipping-time":r.shippingTime}))),t("ks-cart-product-price",{amount:s.get("productAmount"),price:s.get("productValue"),"shipping-time":s.get("totalShippingTime"),"edit-link":i.get("cartLink")}),t("br",null),t("br",null),s.get("easyprotect")?[t("ks-order-heading",{heading:c.heading,link:i.get("cartLink")}),t("p",{class:"easyprotect-info"},c.descriptionStart,t("a",{href:c.link,target:"_blank"},c.linkName),c.descriptionEnd),s.get("easyprotect").map((e=>t("ks-cart-easyprotect-warranty",{name:e.name,price:e.price,time:e.time}))),t("br",null),t("br",null)]:null,(null===(e=s.get("recycle"))||void 0===e?void 0:e.length)>0?[t("ks-order-heading",{heading:"Odbiór zużytego sprzętu",link:i.get("cartLink")+"#recycle"}),t("div",{style:{marginBottom:"40px"}},s.get("recycle").map((e=>t("p",{style:{margin:"5px 0"}},e))))]:null,t("div",{class:"uk-child-width-1-2@m","uk-grid":!0,"uk-height-match":"ks-cart-tile > div"},t("div",null,t("ks-order-heading",{heading:a.heading,link:i.get("cartLink")}),t("ks-cart-tile",{logo:a.logo,name:a.name,price:a.price,color:a.color},t("div",null,t("div",{innerHTML:a.info}),"wysylka_inpost"==a.type?t("ks-order-inpost",{search:a.city,api:l.changeShippingLocation}):"wysylka_dpdpickup"==a.type?t("ks-order-dpd",{api:l.changeShippingLocation,button:"Wybierz punkt dostawy","missing-message":"Wybierz punkt dostawy na mapie.","point-message":"Wybrany punkt"}):"wysylka_pocztapunkt"==a.type?[t("script",{src:"https://mapa.ecommerce.poczta-polska.pl/widget/scripts/ppwidget.js"}),t("ks-order-pocztapunkt",{search:a.city,api:l.changeShippingLocation})]:"wysylka_odbior_osobisty"==a.type?t("div",{class:"ListaWyboru"},t("div",{id:"ListaOpcjiWysylki"},a.pickup.map((e=>t("div",{class:"pickupOption"},t("input",{id:e.key,type:"radio",value:e.key,name:"lokalizacjaOsobisty",checked:e.checked}),t("label",{htmlFor:e.key},e.value)))))):null))),t("div",null,t("ks-order-heading",{heading:o.heading,link:i.get("cartLink")}),t("ks-cart-tile",{logo:o.logo,name:o.name,price:o.price,color:o.color,innerHTML:o.info}))),t("div",{class:"uk-child-width-1-2@m","uk-grid":!0},t("div",null,t("ks-order-address-section",{heading:d.shippingInfoHeading,link:l.changeData},t("ks-order-address-field",{name:d.name.field},t("span",null,d.name.value)),d.company?t("ks-order-address-field",{name:d.company.field},t("span",null,d.company.value)):null,t("ks-order-address-field",{name:d.address.field},t("span",{innerHTML:d.address.value})),t("ks-order-address-field",{name:d.phone.field},t("span",null,d.phone.value)))),t("div",null,t("ks-order-address-section",{"hide-on-mobile":!0,heading:d.documentInfoHeading,link:l.changeData},d.documentName?t("ks-order-address-field",{name:d.documentName.field},t("span",null,d.documentName.value)):null,d.documentCompany?t("ks-order-address-field",{name:d.documentCompany.field},t("span",null,d.documentCompany.value)):null,t("ks-order-address-field",{name:d.documentAddress.field},t("span",{innerHTML:d.documentAddress.value}))),t("ks-order-document-select",{name:"dokument",api:l.changeDocument}),t("br",null))),t("br",null),t("ks-input-textarea",{name:"komentarz",label:"Uwagi",rows:4}),t("br",null),n.get("loggedIn")?[t("ks-input-check",{required:!0,name:"regulamin",value:"1",label:d.rules}),t("br",null),t("br",null)]:null,t("input",{type:"hidden",name:"zgoda_opinie",value:"1"}),s.get("otherValues").map((e=>t("ks-cart-summary",{text:e.name,price:e.value.toFixed(2)}))),t("ks-cart-summary",{large:!0,text:"Razem:",price:s.get("totalValue").toFixed(2)})),t("div",{class:"uk-position-relative"},t("button",{type:"submit",formnovalidate:!0,class:"uk-button uk-button-danger uk-width-1-1 uk-width-expand@m ks-text-decorated",style:{fontSize:"28px",fontWeight:"700",padding:"20px"}},"ZAMAWIAM I PŁACĘ"),this.loading?t("div",{class:"uk-overlay uk-light uk-padding-remove uk-position-cover uk-animation-fade",style:{animationDuration:"0.3s",backgroundColor:"#e21334"}},t("div",{"uk-spinner":"ratio: 1.5",class:"uk-position-center"})):null),t("ks-order-form-modal",null)))}get root(){return r(this)}};d.style="ks-page-order-confirmation .card{display:block;padding:0px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:1200px;width:100%;margin:20px auto;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-page-order-confirmation .easyprotect-info{margin-top:-15px;margin-bottom:30px;text-align:justify}ks-page-order-confirmation .pickupOption input{margin-right:10px;-webkit-transform:translate(0, 1px);transform:translate(0, 1px)}ks-page-order-confirmation .pickupOption label{width:auto}ks-page-order-confirmation .paymentContainer{text-align:center;padding:5px}";export{d as ks_page_order_confirmation}