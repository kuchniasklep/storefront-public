import{r as e,h as n}from"./index-6e14abe0.js";import{c as t}from"./index-a26ba0e6.js";const i=t({banners:[],info:{},products:[],featured:[],recipes:[],recipesHeading:"",recipesMore:"",articles:[],articlesHeading:"",articlesMore:"",seeMore:"",logoBanners:[]}),s=class{constructor(n){e(this,n)}componentWillLoad(){const e=document.getElementById(this.homeData),n=JSON.parse(e.innerHTML);Object.keys(n).map((e=>{i.set(e,n[e])}))}render(){const e=i.get("banners"),t=i.get("featured"),s=i.get("info"),a=i.get("products"),r=i.get("recipes"),o=i.get("recipesHeading"),l=i.get("recipesMore"),c=i.get("articles"),p=i.get("articlesHeading"),d=i.get("articlesMore"),m=i.get("seeMore");return n("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e?n("ks-banner-container",null,e.map(((e,t)=>n("ks-banner",{sync:0==t,active:0==t,name:e.name,color:e.color,link:e.link,image:e.image,webp:e.webp,width:e.width,height:e.height,theme:e.theme})))):null,s?n("ks-homepage-info",null,n("h1",{slot:"mainHeading"},s.mainHeading),n("p",{slot:"mainContent"},s.mainParagraph),n("h2",{slot:"firstHeading"},s.firstHeading),n("p",{slot:"firstContent"},s.firstParagraph),n("h2",{slot:"secondHeading"},s.secondHeading),n("p",{slot:"secondContent"},s.secondParagraph),n("h2",{slot:"thirdHeading"},s.thirdHeading),n("p",{slot:"thirdContent"},s.thirdParagraph)):null,n("ks-zaufane",{home:!0,token:"sf15070062863a73c5990",customer:"150700"}),a?n("ks-homepage-products",null,a.map((e=>n("ks-product-container",null,e.products.map((e=>n("ks-product-card",{"product-id":e.id,link:e.link,name:e.name,img:e.image,webp:e.webp,"current-price":e.currentPrice,"previous-price":e.previousPrice,unavailable:e.unavailable}))))))):null,t?n("ks-featured-container",null,t.map((e=>n("ks-featured",{slot:e.side,name:e.name,image:e.image,webp:e.webp,link:e.link,width:e.width,height:e.height})))):null,r?[n("h3",null,o),n("ks-article-container",null,r.map((e=>n("ks-recipe-card",{heading:e.heading,cuisine:e.cuisine,category:e.category,link:e.link,image:e.image,webp:e.webp,width:e.width,height:e.height,"cuisine-link":e.cuisineLink,"category-link":e.categoryLink})))),n("ks-see-more",{href:l,text:m})]:null,c?[n("h3",null,p),n("ks-article-container",null,c.map((e=>n("ks-article-card",{link:e.link,heading:e.heading,image:e.image,webp:e.webp,date:e.date,views:e.views},n("p",null,e.description))))),n("ks-see-more",{href:d,text:m})]:null)}};s.style="ks-page-home{display:block}ks-page-home>*>h3{font-size:24px;margin:25px 0;text-align:center}ks-page-home .logo-banner-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:10px}";export{s as ks_page_home}