System.register(["./index-9d88b83b.system.js","./tracker-dbb87cd8.system.js","./commonDynamic-d55a0d0e.system.js","./index-901f8c50.system.js"],(function(e){"use strict";var t,s,i;return{setters:[function(e){t=e.r},function(e){s=e.e},function(e){i=e.c},function(){}],execute:function(){var n=e("ks_tracker_order",function(){function e(e){t(this,e);this.checkout=false;this.form=false;this.placed=false;this.subscribed=false;this.eventId=""}e.prototype.componentWillLoad=function(){var e=this;var t=JSON.parse(this.data);s((function(s){if(e.checkout)s===null||s===void 0?void 0:s.order_checkout(i.state,t,e.eventId);else if(e.form)s===null||s===void 0?void 0:s.order_form(i.state,t,e.eventId);else if(e.placed)s===null||s===void 0?void 0:s.order_placed(i.state,t,e.eventId);else if(e.subscribed)s===null||s===void 0?void 0:s.subscribe(i.state,t)}))};return e}())}}}));