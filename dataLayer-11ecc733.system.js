var __awaiter=this&&this.__awaiter||function(e,r,t,n){function o(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,c){function u(e){try{a(n.next(e))}catch(r){c(r)}}function i(e){try{a(n["throw"](e))}catch(r){c(r)}}function a(e){e.done?t(e.value):o(e.value).then(u,i)}a((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},n,o,c,u;return u={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function i(e){return function(r){return a([e,r])}}function a(u){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,o&&(c=u[0]&2?o["return"]:u[0]?o["throw"]||((c=o["return"])&&c.call(o),0):o.next)&&!(c=c.call(o,u[1])).done)return c;if(o=0,c)u=[u[0]&2,c.value];switch(u[0]){case 0:case 1:c=u;break;case 4:t.label++;return{value:u[1],done:false};case 5:t.label++;o=u[1];u=[0];continue;case 7:u=t.ops.pop();t.trys.pop();continue;default:if(!(c=t.trys,c=c.length>0&&c[c.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!c||u[1]>c[0]&&u[1]<c[3])){t.label=u[1];break}if(u[0]===6&&t.label<c[1]){t.label=c[1];c=u;break}if(c&&t.label<c[2]){t.label=c[2];t.ops.push(u);break}if(c[2])t.ops.pop();t.trys.pop();continue}u=r.call(e,t)}catch(i){u=[6,i];o=0}finally{n=c=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./commonDynamic-37d281db.system.js","./fetch-89de6a18.system.js"],(function(e){"use strict";var r,t;return{setters:[function(e){r=e.c},function(e){t=e.j}],execute:function(){e("D",void 0);var n;(function(e){var n;var o=new Promise((function(e){n=function(){e()}}));function c(e){t("https://kuchniasklep.pl/api/fbconversion.php",e)}function u(){var e=r.get("customer");var t=r.get("loggedIn")&&e;return{customerDataAvailable:t,customerEmail:t?e.email:undefined,customerFirstName:t?e.firstName:undefined,customerLastName:t?e.lastName:undefined,customerSubscriberStatus:t?e.subscriber?1:0:undefined,customerCountryISO2:t?e.countryISO2:undefined,customerCity:t?e.city:undefined,customerPhone:t?e.phone:undefined,customerCurrency:t?e.currency:undefined}}function i(e){return __awaiter(this,void 0,void 0,(function(){var r,t;return __generator(this,(function(o){e=crypto.randomUUID();t=Object.assign({event:"ks.pageview",facebookEventId:e},u());(r=window.dataLayer)===null||r===void 0?void 0:r.push(t);n();c(t);return[2]}))}))}e.pageview=i;function a(e,r){if(r===void 0){r=""}return __awaiter(this,void 0,void 0,(function(){var t,n,i,a;return __generator(this,(function(d){switch(d.label){case 0:return[4,o];case 1:d.sent();r=crypto.randomUUID();i=e.breadcrumbs;a=Object.assign(Object.assign({event:"ks.product",facebookEventId:r},u()),{productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productImage:(e===null||e===void 0?void 0:e.images.length)>0?w(e.images[0].full.url):undefined,productURL:w(document.location.href),productSKU:e.model,productBrand:e.brand.name,productCategory:i[i.length-1].name,productAvailability:e.shippingTime,productQuantity:1,productCategories:e.categories,ecomm_prodid:e.id,ecomm_pagetype:"product",ecomm_totalvalue:e.currentPrice,ecommerce:{items:_([e])},uaecommerce:{ecommerce:{currencyCode:e.currency,impressions:k([e])}}});(t=window.dataLayer)===null||t===void 0?void 0:t.push({ecommerce:null});(n=window.dataLayer)===null||n===void 0?void 0:n.push(a);c(a);return[2]}}))}))}e.product=a;function d(e){return __awaiter(this,void 0,void 0,(function(){var r,t,n,c,i;return __generator(this,(function(a){switch(a.label){case 0:return[4,o];case 1:a.sent();i=e.type=="category"?"category":e.type=="manufacturer"?"manufacturer":e.type=="search"?"search":null;if(!i)return[2];(r=window.dataLayer)===null||r===void 0?void 0:r.push({ecommerce:null});(t=window.dataLayer)===null||t===void 0?void 0:t.push(Object.assign(Object.assign({event:"ks.listing"},u()),{type:i,listingCategories:i=="category"?e.breadcrumbs.filter((function(e){return e.id!="0"})):undefined,listingProducts:e.products,ecommerce:{items:_(e.products)},uaecommerce:{ecommerce:{currencyCode:(c=(n=e.products)===null||n===void 0?void 0:n[0])===null||c===void 0?void 0:c.currency,impressions:k(e.products)}}}));return[2]}}))}))}e.listing=d;function s(e,r){return __awaiter(this,void 0,void 0,(function(){var t,n,i;return __generator(this,(function(a){switch(a.label){case 0:return[4,o];case 1:a.sent();r=crypto.randomUUID();i=Object.assign(Object.assign({event:"ks.addToCart",facebookEventId:r},u()),{productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productQuantity:e.quantity,productImage:w(e.imageFull),productURL:w(e.link),productSKU:e.sku,productCategories:e.categories,ecommerce:{items:_([e])},uaecommerce:{ecommerce:{currencyCode:e.currency,add:{products:k([e])}}}});(t=window.dataLayer)===null||t===void 0?void 0:t.push({ecommerce:null});(n=window.dataLayer)===null||n===void 0?void 0:n.push(i);c(i);return[2]}}))}))}e.addToCart=s;function l(e){return __awaiter(this,void 0,void 0,(function(){var r,t;return __generator(this,(function(n){switch(n.label){case 0:return[4,o];case 1:n.sent();(r=window.dataLayer)===null||r===void 0?void 0:r.push({ecommerce:null});(t=window.dataLayer)===null||t===void 0?void 0:t.push(Object.assign(Object.assign({event:"ks.removeFromCart"},u()),{productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productQuantity:e.quantity,productImage:w(e.imageFull),productURL:w(e.link),productSKU:e.sku,productCategories:e.categories,ecommerce:{items:_([e])},uaecommerce:{ecommerce:{currencyCode:e.currency,remove:{products:k([e])}}}}));return[2]}}))}))}e.removeFromCart=l;function p(e){return __awaiter(this,void 0,void 0,(function(){var r,t;return __generator(this,(function(n){switch(n.label){case 0:return[4,o];case 1:n.sent();(r=window.dataLayer)===null||r===void 0?void 0:r.push({ecommerce:null});(t=window.dataLayer)===null||t===void 0?void 0:t.push(Object.assign(Object.assign({event:"ks.addToFavourites"},u()),{productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productQuantity:e.quantity,productImage:w(e.imageFull),productURL:w(e.link),productSKU:e.sku,productCategories:e.categories,ecommerce:{items:_([e]),value:e.currentPrice,currency:e.currency}}));return[2]}}))}))}e.addToFavourites=p;function m(e){return __awaiter(this,void 0,void 0,(function(){var r,t;return __generator(this,(function(n){switch(n.label){case 0:return[4,o];case 1:n.sent();(r=window.dataLayer)===null||r===void 0?void 0:r.push({ecommerce:null});(t=window.dataLayer)===null||t===void 0?void 0:t.push(Object.assign(Object.assign({event:"ks.viewCart"},u()),{cartCurrency:e.currency,cartProductValue:e.productValue,cartValue:e.totalValue,cartProducts:e.products,ecomm_prodid:JSON.stringify(Object.values(e.products).map((function(e){return e.id}))),ecomm_pagetype:"cart",ecomm_totalvalue:e.productValue,ecommerce:{items:_(Object.values(e.products)),value:e.productValue,currency:e.currency},uaecommerce:{ecommerce:{checkout:{actionField:{step:1},currencyCode:e.currency,products:k(Object.values(e.products))}}}}));return[2]}}))}))}e.view_cart=m;function v(e,r){return __awaiter(this,void 0,void 0,(function(){var t,n,i;return __generator(this,(function(a){switch(a.label){case 0:return[4,o];case 1:a.sent();r=crypto.randomUUID();i=Object.assign(Object.assign({event:"ks.checkout",facebookEventId:r},u()),{orderProducts:e.products,orderValue:e.totalValue,orderProductValue:e.productValue,orderCurrency:e.currency,orderShipping:e.shippingValue,orderCoupon:e.coupon,ecommerce:{items:_(e.products)},uaecommerce:{ecommerce:{checkout:{actionField:{step:3},currencyCode:e.currency,products:k(e.products)}}}});(t=window.dataLayer)===null||t===void 0?void 0:t.push({ecommerce:null});(n=window.dataLayer)===null||n===void 0?void 0:n.push(i);c(i);return[2]}}))}))}e.order_checkout=v;function y(e,r){return __awaiter(this,void 0,void 0,(function(){var t,n,i;return __generator(this,(function(a){switch(a.label){case 0:return[4,o];case 1:a.sent();r=crypto.randomUUID();i=Object.assign(Object.assign({event:"ks.orderForm",facebookEventId:r},u()),{orderProducts:e.products,orderValue:e.totalValue,orderProductValue:e.productValue,orderCurrency:e.currency,orderShipping:e.shippingValue,orderCoupon:e.coupon,ecommerce:{items:_(e.products)},uaecommerce:{ecommerce:{checkout:{actionField:{step:2},currencyCode:e.currency,products:k(e.products)}}}});(t=window.dataLayer)===null||t===void 0?void 0:t.push({ecommerce:null});(n=window.dataLayer)===null||n===void 0?void 0:n.push(i);c(i);return[2]}}))}))}e.order_form=y;function f(e,r){return __awaiter(this,void 0,void 0,(function(){var t,n,i;return __generator(this,(function(a){switch(a.label){case 0:return[4,o];case 1:a.sent();r=crypto.randomUUID();i=Object.assign(Object.assign({event:"ks.order",facebookEventId:r},u()),{orderProducts:e.products,orderId:e.id,orderValue:e.totalValue,orderProductValue:e.productValue,orderCurrency:e.currency,orderShipping:e.shippingValue,orderCoupon:e.coupon,ecomm_prodid:JSON.stringify(Object.values(e.products).map((function(e){return e.id}))),ecomm_pagetype:"purchase",ecomm_totalvalue:e.productValue,ecommerce:{transaction_id:e.id,value:e.totalValue,currency:e.currency,shipping:e.shippingValue,coupon:e.coupon,items:_(e.products)},uaecommerce:{ecommerce:{purchase:{currencyCode:e.currency,actionField:{id:e.id,revenue:e.totalValue,shipping:e.shippingValue,coupon:e.coupon},products:k(e.products)}}}});(t=window.dataLayer)===null||t===void 0?void 0:t.push({ecommerce:null});(n=window.dataLayer)===null||n===void 0?void 0:n.push(i);c(i);return[2]}}))}))}e.order_placed=f;function h(e){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,o];case 1:t.sent();(r=window.dataLayer)===null||r===void 0?void 0:r.push(Object.assign({event:"ks.search",searchQuery:e},u()));return[2]}}))}))}e.search=h;function g(e){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,o];case 1:t.sent();(r=window.dataLayer)===null||r===void 0?void 0:r.push(Object.assign(Object.assign({event:"ks.subscribe"},u()),{subscriptionPlace:e.place,subscriptionEmail:e.email,subscriptionName:e===null||e===void 0?void 0:e.name,subscriptionStatus:e.subscriber?1:0}));return[2]}}))}))}e.subscribe=g;function b(e){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(t){switch(t.label){case 0:return[4,o];case 1:t.sent();(r=window.dataLayer)===null||r===void 0?void 0:r.push(Object.assign(Object.assign({event:"ks.recipe"},u()),{recipeName:e.title,recipeCategory:e.category,recipeCuisine:e.cuisine}));return[2]}}))}))}e.recipe=b;function w(e){return e.includes("http")?e:document.baseURI+e}function _(e){return e.map((function(e,r){var t=e.breadcrumbs.filter((function(e){return e.name!="Strona główna"})).map((function(e){return e.name})).reverse();return{item_id:e.id,item_name:e.name,currency:e.currency,index:r,price:e.currentPrice,item_brand:e.brandName,item_category:t===null||t===void 0?void 0:t[0],item_category2:t===null||t===void 0?void 0:t[1],item_category3:t===null||t===void 0?void 0:t[2],item_category4:t===null||t===void 0?void 0:t[3],item_category5:t===null||t===void 0?void 0:t[4]}}))}function k(e){return e.map((function(e,r){var t=e.breadcrumbs.filter((function(e){return e.name!="Strona główna"})).map((function(e){return e.name}));return{name:e.name,id:e.id,price:e.currentPrice,brand:e.brandName,category:t.join("/"),position:r+1,quantity:e.quantity}}))}})(n||(n=e("D",{})))}}}));