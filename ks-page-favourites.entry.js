import{r as e,h as a}from"./index-b2de1977.js";import{c as o}from"./index-bca22170.js";import{b as t}from"./favourites-80ddc3f2.js";import"./fetch-bbb23998.js";import"./commonDynamic-e598d690.js";import"./dataLayer-f5679f15.js";const s=o({}),r=class{constructor(a){e(this,a),this.removeAllLoading=!1}componentWillLoad(){const e=document.getElementById(this.favouritesData),a=JSON.parse(e.innerHTML);Object.keys(a).map((e=>{s.set(e,a[e])}))}removeAll(){this.removeAllLoading||(this.removeAllLoading=!0,t().then((()=>{location.reload()})))}render(){const e=s.get("products"),o=s.get("descriptions");return a("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},a("ks-container",null,(null==e?void 0:e.length)>0?a("div",{class:"favourites-container"},a("div",{class:"favourites-header"},a("span",{class:"valueString"},s.get("valueString")),a("span",{class:"value"},s.get("value")),a("div",{class:"removeAll"},a("button",{class:"fav",onClick:()=>this.removeAll()},this.removeAllLoading?a("ks-loader",null):s.get("removeAllString")))),a("hr",null),a("div",{class:"product-container"},null==e?void 0:e.map((e=>a("ks-product-fav-card",{summary:o[e.id],product:e}))))):a("div",{class:"empty"},a("h1",null,s.get("emptyHeading")),a("ks-button",{round:!0,border:!0,name:s.get("emptyButton"),link:"/"}))))}};r.style="ks-page-favourites{display:block}ks-page-favourites .favourites-container{background:#fff;color:#373737;-webkit-box-shadow:0 2px 8px rgb(0 0 0 / 15%);box-shadow:0 2px 8px rgb(0 0 0 / 15%);padding:20px 30px}ks-page-favourites .favourites-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap}ks-page-favourites .favourites-header .removeAll{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}ks-page-favourites .favourites-header .removeAll button{position:relative;max-width:250px;width:100%;background-color:var(--color-secondary);color:white;border-style:none;height:50px;border-radius:50px;font-family:var(--font-emphasis);font-size:16px;line-height:16px;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-page-favourites .favourites-header .removeAll button:hover{background-color:var(--color-secondary-hover)}ks-page-favourites .favourites-header .removeAll button:active{background-color:var(--color-secondary-active)}ks-page-favourites .favourites-header>span{font-size:26px;line-height:26px;font-weight:700;font-family:var(--font-emphasis);white-space:nowrap}ks-page-favourites .favourites-header .valueString{margin-right:10px}ks-page-favourites .favourites-header .value{color:var(--color-secondary)}ks-page-favourites .empty{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex:1 0 auto;flex:1 0 auto;min-height:320px;padding:40px 40px}ks-page-favourites .empty h1{font-size:20px;font-weight:700;margin-bottom:30px}ks-page-favourites .empty ks-button{max-width:300px;width:100%}@media screen and (max-width: 550px){ks-page-favourites .favourites-header{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}ks-page-favourites .favourites-header>span{font-size:20px;line-height:20px}ks-page-favourites .favourites-header .removeAll{-ms-flex-pack:center;justify-content:center;width:100%;margin-top:10px}}";export{r as ks_page_favourites}