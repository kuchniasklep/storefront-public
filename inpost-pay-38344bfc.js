import{j as n}from"./fetch-bbb23998.js";import{c as o}from"./commonDynamic-5e51121d.js";function t(){const t=o.get("api").inpostFrontend;return n(`${t}/getbinding`,{}).then((n=>n.json()))}function i(n){console.log("InpostUpdateCount");const o=new CustomEvent("inpost-update-count",{detail:n});Array.from(document.getElementsByTagName("inpost-izi-button")).forEach((n=>n.dispatchEvent(o)))}window.iziGetPayData=(t,i,e)=>{const r=o.get("api").inpostFrontend,d=window.iziGetBrowserData();return n(`${r}/getpaydata`,{browser:d,phonePrefix:t,phoneNumber:i,bindingPlace:e}).then((n=>n.json()))},window.iziGetIsBound=()=>{const t=o.get("api").inpostFrontend;return n(`${t}/isbound`,{}).then((n=>n.json()))},window.iziGetOrderComplete=()=>Promise.resolve({action:"string",redirect:"string"}),window.iziBindingDelete=()=>{const t=o.get("api").inpostFrontend;return n(`${t}/bindingdelete`,{}).then((n=>n.json()))},window.iziCanBeBound=t=>{const i=o.get("api").inpostFrontend;return n(`${i}/canbebound`,{product_id:t}).then((n=>n.json()))},window.iziAddToCart=t=>{const i=o.get("api").inpostFrontend;return n(`${i}/addtocart`,{product_id:t}).then((n=>n.json()))},window.iziMobileLink=()=>{const t=o.get("api").inpostFrontend;return n(`${t}/mobilelink`,{}).then((n=>n.json()))};export{i as I,t as i}