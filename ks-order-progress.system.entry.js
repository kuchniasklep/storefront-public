System.register(["./index-229c64eb.system.js"],(function(t){"use strict";var e,i,r;return{setters:[function(t){e=t.r;i=t.h;r=t.g}],execute:function(){var n=t("ks_order_progress",function(){function t(t){e(this,t);this.current=undefined;this.cart="Koszyk";this.shipping="Dane do wysłki";this.confirmation="Potwierdzenie";this.mobile=false}t.prototype.componentDidLoad=function(){this.root.style.display="block";this.root.style.width="100%"};t.prototype.resizeHandler=function(){this.mobile=window.innerWidth<800?true:false};t.prototype.componentWillLoad=function(){this.resizeHandler()};t.prototype.StepStyle=function(t){var e={padding:this.mobile?"20px":"30px",backgroundColor:"#252525",color:"white",borderLeft:"1px solid #404040"};var i=Object.assign(Object.assign({},e),{backgroundColor:"#404040",borderLeft:"1px solid #404040"});if(this.mobile)return e;if(t==this.current)return i;else return e};t.prototype.render=function(){return[i("div",{class:"uk-text-center uk-flex uk-flex-evenly ks-text-decorated "+(this.mobile?"uk-child-width-1-1":"uk-child-width-1-3"),style:{fontSize:"16px",backgroundColor:"#252525"}},!this.mobile||this.current==0?i("div",{style:this.StepStyle(0)},i("span",{"uk-icon":"icon: cart; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-3px)"}})," ",this.cart):null,!this.mobile||this.current==1?i("div",{style:this.StepStyle(1)},i("span",{"uk-icon":"icon: user; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-2px)"}})," ",this.shipping):null,!this.mobile||this.current==2?i("div",{style:this.StepStyle(2)},i("span",{"uk-icon":"icon: check; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-1px)"}})," ",this.confirmation):null)]};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return t}())}}}));