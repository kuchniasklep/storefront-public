System.register(["./index-229c64eb.system.js","./deferredpromise-f70f841f.system.js"],(function(t){"use strict";var e,i,r,s,o;return{setters:[function(t){e=t.r;i=t.c;r=t.h;s=t.g},function(t){o=t.w}],execute:function(){var n="ks-img3{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:0;max-height:inherit}ks-img3 picture{max-height:inherit}ks-img3 img{width:100%;height:100%;max-height:inherit;-o-object-position:center;object-position:center;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img3 img.loading{opacity:0;height:0}ks-img3[fit='contain'] img{-o-object-fit:contain;object-fit:contain}ks-img3[fit='cover'] img{-o-object-fit:cover;object-fit:cover}ks-img3[fit='fill'] img{-o-object-fit:fill;object-fit:fill}ks-img3[fit='scale-down'] img{-o-object-fit:scale-down;object-fit:scale-down}ks-img3[fit='none'] img{-o-object-fit:none;object-fit:none}";var a=t("ks_img3",function(){function t(t){e(this,t);this.lazyLoaded=i(this,"lazyLoaded",7);this.image=undefined;this.webp=undefined;this.alt=undefined;this.target=undefined;this.observerMargin=undefined;this.sync=false;this.width=undefined;this.height=undefined;this.fit=undefined;this.loaded=false}t.prototype.loadHandler=function(t){var e;if(t.target instanceof HTMLElement&&!((e=t.target.getAttribute("src"))===null||e===void 0?void 0:e.includes("data:image"))){this.loaded=true;this.lazyLoaded.emit()}};t.prototype.srcListener=function(){var t=this;var e=this.root.querySelector("img");e.removeAttribute("src");e.setAttribute("src",this.image);setTimeout((function(){if(!e.complete){t.loaded=false}}),200)};t.prototype.componentDidLoad=function(){var t=this;if(!this.sync)o.promise.then((function(){return t.initializeObserver()}))};t.prototype.initializeObserver=function(){var t=this;this.img=this.root.querySelector("img");this.source=this.root.querySelector("source");var e=this.target?this.root.closest(this.target):this.root.parentElement;var i=function(e){var i;for(var r=0,s=e;r<s.length;r++){var o=s[r];if(o.isIntersecting){if(t.observer){t.observer.disconnect()}if((i=t.source)===null||i===void 0?void 0:i.getAttribute("data-srcSet")){t.source.setAttribute("srcSet",t.source.getAttribute("data-srcSet"));t.source.removeAttribute("data-srcSet")}if(t.img.getAttribute("data-src")){t.img.setAttribute("src",t.img.getAttribute("data-src"));t.img.removeAttribute("data-src")}}}};if(this.image&&e){this.observer=new IntersectionObserver(i,{rootMargin:this.observerMargin});this.observer.observe(e)}};t.prototype.render=function(){var t=this;var e=this.loaded?"":"loading";if(this.sync)return[r("picture",null,this.webp?r("source",{srcSet:this.webp,type:"image/webp"}):null,r("img",{src:this.image,alt:this.alt,width:this.width,height:this.height}))];return[r("picture",null,this.webp?r("source",{"data-srcSet":this.webp,type:"image/webp"}):null,r("img",{class:e,onLoad:function(e){return t.loadHandler(e)},"data-src":this.image,alt:this.alt,width:this.width,height:this.height})),!this.loaded?r("ks-loader",{dark:true}):null]};Object.defineProperty(t.prototype,"root",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{image:["srcListener"]}},enumerable:false,configurable:true});return t}());a.style=n}}}));