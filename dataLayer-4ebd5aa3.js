import{c as e}from"./commonDynamic-e598d690.js";var o;!function(o){function r(){const o=e.get("customer"),r=e.get("loggedIn")&&o;return{customerDataAvailable:r,customerEmail:r?o.email:void 0,customerFirstName:r?o.firstName:void 0,customerLastName:r?o.lastName:void 0,customerSubscriberStatus:r?o.subscriber?1:0:void 0,customerCountryISO2:r?o.countryISO2:void 0,customerCity:r?o.city:void 0,customerPhone:r?o.phone:void 0,customerCurrency:r?o.currency:void 0}}function c(e){return e.includes("http")?e:document.baseURI+e}function t(e){return e.map(((e,o)=>{const r=e.breadcrumbs.map((e=>e.name)).reverse();return{item_id:e.id,item_name:e.name,currency:e.currency,index:o,price:e.currentPrice,item_brand:e.brandName,item_category:null==r?void 0:r[0],item_category2:null==r?void 0:r[1],item_category3:null==r?void 0:r[2],item_category4:null==r?void 0:r[3],item_category5:null==r?void 0:r[4]}}))}o.pageview=async function(e){var o;null===(o=window.dataLayer)||void 0===o||o.push(Object.assign({event:"ks.pageview",facebookEventId:e},r()))},o.product=async function(e,o=""){var n,u;const i=e.breadcrumbs;null===(n=window.dataLayer)||void 0===n||n.push({ecommerce:null}),null===(u=window.dataLayer)||void 0===u||u.push(Object.assign(Object.assign({event:"ks.product",facebookEventId:o},r()),{productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productImage:(null==e?void 0:e.images.length)>0?c(e.images[0].full.url):void 0,productURL:c(document.location.href),productSKU:e.model,productBrand:e.brand.name,productCategory:i[i.length-1].name,productAvailability:e.shippingTime,productQuantity:1,productCategories:e.categories,ecommerce:{items:t([e])}}))},o.listing=async function(e){var o,c;const n="category"==e.type?"category":"manufacturer"==e.type?"manufacturer":"search"==e.type?"search":null;n&&(null===(o=window.dataLayer)||void 0===o||o.push({ecommerce:null}),null===(c=window.dataLayer)||void 0===c||c.push(Object.assign(Object.assign({event:"ks.listing"},r()),{type:n,listingCategories:"category"==n?e.breadcrumbs.filter((e=>"0"!=e.id)):void 0,listingProducts:e.products,ecommerce:{items:t(e.products)}})))},o.addToCart=async function(e,o){var n,u;null===(n=window.dataLayer)||void 0===n||n.push({ecommerce:null}),null===(u=window.dataLayer)||void 0===u||u.push(Object.assign(Object.assign({event:"ks.addToCart",facebookEventId:o},r()),{productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productQuantity:e.quantity,productImage:c(e.imageFull),productURL:c(e.link),productSKU:e.sku,productCategories:e.categories,ecommerce:{items:t([e])}}))},o.removeFromCart=async function(e){var o,n;null===(o=window.dataLayer)||void 0===o||o.push({ecommerce:null}),null===(n=window.dataLayer)||void 0===n||n.push(Object.assign(Object.assign({event:"ks.removeFromCart"},r()),{productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productQuantity:e.quantity,productImage:c(e.imageFull),productURL:c(e.link),productSKU:e.sku,productCategories:e.categories,ecommerce:{items:t([e])}}))},o.addToFavourites=async function(e){var o,n;null===(o=window.dataLayer)||void 0===o||o.push({ecommerce:null}),null===(n=window.dataLayer)||void 0===n||n.push(Object.assign(Object.assign({event:"ks.addToFavourites"},r()),{productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productQuantity:e.quantity,productImage:c(e.imageFull),productURL:c(e.link),productSKU:e.sku,productCategories:e.categories,ecommerce:{items:t([e]),value:e.currentPrice,currency:e.currency}}))},o.view_cart=async function(e){var o,c;null===(o=window.dataLayer)||void 0===o||o.push({ecommerce:null}),null===(c=window.dataLayer)||void 0===c||c.push(Object.assign(Object.assign({event:"ks.viewCart"},r()),{cartCurrency:e.currency,cartProductValue:e.productValue,cartValue:e.totalValue,cartProducts:e.products,ecommerce:{items:t(Object.values(e.products)),value:e.productValue,currency:e.currency}}))},o.order_checkout=async function(e,o){var c,n;null===(c=window.dataLayer)||void 0===c||c.push({ecommerce:null}),null===(n=window.dataLayer)||void 0===n||n.push(Object.assign(Object.assign({event:"ks.checkout",facebookEventId:o},r()),{orderProducts:e.products,orderValue:e.totalValue,orderProductValue:e.productValue,orderCurrency:e.currency,orderShipping:e.shippingValue,orderCoupon:e.coupon,ecommerce:{items:t(e.products)}}))},o.order_form=async function(e,o){var c,n;null===(c=window.dataLayer)||void 0===c||c.push({ecommerce:null}),null===(n=window.dataLayer)||void 0===n||n.push(Object.assign(Object.assign({event:"ks.orderForm",facebookEventId:o},r()),{orderProducts:e.products,orderValue:e.totalValue,orderProductValue:e.productValue,orderCurrency:e.currency,orderShipping:e.shippingValue,orderCoupon:e.coupon,ecommerce:{items:t(e.products)}}))},o.order_placed=async function(e,o){var c,n;null===(c=window.dataLayer)||void 0===c||c.push({ecommerce:null}),null===(n=window.dataLayer)||void 0===n||n.push(Object.assign(Object.assign({event:"ks.order",facebookEventId:o},r()),{orderProducts:e.products,orderId:e.id,orderValue:e.totalValue,orderProductValue:e.productValue,orderCurrency:e.currency,orderShipping:e.shippingValue,orderCoupon:e.coupon,ecommerce:{transaction_id:e.id,value:e.productValue,currency:e.currency,shipping:e.shippingValue,coupon:e.coupon,items:t(e.products)}}))},o.search=async function(e){var o;null===(o=window.dataLayer)||void 0===o||o.push(Object.assign({event:"ks.search",searchQuery:e},r()))},o.subscribe=async function(e){var o;null===(o=window.dataLayer)||void 0===o||o.push(Object.assign(Object.assign({event:"ks.subscribe"},r()),{subscriptionPlace:e.place,subscriptionEmail:e.email,subscriptionName:null==e?void 0:e.name,subscriptionStatus:e.subscriber?1:0}))},o.recipe=async function(e){var o;null===(o=window.dataLayer)||void 0===o||o.push(Object.assign(Object.assign({event:"ks.recipe"},r()),{recipeName:e.title,recipeCategory:e.category,recipeCuisine:e.cuisine}))}}(o||(o={}));export{o as D}