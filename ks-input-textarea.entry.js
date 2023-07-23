import{r as t,h as e,g as r}from"./index-1b90b4d2.js";import{c as i}from"./common-46fdf31d.js";import"./index-33fbe4a7.js";const o="ks-input-textarea{display:block;margin-bottom:15px}ks-input-textarea label{display:block;margin-bottom:3px;color:#000000;font-size:14px}ks-input-textarea[invalid] label{color:var(--color-secondary-darker)}ks-input-textarea textarea{vertical-align:top;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;width:100%;padding:4px 10px;border:1px solid #e5e5e5;border-radius:0;background:#f4f4f4;color:#373737;font:inherit}ks-input-textarea textarea:focus{outline:none;background-color:#f4f4f4;color:#373737;border-color:#222222}ks-input-textarea[invalid] textarea{border-color:var(--color-secondary-darker);color:var(--color-secondary-darker)}ks-input-textarea[invalid] p{margin-top:5px;color:var(--color-secondary-darker)}ks-input-textarea[noresize] textarea{resize:none}";const a=class{constructor(e){t(this,e);this.name=undefined;this.placeholder=undefined;this.label=undefined;this.rows=undefined;this.min=undefined;this.max=undefined;this.required=undefined;this.noresize=undefined;this.invalid=false;this.invalidMessage=""}render(){return[this.label?e("label",null,this.label):null,e("textarea",{rows:this.rows,name:this.name,placeholder:this.placeholder,onChange:()=>this.Validate()}),this.invalid?e("p",null,this.invalidMessage):null]}async IsValid(){return!this.invalid}async Validate(){const t=i.get("translations");const e=this.root.querySelector("textarea");let r=true;let o=[];if(e.value.length<this.min){r=false;o.push(t.inputMinCharacters.replace("{count}",this.min.toString()))}if(e.value.length>this.max){r=false;o.push(t.inputMaxCharacters.replace("{count}",this.max.toString()))}if(this.required&&e.value.length==0){r=false;o=[t.inputFieldRequired]}this.invalid=!r;this.invalidMessage=o.join(" ");return Promise.resolve()}get root(){return r(this)}};a.style=o;export{a as ks_input_textarea};
//# sourceMappingURL=ks-input-textarea.entry.js.map