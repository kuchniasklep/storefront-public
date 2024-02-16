import{r as t,B as i,h as o,H as s,g as e}from"./index-e3198654.js";import{c as n}from"./common-e4bd89b8.js";import{c as r}from"./commonDynamic-1bc23f74.js";import{j as a}from"./js.cookie-2cc1be5d.js";import{S as p,P as l}from"./pagination-c80e8894.js";import{T as c}from"./thumbs-b5b41d57.js";import"./index-5a4e318f.js";import"./_commonjsHelpers-ba3f0406.js";const d=class{constructor(i){t(this,i),this.init=!1,this.hide=!1,this.show=!1,this.extend=!0,this.blink=!1}extendpanel(){this.extend=!this.extend}updateCookie(){const t=r.get("compare");a.set("product-comparison",JSON.stringify(t),{expires:60})}loadCookie(){const t=JSON.parse(a.get("product-comparison"));return t&&r.set("compare",t),(null==t?void 0:t.length)>0}componentWillLoad(){this.loadCookie()&&this.showpanel()}async addProduct(t){let i=r.get("compare");this.show&&!this.hide||this.showpanel(),this.extend||this.extendpanel(),3!=i.length?(r.set("compare",[...i,{id:t.id,image:t.image,link:t.link,name:t.name}]),this.updateCookie()):this.animate_blink()}deleteProduct(t){let i=r.get("compare");const o=i.findIndex((i=>i.id==t));o>=0&&(i.splice(o,1),r.set("compare",[...i]),this.updateCookie(),0==i.length&&this.hidepanel())}cancel(){this.hidepanel(),r.set("compare",[]),this.updateCookie()}compare(){const t=r.get("compare");t.length<2||(window.location.href="/porownaj-"+t.map((t=>t.id)).join("-")+".html")}async showpanel(){this.show=!0,this.hide=!0,setTimeout((()=>{this.hide=!1}),this.init?n.get("cookieDelay"):100),this.init=!0}hidepanel(){this.hide=!0}animate_blink(){this.blink=!0,setTimeout((()=>{this.blink=!1}),500)}onScroll(){window.screen.height<840&&(this.extend=!1)}render(){if(!i.isBrowser)return o(s,null);const t=r.get("compare");return o(s,{"aria-hidden":this.show?"false":"true"},o("div",{class:"message"},o("div",{class:"buttons"},o("ks-button",{round:!0,border:!0,narrower:!0,icon:"x",onClick:()=>this.cancel()}),o("p",null,"Porównywanie produktów"),o("ks-button",{round:!0,border:!0,narrower:!0,icon:this.extend?"chevron-down":"chevron-up",onClick:()=>this.extendpanel()}),this.extend?o("ks-button",{round:!0,narrower:!0,name:"Porównaj",onClick:()=>this.compare(),disabled:(null==t?void 0:t.length)<2}):null)),o("div",{class:"products"},[0,1,2].map((i=>o("div",{class:"product"+(t[i]?"":" empty")},t[i]?[o("ks-img3",{image:t[i].image}),o("a",{href:t[i].link},t[i].name),o("ks-button",{round:!0,border:!0,narrower:!0,icon:"x",onClick:()=>this.deleteProduct(t[i].id)})]:null)))))}get root(){return e(this)}};d.style="ks-compare-popup{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;position:fixed;overflow:hidden;font-family:var(--font-emphasis);bottom:0px;left:0px;right:0px;z-index:1000000;background-color:#f2f2f2;border-top:solid 1px #c2c2c2;transition:-webkit-transform 0.4s ease;-webkit-transition:-webkit-transform 0.4s ease;transition:transform 0.4s ease;transition:transform 0.4s ease, -webkit-transform 0.4s ease}ks-compare-popup .message{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:65px;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;font-size:16px;line-height:17px}ks-compare-popup .message p{margin:0;width:100%}ks-compare-popup .products{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:80px;padding:0px 15px 15px 15px;gap:5px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;line-height:14px}ks-compare-popup .products .product{display:-ms-flexbox;display:flex;padding:5px 10px;gap:5px;width:100%;background-color:#ffffff;border:1px solid #e3e3e3;height:60px;border-radius:10px;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}ks-compare-popup .products .product.empty{background-color:transparent;border:solid 1px #a7a7a7;opacity:0.2}ks-compare-popup .products .product ks-img3{max-width:50px;max-height:50px}ks-compare-popup .products .product a{color:#151515;text-decoration:none}ks-compare-popup:not([hide]):not([extend]){-webkit-transform:translateY(80px);transform:translateY(80px)}ks-compare-popup:not([hide])[extend]{-webkit-transform:translateY(0px);transform:translateY(0px)}ks-compare-popup[hide]{-webkit-transform:translateY(150px);transform:translateY(150px)}ks-compare-popup:not([show]){-webkit-transform:translateY(150px);transform:translateY(150px);display:none}ks-compare-popup p{margin:0;max-width:100%}ks-compare-popup .buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;gap:5px}ks-compare-popup .buttons>*{width:-webkit-max-content;width:-moz-max-content;width:max-content}ks-compare-popup .buttons>*:first-child{margin-right:5px}ks-compare-popup .type{margin-bottom:10px}ks-compare-popup .name{font-size:18px;font-weight:700}ks-compare-popup[blink] .products{-webkit-animation:blink-animation 0.5s ease-in;animation:blink-animation 0.5s ease-in}@-webkit-keyframes blink-animation{0%{opacity:0.3}100%{opacity:1}}@keyframes blink-animation{0%{opacity:0.3}100%{opacity:1}}@media (max-width: 920px){ks-compare-popup .products{display:block;height:190px}ks-compare-popup .products .product{height:55px;margin-bottom:5px}ks-compare-popup:not([hide]):not([extend]){-webkit-transform:translateY(190px);transform:translateY(190px)}ks-compare-popup[hide],ks-compare-popup:not([show]){-webkit-transform:translateY(260px);transform:translateY(260px)}ks-compare-popup[extend] .buttons p{font-size:14px}}@media (max-width: 420px){ks-compare-popup[extend] .buttons p{content-visibility:hidden}}";const m=class{constructor(i){t(this,i),this.baseUrl=void 0,this.query=void 0,this.filters=void 0}submit(t){t.preventDefault();const i=this.root.querySelectorAll("form input");let o=new Object;i.forEach((t=>{""!=t.value&&""!=t.name&&(t.name in o?o[t.name]+=`-${t.value}`:o[t.name]=t.value)}));let s=this.baseUrl;for(const e in o)s+=`/${e}=${o[e]}`;return window.location.href=s,!1}transformFilterCategories(){const t=this.filters.filter((t=>!t.category)),i=this.filters.filter((t=>t.category));let o={},s=[];for(const e of i)o[e.category]=[];for(const e of i)o[e.category].push(e);for(const e in o)if(Object.prototype.hasOwnProperty.call(o,e)){const t=o[e];s.push({name:e,category:e,active:t.reduce(((t,i)=>t||i.active),!1),items:[].concat.apply([],t.map((t=>t.items.map((i=>("content"in i&&(i.content=t.name),i)))))),type:"checkbox"})}return[...s,...t]}render(){const t=n.get("translations");if(!i.isBrowser)return o(s,null);const e=this.transformFilterCategories();return[o("ks-button",{narrow:!0,muted:!0,border:!0,name:t.filter,left:!0,icon:"filter",onClick:()=>this.root.querySelector("ks-sidepanel").show()}),o("ks-sidepanel",{left:!0,large:!0},o("span",{class:"heading"},t.filteringHeader),o("form",{method:"POST",action:this.baseUrl},o("input",{type:"hidden",name:"postget",value:"tak"}),this.query?o("input",{type:"hidden",name:"szukaj",value:this.query}):null,e.map((t=>(null==t?void 0:t.items.length)>0?o("ks-filter",{name:t.name,active:t.active},t.items.map((i=>"checkbox"==t.type?o("ks-filter-checkbox",{active:(i=i).active,name:i.name,value:i.value,text:i.content}):"color"==t.type?o("ks-filter-color",{active:(i=i).active,name:i.name,value:i.value,color:i.content}):"slider"==t.type?o("ks-filter-slider",{name:(i=i).name,values:i.values,snap:i.snap,steps:i.steps,from:i.from,to:i.to}):null))):null)),o("ks-button",{class:"clear",border:!0,link:this.baseUrl,name:t.filteringClear}),o("ks-button",{submit:!0,secondary:!0,name:t.filteringSubmit})))]}get root(){return e(this)}};m.style="ks-filtering{display:block}ks-filtering>ks-button{background-color:white}ks-filtering .heading{display:block;margin-bottom:30px;font-size:1.3rem;font-family:var(--font-emphasis);font-weight:700}ks-filtering .clear{margin:30px 0 5px 0}",p.use([l,c]);const h=class{constructor(i){t(this,i),this.data=void 0}componentDidLoad(){this.swiper=new p("ks-info-cards .swiper",{grabCursor:!0,slidesPerView:"auto",spaceBetween:24,loop:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0}})}render(){return o(s,null,o("div",{class:"swiper"},o("div",{class:"swiper-wrapper"},this.data.map((t=>o("div",{class:"swiper-slide"},o("ks-img3",{sync:!0,fit:"cover",image:t.image}),o("div",null,t.text))))),o("div",{class:"swiper-pagination"})))}};h.style="ks-info-cards{display:block;width:100%;margin:20px auto 0px auto;overflow:hidden}ks-info-cards .swiper{width:100%;height:100%;position:relative;padding-bottom:30px;margin:auto}ks-info-cards .swiper-slide{text-align:center;background:#ffffff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:start;align-items:flex-start;font-size:15px;width:300px;max-width:100%;height:auto !important;border:#ededed 1px solid;border-radius:6px;overflow:hidden}ks-info-cards .swiper-slide ks-img3{height:200px;width:100%}ks-info-cards .swiper-slide ks-img3 ks-loader{display:none}ks-info-cards .swiper-slide div{padding:15px 10px}ks-info-cards .swiper-pagination{bottom:0px !important}ks-info-cards .swiper-pagination .swiper-pagination-bullet-active{background:#151515}";const x=class{constructor(i){t(this,i),this.description=void 0}render(){return[this.description?o("div",{innerHTML:this.description}):null,o("slot",{name:"tags"}),o("slot",{name:"comments"})]}};x.style="ks-listing-footer{display:block;position:relative;z-index:1;padding:15px;border-top:#ededed 1px solid;background-color:white;text-align:center;font-size:0.875rem}ks-listing-footer>*:not([slot=tags]){max-width:1200px;margin:15px auto 15px auto;padding:0 15px;line-height:1.5}ks-listing-footer *[slot=tags]{max-width:1200px;margin:auto}ks-listing-footer *[slot=tags]>*{display:inline-block;padding:3px 10px;margin:2px;margin-bottom:3px;line-height:1.5;background:#222222;color:#ffffff !important;vertical-align:middle;white-space:nowrap;border-radius:2px;text-decoration:none !important}";const u=class{constructor(i){t(this,i),this.post=void 0,this.current=void 0,this.enabled=!1}render(){const t=n.get("translations");return o("div",null,o("form",{action:this.post,method:"post",style:{margin:"0"}},o("input",{type:"hidden",name:"sortowanie",value:"0"})),o("ks-button",{onClick:()=>this.toggle(),narrow:!0,muted:!0,border:!0,name:t.sorting,icon:"shuffle"}),o("div",{class:"dropdown"},o("a",{class:1==this.current?"active":null,onClick:()=>this.sort(1)},t.sortingRecommended," ",o("ks-icon",{name:"check",size:.9})),o("a",{class:2==this.current?"active":null,onClick:()=>this.sort(2)},t.sortingPopular," ",o("ks-icon",{name:"users",size:.9})),o("a",{class:3==this.current?"active":null,onClick:()=>this.sort(3)},t.sortingNewest," ",o("ks-icon",{name:"clock",size:.9})),o("hr",null),o("a",{class:4==this.current?"active":null,onClick:()=>this.sort(4)},t.sortingCheapest," ",o("ks-icon",{name:"plus-circle",size:.9})),o("a",{class:5==this.current?"active":null,onClick:()=>this.sort(5)},t.sortingExpensive," ",o("ks-icon",{name:"minus-circle",size:.9}))))}componentDidLoad(){this.form=this.root.querySelector("form"),this.input=this.form.querySelector("input")}sort(t){this.input.value=t.toString(),this.form.submit()}toggle(){this.enabled=!this.enabled}disable(t){this.root.contains(t.target)||(this.enabled=!1)}get root(){return e(this)}};u.style="ks-sorting{display:block;position:relative}ks-sorting ks-button{background-color:white}ks-sorting .dropdown{display:none;position:absolute;z-index:1020;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:200px;padding:10px 0;margin-top:8px;background:#fff;color:#373737;-webkit-box-shadow:0 5px 20px rgb(0 0 0 / 20%);box-shadow:0 5px 20px rgb(0 0 0 / 20%)}ks-sorting[enabled] .dropdown{display:block}ks-sorting a{display:block;position:relative;color:var(--color-dark);text-decoration:none !important;font-size:15px;line-height:15px;padding:11px 15px}ks-sorting a.active{background-color:#f2f2f2}ks-sorting a:hover{color:var(--color-dark-hover)}ks-sorting a:active{color:var(--color-dark-active)}ks-sorting a ks-icon{position:absolute;right:13px;top:8px}ks-sorting hr{overflow:visible;margin:10px 0;border:0;border-top:1px solid #e5e5e5}";export{d as ks_compare_popup,m as ks_filtering,h as ks_info_cards,x as ks_listing_footer,u as ks_sorting}