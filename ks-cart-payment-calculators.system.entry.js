System.register(["./index-56e4ba05.system.js","./cart-a5dbade9.system.js","./index-c9cb740c.system.js"],(function(t){"use strict";var e,r,a;return{setters:[function(t){e=t.r;r=t.h},function(t){a=t.c},function(){}],execute:function(){var n="ks-cart-payment-calculators ks-button{max-width:300px;margin:0px auto 20px auto}";var c=t("ks_cart_payment_calculators",function(){function t(t){e(this,t);this.creditagricoleId=undefined;this.creditagricoleParameters=undefined}t.prototype.render=function(){return this.creditagricoleParameters&&a.get("activePayment")==this.creditagricoleId?r("ks-product-calculator-ca",{price:a.get("totalValue"),parameters:this.creditagricoleParameters},r("ks-button",{round:true,name:a.get("strings").installmentsButton})):null};return t}());c.style=n}}}));
//# sourceMappingURL=ks-cart-payment-calculators.system.entry.js.map