import{r as e,h as t,g as r}from"./index-6e14abe0.js";import{c as a}from"./common-3fbec05b.js";import{c as i}from"./commonDynamic-3300d49a.js";import{c as n}from"./index-a26ba0e6.js";const o=n({api:{},totalValue:0,productValue:0,productAmount:0,pointsForOrder:0,totalShippingTime:"",otherValues:[],products:{},easyprotect:[],recycle:[],shipping:{},payment:{},info:{}}),s=class{constructor(t){e(this,t),this.loading=!1}componentWillLoad(){const e=document.getElementById(this.orderData),t=JSON.parse(e.innerHTML);Object.keys(t).map((e=>{o.set(e,t[e])}))}async Submit(e){e.preventDefault();const t=this.root.querySelector("form.card"),r=t.querySelectorAll("ks-input-dynamic, ks-order-document-select, ks-input-text, ks-input-textarea, ks-input-check, ks-order-inpost, ks-order-pocztapunkt, ks-order-dpd");console.log(t);let a=Number.MAX_VALUE,i=!0;for(let o=0;o<r.length;o++){const e=r[o];if(null==e.closest("ks-input-dynamic *")&&(await e.Validate(),!(await e.IsValid()))){const t=e.getBoundingClientRect().top-document.body.getBoundingClientRect().top;t<a&&(a=t),i=!1}}if(i)this.loading=!0,t.submit();else try{window.scroll({top:a-100,behavior:"smooth"})}catch(n){window.scroll(0,a-100)}}ShowPrompt(e){const t=this.root.querySelector("ks-order-form-modal");t.setAttribute("message",e),t.Show()}render(){var e;const r=Object.entries(o.get("products")),n=o.get("shipping"),s=o.get("payment"),d=o.get("info"),l=o.get("api"),p=o.get("easyprotectStrings");return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t("form",{class:"card",action:l.submit,method:"post",onSubmit:e=>this.Submit(e)},t("ks-tracker-order",{form:!0,"event-id":o.get("eventId"),value:o.get("productValue"),products:Object.keys(o.get("products")).join(",")}),t("ks-order-progress",{current:1}),t("div",{class:"uk-padding@m uk-padding-small"},t("ks-cart-product-heading",null),r.map((([e,r])=>t("ks-cart-product",{name:r.name,img:r.img,price:r.price,amount:r.amount,"shipping-time":r.shippingTime}))),t("ks-cart-product-price",{amount:o.get("productAmount"),price:o.get("productValue"),"shipping-time":o.get("totalShippingTime"),"edit-link":a.get("cartLink")}),t("br",null),t("br",null),o.get("easyprotect")?[t("ks-order-heading",{heading:p.heading,link:a.get("cartLink")}),t("p",{class:"easyprotect-info"},p.descriptionStart,t("a",{href:p.link,target:"_blank"},p.linkName),p.descriptionEnd),o.get("easyprotect").map((e=>t("ks-cart-easyprotect-warranty",{name:e.name,price:e.price,time:e.time}))),t("br",null),t("br",null)]:null,(null===(e=o.get("recycle"))||void 0===e?void 0:e.length)>0?[t("ks-order-heading",{heading:"Odbiór zużytego sprzętu",link:a.get("cartLink")+"#recycle"}),t("div",{style:{marginBottom:"40px"}},o.get("recycle").map((e=>t("p",{style:{margin:"5px 0"}},e))))]:null,t("div",{class:"uk-child-width-1-2@m","uk-grid":!0,"uk-height-match":"ks-cart-tile > div"},t("div",null,t("ks-order-heading",{heading:n.heading,link:a.get("cartLink")}),t("ks-cart-tile",{logo:n.logo,name:n.name,price:n.price,color:n.color},t("div",null,t("div",{innerHTML:n.info}),"wysylka_inpost"==n.type?t("ks-order-inpost",{search:n.city,api:l.changeShippingLocation}):"wysylka_dpdpickup"==n.type?t("ks-order-dpd",{api:l.changeShippingLocation,button:"Wybierz punkt dostawy","missing-message":"Wybierz punkt dostawy na mapie.","point-message":"Wybrany punkt"}):"wysylka_pocztapunkt"==n.type?[t("script",{src:"https://mapa.ecommerce.poczta-polska.pl/widget/scripts/ppwidget.js"}),t("ks-order-pocztapunkt",{search:n.city,api:l.changeShippingLocation})]:"wysylka_odbior_osobisty"==n.type?t("div",{class:"ListaWyboru"},t("div",{id:"ListaOpcjiWysylki"},n.pickup.map((e=>t("div",{class:"pickupOption"},t("input",{id:e.key,type:"radio",value:e.key,name:"lokalizacjaOsobisty",checked:e.checked}),t("label",{htmlFor:e.key},e.value)))))):null))),t("div",null,t("ks-order-heading",{heading:s.heading,link:a.get("cartLink")}),t("ks-cart-tile",{logo:s.logo,name:s.name,price:s.price,color:s.color,innerHTML:s.info}))),t("div",{class:"uk-child-width-1-2@m","uk-grid":!0},t("div",null,t("ks-order-address-section",{heading:d.shippingInfoHeading,link:l.changeData},t("ks-order-address-field",{name:d.name.field},t("span",null,d.name.value)),d.company?t("ks-order-address-field",{name:d.company.field},t("span",null,d.company.value)):null,t("ks-order-address-field",{name:d.address.field},t("span",{innerHTML:d.address.value})),t("ks-order-address-field",{name:d.phone.field},t("span",null,d.phone.value)))),t("div",null,t("ks-order-address-section",{"hide-on-mobile":!0,heading:d.documentInfoHeading,link:l.changeData},d.documentName?t("ks-order-address-field",{name:d.documentName.field},t("span",null,d.documentName.value)):null,d.documentCompany?t("ks-order-address-field",{name:d.documentCompany.field},t("span",null,d.documentCompany.value)):null,t("ks-order-address-field",{name:d.documentAddress.field},t("span",{innerHTML:d.documentAddress.value}))),t("ks-order-document-select",{name:"dokument",api:l.changeDocument}),t("br",null))),t("br",null),t("ks-input-textarea",{name:"komentarz",label:"Uwagi",rows:4}),t("br",null),i.get("loggedIn")?[t("ks-input-check",{required:!0,name:"regulamin",value:"1",label:d.rules}),t("br",null),t("br",null)]:null,t("input",{type:"hidden",name:"zgoda_opinie",value:"1"}),o.get("otherValues").map((e=>t("ks-cart-summary",{text:e.name,price:e.value.toString()}))),t("ks-cart-summary",{large:!0,text:"Razem:",price:o.get("totalValue").toString()})),t("div",{class:"uk-position-relative"},t("button",{type:"submit",formnovalidate:!0,class:"uk-button uk-button-danger uk-width-1-1 uk-width-expand@m ks-text-decorated",style:{fontSize:"28px",fontWeight:"700",padding:"20px"}},"ZAMAWIAM I PŁACĘ"),this.loading?t("div",{class:"uk-overlay uk-light uk-padding-remove uk-position-cover uk-animation-fade",style:{animationDuration:"0.3s",backgroundColor:"#e21334"}},t("div",{"uk-spinner":"ratio: 1.5",class:"uk-position-center"})):null),t("ks-order-form-modal",null)))}get root(){return r(this)}};s.style="ks-page-order-confirmation .card{display:block;padding:0px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:1200px;width:100%;margin:20px auto;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-page-order-confirmation .easyprotect-info{margin-top:-15px;margin-bottom:30px;text-align:justify}ks-page-order-confirmation .pickupOption input{margin-right:10px;-webkit-transform:translate(0, 1px);transform:translate(0, 1px)}ks-page-order-confirmation .pickupOption label{width:auto}ks-page-order-confirmation .paymentContainer{text-align:center;padding:5px}";export{s as ks_page_order_confirmation}