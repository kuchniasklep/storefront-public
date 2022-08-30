import{r as e,h as o,g as t,H as n}from"./index-6e14abe0.js";import{S as r}from"./core-class-5b6160e1.js";import{P as s}from"./pagination-c9190fdf.js";import{T as i}from"./thumbs-e8e6436d.js";import{c as a}from"./common-92b7ddbf.js";import{c}from"./commonDynamic-29131f86.js";import{t as d,e as p,r as l}from"./tracker-7fb8955b.js";import"./index-a26ba0e6.js";r.use([s,i]);const f=class{constructor(o){e(this,o),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(e){this.name=e.name,this.message=e.message,this.stack=void 0===e.stack?"":e.stack,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){let e=`${this.name}: ${this.message}`,t="",n=this.stack;const r=parseInt(this.name);isNaN(r)?t="Wystąpił błąd aplikacji. ":(r>=400&&r<500&&(t="Wystąpił błąd aplikacji. "),r>=500&&(t="Wystąpił błąd serwera. "),n+=e),t+="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";const s=`User-agent: ${navigator.userAgent}`;return o("ks-overlay",{dark:!0},o("div",{class:`content ${this.visible}`},o("div",{class:"bar"},o("div",{class:"title"},e),o("div",{class:"close",onClick:()=>this.hide()},o("ks-icon",{name:"x",size:1.2}))),o("div",{class:"message"},t),o("div",{class:"data"},s,o("span",{class:"stack"},n))))}get root(){return t(this)}};f.style="ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}",r.use([s,i]);const u=class{constructor(o){e(this,o),this.name="",this.message="",this.link="",this.linkname="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(e,o,t="",n=""){this.name=e,this.message=o,this.linkname=t,this.link=n,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){return o("ks-dialog",null,o("div",{class:"title"},this.name),o("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?o("ks-button",{secondary:!0,round:!0,link:this.link,name:this.linkname}):null)}get root(){return t(this)}};u.style="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";class m{constructor(){this.ttq=new Promise((e=>{var o=setInterval((()=>{void 0!==ttq&&(e(ttq),clearInterval(o))}),100)}))}pageview(e,o){this.ttq.then((e=>{e.track("Browse")}))}product(e,o=""){this.ttq.then((o=>{o.track("ViewContent",{content_type:"product",content_id:e.id,content_name:e.name,currency:e.currency,price:e.currentPrice,quantity:1,value:e.currentPrice})}))}category(e,o){}addToCart(e,o){this.ttq.then((o=>{o.track("AddToCart",{content_type:"product",content_id:e.id,content_name:e.name,currency:e.currency,price:e.currentPrice,quantity:e.quantity,value:e.currentPrice*e.quantity})}))}order_checkout(e,o,t){this.ttq.then((e=>{e.track("StartCheckout",{contents:this.transformProducts(o.products),value:o.productValue,currency:o.currency})}))}order_form(e,o,t){this.ttq.then((e=>{e.track("AddBilling",{contents:this.transformProducts(o.products),value:o.productValue,currency:o.currency})}))}order_placed(e,o,t){this.ttq.then((e=>{e.track("Checkout",{contents:this.transformProducts(o.products),value:o.productValue,currency:o.currency})}))}search(e){}subscribe(e,o){}transformProducts(e){return e.map((e=>({content_id:e.id,content_type:"product",content_name:e.name,quantity:e.quantity,price:e.currentPrice})))}}class g{constructor(e){const o=e.split(", ");this.pixel=new Promise((e=>{var t,n,r,s,i,a;t=window,n=document,r="script",t.fbq||(s=t.fbq=function(){s.callMethod?s.callMethod.apply(s,arguments):s.queue.push(arguments)},t._fbq||(t._fbq=s),s.push=s,s.loaded=!0,s.version="2.0",s.queue=[],(i=n.createElement(r)).async=!0,i.src="https://connect.facebook.net/en_US/fbevents.js",(a=n.getElementsByTagName(r)[0]).parentNode.insertBefore(i,a)),o.forEach((e=>{fbq("init",e)})),e(fbq)}))}pageview(e,o){this.pixel.then((e=>{e("track","PageView",{},{eventID:o})}))}product(e,o=""){this.pixel.then((t=>{t("track","ViewContent",{content_type:"product",content_name:e.name,value:e.currentPrice,currency:e.currency,content_ids:[e.id]},{eventID:o})}))}category(e,o){}addToCart(e,o){this.pixel.then((t=>{t("track","AddToCart",{content_type:"product",content_name:e.name,value:e.currentPrice,currency:e.currency,contents:[{id:e.id,quantity:e.quantity}]},{eventID:o})}))}order_checkout(e,o,t){this.pixel.then((e=>{e("track","InitiateCheckout",{contents:this.transformProducts(o.products),content_type:"product",value:o.productValue,currency:o.currency},{eventID:t})}))}order_form(e,o,t){}order_placed(e,o,t){this.pixel.then((e=>{e("track","Purchase",{contents:this.transformProducts(o.products),content_type:"product",value:o.productValue,currency:o.currency},{eventID:t})}))}search(e){this.pixel.then((o=>{o("track","Search",{search_string:e})}))}subscribe(e,o){}transformProducts(e){return e.map((e=>({id:e.id,quantity:e.quantity})))}}class k{pageview(e,o){if(!e.loggedIn||!e.customer)return;const t=e.customer;window._edrone=window._edrone||{},_edrone.email=t.email,_edrone.first_name=t.firstName,_edrone.last_name=t.lastName,_edrone.subscriber_status=t.subscriber?1:0,_edrone.country=t.countryISO2,_edrone.city=t.city,_edrone.phone=t.phone}product(e,o=""){window._edrone=window._edrone||{},_edrone.product_skus=e.model,_edrone.product_ids=e.id,_edrone.product_titles=encodeURI(e.name),(null==e?void 0:e.images.length)>0&&(_edrone.product_images=encodeURI(e.images[0].full.url)),_edrone.product_urls=encodeURI(document.location.href),_edrone.product_availability=e.availability,_edrone.product_category_ids=e.categories.map((e=>e.id)).join("~"),_edrone.product_category_names=e.categories.map((e=>e.name)).join("~"),_edrone.action_type="product_view"}category(e,o){window._edrone=window._edrone||{},_edrone.product_category_ids=e.categories.map((e=>e.id)).join("~"),_edrone.product_category_names=e.categories.map((e=>e.name)).join("~"),_edrone.action_type="category_view"}addToCart(e,o){_edrone.product_ids=e.id,_edrone.product_skus=e.sku,_edrone.product_titles=e.name,_edrone.product_images=e.image,_edrone.product_urls=e.link,_edrone.product_category_ids=e.categories.map((e=>e.id)).join("~"),_edrone.product_category_names=e.categories.map((e=>e.name)).join("~"),_edrone.action_type="add_to_cart"}order_checkout(e,o,t){if(!e.loggedIn||!e.customer)return;const n=e.customer;window._edrone=window._edrone||{},_edrone.email=n.email,_edrone.first_name=n.firstName,_edrone.last_name=n.lastName,_edrone.subscriber_status=n.subscriber?1:0,_edrone.country=n.countryISO2,_edrone.city=n.city,_edrone.phone=n.phone,_edrone.action_type="other"}order_form(e,o,t){}order_placed(e,o,t){const n=e.customer,r=o.products;window._edrone=window._edrone||{},_edrone.email=n.email,_edrone.first_name=n.firstName,_edrone.last_name=n.lastName,_edrone.subscriber_status=n.subscriber?1:0,_edrone.product_skus=r.map((e=>e.sku)).join("|"),_edrone.product_ids=r.map((e=>e.id)).join("|"),_edrone.product_titles=r.map((e=>encodeURI(e.id))).join("|"),_edrone.product_images=r.map((e=>encodeURI(e.image))).join("|"),_edrone.product_urls=r.map((e=>encodeURI(e.link))).join("|"),_edrone.product_counts=r.map((e=>e.quantity)).join("|"),_edrone.product_category_ids=r.map((e=>e.categories.map((e=>e.id)).join("~"))).join("|"),_edrone.product_category_names=r.map((e=>e.categories.map((e=>e.name)).join("~"))).join("|"),_edrone.order_id=o.id,_edrone.country=n.countryISO2,_edrone.city=n.city,_edrone.base_currency=n.currency,_edrone.order_currency=o.currency,_edrone.base_payment_value=o.productValue,_edrone.order_payment_value=o.productValue,_edrone.action_type="order"}search(e){}subscribe(e,o){if(window._edrone=window._edrone||{},_edrone.customer_tags=o.place,_edrone.email=o.email,_edrone.subscriber_status=o.subscriber?1:0,!e.loggedIn||!e.customer){const o=e.customer;_edrone.first_name=o.firstName,_edrone.last_name=o.lastName,_edrone.country=o.countryISO2,_edrone.city=o.city,_edrone.phone=o.phone}_edrone.action_type="subscribe"}}const h=class{constructor(o){e(this,o)}componentWillLoad(){const e=document.getElementById(this.commonData),o=JSON.parse(e.innerHTML);Object.keys(o).map((e=>{a.set(e,o[e])}));{const e=document.getElementById(this.commonDynamicData),o=JSON.parse(e.innerHTML);Object.keys(o).map((e=>{c.set(e,o[e])})),setTimeout((()=>{c.set("loaded",!0)}),100),this.track()}}track(){d.get("loaded").then((()=>{const e=c.get("tracking"),o=e=>d.set("trackers",[...d.get("trackers"),e]);e.tiktok&&o(new m),e.facebook&&o(new g(e.facebook)),e.edrone&&o(new k),p((o=>null==o?void 0:o.pageview(c.state,e.pageview))),l()}))}render(){return o(n,null,!this.skipbase&&o("ks-page-header",null),o("slot",null),!this.skipbase&&o("ks-page-footer",null),o("ks-newsletter-popup",{displayOnLoad:a.get("newsletterPopup"),api:c.get("api").newsletter,"login-link":a.get("loginLink"),"register-link":a.get("registerLink"),"logged-in":c.get("loggedIn")}),o("ks-product-suggestions",{api:a.get("suggestionApi")}),o("ks-error-popup",null),o("ks-message-popup",null),o("ks-cookie-popup",{message:a.get("cookieMessage"),button:a.get("cookieButton"),delay:a.get("cookieDelay")}))}};h.style="ks-page-base{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:100vh}";const x=class{constructor(o){e(this,o)}render(){const e=a.get("phone"),t=a.get("email"),n=a.get("workingHours"),r=a.get("company"),s=a.get("address"),i=a.get("softwareLink");return[o("div",{class:"about"},o("div",{class:"links"},a.get("footerLinks").map((e=>o("ks-footer-links",{heading:e.name},e.items.map((e=>o("li",null,o("a",{href:e.link},e.name))))))),o("div",{class:"contact"},o("span",null,"Kontakt"),o("a",{style:{display:"none"}}),o("a",{href:`tel:${e}`},o("ks-icon",{name:"phone"}),o("span",null,e)),o("a",{href:`mailto:${t}`},o("ks-icon",{name:"mail"}),o("span",null,t)),o("span",null,o("ks-icon",{name:"clock",size:.9})," ",n),o("span",null,o("ks-icon",{name:"home",size:.9})," ",r),o("span",null,o("ks-icon",{name:"map-pin",size:.9})," ",s))),o("div",{class:"newsletter"},o("div",null,"Zapisz się do naszego newslettera i zyskaj"),o("div",null,"KUPON 10ZŁ"),o("ks-button",{light:!0,border:!0,name:"ZAPISZ SIĘ",onClick:()=>document.querySelector("ks-newsletter-popup").Show()}))),o("div",{class:"portals"},o("div",null,a.get("social").map((e=>o("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image})))),o("div",null,a.get("reviewers").map((e=>o("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image}))))),o("div",{class:"software"},o("a",{href:i,rel:"nofollow"},"Oprogramowanie sklepu ShopGold"))]}};x.style="ks-page-footer{display:block;overflow:hidden;background-color:var(--footer-color);color:var(--footer-text-color);font-size:16px}ks-page-footer .about{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:50px 70px 40px 70px;margin:auto}ks-page-footer .contact>span:first-of-type{display:block;color:var(--footer-heading-color);font-family:var(--font-emphasis);font-weight:700;font-size:18px;margin:0 0 15px 0}ks-page-footer .contact a,ks-page-footer .contact>span{display:block;text-decoration:none !important;font-size:16px;margin-bottom:5px;color:var(--footer-text-color);-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-page-footer .contact a:hover{color:var(--footer-text-color-hover)}ks-page-footer .contact a:active{color:var(--footer-text-color-active)}ks-page-footer .contact ks-icon{margin-right:5px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;min-height:100px}ks-page-footer .newsletter{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-flow:column nowrap;flex-flow:column nowrap;text-align:center;padding:0 0 0 30px;-ms-flex-negative:0;flex-shrink:0}ks-page-footer .newsletter>div{font-family:var(--font-emphasis)}ks-page-footer .newsletter>div:last-of-type{font-size:48px;line-height:40px;font-weight:700;margin:5px 0 20px 0}ks-page-footer .newsletter ks-button{width:100%}ks-page-footer .portals{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px;border-top:solid 1px #2b2b2b}ks-page-footer .portals>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:10px}ks-page-footer .separator{width:1px;height:35px;margin:0 20px;background-color:#2b2b2b}ks-page-footer .software{background-color:var(--footer-color-darker);color:var(--footer-text-color-darker);font-size:13px;text-align:center;padding:10px}ks-page-footer .software>a{color:var(--footer-text-color-darker)}@media only screen and (max-width: 1060px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:50px 30px 40px 30px}ks-page-footer .contact{max-width:220px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}ks-page-footer .newsletter{margin-top:40px;padding:40px 0 0 0;border-top:solid 1px #2b2b2b}ks-page-footer .newsletter ks-button{max-width:290px}}@media only screen and (max-width: 640px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:30px}ks-page-footer .links{margin-top:0px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}ks-page-footer .links>*{margin-top:40px;margin-right:0px;padding:0}ks-page-footer .newsletter>div{font-size:14px}ks-page-footer .newsletter>div:last-of-type{font-size:40px;margin-bottom:10px}}";const w=class{constructor(o){e(this,o)}render(){return o(n,null,a.get("developmentWarning")?o("ks-development-warning",null):null,o("ks-top-banner",null),o("ks-navbar",null))}},b=class{constructor(o){e(this,o),this.home=!1,this.listing=!1,this.nobg=!1}componentDidLoad(){for(var e=document.getElementsByClassName("ekomi-widget-"+this.token),o=0;o<e.length;o++)this.registerWidget(window,this.token)}registerWidget(e,o){if(e._ekomiWidgetsServerUrl="https://widgets.ekomi.com",e._customerId=this.customer,null==e._language&&(e._language=new Array),e._language[o]="auto",void 0!==e._ekomiWidgetTokens?e._ekomiWidgetTokens[e._ekomiWidgetTokens.length]=o:e._ekomiWidgetTokens=new Array(o),void 0===(null===window||void 0===window?void 0:window.ekomiWidgetJs)){window.ekomiWidgetJs=!0;var t=document.createElement("script");t.src="https://sw-assets.ekomiapps.de/static_resources/widget.js",document.getElementsByTagName("head")[0].appendChild(t)}else void 0!==window.ekomiWidgetMain&&window.ekomiWidgetMain("ajax",o);return!0}render(){return[o("div",{id:"widget-container",class:"ekomi-widget-container ekomi-widget-"+this.token}),o("a",{href:"https://www.ekomi-pl.com/opinie-kuchniasklep.html",target:"_blank"},o("img",{alt:"kuchniasklep.pl Reviews with ekomi-pl.com",src:"https://smart-widget-assets.ekomiapps.de/resources/ekomi_logo.png",style:{display:"none"}}))]}};b.style="ks-zaufane{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding:0px;margin:20px 0px 0px 0px;height:150px}ks-zaufane[home] #ekw70.ekw70 .review-text-section{background-color:#ffffff}ks-zaufane[listing]{z-index:10;padding:20px;margin:0px}ks-zaufane[listing]:not([nobg]){background:white}ks-zaufane[listing][nobg] #ekw70.ekw70 .review-text-section{background-color:#ffffff}@media screen and (max-width: 767px){ks-zaufane{height:350px;padding:0px !important;margin:0px;background:-webkit-gradient(linear, \n            left top, left bottom, \n            from(#ffc400), \n            color-stop(42.85714285714286%, #ffc400), \n            color-stop(42.85714285714286%, #ffffff), \n            to(#ffffff)\n        ) !important;background:linear-gradient(180deg, \n            #ffc400 0%, \n            #ffc400 42.85714285714286%, \n            #ffffff 42.85714285714286%, \n            #ffffff 100%\n        ) !important}ks-zaufane[listing]:not([nobg]){background:-webkit-gradient(linear, \n            left top, left bottom, \n            from(#ffc400), \n            color-stop(42.85714285714286%, #ffc400), \n            color-stop(42.85714285714286%, #e5e4e2), \n            to(#e5e4e2)\n        ) !important;background:linear-gradient(180deg, \n            #ffc400 0%, \n            #ffc400 42.85714285714286%, \n            #e5e4e2 42.85714285714286%, \n            #e5e4e2 100%\n        ) !important}}";export{f as ks_error_popup,u as ks_message_popup,h as ks_page_base,x as ks_page_footer,w as ks_page_header,b as ks_zaufane}