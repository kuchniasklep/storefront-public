import{r as t,h as a}from"./index-e3198654.js";import{c as r}from"./cart-aff8d68d.js";import"./index-5a4e318f.js";const s=class{constructor(a){t(this,a),this.creditagricoleId=void 0,this.creditagricoleParameters=void 0}render(){return this.creditagricoleParameters&&r.get("activePayment")==this.creditagricoleId?a("ks-product-calculator-ca",{price:r.get("totalValue"),parameters:this.creditagricoleParameters},a("ks-button",{round:!0,name:r.get("strings").installmentsButton})):null}};s.style="ks-cart-payment-calculators ks-button{max-width:300px;margin:0px auto 20px auto}";export{s as ks_cart_payment_calculators}