System.register(["./index-5ab56926.system.js","./product-ac66a87e.system.js","./index-1eb13b56.system.js"],(function(e){"use strict";var o,n,t,r;return{setters:[function(e){o=e.r;n=e.h;t=e.g},function(e){r=e.p},function(){}],execute:function(){var a="ks-product-comments{display:block;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);background-color:var(--card-background);color:var(--card-text-color)}ks-product-comments .message{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0;padding:30px}ks-product-comments .message ks-icon{display:-ms-flexbox;display:flex;margin-right:15px;max-width:50px;width:100%}ks-product-comments .message p{width:100%;text-align:center}@media (min-width: 1200px){ks-product-comments .message{padding:30px 40px}}ks-product-comments hr,ks-product-comments .more{margin:0}ks-product-comments .expand,ks-product-comments .add{width:100%;line-height:40px;padding:0 10px;outline:none;border:none;text-align:center;text-decoration:none;text-transform:none;color:white !important;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-comments .expand{width:100%;line-height:40px;padding:0 10px;vertical-align:middle;background-color:var(--color-dark)}ks-product-comments .expand:hover{background-color:var(--color-dark-hover)}ks-product-comments .expand:active{background-color:var(--color-dark-active)}ks-product-comments .add{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:8px;background-color:var(--color-secondary)}ks-product-comments .add:hover{background-color:var(--color-secondary-hover)}ks-product-comments .add:active{background-color:var(--color-secondary-active)}ks-product-comments ks-comment{border-top:solid 1px #dddddd}";var s=e("ks_product_comments",function(){function e(e){o(this,e);this.hasMore=false;this.expand=false}e.prototype.componentWillLoad=function(){var e=r.get("comments");if(e.entries.length>e.hideAfter)this.hasMore=true};e.prototype.render=function(){var e=this;var o=r.get("comments");return[n("div",{class:"message"},n("ks-icon",{name:"mail",size:2.5}),n("p",null,o.addMessage)),o.entries.slice(0,o.hideAfter).map((function(e){return n("ks-comment",{author:e.author,when:e.when},e.content)})),n("div",{class:"more",hidden:!this.expand},o.entries.slice(o.hideAfter).map((function(e){return n("ks-comment",{author:e.author,when:e.when},e.content)}))),this.hasMore?n("button",{onClick:function(){return e.expand=!e.expand},class:"expand"},n("ks-icon",{name:this.expand?"chevron-up":"chevron-down",size:1.5})):null,o.addLink?n("a",{href:o.addLink,rel:"nofollow",class:"add","aria-label":"Napisz recenzję"},n("ks-icon",{name:"plus-circle",size:1.5})):null]};Object.defineProperty(e.prototype,"root",{get:function(){return t(this)},enumerable:false,configurable:true});return e}());s.style=a}}}));