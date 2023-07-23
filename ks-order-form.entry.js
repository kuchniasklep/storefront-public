import{r as e,h as t,g as i}from"./index-1b90b4d2.js";import{D as n}from"./dataLayer-d75ea728.js";import"./commonDynamic-3e6c308f.js";import"./index-33fbe4a7.js";import"./fetch-13200e62.js";const o=class{constructor(t){e(this,t);this.action=undefined;this.method=undefined;this.destination=undefined;this.button=undefined;this.back=undefined;this.loading=false}render(){return t("form",{action:this.action,method:this.method,enctype:"application/x-www-form-urlencoded",onSubmit:e=>this.Submit(e)},t("slot",null),t("div",{class:"uk-position-relative uk-margin-medium-top"},t("button",{type:"submit",formnovalidate:true,class:"uk-button uk-button-danger uk-width-1-1 ks-text-decorated",style:{padding:"20px",fontSize:"28px",fontWeight:"700"}},t("span",null,this.button)),this.loading?t("div",{class:"uk-overlay uk-light uk-padding-remove uk-position-cover uk-animation-fade",style:{animationDuration:"0.3s",backgroundColor:"#e21334"}},t("div",{"uk-spinner":"ratio: 1.5",class:"uk-position-center"})):null),t("ks-order-form-modal",{back:this.back}))}async Submit(e){e.preventDefault();const t=this.root.querySelector("form");const i=t.querySelectorAll("ks-input-dynamic, ks-input-select-dynamic, ks-input-select, ks-input-text, ks-input-check");let n=Number.MAX_VALUE;let o=true;for(let e=0;e<i.length;e++){const t=i[e];if(t.closest("ks-input-dynamic *")!=null)continue;if(t.closest("ks-order-check-section:not([active])")!=null)continue;if(t.closest("ks-order-enable-section:not([active])")!=null)continue;if(t.closest("*[hidden]")!=null)continue;await t.Validate();if(!await t.IsValid()){const e=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top;if(e<n)n=e;o=false}}if(o){const e=new Array;for(let i=0;i<t.elements.length;i++){const n=t.elements[i];if(n.nodeName==="INPUT"&&n.type!="submit"&&n.name!=""){if((n.type=="checkbox"||n.type=="radio")&&!n.checked)continue;e.push(`${n.name}=${encodeURIComponent(n.value.toString())}`)}else if(n.nodeName==="SELECT"&&n.name!=""){e.push(`${n.name}=${encodeURIComponent(n.value.toString())}`)}}const i=new FormData;i.append("data",e.join("&"));this.loading=true;var s=new Headers;s.append("pragma","no-cache");s.append("cache-control","no-cache");await fetch(this.action,{body:i,method:"POST",headers:s,credentials:"same-origin"}).then((e=>{if(!e.ok)throw e.status;else{const e=t.querySelector("input[type=email]");const i=t.querySelector("input[name=biuletyn]");this.track(e===null||e===void 0?void 0:e.value,i===null||i===void 0?void 0:i.checked);window.location.href=this.destination}})).catch((e=>{let t=e;console.log(e);if(!navigator.onLine)t="Brak połączenia z internetem.";else if(Number.isInteger(e))t=`Błąd połączenia - ${e}`;this.ShowPrompt(t)}));this.loading=false}else{if("scrollBehavior"in document.documentElement.style)window.scroll({top:n-100,behavior:"smooth"});else window.scroll(0,n-100)}}track(e="",t=false){if(!e||!t)return;const i={email:e,subscriber:true,place:"Zapis do newslettera | Rejestracja Zamówienie"};n.subscribe(i)}ShowPrompt(e){const t=this.root.querySelector("ks-order-form-modal");t.setAttribute("message",e);t.Show()}get root(){return i(this)}};export{o as ks_order_form};
//# sourceMappingURL=ks-order-form.entry.js.map