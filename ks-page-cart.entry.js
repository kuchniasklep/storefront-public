import{r as a,h as t}from"./index-ca9b706f.js";import{c as r}from"./common-bf11c818.js";import{c as s}from"./commonDynamic-5e51121d.js";import{c as e}from"./cart-b9df7a0c.js";import{u as c,r as o,p as n,a as i,c as p,s as d,b as g,d as l,e as m,f as x}from"./cart-f2c42831.js";import{D as u}from"./dataLayer-0fdee50e.js";import"./index-9843a78d.js";import"./fetch-bbb23998.js";import"./inpost-pay-8a8b4d47.js";const k=class{constructor(t){a(this,t),this.skipbase=void 0,this.commonData=void 0,this.commonDynamicData=void 0,this.cartData=void 0}componentWillLoad(){const a=document.getElementById(this.cartData),t=JSON.parse(a.innerHTML);c(t),u.view_cart(t)}async RemoveProduct(a){var t;const r=null===(t=e.get("products"))||void 0===t?void 0:t[a.detail];r&&u.removeFromCart(r),o(a.detail)}async ProductCount(a){n(...a.detail)}async AddDeal(a){i(a.detail)}async CountryChange(a){p(a.detail)}async ShippingChange(a){d(a.detail)}async PaymentChange(a){g(a.detail)}async DiscountRemove(){l()}async DiscountCodeAdd(a){m(a.detail)}async DiscountPointsAdd(a){x(a.detail)}render(){var a;const c=r.get("translations"),o=e.get("strings"),n=e.get("discountStrings"),i=e.get("easyprotectStrings");return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},Object.keys(null==e?void 0:e.get("products")).length>0?[t("div",{class:"cart-progress-container"},(null==e?void 0:e.get("progressBar"))&&e.get("productValue")<(null===(a=e.get("shippingProgress"))||void 0===a?void 0:a.threshold)?[t("ks-cart-progress-bar",null)]:null),t("div",{class:"cart-container"},t("div",{class:"cart-products"},t("ks-cart-product-container",null),t("ks-cart-product-message",null)),t("div",{class:"cart-offers"},t("ks-cart-deal-container",null),t("ks-cart-recycle",{id:"recycle"},t("h2",null,o.recycleHeading),t("p",null,o.recycleParagraph)),i?t("ks-cart-easyprotect",{image:i.image,width:i.width,height:i.height},t("h2",null,i.heading),t("p",null,i.description,t("a",{href:i.pdf,target:"_blank"},i.seeMore)),t("ks-cart-easyprotect-dialog",{slot:"bottom"},t("h2",{slot:"products"},i.productsHeading),t("p",{slot:"products"},i.productsMessage),t("h2",{slot:"warranty"},i.warrantyHeading),t("p",{slot:"warranty"},i.warrantyMessage))):null,t("a",{href:"/paypo-pm-71.html",class:"paypo-message"},t("ks-img2",{src:"/images/paypo-message.svg",width:287,height:72}))),t("div",{class:"cart-summary"},t("div",{class:"cart-summary-sticky"},t("h2",null,o.countrySelectHeading),t("ks-cart-country-select",null),t("ks-cart-select-shipping",{name:o.shippingName}),t("ks-cart-select-payment",{name:o.paymentName}),t("ks-cart-discount-container",{"info-message":n.infoMessage,"code-banner":n.codeBanner,"code-placeholder":n.codePlaceholder,"points-placeholder":n.pointsPlaceholder,"points-message":n.pointsMessage,"login-message":n.pointsLoggedInMessage,"no-points-heading":n.noPointsHeading,"no-points-message":n.noPointsMessage,"threshold-heading":n.thresholdHeading,"threshold-message":n.thresholdMessage,"login-url":r.get("loginLink"),"logged-in":s.get("loggedIn"),"disable-points":!e.get("points")}),t("ks-cart-summary-container",null),t("ks-cart-buttons",{href:e.get("api").order}))))]:t("ks-nocontent",{"link-name":c.noContentHome,"back-name":c.noContentBack},t("h1",null,e.get("noContentHeading")),t("p",null,e.get("noContentMessage"))))}};k.style='ks-page-cart .cart-progress-container{max-width:1450px;padding:20px 60px 0px 60px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;margin:auto}ks-page-cart .cart-container{display:grid;grid-template-columns:1fr 350px;grid-template-rows:auto 1fr;gap:20px 20px;grid-template-areas:"cart-products cart-summary"\n        "cart-offers cart-summary";-ms-flex-pack:center;justify-content:center;padding:20px 60px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:1450px;margin:auto}ks-page-cart .cart-products{grid-area:cart-products;max-width:1000px;background-color:#ffffff;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-page-cart .cart-offers{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:20px;grid-area:cart-offers;max-width:1000px}ks-page-cart .cart-summary{grid-area:cart-summary;position:relative}ks-page-cart .cart-summary-sticky{position:-webkit-sticky;position:sticky;top:20px;background-color:#ffffff;padding:20px}ks-page-cart h2{font-weight:700}ks-page-cart ks-cart-easyprotect-product>.image{padding:5px 0px;max-width:70px;max-height:70px}ks-page-cart ks-cart-discount-code ks-input-text{margin-bottom:0}ks-page-cart ks-cart-discount-code .messsage{padding:8px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-page-cart .paypo-message{display:block;margin:0 auto}@media screen and (max-width: 1160px){ks-page-cart .cart-container{display:block}ks-page-cart .cart-offers{margin:20px 0px}ks-page-cart .cart-progress-container{padding:20px 60px 0px 60px}}@media screen and (max-width: 860px){ks-page-cart .cart-container{padding:20px 0px 0px 0px}ks-page-cart .cart-progress-container{padding:0px}ks-page-cart .cart-progress-container>*,ks-page-cart .cart-products,ks-page-cart .cart-offers ks-cart-deal-container>*,ks-page-cart .cart-offers ks-cart-easyprotect,ks-page-cart .cart-summary>*{padding-right:60px;padding-left:60px}ks-cart-country-select{right:60px !important}}@media screen and (max-width: 640px){ks-page-cart .cart-container{padding:20px 0px 0px 0px}ks-page-cart .cart-progress-container>*,ks-page-cart .cart-products,ks-page-cart .cart-offers ks-cart-deal-container>*,ks-page-cart .cart-offers ks-cart-easyprotect,ks-page-cart .cart-summary>*{padding-right:20px;padding-left:20px}ks-cart-country-select{right:15px !important}}';export{k as ks_page_cart}