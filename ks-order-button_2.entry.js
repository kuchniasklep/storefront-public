import{r as t,h as e,g as s}from"./index-b2de1977.js";const o=class{constructor(e){t(this,e),this.mobile=!1,this.wide=!1}componentDidLoad(){this.root.style.display="block"}render(){return[e("a",{href:this.href,class:"uk-button uk-button-default "+(this.mobile?"uk-hidden@m ":"")+(this.wide?"uk-width-1-1 ":""),style:{padding:"0 20px"}},e("slot",null))]}get root(){return s(this)}},r=class{constructor(e){t(this,e)}componentDidLoad(){this.root.style.display="block"}render(){return[e("div",{style:{marginBottom:"20px"},class:"uk-flex uk-flex-middle uk-flex-between"},e("div",{class:"uk-text-bold ks-text-decorated",style:{fontSize:"22px",textTransform:"uppercase"}},this.heading),e("a",{href:this.link,class:"uk-link-text"},e("span",{"uk-icon":"file-edit"})))]}get root(){return s(this)}};export{o as ks_order_button,r as ks_order_heading}