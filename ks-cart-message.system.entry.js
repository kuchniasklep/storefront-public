System.register(["./index-229c64eb.system.js"],(function(e){"use strict";var t,s,i;return{setters:[function(e){t=e.r;s=e.h;i=e.H}],execute:function(){var a="ks-cart-message{display:block;text-align:center;color:white;background-color:var(--color-secondary);overflow:hidden;opacity:0.0;max-height:0px;height:auto;-webkit-transition:opacity 0.5s ease, max-height 0.5s ease;transition:opacity 0.5s ease, max-height 0.5s ease}ks-cart-message.show{opacity:1.0;max-height:100px}ks-cart-message.hide{opacity:0.0;max-height:0px}ks-cart-message>p{margin:10px}";var r=e("ks_cart_message",function(){function e(e){t(this,e);this.message="";this.visibility="hide";this.messageDelay=""}e.prototype.componentWillLoad=function(){this.watchHandler(this.message)};e.prototype.watchHandler=function(e){var t=this;if(e==""){this.visibility="hide";setTimeout((function(){t.messageDelay=""}),500)}else{this.visibility="show";this.messageDelay=this.message}};e.prototype.render=function(){return s(i,{class:this.visibility},s("p",null,this.messageDelay))};Object.defineProperty(e,"watchers",{get:function(){return{message:["watchHandler"]}},enumerable:false,configurable:true});return e}());r.style=a}}}));