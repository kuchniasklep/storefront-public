System.register(["./index-229c64eb.system.js"],(function(t){"use strict";var e,o,i;return{setters:[function(t){e=t.r;o=t.h;i=t.g}],execute:function(){var r="ks-mini-cart{display:block;position:-webkit-sticky;position:sticky;top:0;float:right;width:400px;padding:5px 20px;color:#151515}ks-mini-cart .arrow{position:relative;left:300px;width:0;height:0;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid #ffffff}ks-mini-cart .content{padding:30px;background-color:#ffffff;-webkit-box-shadow:0 4px 4px 0px rgba(0, 0, 0, 0.281);box-shadow:0 4px 4px 0px rgba(0, 0, 0, 0.281)}";var n=t("ks_mini_cart",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){this.PageHeight()};t.prototype.PageHeight=function(){var t=document.querySelector("ks-navbar-panel .panel");if(t){t.style.height=document.documentElement.offsetHeight-this.root.offsetHeight+"px";console.log(t.style.height)}};t.prototype.resizeHandler=function(){this.PageHeight()};t.prototype.render=function(){return[o("div",{class:"arrow"}),o("div",{class:"content"},"Test")]};Object.defineProperty(t.prototype,"root",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());n.style=r}}}));