System.register(["./index-229c64eb.system.js"],(function(t){"use strict";var e,i,n;return{setters:[function(t){e=t.r;i=t.h;n=t.g}],execute:function(){var o=t("ks_order_button_pair",function(){function t(t){e(this,t);this.mobile=false;this.linkLeft="";this.linkRight="";this.split=50}t.prototype.resizeHandler=function(){this.mobile=window.innerWidth<640};t.prototype.componentDidLoad=function(){this.root.style.display="block";this.resizeHandler()};t.prototype.render=function(){var t=this.mobile?"100%":this.split-1+"%";return i("div",{class:"ks-text-decorated uk-text-bold uk-flex uk-flex-wrap uk-margin-top"},i("a",{href:this.linkLeft,class:"uk-display-block uk-button uk-button-default ".concat(this.mobile?"uk-margin-small-bottom":"uk-margin-right"),style:{fontSize:"18px",width:t}},i("slot",{name:"left"})),i("a",{href:this.linkRight,class:"uk-display-block uk-button uk-button-default uk-width-expand",style:{fontSize:"18px"}},i("slot",{name:"right"})))};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}())}}}));