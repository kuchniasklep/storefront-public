import{r as t,h as r,B as i,c as n}from"./index-ca9b706f.js";import{c as o}from"./_commonjsHelpers-ba3f0406.js";const e=class{constructor(r){t(this,r),this.name=void 0,this.active=!1}render(){return[r("div",{onClick:()=>this.active=!this.active},this.name,r("ks-icon",{name:this.active?"minus":"plus",size:.9})),r("div",{class:"filter-content"},r("slot",null))]}};e.style="ks-filter{display:block;margin-bottom:10px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-filter>div{font-family:var(--font-emphasis);font-size:1.1rem}ks-filter>div>ks-icon{float:right}ks-filter .filter-content{display:none;font-size:1rem;padding:10px 0}ks-filter[active] .filter-content{display:block;-webkit-animation:fade-in 0.3s ease 1;animation:fade-in 0.3s ease 1}";const a=class{constructor(r){t(this,r),this.name=void 0,this.value=void 0,this.text=void 0,this.active=!1}change(t){this.active=t.target.checked}render(){return[r("label",null,r("input",{name:this.name,value:this.active?this.value:"",type:"checkbox",checked:this.active,onChange:t=>this.change(t)}),r("span",{class:"checkmark"}),this.text)]}};a.style='ks-filter-checkbox{display:block;margin-bottom:8px;line-height:20px}ks-filter-checkbox label{display:block;position:relative;padding-left:35px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-filter-checkbox input{position:absolute;cursor:pointer;opacity:0;height:0;width:0}ks-filter-checkbox .checkmark{position:absolute;top:0;left:0;height:20px;width:20px;background-color:#eee}ks-filter-checkbox .checkmark:after{content:"✓";position:absolute;display:block;left:4px;color:white;opacity:0}ks-filter-checkbox input:checked~.checkmark{background-color:#252525}ks-filter-checkbox input:checked~.checkmark:after{opacity:1}';const s=[{name:"czarny",color:"#000000"},{name:"biały",color:"#f2f2f2"},{name:"platynowy",color:"#afafaf"},{name:"czerwony",color:"#E93731"},{name:"bordowy",color:"#750027"},{name:"brązowy",color:"#633526"},{name:"fioletowy",color:"#7D6098"},{name:"niebieski",color:"#0483e5"},{name:"pomarańczowy",color:"#ffa01c"},{name:"kremowy",color:"#ffddb7"},{name:"różowy",color:"#F8A8B9"},{name:"szary",color:"#757575"},{name:"miętowy",color:"#59CDA5"},{name:"zielony",color:"#97DB18"},{name:"żółty",color:"#fff547"},{name:"beżowy",color:"#B5977F"},{name:"srebrny",color:"#919191",material:"metal"},{name:"miedziany",color:"#c97450",material:"metal"},{name:"złoty",color:"#eda007",material:"metal"},{name:"przezroczysty",color:"#69c0e6",material:"metal"},{name:"przeźroczysty",color:"#69c0e6",material:"metal"},{name:"naturalny",color:"#dba685",material:"wood"},{name:"orzechowy",color:"#c97450",material:"wood"},{name:"wielokolorowy",color:"",material:"multicolor"},{name:"kolorowy",color:"",material:"multicolor"}],l=class{constructor(i){t(this,i),this.size=20,this.metal=[r("defs",null,r("linearGradient",{id:"Linear1",x1:"0",y1:"0",x2:"1",y2:"0",gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(8,8,-8,8,13,13)"},r("stop",{offset:"0",style:{stopColor:"white",stopOpacity:"0.4"}}),r("stop",{offset:"1",style:{stopColor:"white",stopOpacity:"0"}}))),r("g",{transform:"matrix(1.25,0,0,1.25,-6,-36)"},r("g",{transform:"matrix(1,0,0,1,0,24)"},r("path",{d:"M21,21L5,21L21,5L21,21Z",style:{fill:"url(#Linear1)"}})))],this.wood=[r("g",{transform:"matrix(0.6,0,0,0.6,-0,-0)"},r("circle",{cx:"28.634",cy:"28.483",r:"6.483",style:{fill:"none",stroke:"black",strokeOpacity:"0.20",strokeWidth:"3px"}}),r("g",{transform:"matrix(2.30024,0,0,2.30024,-37.2311,-37.0348)"},r("circle",{cx:"28.634",cy:"28.483",r:"6.483",style:{fill:"none",stroke:"black",strokeOpacity:"0.20",strokeWidth:"1.3px"}})),r("g",{transform:"matrix(3.70926,0,0,3.70926,-77.5769,-77.168)"},r("circle",{cx:"28.634",cy:"28.483",r:"6.483",style:{fill:"none",stroke:"black",strokeOpacity:"0.20",strokeWidth:"0.94px"}})),r("g",{transform:"matrix(5.16472,0,0,5.16472,-119.253,-118.624)"},r("circle",{cx:"28.634",cy:"28.483",r:"6.483",style:{fill:"none",stroke:"black",strokeOpacity:"0.20",strokeWidth:"0.77px"}})))],this.multicolor=[r("rect",{width:this.size/2,height:this.size/2,style:{fill:"#fe4a49"},transform:"translate(0 0)"}),r("rect",{width:this.size/2,height:this.size/2,style:{fill:"#2ab7ca"},transform:"translate("+this.size/2+" 0)"}),r("rect",{width:this.size/2,height:this.size/2,style:{fill:"#fed766"},transform:"translate(0 "+this.size/2+")"}),r("rect",{width:this.size/2,height:this.size/2,style:{fill:"#e6e6ea"},transform:"translate("+this.size/2+" "+this.size/2+")"})],this.name=void 0,this.value=void 0,this.color=void 0,this.active=!1}componentWillLoad(){let t=s.filter((t=>t.name.includes(this.color)));t.length>0&&(this.hex=t[0].color,this.material=t[0].material)}change(t){this.active=t.target.checked}render(){return r("label",null,r("svg",{width:this.size,height:this.size},r("rect",{width:this.size,height:this.size,style:{fill:this.hex}}),"metal"==this.material?this.metal:null,"wood"==this.material?this.wood:null,"multicolor"==this.material?this.multicolor:null),r("input",{name:this.name,value:this.active?this.value:"",type:"checkbox",checked:this.active,onChange:t=>this.change(t)}),r("span",{class:"checkmark"}),this.color)}};l.style='ks-filter-color{display:block;margin-bottom:8px;line-height:20px}ks-filter-color label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding-left:27px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-filter-color input{position:absolute;cursor:pointer;opacity:0;height:0;width:0}ks-filter-color .checkmark{position:absolute;top:2px;left:0;height:20px;width:20px;background-color:#eee}ks-filter-color .checkmark:after{content:"✓";position:absolute;display:block;left:4px;color:white;opacity:0}ks-filter-color input:checked~.checkmark{background-color:#252525}ks-filter-color input:checked~.checkmark:after{opacity:1}ks-filter-color svg{margin-right:8px;margin-top:2px}';var c=o((function(t){
/*! nouislider - 12.1.0 - 10/25/2018 */
t.exports=function(){var t="12.1.0";function r(t){return null!=t}function i(t){t.preventDefault()}function n(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function o(t,r,i){i>0&&(l(t,r),setTimeout((function(){c(t,r)}),i))}function e(t){return Math.max(Math.min(t,100),0)}function a(t){return Array.isArray(t)?t:[t]}function s(t){var r=(t=String(t)).split(".");return r.length>1?r[1].length:0}function l(t,r){t.classList?t.classList.add(r):t.className+=" "+r}function c(t,r){t.classList?t.classList.remove(r):t.className=t.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")}function u(t){var r=void 0!==window.pageXOffset,i="CSS1Compat"===(t.compatMode||"");return{x:r?window.pageXOffset:i?t.documentElement.scrollLeft:t.body.scrollLeft,y:r?window.pageYOffset:i?t.documentElement.scrollTop:t.body.scrollTop}}function f(t,r){return 100/(r-t)}function h(t,r){return 100*r/(t[1]-t[0])}function p(t,r){for(var i=1;t>=r[i];)i+=1;return i}function d(t,r,i){if(i>=t.slice(-1)[0])return 100;var n=p(i,t),o=r[n-1],e=r[n];return o+function(t,r){return h(t,t[0]<0?r+Math.abs(t[0]):r-t[0])}([t[n-1],t[n]],i)/f(o,e)}function m(t,r,i,n){if(100===n)return n;var o=p(n,t),e=t[o-1],a=t[o];return i?n-e>(a-e)/2?a:e:r[o-1]?t[o-1]+function(t,r){return Math.round(t/r)*r}(n-t[o-1],r[o-1]):n}function b(t,r,i){var o;if("number"==typeof r&&(r=[r]),!Array.isArray(r))throw new Error("noUiSlider (12.1.0): 'range' contains invalid value.");if(!n(o="min"===t?0:"max"===t?100:parseFloat(t))||!n(r[0]))throw new Error("noUiSlider (12.1.0): 'range' value isn't numeric.");i.xPct.push(o),i.xVal.push(r[0]),o?i.xSteps.push(!isNaN(r[1])&&r[1]):isNaN(r[1])||(i.xSteps[0]=r[1]),i.xHighestCompleteStep.push(0)}function v(t,r,i){if(!r)return!0;i.xSteps[t]=h([i.xVal[t],i.xVal[t+1]],r)/f(i.xPct[t],i.xPct[t+1]);var n=Math.ceil(Number(((i.xVal[t+1]-i.xVal[t])/i.xNumSteps[t]).toFixed(3))-1);i.xHighestCompleteStep[t]=i.xVal[t]+i.xNumSteps[t]*n}function g(t,r,i){var n;this.xPct=[],this.xVal=[],this.xSteps=[i||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=r;var o=[];for(n in t)t.hasOwnProperty(n)&&o.push([t[n],n]);for(o.sort(o.length&&"object"==typeof o[0][0]?function(t,r){return t[0][0]-r[0][0]}:function(t,r){return t[0]-r[0]}),n=0;n<o.length;n++)b(o[n][1],o[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)v(n,this.xNumSteps[n],this)}g.prototype.getMargin=function(t){var r=this.xNumSteps[0];if(r&&t/r%1!=0)throw new Error("noUiSlider (12.1.0): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&h(this.xVal,t)},g.prototype.toStepping=function(t){return d(this.xVal,this.xPct,t)},g.prototype.fromStepping=function(t){return function(t,r,i){if(i>=100)return t.slice(-1)[0];var n=p(i,r),o=r[n-1];return function(t,r){return r*(t[1]-t[0])/100+t[0]}([t[n-1],t[n]],(i-o)*f(o,r[n]))}(this.xVal,this.xPct,t)},g.prototype.getStep=function(t){return m(this.xPct,this.xSteps,this.snap,t)},g.prototype.getNearbySteps=function(t){var r=p(t,this.xPct);return{stepBefore:{startValue:this.xVal[r-2],step:this.xNumSteps[r-2],highestStep:this.xHighestCompleteStep[r-2]},thisStep:{startValue:this.xVal[r-1],step:this.xNumSteps[r-1],highestStep:this.xHighestCompleteStep[r-1]},stepAfter:{startValue:this.xVal[r],step:this.xNumSteps[r],highestStep:this.xHighestCompleteStep[r]}}},g.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(s);return Math.max.apply(null,t)},g.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var w={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function x(t){if(function(t){return"object"==typeof t&&"function"==typeof t.to&&"function"==typeof t.from}(t))return!0;throw new Error("noUiSlider (12.1.0): 'format' requires 'to' and 'from' methods.")}function k(t,r){if(!n(r))throw new Error("noUiSlider (12.1.0): 'step' is not numeric.");t.singleStep=r}function U(t,r){if("object"!=typeof r||Array.isArray(r))throw new Error("noUiSlider (12.1.0): 'range' is not an object.");if(void 0===r.min||void 0===r.max)throw new Error("noUiSlider (12.1.0): Missing 'min' or 'max' in 'range'.");if(r.min===r.max)throw new Error("noUiSlider (12.1.0): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new g(r,t.snap,t.singleStep)}function y(t,r){if(r=a(r),!Array.isArray(r)||!r.length)throw new Error("noUiSlider (12.1.0): 'start' option is incorrect.");t.handles=r.length,t.start=r}function z(t,r){if(t.snap=r,"boolean"!=typeof r)throw new Error("noUiSlider (12.1.0): 'snap' option must be a boolean.")}function S(t,r){if(t.animate=r,"boolean"!=typeof r)throw new Error("noUiSlider (12.1.0): 'animate' option must be a boolean.")}function E(t,r){if(t.animationDuration=r,"number"!=typeof r)throw new Error("noUiSlider (12.1.0): 'animationDuration' option must be a number.")}function F(t,r){var i,n=[!1];if("lower"===r?r=[!0,!1]:"upper"===r&&(r=[!1,!0]),!0===r||!1===r){for(i=1;i<t.handles;i++)n.push(r);n.push(!1)}else{if(!Array.isArray(r)||!r.length||r.length!==t.handles+1)throw new Error("noUiSlider (12.1.0): 'connect' option doesn't match handle count.");n=r}t.connect=n}function B(t,r){switch(r){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider (12.1.0): 'orientation' option is invalid.")}}function M(t,r){if(!n(r))throw new Error("noUiSlider (12.1.0): 'margin' option must be numeric.");if(0!==r&&(t.margin=t.spectrum.getMargin(r),!t.margin))throw new Error("noUiSlider (12.1.0): 'margin' option is only supported on linear sliders.")}function A(t,r){if(!n(r))throw new Error("noUiSlider (12.1.0): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(r),!t.limit||t.handles<2)throw new Error("noUiSlider (12.1.0): 'limit' option is only supported on linear sliders with 2 or more handles.")}function D(t,r){if(!n(r)&&!Array.isArray(r))throw new Error("noUiSlider (12.1.0): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(r)&&2!==r.length&&!n(r[0])&&!n(r[1]))throw new Error("noUiSlider (12.1.0): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==r){if(Array.isArray(r)||(r=[r,r]),t.padding=[t.spectrum.getMargin(r[0]),t.spectrum.getMargin(r[1])],!1===t.padding[0]||!1===t.padding[1])throw new Error("noUiSlider (12.1.0): 'padding' option is only supported on linear sliders.");if(t.padding[0]<0||t.padding[1]<0)throw new Error("noUiSlider (12.1.0): 'padding' option must be a positive number(s).");if(t.padding[0]+t.padding[1]>=100)throw new Error("noUiSlider (12.1.0): 'padding' option must not exceed 100% of the range.")}}function N(t,r){switch(r){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider (12.1.0): 'direction' option was not recognized.")}}function C(t,r){if("string"!=typeof r)throw new Error("noUiSlider (12.1.0): 'behaviour' must be a string containing options.");var i=r.indexOf("tap")>=0,n=r.indexOf("drag")>=0,o=r.indexOf("fixed")>=0,e=r.indexOf("snap")>=0,a=r.indexOf("hover")>=0,s=r.indexOf("unconstrained")>=0;if(o){if(2!==t.handles)throw new Error("noUiSlider (12.1.0): 'fixed' behaviour must be used with 2 handles");M(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider (12.1.0): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:i||e,drag:n,fixed:o,snap:e,hover:a,unconstrained:s}}function j(t,r){if(!1!==r)if(!0===r){t.tooltips=[];for(var i=0;i<t.handles;i++)t.tooltips.push(!0)}else{if(t.tooltips=a(r),t.tooltips.length!==t.handles)throw new Error("noUiSlider (12.1.0): must pass a formatter for all handles.");t.tooltips.forEach((function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider (12.1.0): 'tooltips' must be passed a formatter or 'false'.")}))}}function O(t,r){t.ariaFormat=r,x(r)}function L(t,r){t.format=r,x(r)}function _(t,r){if(t.keyboardSupport=r,"boolean"!=typeof r)throw new Error("noUiSlider (12.1.0): 'keyboardSupport' option must be a boolean.")}function H(t,r){t.documentElement=r}function P(t,r){if("string"!=typeof r&&!1!==r)throw new Error("noUiSlider (12.1.0): 'cssPrefix' must be a string or `false`.");t.cssPrefix=r}function W(t,r){if("object"!=typeof r)throw new Error("noUiSlider (12.1.0): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var i in t.cssClasses={},r)r.hasOwnProperty(i)&&(t.cssClasses[i]=t.cssPrefix+r[i]);else t.cssClasses=r}function V(t){var i={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:w,format:w},n={step:{r:!1,t:k},start:{r:!0,t:y},connect:{r:!0,t:F},direction:{r:!0,t:N},snap:{r:!1,t:z},animate:{r:!1,t:S},animationDuration:{r:!1,t:E},range:{r:!0,t:U},orientation:{r:!1,t:B},margin:{r:!1,t:M},limit:{r:!1,t:A},padding:{r:!1,t:D},behaviour:{r:!0,t:C},ariaFormat:{r:!1,t:O},format:{r:!1,t:L},tooltips:{r:!1,t:j},keyboardSupport:{r:!0,t:_},documentElement:{r:!1,t:H},cssPrefix:{r:!0,t:P},cssClasses:{r:!0,t:W}},o={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach((function(e){if(!r(t[e])&&void 0===o[e]){if(n[e].r)throw new Error("noUiSlider (12.1.0): '"+e+"' is required.");return!0}n[e].t(i,r(t[e])?t[e]:o[e])})),i.pips=t.pips;var e=document.createElement("div");return i.transformRule=void 0!==e.style.transform?"transform":void 0!==e.style.msTransform?"msTransform":"webkitTransform",i.style=[["left","top"],["right","bottom"]][i.dir][i.ort],i}function q(t,r,n){var s,f,h,p,d,m,b,v,g=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},w=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var r=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,r)}catch(i){}return t}(),x=t,k=[],U=[],y=0,z=r.spectrum,S=[],E={},F=t.ownerDocument,B=r.documentElement||F.documentElement,M=F.body,A="rtl"===F.dir||1===r.ort?0:100;function D(t,r){var i=F.createElement("div");return r&&l(i,r),t.appendChild(i),i}function N(t,i){var n=D(t,r.cssClasses.origin),o=D(n,r.cssClasses.handle);return o.setAttribute("data-handle",i),r.keyboardSupport&&o.setAttribute("tabindex","0"),o.setAttribute("role","slider"),o.setAttribute("aria-orientation",r.ort?"vertical":"horizontal"),0===i?l(o,r.cssClasses.handleLower):i===r.handles-1&&l(o,r.cssClasses.handleUpper),n}function C(t,i){return!!i&&D(t,r.cssClasses.connect)}function j(t,i){return!!r.tooltips[i]&&D(t.firstChild,r.cssClasses.tooltip)}function O(t,i,n){var o=F.createElement("div"),e=[];e[0]=r.cssClasses.valueNormal,e[1]=r.cssClasses.valueLarge,e[2]=r.cssClasses.valueSub;var a=[];a[0]=r.cssClasses.markerNormal,a[1]=r.cssClasses.markerLarge,a[2]=r.cssClasses.markerSub;var s=[r.cssClasses.valueHorizontal,r.cssClasses.valueVertical],c=[r.cssClasses.markerHorizontal,r.cssClasses.markerVertical];function u(t,i){var n=i===r.cssClasses.value;return i+" "+(n?s:c)[r.ort]+" "+(n?e:a)[t]}return l(o,r.cssClasses.pips),l(o,0===r.ort?r.cssClasses.pipsHorizontal:r.cssClasses.pipsVertical),Object.keys(t).forEach((function(e){!function(t,e,a){if(-1!==(a=i?i(e,a):a)){var s=D(o,!1);s.className=u(a,r.cssClasses.marker),s.style[r.style]=t+"%",a>0&&((s=D(o,!1)).className=u(a,r.cssClasses.value),s.setAttribute("data-value",e),s.style[r.style]=t+"%",s.innerHTML=n.to(e))}}(e,t[e][0],t[e][1])})),o}function L(){var t;d&&((t=d).parentElement.removeChild(t),d=null)}function _(t){L();var r=t.mode,i=t.filter||!1,n=function(t,r,i){var n,o={},e=z.xVal[0],a=z.xVal[z.xVal.length-1],s=!1,l=!1,c=0;return(n=i.slice().sort((function(t,r){return t-r})),i=n.filter((function(t){return!this[t]&&(this[t]=!0)}),{}))[0]!==e&&(i.unshift(e),s=!0),i[i.length-1]!==a&&(i.push(a),l=!0),i.forEach((function(n,e){var a,u,f,h,p,d,m,b,v,g=n,w=i[e+1],x="steps"===r;if(x&&(a=z.xNumSteps[e]),a||(a=w-g),!1!==g&&void 0!==w)for(a=Math.max(a,1e-7),u=g;u<=w;u=(u+a).toFixed(7)/1){for(v=(p=(h=z.toStepping(u))-c)/(b=Math.round(p/t)),f=1;f<=b;f+=1)o[(d=c+f*v).toFixed(5)]=[z.fromStepping(d),0];m=i.indexOf(u)>-1?1:x?2:0,!e&&s&&(m=0),u===w&&l||(o[h.toFixed(5)]=[u,m]),c=h}})),o}(t.density||1,r,function(t,r,i){if("range"===t||"steps"===t)return z.xVal;if("count"===t){if(r<2)throw new Error("noUiSlider (12.1.0): 'values' (>= 2) required for mode 'count'.");var n=r-1,o=100/n;for(r=[];n--;)r[n]=n*o;r.push(100),t="positions"}return"positions"===t?r.map((function(t){return z.fromStepping(i?z.getStep(t):t)})):"values"===t?i?r.map((function(t){return z.fromStepping(z.getStep(z.toStepping(t)))})):r:void 0}(r,t.values||!1,t.stepped||!1)),o=t.format||{to:Math.round};return d=x.appendChild(O(n,i,o))}function H(){var t=s.getBoundingClientRect(),i="offset"+["Width","Height"][r.ort];return 0===r.ort?t.width||s[i]:t.height||s[i]}function P(t,i,n,o){var e=function(e){return!!(e=function(t,r,i){var n,o,e=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");if(0===t.type.indexOf("MSPointer")&&(s=!0),e){var l=function(t){return t.target===i||i.contains(t.target)};if("touchstart"===t.type){var c=Array.prototype.filter.call(t.touches,l);if(c.length>1)return!1;n=c[0].pageX,o=c[0].pageY}else{var f=Array.prototype.find.call(t.changedTouches,l);if(!f)return!1;n=f.pageX,o=f.pageY}}return r=r||u(F),(a||s)&&(n=t.clientX+r.x,o=t.clientY+r.y),t.pageOffset=r,t.points=[n,o],t.cursor=a||s,t}(e,o.pageOffset,o.target||i))&&!(x.hasAttribute("disabled")&&!o.doNotReject)&&(s=r.cssClasses.tap,!(((a=x).classList?a.classList.contains(s):new RegExp("\\b"+s+"\\b").test(a.className))&&!o.doNotReject))&&!(t===g.start&&void 0!==e.buttons&&e.buttons>1)&&(!o.hover||!e.buttons)&&(w||e.preventDefault(),e.calcPoint=e.points[r.ort],void n(e,o));var a,s},a=[];return t.split(" ").forEach((function(t){i.addEventListener(t,e,!!w&&{passive:!0}),a.push([t,e])})),a}function W(t){var i,n,o,a,l,c,f=100*(t-(n=r.ort,o=(i=s).getBoundingClientRect(),l=(a=i.ownerDocument).documentElement,c=u(a),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(c.x=0),n?o.top+c.y-l.clientTop:o.left+c.x-l.clientLeft))/H();return f=e(f),r.dir?100-f:f}function q(t,r){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&R(t,r)}function T(t,i){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==i.buttonsProperty)return R(t,i);var n=(r.dir?-1:1)*(t.calcPoint-i.startCalcPoint);Y(n>0,100*n/i.baseSize,i.locations,i.handleNumbers)}function R(t,n){n.handle&&(c(n.handle,r.cssClasses.active),y-=1),n.listeners.forEach((function(t){B.removeEventListener(t[0],t[1])})),0===y&&(c(x,r.cssClasses.drag),rt(),t.cursor&&(M.style.cursor="",M.removeEventListener("selectstart",i))),n.handleNumbers.forEach((function(t){J("change",t),J("set",t),J("end",t)}))}function I(t,n){var o;if(1===n.handleNumbers.length){var e=f[n.handleNumbers[0]];if(e.hasAttribute("disabled"))return!1;y+=1,l(o=e.children[0],r.cssClasses.active)}t.stopPropagation();var a=[],s=P(g.move,B,T,{target:t.target,handle:o,listeners:a,startCalcPoint:t.calcPoint,baseSize:H(),pageOffset:t.pageOffset,handleNumbers:n.handleNumbers,buttonsProperty:t.buttons,locations:k.slice()}),c=P(g.end,B,R,{target:t.target,handle:o,listeners:a,doNotReject:!0,handleNumbers:n.handleNumbers}),u=P("mouseout",B,q,{target:t.target,handle:o,listeners:a,doNotReject:!0,handleNumbers:n.handleNumbers});a.push.apply(a,s.concat(c,u)),t.cursor&&(M.style.cursor=getComputedStyle(t.target).cursor,f.length>1&&l(x,r.cssClasses.drag),M.addEventListener("selectstart",i,!1)),n.handleNumbers.forEach((function(t){J("start",t)}))}function G(t){t.stopPropagation();var i=W(t.calcPoint),n=function(t){var r=100,i=!1;return f.forEach((function(n,o){if(!n.hasAttribute("disabled")){var e=Math.abs(k[o]-t);(e<r||100===e&&100===r)&&(i=o,r=e)}})),i}(i);if(!1===n)return!1;r.events.snap||o(x,r.cssClasses.tap,r.animationDuration),it(n,i,!0,!0),rt(),J("slide",n,!0),J("update",n,!0),J("change",n,!0),J("set",n,!0),r.events.snap&&I(t,{handleNumbers:[n]})}function Z(t){var r=W(t.calcPoint),i=z.getStep(r),n=z.fromStepping(i);Object.keys(E).forEach((function(t){"hover"===t.split(".")[0]&&E[t].forEach((function(t){t.call(p,n)}))}))}function $(t,r){E[t]=E[t]||[],E[t].push(r),"update"===t.split(".")[0]&&f.forEach((function(t,r){J("update",r)}))}function J(t,i,n){Object.keys(E).forEach((function(o){var e=o.split(".")[0];t===e&&E[o].forEach((function(t){t.call(p,S.map(r.format.to),i,S.slice(),n||!1,k.slice())}))}))}function K(t){return t+"%"}function Q(t,i,n,o,a,s){return f.length>1&&!r.events.unconstrained&&(o&&i>0&&(n=Math.max(n,t[i-1]+r.margin)),a&&i<f.length-1&&(n=Math.min(n,t[i+1]-r.margin))),f.length>1&&r.limit&&(o&&i>0&&(n=Math.min(n,t[i-1]+r.limit)),a&&i<f.length-1&&(n=Math.max(n,t[i+1]-r.limit))),r.padding&&(0===i&&(n=Math.max(n,r.padding[0])),i===f.length-1&&(n=Math.min(n,100-r.padding[1]))),!((n=e(n=z.getStep(n)))===t[i]&&!s)&&n}function X(t,i){var n=r.ort;return(n?i:t)+", "+(n?t:i)}function Y(t,r,i,n){var o=i.slice(),e=[!t,t],a=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach((function(t,i){var n=Q(o,t,o[t]+r,e[i],a[i],!1);!1===n?r=0:(r=n-o[t],o[t]=n)})):e=a=[!0];var s=!1;n.forEach((function(t,n){s=it(t,i[t]+r,e[n],a[n])||s})),s&&n.forEach((function(t){J("update",t),J("slide",t)}))}function tt(t,i){return r.dir?100-t-i:t}function rt(){U.forEach((function(t){f[t].style.zIndex=3+(f.length+(k[t]>50?-1:1)*t)}))}function it(t,i,n,o){return!1!==(i=Q(k,t,i,n,o,!1))&&(function(t,i){k[t]=i,S[t]=z.fromStepping(i);var n="translate("+X(K(tt(i,0)-A),"0")+")";f[t].style[r.transformRule]=n,nt(t),nt(t+1)}(t,i),!0)}function nt(t){if(h[t]){var i=0,n=100;0!==t&&(i=k[t-1]),t!==h.length-1&&(n=k[t]);var o=n-i,e="translate("+X(K(tt(i,o)),"0")+")",a="scale("+X(o/100,"1")+")";h[t].style[r.transformRule]=e+" "+a}}function ot(t,i){var n=a(t);i=void 0===i||!!i,r.animate&&!(void 0===k[0])&&o(x,r.cssClasses.tap,r.animationDuration),U.forEach((function(t){it(t,function(t,i){return null===t||!1===t||void 0===t?k[i]:("number"==typeof t&&(t=String(t)),t=r.format.from(t),!1===(t=z.toStepping(t))||isNaN(t)?k[i]:t)}(n[t],t),!0,!1)})),U.forEach((function(t){it(t,k[t],!0,!0)})),rt(),U.forEach((function(t){J("update",t),null!==n[t]&&i&&J("set",t)}))}function et(){var t=S.map(r.format.to);return 1===t.length?t[0]:t}return l(v=x,r.cssClasses.target),l(v,0===r.dir?r.cssClasses.ltr:r.cssClasses.rtl),l(v,0===r.ort?r.cssClasses.horizontal:r.cssClasses.vertical),s=D(v,r.cssClasses.base),function(t,i){var n=D(i,r.cssClasses.connects);f=[],(h=[]).push(C(n,t[0]));for(var o=0;o<r.handles;o++)f.push(N(i,o)),U[o]=o,h.push(C(n,t[o+1]))}(r.connect,s),(b=r.events).fixed||f.forEach((function(t,r){P(g.start,t.children[0],I,{handleNumbers:[r]})})),b.tap&&P(g.start,s,G,{}),b.hover&&P(g.move,s,Z,{hover:!0}),b.drag&&h.forEach((function(t,i){if(!1!==t&&0!==i&&i!==h.length-1){var n=f[i-1],o=f[i],e=[t];l(t,r.cssClasses.draggable),b.fixed&&(e.push(n.children[0]),e.push(o.children[0])),e.forEach((function(t){P(g.start,t,I,{handles:[n,o],handleNumbers:[i-1,i]})}))}})),ot(r.start),p={destroy:function(){for(var t in r.cssClasses)r.cssClasses.hasOwnProperty(t)&&c(x,r.cssClasses[t]);for(;x.firstChild;)x.removeChild(x.firstChild);delete x.noUiSlider},steps:function(){return k.map((function(t,r){var i=z.getNearbySteps(t),n=S[r],o=i.thisStep.step,e=null;!1!==o&&n+o>i.stepAfter.startValue&&(o=i.stepAfter.startValue-n),e=n>i.thisStep.startValue?i.thisStep.step:!1!==i.stepBefore.step&&n-i.stepBefore.highestStep,100===t?o=null:0===t&&(e=null);var a=z.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(a))),null!==e&&!1!==e&&(e=Number(e.toFixed(a))),[e,o]}))},on:$,off:function(t){var r=t&&t.split(".")[0],i=r&&t.substring(r.length);Object.keys(E).forEach((function(t){var n=t.split(".")[0],o=t.substring(n.length);r&&r!==n||i&&i!==o||delete E[t]}))},get:et,set:ot,setHandle:function(t,r,i){var n=[];if(!((t=Number(t))>=0&&t<U.length))throw new Error("noUiSlider (12.1.0): invalid handle number, got: "+t);for(var o=0;o<U.length;o++)n[o]=null;n[t]=r,ot(n,i)},reset:function(t){ot(r.start,t)},__moveHandles:function(t,r,i){Y(t,r,k,i)},options:n,updateOptions:function(t,i){var o=et(),e=["margin","limit","padding","range","animate","snap","step","format"];e.forEach((function(r){void 0!==t[r]&&(n[r]=t[r])}));var a=V(n);e.forEach((function(i){void 0!==t[i]&&(r[i]=a[i])})),z=a.spectrum,r.margin=a.margin,r.limit=a.limit,r.padding=a.padding,r.pips&&_(r.pips),k=[],ot(t.start||o,i)},target:x,removePips:L,pips:_},r.pips&&_(r.pips),r.tooltips&&(m=f.map(j),$("update",(function(t,i,n){if(m[i]){var o=t[i];!0!==r.tooltips[i]&&(o=r.tooltips[i].to(n[i])),m[i].innerHTML=o}}))),$("update",(function(t,i,n,o,e){U.forEach((function(t){var i=f[t],o=Q(k,t,0,!0,!0,!0),a=Q(k,t,100,!0,!0,!0),s=e[t],l=r.ariaFormat.to(n[t]);o=z.fromStepping(o).toFixed(1),a=z.fromStepping(a).toFixed(1),s=z.fromStepping(s).toFixed(1),i.children[0].setAttribute("aria-valuemin",o),i.children[0].setAttribute("aria-valuemax",a),i.children[0].setAttribute("aria-valuenow",s),i.children[0].setAttribute("aria-valuetext",l)}))})),p}return{__spectrum:g,version:t,create:function(t,r){if(!t||!t.nodeName)throw new Error("noUiSlider (12.1.0): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider (12.1.0): Slider was already initialized.");var i=q(t,V(r),r);return t.noUiSlider=i,i}}}()}));const u=class{constructor(r){t(this,r),this.handleActive=!1,this.name=void 0,this.values=void 0,this.snap=!1,this.step=0,this.steps="",this.from=void 0,this.to=void 0}swipeLeftHandler(t){t.stopPropagation()}clickHandler(t){t.stopPropagation()}componentWillLoad(){this.valueArray=this.values.split(", ").map((t=>parseFloat(t)))}componentDidLoad(){if(!i.isBrowser)return;const t=this.root.firstElementChild,r=this.steps.split(", ").map((t=>parseInt(t))),n=this.range(this.valueArray,r),o=this.step||this.steps;c.create(t,{start:[n.min,n.max],snap:this.snap,step:r[0]?r[0]:this.step,tooltips:!0,connect:!0,range:n,format:{to:function(t){return o?Math.round(t):t},from:function(t){return o?Math.round(t):t}}});const e=t;e.noUiSlider.on("set",(()=>{const t=e.noUiSlider.get();this.from=parseFloat(t[0]),this.to=parseFloat(t[1])})),e.noUiSlider.set([this.from,this.to])}range(t,r){return t.reduce(((i,n,o)=>{const e=r[o]?[r[o]]:[];return 0==o?i.min=[n]:o==t.length-1?i.max=[n]:i[o/(t.length-1)*100+"%"]=[n,...e],i}),{})}render(){const t=void 0===this.from||void 0===this.to||this.from==this.valueArray[0]&&this.to==this.valueArray[this.valueArray.length-1],i=t?"":this.from+","+this.to;return[r("div",null),r("input",{type:"hidden",name:this.name,value:i,disabled:t})]}get root(){return n(this)}};u.style='/*! nouislider - 12.1.0 - 10/25/2018 */.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.noUi-target{position:relative;direction:ltr;padding:0 15px;margin:10px 0 40px 0}.noUi-base,.noUi-connects{width:100%;height:100%;position:relative;z-index:1}.noUi-base:before,.noUi-base:after{width:15px;content:"";position:absolute;top:0;height:100%;display:block}.noUi-base:before{left:-15px}.noUi-base:after{left:100%}.noUi-connects{overflow:hidden;z-index:0}.noUi-connect,.noUi-origin{will-change:transform;position:absolute;z-index:1;top:0;left:0;height:100%;width:100%;-ms-transform-origin:0 0;-webkit-transform-origin:0 0;transform-origin:0 0}html:not([dir="rtl"]) .noUi-horizontal .noUi-origin{left:auto;right:0}.noUi-vertical .noUi-origin{width:0}.noUi-horizontal .noUi-origin{height:0}.noUi-handle{position:absolute}.noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin{-webkit-transition:transform 0.3s;transition:-webkit-transform 0.3s;-webkit-transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s}.noUi-state-drag *{cursor:inherit !important}.noUi-horizontal{height:18px}.noUi-horizontal .noUi-handle{width:34px;height:28px;left:-17px;top:-6px}.noUi-vertical{width:18px}.noUi-vertical .noUi-handle{width:28px;height:34px;left:-6px;top:-17px}html:not([dir="rtl"]) .noUi-horizontal .noUi-handle{right:-17px;left:auto}.noUi-target{background:#FAFAFA;border-radius:4px;border:1px solid #D3D3D3;-webkit-box-shadow:inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;box-shadow:inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB}.noUi-connects{border-radius:3px}.noUi-connect{background:rgb(54, 54, 54)}.noUi-draggable{cursor:ew-resize}.noUi-vertical .noUi-draggable{cursor:ns-resize}.noUi-handle{border:1px solid #D9D9D9;border-radius:3px;background:#FFF;cursor:default;-webkit-box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB}.noUi-active{-webkit-box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB}.noUi-handle:before,.noUi-handle:after{content:"";display:block;position:absolute;height:14px;width:1px;background:rgb(231, 231, 231);left:14px;top:6px}.noUi-handle:after{left:17px}.noUi-vertical .noUi-handle:before,.noUi-vertical .noUi-handle:after{width:14px;height:1px;left:6px;top:14px}.noUi-vertical .noUi-handle:after{top:17px}[disabled] .noUi-connect{background:#B8B8B8}[disabled].noUi-target,[disabled].noUi-handle,[disabled] .noUi-handle{cursor:not-allowed}.noUi-pips,.noUi-pips *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.noUi-pips{position:absolute;color:#AAA}.noUi-value{position:absolute;white-space:nowrap;text-align:center;font-size:14px}.noUi-value-sub{color:#ccc;font-size:10px}.noUi-marker{position:absolute;background:#CCC}.noUi-marker-sub{background:#AAA}.noUi-marker-large{background:#AAA}.noUi-pips-horizontal{padding:15px 0;height:40px;top:100%;left:0;width:90%;margin:0 5%}.noUi-value-horizontal{-webkit-transform:translate(-50%, 50%);transform:translate(-50%, 50%)}.noUi-rtl .noUi-value-horizontal{-webkit-transform:translate(50%, 50%);transform:translate(50%, 50%)}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:1px;height:5px}.noUi-marker-horizontal.noUi-marker-sub{height:10px}.noUi-marker-horizontal.noUi-marker-large{height:10px}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical{-webkit-transform:translate(0, -50%);transform:translate(0, -50%, 0);padding-left:25px}.noUi-rtl .noUi-value-vertical{-webkit-transform:translate(0, 50%);transform:translate(0, 50%)}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:15px}.noUi-tooltip{font-size:13px;display:block;position:absolute;border:1px solid #D9D9D9;border-radius:3px;background:#fff;color:#000;padding:4px 7px 3px 7px;text-align:center;white-space:nowrap}.noUi-horizontal .noUi-tooltip{-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);left:50%;bottom:-140%}.noUi-vertical .noUi-tooltip{-webkit-transform:translate(0, -50%);transform:translate(0, -50%);top:50%;right:120%}ks-filter-slider{display:block;padding:0 0 10px 0}';export{e as ks_filter,a as ks_filter_checkbox,l as ks_filter_color,u as ks_filter_slider}