var e;!function(e){function o(e){return e.includes("http")?e:document.baseURI+e}function r(e){return e.map(((e,o)=>{const r=e.breadcrumbs.map((e=>e.name)).reverse();return{item_id:e.id,item_name:e.name,currency:e.currency,index:o,price:e.currentPrice,item_brand:e.brandName,item_category:null==r?void 0:r[0],item_category2:null==r?void 0:r[1],item_category3:null==r?void 0:r[2],item_category4:null==r?void 0:r[3],item_category5:null==r?void 0:r[4]}}))}e.pageview=async function(e,o){var r;const c=e.customer,n=e.loggedIn&&c;null===(r=window.dataLayer)||void 0===r||r.push({event:"ks.pageview",facebookEventId:o,customerDataAvailable:n,customerEmail:n?c.email:void 0,customerFirstName:n?c.firstName:void 0,customerLastName:n?c.lastName:void 0,customerSubscriberStatus:n?c.subscriber?1:0:void 0,customerCountryISO2:n?c.countryISO2:void 0,customerCity:n?c.city:void 0,customerPhone:n?c.phone:void 0,customerCurrency:n?c.currency:void 0})},e.product=async function(e,c=""){var n,t;const u=e.breadcrumbs;null===(n=window.dataLayer)||void 0===n||n.push({ecommerce:null}),null===(t=window.dataLayer)||void 0===t||t.push({event:"ks.product",facebookEventId:c,productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productImage:(null==e?void 0:e.images.length)>0?o(e.images[0].full.url):void 0,productURL:o(document.location.href),productSKU:e.model,productBrand:e.brand.name,productCategory:u[u.length-1].name,productAvailability:e.shippingTime,productQuantity:1,productCategories:e.categories,ecommerce:{items:r([e])}})},e.listing=async function(e){var o,c;const n="category"==e.type?"category":"manufacturer"==e.type?"manufacturer":"search"==e.type?"search":null;n&&(null===(o=window.dataLayer)||void 0===o||o.push({ecommerce:null}),null===(c=window.dataLayer)||void 0===c||c.push({event:"ks.listing",type:n,listingCategories:"category"==n?e.breadcrumbs.filter((e=>"0"!=e.id)):void 0,listingProducts:e.products,ecommerce:{items:r(e.products)}}))},e.addToCart=async function(e,c){var n,t;null===(n=window.dataLayer)||void 0===n||n.push({ecommerce:null}),null===(t=window.dataLayer)||void 0===t||t.push({event:"ks.addToCart",facebookEventId:c,productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productQuantity:e.quantity,productImage:o(e.imageFull),productURL:o(e.link),productSKU:e.sku,productCategories:e.categories,ecommerce:{items:r([e])}})},e.removeFromCart=async function(e){var c,n;null===(c=window.dataLayer)||void 0===c||c.push({ecommerce:null}),null===(n=window.dataLayer)||void 0===n||n.push({event:"ks.removeFromCart",productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productQuantity:e.quantity,productImage:o(e.imageFull),productURL:o(e.link),productSKU:e.sku,productCategories:e.categories,ecommerce:{items:r([e])}})},e.addToFavourites=async function(e){var c,n;null===(c=window.dataLayer)||void 0===c||c.push({ecommerce:null}),null===(n=window.dataLayer)||void 0===n||n.push({event:"ks.addToFavourites",productId:e.id,productName:e.name,productPrice:e.currentPrice,productCurrency:e.currency,productQuantity:e.quantity,productImage:o(e.imageFull),productURL:o(e.link),productSKU:e.sku,productCategories:e.categories,ecommerce:{items:r([e]),value:e.currentPrice,currency:e.currency}})},e.view_cart=async function(e){var o,c;null===(o=window.dataLayer)||void 0===o||o.push({ecommerce:null}),null===(c=window.dataLayer)||void 0===c||c.push({event:"ks.viewCart",cartCurrency:e.currency,cartProductValue:e.productValue,cartValue:e.totalValue,cartProducts:e.products,ecommerce:{items:r(Object.values(e.products)),value:e.productValue,currency:e.currency}})},e.order_checkout=async function(e,o){var c,n;null===(c=window.dataLayer)||void 0===c||c.push({ecommerce:null}),null===(n=window.dataLayer)||void 0===n||n.push({event:"ks.checkout",facebookEventId:o,orderProducts:e.products,orderValue:e.totalValue,orderProductValue:e.productValue,orderCurrency:e.currency,orderShipping:e.shippingValue,orderCoupon:e.coupon,ecommerce:{items:r(e.products)}})},e.order_form=async function(e,o){var c,n;null===(c=window.dataLayer)||void 0===c||c.push({ecommerce:null}),null===(n=window.dataLayer)||void 0===n||n.push({event:"ks.orderForm",facebookEventId:o,orderProducts:e.products,orderValue:e.totalValue,orderProductValue:e.productValue,orderCurrency:e.currency,orderShipping:e.shippingValue,orderCoupon:e.coupon,ecommerce:{items:r(e.products)}})},e.order_placed=async function(e,o){var c,n;null===(c=window.dataLayer)||void 0===c||c.push({ecommerce:null}),null===(n=window.dataLayer)||void 0===n||n.push({event:"ks.order",facebookEventId:o,orderProducts:e.products,orderId:e.id,orderValue:e.totalValue,orderProductValue:e.productValue,orderCurrency:e.currency,orderShipping:e.shippingValue,orderCoupon:e.coupon,ecommerce:{transaction_id:e.id,value:e.productValue,currency:e.currency,shipping:e.shippingValue,coupon:e.coupon,items:r(e.products)}})},e.search=async function(e){var o;null===(o=window.dataLayer)||void 0===o||o.push({event:"ks.search",searchQuery:e})},e.subscribe=async function(e){var o;null===(o=window.dataLayer)||void 0===o||o.push({event:"ks.subscribe",subscriptionPlace:e.place,subscriptionEmail:e.email,subscriptionName:null==e?void 0:e.name,subscriptionStatus:e.subscriber?1:0})},e.recipe=async function(e){var o;null===(o=window.dataLayer)||void 0===o||o.push({event:"ks.recipe",recipeName:e.title,recipeCategory:e.category,recipeCuisine:e.cuisine})}}(e||(e={}));export{e as D}