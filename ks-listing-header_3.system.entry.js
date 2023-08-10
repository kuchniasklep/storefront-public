var __spreadArray=this&&this.__spreadArray||function(i,t,n){if(n||arguments.length===2)for(var e=0,r=t.length,s;e<r;e++){if(s||!(e in t)){if(!s)s=Array.prototype.slice.call(t,0,e);s[e]=t[e]}}return i.concat(s||Array.prototype.slice.call(t))};System.register(["./index-229c64eb.system.js"],(function(i){"use strict";var t,n,e;return{setters:[function(i){t=i.r;n=i.h;e=i.g}],execute:function(){var r="ks-listing-header{display:block;position:relative;z-index:1;padding:15px;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);background-color:white;text-align:center;font-size:0.875rem}ks-listing-header .title{display:block;margin:0 0 5px 0;font-family:var(--font-emphasis);font-weight:700;font-size:1.3rem;line-height:1.3}@media (max-width: 960px){ks-listing-header .title{font-size:1.105rem}}ks-listing-header .autocorrect{font-size:17px !important;font-weight:500 !important;margin-bottom:0px}ks-listing-header .autocorrect>span{color:#ff3c3c;font-weight:700}ks-listing-header .description{max-width:1200px;margin:0 auto 15px auto;padding:0 15px;line-height:1.5}ks-listing-header .tags{margin-top:5px}ks-listing-header hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible;text-align:inherit;margin:15px 0 15px 0;border:0;border-top:1px solid #e5e5e5}";var s=i("ks_listing_header",function(){function i(i){t(this,i);this.heading=undefined;this.description=undefined;this.query=undefined;this.autocorrect=undefined;this.breadcrumbs=undefined;this.categories=undefined;this.tags=undefined}i.prototype.render=function(){var i,t,e,r,s;var o=(i=this.autocorrect)===null||i===void 0?void 0:i.split("{}");return[n("h1",{class:"title"},this.heading),(o===null||o===void 0?void 0:o.length)==2&&this.query?n("h2",{class:"autocorrect"},o[0],n("span",null,this.query),o[1]):null,((t=this.breadcrumbs)===null||t===void 0?void 0:t.length)>0?n("ks-content-breadcrumbs",{items:this.breadcrumbs}):null,this.description||((e=this.categories)===null||e===void 0?void 0:e.length)>0?n("hr",null):null,this.description?n("div",{class:"description",innerHTML:this.description}):null,((r=this.categories)===null||r===void 0?void 0:r.length)>0?n("ks-content-tags",{items:this.categories}):null,((s=this.tags)===null||s===void 0?void 0:s.length)>0?n("ks-content-tags",{class:"tags",items:this.tags}):null]};Object.defineProperty(i.prototype,"root",{get:function(){return e(this)},enumerable:false,configurable:true});return i}());s.style=r;var o='ks-listing-navigation{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:15px 0}ks-listing-navigation[products="0"],ks-listing-navigation[products="1"]{display:none}ks-listing-navigation ks-filtering{-ms-flex-order:1;order:1;margin:0 5px}ks-listing-navigation ks-sorting{-ms-flex-order:3;order:3;margin:0 5px}ks-listing-navigation ks-pagination{-ms-flex-order:2;order:2;margin:0 10px}@media (max-width: 640px){ks-listing-navigation{-ms-flex-wrap:wrap;flex-wrap:wrap}ks-listing-navigation ks-filtering{-ms-flex-order:1;order:1;margin:0 3px;width:40%;min-width:144px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-listing-navigation ks-sorting{-ms-flex-order:2;order:2;margin:0 3px;width:40%;min-width:144px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-listing-navigation ks-pagination{-ms-flex-order:3;order:3;-ms-flex:1;flex:1;min-width:100%;margin-top:6px}}@media (max-width: 344px){ks-listing-navigation ks-filtering,ks-listing-navigation ks-sorting{width:47%;min-width:120px}}';var a=i("ks_listing_navigation",function(){function i(i){t(this,i);this.products=undefined}i.prototype.render=function(){return n("slot",null)};return i}());a.style=o;var l="ks-pagination{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}ks-pagination[count='1']{display:none}ks-pagination a{display:inline-block;width:42px;height:42px;line-height:42px;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #e5e5e5;background-color:white;color:#252525;vertical-align:middle;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;-webkit-transition:border 0.3s ease;transition:border 0.3s ease}ks-pagination a:hover{border:1px solid #b9b9b9;text-decoration:none;color:#252525}ks-pagination a.active{border:1px solid #252525;background-color:#252525;color:white;cursor:default}ks-pagination .separator{width:15px;display:none}ks-pagination .desktop{display:none}@media (min-width: 960px){ks-pagination .separator,ks-pagination .desktop{display:block}}";var d=i("ks_pagination",function(){function i(i){t(this,i);this.count=undefined;this.current=undefined;this.base="";this.pattern=""}i.prototype.render=function(){var i=this;if(!this.count||!this.current||this.count<2)return;var t=new Array;t.push(this.current);var e=__spreadArray([],t,true);var r=6;var s=3;var o=this.current;var a=this.current;while(r>0){var l=false;var d=false;if(o-1>0){t.push(o-1);if(r>=s)e.push(o-1);o--;r--}else l=true;if(a+1<=this.count){t.push(a+1);if(r>=s)e.push(a+1);a++;r--}else d=true;if(l&&d)break}t.sort((function(i,t){return i-t}));e.sort((function(i,t){return i-t}));return[this.current>1?n("a",{href:this.link(this.current-1)},n("ks-icon",{name:"chevron-left",size:.9})):null,t.map((function(r){if(r==i.current)return n("a",{class:"active"},r.toString());var s=!e.includes(r)?"desktop":"";if(r==t[0]){var o=n("a",{class:s,href:i.link(1)},"1");return r==1?o:[o,n("div",{class:"separator"})]}if(r==t[t.length-1]){var o=n("a",{class:s,href:i.link(i.count)},i.count);return r==i.count?o:[n("div",{class:"separator"}),o]}return n("a",{class:s,href:i.link(r)},r.toString())})),this.current<this.count?n("a",{href:this.link(this.current+1)},n("ks-icon",{name:"chevron-right",size:.9})):null]};i.prototype.link=function(i){if(i==1)return this.base;return this.base+this.pattern+i.toString()};return i}());d.style=l}}}));