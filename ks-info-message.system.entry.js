System.register(["./index-5ab56926.system.js"],(function(e){"use strict";var s,t,n;return{setters:[function(e){s=e.r;t=e.h;n=e.g}],execute:function(){var i="ks-info-message[disabled]{display:none}ks-info-message{display:-ms-flexbox;display:flex;overflow:hidden;background-color:var(--color-secondary);color:#ffffff;max-height:100px;-webkit-transition:max-height 0.3s ease;transition:max-height 0.3s ease}ks-info-message[animating]{max-height:0}ks-info-message .content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin:10px;-ms-flex:1;flex:1}ks-info-message .close{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:10px;color:#ffffff;background-color:rgba(0, 0, 0, 0.12);-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-info-message .close:hover{background-color:rgba(0, 0, 0, 0.06)}@media only screen and (max-width: 639px){ks-info-message .content{font-size:13px}}";var o=e("ks_info_message",function(){function e(e){s(this,e);this.disabled=false;this.animating=false;this.id=""}e.prototype.componentWillLoad=function(){this.id="ks-info-message-"+this.name.replace(" ","");if(sessionStorage.getItem(this.id)=="true")this.disabled=true};e.prototype.disable=function(){var e=this;sessionStorage.setItem(this.id,"true");this.animating=true;setTimeout((function(){e.disabled=true}),300)};e.prototype.render=function(){var e=this;return[t("div",{class:"content"},t("slot",null)),t("div",{class:"close"},t("ks-icon",{name:"x",onClick:function(){return e.disable()}}))]};Object.defineProperty(e.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return e}());o.style=i}}}));