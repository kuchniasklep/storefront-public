import{r as t,h as i,c as s}from"./index-ca9b706f.js";import{c as a}from"./common-bf11c818.js";import"./index-9843a78d.js";const n=class{constructor(i){t(this,i),this.api="",this.message="",this.loading=!1}componentDidLoad(){const t=this.root.querySelector("input");this.root.querySelector("ks-input-text").setAttribute("novalidate","novalidate"),t.onchange=()=>this.Validate()}async Validate(){const t=a.get("translations"),i=this.root.querySelector("input"),s=this.root.querySelector("ks-input-text");var n=new Headers;n.append("pragma","no-cache"),n.append("cache-control","no-cache"),this.ready=new Promise((async a=>{await s.Validate(),await s.IsValid()?(this.loading=!0,await fetch(this.api+i.value,{method:"GET",headers:n,credentials:"same-origin"}).then((t=>{if(!t.ok)throw t.status;return t.text()})).then((t=>{if("false"==t)throw this.message;if("true"!=t)throw t;a(!0)})).catch((i=>{let n=i;Number.isInteger(i)?n=t.inputConnectionError+i:navigator.onLine||(n=t.inputInternetConnectionError),s.setAttribute("message",n),a(!1)}))):a(!1),this.loading=!1}))}async IsValid(){return await this.ready}render(){return i("div",{class:"uk-position-relative"},i("slot",null),this.loading?i("div",{class:"uk-position-absolute uk-animation-fade",style:{top:"7px",right:"7px",animationDuration:"0.3s",animationDelay:"0.5s"},"uk-spinner":"ratio: 0.9"}):null)}get root(){return s(this)}};export{n as ks_input_dynamic}