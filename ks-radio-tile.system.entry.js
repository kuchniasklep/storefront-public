System.register(["./index-56e4ba05.system.js"],(function(e){"use strict";var t,i,r;return{setters:[function(e){t=e.r;i=e.h;r=e.g}],execute:function(){var n="ks-radio-tile .hover:hover{background-color:#b2b2b2 !important}";var o=e("ks_radio_tile",function(){function e(e){t(this,e);this.name=undefined;this.value=undefined;this.color=undefined;this.logo=undefined;this.price=undefined;this.service=undefined;this.time=undefined;this.active=undefined;this.mobile=false}e.prototype.CheckHandler=function(){var e=this;var t=document.querySelectorAll("input[name=".concat(this.name,"]"));var i=this.root.querySelector("input");t.forEach((function(t){if(t==i)e.active=i.checked;else{var r=t.parentElement.parentElement;r.active=t.checked}}))};e.prototype.componentDidLoad=function(){this.root.style.display="block";this.root.style.width="100%";this.resizeHandler();this.MobileWatcher(this.mobile)};e.prototype.resizeHandler=function(){if(window.innerWidth<=620)this.mobile=true;else this.mobile=false};e.prototype.MobileWatcher=function(e){this.root.style.maxWidth=e?"100%":"260px"};e.prototype.render=function(){var e=this;var t="#eeeeee";var r={backgroundColor:this.active?this.color:"#a7a7a7",transition:"background-color 0.3s ease",color:"white",height:"50px"};var n={fontSize:"20px",padding:"5px 10px"};var o={backgroundColor:t,padding:"8px",fontSize:"16px",borderTop:"1px solid rgba(0, 0, 0, 0.1)",transition:"background-color 0.1s ease-in, color 0.1s ease-in"};return i("label",null,i("input",{hidden:true,type:"radio",name:this.name,value:this.value,onChange:function(){return e.CheckHandler()}}),i("div",null,this.price?i("div",{class:"uk-flex uk-flex-middle uk-flex-between"+(this.active?"":" hover"),style:r},i("div",{class:"uk-flex-auto"},i("ks-image",{src:this.logo,alt:this.service,width:"130",height:"40"})),i("div",{class:"ks-text-decorated uk-text-right",style:n},this.price)):i("div",{class:"uk-flex uk-flex-middle uk-flex-center",style:r},i("ks-image",{src:this.logo,alt:this.service,width:"140",height:"40"})),i("div",{class:"uk-flex uk-flex-middle ".concat(this.time?"uk-flex-between":"uk-flex-center"),style:o,hidden:this.mobile&&!this.active},i("div",null,this.service),i("div",{class:"uk-text-right"},this.time))))};Object.defineProperty(e.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{mobile:["MobileWatcher"]}},enumerable:false,configurable:true});return e}());o.style=n}}}));
//# sourceMappingURL=ks-radio-tile.system.entry.js.map