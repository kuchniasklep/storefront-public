var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{p(r.next(t))}catch(e){i(e)}}function s(t){try{p(r["throw"](t))}catch(e){i(e)}}function p(t){t.done?n(t.value):o(t.value).then(a,s)}p((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return p([t,e])}}function p(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(s){a=[6,s];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++){if(i||!(r in e)){if(!i)i=Array.prototype.slice.call(e,0,r);i[r]=e[r]}}return t.concat(i||Array.prototype.slice.call(e))};System.register(["./index-229c64eb.system.js","./common-ed4cb7b7.system.js","./commonDynamic-b77fc38a.system.js","./js.cookie-fb64f7de.system.js","./index-0ecc4079.system.js","./_commonjsHelpers-8ab2ac47.system.js"],(function(t){"use strict";var e,n,r,o,i,a,s,p;return{setters:[function(t){e=t.r;n=t.B;r=t.h;o=t.H;i=t.g},function(t){a=t.c},function(t){s=t.c},function(t){p=t.j},function(){},function(){}],execute:function(){var c="ks-compare-popup{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;position:fixed;overflow:hidden;font-family:var(--font-emphasis);bottom:0px;left:0px;right:0px;z-index:1000000;background-color:#f2f2f2;border-top:solid 1px #c2c2c2;transition:-webkit-transform 0.4s ease;-webkit-transition:-webkit-transform 0.4s ease;transition:transform 0.4s ease;transition:transform 0.4s ease, -webkit-transform 0.4s ease}ks-compare-popup .message{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:65px;padding:15px;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;font-size:16px;line-height:17px}ks-compare-popup .message p{margin:0;width:100%}ks-compare-popup .products{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:80px;padding:0px 15px 15px 15px;gap:5px;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px;line-height:14px}ks-compare-popup .products .product{display:-ms-flexbox;display:flex;padding:5px 10px;gap:5px;width:100%;background-color:#ffffff;border:1px solid #e3e3e3;height:60px;border-radius:10px;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}ks-compare-popup .products .product.empty{background-color:transparent;border:solid 1px #a7a7a7;opacity:0.2}ks-compare-popup .products .product ks-img3{max-width:50px;max-height:50px}ks-compare-popup .products .product a{color:#151515;text-decoration:none}ks-compare-popup:not([hide]):not([extend]){-webkit-transform:translateY(80px);transform:translateY(80px)}ks-compare-popup:not([hide])[extend]{-webkit-transform:translateY(0px);transform:translateY(0px)}ks-compare-popup[hide]{-webkit-transform:translateY(150px);transform:translateY(150px)}ks-compare-popup:not([show]){-webkit-transform:translateY(150px);transform:translateY(150px);display:none}ks-compare-popup p{margin:0;max-width:100%}ks-compare-popup .buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;gap:5px}ks-compare-popup .buttons>*{width:-webkit-max-content;width:-moz-max-content;width:max-content}ks-compare-popup .buttons>*:first-child{margin-right:5px}ks-compare-popup .type{margin-bottom:10px}ks-compare-popup .name{font-size:18px;font-weight:700}ks-compare-popup[blink] .products{-webkit-animation:blink-animation 0.5s ease-in;animation:blink-animation 0.5s ease-in}@-webkit-keyframes blink-animation{0%{opacity:0.3}100%{opacity:1}}@keyframes blink-animation{0%{opacity:0.3}100%{opacity:1}}@media (max-width: 920px){ks-compare-popup .products{display:block;height:190px}ks-compare-popup .products .product{height:55px;margin-bottom:5px}ks-compare-popup:not([hide]):not([extend]){-webkit-transform:translateY(190px);transform:translateY(190px)}ks-compare-popup[hide],ks-compare-popup:not([show]){-webkit-transform:translateY(260px);transform:translateY(260px)}ks-compare-popup[extend] .buttons p{font-size:14px}}@media (max-width: 420px){ks-compare-popup[extend] .buttons p{content-visibility:hidden}}";var l=t("ks_compare_popup",function(){function t(t){e(this,t);this.init=false;this.hide=false;this.show=false;this.extend=true;this.blink=false}t.prototype.extendpanel=function(){this.extend=!this.extend};t.prototype.updateCookie=function(){var t=s.get("compare");p.set("product-comparison",JSON.stringify(t),{expires:60})};t.prototype.loadCookie=function(){var t=JSON.parse(p.get("product-comparison"));if(t)s.set("compare",t);return(t===null||t===void 0?void 0:t.length)>0};t.prototype.componentWillLoad=function(){if(this.loadCookie())this.showpanel()};t.prototype.addProduct=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(n){e=s.get("compare");if(!this.show||this.hide)this.showpanel();if(!this.extend)this.extendpanel();if(e.length==3){this.animate_blink();return[2]}s.set("compare",__spreadArray(__spreadArray([],e,true),[{id:t.id,image:t.image,link:t.link,name:t.name}],false));this.updateCookie();return[2]}))}))};t.prototype.deleteProduct=function(t){var e=s.get("compare");var n=e.findIndex((function(e){return e.id==t}));if(n>=0){e.splice(n,1);s.set("compare",__spreadArray([],e,true));this.updateCookie();if(e.length==0)this.hidepanel()}};t.prototype.cancel=function(){this.hidepanel();s.set("compare",[]);this.updateCookie()};t.prototype.compare=function(){var t=s.get("compare");if(t.length<2)return;window.location.href="/porownaj-"+t.map((function(t){return t.id})).join("-")+".html"};t.prototype.showpanel=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){this.show=true;this.hide=true;setTimeout((function(){t.hide=false}),this.init?a.get("cookieDelay"):100);this.init=true;return[2]}))}))};t.prototype.hidepanel=function(){this.hide=true};t.prototype.animate_blink=function(){var t=this;this.blink=true;setTimeout((function(){t.blink=false}),500)};t.prototype.onScroll=function(){if(window.screen.height<840)this.extend=false};t.prototype.render=function(){var t=this;if(!n.isBrowser)return r(o,null);var e=s.get("compare");return r(o,{"aria-hidden":this.show?"false":"true"},r("div",{class:"message"},r("div",{class:"buttons"},r("ks-button",{round:true,border:true,narrower:true,icon:"x",onClick:function(){return t.cancel()}}),r("p",null,"Porównywanie produktów"),r("ks-button",{round:true,border:true,narrower:true,icon:this.extend?"chevron-down":"chevron-up",onClick:function(){return t.extendpanel()}}),this.extend?r("ks-button",{round:true,narrower:true,name:"Porównaj",onClick:function(){return t.compare()},disabled:(e===null||e===void 0?void 0:e.length)<2}):null)),r("div",{class:"products"},[0,1,2].map((function(n){return r("div",{class:"product"+(e[n]?"":" empty")},e[n]?[r("ks-img3",{image:e[n].image}),r("a",{href:e[n].link},e[n].name),r("ks-button",{round:true,border:true,narrower:true,icon:"x",onClick:function(){return t.deleteProduct(e[n].id)}})]:null)}))))};Object.defineProperty(t.prototype,"root",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());l.style=c;var u="ks-filtering{display:block}ks-filtering>ks-button{background-color:white}ks-filtering .heading{display:block;margin-bottom:30px;font-size:1.3rem;font-family:var(--font-emphasis);font-weight:700}ks-filtering .clear{margin:30px 0 5px 0}";var f=t("ks_filtering",function(){function t(t){e(this,t);this.baseUrl=undefined;this.query=undefined;this.filters=undefined}t.prototype.submit=function(t){t.preventDefault();var e=this.root.querySelectorAll("form input");var n=new Object;e.forEach((function(t){if(t.value==""||t.name=="")return;if(t.name in n)n[t.name]+="-".concat(t.value);else n[t.name]=t.value}));var r=this.baseUrl;for(var o in n){r+="/".concat(o,"=").concat(n[o])}window.location.href=r;return false};t.prototype.transformFilterCategories=function(){var t=this.filters.filter((function(t){return!t.category}));var e=this.filters.filter((function(t){return t.category}));var n={};var r=[];for(var o=0,i=e;o<i.length;o++){var a=i[o];n[a.category]=[]}for(var s=0,p=e;s<p.length;s++){var a=p[s];n[a.category].push(a)}for(var c in n){if(Object.prototype.hasOwnProperty.call(n,c)){var l=n[c];r.push({name:c,category:c,active:l.reduce((function(t,e){return t||e.active}),false),items:[].concat.apply([],l.map((function(t){return t.items.map((function(e){if("content"in e)e.content=t.name;return e}))}))),type:"checkbox"})}}return __spreadArray(__spreadArray([],r,true),t,true)};t.prototype.render=function(){var t=this;var e=a.get("translations");if(!n.isBrowser)return r(o,null);var i=this.transformFilterCategories();return[r("ks-button",{narrow:true,muted:true,border:true,name:e.filter,left:true,icon:"filter",onClick:function(){return t.root.querySelector("ks-sidepanel").show()}}),r("ks-sidepanel",{left:true,large:true},r("span",{class:"heading"},e.filteringHeader),r("form",{method:"POST",action:this.baseUrl},r("input",{type:"hidden",name:"postget",value:"tak"}),this.query?r("input",{type:"hidden",name:"szukaj",value:this.query}):null,i.map((function(t){return(t===null||t===void 0?void 0:t.items.length)>0?r("ks-filter",{name:t.name,active:t.active},t.items.map((function(e){if(t.type=="checkbox"){e=e;return r("ks-filter-checkbox",{active:e.active,name:e.name,value:e.value,text:e.content})}if(t.type=="color"){e=e;return r("ks-filter-color",{active:e.active,name:e.name,value:e.value,color:e.content})}if(t.type=="slider"){e=e;return r("ks-filter-slider",{name:e.name,values:e.values,snap:e.snap,steps:e.steps,from:e.from,to:e.to})}return null}))):null})),r("ks-button",{class:"clear",border:true,link:this.baseUrl,name:e.filteringClear}),r("ks-button",{submit:true,secondary:true,name:e.filteringSubmit})))]};Object.defineProperty(t.prototype,"root",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());f.style=u;var d="ks-listing-footer{display:block;position:relative;z-index:1;padding:15px;border-top:#ededed 1px solid;background-color:white;text-align:center;font-size:0.875rem}ks-listing-footer>*:not([slot=tags]){max-width:1200px;margin:15px auto 15px auto;padding:0 15px;line-height:1.5}ks-listing-footer *[slot=tags]{max-width:1200px;margin:auto}ks-listing-footer *[slot=tags]>*{display:inline-block;padding:3px 10px;margin:2px;margin-bottom:3px;line-height:1.5;background:#222222;color:#ffffff !important;vertical-align:middle;white-space:nowrap;border-radius:2px;text-decoration:none !important}";var m=t("ks_listing_footer",function(){function t(t){e(this,t);this.description=undefined}t.prototype.render=function(){return[this.description?r("div",{innerHTML:this.description}):null,r("slot",{name:"tags"}),r("slot",{name:"comments"})]};return t}());m.style=d;var h="ks-sorting{display:block;position:relative}ks-sorting ks-button{background-color:white}ks-sorting .dropdown{display:none;position:absolute;z-index:1020;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:200px;padding:10px 0;margin-top:8px;background:#fff;color:#373737;-webkit-box-shadow:0 5px 20px rgb(0 0 0 / 20%);box-shadow:0 5px 20px rgb(0 0 0 / 20%)}ks-sorting[enabled] .dropdown{display:block}ks-sorting a{display:block;position:relative;color:var(--color-dark);text-decoration:none !important;font-size:15px;line-height:15px;padding:11px 15px}ks-sorting a.active{background-color:#f2f2f2}ks-sorting a:hover{color:var(--color-dark-hover)}ks-sorting a:active{color:var(--color-dark-active)}ks-sorting a ks-icon{position:absolute;right:13px;top:8px}ks-sorting hr{overflow:visible;margin:10px 0;border:0;border-top:1px solid #e5e5e5}";var x=t("ks_sorting",function(){function t(t){e(this,t);this.post=undefined;this.current=undefined;this.enabled=false}t.prototype.render=function(){var t=this;var e=a.get("translations");return r("div",null,r("form",{action:this.post,method:"post",style:{margin:"0"}},r("input",{type:"hidden",name:"sortowanie",value:"0"})),r("ks-button",{onClick:function(){return t.toggle()},narrow:true,muted:true,border:true,name:e.sorting,icon:"shuffle"}),r("div",{class:"dropdown"},r("a",{class:this.current==1?"active":null,onClick:function(){return t.sort(1)}},e.sortingRecommended," ",r("ks-icon",{name:"check",size:.9})),r("a",{class:this.current==2?"active":null,onClick:function(){return t.sort(2)}},e.sortingPopular," ",r("ks-icon",{name:"users",size:.9})),r("a",{class:this.current==3?"active":null,onClick:function(){return t.sort(3)}},e.sortingNewest," ",r("ks-icon",{name:"clock",size:.9})),r("hr",null),r("a",{class:this.current==4?"active":null,onClick:function(){return t.sort(4)}},e.sortingCheapest," ",r("ks-icon",{name:"plus-circle",size:.9})),r("a",{class:this.current==5?"active":null,onClick:function(){return t.sort(5)}},e.sortingExpensive," ",r("ks-icon",{name:"minus-circle",size:.9}))))};t.prototype.componentDidLoad=function(){this.form=this.root.querySelector("form");this.input=this.form.querySelector("input")};t.prototype.sort=function(t){this.input.value=t.toString();this.form.submit()};t.prototype.toggle=function(){this.enabled=!this.enabled};t.prototype.disable=function(t){if(!this.root.contains(t.target))this.enabled=false};Object.defineProperty(t.prototype,"root",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());x.style=h}}}));