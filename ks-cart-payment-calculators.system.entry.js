System.register(["./index-9d88b83b.system.js","./cart-store-bee5448e.system.js","./index-901f8c50.system.js"],(function(t){"use strict";var e,r,a;return{setters:[function(t){e=t.r;r=t.h},function(t){a=t.s},function(){}],execute:function(){var n="ks-cart-payment-calculators ks-button{max-width:300px;margin:0px auto 20px auto}";var s=t("ks_cart_payment_calculators",function(){function t(t){e(this,t)}t.prototype.render=function(){return this.creditagricoleParameters&&a.get("activePayment")==this.creditagricoleId?r("ks-product-calculator-ca",{price:a.get("totalValue").toString(),parameters:this.creditagricoleParameters},r("ks-button",{round:true,name:"Oblicz raty"})):null};return t}());s.style=n}}}));