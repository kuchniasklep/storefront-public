import{r as i,h as n}from"./index-e6122d86.js";const o=class{constructor(n){i(this,n),this.red=!1,this.icon=""}render(){return this.icon?[n("div",{class:"icon"},n("ks-icon",{name:this.icon})),n("div",{class:"content"},n("slot",null))]:n("slot",null)}};o.style="ks-notification{display:-ms-flexbox;display:flex;background-color:#252525;color:white}ks-notification>.content{width:100%;padding:15px 20px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}ks-notification>.icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:10px;min-width:50px;background:rgba(0, 0, 0, 0.1)}ks-notification p{margin:0 !important}ks-notification[red]{background-color:var(--color-secondary)}@media (max-width: 420px){ks-notification{-ms-flex-direction:column;flex-direction:column}ks-notification>.content{padding:10px 12px}}";export{o as ks_notification}