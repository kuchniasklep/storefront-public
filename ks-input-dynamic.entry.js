import{r as t,h as i,g as a}from"./index-e3198654.js";const s=class{constructor(i){t(this,i),this.api="",this.message="",this.loading=!1}componentDidLoad(){const t=this.root.querySelector("input");this.root.querySelector("ks-input-text").setAttribute("novalidate","novalidate"),t.onchange=()=>this.Validate()}async Validate(){const t=this.root.querySelector("input"),i=this.root.querySelector("ks-input-text");var a=new Headers;a.append("pragma","no-cache"),a.append("cache-control","no-cache"),this.ready=new Promise((async s=>{await i.Validate(),await i.IsValid()?(this.loading=!0,await fetch(this.api+t.value,{method:"GET",headers:a,credentials:"same-origin"}).then((t=>{if(!t.ok)throw t.status;return t.text()})).then((t=>{if("false"==t)throw this.message;if("true"!=t)throw t;s(!0)})).catch((t=>{let a=t;Number.isInteger(t)?a=`Błąd połączenia - ${t}`:navigator.onLine||(a="Brak połączenia z internetem"),i.setAttribute("message",a),s(!1)}))):s(!1),this.loading=!1}))}async IsValid(){return await this.ready}render(){return i("div",{class:"uk-position-relative"},i("slot",null),this.loading?i("div",{class:"uk-position-absolute uk-animation-fade",style:{top:"7px",right:"7px",animationDuration:"0.3s",animationDelay:"0.5s"},"uk-spinner":"ratio: 0.9"}):null)}get root(){return a(this)}};export{s as ks_input_dynamic}