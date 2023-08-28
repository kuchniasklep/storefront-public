import{r as t,h as o,c as s,e as i,H as r}from"./index-ca9b706f.js";import{p as a}from"./productDynamic-b3de3773.js";import{p as n}from"./product-a30a7b43.js";import{c as e}from"./commonDynamic-5e51121d.js";import{a as d}from"./addToCart-240e883d.js";import{a as c}from"./favourites-4a375f61.js";import{V as l}from"./validate-cd7ce36d.js";import{p}from"./price-cb74dc90.js";import"./index-9843a78d.js";import"./fetch-7fa5b910.js";import"./dataLayer-f4645c14.js";import"./inpost-pay-cfd0e949.js";import"./common-bf11c818.js";const u=class{constructor(o){t(this,o),this.expanded=!1,this.enabled=!1}render(){var t;const s=a.get("adminBar");if(this.enabled=!!a.get("loaded")&&!!Object.keys(s).length,!this.enabled)return null;const i=(null===(t=null==s?void 0:s.set)||void 0===t?void 0:t.length)>0;return[o("div",{class:"bar"},this.currentSettings(s),o("div",{class:"links"},o("a",{class:"button",href:s.link},o("ks-icon",{name:"edit"})),this.hasDistributors(s)||i?o("button",{class:"button",onClick:()=>this.expanded=!this.expanded},o("ks-icon",{name:this.expanded?"chevron-up":"chevron-down"})):null)),i?o("div",{class:"set",hidden:!this.expanded},s.set.map((t=>[o("div",{class:"bar"},o("div",{class:"name"},t.name),this.currentSettings(t),o("div",{class:"links"},o("a",{class:"button",href:t.link},o("ks-icon",{name:"edit"})))),this.distributors(t)]))):null,this.distributors(s)]}hasDistributors(t){var o;return(null===(o=null==t?void 0:t.distributors)||void 0===o?void 0:o.length)>0}distributors(t){var s;return this.hasDistributors(t)?o("div",{class:"distributors",hidden:!this.expanded},o("tr",null,o("th",null,"Dystrybutor"),o("th",null,"Czas wysyłki"),o("th",null,"Stan zewnętrzny"),o("th",null,"Tryb niedostępności"),o("th",null,"Komunikaty")),null===(s=null==t?void 0:t.distributors)||void 0===s?void 0:s.map((t=>o("tr",{class:t.overwrite&&"overwrite"},o("td",null,t.name),o("td",null,t.time),o("td",null,t.quantity),o("td",null,t.unavailableMode),o("td",null,t.warning))))):null}currentSettings(t){return[o("div",null,o("ks-icon",{name:"home"})," ",t.homeQuantity),""!=t.externalQuantity?o("div",null,o("ks-icon",{name:"truck"})," ",t.externalQuantity):null,""!=t.availability?o("div",null,o("ks-icon",{class:"hide-mobile",name:"x-octagon"})," ",t.availability):null,t.overwrite?o("div",null,o("ks-icon",{class:"hide-mobile",name:"alert-octagon"})," Nadpisany"):null]}};u.style="ks-product-admin{display:none}ks-product-admin[enabled]{display:block}ks-product-admin .bar{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;background-color:#181818;color:white}ks-product-admin .set .bar{background-color:#353535}ks-product-admin .bar>div{-ms-flex:0 1 auto;flex:0 1 auto;white-space:nowrap}ks-product-admin .bar>div:not(.links).name{-ms-flex:1 1 auto;flex:1 1 auto;width:100%;overflow:hidden;text-overflow:ellipsis}ks-product-admin .bar>div:not(.links){padding:17px}ks-product-admin .bar>.links{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex:1;flex:1}ks-product-admin .bar>.links .button{display:block;padding:17px;color:white;background-color:#252525;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;border-style:none;outline-style:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-product-admin .bar>.links .button:hover{color:white;background-color:#353535}ks-product-admin .bar>.links .button:active{color:white;background-color:#454545}ks-product-admin .bar>.links .button:nth-child(2n){background-color:#303030}ks-product-admin .bar>.links .button:nth-child(2n):hover{background-color:#404040}ks-product-admin .bar>.links .button:nth-child(2n):active{background-color:#505050}ks-product-admin .distributors{display:table;background-color:#000000;color:#ffffff;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}ks-product-admin .distributors[hidden]{display:none !important;visibility:hidden !important}ks-product-admin .distributors th{font-weight:700;font-size:15.5px !important;font-family:var(--font-emphasis);border-bottom:2px solid #181818;border-right:2px solid #181818}ks-product-admin .distributors td{font-weight:500;font-size:14px;border-right:2px solid #181818}ks-product-admin .distributors th,ks-product-admin .distributors td{text-align:center;padding:8px 20px}ks-product-admin .distributors th:first-child,ks-product-admin .distributors td:first-child{text-align:left}ks-product-admin .distributors *:last-child td{padding:8px 20px 14px 20px}ks-product-admin td.overwrite{color:var(--color-secondary)}@media only screen and (max-width: 640px) and (min-width: 340px){ks-product-admin .bar{font-size:14px}ks-product-admin .bar>div:not(.links){padding:17px 10px}}@media only screen and (max-width: 420px){ks-product-admin .bar{font-size:12px}ks-product-admin .bar>div:not(.links){padding:17px 8px}ks-product-admin .bar .hide-mobile{display:none !important}}@media only screen and (max-width: 960px){ks-product-admin .bar>.links button{display:none !important}ks-product-admin .distributors{display:none !important;visibility:hidden !important}}";const m=class{constructor(o){t(this,o)}render(){const t=n.get("brand");return t?o("a",{href:t.link},o("ks-img2",{src:t.logo,alt:t.name,width:t.width,height:t.height})):null}};m.style="ks-product-brand{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;right:0;left:0}ks-product-brand>a{display:block;max-width:150px;height:60px;transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;-webkit-transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease,\n                -webkit-transform 0.3s ease}ks-product-brand>a:hover{opacity:0.8}ks-product-brand>a:active{opacity:0.5;-webkit-transform:scale(0.95);transform:scale(0.95)}ks-product-brand img{width:unset !important}@media (max-width: 960px){ks-product-brand{-ms-flex-pack:center;justify-content:center}}";const h=class{constructor(o){t(this,o),this.price=void 0,this.posId="",this.apiKey="",this.enabled=!1}clickHandler(){this.enabled?this.buttonHandler():this.enabled=!0}loadHandler(){window.openpayu=window.openpayu||{},window.openpayu.options={creditAmount:this.price,posId:this.posId,key:this.apiKey,showLongDescription:!0},OpenPayU.Installments.miniInstallment("#calculator-payu"),this.buttonHandler()}buttonHandler(){document.querySelector("#calculator-payu a").click()}render(){return[o("slot",null),this.enabled?[o("span",{id:"calculator-payu",style:{display:"none"}}),o("script",{onLoad:()=>this.loadHandler(),src:"https://static.payu.com/res/v2/widget-products-installments.min.js"})]:null]}get root(){return s(this)}},k=class{constructor(o){t(this,o),this.productRendered=i(this,"productRendered",7)}componentDidLoad(){this.navbar=document.querySelector("ks-navbar"),this.errorPopup=document.querySelector("ks-error-popup"),this.messagePopup=document.querySelector("ks-message-popup")}async CountChange(t){n.set("count",t.detail);let o=new FormData;o.append("id",n.get("id")),o.append("count",t.detail.toString()),n.set("cartLoading",!0),await this.fetch(e.get("api").shippingTime,o).then((t=>t.json())).then((t=>{n.set("shippingTime",t.shippingTime),n.set("shippingMessage",t.shippingMessage)})).catch((t=>this.errorPopup.show(t))),n.set("cartLoading",!1)}async TraitChange(t){n.set("cartLoading",!0);const o=t.detail.reduce(((t,o)=>t+"x"+o[0].id+"-"+o[1].id),"");let s=new FormData;s.append("id",n.get("id")),s.append("traits",o),await this.fetch(e.get("api").productTraits,s).then((t=>t.json())).then((t=>{if(null!=t.currentPrice&&n.set("currentPrice",t.currentPrice),null!=t.previousPrice&&n.set("previousPrice",t.previousPrice),null!=t.ean&&n.set("ean",t.ean),null!=t.catalog&&n.set("catalog",t.catalog),n.set("traitIDs",o),null!=t.image){const o=n.get("images");o[0].full=t.image.full,o[0].preview=t.image.preview,o[0].thumb=t.image.thumb,n.set("images",o)}})).catch((t=>this.errorPopup.show(t))),n.set("cartLoading",!1)}productShortData(){return{id:n.get("id"),traitIDs:n.get("traitIDs"),sku:n.get("model"),brandName:n.get("brand").name,name:n.get("name"),link:n.get("link"),image:n.get("images")[0].preview.url,imageFull:n.get("images")[0].full.url,currentPrice:n.get("currentPrice"),quantity:n.get("count"),currency:n.get("currency"),categories:n.get("categories"),breadcrumbs:n.get("breadcrumbs")}}async AddToCart(){n.set("cartLoading",!0),await d(this.productShortData(),0),n.set("cartLoading",!1)}async AddToFavourites(){n.set("favouritesLoading",!0),c(this.productShortData()).then((()=>{n.set("favouritesCompleted",!0),n.set("favouritesLoading",!1)}))}async fetch(t,o){const s=new Headers;return s.append("pragma","no-cache"),s.append("cache-control","no-cache"),fetch(t,{method:"POST",body:o,headers:s,credentials:"same-origin"}).then((t=>{if(!t.ok)throw{name:t.status,message:t.statusText};return t}))}componentDidRender(){this.productRendered.emit()}render(){return[o("div",{class:"top"},o("ks-product-title",{"brand-link":!0})),o("div",{class:"left"},o("ks-product-images",null)),o("div",{class:"bottom"},o("ks-product-price",null),o("slot",null),o("slot",{name:"brand"}))]}get root(){return s(this)}};k.style="ks-product-info{display:block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);padding:30px 30px;min-height:420px}ks-product-info>*{margin:0px auto;width:100%;max-width:700px}ks-product-info .left{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}ks-product-info .buttons{display:-ms-flexbox;display:flex;margin:15px -5px 10px 0px}ks-product-info .bottom{position:relative;padding-bottom:60px}@media only screen and (min-width: 961px){ks-product-info{display:grid;grid-template-columns:48% 52%;grid-template-rows:auto 1fr}ks-product-info>.top{grid-column:2;grid-row:1}ks-product-info>.left{grid-column:1;grid-row:1 / 3}ks-product-info>.bottom{grid-column:2;grid-row:2;padding-bottom:0px}}@media only screen and (min-width: 1200px){ks-product-info{padding:30px 30px}}@media only screen and (max-width: 960px){ks-product-info .bottom{margin-top:30px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}ks-product-info .buttons{display:-ms-flexbox;display:flex;margin:15px 0px 10px 0px}}@media only screen and (max-width: 460px){ks-product-info{padding:30px 10px}}";const b=class{constructor(o){t(this,o),this.name="",this.active=!1}clickOutside(t){const o=t.target;return o.closest("ks-product-installments")||(this.active=!1),o}render(){return[o("ks-product-button",{onClick:()=>this.active=!this.active},this.name),o("div",{class:"arrow"}),o("div",{class:"content"},o("slot",null))]}get root(){return s(this)}};b.style="ks-product-installments{display:block;position:relative}ks-product-installments>.arrow{display:none;position:absolute;bottom:-5px;left:50%;-webkit-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-installments>.content{display:none;position:absolute;top:55px;width:100%;z-index:10;background-color:var(--color-dark);border-radius:20px;overflow:hidden}ks-product-installments[active]>.arrow{display:block}ks-product-installments[active]>.content{display:block}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]{background-color:#222222}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:hover{background-color:#2e2e2e}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:active{background-color:#3a3a3a}";const x=class{constructor(o){t(this,o)}render(){var t;return null!==(t=n.get("message"))&&void 0!==t?t:null}};x.style="ks-product-message{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;padding:15px 20px;border-radius:15px;background-color:var(--color-secondary-darker);color:var(--text-color-secondary);opacity:1;-webkit-animation:flash 1s ease infinite;animation:flash 1s ease infinite}@media screen and (max-width: 1200px){ks-product-message{border-radius:0px;margin:0}}@-webkit-keyframes flash{0%{opacity:1}33%{opacity:1}66%{opacity:0.7}100%{opacity:1}}@keyframes flash{0%{opacity:1}33%{opacity:1}66%{opacity:0.7}100%{opacity:1}}";const f=class{constructor(o){t(this,o)}async requestHandler(t){const o=n.get("strings");if(t.preventDefault(),!(await l(this.root.querySelector("form"))))return;this.dialog.showLoading();const s=new FormData(t.target);s.append("productUrl",document.location.href),s.append("productPrice",n.get("currentPrice").toString()),s.append("productOldPrice",n.get("previousPrice").toString()),s.append("productName",n.get("name")),await fetch(e.get("api").negotiatePrice,{body:s,method:"post"}).then((async t=>{"success"==await t.text()?this.dialog.showSuccess(o.negotiateSuccessHeading,o.negotiateSuccessMessage):this.dialog.showFailure(o.negotiateFaliureHeading,o.negotiateFaliureMessage)})).catch((async t=>{let s="";window.navigator.onLine||(s=o.noInternet),t.message&&(s=t.message),this.dialog.showFailure(o.negotiateFaliureHeading,s)}))}componentDidRender(){this.dialog=this.root.querySelector("ks-dialog"),this.root.parentElement.querySelector("ks-product-negotiate > *:first-child").addEventListener("click",(()=>{this.dialog.show()}))}render(){const t=n.get("strings");return[o("slot",null),o("ks-dialog",null,o("form",{onSubmit:t=>this.requestHandler(t)},o("fieldset",null,o("div",{class:"info"},o("h3",null,t.negotiateHeading),o("p",null,t.negotiateParagraph)),o("ks-input-text",{name:"name",required:!0,nomessage:!0,placeholder:t.negotiateName,icon:"user"}),o("ks-input-text",{email:!0,name:"email",required:!0,nomessage:!0,placeholder:t.negotiateEmail,icon:"mail"}),o("ks-input-text",{url:!0,name:"url",required:!0,nomessage:!0,placeholder:t.negotiateLink,icon:"link"}),o("ks-input-textarea",{rows:4,name:"comment",placeholder:t.negotiateComment,noresize:!0}),o("ks-input-check",{name:"zgoda",required:!0,nomessage:!0,label:t.negotiateAgreement}),o("ks-button",{submit:!0,name:t.negotiateSubmit}))))]}get root(){return s(this)}};f.style="ks-product-negotiate{display:block;position:relative}ks-product-negotiate fieldset{border:none;margin:0;padding:0}ks-product-negotiate .info{text-align:center}ks-product-negotiate h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}";const g=class{constructor(o){t(this,o)}async requestHandler(t){const o=n.get("strings"),s=n.get("id"),i=e.get("tracking").edroneWishlistApi;if(t.preventDefault(),!(await l(this.root.querySelector("form"))))return;this.dialog.showLoading();const r=new FormData(t.target);r.append("app_id",e.get("tracking").edroneAppId),r.append("topic_id",s),r.append("topic_campaign_id","0"),await fetch(i,{body:r,method:"post"}).then((()=>{this.dialog.showSuccess(o.notifySuccessHeading,o.notifySuccessParagraph)})).catch((async t=>{let s="";window.navigator.onLine?""!=t.message&&(s=t.message):s=o.noInternet,console.log(t.message),this.dialog.showFailure(o.notifyErrorHeading,s)}))}async show(){this.dialog.show()}componentDidLoad(){this.dialog=this.root.querySelector("ks-dialog")}render(){const t=n.get("strings");return o("ks-dialog",null,o("form",{onSubmit:t=>this.requestHandler(t)},o("fieldset",null,o("div",{class:"info"},o("h3",null,t.notifyHeading),o("p",null,t.notifyParagraph)),o("ks-input-text",{email:!0,name:"email",required:!0,nomessage:!0,placeholder:"E-mail",icon:"mail"}),o("ks-input-check",{name:"zgoda",required:!0,nomessage:!0,label:t.notifyAgreement}),o("ks-button",{submit:!0,name:t.notifyMe}))))}get root(){return s(this)}};g.style="ks-product-notify-edrone{display:block}ks-product-notify-edrone fieldset{border:none;margin:0;padding:0}ks-product-notify-edrone .info{text-align:center;margin-bottom:40px}ks-product-notify-edrone .info a{text-decoration:none;color:black;margin:0 5px}ks-product-notify-edrone h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify-edrone ks-input-check{margin-bottom:5px}ks-product-notify-edrone ks-button{margin-top:20px}";const v=class{constructor(o){t(this,o),this.addToCart=i(this,"addToCart",7),this.addToFavourites=i(this,"addToFavourites",7),this.cartText="Do koszyka",this.availabilityText="Powiadom o dostępności",this.favouritesIcon="star",this.cartAnimation=!1,this.favouritesAnimation=!1}CartHandler(){n.get("availability")>0?n.get("cartLoading")||this.addToCart.emit():document.querySelector("ks-product-notify-edrone").show()}FavouritesHandler(){n.get("favouritesLoading")||n.get("favouritesCompleted")||this.addToFavourites.emit()}render(){const t=n.get("availability")>0;n.get("cartLoading")?this.cartAnimation=!0:setTimeout((()=>{this.cartAnimation=!1}),300),n.get("favouritesLoading")?this.favouritesAnimation=!0:setTimeout((()=>{this.favouritesAnimation=!1}),300);const s=["fav",n.get("favouritesCompleted")?"completed":null,n.get("favouritesLoading")?"loading":null];return[o("button",{onClick:()=>this.CartHandler(),class:"cart"+(n.get("cartLoading")?" loading":"")+(t?"":" disabled")},t?this.cartText:this.availabilityText,o("ks-loader",{oversized:!0,running:this.cartAnimation})),t?o("ks-product-count",null):null,o("button",{onClick:()=>this.FavouritesHandler(),class:s.join(" ")},o("ks-icon",{name:this.favouritesIcon}),o("ks-loader",{running:this.favouritesAnimation}),o("ks-icon",{class:"completed",name:"check"}))]}get root(){return s(this)}};v.style="ks-product-purchase{display:-ms-flexbox;display:flex;margin:15px 0 0px 0;width:100%}ks-product-purchase>button{position:relative;overflow:hidden;border-style:none;outline-style:none;margin-right:10px;background-color:var(--color-secondary);color:var(--text-color-secondary);font-family:var(--product-price-font);font-size:17px;font-weight:700;-webkit-transition:var(--transition-background-color),\n                var(--transition-color);transition:var(--transition-background-color),\n                var(--transition-color)}ks-product-purchase button:hover{background-color:var(--color-secondary-hover)}ks-product-purchase button:active{background-color:var(--color-secondary-active)}ks-product-purchase button.disabled{background-color:#e4e4e4;color:var(--text-color-faded);font-size:17px;line-height:17px}ks-product-purchase button.disabled:hover{background-color:#cfcfcf}ks-product-purchase button.disabled:active{background-color:#bdbdbd}@media only screen and (max-width: 1200px){ks-product-purchase button{font-family:var(--product-price-font);font-size:var(--product-price-size-small);line-height:var(--product-price-size-small)}}@media only screen and (max-width: 960px){ks-product-purchase{-ms-flex-pack:center;justify-content:center;margin-top:10px;max-width:400px}ks-product-purchase>button.fav{-ms-flex-order:3;order:3;margin-right:0px}ks-product-purchase>ks-product-count{-ms-flex-order:1;order:1}ks-product-purchase>button.cart{-ms-flex-order:2;order:2;max-width:none}}@media only screen and (max-width: 560px){ks-product-purchase{-ms-flex-wrap:wrap;flex-wrap:wrap}}ks-product-purchase>button.cart{max-width:300px;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-purchase>button.fav{-ms-flex:0 0 auto;flex:0 0 auto;padding:13px;line-height:0px;background-color:#e4e4e4;color:var(--text-color-faded)}ks-product-purchase>button.fav ks-icon{-webkit-transform:rotate(0);transform:rotate(0);transition:-webkit-transform 0.1s ease;-webkit-transition:-webkit-transform 0.1s ease;transition:transform 0.1s ease;transition:transform 0.1s ease, -webkit-transform 0.1s ease}ks-product-purchase>button.fav:hover ks-icon{-webkit-transform:rotate(72deg);transform:rotate(72deg)}ks-product-purchase button.loading{color:transparent}ks-product-purchase button ks-loader{opacity:0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-purchase button.loading ks-loader{opacity:1}ks-product-purchase button.fav.completed{color:transparent;background-color:var(--color-secondary) !important}ks-product-purchase button.fav ks-icon.completed{position:absolute;top:50%;left:50%;opacity:0;color:white;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity);-webkit-transition-delay:0.3s;transition-delay:0.3s}ks-product-purchase button.fav.completed ks-icon.completed{opacity:1}";const y=class{constructor(o){t(this,o)}render(){const t=n.get("strings"),s=n.get("availability")>0,i=s?n.get("shippingTime"):t.unavailable,r=s?"clock":"alert-circle",a=!n.get("shippingPrice"),e=/\d/.test(i),d=/24/.test(i);let c=e?t.shippingIn:"",l=a?t.freeShipping:p(n.get("shippingPrice"));const u=a?"":t.shippingFrom,m=n.get("shippingMessage");return[m?o("div",{class:"message"},m):null,o("ks-product-attribute",{icon:r,danger:!d},c," ",i),o("ks-product-attribute",{icon:"package"},u," ",l)]}};y.style="ks-product-shipping{display:block;width:100%;margin-top:10px}ks-product-shipping .message{font-family:var(--product-shipping-message-font);font-size:15px;color:var(--color-secondary);margin-bottom:15px;border-radius:20px;font-weight:700;max-width:100%}ks-product-shipping .hidden{display:none}@media only screen and (max-width: 960px){ks-product-shipping{display:-ms-flexbox;display:flex;text-align:center;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}}";const w=class{constructor(o){t(this,o),this.main=void 0,this.open=void 0,this.name=void 0,this.content=void 0}render(){return[o("button",{class:"accordion",onClick:()=>this.onOpen()},this.name,o("ks-icon",{name:this.open?"minus":"plus"})),o("div",{class:"tab-content",innerHTML:this.content})]}onOpen(){if(this.open=!this.open,this.open){const t=Array.from(this.root.parentElement.children),o=t.indexOf(this.root);t.forEach((t=>t.removeAttribute("main"))),this.main=!0,this.root.closest("ks-product-tabs").active=o}}get root(){return s(this)}};w.style="ks-product-tab{display:block}@media only screen and (min-width: 960px){ks-product-tab .accordion{display:none}}ks-product-tab>button{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;background-color:transparent;color:#151515;width:100%;border:none;outline:none;padding:10px 0px 20px 0px;margin:0;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-product-tab>button:hover{color:#606060}ks-product-tab:not([open])>button>ks-icon{-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-product-tab:not([open])>button:hover>ks-icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}ks-product-tab>.tab-content{display:none;max-width:100%}@media only screen and (min-width: 960px){ks-product-tab[main]>.tab-content{display:block}}@media only screen and (max-width: 960px){ks-product-tab[open]>.tab-content{display:block}}";const z=class{constructor(o){t(this,o),this.names="",this.active=0}render(){return[o("nav",null," ",this.names.split(", ").map(((t,s)=>o("button",{class:s==this.active?"active":"",onClick:()=>this.click(s)},t)))," "),o("div",{class:"content"},o("slot",null))]}click(t){this.active=t,Array.from(this.root.querySelector(".content").children).forEach(((o,s)=>{const i=o;i.main=s==t,i.open=s==t}))}get root(){return s(this)}};z.style="ks-product-tabs{display:block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-product-tabs nav{background-color:#f6f6f6;border-bottom:1px solid #e8e8e8;display:-ms-flexbox;display:flex}@media only screen and (max-width: 960px){ks-product-tabs nav{display:none}}ks-product-tabs button{position:relative;padding:20px 40px;margin:0;font-family:inherit;font-size:18px;color:#252525;background-color:#f6f6f6;-webkit-transition:background-color 0.3s ease, color 0.3s ease;transition:background-color 0.3s ease, color 0.3s ease;border:none;outline:none;border-right:1px solid #e8e8e8}ks-product-tabs button.active{color:#252525 !important;background-color:#FFFFFF}ks-product-tabs button:hover{color:#808080}ks-product-tabs>.content{padding:30px}@media only screen and (max-width: 520px){ks-product-tabs>.content{padding:30px 20px}}";const _=class{constructor(o){t(this,o),this.expanded=!1,this.expandable=void 0}componentWillLoad(){const t=n.get("tags").length;t>6?this.expandable=3:t>4?this.expandable=2:t>3&&(this.expandable=1)}render(){return[o("div",null,n.get("tags").map((t=>o("a",{href:t.link},t.name)))),o("ks-button",{transparent:!0,narrower:!0,round:!0,icon:this.expanded?"minus":"plus",onClick:()=>this.expanded=!this.expanded})]}get root(){return s(this)}};_.style="ks-product-tags{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ks-product-tags div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-product-tags a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 15px;margin:2px;border-radius:20px;font-size:14px;font-family:var(--font-emphsis);text-align:center;background-color:#252525;color:white}ks-product-tags ks-button{display:none;margin-top:8px}@media (max-width: 1200px){ks-product-tags a{width:calc(33.33% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+7){display:none}ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 800px){ks-product-tags a{width:calc(50% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+5){display:none}ks-product-tags[expandable='2'] ks-button,ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 460px){ks-product-tags a{width:100%}ks-product-tags:not([expanded]) a:nth-child(n+4){display:none}ks-product-tags[expandable] ks-button{display:initial}}";const L=class{constructor(o){t(this,o),this.message=void 0,this.active=!1}onMouseover(){this.active=!0}onMouseout(){this.active=!1}render(){return[o("slot",null),o("div",{class:"arrow"}),o("div",{class:"message"},this.message)]}};L.style="ks-product-tooltip{display:block;position:relative}ks-product-tooltip .message,ks-product-tooltip .arrow{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;position:absolute;z-index:2;opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-product-tooltip .message{background-color:#252525;color:#ffffff;padding:17px 20px;margin-top:5px;border-radius:20px;font-size:15px;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-product-tooltip .arrow{bottom:-10px;left:80px;-webkit-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-tooltip[active] .message,ks-product-tooltip[active] .arrow{opacity:1}";const j=class{constructor(o){t(this,o),this.traitChange=i(this,"traitChange",7)}traitChangeHandler(){if(!(null==n?void 0:n.get("traits")))return;const t=this.root.querySelectorAll(".trait select"),o=n.get("traits").map(((o,s)=>[o,o.items[t[s].selectedIndex]]));this.traitChange.emit(o)}render(){return(null==n?void 0:n.get("traits"))?n.get("traits").map((t=>o("div",{class:"trait"},o("label",null,t.name,":"),o("div",{class:"select"},o("select",{onChange:()=>this.traitChangeHandler()},t.items.map((t=>o("option",{value:t.id},t.name)))),o("ks-icon",{name:"chevron-down"}))))):null}get root(){return s(this)}};j.style="ks-product-traits{display:block;font-family:var(--font-regular);font-size:16px;line-height:16px;margin-left:-2px;max-width:300px}ks-product-traits .trait{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;overflow:hidden}ks-product-traits .select{position:relative;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-traits label{padding:5px}ks-product-traits select{-ms-flex:1 0 auto;flex:1 0 auto;padding:7px 35px 7px 10px;margin-left:5px;border-radius:20px;outline-style:none;background-color:#f3f3f3;border:solid 1px #cacaca;font-family:var(--font-regular);font-size:16px;line-height:16px;-moz-appearance:none;-webkit-appearance:none;appearance:none;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-traits select::-ms-expand{display:none}ks-product-traits ks-icon{position:absolute;top:5px;right:10px;pointer-events:none}ks-product-traits select option{background-color:white !important}@media only screen and (max-width: 960px){ks-product-traits select{padding:10px 40px 10px 15px}ks-product-traits ks-icon{top:7px}}";const C=class{constructor(o){t(this,o),this.toggle=!0}render(){return[...n.get("variants").map((t=>o("ks-product-variant",{link:t.link,image:t.image,webp:t.webp,active:t.active,unavailable:t.unavailable}))),o("div",{class:"more"},o("ks-button",{transparent:!0,narrower:!0,round:!0,icon:this.toggle?"plus":"minus",onClick:()=>this.toggle=!this.toggle}))]}get root(){return s(this)}};C.style="ks-product-variants{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;width:auto}@media (min-width: 1200px){ks-product-variants{margin:-9px -9px 9px -9px !important;width:calc(100% + 18px)}}ks-product-variants ks-product-variant{width:10%}ks-product-variants .more{display:none}ks-product-variants[toggle] ks-product-variant:nth-child(n+11){display:none}ks-product-variant:nth-child(n+11)~.more{display:block}@media (max-width: 1100px){ks-product-variants ks-product-variant{width:11.11111111111111%}ks-product-variants[toggle] ks-product-variant:nth-child(n+10){display:none}ks-product-variant:nth-child(n+10)~.more{display:block}}@media (max-width: 1000px){ks-product-variants ks-product-variant{width:12.5%}ks-product-variants[toggle] ks-product-variant:nth-child(n+9){display:none}ks-product-variant:nth-child(n+9)~.more{display:block}}@media (max-width: 830px){ks-product-variants ks-product-variant{width:14.28571428571429%}ks-product-variants[toggle] ks-product-variant:nth-child(n+8){display:none}ks-product-variant:nth-child(n+8)~.more{display:block}}@media (max-width: 700px){ks-product-variants ks-product-variant{width:16.66666666666667%}ks-product-variants[toggle] ks-product-variant:nth-child(n+7){display:none}ks-product-variant:nth-child(n+7)~.more{display:block}}@media (max-width: 600px){ks-product-variants ks-product-variant{width:20%}ks-product-variants[toggle] ks-product-variant:nth-child(n+6){display:none}ks-product-variant:nth-child(n+6)~.more{display:block}}@media (max-width: 500px){ks-product-variants ks-product-variant{width:25%}ks-product-variants[toggle] ks-product-variant:nth-child(n+5){display:none}ks-product-variant:nth-child(n+5)~.more{display:block}}@media (max-width: 400px){ks-product-variants ks-product-variant{width:33.33333333333333%}ks-product-variants[toggle] ks-product-variant:nth-child(n+4){display:none}ks-product-variant:nth-child(n+4)~.more{display:block}}@media (max-width: 300px){ks-product-variants ks-product-variant{width:50%}ks-product-variants[toggle] ks-product-variant:nth-child(n+3){display:none}ks-product-variant:nth-child(n+3)~.more{display:block}}ks-product-variants ks-product-variant{padding:9px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-product-variants[toggle] ks-product-variant:nth-child(n+12){display:none}ks-product-variants{-ms-flex:1;flex:1}ks-product-variants .more{-ms-flex:1 0 100%;flex:1 0 100%}ks-product-variants ks-button{margin:15px auto 0px auto}";const D=class{constructor(o){t(this,o),this.videoId="",this.active=!1}componentDidRender(){this.observer=new IntersectionObserver((t=>{for(const o of t)o.isIntersecting&&(this.active=!0,this.observer&&this.observer.disconnect())}),{rootMargin:"500px"}),this.observer.observe(this.root)}render(){return this.active?o("iframe",{width:"1280",height:"720",src:"https://www.youtube.com/embed/"+this.videoId,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):null}get root(){return s(this)}};D.style="ks-product-youtube{display:block;position:relative;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:56.25%;background-color:black}ks-product-youtube iframe{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}";const F=class{constructor(o){t(this,o)}render(){const t=n.get("reviewProducts"),s=t.length,i=parseFloat((t.reduce(((t,o)=>t+o.rating),0)/s).toFixed(2)),a=parseFloat((t.filter((t=>t.rating>=4)).length/s*100).toFixed(2)),e=parseFloat((t.filter((t=>t.rating<4&&t.rating>2)).length/s*100).toFixed(2)),d=parseFloat((t.filter((t=>t.rating<=2)).length/s*100).toFixed(2)),c=n.get("strings");return o(r,null,o("div",{class:"summary"},o("div",{class:"count"},o("div",{class:"message"},c.reviewsCount),o("div",{class:"content"},s)),o("div",{class:"average"},o("div",{class:"message"},c.reviewsAverage),o("div",{class:"content"},i,"/5")),o("div",{class:"positivity"},o("div",{class:"bar"},o("span",null,c.reviewsPositive),o("div",{class:"right"},o("span",null,a,"%"),o("div",{class:"progress"},o("span",{style:{width:`${a}%`}})))),o("div",{class:"bar"},o("span",null,c.reviewsNeutral),o("div",{class:"right"},o("span",null,e,"%"),o("div",{class:"progress"},o("span",{style:{width:`${e}%`}})))),o("div",{class:"bar"},o("span",null,c.reviewsNegative),o("div",{class:"right"},o("span",null,d,"%"),o("div",{class:"progress"},o("span",{style:{width:`${d}%`}})))))),o("div",{class:"reviews"},t.map((t=>o("div",{class:"review"},o("div",{class:"top"},o("div",{class:"stars"},this.stars(t.rating)),o("div",{class:"date"},t.date)),o("div",{class:"content"},t.review))))))}stars(t){return[...Array(5).keys()].map((o=>this.star(Math.round(t)>=o+1)))}star(t){return o("svg",{class:t?"":"off",width:"100%",height:"100%",viewBox:"0 0 50 50",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2"}},o("g",{transform:"matrix(1,0,0,1,0,2.38729)"},o("path",{d:"M25,0L30.613,17.275L48.776,17.275L34.082,27.951L39.695,45.225L25,34.549L10.305,45.225L15.918,27.951L1.224,17.275L19.387,17.275L25,0Z",style:{fill:"rgb(255 195 0)"}})))}};F.style="ks-review-product{display:block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);font-family:var(--font-emphasis)}ks-review-product .summary{display:-ms-flexbox;display:flex}ks-review-product .summary>*{width:70%;padding:20px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}ks-review-product .summary>*:not(:last-child){border-right:#dddddd solid 1px}ks-review-product .summary .positivity{width:100%}ks-review-product .summary .message{font-size:16px}ks-review-product .summary .content{font-size:32px;font-weight:700}ks-review-product .summary .bar{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:300px}ks-review-product .summary .right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:60%}ks-review-product .summary .bar .progress{height:10px;position:relative;background:#f2f2f2;border-radius:5px;margin-left:5px;width:100%;overflow:hidden}ks-review-product .summary .bar .progress>span{display:block;height:100%;background-color:rgb(255 195 0);position:relative;overflow:hidden}ks-review-product .reviews{border-top:#dddddd solid 1px}ks-review-product .review{padding:13px 18px}ks-review-product .review:not(:last-child){border-bottom:#dddddd solid 1px}ks-review-product .review .top{display:-ms-flexbox;display:flex}ks-review-product .review .top .date{margin-left:10px}ks-review-product .stars{display:-ms-flexbox;display:flex;max-width:120px;margin-bottom:10px}ks-review-product .stars .off{opacity:0.3}@media (max-width: 600px){ks-review-product .summary{-ms-flex-wrap:wrap;flex-wrap:wrap}ks-review-product .summary .count,ks-review-product .summary .average{width:50%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:#dddddd solid 1px}ks-review-product .summary .positivity{width:100%}}";export{u as ks_product_admin,m as ks_product_brand,h as ks_product_calculator_payu,k as ks_product_info,b as ks_product_installments,x as ks_product_message,f as ks_product_negotiate,g as ks_product_notify_edrone,v as ks_product_purchase,y as ks_product_shipping,w as ks_product_tab,z as ks_product_tabs,_ as ks_product_tags,L as ks_product_tooltip,j as ks_product_traits,C as ks_product_variants,D as ks_product_youtube,F as ks_review_product}