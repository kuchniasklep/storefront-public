import{F as o}from"./fetch-bbb23998.js";import{c as n}from"./commonDynamic-e598d690.js";import{D as r}from"./dataLayer-1eec95fc.js";async function a(a){const t=document.querySelector("ks-error-popup"),c=document.querySelector("ks-navbar");let s=new FormData;s.append("id",a.id);const e=n.get("api").addToFavourites;return o(e,s).then((()=>{c.IncrementHeart(),r.addToFavourites(a)})).catch((o=>t.show(o)))}async function t(r){const a=document.querySelector("ks-error-popup"),t=document.querySelector("ks-navbar");let c=new FormData;c.append("id",r),c.append("akcja","usun");const s=n.get("api").removeFromFavourites;return o(s,c).then((()=>t.DecrementHeart())).catch((o=>a.show(o)))}async function c(){const r=document.querySelector("ks-error-popup"),a=n.get("api").removeAllFavourites;return o(a).catch((o=>r.show(o)))}export{a,c as b,t as r}