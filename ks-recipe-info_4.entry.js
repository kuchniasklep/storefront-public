import{r as e,h as i,g as n}from"./index-e340c957.js";let t=class{constructor(i){e(this,i),this.cuisineLink="",this.categoryLink=""}render(){return[i("div",{class:"info"},i("div",{class:"title"},i("div",{class:"heading"},i("slot",{name:"heading"}),i("div",{class:"categories"},this.link(this.cuisine,this.cuisineLink),"•",this.link(this.category,this.categoryLink))),i("div",null,i("div",{class:"time"},i("ks-icon",{name:"clock"}),this.time),i("div",{class:"yield"},i("ks-icon",{name:"users"}),this.yield))),i("div",{class:"summary"},i("slot",{name:"summary"})),i("div",{class:"nutrition"},i("slot",{name:"nutrition"}))),i("div",{class:"image"},i("ks-img2",{vertical:!0,src:this.image}))]}link(e,n){return n?i("a",{href:n},e):i("span",null,e)}};t.style="ks-recipe-info{display:-ms-flexbox;display:flex;width:100%}ks-recipe-info>*{width:100%}ks-recipe-info .info{-webkit-box-sizing:border-box;box-sizing:border-box;padding:30px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ks-recipe-info .title{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}ks-recipe-info .heading>h1{font-family:var(--font-emphasis);font-weight:700;font-size:24px;margin-bottom:10px}ks-recipe-info .categories{color:#9b9b9b;font-size:16px}ks-recipe-info .categories>a{color:#9b9b9b;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;text-decoration:none}ks-recipe-info .categories>a:hover{color:#555555}ks-recipe-info .categories>*:first-child{margin-right:8px}ks-recipe-info .categories>*:last-child{margin-left:8px}ks-recipe-info .time{color:var(--color-secondary);text-align:right;font-family:var(--font-emphasis);font-weight:700;font-size:23px}ks-recipe-info .time ks-icon{margin-right:10px}ks-recipe-info .yield ks-icon{margin-right:8px;margin-top:-2px}ks-recipe-info .yield{color:#9b9b9b;text-align:right;font-family:var(--font-emphasis);font-size:18px;margin-top:-2px}ks-recipe-info .summary{margin-top:25px;font-size:15px;text-align:justify}ks-recipe-info .nutrition{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end;margin-top:20px}ks-recipe-info .image{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;background-color:#F5F5F5;overflow:hidden;max-height:400px;height:400px}@media only screen and (min-width: 960px){ks-recipe-info .info{width:600px;min-width:600px;border-bottom:1px solid #f5f5f5}}@media only screen and (max-width: 959px){ks-recipe-info{display:block}ks-recipe-info .nutrition{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}ks-recipe-info .nutrition>*{margin:0 3px 6px 3px}ks-recipe-info .image{height:500px}}@media only screen and (max-width: 520px){ks-recipe-info .title{display:block;text-align:center}ks-recipe-info .time,ks-recipe-info .yield{display:inline-block;color:#9b9b9b;text-align:right;font-family:var(--font-emphasis);font-weight:400;font-size:18px}ks-recipe-info .time{margin-right:10px}ks-recipe-info .time ks-icon,ks-recipe-info .yield ks-icon{margin-right:10px}ks-recipe-info .image{height:100vw}}@media only screen and (max-width: 520px){ks-recipe-info .info{padding:20px}}";let r=class{constructor(i){e(this,i),this.id=0,this.checked=!1}componentWillRender(){this.id=Array.from(this.root.parentNode.children).indexOf(this.root),this.regex=new RegExp(`(?:(?:^|.*;\\s*)ingredient${this.id}\\s*\\=\\s*([^;]*).*$)|^.*$`),this.checked=this.getCookie()}getCookie(){return"true"==document.cookie.replace(this.regex,"$1")}setCookie(){document.cookie=`ingredient${this.id}=true; max-age=2592000; path=${window.location.pathname}; samesite=strict`}removeCookie(){document.cookie=`ingredient${this.id}=; path=${window.location.pathname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`}click(e){e.target.checked?this.setCookie():this.removeCookie()}render(){return[i("label",null,i("input",{type:"checkbox",checked:this.checked,onClick:e=>this.click(e)}),i("span",{class:"checkmark"})),i("div",{class:"name"},this.name),i("div",{class:"underline"}),i("div",{class:"amount"},this.amount)]}get root(){return n(this)}};r.style='ks-recipe-ingredient{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:baseline;align-items:baseline;margin-bottom:5px}ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:18px}ks-recipe-ingredient .underline{margin:0 20px;-ms-flex:1;flex:1;border-bottom:solid 1px #dbdbdb}ks-recipe-ingredient label{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;display:block;position:relative;padding-left:35px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ks-recipe-ingredient input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}ks-recipe-ingredient .checkmark{position:absolute;bottom:-11px;left:0;height:22px;width:22px;border:2px solid #252525;-webkit-box-sizing:border-box;box-sizing:border-box}ks-recipe-ingredient label:hover input~.checkmark{background-color:#ccc}ks-recipe-ingredient .checkmark:after{content:"";position:absolute;display:none}ks-recipe-ingredient label input:checked~.checkmark:after{display:block}ks-recipe-ingredient label .checkmark:after{left:6px;top:3px;width:4px;height:9px;border:solid #252525;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}@media only screen and (max-width: 520px){ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:16px}ks-recipe-ingredient label{padding-left:28px}}@media only screen and (max-width: 360px){ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:16px}ks-recipe-ingredient label{padding-left:28px}ks-recipe-ingredient .underline{margin:0;-ms-flex:1;flex:1;border-bottom:none}}';let s=class{constructor(i){e(this,i)}render(){return[i("div",null,this.type),i("div",null,this.value)]}};s.style="ks-recipe-nutrition{display:block;text-align:center;color:#FFFFFF}ks-recipe-nutrition>div:first-child{font-family:var(--font-regular);font-size:13px;background-color:#353535;padding:8px 10px}ks-recipe-nutrition>div:last-child{font-family:var(--font-emphasis);font-size:18px;background-color:#252525;padding:3px 10px}";let o=class{constructor(i){e(this,i)}render(){return[i("div",{class:"ingredients"},i("slot",{name:"ingredients"})),i("div",{class:"preparation"},i("slot",{name:"preparation"}))]}};o.style="ks-recipe-procedure{display:-ms-flexbox;display:flex}ks-recipe-procedure>div{width:50%;padding:30px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-recipe-procedure .ingredients{background-color:#F5F5F5}ks-recipe-procedure .preparation{font-size:15px}ks-recipe-procedure .preparation h2{font-family:var(--font-emphasis);font-weight:700;font-size:22px}@media only screen and (max-width: 960px){ks-recipe-procedure{display:block}ks-recipe-procedure>div{width:100%}}@media only screen and (max-width: 520px){ks-recipe-procedure>div{padding:20px}}";export{t as ks_recipe_info,r as ks_recipe_ingredient,s as ks_recipe_nutrition,o as ks_recipe_procedure}