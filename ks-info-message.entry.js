import{r as s,h as e,g as i}from"./index-e3198654.js";const o=class{constructor(e){s(this,e),this.id="",this.name=void 0,this.disabled=!1,this.animating=!1}componentWillLoad(){this.id="ks-info-message-"+this.name.replace(" ",""),"true"==sessionStorage.getItem(this.id)&&(this.disabled=!0)}disable(){sessionStorage.setItem(this.id,"true"),this.animating=!0,setTimeout((()=>{this.disabled=!0}),300)}render(){return[e("div",{class:"content"},e("slot",null)),e("div",{class:"close"},e("ks-icon",{name:"x",onClick:()=>this.disable()}))]}get root(){return i(this)}};o.style="ks-info-message[disabled]{display:none}ks-info-message{display:-ms-flexbox;display:flex;overflow:hidden;background-color:var(--color-secondary);color:#ffffff;max-height:100px;-webkit-transition:max-height 0.3s ease;transition:max-height 0.3s ease}ks-info-message[animating]{max-height:0}ks-info-message .content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin:10px;-ms-flex:1;flex:1}ks-info-message .close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:10px;color:#ffffff;background-color:rgba(0, 0, 0, 0.12);-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-info-message .close:hover{background-color:rgba(0, 0, 0, 0.06)}@media only screen and (max-width: 639px){ks-info-message .content{font-size:13px}}";export{o as ks_info_message}