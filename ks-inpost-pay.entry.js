import{r as i,h as t}from"./index-ca9b706f.js";import{i as o,j as s}from"./inpost-pay-a5c489c2.js";import"./fetch-1f8a9006.js";import"./commonDynamic-5e51121d.js";import"./index-9843a78d.js";import"./cart-75f4ee6e.js";import"./dataLayer-452698da.js";const n=class{constructor(t){i(this,t),this.binding_place="BASKET_SUMMARY",this.product_card=void 0,this.order_create=void 0,this.basket_popup=void 0,this.product="",this.count=void 0,this.data=void 0}async componentWillLoad(){o().then((i=>{this.data=i,this.data.hasOwnProperty("client_details")&&s()}))}componentDidLoad(){window.handleInpostIziButtons()}componentDidUpdate(){window.handleInpostIziButtons()}render(){var i,o,s,n;const a=null===(o=null===(i=this.data)||void 0===i?void 0:i.client_details)||void 0===o?void 0:o.masked_phone_number,d=null===(n=null===(s=this.data)||void 0===s?void 0:s.client_details)||void 0===n?void 0:n.name;return t("inpost-izi-button",{"data-product-id":this.product,count:this.count,name:d,masked_phone_number:a,language:"pl",variant:"secondary",basket:"BASKET_SUMMARY"==this.binding_place,dark_mode:"true",binding_place:this.binding_place})}};n.style="ks-inpost-pay{display:block}ks-inpost-pay inpost-izi-button>*{width:100% !important}";export{n as ks_inpost_pay}