import{c as a}from"./commonDynamic-1bc23f74.js";import{F as o}from"./fetch-1f8a9006.js";import{D as c}from"./dataLayer-df9dd091.js";async function s(s,r=1){const e=document.querySelector("ks-error-popup"),n=document.querySelector("ks-message-popup"),t=document.querySelector("ks-navbar");let d=new FormData;d.append("id",s.id),d.append("ilosc",s.quantity.toString()),d.append("nazwa",s.name),d.append("value",s.currentPrice.toString()),d.append("cechy",s.traitIDs),d.append("akcja","dodaj"),d.append("miejsce",r.toString());const m=a.get("api").addToCart;return o(m,d).then((async a=>a.json())).then((async a=>{var o,r;a.status?(t.IncrementCart(s.quantity.toString()),o=s.id,r=s.name,document.querySelector("ks-product-suggestions").show(o,r),c.addToCart(s,a.event)):a.productLink?n.show("Wymagany wybór cechy",a.message,"Przejdź do produktu",s.link):n.show("Błąd dodawania produktu",a.message)})).catch((a=>{e.show(a)}))}export{s as a}