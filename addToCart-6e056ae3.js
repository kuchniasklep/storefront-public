import{c as a}from"./commonDynamic-e598d690.js";import{F as o}from"./fetch-bbb23998.js";import{D as s}from"./dataLayer-f5679f15.js";async function c(c,e=1){const r=document.querySelector("ks-error-popup"),n=document.querySelector("ks-message-popup"),t=document.querySelector("ks-navbar");let d=new FormData;d.append("id",c.id),d.append("ilosc",c.quantity.toString()),d.append("nazwa",c.name),d.append("value",c.currentPrice.toString()),d.append("cechy",c.traitIDs),d.append("akcja","dodaj"),d.append("miejsce",e.toString());const m=a.get("api").addToCart;return o(m,d).then((async a=>a.json())).then((async a=>{var o,e;a.status?(t.IncrementCart(c.quantity.toString()),o=c.id,e=c.name,document.querySelector("ks-product-suggestions").show(o,e),s.addToCart(c,a.event)):a.productLink?n.show("Wymagany wybór cechy",a.message,"Przejdź do produktu",c.link):n.show("Błąd dodawania produktu",a.message)})).catch((a=>{r.show(a)}))}export{c as a}