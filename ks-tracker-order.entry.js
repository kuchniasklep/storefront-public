import{r as t}from"./index-e3198654.js";import{D as s}from"./dataLayer-251b405e.js";import"./commonDynamic-1f04aed5.js";import"./index-5a4e318f.js";import"./fetch-1f8a9006.js";const i=class{constructor(s){t(this,s),this.checkout=!1,this.form=!1,this.placed=!1,this.eventId="",this.dataId=void 0}componentWillLoad(){const t=document.getElementById(this.dataId),i=JSON.parse(t.innerHTML);this.checkout?s.order_checkout(i,this.eventId):this.form?s.order_form(i,this.eventId):this.placed&&s.order_placed(i,this.eventId)}};export{i as ks_tracker_order}