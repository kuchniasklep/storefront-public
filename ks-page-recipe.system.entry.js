System.register(["./index-5ab56926.system.js","./index-1eb13b56.system.js","./dataLayer-7e699a78.system.js","./commonDynamic-e40d9ffc.system.js","./fetch-89de6a18.system.js"],(function(t){"use strict";var e,i,n,o;return{setters:[function(t){e=t.r;i=t.h},function(t){n=t.c},function(t){o=t.D},function(){},function(){}],execute:function(){var r=n({});var a="ks-page-recipe{display:block}ks-page-recipe .recipe-container{background:#fff;color:#373737;-webkit-box-shadow:0 2px 8px rgb(0 0 0 / 15%);box-shadow:0 2px 8px rgb(0 0 0 / 15%);margin-bottom:0}ks-page-recipe .suggested-heading{text-align:center;margin-top:20px !important;font-weight:700}ks-page-recipe ks-product-container{margin-bottom:15px !important}";var s=t("ks_page_recipe",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){var t=document.getElementById(this.recipeData);var e=JSON.parse(t.innerHTML);Object.keys(e).map((function(t){r.set(t,e[t])}));this.track()};t.prototype.track=function(){o.recipe(r.state)};t.prototype.render=function(){var t,e,n,o;var a=r.get("nutrition");return i("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},i("ks-container",null,i("div",{class:"recipe-container"},i("ks-recipe-info",{image:r.get("image"),time:r.get("time"),yield:r.get("yield"),cuisine:r.get("cuisine"),"cuisine-link":r.get("cuisineLink"),category:r.get("category"),"category-link":r.get("categoryLink")},i("h1",{slot:"heading"},r.get("title")),i("p",{slot:"summary"},r.get("summary")),i("ks-recipe-nutrition",{type:"kalorie",value:a.calories,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"tłuszcze",value:a.fats,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"nasycone",value:a.saturatedFats,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"cukry",value:a.sugars,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"sól",value:a.salt,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"białka",value:a.protein,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"węglowodany",value:a.carbohydrates,slot:"nutrition"})),i("ks-recipe-procedure",null,(t=r===null||r===void 0?void 0:r.get("ingredients"))===null||t===void 0?void 0:t.map((function(t){return i("ks-recipe-ingredient",{name:t.name,amount:t.amount,slot:"ingredients"})})),(e=r===null||r===void 0?void 0:r.get("preparation"))===null||e===void 0?void 0:e.map((function(t){var e;return[i("h2",{slot:"preparation"},t.name),i("p",{slot:"preparation"},(e=t===null||t===void 0?void 0:t.steps)===null||e===void 0?void 0:e.join(" "))]}))))),((n=r===null||r===void 0?void 0:r.get("suggestions"))===null||n===void 0?void 0:n.length)>0?[i("h3",{class:"suggested-heading"},"Produkty Polecane"),i("ks-product-container",null,(o=r===null||r===void 0?void 0:r.get("suggestions"))===null||o===void 0?void 0:o.map((function(t){return i("ks-product-card",{product:t})})))]:null)};return t}());s.style=a}}}));