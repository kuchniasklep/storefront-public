System.register(["./common-0ccf6d0a.system.js"],(function(r){"use strict";var e;return{setters:[function(r){e=r.c}],execute:function(){r({a:n,p:t});function t(r){var t=e.get("currency");if(!t)return r;return n(r)+" ".concat(t.symbol)}function n(r){var t=e.get("currency");if(!t)return r;return r.toFixed(2).replace(".",t.separator)}}}}));