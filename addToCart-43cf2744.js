import{c as a}from"./commonDynamic-e598d690.js";import{F as o}from"./fetch-bbb23998.js";import{D as c}from"./dataLayer-4f6c91ec.js";async function s(s,e=1){const r=document.querySelector("ks-error-popup"),n=document.querySelector("ks-message-popup"),t=document.querySelector("ks-navbar");let d=new FormData;d.append("id",s.id),d.append("ilosc",s.quantity.toString()),d.append("nazwa",s.name),d.append("value",s.currentPrice.toString()),d.append("cechy",s.traitIDs),d.append("akcja","dodaj"),d.append("miejsce",e.toString());const m=a.get("api").addToCart;return o(m,d).then((async a=>a.json())).then((async a=>{var o,e;a.status?(t.IncrementCart(s.quantity.toString()),o=s.id,e=s.name,document.querySelector("ks-product-suggestions").show(o,e),c.addToCart(s,a.event)):a.productLink?n.show("Wymagany wybór cechy",a.message,"Przejdź do produktu",s.link):n.show("Błąd dodawania produktu",a.message)})).catch((a=>{r.show(a)}))}export{s as a}