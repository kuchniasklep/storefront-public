System.register(["./index-56e4ba05.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){var i=t("ks_order_country_select",function(){function t(t){e(this,t);this.name=undefined;this.label=undefined;this.connectTo=undefined;this.lightUp=false}t.prototype.Change=function(t){if(this.connectTo){var e=document.querySelector('ks-input-select-dynamic[name="'.concat(this.connectTo,'"]'));var n=t.target;e.setAttribute("api-data",n.value);e.setAttribute("light-up","false")}};t.prototype.render=function(){var t=this;return n("ks-input-select",{name:this.name,label:this.label,onChange:function(e){return t.Change(e)},"light-up":this.lightUp},n("slot",null))};return t}())}}}));
//# sourceMappingURL=ks-order-country-select.system.entry.js.map