import{r as t,h as s}from"./index-ca9b706f.js";const o=class{constructor(s){t(this,s),this.price=void 0,this.parameters="",this.width=820,this.height=680}componentDidLoad(){this.CreditAgricoleButton=document.querySelector("ks-product-calculator-ca > *:first-child"),this.CreditAgricoleButton&&this.CreditAgricoleButton.addEventListener("click",(()=>{var t=this.width,s=this.height,o=(screen.availWidth-t)/2,i=(screen.availHeight-s)/2,r=this.price,e=this.parameters.split(";");window.open("https://ewniosek.credit-agricole.pl/eWniosek/simulator.jsp?PARAM_TYPE=RAT&PARAM_PROFILE="+e[0]+"&PARAM_CREDIT_AMOUNT="+r,"Policz_rate_LUKAS","height="+s+", width="+t+",top="+i+",left="+o+",directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no")}))}render(){return s("slot",null)}};export{o as ks_product_calculator_ca}