import{r as s,h as i}from"./index-b2de1977.js";const t=class{constructor(i){s(this,i),this.muted=!1,this.dark=!1,this.darker=!1,this.expand=!1,this.marginTop=!1,this.mobileCollapse=!1}render(){return i("div",{class:"uk-section uk-padding-remove-vertical "+(this.muted?"uk-section-muted":this.dark?"uk-section-secondary":""),style:this.darker?{backgroundColor:"rgb(24, 24, 24)"}:null},i("div",{class:"uk-container "+(this.expand?"uk-container-expand":"")+" uk-margin-bottom "+(this.mobileCollapse?"uk-padding-remove uk-padding-small@s uk-padding-remove-vertical@s uk-margin-remove-top ":"uk-padding-small uk-padding-remove-vertical ")+(this.marginTop?this.mobileCollapse?"uk-margin-top@s ":"uk-margin-top ":"")},i("slot",null)))}};export{t as ks_section}