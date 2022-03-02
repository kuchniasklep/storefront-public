import{r as t,h as e,g as o,H as s}from"./index-e340c957.js";import{c as n}from"./common-0beafac0.js";import{S as r}from"./core-class-5b6160e1.js";import{P as a}from"./pagination-c9190fdf.js";import{T as i}from"./thumbs-e8e6436d.js";import{c as l}from"./commonDynamic-66b27967.js";import{t as c,e as p,r as d}from"./tracker-a4a7c425.js";import"./index-689756ca.js";let h=class{constructor(e){t(this,e),this.level=3,this.open=[]}click(t,e){let o=this.open;if(o.length==e+1)o[e]==t?(o.pop(),console.log(o)):o[e]=t;else if(o.length>e){const s=o[0]==t;o.splice(e,o.length-e),s||(o=[...o,t])}else o=[...o,t];this.open=[...o],console.log(this.open)}render(){return n.get("categories").map(((t,e)=>this.element(t,e)))}element(t,o,s=0){const n="children"in t&&s+1<this.level,r=this.open.length>0&&this.open[s]==o,a=["category",r?"open":null].join(" ");return e("div",{class:a},e("div",{class:"name",onClick:()=>this.click(o,s)},e("span",null,t.name),n?e("ks-icon",{name:r?"minus":"plus"}):null),n?e("div",{class:"children"},t.children.map(((t,o)=>"children"in t?this.element(t,o,s+1):e("a",{href:t.url},t.name))),e("a",{href:t.url,class:"seeall"},"Zobacz wszystko")):null)}get root(){return o(this)}};h.style="ks-category-sidebar .category>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar .category>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar .category>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar .category>.children>a{padding:4px 0px}ks-category-sidebar .category:not(.open)>.children{max-height:0px !important;opacity:0}ks-category-sidebar .category.open>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}",r.use([a,i]);let k=class{constructor(e){t(this,e),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(t){this.name=t.name,this.message=t.message,this.stack=void 0===t.stack?"":t.stack,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){let t=`${this.name}: ${this.message}`,o="",s=this.stack;const n=parseInt(this.name);isNaN(n)?o="Wystąpił błąd aplikacji. ":(n>=400&&n<500&&(o="Wystąpił błąd aplikacji. "),n>=500&&(o="Wystąpił błąd serwera. "),s+=t),o+="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";const r=`User-agent: ${navigator.userAgent}`;return e("ks-overlay",{dark:!0},e("div",{class:`content ${this.visible}`},e("div",{class:"bar"},e("div",{class:"title"},t),e("div",{class:"close",onClick:()=>this.hide()},e("ks-icon",{name:"x",size:1.2}))),e("div",{class:"message"},o),e("div",{class:"data"},r,e("span",{class:"stack"},s))))}get root(){return o(this)}};k.style="ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}",r.use([a,i]);let f=class{constructor(e){t(this,e),this.name="",this.message="",this.link="",this.linkname="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(t,e,o="",s=""){this.name=t,this.message=e,this.linkname=o,this.link=s,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){return e("ks-dialog",null,e("div",{class:"title"},this.name),e("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?e("ks-button",{secondary:!0,round:!0,link:this.link,name:this.linkname}):null)}get root(){return o(this)}};f.style="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";class m{constructor(){this.ttq=new Promise((t=>{var e=setInterval((()=>{void 0!==ttq&&(t(ttq),clearInterval(e))}),100)}))}pageview(){this.ttq.then((t=>{t.track("Browse")}))}product(t,e,o,s,n){this.ttq.then((t=>{t.track("ViewContent",{content_type:"product",content_id:e,content_name:o,currency:n,price:s,quantity:1,value:s})}))}addToCart(t,e,o,s,n,r){this.ttq.then((t=>{t.track("AddToCart",{content_type:"product",content_id:e,content_name:o,currency:r,price:s,quantity:n,value:s*n})}))}order_checkout(t,e,o,s){this.ttq.then((t=>{t.track("StartCheckout",{contents:this.transformProducts(e),currency:s,value:o})}))}order_form(t,e,o,s){this.ttq.then((t=>{t.track("AddBilling",{contents:this.transformProducts(e),value:o,currency:s})}))}order_placed(t,e,o,s){this.ttq.then((t=>{t.track("Checkout",{contents:this.transformProducts(e),value:o,currency:s})}))}search(t){}transformProducts(t){return t.map((t=>({content_id:t.id,content_type:"product",content_name:t.name,quantity:t.quantity,price:t.price})))}}class x{constructor(t){const e=t.split(", ");this.pixel=new Promise((t=>{var o,s,n,r,a,i;o=window,s=document,n="script",o.fbq||(r=o.fbq=function(){r.callMethod?r.callMethod.apply(r,arguments):r.queue.push(arguments)},o._fbq||(o._fbq=r),r.push=r,r.loaded=!0,r.version="2.0",r.queue=[],(a=s.createElement(n)).async=!0,a.src="https://connect.facebook.net/en_US/fbevents.js",(i=s.getElementsByTagName(n)[0]).parentNode.insertBefore(a,i)),e.forEach((t=>{fbq("init",t)})),t(fbq)}))}pageview(t){this.pixel.then((e=>{e("track","PageView",{},{eventID:t})}))}product(t,e,o,s,n){this.pixel.then((r=>{r("track","ViewContent",{content_type:"product",content_name:o,value:s,currency:n,content_ids:[e]},{eventID:t})}))}addToCart(t,e,o,s,n,r){this.pixel.then((a=>{a("track","AddToCart",{content_type:"product",content_name:o,value:s,currency:r,contents:[{id:e,quantity:n}]},{eventID:t})}))}order_checkout(t,e,o,s){this.pixel.then((n=>{n("track","InitiateCheckout",{contents:this.transformProducts(e),content_type:"product",value:o,currency:s},{eventID:t})}))}order_form(t,e,o,s){}order_placed(t,e,o,s){this.pixel.then((n=>{n("track","Purchase",{contents:this.transformProducts(e),content_type:"product",value:o,currency:s},{eventID:t})}))}search(t){this.pixel.then((e=>{e("track","Search",{search_string:t})}))}transformProducts(t){return t.map((t=>({id:t.id,quantity:t.quantity})))}}let g=class{constructor(e){t(this,e)}componentWillLoad(){const t=document.getElementById(this.commonData),e=JSON.parse(t.innerHTML);Object.keys(e).map((t=>{n.set(t,e[t])}));{const t=document.getElementById(this.commonDynamicData),e=JSON.parse(t.innerHTML);Object.keys(e).map((t=>{l.set(t,e[t])})),setTimeout((()=>{l.set("loaded",!0)}),100)}}track(){c.get("loaded").then((()=>{const t=l.get("tracking"),e=t=>c.set("trackers",[...c.get("trackers"),t]);t.tiktok&&e(new m),t.facebook&&e(new x(t.facebook)),p((e=>null==e?void 0:e.pageview(t.pageview))),d()}))}render(){return e(s,null,!this.skipbase&&e("ks-page-header",null),e("slot",null),!this.skipbase&&e("ks-page-footer",null))}};g.style="";let u=class{constructor(e){t(this,e)}render(){const t=n.get("phone"),o=n.get("email"),s=n.get("workingHours"),r=n.get("company"),a=n.get("address"),i=n.get("softwareLink");return[e("div",{class:"about"},e("div",{class:"links"},n.get("footerLinks").map((t=>e("ks-footer-links",null,e("span",{slot:"heading"},t.name),t.items.map((t=>e("li",null,e("a",{href:t.link},t.name))))))),e("div",{class:"contact"},e("span",null,"Kontakt"),e("a",{href:`mailto:${o}`},e("ks-icon",{name:"mail"})," ",o),e("a",{href:`tel:${t}`},e("ks-icon",{name:"phone"})," ",t),e("span",null,e("ks-icon",{name:"clock",size:.9})," ",s),e("span",null,e("ks-icon",{name:"home",size:.9})," ",r),e("span",null,e("ks-icon",{name:"map-pin",size:.9})," ",a))),e("div",{class:"newsletter"},e("div",null,"Zapisz się do naszego newslettera i zyskaj"),e("div",null,"KUPON 10ZŁ"),e("ks-button",{light:!0,border:!0,name:"ZAPISZ SIĘ",onClick:()=>document.querySelector("ks-newsletter-popup").Show()}))),e("div",{class:"portals"},e("div",null,n.get("social").map((t=>e("ks-footer-button",{slot:"social",width:64,height:64,href:t.link,image:t.image})))),e("div",null,n.get("reviewers").map((t=>e("ks-footer-button",{slot:"social",width:64,height:64,href:t.link,image:t.image}))))),e("div",{class:"software"},e("a",{href:i,rel:"nofollow"},"Oprogramowanie sklepu ShopGold"))]}};u.style="ks-page-footer{display:block;margin-top:20px;background-color:var(--footer-color);color:var(--footer-text-color);font-size:16px}ks-page-footer .about{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:50px 70px 40px 70px;margin:auto}ks-page-footer .contact>span:first-of-type{display:block;color:var(--footer-heading-color);font-family:var(--font-emphasis);font-weight:700;font-size:18px;margin:0 0 15px 0}ks-page-footer .contact a,ks-page-footer .contact>span{display:block;text-decoration:none !important;font-size:16px;margin-bottom:5px;color:var(--footer-text-color);-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-page-footer .contact a:hover{color:var(--footer-text-color-hover)}ks-page-footer .contact a:active{color:var(--footer-text-color-active)}ks-page-footer .contact ks-icon{margin-right:5px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;min-height:100px}ks-page-footer .newsletter{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-flow:column nowrap;flex-flow:column nowrap;text-align:center;padding:0 0 0 30px;-ms-flex-negative:0;flex-shrink:0}ks-page-footer .newsletter>div{font-family:var(--font-emphasis)}ks-page-footer .newsletter>div:last-of-type{font-size:48px;line-height:40px;font-weight:700;margin:5px 0 20px 0}ks-page-footer .newsletter ks-button{width:100%}ks-page-footer .portals{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px;border-top:solid 1px #2b2b2b}ks-page-footer .portals>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:10px}ks-page-footer .separator{width:1px;height:35px;margin:0 20px;background-color:#2b2b2b}ks-page-footer .software{background-color:var(--footer-color-darker);color:var(--footer-text-color-darker);font-size:13px;text-align:center;padding:10px}ks-page-footer .software>a{color:var(--footer-text-color-darker)}@media only screen and (max-width: 1060px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:50px 30px 40px 30px}ks-page-footer .contact{max-width:220px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}ks-page-footer .newsletter{margin-top:40px;padding:40px 0 0 0;border-top:solid 1px #2b2b2b}ks-page-footer .newsletter ks-button{max-width:290px}}@media only screen and (max-width: 640px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:30px}ks-page-footer .links{margin-top:0px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}ks-page-footer .links>*{margin-top:40px;margin-right:0px;padding:0}ks-page-footer .newsletter>div{font-size:14px}ks-page-footer .newsletter>div:last-of-type{font-size:40px;margin-bottom:10px}ks-page-footer .portals>div:first-of-type{padding:20px}}";let b=class{constructor(e){t(this,e)}render(){return e(s,null,e("ks-top-banner",null),e("ks-navbar",null),e("ks-newsletter-popup",{api:n.get("newsletterApi"),"login-link":n.get("loginLink"),"register-link":n.get("registerLink")}),e("ks-product-suggestions",{api:n.get("suggestionApi")}),e("ks-error-popup",null),e("ks-message-popup",null),e("ks-cookie-popup",{message:n.get("cookieMessage"),button:n.get("cookieButton"),delay:n.get("cookieDelay")}))}};r.use([a,i]);let y=class{constructor(e){t(this,e),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(){this.overlay.show(),setTimeout((()=>{this.visible="visible"}),10)}async hide(){this.visible="hidden",this.overlay.hide()}onClosed(){this.visible="hidden"}render(){return e("ks-overlay",{dark:!0},e("nav",{class:`content ${this.visible}`},e("button",{class:"close",onClick:()=>this.hide()},e("ks-icon",{name:"x"})),e("slot",null)))}get root(){return o(this)}};y.style="ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);transform:translateX(100%);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);transform:translateX(-100%)}";let v=class{constructor(e){t(this,e)}render(){const t=n.get("topNotice");return!t||Object.keys(t).length<=0?e(s,{hidden:!0}):e(s,{style:{backgroundColor:t.color}},e("a",{href:t.link},t.image?e("ks-img",{vertical:!0,sync:!0,src:t.image}):null,e("span",null,t.message)))}};v.style="ks-top-banner{display:block;position:relative;height:40px;padding-right:90px;font-family:var(--font-emphasis);font-size:16px;line-height:16px;font-weight:700;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-top-banner[hidden]{display:none}ks-top-banner a{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;color:inherit !important;text-decoration:none !important}ks-top-banner a>ks-img{width:auto}@media only screen and (max-width: 959px){ks-top-banner{font-size:14px;line-height:14px;padding-right:20px}}@media only screen and (max-width: 480px){ks-top-banner a>span{max-width:150px;margin:0}ks-top-banner{font-size:13px;line-height:13px}}";export{h as ks_category_sidebar,k as ks_error_popup,f as ks_message_popup,g as ks_page_base,u as ks_page_footer,b as ks_page_header,y as ks_sidepanel,v as ks_top_banner}