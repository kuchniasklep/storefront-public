import{r as i,h as e}from"./index-ca9b706f.js";import{c as n}from"./index-9843a78d.js";const t=n({}),s=class{constructor(e){i(this,e),this.skipbase=void 0,this.commonData=void 0,this.commonDynamicData=void 0,this.recipesData=void 0}componentWillLoad(){const i=document.getElementById(this.recipesData),e=JSON.parse(i.innerHTML);Object.keys(e).map((i=>{t.set(i,e[i])}))}render(){const i=t.get("navigation"),n=t.get("recipes");return e("ks-page-base",{skipbase:this.skipbase,commonData:this.commonData,commonDynamicData:this.commonDynamicData},e("ks-listing-header",{heading:t.get("title"),breadcrumbs:t.get("breadcrumbs"),description:t.get("description"),categories:t.get("categories"),tags:t.get("tags")}),i&&(null==n?void 0:n.length)>0?e("ks-listing-navigation",null,e("ks-pagination",{count:i.count,current:i.current,base:i.paginationBase,pattern:i.pattern})):null,(null==n?void 0:n.length)>0?e("ks-article-container",null,n.map((i=>e("ks-recipe-card",{heading:i.heading,link:i.link,cuisine:i.cuisine,"cuisine-link":i.cuisineLink,category:i.category,"category-link":i.categoryLink,image:i.image,width:i.width,height:i.height})))):null,i&&(null==n?void 0:n.length)>0?e("ks-listing-navigation",null,e("ks-pagination",{count:i.count,current:i.current,base:i.paginationBase,pattern:i.pattern})):null)}};s.style="ks-page-recipes ks-article-container{padding:20px 0px;padding:0px 10px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-page-recipes ks-article-container>div{-ms-flex-pack:center;justify-content:center}";export{s as ks_page_recipes}