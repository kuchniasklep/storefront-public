import{F as n}from"./fetch-e286f059.js";import{c as o}from"./commonDynamic-57975e8d.js";async function r(r){const t=document.querySelector("ks-error-popup"),a=document.querySelector("ks-navbar");let c=new FormData;c.append("id",r);const s=o.get("api").addToFavourites;return n(s,c).then((()=>a.IncrementHeart())).catch((n=>t.show(n)))}async function t(r){const t=document.querySelector("ks-error-popup"),a=document.querySelector("ks-navbar");let c=new FormData;c.append("id",r),c.append("akcja","usun");const s=o.get("api").removeFromFavourites;return n(s,c).then((()=>a.DecrementHeart())).catch((n=>t.show(n)))}async function a(){const r=document.querySelector("ks-error-popup"),t=o.get("api").removeAllFavourites;return n(t).catch((n=>r.show(n)))}export{r as a,a as b,t as r}