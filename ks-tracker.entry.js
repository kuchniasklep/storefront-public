import{r as t}from"./index-d37cbb15.js";import{t as e,r as n}from"./tracker-95958994.js";import"./index-4cb90cd3.js";class r{constructor(){this.ttq=new Promise((t=>{var e=setInterval((()=>{void 0!==ttq&&(t(ttq),clearInterval(e))}),100)}))}pageview(){this.ttq.then((t=>{t.track("Browse")}))}product(t,e,n,r,c){this.ttq.then((t=>{t.track("ViewContent",{content_type:"product",content_id:e,content_name:n,currency:c,price:r,quantity:1,value:r})}))}addToCart(t,e,n,r,c,o){this.ttq.then((t=>{t.track("AddToCart",{content_type:"product",content_id:e,content_name:n,currency:o,price:r,quantity:c,value:r*c})}))}order_checkout(t,e,n,r){this.ttq.then((t=>{t.track("StartCheckout",{contents:this.transformProducts(e),currency:r,value:n})}))}order_form(t,e,n,r){this.ttq.then((t=>{t.track("AddBilling",{contents:this.transformProducts(e),value:n,currency:r})}))}order_placed(t,e,n,r){this.ttq.then((t=>{t.track("Checkout",{contents:this.transformProducts(e),value:n,currency:r})}))}search(t){}transformProducts(t){return t.map((t=>({content_id:t.id,content_type:"product",content_name:t.name,quantity:t.quantity,price:t.price})))}}class c{constructor(t){const e=t.split(", ");this.pixel=new Promise((t=>{var n,r,c,o,s,a;n=window,r=document,c="script",n.fbq||(o=n.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},n._fbq||(n._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(s=r.createElement(c)).async=!0,s.src="https://connect.facebook.net/en_US/fbevents.js",(a=r.getElementsByTagName(c)[0]).parentNode.insertBefore(s,a)),e.forEach((t=>{fbq("init",t)})),t(fbq)}))}pageview(t){this.pixel.then((e=>{e("track","PageView",{},{eventID:t})}))}product(t,e,n,r,c){this.pixel.then((o=>{o("track","ViewContent",{content_type:"product",content_name:n,value:r,currency:c,content_ids:[e]},{eventID:t})}))}addToCart(t,e,n,r,c,o){this.pixel.then((s=>{s("track","AddToCart",{content_type:"product",content_name:n,value:r,currency:o,contents:[{id:e,quantity:c}]},{eventID:t})}))}order_checkout(t,e,n,r){this.pixel.then((c=>{c("track","InitiateCheckout",{contents:this.transformProducts(e),content_type:"product",value:n,currency:r},{eventID:t})}))}order_form(t,e,n,r){}order_placed(t,e,n,r){this.pixel.then((c=>{c("track","Purchase",{contents:this.transformProducts(e),content_type:"product",value:n,currency:r},{eventID:t})}))}search(t){this.pixel.then((e=>{e("track","Search",{search_string:t})}))}transformProducts(t){return t.map((t=>({id:t.id,quantity:t.quantity})))}}let o=class{constructor(e){t(this,e)}componentWillLoad(){e.get("loaded").then((()=>{this.tiktok&&this.appendTracker(new r),this.facebook&&this.appendTracker(new c(this.facebook)),n()}))}appendTracker(t){e.set("trackers",[...e.get("trackers"),t])}};export{o as ks_tracker}