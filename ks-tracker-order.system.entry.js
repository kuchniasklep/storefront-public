System.register(["./index-3484848d.system.js","./tracker-cdad81cb.system.js","./commonDynamic-af70983b.system.js","./index-4afdae1e.system.js"],(function(e){"use strict";var t,n,s;return{setters:[function(e){t=e.r},function(e){n=e.e},function(e){s=e.c},function(){}],execute:function(){var o=e("ks_tracker_order",function(){function e(e){t(this,e);this.checkout=false;this.form=false;this.placed=false;this.eventId=""}e.prototype.componentWillLoad=function(){var e=this;var t=document.getElementById(this.dataId);var o=JSON.parse(t.innerHTML);n((function(t){if(e.checkout)t===null||t===void 0?void 0:t.order_checkout(s.state,o,e.eventId);else if(e.form)t===null||t===void 0?void 0:t.order_form(s.state,o,e.eventId);else if(e.placed)t===null||t===void 0?void 0:t.order_placed(s.state,o,e.eventId)}))};return e}())}}}));