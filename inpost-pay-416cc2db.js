import{j as n}from"./fetch-bbb23998.js";import{c as t}from"./commonDynamic-5e51121d.js";function o(){const o=t.get("api").inpostFrontend;return n(`${o}/getbinding`,{}).then((n=>n.json()))}function i(n){console.log("InpostUpdateCount");const t=new CustomEvent("inpost-update-count",{detail:n});Array.from(document.getElementsByTagName("inpost-izi-button")).forEach((n=>n.dispatchEvent(t)))}window.iziGetPayData=(o,i,e)=>{const r=t.get("api").inpostFrontend,s=window.iziGetBrowserData();return n(`${r}/getpaydata`,{browser:s,phonePrefix:o,phoneNumber:i,bindingPlace:e}).then((n=>n.json()))},window.iziGetIsBound=()=>{const o=t.get("api").inpostFrontend,i=async(t,e,r)=>{if(r>45)return void e();const s=await(async()=>n(`${o}/isbound`,{}).then((n=>n.json())).catch((()=>null)))(),a=r<15?2e3:r<30?4e3:8e3;s?t(s):setTimeout((()=>i(t,e,r+1)),a)};return new Promise(((n,t)=>i(n,t,1)))},window.iziGetOrderComplete=()=>Promise.resolve({action:"string",redirect:"string"}),window.iziBindingDelete=()=>{const o=t.get("api").inpostFrontend;return n(`${o}/bindingdelete`,{}).then((n=>n.json()))},window.iziCanBeBound=o=>{const i=t.get("api").inpostFrontend;return n(`${i}/canbebound`,{product_id:o}).then((n=>n.json()))},window.iziAddToCart=o=>{const i=t.get("api").inpostFrontend;return n(`${i}/addtocart`,{product_id:o}).then((n=>n.json()))},window.iziMobileLink=()=>{const o=t.get("api").inpostFrontend;return n(`${o}/mobilelink`,{}).then((n=>n.json()))};export{i as I,o as i}