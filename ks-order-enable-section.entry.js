import{r as s,h as t,g as i}from"./index-e3198654.js";const n=class{constructor(t){s(this,t),this.heading=void 0,this.name=void 0,this.value=void 0,this.active=!1}ChangeHandler(){const s=this.root.querySelector("div > label > input");this.active=s.checked}componentDidLoad(){this.root.style.display="block",this.ChangeHandler()}render(){return t("div",null,t("label",{class:"uk-display-block uk-margin"},t("input",{type:"checkbox",class:"uk-checkbox",name:this.name,value:this.value,onChange:()=>this.ChangeHandler()}),t("span",null," ",this.heading)),t("div",{class:"inputs",hidden:!this.active},t("slot",null)))}get root(){return i(this)}};export{n as ks_order_enable_section}