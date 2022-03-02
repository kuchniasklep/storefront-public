System.register(["./index-c11c20c8.system.js"],(function(e){"use strict";var t,i,a;return{setters:[function(e){t=e.r;i=e.h;a=e.g}],execute:function(){var r='ks-article-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:white;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-article-card .image{position:relative;padding-top:50%;max-width:100%;overflow:hidden}ks-article-card .image>*{position:absolute;top:0}ks-article-card .info{padding:15px;-ms-flex:1 0 auto;flex:1 0 auto;font-size:.875rem;line-height:1.5}ks-article-card .info h3{margin-bottom:5px}ks-article-card .info a{text-decoration:none !important;color:#151515;-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-article-card .info a:hover{color:var(--color-secondary)}ks-article-card .info a:active{color:var(--color-secondary-hover)}ks-article-card .meta{font-size:.875rem;line-height:1.4;color:#707070}ks-article-card .meta ks-icon:not(:first-of-type){margin-left:15px}ks-article-card .footer{padding:20px;text-align:center;position:relative;border-top:1px solid #e2e2e2}ks-article-card .footer a{text-decoration:none !important;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;color:#151515;font-size:.875rem;line-height:1.4;position:relative;opacity:1;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease}ks-article-card .footer a:active{opacity:0.6}ks-article-card .footer a:before{content:"";position:absolute;left:50%;bottom:-2px;-webkit-transform:translateX(-50%);transform:translateX(-50%);height:1px;width:0%;border-bottom:1px solid #151515;opacity:1;-webkit-transition:width 0.3s ease, opacity 0.2s ease;transition:width 0.3s ease, opacity 0.2s ease}ks-article-card .footer a:hover:before{width:100%}ks-article-card .footer a:active:before{opacity:0.6;width:100%}@media screen and (min-width: 960px) and (max-width: 1200px){ks-article-card[hide-on-odd]{display:none !important}}';var o=e("ks_article_card",function(){function e(e){t(this,e);this.hideOnOdd=false}e.prototype.render=function(){return[i("a",{href:this.link,class:"image"},i("ks-img2",{horizontal:true,center:true,src:this.image,webp:this.webp,alt:this.heading,width:600,height:300})),i("div",{class:"info"},i("h3",null,i("a",{href:this.link},this.heading)),i("div",{class:"meta"},i("ks-icon",{name:"calendar",size:.9})," ",this.date,i("ks-icon",{name:"search",size:.9})," ",this.views),i("slot",null)),i("div",{class:"footer"},i("a",{href:this.link},"Zobacz więcej"))]};return e}());o.style=r;var s="ks-article-container{display:block;max-width:1200px;margin:auto;width:100%;min-height:10px}ks-article-container>div{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-5px}ks-article-container>div>*{width:calc(25% - 10px);margin:5px;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (max-width: 639px){ks-article-container>div>*{width:100%}}@media screen and (min-width: 640px) and (max-width: 959px){ks-article-container>div>*{width:calc(50% - 10px)}}@media screen and (min-width: 960px) and (max-width: 1199px){ks-article-container>div>*{width:calc(33.3333333333% - 10px)}}";var n=e("ks_article_container",function(){function e(e){t(this,e)}e.prototype.render=function(){return i("div",null,i("slot",null))};return e}());n.style=s;var c="ks-recipe-card{display:block;background-color:#ffffff;-webkit-box-shadow:0 2px 8px rgba(0,0,0,0.15);box-shadow:0 2px 8px rgba(0,0,0,0.15)}ks-recipe-card>a{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-direction:column;flex-direction:column;position:relative;max-width:100%}ks-recipe-card a{color:inherit}ks-recipe-card .info{padding:15px;font-family:var(--font-regular);font-size:14px;text-align:center;text-decoration:none !important;color:#707070;-webkit-transition:color 0.3s ease, opacity 0.3s ease;transition:color 0.3s ease, opacity 0.3s ease}ks-recipe-card h3{font-family:var(--font-emphasis);font-size:20px;color:#252525;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;margin-bottom:5px}ks-recipe-card .dot{margin:0 8px}ks-recipe-card a:hover{text-decoration:none}ks-recipe-card>a:hover .info{color:var(--color-secondary)}ks-recipe-card>a:hover h3{color:var(--color-secondary)}ks-recipe-card .info a:hover{opacity:0.6}@media screen and (min-width: 960px) and (max-width: 1199px){ks-recipe-card[hide-on-odd]{display:none !important}}";var d=e("ks_recipe_card",function(){function e(e){t(this,e);this.hideOnOdd=false}e.prototype.render=function(){return i("a",{href:this.link},i("ks-img2",{horizontal:true,src:this.image,webp:this.webp,width:this.width,height:this.height,alt:this.heading}),i("div",{class:"info"},i("h3",null,this.heading),i("div",null,i("a",{href:this.cuisineLink},this.cuisine),i("span",{class:"dot"},"•"),i("a",{href:this.categoryLink},this.category))))};Object.defineProperty(e.prototype,"root",{get:function(){return a(this)},enumerable:false,configurable:true});return e}());d.style=c;var l="ks-see-more{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:15px 0}ks-see-more a{display:block;padding:5px 30px;border:none;border-radius:50px;background-color:white;color:#151515 !important;-webkit-box-shadow:0px 2px 6px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 6px rgba(0, 0, 0, 0.18);font-size:.875rem;line-height:40px;text-align:center;text-decoration:none !important;-webkit-transform:scale(1);transform:scale(1);transition:box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;-webkit-transition:-webkit-box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;transition:-webkit-box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;transition:box-shadow 0.2s ease,\n                transform 0.2s ease;transition:box-shadow 0.2s ease,\n                transform 0.2s ease,\n                -webkit-box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;transition:box-shadow 0.2s ease,\n                transform 0.2s ease,\n                -webkit-transform 0.2s ease}ks-see-more a:hover{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-box-shadow:0px 2px 12px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 12px rgba(0, 0, 0, 0.18)}ks-see-more a:active{-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-box-shadow:0px 2px 8px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 8px rgba(0, 0, 0, 0.18)}";var p=e("ks_see_more",function(){function e(e){t(this,e);this.href="";this.text=""}e.prototype.render=function(){return i("a",{href:this.href},this.text)};return e}());p.style=l}}}));