import{r as t,h as s,c as i}from"./index-ca9b706f.js";import{c as o}from"./common-bf11c818.js";import"./index-9843a78d.js";const n=class{constructor(s){t(this,s),this.name=void 0,this.action=void 0,this.method=void 0}render(){const t=o.get("translations");return s("form",{action:this.action,method:this.method,enctype:"multipart/form-data",onSubmit:t=>this.Submit(t)},s("slot",null),s("input",{class:"uk-button uk-button-danger uk-width-1-1 uk-margin-medium-top",style:{padding:"8px 40px"},type:"submit",value:t.inputSubmitForm,formnovalidate:!0}))}async Submit(t){t.preventDefault();const s=this.root.querySelector("form"),i=s.querySelectorAll("ks-input-text, ks-input-textarea, ks-input-check, ks-input-number, ks-input-date, ks-input-select");let o=!0;for(let n=0;n<i.length;n++){const t=i[n];await t.Validate(),await t.IsValid()||(o=!1)}o&&s.submit()}get root(){return i(this)}};export{n as ks_form}