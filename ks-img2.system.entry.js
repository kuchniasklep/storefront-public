System.register(["./index-bc7fda62.system.js","./deferredpromise-f70f841f.system.js"],(function(t){"use strict";var i,e,r,s,n;return{setters:[function(t){i=t.r;e=t.e;r=t.h;s=t.g},function(t){n=t.w}],execute:function(){var a='ks-img2{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;max-height:inherit;max-width:inherit;height:100%;font-size:0;position:relative}ks-img2 picture{width:inherit;height:inherit;max-height:inherit;max-width:inherit}ks-img2 img{display:inline-block;width:auto;height:auto;max-width:inherit;max-height:inherit;font-size:0;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2 canvas{display:inline-block;width:auto;height:auto;max-width:inherit;max-height:inherit;font-size:0}ks-img2[src*=".svg"] img{display:inline-block;font-size:0;height:100%;width:100%;max-width:inherit;max-height:inherit;overflow:visible;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2[vertical] img{width:auto}ks-img2[horizontal] img{height:auto}ks-img2 img.loading{opacity:0;height:0}ks-img2[limit] img{max-width:100%;max-height:100%}ks-img2[center] picture{margin:auto;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}ks-img2[fill] picture{position:absolute;left:0;right:0;top:0;bottom:0}';var o=t("ks_img2",function(){function t(t){i(this,t);this.lazyLoaded=e(this,"lazyLoaded",7);this.sync=false;this.loaded=false}t.prototype.loadHandler=function(t){var i;if(t.target instanceof HTMLElement&&!((i=t.target.getAttribute("src"))===null||i===void 0?void 0:i.includes("data:image"))){this.loaded=true;this.lazyLoaded.emit()}};t.prototype.srcListener=function(){var t=this;var i=this.root.querySelector("img");i.removeAttribute("src");i.setAttribute("src",this.src);setTimeout((function(){if(!i.complete){t.loaded=false}}),200)};t.prototype.componentDidLoad=function(){var t=this;if(!this.sync)n.promise.then((function(){return t.initializeObserver()}))};t.prototype.initializeObserver=function(){var t=this;this.image=this.root.querySelector("img");var i=this.target?this.root.closest(this.target):this.root.parentElement;var e=function(i){for(var e=0,r=i;e<r.length;e++){var s=r[e];if(s.isIntersecting){if(t.observer){t.observer.disconnect()}if(t.image.getAttribute("data-src")){t.image.setAttribute("src",t.image.getAttribute("data-src"));t.image.removeAttribute("data-src")}}}};if(this.image&&i){this.observer=new IntersectionObserver(e,{rootMargin:this.observerMargin});this.observer.observe(i)}};t.prototype.render=function(){var t=this;var i=this.loaded?"":"loading";if(this.sync)return r("picture",null,this.webp?r("source",{srcSet:this.webp,type:"image/webp"}):null,r("img",{src:this.src,alt:this.alt,width:this.width,height:this.height}));return[r("picture",null,this.webp?r("source",{srcSet:this.webp,type:"image/webp"}):null,r("img",{class:i,onLoad:function(i){return t.loadHandler(i)},"data-src":this.src,alt:this.alt,width:this.width,height:this.height})),!this.loaded?r("ks-loader",{dark:true}):null,!this.loaded||this.fill?r("canvas",{width:this.width,height:this.height}):null]};Object.defineProperty(t.prototype,"root",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{src:["srcListener"]}},enumerable:false,configurable:true});return t}());o.style=a}}}));