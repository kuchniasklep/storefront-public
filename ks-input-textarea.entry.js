import{r as t,h as r,c as o}from"./index-ca9b706f.js";import{c as i}from"./common-bf11c818.js";import"./index-9843a78d.js";const e=class{constructor(r){t(this,r),this.name=void 0,this.placeholder=void 0,this.label=void 0,this.rows=void 0,this.min=void 0,this.max=void 0,this.required=void 0,this.noresize=void 0,this.invalid=!1,this.invalidMessage=""}render(){return[this.label?r("label",null,this.label):null,r("textarea",{rows:this.rows,name:this.name,placeholder:this.placeholder,onChange:()=>this.Validate()}),this.invalid?r("p",null,this.invalidMessage):null]}async IsValid(){return!this.invalid}async Validate(){const t=i.get("translations"),r=this.root.querySelector("textarea");let o=!0,e=[];return r.value.length<this.min&&(o=!1,e.push(t.inputMinCharacters.replace("{count}",this.min.toString()))),r.value.length>this.max&&(o=!1,e.push(t.inputMaxCharacters.replace("{count}",this.max.toString()))),this.required&&0==r.value.length&&(o=!1,e=[t.inputFieldRequired]),this.invalid=!o,this.invalidMessage=e.join(" "),Promise.resolve()}get root(){return o(this)}};e.style="ks-input-textarea{display:block;margin-bottom:15px}ks-input-textarea label{display:block;margin-bottom:3px;color:#000000;font-size:14px}ks-input-textarea[invalid] label{color:var(--color-secondary-darker)}ks-input-textarea textarea{vertical-align:top;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;width:100%;padding:4px 10px;border:1px solid #e5e5e5;border-radius:0;background:#f4f4f4;color:#373737;font:inherit}ks-input-textarea textarea:focus{outline:none;background-color:#f4f4f4;color:#373737;border-color:#222222}ks-input-textarea[invalid] textarea{border-color:var(--color-secondary-darker);color:var(--color-secondary-darker)}ks-input-textarea[invalid] p{margin-top:5px;color:var(--color-secondary-darker)}ks-input-textarea[noresize] textarea{resize:none}";export{e as ks_input_textarea}