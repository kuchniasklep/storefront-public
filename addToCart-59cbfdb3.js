import{e as o}from"./tracker-7fb8955b.js";import{c as a}from"./commonDynamic-3300d49a.js";import{F as c}from"./fetch-e286f059.js";async function n(n,s,e,r,t="",d=1,m=""){const u=document.querySelector("ks-error-popup"),p=document.querySelector("ks-message-popup"),i=document.querySelector("ks-navbar");let y=new FormData;y.append("id",n),y.append("ilosc",s.toString()),y.append("nazwa",e),y.append("value",r.toString()),y.append("cechy",t),y.append("akcja","dodaj"),y.append("miejsce",d.toString());const f=a.get("api").addToCart;return c(f,y).then((async o=>o.json())).then((async a=>{a.status?(i.IncrementCart(s.toString()),function(o,a){document.querySelector("ks-product-suggestions").show(o,a)}(n,e),a.event&&o((o=>null==o?void 0:o.addToCart(a.event,n,e,r,1,"PLN")))):a.productLink?p.show("Wymagany wybór cechy",a.message,"Przejdź do produktu",m):p.show("Błąd dodawania produktu",a.message)})).catch((o=>{u.show(o)}))}export{n as a}