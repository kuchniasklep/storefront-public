import{r as t,h as s,g as e}from"./index-1b90b4d2.js";const i=class{constructor(s){t(this,s);this.label=undefined;this.name=undefined;this.active=false;this.mobile=false}ChangeHandler(){const t=this.root.querySelector(`div > label > input`);this.active=t.checked;const s=this.root.querySelectorAll("ks-input-text");s.forEach((t=>{t.message=""}))}resizeHandler(){this.mobile=window.innerWidth<959?true:false}componentDidLoad(){this.root.style.display="block";this.resizeHandler();this.ChangeHandler()}render(){return s("div",null,s("label",{class:"uk-display-block uk-margin"},s("input",{type:"checkbox",class:"uk-checkbox",style:{transform:"scale(1.4) translateX(2px)",marginBottom:"3px"},onChange:()=>this.ChangeHandler()}),s("span",{class:"uk-margin-left ks-text-decorated uk-text-bold",style:{fontSize:"22px"}},this.label)),s("br",null),this.active?null:s("input",{type:"hidden",name:this.name,value:"1"}),s("div",{class:"uk-inline uk-width-1-1",hidden:!this.active&&this.mobile},s("slot",null),this.active?null:s("div",{class:"uk-overlay uk-overlay-default uk-position-cover",style:{opacity:"0.8"}})))}get root(){return e(this)}};export{i as ks_order_check_section};
//# sourceMappingURL=ks-order-check-section.entry.js.map