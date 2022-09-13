import{r as t,h as r}from"./index-e6122d86.js";import{a as o}from"./addToCart-8b6fcea2.js";import{r as i,a}from"./favourites-dad4cde6.js";import{c}from"./common-94544765.js";import"./tracker-1877ab42.js";import"./index-299fb9fe.js";import"./commonDynamic-04bad578.js";import"./fetch-e286f059.js";const s=class{constructor(r){t(this,r),this.unavailable=!1,this.linkOnly=!1,this.cartLoading=!1,this.favLoading=!1,this.favSuccess=!1}cart(){this.cartLoading=!0;const t=JSON.parse(this.categories),r={id:this.productId,traitIDs:"",sku:this.sku,name:this.name,link:this.link,image:this.img,imageFull:this.imgFull,currentPrice:parseFloat(this.currentPrice),quantity:1,currency:this.currency,categories:t};o(r,1).then((()=>this.cartLoading=!1))}favourites(){this.favLoading||(this.favLoading=!0,this.favSuccess?(this.favSuccess=!1,i(this.productId).then((()=>{this.favLoading=!1}))):a(this.productId).then((()=>{this.favSuccess=!0,setTimeout((()=>this.favLoading=!1),200)})))}render(){const t=c.get("translations");return[r("a",{href:this.link,"aria-label":this.name,class:"top"},r("ks-img2",{fill:!0,limit:!0,center:!0,src:this.img,webp:this.webp,width:280,height:280,alt:this.name}),r("span",null,this.name)),r("div",{class:"price"},this.previousPrice?r("s",{class:"previous"},this.previousPrice," zł"):null,r("span",{class:"current"},this.currentPrice," zł")),r("div",{class:"bottom"},this.unavailable?r("a",{href:this.link,class:"unavailable"},t.unavailable):this.linkOnly?r("a",{href:this.link,class:"link"},t.seeMore):[r("button",{class:"fav",onClick:()=>this.favourites()},this.favLoading?r("ks-loader",null):r("ks-icon",{name:"star"}),this.favSuccess?r("div",{class:"success"},r("ks-icon",{name:"check"})):null),r("button",{class:"cart",onClick:()=>this.cart()},this.cartLoading?r("ks-loader",{large:!0}):r("span",null,t.addToCart))])]}};s.style="ks-product-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;text-align:center;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}@media (min-width: 360px){ks-product-card{width:calc(50% - 15px)}}@media (min-width: 640px){ks-product-card{width:228px}}ks-product-card .top{display:block;padding:15px;min-height:200px;color:inherit !important;text-decoration:none !important;font-size:14px}ks-product-card ks-img2{height:auto;margin-bottom:10px;max-width:100%}ks-product-card .price>*{display:block;font-family:var(--font-emphasis)}ks-product-card .price .previous{color:#888888;font-size:15px}ks-product-card .price .current{color:var(--color-secondary);font-weight:bold;font-size:17px}ks-product-card .bottom{display:-ms-flexbox;display:flex;margin-top:10px}ks-product-card .bottom .unavailable,ks-product-card .bottom .link{display:block;width:100%;padding:10px 10px;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;color:white;background-color:var(--color-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .bottom .unavailable{color:#252525;background-color:#f1f1f1}ks-product-card .bottom .link:hover{background-color:var(--color-secondary-hover)}ks-product-card .bottom .link:active{background-color:var(--color-secondary-active)}ks-product-card[unavailable] .top,ks-product-card[unavailable] .price{opacity:0.6}ks-product-card[unavailable] .price .current{color:#252525}@media (max-width: 420px){ks-product-card .top{font-size:13px;padding:8px}ks-product-card .price{line-height:18px}}ks-product-card .cart{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;font-family:var(--font-regular);outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-primary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .cart:hover{background-color:var(--product-card-primary-hover)}ks-product-card .cart:active{background-color:var(--product-card-primary-active)}ks-product-card .fav{position:relative;display:block;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .fav:hover{background-color:var(--product-card-secondary-hover)}ks-product-card .fav:active{background-color:var(--product-card-secondary-active)}ks-product-card .fav .success{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--product-card-secondary);-webkit-animation:fade-in 0.2s 1;animation:fade-in 0.2s 1}";const n=class{constructor(r){t(this,r)}render(){return r("slot",null)}};n.style="ks-product-container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center;-ms-flex-align:stretch;align-items:stretch;margin-left:-15px;margin-top:-15px;padding:0 10px}ks-product-container>*{margin-left:15px;margin-top:15px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 360px) and (max-width: 640px){ks-product-container>*{width:50%}}@media (min-width: 640px){ks-product-container>*{width:228px}}";export{s as ks_product_card,n as ks_product_container}