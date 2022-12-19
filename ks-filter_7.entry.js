import{r as t,h as r,B as i,g as o}from"./index-b2de1977.js";import{c as n}from"./_commonjsHelpers-ba3f0406.js";const e=class{constructor(r){t(this,r),this.active=!1}render(){return[r("div",{onClick:()=>this.active=!this.active},this.name,r("ks-icon",{name:this.active?"minus":"plus",size:.9})),r("div",{class:"filter-content"},r("slot",null))]}};e.style="ks-filter{display:block;margin-bottom:10px;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-filter>div{font-family:var(--font-emphasis);font-size:1.1rem}ks-filter>div>ks-icon{float:right}ks-filter .filter-content{display:none;font-size:1rem;padding:10px 0}ks-filter[active] .filter-content{display:block;-webkit-animation:fade-in 0.3s ease 1;animation:fade-in 0.3s ease 1}";const a=class{constructor(r){t(this,r),this.active=!1}change(t){this.active=t.target.checked}render(){return[r("label",null,r("input",{name:this.name,value:this.active?this.value:"",type:"checkbox",checked:this.active,onChange:t=>this.change(t)}),r("span",{class:"checkmark"}),this.text)]}};a.style='ks-filter-checkbox{display:block;margin-bottom:8px;line-height:20px}ks-filter-checkbox label{display:block;position:relative;padding-left:35px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-filter-checkbox input{position:absolute;cursor:pointer;opacity:0;height:0;width:0}ks-filter-checkbox .checkmark{position:absolute;top:0;left:0;height:20px;width:20px;background-color:#eee}ks-filter-checkbox .checkmark:after{content:"✓";position:absolute;display:block;left:4px;color:white;opacity:0}ks-filter-checkbox input:checked~.checkmark{background-color:#252525}ks-filter-checkbox input:checked~.checkmark:after{opacity:1}';const s=[{name:"czarny",color:"#000000"},{name:"biały",color:"#f2f2f2"},{name:"platynowy",color:"#afafaf"},{name:"czerwony",color:"#E93731"},{name:"bordowy",color:"#750027"},{name:"brązowy",color:"#633526"},{name:"fioletowy",color:"#7D6098"},{name:"niebieski",color:"#0483e5"},{name:"pomarańczowy",color:"#ffa01c"},{name:"kremowy",color:"#ffddb7"},{name:"różowy",color:"#F8A8B9"},{name:"szary",color:"#757575"},{name:"miętowy",color:"#59CDA5"},{name:"zielony",color:"#97DB18"},{name:"żółty",color:"#fff547"},{name:"beżowy",color:"#B5977F"},{name:"srebrny",color:"#919191",material:"metal"},{name:"miedziany",color:"#c97450",material:"metal"},{name:"złoty",color:"#eda007",material:"metal"},{name:"przezroczysty",color:"#69c0e6",material:"metal"},{name:"przeźroczysty",color:"#69c0e6",material:"metal"},{name:"naturalny",color:"#dba685",material:"wood"},{name:"orzechowy",color:"#c97450",material:"wood"},{name:"wielokolorowy",color:"",material:"multicolor"},{name:"kolorowy",color:"",material:"multicolor"}],l=class{constructor(i){t(this,i),this.active=!1,this.size=20,this.metal=[r("defs",null,r("linearGradient",{id:"Linear1",x1:"0",y1:"0",x2:"1",y2:"0",gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(8,8,-8,8,13,13)"},r("stop",{offset:"0",style:{stopColor:"white",stopOpacity:"0.4"}}),r("stop",{offset:"1",style:{stopColor:"white",stopOpacity:"0"}}))),r("g",{transform:"matrix(1.25,0,0,1.25,-6,-36)"},r("g",{transform:"matrix(1,0,0,1,0,24)"},r("path",{d:"M21,21L5,21L21,5L21,21Z",style:{fill:"url(#Linear1)"}})))],this.wood=[r("g",{transform:"matrix(0.6,0,0,0.6,-0,-0)"},r("circle",{cx:"28.634",cy:"28.483",r:"6.483",style:{fill:"none",stroke:"black",strokeOpacity:"0.20",strokeWidth:"3px"}}),r("g",{transform:"matrix(2.30024,0,0,2.30024,-37.2311,-37.0348)"},r("circle",{cx:"28.634",cy:"28.483",r:"6.483",style:{fill:"none",stroke:"black",strokeOpacity:"0.20",strokeWidth:"1.3px"}})),r("g",{transform:"matrix(3.70926,0,0,3.70926,-77.5769,-77.168)"},r("circle",{cx:"28.634",cy:"28.483",r:"6.483",style:{fill:"none",stroke:"black",strokeOpacity:"0.20",strokeWidth:"0.94px"}})),r("g",{transform:"matrix(5.16472,0,0,5.16472,-119.253,-118.624)"},r("circle",{cx:"28.634",cy:"28.483",r:"6.483",style:{fill:"none",stroke:"black",strokeOpacity:"0.20",strokeWidth:"0.77px"}})))],this.multicolor=[r("rect",{width:this.size/2,height:this.size/2,style:{fill:"#fe4a49"},transform:"translate(0 0)"}),r("rect",{width:this.size/2,height:this.size/2,style:{fill:"#2ab7ca"},transform:"translate("+this.size/2+" 0)"}),r("rect",{width:this.size/2,height:this.size/2,style:{fill:"#fed766"},transform:"translate(0 "+this.size/2+")"}),r("rect",{width:this.size/2,height:this.size/2,style:{fill:"#e6e6ea"},transform:"translate("+this.size/2+" "+this.size/2+")"})]}componentWillLoad(){let t=s.filter((t=>t.name.includes(this.color)));t.length>0&&(this.hex=t[0].color,this.material=t[0].material)}change(t){this.active=t.target.checked}render(){return r("label",null,r("svg",{width:this.size,height:this.size},r("rect",{width:this.size,height:this.size,style:{fill:this.hex}}),"metal"==this.material?this.metal:null,"wood"==this.material?this.wood:null,"multicolor"==this.material?this.multicolor:null),r("input",{name:this.name,value:this.active?this.value:"",type:"checkbox",checked:this.active,onChange:t=>this.change(t)}),r("span",{class:"checkmark"}),this.color)}};l.style='ks-filter-color{display:block;margin-bottom:8px;line-height:20px}ks-filter-color label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding-left:27px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-filter-color input{position:absolute;cursor:pointer;opacity:0;height:0;width:0}ks-filter-color .checkmark{position:absolute;top:2px;left:0;height:20px;width:20px;background-color:#eee}ks-filter-color .checkmark:after{content:"✓";position:absolute;display:block;left:4px;color:white;opacity:0}ks-filter-color input:checked~.checkmark{background-color:#252525}ks-filter-color input:checked~.checkmark:after{opacity:1}ks-filter-color svg{margin-right:8px;margin-top:2px}';var c=n((function(t){
/*! nouislider - 12.1.0 - 10/25/2018 */
t.exports=function(){var t="12.1.0";function r(t){return null!=t}function i(t){t.preventDefault()}function o(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function n(t,r,i){i>0&&(l(t,r),setTimeout((function(){c(t,r)}),i))}function e(t){return Math.max(Math.min(t,100),0)}function a(t){return Array.isArray(t)?t:[t]}function s(t){var r=(t=String(t)).split(".");return r.length>1?r[1].length:0}function l(t,r){t.classList?t.classList.add(r):t.className+=" "+r}function c(t,r){t.classList?t.classList.remove(r):t.className=t.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," ")}function u(t){var r=void 0!==window.pageXOffset,i="CSS1Compat"===(t.compatMode||"");return{x:r?window.pageXOffset:i?t.documentElement.scrollLeft:t.body.scrollLeft,y:r?window.pageYOffset:i?t.documentElement.scrollTop:t.body.scrollTop}}function h(t,r){return 100/(r-t)}function f(t,r){return 100*r/(t[1]-t[0])}function d(t,r){for(var i=1;t>=r[i];)i+=1;return i}function p(t,r,i){if(i>=t.slice(-1)[0])return 100;var o=d(i,t),n=r[o-1],e=r[o];return n+function(t,r){return f(t,t[0]<0?r+Math.abs(t[0]):r-t[0])}([t[o-1],t[o]],i)/h(n,e)}function m(t,r,i,o){if(100===o)return o;var n=d(o,t),e=t[n-1],a=t[n];return i?o-e>(a-e)/2?a:e:r[n-1]?t[n-1]+function(t,r){return Math.round(t/r)*r}(o-t[n-1],r[n-1]):o}function b(t,r,i){var n;if("number"==typeof r&&(r=[r]),!Array.isArray(r))throw new Error("noUiSlider (12.1.0): 'range' contains invalid value.");if(!o(n="min"===t?0:"max"===t?100:parseFloat(t))||!o(r[0]))throw new Error("noUiSlider (12.1.0): 'range' value isn't numeric.");i.xPct.push(n),i.xVal.push(r[0]),n?i.xSteps.push(!isNaN(r[1])&&r[1]):isNaN(r[1])||(i.xSteps[0]=r[1]),i.xHighestCompleteStep.push(0)}function g(t,r,i){if(!r)return!0;i.xSteps[t]=f([i.xVal[t],i.xVal[t+1]],r)/h(i.xPct[t],i.xPct[t+1]);var o=Math.ceil(Number(((i.xVal[t+1]-i.xVal[t])/i.xNumSteps[t]).toFixed(3))-1);i.xHighestCompleteStep[t]=i.xVal[t]+i.xNumSteps[t]*o}function k(t,r,i){var o;this.xPct=[],this.xVal=[],this.xSteps=[i||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=r;var n=[];for(o in t)t.hasOwnProperty(o)&&n.push([t[o],o]);for(n.sort(n.length&&"object"==typeof n[0][0]?function(t,r){return t[0][0]-r[0][0]}:function(t,r){return t[0]-r[0]}),o=0;o<n.length;o++)b(n[o][1],n[o][0],this);for(this.xNumSteps=this.xSteps.slice(0),o=0;o<this.xNumSteps.length;o++)g(o,this.xNumSteps[o],this)}k.prototype.getMargin=function(t){var r=this.xNumSteps[0];if(r&&t/r%1!=0)throw new Error("noUiSlider (12.1.0): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&f(this.xVal,t)},k.prototype.toStepping=function(t){return p(this.xVal,this.xPct,t)},k.prototype.fromStepping=function(t){return function(t,r,i){if(i>=100)return t.slice(-1)[0];var o=d(i,r),n=r[o-1];return function(t,r){return r*(t[1]-t[0])/100+t[0]}([t[o-1],t[o]],(i-n)*h(n,r[o]))}(this.xVal,this.xPct,t)},k.prototype.getStep=function(t){return m(this.xPct,this.xSteps,this.snap,t)},k.prototype.getNearbySteps=function(t){var r=d(t,this.xPct);return{stepBefore:{startValue:this.xVal[r-2],step:this.xNumSteps[r-2],highestStep:this.xHighestCompleteStep[r-2]},thisStep:{startValue:this.xVal[r-1],step:this.xNumSteps[r-1],highestStep:this.xHighestCompleteStep[r-1]},stepAfter:{startValue:this.xVal[r],step:this.xNumSteps[r],highestStep:this.xHighestCompleteStep[r]}}},k.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(s);return Math.max.apply(null,t)},k.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var w={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function x(t){if(function(t){return"object"==typeof t&&"function"==typeof t.to&&"function"==typeof t.from}(t))return!0;throw new Error("noUiSlider (12.1.0): 'format' requires 'to' and 'from' methods.")}function v(t,r){if(!o(r))throw new Error("noUiSlider (12.1.0): 'step' is not numeric.");t.singleStep=r}function y(t,r){if("object"!=typeof r||Array.isArray(r))throw new Error("noUiSlider (12.1.0): 'range' is not an object.");if(void 0===r.min||void 0===r.max)throw new Error("noUiSlider (12.1.0): Missing 'min' or 'max' in 'range'.");if(r.min===r.max)throw new Error("noUiSlider (12.1.0): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new k(r,t.snap,t.singleStep)}function U(t,r){if(r=a(r),!Array.isArray(r)||!r.length)throw new Error("noUiSlider (12.1.0): 'start' option is incorrect.");t.handles=r.length,t.start=r}function z(t,r){if(t.snap=r,"boolean"!=typeof r)throw new Error("noUiSlider (12.1.0): 'snap' option must be a boolean.")}function S(t,r){if(t.animate=r,"boolean"!=typeof r)throw new Error("noUiSlider (12.1.0): 'animate' option must be a boolean.")}function E(t,r){if(t.animationDuration=r,"number"!=typeof r)throw new Error("noUiSlider (12.1.0): 'animationDuration' option must be a number.")}function F(t,r){var i,o=[!1];if("lower"===r?r=[!0,!1]:"upper"===r&&(r=[!1,!0]),!0===r||!1===r){for(i=1;i<t.handles;i++)o.push(r);o.push(!1)}else{if(!Array.isArray(r)||!r.length||r.length!==t.handles+1)throw new Error("noUiSlider (12.1.0): 'connect' option doesn't match handle count.");o=r}t.connect=o}function B(t,r){switch(r){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider (12.1.0): 'orientation' option is invalid.")}}function M(t,r){if(!o(r))throw new Error("noUiSlider (12.1.0): 'margin' option must be numeric.");if(0!==r&&(t.margin=t.spectrum.getMargin(r),!t.margin))throw new Error("noUiSlider (12.1.0): 'margin' option is only supported on linear sliders.")}function C(t,r){if(!o(r))throw new Error("noUiSlider (12.1.0): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(r),!t.limit||t.handles<2)throw new Error("noUiSlider (12.1.0): 'limit' option is only supported on linear sliders with 2 or more handles.")}function N(t,r){if(!o(r)&&!Array.isArray(r))throw new Error("noUiSlider (12.1.0): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(r)&&2!==r.length&&!o(r[0])&&!o(r[1]))throw new Error("noUiSlider (12.1.0): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==r){if(Array.isArray(r)||(r=[r,r]),t.padding=[t.spectrum.getMargin(r[0]),t.spectrum.getMargin(r[1])],!1===t.padding[0]||!1===t.padding[1])throw new Error("noUiSlider (12.1.0): 'padding' option is only supported on linear sliders.");if(t.padding[0]<0||t.padding[1]<0)throw new Error("noUiSlider (12.1.0): 'padding' option must be a positive number(s).");if(t.padding[0]+t.padding[1]>=100)throw new Error("noUiSlider (12.1.0): 'padding' option must not exceed 100% of the range.")}}function A(t,r){switch(r){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider (12.1.0): 'direction' option was not recognized.")}}function j(t,r){if("string"!=typeof r)throw new Error("noUiSlider (12.1.0): 'behaviour' must be a string containing options.");var i=r.indexOf("tap")>=0,o=r.indexOf("drag")>=0,n=r.indexOf("fixed")>=0,e=r.indexOf("snap")>=0,a=r.indexOf("hover")>=0,s=r.indexOf("unconstrained")>=0;if(n){if(2!==t.handles)throw new Error("noUiSlider (12.1.0): 'fixed' behaviour must be used with 2 handles");M(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider (12.1.0): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:i||e,drag:o,fixed:n,snap:e,hover:a,unconstrained:s}}function D(t,r){if(!1!==r)if(!0===r){t.tooltips=[];for(var i=0;i<t.handles;i++)t.tooltips.push(!0)}else{if(t.tooltips=a(r),t.tooltips.length!==t.handles)throw new Error("noUiSlider (12.1.0): must pass a formatter for all handles.");t.tooltips.forEach((function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider (12.1.0): 'tooltips' must be passed a formatter or 'false'.")}))}}function O(t,r){t.ariaFormat=r,x(r)}function _(t,r){t.format=r,x(r)}function L(t,r){if(t.keyboardSupport=r,"boolean"!=typeof r)throw new Error("noUiSlider (12.1.0): 'keyboardSupport' option must be a boolean.")}function P(t,r){t.documentElement=r}function H(t,r){if("string"!=typeof r&&!1!==r)throw new Error("noUiSlider (12.1.0): 'cssPrefix' must be a string or `false`.");t.cssPrefix=r}function W(t,r){if("object"!=typeof r)throw new Error("noUiSlider (12.1.0): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var i in t.cssClasses={},r)r.hasOwnProperty(i)&&(t.cssClasses[i]=t.cssPrefix+r[i]);else t.cssClasses=r}function T(t){var i={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:w,format:w},o={step:{r:!1,t:v},start:{r:!0,t:U},connect:{r:!0,t:F},direction:{r:!0,t:A},snap:{r:!1,t:z},animate:{r:!1,t:S},animationDuration:{r:!1,t:E},range:{r:!0,t:y},orientation:{r:!1,t:B},margin:{r:!1,t:M},limit:{r:!1,t:C},padding:{r:!1,t:N},behaviour:{r:!0,t:j},ariaFormat:{r:!1,t:O},format:{r:!1,t:_},tooltips:{r:!1,t:D},keyboardSupport:{r:!0,t:L},documentElement:{r:!1,t:P},cssPrefix:{r:!0,t:H},cssClasses:{r:!0,t:W}},n={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(o).forEach((function(e){if(!r(t[e])&&void 0===n[e]){if(o[e].r)throw new Error("noUiSlider (12.1.0): '"+e+"' is required.");return!0}o[e].t(i,r(t[e])?t[e]:n[e])})),i.pips=t.pips;var e=document.createElement("div");return i.transformRule=void 0!==e.style.transform?"transform":void 0!==e.style.msTransform?"msTransform":"webkitTransform",i.style=[["left","top"],["right","bottom"]][i.dir][i.ort],i}function V(t,r,o){var s,h,f,d,p,m,b,g,k=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},w=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var r=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,r)}catch(i){}return t}(),x=t,v=[],y=[],U=0,z=r.spectrum,S=[],E={},F=t.ownerDocument,B=r.documentElement||F.documentElement,M=F.body,C="rtl"===F.dir||1===r.ort?0:100;function N(t,r){var i=F.createElement("div");return r&&l(i,r),t.appendChild(i),i}function A(t,i){var o=N(t,r.cssClasses.origin),n=N(o,r.cssClasses.handle);return n.setAttribute("data-handle",i),r.keyboardSupport&&n.setAttribute("tabindex","0"),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",r.ort?"vertical":"horizontal"),0===i?l(n,r.cssClasses.handleLower):i===r.handles-1&&l(n,r.cssClasses.handleUpper),o}function j(t,i){return!!i&&N(t,r.cssClasses.connect)}function D(t,i){return!!r.tooltips[i]&&N(t.firstChild,r.cssClasses.tooltip)}function O(t,i,o){var n=F.createElement("div"),e=[];e[0]=r.cssClasses.valueNormal,e[1]=r.cssClasses.valueLarge,e[2]=r.cssClasses.valueSub;var a=[];a[0]=r.cssClasses.markerNormal,a[1]=r.cssClasses.markerLarge,a[2]=r.cssClasses.markerSub;var s=[r.cssClasses.valueHorizontal,r.cssClasses.valueVertical],c=[r.cssClasses.markerHorizontal,r.cssClasses.markerVertical];function u(t,i){var o=i===r.cssClasses.value;return i+" "+(o?s:c)[r.ort]+" "+(o?e:a)[t]}return l(n,r.cssClasses.pips),l(n,0===r.ort?r.cssClasses.pipsHorizontal:r.cssClasses.pipsVertical),Object.keys(t).forEach((function(e){!function(t,e,a){if(-1!==(a=i?i(e,a):a)){var s=N(n,!1);s.className=u(a,r.cssClasses.marker),s.style[r.style]=t+"%",a>0&&((s=N(n,!1)).className=u(a,r.cssClasses.value),s.setAttribute("data-value",e),s.style[r.style]=t+"%",s.innerHTML=o.to(e))}}(e,t[e][0],t[e][1])})),n}function _(){var t;p&&((t=p).parentElement.removeChild(t),p=null)}function L(t){_();var r=t.mode,i=t.filter||!1,o=function(t,r,i){var o,n={},e=z.xVal[0],a=z.xVal[z.xVal.length-1],s=!1,l=!1,c=0;return(o=i.slice().sort((function(t,r){return t-r})),i=o.filter((function(t){return!this[t]&&(this[t]=!0)}),{}))[0]!==e&&(i.unshift(e),s=!0),i[i.length-1]!==a&&(i.push(a),l=!0),i.forEach((function(o,e){var a,u,h,f,d,p,m,b,g,k=o,w=i[e+1],x="steps"===r;if(x&&(a=z.xNumSteps[e]),a||(a=w-k),!1!==k&&void 0!==w)for(a=Math.max(a,1e-7),u=k;u<=w;u=(u+a).toFixed(7)/1){for(g=(d=(f=z.toStepping(u))-c)/(b=Math.round(d/t)),h=1;h<=b;h+=1)n[(p=c+h*g).toFixed(5)]=[z.fromStepping(p),0];m=i.indexOf(u)>-1?1:x?2:0,!e&&s&&(m=0),u===w&&l||(n[f.toFixed(5)]=[u,m]),c=f}})),n}(t.density||1,r,function(t,r,i){if("range"===t||"steps"===t)return z.xVal;if("count"===t){if(r<2)throw new Error("noUiSlider (12.1.0): 'values' (>= 2) required for mode 'count'.");var o=r-1,n=100/o;for(r=[];o--;)r[o]=o*n;r.push(100),t="positions"}return"positions"===t?r.map((function(t){return z.fromStepping(i?z.getStep(t):t)})):"values"===t?i?r.map((function(t){return z.fromStepping(z.getStep(z.toStepping(t)))})):r:void 0}(r,t.values||!1,t.stepped||!1)),n=t.format||{to:Math.round};return p=x.appendChild(O(o,i,n))}function P(){var t=s.getBoundingClientRect(),i="offset"+["Width","Height"][r.ort];return 0===r.ort?t.width||s[i]:t.height||s[i]}function H(t,i,o,n){var e=function(e){return!!(e=function(t,r,i){var o,n,e=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");if(0===t.type.indexOf("MSPointer")&&(s=!0),e){var l=function(t){return t.target===i||i.contains(t.target)};if("touchstart"===t.type){var c=Array.prototype.filter.call(t.touches,l);if(c.length>1)return!1;o=c[0].pageX,n=c[0].pageY}else{var h=Array.prototype.find.call(t.changedTouches,l);if(!h)return!1;o=h.pageX,n=h.pageY}}return r=r||u(F),(a||s)&&(o=t.clientX+r.x,n=t.clientY+r.y),t.pageOffset=r,t.points=[o,n],t.cursor=a||s,t}(e,n.pageOffset,n.target||i))&&!(x.hasAttribute("disabled")&&!n.doNotReject)&&(s=r.cssClasses.tap,!(((a=x).classList?a.classList.contains(s):new RegExp("\\b"+s+"\\b").test(a.className))&&!n.doNotReject))&&!(t===k.start&&void 0!==e.buttons&&e.buttons>1)&&(!n.hover||!e.buttons)&&(w||e.preventDefault(),e.calcPoint=e.points[r.ort],void o(e,n));var a,s},a=[];return t.split(" ").forEach((function(t){i.addEventListener(t,e,!!w&&{passive:!0}),a.push([t,e])})),a}function W(t){var i,o,n,a,l,c,h=100*(t-(o=r.ort,n=(i=s).getBoundingClientRect(),l=(a=i.ownerDocument).documentElement,c=u(a),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(c.x=0),o?n.top+c.y-l.clientTop:n.left+c.x-l.clientLeft))/P();return h=e(h),r.dir?100-h:h}function V(t,r){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&R(t,r)}function q(t,i){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==i.buttonsProperty)return R(t,i);var o=(r.dir?-1:1)*(t.calcPoint-i.startCalcPoint);Y(o>0,100*o/i.baseSize,i.locations,i.handleNumbers)}function R(t,o){o.handle&&(c(o.handle,r.cssClasses.active),U-=1),o.listeners.forEach((function(t){B.removeEventListener(t[0],t[1])})),0===U&&(c(x,r.cssClasses.drag),rt(),t.cursor&&(M.style.cursor="",M.removeEventListener("selectstart",i))),o.handleNumbers.forEach((function(t){J("change",t),J("set",t),J("end",t)}))}function $(t,o){var n;if(1===o.handleNumbers.length){var e=h[o.handleNumbers[0]];if(e.hasAttribute("disabled"))return!1;U+=1,l(n=e.children[0],r.cssClasses.active)}t.stopPropagation();var a=[],s=H(k.move,B,q,{target:t.target,handle:n,listeners:a,startCalcPoint:t.calcPoint,baseSize:P(),pageOffset:t.pageOffset,handleNumbers:o.handleNumbers,buttonsProperty:t.buttons,locations:v.slice()}),c=H(k.end,B,R,{target:t.target,handle:n,listeners:a,doNotReject:!0,handleNumbers:o.handleNumbers}),u=H("mouseout",B,V,{target:t.target,handle:n,listeners:a,doNotReject:!0,handleNumbers:o.handleNumbers});a.push.apply(a,s.concat(c,u)),t.cursor&&(M.style.cursor=getComputedStyle(t.target).cursor,h.length>1&&l(x,r.cssClasses.drag),M.addEventListener("selectstart",i,!1)),o.handleNumbers.forEach((function(t){J("start",t)}))}function I(t){t.stopPropagation();var i=W(t.calcPoint),o=function(t){var r=100,i=!1;return h.forEach((function(o,n){if(!o.hasAttribute("disabled")){var e=Math.abs(v[n]-t);(e<r||100===e&&100===r)&&(i=n,r=e)}})),i}(i);if(!1===o)return!1;r.events.snap||n(x,r.cssClasses.tap,r.animationDuration),it(o,i,!0,!0),rt(),J("slide",o,!0),J("update",o,!0),J("change",o,!0),J("set",o,!0),r.events.snap&&$(t,{handleNumbers:[o]})}function Z(t){var r=W(t.calcPoint),i=z.getStep(r),o=z.fromStepping(i);Object.keys(E).forEach((function(t){"hover"===t.split(".")[0]&&E[t].forEach((function(t){t.call(d,o)}))}))}function G(t,r){E[t]=E[t]||[],E[t].push(r),"update"===t.split(".")[0]&&h.forEach((function(t,r){J("update",r)}))}function J(t,i,o){Object.keys(E).forEach((function(n){var e=n.split(".")[0];t===e&&E[n].forEach((function(t){t.call(d,S.map(r.format.to),i,S.slice(),o||!1,v.slice())}))}))}function K(t){return t+"%"}function Q(t,i,o,n,a,s){return h.length>1&&!r.events.unconstrained&&(n&&i>0&&(o=Math.max(o,t[i-1]+r.margin)),a&&i<h.length-1&&(o=Math.min(o,t[i+1]-r.margin))),h.length>1&&r.limit&&(n&&i>0&&(o=Math.min(o,t[i-1]+r.limit)),a&&i<h.length-1&&(o=Math.max(o,t[i+1]-r.limit))),r.padding&&(0===i&&(o=Math.max(o,r.padding[0])),i===h.length-1&&(o=Math.min(o,100-r.padding[1]))),!((o=e(o=z.getStep(o)))===t[i]&&!s)&&o}function X(t,i){var o=r.ort;return(o?i:t)+", "+(o?t:i)}function Y(t,r,i,o){var n=i.slice(),e=[!t,t],a=[t,!t];o=o.slice(),t&&o.reverse(),o.length>1?o.forEach((function(t,i){var o=Q(n,t,n[t]+r,e[i],a[i],!1);!1===o?r=0:(r=o-n[t],n[t]=o)})):e=a=[!0];var s=!1;o.forEach((function(t,o){s=it(t,i[t]+r,e[o],a[o])||s})),s&&o.forEach((function(t){J("update",t),J("slide",t)}))}function tt(t,i){return r.dir?100-t-i:t}function rt(){y.forEach((function(t){h[t].style.zIndex=3+(h.length+(v[t]>50?-1:1)*t)}))}function it(t,i,o,n){return!1!==(i=Q(v,t,i,o,n,!1))&&(function(t,i){v[t]=i,S[t]=z.fromStepping(i);var o="translate("+X(K(tt(i,0)-C),"0")+")";h[t].style[r.transformRule]=o,ot(t),ot(t+1)}(t,i),!0)}function ot(t){if(f[t]){var i=0,o=100;0!==t&&(i=v[t-1]),t!==f.length-1&&(o=v[t]);var n=o-i,e="translate("+X(K(tt(i,n)),"0")+")",a="scale("+X(n/100,"1")+")";f[t].style[r.transformRule]=e+" "+a}}function nt(t,i){var o=a(t);i=void 0===i||!!i,r.animate&&!(void 0===v[0])&&n(x,r.cssClasses.tap,r.animationDuration),y.forEach((function(t){it(t,function(t,i){return null===t||!1===t||void 0===t?v[i]:("number"==typeof t&&(t=String(t)),t=r.format.from(t),!1===(t=z.toStepping(t))||isNaN(t)?v[i]:t)}(o[t],t),!0,!1)})),y.forEach((function(t){it(t,v[t],!0,!0)})),rt(),y.forEach((function(t){J("update",t),null!==o[t]&&i&&J("set",t)}))}function et(){var t=S.map(r.format.to);return 1===t.length?t[0]:t}return l(g=x,r.cssClasses.target),l(g,0===r.dir?r.cssClasses.ltr:r.cssClasses.rtl),l(g,0===r.ort?r.cssClasses.horizontal:r.cssClasses.vertical),s=N(g,r.cssClasses.base),function(t,i){var o=N(i,r.cssClasses.connects);h=[],(f=[]).push(j(o,t[0]));for(var n=0;n<r.handles;n++)h.push(A(i,n)),y[n]=n,f.push(j(o,t[n+1]))}(r.connect,s),(b=r.events).fixed||h.forEach((function(t,r){H(k.start,t.children[0],$,{handleNumbers:[r]})})),b.tap&&H(k.start,s,I,{}),b.hover&&H(k.move,s,Z,{hover:!0}),b.drag&&f.forEach((function(t,i){if(!1!==t&&0!==i&&i!==f.length-1){var o=h[i-1],n=h[i],e=[t];l(t,r.cssClasses.draggable),b.fixed&&(e.push(o.children[0]),e.push(n.children[0])),e.forEach((function(t){H(k.start,t,$,{handles:[o,n],handleNumbers:[i-1,i]})}))}})),nt(r.start),d={destroy:function(){for(var t in r.cssClasses)r.cssClasses.hasOwnProperty(t)&&c(x,r.cssClasses[t]);for(;x.firstChild;)x.removeChild(x.firstChild);delete x.noUiSlider},steps:function(){return v.map((function(t,r){var i=z.getNearbySteps(t),o=S[r],n=i.thisStep.step,e=null;!1!==n&&o+n>i.stepAfter.startValue&&(n=i.stepAfter.startValue-o),e=o>i.thisStep.startValue?i.thisStep.step:!1!==i.stepBefore.step&&o-i.stepBefore.highestStep,100===t?n=null:0===t&&(e=null);var a=z.countStepDecimals();return null!==n&&!1!==n&&(n=Number(n.toFixed(a))),null!==e&&!1!==e&&(e=Number(e.toFixed(a))),[e,n]}))},on:G,off:function(t){var r=t&&t.split(".")[0],i=r&&t.substring(r.length);Object.keys(E).forEach((function(t){var o=t.split(".")[0],n=t.substring(o.length);r&&r!==o||i&&i!==n||delete E[t]}))},get:et,set:nt,setHandle:function(t,r,i){var o=[];if(!((t=Number(t))>=0&&t<y.length))throw new Error("noUiSlider (12.1.0): invalid handle number, got: "+t);for(var n=0;n<y.length;n++)o[n]=null;o[t]=r,nt(o,i)},reset:function(t){nt(r.start,t)},__moveHandles:function(t,r,i){Y(t,r,v,i)},options:o,updateOptions:function(t,i){var n=et(),e=["margin","limit","padding","range","animate","snap","step","format"];e.forEach((function(r){void 0!==t[r]&&(o[r]=t[r])}));var a=T(o);e.forEach((function(i){void 0!==t[i]&&(r[i]=a[i])})),z=a.spectrum,r.margin=a.margin,r.limit=a.limit,r.padding=a.padding,r.pips&&L(r.pips),v=[],nt(t.start||n,i)},target:x,removePips:_,pips:L},r.pips&&L(r.pips),r.tooltips&&(m=h.map(D),G("update",(function(t,i,o){if(m[i]){var n=t[i];!0!==r.tooltips[i]&&(n=r.tooltips[i].to(o[i])),m[i].innerHTML=n}}))),G("update",(function(t,i,o,n,e){y.forEach((function(t){var i=h[t],n=Q(v,t,0,!0,!0,!0),a=Q(v,t,100,!0,!0,!0),s=e[t],l=r.ariaFormat.to(o[t]);n=z.fromStepping(n).toFixed(1),a=z.fromStepping(a).toFixed(1),s=z.fromStepping(s).toFixed(1),i.children[0].setAttribute("aria-valuemin",n),i.children[0].setAttribute("aria-valuemax",a),i.children[0].setAttribute("aria-valuenow",s),i.children[0].setAttribute("aria-valuetext",l)}))})),d}return{__spectrum:k,version:t,create:function(t,r){if(!t||!t.nodeName)throw new Error("noUiSlider (12.1.0): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider (12.1.0): Slider was already initialized.");var i=V(t,T(r),r);return t.noUiSlider=i,i}}}()}));const u=class{constructor(r){t(this,r),this.snap=!1,this.step=0,this.steps="",this.handleActive=!1}swipeLeftHandler(t){t.stopPropagation()}clickHandler(t){t.stopPropagation()}componentWillLoad(){this.valueArray=this.values.split(", ").map((t=>parseFloat(t)))}componentDidLoad(){if(!i.isBrowser)return;const t=this.root.firstElementChild,r=this.steps.split(", ").map((t=>parseInt(t))),o=this.range(this.valueArray,r),n=this.step||this.steps;c.create(t,{start:[o.min,o.max],snap:this.snap,step:r[0]?r[0]:this.step,tooltips:!0,connect:!0,range:o,format:{to:function(t){return n?Math.round(t):t},from:function(t){return n?Math.round(t):t}}});const e=t;e.noUiSlider.on("set",(()=>{const t=e.noUiSlider.get();this.from=parseFloat(t[0]),this.to=parseFloat(t[1])})),e.noUiSlider.set([this.from,this.to])}range(t,r){return t.reduce(((i,o,n)=>{const e=r[n]?[r[n]]:[];return 0==n?i.min=[o]:n==t.length-1?i.max=[o]:i[n/(t.length-1)*100+"%"]=[o,...e],i}),{})}render(){const t=void 0===this.from||void 0===this.to||this.from==this.valueArray[0]&&this.to==this.valueArray[this.valueArray.length-1],i=t?"":this.from+","+this.to;return[r("div",null),r("input",{type:"hidden",name:this.name,value:i,disabled:t})]}get root(){return o(this)}};u.style='/*! nouislider - 12.1.0 - 10/25/2018 */.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;user-select:none;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.noUi-target{position:relative;direction:ltr;padding:0 15px;margin:10px 0 40px 0}.noUi-base,.noUi-connects{width:100%;height:100%;position:relative;z-index:1}.noUi-base:before,.noUi-base:after{width:15px;content:"";position:absolute;top:0;height:100%;display:block}.noUi-base:before{left:-15px}.noUi-base:after{left:100%}.noUi-connects{overflow:hidden;z-index:0}.noUi-connect,.noUi-origin{will-change:transform;position:absolute;z-index:1;top:0;left:0;height:100%;width:100%;-ms-transform-origin:0 0;-webkit-transform-origin:0 0;transform-origin:0 0}html:not([dir="rtl"]) .noUi-horizontal .noUi-origin{left:auto;right:0}.noUi-vertical .noUi-origin{width:0}.noUi-horizontal .noUi-origin{height:0}.noUi-handle{position:absolute}.noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin{-webkit-transition:transform 0.3s;transition:-webkit-transform 0.3s;-webkit-transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s}.noUi-state-drag *{cursor:inherit !important}.noUi-horizontal{height:18px}.noUi-horizontal .noUi-handle{width:34px;height:28px;left:-17px;top:-6px}.noUi-vertical{width:18px}.noUi-vertical .noUi-handle{width:28px;height:34px;left:-6px;top:-17px}html:not([dir="rtl"]) .noUi-horizontal .noUi-handle{right:-17px;left:auto}.noUi-target{background:#FAFAFA;border-radius:4px;border:1px solid #D3D3D3;-webkit-box-shadow:inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;box-shadow:inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB}.noUi-connects{border-radius:3px}.noUi-connect{background:rgb(54, 54, 54)}.noUi-draggable{cursor:ew-resize}.noUi-vertical .noUi-draggable{cursor:ns-resize}.noUi-handle{border:1px solid #D9D9D9;border-radius:3px;background:#FFF;cursor:default;-webkit-box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB}.noUi-active{-webkit-box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;box-shadow:inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB}.noUi-handle:before,.noUi-handle:after{content:"";display:block;position:absolute;height:14px;width:1px;background:rgb(231, 231, 231);left:14px;top:6px}.noUi-handle:after{left:17px}.noUi-vertical .noUi-handle:before,.noUi-vertical .noUi-handle:after{width:14px;height:1px;left:6px;top:14px}.noUi-vertical .noUi-handle:after{top:17px}[disabled] .noUi-connect{background:#B8B8B8}[disabled].noUi-target,[disabled].noUi-handle,[disabled] .noUi-handle{cursor:not-allowed}.noUi-pips,.noUi-pips *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.noUi-pips{position:absolute;color:#AAA}.noUi-value{position:absolute;white-space:nowrap;text-align:center;font-size:14px}.noUi-value-sub{color:#ccc;font-size:10px}.noUi-marker{position:absolute;background:#CCC}.noUi-marker-sub{background:#AAA}.noUi-marker-large{background:#AAA}.noUi-pips-horizontal{padding:15px 0;height:40px;top:100%;left:0;width:90%;margin:0 5%}.noUi-value-horizontal{-webkit-transform:translate(-50%, 50%);transform:translate(-50%, 50%)}.noUi-rtl .noUi-value-horizontal{-webkit-transform:translate(50%, 50%);transform:translate(50%, 50%)}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:1px;height:5px}.noUi-marker-horizontal.noUi-marker-sub{height:10px}.noUi-marker-horizontal.noUi-marker-large{height:10px}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical{-webkit-transform:translate(0, -50%);transform:translate(0, -50%, 0);padding-left:25px}.noUi-rtl .noUi-value-vertical{-webkit-transform:translate(0, 50%);transform:translate(0, 50%)}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:15px}.noUi-tooltip{font-size:13px;display:block;position:absolute;border:1px solid #D9D9D9;border-radius:3px;background:#fff;color:#000;padding:4px 7px 3px 7px;text-align:center;white-space:nowrap}.noUi-horizontal .noUi-tooltip{-webkit-transform:translate(-50%, 0);transform:translate(-50%, 0);left:50%;bottom:-140%}.noUi-vertical .noUi-tooltip{-webkit-transform:translate(0, -50%);transform:translate(0, -50%);top:50%;right:120%}ks-filter-slider{display:block;padding:0 0 10px 0}';const h=class{constructor(r){t(this,r)}submit(t){t.preventDefault();const r=this.root.querySelectorAll("form input");let i=new Object;r.forEach((t=>{""!=t.value&&""!=t.name&&(t.name in i?i[t.name]+=`-${t.value}`:i[t.name]=t.value)}));let o=this.baseUrl;for(const n in i)o+=`/${n}=${i[n]}`;return window.location.href=o,!1}render(){return[r("ks-button",{narrow:!0,muted:!0,border:!0,name:"Filtruj",left:!0,icon:"filter",onClick:()=>this.root.querySelector("ks-sidepanel").show()}),r("ks-sidepanel",{left:!0},r("span",{class:"heading"},"Filtrowanie"),r("form",{method:"POST",action:this.baseUrl},r("input",{type:"hidden",name:"postget",value:"tak"}),r("slot",null),r("ks-button",{class:"clear",border:!0,link:this.baseUrl,name:"Wyczyść Filtry"}),r("ks-button",{submit:!0,secondary:!0,name:"Zobacz filtry"})))]}get root(){return o(this)}};h.style="ks-filtering{display:block}ks-filtering>ks-button{background-color:white}ks-filtering .heading{display:block;margin-bottom:30px;font-size:1.3rem;font-family:var(--font-emphasis);font-weight:700}ks-filtering .clear{margin:30px 0 5px 0}";const f=class{constructor(r){t(this,r)}render(){return[this.description?r("div",{innerHTML:this.description}):null,r("slot",{name:"tags"}),r("slot",{name:"comments"})]}};f.style="ks-listing-footer{display:block;position:relative;z-index:1;padding:15px;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);background-color:white;text-align:center;font-size:0.875rem}ks-listing-footer>*:not([slot=tags]){max-width:1200px;margin:15px auto 15px auto;padding:0 15px;line-height:1.5}ks-listing-footer *[slot=tags]{max-width:1200px;margin:auto}ks-listing-footer *[slot=tags]>*{display:inline-block;padding:3px 10px;margin:2px;margin-bottom:3px;line-height:1.5;background:#222222;color:#ffffff !important;vertical-align:middle;white-space:nowrap;border-radius:2px;text-decoration:none !important}";const d=class{constructor(r){t(this,r),this.enabled=!1}render(){return r("div",null,r("form",{action:this.post,method:"post",style:{margin:"0"}},r("input",{type:"hidden",name:"sortowanie",value:"0"})),r("ks-button",{onClick:()=>this.toggle(),narrow:!0,muted:!0,border:!0,name:"Sortuj",icon:"shuffle"}),r("div",{class:"dropdown"},r("a",{onClick:()=>this.sort(1)},"Polecane ",r("ks-icon",{name:"check",size:.9})),r("a",{onClick:()=>this.sort(2)},"Popularne ",r("ks-icon",{name:"users",size:.9})),r("a",{onClick:()=>this.sort(3)},"Najnowsze ",r("ks-icon",{name:"clock",size:.9})),r("hr",null),r("a",{onClick:()=>this.sort(4)},"Najtańsze ",r("ks-icon",{name:"plus-circle",size:.9})),r("a",{onClick:()=>this.sort(5)},"Najdroższe ",r("ks-icon",{name:"minus-circle",size:.9}))))}componentDidLoad(){this.form=this.root.querySelector("form"),this.input=this.form.querySelector("input")}sort(t){this.input.value=t.toString(),this.form.submit()}toggle(){this.enabled=!this.enabled}disable(t){this.root.contains(t.target)||(this.enabled=!1)}get root(){return o(this)}};d.style="ks-sorting{display:block;position:relative}ks-sorting ks-button{background-color:white}ks-sorting .dropdown{display:none;position:absolute;z-index:1020;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:200px;padding:18px 25px;margin-top:8px;background:#fff;color:#373737;-webkit-box-shadow:0 5px 20px rgb(0 0 0 / 20%);box-shadow:0 5px 20px rgb(0 0 0 / 20%)}ks-sorting[enabled] .dropdown{display:block}ks-sorting a{color:var(--color-dark);text-decoration:none !important;font-size:15px;line-height:29px}ks-sorting a:hover{color:var(--color-dark-hover)}ks-sorting a:active{color:var(--color-dark-active)}ks-sorting ks-icon{float:right}ks-sorting hr{overflow:visible;margin:10px 0;border:0;border-top:1px solid #e5e5e5}";export{e as ks_filter,a as ks_filter_checkbox,l as ks_filter_color,u as ks_filter_slider,h as ks_filtering,f as ks_listing_footer,d as ks_sorting}