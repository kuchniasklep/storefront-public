var __spreadArray=this&&this.__spreadArray||function(r,e,i){if(i||arguments.length===2)for(var t=0,n=e.length,o;t<n;t++){if(o||!(t in e)){if(!o)o=Array.prototype.slice.call(e,0,t);o[t]=e[t]}}return r.concat(o||Array.prototype.slice.call(e))};System.register(["./index-229c64eb.system.js"],(function(r){"use strict";var e,i,t;return{setters:[function(r){e=r.r;i=r.h;t=r.g}],execute:function(){var n='ks-breadcrumbs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px 0}ks-breadcrumbs>*{position:relative;padding:2px 10px;background-color:var(--breadcrumb-color);margin:2px 4px 2px 5px;display:inline-block;height:22px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-breadcrumbs>*:before,ks-breadcrumbs>*:after{content:"";position:absolute;top:0;border:0 solid var(--breadcrumb-color);border-width:11px 5px;width:0;height:0;border-left-color:transparent;-webkit-transition:border-color 0.3s ease,\n                border-left-color 0.3s ease;transition:border-color 0.3s ease,\n                border-left-color 0.3s ease}ks-breadcrumbs>*:before{border-left-color:transparent;margin-left:-15px}ks-breadcrumbs>*:after{border-color:transparent;border-left-color:var(--breadcrumb-color);margin-left:10px}ks-breadcrumbs>*:first-child:before{border:none}ks-breadcrumbs>*:last-child:after{border:none}ks-breadcrumbs *{color:var(--breadcrumb-text-color) !important;text-decoration:none !important;line-height:19px}ks-breadcrumbs>*:hover{background-color:var(--breadcrumb-color-hover)}ks-breadcrumbs>*:hover:before{border-color:var(--breadcrumb-color-hover);border-left-color:transparent}ks-breadcrumbs>*:hover:after{border-color:transparent;border-left-color:var(--breadcrumb-color-hover)}';var o=r("ks_breadcrumbs",function(){function r(r){e(this,r)}r.prototype.render=function(){return i("slot",null)};return r}());o.style=n;var s="ks-listing-header{display:block;position:relative;z-index:1;padding:15px;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);background-color:white;text-align:center;font-size:0.875rem}ks-listing-header .title{display:block;margin:0 0 5px 0;font-family:var(--font-emphasis);font-weight:700;font-size:1.3rem;line-height:1.3}@media (max-width: 960px){ks-listing-header .title{font-size:1.105rem}}ks-listing-header .autocorrect{font-size:17px !important;font-weight:500 !important;margin-bottom:0px}ks-listing-header .autocorrect>span{color:#ff3c3c;font-weight:700}ks-listing-header .description{max-width:1200px;margin:0 auto 15px auto;padding:0 15px;line-height:1.5}ks-listing-header .categories{max-width:1200px;margin:auto}ks-listing-header .categories>*{display:inline-block;padding:3px 10px;margin:2px;margin-bottom:3px;line-height:1.5;background:#222222;color:#ffffff !important;vertical-align:middle;white-space:nowrap;border-radius:2px;text-decoration:none !important}ks-listing-header .tags{margin-top:5px}ks-listing-header .tags>*{background-color:#555555}ks-listing-header hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible;text-align:inherit;margin:15px 0 15px 0;border:0;border-top:1px solid #e5e5e5}";var a=r("ks_listing_header",function(){function r(r){e(this,r);this.heading=undefined;this.description=undefined;this.query=undefined;this.autocorrect=undefined;this.breadcrumbs=undefined;this.categories=undefined;this.tags=undefined}r.prototype.render=function(){var r,e,t,n,o;var s=(r=this.autocorrect)===null||r===void 0?void 0:r.split("{}");return[i("h1",{class:"title"},this.heading),(s===null||s===void 0?void 0:s.length)==2&&this.query?i("h2",{class:"autocorrect"},s[0],i("span",null,this.query),s[1]):null,((e=this.breadcrumbs)===null||e===void 0?void 0:e.length)>0?i("ks-breadcrumbs",{class:"breadcrumbs"},this.breadcrumbs.map((function(r){return i("a",{href:r.link},r.name)}))):null,this.description||((t=this.categories)===null||t===void 0?void 0:t.length)>0?i("hr",null):null,this.description?i("div",{class:"description",innerHTML:this.description}):null,((n=this.categories)===null||n===void 0?void 0:n.length)>0?i("div",{class:"categories"},this.categories.map((function(r){return i("a",{href:r.link},r.name)}))):null,((o=this.tags)===null||o===void 0?void 0:o.length)>0?i("div",{class:"categories tags"},this.tags.map((function(r){return i("a",{href:r.link},r.name)}))):null]};Object.defineProperty(r.prototype,"root",{get:function(){return t(this)},enumerable:false,configurable:true});return r}());a.style=s;var l='ks-listing-navigation{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:15px 0}ks-listing-navigation[products="0"],ks-listing-navigation[products="1"]{display:none}ks-listing-navigation ks-filtering{-ms-flex-order:1;order:1;margin:0 5px}ks-listing-navigation ks-sorting{-ms-flex-order:3;order:3;margin:0 5px}ks-listing-navigation ks-pagination{-ms-flex-order:2;order:2;margin:0 10px}@media (max-width: 640px){ks-listing-navigation{-ms-flex-wrap:wrap;flex-wrap:wrap}ks-listing-navigation ks-filtering{-ms-flex-order:1;order:1;margin:0 3px;width:40%;min-width:144px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-listing-navigation ks-sorting{-ms-flex-order:2;order:2;margin:0 3px;width:40%;min-width:144px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-listing-navigation ks-pagination{-ms-flex-order:3;order:3;-ms-flex:1;flex:1;min-width:100%;margin-top:6px}}@media (max-width: 344px){ks-listing-navigation ks-filtering,ks-listing-navigation ks-sorting{width:47%;min-width:120px}}';var d=r("ks_listing_navigation",function(){function r(r){e(this,r);this.products=undefined}r.prototype.render=function(){return i("slot",null)};return r}());d.style=l;var c="ks-pagination{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}ks-pagination[count='1']{display:none}ks-pagination a{display:inline-block;width:42px;height:42px;line-height:42px;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #e5e5e5;background-color:white;color:#252525;vertical-align:middle;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;-webkit-transition:border 0.3s ease;transition:border 0.3s ease}ks-pagination a:hover{border:1px solid #b9b9b9;text-decoration:none;color:#252525}ks-pagination a.active{border:1px solid #252525;background-color:#252525;color:white;cursor:default}ks-pagination .separator{width:15px;display:none}ks-pagination .desktop{display:none}@media (min-width: 960px){ks-pagination .separator,ks-pagination .desktop{display:block}}";var p=r("ks_pagination",function(){function r(r){e(this,r);this.count=undefined;this.current=undefined;this.base="";this.pattern=""}r.prototype.render=function(){var r=this;if(!this.count||!this.current||this.count<2)return;var e=new Array;e.push(this.current);var t=__spreadArray([],e,true);var n=6;var o=3;var s=this.current;var a=this.current;while(n>0){var l=false;var d=false;if(s-1>0){e.push(s-1);if(n>=o)t.push(s-1);s--;n--}else l=true;if(a+1<=this.count){e.push(a+1);if(n>=o)t.push(a+1);a++;n--}else d=true;if(l&&d)break}e.sort((function(r,e){return r-e}));t.sort((function(r,e){return r-e}));return[this.current>1?i("a",{href:this.link(this.current-1)},i("ks-icon",{name:"chevron-left",size:.9})):null,e.map((function(n){if(n==r.current)return i("a",{class:"active"},n.toString());var o=!t.includes(n)?"desktop":"";if(n==e[0]){var s=i("a",{class:o,href:r.link(1)},"1");return n==1?s:[s,i("div",{class:"separator"})]}if(n==e[e.length-1]){var s=i("a",{class:o,href:r.link(r.count)},r.count);return n==r.count?s:[i("div",{class:"separator"}),s]}return i("a",{class:o,href:r.link(n)},n.toString())})),this.current<this.count?i("a",{href:this.link(this.current+1)},i("ks-icon",{name:"chevron-right",size:.9})):null]};r.prototype.link=function(r){if(r==1)return this.base;return this.base+this.pattern+r.toString()};return r}());p.style=c}}}));