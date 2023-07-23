var __awaiter=this&&this.__awaiter||function(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function l(e){try{s(n.next(e))}catch(e){i(e)}}function a(e){try{s(n["throw"](e))}catch(e){i(e)}}function s(e){e.done?r(e.value):o(e.value).then(l,a)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,l;return l={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function a(e){return function(t){return s([e,t])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(l&&(l=0,a[0]&&(r=0)),r)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-56e4ba05.system.js"],(function(e){"use strict";var t,r;return{setters:[function(e){t=e.r;r=e.h}],execute:function(){var n="ks-input-select{display:block;margin-bottom:15px}ks-input-select label{display:block;margin-bottom:3px;color:#000000;font-size:14px}ks-input-select[error] label{color:var(--color-secondary-darker)}ks-input-select .wrapper{position:relative}ks-input-select ks-icon{position:absolute;right:10px;top:8px;color:#4b4b4b}ks-input-select select{height:40px;vertical-align:middle;display:inline-block;-webkit-appearance:none;-moz-appearance:none;appearance:none;max-width:100%;width:100%;padding:0 10px;background:#f4f4f4;color:#373737;border:1px solid #e5e5e5;overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0;font:inherit}ks-input-select select:focus{outline:none;background-color:#f4f4f4;color:#373737;border-color:#222222}ks-input-select[error] select{border-color:var(--color-secondary-darker);color:var(--color-secondary-darker)}ks-input-select[error] ks-icon{color:var(--color-secondary-darker)}ks-input-select[lightUp] select{border-color:#1488ff;background-color:#d5e6ff;color:#004454}ks-input-select[lightUp] ks-icon{color:#004454}";var o=e("ks_input_select",function(){function e(e){t(this,e);this.name=undefined;this.label=undefined;this.error=undefined;this.lightUp=false}e.prototype.render=function(){var e=this;return[this.label?r("label",null,this.label):null,r("div",{class:"wrapper"},r("select",{name:this.name,onChange:function(){return e.Validate()}},r("slot",null)),r("ks-icon",{name:"chevron-down"}))]};e.prototype.IsValid=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,true]}))}))};e.prototype.Validate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.lightUp=false;return[2,Promise.resolve()]}))}))};return e}());o.style=n}}}));
//# sourceMappingURL=ks-input-select.system.entry.js.map