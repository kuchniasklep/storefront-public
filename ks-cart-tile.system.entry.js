System.register(["./index-56e4ba05.system.js"],(function(e){"use strict";var t,i,s;return{setters:[function(e){t=e.r;i=e.h;s=e.g}],execute:function(){var o=e("ks_cart_tile",function(){function e(e){t(this,e);this.name=undefined;this.color=undefined;this.logo=undefined;this.price=undefined}e.prototype.componentDidLoad=function(){this.root.style.display="block"};e.prototype.render=function(){var e="#eeeeee";var t={backgroundColor:this.color,color:"white",height:"50px"};var s={fontSize:"20px",padding:"5px 10px"};var o={backgroundColor:e,msFlex:"1 0 auto",padding:"8px",fontSize:"16px",borderTop:"1px solid rgba(0, 0, 0, 0.1)",transition:"background-color 0.1s ease-in, color 0.1s ease-in"};return i("div",{class:"uk-height-1-1 uk-flex uk-flex-column"},this.price?i("div",{class:"uk-flex uk-flex-middle uk-flex-between",style:t},i("div",{class:"uk-flex-auto"},i("ks-image",{src:this.logo,alt:this.name,width:"130",height:"40"})),i("div",{class:"ks-text-decorated uk-text-right",style:s},this.price)):i("div",{class:"uk-flex uk-flex-middle uk-flex-center",style:t},i("ks-image",{src:this.logo,alt:this.name,width:"140",height:"40"})),i("div",{class:"uk-flex-1 uk-flex uk-flex-middle",style:o},i("div",{class:"uk-width-1-1 uk-padding-small uk-text-center"},i("slot",null))))};Object.defineProperty(e.prototype,"root",{get:function(){return s(this)},enumerable:false,configurable:true});return e}())}}}));
//# sourceMappingURL=ks-cart-tile.system.entry.js.map