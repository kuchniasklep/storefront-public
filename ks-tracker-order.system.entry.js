System.register(["./index-56e4ba05.system.js","./dataLayer-62e63f86.system.js","./commonDynamic-6d8da335.system.js","./index-c9cb740c.system.js","./fetch-f6400e56.system.js"],(function(e){"use strict";var t,s;return{setters:[function(e){t=e.r},function(e){s=e.D},function(){},function(){},function(){}],execute:function(){var n=e("ks_tracker_order",function(){function e(e){t(this,e);this.checkout=false;this.form=false;this.placed=false;this.eventId="";this.dataId=undefined}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.dataId);var t=JSON.parse(e.innerHTML);if(this.checkout)s.order_checkout(t,this.eventId);else if(this.form)s.order_form(t,this.eventId);else if(this.placed)s.order_placed(t,this.eventId)};return e}())}}}));
//# sourceMappingURL=ks-tracker-order.system.entry.js.map