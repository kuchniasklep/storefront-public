import{r as e,h as t,g as a}from"./index-b2de1977.js";const s=class{constructor(t){e(this,t)}componentDidLoad(){this.root.style.display="block",this.root.querySelectorAll(`input[name=${this.name}]`).forEach((e=>{e.addEventListener("change",(e=>{const t=e.target,a=new FormData;a.append("value",t.value);var s=new Headers;s.append("pragma","no-cache"),s.append("cache-control","no-cache"),this.loading=!0,fetch(this.api,{method:"POST",headers:s,body:a,credentials:"same-origin"}).then((()=>this.loading=!1))}))}))}async Validate(){}async IsValid(){return!this.loading}render(){return[t("span",null,"Wybierz dokument sprzedaży:"),t("div",{class:"uk-position-relative uk-margin-small-top"},t("div",{class:"uk-child-width-1-2 uk-flex"},t("ks-order-toggle",{active:!0,text:"PARAGON",name:this.name,value:"0"}),t("ks-order-toggle",{text:"FAKTURA",name:this.name,value:"1"})),this.loading?t("div",{class:"uk-overlay uk-overlay-default uk-padding-remove uk-position-cover uk-animation-fade",style:{animationDuration:"0.3s",animationDelay:"0.5s"}},t("div",{"uk-spinner":!0,class:"uk-position-center"})):null)]}get root(){return a(this)}};export{s as ks_order_document_select}