import{r as t,h as i,g as s}from"./index-e3198654.js";const e=class{constructor(i){t(this,i),this.left=void 0,this.right=void 0,this.lValue=void 0,this.rValue=void 0,this.name=void 0,this.value="left"}ChangeHandler(){const t=this.root.querySelector(`ks-order-toggle input[name='${this.name}']:checked`);this.value=t.value==this.lValue?"left":"right"}componentDidLoad(){this.root.style.display="block",this.ChangeHandler()}render(){return i("div",null,i("div",{class:"uk-child-width-1-2 uk-flex"},i("ks-order-toggle",{active:"left"==this.value,text:this.left,name:this.name,value:this.lValue,onClick:()=>this.ChangeHandler()}),i("ks-order-toggle",{active:"right"==this.value,text:this.right,name:this.name,value:this.rValue,onClick:()=>this.ChangeHandler()})),i("br",null),i("div",{hidden:"left"!=this.value},i("slot",{name:"left"})),i("div",{hidden:"right"!=this.value},i("slot",{name:"right"})))}get root(){return s(this)}};export{e as ks_order_toggle_section}