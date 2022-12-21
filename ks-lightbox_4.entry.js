import{r as e,h as i,g as t,B as r}from"./index-b2de1977.js";import{S as s,P as o,T as a}from"./thumbs-0eaf3675.js";import{p as n}from"./product-3b8233ee.js";import"./index-bca22170.js";s.use([o,a]);const c=class{constructor(i){e(this,i)}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(e=0){this.overlay.show().then((()=>{var i;null==this.carousel&&(this.thumbs=new s(".lightbox-thumb",{observer:!0,observeParents:!0,grabCursor:!0,slidesPerView:"auto",centerInsufficientSlides:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,spaceBetween:10,resistanceRatio:.7}),this.carousel=new s(".lightbox-full",{observer:!0,observeParents:!0,centeredSlides:!0,slidesPerView:"auto",spaceBetween:20,preventInteractionOnTransition:!0,thumbs:{swiper:this.thumbs},pagination:{el:".swiper-pagination"}})),null===(i=this.carousel)||void 0===i||i.slideTo(e,0,!1)}))}async hide(){this.overlay.hide()}render(){return i("ks-overlay",{dark:!0},i("div",{class:"content"},i("div",{class:"swiper-container lightbox-full"},i("div",{class:"swiper-wrapper"},this.data.map((e=>i("div",{class:"swiper-slide"},i("ks-img",{contained:!0,center:!0,target:".lightbox-full",src:e.full.url,width:e.full.width,height:e.full.height}))))),i("div",{class:"swiper-pagination"})),i("div",{class:"swiper-container lightbox-thumb"},i("div",{class:"swiper-wrapper"},this.data.map((e=>i("div",{class:"swiper-slide"},i("ks-img",{contained:!0,center:!0,src:e.thumb.url,width:e.thumb.width,height:e.thumb.height}))))))),i("div",{class:"close",onClick:()=>this.overlay.hide()},i("ks-icon",{name:"x",size:1.2})))}get root(){return t(this)}};c.style="ks-lightbox{display:block}ks-lightbox .content{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;padding:10px;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-lightbox .close{position:absolute;top:15px;right:15px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color);border-radius:100%;padding:5px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;z-index:1000000;transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;-webkit-transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease,\n                -webkit-transform 0.1s ease}ks-lightbox .close:hover{background-color:var(--lightbox-element-color-hover);-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05)}ks-lightbox .close:active{background-color:var(--lightbox-element-color-active);-webkit-transform:scale(0.95, 0.95);transform:scale(0.95, 0.95)}ks-lightbox .lightbox-full{width:100%;-ms-flex:1;flex:1}ks-lightbox .lightbox-thumb{margin-top:10px;width:100%}ks-lightbox .lightbox-thumb .swiper-slide{height:70px;width:70px;overflow:hidden;opacity:0.6;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-lightbox .lightbox-thumb .swiper-slide:hover{opacity:0.8}ks-lightbox .lightbox-thumb .swiper-slide-thumb-active{opacity:1 !important}ks-lightbox .swiper-pagination{display:none}ks-lightbox .swiper-pagination{bottom:0px !important;padding:5px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color)}ks-lightbox .swiper-pagination-bullet{background-color:#ffffff}ks-lightbox .swiper-pagination-bullet-active{background-color:#ffffff}@media only screen and (max-width: 720px){ks-lightbox .content{padding:0}ks-lightbox .swiper-pagination{display:block}ks-lightbox .lightbox-thumb{display:none !important}ks-lightbox .lightbox-full .swiper-slide ks-img img{border-radius:0px}}",s.use([a]);const l=class{constructor(i){e(this,i),this.delay=0,this.loaded=!1,this.rendered=!1}componentDidLoad(){this.rendered||(this.rendered=!0,r.isBrowser&&this.initialize())}initialize(){const e=n.get("images").length>1;e&&(this.thumbs=new s(".thumb",{observer:!0,observeParents:!0,grabCursor:!0,slidesPerView:"auto",preventInteractionOnTransition:!0,centerInsufficientSlides:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,spaceBetween:3,on:{init:()=>{this.loaded=!0}}})),this.carousel=new s(".preview",{observer:!0,observeParents:!0,spaceBetween:30,grabCursor:!0,autoHeight:!0,thumbs:e?{swiper:this.thumbs}:void 0})}showLightbox(e){this.root.querySelector("ks-lightbox").show(e)}render(){return[i("div",{class:"swiper-container preview swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-autoheight"},i("div",{class:"swiper-wrapper"},n.get("images").map(((e,t)=>i("div",{class:["swiper-slide",0==t?"swiper-slide-active":null,1==t?"swiper-slide-next":null].join(" ")},i("ks-img2",{fill:!0,sync:0==t,src:e.preview.url,webp:e.preview.webp,width:e.preview.width,height:e.preview.height,onClick:()=>this.showLightbox(t)})))))),n.get("images").length>1?i("div",{class:"swiper-container thumb swiper-container-horizontal swiper-container-pointer-events swiper-container-thumbs"},i("ks-loader",{dark:!0}),i("div",{class:"swiper-wrapper"},n.get("images").map(((e,t)=>i("div",{class:["swiper-slide swiper-slide-visible",0==t?"swiper-slide-active swiper-slide-thumb-active":null,1==t?"swiper-slide-next":null].join(" ")},i("ks-img2",{sync:t<6,src:e.thumb.url,webp:e.thumb.webp,width:e.thumb.width,height:e.thumb.height})))))):null,i("ks-lightbox",{data:n.get("images")})]}get root(){return t(this)}};l.style='ks-product-images{display:block;margin-right:30px}ks-product-images .swiper-slide{position:relative;text-align:center}ks-product-images .swiper-slide canvas{max-width:100%;max-height:450px}ks-product-images .preview ks-img2{max-width:100%;max-height:450px}ks-product-images .preview .swiper-slide:not(.swiper-slide-active){display:none}ks-product-images[loaded] .preview .swiper-slide:not(.swiper-slide-active){display:block}ks-product-images .thumb{margin-top:20px;min-height:70px;position:relative}ks-product-images[loaded] .thumb>ks-loader{display:none}ks-product-images .thumb::after{content:"";position:absolute;top:0;bottom:0;right:0;left:-30px;background:-webkit-gradient(linear, left top, right top, from(rgba(255,255,255,0)), color-stop(85%, rgba(255,255,255,0)), to(rgba(255,255,255,1)));background:linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 100%);z-index:2;pointer-events:none}ks-product-images .thumb .swiper-slide{width:70px;height:70px;opacity:0.4;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-images .thumb .swiper-slide-thumb-active{opacity:1}@media only screen and (max-width: 959px){ks-product-images{margin-right:0px;margin-top:30px}ks-product-images .thumb{margin-bottom:0px}}@media only screen and (max-width: 460px){ks-product-images .swiper-slide canvas{max-height:300px}ks-product-images .preview ks-img2{max-height:300px}}ks-product-images .preview:not(.swiper-container-initialized) .swiper-slide:nth-child(n+2){display:none}ks-product-images .thumb .swiper-wrapper{opacity:1;-webkit-animation:fade-in 0.3s ease;animation:fade-in 0.3s ease}ks-product-images .thumb:not(.swiper-container-initialized) .swiper-wrapper{opacity:0;-webkit-animation:none;animation:none}';const p=class{constructor(i){e(this,i)}render(){const e=n.get("previousPrice").replace(".",","),t=n.get("currentPrice").replace(".",",");return[i("div",{class:"current"},t),i("div",{class:"currency"},"zł"),e?i("div",{class:"previous"},e):null]}};p.style='ks-product-price{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:10px 0 20px;font-family:var(--product-price-font);font-weight:700}ks-product-price .previous{display:inline-block;color:var(--color-faded);font-size:var(--product-price-size);line-height:var(--product-price-size);position:relative;margin-left:15px}ks-product-price .previous::after{background-color:var(--color-faded);content:"";height:0.1em;left:-3px;right:-3px;position:absolute;top:46%}ks-product-price .current{color:var(--color-secondary);font-size:var(--product-price-size-emphasis);line-height:var(--product-price-size)}@media only screen and (max-width: 560px){ks-product-price .price{display:block;width:100%;margin-bottom:20px;margin-right:0px;text-align:center}}ks-product-price .currency{width:15px;height:15px;padding:5px;line-height:13px;margin:1px 0 0 10px;border-radius:30px;background-color:var(--color-secondary);color:white;font-family:var(--product-price-font);text-align:center;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}';const d=class{constructor(i){e(this,i),this.brandLink=!1}render(){const e=n.get("name"),t=n.get("brand");let r=i("h1",null,e);if(this.brandLink&&t){const s=t.name.length,o=t.link,a=this.brandIndex();if(-1!==a){const t=e.substr(0,a),n=e.substr(a,s),c=e.substr(a+s);r=i("h1",null,t,i("a",{href:o},n),c)}}return[i("div",{class:"breadcrumbs"},n.get("breadcrumbs").map((e=>i("a",{href:e.link},e.name," ")))),r]}brandIndex(){return n.get("name").toLowerCase().indexOf(n.get("brand").name.toLowerCase())}};d.style='ks-product-title{display:block}ks-product-title h1{font-family:var(--product-title-font);font-size:var(--product-title-size);color:var(--product-title-color);font-weight:700;margin-bottom:2px}ks-product-title h1>a{text-decoration:none !important;color:var(--product-title-brand-color) !important;opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-title h1>a:hover{opacity:0.7}ks-product-title h1>a:active{opacity:0.5}ks-product-title>.breadcrumbs>a{font-family:var(--product-breadcrumb-font);font-size:14px !important;color:var(--product-breadcrumb-color);text-decoration:none}ks-product-title>.breadcrumbs>a:not(:last-child):after{content:"/";color:var(--product-breadcrumb-color);margin:0 15px}ks-product-title>.breadcrumbs>a:focus{color:var(--product-breadcrumb-color)}ks-product-title>.breadcrumbs>a:hover{color:var(--product-breadcrumb-color-hover)}ks-product-title>.breadcrumbs>a:active{color:var(--product-breadcrumb-color-active)}@media only screen and (max-width: 960px){ks-product-title{text-align:center}}@media only screen and (max-width: 1100px){ks-product-title>.breadcrumbs+*{font-size:var(--product-title-size-small)}}@media only screen and (max-width: 460px){ks-product-title>.breadcrumbs{margin-bottom:10px}ks-product-title>.breadcrumbs>a{font-size:14px}ks-product-title>.breadcrumbs>a:not(:last-child):after{margin:0 10px}}';export{c as ks_lightbox,l as ks_product_images,p as ks_product_price,d as ks_product_title}