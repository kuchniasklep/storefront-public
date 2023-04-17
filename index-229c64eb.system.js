var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function l(e){try{s(n.next(e))}catch(t){i(t)}}function o(e){try{s(n["throw"](e))}catch(t){i(t)}}function s(e){e.done?r(e.value):a(e.value).then(l,o)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(e){return function(t){return s([e,t])}}function s(l){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:r.label++;return{value:l[1],done:false};case 5:r.label++;a=l[1];l=[0];continue;case 7:l=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1];i=l;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(l);break}if(i[2])r.ops.pop();r.trys.pop();continue}l=t.call(e,r)}catch(o){l=[6,o];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++){if(i||!(n in t)){if(!i)i=Array.prototype.slice.call(t,0,n);i[n]=t[n]}}return e.concat(i||Array.prototype.slice.call(t))};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","ks-components");var a;var i;var l=false;var o=false;var s=false;var $=false;var f=null;var u=false;var c=e("B",{isDev:false,isBrowser:true,isServer:false,isTesting:false});var v=function(e,t){if(t===void 0){t=""}{return function(){return}}};var d=function(e,t){{return function(){return}}};var h="r";var p="o";var m="s";var g="t";var y="s-id";var b="sty-id";var w="c-id";var N="{visibility:hidden}.hydrated{visibility:inherit}";var x={};var R="http://www.w3.org/2000/svg";var S="http://www.w3.org/1999/xhtml";var _=function(e){e=typeof e;return e==="object"||e==="function"};var k=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var l=null;var o=false;var s=false;var $=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!_(a)){a=String(a)}if(o&&s){$[$.length-1].$text$+=a}else{$.push(o?T(null,a):a)}s=o}}};f(r);if(t){if(t.key){i=t.key}if(t.name){l=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,$,j)}var c=T(e,null);c.$attrs$=t;if($.length>0){c.$children$=$}{c.$key$=i}{c.$name$=l}return c}));var T=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var C=e("H",{});var L=function(e){return e&&e.$tag$===C};var j={forEach:function(e,t){return e.map(A).forEach(t)},map:function(e,t){return e.map(A).map(t).map(E)}};var A=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var E=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return k.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[],false))}var r=T(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var P=function(e,t,r,n){var a=v("hydrateClient",t);var i=e.shadowRoot;var l=[];var o=[];var s=null;var $=n.$vnode$=T(t,null);if(!Ge.$orgLocNodes$){I(Fe.body,Ge.$orgLocNodes$=new Map)}e[y]=r;e.removeAttribute(y);O($,l,o,s,e,e,r);l.map((function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=Ge.$orgLocNodes$.get(r);var a=e.$elm$;if(n&&Je&&n["s-en"]===""){n.parentNode.insertBefore(a,n.nextSibling)}if(!i){a["s-hn"]=t;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}Ge.$orgLocNodes$.delete(r)}));a()};var O=function(e,t,r,n,a,i,l){var o;var s;var $;var f;if(i.nodeType===1){o=i.getAttribute(w);if(o){s=o.split(".");if(s[0]===l||s[0]==="0"){$={$flags$:0,$hostId$:s[0],$nodeId$:s[1],$depth$:s[2],$index$:s[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push($);i.removeAttribute(w);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}for(f=i.childNodes.length-1;f>=0;f--){O(e,t,r,n,a,i.childNodes[f],l)}if(i.shadowRoot){for(f=i.shadowRoot.childNodes.length-1;f>=0;f--){O(e,t,r,n,a,i.shadowRoot.childNodes[f],l)}}}else if(i.nodeType===8){s=i.nodeValue.split(".");if(s[1]===l||s[1]==="0"){o=s[0];$={$flags$:0,$hostId$:s[1],$nodeId$:s[2],$depth$:s[3],$index$:s[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(o===g){$.$elm$=i.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;t.push($);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}else if($.$hostId$===l){if(o===m){$.$tag$="slot";if(s[5]){i["s-sn"]=$.$name$=s[5]}else{i["s-sn"]=""}i["s-sr"]=true;r.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}else if(o===h){{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var u=T(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var I=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){I(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){I(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===p){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-en"]=n[3]}}};var M=function(e,t){if(e!=null&&!_(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var B=e("g",(function(e){return Ie(e).$hostElement$}));var q=e("c",(function(e,t,r){var n=B(e);return{emit:function(e){return U(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var U=function(e,t,r){var n=Ge.ce(t,r);e.dispatchEvent(n);return n};var z=new WeakMap;var H=function(e,t,r){var n=Ve.get(e);if(Qe&&r){n=n||new CSSStyleSheet;if(typeof n==="string"){n=t}else{n.replaceSync(t)}}else{n=t}Ve.set(e,n)};var V=function(e,t,r,n){var a=D(t);var i=Ve.get(a);e=e.nodeType===11?e:Fe;if(i){if(typeof i==="string"){e=e.head||e;var l=z.get(e);var o=void 0;if(!l){z.set(e,l=new Set)}if(!l.has(a)){if(e.host&&(o=e.querySelector("[".concat(b,'="').concat(a,'"]')))){o.innerHTML=i}else{if(Ge.$cssShim$){o=Ge.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var s=o["s-sc"];if(s){a=s;l=null}}else{o=Fe.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets,true),[i],false)}}return a};var W=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=v("attachStyles",t.$tagName$);V(r.getRootNode(),t,e.$modeName$,r);n()};var D=function(e,t){return"sc-"+e.$tagName$};var F=function(e,t,r,n,a,i){if(r!==n){var l=qe(e,t);var o=t.toLowerCase();if(t==="class"){var s=e.classList;var $=J(r);var f=J(n);s.remove.apply(s,$.filter((function(e){return e&&!f.includes(e)})));s.add.apply(s,f.filter((function(e){return e&&!$.includes(e)})))}else if(t==="style"){{for(var u in r){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!r||n[u]!==r[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(t==="key");else if(!l&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(qe(We,o)){t=o.slice(2)}else{t=o[2]+t.slice(3)}if(r){Ge.rel(e,t,r,false)}if(n){Ge.ael(e,t,n,false)}}else{var c=_(n);if((l||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var v=n==null?"":n;if(t==="list"){l=false}else if(r==null||e[t]!=v){e[t]=v}}else{e[t]=n}}catch(d){}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!l||i&4||a)&&!c){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var G=/\s/;var J=function(e){return!e?[]:e.split(G)};var K=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||x;var l=t.$attrs$||x;{for(n in i){if(!(n in l)){F(a,n,i[n],undefined,r,t.$flags$)}}}for(n in l){F(a,n,i[n],l[n],r,t.$flags$)}};var Q=function(e,t,r,n){var o=t.$children$[r];var f=0;var u;var c;var v;if(!l){s=true;if(o.$tag$==="slot"){o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){u=o.$elm$=Fe.createTextNode(o.$text$)}else if(o.$flags$&1){u=o.$elm$=Fe.createTextNode("")}else{if(!$){$=o.$tag$==="svg"}u=o.$elm$=Fe.createElementNS($?R:S,o.$flags$&2?"slot-fb":o.$tag$);if($&&o.$tag$==="foreignObject"){$=false}{K(null,o,$)}if(o.$children$){for(f=0;f<o.$children$.length;++f){c=Q(e,o,f);if(c){u.appendChild(c)}}}{if(o.$tag$==="svg"){$=false}else if(u.tagName==="foreignObject"){$=true}}}{u["s-hn"]=i;if(o.$flags$&(2|1)){u["s-sr"]=true;u["s-cr"]=a;u["s-sn"]=o.$name$||"";v=e&&e.$children$&&e.$children$[r];if(v&&v.$tag$===o.$tag$&&e.$elm$){X(e.$elm$,false)}}}return u};var X=function(e,t){Ge.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==i&&a["s-ol"]){ne(a).insertBefore(a,re(a));a["s-ol"].remove();a["s-ol"]=undefined;s=true}if(t){X(a,t)}}Ge.$flags$&=~1};var Y=function(e,t,r,n,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var o;for(;a<=i;++a){if(n[a]){o=Q(null,r,a);if(o){n[a].$elm$=o;l.insertBefore(o,re(t))}}}};var Z=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;{o=true;if(a["s-ol"]){a["s-ol"].remove()}else{X(a,true)}}a.remove()}}};var ee=function(e,t,r,n){var a=0;var i=0;var l=0;var o=0;var s=t.length-1;var $=t[0];var f=t[s];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=s&&i<=u){if($==null){$=t[++a]}else if(f==null){f=t[--s]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(te($,c)){ae($,c);$=t[++a];c=n[++i]}else if(te(f,v)){ae(f,v);f=t[--s];v=n[--u]}else if(te($,v)){if($.$tag$==="slot"||v.$tag$==="slot"){X($.$elm$.parentNode,false)}ae($,v);e.insertBefore($.$elm$,f.$elm$.nextSibling);$=t[++a];v=n[--u]}else if(te(f,c)){if($.$tag$==="slot"||v.$tag$==="slot"){X(f.$elm$.parentNode,false)}ae(f,c);e.insertBefore(f.$elm$,$.$elm$);f=t[--s];c=n[++i]}else{l=-1;{for(o=a;o<=s;++o){if(t[o]&&t[o].$key$!==null&&t[o].$key$===c.$key$){l=o;break}}}if(l>=0){h=t[l];if(h.$tag$!==c.$tag$){d=Q(t&&t[i],r,l)}else{ae(h,c);t[l]=undefined;d=h.$elm$}c=n[++i]}else{d=Q(t&&t[i],r,i);c=n[++i]}if(d){{ne($.$elm$).insertBefore(d,re($.$elm$))}}}}if(a>s){Y(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){Z(t,a,s)}};var te=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var re=function(e){return e&&e["s-ol"]||e};var ne=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ae=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var l=t.$text$;var o;if(l===null){{$=i==="svg"?true:i==="foreignObject"?false:$}{if(i==="slot");else{K(e,t,$)}}if(n!==null&&a!==null){ee(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}Y(r,null,t,a,0,a.length-1)}else if(n!==null){Z(n,0,n.length-1)}if($&&i==="svg"){$=false}}else if(o=r["s-cr"]){o.parentNode.textContent=l}else if(e.$text$!==l){r.data=l}};var ie=function(e){var t=e.childNodes;var r;var n;var a;var i;var l;var o;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){l=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){o=t[i].nodeType;if(t[i]["s-hn"]!==r["s-hn"]||l!==""){if(o===1&&l===t[i].getAttribute("slot")){r.hidden=true;break}}else{if(o===1||o===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}ie(r)}}};var le=[];var oe=function(e){var t;var r;var n;var a;var i;var l;var s=0;var $=e.childNodes;var f=$.length;for(;s<f;s++){t=$[s];if(t["s-sr"]&&(r=t["s-cr"])&&r.parentNode){n=r.parentNode.childNodes;a=t["s-sn"];for(l=n.length-1;l>=0;l--){r=n[l];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==t["s-hn"]){if(se(r,a)){i=le.find((function(e){return e.$nodeToRelocate$===r}));o=true;r["s-sn"]=r["s-sn"]||a;if(i){i.$slotRefNode$=t}else{le.push({$slotRefNode$:t,$nodeToRelocate$:r})}if(r["s-sr"]){le.map((function(e){if(se(e.$nodeToRelocate$,r["s-sn"])){i=le.find((function(e){return e.$nodeToRelocate$===r}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!le.some((function(e){return e.$nodeToRelocate$===r}))){le.push({$nodeToRelocate$:r})}}}}if(t.nodeType===1){oe(t)}}};var se=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var $e=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var $=e.$vnode$||T(null,null);var f=L(t)?t:k(null,null,t);i=r.tagName;if(n.$attrsToReflect$){f.$attrs$=f.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return f.$attrs$[n]=r[t]}))}f.$tag$=null;f.$flags$|=4;e.$vnode$=f;f.$elm$=$.$elm$=r;{a=r["s-cr"];l=(n.$flags$&1)!==0;o=false}ae($,f);{Ge.$flags$|=1;if(s){oe(f.$elm$);var u=void 0;var c=void 0;var v=void 0;var d=void 0;var h=void 0;var p=void 0;var m=0;for(;m<le.length;m++){u=le[m];c=u.$nodeToRelocate$;if(!c["s-ol"]){v=Fe.createTextNode("");v["s-nr"]=c;c.parentNode.insertBefore(c["s-ol"]=v,c)}}for(m=0;m<le.length;m++){u=le[m];c=u.$nodeToRelocate$;if(u.$slotRefNode$){d=u.$slotRefNode$.parentNode;h=u.$slotRefNode$.nextSibling;v=c["s-ol"];while(v=v.previousSibling){p=v["s-nr"];if(p&&p["s-sn"]===c["s-sn"]&&d===p.parentNode){p=p.nextSibling;if(!p||!p["s-nr"]){h=p;break}}}if(!h&&d!==c.parentNode||c.nextSibling!==h){if(c!==h){if(!c["s-hn"]&&c["s-ol"]){c["s-hn"]=c["s-ol"].parentNode.nodeName}d.insertBefore(c,h)}}}else{if(c.nodeType===1){c.hidden=true}}}}if(o){ie(f.$elm$)}Ge.$flags$&=~1;le.length=0}};var fe=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var ue=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}fe(e,e.$ancestorComponent$);var r=function(){return ce(e,t)};return nt(r)};var ce=function(e,t){var r=v("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return ye(n,t,r)}));e.$queuedListeners$=null}}{a=ye(n,"componentWillLoad")}}else{{a=ye(n,"componentWillUpdate")}}{a=be(a,(function(){return ye(n,"componentWillRender")}))}r();return be(a,(function(){return ve(e,n,t)}))};var ve=function(e,t,n){return __awaiter(r,void 0,void 0,(function(){var r,a,i,l,o,s;return __generator(this,(function($){r=e.$hostElement$;a=v("update",e.$cmpMeta$.$tagName$);i=r["s-rc"];if(n){W(e)}l=v("render",e.$cmpMeta$.$tagName$);{de(e,t)}if(Ge.$cssShim$){Ge.$cssShim$.updateHost(r)}if(i){i.map((function(e){return e()}));r["s-rc"]=undefined}l();a();{o=r["s-p"];s=function(){return pe(e)};if(o.length===0){s()}else{Promise.all(o).then(s);e.$flags$|=4;o.length=0}}return[2]}))}))};var de=function(e,t,r){try{f=t;t=t.render&&t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{$e(e,t)}}}}catch(n){Ue(n,e.$hostElement$)}f=null;return null};var he=e("e",(function(){return f}));var pe=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=v("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{ye(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{we(r)}{ye(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!i){ge()}}}else{{ye(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(r)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){rt((function(){return ue(e,false)}))}e.$flags$&=~(4|512)}};var me=e("f",(function(e){{var t=Ie(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){ue(t,false)}return r}}));var ge=function(e){{we(Fe.documentElement)}rt((function(){return U(We,"appload",{detail:{namespace:n}})}))};var ye=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){Ue(n)}}return undefined};var be=function(e,t){return e&&e.then?e.then(t):t()};var we=function(e){return e.classList.add("hydrated")};var Ne=function(e,t){return Ie(e).$instanceValues$.get(t)};var xe=function(e,t,r,n){var a=Ie(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(t);var o=a.$flags$;var s=a.$lazyInstance$;r=M(r,n.$members$[t][0]);var $=Number.isNaN(l)&&Number.isNaN(r);var f=r!==l&&!$;if((!(o&8)||l===undefined)&&f){a.$instanceValues$.set(t,r);if(s){if(n.$watchers$&&o&128){var u=n.$watchers$[t];if(u){u.map((function(e){try{s[e](r,l,t)}catch(n){Ue(n,i)}}))}}if((o&(2|16))===2){ue(a,false)}}}};var Re=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Ne(this,n)},set:function(e){xe(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=Ie(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;Ge.jmp((function(){var t=i.get(e);if(n.hasOwnProperty(t)){r=n[t];delete n[t]}else if(a.hasOwnProperty(t)&&typeof n[t]==="number"&&n[t]==r){return}n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var Se=function(e,t,n,a,i){return __awaiter(r,void 0,void 0,(function(){var e,r,a,l,o,s,$;return __generator(this,(function(f){switch(f.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;i=He(n);if(!i.then)return[3,2];e=d();return[4,i];case 1:i=f.sent();e();f.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}Re(i,n,2);i.isProxied=true}r=v("createInstance",n.$tagName$);{t.$flags$|=8}try{new i(t)}catch(u){Ue(u)}{t.$flags$&=~8}{t.$flags$|=128}r();if(i.style){a=i.style;l=D(n);if(!Ve.has(l)){o=v("registerStyles",n.$tagName$);H(l,a,!!(n.$flags$&1));o()}}f.label=3;case 3:s=t.$ancestorComponent$;$=function(){return ue(t,true)};if(s&&s["s-rc"]){s["s-rc"].push($)}else{$()}return[2]}}))}))};var _e=function(e){if((Ge.$flags$&1)===0){var t=Ie(e);var r=t.$cmpMeta$;var n=v("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;var a=void 0;{a=e.getAttribute(y);if(a){P(e,r.$tagName$,a,t)}}if(!a){if(r.$flags$&(4|8)){ke(e)}}{var i=e;while(i=i.parentNode||i.host){if(i.nodeType===1&&i.hasAttribute("s-id")&&i["s-p"]||i["s-p"]){fe(t,t.$ancestorComponent$=i);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{Se(e,t,r)}}else{je(e,t,r.$listeners$)}n()}};var ke=function(e){var t=e["s-cr"]=Fe.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Te=function(e){if((Ge.$flags$&1)===0){var t=Ie(e);{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}if(Ge.$cssShim$){Ge.$cssShim$.removeHost(e)}}};var Ce=function(e,t){var r=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype.item=function(e){return this[e]};return t}(Array);if(t.$flags$&8){var n=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){return this.childNodes.map((function(e){return e.nodeType===1}))}});Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}});Object.defineProperty(e,"childNodes",{get:function(){var e=n.call(this);if((Ge.$flags$&1)===0&&Ie(this).$flags$&2){var t=new r;for(var a=0;a<e.length;a++){var i=e[a]["s-nr"];if(i){t.push(i)}}return t}return r.from(e)}})}};var Le=e("b",(function(e,t){if(t===void 0){t={}}var r=v();var n=[];var a=t.exclude||[];var i=We.customElements;var l=Fe.head;var o=l.querySelector("meta[charset]");var s=Fe.createElement("style");var $=[];var f;var u=true;Object.assign(Ge,t);Ge.$resourcesUrl$=new URL(t.resourcesUrl||"./",Fe.baseURI).href;{Ge.$flags$|=2}e.map((function(e){e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}var l=r.$tagName$;var o=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;Be(t,r);{Ce(t,r)}return n}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}if(u){$.push(this)}else{Ge.jmp((function(){return _e(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;Ge.jmp((function(){return Te(e)}))};t.prototype.componentOnReady=function(){return Ie(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){n.push(l);i.define(l,Re(o,r,1))}}))}));{s.innerHTML=n+N;s.setAttribute("data-styles","");l.insertBefore(s,o?o.nextSibling:l.firstChild)}u=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{Ge.jmp((function(){return f=setTimeout(ge,30)}))}}r()}));var je=function(e,t,r,n){if(r){r.map((function(r){var n=r[0],a=r[1],i=r[2];var l=Ee(e,n);var o=Ae(t,i);var s=Pe(n);Ge.ael(l,a,o,s);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return Ge.rel(l,a,o,s)}))}))}};var Ae=function(e,t){return function(r){try{{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}catch(n){Ue(n)}}};var Ee=function(e,t){if(t&4)return Fe;if(t&8)return We;return e};var Pe=function(e){return(e&2)!==0};var Oe=new WeakMap;var Ie=function(e){return Oe.get(e)};var Me=e("r",(function(e,t){return Oe.set(t.$lazyInstance$=e,t)}));var Be=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}je(e,r,t.$listeners$);return Oe.set(e,r)};var qe=function(e,t){return t in e};var Ue=function(e,t){return(0,console.error)(e,t)};var ze=new Map;var He=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=ze.get(i);if(l){return l[a]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return t.import("./".concat(i,".entry.js").concat("")).then((function(e){{ze.set(i,e)}return e[a]}),Ue)};var Ve=new Map;var We=e("w",typeof window!=="undefined"?window:{});var De=e("C",We.CSS);var Fe=e("d",We.document||{head:{}});var Ge=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}});var Je=true;var Ke=e("a",(function(e){return Promise.resolve(e)}));var Qe=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false}();var Xe=[];var Ye=[];var Ze=function(e,t){return function(r){e.push(r);if(!u){u=true;if(t&&Ge.$flags$&4){rt(tt)}else{Ge.raf(tt)}}}};var et=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){Ue(r)}}e.length=0};var tt=function(){et(Xe);{et(Ye);if(u=Xe.length>0){Ge.raf(tt)}}};var rt=function(e){return Ke().then(e)};var nt=Ze(Ye,true)}}}));