import{r as i,h as e}from"./index-b2de1977.js";import{c as t}from"./index-bca22170.js";import{D as n}from"./dataLayer-60a593d7.js";import"./commonDynamic-e598d690.js";const o=t({}),r=class{constructor(e){i(this,e)}componentWillLoad(){const i=document.getElementById(this.recipeData),e=JSON.parse(i.innerHTML);Object.keys(e).map((i=>{o.set(i,e[i])})),this.track()}track(){n.recipe(o.state)}render(){var i,t,n,r;const s=o.get("nutrition");return e("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e("ks-container",null,e("div",{class:"recipe-container"},e("ks-recipe-info",{image:o.get("image"),time:o.get("time"),yield:o.get("yield"),cuisine:o.get("cuisine"),"cuisine-link":o.get("cuisineLink"),category:o.get("category"),"category-link":o.get("categoryLink")},e("h1",{slot:"heading"},o.get("title")),e("p",{slot:"summary"},o.get("summary")),e("ks-recipe-nutrition",{type:"kalorie",value:s.calories,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"tłuszcze",value:s.fats,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"nasycone",value:s.saturatedFats,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"cukry",value:s.sugars,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"sól",value:s.salt,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"białka",value:s.protein,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"węglowodany",value:s.carbohydrates,slot:"nutrition"})),e("ks-recipe-procedure",null,null===(i=null==o?void 0:o.get("ingredients"))||void 0===i?void 0:i.map((i=>e("ks-recipe-ingredient",{name:i.name,amount:i.amount,slot:"ingredients"}))),null===(t=null==o?void 0:o.get("preparation"))||void 0===t?void 0:t.map((i=>{var t;return[e("h2",{slot:"preparation"},i.name),e("p",{slot:"preparation"},null===(t=null==i?void 0:i.steps)||void 0===t?void 0:t.join(" "))]}))))),(null===(n=null==o?void 0:o.get("suggestions"))||void 0===n?void 0:n.length)>0?[e("h3",{class:"suggested-heading"},"Produkty Polecane"),e("ks-product-container",null,null===(r=null==o?void 0:o.get("suggestions"))||void 0===r?void 0:r.map((i=>e("ks-product-card",{product:i}))))]:null)}};r.style="ks-page-recipe{display:block}ks-page-recipe .recipe-container{background:#fff;color:#373737;-webkit-box-shadow:0 2px 8px rgb(0 0 0 / 15%);box-shadow:0 2px 8px rgb(0 0 0 / 15%);margin-bottom:0}ks-page-recipe .suggested-heading{text-align:center;margin-top:20px !important;font-weight:700}ks-page-recipe ks-product-container{margin-bottom:15px !important}";export{r as ks_page_recipe}