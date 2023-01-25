import{r as t,h as e}from"./index-e3198654.js";import{c as n}from"./index-5a4e318f.js";const o=n({}),i=class{constructor(e){t(this,e),this.skipbase=void 0,this.commonData=void 0,this.commonDynamicData=void 0,this.articleData=void 0}componentWillLoad(){const t=document.getElementById(this.articleData),e=JSON.parse(t.innerHTML);Object.keys(e).map((t=>{o.set(t,e[t])}))}renderDescription(t){return t.map((t=>{switch(t.type){case"ComponentContentText":return e("ks-description-text",{text:t.text});case"ComponentContentImage":return e("ks-description-image",{image:t.image,width:t.width});case"ComponentContentTextAndImage":return e("ks-description-text-image",{text:t.text,image:t.image,width:t.width,alignment:t.alignment,position:t.position});case"ComponentContentProducts":return e("ks-description-products",{products:t.products});case"ComponentContentHtml":return e("ks-description-html",{html:t.html});default:return null}}))}render(){return e("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e("ks-container",null,e("div",{class:"article-container"},this.renderDescription(o.get("content")))))}};i.style="ks-page-article{display:block}ks-page-article .article-container{background:#fff;color:#373737;-webkit-box-shadow:0 2px 8px rgb(0 0 0 / 15%);box-shadow:0 2px 8px rgb(0 0 0 / 15%);margin-bottom:0;padding:40px}ks-page-article h1{font-size:26px;font-weight:700}ks-page-article h2{font-size:20px;font-weight:700}ks-page-article h3{font-size:18px;font-weight:700}";export{i as ks_page_article}