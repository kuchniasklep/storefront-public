import{r as o,h as t,g as e}from"./index-b2de1977.js";const n=class{constructor(t){o(this,t),this.message=""}async componentDidLoad(){const o=document.querySelector("#ks-order-login-prompt");UIkit.modal(o).show()}ToCart(){window.location.href="koszyk.html"}ToConfirmation(){window.location.href="zamowienie-potwierdzenie.html"}render(){return t("div",{id:"ks-order-login-prompt",class:"uk-modal-full","uk-modal":!0},t("div",{class:"uk-modal-dialog"},t("div",{class:"uk-background-cover uk-flex uk-flex-between uk-flex-column","uk-height-viewport":!0},t("div",{class:"uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column"},t("div",{class:"uk-text-center"},t("span",{class:"ks-text-decorated uk-h1 uk-text-bold"},"Zostałeś pomyślnie zalogowany"),t("br",null),t("p",null,this.message)),t("div",{class:"uk-margin-top"},t("button",{onClick:()=>this.ToCart(),class:"uk-button uk-button-secondary",style:{padding:"5px 15px"}},"Wróć do koszyka"),t("button",{onClick:()=>this.ToConfirmation(),class:"uk-button uk-button-danger",style:{padding:"5px 15px"}},"Do potwierdzenia"))))))}get root(){return e(this)}};export{n as ks_order_login_prompt}