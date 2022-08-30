import{r as t,h as o,g as i,e as s}from"./index-6e14abe0.js";import{S as r}from"./core-class-5b6160e1.js";import{P as e}from"./pagination-c9190fdf.js";import{T as n}from"./thumbs-e8e6436d.js";import{p as a}from"./productDynamic-eaaa40fd.js";import{p as d}from"./product-2e422b2b.js";import{F as l}from"./fetch-e286f059.js";import{c}from"./common-92b7ddbf.js";import{c as p}from"./commonDynamic-29131f86.js";import{V as u}from"./validate-cd7ce36d.js";import"./index-a26ba0e6.js";r.use([e,n]);const h=class{constructor(o){t(this,o)}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(t=0){this.overlay.show().then((()=>{var o;null==this.carousel&&(this.thumbs=new r(".lightbox-thumb",{observer:!0,observeParents:!0,grabCursor:!0,slidesPerView:"auto",centerInsufficientSlides:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,spaceBetween:10,resistanceRatio:.7}),this.carousel=new r(".lightbox-full",{observer:!0,observeParents:!0,centeredSlides:!0,slidesPerView:"auto",spaceBetween:20,preventInteractionOnTransition:!0,thumbs:{swiper:this.thumbs},pagination:{el:".swiper-pagination"}})),null===(o=this.carousel)||void 0===o||o.slideTo(t,0,!1)}))}async hide(){this.overlay.hide()}render(){return o("ks-overlay",{dark:!0},o("div",{class:"content"},o("div",{class:"swiper-container lightbox-full"},o("div",{class:"swiper-wrapper"},this.data.map((t=>o("div",{class:"swiper-slide"},o("ks-img",{contained:!0,center:!0,target:".lightbox-full",src:t.full.url,width:t.full.width,height:t.full.height}))))),o("div",{class:"swiper-pagination"})),o("div",{class:"swiper-container lightbox-thumb"},o("div",{class:"swiper-wrapper"},this.data.map((t=>o("div",{class:"swiper-slide"},o("ks-img",{contained:!0,center:!0,src:t.thumb.url,width:t.thumb.width,height:t.thumb.height}))))))),o("div",{class:"close",onClick:()=>this.overlay.hide()},o("ks-icon",{name:"x",size:1.2})))}get root(){return i(this)}};h.style="ks-lightbox{display:block}ks-lightbox .content{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;padding:10px;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-lightbox .close{position:absolute;top:15px;right:15px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color);border-radius:100%;padding:5px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;z-index:1000000;transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;-webkit-transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease,\n                -webkit-transform 0.1s ease}ks-lightbox .close:hover{background-color:var(--lightbox-element-color-hover);-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05)}ks-lightbox .close:active{background-color:var(--lightbox-element-color-active);-webkit-transform:scale(0.95, 0.95);transform:scale(0.95, 0.95)}ks-lightbox .lightbox-full{width:100%;-ms-flex:1;flex:1}ks-lightbox .lightbox-thumb{margin-top:10px;width:100%}ks-lightbox .lightbox-thumb .swiper-slide{height:70px;width:70px;overflow:hidden;opacity:0.6;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-lightbox .lightbox-thumb .swiper-slide:hover{opacity:0.8}ks-lightbox .lightbox-thumb .swiper-slide-thumb-active{opacity:1 !important}ks-lightbox .swiper-pagination{display:none}ks-lightbox .swiper-pagination{bottom:0px !important;padding:5px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color)}ks-lightbox .swiper-pagination-bullet{background-color:#ffffff}ks-lightbox .swiper-pagination-bullet-active{background-color:#ffffff}@media only screen and (max-width: 720px){ks-lightbox .content{padding:0}ks-lightbox .swiper-pagination{display:block}ks-lightbox .lightbox-thumb{display:none !important}ks-lightbox .lightbox-full .swiper-slide ks-img img{border-radius:0px}}";const b=class{constructor(o){t(this,o),this.expanded=!1,this.enabled=!1}render(){var t;const i=a.get("adminBar");if(this.enabled=!!a.get("loaded")&&!!Object.keys(i).length,!this.enabled)return null;const s=(null===(t=null==i?void 0:i.set)||void 0===t?void 0:t.length)>0;return[o("div",{class:"bar"},this.currentSettings(i),o("div",{class:"links"},o("a",{class:"button",href:i.link},o("ks-icon",{name:"edit"})),this.hasDistributors(i)||s?o("button",{class:"button",onClick:()=>this.expanded=!this.expanded},o("ks-icon",{name:this.expanded?"chevron-up":"chevron-down"})):null)),s?o("div",{class:"set",hidden:!this.expanded},i.set.map((t=>[o("div",{class:"bar"},o("div",{class:"name"},t.name),this.currentSettings(t),o("div",{class:"links"},o("a",{class:"button",href:t.link},o("ks-icon",{name:"edit"})))),this.distributors(t)]))):null,this.distributors(i)]}hasDistributors(t){var o;return(null===(o=null==t?void 0:t.distributors)||void 0===o?void 0:o.length)>0}distributors(t){var i;return this.hasDistributors(t)?o("div",{class:"distributors",hidden:!this.expanded},o("tr",null,o("th",null,"Dystrybutor"),o("th",null,"Czas wysyłki"),o("th",null,"Stan zewnętrzny"),o("th",null,"Tryb niedostępności"),o("th",null,"Komunikaty")),null===(i=null==t?void 0:t.distributors)||void 0===i?void 0:i.map((t=>o("tr",{class:t.overwrite&&"overwrite"},o("td",null,t.name),o("td",null,t.time),o("td",null,t.quantity),o("td",null,t.unavailableMode),o("td",null,t.warning))))):null}currentSettings(t){return[o("div",null,o("ks-icon",{name:"home"})," ",t.homeQuantity),""!=t.externalQuantity?o("div",null,o("ks-icon",{name:"truck"})," ",t.externalQuantity):null,""!=t.availability?o("div",null,o("ks-icon",{class:"hide-mobile",name:"x-octagon"})," ",t.availability):null,t.overwrite?o("div",null,o("ks-icon",{class:"hide-mobile",name:"alert-octagon"})," Nadpisany"):null]}};b.style="ks-product-admin{display:none}ks-product-admin[enabled]{display:block}ks-product-admin .bar{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;background-color:#181818;color:white}ks-product-admin .set .bar{background-color:#353535}ks-product-admin .bar>div{-ms-flex:0 1 auto;flex:0 1 auto;white-space:nowrap}ks-product-admin .bar>div:not(.links).name{-ms-flex:1 1 auto;flex:1 1 auto;width:100%;overflow:hidden;text-overflow:ellipsis}ks-product-admin .bar>div:not(.links){padding:17px}ks-product-admin .bar>.links{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex:1;flex:1}ks-product-admin .bar>.links .button{display:block;padding:17px;color:white;background-color:#252525;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;border-style:none;outline-style:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-product-admin .bar>.links .button:hover{color:white;background-color:#353535}ks-product-admin .bar>.links .button:active{color:white;background-color:#454545}ks-product-admin .bar>.links .button:nth-child(2n){background-color:#303030}ks-product-admin .bar>.links .button:nth-child(2n):hover{background-color:#404040}ks-product-admin .bar>.links .button:nth-child(2n):active{background-color:#505050}ks-product-admin .distributors{display:table;background-color:#000000;color:#ffffff;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}ks-product-admin .distributors[hidden]{display:none !important;visibility:hidden !important}ks-product-admin .distributors th{font-weight:700;font-size:15.5px !important;font-family:var(--font-emphasis);border-bottom:2px solid #181818;border-right:2px solid #181818}ks-product-admin .distributors td{font-weight:500;font-size:14px;border-right:2px solid #181818}ks-product-admin .distributors th,ks-product-admin .distributors td{text-align:center;padding:8px 20px}ks-product-admin .distributors th:first-child,ks-product-admin .distributors td:first-child{text-align:left}ks-product-admin .distributors *:last-child td{padding:8px 20px 14px 20px}ks-product-admin td.overwrite{color:var(--color-secondary)}@media only screen and (max-width: 640px) and (min-width: 340px){ks-product-admin .bar{font-size:14px}ks-product-admin .bar>div:not(.links){padding:17px 10px}}@media only screen and (max-width: 420px){ks-product-admin .bar{font-size:12px}ks-product-admin .bar>div:not(.links){padding:17px 8px}ks-product-admin .bar .hide-mobile{display:none !important}}@media only screen and (max-width: 960px){ks-product-admin .bar>.links button{display:none !important}ks-product-admin .distributors{display:none !important;visibility:hidden !important}}";const k=class{constructor(o){t(this,o)}render(){const t=d.get("brand");return t?o("a",{href:t.link},o("ks-img2",{src:t.logo,alt:t.name,width:t.width,height:t.height})):null}};k.style="ks-product-brand{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;right:0;left:0}ks-product-brand>a{display:block;max-width:150px;height:60px;transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;-webkit-transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease,\n                -webkit-transform 0.3s ease}ks-product-brand>a:hover{opacity:0.8}ks-product-brand>a:active{opacity:0.5;-webkit-transform:scale(0.95);transform:scale(0.95)}ks-product-brand img{width:unset !important}@media (max-width: 960px){ks-product-brand{-ms-flex-pack:center;justify-content:center}}";const m=class{constructor(o){t(this,o),this.data=null}componentDidRender(){this.panel=this.root.querySelector("ks-sidepanel")}open(){this.panel.show();let t=new FormData;t.append("id",this.productId),l(this.api,t).then((t=>t.json())).then((t=>this.data=t))}render(){if(this.name)return[o("ks-product-attribute",{icon:"calendar",faded:!0,onClick:()=>this.open()},this.name),o("ks-sidepanel",{left:!0},o("div",{class:"history"},o("h3",null,this.name),null!==this.data?o("div",{class:"list"},this.data.map((t=>o("div",{class:"entry"},o("span",null,t.date),o("span",null,t.price))))):o("ks-loader",{dark:!0,large:!0})))]}get root(){return i(this)}};m.style="ks-product-history>ks-product-attribute{cursor:pointer}ks-product-history .history{height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ks-product-history h3{margin-top:5px}ks-product-history .list{overflow-y:auto;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-product-history .list>*{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}ks-product-history .list>*>span:first-child{margin-right:30px}ks-product-history .list>*>span:last-child{margin-right:10px;font-weight:600}";const f=class{constructor(o){t(this,o),this.name="",this.active=!1}clickOutside(t){const o=t.target;return o.closest("ks-product-installments")||(this.active=!1),o}render(){return[o("ks-product-button",{onClick:()=>this.active=!this.active},this.name),o("div",{class:"arrow"}),o("div",{class:"content"},o("slot",null))]}get root(){return i(this)}};f.style="ks-product-installments{display:block;position:relative}ks-product-installments>.arrow{display:none;position:absolute;bottom:-5px;left:50%;-webkit-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-installments>.content{display:none;position:absolute;top:55px;width:100%;z-index:10;background-color:var(--color-dark);border-radius:20px;overflow:hidden}ks-product-installments[active]>.arrow{display:block}ks-product-installments[active]>.content{display:block}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]{background-color:#222222}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:hover{background-color:#2e2e2e}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:active{background-color:#3a3a3a}";const x=class{constructor(o){t(this,o)}async requestHandler(t){const o=d.get("notifyStrings"),i=d.get("id"),s=p.get("api").notifyAvailability;if(t.preventDefault(),!(await u(this.root.querySelector("form"))))return;this.dialog.showLoading();const r=new FormData(t.target);r.append("product",i),await fetch(s,{body:r,method:"post"}).then((async t=>t.json())).then((async t=>{if(!("status"in t&&"heading"in t&&"paragraph"in t))throw new Error(o.errorParagraph);"success"==t.status?this.dialog.showSuccess(t.heading,t.paragraph):this.dialog.showFailure(t.heading,t.paragraph)})).catch((async t=>{let i="";window.navigator.onLine?""!=t.message&&(i=t.message):i="Brak internetu.",console.log(t.message),this.dialog.showFailure(o.errorHeading,i)}))}async show(){this.dialog.show()}componentDidLoad(){this.dialog=this.root.querySelector("ks-dialog")}render(){const t=d.get("notifyStrings");return o("ks-dialog",null,o("form",{onSubmit:t=>this.requestHandler(t)},o("fieldset",null,o("div",{class:"info"},o("h3",null,t.heading),o("p",null,t.paragraph),o("a",{href:"mailto:"+c.get("email")},c.get("email"))," •",o("a",{href:"tel:"+c.get("phone")},c.get("phone"))),o("ks-input-text",{email:!0,name:"email",required:!0,nomessage:!0,placeholder:"E-mail",icon:"mail"}),o("ks-input-check",{checked:!0,name:"backorders",nomessage:!0,label:t.backorders}),o("ks-input-check",{name:"zgoda",required:!0,nomessage:!0,label:t.agreement}),o("ks-button",{submit:!0,name:"POWIADOM MNIE"}))))}get root(){return i(this)}};x.style="ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify .info a{text-decoration:none;color:black;margin:0 5px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";const g=class{constructor(o){t(this,o),this.addToCart=s(this,"addToCart",7),this.addToFavourites=s(this,"addToFavourites",7),this.cartText="Do koszyka",this.availabilityText="Powiadom o dostępności",this.favouritesIcon="star",this.cartAnimation=!1,this.favouritesAnimation=!1}CartHandler(){d.get("availability")>0?d.get("cartLoading")||this.addToCart.emit():document.querySelector("ks-product-notify").show()}FavouritesHandler(){d.get("favouritesLoading")||d.get("favouritesCompleted")||this.addToFavourites.emit()}render(){const t=d.get("availability")>0;d.get("cartLoading")?this.cartAnimation=!0:setTimeout((()=>{this.cartAnimation=!1}),300),d.get("favouritesLoading")?this.favouritesAnimation=!0:setTimeout((()=>{this.favouritesAnimation=!1}),300);const i=["fav",d.get("favouritesCompleted")?"completed":null,d.get("favouritesLoading")?"loading":null];return[o("button",{onClick:()=>this.CartHandler(),class:"cart"+(d.get("cartLoading")?" loading":"")+(t?"":" disabled")},t?this.cartText:this.availabilityText,o("ks-loader",{oversized:!0,running:this.cartAnimation})),t?o("ks-product-count",null):null,o("button",{onClick:()=>this.FavouritesHandler(),class:i.join(" ")},o("ks-icon",{name:this.favouritesIcon}),o("ks-loader",{running:this.favouritesAnimation}),o("ks-icon",{class:"completed",name:"check"}))]}get root(){return i(this)}};g.style="ks-product-purchase{display:-ms-flexbox;display:flex;margin:10px 0 15px 0;width:100%}ks-product-purchase>button{position:relative;overflow:hidden;border-style:none;outline-style:none;border-radius:50px;margin-right:10px;background-color:var(--color-secondary);color:var(--text-color-secondary);font-family:var(--product-price-font);font-size:18px;font-weight:700;-webkit-transition:var(--transition-background-color),\n                var(--transition-color);transition:var(--transition-background-color),\n                var(--transition-color)}ks-product-purchase button:hover{background-color:var(--color-secondary-hover)}ks-product-purchase button:active{background-color:var(--color-secondary-active)}ks-product-purchase button.disabled{background-color:#e4e4e4;color:var(--text-color-faded);font-size:17px;line-height:17px}ks-product-purchase button.disabled:hover{background-color:#cfcfcf}ks-product-purchase button.disabled:active{background-color:#bdbdbd}@media only screen and (max-width: 1200px){ks-product-purchase button{font-family:var(--product-price-font);font-size:var(--product-price-size-small);line-height:var(--product-price-size-small)}}@media only screen and (max-width: 960px){ks-product-purchase{-ms-flex-pack:center;justify-content:center;margin-top:10px;max-width:400px}ks-product-purchase>button.fav{-ms-flex-order:3;order:3;margin-right:0px}ks-product-purchase>ks-product-count{-ms-flex-order:1;order:1}ks-product-purchase>button.cart{-ms-flex-order:2;order:2;max-width:none}}@media only screen and (max-width: 560px){ks-product-purchase{-ms-flex-wrap:wrap;flex-wrap:wrap}}ks-product-purchase>button.cart{max-width:300px;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-purchase>button.fav{-ms-flex:0 0 auto;flex:0 0 auto;padding:13px;line-height:0px;background-color:#e4e4e4;color:var(--text-color-faded)}ks-product-purchase>button.fav ks-icon{-webkit-transform:rotate(0);transform:rotate(0);transition:-webkit-transform 0.1s ease;-webkit-transition:-webkit-transform 0.1s ease;transition:transform 0.1s ease;transition:transform 0.1s ease, -webkit-transform 0.1s ease}ks-product-purchase>button.fav:hover ks-icon{-webkit-transform:rotate(72deg);transform:rotate(72deg)}ks-product-purchase button.loading{color:transparent}ks-product-purchase button ks-loader{opacity:0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-purchase button.loading ks-loader{opacity:1}ks-product-purchase button.fav.completed{color:transparent;background-color:var(--color-secondary) !important}ks-product-purchase button.fav ks-icon.completed{position:absolute;top:50%;left:50%;opacity:0;color:white;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity);-webkit-transition-delay:0.3s;transition-delay:0.3s}ks-product-purchase button.fav.completed ks-icon.completed{opacity:1}";const w=class{constructor(o){t(this,o),this.expanded=!1}componentWillLoad(){const t=d.get("tags").length;t>6?this.expandable=3:t>4?this.expandable=2:t>3&&(this.expandable=1)}render(){return[o("div",null,d.get("tags").map((t=>o("a",{href:t.link},t.name)))),o("ks-button",{transparent:!0,narrower:!0,round:!0,icon:this.expanded?"minus":"plus",onClick:()=>this.expanded=!this.expanded})]}get root(){return i(this)}};w.style="ks-product-tags{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ks-product-tags div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-product-tags a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 15px;margin:2px;border-radius:20px;font-size:14px;font-family:var(--font-emphsis);text-align:center;background-color:#252525;color:white}ks-product-tags ks-button{display:none;margin-top:8px}@media (max-width: 1200px){ks-product-tags a{width:calc(33.33% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+7){display:none}ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 800px){ks-product-tags a{width:calc(50% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+5){display:none}ks-product-tags[expandable='2'] ks-button,ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 460px){ks-product-tags a{width:100%}ks-product-tags:not([expanded]) a:nth-child(n+4){display:none}ks-product-tags[expandable] ks-button{display:initial}}";const v=class{constructor(o){t(this,o),this.active=!1}onMouseover(){this.active=!0}onMouseout(){this.active=!1}render(){return[o("slot",null),o("div",{class:"arrow"}),o("div",{class:"message"},this.message)]}};v.style="ks-product-tooltip{display:block;position:relative}ks-product-tooltip .message,ks-product-tooltip .arrow{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;position:absolute;z-index:2;opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-product-tooltip .message{background-color:#252525;color:#ffffff;padding:17px 20px;margin-top:5px;border-radius:20px;font-size:15px;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-product-tooltip .arrow{bottom:-10px;left:80px;-webkit-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-tooltip[active] .message,ks-product-tooltip[active] .arrow{opacity:1}";const y=class{constructor(o){t(this,o)}componentDidLoad(){for(var t=document.getElementsByClassName("ekomi-widget-"+this.token),o=0;o<t.length;o++)this.registerWidget(window,this.token)}registerWidget(t,o){if(t._ekomiWidgetsServerUrl="https://widgets.ekomi.com",t._customerId=this.customer,null==t._language&&(t._language=new Array),t._language[o]="auto",void 0!==t._ekomiWidgetTokens?t._ekomiWidgetTokens[t._ekomiWidgetTokens.length]=o:t._ekomiWidgetTokens=new Array(o),void 0===window.ekomiWidgetJs){window.ekomiWidgetJs=!0;var i=document.createElement("script");i.src="https://sw-assets.ekomiapps.de/static_resources/widget.js",document.getElementsByTagName("head")[0].appendChild(i)}else void 0!==window.ekomiWidgetMain&&window.ekomiWidgetMain("ajax",o);return!0}render(){return[o("div",{id:"widget-container",class:"data-ekomi-emp ekomi-widget-container ekomi-widget-"+this.token}),o("div",{id:"ekomi-product-widget-identifier",class:"prod-data-emp",style:{display:"none"}},this.product),o("a",{href:"https://www.ekomi-pl.com/opinie-kuchniasklep.html",target:"_blank"},o("img",{alt:"kuchniasklep.pl Reviews with ekomi-pl.com",src:"https://smart-widget-assets.ekomiapps.de/resources/ekomi_logo.png",style:{display:"none"}}))]}};y.style="ks-zaufane-product{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:1200px;width:100%;margin-left:auto;margin-right:auto;background:white}ks-zaufane-product .ekomi-widget-container .prc.container-fluid{padding:20px}ks-zaufane-product .ekomi-widget-container .row{margin:0px !important}ks-zaufane-product .prc .rating-details{background:none}ks-zaufane-product .prc .review{border-bottom:1px solid #e3e3e3}";export{h as ks_lightbox,b as ks_product_admin,k as ks_product_brand,m as ks_product_history,f as ks_product_installments,x as ks_product_notify,g as ks_product_purchase,w as ks_product_tags,v as ks_product_tooltip,y as ks_zaufane_product}