import{r,h as e}from"./index-1b90b4d2.js";const o='ks-content-breadcrumbs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px 0}ks-content-breadcrumbs>*{position:relative;padding:2px 10px;background-color:var(--breadcrumb-color);margin:2px 4px 2px 5px;display:inline-block;height:22px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-content-breadcrumbs>*:before,ks-content-breadcrumbs>*:after{content:"";position:absolute;top:0;border:0 solid var(--breadcrumb-color);border-width:11px 5px;width:0;height:0;border-left-color:transparent;-webkit-transition:border-color 0.3s ease,\n                border-left-color 0.3s ease;transition:border-color 0.3s ease,\n                border-left-color 0.3s ease}ks-content-breadcrumbs>*:before{border-left-color:transparent;margin-left:-15px}ks-content-breadcrumbs>*:after{border-color:transparent;border-left-color:var(--breadcrumb-color);margin-left:10px}ks-content-breadcrumbs>*:first-child:before{border:none}ks-content-breadcrumbs>*:last-child:after{border:none}ks-content-breadcrumbs *{color:var(--breadcrumb-text-color) !important;text-decoration:none !important;line-height:19px}ks-content-breadcrumbs>*:hover{background-color:var(--breadcrumb-color-hover)}ks-content-breadcrumbs>*:hover:before{border-color:var(--breadcrumb-color-hover);border-left-color:transparent}ks-content-breadcrumbs>*:hover:after{border-color:transparent;border-left-color:var(--breadcrumb-color-hover)}';const t=class{constructor(e){r(this,e);this.items=undefined}render(){return this.items.map((r=>e("a",{href:r.link},r.name)))}};t.style=o;const n="ks-content-tags{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1200px;margin:auto}ks-content-tags>*{display:inline-block;padding:3px 10px;margin:2px;margin-bottom:3px;line-height:1.5;background:#222222;color:#ffffff !important;vertical-align:middle;white-space:nowrap;border-radius:2px;text-decoration:none !important}ks-content-tags[muted]>*{background-color:#555555}";const a=class{constructor(e){r(this,e);this.items=undefined;this.muted=false}render(){return this.items.map((r=>e("a",{href:r.link},r.name)))}};a.style=n;export{t as ks_content_breadcrumbs,a as ks_content_tags};
//# sourceMappingURL=ks-content-breadcrumbs_2.entry.js.map