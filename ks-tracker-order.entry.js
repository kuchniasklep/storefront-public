import{r as t}from"./index-b2de1977.js";import{D as s}from"./dataLayer-6fceb35e.js";import"./commonDynamic-e598d690.js";import"./index-bca22170.js";import"./fetch-bbb23998.js";const i=class{constructor(s){t(this,s),this.checkout=!1,this.form=!1,this.placed=!1,this.eventId=""}componentWillLoad(){const t=document.getElementById(this.dataId),i=JSON.parse(t.innerHTML);this.checkout?s.order_checkout(i,this.eventId):this.form?s.order_form(i,this.eventId):this.placed&&s.order_placed(i,this.eventId)}};export{i as ks_tracker_order}