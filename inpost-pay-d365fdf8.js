import{j as n}from"./fetch-7fa5b910.js";import{c as o}from"./commonDynamic-5e51121d.js";function t(){const t=o.get("api").inpostFrontend;return n(`${t}/getbinding`,{}).then((n=>n.json()))}window.iziGetPayData=(t,i,r)=>{const e=o.get("api").inpostFrontend,c=window.iziGetBrowserData();return n(`${e}/getpaydata`,{browser:c,phonePrefix:t,phoneNumber:i,bindingPlace:r}).then((n=>n.json()))};var i=new AbortController;function r(n){window.iziCanBeBound(n).then((o=>o?window.iziAddToCart(n):null))}window.iziGetIsBound=()=>{const t=o.get("api").inpostFrontend;return i.abort(),i=new AbortController,async function(n,o=0,t=200){const i=async(r,e,c)=>{if(o>0&&c>=o)return void e();const a=await n();a&&0!==Object.keys(a).length?r(a):setTimeout((()=>i(r,e,c+1)),t)};return new Promise(((n,o)=>i(n,o,0)))}((()=>n(`${t}/isbound`,{},i.signal).then((n=>n.json())).catch((()=>null))),30)},window.iziGetOrderComplete=()=>Promise.resolve({action:"string",redirect:"string"}),window.iziBindingDelete=()=>{const t=o.get("api").inpostFrontend;return n(`${t}/bindingdelete`,{}).then((n=>n.json()))},window.iziCanBeBound=t=>{const i=o.get("api").inpostFrontend;return n(`${i}/canbebound`,{product_id:t}).then((n=>n.json()))},window.iziAddToCart=t=>{const i=o.get("api").inpostFrontend;return n(`${i}/addtocart`,{product_id:t}).then((n=>n.json())).then((n=>function(n){console.log("InpostUpdateCount");const o=new CustomEvent("inpost-update-count",{detail:n});Array.from(document.getElementsByTagName("inpost-izi-button")).forEach((n=>n.dispatchEvent(o)))}(n.product_count)))},window.iziMobileLink=()=>{const t=o.get("api").inpostFrontend;return n(`${t}/mobilelink`,{}).then((n=>n.json()))};export{r as C,t as i}