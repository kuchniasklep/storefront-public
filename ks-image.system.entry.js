var __awaiter=this&&this.__awaiter||function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,s){function a(t){try{h(n.next(t))}catch(e){s(e)}}function o(t){try{h(n["throw"](t))}catch(e){s(e)}}function h(t){t.done?i(t.value):r(t.value).then(a,o)}h((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,a;return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(t){return function(e){return h([t,e])}}function h(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(s=a[0]&2?r["return"]:a[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,a[1])).done)return s;if(r=0,s)a=[a[0]&2,s.value];switch(a[0]){case 0:case 1:s=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;r=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!s||a[1]>s[0]&&a[1]<s[3])){i.label=a[1];break}if(a[0]===6&&i.label<s[1]){i.label=s[1];s=a;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(a);break}if(s[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(o){a=[6,o];r=0}finally{n=s=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-5ab56926.system.js"],(function(t){"use strict";var e,i;return{setters:[function(t){e=t.r;i=t.h}],execute:function(){var n=t("ks_image",function(){function t(t){e(this,t);this.sync=false;this.cover=false;this.contain=false;this.loaded=false;this.loadAnimated=false}t.prototype.loadCheck=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(t.target instanceof HTMLElement&&!t.target.getAttribute("src").includes("data:image"))this.loaded=true;return[2]}))}))};t.prototype.componentDidUpdate=function(){var t=this;if(this.loaded&&!this.loadAnimated){setTimeout((function(){t.loadAnimated=true}),1e3)}};t.prototype.srcListener=function(){this.loaded=false;this.loadAnimated=false};t.prototype.render=function(){var t=this;var e="";if(!this.loaded)e="uk-invisible uk-position-center";else if(!this.loadAnimated)e="uk-animation-fade";if(this.sync)return i("img",{src:this.src,width:this.width,height:this.height,alt:this.alt});else if(this.cover)return i("div",{class:"uk-cover-container"},i("canvas",{width:this.width,height:this.height}),!this.loaded?i("div",{class:"ks-spinner uk-position-center"}):null,i("img",{"uk-cover":true,onLoad:function(e){return t.loadCheck(e)},class:e,width:this.width,height:this.height,"data-src":this.src,alt:this.alt,"uk-img":"target: !ks-image"}));else if(this.contain)return i("div",{class:"uk-position-relative"},i("canvas",{width:this.width,height:this.height}),!this.loaded?i("div",{class:"ks-spinner uk-position-center"}):null,i("img",{onLoad:function(e){return t.loadCheck(e)},class:e+" uk-position-center uk-responsive-height","data-src":this.src,width:this.width,height:this.height,alt:this.alt,"uk-img":"target: !ks-image"}));else return i("div",{class:"uk-position-relative"},!this.loaded?[i("canvas",{width:this.width,height:this.height}),i("div",{class:"ks-spinner uk-position-center"})]:null,i("img",{onLoad:function(e){return t.loadCheck(e)},class:e,"data-src":this.src,width:this.width,height:this.height,alt:this.alt,"uk-img":"target: !ks-image"}))};Object.defineProperty(t,"watchers",{get:function(){return{src:["srcListener"]}},enumerable:false,configurable:true});return t}())}}}));