import{r as n,h as t}from"./index-e6122d86.js";const e=class{constructor(t){n(this,t),this.link="/",this.linkName="Strona Główna",this.backName="Wróć na poprzedną stronę"}render(){return[t("div",{class:"content"},t("slot",null)),t("div",{class:"buttons"},t("ks-button",{round:!0,nofollow:!0,onClick:()=>history.back(),name:this.backName}),t("ks-button",{round:!0,nofollow:!0,link:this.link,name:this.linkName}))]}};e.style="ks-nocontent{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:50px 30px 70px 30px;text-align:center}ks-nocontent .content{max-width:800px;margin:15px 0}ks-nocontent .content h1{font-size:1.275rem;font-family:var(--font-emphasis);font-weight:700}ks-nocontent .content h1{font-size:1.275rem}ks-nocontent .buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-nocontent .buttons>*{margin:5px}@media (max-width: 640px){ks-nocontent{padding:30px 15px 50px 15px}}";export{e as ks_nocontent}