import{r as t,h as i,c as e}from"./index-ca9b706f.js";import{p as s}from"./price-cb74dc90.js";import"./common-bf11c818.js";import"./index-9843a78d.js";const r=class{constructor(i){t(this,i),this.price=void 0,this.amount=void 0,this.shippingTime="",this.editLink="",this.productTableTotal="",this.backToCart="Wróć do koszyka",this.loading=0,this.loadingDelayed=!1}LoadingWatcher(){this.loading?this.loadingTimeout=setTimeout((()=>{this.loadingDelayed=!0}),300):(clearTimeout(this.loadingTimeout),this.loadingDelayed=!1)}componentDidLoad(){this.root.style.display="block",this.LoadingWatcher()}render(){const t=s(this.price);return[i("div",null,i("div",{class:"sentence ks-text-decorated"},this.loadingDelayed&&this.loading?i("div",{class:"uk-animation-fade","uk-spinner":"ratio: 0.7"}):[i("span",null,this.productTableTotal," ",i("span",{class:"price"},t)),""!=this.shippingTime?i("span",{class:"shipping"},this.shippingTime):null]),this.editLink?i("div",{class:"edit"},i("a",{href:this.editLink,class:"uk-button uk-button-default uk-width-1-1"},this.backToCart)):null),i("hr",null)]}get root(){return e(this)}static get watchers(){return{loading:["LoadingWatcher"]}}};r.style="ks-cart-product-price{display:block;margin-top:10px}ks-cart-product-price>div{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-cart-product-price .sentence{-ms-flex:1;flex:1;font-size:18px;font-weight:700;text-align:center}ks-cart-product-price .price{color:#e21334}ks-cart-product-price .shipping{display:inline-block;margin-left:15px}ks-cart-product-price .edit{-webkit-box-sizing:border-box;box-sizing:border-box;width:auto;max-width:100%}ks-cart-product-price .edit a{padding:3px 20px}@media only screen and (min-width: 960px){ks-cart-product-price .sentence{text-align:right}}@media only screen and (max-width: 959px){ks-cart-product-price .edit{margin-top:10px;width:100%}}@media only screen and (max-width: 640px){ks-cart-product-price .shipping{display:block;margin-left:0;font-size:16px}}";export{r as ks_cart_product_price}