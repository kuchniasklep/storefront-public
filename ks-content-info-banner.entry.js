import{r as n,h as t,H as a}from"./index-1b90b4d2.js";const o="ks-content-info-banner{display:block;position:relative;max-height:100px;height:100%}ks-content-info-banner{display:block}ks-content-info-banner a{display:-ms-flexbox;display:flex;max-height:100px;height:100%;-ms-flex-pack:center;justify-content:center}";const r=class{constructor(t){n(this,t);this.content=undefined;this.productBanner=undefined}render(){var n;const o=(n=this.content)===null||n===void 0?void 0:n.theme;const r=o?`:root {\n      --navbar-color: ${o.navbarColor} !important;\n      --navbar-color-hover: ${o.navbarColorHover} !important;\n      --navbar-color-active: ${o.navbarColorActive} !important;\n      --navbar-category-color: ${o.categoryColor} !important;\n      --navbar-category-hover: ${o.categoryColorHover} !important;\n      --navbar-category-active: ${o.categoryColorActive} !important;\n      --navbar-category-backdrop: ${o.categoryColorBackdrop} !important;\n    }`:null;const e=this.productBanner?this.productBanner:this.content;return t(a,{style:{backgroundColor:e.color}},t("a",{href:e.link,"aria-label":e.name},t("ks-img3",{sync:true,fit:"contain",width:e.width,height:e.height,image:e.image,webp:e.webp,alt:e.name})),o?t("style",{innerHTML:r}):null)}};r.style=o;export{r as ks_content_info_banner};
//# sourceMappingURL=ks-content-info-banner.entry.js.map