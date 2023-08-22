import{r as t,e as a,h as e,H as i}from"./index-ca9b706f.js";import{c as r}from"./cart-b9df7a0c.js";import{c as n}from"./common-bf11c818.js";import"./index-9843a78d.js";const o=class{constructor(e){t(this,e),this.addDeal=a(this,"addDeal",7),this.ikey=void 0,this.name=void 0,this.img=void 0,this.link=void 0,this.price=void 0,this.loading=!1}Add(){this.addDeal.emit(this.ikey)}render(){const t=n.get("translations");return e(i,{class:"cart-deal"},e("a",{href:this.link},e("div",{class:"image"},e("div",{class:"circle center"},e("ks-img3",{height:125,width:125,image:this.img,alt:this.name,fit:"contain"})),e("svg",{class:"fx fx1 center",width:"250",height:"250"},e("circle",{cx:"125",cy:"125",r:"80",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"50, 32"})),e("svg",{class:"fx fx2 center",width:"250",height:"250"},e("circle",{cx:"125",cy:"125",r:"88",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"50,59"})),e("svg",{class:"fx fx3 center",width:"250",height:"250"},e("circle",{cx:"125",cy:"125",r:"96",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"30,30"})),e("svg",{class:"fx fx4 center",width:"250",height:"250"},e("circle",{cx:"125",cy:"125",r:"106",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"70,60"})))),e("div",{class:"text ks-text-decorated"},e("div",{class:"top"},e("a",{href:this.link},this.name)),e("div",{class:"bottom"},this.price,e("button",{class:"ks-text-decorated small",onClick:()=>this.Add()},r.get("loadingDeals")?e("ks-loader",null):e("span",null,t.addToCart)))))}};o.style=".cart-deal{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:#ffffff;padding:0 30px;-webkit-box-sizing:border-box;box-sizing:border-box}.cart-deal ks-img3{width:100%;height:100%}.cart-deal .image{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:180px;height:180px;margin-right:20px;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.cart-deal .circle{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:145px;height:145px;padding:10px;border-radius:100%;background-color:white}.cart-deal .fx{position:absolute;width:250px;height:250px;max-width:initial;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.cart-deal .fx1{-webkit-animation-duration:50s;animation-duration:50s}.cart-deal .fx2{-webkit-animation-duration:40s;animation-duration:40s;animation-direction:reverse}.cart-deal .fx3{-webkit-animation-duration:40s;animation-duration:40s}.cart-deal .fx4{-webkit-animation-duration:50s;animation-duration:50s;animation-direction:reverse}@-webkit-keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}@keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}.cart-deal .center{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.cart-deal .text{font-size:16px;text-align:center}.cart-deal .top>a{display:block;color:#252525;text-decoration:none;margin-bottom:8px}.cart-deal .text>.bottom{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:34px;font-weight:700;font-family:var(--font-emphasis)}.cart-deal button{margin-left:20px;padding:13px 30px 13px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;width:260px;background-color:#ff3838;color:white;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}.cart-deal button:hover{background-color:#e62c2c}.cart-deal button:active{background-color:#d41e1e;-webkit-transition:background-color 0.1s;transition:background-color 0.1s}.cart-deal .variants{margin-bottom:10px}.cart-deal .variants label{display:inline-block;font-size:15px;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.cart-deal .variants ks-icon{-webkit-transform:translateX(-30px);transform:translateX(-30px);margin-right:-30px;pointer-events:none}.cart-deal select{display:inline-block;padding:8px 40px 10px 10px;height:36px;min-width:200px;font-size:15px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#ffffff;border:1px solid #d9d9d9;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}.cart-deal select::-ms-expand{display:none}.cart-deal select:hover{background-color:#e6e6e6}.cart-deal select:focus{outline:none}.cart-deal select option{font-weight:normal}@media only screen and (max-width: 760px){.cart-deal{display:block;padding:20px}.cart-deal .image{-webkit-transform:translateX(0px);transform:translateX(0px);margin:10px auto 30px auto}.cart-deal .variants{-ms-flex-pack:center;justify-content:center}.cart-deal select{max-width:220px;text-align:center;-moz-text-align-last:center;text-align-last:center}}@media only screen and (max-width: 460px){.cart-deal .text>.bottom{-ms-flex-direction:column;flex-direction:column;font-size:34px !important}.cart-deal button{margin:5px 0 0 0}}";const s=class{constructor(e){t(this,e),this.addDeal=a(this,"addDeal",7),this.ikey=void 0,this.name=void 0,this.deals=void 0,this.currentDeal=void 0}componentWillLoad(){this.currentDeal=this.deals[0]}change(t){this.currentDeal=this.deals[t.selectedIndex]}Add(){this.addDeal.emit(this.currentDeal.id)}render(){const t=n.get("translations"),a=r.get("strings");return e(i,{class:"cart-deal"},e("a",{href:this.currentDeal.link},e("div",{class:"image"},e("div",{class:"circle center"},e("ks-img3",{height:125,width:125,image:this.currentDeal.img,alt:this.name,fit:"contain"})),e("svg",{class:"fx fx1 center",width:"250",height:"250"},e("circle",{cx:"125",cy:"125",r:"80",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"50, 32"})),e("svg",{class:"fx fx2 center",width:"250",height:"250"},e("circle",{cx:"125",cy:"125",r:"88",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"50,59"})),e("svg",{class:"fx fx3 center",width:"250",height:"250"},e("circle",{cx:"125",cy:"125",r:"96",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"30,30"})),e("svg",{class:"fx fx4 center",width:"250",height:"250"},e("circle",{cx:"125",cy:"125",r:"106",fill:"transparent",stroke:"#252525","stroke-width":"3","stroke-dasharray":"70,60"})))),e("div",{class:"text"},e("div",{class:"top"},e("a",{href:this.currentDeal.link},this.name),e("div",{class:"variants"},e("label",null,a.selectColor),e("select",{onChange:t=>this.change(t.target)},this.deals.map((t=>e("option",null,t.name)))),e("ks-icon",{name:"chevron-down"}))),e("div",{class:"bottom"},this.currentDeal.price,e("button",{onClick:()=>this.Add()},r.get("loadingDeals")?e("ks-loader",null):e("span",null,t.addToCart)))))}};s.style=".cart-deal{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:#ffffff;padding:0 30px;-webkit-box-sizing:border-box;box-sizing:border-box}.cart-deal ks-img3{width:100%;height:100%}.cart-deal .image{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:180px;height:180px;margin-right:20px;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.cart-deal .circle{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:145px;height:145px;padding:10px;border-radius:100%;background-color:white}.cart-deal .fx{position:absolute;width:250px;height:250px;max-width:initial;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}.cart-deal .fx1{-webkit-animation-duration:50s;animation-duration:50s}.cart-deal .fx2{-webkit-animation-duration:40s;animation-duration:40s;animation-direction:reverse}.cart-deal .fx3{-webkit-animation-duration:40s;animation-duration:40s}.cart-deal .fx4{-webkit-animation-duration:50s;animation-duration:50s;animation-direction:reverse}@-webkit-keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}@keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}.cart-deal .center{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.cart-deal .text{font-size:16px;text-align:center}.cart-deal .top>a{display:block;color:#252525;text-decoration:none;margin-bottom:8px}.cart-deal .text>.bottom{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:34px;font-weight:700;font-family:var(--font-emphasis)}.cart-deal button{margin-left:20px;padding:13px 30px 13px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;width:260px;background-color:#ff3838;color:white;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}.cart-deal button:hover{background-color:#e62c2c}.cart-deal button:active{background-color:#d41e1e;-webkit-transition:background-color 0.1s;transition:background-color 0.1s}.cart-deal .variants{margin-bottom:10px}.cart-deal .variants label{display:inline-block;font-size:15px;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.cart-deal .variants ks-icon{-webkit-transform:translateX(-30px);transform:translateX(-30px);margin-right:-30px;pointer-events:none}.cart-deal select{display:inline-block;padding:8px 40px 10px 10px;height:36px;min-width:200px;font-size:15px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#ffffff;border:1px solid #d9d9d9;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}.cart-deal select::-ms-expand{display:none}.cart-deal select:hover{background-color:#e6e6e6}.cart-deal select:focus{outline:none}.cart-deal select option{font-weight:normal}@media only screen and (max-width: 760px){.cart-deal{display:block;padding:20px}.cart-deal .image{-webkit-transform:translateX(0px);transform:translateX(0px);margin:10px auto 30px auto}.cart-deal .variants{-ms-flex-pack:center;justify-content:center}.cart-deal select{max-width:220px;text-align:center;-moz-text-align-last:center;text-align-last:center}}@media only screen and (max-width: 460px){.cart-deal .text>.bottom{-ms-flex-direction:column;flex-direction:column;font-size:34px !important}.cart-deal button{margin:5px 0 0 0}}";export{o as ks_cart_deal,s as ks_cart_deal_group}