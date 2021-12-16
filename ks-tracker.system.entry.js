var __spreadArray=this&&this.__spreadArray||function(t,n){for(var e=0,r=n.length,o=t.length;e<r;e++,o++)t[o]=n[e];return t};System.register(["./index-bc7fda62.system.js","./tracker-0c49078d.system.js","./index-2a10dbd5.system.js"],(function(t){"use strict";var n,e,r;return{setters:[function(t){n=t.r},function(t){e=t.t;r=t.r},function(){}],execute:function(){var o=function(){function t(){this.ttq=new Promise((function(t){var n=setInterval((function(){if(ttq!==undefined){t(ttq);clearInterval(n)}}),100)}))}t.prototype.pageview=function(){this.ttq.then((function(t){t.track("Browse")}))};t.prototype.product=function(t,n,e,r,o){this.ttq.then((function(t){t.track("ViewContent",{content_type:"product",content_id:n,content_name:e,currency:o,price:r,quantity:1,value:r})}))};t.prototype.addToCart=function(t,n,e,r,o,c){this.ttq.then((function(t){t.track("AddToCart",{content_type:"product",content_id:n,content_name:e,currency:c,price:r,quantity:o,value:r*o})}))};t.prototype.order_checkout=function(t,n,e,r){var o=this;this.ttq.then((function(t){t.track("StartCheckout",{contents:o.transformProducts(n),currency:r,value:e})}))};t.prototype.order_form=function(t,n,e,r){var o=this;this.ttq.then((function(t){t.track("AddBilling",{contents:o.transformProducts(n),value:e,currency:r})}))};t.prototype.order_placed=function(t,n,e,r){var o=this;this.ttq.then((function(t){t.track("Checkout",{contents:o.transformProducts(n),value:e,currency:r})}))};t.prototype.search=function(t){};t.prototype.transformProducts=function(t){return t.map((function(t){return{content_id:t.id,content_type:"product",content_name:t.name,quantity:t.quantity,price:t.price}}))};return t}();var c=function(){function t(t){var n=t.split(", ");this.pixel=new Promise((function(t){!function(t,n,e,r,o,c,i){if(t.fbq)return;o=t.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)};if(!t._fbq)t._fbq=o;o.push=o;o.loaded=!0;o.version="2.0";o.queue=[];c=n.createElement(e);c.async=!0;c.src=r;i=n.getElementsByTagName(e)[0];i.parentNode.insertBefore(c,i)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");n.forEach((function(t){fbq("init",t)}));t(fbq)}))}t.prototype.pageview=function(t){this.pixel.then((function(n){n("track","PageView",{},{eventID:t})}))};t.prototype.product=function(t,n,e,r,o){this.pixel.then((function(c){c("track","ViewContent",{content_type:"product",content_name:e,value:r,currency:o,content_ids:[n]},{eventID:t})}))};t.prototype.addToCart=function(t,n,e,r,o,c){this.pixel.then((function(i){i("track","AddToCart",{content_type:"product",content_name:e,value:r,currency:c,contents:[{id:n,quantity:o}]},{eventID:t})}))};t.prototype.order_checkout=function(t,n,e,r){var o=this;this.pixel.then((function(c){c("track","InitiateCheckout",{contents:o.transformProducts(n),content_type:"product",value:e,currency:r},{eventID:t})}))};t.prototype.order_form=function(t,n,e,r){};t.prototype.order_placed=function(t,n,e,r){var o=this;this.pixel.then((function(c){c("track","Purchase",{contents:o.transformProducts(n),content_type:"product",value:e,currency:r},{eventID:t})}))};t.prototype.search=function(t){this.pixel.then((function(n){n("track","Search",{search_string:t})}))};t.prototype.transformProducts=function(t){return t.map((function(t){return{id:t.id,quantity:t.quantity}}))};return t}();var i=t("ks_tracker",function(){function t(t){n(this,t)}t.prototype.componentWillLoad=function(){var t=this;e.get("loaded").then((function(){if(t.tiktok)t.appendTracker(new o);if(t.facebook)t.appendTracker(new c(t.facebook));r()}))};t.prototype.appendTracker=function(t){e.set("trackers",__spreadArray(__spreadArray([],e.get("trackers")),[t]))};return t}())}}}));