import{r as t,h as e,g as o}from"./index-b2de1977.js";import{c as n}from"./commonDynamic-e598d690.js";import{e as i}from"./tracker-7d15eac4.js";import{D as s}from"./dataLayer-60a593d7.js";import"./index-bca22170.js";const a=class{constructor(e){t(this,e),this.loading=!1}render(){return e("form",{action:this.action,method:this.method,enctype:"application/x-www-form-urlencoded",onSubmit:t=>this.Submit(t)},e("slot",null),e("div",{class:"uk-position-relative uk-margin-medium-top"},e("button",{type:"submit",formnovalidate:!0,class:"uk-button uk-button-danger uk-width-1-1 ks-text-decorated",style:{padding:"20px",fontSize:"28px",fontWeight:"700"}},e("span",null,"KONTYNUUJ")),this.loading?e("div",{class:"uk-overlay uk-light uk-padding-remove uk-position-cover uk-animation-fade",style:{animationDuration:"0.3s",backgroundColor:"#e21334"}},e("div",{"uk-spinner":"ratio: 1.5",class:"uk-position-center"})):null),e("ks-order-form-modal",null))}async Submit(t){t.preventDefault();const e=this.root.querySelector("form"),o=e.querySelectorAll("ks-input-dynamic, ks-input-select-dynamic, ks-input-select, ks-input-text, ks-input-check");let n=Number.MAX_VALUE,i=!0;for(let a=0;a<o.length;a++){const t=o[a];if(null==t.closest("ks-input-dynamic *")&&null==t.closest("ks-order-check-section:not([active])")&&null==t.closest("ks-order-enable-section:not([active])")&&null==t.closest("*[hidden]")&&(await t.Validate(),!(await t.IsValid()))){const e=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top;e<n&&(n=e),i=!1}}if(i){const t=new Array;for(let n=0;n<e.elements.length;n++){const o=e.elements[n];if("INPUT"===o.nodeName&&"submit"!=o.type&&""!=o.name){if(("checkbox"==o.type||"radio"==o.type)&&!o.checked)continue;t.push(`${o.name}=${encodeURIComponent(o.value.toString())}`)}else"SELECT"===o.nodeName&&""!=o.name&&t.push(`${o.name}=${encodeURIComponent(o.value.toString())}`)}const o=new FormData;o.append("data",t.join("&")),this.loading=!0;var s=new Headers;s.append("pragma","no-cache"),s.append("cache-control","no-cache"),await fetch(this.action,{body:o,method:"POST",headers:s,credentials:"same-origin"}).then((t=>{if(!t.ok)throw t.status;{const t=e.querySelector("input[type=email]"),o=e.querySelector("input[name=biuletyn]");this.track(null==t?void 0:t.value,null==o?void 0:o.checked),window.location.href=this.destination}})).catch((t=>{let e=t;console.log(t),navigator.onLine?Number.isInteger(t)&&(e=`Błąd połączenia - ${t}`):e="Brak połączenia z internetem.",this.ShowPrompt(e)})),this.loading=!1}else"scrollBehavior"in document.documentElement.style?window.scroll({top:n-100,behavior:"smooth"}):window.scroll(0,n-100)}track(t="",e=!1){if(!t||!e)return;const o={email:t,subscriber:!0,place:"Zapis do newslettera | Rejestracja Zamówienie"};s.subscribe(o),i((t=>null==t?void 0:t.subscribe(n.state,o)))}ShowPrompt(t){const e=this.root.querySelector("ks-order-form-modal");e.setAttribute("message",t),e.Show()}get root(){return o(this)}};export{a as ks_order_form}