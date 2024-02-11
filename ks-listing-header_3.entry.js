import{r as i,h as t,g as s}from"./index-e3198654.js";const n=class{constructor(t){i(this,t),this.heading=void 0,this.description=void 0,this.query=void 0,this.autocorrect=void 0,this.breadcrumbs=void 0,this.categories=void 0,this.tags=void 0}render(){var i,s,n,e,o;const r=null===(i=this.autocorrect)||void 0===i?void 0:i.split("{}");return[t("h1",{class:"title"},this.heading),2==(null==r?void 0:r.length)&&this.query?t("h2",{class:"autocorrect"},r[0],t("span",null,this.query),r[1]):null,(null===(s=this.breadcrumbs)||void 0===s?void 0:s.length)>0?t("ks-content-breadcrumbs",{items:this.breadcrumbs}):null,this.description||(null===(n=this.categories)||void 0===n?void 0:n.length)>0?t("hr",null):null,this.description?t("div",{class:"description",innerHTML:this.description}):null,(null===(e=this.categories)||void 0===e?void 0:e.length)>0?t("ks-content-tags",{items:this.categories}):null,(null===(o=this.tags)||void 0===o?void 0:o.length)>0?t("ks-content-tags",{class:"tags",items:this.tags}):null]}get root(){return s(this)}};n.style="ks-listing-header{display:block;position:relative;z-index:1;padding:15px;border-bottom:#ededed 1px solid;background-color:white;text-align:center;font-size:0.875rem}ks-listing-header .title{display:block;margin:0 0 5px 0;font-family:var(--font-emphasis);font-weight:700;font-size:1.3rem;line-height:1.3}@media (max-width: 960px){ks-listing-header .title{font-size:1.105rem}}ks-listing-header .autocorrect{font-size:17px !important;font-weight:500 !important;margin-bottom:0px}ks-listing-header .autocorrect>span{color:#ff3c3c;font-weight:700}ks-listing-header .description{max-width:1200px;margin:0 auto 15px auto;padding:0 15px;line-height:1.5}ks-listing-header .tags{margin-top:5px}ks-listing-header hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible;text-align:inherit;margin:15px 0 15px 0;border:0;border-top:1px solid #e5e5e5}";const e=class{constructor(t){i(this,t),this.products=void 0}render(){return t("slot",null)}};e.style='ks-listing-navigation{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:15px 0}ks-listing-navigation[products="0"],ks-listing-navigation[products="1"]{display:none}ks-listing-navigation ks-filtering{-ms-flex-order:1;order:1;margin:0 5px}ks-listing-navigation ks-sorting{-ms-flex-order:3;order:3;margin:0 5px}ks-listing-navigation ks-pagination{-ms-flex-order:2;order:2;margin:0 10px}@media (max-width: 640px){ks-listing-navigation{-ms-flex-wrap:wrap;flex-wrap:wrap}ks-listing-navigation ks-filtering{-ms-flex-order:1;order:1;margin:0 3px;width:40%;min-width:144px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-listing-navigation ks-sorting{-ms-flex-order:2;order:2;margin:0 3px;width:40%;min-width:144px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-listing-navigation ks-pagination{-ms-flex-order:3;order:3;-ms-flex:1;flex:1;min-width:100%;margin-top:6px}}@media (max-width: 344px){ks-listing-navigation ks-filtering,ks-listing-navigation ks-sorting{width:47%;min-width:120px}}';const o=class{constructor(t){i(this,t),this.count=void 0,this.current=void 0,this.base="",this.pattern=""}render(){if(!this.count||!this.current||this.count<2)return;let i=new Array;i.push(this.current);let s=[...i],n=6,e=this.current,o=this.current;for(;n>0;){let t=!1,r=!1;if(e-1>0?(i.push(e-1),n>=3&&s.push(e-1),e--,n--):t=!0,o+1<=this.count?(i.push(o+1),n>=3&&s.push(o+1),o++,n--):r=!0,t&&r)break}return i.sort(((i,t)=>i-t)),s.sort(((i,t)=>i-t)),[this.current>1?t("a",{href:this.link(this.current-1)},t("ks-icon",{name:"chevron-left",size:.9})):null,i.map((n=>{if(n==this.current)return t("a",{class:"active"},n.toString());const e=s.includes(n)?"":"desktop";if(n==i[0]){const i=t("a",{class:e,href:this.link(1)},"1");return 1==n?i:[i,t("div",{class:"separator"})]}if(n==i[i.length-1]){const i=t("a",{class:e,href:this.link(this.count)},this.count);return n==this.count?i:[t("div",{class:"separator"}),i]}return t("a",{class:e,href:this.link(n)},n.toString())})),this.current<this.count?t("a",{href:this.link(this.current+1)},t("ks-icon",{name:"chevron-right",size:.9})):null]}link(i){return 1==i?this.base:this.base+this.pattern+i.toString()}};o.style="ks-pagination{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}ks-pagination[count='1']{display:none}ks-pagination a{display:inline-block;width:42px;height:42px;line-height:42px;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #e5e5e5;background-color:white;color:#252525;vertical-align:middle;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;-webkit-transition:border 0.3s ease;transition:border 0.3s ease}ks-pagination a:hover{border:1px solid #b9b9b9;text-decoration:none;color:#252525}ks-pagination a.active{border:1px solid #252525;background-color:#252525;color:white;cursor:default}ks-pagination .separator{width:15px;display:none}ks-pagination .desktop{display:none}@media (min-width: 960px){ks-pagination .separator,ks-pagination .desktop{display:block}}";export{n as ks_listing_header,e as ks_listing_navigation,o as ks_pagination}