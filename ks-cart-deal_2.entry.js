import{r as t,h as a,H as e}from"./index-e3198654.js";import{c as i}from"./cart-3ea22f3a.js";import{c as n}from"./common-e4bd89b8.js";import{a as r}from"./cart-b0354972.js";import"./index-5a4e318f.js";import"./fetch-1f8a9006.js";import"./dataLayer-251b405e.js";import"./commonDynamic-1f04aed5.js";const o=class{constructor(a){t(this,a),this.ikey=void 0,this.name=void 0,this.img=void 0,this.link=void 0,this.price=void 0,this.loading=!1}Add(){r(this.ikey)}render(){const t=n.get("translations");return a(e,{class:"cart-deal"},a("a",{href:this.link},a("div",{class:"image"},a("div",{class:"circle center"},a("ks-img3",{height:125,width:125,image:this.img,alt:this.name,fit:"contain"})),a("svg",{class:"fx fx1 center",width:"250",height:"250"},a("circle",{cx:"125",cy:"125",r:"80",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"50, 32"})),a("svg",{class:"fx fx2 center",width:"250",height:"250"},a("circle",{cx:"125",cy:"125",r:"88",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"50,59"})),a("svg",{class:"fx fx3 center",width:"250",height:"250"},a("circle",{cx:"125",cy:"125",r:"96",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"30,30"})),a("svg",{class:"fx fx4 center",width:"250",height:"250"},a("circle",{cx:"125",cy:"125",r:"106",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"70,60"})))),a("div",{class:"text ks-text-decorated"},a("div",{class:"top"},this.name),a("div",{class:"bottom"},this.price,a("button",{onClick:()=>this.Add(),disabled:i.get("loadingDeals"),class:i.get("loadingDeals")?"loading":""},i.get("loadingDeals")?a("ks-loader",{dark:!0,large:!0}):null,a("span",null,t.addToCart)))))}};o.style=".cart-deal{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:#ffffff;padding:0 30px;-webkit-box-sizing:border-box;box-sizing:border-box}.cart-deal ks-img3{width:100%;height:100%}.cart-deal .image{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:180px;height:180px;margin-right:20px;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.cart-deal .circle{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:145px;height:145px;padding:10px;border-radius:100%;background-color:white}.cart-deal .fx{position:absolute;width:250px;height:250px;max-width:initial;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.cart-deal .fx1{-webkit-animation-duration:50s;animation-duration:50s}.cart-deal .fx2{-webkit-animation-duration:40s;animation-duration:40s;animation-direction:reverse}.cart-deal .fx3{-webkit-animation-duration:40s;animation-duration:40s}.cart-deal .fx4{-webkit-animation-duration:50s;animation-duration:50s;animation-direction:reverse}@-webkit-keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}@keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}.cart-deal .center{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.cart-deal .text{font-size:16px;text-align:center}.cart-deal .top>a{display:block;color:#252525;text-decoration:none;margin-bottom:8px}.cart-deal .text>.bottom{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:34px;font-weight:700;font-family:var(--font-emphasis)}.cart-deal button{position:relative;margin-left:20px;padding:13px 30px 13px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;width:260px;background-color:#ff3838;color:white;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}.cart-deal button:not(.loading):hover{background-color:#e62c2c}.cart-deal button:not(.loading):active{background-color:#d41e1e;-webkit-transition:background-color 0.1s;transition:background-color 0.1s}.cart-deal button.loading{background-color:#d3d3d3}.cart-deal .variants{margin-bottom:10px}.cart-deal .variants label{display:inline-block;font-size:15px;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.cart-deal .variants ks-icon{-webkit-transform:translateX(-30px);transform:translateX(-30px);margin-right:-30px;pointer-events:none}.cart-deal select{display:inline-block;padding:8px 40px 10px 10px;height:36px;min-width:200px;font-size:15px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#ffffff;border:1px solid #d9d9d9;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}.cart-deal select::-ms-expand{display:none}.cart-deal select:hover{background-color:#e6e6e6}.cart-deal select:focus{outline:none}.cart-deal select option{font-weight:normal}@media only screen and (max-width: 760px){.cart-deal{display:block;padding:20px}.cart-deal .image{-webkit-transform:translateX(0px);transform:translateX(0px);margin:10px auto 30px auto}.cart-deal .variants{-ms-flex-pack:center;justify-content:center}.cart-deal select{max-width:220px;text-align:center;-moz-text-align-last:center;text-align-last:center}}@media only screen and (max-width: 460px){.cart-deal .text>.bottom{-ms-flex-direction:column;flex-direction:column;font-size:34px !important}.cart-deal button{margin:5px 0 0 0}}";const s=class{constructor(a){t(this,a),this.ikey=void 0,this.name=void 0,this.deals=void 0,this.currentDeal=void 0}componentWillLoad(){this.currentDeal=this.deals[0]}change(t){this.currentDeal=this.deals[t.selectedIndex]}Add(){r(this.currentDeal.id)}render(){const t=n.get("translations"),r=i.get("strings");return a(e,{class:"cart-deal"},a("a",{href:this.currentDeal.link},a("div",{class:"image"},a("div",{class:"circle center"},a("ks-img3",{height:125,width:125,image:this.currentDeal.img,alt:this.name,fit:"contain"})),a("svg",{class:"fx fx1 center",width:"250",height:"250"},a("circle",{cx:"125",cy:"125",r:"80",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"50, 32"})),a("svg",{class:"fx fx2 center",width:"250",height:"250"},a("circle",{cx:"125",cy:"125",r:"88",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"50,59"})),a("svg",{class:"fx fx3 center",width:"250",height:"250"},a("circle",{cx:"125",cy:"125",r:"96",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"30,30"})),a("svg",{class:"fx fx4 center",width:"250",height:"250"},a("circle",{cx:"125",cy:"125",r:"106",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"70,60"})))),a("div",{class:"text"},a("div",{class:"top"},a("span",null,this.name),a("div",{class:"variants"},a("label",null,r.selectColor),a("select",{onChange:t=>this.change(t.target)},this.deals.map((t=>a("option",null,t.name)))),a("ks-icon",{name:"chevron-down"}))),a("div",{class:"bottom"},this.currentDeal.price,a("button",{onClick:()=>this.Add(),disabled:i.get("loadingDeals"),class:i.get("loadingDeals")?"loading":""},i.get("loadingDeals")?a("ks-loader",{dark:!0,large:!0}):null,a("span",null,t.addToCart)))))}};s.style=".cart-deal{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:#ffffff;padding:0 30px;-webkit-box-sizing:border-box;box-sizing:border-box}.cart-deal ks-img3{width:100%;height:100%}.cart-deal .image{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:180px;height:180px;margin-right:20px;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.cart-deal .circle{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:145px;height:145px;padding:10px;border-radius:100%;background-color:white}.cart-deal .fx{position:absolute;width:250px;height:250px;max-width:initial;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.cart-deal .fx1{-webkit-animation-duration:50s;animation-duration:50s}.cart-deal .fx2{-webkit-animation-duration:40s;animation-duration:40s;animation-direction:reverse}.cart-deal .fx3{-webkit-animation-duration:40s;animation-duration:40s}.cart-deal .fx4{-webkit-animation-duration:50s;animation-duration:50s;animation-direction:reverse}@-webkit-keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}@keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}.cart-deal .center{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.cart-deal .text{font-size:16px;text-align:center}.cart-deal .top>a{display:block;color:#252525;text-decoration:none;margin-bottom:8px}.cart-deal .text>.bottom{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:34px;font-weight:700;font-family:var(--font-emphasis)}.cart-deal button{position:relative;margin-left:20px;padding:13px 30px 13px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;width:260px;background-color:#ff3838;color:white;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}.cart-deal button:not(.loading):hover{background-color:#e62c2c}.cart-deal button:not(.loading):active{background-color:#d41e1e;-webkit-transition:background-color 0.1s;transition:background-color 0.1s}.cart-deal button.loading{background-color:#d3d3d3}.cart-deal .variants{margin-bottom:10px}.cart-deal .variants label{display:inline-block;font-size:15px;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.cart-deal .variants ks-icon{-webkit-transform:translateX(-30px);transform:translateX(-30px);margin-right:-30px;pointer-events:none}.cart-deal select{display:inline-block;padding:8px 40px 10px 10px;height:36px;min-width:200px;font-size:15px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#ffffff;border:1px solid #d9d9d9;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}.cart-deal select::-ms-expand{display:none}.cart-deal select:hover{background-color:#e6e6e6}.cart-deal select:focus{outline:none}.cart-deal select option{font-weight:normal}@media only screen and (max-width: 760px){.cart-deal{display:block;padding:20px}.cart-deal .image{-webkit-transform:translateX(0px);transform:translateX(0px);margin:10px auto 30px auto}.cart-deal .variants{-ms-flex-pack:center;justify-content:center}.cart-deal select{max-width:220px;text-align:center;-moz-text-align-last:center;text-align-last:center}}@media only screen and (max-width: 460px){.cart-deal .text>.bottom{-ms-flex-direction:column;flex-direction:column;font-size:34px !important}.cart-deal button{margin:5px 0 0 0}}";export{o as ks_cart_deal,s as ks_cart_deal_group}