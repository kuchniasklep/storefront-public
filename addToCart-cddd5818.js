import{e as a}from"./tracker-7d15eac4.js";import{c as o}from"./commonDynamic-e598d690.js";import{F as e}from"./fetch-bbb23998.js";import{D as r}from"./dataLayer-f88af98e.js";async function s(s,c=1){const t=document.querySelector("ks-error-popup"),n=document.querySelector("ks-message-popup"),d=document.querySelector("ks-navbar");let m=new FormData;m.append("id",s.id),m.append("ilosc",s.quantity.toString()),m.append("nazwa",s.name),m.append("value",s.currentPrice.toString()),m.append("cechy",s.traitIDs),m.append("akcja","dodaj"),m.append("miejsce",c.toString());const u=o.get("api").addToCart;return e(u,m).then((async a=>a.json())).then((async o=>{var e,c;o.status?(d.IncrementCart(s.quantity.toString()),e=s.id,c=s.name,document.querySelector("ks-product-suggestions").show(e,c),o.event&&(r.addToCart(s,o.event),a((a=>null==a?void 0:a.addToCart(s,o.event))))):o.productLink?n.show("Wymagany wybór cechy",o.message,"Przejdź do produktu",s.link):n.show("Błąd dodawania produktu",o.message)})).catch((a=>{t.show(a)}))}export{s as a}