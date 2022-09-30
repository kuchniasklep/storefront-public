import{r as t,h as e,H as o,c as a}from"./index-e6122d86.js";import{c as s}from"./cart-8097fe00.js";import{g as i}from"./cart-07af8f9a.js";import"./index-299fb9fe.js";import"./fetch-bbb23998.js";const r=class{constructor(e){t(this,e)}componentWillLoad(){const t=()=>{this.insured=Object.entries(s.get("insured")),this.enabled=Object.keys(s.get("easyprotect")).length>0};s.onChange("insured",t),s.onChange("easyprotect",t),t()}render(){return e(o,{class:this.enabled?"":"hidden"},e("div",{class:"top"},e("div",{class:"content"},e("slot",null)),e("ks-img2",{src:this.image,width:this.width,height:this.height})),e("div",{class:"insured"},this.insured.map((([t,o])=>e("ks-cart-easyprotect-warranty",{insured:!0,"product-id":t,active:o})))),e("slot",{name:"bottom"}))}get root(){return a(this)}};r.style="ks-cart-easyprotect{display:block;padding:30px}ks-cart-easyprotect.hidden{display:none}ks-cart-easyprotect .top{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;position:relative}ks-cart-easyprotect .top .content{-ms-flex:1 1 auto;flex:1 1 auto}ks-cart-easyprotect .top .content h2{font-size:22px;text-transform:uppercase;font-family:var(--font-emphasis);font-weight:700}ks-cart-easyprotect .top ks-img2{max-width:120px;width:100%;margin-left:10px}ks-cart-easyprotect .insured{margin-top:10px}ks-cart-easyprotect .insured .item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:10px;font-family:var(--font-emphasis);background-color:#f2f2f2;padding:5px 10px}ks-cart-easyprotect .insured .item .name{-ms-flex:1 1 auto;flex:1 1 auto;padding:5px;background-color:#f2f2f2;font-size:16px}ks-cart-easyprotect .insured .item .option{margin:0 10px;font-size:17px;font-weight:700}ks-cart-easyprotect .addproducts .content{padding:20px 20px 0 20px}@media (max-width: 960px){ks-cart-easyprotect{padding:15px}}@media (max-width: 640px){ks-cart-easyprotect .top ks-img2{position:absolute;top:-5px;right:0;max-width:40px;max-height:40px}ks-cart-easyprotect .top .content{font-size:15px}}";const c=class{constructor(e){t(this,e),this.active=[],this.step=0}componentWillLoad(){const t=()=>{this.updateEligible()};t(),s.onChange("easyprotect",t),s.onChange("insured",t)}componentDidLoad(){this.overlay=this.root.querySelector("ks-overlay")}updateEligible(){const t=Object.keys(s.get("insured")),e=Object.keys(s.get("easyprotect"));this.eligible=e.filter((e=>!t.includes(e)&&void 0!==s.get("products")[e])).map((t=>s.get("products")[t]))}updateStep(){1==this.eligible.length&&(this.active=[this.eligible[0].id],this.step=2)}render(){const t=this.eligible.length>1&&this.step<1?"":"hidden",o=1==this.step?"hide":"",a=1==this.eligible.length||this.step>=2?"":"hidden",s=1==this.step?"hide":"";return[e("ks-button",{tall:!0,name:"Dodaj gwarancję",onClick:()=>this.show(),class:this.eligible.length>0?null:"hidden"}),e("ks-overlay",null,e("div",{class:`content ${t} ${o}`},this.products()),e("div",{class:`content ${a} ${s}`},this.warranty()))]}products(){return e("div",{class:"products"},e("slot",{name:"products"}),e("div",{class:"items"},this.eligible.map((t=>e("ks-cart-easyprotect-product",{image:t.img,name:t.name,warranty:t.warranty,onClick:()=>this.toggle(t.id),active:this.active.includes(t.id)})))),e("ks-button",{tall:!0,name:"Przejdź dalej",onClick:()=>this.addProducts(),disabled:this.active.length<=0}),e("div",{class:"close",onClick:()=>this.hide()},e("ks-icon",{name:"x",size:1.2})))}warranty(){const t=Object.keys(s.get("easyprotect")).filter((t=>this.active.includes(t)));return[e("div",{class:"warranty"},e("slot",{name:"warranty"}),e("div",{class:"items"},t.map((t=>e("ks-cart-easyprotect-warranty",{"product-id":t})))),e("ks-button",{tall:!0,name:"Dodaj gwarancję",onClick:()=>this.addWarranty(),disabled:this.active.length<=0}),e("div",{class:"close",onClick:()=>this.hide()},e("ks-icon",{name:"x",size:1.2})),this.eligible.length>1?e("div",{class:"back",onClick:()=>this.back()},e("ks-icon",{name:"chevron-left",size:1.2})):null),3==this.step?e("div",{class:"loading"},e("ks-loader",{large:!0,dark:!0})):null]}toggle(t){const e=this.active.findIndex((e=>e==t));-1!==e?this.active.splice(e,1):this.active.push(t),this.active=[...this.active]}show(){this.updateEligible(),this.updateStep(),this.overlay.show()}hide(){this.overlay.hide(),setTimeout((()=>{this.step=0}),300)}addProducts(){this.step=1,setTimeout((()=>{this.step=2}),200)}back(){this.step=1,setTimeout((()=>{this.step=0}),200)}async addWarranty(){this.step=3,this.overlay.close=!1;let t={};this.root.querySelectorAll(".warranty .items ks-cart-easyprotect-warranty").forEach((e=>{t[e.getAttribute("product-id")]=e.getAttribute("active")}));let e=!1,o=!1;setTimeout((()=>{o=!0,e&&this.end()}),500),i(t).then((()=>{e=!0,o&&this.end()}))}end(){this.overlay.hide(),setTimeout((()=>{this.overlay.close=!0,this.step=0,this.active=[]}),300)}get root(){return a(this)}};c.style="ks-cart-easyprotect-dialog{display:block}ks-cart-easyprotect-dialog .hidden{display:none}ks-cart-easyprotect-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;width:100%}ks-cart-easyprotect-dialog .content h2{font-size:24px;font-weight:700;text-align:center;margin-top:30px}ks-cart-easyprotect-dialog .content p{text-align:center;margin:10px 10px 20px 10px}ks-cart-easyprotect-dialog .content>.products .items{padding:10px 20px;max-height:320px;overflow-y:auto}ks-cart-easyprotect-dialog .content>.warranty .items{padding:0 20px 0 20px;max-height:270px;overflow-y:auto}ks-cart-easyprotect-dialog .content.hidden{display:none}ks-cart-easyprotect-dialog .content.hide{opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-cart-easyprotect-dialog ks-button{z-index:20;position:relative;margin-top:20px;-webkit-box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);border-top:#8057c1 1px solid}ks-cart-easyprotect-dialog ks-button[disabled]{border-top:#bebebe 1px solid}ks-cart-easyprotect-dialog ks-button button{background-color:var(--easyprotect-color);border-color:var(--easyprotect-color)}ks-cart-easyprotect-dialog ks-button button:hover{background-color:var(--easyprotect-color-hover) !important;border-color:var(--easyprotect-color-hover) !important}ks-cart-easyprotect-dialog ks-button button:active{background-color:var(--easyprotect-color-active) !important;border-color:var(--easyprotect-color-active) !important}ks-cart-easyprotect-dialog ks-button[disabled] button{background-color:#e2e2e2 !important;border-color:#e2e2e2 !important;color:#3d3d3d !important;cursor:auto}ks-cart-easyprotect-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-cart-easyprotect-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}@media (max-width: 720px){ks-cart-easyprotect-dialog .content{height:100%}ks-cart-easyprotect-dialog .content>.products,ks-cart-easyprotect-dialog .content>.warranty{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;max-height:100%;padding:0}ks-cart-easyprotect-dialog .content>.products>.items,ks-cart-easyprotect-dialog .content>.warranty>.items{padding:0 10px 0 10px;max-height:none}ks-cart-easyprotect-dialog ks-button{margin-top:auto}ks-cart-easyprotect-dialog .content p{margin:5px 10px 15px 10px}}@media (max-width: 420px){ks-cart-easyprotect-dialog .content h2{font-size:20px;margin:20px 10px 10px 10px}ks-cart-easyprotect-dialog .content p{font-size:15px}}ks-cart-easyprotect-dialog .content .close,ks-cart-easyprotect-dialog .content .back{position:absolute;top:20px;z-index:20;border-radius:50px;padding:10px;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-cart-easyprotect-dialog .content .close:hover,ks-cart-easyprotect-dialog .content .back:hover{background-color:#f2f2f2}ks-cart-easyprotect-dialog .content .close:active,ks-cart-easyprotect-dialog .content .back:active{background-color:#dbdbdb}ks-cart-easyprotect-dialog .content .close{right:20px}ks-cart-easyprotect-dialog .content .back{left:20px}@media (max-width: 420px){ks-cart-easyprotect-dialog .content .close,ks-cart-easyprotect-dialog .content .back{padding:3px;top:17px}ks-cart-easyprotect-dialog .content .close{right:8px}ks-cart-easyprotect-dialog .content .back{left:8px}}ks-cart-easyprotect-dialog .content .loading{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:white;-webkit-animation:fade-in 0.3s ease;animation:fade-in 0.3s ease}";const n=class{constructor(e){t(this,e)}componentWillLoad(){const t=()=>{this.enabled=s.get("recycle").length>0};s.onChange("recycle",t),t()}send(t){var e=new Headers;e.append("pragma","no-cache"),e.append("cache-control","no-cache");const o=this.root.querySelector("form");t.preventDefault();const a=new FormData(o);fetch(s.get("api").recycleChange,{method:"POST",headers:e,credentials:"same-origin",body:a})}render(){return e(o,{class:this.enabled?"":"hidden"},e("slot",null),e("form",{method:"post",name:"recycle",onChange:t=>this.send(t)},s.get("recycle").map((t=>e("ks-input-check",{name:`recycle[${t.id}]`,value:t.name,label:t.name,checked:t.checked})))))}get root(){return a(this)}};n.style="ks-cart-recycle{display:block;padding:30px}ks-cart-recycle h2{font-size:22px;text-transform:uppercase;font-family:var(--font-emphasis);font-weight:700;margin-top:20px}ks-cart-recycle.hidden{display:none}@media (max-width: 960px){ks-cart-recycle{padding:15px}}";export{r as ks_cart_easyprotect,c as ks_cart_easyprotect_dialog,n as ks_cart_recycle}