System.register(["./index-56e4ba05.system.js"],(function(e){"use strict";var t,n,i;return{setters:[function(e){t=e.r;n=e.h;i=e.g}],execute:function(){var r=e("ks_order_check_section",function(){function e(e){t(this,e);this.label=undefined;this.name=undefined;this.active=false;this.mobile=false}e.prototype.ChangeHandler=function(){var e=this.root.querySelector("div > label > input");this.active=e.checked;var t=this.root.querySelectorAll("ks-input-text");t.forEach((function(e){e.message=""}))};e.prototype.resizeHandler=function(){this.mobile=window.innerWidth<959?true:false};e.prototype.componentDidLoad=function(){this.root.style.display="block";this.resizeHandler();this.ChangeHandler()};e.prototype.render=function(){var e=this;return n("div",null,n("label",{class:"uk-display-block uk-margin"},n("input",{type:"checkbox",class:"uk-checkbox",style:{transform:"scale(1.4) translateX(2px)",marginBottom:"3px"},onChange:function(){return e.ChangeHandler()}}),n("span",{class:"uk-margin-left ks-text-decorated uk-text-bold",style:{fontSize:"22px"}},this.label)),n("br",null),this.active?null:n("input",{type:"hidden",name:this.name,value:"1"}),n("div",{class:"uk-inline uk-width-1-1",hidden:!this.active&&this.mobile},n("slot",null),this.active?null:n("div",{class:"uk-overlay uk-overlay-default uk-position-cover",style:{opacity:"0.8"}})))};Object.defineProperty(e.prototype,"root",{get:function(){return i(this)},enumerable:false,configurable:true});return e}())}}}));
//# sourceMappingURL=ks-order-check-section.system.entry.js.map