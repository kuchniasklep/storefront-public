import{r as t,h as e,g as s}from"./index-e3198654.js";import{V as i}from"./validate-cd7ce36d.js";import{c as p}from"./commonDynamic-1f04aed5.js";import{D as o}from"./dataLayer-94fde90b.js";import"./index-5a4e318f.js";import"./fetch-bbb23998.js";const n=class{constructor(e){t(this,e),this.success=!1,this.api=void 0,this.loginLink=void 0,this.registerLink=void 0,this.displayOnLoad=!1,this.loggedIn=!1,this.subscribed=!1,this.email=void 0,this.agreement="Wyrażam zgodę na przetwarzanie danych osobowych do celów marketingowych, w celu zbadania opinii o sklepie oraz na otrzymywanie informacji handlowych na wskazany przeze mnie adres e-mail.",this.infoMessage="Aby otrzymać kupon rabatowy musisz posiadać konto w naszym sklepie. Minimalna wartość zamówienia wynosi: 100,00 zł",this.successHeading="ZAPISANO DO NEWSLETTERA",this.successUnsubHeading="WYPISANO Z NEWSLETTERA",this.faliureHeading="BŁĄD ZAPISU"}componentDidLoad(){this.dialog=this.root.querySelector("ks-dialog"),this.displayOnLoad&&-1==document.cookie.search("newsletterPopup=tak")&&setTimeout((()=>{this.Show()}),4e3)}async requestHandler(t){if(t.preventDefault(),!(await i(this.root.querySelector("form"))))return;this.dialog.showLoading();const e=new FormData(t.target);this.subscribed&&e.append("unsubscribe","1"),e.append("email",this.email),e.append("popup","1"),fetch(this.api,{body:e,method:"post"}).then((async t=>{const e=await t.text();-1!=e.search("SUCCESS")?(this.dialog.showSuccess(this.subscribed?this.successUnsubHeading:this.successHeading,e.replace("SUCCESS","")),this.track(),this.success=!0):this.dialog.showFailure(this.faliureHeading,e)})).catch((async t=>{let e="";window.navigator.onLine||(e="Brak internetu."),t.message&&(e=t.message),this.dialog.showFailure(this.faliureHeading,e)}))}track(){o.subscribe({email:this.email,subscriber:!this.subscribed,place:"Zapis do newslettera | Popup"})}setSubscription(){let t=p.get("customer");t.subscriber=!this.subscribed,p.set("customer",t),this.subscribed=!this.subscribed}async Show(){this.dialog.show()}SetCookie(){var t,e=new Date;e.setMonth(e.getMonth()+1),t="expires="+e.toUTCString()+"; ",document.cookie="newsletterPopup=tak; "+t+"path=/",this.success&&(this.setSubscription(),this.success=!1)}render(){return[e("ks-dialog",{dark:!0,smallmobile:!0,nopadding:!0,onClosed:()=>this.SetCookie()},e("form",{onSubmit:t=>this.requestHandler(t)},e("div",{class:"info"},e("svg",{class:"top",viewBox:"0 0 303 15",width:909,height:45},e("text",{x:"0",y:"12"},"Zapisz się do naszego Newslettera i zyskaj")),e("svg",{class:"heading",viewBox:"0 0 96 12",width:960,height:130},e("text",{x:"-1",y:"12"},"KUPON 10ZŁ")),e("p",null,this.infoMessage)),this.loggedIn?[this.subscribed?null:e("ks-input-check",{large:!0,required:!0,nomessage:!0,name:"zgoda",label:this.agreement}),e("div",{class:"email-form"},e("div",{class:"email"},this.email),e("ks-button",{submit:!0,secondary:this.subscribed,name:this.subscribed?"WYPISZ SIĘ":"ZAPISZ SIĘ"}))]:e("div",{class:"buttons"},e("ks-button",{tall:!0,name:"ZALOGUJ SIĘ",link:this.loginLink}),e("ks-button",{tall:!0,name:"NOWE KONTO",link:this.registerLink}))))]}get root(){return s(this)}};n.style="ks-newsletter-popup{display:block}ks-newsletter-popup form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;height:100%;width:100%;max-width:720px}ks-newsletter-popup .info{padding:60px 60px 20px 60px;fill:#252525;-ms-flex:1 0 auto;flex:1 0 auto;min-height:10px}ks-newsletter-popup .info .top{width:100%;margin-bottom:10px;font-size:initial;max-height:30px}ks-newsletter-popup .info .heading{width:100%;font-family:var(--font-emphasis);font-size:initial;max-height:80px;margin-bottom:10px}ks-newsletter-popup .info p{text-align:center;margin-top:10px}ks-newsletter-popup .buttons{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:10px;margin-top:30px}ks-newsletter-popup .buttons>*{-ms-flex:1;flex:1}ks-newsletter-popup .close{color:black !important}ks-newsletter-popup ks-input-check{margin:20px;font-size:13px;line-height:18px}ks-newsletter-popup .email-form{display:-ms-flexbox;display:flex}ks-newsletter-popup .email-form>*{margin-bottom:0px}ks-newsletter-popup .email-form>* input{height:60px}ks-newsletter-popup .email-form>ks-button{width:30%}ks-newsletter-popup .email-form>ks-input-text{width:100%}ks-newsletter-popup .email{-ms-flex:1 0 0px;flex:1 0 0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:#e5e5e5;color:black;font-size:18px;min-height:50px}@media (max-width: 720px){ks-newsletter-popup .info .heading{max-height:50px}ks-newsletter-popup .email{font-size:16px}}@media (max-width: 540px){ks-newsletter-popup .info{padding:70px 25px 20px 25px;min-height:180px}ks-newsletter-popup .info .top{display:none}ks-newsletter-popup .info p{font-size:13px}ks-newsletter-popup ks-input-check{font-size:11px;line-height:16px}ks-newsletter-popup .email-form{display:block}ks-newsletter-popup .email-form>ks-button{width:100%}ks-newsletter-popup .buttons{display:block;margin-top:0px}ks-newsletter-popup .buttons>*:first-child{border-bottom:1px solid #3a3a3a}ks-newsletter-popup ks-input-check{margin:15px}ks-newsletter-popup .info .heading{width:100%;max-height:40px}}";export{n as ks_newsletter_popup}