System.register(["./index-5ab56926.system.js","./cart-2759f37f.system.js","./index-1eb13b56.system.js"],(function(t){"use strict";var e,r,n;return{setters:[function(t){e=t.r;r=t.h},function(t){n=t.c},function(){}],execute:function(){var a="ks-cart-payment-calculators ks-button{max-width:300px;margin:0px auto 20px auto}";var s=t("ks_cart_payment_calculators",function(){function t(t){e(this,t)}t.prototype.render=function(){return this.creditagricoleParameters&&n.get("activePayment")==this.creditagricoleId?r("ks-product-calculator-ca",{price:n.get("totalValue").toString(),parameters:this.creditagricoleParameters},r("ks-button",{round:true,name:n.get("strings").installmentsButton})):null};return t}());s.style=a}}}));