System.register(["./common-7b01239a.system.js","./commonDynamic-9601283c.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.c},function(e){n=e.c}],execute:function(){e("l",s);function s(e,s,c){var r=document.getElementById(e);var o=JSON.parse(r.innerHTML);Object.keys(o).map((function(e){t.set(e,o[e])}));if(c.isBrowser){var i=document.getElementById(s);var m=JSON.parse(i.innerHTML);Object.keys(m).map((function(e){n.set(e,m[e])}));setTimeout((function(){n.set("loaded",true)}),100)}}}}}));