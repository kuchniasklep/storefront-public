var __awaiter=this&&this.__awaiter||function(e,t,i,s){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,o){function r(e){try{p(s.next(e))}catch(t){o(t)}}function a(e){try{p(s["throw"](e))}catch(t){o(t)}}function p(e){e.done?i(e.value):n(e.value).then(r,a)}p((s=s.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},s,n,o,r;return r={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function a(e){return function(t){return p([e,t])}}function p(r){if(s)throw new TypeError("Generator is already executing.");while(i)try{if(s=1,n&&(o=r[0]&2?n["return"]:r[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,r[1])).done)return o;if(n=0,o)r=[r[0]&2,o.value];switch(r[0]){case 0:case 1:o=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;n=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(r[0]===6&&i.label<o[1]){i.label=o[1];o=r;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(r);break}if(o[2])i.ops.pop();i.trys.pop();continue}r=t.call(e,i)}catch(a){r=[6,a];n=0}finally{s=o=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./index-5ab56926.system.js","./validate-347c285d.system.js","./commonDynamic-e40d9ffc.system.js","./tracker-b01d2a0e.system.js","./dataLayer-50244b9c.system.js","./index-1eb13b56.system.js"],(function(e){"use strict";var t,i,s,n,o,r,a;return{setters:[function(e){t=e.r;i=e.h;s=e.g},function(e){n=e.V},function(e){o=e.c},function(e){r=e.e},function(e){a=e.D},function(){}],execute:function(){var p="ks-newsletter-popup{display:block}ks-newsletter-popup form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;height:100%;width:100%;max-width:720px}ks-newsletter-popup .info{padding:60px 60px 20px 60px;fill:#252525;-ms-flex:1 0 auto;flex:1 0 auto;min-height:10px}ks-newsletter-popup .info .top{width:100%;margin-bottom:10px;font-size:initial;max-height:30px}ks-newsletter-popup .info .heading{width:100%;font-family:var(--font-emphasis);font-size:initial;max-height:80px;margin-bottom:10px}ks-newsletter-popup .info p{text-align:center;margin-top:10px}ks-newsletter-popup .buttons{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:10px;margin-top:30px}ks-newsletter-popup .buttons>*{-ms-flex:1;flex:1}ks-newsletter-popup .close{color:black !important}ks-newsletter-popup ks-input-check{margin:20px;font-size:13px;line-height:18px}ks-newsletter-popup .email-form{display:-ms-flexbox;display:flex}ks-newsletter-popup .email-form>*{margin-bottom:0px}ks-newsletter-popup .email-form>* input{height:60px}ks-newsletter-popup .email-form>ks-button{width:30%}ks-newsletter-popup .email-form>ks-input-text{width:100%}ks-newsletter-popup .email{-ms-flex:1 0 0px;flex:1 0 0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:#e5e5e5;color:black;font-size:18px;min-height:50px}@media (max-width: 720px){ks-newsletter-popup .info .heading{max-height:50px}ks-newsletter-popup .email{font-size:16px}}@media (max-width: 540px){ks-newsletter-popup .info{padding:70px 25px 20px 25px;min-height:180px}ks-newsletter-popup .info .top{display:none}ks-newsletter-popup .info p{font-size:13px}ks-newsletter-popup ks-input-check{font-size:11px;line-height:16px}ks-newsletter-popup .email-form{display:block}ks-newsletter-popup .email-form>ks-button{width:100%}ks-newsletter-popup .buttons{display:block;margin-top:0px}ks-newsletter-popup .buttons>*:first-child{border-bottom:1px solid #3a3a3a}ks-newsletter-popup ks-input-check{margin:15px}ks-newsletter-popup .info .heading{width:100%;max-height:40px}}";var u=e("ks_newsletter_popup",function(){function e(e){t(this,e);this.displayOnLoad=false;this.loggedIn=false;this.subscribed=false;this.agreement="Wyrażam zgodę na przetwarzanie danych osobowych do celów marketingowych, w celu zbadania opinii o sklepie oraz na otrzymywanie informacji handlowych na wskazany przeze mnie adres e-mail.";this.infoMessage="Aby otrzymać kupon rabatowy musisz posiadać konto w naszym sklepie. Minimalna wartość zamówienia wynosi: 100,00 zł";this.successHeading="ZAPISANO DO NEWSLETTERA";this.successUnsubHeading="WYPISANO Z NEWSLETTERA";this.faliureHeading="BŁĄD ZAPISU";this.success=false}e.prototype.componentDidLoad=function(){var e=this;this.dialog=this.root.querySelector("ks-dialog");if(this.displayOnLoad&&document.cookie.search("newsletterPopup=tak")==-1){setTimeout((function(){e.Show()}),4e3)}};e.prototype.requestHandler=function(e){return __awaiter(this,void 0,void 0,(function(){var t,i;var s=this;return __generator(this,(function(o){switch(o.label){case 0:e.preventDefault();return[4,n(this.root.querySelector("form"))];case 1:if(!o.sent())return[2];this.dialog.showLoading();t=e.target;i=new FormData(t);if(this.subscribed)i.append("unsubscribe","1");i.append("email",this.email);i.append("popup","1");fetch(this.api,{body:i,method:"post"}).then((function(e){return __awaiter(s,void 0,void 0,(function(){var t,i;return __generator(this,(function(s){switch(s.label){case 0:return[4,e.text()];case 1:t=s.sent();if(t.search("SUCCESS")!=-1){i=this.subscribed?this.successUnsubHeading:this.successHeading;this.dialog.showSuccess(i,t.replace("SUCCESS",""));this.track();this.success=true}else this.dialog.showFailure(this.faliureHeading,t);return[2]}}))}))})).catch((function(e){return __awaiter(s,void 0,void 0,(function(){var t;return __generator(this,(function(i){t="";if(!window.navigator.onLine)t="Brak internetu.";if(e.message)t=e.message;this.dialog.showFailure(this.faliureHeading,t);return[2]}))}))}));return[2]}}))}))};e.prototype.track=function(){var e={email:this.email,subscriber:!this.subscribed,place:"Zapis do newslettera | Popup"};a.subscribe(e);r((function(t){return t===null||t===void 0?void 0:t.subscribe(o.state,e)}))};e.prototype.setSubscription=function(){var e=o.get("customer");e.subscriber=!this.subscribed;o.set("customer",e);this.subscribed=!this.subscribed};e.prototype.Show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.dialog.show();return[2]}))}))};e.prototype.SetCookie=function(){var e="";var t=new Date;t.setMonth(t.getMonth()+1);e="expires="+t.toUTCString()+"; ";document.cookie="newsletterPopup=tak; "+e+"path=/";if(this.success){this.setSubscription();this.success=false}};e.prototype.render=function(){var e=this;return[i("ks-dialog",{dark:true,smallmobile:true,nopadding:true,onClosed:function(){return e.SetCookie()}},i("form",{onSubmit:function(t){return e.requestHandler(t)}},i("div",{class:"info"},i("svg",{class:"top",viewBox:"0 0 303 15",width:909,height:45},i("text",{x:"0",y:"12"},"Zapisz się do naszego Newslettera i zyskaj")),i("svg",{class:"heading",viewBox:"0 0 96 12",width:960,height:130},i("text",{x:"-1",y:"12"},"KUPON 10ZŁ")),i("p",null,this.infoMessage)),!this.loggedIn?i("div",{class:"buttons"},i("ks-button",{tall:true,name:"ZALOGUJ SIĘ",link:this.loginLink}),i("ks-button",{tall:true,name:"NOWE KONTO",link:this.registerLink})):[this.subscribed?null:i("ks-input-check",{large:true,required:true,nomessage:true,name:"zgoda",label:this.agreement}),i("div",{class:"email-form"},i("div",{class:"email"},this.email),i("ks-button",{submit:true,secondary:this.subscribed,name:this.subscribed?"WYPISZ SIĘ":"ZAPISZ SIĘ"}))]))]};Object.defineProperty(e.prototype,"root",{get:function(){return s(this)},enumerable:false,configurable:true});return e}());u.style=p}}}));