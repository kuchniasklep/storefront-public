System.register(["./index-3484848d.system.js"],(function(e){"use strict";var t,a;return{setters:[function(e){t=e.r;a=e.h}],execute:function(){var o='ks-article-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;background-color:white;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-article-card .image{position:relative;padding-top:50%;max-width:100%;overflow:hidden}ks-article-card .image>*{position:absolute;top:0}ks-article-card .info{padding:15px;-ms-flex:1 0 auto;flex:1 0 auto;font-size:.875rem;line-height:1.5}ks-article-card .info h3{margin-bottom:5px}ks-article-card .info a{text-decoration:none !important;color:#151515;-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-article-card .info a:hover{color:var(--color-secondary)}ks-article-card .info a:active{color:var(--color-secondary-hover)}ks-article-card .meta{font-size:.875rem;line-height:1.4;color:#707070}ks-article-card .meta ks-icon:not(:first-of-type){margin-left:15px}ks-article-card .footer{padding:20px;text-align:center;position:relative;border-top:1px solid #e2e2e2}ks-article-card .footer a{text-decoration:none !important;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;color:#151515;font-size:.875rem;line-height:1.4;position:relative;opacity:1;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease}ks-article-card .footer a:active{opacity:0.6}ks-article-card .footer a:before{content:"";position:absolute;left:50%;bottom:-2px;-webkit-transform:translateX(-50%);transform:translateX(-50%);height:1px;width:0%;border-bottom:1px solid #151515;opacity:1;-webkit-transition:width 0.3s ease, opacity 0.2s ease;transition:width 0.3s ease, opacity 0.2s ease}ks-article-card .footer a:hover:before{width:100%}ks-article-card .footer a:active:before{opacity:0.6;width:100%}@media screen and (min-width: 960px) and (max-width: 1200px){ks-article-card[hide-on-odd]{display:none !important}}';var s=e("ks_article_card",function(){function e(e){t(this,e);this.hideOnOdd=false}e.prototype.render=function(){return[a("a",{href:this.link,class:"image"},a("ks-img2",{horizontal:true,center:true,src:this.image,webp:this.webp,alt:this.heading,width:600,height:300})),a("div",{class:"info"},a("h3",null,a("a",{href:this.link},this.heading)),a("div",{class:"meta"},a("ks-icon",{name:"calendar",size:.9})," ",this.date,a("ks-icon",{name:"search",size:.9})," ",this.views),a("slot",null)),a("div",{class:"footer"},a("a",{href:this.link},"Zobacz więcej"))]};return e}());s.style=o;var r="ks-see-more{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:15px 0}ks-see-more a{display:block;padding:5px 30px;border:none;border-radius:50px;background-color:white;color:#151515 !important;-webkit-box-shadow:0px 2px 6px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 6px rgba(0, 0, 0, 0.18);font-size:.875rem;line-height:40px;text-align:center;text-decoration:none !important;-webkit-transform:scale(1);transform:scale(1);transition:box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;-webkit-transition:-webkit-box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;transition:-webkit-box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;transition:box-shadow 0.2s ease,\n                transform 0.2s ease;transition:box-shadow 0.2s ease,\n                transform 0.2s ease,\n                -webkit-box-shadow 0.2s ease,\n                -webkit-transform 0.2s ease;transition:box-shadow 0.2s ease,\n                transform 0.2s ease,\n                -webkit-transform 0.2s ease}ks-see-more a:hover{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-box-shadow:0px 2px 12px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 12px rgba(0, 0, 0, 0.18)}ks-see-more a:active{-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-box-shadow:0px 2px 8px rgba(0, 0, 0, 0.18);box-shadow:0px 2px 8px rgba(0, 0, 0, 0.18)}";var i=e("ks_see_more",function(){function e(e){t(this,e);this.href="";this.text=""}e.prototype.render=function(){return a("a",{href:this.href},this.text)};return e}());i.style=r}}}));