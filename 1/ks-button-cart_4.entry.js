import{r as t,h as o,g as r}from"./index-e340c957.js";import{a,F as i}from"./addToCart-851a79c7.js";import{R as n,A as s}from"./functions-fd2941a9.js";import{c as e}from"./common-0beafac0.js";import"./tracker-a4a7c425.js";import"./index-689756ca.js";import"./commonDynamic-af59da31.js";let c=class{constructor(o){t(this,o),this.count="1",this.traits="",this.expand=!1,this.padding=!1,this.icon=!1,this.product=!1,this.loading=!1}ClickHandler(t){this.disabled||this.loading||this.cart(t||this.count)}async fetch(t,o){const r=new Headers;return r.append("pragma","no-cache"),r.append("cache-control","no-cache"),fetch(t,{method:"POST",body:o,headers:r,credentials:"same-origin"}).then((t=>{if(!t.ok)throw{name:t.status,message:t.statusText};return t}))}async cart(t){this.loading=!0,await a(this.productId,t,this.name,this.price,this.traits,1,this.url),this.loading=!1}async AddToCart(t){this.ClickHandler(t)}async SetCount(t){this.count=t}render(){return o("button",{"aria-label":"Do koszyka",disabled:this.disabled,onClick:()=>this.ClickHandler()},this.loading?o("ks-loader",{large:!0}):this.icon?o("ks-icon",{name:"shopping-bag",size:.9}):o("span",null,"DO KOSZYKA"))}get root(){return r(this)}};c.style="ks-button-cart{display:block;height:100%}ks-button-cart[expand]{-ms-flex:1;flex:1}ks-button-cart[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-cart[padding] button{padding:10px;min-height:60px}}ks-button-cart button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;font-family:var(--font-regular);outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-primary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-cart button:hover{background-color:var(--product-card-primary-hover)}ks-button-cart button:active{background-color:var(--product-card-primary-active)}ks-button-cart[disabled] button{background-color:var(--product-card-disabled-color) !important;color:var(--product-card-disabled-text) !important}";let d=class{constructor(o){t(this,o),this.subtract=!1,this.expand=!1,this.padding=!1,this.loading=!1,this.success=!1}ClickHandler(){this.loading||this.success||(this.loading=!0,this.subtract?n(this.productId,(()=>this.ResultHandler())):s(this.productId,(()=>this.ResultHandler())))}ResultHandler(){this.loading=!0,this.success=!0;const t=document.querySelector("ks-navbar");this.subtract&&t.DecrementHeart()}render(){return o("button",{"aria-label":"Do koszyka",onClick:()=>this.ClickHandler()},this.loading?o("ks-loader",null):o("ks-icon",{name:this.subtract?"x":"star"}),this.success?o("div",{class:"success"},o("ks-icon",{name:"check"})):null)}get root(){return r(this)}};d.style="ks-button-fav{display:block;height:100%}ks-button-fav[expand]{-ms-flex:1;flex:1}ks-button-fav[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-fav[padding] button{min-height:60px;padding:10px}}ks-button-fav button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-fav button:hover{background-color:var(--product-card-secondary-hover)}ks-button-fav button:active{background-color:var(--product-card-secondary-active)}ks-button-fav .success{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--product-card-secondary);-webkit-animation:fade-in 0.2s 1;animation:fade-in 0.2s 1}";let l=class{constructor(o){t(this,o),this.unavailable=!1,this.linkOnly=!1,this.cartLoading=!1,this.favLoading=!1,this.favSuccess=!1}cart(){this.cartLoading=!0,a(this.productId,1,this.name,this.currentPrice,"",1,this.link).then((()=>this.cartLoading=!1))}favourites(){this.favLoading||(this.favLoading=!0,this.favSuccess?(this.favSuccess=!1,async function(t){const o=document.querySelector("ks-error-popup"),r=document.querySelector("ks-navbar");let a=new FormData;a.append("id",t),a.append("akcja","usun");const n=e.get("api").removeFromFavourites;return i(n,a).then((()=>r.DecrementHeart())).catch((t=>o.show(t)))}(this.productId).then((()=>{this.favLoading=!1}))):async function(t){const o=document.querySelector("ks-error-popup"),r=document.querySelector("ks-navbar");let a=new FormData;a.append("id",t);const n=e.get("api").addToFavourites;return i(n,a).then((()=>r.IncrementHeart())).catch((t=>o.show(t)))}(this.productId).then((()=>{this.favSuccess=!0,setTimeout((()=>this.favLoading=!1),200)})))}render(){const t=this.currentPrice?this.currentPrice.toFixed(2)+" zł":"",r=this.previousPrice?this.previousPrice.toFixed(2)+" zł":"",a=e.get("translations");return[o("a",{href:this.link,"aria-label":this.name,class:"top"},o("ks-img2",{fill:!0,limit:!0,center:!0,src:this.img,webp:this.webp,width:280,height:280,alt:this.name}),o("span",null,this.name)),o("div",{class:"price"},this.previousPrice?o("s",{class:"previous"},r):null,o("span",{class:"current"},t)),o("div",{class:"bottom"},this.unavailable?o("a",{href:this.link,class:"unavailable"},a.unavailable):this.linkOnly?o("a",{href:this.link,class:"link"},a.seeMore):[o("button",{class:"fav",onClick:()=>this.favourites()},this.favLoading?o("ks-loader",null):o("ks-icon",{name:"star"}),this.favSuccess?o("div",{class:"success"},o("ks-icon",{name:"check"})):null),o("button",{class:"cart",onClick:()=>this.cart()},this.cartLoading?o("ks-loader",{large:!0}):o("span",null,a.addToCart))])]}};l.style="ks-product-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;text-align:center;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}@media (min-width: 360px){ks-product-card{width:calc(50% - 15px)}}@media (min-width: 640px){ks-product-card{width:228px}}ks-product-card .top{display:block;padding:15px;min-height:200px;color:inherit !important;text-decoration:none !important;font-size:14px}ks-product-card ks-img2{height:auto;margin-bottom:10px;max-width:100%}ks-product-card .price>*{display:block;font-family:var(--font-emphasis)}ks-product-card .price .previous{color:#888888;font-size:15px}ks-product-card .price .current{color:var(--color-secondary);font-weight:bold;font-size:17px}ks-product-card .bottom{display:-ms-flexbox;display:flex;margin-top:10px}ks-product-card .bottom .unavailable,ks-product-card .bottom .link{display:block;width:100%;padding:10px 10px;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;color:white;background-color:var(--color-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .bottom .unavailable{color:#252525;background-color:#f1f1f1}ks-product-card .bottom .link:hover{background-color:var(--color-secondary-hover)}ks-product-card .bottom .link:active{background-color:var(--color-secondary-active)}ks-product-card[unavailable] .top,ks-product-card[unavailable] .price{opacity:0.6}ks-product-card[unavailable] .price .current{color:#252525}@media (max-width: 420px){ks-product-card .top{font-size:13px;padding:8px}ks-product-card .price{line-height:18px}}ks-product-card .cart{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;font-family:var(--font-regular);outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-primary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .cart:hover{background-color:var(--product-card-primary-hover)}ks-product-card .cart:active{background-color:var(--product-card-primary-active)}ks-product-card .fav{position:relative;display:block;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .fav:hover{background-color:var(--product-card-secondary-hover)}ks-product-card .fav:active{background-color:var(--product-card-secondary-active)}ks-product-card .fav .success{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--product-card-secondary);-webkit-animation:fade-in 0.2s 1;animation:fade-in 0.2s 1}";let p=class{constructor(o){t(this,o)}render(){return o("slot",null)}};p.style="ks-product-container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center;-ms-flex-align:stretch;align-items:stretch;margin-left:-15px;margin-top:-15px;padding:0 10px}ks-product-container>*{margin-left:15px;margin-top:15px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 360px) and (max-width: 640px){ks-product-container>*{width:50%}}@media (min-width: 640px){ks-product-container>*{width:228px}}";export{c as ks_button_cart,d as ks_button_fav,l as ks_product_card,p as ks_product_container}