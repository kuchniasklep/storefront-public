System.register(["./index-0660128e.system.js","./cart-7d205f9b.system.js","./index-af3dd464.system.js"],(function(t){"use strict";var e,r,a;return{setters:[function(t){e=t.r;r=t.h},function(t){a=t.c},function(){}],execute:function(){var c="ks-cart-payment-calculators ks-button{max-width:300px;margin:0px auto 20px auto}";var n=t("ks_cart_payment_calculators",function(){function t(t){e(this,t)}t.prototype.render=function(){return this.creditagricoleParameters&&a.get("activePayment")==this.creditagricoleId?r("ks-product-calculator-ca",{price:a.get("totalValue"),parameters:this.creditagricoleParameters},r("ks-button",{round:true,name:"Oblicz raty"})):null};return t}());n.style=c}}}));