System.register(["./index-5ab56926.system.js"],(function(t){"use strict";var e,i,r;return{setters:[function(t){e=t.r;i=t.h;r=t.g}],execute:function(){var s=t("ks_card",function(){function t(t){e(this,t);this.padding=false;this.small=false;this.margin=false;this.height=false}t.prototype.componentDidLoad=function(){this.root.style.display="block";if(this.height)this.root.style.height="100%"};t.prototype.render=function(){var t=this.padding?this.small?"uk-padding-small":"":"uk-padding-remove";var e=this.margin?"uk-margin-bottom":"";var r=this.height?"uk-height-1-1":"";return i("div",{class:"uk-card uk-card-default uk-card-body "+t+" "+e+" "+r},i("slot",null))};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return t}())}}}));