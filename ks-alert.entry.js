import{r as t,h as e,c as s}from"./index-abcf82c7.js";const a=class{constructor(e){t(this,e),this.message=""}componentWillLoad(){this.hashCode=this.GenerateHash(this.message)}GenerateHash(t){var e=0,s=t.length;if(0===t.length)return e;for(let a=0;a<s;a++)e=(e<<5)-e+t.charCodeAt(a),e&=e;return e}async componentDidLoad(){const t=document.querySelector(`#ks-alert-${this.hashCode}`);UIkit.modal(t).show()}Close(){const t=document.querySelector(`#ks-alert-${this.hashCode}`);UIkit.modal(t).hide().then((()=>{this.root.remove(),t.remove()}))}render(){return e("div",{id:`ks-alert-${this.hashCode}`,class:"uk-modal-full","uk-modal":"stack: true"},e("div",{class:"uk-modal-dialog"},e("div",{class:"uk-background-cover uk-flex uk-flex-between uk-flex-column","uk-height-viewport":!0},e("div",{class:"uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column",style:{maxWidth:"1300px",margin:"auto"}},e("p",{class:"uk-text-center ks-text-decorated uk-h1",innerHTML:this.message}),e("div",{class:"uk-margin-top"},e("button",{onClick:()=>this.Close(),class:"uk-button uk-button-secondary",style:{padding:"5px 40px"}},"OK"))))))}get root(){return s(this)}};export{a as ks_alert}