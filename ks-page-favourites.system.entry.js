System.register(["./index-5ab56926.system.js","./index-1eb13b56.system.js","./favourites-0d7183cd.system.js","./fetch-89de6a18.system.js","./commonDynamic-e40d9ffc.system.js","./dataLayer-687f30f2.system.js"],(function(e){"use strict";var t,a,o,r;return{setters:[function(e){t=e.r;a=e.h},function(e){o=e.c},function(e){r=e.b},function(){},function(){},function(){}],execute:function(){var s=o({});var i="ks-page-favourites{display:block}ks-page-favourites .favourites-container{background:#fff;color:#373737;-webkit-box-shadow:0 2px 8px rgb(0 0 0 / 15%);box-shadow:0 2px 8px rgb(0 0 0 / 15%);padding:20px 30px}ks-page-favourites .favourites-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap}ks-page-favourites .favourites-header .removeAll{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}ks-page-favourites .favourites-header .removeAll button{position:relative;max-width:250px;width:100%;background-color:var(--color-secondary);color:white;border-style:none;height:50px;border-radius:50px;font-family:var(--font-emphasis);font-size:16px;line-height:16px;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-page-favourites .favourites-header .removeAll button:hover{background-color:var(--color-secondary-hover)}ks-page-favourites .favourites-header .removeAll button:active{background-color:var(--color-secondary-active)}ks-page-favourites .favourites-header>span{font-size:26px;line-height:26px;font-weight:700;font-family:var(--font-emphasis);white-space:nowrap}ks-page-favourites .favourites-header .valueString{margin-right:10px}ks-page-favourites .favourites-header .value{color:var(--color-secondary)}ks-page-favourites .empty{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex:1 0 auto;flex:1 0 auto;min-height:320px;padding:40px 40px}ks-page-favourites .empty h1{font-size:20px;font-weight:700;margin-bottom:30px}ks-page-favourites .empty ks-button{max-width:300px;width:100%}@media screen and (max-width: 550px){ks-page-favourites .favourites-header{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}ks-page-favourites .favourites-header>span{font-size:20px;line-height:20px}ks-page-favourites .favourites-header .removeAll{-ms-flex-pack:center;justify-content:center;width:100%;margin-top:10px}}";var n=e("ks_page_favourites",function(){function e(e){t(this,e);this.removeAllLoading=false}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.favouritesData);var t=JSON.parse(e.innerHTML);Object.keys(t).map((function(e){s.set(e,t[e])}))};e.prototype.removeAll=function(){if(this.removeAllLoading)return;this.removeAllLoading=true;r().then((function(){location.reload()}))};e.prototype.render=function(){var e=this;var t=s.get("products");var o=s.get("descriptions");return a("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},a("ks-container",null,(t===null||t===void 0?void 0:t.length)>0?a("div",{class:"favourites-container"},a("div",{class:"favourites-header"},a("span",{class:"valueString"},s.get("valueString")),a("span",{class:"value"},s.get("value")),a("div",{class:"removeAll"},a("button",{class:"fav",onClick:function(){return e.removeAll()}},this.removeAllLoading?a("ks-loader",null):s.get("removeAllString")))),a("hr",null),a("div",{class:"product-container"},t===null||t===void 0?void 0:t.map((function(e){return a("ks-product-fav-card",{summary:o[e.id],product:e})})))):a("div",{class:"empty"},a("h1",null,s.get("emptyHeading")),a("ks-button",{round:true,border:true,name:s.get("emptyButton"),link:"/"}))))};return e}());n.style=i}}}));