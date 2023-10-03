import{r as i,h as t}from"./index-e3198654.js";import{c as e}from"./index-5a4e318f.js";import{D as o}from"./dataLayer-251b405e.js";import"./commonDynamic-1f04aed5.js";import"./fetch-1f8a9006.js";const n=e({}),r=class{constructor(t){i(this,t),this.skipbase=void 0,this.commonData=void 0,this.commonDynamicData=void 0,this.recipeData=void 0}componentWillLoad(){const i=document.getElementById(this.recipeData),t=JSON.parse(i.innerHTML);Object.keys(t).map((i=>{n.set(i,t[i])})),this.track()}track(){o.recipe(n.state)}render(){var i,e,o,r;const s=n.get("nutrition");return t("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},t("ks-container",null,t("div",{class:"recipe-container"},t("ks-recipe-info",{image:n.get("image"),time:n.get("time"),yield:n.get("yield"),cuisine:n.get("cuisine"),"cuisine-link":n.get("cuisineLink"),category:n.get("category"),"category-link":n.get("categoryLink")},t("h1",{slot:"heading"},n.get("title")),t("p",{slot:"summary"},n.get("summary")),t("ks-recipe-nutrition",{type:"kalorie",value:s.calories,slot:"nutrition"}),t("ks-recipe-nutrition",{type:"tłuszcze",value:s.fats,slot:"nutrition"}),t("ks-recipe-nutrition",{type:"nasycone",value:s.saturatedFats,slot:"nutrition"}),t("ks-recipe-nutrition",{type:"cukry",value:s.sugars,slot:"nutrition"}),t("ks-recipe-nutrition",{type:"sól",value:s.salt,slot:"nutrition"}),t("ks-recipe-nutrition",{type:"białka",value:s.protein,slot:"nutrition"}),t("ks-recipe-nutrition",{type:"węglowodany",value:s.carbohydrates,slot:"nutrition"})),t("ks-recipe-procedure",null,null===(i=null==n?void 0:n.get("ingredients"))||void 0===i?void 0:i.map((i=>t("ks-recipe-ingredient",{name:i.name,amount:i.amount,slot:"ingredients"}))),null===(e=null==n?void 0:n.get("preparation"))||void 0===e?void 0:e.map((i=>{var e;return[t("h2",{slot:"preparation"},i.name),t("p",{slot:"preparation"},null===(e=null==i?void 0:i.steps)||void 0===e?void 0:e.join(" "))]}))))),(null===(o=null==n?void 0:n.get("suggestions"))||void 0===o?void 0:o.length)>0?[t("h3",{class:"suggested-heading"},"Produkty Polecane"),t("ks-product-container",null,null===(r=null==n?void 0:n.get("suggestions"))||void 0===r?void 0:r.map((i=>t("ks-product-card",{product:i}))))]:null)}};r.style="ks-page-recipe{display:block}ks-page-recipe .recipe-container{background:#fff;color:#373737;-webkit-box-shadow:0 2px 8px rgb(0 0 0 / 15%);box-shadow:0 2px 8px rgb(0 0 0 / 15%);margin-bottom:0}ks-page-recipe .suggested-heading{text-align:center;margin-top:20px !important;font-weight:700}ks-page-recipe ks-product-container{margin-bottom:15px !important}";export{r as ks_page_recipe}