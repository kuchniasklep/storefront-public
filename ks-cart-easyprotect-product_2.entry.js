import{r as t,h as e,c as r}from"./index-e6122d86.js";import{c as a}from"./cart-8097fe00.js";import{g as s,h as o}from"./cart-07af8f9a.js";import{p as i}from"./price-e6339999.js";import"./index-299fb9fe.js";import"./fetch-bbb23998.js";import"./common-866eee8e.js";const n=class{constructor(e){t(this,e),this.warranty="",this.active=!1}render(){return[e("div",{class:"image"},e("ks-img2",{src:this.image,width:200,height:200})),e("div",{class:"info"},e("div",{class:"name",innerHTML:this.name}),this.warranty?e("div",{class:"warranty"},this.warranty):null)]}};n.style="ks-cart-easyprotect-product{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}ks-cart-easyprotect-product .image{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;max-width:80px;max-height:80px;margin-right:10px}ks-cart-easyprotect-product .info{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;border-radius:10px;padding:10px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:5px 0;min-height:68px;font-family:var(--font-emphasis);-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;background-color:#f2f2f2;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-cart-easyprotect-product:hover .info{background-color:#e2e2e2}ks-cart-easyprotect-product[active] .info{color:white;background-color:#4e2e82}ks-cart-easyprotect-product .info .warranty{font-weight:700}@media (max-width: 420px){ks-cart-easyprotect-product{font-size:15px}ks-cart-easyprotect-product .image{max-width:50px;max-height:50px;margin:0 5px}ks-cart-easyprotect-product .info{padding:8px 10px 8px 15px}ks-cart-easyprotect-product .info .warranty{font-size:14px}}";const c=class{constructor(e){t(this,e)}componentWillLoad(){this.productId&&(this.active||(this.active=Object.keys(a.get("easyprotect")[this.productId])[0]),this.update(),a.onChange("easyprotect",(()=>this.update())))}componentWillUpdate(){this.productId&&(this.root.querySelector("select").value=this.active,this.update())}update(){void 0!==a.get("easyprotect")[this.productId]&&(this.name=a.get("products")[this.productId].name,this.options=a.get("easyprotect")[this.productId],this.entries=Object.entries(this.options),this.price=this.options[this.active])}render(){const t=i(this.price);return[e("div",{class:"name",innerHTML:this.name.replace("<br>"," "),title:this.name.replace("<br>"," ").replace(/(<([^>]+)>)/gi,"")}),e("div",{class:"control"},e("div",{class:"info"},e("div",{class:"select"},this.productId?[e("ks-input-select",{onChange:()=>this.change()},this.entries.map((([t,r])=>e("option",{value:t,selected:this.active==t},this.months(parseInt(t)))))),e("ks-icon",{name:"chevron-down"})]:this.months(this.time)),e("div",{class:"price"},t)),this.productId&&this.insured?e("button",{class:"close",onClick:()=>this.remove()},e("ks-icon",{name:"x"})):null)]}change(){this.active=this.root.querySelector("select").value,this.insured&&s({[this.productId]:this.active})}remove(){o(this.productId)}months(t){const e=parseInt(`${t}`[`${t}`.length-1]);let r="miesięcy";return 0==t?r="miesiąc":t>=5&&t<=21?r="miesięcy":t>21&&e>=2&&e<=4&&(r="miesiące"),`${t} ${r}`}get root(){return r(this)}};c.style='ks-cart-easyprotect-warranty{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;background-color:#f2f2f2;margin-bottom:10px}ks-cart-easyprotect-warranty .name{position:relative;margin:8px 15px;max-height:50px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;font-family:var(--font-emphasis)}ks-cart-easyprotect-warranty .name:after{content:"";position:absolute;top:30px;right:0;width:30%;height:20px;background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(90%, rgb(242, 242, 242)));background:linear-gradient(to right, rgba(255, 255, 255, 0), rgb(242, 242, 242) 90%)}ks-cart-easyprotect-warranty .control{display:-ms-flexbox;display:flex}ks-cart-easyprotect-warranty .info{min-width:135px;font-family:var(--font-emphasis);font-weight:700;background-color:var(--easyprotect-color)}ks-cart-easyprotect-warranty .price{height:40px;min-width:80px;line-height:40px;text-align:center;background-color:#64419c !important;color:#ffffff}ks-cart-easyprotect-warranty .select{position:relative}ks-cart-easyprotect-warranty .select ks-icon{position:absolute;top:8px;right:5px;color:white;pointer-events:none}ks-cart-easyprotect-warranty ks-input-select div{margin-bottom:0 !important;margin-right:3px}ks-cart-easyprotect-warranty ks-input-select select{background-image:none !important;border:none !important;padding-right:30px !important;margin:0 !important;background-color:transparent !important;color:white !important}ks-cart-easyprotect-warranty:not([product-id]) .select{color:white !important;padding:7px 20px}ks-cart-easyprotect-warranty .close{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:40px;border-style:none;outline-style:none;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;background-color:var(--easyprotect-color);color:#ffffff;border-left:#64419c 1px solid}ks-cart-easyprotect-warranty .close ks-icon{line-height:unset !important}ks-cart-easyprotect-warranty .close:hover{background-color:var(--easyprotect-color-hover)}ks-cart-easyprotect-warranty .close:active{background-color:var(--easyprotect-color-active)}@media (min-width: 860px){ks-cart-easyprotect-warranty[insured] .info,ks-cart-easyprotect-warranty:not([product-id]) .info{display:-ms-flexbox;display:flex;min-width:200px}ks-cart-easyprotect-warranty .name{text-overflow:ellipsis;white-space:nowrap;width:100%}ks-cart-easyprotect-warranty .control{-ms-flex:1 0 auto;flex:1 0 auto}}@media (max-width: 420px){ks-cart-easyprotect-warranty{display:inline-block}ks-cart-easyprotect-warranty .info{display:-ms-flexbox;display:flex;width:100%}ks-cart-easyprotect-warranty .select{width:100%}ks-cart-easyprotect-warranty .name{margin:12px 15px}ks-cart-easyprotect-warranty .price{width:50%}}';export{n as ks_cart_easyprotect_product,c as ks_cart_easyprotect_warranty}