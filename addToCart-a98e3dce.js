import{e as a}from"./tracker-f8c9914d.js";import{c as o}from"./commonDynamic-73d5b033.js";import{F as r}from"./fetch-e286f059.js";import{D as s}from"./dataLayer-dbbd91bf.js";async function c(c,e=1){const t=document.querySelector("ks-error-popup"),d=document.querySelector("ks-message-popup"),n=document.querySelector("ks-navbar");let m=new FormData;m.append("id",c.id),m.append("ilosc",c.quantity.toString()),m.append("nazwa",c.name),m.append("value",c.currentPrice.toString()),m.append("cechy",c.traitIDs),m.append("akcja","dodaj"),m.append("miejsce",e.toString());const u=o.get("api").addToCart;return r(u,m).then((async a=>a.json())).then((async o=>{var r,e;o.status?(n.IncrementCart(c.quantity.toString()),r=c.id,e=c.name,document.querySelector("ks-product-suggestions").show(r,e),o.event&&(s.addToCart(c,o.event),a((a=>null==a?void 0:a.addToCart(c,o.event))))):o.productLink?d.show("Wymagany wybór cechy",o.message,"Przejdź do produktu",c.link):d.show("Błąd dodawania produktu",o.message)})).catch((a=>{t.show(a)}))}export{c as a}