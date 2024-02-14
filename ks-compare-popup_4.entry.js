import{r as t,B as o,h as i,H as e,g as s}from"./index-e3198654.js";import{c as n}from"./common-e4bd89b8.js";import{c as r}from"./commonDynamic-1bc23f74.js";import{j as a}from"./js.cookie-2cc1be5d.js";import"./index-5a4e318f.js";import"./_commonjsHelpers-ba3f0406.js";const p=class{constructor(o){t(this,o),this.init=!1,this.hide=!1,this.show=!1,this.extend=!0,this.blink=!1}extendpanel(){this.extend=!this.extend}updateCookie(){const t=r.get("compare");a.set("product-comparison",JSON.stringify(t),{expires:60})}loadCookie(){const t=JSON.parse(a.get("product-comparison"));return t&&r.set("compare",t),(null==t?void 0:t.length)>0}componentWillLoad(){this.loadCookie()&&this.showpanel()}async addProduct(t){let o=r.get("compare");this.show&&!this.hide||this.showpanel(),this.extend||this.extendpanel(),3!=o.length?(r.set("compare",[...o,{id:t.id,image:t.image,link:t.link,name:t.name}]),this.updateCookie()):this.animate_blink()}deleteProduct(t){let o=r.get("compare");const i=o.findIndex((o=>o.id==t));i>=0&&(o.splice(i,1),r.set("compare",[...o]),this.updateCookie(),0==o.length&&this.hidepanel())}cancel(){this.hidepanel(),r.set("compare",[]),this.updateCookie()}compare(){const t=r.get("compare");t.length<2||(window.location.href="/porownaj-"+t.map((t=>t.id)).join("-")+".html")}async showpanel(){this.show=!0,this.hide=!0,setTimeout((()=>{this.hide=!1}),this.init?n.get("cookieDelay"):100),this.init=!0}hidepanel(){this.hide=!0}animate_blink(){this.blink=!0,setTimeout((()=>{this.blink=!1}),500)}onScroll(){window.screen.height<840&&(this.extend=!1)}render(){if(!o.isBrowser)return i(e,null);const t=r.get("compare");return i(e,{"aria-hidden":this.show?"false":"true"},i("div",{class:"message"},i("div",{class:"buttons"},i("ks-button",{round:!0,border:!0,narrower:!0,icon:"x",onClick:()=>this.cancel()}),i("p",null,"Porównywanie produktów"),i("ks-button",{round:!0,border:!0,narrower:!0,icon:this.extend?"chevron-down":"chevron-up",onClick:()=>this.extendpanel()}),this.extend?i("ks-button",{round:!0,narrower:!0,name:"Porównaj",onClick:()=>this.compare(),disabled:(null==t?void 0:t.length)<2}):null)),i("div",{class:"products"},[0,1,2].map((o=>i("div",{class:"product"+(t[o]?"":" empty")},t[o]?[i("ks-img3",{image:t[o].image}),i("a",{href:t[o].link},t[o].name),i("ks-button",{round:!0,border:!0,narrower:!0,icon:"x",onClick:()=>this.deleteProduct(t[o].id)})]:null)))))}get root(){return s(this)}};p.style="ks-compare-popup{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;position:fixed;overflow:hidden;font-family:var(--font-emphasis);bottom:0px;left:0px;right:0px;z-index:1000000;background-color:#f2f2f2;border-top:solid 1px #c2c2c2;transition:-webkit-transform 0.4s ease;-webkit-transition:-webkit-transform 0.4s ease;transition:transform 0.4s ease;transition:transform 0.4s ease, -webkit-transform 0.4s ease}ks-compare-popup .message{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:65px;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;font-size:16px;line-height:17px}ks-compare-popup .message p{margin:0;width:100%}ks-compare-popup .products{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:80px;padding:0px 15px 15px 15px;gap:5px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;line-height:14px}ks-compare-popup .products .product{display:-ms-flexbox;display:flex;padding:5px 10px;gap:5px;width:100%;background-color:#ffffff;border:1px solid #e3e3e3;height:60px;border-radius:10px;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}ks-compare-popup .products .product.empty{background-color:transparent;border:solid 1px #a7a7a7;opacity:0.2}ks-compare-popup .products .product ks-img3{max-width:50px;max-height:50px}ks-compare-popup .products .product a{color:#151515;text-decoration:none}ks-compare-popup:not([hide]):not([extend]){-webkit-transform:translateY(80px);transform:translateY(80px)}ks-compare-popup:not([hide])[extend]{-webkit-transform:translateY(0px);transform:translateY(0px)}ks-compare-popup[hide]{-webkit-transform:translateY(150px);transform:translateY(150px)}ks-compare-popup:not([show]){-webkit-transform:translateY(150px);transform:translateY(150px);display:none}ks-compare-popup p{margin:0;max-width:100%}ks-compare-popup .buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;gap:5px}ks-compare-popup .buttons>*{width:-webkit-max-content;width:-moz-max-content;width:max-content}ks-compare-popup .buttons>*:first-child{margin-right:5px}ks-compare-popup .type{margin-bottom:10px}ks-compare-popup .name{font-size:18px;font-weight:700}ks-compare-popup[blink] .products{-webkit-animation:blink-animation 0.5s ease-in;animation:blink-animation 0.5s ease-in}@-webkit-keyframes blink-animation{0%{opacity:0.3}100%{opacity:1}}@keyframes blink-animation{0%{opacity:0.3}100%{opacity:1}}@media (max-width: 920px){ks-compare-popup .products{display:block;height:190px}ks-compare-popup .products .product{height:55px;margin-bottom:5px}ks-compare-popup:not([hide]):not([extend]){-webkit-transform:translateY(190px);transform:translateY(190px)}ks-compare-popup[hide],ks-compare-popup:not([show]){-webkit-transform:translateY(260px);transform:translateY(260px)}ks-compare-popup[extend] .buttons p{font-size:14px}}@media (max-width: 420px){ks-compare-popup[extend] .buttons p{content-visibility:hidden}}";const c=class{constructor(o){t(this,o),this.baseUrl=void 0,this.query=void 0,this.filters=void 0}submit(t){t.preventDefault();const o=this.root.querySelectorAll("form input");let i=new Object;o.forEach((t=>{""!=t.value&&""!=t.name&&(t.name in i?i[t.name]+=`-${t.value}`:i[t.name]=t.value)}));let e=this.baseUrl;for(const s in i)e+=`/${s}=${i[s]}`;return window.location.href=e,!1}transformFilterCategories(){const t=this.filters.filter((t=>!t.category)),o=this.filters.filter((t=>t.category));let i={},e=[];for(const s of o)i[s.category]=[];for(const s of o)i[s.category].push(s);for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s)){const t=i[s];e.push({name:s,category:s,active:t.reduce(((t,o)=>t||o.active),!1),items:[].concat.apply([],t.map((t=>t.items.map((o=>("content"in o&&(o.content=t.name),o)))))),type:"checkbox"})}return[...t,...e]}render(){const t=n.get("translations");if(!o.isBrowser)return i(e,null);const s=this.transformFilterCategories();return[i("ks-button",{narrow:!0,muted:!0,border:!0,name:t.filter,left:!0,icon:"filter",onClick:()=>this.root.querySelector("ks-sidepanel").show()}),i("ks-sidepanel",{left:!0,large:!0},i("span",{class:"heading"},t.filteringHeader),i("form",{method:"POST",action:this.baseUrl},i("input",{type:"hidden",name:"postget",value:"tak"}),this.query?i("input",{type:"hidden",name:"szukaj",value:this.query}):null,s.map((t=>(null==t?void 0:t.items.length)>0?i("ks-filter",{name:t.name,active:t.active},t.items.map((o=>"checkbox"==t.type?i("ks-filter-checkbox",{active:(o=o).active,name:o.name,value:o.value,text:o.content}):"color"==t.type?i("ks-filter-color",{active:(o=o).active,name:o.name,value:o.value,color:o.content}):"slider"==t.type?i("ks-filter-slider",{name:(o=o).name,values:o.values,snap:o.snap,steps:o.steps,from:o.from,to:o.to}):null))):null)),i("ks-button",{class:"clear",border:!0,link:this.baseUrl,name:t.filteringClear}),i("ks-button",{submit:!0,secondary:!0,name:t.filteringSubmit})))]}get root(){return s(this)}};c.style="ks-filtering{display:block}ks-filtering>ks-button{background-color:white}ks-filtering .heading{display:block;margin-bottom:30px;font-size:1.3rem;font-family:var(--font-emphasis);font-weight:700}ks-filtering .clear{margin:30px 0 5px 0}";const l=class{constructor(o){t(this,o),this.description=void 0}render(){return[this.description?i("div",{innerHTML:this.description}):null,i("slot",{name:"tags"}),i("slot",{name:"comments"})]}};l.style="ks-listing-footer{display:block;position:relative;z-index:1;padding:15px;border-top:#ededed 1px solid;background-color:white;text-align:center;font-size:0.875rem}ks-listing-footer>*:not([slot=tags]){max-width:1200px;margin:15px auto 15px auto;padding:0 15px;line-height:1.5}ks-listing-footer *[slot=tags]{max-width:1200px;margin:auto}ks-listing-footer *[slot=tags]>*{display:inline-block;padding:3px 10px;margin:2px;margin-bottom:3px;line-height:1.5;background:#222222;color:#ffffff !important;vertical-align:middle;white-space:nowrap;border-radius:2px;text-decoration:none !important}";const d=class{constructor(o){t(this,o),this.post=void 0,this.current=void 0,this.enabled=!1}render(){const t=n.get("translations");return i("div",null,i("form",{action:this.post,method:"post",style:{margin:"0"}},i("input",{type:"hidden",name:"sortowanie",value:"0"})),i("ks-button",{onClick:()=>this.toggle(),narrow:!0,muted:!0,border:!0,name:t.sorting,icon:"shuffle"}),i("div",{class:"dropdown"},i("a",{class:1==this.current?"active":null,onClick:()=>this.sort(1)},t.sortingRecommended," ",i("ks-icon",{name:"check",size:.9})),i("a",{class:2==this.current?"active":null,onClick:()=>this.sort(2)},t.sortingPopular," ",i("ks-icon",{name:"users",size:.9})),i("a",{class:3==this.current?"active":null,onClick:()=>this.sort(3)},t.sortingNewest," ",i("ks-icon",{name:"clock",size:.9})),i("hr",null),i("a",{class:4==this.current?"active":null,onClick:()=>this.sort(4)},t.sortingCheapest," ",i("ks-icon",{name:"plus-circle",size:.9})),i("a",{class:5==this.current?"active":null,onClick:()=>this.sort(5)},t.sortingExpensive," ",i("ks-icon",{name:"minus-circle",size:.9}))))}componentDidLoad(){this.form=this.root.querySelector("form"),this.input=this.form.querySelector("input")}sort(t){this.input.value=t.toString(),this.form.submit()}toggle(){this.enabled=!this.enabled}disable(t){this.root.contains(t.target)||(this.enabled=!1)}get root(){return s(this)}};d.style="ks-sorting{display:block;position:relative}ks-sorting ks-button{background-color:white}ks-sorting .dropdown{display:none;position:absolute;z-index:1020;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:200px;padding:10px 0;margin-top:8px;background:#fff;color:#373737;-webkit-box-shadow:0 5px 20px rgb(0 0 0 / 20%);box-shadow:0 5px 20px rgb(0 0 0 / 20%)}ks-sorting[enabled] .dropdown{display:block}ks-sorting a{display:block;position:relative;color:var(--color-dark);text-decoration:none !important;font-size:15px;line-height:15px;padding:11px 15px}ks-sorting a.active{background-color:#f2f2f2}ks-sorting a:hover{color:var(--color-dark-hover)}ks-sorting a:active{color:var(--color-dark-active)}ks-sorting a ks-icon{position:absolute;right:13px;top:8px}ks-sorting hr{overflow:visible;margin:10px 0;border:0;border-top:1px solid #e5e5e5}";export{p as ks_compare_popup,c as ks_filtering,l as ks_listing_footer,d as ks_sorting}