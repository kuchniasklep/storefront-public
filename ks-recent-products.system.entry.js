System.register(["./index-c11c20c8.system.js"],(function(t){"use strict";var e,i,o;return{setters:[function(t){e=t.r;i=t.h;o=t.g}],execute:function(){var n=t("ks_recent_products",function(){function t(t){e(this,t);this.mobile=false}t.prototype.limitItemCount=function(){var t=this.mobile?window.innerWidth-20:this.containter.offsetWidth-20;var e=this.items[0].offsetWidth;var i=Math.floor(t/e);for(var o=0;o<this.items.length;o++){var n=this.items[o];if(o<i)n.style.display="block";else n.style.display="none"}};t.prototype.mobileLayout=function(){if(window.innerWidth<=960)this.mobile=true;else this.mobile=false};t.prototype.componentWillLoad=function(){this.mobileLayout()};t.prototype.componentDidLoad=function(){this.root.style.display="block";this.containter=this.root.querySelector("#ks-recent-products-items");this.items=this.containter.querySelectorAll("ks-recent-card");this.limitItemCount()};t.prototype.handleResize=function(){this.mobileLayout();this.limitItemCount()};t.prototype.render=function(){return i("div",{class:"uk-flex uk-flex-between uk-flex-middle "+(this.mobile?"uk-flex-column":"")},i("div",{class:"uk-flex uk-flex-middle ks-text-decorated",style:{fontSize:"20px",color:"white",padding:"5px 20px"}},"OSTATNIO PRZEGLĄDANE"),i("div",{id:"ks-recent-products-items",class:"uk-overflow-hidden uk-width-1-1 uk-flex-1 uk-flex "+(this.mobile?"uk-flex-center":"uk-flex-right")},i("slot",null)))};Object.defineProperty(t.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return t}())}}}));