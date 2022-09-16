import{r as e,h as t,c as o,H as n}from"./index-e6122d86.js";import{c as i}from"./common-866eee8e.js";import{S as s}from"./core-class-5b6160e1.js";import{P as r}from"./pagination-c9190fdf.js";import{T as a}from"./thumbs-e8e6436d.js";import{V as p}from"./validate-cd7ce36d.js";import{c as l}from"./commonDynamic-04bad578.js";import{e as c,t as d,r as w}from"./tracker-1877ab42.js";import"./index-299fb9fe.js";const h=class{constructor(t){e(this,t),this.level=3,this.open=[]}click(e,t){let o=this.open;if(o.length==t+1)o[t]==e?(o.pop(),console.log(o)):o[t]=e;else if(o.length>t){const n=o[0]==e;o.splice(t,o.length-t),n||(o=[...o,e])}else o=[...o,e];this.open=[...o],console.log(this.open)}render(){return i.get("categories").map(((e,t)=>this.element(e,t)))}element(e,o,n=0){const i="children"in e&&n+1<this.level,s=this.open.length>0&&this.open[n]==o,r=["category",s?"open":null].join(" ");return t("div",{class:r},t("div",{class:"name",onClick:()=>this.click(o,n)},t("span",null,e.name),i?t("ks-icon",{name:s?"minus":"plus"}):null),i?t("div",{class:"children"},e.children.map(((e,o)=>"children"in e?this.element(e,o,n+1):t("a",{href:e.url},e.name))),t("a",{href:e.url,class:"seeall"},"Zobacz wszystko")):null)}get root(){return o(this)}};h.style="ks-category-sidebar .category>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar .category>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar .category>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar .category>.children>a{padding:4px 0px}ks-category-sidebar .category:not(.open)>.children{max-height:0px !important;opacity:0}ks-category-sidebar .category.open>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}";const m=class{constructor(t){e(this,t)}render(){return[t("span",null,i.get("developmentWarning")),t("ks-icon",{name:"alert-triangle"})]}};m.style="ks-development-warning{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:20px 15px;font-family:var(--font-emphasis);font-size:17px;font-weight:700;line-height:15px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;background-color:rgb(255, 196, 0);color:rgb(0, 0, 0)}ks-development-warning>span{margin-right:8px}@media only screen and (max-width: 959px){ks-development-warning{font-size:14px;line-height:14px}}@media only screen and (max-width: 480px){ks-development-warning{font-size:13px;line-height:13px}}",s.use([r,a]);const u=class{constructor(t){e(this,t),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(e){this.name=e.name,this.message=e.message,this.stack=void 0===e.stack?"":e.stack,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){let e=`${this.name}: ${this.message}`,o="",n=this.stack;const i=parseInt(this.name);isNaN(i)?o="Wystąpił błąd aplikacji. ":(i>=400&&i<500&&(o="Wystąpił błąd aplikacji. "),i>=500&&(o="Wystąpił błąd serwera. "),n+=e),o+="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";const s=`User-agent: ${navigator.userAgent}`;return t("ks-overlay",{dark:!0},t("div",{class:`content ${this.visible}`},t("div",{class:"bar"},t("div",{class:"title"},e),t("div",{class:"close",onClick:()=>this.hide()},t("ks-icon",{name:"x",size:1.2}))),t("div",{class:"message"},o),t("div",{class:"data"},s,t("span",{class:"stack"},n))))}get root(){return o(this)}};u.style="ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}",s.use([r,a]);const x=class{constructor(t){e(this,t),this.name="",this.message="",this.link="",this.linkname="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(e,t,o="",n=""){this.name=e,this.message=t,this.linkname=o,this.link=n,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){return t("ks-dialog",null,t("div",{class:"title"},this.name),t("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?t("ks-button",{secondary:!0,round:!0,link:this.link,name:this.linkname}):null)}get root(){return o(this)}};x.style="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";const k=class{constructor(t){e(this,t),this.displayOnLoad=!1,this.agreement="Wyrażam zgodę na przetwarzanie danych osobowych do celów marketingowych, w celu zbadania opinii o sklepie oraz na otrzymywanie informacji handlowych na wskazany przeze mnie adres e-mail.",this.infoMessage="Kupon rabatowy zostaje przyznany tylko raz na adres email. Minimalna wartość zamówienia wynosi: 100,00 zł",this.successHeading="ZAPISANO DO NEWSLETTERA",this.successMessage="Dziękujemy za dołączenie do grona subskrybentów. Niedługo otrzymasz wiadomość potwierdzającą.",this.success=!1}componentDidLoad(){this.dialog=this.root.querySelector("ks-dialog"),this.displayOnLoad&&-1==document.cookie.search("newsletterPopup=tak")&&setTimeout((()=>{this.Show()}),4e3)}async requestHandler(e){if(e.preventDefault(),!(await p(this.root.querySelector("form"))))return;this.dialog.showLoading();const t=new FormData(e.target);this.track(t.get("email"),t.get("name")),this.dialog.showSuccess(this.successHeading,this.successMessage),this.success=!0}track(e,t){const o={email:e,name:t,subscriber:!0,place:"Zapis do newslettera | Popup"};console.log(o),c((e=>null==e?void 0:e.subscribe(l.state,o)))}async Show(){this.dialog.show()}SetCookie(){var e,t=new Date;t.setMonth(t.getMonth()+1),e="expires="+t.toUTCString()+"; ",document.cookie="newsletterPopup=tak; "+e+"path=/",this.success&&(this.success=!1)}render(){return[t("ks-dialog",{dark:!0,smallmobile:!0,nopadding:!0,onClosed:()=>this.SetCookie()},t("form",{onSubmit:e=>this.requestHandler(e)},t("div",{class:"info"},t("svg",{class:"top",viewBox:"0 0 303 15",width:909,height:45},t("text",{x:"0",y:"12"},"Zapisz się do naszego Newslettera i zyskaj")),t("svg",{class:"heading",viewBox:"0 0 96 12",width:960,height:130},t("text",{x:"-1",y:"12"},"KUPON 10ZŁ")),t("p",null,this.infoMessage)),t("div",{class:"inputs"},t("ks-input-text",{email:!0,center:!0,required:!0,placeholder:"Adres email",name:"email"}),t("ks-input-text",{center:!0,required:!0,placeholder:"Twoje imię",name:"name"})),t("ks-input-check",{large:!0,required:!0,nomessage:!0,name:"zgoda",label:this.agreement}),t("div",{class:"button"},t("ks-button",{submit:!0,round:!0,name:"ZAPISZ SIĘ"}))))]}get root(){return o(this)}};k.style="ks-newsletter-popup-edrone{display:block}ks-newsletter-popup-edrone form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;height:100%;width:100%;max-width:720px}ks-newsletter-popup-edrone .info{padding:60px 60px 20px 60px;fill:#252525;-ms-flex:1 0 auto;flex:1 0 auto;min-height:10px}ks-newsletter-popup-edrone .info .top{width:100%;margin-bottom:10px;font-size:initial;max-height:30px}ks-newsletter-popup-edrone .info .heading{width:100%;font-family:var(--font-emphasis);font-size:initial;max-height:80px;margin-bottom:10px}ks-newsletter-popup-edrone .info p{text-align:center;margin-top:10px}ks-newsletter-popup-edrone .buttons{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:10px;margin-top:30px}ks-newsletter-popup-edrone .inputs{padding:0px 20px}ks-newsletter-popup-edrone .close{color:black !important}ks-newsletter-popup-edrone .button{padding:0px 20px 20px 20px}ks-newsletter-popup-edrone ks-input-check{margin:0px 20px 20px 20px;font-size:13px;line-height:18px}@media (max-width: 720px){ks-newsletter-popup-edrone .info .heading{max-height:50px}ks-newsletter-popup-edrone .email{font-size:16px}}@media (max-width: 540px){ks-newsletter-popup-edrone .info{padding:70px 25px 20px 25px;min-height:140px}ks-newsletter-popup-edrone .info .top{display:none}ks-newsletter-popup-edrone .info p{font-size:13px}ks-newsletter-popup-edrone ks-input-check{font-size:11px;line-height:16px}ks-newsletter-popup-edrone ks-input-check{margin:15px}ks-newsletter-popup-edrone .info .heading{width:100%;max-height:40px}}";class f{constructor(){this.ttq=new Promise((e=>{var t=setInterval((()=>{void 0!==ttq&&(e(ttq),clearInterval(t))}),100)}))}pageview(e,t){this.ttq.then((e=>{e.track("Browse")}))}product(e,t=""){this.ttq.then((t=>{t.track("ViewContent",{content_type:"product",content_id:e.id,content_name:e.name,currency:e.currency,price:e.currentPrice,quantity:1,value:e.currentPrice})}))}listing(e,t){}addToCart(e,t){this.ttq.then((t=>{t.track("AddToCart",{content_type:"product",content_id:e.id,content_name:e.name,currency:e.currency,price:e.currentPrice,quantity:e.quantity,value:e.currentPrice*e.quantity})}))}order_checkout(e,t,o){this.ttq.then((e=>{e.track("StartCheckout",{contents:this.transformProducts(t.products),value:t.productValue,currency:t.currency})}))}order_form(e,t,o){this.ttq.then((e=>{e.track("AddBilling",{contents:this.transformProducts(t.products),value:t.productValue,currency:t.currency})}))}order_placed(e,t,o){this.ttq.then((e=>{e.track("Checkout",{contents:this.transformProducts(t.products),value:t.productValue,currency:t.currency})}))}search(e){}subscribe(e,t){}transformProducts(e){return e.map((e=>({content_id:e.id,content_type:"product",content_name:e.name,quantity:e.quantity,price:e.currentPrice})))}}class g{constructor(e){const t=e.split(", ");this.pixel=new Promise((e=>{var o,n,i,s,r,a;o=window,n=document,i="script",o.fbq||(s=o.fbq=function(){s.callMethod?s.callMethod.apply(s,arguments):s.queue.push(arguments)},o._fbq||(o._fbq=s),s.push=s,s.loaded=!0,s.version="2.0",s.queue=[],(r=n.createElement(i)).async=!0,r.src="https://connect.facebook.net/en_US/fbevents.js",(a=n.getElementsByTagName(i)[0]).parentNode.insertBefore(r,a)),t.forEach((e=>{fbq("init",e)})),e(fbq)}))}pageview(e,t){this.pixel.then((e=>{e("track","PageView",{},{eventID:t})}))}product(e,t=""){this.pixel.then((o=>{o("track","ViewContent",{content_type:"product",content_name:e.name,value:e.currentPrice,currency:e.currency,content_ids:[e.id]},{eventID:t})}))}listing(e,t){}addToCart(e,t){this.pixel.then((o=>{o("track","AddToCart",{content_type:"product",content_name:e.name,value:e.currentPrice,currency:e.currency,contents:[{id:e.id,quantity:e.quantity}]},{eventID:t})}))}order_checkout(e,t,o){this.pixel.then((e=>{e("track","InitiateCheckout",{contents:this.transformProducts(t.products),content_type:"product",value:t.productValue,currency:t.currency},{eventID:o})}))}order_form(e,t,o){}order_placed(e,t,o){this.pixel.then((e=>{e("track","Purchase",{contents:this.transformProducts(t.products),content_type:"product",value:t.productValue,currency:t.currency},{eventID:o})}))}search(e){this.pixel.then((t=>{t("track","Search",{search_string:e})}))}subscribe(e,t){}transformProducts(e){return e.map((e=>({id:e.id,quantity:e.quantity})))}}class b{init(e){var t,o;(null===(t=window._edrone)||void 0===t?void 0:t.page_loaded)&&(null===(o=window._edrone)||void 0===o||o.init(e))}relativeToAbsolute(e){return e.includes("http")?e:document.baseURI+e}pageview(e,t){if(!e.loggedIn||!e.customer)return;const o=e.customer;window._edrone=window._edrone||{},window._edrone.email=o.email,window._edrone.first_name=o.firstName,window._edrone.last_name=o.lastName,window._edrone.subscriber_status=o.subscriber?1:0,window._edrone.country=o.countryISO2,window._edrone.city=o.city,window._edrone.phone=o.phone,this.init()}product(e,t=""){window._edrone=window._edrone||{},window._edrone.product_skus=e.model,window._edrone.product_ids=e.id,window._edrone.product_titles=encodeURIComponent(e.name),(null==e?void 0:e.images.length)>0&&(window._edrone.product_images=encodeURIComponent(this.relativeToAbsolute(e.images[0].full.url))),window._edrone.product_urls=encodeURIComponent(this.relativeToAbsolute(document.location.href)),window._edrone.product_availability=e.availability,window._edrone.product_category_ids=e.categories.map((e=>e.id)).join("~"),window._edrone.product_category_names=e.categories.map((e=>encodeURIComponent(e.name))).join("~"),window._edrone.action_type="product_view",this.init()}listing(e,t){window._edrone=window._edrone||{};const o=e.breadcrumbs.filter((e=>"0"!=e.id));window._edrone.product_category_ids=o.map((e=>e.id)).join("~"),window._edrone.product_category_names=o.map((e=>encodeURIComponent(e.name))).join("~"),window._edrone.action_type="category_view",this.init()}addToCart(e,t){window._edrone=window._edrone||{},window._edrone.product_ids=e.id,window._edrone.product_skus=e.sku,window._edrone.product_titles=encodeURIComponent(e.name),window._edrone.product_images=encodeURIComponent(this.relativeToAbsolute(e.imageFull)),window._edrone.product_urls=encodeURIComponent(this.relativeToAbsolute(e.link)),window._edrone.product_category_ids=e.categories.map((e=>e.id)).join("~"),window._edrone.product_category_names=e.categories.map((e=>encodeURIComponent(e.name))).join("~"),window._edrone.action_type="add_to_cart",this.init()}order_checkout(e,t,o){if(!e.loggedIn||!e.customer)return;const n=e.customer;window._edrone=window._edrone||{},window._edrone.email=n.email,window._edrone.first_name=n.firstName,window._edrone.last_name=n.lastName,window._edrone.subscriber_status=n.subscriber?1:0,window._edrone.country=n.countryISO2,window._edrone.city=n.city,window._edrone.phone=n.phone,window._edrone.action_type="other",this.init()}order_form(e,t,o){}order_placed(e,t,o){const n=e.customer,i=t.products;window._edrone=window._edrone||{},window._edrone.email=n.email,window._edrone.first_name=n.firstName,window._edrone.last_name=n.lastName,window._edrone.subscriber_status=n.subscriber?1:0,window._edrone.product_skus=i.map((e=>e.sku)).join("|"),window._edrone.product_ids=i.map((e=>e.id)).join("|"),window._edrone.product_titles=i.map((e=>encodeURIComponent(e.id))).join("|"),window._edrone.product_images=i.map((e=>encodeURIComponent(this.relativeToAbsolute(e.image)))).join("|"),window._edrone.product_urls=i.map((e=>encodeURIComponent(this.relativeToAbsolute(e.link)))).join("|"),window._edrone.product_counts=i.map((e=>e.quantity)).join("|"),window._edrone.product_category_ids=i.map((e=>e.categories.map((e=>e.id)).join("~"))).join("|"),window._edrone.product_category_names=i.map((e=>e.categories.map((e=>encodeURIComponent(e.name))).join("~"))).join("|"),window._edrone.order_id=t.id,window._edrone.country=n.countryISO2,window._edrone.city=n.city,window._edrone.base_currency=n.currency,window._edrone.order_currency=t.currency,window._edrone.base_payment_value=t.productValue,window._edrone.order_payment_value=t.productValue,window._edrone.action_type="order",this.init()}search(e){}subscribe(e,t){if(window._edrone=window._edrone||{},window._edrone.customer_tags=t.place,window._edrone.email=t.email,(null==t?void 0:t.name)&&(window._edrone.first_name=t.name),window._edrone.subscriber_status=t.subscriber?1:0,e.loggedIn&&e.customer){const t=e.customer;window._edrone.first_name=t.firstName,window._edrone.last_name=t.lastName,window._edrone.country=t.countryISO2,window._edrone.city=t.city,window._edrone.phone=t.phone}window._edrone.action_type="subscribe",this.init(!1)}}const y=class{constructor(t){e(this,t)}componentWillLoad(){const e=document.getElementById(this.commonData),t=JSON.parse(e.innerHTML);Object.keys(t).map((e=>{i.set(e,t[e])}));{const e=document.getElementById(this.commonDynamicData),t=JSON.parse(e.innerHTML);Object.keys(t).map((e=>{l.set(e,t[e])})),setTimeout((()=>{l.set("loaded",!0)}),100),this.track()}}track(){d.get("loaded").then((()=>{const e=l.get("tracking"),t=e=>d.set("trackers",[...d.get("trackers"),e]);e.tiktok&&t(new f),e.facebook&&t(new g(e.facebook)),e.edrone&&t(new b),c((t=>null==t?void 0:t.pageview(l.state,e.pageview))),w()}))}render(){return t(n,null,!this.skipbase&&t("ks-page-header",null),t("slot",null),!this.skipbase&&t("ks-page-footer",null),t("ks-newsletter-popup-edrone",{displayOnLoad:i.get("newsletterPopup")}),t("ks-product-suggestions",{api:i.get("suggestionApi")}),t("ks-error-popup",null),t("ks-message-popup",null),t("ks-cookie-popup",{message:i.get("cookieMessage"),button:i.get("cookieButton"),delay:i.get("cookieDelay")}))}};y.style="ks-page-base{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:100vh}";const v=class{constructor(t){e(this,t)}render(){const e=i.get("phone"),o=i.get("email"),n=i.get("workingHours"),s=i.get("company"),r=i.get("address"),a=i.get("softwareLink");return[t("div",{class:"about"},t("div",{class:"links"},i.get("footerLinks").map((e=>t("ks-footer-links",{heading:e.name},e.items.map((e=>t("li",null,t("a",{href:e.link},e.name))))))),t("div",{class:"contact"},t("span",null,"Kontakt"),t("a",{style:{display:"none"}}),t("a",{href:`tel:${e}`},t("ks-icon",{name:"phone"}),t("span",null,e)),t("a",{href:`mailto:${o}`},t("ks-icon",{name:"mail"}),t("span",null,o)),t("span",null,t("ks-icon",{name:"clock",size:.9})," ",n),t("span",null,t("ks-icon",{name:"home",size:.9})," ",s),t("span",null,t("ks-icon",{name:"map-pin",size:.9})," ",r))),t("div",{class:"newsletter"},t("div",null,"Zapisz się do naszego newslettera i zyskaj"),t("div",null,"KUPON 10ZŁ"),t("ks-button",{light:!0,border:!0,name:"ZAPISZ SIĘ",onClick:()=>{var e;return null===(e=document.querySelector("ks-newsletter-popup-edrone"))||void 0===e?void 0:e.Show()}}))),t("div",{class:"portals"},t("div",null,i.get("social").map((e=>t("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image})))),t("div",null,i.get("reviewers").map((e=>t("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image}))))),t("div",{class:"software"},t("a",{href:a,rel:"nofollow"},"Oprogramowanie sklepu ShopGold"))]}};v.style="ks-page-footer{display:block;overflow:hidden;background-color:var(--footer-color);color:var(--footer-text-color);font-size:16px}ks-page-footer .about{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:50px 70px 40px 70px;margin:auto}ks-page-footer .contact>span:first-of-type{display:block;color:var(--footer-heading-color);font-family:var(--font-emphasis);font-weight:700;font-size:18px;margin:0 0 15px 0}ks-page-footer .contact a,ks-page-footer .contact>span{display:block;text-decoration:none !important;font-size:16px;margin-bottom:5px;color:var(--footer-text-color);-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-page-footer .contact a:hover{color:var(--footer-text-color-hover)}ks-page-footer .contact a:active{color:var(--footer-text-color-active)}ks-page-footer .contact ks-icon{margin-right:5px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;min-height:100px}ks-page-footer .newsletter{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-flow:column nowrap;flex-flow:column nowrap;text-align:center;padding:0 0 0 30px;-ms-flex-negative:0;flex-shrink:0}ks-page-footer .newsletter>div{font-family:var(--font-emphasis)}ks-page-footer .newsletter>div:last-of-type{font-size:48px;line-height:40px;font-weight:700;margin:5px 0 20px 0}ks-page-footer .newsletter ks-button{width:100%}ks-page-footer .portals{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px;border-top:solid 1px #2b2b2b}ks-page-footer .portals>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:10px}ks-page-footer .separator{width:1px;height:35px;margin:0 20px;background-color:#2b2b2b}ks-page-footer .software{background-color:var(--footer-color-darker);color:var(--footer-text-color-darker);font-size:13px;text-align:center;padding:10px}ks-page-footer .software>a{color:var(--footer-text-color-darker)}@media only screen and (max-width: 1060px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:50px 30px 40px 30px}ks-page-footer .contact{max-width:220px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}ks-page-footer .newsletter{margin-top:40px;padding:40px 0 0 0;border-top:solid 1px #2b2b2b}ks-page-footer .newsletter ks-button{max-width:290px}}@media only screen and (max-width: 640px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:30px}ks-page-footer .links{margin-top:0px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}ks-page-footer .links>*{margin-top:40px;margin-right:0px;padding:0}ks-page-footer .newsletter>div{font-size:14px}ks-page-footer .newsletter>div:last-of-type{font-size:40px;margin-bottom:10px}}";const z=class{constructor(t){e(this,t)}render(){return t(n,null,i.get("developmentWarning")?t("ks-development-warning",null):null,t("ks-top-banner",null),t("ks-navbar",null))}};s.use([r,a]);const _=class{constructor(t){e(this,t),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(){this.overlay.show(),setTimeout((()=>{this.visible="visible"}),10)}async hide(){this.visible="hidden",this.overlay.hide()}onClosed(){this.visible="hidden"}render(){return t("ks-overlay",{dark:!0},t("nav",{class:`content ${this.visible}`},t("button",{class:"close",onClick:()=>this.hide()},t("ks-icon",{name:"x"})),t("slot",null)))}get root(){return o(this)}};_.style="ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);transform:translateX(100%);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);transform:translateX(-100%)}";const j=class{constructor(t){e(this,t)}render(){const e=i.get("topNotice");if(!e||Object.keys(e).length<=0)return t(n,{hidden:!0});const o=[e.image?t("ks-img2",{vertical:!0,sync:!0,src:e.image}):null,t("span",null,e.message)];return t(n,{style:{backgroundColor:e.color,color:e.textColor}},e.link?t("a",{class:"container",href:e.link},o):t("div",{class:"container"},o))}};j.style="ks-top-banner{display:block;position:relative;padding:10px 10px;font-family:var(--font-emphasis);font-size:15px;font-weight:700;line-height:15px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-top-banner[hidden]{display:none}ks-top-banner .container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:inherit !important;text-decoration:none !important;text-align:center}ks-top-banner ks-img2{width:auto;height:35px;margin:-8px 3px -8px 0px}@media only screen and (max-width: 959px){ks-top-banner{font-size:14px;line-height:14px}}@media only screen and (max-width: 480px){ks-top-banner{font-size:13px;line-height:13px}}";export{h as ks_category_sidebar,m as ks_development_warning,u as ks_error_popup,x as ks_message_popup,k as ks_newsletter_popup_edrone,y as ks_page_base,v as ks_page_footer,z as ks_page_header,_ as ks_sidepanel,j as ks_top_banner}