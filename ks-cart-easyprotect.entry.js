import{r as t,h as s,H as e,c as a}from"./index-abcf82c7.js";import{s as o}from"./cart-store-c33a331e.js";import"./index-0418a9fc.js";const i=class{constructor(s){t(this,s)}componentWillLoad(){const t=()=>{this.insured=Object.entries(o.get("insured")),this.enabled=Object.keys(o.get("easyprotect")).length>0};o.onChange("insured",t),o.onChange("easyprotect",t),t()}render(){return s(e,{class:this.enabled?"":"hidden"},s("div",{class:"top"},s("div",{class:"content"},s("slot",null)),s("ks-img2",{src:this.image,width:this.width,height:this.height})),s("div",{class:"insured"},this.insured.map((([t,e])=>s("ks-cart-easyprotect-warranty",{insured:!0,"product-id":t,active:e})))),s("slot",{name:"bottom"}))}get root(){return a(this)}};i.style="ks-cart-easyprotect{display:block;padding:30px}ks-cart-easyprotect.hidden{display:none}ks-cart-easyprotect .top{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;position:relative}ks-cart-easyprotect .top .content{-ms-flex:1 1 auto;flex:1 1 auto}ks-cart-easyprotect .top .content h2{font-size:22px;text-transform:uppercase;font-family:var(--font-emphasis);font-weight:700}ks-cart-easyprotect .top ks-img2{max-width:120px;width:100%;margin-left:10px}ks-cart-easyprotect .insured{margin-top:10px}ks-cart-easyprotect .insured .item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:10px;font-family:var(--font-emphasis);background-color:#f2f2f2;padding:5px 10px}ks-cart-easyprotect .insured .item .name{-ms-flex:1 1 auto;flex:1 1 auto;padding:5px;background-color:#f2f2f2;font-size:16px}ks-cart-easyprotect .insured .item .option{margin:0 10px;font-size:17px;font-weight:700}ks-cart-easyprotect .addproducts .content{padding:20px 20px 0 20px}@media (max-width: 960px){ks-cart-easyprotect{padding:15px}}@media (max-width: 640px){ks-cart-easyprotect .top ks-img2{position:absolute;top:-5px;right:0;max-width:40px;max-height:40px}ks-cart-easyprotect .top .content{font-size:15px}}";export{i as ks_cart_easyprotect}