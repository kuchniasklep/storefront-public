System.register(["./index-3484848d.system.js"],(function(i){"use strict";var n,t;return{setters:[function(i){n=i.r;t=i.h}],execute:function(){var o="ks-notification{display:-ms-flexbox;display:flex;background-color:#252525;color:white}ks-notification>.content{width:100%;padding:15px 20px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}ks-notification>.icon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:10px;min-width:50px;background:rgba(0, 0, 0, 0.1)}ks-notification p{margin:0 !important}ks-notification[red]{background-color:var(--color-secondary)}@media (max-width: 420px){ks-notification{-ms-flex-direction:column;flex-direction:column}ks-notification>.content{padding:10px 12px}}";var e=i("ks_notification",function(){function i(i){n(this,i);this.red=false;this.icon=""}i.prototype.render=function(){if(this.icon)return[t("div",{class:"icon"},t("ks-icon",{name:this.icon})),t("div",{class:"content"},t("slot",null))];return t("slot",null)};return i}());e.style=o}}}));