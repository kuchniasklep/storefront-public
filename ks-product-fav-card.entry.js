import{r as t,h as r}from"./index-abcf82c7.js";import{a}from"./addToCart-720f350d.js";import{r as o}from"./favourites-848e3a4f.js";import{c as s}from"./common-7de2ffe1.js";import{p as i}from"./price-2c4e4fa0.js";import"./tracker-f8c9914d.js";import"./index-0418a9fc.js";import"./commonDynamic-57975e8d.js";import"./fetch-bbb23998.js";const c=class{constructor(r){t(this,r),this.unavailable=!1,this.linkOnly=!1,this.cartLoading=!1,this.favLoading=!1,this.favSuccess=!1}cart(){this.cartLoading=!0;const t=JSON.parse(this.categories);a({id:this.productId,traitIDs:"",sku:this.sku,name:this.name,link:this.link,image:this.img,imageFull:this.imgFull,currentPrice:this.currentPrice,quantity:1,currency:this.currency,categories:t},1).then((()=>this.cartLoading=!1))}favourites(){this.favLoading||(this.favLoading=!0,o(this.productId).then((()=>{location.reload()})))}render(){const t=s.get("translations"),a=i(this.currentPrice),o=i(this.previousPrice);return[r("a",{href:this.link,"aria-label":this.name},r("div",{class:"image"},r("ks-img2",{fill:!0,limit:!0,center:!0,src:this.img,webp:this.webp,width:280,height:280,alt:this.name})),r("div",{class:"info"},r("h3",null,this.name),r("div",{class:"price"},r("span",{class:"current"},a),this.previousPrice?r("s",{class:"previous"},o):null),this.summary?r("p",null,this.summary):null)),r("div",{class:"buttons"},r("button",{class:"fav",onClick:()=>this.favourites()},this.favLoading?r("ks-loader",null):r("ks-icon",{name:"x"})),r("button",{disabled:this.unavailable,class:"cart",onClick:()=>this.cart()},this.cartLoading?r("ks-loader",null):[r("ks-icon",{name:"shopping-bag"}),r("span",null,this.unavailable?t.unavailable:t.addToCart)]))]}};c.style="ks-product-fav-card{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-wrap:nowrap;flex-wrap:nowrap}ks-product-fav-card>a{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;text-decoration:none !important;color:#000 !important}ks-product-fav-card .image{max-height:180px;max-width:180px;margin-right:20px}ks-product-fav-card h3{font-family:var(--font-emphasis);margin-bottom:5px;font-size:20px}ks-product-fav-card p{font-size:15px}ks-product-fav-card .price{font-size:18px;font-family:var(--font-emphasis)}ks-product-fav-card .price .current{font-weight:700;color:var(--color-secondary)}ks-product-fav-card .price .previous{margin:0px 10px;color:#909090}ks-product-fav-card .buttons{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:10px 0px;margin-left:10px}ks-product-fav-card .buttons button{background-color:var(--color-secondary);color:white;border-style:none;width:50px;height:100%;position:relative;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-product-fav-card .buttons button:hover{background-color:var(--color-secondary-hover)}ks-product-fav-card .buttons button:active{background-color:var(--color-secondary-active)}ks-product-fav-card .buttons .cart{border-top:solid 1px var(--color-secondary-darker)}ks-product-fav-card .buttons .cart span{display:none}ks-product-fav-card[unavailable] .buttons .cart{border-top:none;background-color:var(--color-faded);color:var(--color-faded-text)}@media screen and (max-width: 750px){ks-product-fav-card p{display:none}}@media screen and (max-width: 550px){ks-product-fav-card{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}ks-product-fav-card>a{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}ks-product-fav-card .image{margin:0}ks-product-fav-card .buttons{-ms-flex-direction:row;flex-direction:row;margin:0;width:100%}ks-product-fav-card .buttons button{height:40px}ks-product-fav-card .buttons .fav{-ms-flex:1 0 40px;flex:1 0 40px;width:40px;border-radius:100px;margin-right:5px}ks-product-fav-card .buttons .cart{width:100%;border-radius:10px}ks-product-fav-card .buttons .cart ks-icon{display:none}ks-product-fav-card .buttons .cart span{display:inline}}";export{c as ks_product_fav_card}