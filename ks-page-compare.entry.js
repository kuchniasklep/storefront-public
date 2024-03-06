import{r as e,h as t}from"./index-e3198654.js";import{c as a}from"./index-5a4e318f.js";import{p as o}from"./price-a6e5d183.js";import{j as p}from"./js.cookie-2cc1be5d.js";import"./common-e4bd89b8.js";import"./_commonjsHelpers-ba3f0406.js";const r=a({}),c=class{constructor(t){e(this,t),this.skipbase=void 0,this.commonData=void 0,this.commonDynamicData=void 0,this.compareData=void 0,this.differences=!1,this.hidden=[]}componentWillLoad(){const e=document.getElementById(this.compareData),t=JSON.parse(e.innerHTML);Object.keys(t).map((e=>{r.set(e,t[e])}))}removeProduct(e){const t=r.get("products").findIndex((t=>t.id==e));if(-1==t)return;let a=r.get("products");a.splice(t,1),r.set("products",[...a]),this.removeProductCookie(e),0==a.length?this.addProduct():window.location.href="/porownaj-"+a.map((e=>e.id)).join("-")+".html"}removeProductCookie(e){const t=JSON.parse(p.get("product-comparison")),a=null==t?void 0:t.findIndex((t=>t.id==e));-1!=a&&(t.splice(a,1),p.set("product-comparison",JSON.stringify(t),{expires:60}))}addProduct(){window.location.href=r.get("addProductLink")}render(){const e=r.get("products");let a=e.map((e=>e.id));a.length<3&&(a=[...a,...new Array(3-a.length)]);let p=new Map;return e.forEach((e=>{e.attributeCategories.forEach((t=>{p.has(t.name)||p.set(t.name,new Map),t.attributes.forEach((a=>{const o=p.get(t.name);o.has(a.name)||o.set(a.name,new Map),o.get(a.name).set(e.id,a.value)}))}))})),t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t("div",{class:"compare-products"},t("div",{class:"info"},t("h1",null,"Porównaj modele"),t("ks-input-check",{label:"Pokaż tylko różnice",onChange:e=>this.differences=e.target.checked})),a.map((a=>{const o=e.find((e=>e.id==a));return o?t("div",{class:"product"},t("a",{href:o.link},t("ks-img3",{image:o.image,fit:"contain"}),t("div",{class:"text"},t("h2",null,o.name),t("p",null,o.description))),t("ks-button",{border:!0,round:!0,narrower:!0,icon:"x",onClick:()=>this.removeProduct(o.id)})):t("div",{class:"add"},t("ks-button",{border:!0,round:!0,icon:"plus",onClick:()=>this.addProduct()}))}))),t("div",{class:"compare-attributes"},t("div",{class:"category"},t("h3",null,"Informacje Ogólne"),t("table",null,t("tbody",null,t("tr",null,t("th",null,"Kategoria"),a.map((a=>{var o;return t("td",null,null===(o=e.find((e=>e.id==a)))||void 0===o?void 0:o.category)}))),t("tr",null,t("th",null,"Cena"),a.map((a=>{var p;return t("td",null,o(null===(p=e.find((e=>e.id==a)))||void 0===p?void 0:p.price))}))),t("tr",null,t("th",null,"Czas dostawy"),a.map((a=>{var o;return t("td",null,null===(o=e.find((e=>e.id==a)))||void 0===o?void 0:o.shipping)})))))),[...p.entries()].map((([e,o],p)=>t("div",{class:"category interactable "+(this.same_attributes_in_category(o,a)?"identical ":"")},t("h3",{onClick:()=>this.toggle_hidden(p)},e),t("ks-icon",{name:this.hidden.includes(p)?"chevron-down":"chevron-up"}),t("table",{class:this.hidden.includes(p)?"hidden":""},t("tbody",null,[...o.entries()].map((([e,o])=>t("tr",{class:this.same_attributes(o,a)?"identical":""},t("th",null,e),a.map((e=>t("td",null,o.has(e)?"true"==o.get(e)?t("ks-icon",{name:"check"}):o.get(e):"-")))))))))))))}toggle_hidden(e){const t=this.hidden.indexOf(e);if(-1!=t){const e=this.hidden;e.splice(t,1),this.hidden=[...e]}else this.hidden=[...this.hidden,e]}same_attributes(e,t){return t=t.filter((e=>void 0!==e)),[...e.values()].every(((e,t,a)=>e===a[0]))&&e.size==t.length}same_attributes_in_category(e,t){return[...e.entries()].map((([e,a])=>this.same_attributes(a,t))).every((e=>1==e))}};c.style="ks-page-compare{display:block;background-color:#ffffff}ks-page-compare .compare-products{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:20px 20px 0px 20px}ks-page-compare .compare-attributes{padding:0px 20px 20px 20px}ks-page-compare .compare-products,ks-page-compare .compare-attributes{width:100%;max-width:1400px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:auto;background-color:white}ks-page-compare .compare-products>*{-ms-flex:1;flex:1}ks-page-compare .compare-products .product{text-align:center;position:relative}ks-page-compare .compare-products .product a{color:#151515;text-decoration:none}ks-page-compare .compare-products .product ks-img3{max-width:120px;max-height:120px;margin:auto}ks-page-compare .compare-products .product ks-button{position:absolute;top:0;right:0;opacity:0.3}ks-page-compare .compare-products .add{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}ks-page-compare .compare-products .add ks-button{opacity:0.5}ks-page-compare .compare-products * ks-input-check{margin-top:10px;margin-bottom:0px}ks-page-compare .compare-products * h1{margin:0px}ks-page-compare .compare-products * h2{margin:10px 0px 0px 0px}ks-page-compare .compare-products * p{margin:5px 0px 0px 0px}ks-page-compare .compare-attributes .category{position:relative}ks-page-compare .compare-attributes .category>ks-icon{top:5px;right:15px;position:absolute}ks-page-compare .compare-attributes .category h3{border-bottom:1px solid #e7e7e7;padding:5px;margin-bottom:0px;margin-top:20px;font-weight:700}ks-page-compare .compare-attributes .category.interactable h3{cursor:pointer;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-page-compare .compare-attributes .category.interactable h3:hover{background-color:#f2f2f2}ks-page-compare .compare-attributes .category.interactable h3:active{background-color:#e6e6e6}ks-page-compare table{width:100%;table-layout:fixed;border-spacing:0px}ks-page-compare table th,ks-page-compare table td{text-align:center;width:25%;padding:5px;border-bottom:1px solid #e7e7e7}ks-page-compare table th{text-align:left;font-family:var(--font-emphasis)}ks-page-compare table tr:nth-child(even) td{background-color:#f2f2f2}ks-page-compare table tr td:not(:last-child),ks-page-compare table tr th:not(:last-child){border-right:1px solid #e7e7e7}ks-page-compare[differences] .identical{display:none}ks-page-compare table.hidden{display:none}@media screen and (min-width: 960px){ks-page-compare .compare-products{padding:50px 50px 0px 50px}ks-page-compare .compare-attributes{padding:0px 50px 20px 50px}}@media screen and (max-width: 960px){ks-page-compare .compare-products .product ks-img3{max-width:90px}}@media screen and (max-width: 640px){ks-page-compare .compare-products{display:block;margin-bottom:20px}ks-page-compare .compare-products .product a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;text-align:left}ks-page-compare .compare-products .add{display:block;margin-top:15px}ks-page-compare .compare-products .product .text{width:100%}ks-page-compare .compare-products .product ks-button{position:static}ks-page-compare .compare-products .product ks-img3{max-width:60px;margin:0px 10px 0px 0px}ks-page-compare .compare-attributes .category h3{padding:12px 5px}ks-page-compare .compare-attributes .category>ks-icon{top:12px}ks-page-compare .compare-attributes .category td ks-icon{line-height:15px !important}ks-page-compare .compare-attributes .category td ks-icon svg{stroke-width:3;width:15px;height:15px}ks-page-compare .compare-products .info{width:100%;margin-bottom:20px}ks-page-compare .compare-attributes{padding:0px 10px 10px 10px}ks-page-compare .compare-attributes .category{margin-bottom:20px}ks-page-compare table tr{position:relative}ks-page-compare table th{position:absolute;font-size:12px;width:100%;border-bottom:none;top:2px}ks-page-compare table td{width:33.33%;padding:25px 5px 5px 5px;font-size:14px;border-right:none !important}}@media screen and (max-width: 420px){ks-page-compare .compare-products>div:nth-child(n+4),ks-page-compare table td:nth-child(n+4){display:none}ks-page-compare table td{width:50%}}";export{c as ks_page_compare}