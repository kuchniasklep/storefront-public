import{c as n}from"./index-689756ca.js";async function a(n,a){let t=null;return a&&(t=new FormData,Object.entries(a).forEach((([n,a])=>{t.append(n,a)}))),e(n,t)}async function e(n,a){const e=new Headers;return e.append("pragma","no-cache"),e.append("cache-control","no-cache"),fetch(n,{method:"POST",body:a,headers:e,credentials:"same-origin"}).then((n=>{if(!n.ok)throw{name:n.status,message:n.statusText};return n}))}const t=n({api:{},totalValue:0,productValue:0,productAmount:0,pointsForOrder:0,totalShippingTime:"",otherValues:[],shippingProgress:{},products:[],deals:[],dealGroups:[],shipping:[],payment:[],shippingMessage:"",paymentMessage:"",activeShipping:0,activePayment:0,points:{},discount:{},loading:0,loadingProducts:0,loadingDeals:!1,recycle:[],easyprotect:{},insured:{}});async function o(n){const a=t.get("api").easyprotectChange;c(),await async function(n,a){return e(n,JSON.stringify(a))}(a,n).then((n=>n.json())).then((n=>s(n))),r()}async function i(n){const e=t.get("api").easyprotectRemove;c(),await a(e,{id:n}).then((n=>n.json())).then((n=>s(n))),r()}function s(n){Object.keys(n).map((a=>{t.set(a,n[a])}))}function c(){t.set("loading",t.get("loading")+1)}function r(){t.set("loading",t.get("loading")-1)}export{i as a,o as e,a as f,t as s}