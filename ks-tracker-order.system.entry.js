System.register(["./index-5ab56926.system.js","./tracker-b01d2a0e.system.js","./commonDynamic-e40d9ffc.system.js","./dataLayer-50244b9c.system.js","./index-1eb13b56.system.js"],(function(e){"use strict";var t,s,n,i;return{setters:[function(e){t=e.r},function(e){s=e.e},function(e){n=e.c},function(e){i=e.D},function(){}],execute:function(){var o=e("ks_tracker_order",function(){function e(e){t(this,e);this.checkout=false;this.form=false;this.placed=false;this.eventId=""}e.prototype.componentWillLoad=function(){var e=this;var t=document.getElementById(this.dataId);var o=JSON.parse(t.innerHTML);if(this.checkout)i.order_checkout(o,this.eventId);else if(this.form)i.order_form(o,this.eventId);else if(this.placed)i.order_placed(o,this.eventId);s((function(t){if(e.checkout)t===null||t===void 0?void 0:t.order_checkout(n.state,o,e.eventId);else if(e.form)t===null||t===void 0?void 0:t.order_form(n.state,o,e.eventId);else if(e.placed)t===null||t===void 0?void 0:t.order_placed(n.state,o,e.eventId)}))};return e}())}}}));