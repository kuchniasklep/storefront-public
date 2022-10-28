import{r as e,h as t,c as o,H as s,B as n}from"./index-abcf82c7.js";import{c as i}from"./common-7de2ffe1.js";import{S as a}from"./core-class-5b6160e1.js";import{P as r}from"./pagination-c9190fdf.js";import{T as p}from"./thumbs-e8e6436d.js";import{V as l}from"./validate-cd7ce36d.js";import{c}from"./commonDynamic-57975e8d.js";import{e as d}from"./tracker-f8c9914d.js";import{l as x}from"./loadCommon-ccc26cb3.js";import"./index-0418a9fc.js";const m=class{constructor(t){e(this,t),this.level=3,this.open=[]}click(e,t){let o=this.open;if(o.length==t+1)o[t]==e?(o.pop(),console.log(o)):o[t]=e;else if(o.length>t){const s=o[0]==e;o.splice(t,o.length-t),s||(o=[...o,e])}else o=[...o,e];this.open=[...o],console.log(this.open)}render(){return i.get("categories").map(((e,t)=>this.element(e,t)))}element(e,o,s=0){const n="children"in e&&s+1<this.level,i=this.open.length>0&&this.open[s]==o,a=["category",i?"open":null].join(" ");return t("div",{class:a},t("div",{class:"name",onClick:()=>this.click(o,s)},t("span",null,e.name),n?t("ks-icon",{name:i?"minus":"plus"}):null),n?t("div",{class:"children"},e.children.map(((e,o)=>"children"in e?this.element(e,o,s+1):t("a",{href:e.url},e.name))),t("a",{href:e.url,class:"seeall"},"Zobacz wszystko")):null)}get root(){return o(this)}};m.style="ks-category-sidebar .category>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar .category>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar .category>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar .category>.children>a{padding:4px 0px}ks-category-sidebar .category:not(.open)>.children{max-height:0px !important;opacity:0}ks-category-sidebar .category.open>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}";const h=class{constructor(t){e(this,t)}render(){return[t("span",null,i.get("developmentWarning")),t("ks-icon",{name:"alert-triangle"})]}};h.style="ks-development-warning{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:20px 15px;font-family:var(--font-emphasis);font-size:17px;font-weight:700;line-height:15px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;background-color:rgb(255, 196, 0);color:rgb(0, 0, 0)}ks-development-warning>span{margin-right:8px}@media only screen and (max-width: 959px){ks-development-warning{font-size:14px;line-height:14px}}@media only screen and (max-width: 480px){ks-development-warning{font-size:13px;line-height:13px}}",a.use([r,p]);const k=class{constructor(t){e(this,t),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(e){this.name=e.name,this.message=e.message,this.stack=void 0===e.stack?"":e.stack,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){let e=`${this.name}: ${this.message}`,o="",s=this.stack;const n=parseInt(this.name);isNaN(n)?o="Wystąpił błąd aplikacji. ":(n>=400&&n<500&&(o="Wystąpił błąd aplikacji. "),n>=500&&(o="Wystąpił błąd serwera. "),s+=e),o+="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";const i=`User-agent: ${navigator.userAgent}`;return t("ks-overlay",{dark:!0},t("div",{class:`content ${this.visible}`},t("div",{class:"bar"},t("div",{class:"title"},e),t("div",{class:"close",onClick:()=>this.hide()},t("ks-icon",{name:"x",size:1.2}))),t("div",{class:"message"},o),t("div",{class:"data"},i,t("span",{class:"stack"},s))))}get root(){return o(this)}};k.style="ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}",a.use([r,p]);const f=class{constructor(t){e(this,t),this.name="",this.message="",this.link="",this.linkname="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(e,t,o="",s=""){this.name=e,this.message=t,this.linkname=o,this.link=s,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){return t("ks-dialog",null,t("div",{class:"title"},this.name),t("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?t("ks-button",{secondary:!0,round:!0,link:this.link,name:this.linkname}):null)}get root(){return o(this)}};f.style="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";const g=class{constructor(t){e(this,t),this.displayOnLoad=!1,this.agreement="Wyrażam zgodę na przetwarzanie danych osobowych do celów marketingowych, w celu zbadania opinii o sklepie oraz na otrzymywanie informacji handlowych na wskazany przeze mnie adres e-mail.",this.infoMessage="Kupon rabatowy zostaje przyznany tylko raz na adres email. Minimalna wartość zamówienia wynosi: 100,00 zł",this.successHeading="ZAPISANO DO NEWSLETTERA",this.successMessage="Dziękujemy za dołączenie do grona subskrybentów. Niedługo otrzymasz wiadomość potwierdzającą.",this.success=!1}componentDidLoad(){this.dialog=this.root.querySelector("ks-dialog"),this.displayOnLoad&&-1==document.cookie.search("newsletterPopup=tak")&&setTimeout((()=>{this.Show()}),4e3)}async requestHandler(e){if(e.preventDefault(),!(await l(this.root.querySelector("form"))))return;this.dialog.showLoading();const t=new FormData(e.target);this.track(t.get("email"),t.get("name")),this.dialog.showSuccess(this.successHeading,this.successMessage),this.success=!0}track(e,t){const o={email:e,name:t,subscriber:!0,place:"Zapis do newslettera | Popup"};console.log(o),d((e=>null==e?void 0:e.subscribe(c.state,o)))}async Show(){this.dialog.show()}SetCookie(){var e,t=new Date;t.setMonth(t.getMonth()+1),e="expires="+t.toUTCString()+"; ",document.cookie="newsletterPopup=tak; "+e+"path=/",this.success&&(this.success=!1)}render(){return[t("ks-dialog",{dark:!0,smallmobile:!0,nopadding:!0,onClosed:()=>this.SetCookie()},t("form",{onSubmit:e=>this.requestHandler(e)},t("div",{class:"info"},t("svg",{class:"top",viewBox:"0 0 303 15",width:909,height:45},t("text",{x:"0",y:"12"},"Zapisz się do naszego Newslettera i zyskaj")),t("svg",{class:"heading",viewBox:"0 0 96 12",width:960,height:130},t("text",{x:"-1",y:"12"},"KUPON 10ZŁ")),t("p",null,this.infoMessage)),t("div",{class:"inputs"},t("ks-input-text",{email:!0,center:!0,required:!0,placeholder:"Adres email",name:"email"}),t("ks-input-text",{center:!0,required:!0,placeholder:"Twoje imię",name:"name"})),t("ks-input-check",{large:!0,required:!0,nomessage:!0,name:"zgoda",label:this.agreement}),t("div",{class:"button"},t("ks-button",{submit:!0,round:!0,name:"ZAPISZ SIĘ"}))))]}get root(){return o(this)}};g.style="ks-newsletter-popup-edrone{display:block}ks-newsletter-popup-edrone form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;height:100%;width:100%;max-width:720px}ks-newsletter-popup-edrone .info{padding:60px 60px 20px 60px;fill:#252525;-ms-flex:1 0 auto;flex:1 0 auto;min-height:10px}ks-newsletter-popup-edrone .info .top{width:100%;margin-bottom:10px;font-size:initial;max-height:30px}ks-newsletter-popup-edrone .info .heading{width:100%;font-family:var(--font-emphasis);font-size:initial;max-height:80px;margin-bottom:10px}ks-newsletter-popup-edrone .info p{text-align:center;margin-top:10px}ks-newsletter-popup-edrone .buttons{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:10px;margin-top:30px}ks-newsletter-popup-edrone .inputs{padding:0px 20px}ks-newsletter-popup-edrone .close{color:black !important}ks-newsletter-popup-edrone .button{padding:0px 20px 20px 20px}ks-newsletter-popup-edrone ks-input-check{margin:0px 20px 20px 20px;font-size:13px;line-height:18px}@media (max-width: 720px){ks-newsletter-popup-edrone .info .heading{max-height:50px}ks-newsletter-popup-edrone .email{font-size:16px}}@media (max-width: 540px){ks-newsletter-popup-edrone .info{padding:70px 25px 20px 25px;min-height:140px}ks-newsletter-popup-edrone .info .top{display:none}ks-newsletter-popup-edrone .info p{font-size:13px}ks-newsletter-popup-edrone ks-input-check{font-size:11px;line-height:16px}ks-newsletter-popup-edrone ks-input-check{margin:15px}ks-newsletter-popup-edrone .info .heading{width:100%;max-height:40px}}";const u=class{constructor(t){e(this,t)}clickHandler(){var e;null===(e=document.querySelector("ks-newsletter-popup-edrone"))||void 0===e||e.Show()}render(){return[t("div",{class:"label"},"Newsletter"),t("ks-icon",{name:"mail"}),t("div",{class:"benefit"},"Kupon 10 zł")]}};u.style="ks-newsletter-side-button{position:fixed;right:0;top:200px;z-index:10000;-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-webkit-text-orientation:mixed;text-orientation:mixed;display:-ms-flexbox;display:flex;color:white;font-size:18px;font-family:var(--font-emphasis);padding:20px 8px;border-radius:20px 0px 0px 20px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;background-color:#000000;-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease}@media (max-width: 640px) or (max-height: 540px){ks-newsletter-side-button{display:none}}ks-newsletter-side-button:hover{background-color:#1f1f1f}ks-newsletter-side-button:active{background-color:#2c2c2c}ks-newsletter-side-button .label{font-size:20px;line-height:20px}ks-newsletter-side-button ks-icon{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg);margin:15px 0px}ks-newsletter-side-button .benefit{text-transform:uppercase;font-weight:700}";const b=class{constructor(t){e(this,t),this.loadCommon=!0}componentWillLoad(){this.loadCommon&&x(this.commonData,this.commonDynamicData,n)}render(){return t(s,null,!this.skipbase&&t("ks-page-header",null),t("slot",null),!this.skipbase&&t("ks-page-footer",null),t("ks-newsletter-popup-edrone",{displayOnLoad:i.get("newsletterPopup")}),i.get("newsletterSideButton")?t("ks-newsletter-side-button",null):null,t("ks-product-suggestions",{api:i.get("suggestionApi")}),t("ks-error-popup",null),t("ks-message-popup",null),t("ks-cookie-popup",{message:i.get("cookieMessage"),button:i.get("cookieButton"),delay:i.get("cookieDelay")}))}};b.style="ks-page-base{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:100vh}";const w=class{constructor(t){e(this,t)}render(){const e=i.get("phone"),o=i.get("email"),s=i.get("workingHours"),n=i.get("company"),a=i.get("address"),r=i.get("softwareLink");return[t("div",{class:"about"},t("div",{class:"links"},i.get("footerLinks").map((e=>t("ks-footer-links",{heading:e.name},e.items.map((e=>t("li",null,t("a",{href:e.link},e.name))))))),t("div",{class:"contact"},t("span",null,"Kontakt"),t("a",{style:{display:"none"}}),t("a",{href:`tel:${e}`},t("ks-icon",{name:"phone"}),t("span",null,e)),t("a",{href:`mailto:${o}`},t("ks-icon",{name:"mail"}),t("span",null,o)),t("span",null,t("ks-icon",{name:"clock",size:.9})," ",s),t("span",null,t("ks-icon",{name:"home",size:.9})," ",n),t("span",null,t("ks-icon",{name:"map-pin",size:.9})," ",a))),t("div",{class:"newsletter"},t("div",null,"Zapisz się do naszego newslettera i zyskaj"),t("div",null,"KUPON 10ZŁ"),t("ks-button",{light:!0,border:!0,name:"ZAPISZ SIĘ",onClick:()=>{var e;return null===(e=document.querySelector("ks-newsletter-popup-edrone"))||void 0===e?void 0:e.Show()}}))),t("div",{class:"portals"},t("div",null,i.get("social").map((e=>t("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image})))),t("div",null,i.get("reviewers").map((e=>t("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image}))))),t("div",{class:"software"},t("a",{href:r,rel:"nofollow"},"Oprogramowanie sklepu ShopGold"))]}};w.style="ks-page-footer{display:block;overflow:hidden;background-color:var(--footer-color);color:var(--footer-text-color);font-size:16px}ks-page-footer .about{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:50px 70px 40px 70px;margin:auto}ks-page-footer .contact>span:first-of-type{display:block;color:var(--footer-heading-color);font-family:var(--font-emphasis);font-weight:700;font-size:18px;margin:0 0 15px 0}ks-page-footer .contact a,ks-page-footer .contact>span{display:block;text-decoration:none !important;font-size:16px;margin-bottom:5px;color:var(--footer-text-color);-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-page-footer .contact a:hover{color:var(--footer-text-color-hover)}ks-page-footer .contact a:active{color:var(--footer-text-color-active)}ks-page-footer .contact ks-icon{margin-right:5px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;min-height:100px}ks-page-footer .newsletter{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-flow:column nowrap;flex-flow:column nowrap;text-align:center;padding:0 0 0 30px;-ms-flex-negative:0;flex-shrink:0}ks-page-footer .newsletter>div{font-family:var(--font-emphasis)}ks-page-footer .newsletter>div:last-of-type{font-size:48px;line-height:40px;font-weight:700;margin:5px 0 20px 0}ks-page-footer .newsletter ks-button{width:100%}ks-page-footer .portals{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px;border-top:solid 1px #2b2b2b}ks-page-footer .portals>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:10px}ks-page-footer .separator{width:1px;height:35px;margin:0 20px;background-color:#2b2b2b}ks-page-footer .software{background-color:var(--footer-color-darker);color:var(--footer-text-color-darker);font-size:13px;text-align:center;padding:10px}ks-page-footer .software>a{color:var(--footer-text-color-darker)}@media only screen and (max-width: 1060px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:50px 30px 40px 30px}ks-page-footer .contact{max-width:220px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}ks-page-footer .newsletter{margin-top:40px;padding:40px 0 0 0;border-top:solid 1px #2b2b2b}ks-page-footer .newsletter ks-button{max-width:290px}}@media only screen and (max-width: 640px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:30px}ks-page-footer .links{margin-top:0px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}ks-page-footer .links>*{margin-top:40px;margin-right:0px;padding:0}ks-page-footer .newsletter>div{font-size:14px}ks-page-footer .newsletter>div:last-of-type{font-size:40px;margin-bottom:10px}}";const y=class{constructor(t){e(this,t)}render(){return t(s,null,i.get("developmentWarning")?t("ks-development-warning",null):null,t("ks-top-banner",null),t("ks-navbar",null))}};a.use([r,p]);const v=class{constructor(t){e(this,t),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(){this.overlay.show(),setTimeout((()=>{this.visible="visible"}),10)}async hide(){this.visible="hidden",this.overlay.hide()}onClosed(){this.visible="hidden"}render(){return t("ks-overlay",{dark:!0},t("nav",{class:`content ${this.visible}`},t("button",{class:"close",onClick:()=>this.hide()},t("ks-icon",{name:"x"})),t("slot",null)))}get root(){return o(this)}};v.style="ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);transform:translateX(100%);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);transform:translateX(-100%)}";const z=class{constructor(t){e(this,t)}render(){const e=i.get("topNotice");if(!e||Object.keys(e).length<=0)return t(s,{hidden:!0});const o=[e.image?t("ks-img2",{vertical:!0,sync:!0,src:e.image}):null,t("span",null,e.message)];return t(s,{style:{backgroundColor:e.color,color:e.textColor}},e.link?t("a",{class:"container",href:e.link},o):t("div",{class:"container"},o))}};z.style="ks-top-banner{display:block;position:relative;padding:10px 10px;font-family:var(--font-emphasis);font-size:15px;font-weight:700;line-height:15px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-top-banner[hidden]{display:none}ks-top-banner .container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:inherit !important;text-decoration:none !important;text-align:center}ks-top-banner ks-img2{width:auto;height:35px;margin:-8px 3px -8px 0px}@media only screen and (max-width: 959px){ks-top-banner{font-size:14px;line-height:14px}}@media only screen and (max-width: 480px){ks-top-banner{font-size:13px;line-height:13px}}";export{m as ks_category_sidebar,h as ks_development_warning,k as ks_error_popup,f as ks_message_popup,g as ks_newsletter_popup_edrone,u as ks_newsletter_side_button,b as ks_page_base,w as ks_page_footer,y as ks_page_header,v as ks_sidepanel,z as ks_top_banner}