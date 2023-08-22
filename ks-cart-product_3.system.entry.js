var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{c(i.next(t))}catch(e){a(e)}}function s(t){try{c(i["throw"](t))}catch(e){a(e)}}function c(t){t.done?n(t.value):r(t.value).then(o,s)}c((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return c([t,e])}}function c(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(s){o=[6,s];r=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./index-10c04d38.system.js","./price-5a9459e1.system.js","./common-8ecb4f1a.system.js","./index-afb1cee9.system.js"],(function(t){"use strict";var e,n,i,r,a;return{setters:[function(t){e=t.r;n=t.e;i=t.h;r=t.c},function(t){a=t.p},function(){},function(){}],execute:function(){var o='ks-cart-product{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:16px;border-bottom:#ededed 1px solid}ks-cart-product:last-child{border-bottom:none}ks-cart-product .description{display:grid;grid-template-columns:1fr 110px 100px 50px;grid-template-rows:auto auto;gap:0px 5px;grid-template-areas:"name     price count remove"\n        "shipping price count remove";-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex:1;flex:1;padding:10px 0px}ks-cart-product:not([removable]) .description{grid-template-columns:1fr 110px 100px;grid-template-areas:"name     price count"\n        "shipping price count"}ks-cart-product:not([removable]) .remove-container{display:none}ks-cart-product .name{grid-area:name;color:inherit !important;text-decoration:none !important}ks-cart-product .price{grid-area:price;font-family:var(--font-emphasis);text-align:center}ks-cart-product .count{grid-area:count}ks-cart-product .amount{text-align:center}ks-cart-product .remove-container{grid-area:remove}ks-cart-product .shipping{grid-area:shipping;font-family:var(--font-emphasis);font-weight:700}ks-cart-product .remove{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:#d9d9d9 solid 1px;border-radius:50px;width:40px;height:40px;margin:5px}ks-cart-product .product-image{width:90px;height:90px;max-width:90px;max-height:90px;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}@media only screen and (max-width: 860px){ks-cart-product .description{grid-template-rows:auto auto auto;grid-template-columns:auto auto 1fr;gap:5px 5px;grid-template-areas:"name   name     name"\n            "price  shipping count"}ks-cart-product:not([removable]) .description{grid-template-columns:auto auto 1fr;gap:5px 10px;grid-template-areas:"name     name name"\n            "shipping price count"}ks-cart-product:not([removable]) .amount{text-align:left !important}ks-cart-product .price{text-align:center;font-weight:700;color:#e21334}ks-cart-product .name{margin-bottom:-5px}}@media only screen and (max-width: 640px){ks-cart-product{-ms-flex-direction:column;flex-direction:column;position:relative}ks-cart-product .description{grid-template-rows:auto auto;grid-template-columns:auto auto auto;gap:5px 5px;grid-template-areas:"name   name"\n            "price  shipping"\n            "count  count"\n            "remove remove";text-align:center;justify-items:stretch}ks-cart-product:not([removable]) .description{grid-template-rows:auto auto;grid-template-columns:1fr auto 1fr;grid-template-areas:"name   name     name"\n            "price  shipping count"}ks-cart-product .price{text-align:right}ks-cart-product .count{text-align:center;margin-top:5px}ks-cart-product .shipping{text-align:left}ks-cart-product .remove-container{position:absolute;text-align:right;top:5px;right:0px}ks-cart-product .product-image{width:100%;height:100%;max-width:180px;max-height:180px}}';var s=t("ks_cart_product",function(){function t(t){e(this,t);this.removeProduct=n(this,"removeProduct",7);this.productCount=n(this,"productCount",7);this.productId=undefined;this.name=undefined;this.img=undefined;this.link=undefined;this.small=undefined;this.price=undefined;this.shippingTime="";this.countUnit="";this.amount=1;this.maxAmount=undefined;this.removable=false;this.loading=false}t.prototype.onRemoveHandler=function(){this.loading=true;this.removeProduct.emit(this.productId)};t.prototype.onCountHandler=function(t){this.productCount.emit([this.productId,t.current,t.last])};t.prototype.ResetLoading=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.loading=false;return[2]}))}))};t.prototype.render=function(){var t=this;var e=a(this.price);return[i("a",{class:"product-image",href:this.link},i("ks-img3",{fit:"contain",image:this.img,width:180,height:180,alt:"zdjęcie produktu"})),i("div",{class:"description"},i("a",{class:"name",href:this.link,innerHTML:this.name}),i("span",{class:"price"},e),i("span",{class:"shipping"},this.shippingTime),i("div",{class:"count"},this.removable?i("ks-cart-spinner",{onChanged:function(e){return t.onCountHandler(e.detail)},"initial-value":this.amount,max:this.maxAmount}):i("div",{class:"amount"},this.amount," ",this.countUnit)),i("div",{class:"remove-container"},this.removable?this.loading?i("ks-loader",null):i("button",{class:"remove",onClick:function(){return t.onRemoveHandler()}},i("ks-icon",{name:"x"})):null))]};return t}());s.style=o;var c="ks-cart-product-heading{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;text-align:center;font-size:18px;border-bottom:#ededed 1px solid;padding-bottom:10px;font-family:var(--font-emphasis);font-weight:700}ks-cart-product-heading .names{text-align:left;width:100%}ks-cart-product-heading .prices{width:110px;-ms-flex:1 0 auto;flex:1 0 auto}ks-cart-product-heading .count{width:110px;-ms-flex:1 0 auto;flex:1 0 auto}ks-cart-product-heading .remove{width:50px;-ms-flex:1 0 auto;flex:1 0 auto}ks-cart-product-heading .remove{width:50px;-ms-flex:1 0 auto;flex:1 0 auto}@media only screen and (max-width: 860px){ks-cart-product-heading .prices{display:none}ks-cart-product-heading .count{display:none}}";var p=t("ks_cart_product_heading",function(){function t(t){e(this,t);this.removable=undefined;this.productTableNames="";this.productTablePrices="";this.productTableCount="";this.productTableRemove=""}t.prototype.render=function(){return[i("div",{class:"names"},this.productTableNames),i("div",{class:"prices"},this.productTablePrices),i("div",{class:"count"},this.productTableCount),this.removable?i("div",{class:"remove"},this.productTableRemove):null]};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());p.style=c;var u="ks-cart-spinner{display:-ms-inline-flexbox;display:inline-flex;text-align:center}ks-cart-spinner input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #d9d9d9;width:40px !important;height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 !important;font-size:14px !important;text-align:center !important}ks-cart-spinner button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #d9d9d9;height:30px;width:30px}ks-cart-spinner button:first-child{border-right:none}ks-cart-spinner button:last-child{border-left:none}@media only screen and (max-width: 640px){ks-cart-spinner input{width:50px;height:35px}ks-cart-spinner button{height:35px;width:35px}}";var d=t("ks_cart_spinner",function(){function t(t){e(this,t);this.changed=n(this,"changed",7);this.name=undefined;this.initialValue=1;this.max=undefined;this.value=1}t.prototype.componentWillLoad=function(){this.value=this.initialValue};t.prototype.Increment=function(){var t=this.value;if(typeof this.max==="undefined"||this.value<this.max){this.value+=1;this.onChangedHandler(this.value,t)}};t.prototype.Decrement=function(){var t=this.value;if(this.value>1){this.value-=1;this.onChangedHandler(this.value,t)}};t.prototype.Change=function(t){var e=this.value;var n=t.target;var i=parseInt(n.value);if(!isNaN(i)&&i>0&&(typeof this.max==="undefined"||i<=this.max))this.value=i;else if(i>this.max){this.value=this.max;n.value=this.max.toString()}else{this.value=1;n.value="1"}this.onChangedHandler(this.value,e)};t.prototype.onChangedHandler=function(t,e){this.changed.emit({current:t,last:e})};t.prototype.SetAmount=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.value=t;return[2]}))}))};t.prototype.render=function(){var t=this;return this.max==1?"1 szt.":[i("button",{onClick:function(){return t.Decrement()}},"-"),i("input",{type:"text",maxlength:"3",value:this.value,name:this.name,onChange:function(e){return t.Change(e)}}),i("button",{onClick:function(){return t.Increment()}},"+")]};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());d.style=u}}}));