System.register(["./index-56e4ba05.system.js"],(function(e){"use strict";var i,n,t;return{setters:[function(e){i=e.r;n=e.h;t=e.g}],execute:function(){var r="ks-recipe-info{display:-ms-flexbox;display:flex;width:100%}ks-recipe-info>*{width:100%}ks-recipe-info .info{-webkit-box-sizing:border-box;box-sizing:border-box;padding:30px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ks-recipe-info .title{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}ks-recipe-info .heading>h1{font-family:var(--font-emphasis);font-weight:700;font-size:24px;margin-bottom:10px}ks-recipe-info .categories{color:#9b9b9b;font-size:16px}ks-recipe-info .categories>a{color:#9b9b9b;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;text-decoration:none}ks-recipe-info .categories>a:hover{color:#555555}ks-recipe-info .categories>*:first-child{margin-right:8px}ks-recipe-info .categories>*:last-child{margin-left:8px}ks-recipe-info .time{color:var(--color-secondary);text-align:right;font-family:var(--font-emphasis);font-weight:700;font-size:23px}ks-recipe-info .time ks-icon{margin-right:10px}ks-recipe-info .yield ks-icon{margin-right:8px;margin-top:-2px}ks-recipe-info .yield{color:#9b9b9b;text-align:right;font-family:var(--font-emphasis);font-size:18px;margin-top:-2px}ks-recipe-info .summary{margin-top:25px;font-size:15px;text-align:justify}ks-recipe-info .nutrition{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end;margin-top:20px}ks-recipe-info .image{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;background-color:#F5F5F5;overflow:hidden;max-height:400px;height:400px}@media only screen and (min-width: 960px){ks-recipe-info .info{width:600px;min-width:600px;border-bottom:1px solid #f5f5f5}}@media only screen and (max-width: 959px){ks-recipe-info{display:block}ks-recipe-info .nutrition{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}ks-recipe-info .nutrition>*{margin:0 3px 6px 3px}ks-recipe-info .image{height:500px}}@media only screen and (max-width: 520px){ks-recipe-info .title{display:block;text-align:center}ks-recipe-info .time,ks-recipe-info .yield{display:inline-block;color:#9b9b9b;text-align:right;font-family:var(--font-emphasis);font-weight:400;font-size:18px}ks-recipe-info .time{margin-right:10px}ks-recipe-info .time ks-icon,ks-recipe-info .yield ks-icon{margin-right:10px}ks-recipe-info .image{height:100vw}}@media only screen and (max-width: 520px){ks-recipe-info .info{padding:20px}}";var o=e("ks_recipe_info",function(){function e(e){i(this,e);this.time=undefined;this.yield=undefined;this.cuisine=undefined;this.cuisineLink="";this.category=undefined;this.categoryLink="";this.image=undefined}e.prototype.render=function(){return[n("div",{class:"info"},n("div",{class:"title"},n("div",{class:"heading"},n("slot",{name:"heading"}),n("div",{class:"categories"},this.link(this.cuisine,this.cuisineLink),"•",this.link(this.category,this.categoryLink))),n("div",null,n("div",{class:"time"},n("ks-icon",{name:"clock"}),this.time),n("div",{class:"yield"},n("ks-icon",{name:"users"}),this.yield))),n("div",{class:"summary"},n("slot",{name:"summary"})),n("div",{class:"nutrition"},n("slot",{name:"nutrition"}))),n("div",{class:"image"},n("ks-img2",{vertical:true,src:this.image}))]};e.prototype.link=function(e,i){if(i)return n("a",{href:i},e);return n("span",null,e)};return e}());o.style=r;var s='ks-recipe-ingredient{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:baseline;align-items:baseline;margin-bottom:5px}ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:18px}ks-recipe-ingredient .underline{margin:0 20px;-ms-flex:1;flex:1;border-bottom:solid 1px #dbdbdb}ks-recipe-ingredient label{-ms-flex-item-align:center;align-self:center;display:block;position:relative;padding-left:35px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ks-recipe-ingredient input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}ks-recipe-ingredient .checkmark{position:absolute;bottom:-11px;left:0;height:22px;width:22px;border:2px solid #252525;-webkit-box-sizing:border-box;box-sizing:border-box}ks-recipe-ingredient label:hover input~.checkmark{background-color:#ccc}ks-recipe-ingredient .checkmark:after{content:"";position:absolute;display:none}ks-recipe-ingredient label input:checked~.checkmark:after{display:block}ks-recipe-ingredient label .checkmark:after{left:6px;top:3px;width:4px;height:9px;border:solid #252525;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}@media only screen and (max-width: 520px){ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:16px}ks-recipe-ingredient label{padding-left:28px}}@media only screen and (max-width: 360px){ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:16px}ks-recipe-ingredient label{padding-left:28px}ks-recipe-ingredient .underline{margin:0;-ms-flex:1;flex:1;border-bottom:none}}';var c=e("ks_recipe_ingredient",function(){function e(e){i(this,e);this.id=0;this.checked=false;this.name=undefined;this.amount=undefined}e.prototype.componentWillRender=function(){this.id=Array.from(this.root.parentNode.children).indexOf(this.root);this.regex=new RegExp("(?:(?:^|.*;\\s*)ingredient".concat(this.id,"\\s*\\=\\s*([^;]*).*$)|^.*$"));this.checked=this.getCookie()};e.prototype.getCookie=function(){var e=document.cookie.replace(this.regex,"$1");return e=="true"};e.prototype.setCookie=function(){document.cookie="ingredient".concat(this.id,"=true; max-age=").concat(60*60*24*30,"; path=").concat(window.location.pathname,"; samesite=strict")};e.prototype.removeCookie=function(){document.cookie="ingredient".concat(this.id,"=; path=").concat(window.location.pathname,"; expires=Thu, 01 Jan 1970 00:00:00 GMT")};e.prototype.click=function(e){var i=e.target;if(i.checked)this.setCookie();else this.removeCookie()};e.prototype.render=function(){var e=this;return[n("label",null,n("input",{type:"checkbox",checked:this.checked,onClick:function(i){return e.click(i)}}),n("span",{class:"checkmark"})),n("div",{class:"name"},this.name),n("div",{class:"underline"}),n("div",{class:"amount"},this.amount)]};Object.defineProperty(e.prototype,"root",{get:function(){return t(this)},enumerable:false,configurable:true});return e}());c.style=s;var a="ks-recipe-nutrition{display:block;text-align:center;color:#FFFFFF}ks-recipe-nutrition>div:first-child{font-family:var(--font-regular);font-size:13px;background-color:#353535;padding:8px 10px}ks-recipe-nutrition>div:last-child{font-family:var(--font-emphasis);font-size:18px;background-color:#252525;padding:3px 10px}";var p=e("ks_recipe_nutrition",function(){function e(e){i(this,e);this.type=undefined;this.value=undefined}e.prototype.render=function(){return[n("div",null,this.type),n("div",null,this.value)]};return e}());p.style=a;var d="ks-recipe-procedure{display:-ms-flexbox;display:flex}ks-recipe-procedure>div{width:50%;padding:30px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-recipe-procedure .ingredients{background-color:#F5F5F5}ks-recipe-procedure .preparation{font-size:15px}ks-recipe-procedure .preparation h2{font-family:var(--font-emphasis);font-weight:700;font-size:22px}@media only screen and (max-width: 960px){ks-recipe-procedure{display:block}ks-recipe-procedure>div{width:100%}}@media only screen and (max-width: 520px){ks-recipe-procedure>div{padding:20px}}";var l=e("ks_recipe_procedure",function(){function e(e){i(this,e)}e.prototype.render=function(){return[n("div",{class:"ingredients"},n("slot",{name:"ingredients"})),n("div",{class:"preparation"},n("slot",{name:"preparation"}))]};return e}());l.style=d}}}));
//# sourceMappingURL=ks-recipe-info_4.system.entry.js.map