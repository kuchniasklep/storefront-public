var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,u){function o(t){try{s(r.next(t))}catch(e){u(e)}}function a(t){try{s(r["throw"](t))}catch(e){u(e)}}function s(t){t.done?n(t.value):i(t.value).then(o,a)}s((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},r,i,u,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return s([t,e])}}function s(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(u=o[0]&2?i["return"]:o[0]?i["throw"]||((u=i["return"])&&u.call(i),0):i.next)&&!(u=u.call(i,o[1])).done)return u;if(i=0,u)o=[o[0]&2,u.value];switch(o[0]){case 0:case 1:u=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(u=n.trys,u=u.length>0&&u[u.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!u||o[1]>u[0]&&o[1]<u[3])){n.label=o[1];break}if(o[0]===6&&n.label<u[1]){n.label=u[1];u=o;break}if(u&&n.label<u[2]){n.label=u[2];n.ops.push(o);break}if(u[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(a){o=[6,a];i=0}finally{r=u=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./index-5ab56926.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.h;r=t.g}],execute:function(){var i=t("ks_form",function(){function t(t){e(this,t)}t.prototype.render=function(){var t=this;return n("form",{action:this.action,method:this.method,enctype:"multipart/form-data",onSubmit:function(e){return t.Submit(e)}},n("slot",null),n("input",{class:"uk-button uk-button-danger uk-width-1-1 uk-margin-medium-top",style:{padding:"8px 40px"},type:"submit",value:"Wyślij Formularz",formnovalidate:true}))};t.prototype.Submit=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n,r,i,u,o;return __generator(this,(function(a){switch(a.label){case 0:t.preventDefault();e=this.root.querySelector("form");n=e.querySelectorAll("ks-input-text, ks-input-textarea, ks-input-check, ks-input-number, ks-input-date, ks-input-select");r=true;i=0;a.label=1;case 1:if(!(i<n.length))return[3,5];u=n[i];return[4,u.Validate()];case 2:a.sent();return[4,u.IsValid()];case 3:o=a.sent();if(!o){r=false}a.label=4;case 4:i++;return[3,1];case 5:if(r)e.submit();return[2]}}))}))};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return t}())}}}));