import{r as t,h as i,c as s}from"./index-ca9b706f.js";const o=class{constructor(i){t(this,i),this.current=void 0,this.cart="Koszyk",this.shipping="Dane do wysłki",this.confirmation="Potwierdzenie",this.mobile=!1}componentDidLoad(){this.root.style.display="block",this.root.style.width="100%"}resizeHandler(){this.mobile=window.innerWidth<800}componentWillLoad(){this.resizeHandler()}StepStyle(t){const i={padding:this.mobile?"20px":"30px",backgroundColor:"#252525",color:"white",borderLeft:"1px solid #404040"},s=Object.assign(Object.assign({},i),{backgroundColor:"#404040",borderLeft:"1px solid #404040"});return this.mobile?i:t==this.current?s:i}render(){return[i("div",{class:"uk-text-center uk-flex uk-flex-evenly ks-text-decorated "+(this.mobile?"uk-child-width-1-1":"uk-child-width-1-3"),style:{fontSize:"16px",backgroundColor:"#252525"}},this.mobile&&0!=this.current?null:i("div",{style:this.StepStyle(0)},i("span",{"uk-icon":"icon: cart; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-3px)"}})," ",this.cart),this.mobile&&1!=this.current?null:i("div",{style:this.StepStyle(1)},i("span",{"uk-icon":"icon: user; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-2px)"}})," ",this.shipping),this.mobile&&2!=this.current?null:i("div",{style:this.StepStyle(2)},i("span",{"uk-icon":"icon: check; ratio: 1.2",style:{marginRight:"5px",transform:"translateY(-1px)"}})," ",this.confirmation))]}get root(){return s(this)}};export{o as ks_order_progress}