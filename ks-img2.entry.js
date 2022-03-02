import{r as i,e as t,h as s,g as e}from"./index-e340c957.js";import{w as h}from"./deferredpromise-0f64146f.js";let a=class{constructor(s){i(this,s),this.lazyLoaded=t(this,"lazyLoaded",7),this.sync=!1,this.loaded=!1}loadHandler(i){var t;i.target instanceof HTMLElement&&!(null===(t=i.target.getAttribute("src"))||void 0===t?void 0:t.includes("data:image"))&&(this.loaded=!0,this.lazyLoaded.emit())}srcListener(){const i=this.root.querySelector("img");i.removeAttribute("src"),i.setAttribute("src",this.src),setTimeout((()=>{i.complete||(this.loaded=!1)}),200)}componentDidLoad(){this.sync||h.promise.then((()=>this.initializeObserver()))}initializeObserver(){this.image=this.root.querySelector("img"),this.source=this.root.querySelector("source");const i=this.target?this.root.closest(this.target):this.root.parentElement;this.image&&i&&(this.observer=new IntersectionObserver((i=>{var t;for(const s of i)s.isIntersecting&&(this.observer&&this.observer.disconnect(),(null===(t=this.source)||void 0===t?void 0:t.getAttribute("data-srcSet"))&&(this.source.setAttribute("srcSet",this.source.getAttribute("data-srcSet")),this.source.removeAttribute("data-srcSet")),this.image.getAttribute("data-src")&&(this.image.setAttribute("src",this.image.getAttribute("data-src")),this.image.removeAttribute("data-src")))}),{rootMargin:this.observerMargin}),this.observer.observe(i))}render(){const i=this.loaded?"":"loading";return this.sync?[s("picture",null,this.webp?s("source",{srcSet:this.webp,type:"image/webp"}):null,s("img",{src:this.src,alt:this.alt,width:this.width,height:this.height})),this.fill?s("canvas",{width:this.width,height:this.height}):null]:[s("picture",null,this.webp?s("source",{"data-srcSet":this.webp,type:"image/webp"}):null,s("img",{class:i,onLoad:i=>this.loadHandler(i),"data-src":this.src,alt:this.alt,width:this.width,height:this.height})),this.loaded?null:s("ks-loader",{dark:!0}),!this.loaded||this.fill?s("canvas",{width:this.width,height:this.height}):null]}get root(){return e(this)}static get watchers(){return{src:["srcListener"]}}};a.style='ks-img2{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;max-height:inherit;max-width:inherit;height:100%;font-size:0;vertical-align:middle;position:relative}ks-img2 picture{width:inherit;height:inherit;max-height:inherit;max-width:inherit}ks-img2 img{display:inline-block;width:auto;height:auto;max-width:inherit;max-height:inherit;font-size:0;vertical-align:middle;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2 canvas{display:inline-block;width:auto;height:auto;max-width:inherit;max-height:inherit;font-size:0;vertical-align:middle}ks-img2[src*=".svg"] img{display:inline-block;font-size:0;vertical-align:middle;height:100%;width:100%;max-width:inherit;max-height:inherit;overflow:visible;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2[vertical] img{width:auto}ks-img2[horizontal] img{height:auto}ks-img2 img.loading{opacity:0;height:0}ks-img2[limit] img{max-width:100%;max-height:100%}ks-img2[center] picture{margin:auto;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}ks-img2[fill] picture{position:absolute;left:0;right:0;top:0;bottom:0}';export{a as ks_img2}