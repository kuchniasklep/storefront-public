System.register(["./index-229c64eb.system.js","./index-0ecc4079.system.js","./dataLayer-46fdcc21.system.js","./commonDynamic-37d281db.system.js","./fetch-89de6a18.system.js"],(function(e){"use strict";var t,i,n,o;return{setters:[function(e){t=e.r;i=e.h},function(e){n=e.c},function(e){o=e.D},function(){},function(){}],execute:function(){var r=n({});var a="ks-page-recipe{display:block}ks-page-recipe .recipe-container{background:#fff;color:#373737;-webkit-box-shadow:0 2px 8px rgb(0 0 0 / 15%);box-shadow:0 2px 8px rgb(0 0 0 / 15%);margin-bottom:0}ks-page-recipe .suggested-heading{text-align:center;margin-top:20px !important;font-weight:700}ks-page-recipe ks-product-container{margin-bottom:15px !important}";var s=e("ks_page_recipe",function(){function e(e){t(this,e);this.skipbase=undefined;this.commonData=undefined;this.commonDynamicData=undefined;this.recipeData=undefined}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.recipeData);var t=JSON.parse(e.innerHTML);Object.keys(t).map((function(e){r.set(e,t[e])}));this.track()};e.prototype.track=function(){o.recipe(r.state)};e.prototype.render=function(){var e,t,n,o;var a=r.get("nutrition");return i("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},i("ks-container",null,i("div",{class:"recipe-container"},i("ks-recipe-info",{image:r.get("image"),time:r.get("time"),yield:r.get("yield"),cuisine:r.get("cuisine"),"cuisine-link":r.get("cuisineLink"),category:r.get("category"),"category-link":r.get("categoryLink")},i("h1",{slot:"heading"},r.get("title")),i("p",{slot:"summary"},r.get("summary")),i("ks-recipe-nutrition",{type:"kalorie",value:a.calories,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"tłuszcze",value:a.fats,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"nasycone",value:a.saturatedFats,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"cukry",value:a.sugars,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"sól",value:a.salt,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"białka",value:a.protein,slot:"nutrition"}),i("ks-recipe-nutrition",{type:"węglowodany",value:a.carbohydrates,slot:"nutrition"})),i("ks-recipe-procedure",null,(e=r===null||r===void 0?void 0:r.get("ingredients"))===null||e===void 0?void 0:e.map((function(e){return i("ks-recipe-ingredient",{name:e.name,amount:e.amount,slot:"ingredients"})})),(t=r===null||r===void 0?void 0:r.get("preparation"))===null||t===void 0?void 0:t.map((function(e){var t;return[i("h2",{slot:"preparation"},e.name),i("p",{slot:"preparation"},(t=e===null||e===void 0?void 0:e.steps)===null||t===void 0?void 0:t.join(" "))]}))))),((n=r===null||r===void 0?void 0:r.get("suggestions"))===null||n===void 0?void 0:n.length)>0?[i("h3",{class:"suggested-heading"},"Produkty Polecane"),i("ks-product-container",null,(o=r===null||r===void 0?void 0:r.get("suggestions"))===null||o===void 0?void 0:o.map((function(e){return i("ks-product-card",{product:e})})))]:null)};return e}());s.style=a}}}));