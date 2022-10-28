import{r as e,h as t,c as n,e as o,H as s,B as a}from"./index-abcf82c7.js";import{c as i}from"./common-7de2ffe1.js";import{S as r}from"./core-class-5b6160e1.js";import{P as l}from"./pagination-c9190fdf.js";import{T as p}from"./thumbs-e8e6436d.js";import{c}from"./commonDynamic-57975e8d.js";import{F as d}from"./fetch-bbb23998.js";import{V as x}from"./validate-cd7ce36d.js";import{e as g}from"./tracker-f8c9914d.js";import{l as h}from"./loadCommon-ccc26cb3.js";import"./index-0418a9fc.js";const m=class{constructor(t){e(this,t),this.level=3,this.open=[]}click(e,t){let n=this.open;if(n.length==t+1)n[t]==e?(n.pop(),console.log(n)):n[t]=e;else if(n.length>t){const o=n[0]==e;n.splice(t,n.length-t),o||(n=[...n,e])}else n=[...n,e];this.open=[...n],console.log(this.open)}render(){return i.get("categories").map(((e,t)=>this.element(e,t)))}element(e,n,o=0){const s="children"in e&&o+1<this.level,a=this.open.length>0&&this.open[o]==n,i=["category",a?"open":null].join(" ");return t("div",{class:i},t("div",{class:"name",onClick:()=>this.click(n,o)},t("span",null,e.name),s?t("ks-icon",{name:a?"minus":"plus"}):null),s?t("div",{class:"children"},e.children.map(((e,n)=>"children"in e?this.element(e,n,o+1):t("a",{href:e.url},e.name))),t("a",{href:e.url,class:"seeall"},"Zobacz wszystko")):null)}get root(){return n(this)}};m.style="ks-category-sidebar .category>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar .category>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar .category>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar .category>.children>a{padding:4px 0px}ks-category-sidebar .category:not(.open)>.children{max-height:0px !important;opacity:0}ks-category-sidebar .category.open>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}";const u=class{constructor(t){e(this,t)}render(){return[t("span",null,i.get("developmentWarning")),t("ks-icon",{name:"alert-triangle"})]}};u.style="ks-development-warning{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:20px 15px;font-family:var(--font-emphasis);font-size:17px;font-weight:700;line-height:15px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;background-color:rgb(255, 196, 0);color:rgb(0, 0, 0)}ks-development-warning>span{margin-right:8px}@media only screen and (max-width: 959px){ks-development-warning{font-size:14px;line-height:14px}}@media only screen and (max-width: 480px){ks-development-warning{font-size:13px;line-height:13px}}";const k=class{constructor(t){e(this,t),this.closed=o(this,"closed",7),this.close=!0,this.loading=!1,this.success=!1,this.failure=!1,this.heading="",this.message=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(){this.overlay.show()}async hide(){this.overlay.hide()}async showLoading(){this.loading=!0,this.close=!1}async showSuccess(e,t){this.heading=e,this.message=t,setTimeout((()=>{this.success=!0,this.loading=!1,this.close=!0}),400)}async showFailure(e,t){this.heading=e,this.message=t,setTimeout((()=>{this.failure=!0,this.loading=!1,this.close=!0}),400)}closeHandler(){(this.success||this.failure)&&setTimeout((()=>{this.success=!1,this.failure=!1}),400)}render(){return t("ks-overlay",{dark:this.dark,close:this.close,onClosed:()=>this.closeHandler()},t("div",{class:"content"},this.close?t("button",{class:"close",onClick:()=>this.hide()},t("ks-icon",{name:"x",size:1.3})):null,t("slot",null),this.loading?t("div",{class:"overlay"},t("ks-loader",{large:!0,dark:!0})):null,this.success||this.failure?t("div",{class:"overlay opaque"},t("div",null,t("ks-icon",{name:this.success?"check":"alert-triangle",size:4}),t("p",{class:"header"},this.heading),t("p",null,this.message))):null))}get root(){return n(this)}};k.style="ks-dialog{display:block}ks-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;padding:30px;line-height:24px}ks-dialog[nopadding] .content{padding:0px !important}@media (max-width: 720px){ks-dialog .content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;padding:20px}ks-dialog[smallmobile] .content{height:auto;width:90%}}@media (max-width: 420px){ks-dialog .content{font-size:13px;line-height:18px;padding:15px}ks-dialog[smallmobile] .content{height:auto;min-width:280px}}ks-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-dialog .close{position:absolute;top:20px;right:20px;border-style:none;outline-style:none;background-color:transparent;z-index:200;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog[dark] .close{color:white}ks-dialog .overlay{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;padding:30px;background-color:rgba(255,255,255, 0.8);-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog .opaque{background-color:#ffffff}ks-dialog .overlay>div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-box-sizing:border-box;box-sizing:border-box;max-width:800px;width:80%;text-align:center}ks-dialog .overlay>div>*{-webkit-animation:vertical-swipe-in-short 0.5s;animation:vertical-swipe-in-short 0.5s}ks-dialog .overlay .header{font-family:var(--font-emphasis);font-size:20px;font-weight:700}",r.use([l,p]);const f=class{constructor(t){e(this,t),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(e){this.name=e.name,this.message=e.message,this.stack=void 0===e.stack?"":e.stack,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){let e=`${this.name}: ${this.message}`,n="",o=this.stack;const s=parseInt(this.name);isNaN(s)?n="Wystąpił błąd aplikacji. ":(s>=400&&s<500&&(n="Wystąpił błąd aplikacji. "),s>=500&&(n="Wystąpił błąd serwera. "),o+=e),n+="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";const a=`User-agent: ${navigator.userAgent}`;return t("ks-overlay",{dark:!0},t("div",{class:`content ${this.visible}`},t("div",{class:"bar"},t("div",{class:"title"},e),t("div",{class:"close",onClick:()=>this.hide()},t("ks-icon",{name:"x",size:1.2}))),t("div",{class:"message"},n),t("div",{class:"data"},a,t("span",{class:"stack"},o))))}get root(){return n(this)}};f.style="ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}",r.use([l,p]);const b=class{constructor(t){e(this,t),this.name="",this.message="",this.link="",this.linkname="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(e,t,n="",o=""){this.name=e,this.message=t,this.linkname=n,this.link=o,this.overlay.show(),this.visible="visible"}async hide(){this.visible="hidden",this.overlay.hide()}render(){return t("ks-dialog",null,t("div",{class:"title"},this.name),t("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?t("ks-button",{secondary:!0,round:!0,link:this.link,name:this.linkname}):null)}get root(){return n(this)}};b.style="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";const w=class{constructor(t){e(this,t)}render(){const e=i.get("language").flag,n=i.get("currency"),o=n.symbol,s=n.symbol.length>1?" small":"";return[t("div",{class:"button","aria-label":this.name},t("div",{class:"flag"},t("ks-img2",{src:e})),t("span",{class:"symbol"+s},o)),t("div",{class:"name"},this.name)]}};w.style="ks-navbar-language-button{display:block;position:relative;height:70px}ks-navbar-language-button>.button{outline-style:none;text-decoration:none !important;min-width:60px;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:var(--navbar-text-color) !important;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-navbar-language-button>.button:hover{background-color:var(--navbar-color-hover)}ks-navbar-language-button>.button:active{background-color:var(--navbar-color-active)}ks-navbar-language-button>.name{position:absolute;bottom:-28px;z-index:2147483649;width:250%;left:-75%;font-size:14px;text-transform:uppercase;text-align:center;color:var(--navbar-text-color);opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}ks-navbar-language-button>.button:hover+.name{opacity:1}ks-navbar-language-button .flag{height:100%;width:100%;max-width:30px;max-height:30px;border-radius:30px;overflow:hidden;border:solid 2px white;background-color:white}ks-navbar-language-button .symbol{position:absolute;top:0;right:3px;min-width:25px;height:25px;padding:0px 1px 0px 0px;margin-top:8px;border-radius:500px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#000000;color:var(--navbar-text-color);font-size:16px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}ks-navbar-language-button .symbol.small{font-size:14px}";const v=class{constructor(t){e(this,t),this.toggled=!1}componentDidRender(){this.sidepanel=this.root.querySelector("ks-sidepanel")}async show(){this.sidepanel.show()}languageChange(e){if(i.get("languageDomainChange")){var t=new URL(document.location.href);return t.port="",t.hostname=e.domain,void(document.location.href=t.href)}const n=new FormData;n.append("id",e.id.toString()),d(c.get("api").changeLanguage,n).then((()=>document.location.reload()))}currencyChange(e){const t=new FormData;t.append("id",e.id.toString()),d(c.get("api").changeCurrency,t).then((()=>document.location.reload()))}render(){const e=i.get("translations"),n=i.get("languages"),o=i.get("language").id,s=i.get("currencies"),a=i.get("currency").id;return t("ks-sidepanel",null,t("div",{class:"title"},e.panelLanguage),n.map((e=>t("div",{class:e.id==o?"language active":"language",onClick:()=>this.languageChange(e)},t("div",{class:"name"},e.name),t("div",{class:"flag"},t("ks-img2",{src:e.flag}))))),t("div",{class:"title"},e.panelCurrency),s.map((e=>t("div",{class:e.id==a?"currency active":"currency",onClick:()=>this.currencyChange(e)},t("div",{class:"name"},e.name),t("div",{class:"tag"},t("div",{class:"code"},e.code),t("div",{class:"symbol"},e.symbol))))))}get root(){return n(this)}};v.style="ks-navbar-language-panel nav{padding:10px 0px 10px 0px !important}ks-navbar-language-panel .language,ks-navbar-language-panel .currency{display:-ms-flexbox;display:flex;padding:10px 23px;height:50px;max-height:50px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}ks-navbar-language-panel .language.active,ks-navbar-language-panel .currency.active{background-color:#e1e1e1}ks-navbar-language-panel .language:hover,ks-navbar-language-panel .currency:hover{background-color:#ececec}ks-navbar-language-panel .language:active,ks-navbar-language-panel .currency:active{background-color:#cecece}ks-navbar-language-panel .flag{max-height:35px;max-width:35px;border-radius:50px;border:2px solid #303030;background-color:#303030;overflow:hidden}ks-navbar-language-panel .tag{background-color:black;color:white;font-size:14px;display:-ms-flexbox;display:flex}ks-navbar-language-panel .code{padding:5px 10px;width:27px;text-align:center}ks-navbar-language-panel .symbol{background-color:#303030;padding:5px 10px;width:15px;text-align:center}ks-navbar-language-panel .title{padding:10px 23px;border-bottom:1px solid black;font-size:18px;font-weight:700;font-family:var(--font-emphasis)}ks-navbar-language-panel .title:not(:first-of-type){margin-top:20px}";const y=class{constructor(t){e(this,t),this.displayOnLoad=!1,this.agreement="Wyrażam zgodę na przetwarzanie danych osobowych do celów marketingowych, w celu zbadania opinii o sklepie oraz na otrzymywanie informacji handlowych na wskazany przeze mnie adres e-mail.",this.infoMessage="Kupon rabatowy zostaje przyznany tylko raz na adres email. Minimalna wartość zamówienia wynosi: 100,00 zł",this.successHeading="ZAPISANO DO NEWSLETTERA",this.successMessage="Dziękujemy za dołączenie do grona subskrybentów. Niedługo otrzymasz wiadomość potwierdzającą.",this.success=!1}componentDidLoad(){this.dialog=this.root.querySelector("ks-dialog"),this.displayOnLoad&&-1==document.cookie.search("newsletterPopup=tak")&&setTimeout((()=>{this.Show()}),4e3)}async requestHandler(e){if(e.preventDefault(),!(await x(this.root.querySelector("form"))))return;this.dialog.showLoading();const t=new FormData(e.target);this.track(t.get("email"),t.get("name")),this.dialog.showSuccess(this.successHeading,this.successMessage),this.success=!0}track(e,t){const n={email:e,name:t,subscriber:!0,place:"Zapis do newslettera | Popup"};console.log(n),g((e=>null==e?void 0:e.subscribe(c.state,n)))}async Show(){this.dialog.show()}SetCookie(){var e,t=new Date;t.setMonth(t.getMonth()+1),e="expires="+t.toUTCString()+"; ",document.cookie="newsletterPopup=tak; "+e+"path=/",this.success&&(this.success=!1)}render(){return[t("ks-dialog",{dark:!0,smallmobile:!0,nopadding:!0,onClosed:()=>this.SetCookie()},t("form",{onSubmit:e=>this.requestHandler(e)},t("div",{class:"info"},t("svg",{class:"top",viewBox:"0 0 303 15",width:909,height:45},t("text",{x:"0",y:"12"},"Zapisz się do naszego Newslettera i zyskaj")),t("svg",{class:"heading",viewBox:"0 0 96 12",width:960,height:130},t("text",{x:"-1",y:"12"},"KUPON 10ZŁ")),t("p",null,this.infoMessage)),t("div",{class:"inputs"},t("ks-input-text",{email:!0,center:!0,required:!0,placeholder:"Adres email",name:"email"}),t("ks-input-text",{center:!0,required:!0,placeholder:"Twoje imię",name:"name"})),t("ks-input-check",{large:!0,required:!0,nomessage:!0,name:"zgoda",label:this.agreement}),t("div",{class:"button"},t("ks-button",{submit:!0,round:!0,name:"ZAPISZ SIĘ"}))))]}get root(){return n(this)}};y.style="ks-newsletter-popup-edrone{display:block}ks-newsletter-popup-edrone form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;height:100%;width:100%;max-width:720px}ks-newsletter-popup-edrone .info{padding:60px 60px 20px 60px;fill:#252525;-ms-flex:1 0 auto;flex:1 0 auto;min-height:10px}ks-newsletter-popup-edrone .info .top{width:100%;margin-bottom:10px;font-size:initial;max-height:30px}ks-newsletter-popup-edrone .info .heading{width:100%;font-family:var(--font-emphasis);font-size:initial;max-height:80px;margin-bottom:10px}ks-newsletter-popup-edrone .info p{text-align:center;margin-top:10px}ks-newsletter-popup-edrone .buttons{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:10px;margin-top:30px}ks-newsletter-popup-edrone .inputs{padding:0px 20px}ks-newsletter-popup-edrone .close{color:black !important}ks-newsletter-popup-edrone .button{padding:0px 20px 20px 20px}ks-newsletter-popup-edrone ks-input-check{margin:0px 20px 20px 20px;font-size:13px;line-height:18px}@media (max-width: 720px){ks-newsletter-popup-edrone .info .heading{max-height:50px}ks-newsletter-popup-edrone .email{font-size:16px}}@media (max-width: 540px){ks-newsletter-popup-edrone .info{padding:70px 25px 20px 25px;min-height:140px}ks-newsletter-popup-edrone .info .top{display:none}ks-newsletter-popup-edrone .info p{font-size:13px}ks-newsletter-popup-edrone ks-input-check{font-size:11px;line-height:16px}ks-newsletter-popup-edrone ks-input-check{margin:15px}ks-newsletter-popup-edrone .info .heading{width:100%;max-height:40px}}";const z=class{constructor(t){e(this,t)}clickHandler(){var e;null===(e=document.querySelector("ks-newsletter-popup-edrone"))||void 0===e||e.Show()}render(){const e=i.get("translations");return[t("div",{class:"label"},e.newsletterSideLeft),t("ks-icon",{name:"mail"}),t("div",{class:"benefit"},e.newsletterSideRight)]}};z.style="ks-newsletter-side-button{position:fixed;right:0;top:200px;z-index:10000;-webkit-writing-mode:vertical-rl;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;-webkit-text-orientation:mixed;text-orientation:mixed;display:-ms-flexbox;display:flex;color:white;font-size:18px;font-family:var(--font-emphasis);padding:20px 8px;border-radius:20px 0px 0px 20px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;background-color:#000000;-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease}@media (max-width: 640px) or (max-height: 540px){ks-newsletter-side-button{display:none}}ks-newsletter-side-button:hover{background-color:#1f1f1f}ks-newsletter-side-button:active{background-color:#2c2c2c}ks-newsletter-side-button .label{font-size:20px;line-height:20px}ks-newsletter-side-button ks-icon{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg);margin:15px 0px}ks-newsletter-side-button .benefit{text-transform:uppercase;font-weight:700}";const j=class{constructor(t){e(this,t),this.loadCommon=!0}componentWillLoad(){this.loadCommon&&h(this.commonData,this.commonDynamicData,a)}render(){return t(s,null,!this.skipbase&&t("ks-page-header",null),t("slot",null),!this.skipbase&&t("ks-page-footer",null),t("ks-newsletter-popup-edrone",{displayOnLoad:i.get("newsletterPopup")}),i.get("newsletterSideButton")?t("ks-newsletter-side-button",null):null,t("ks-product-suggestions",{api:i.get("suggestionApi")}),t("ks-error-popup",null),t("ks-message-popup",null),t("ks-cookie-popup",{message:i.get("cookieMessage"),button:i.get("cookieButton"),delay:i.get("cookieDelay")}))}};j.style="ks-page-base{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:100vh}";const _=class{constructor(t){e(this,t)}render(){const e=i.get("phone"),n=i.get("email"),o=i.get("workingHours"),s=i.get("company"),a=i.get("address"),r=i.get("softwareLink"),l=i.get("translations");return[t("div",{class:"about"},t("div",{class:"links"},i.get("footerLinks").map((e=>t("ks-footer-links",{heading:e.name},e.items.map((e=>t("li",null,t("a",{href:e.link},e.name))))))),t("div",{class:"contact"},t("span",null,l.footerContact),t("a",{style:{display:"none"}}),t("a",{href:`tel:${e}`},t("ks-icon",{name:"phone"}),t("span",null,e)),t("a",{href:`mailto:${n}`},t("ks-icon",{name:"mail"}),t("span",null,n)),t("span",null,t("ks-icon",{name:"clock",size:.9})," ",o),t("span",null,t("ks-icon",{name:"home",size:.9})," ",s),t("span",null,t("ks-icon",{name:"map-pin",size:.9})," ",a))),t("div",{class:"newsletter"},t("div",null,l.footerNewsletterSmall),t("div",null,l.footerNewsletterLarge),t("ks-button",{light:!0,border:!0,name:l.footerNewsletterSubmit,onClick:()=>{var e;return null===(e=document.querySelector("ks-newsletter-popup-edrone"))||void 0===e?void 0:e.Show()}}))),t("div",{class:"portals"},t("div",null,i.get("social").map((e=>t("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image})))),t("div",null,i.get("reviewers").map((e=>t("ks-footer-button",{width:e.width,height:e.height,href:e.link,image:e.image}))))),t("div",{class:"software"},t("a",{href:r,rel:"nofollow"},l.footerSoftware))]}};_.style="ks-page-footer{display:block;overflow:hidden;background-color:var(--footer-color);color:var(--footer-text-color);font-size:16px}ks-page-footer .about{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:50px 70px 40px 70px;margin:auto}ks-page-footer .contact>span:first-of-type{display:block;color:var(--footer-heading-color);font-family:var(--font-emphasis);font-weight:700;font-size:18px;margin:0 0 15px 0}ks-page-footer .contact a,ks-page-footer .contact>span{display:block;text-decoration:none !important;font-size:16px;margin-bottom:5px;color:var(--footer-text-color);-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-page-footer .contact a:hover{color:var(--footer-text-color-hover)}ks-page-footer .contact a:active{color:var(--footer-text-color-active)}ks-page-footer .contact ks-icon{margin-right:5px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;min-height:100px}ks-page-footer .newsletter{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-flow:column nowrap;flex-flow:column nowrap;text-align:center;padding:0 0 0 30px;-ms-flex-negative:0;flex-shrink:0}ks-page-footer .newsletter>div{font-family:var(--font-emphasis)}ks-page-footer .newsletter>div:last-of-type{font-size:48px;line-height:40px;font-weight:700;margin:5px 0 20px 0}ks-page-footer .newsletter ks-button{width:100%}ks-page-footer .portals{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px;border-top:solid 1px #2b2b2b}ks-page-footer .portals>div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:10px}ks-page-footer .separator{width:1px;height:35px;margin:0 20px;background-color:#2b2b2b}ks-page-footer .software{background-color:var(--footer-color-darker);color:var(--footer-text-color-darker);font-size:13px;text-align:center;padding:10px}ks-page-footer .software>a{color:var(--footer-text-color-darker)}@media only screen and (max-width: 1060px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:50px 30px 40px 30px}ks-page-footer .contact{max-width:220px}ks-page-footer .links{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}ks-page-footer .newsletter{margin-top:40px;padding:40px 0 0 0;border-top:solid 1px #2b2b2b}ks-page-footer .newsletter ks-button{max-width:290px}}@media only screen and (max-width: 640px){ks-page-footer .about{-ms-flex-direction:column;flex-direction:column;padding:30px}ks-page-footer .links{margin-top:0px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center}ks-page-footer .links>*{margin-top:40px;margin-right:0px;padding:0}ks-page-footer .newsletter>div{font-size:14px}ks-page-footer .newsletter>div:last-of-type{font-size:40px;margin-bottom:10px}}";const C=class{constructor(t){e(this,t)}render(){return t(s,null,i.get("developmentWarning")?t("ks-development-warning",null):null,t("ks-top-banner",null),t("ks-navbar",null))}};r.use([l,p]);const D=class{constructor(t){e(this,t),this.name="",this.message="",this.stack="",this.visible=""}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay")}async show(){this.overlay.show(),setTimeout((()=>{this.visible="visible"}),10)}async hide(){this.visible="hidden",this.overlay.hide()}onClosed(){this.visible="hidden"}render(){return t("ks-overlay",{dark:!0},t("nav",{class:`content ${this.visible}`},t("button",{class:"close",onClick:()=>this.hide()},t("ks-icon",{name:"x"})),t("slot",null)))}get root(){return n(this)}};D.style="ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);transform:translateX(100%);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);transform:translateX(-100%)}";const S=class{constructor(t){e(this,t)}render(){const e=i.get("topNotice");if(!e||Object.keys(e).length<=0)return t(s,{hidden:!0});const n=[e.image?t("ks-img2",{vertical:!0,sync:!0,src:e.image}):null,t("span",null,e.message)];return t(s,{style:{backgroundColor:e.color,color:e.textColor}},e.link?t("a",{class:"container",href:e.link},n):t("div",{class:"container"},n))}};S.style="ks-top-banner{display:block;position:relative;padding:10px 10px;font-family:var(--font-emphasis);font-size:15px;font-weight:700;line-height:15px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-top-banner[hidden]{display:none}ks-top-banner .container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:inherit !important;text-decoration:none !important;text-align:center}ks-top-banner ks-img2{width:auto;height:35px;margin:-8px 3px -8px 0px}@media only screen and (max-width: 959px){ks-top-banner{font-size:14px;line-height:14px}}@media only screen and (max-width: 480px){ks-top-banner{font-size:13px;line-height:13px}}";export{m as ks_category_sidebar,u as ks_development_warning,k as ks_dialog,f as ks_error_popup,b as ks_message_popup,w as ks_navbar_language_button,v as ks_navbar_language_panel,y as ks_newsletter_popup_edrone,z as ks_newsletter_side_button,j as ks_page_base,_ as ks_page_footer,C as ks_page_header,D as ks_sidepanel,S as ks_top_banner}