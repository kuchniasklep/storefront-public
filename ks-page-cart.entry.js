import{r as a,h as s}from"./index-b2de1977.js";import{c as e}from"./common-950aeaa1.js";import{c as t}from"./commonDynamic-e598d690.js";import{c as n}from"./cart-a81cac69.js";import{u as o,r,p as c,a as i,c as d,s as p,b as l,d as g,e as m,f as u}from"./cart-46146634.js";import{D as k}from"./dataLayer-4b81cda5.js";import"./index-bca22170.js";import"./fetch-bbb23998.js";const x=class{constructor(s){a(this,s)}componentWillLoad(){const a=document.getElementById(this.cartData),s=JSON.parse(a.innerHTML);o(s),k.view_cart(s)}async RemoveProduct(a){r(a.detail)}async ProductCount(a){c(...a.detail)}async AddDeal(a){i(a.detail)}async CountryChange(a){d(a.detail)}async ShippingChange(a){p(a.detail)}async PaymentChange(a){l(a.detail)}async DiscountRemove(){g()}async DiscountCodeAdd(a){m(a.detail)}async DiscountPointsAdd(a){u(a.detail)}render(){const a=n.get("strings"),o=n.get("discountStrings"),r=n.get("easyprotectStrings");return s("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},Object.keys(null==n?void 0:n.get("products")).length>0?s("div",{class:"card"},s("ks-order-progress",{current:0,cart:a.orderProgressCart,shipping:a.orderProgressShipping,confirmation:a.orderProgressConfirmation}),(null==n?void 0:n.get("progressBar"))?[s("ks-cart-progress-bar",null),s("br",null)]:null,s("div",{class:"uk-padding@m uk-padding-small"},s("ks-cart-product-container",null)),s("ks-cart-deal-container",null),r?s("ks-cart-easyprotect",{image:r.image,width:r.width,height:r.height},s("h2",null,r.heading),s("p",null,r.description,s("a",{href:r.pdf,target:"_blank"},r.seeMore)),s("ks-cart-easyprotect-dialog",{slot:"bottom"},s("h2",{slot:"products"},r.productsHeading),s("p",{slot:"products"},r.productsMessage),s("h2",{slot:"warranty"},r.warrantyHeading),s("p",{slot:"warranty"},r.warrantyMessage))):null,s("ks-cart-recycle",{id:"recycle"},s("h2",null,a.recycleHeading),s("p",null,a.recycleParagraph)),s("div",{class:"uk-padding@m uk-padding-small"},s("ks-cart-country-select",{heading:a.countrySelectHeading}),s("ks-cart-select-shipping",{name:a.shippingName}),s("br",null),s("ks-cart-select-payment",{name:a.paymentName}),s("br",null),s("ks-cart-shipping-message",null),s("div",{class:"paypo-message"},s("ks-img2",{src:"/images/paypo-message.svg",width:287,height:72})),s("ks-cart-discount-container",{"info-message":o.infoMessage,"code-banner":o.codeBanner,"code-placeholder":o.codePlaceholder,"points-placeholder":o.pointsPlaceholder,"points-message":o.pointsMessage,"login-message":o.pointsLoggedInMessage,"no-points-heading":o.noPointsHeading,"no-points-message":o.noPointsMessage,"threshold-heading":o.thresholdHeading,"threshold-message":o.thresholdMessage,"login-url":e.get("loginLink"),"logged-in":t.get("loggedIn"),"disable-points":!n.get("points")}),s("br",null)),s("div",{class:"uk-padding@m uk-padding-small"},s("ks-cart-summary-container",null)),s("ks-cart-buttons",{href:n.get("api").order})):s("ks-nocontent",null,s("h1",null,n.get("noContentHeading")),s("p",null,n.get("noContentMessage"))))}};x.style="ks-page-cart{-ms-flex:1 1 0px;flex:1 1 0}ks-page-cart ks-nocontent{-ms-flex:1 1 0px;flex:1 1 0}ks-page-cart .card{display:block;padding:0px;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:1200px;width:100%;margin:20px auto;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}@media screen and (max-width: 1200px){ks-page-cart .card{margin:0px auto}}ks-page-cart ks-cart-easyprotect-product>.image{padding:5px 0px;max-width:70px;max-height:70px}ks-page-cart ks-cart-discount-code ks-input-text{margin-bottom:0}ks-page-cart ks-cart-discount-code .messsage{padding:8px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-page-cart .paypo-message{display:-ms-flexbox;display:flex;margin:0px 0 10px 0;-ms-flex-pack:end;justify-content:flex-end}@media screen and (max-width: 720px){ks-page-cart .paypo-message{margin:0px 0 40px 0;-ms-flex-pack:center;justify-content:center}}";export{x as ks_page_cart}