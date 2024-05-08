import{r as t,h as e,g as i}from"./index-e3198654.js";import{p as r}from"./price-a6e5d183.js";import{r as a,h as s}from"./cart-9f6b2f78.js";import"./common-e4bd89b8.js";import"./index-5a4e318f.js";import"./cart-3ea22f3a.js";import"./fetch-1f8a9006.js";import"./dataLayer-31ff5119.js";import"./commonDynamic-a3c330fc.js";import"./js.cookie-2cc1be5d.js";import"./_commonjsHelpers-ba3f0406.js";const n=class{constructor(e){t(this,e),this.productId=void 0,this.name=void 0,this.img=void 0,this.link=void 0,this.small=void 0,this.price=void 0,this.shippingTime="",this.countUnit="",this.amount=1,this.maxAmount=void 0,this.removable=!1,this.loading=!1}onRemoveHandler(){this.loading=!0,a(this.productId)}async ResetLoading(){this.loading=!1}render(){const t=r(this.price);return[e("a",{class:"product-image",href:this.link},e("ks-img3",{fit:"contain",image:this.img,width:180,height:180,alt:"zdjęcie produktu"})),e("div",{class:"description"},e("a",{class:"name",href:this.link,innerHTML:this.name}),e("span",{class:"price"},t),e("span",{class:"shipping"},this.shippingTime),e("div",{class:"count"},this.removable?e("ks-cart-spinner",{product:this.productId,value:this.amount,max:this.maxAmount}):e("div",{class:"amount"},this.amount," ",this.countUnit)),e("div",{class:"remove-container"},this.removable?this.loading?e("ks-loader",null):e("button",{class:"remove",onClick:()=>this.onRemoveHandler()},e("ks-icon",{name:"x"})):null))]}};n.style='ks-cart-product{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:16px;border-bottom:#ededed 1px solid}ks-cart-product:last-child{border-bottom:none}ks-cart-product .description{display:grid;grid-template-columns:1fr 110px 100px 50px;grid-template-rows:auto auto;gap:0px 5px;grid-template-areas:"name     price count remove"\n        "shipping price count remove";-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex:1;flex:1;padding:10px 0px}ks-cart-product:not([removable]) .description{grid-template-columns:1fr 110px 100px;grid-template-areas:"name     price count"\n        "shipping price count"}ks-cart-product:not([removable]) .remove-container{display:none}ks-cart-product .name{grid-area:name;color:inherit !important;text-decoration:none !important}ks-cart-product .price{grid-area:price;font-family:var(--font-emphasis);text-align:center}ks-cart-product .count{grid-area:count}ks-cart-product .amount{text-align:center}ks-cart-product .remove-container{grid-area:remove}ks-cart-product .shipping{grid-area:shipping;font-family:var(--font-emphasis);font-weight:700}ks-cart-product .remove{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:#d9d9d9 solid 1px;border-radius:50px;width:40px;height:40px;margin:5px}ks-cart-product .product-image{width:90px;height:90px;max-width:90px;max-height:90px;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}@media only screen and (max-width: 860px){ks-cart-product .description{grid-template-rows:auto auto;grid-template-columns:auto auto 1fr;gap:5px 5px;grid-template-areas:"name   name     name  remove"\n            "price  shipping count remove"}ks-cart-product:not([removable]) .description{grid-template-columns:auto auto 1fr;gap:5px 10px;grid-template-areas:"name     name name"\n            "shipping price count"}ks-cart-product:not([removable]) .amount{text-align:left !important}ks-cart-product .price{text-align:center;font-weight:700;color:#e21334}ks-cart-product .name{margin-bottom:-5px}}@media only screen and (max-width: 640px){ks-cart-product{-ms-flex-direction:column;flex-direction:column;position:relative}ks-cart-product .description{grid-template-rows:auto auto;grid-template-columns:auto auto auto;gap:5px 5px;grid-template-areas:"name   name"\n            "price  shipping"\n            "count  count"\n            "remove remove";text-align:center;justify-items:stretch}ks-cart-product:not([removable]) .description{grid-template-rows:auto auto;grid-template-columns:1fr auto 1fr;grid-template-areas:"name   name     name"\n            "price  shipping count"}ks-cart-product .price{text-align:right}ks-cart-product .count{text-align:center;margin-top:5px}ks-cart-product .shipping{text-align:left}ks-cart-product .remove-container{position:absolute;text-align:right;top:5px;right:0px}ks-cart-product .product-image{width:100%;height:100%;max-width:180px;max-height:180px}}';const o=class{constructor(e){t(this,e),this.removable=void 0,this.productTableNames="",this.productTablePrices="",this.productTableCount="",this.productTableRemove=""}render(){return[e("div",{class:"names"},this.productTableNames),e("div",{class:"prices"},this.productTablePrices),e("div",{class:"count"},this.productTableCount),this.removable?e("div",{class:"remove"},this.productTableRemove):null]}get root(){return i(this)}};o.style="ks-cart-product-heading{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;text-align:center;font-size:18px;border-bottom:#ededed 1px solid;padding-bottom:10px;font-family:var(--font-emphasis);font-weight:700}ks-cart-product-heading .names{text-align:left;width:100%}ks-cart-product-heading .prices{width:110px;-ms-flex:1 0 auto;flex:1 0 auto}ks-cart-product-heading .count{width:110px;-ms-flex:1 0 auto;flex:1 0 auto}ks-cart-product-heading .remove{width:50px;-ms-flex:1 0 auto;flex:1 0 auto}ks-cart-product-heading .remove{width:50px;-ms-flex:1 0 auto;flex:1 0 auto}@media only screen and (max-width: 860px){ks-cart-product-heading .prices{display:none}ks-cart-product-heading .count{display:none}}";const p=class{constructor(e){t(this,e),this.product=void 0,this.name=void 0,this.value=1,this.max=void 0}Increment(){(void 0===this.max||this.value<this.max)&&(this.value+=1,this.onChangedHandler(this.value))}Decrement(){this.value>1&&(this.value-=1,this.onChangedHandler(this.value))}Change(t){const e=t.target,i=parseInt(e.value);!isNaN(i)&&i>0&&(void 0===this.max||i<=this.max)?this.value=i:i>this.max?(this.value=this.max,e.value=this.max.toString()):(this.value=1,e.value="1"),this.onChangedHandler(this.value)}onChangedHandler(t){s(this.product,t).then((t=>{setTimeout((()=>{if(!t)return;this.max=t;const e=this.root.querySelector("input");parseInt(e.value)>this.max&&(this.value=this.max,e.value=this.max.toString())}),200)}))}render(){return[e("button",{onClick:()=>this.Decrement(),disabled:this.value<=1},"-"),e("input",{type:"text",maxlength:"3",value:this.value,name:this.name,onChange:t=>this.Change(t)}),e("button",{onClick:()=>this.Increment(),disabled:this.value+1>this.max},"+")]}get root(){return i(this)}};p.style="ks-cart-spinner{display:-ms-inline-flexbox;display:inline-flex;text-align:center}ks-cart-spinner input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #d9d9d9;width:40px !important;height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 !important;font-size:14px !important;text-align:center !important}ks-cart-spinner button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #d9d9d9;height:30px;width:30px}ks-cart-spinner button:first-child{border-right:none}ks-cart-spinner button:last-child{border-left:none}@media only screen and (max-width: 640px){ks-cart-spinner input{width:50px;height:35px}ks-cart-spinner button{height:35px;width:35px}}";export{n as ks_cart_product,o as ks_cart_product_heading,p as ks_cart_spinner}