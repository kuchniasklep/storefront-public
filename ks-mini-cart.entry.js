import{r as t,h as o,g as i}from"./index-6e14abe0.js";const r=class{constructor(o){t(this,o)}componentDidLoad(){this.PageHeight()}PageHeight(){const t=document.querySelector("ks-navbar-panel .panel");t&&(t.style.height=document.documentElement.offsetHeight-this.root.offsetHeight+"px",console.log(t.style.height))}resizeHandler(){this.PageHeight()}render(){return[o("div",{class:"arrow"}),o("div",{class:"content"},"Test")]}get root(){return i(this)}};r.style="ks-mini-cart{display:block;position:-webkit-sticky;position:sticky;top:0;float:right;width:400px;padding:5px 20px;color:#151515}ks-mini-cart .arrow{position:relative;left:300px;width:0;height:0;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid #ffffff}ks-mini-cart .content{padding:30px;background-color:#ffffff;-webkit-box-shadow:0 4px 4px 0px rgba(0, 0, 0, 0.281);box-shadow:0 4px 4px 0px rgba(0, 0, 0, 0.281)}";export{r as ks_mini_cart}