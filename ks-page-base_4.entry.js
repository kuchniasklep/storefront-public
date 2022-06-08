import{r as e,h as t,H as o}from"./index-6e14abe0.js";import{c as n}from"./common-3fbec05b.js";import{c as r}from"./commonDynamic-3300d49a.js";import{t as a,e as s,r as i}from"./tracker-7fb8955b.js";import"./index-a26ba0e6.js";class c{constructor(){this.ttq=new Promise((e=>{var t=setInterval((()=>{void 0!==ttq&&(e(ttq),clearInterval(t))}),100)}))}pageview(){this.ttq.then((e=>{e.track("Browse")}))}product(e,t,o,n,r){this.ttq.then((e=>{e.track("ViewContent",{content_type:"product",content_id:t,content_name:o,currency:r,price:n,quantity:1,value:n})}))}addToCart(e,t,o,n,r,a){this.ttq.then((e=>{e.track("AddToCart",{content_type:"product",content_id:t,content_name:o,currency:a,price:n,quantity:r,value:n*r})}))}order_checkout(e,t,o,n){this.ttq.then((e=>{e.track("StartCheckout",{contents:this.transformProducts(t),currency:n,value:o})}))}order_form(e,t,o,n){this.ttq.then((e=>{e.track("AddBilling",{contents:this.transformProducts(t),value:o,currency:n})}))}order_placed(e,t,o,n){this.ttq.then((e=>{e.track("Checkout",{contents:this.transformProducts(t),value:o,currency:n})}))}search(e){}transformProducts(e){return e.map((e=>({content_id:e.id,content_type:"product",content_name:e.name,quantity:e.quantity,price:e.price})))}}class l{constructor(e){const t=e.split(", ");this.pixel=new Promise((e=>{var o,n,r,a,s,i;o=window,n=document,r="script",o.fbq||(a=o.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},o._fbq||(o._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],(s=n.createElement(r)).async=!0,s.src="https://connect.facebook.net/en_US/fbevents.js",(i=n.getElementsByTagName(r)[0]).parentNode.insertBefore(s,i)),t.forEach((e=>{fbq("init",e)})),e(fbq)}))}pageview(e){this.pixel.then((t=>{t("track","PageView",{},{eventID:e})}))}product(e,t,o,n,r){this.pixel.then((a=>{a("track","ViewContent",{content_type:"product",content_name:o,value:n,currency:r,content_ids:[t]},{eventID:e})}))}addToCart(e,t,o,n,r,a){this.pixel.then((s=>{s("track","AddToCart",{content_type:"product",content_name:o,value:n,currency:a,contents:[{id:t,quantity:r}]},{eventID:e})}))}order_checkout(e,t,o,n){this.pixel.then((r=>{r("track","InitiateCheckout",{contents:this.transformProducts(t),content_type:"product",value:o,currency:n},{eventID:e})}))}order_form(e,t,o,n){}order_placed(e,t,o,n){this.pixel.then((r=>{r("track","Purchase",{contents:this.transformProducts(t),content_type:"product",value:o,currency:n},{eventID:e})}))}search(e){this.pixel.then((t=>{t("track","Search",{search_string:e})}))}transformProducts(e){return e.map((e=>({id:e.id,quantity:e.quantity})))}}const p=class{constructor(t){e(this,t)}componentWillLoad(){const e=document.getElementById(this.commonData),t=JSON.parse(e.innerHTML);Object.keys(t).map((e=>{n.set(e,t[e])}));{const e=document.getElementById(this.commonDynamicData),t=JSON.parse(e.innerHTML);Object.keys(t).map((e=>{r.set(e,t[e])})),setTimeout((()=>{r.set("loaded",!0)}),100),this.track()}}track(){a.get("loaded").then((()=>{const e=r.get("tracking"),t=e=>a.set("trackers",[...a.get("trackers"),e]);e.tiktok&&t(new c),e.facebook&&t(new l(e.facebook)),s((t=>null==t?void 0:t.pageview(e.pageview))),i()}))}render(){return t(o,null,!this.skipbase&&t("ks-page-header",null),t("slot",null),!this.skipbase&&t("ks-page-footer",null))}};p.style="ks-page-base{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:100vh}";const f=class{constructor(t){e(this,t)}render(){const e=n.get("phone"),o=n.get("email"),r=n.get("workingHours"),a=n.get("company"),s=n.get("address"),i=n.get("softwareLink");return[t("div",{class:"about"},t("div",{class:"links"},n.get("footerLinks").map((e=>t("ks-footer-links",{heading:e.name},e.items.map((e=>t("li",null,t("a",{href:e.link},e.name))))))),t("div",{class:"contact"},t("span",null,"Kontakt"),t("a",{style:{display:"none"}}),t("a",{href:`tel:${e}`},t("ks-icon",{name:"phone"}),t("span",null,e)),t("a",{href:`mailto:${o}`},t("ks-icon",{name:"mail"}),t("span",null,o)),t("span",null,t("ks-icon",{name:"clock",size:.9})," ",r),t("span",null,t("ks-icon",{name:"home",size:.9})," ",a),t("span",null,t("ks-icon",{name:"map-pin",size:.9})," ",s))),t("div",{class:"newsletter"},t("div",null,"Zapisz się do naszego newslettera i zyskaj"),t("div",null,"KUPON 10ZŁ"),t("ks-button",{light:!0,border:!0,name:"ZAPISZ SIĘ",onClick:()=>document.querySelector("ks-newsletter-popup").Show()}))),t("div",{class:"portals"},t("div",null,n.get("social").map((e=>t("ks-footer-button",{width:64,height:64,href:e.link,image:e.image})))),t("div",null,n.get("reviewers").map((e=>t("ks-footer-button",{width:64,height:64,href:e.link,image:e.image}))))),t("div",{class:"software"},t("a",{href:i,rel:"nofollow"},"Oprogramowanie sklepu ShopGold"))]}};f.style="ks-page-footer{display:block;overflow:hidden;background-color:var(--footer-color);color:var(--footer-text-color);font-size:16px}ks-page-footer .about{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:50px 70px 40px 70px;margin:auto}ks-page-footer .contact>span:first-of-type{display:block;color:var(--footer-heading-color);font-family:var(--font-emphasis);font-weight:700;font-size:18px;margin:0 0 15px 0}ks-page-footer .contact a,ks-page-footer .contact>span{display:block;text-decoration:none !important;font-size:16px;margin-bottom:5px;color:var(--footer-text-color);-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-page-footer .contact a:hover{color:var(--footer-text-color-hover)}ks-page-footer .contact a:active{color:var(--footer-text-color-active)}ks-page-footer .contact ks-icon{margin-right:5px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;min-height:100px}ks-page-footer .newsletter{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-flow:column nowrap;flex-flow:column nowrap;text-align:center;padding:0 0 0 30px;-ms-flex-negative:0;flex-shrink:0}ks-page-footer .newsletter>div{font-family:var(--font-emphasis)}ks-page-footer .newsletter>div:last-of-type{font-size:48px;line-height:40px;font-weight:700;margin:5px 0 20px 0}ks-page-footer .newsletter ks-button{width:100%}ks-page-footer .portals{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px;border-top:solid 1px #2b2b2b}ks-page-footer .portals>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:10px}ks-page-footer .separator{width:1px;height:35px;margin:0 20px;background-color:#2b2b2b}ks-page-footer .software{background-color:var(--footer-color-darker);color:var(--footer-text-color-darker);font-size:13px;text-align:center;padding:10px}ks-page-footer .software>a{color:var(--footer-text-color-darker)}@media only screen and (max-width: 1060px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:50px 30px 40px 30px}ks-page-footer .contact{max-width:220px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}ks-page-footer .newsletter{margin-top:40px;padding:40px 0 0 0;border-top:solid 1px #2b2b2b}ks-page-footer .newsletter ks-button{max-width:290px}}@media only screen and (max-width: 640px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:30px}ks-page-footer .links{margin-top:0px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}ks-page-footer .links>*{margin-top:40px;margin-right:0px;padding:0}ks-page-footer .newsletter>div{font-size:14px}ks-page-footer .newsletter>div:last-of-type{font-size:40px;margin-bottom:10px}ks-page-footer .portals>div:first-of-type{padding:20px}}";const d=class{constructor(t){e(this,t)}render(){return t(o,null,t("ks-top-banner",null),t("ks-navbar",null),t("ks-newsletter-popup",{api:n.get("newsletterApi"),"login-link":n.get("loginLink"),"register-link":n.get("registerLink"),"logged-in":r.get("loggedIn")}),t("ks-product-suggestions",{api:n.get("suggestionApi")}),t("ks-error-popup",null),t("ks-message-popup",null),t("ks-cookie-popup",{message:n.get("cookieMessage"),button:n.get("cookieButton"),delay:n.get("cookieDelay")}))}},g=class{constructor(t){e(this,t),this.home=!1,this.listing=!1,this.nobg=!1}componentDidLoad(){for(var e=document.getElementsByClassName("ekomi-widget-"+this.token),t=0;t<e.length;t++)this.registerWidget(window,this.token)}registerWidget(e,t){if(e._ekomiWidgetsServerUrl="https://widgets.ekomi.com",e._customerId=this.customer,null==e._language&&(e._language=new Array),e._language[t]="auto",void 0!==e._ekomiWidgetTokens?e._ekomiWidgetTokens[e._ekomiWidgetTokens.length]=t:e._ekomiWidgetTokens=new Array(t),void 0===(null===window||void 0===window?void 0:window.ekomiWidgetJs)){window.ekomiWidgetJs=!0;var o=document.createElement("script");o.src="https://sw-assets.ekomiapps.de/static_resources/widget.js",document.getElementsByTagName("head")[0].appendChild(o)}else void 0!==window.ekomiWidgetMain&&window.ekomiWidgetMain("ajax",t);return!0}render(){return[t("div",{id:"widget-container",class:"ekomi-widget-container ekomi-widget-"+this.token}),t("a",{href:"https://www.ekomi-pl.com/opinie-kuchniasklep.html",target:"_blank"},t("img",{alt:"kuchniasklep.pl Reviews with ekomi-pl.com",src:"https://smart-widget-assets.ekomiapps.de/resources/ekomi_logo.png",style:{display:"none"}}))]}};g.style="ks-zaufane{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding:0px;margin:20px 0px 0px 0px;height:150px}ks-zaufane[home] #ekw70.ekw70 .review-text-section{background-color:#ffffff}ks-zaufane[listing]{z-index:10;padding:20px;margin:0px}ks-zaufane[listing]:not([nobg]){background:white}ks-zaufane[listing][nobg] #ekw70.ekw70 .review-text-section{background-color:#ffffff}@media screen and (max-width: 767px){ks-zaufane{height:350px;padding:0px !important;margin:0px;background:-webkit-gradient(linear, \n            left top, left bottom, \n            from(#ffc400), \n            color-stop(42.85714285714286%, #ffc400), \n            color-stop(42.85714285714286%, #ffffff), \n            to(#ffffff)\n        ) !important;background:linear-gradient(180deg, \n            #ffc400 0%, \n            #ffc400 42.85714285714286%, \n            #ffffff 42.85714285714286%, \n            #ffffff 100%\n        ) !important}ks-zaufane[listing]:not([nobg]){background:-webkit-gradient(linear, \n            left top, left bottom, \n            from(#ffc400), \n            color-stop(42.85714285714286%, #ffc400), \n            color-stop(42.85714285714286%, #e5e4e2), \n            to(#e5e4e2)\n        ) !important;background:linear-gradient(180deg, \n            #ffc400 0%, \n            #ffc400 42.85714285714286%, \n            #e5e4e2 42.85714285714286%, \n            #e5e4e2 100%\n        ) !important}}";export{p as ks_page_base,f as ks_page_footer,d as ks_page_header,g as ks_zaufane}