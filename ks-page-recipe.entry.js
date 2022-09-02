import{r as i,h as e}from"./index-6e14abe0.js";import{c as t}from"./index-a26ba0e6.js";const n=t({}),o=class{constructor(e){i(this,e)}componentWillLoad(){const i=document.getElementById(this.recipeData),e=JSON.parse(i.innerHTML);Object.keys(e).map((i=>{n.set(i,e[i])})),this.track()}track(){window.dataLayer.push({type:"recipe",name:n.get("title"),category:n.get("category"),cuisine:n.get("cuisine")})}render(){var i,t,o,r;const s=n.get("nutrition");return e("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e("ks-container",null,e("div",{class:"recipe-container"},e("ks-recipe-info",{image:n.get("image"),time:n.get("time"),yield:n.get("yield"),cuisine:n.get("cuisine"),"cuisine-link":n.get("cuisineLink"),category:n.get("category"),"category-link":n.get("categoryLink")},e("h1",{slot:"heading"},n.get("title")),e("p",{slot:"summary"},n.get("summary")),e("ks-recipe-nutrition",{type:"kalorie",value:s.calories,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"tłuszcze",value:s.fats,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"nasycone",value:s.saturatedFats,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"cukry",value:s.sugars,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"sól",value:s.salt,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"białka",value:s.protein,slot:"nutrition"}),e("ks-recipe-nutrition",{type:"węglowodany",value:s.carbohydrates,slot:"nutrition"})),e("ks-recipe-procedure",null,null===(i=null==n?void 0:n.get("ingredients"))||void 0===i?void 0:i.map((i=>e("ks-recipe-ingredient",{name:i.name,amount:i.amount,slot:"ingredients"}))),null===(t=null==n?void 0:n.get("preparation"))||void 0===t?void 0:t.map((i=>{var t;return[e("h2",{slot:"preparation"},i.name),e("p",{slot:"preparation"},null===(t=null==i?void 0:i.steps)||void 0===t?void 0:t.join(" "))]}))))),(null===(o=null==n?void 0:n.get("suggestions"))||void 0===o?void 0:o.length)>0?e("ks-container",null,e("h3",{class:"suggested-heading"},"Produkty Polecane"),e("ks-product-container",null,null===(r=null==n?void 0:n.get("suggestions"))||void 0===r?void 0:r.map((i=>e("ks-product-card",{"product-id":i.id,link:i.link,sku:i.sku,name:i.name,img:i.image,imgFull:i.imageFull,webp:i.webp,currentPrice:i.currentPrice,previousPrice:i.previousPrice,unavailable:i.unavailable,currency:i.currency,categories:i.categories}))))):null)}};o.style="ks-page-recipe{display:block}ks-page-recipe .recipe-container{background:#fff;color:#373737;-webkit-box-shadow:0 2px 8px rgb(0 0 0 / 15%);box-shadow:0 2px 8px rgb(0 0 0 / 15%)}ks-page-recipe .suggested-heading{text-align:center;margin-top:20px !important;font-weight:700}ks-page-recipe ks-product-container{margin-bottom:15px !important}";export{o as ks_page_recipe}