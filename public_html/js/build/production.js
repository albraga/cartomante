// i18next, v1.7.4
// Copyright (c)2014 Jan Mühlemann (jamuhl).
// Distributed under MIT license
// http://i18next.com
!function(){function a(a,b){if(!b||"function"==typeof b)return a;for(var c in b)a[c]=b[c];return a}function b(a,c){for(var d in c)d in a?b(a[d],c[d]):a[d]=c[d];return a}function c(a,b,c){var d,e=0,f=a.length,g=void 0===f||"[object Array]"!==Object.prototype.toString.apply(a)||"function"==typeof a;if(c)if(g){for(d in a)if(b.apply(a[d],c)===!1)break}else for(;f>e&&b.apply(a[e++],c)!==!1;);else if(g){for(d in a)if(b.call(a[d],d,a[d])===!1)break}else for(;f>e&&b.call(a[e],e,a[e++])!==!1;);return a}function d(a){return"string"==typeof a?a.replace(/[&<>"'\/]/g,function(a){return O[a]}):a}function e(a){var b=function(a){if(window.XMLHttpRequest)return a(null,new XMLHttpRequest);if(window.ActiveXObject)try{return a(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(b){return a(null,new ActiveXObject("Microsoft.XMLHTTP"))}return a(new Error)},c=function(a){if("string"==typeof a)return a;var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},d=function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(192|d>>6),b+=String.fromCharCode(128|63&d)):(b+=String.fromCharCode(224|d>>12),b+=String.fromCharCode(128|63&d>>6),b+=String.fromCharCode(128|63&d))}return b},e=function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a=d(a);var c,e,f,g,h,i,j,k="",l=0;do c=a.charCodeAt(l++),e=a.charCodeAt(l++),f=a.charCodeAt(l++),g=c>>2,h=(3&c)<<4|e>>4,i=(15&e)<<2|f>>6,j=63&f,isNaN(e)?i=j=64:isNaN(f)&&(j=64),k+=b.charAt(g)+b.charAt(h)+b.charAt(i)+b.charAt(j),c=e=f="",g=h=i=j="";while(l<a.length);return k},f=function(){for(var a=arguments[0],b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}return a},g=function(a,d,e,h){"function"==typeof e&&(h=e,e={}),e.cache=e.cache||!1,e.data=e.data||{},e.headers=e.headers||{},e.jsonp=e.jsonp||!1,e.async=void 0===e.async?!0:e.async;var i,j=f({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},g.headers,e.headers);if(i="application/json"===j["content-type"]?JSON.stringify(e.data):c(e.data),"GET"===a){var k=[];if(i&&(k.push(i),i=null),e.cache||k.push("_="+(new Date).getTime()),e.jsonp&&(k.push("callback="+e.jsonp),k.push("jsonp="+e.jsonp)),k=k.join("&"),k.length>1&&(d+=d.indexOf("?")>-1?"&"+k:"?"+k),e.jsonp){var l=document.getElementsByTagName("head")[0],m=document.createElement("script");return m.type="text/javascript",m.src=d,l.appendChild(m),void 0}}b(function(b,c){if(b)return h(b);c.open(a,d,e.async);for(var f in j)j.hasOwnProperty(f)&&c.setRequestHeader(f,j[f]);c.onreadystatechange=function(){if(4===c.readyState){var a=c.responseText||"";if(!h)return;h(c.status,{text:function(){return a},json:function(){return JSON.parse(a)}})}},c.send(i)})},h={authBasic:function(a,b){g.headers.Authorization="Basic "+e(a+":"+b)},connect:function(a,b,c){return g("CONNECT",a,b,c)},del:function(a,b,c){return g("DELETE",a,b,c)},get:function(a,b,c){return g("GET",a,b,c)},head:function(a,b,c){return g("HEAD",a,b,c)},headers:function(a){g.headers=a||{}},isAllowed:function(a,b,c){this.options(a,function(a,d){c(-1!==d.text().indexOf(b))})},options:function(a,b,c){return g("OPTIONS",a,b,c)},patch:function(a,b,c){return g("PATCH",a,b,c)},post:function(a,b,c){return g("POST",a,b,c)},put:function(a,b,c){return g("PUT",a,b,c)},trace:function(a,b,c){return g("TRACE",a,b,c)}},i=a.type?a.type.toLowerCase():"get";h[i](a.url,a,function(b,c){200===b||0===b&&c.text()?a.success(c.json(),b,null):a.error(c.text(),b,null)})}function f(a,b){"function"==typeof a&&(b=a,a={}),a=a||{},R.extend(N,a),delete N.fixLng,"string"==typeof N.ns&&(N.ns={namespaces:[N.ns],defaultNs:N.ns}),"string"==typeof N.fallbackNS&&(N.fallbackNS=[N.fallbackNS]),("string"==typeof N.fallbackLng||"boolean"==typeof N.fallbackLng)&&(N.fallbackLng=[N.fallbackLng]),N.interpolationPrefixEscaped=R.regexEscape(N.interpolationPrefix),N.interpolationSuffixEscaped=R.regexEscape(N.interpolationSuffix),N.lng||(N.lng=R.detectLanguage()),J=R.toLanguages(N.lng),D=J[0],R.log("currentLng set to: "+D),N.useCookie&&R.cookie.read(N.cookieName)!==D&&R.cookie.create(N.cookieName,D,N.cookieExpirationTime,N.cookieDomain),N.detectLngFromLocalStorage&&"undefined"!=typeof document&&window.localstorage&&window.localStorage.setItem("i18next_lng",D);var c=x;a.fixLng&&(c=function(a,b){return b=b||{},b.lng=b.lng||c.lng,x(a,b)},c.lng=D),S.setCurrentLng(D),F&&N.setJqueryExt&&q();var d;if(F&&F.Deferred&&(d=F.Deferred()),!N.resStore){var e=R.toLanguages(N.lng);"string"==typeof N.preload&&(N.preload=[N.preload]);for(var f=0,g=N.preload.length;g>f;f++)for(var h=R.toLanguages(N.preload[f]),i=0,j=h.length;j>i;i++)e.indexOf(h[i])<0&&e.push(h[i]);return G.sync.load(e,N,function(a,e){H=e,K=!0,b&&b(c),d&&d.resolve(c)}),d?d.promise():void 0}return H=N.resStore,K=!0,b&&b(c),d&&d.resolve(c),d?d.promise():void 0}function g(a,b){"string"==typeof a&&(a=[a]);for(var c=0,d=a.length;d>c;c++)N.preload.indexOf(a[c])<0&&N.preload.push(a[c]);return f(b)}function h(a,b,c,d){"string"!=typeof b?(c=b,b=N.ns.defaultNs):N.ns.namespaces.indexOf(b)<0&&N.ns.namespaces.push(b),H[a]=H[a]||{},H[a][b]=H[a][b]||{},d?R.deepExtend(H[a][b],c):R.extend(H[a][b],c)}function i(a,b){"string"!=typeof b&&(b=N.ns.defaultNs),H[a]=H[a]||{},H[a][b]={}}function j(a,b,c,d){"string"!=typeof b?(resource=b,b=N.ns.defaultNs):N.ns.namespaces.indexOf(b)<0&&N.ns.namespaces.push(b),H[a]=H[a]||{},H[a][b]=H[a][b]||{};for(var e=c.split(N.keyseparator),f=0,g=H[N.lng][b];e[f];)f==e.length-1?g[e[f]]=d:(null==g[e[f]]&&(g[e[f]]={}),g=g[e[f]]),f++}function k(a,b,c){"string"!=typeof b?(resource=b,b=N.ns.defaultNs):N.ns.namespaces.indexOf(b)<0&&N.ns.namespaces.push(b);for(var d in c)"string"==typeof c[d]&&j(a,b,d,c[d])}function l(a){N.ns.defaultNs=a}function m(a,b){n([a],b)}function n(a,b){var c={dynamicLoad:N.dynamicLoad,resGetPath:N.resGetPath,getAsync:N.getAsync,customLoad:N.customLoad,ns:{namespaces:a,defaultNs:""}},d=R.toLanguages(N.lng);"string"==typeof N.preload&&(N.preload=[N.preload]);for(var e=0,f=N.preload.length;f>e;e++)for(var g=R.toLanguages(N.preload[e]),h=0,i=g.length;i>h;h++)d.indexOf(g[h])<0&&d.push(g[h]);for(var j=[],k=0,l=d.length;l>k;k++){var m=!1,n=H[d[k]];if(n)for(var o=0,p=a.length;p>o;o++)n[a[o]]||(m=!0);else m=!0;m&&j.push(d[k])}j.length?G.sync._fetch(j,c,function(c,d){var e=a.length*j.length;R.each(a,function(a,c){N.ns.namespaces.indexOf(c)<0&&N.ns.namespaces.push(c),R.each(j,function(a,f){H[f]=H[f]||{},H[f][c]=d[f][c],e--,0===e&&b&&(N.useLocalStorage&&G.sync._storeLocal(H),b())})})}):b&&b()}function o(a,b,c){return"function"==typeof b?(c=b,b={}):b||(b={}),b.lng=a,f(b,c)}function p(){return D}function q(){function a(a,b,c){if(0!==b.length){var d="text";if(0===b.indexOf("[")){var e=b.split("]");b=e[1],d=e[0].substr(1,e[0].length-1)}b.indexOf(";")===b.length-1&&(b=b.substr(0,b.length-2));var f;if("html"===d)f=N.defaultValueFromContent?F.extend({defaultValue:a.html()},c):c,a.html(F.t(b,f));else if("text"===d)f=N.defaultValueFromContent?F.extend({defaultValue:a.text()},c):c,a.text(F.t(b,f));else if("prepend"===d)f=N.defaultValueFromContent?F.extend({defaultValue:a.html()},c):c,a.prepend(F.t(b,f));else if("append"===d)f=N.defaultValueFromContent?F.extend({defaultValue:a.html()},c):c,a.append(F.t(b,f));else if(0===d.indexOf("data-")){var g=d.substr("data-".length);f=N.defaultValueFromContent?F.extend({defaultValue:a.data(g)},c):c;var h=F.t(b,f);a.data(g,h),a.attr(d,h)}else f=N.defaultValueFromContent?F.extend({defaultValue:a.attr(d)},c):c,a.attr(d,F.t(b,f))}}function b(b,c){var d=b.attr(N.selectorAttr);if(d||"undefined"==typeof d||d===!1||(d=b.text()||b.val()),d){var e=b,f=b.data("i18n-target");if(f&&(e=b.find(f)||b),c||N.useDataAttrOptions!==!0||(c=b.data("i18n-options")),c=c||{},d.indexOf(";")>=0){var g=d.split(";");F.each(g,function(b,d){""!==d&&a(e,d,c)})}else a(e,d,c);N.useDataAttrOptions===!0&&b.data("i18n-options",c)}}F.t=F.t||x,F.fn.i18n=function(a){return this.each(function(){b(F(this),a);var c=F(this).find("["+N.selectorAttr+"]");c.each(function(){b(F(this),a)})})}}function r(a,b,c,d){if(!a)return a;if(d=d||b,a.indexOf(d.interpolationPrefix||N.interpolationPrefix)<0)return a;var e=d.interpolationPrefix?R.regexEscape(d.interpolationPrefix):N.interpolationPrefixEscaped,f=d.interpolationSuffix?R.regexEscape(d.interpolationSuffix):N.interpolationSuffixEscaped,g="HTML"+f,h=b.replace&&"object"==typeof b.replace?b.replace:b;return R.each(h,function(b,h){var i=c?c+N.keyseparator+b:b;"object"==typeof h&&null!==h?a=r(a,h,i,d):d.escapeInterpolation||N.escapeInterpolation?(a=a.replace(new RegExp([e,i,g].join(""),"g"),R.regexReplacementEscape(h)),a=a.replace(new RegExp([e,i,f].join(""),"g"),R.regexReplacementEscape(R.escape(h)))):a=a.replace(new RegExp([e,i,f].join(""),"g"),R.regexReplacementEscape(h))}),a}function s(a,b){var c=",",d="{",e="}",f=R.extend({},b);for(delete f.postProcess;-1!=a.indexOf(N.reusePrefix)&&(I++,!(I>N.maxRecursion));){var g=a.lastIndexOf(N.reusePrefix),h=a.indexOf(N.reuseSuffix,g)+N.reuseSuffix.length,i=a.substring(g,h),j=i.replace(N.reusePrefix,"").replace(N.reuseSuffix,"");if(g>=h)return R.error("there is an missing closing in following translation value",a),"";if(-1!=j.indexOf(c)){var k=j.indexOf(c);if(-1!=j.indexOf(d,k)&&-1!=j.indexOf(e,k)){var l=j.indexOf(d,k),m=j.indexOf(e,l)+e.length;try{f=R.extend(f,JSON.parse(j.substring(l,m))),j=j.substring(0,k)}catch(n){}}}var o=A(j,f);a=a.replace(i,R.regexReplacementEscape(o))}return a}function t(a){return a.context&&("string"==typeof a.context||"number"==typeof a.context)}function u(a,b){return void 0!==a.count&&"string"!=typeof a.count&&S.needsPlural(b,a.count)}function v(a){return void 0!==a.indefinite_article&&"string"!=typeof a.indefinite_article&&a.indefinite_article}function w(a,b){b=b||{};var c=y(a,b),d=B(a,b);return void 0!==d||d===c}function x(a,b){return b=b||{},K?(I=0,A.apply(null,arguments)):(R.log("i18next not finished initialization. you might have called t function before loading resources finished."),b.defaultValue||"")}function y(a,b){return void 0!==b.defaultValue?b.defaultValue:a}function z(){for(var a=[],b=1;b<arguments.length;b++)a.push(arguments[b]);return{postProcess:"sprintf",sprintf:a}}function A(a,b){if(b&&"object"!=typeof b?"sprintf"===N.shortcutFunction?b=z.apply(null,arguments):"defaultValue"===N.shortcutFunction&&(b={defaultValue:b}):b=b||{},void 0===a||null===a||""===a)return"";"string"==typeof a&&(a=[a]);var c=a[0];if(a.length>1)for(var d=0;d<a.length&&(c=a[d],!w(c,b));d++);var e,f=y(c,b),g=B(c,b),h=b.lng?R.toLanguages(b.lng,b.fallbackLng):J,i=b.ns||N.ns.defaultNs;c.indexOf(N.nsseparator)>-1&&(e=c.split(N.nsseparator),i=e[0],c=e[1]),void 0===g&&N.sendMissing&&"function"==typeof N.missingKeyHandler&&(b.lng?N.missingKeyHandler(h[0],i,c,f,h):N.missingKeyHandler(N.lng,i,c,f,h));var j=b.postProcess||N.postProcess;void 0!==g&&j&&T[j]&&(g=T[j](g,c,b));var k=f;if(f.indexOf(N.nsseparator)>-1&&(e=f.split(N.nsseparator),k=e[1]),k===c&&N.parseMissingKey&&(f=N.parseMissingKey(f)),void 0===g&&(f=r(f,b),f=s(f,b),j&&T[j])){var l=y(c,b);g=T[j](l,c,b)}return void 0!==g?g:f}function B(a,b){b=b||{};var c,d,e=y(a,b),f=J;if(!H)return e;if("cimode"===f[0].toLowerCase())return e;if(b.lng&&(f=R.toLanguages(b.lng,b.fallbackLng),!H[f[0]])){var g=N.getAsync;N.getAsync=!1,G.sync.load(f,N,function(a,b){R.extend(H,b),N.getAsync=g})}var h=b.ns||N.ns.defaultNs;if(a.indexOf(N.nsseparator)>-1){var i=a.split(N.nsseparator);h=i[0],a=i[1]}if(t(b)){c=R.extend({},b),delete c.context,c.defaultValue=N.contextNotFound;var j=h+N.nsseparator+a+"_"+b.context;if(d=x(j,c),d!=N.contextNotFound)return r(d,{context:b.context})}if(u(b,f[0])){c=R.extend({},b),delete c.count,c.defaultValue=N.pluralNotFound;var k=h+N.nsseparator+a+N.pluralSuffix,l=S.get(f[0],b.count);if(l>=0?k=k+"_"+l:1===l&&(k=h+N.nsseparator+a),d=x(k,c),d!=N.pluralNotFound)return r(d,{count:b.count,interpolationPrefix:b.interpolationPrefix,interpolationSuffix:b.interpolationSuffix})}if(v(b)){var m=R.extend({},b);delete m.indefinite_article,m.defaultValue=N.indefiniteNotFound;var n=h+N.nsseparator+a+(b.count&&!u(b,f[0])||!b.count?N.indefiniteSuffix:"");if(d=x(n,m),d!=N.indefiniteNotFound)return d}for(var o,p=a.split(N.keyseparator),q=0,w=f.length;w>q&&void 0===o;q++){for(var z=f[q],C=0,D=H[z]&&H[z][h];p[C];)D=D&&D[p[C]],C++;if(void 0!==D){var E=Object.prototype.toString.apply(D);if("string"==typeof D)D=r(D,b),D=s(D,b);else if("[object Array]"!==E||N.returnObjectTrees||b.returnObjectTrees){if(null===D&&N.fallbackOnNull===!0)D=void 0;else if(null!==D)if(N.returnObjectTrees||b.returnObjectTrees){if("[object Number]"!==E&&"[object Function]"!==E&&"[object RegExp]"!==E){var F="[object Array]"===E?[]:{};R.each(D,function(c){F[c]=A(h+N.nsseparator+a+N.keyseparator+c,b)}),D=F}}else N.objectTreeKeyHandler&&"function"==typeof N.objectTreeKeyHandler?D=N.objectTreeKeyHandler(a,D,z,h,b):(D="key '"+h+":"+a+" ("+z+")' "+"returned an object instead of string.",R.log(D))}else D=D.join("\n"),D=r(D,b),D=s(D,b);"string"==typeof D&&""===D.trim()&&N.fallbackOnEmpty===!0&&(D=void 0),o=D}}if(void 0===o&&!b.isFallbackLookup&&(N.fallbackToDefaultNS===!0||N.fallbackNS&&N.fallbackNS.length>0)){if(b.isFallbackLookup=!0,N.fallbackNS.length){for(var I=0,K=N.fallbackNS.length;K>I;I++)if(o=B(N.fallbackNS[I]+N.nsseparator+a,b)){var L=o.indexOf(N.nsseparator)>-1?o.split(N.nsseparator)[1]:o,M=e.indexOf(N.nsseparator)>-1?e.split(N.nsseparator)[1]:e;if(L!==M)break}}else o=B(a,b);b.isFallbackLookup=!1}return o}function C(){var a,b=[];if("undefined"!=typeof window&&(!function(){for(var a=window.location.search.substring(1),c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("=");if(e>0){var f=c[d].substring(0,e),g=c[d].substring(e+1);b[f]=g}}}(),b[N.detectLngQS]&&(a=b[N.detectLngQS])),!a&&"undefined"!=typeof document&&N.useCookie){var c=R.cookie.read(N.cookieName);c&&(a=c)}return!a&&"undefined"!=typeof document&&window.localstorage&&N.detectLngFromLocalStorage&&(a=window.localStorage.getItem("i18next_lng")),a||"undefined"==typeof navigator||(a=navigator.language?navigator.language:navigator.userLanguage),a||(a=N.fallbackLng[0]),a}Array.prototype.indexOf||(Array.prototype.indexOf=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>0&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&1/0!=d&&d!=-1/0&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=c;arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d))));for(var e=d>=0?Math.min(d,c-1):c-Math.abs(d);e>=0;e--)if(e in b&&b[e]===a)return e;return-1}),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var D,E=this,F=E.jQuery||E.Zepto,G={},H={},I=0,J=[],K=!1,L={};if("undefined"!=typeof module&&module.exports){if(!F)try{F=require("jquery")}catch(M){}F&&(F.i18n=F.i18n||G),module.exports=G}else F&&(F.i18n=F.i18n||G),E.i18n=E.i18n||G;L={load:function(a,b,c){b.useLocalStorage?L._loadLocal(a,b,function(d,e){for(var f=[],g=0,h=a.length;h>g;g++)e[a[g]]||f.push(a[g]);f.length>0?L._fetch(f,b,function(a,b){R.extend(e,b),L._storeLocal(b),c(null,e)}):c(null,e)}):L._fetch(a,b,function(a,b){c(null,b)})},_loadLocal:function(a,b,c){var d={},e=(new Date).getTime();if(window.localStorage){var f=a.length;R.each(a,function(a,g){var h=window.localStorage.getItem("res_"+g);h&&(h=JSON.parse(h),h.i18nStamp&&h.i18nStamp+b.localStorageExpirationTime>e&&(d[g]=h)),f--,0===f&&c(null,d)})}},_storeLocal:function(a){if(window.localStorage)for(var b in a)a[b].i18nStamp=(new Date).getTime(),window.localStorage.setItem("res_"+b,JSON.stringify(a[b]))},_fetch:function(a,b,c){var d=b.ns,e={};if(b.dynamicLoad){var f=function(a,b){c(null,b)};if("function"==typeof b.customLoad)b.customLoad(a,d.namespaces,b,f);else{var g=r(b.resGetPath,{lng:a.join("+"),ns:d.namespaces.join("+")});R.ajax({url:g,success:function(a){R.log("loaded: "+g),f(null,a)},error:function(a,b,c){R.log("failed loading: "+g),f("failed loading resource.json error: "+c)},dataType:"json",async:b.getAsync})}}else{var h,i=d.namespaces.length*a.length;R.each(d.namespaces,function(d,f){R.each(a,function(a,d){var g=function(a,b){a&&(h=h||[],h.push(a)),e[d]=e[d]||{},e[d][f]=b,i--,0===i&&c(h,e)};"function"==typeof b.customLoad?b.customLoad(d,f,b,g):L._fetchOne(d,f,b,g)})})}},_fetchOne:function(a,b,c,d){var e=r(c.resGetPath,{lng:a,ns:b});R.ajax({url:e,success:function(a){R.log("loaded: "+e),d(null,a)},error:function(a,b,c){if(b&&200==b||a&&a.status&&200==a.status)R.error("There is a typo in: "+e);else if(b&&404==b||a&&a.status&&404==a.status)R.log("Does not exist: "+e);else{var f=b?b:a&&a.status?a.status:null;R.log(f+" when loading "+e)}d(c,{})},dataType:"json",async:c.getAsync})},postMissing:function(a,b,c,d,e){var f={};f[c]=d;var g=[];if("fallback"===N.sendMissingTo&&N.fallbackLng[0]!==!1)for(var h=0;h<N.fallbackLng.length;h++)g.push({lng:N.fallbackLng[h],url:r(N.resPostPath,{lng:N.fallbackLng[h],ns:b})});else if("current"===N.sendMissingTo||"fallback"===N.sendMissingTo&&N.fallbackLng[0]===!1)g.push({lng:a,url:r(N.resPostPath,{lng:a,ns:b})});else if("all"===N.sendMissingTo)for(var h=0,i=e.length;i>h;h++)g.push({lng:e[h],url:r(N.resPostPath,{lng:e[h],ns:b})});for(var j=0,k=g.length;k>j;j++){var l=g[j];R.ajax({url:l.url,type:N.sendType,data:f,success:function(){R.log("posted missing key '"+c+"' to: "+l.url);for(var a=c.split("."),e=0,f=H[l.lng][b];a[e];)f=f[a[e]]=e===a.length-1?d:f[a[e]]||{},e++},error:function(){R.log("failed posting missing key '"+c+"' to: "+l.url)},dataType:"json",async:N.postAsync})}}};var N={lng:void 0,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:["dev"],fallbackNS:[],detectLngQS:"setLng",detectLngFromLocalStorage:!1,ns:"translation",fallbackOnNull:!0,fallbackOnEmpty:!1,fallbackToDefaultNS:!1,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:void 0,useLocalStorage:!1,localStorageExpirationTime:6048e5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),escapeInterpolation:!1,indefiniteSuffix:"_indefinite",indefiniteNotFound:["indefinite_not_found",Math.random()].join(""),setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:void 0,useCookie:!0,cookieName:"i18next",cookieDomain:void 0,objectTreeKeyHandler:void 0,postProcess:void 0,parseMissingKey:void 0,missingKeyHandler:L.postMissing,shortcutFunction:"sprintf"},O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},P={create:function(a,b,c,d){var e;if(c){var f=new Date;f.setTime(f.getTime()+1e3*60*c),e="; expires="+f.toGMTString()}else e="";d=d?"domain="+d+";":"",document.cookie=a+"="+b+e+";"+d+"path=/"},read:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null},remove:function(a){this.create(a,"",-1)}},Q={create:function(){},read:function(){return null},remove:function(){}},R={extend:F?F.extend:a,deepExtend:b,each:F?F.each:c,ajax:F?F.ajax:"undefined"!=typeof document?e:function(){},cookie:"undefined"!=typeof document?P:Q,detectLanguage:C,escape:d,log:function(a){N.debug&&"undefined"!=typeof console&&console.log(a)},error:function(a){"undefined"!=typeof console&&console.error(a)},getCountyIndexOfLng:function(a){var b=0;return("nb-NO"===a||"nn-NO"===a)&&(b=1),b},toLanguages:function(a){var b=this.log,c=[],d=N.lngWhitelist||!1,e=function(a){!d||d.indexOf(a)>-1?c.push(a):b("rejecting non-whitelisted language: "+a)};if("string"==typeof a&&a.indexOf("-")>-1){var f=a.split("-");a=N.lowerCaseLng?f[0].toLowerCase()+"-"+f[1].toLowerCase():f[0].toLowerCase()+"-"+f[1].toUpperCase(),"unspecific"!==N.load&&e(a),"current"!==N.load&&e(f[this.getCountyIndexOfLng(a)])}else e(a);for(var g=0;g<N.fallbackLng.length;g++)-1===c.indexOf(N.fallbackLng[g])&&N.fallbackLng[g]&&c.push(N.fallbackLng[g]);return c},regexEscape:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},regexReplacementEscape:function(a){return"string"==typeof a?a.replace(/\$/g,"$$$$"):a}};R.applyReplacement=r;var S={rules:{ach:{name:"Acholi",numbers:[1,2],plurals:function(a){return Number(a>1)}},af:{name:"Afrikaans",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ak:{name:"Akan",numbers:[1,2],plurals:function(a){return Number(a>1)}},am:{name:"Amharic",numbers:[1,2],plurals:function(a){return Number(a>1)}},an:{name:"Aragonese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ar:{name:"Arabic",numbers:[0,1,2,3,11,100],plurals:function(a){return Number(0===a?0:1==a?1:2==a?2:a%100>=3&&10>=a%100?3:a%100>=11?4:5)}},arn:{name:"Mapudungun",numbers:[1,2],plurals:function(a){return Number(a>1)}},ast:{name:"Asturian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ay:{name:"Aymará",numbers:[1],plurals:function(){return 0}},az:{name:"Azerbaijani",numbers:[1,2],plurals:function(a){return Number(1!=a)}},be:{name:"Belarusian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},bg:{name:"Bulgarian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},bn:{name:"Bengali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},bo:{name:"Tibetan",numbers:[1],plurals:function(){return 0}},br:{name:"Breton",numbers:[1,2],plurals:function(a){return Number(a>1)}},bs:{name:"Bosnian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},ca:{name:"Catalan",numbers:[1,2],plurals:function(a){return Number(1!=a)}},cgg:{name:"Chiga",numbers:[1],plurals:function(){return 0}},cs:{name:"Czech",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a>=2&&4>=a?1:2)}},csb:{name:"Kashubian",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},cy:{name:"Welsh",numbers:[1,2,3,8],plurals:function(a){return Number(1==a?0:2==a?1:8!=a&&11!=a?2:3)}},da:{name:"Danish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},de:{name:"German",numbers:[1,2],plurals:function(a){return Number(1!=a)}},dz:{name:"Dzongkha",numbers:[1],plurals:function(){return 0}},el:{name:"Greek",numbers:[1,2],plurals:function(a){return Number(1!=a)}},en:{name:"English",numbers:[1,2],plurals:function(a){return Number(1!=a)}},eo:{name:"Esperanto",numbers:[1,2],plurals:function(a){return Number(1!=a)}},es:{name:"Spanish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},es_ar:{name:"Argentinean Spanish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},et:{name:"Estonian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},eu:{name:"Basque",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fa:{name:"Persian",numbers:[1],plurals:function(){return 0}},fi:{name:"Finnish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fil:{name:"Filipino",numbers:[1,2],plurals:function(a){return Number(a>1)}},fo:{name:"Faroese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fr:{name:"French",numbers:[1,2],plurals:function(a){return Number(a>=2)}},fur:{name:"Friulian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},fy:{name:"Frisian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ga:{name:"Irish",numbers:[1,2,3,7,11],plurals:function(a){return Number(1==a?0:2==a?1:7>a?2:11>a?3:4)}},gd:{name:"Scottish Gaelic",numbers:[1,2,3,20],plurals:function(a){return Number(1==a||11==a?0:2==a||12==a?1:a>2&&20>a?2:3)}},gl:{name:"Galician",numbers:[1,2],plurals:function(a){return Number(1!=a)}},gu:{name:"Gujarati",numbers:[1,2],plurals:function(a){return Number(1!=a)}},gun:{name:"Gun",numbers:[1,2],plurals:function(a){return Number(a>1)}},ha:{name:"Hausa",numbers:[1,2],plurals:function(a){return Number(1!=a)}},he:{name:"Hebrew",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hi:{name:"Hindi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hr:{name:"Croatian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},hu:{name:"Hungarian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},hy:{name:"Armenian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ia:{name:"Interlingua",numbers:[1,2],plurals:function(a){return Number(1!=a)}},id:{name:"Indonesian",numbers:[1],plurals:function(){return 0}},is:{name:"Icelandic",numbers:[1,2],plurals:function(a){return Number(1!=a%10||11==a%100)}},it:{name:"Italian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ja:{name:"Japanese",numbers:[1],plurals:function(){return 0}},jbo:{name:"Lojban",numbers:[1],plurals:function(){return 0}},jv:{name:"Javanese",numbers:[0,1],plurals:function(a){return Number(0!==a)}},ka:{name:"Georgian",numbers:[1],plurals:function(){return 0}},kk:{name:"Kazakh",numbers:[1],plurals:function(){return 0}},km:{name:"Khmer",numbers:[1],plurals:function(){return 0}},kn:{name:"Kannada",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ko:{name:"Korean",numbers:[1],plurals:function(){return 0}},ku:{name:"Kurdish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},kw:{name:"Cornish",numbers:[1,2,3,4],plurals:function(a){return Number(1==a?0:2==a?1:3==a?2:3)}},ky:{name:"Kyrgyz",numbers:[1],plurals:function(){return 0}},lb:{name:"Letzeburgesch",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ln:{name:"Lingala",numbers:[1,2],plurals:function(a){return Number(a>1)}},lo:{name:"Lao",numbers:[1],plurals:function(){return 0}},lt:{name:"Lithuanian",numbers:[1,2,10],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&(10>a%100||a%100>=20)?1:2)}},lv:{name:"Latvian",numbers:[1,2,0],plurals:function(a){return Number(1==a%10&&11!=a%100?0:0!==a?1:2)}},mai:{name:"Maithili",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mfe:{name:"Mauritian Creole",numbers:[1,2],plurals:function(a){return Number(a>1)}},mg:{name:"Malagasy",numbers:[1,2],plurals:function(a){return Number(a>1)}},mi:{name:"Maori",numbers:[1,2],plurals:function(a){return Number(a>1)}},mk:{name:"Macedonian",numbers:[1,2],plurals:function(a){return Number(1==a||1==a%10?0:1)}},ml:{name:"Malayalam",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mn:{name:"Mongolian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},mnk:{name:"Mandinka",numbers:[0,1,2],plurals:function(a){return Number(1==a?1:2)}},mr:{name:"Marathi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ms:{name:"Malay",numbers:[1],plurals:function(){return 0}},mt:{name:"Maltese",numbers:[1,2,11,20],plurals:function(a){return Number(1==a?0:0===a||a%100>1&&11>a%100?1:a%100>10&&20>a%100?2:3)}},nah:{name:"Nahuatl",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nap:{name:"Neapolitan",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nb:{name:"Norwegian Bokmal",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ne:{name:"Nepali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nl:{name:"Dutch",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nn:{name:"Norwegian Nynorsk",numbers:[1,2],plurals:function(a){return Number(1!=a)}},no:{name:"Norwegian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},nso:{name:"Northern Sotho",numbers:[1,2],plurals:function(a){return Number(1!=a)}},oc:{name:"Occitan",numbers:[1,2],plurals:function(a){return Number(a>1)}},or:{name:"Oriya",numbers:[2,1],plurals:function(a){return Number(1!=a)}},pa:{name:"Punjabi",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pap:{name:"Papiamento",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pl:{name:"Polish",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},pms:{name:"Piemontese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ps:{name:"Pashto",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pt:{name:"Portuguese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},pt_br:{name:"Brazilian Portuguese",numbers:[1,2],plurals:function(a){return Number(1!=a)}},rm:{name:"Romansh",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ro:{name:"Romanian",numbers:[1,2,20],plurals:function(a){return Number(1==a?0:0===a||a%100>0&&20>a%100?1:2)}},ru:{name:"Russian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},sah:{name:"Yakut",numbers:[1],plurals:function(){return 0}},sco:{name:"Scots",numbers:[1,2],plurals:function(a){return Number(1!=a)}},se:{name:"Northern Sami",numbers:[1,2],plurals:function(a){return Number(1!=a)}},si:{name:"Sinhala",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sk:{name:"Slovak",numbers:[1,2,5],plurals:function(a){return Number(1==a?0:a>=2&&4>=a?1:2)}},sl:{name:"Slovenian",numbers:[5,1,2,3],plurals:function(a){return Number(1==a%100?1:2==a%100?2:3==a%100||4==a%100?3:0)}},so:{name:"Somali",numbers:[1,2],plurals:function(a){return Number(1!=a)}},son:{name:"Songhay",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sq:{name:"Albanian",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sr:{name:"Serbian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},su:{name:"Sundanese",numbers:[1],plurals:function(){return 0}},sv:{name:"Swedish",numbers:[1,2],plurals:function(a){return Number(1!=a)}},sw:{name:"Swahili",numbers:[1,2],plurals:function(a){return Number(1!=a)}},ta:{name:"Tamil",numbers:[1,2],plurals:function(a){return Number(1!=a)}},te:{name:"Telugu",numbers:[1,2],plurals:function(a){return Number(1!=a)}},tg:{name:"Tajik",numbers:[1,2],plurals:function(a){return Number(a>1)}},th:{name:"Thai",numbers:[1],plurals:function(){return 0}},ti:{name:"Tigrinya",numbers:[1,2],plurals:function(a){return Number(a>1)}},tk:{name:"Turkmen",numbers:[1,2],plurals:function(a){return Number(1!=a)}},tr:{name:"Turkish",numbers:[1,2],plurals:function(a){return Number(a>1)}},tt:{name:"Tatar",numbers:[1],plurals:function(){return 0}},ug:{name:"Uyghur",numbers:[1],plurals:function(){return 0}},uk:{name:"Ukrainian",numbers:[1,2,5],plurals:function(a){return Number(1==a%10&&11!=a%100?0:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?1:2)}},ur:{name:"Urdu",numbers:[1,2],plurals:function(a){return Number(1!=a)}},uz:{name:"Uzbek",numbers:[1,2],plurals:function(a){return Number(a>1)}},vi:{name:"Vietnamese",numbers:[1],plurals:function(){return 0}},wa:{name:"Walloon",numbers:[1,2],plurals:function(a){return Number(a>1)}},wo:{name:"Wolof",numbers:[1],plurals:function(){return 0}},yo:{name:"Yoruba",numbers:[1,2],plurals:function(a){return Number(1!=a)}},zh:{name:"Chinese",numbers:[1],plurals:function(){return 0}}},addRule:function(a,b){S.rules[a]=b},setCurrentLng:function(a){if(!S.currentRule||S.currentRule.lng!==a){var b=a.split("-");S.currentRule={lng:a,rule:S.rules[b[0]]}}},needsPlural:function(a,b){var c,d=a.split("-");return c=S.currentRule&&S.currentRule.lng===a?S.currentRule.rule:S.rules[d[R.getCountyIndexOfLng(a)]],c&&c.numbers.length<=1?!1:1!==this.get(a,b)},get:function(a,b){function c(b,c){var d;if(d=S.currentRule&&S.currentRule.lng===a?S.currentRule.rule:S.rules[b]){var e;e=d.noAbs?d.plurals(c):d.plurals(Math.abs(c));var f=d.numbers[e];return 2===d.numbers.length&&1===d.numbers[0]&&(2===f?f=-1:1===f&&(f=1)),f}return 1===c?"1":"-1"}var d=a.split("-");
return c(d[R.getCountyIndexOfLng(a)],b)}},T={},U=function(a,b){T[a]=b},V=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}function b(a,b){for(var c=[];b>0;c[--b]=a);return c.join("")}var c=function(){return c.cache.hasOwnProperty(arguments[0])||(c.cache[arguments[0]]=c.parse(arguments[0])),c.format.call(null,c.cache[arguments[0]],arguments)};return c.format=function(c,d){var e,f,g,h,i,j,k,l=1,m=c.length,n="",o=[];for(f=0;m>f;f++)if(n=a(c[f]),"string"===n)o.push(c[f]);else if("array"===n){if(h=c[f],h[2])for(e=d[l],g=0;g<h[2].length;g++){if(!e.hasOwnProperty(h[2][g]))throw V('[sprintf] property "%s" does not exist',h[2][g]);e=e[h[2][g]]}else e=h[1]?d[h[1]]:d[l++];if(/[^s]/.test(h[8])&&"number"!=a(e))throw V("[sprintf] expecting number but found %s",a(e));switch(h[8]){case"b":e=e.toString(2);break;case"c":e=String.fromCharCode(e);break;case"d":e=parseInt(e,10);break;case"e":e=h[7]?e.toExponential(h[7]):e.toExponential();break;case"f":e=h[7]?parseFloat(e).toFixed(h[7]):parseFloat(e);break;case"o":e=e.toString(8);break;case"s":e=(e=String(e))&&h[7]?e.substring(0,h[7]):e;break;case"u":e=Math.abs(e);break;case"x":e=e.toString(16);break;case"X":e=e.toString(16).toUpperCase()}e=/[def]/.test(h[8])&&h[3]&&e>=0?"+"+e:e,j=h[4]?"0"==h[4]?"0":h[4].charAt(1):" ",k=h[6]-String(e).length,i=h[6]?b(j,k):"",o.push(h[5]?e+i:i+e)}return o.join("")},c.cache={},c.parse=function(a){for(var b=a,c=[],d=[],e=0;b;){if(null!==(c=/^[^\x25]+/.exec(b)))d.push(c[0]);else if(null!==(c=/^\x25{2}/.exec(b)))d.push("%");else{if(null===(c=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)))throw"[sprintf] huh?";if(c[2]){e|=1;var f=[],g=c[2],h=[];if(null===(h=/^([a-z_][a-z_\d]*)/i.exec(g)))throw"[sprintf] huh?";for(f.push(h[1]);""!==(g=g.substring(h[0].length));)if(null!==(h=/^\.([a-z_][a-z_\d]*)/i.exec(g)))f.push(h[1]);else{if(null===(h=/^\[(\d+)\]/.exec(g)))throw"[sprintf] huh?";f.push(h[1])}c[2]=f}else e|=2;if(3===e)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";d.push(c)}b=b.substring(c[0].length)}return d},c}(),W=function(a,b){return b.unshift(a),V.apply(null,b)};U("sprintf",function(a,b,c){return c.sprintf?"[object Array]"===Object.prototype.toString.apply(c.sprintf)?W(a,c.sprintf):"object"==typeof c.sprintf?V(a,c.sprintf):a:a}),G.init=f,G.setLng=o,G.preload=g,G.addResourceBundle=h,G.addResource=j,G.addResources=k,G.removeResourceBundle=i,G.loadNamespace=m,G.loadNamespaces=n,G.setDefaultNamespace=l,G.t=x,G.translate=x,G.exists=w,G.detectLanguage=R.detectLanguage,G.pluralExtensions=S,G.sync=L,G.functions=R,G.lng=p,G.addPostProcessor=U,G.options=N}();
/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
var LANG = -1;
var noprediction = "";
var riskof = "";

i18n.init({fallbackLng: false}, function () {
    $("#shuhfuhl").i18n();
    $("#kuht").i18n();
    $("#skater").i18n();
    $(".pridikshuhn").i18n();
    noprediction = $.t("noprediction");
    LANG = $.t("langgwij");
    riskof = $.t("riskof");
});
var cartomancer = {};

cartomancer.data = (function () {
    function Card(id, name, suit, value, individual_meaning, img) {
        this.id = id;
        this.name = name;
        this.suit = suit;
        this.value = value;
        this.individual_meaning = individual_meaning;
        this.img = img;
    }

    var aceClubs = new Card(1, 'ace', 'Clubs', 1, ['Wealth, happiness and peace of mind.', 'Riqueza, felicidade e paz de espírito.'], 'img/Playing_card_club_A.svg');
    var kingClubs = new Card(2, 'king', 'Clubs', 1, ['A dark man, upright, faithful and affectionate in disposition.', 'Um homem misterioso, justo, fiel e carinhoso.'], 'img/Playing_card_club_K.svg');
    var queenClubs = new Card(3, 'queen', 'Clubs', 1, ['A dark woman, gentle and pleasing.', 'Uma mulher misteriosa, suave e agradável.'], 'img/Playing_card_club_Q.svg');
    var jackClubs = new Card(4, 'jack', 'Clubs', 0, ['A sincere but hasty friend. Also a dark man\'s thoughts.', 'Um amigo sincero mas precipitado. Também a atenção de um homem misterioso.'], 'img/Playing_card_club_J.svg');
    var tenClubs = new Card(5, 'ten', 'Clubs', 0, ['Unexpected riches, and loss of a dear friend.', 'Riquezas inesperadas, e perda de um amigo querido.'], 'img/Playing_card_club_10.svg');
    var nineClubs = new Card(6, 'nine', 'Clubs', 0, ['Disobedience to friends\' wishes.', 'Desobediência aos desejos dos amigos.'], 'img/Playing_card_club_9.svg');
    var eightClubs = new Card(7, 'eight', 'clubs', -1, ['A covetous man. It also warns against speculations.', 'Um homem ganancioso. A carta também adverte contra especulações.'], 'img/Playing_card_club_8.svg');
    var sevenClubs = new Card(8, 'seven', 'Clubs', 1, ['Promises good fortune and happiness, but bids a person beware of the opposite sex.', 'Promete boa sorte e felicidade, mas manda tomar cuidado com o sexo oposto.'], 'img/Playing_card_club_7.svg');
    var sixClubs = new Card(9, 'six', 'Clubs', 1, ['Predicts a lucrative business.', 'Prevê um negócio lucrativo.'], 'img/Playing_card_club_6.svg');
    var fiveClubs = new Card(10, 'five', 'Clubs', 1, ['A prudent marriage.', 'Um casamento prudente.'], 'img/Playing_card_club_5.svg');
    var fourClubs = new Card(11, 'four', 'Clubs', 0, ['Cautiousness against inconstancy or change of object for the sake of money.', 'Cautela contra inconstância ou mudança de objetivo, para não perder dinheiro.'], 'img/Playing_card_club_4.svg');
    var threeClubs = new Card(12, 'three', 'Clubs', 0, ['Shows that a person will be more than once married.', 'Mostra que uma pessoa vai se casar mais de uma vez.'], 'img/Playing_card_club_3.svg');
    var twoClubs = new Card(13, 'two', 'Clubs', -1, ['A disappointment.', 'Uma decepção.'], 'img/Playing_card_club_2.svg');
    var aceHearts = new Card(14, 'ace', 'Hearts', 0, ['The house. If attended by spades, it foretells quarrelling, if by hearts, affection and friendship, if by diamonds, money and distant friends, if by clubs, feasting and merry-making.', 'A casa. Se na presença do naipe de espadas: ele prediz brigas; se na presença do naipe de copas: carinho e amizade; se na presença do naipe de ouros: dinheiro e amigos distantes; se na presença do naipe de paus: festa e folia.'], 'img/Playing_card_heart_A.svg');
    var kingHearts = new Card(15, 'king', 'Hearts', 0, ['A fair man, of good-natured disposition, but hasty and rash.', 'Um belo homem, de boa índole, porém apressado e precipitado.'], 'img/Playing_card_heart_K.svg');
    var queenHearts = new Card(16, 'queen', 'Hearts', 1, ['A fair woman, faithful, prudent and affectionate.', 'Uma bela mulher, fiel, prudente e afetuosa.'], 'img/Playing_card_heart_Q.svg');
    var jackHearts = new Card(17, 'jack', 'Hearts', 1, ['The dearest friend of the consulting party. Also a fair person\'s thoughts.', 'A amizade mais querida. Também o interesse uma bela pessoa.'], 'img/Playing_card_heart_J.svg');
    var tenHearts = new Card(18, 'ten', 'Hearts', 1, ['Is prophetic of happiness and many children, is corrective of the bad tidings of cards next to it, and confirms their good tidings.', 'Felicidade e muitos filhos, corrige as más notícias de outras cartas ao seu lado e confirma as boas notícias.'], 'img/Playing_card_heart_10.svg');
    var nineHearts = new Card(19, 'nine', 'Hearts', 1, ['Wealth and high esteem. Also the wish card.', 'Riqueza e alta estima. A carta desejada.'], 'img/Playing_card_heart_9.svg');
    var eightHearts = new Card(20, 'eight', 'Hearts', 1, ['Pleasure, company.', 'Prazer, companhia.'], 'img/Playing_card_heart_8.svg');
    var sevenHearts = new Card(21, 'seven', 'Hearts', -1, ['A fickle and false friend, against whom be on your guard.', 'Um amigo inconstante e falso, não baixe a guarda.'], 'img/Playing_card_heart_7.svg');
    var sixHearts = new Card(22, 'six', 'Hearts', 1, ['A generous but credulous person.', 'Uma pessoa generosa porém crédula.'], 'img/Playing_card_heart_6.svg');
    var fiveHearts = new Card(23, 'five', 'Hearts', -1, ['Troubles caused by unfounded jealousy.', 'Problemas causados pelo ciúme sem fundamento.'], 'img/Playing_card_heart_5.svg');
    var fourHearts = new Card(24, 'four', 'Hearts', -1, ['A person not easily won.', 'Uma pessoa difícil de vencer.'], 'img/Playing_card_heart_4.svg');
    var threeHearts = new Card(25, 'three', 'Hearts', -1, ['Sorrow caused by a person\'s own imprudence.', 'Tristeza causada pela própria imprudência.'], 'img/Playing_card_heart_3.svg');
    var twoHearts = new Card(26, 'two', 'Hearts', 1, ['Great success, but equal care and attention needed to secure it.', 'Grande sucesso, mas cuidado e atenção para não perdê-lo.'], 'img/Playing_card_heart_2.svg');
    var aceDiamonds = new Card(27, 'ace', 'Diamonds', 0, ['A letter, but from whom and what about must be judged by the neighbouring cards.', 'Uma mensagem, mas de quem e sobre o quê deve ser revelado pelas cartas vizinhas.'], 'img/Playing_card_diamond_A.svg');
    var kingDiamonds = new Card(28, 'king', 'Diamonds', -1, ['A fair man, hot tempered, obstinate and revengeful.', 'Um belo homem, de temperamento explosivo, obstinado e vingativo.'], 'img/Playing_card_diamond_K.svg');
    var queenDiamonds = new Card(29, 'queen', 'Diamonds', 1, ['A fair woman, fond of company and a coquette.', 'Uma bela mulher, gosta de companhia e de flertar.'], 'img/Playing_card_diamond_Q.svg');
    var jackDiamonds = new Card(30, 'jack', 'Diamonds', -1, ['A near relation who considers only his own interests. Also a fair person\'s thoughts.', 'Um relacionamento egoísta. Também o interesse de uma bela pessoa.'], 'img/Playing_card_diamond_J.svg');
    var tenDiamonds = new Card(31, 'ten', 'Diamonds', 1, ['Money.', 'Dinheiro.'], 'img/Playing_card_diamond_10.svg');
    var nineDiamonds = new Card(32, 'nine', 'Diamonds', 0, ['Shows that a person is fond of roving.', 'Mostra que uma pessoa gosta de vagabundagem.'], 'img/Playing_card_diamond_9.svg');
    var eightDiamonds = new Card(33, 'eight', 'Diamonds', 0, ['A marriage late in life.', 'Um casamento no final da vida.'], 'img/Playing_card_diamond_8.svg');
    var sevenDiamonds = new Card(34, 'seven', 'Diamonds', -1, ['Satire, evil speaking.', 'Sátira, maledicência.'], 'img/Playing_card_diamond_7.svg');
    var sixDiamonds = new Card(35, 'six', 'Diamonds', -1, ['Early marriage and widowhood.', 'Casamento precoce e viuvez.'], 'img/Playing_card_diamond_6.svg');
    var fiveDiamonds = new Card(36, 'five', 'Diamonds', 0, ['Unexpected news.', 'Notícias inesperadas.'], 'img/Playing_card_diamond_5.svg');
    var fourDiamonds = new Card(37, 'four', 'Diamonds', -1, ['Trouble arising from unfaithful friends, also a betrayed secret.', 'Problemas decorrentes de amigos infiéis, também a traição de um segredo revelado.'], 'img/Playing_card_diamond_4.svg');
    var threeDiamonds = new Card(38, 'three', 'Diamonds', -1, ['Quarrels, law-suits and domestic disagreements.', 'Brigas, ações judiciais e desavenças domésticas.'], 'img/Playing_card_diamond_3.svg');
    var twoDiamonds = new Card(39, 'two', 'Diamonds', -1, ['An engagement against the wishes of friends.', 'Um compromisso contra a vontade dos amigos.'], 'img/Playing_card_diamond_2.svg');
    var aceSpades = new Card(40, 'ace', 'Spades', -1, ['Great misfortune, spite.', 'Grande infortúnio, rancor.'], 'img/Playing_card_spade_A.svg');
    var kingSpades = new Card(41, 'king', 'Spades', -1, ['A dark, ambitious man.', 'Um homem sombrio, ambicioso.'], 'img/Playing_card_spade_K.svg');
    var queenSpades = new Card(42, 'queen', 'Spades', -1, ['A malicious, dark woman, generally a widow.', 'Uma mulher maliciosa, sombria, geralmente uma viúva.'], 'img/Playing_card_spade_Q.svg');
    var jackSpades = new Card(43, 'jack', 'Spades', -1, ['An indolent, envious person, a dark man\'s thoughts.', 'Uma pessoa indolente, invejosa, o interesse de um homem sombrio.'], 'img/Playing_card_spade_J.svg');
    var tenSpades = new Card(44, 'ten', 'Spades', -1, ['Grief, imprisonment.', 'Dor, prisão.'], 'img/Playing_card_spade_10.svg');
    var nineSpades = new Card(45, 'nine', 'Spades', -1, ['Sickness and misfortune.', 'Doença e infortúnio.'], 'img/Playing_card_spade_9.svg');
    var eightSpades = new Card(46, 'eight', 'Spades', 0, ['Warns a person to be cautious in his undertakings.', 'Seja cauteloso em seus empreendimentos.'], 'img/Playing_card_spade_8.svg');
    var sevenSpades = new Card(47, 'seven', 'Spades', -1, ['Loss of a friend, attended with much trouble.', 'A perda de um amigo.'], 'img/Playing_card_spade_7.svg');
    var sixSpades = new Card(48, 'six', 'Spades', 1, ['Wealth through industry.', 'Riqueza através da diligência.'], 'img/Playing_card_spade_6.svg');
    var fiveSpades = new Card(49, 'five', 'Spades', 0, ['Shows that a bad temper requires correcting.', 'Mostra que o mau feitio requer correção.'], 'img/Playing_card_spade_5.svg');
    var fourSpades = new Card(50, 'four', 'Spades', -1, ['Sickness.', 'Doença.'], 'img/Playing_card_spade_4.svg');
    var threeSpades = new Card(51, 'three', 'Spades', 0, ['A journey.', 'Uma viagem.'], 'img/Playing_card_spade_3.svg');
    var twoSpades = new Card(52, 'two', 'Spades', -1, ['A removal.', 'Um afastamento.'], 'img/Playing_card_spade_2.svg');

    var deck = [
        aceClubs,
        kingClubs,
        queenClubs,
        jackClubs,
        tenClubs,
        nineClubs,
        eightClubs,
        sevenClubs,
        sixClubs,
        fiveClubs,
        fourClubs,
        threeClubs,
        twoClubs,
        aceHearts,
        kingHearts,
        queenHearts,
        jackHearts,
        tenHearts,
        nineHearts,
        eightHearts,
        sevenHearts,
        sixHearts,
        fiveHearts,
        fourHearts,
        threeHearts,
        twoHearts,
        aceDiamonds,
        kingDiamonds,
        queenDiamonds,
        jackDiamonds,
        tenDiamonds,
        nineDiamonds,
        eightDiamonds,
        sevenDiamonds,
        sixDiamonds,
        fiveDiamonds,
        fourDiamonds,
        threeDiamonds,
        twoDiamonds,
        aceSpades,
        kingSpades,
        queenSpades,
        jackSpades,
        tenSpades,
        nineSpades,
        eightSpades,
        sevenSpades,
        sixSpades,
        fiveSpades,
        fourSpades,
        threeSpades,
        twoSpades
    ];
    
    function Word(token, relative_meaning) {
        this.token = token;
        this.relative_meaning = relative_meaning;
    }

    var ace4 = new Word('aceaceaceace', ['Announces danger, failure in business and sometimes imprisonment.', 'Anuncia perigo, fracasso nos negócios e, por vezes, a prisão.']);
    var ace3 = new Word('aceaceace', ['Signify good tidings.', 'Significa boas notícias.']);
    var ace2 = new Word('aceace', ['A plot.', 'Uma conspiração.']);
    var king4 = new Word('kingkingkingking', ['A consultation on important business, the result of which will be highly satisfactory.', 'Uma consulta sobre assuntos importantes, cujo resultado será altamente satisfatório.']);
    var king2 = new Word('kingking', ['A partnership in business. Sometimes this only denotes friendly projects.', 'Uma parceria em negócios. Às vezes isto só denota projetos amigáveis.']);
    var queen4 = new Word('queenqueenqueenqueen', ['Company, society.', 'Companhia, sociedade.']);
    var queen3 = new Word('queenqueenqueen', ['Friendly calls.', 'Chamadas amigáveis.']);
    var queen2 = new Word('queenqueen', ['A meeting between friends.', 'Um encontro entre amigos.']);
    var jack4 = new Word('jackjackjackjack', ['A noisy party, mostly young people.', 'Uma festa barulhenta, principalmente jovens.']);
    var jack3 = new Word('jackjackjack', ['False friends.', 'Falsos amigos.']);
    var jack2 = new Word('jackjack', ['Evil intentions.', 'Más intenções.']);
    var ten4 = new Word('tentententen', ['Great success in projected enterprises.', 'Grande sucesso em empreendimentos planejados.']);
    var ten3 = new Word('tententen', ['Improper conduct.', 'Conduta imprópria.']);
    var ten2 = new Word('tenten', ['Change of trade or profession.', 'Mudança de ofício ou profissão.']);
    var nine4 = new Word('ninenineninenine', ['A great surprise.', 'Uma grande surpresa.']);
    var nine3 = new Word('nineninenine', ['Joy, fortune, health.', 'Alegria, fortuna, saúde.']);
    var nine2 = new Word('ninenine', ['A little gain.', 'Um pequeno ganho.']);
    var eight4 = new Word('eighteighteighteight', ['A short journey.', 'Uma curta viagem.']);
    var eight3 = new Word('eighteighteight', ['Thoughts of marriage.', 'Pensamentos de casamento.']);
    var eight2 = new Word('eighteight', ['A brief love-dream.', 'Um breve sonho de amor.']);
    var seven4 = new Word('sevensevensevenseven', ['Intrigues among servants or low people, threats, snares and disputes.', 'Intrigas entre funcionários ou pessoas de baixo escalão, ameaças, armadilhas e disputas.']);
    var seven3 = new Word('sevensevenseven', ['Sickness, premature old age.', 'Doença, velhice prematura.']);
    var seven2 = new Word('sevenseven', ['Levity.', 'Leviandade.']);

    return {
        deck: deck,
        ace4: ace4,
        ace3: ace3,
        ace2: ace2,
        king4: king4,
        king2: king2,
        queen4: queen4,
        queen3: queen3,
        queen2: queen2,
        jack4: jack4,
        jack3: jack3,
        jack2: jack2,
        ten4: ten4,
        ten3: ten3,
        ten2: ten2,
        nine4: nine4,
        nine3: nine3,
        nine2: nine2,
        eight4: eight4,
        eight3: eight3,
        eight2: eight2,
        seven4: seven4,
        seven3: seven3,
        seven2: seven2
    };

}());



(function () {

    var deck = cartomancer.data.deck;

    var shuffle = function () {
        clearBoard();
        for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        $('#btshuffle').prop('disabled', true);
        $('#btcut3').prop('disabled', false);
        $("#myModalLabel").css("visibility", "hidden");
        $(".modal-body").html("<img src='img/loadingBar.gif'>");
        $('#infoModal').modal({
            show: true
        });
        window.setTimeout(function () {
            $('#infoModal').modal('hide');
        }, 4000);
    };

    var cut3times = function () {
        var cut1 = deck.slice(0, 17);
        var cut2 = deck.slice(17, 34);
        var cut3 = deck.slice(34, deck.length);
        deck.length = 0;
        deck = cut2.concat(cut3, cut1);
        $('#btcut3').prop('disabled', true);
        $('#btlayout').removeClass('hidden');
        $('#btlayout').prop('disabled', false);
        $("#myModalLabel").css("visibility", "hidden");
        $(".modal-body").html("<img src='img/loadingBar.gif'>");
        $('#infoModal').modal({
            show: true
        });
        window.setTimeout(function () {
            $('#infoModal').modal('hide');
        }, 2000);
    };

    var clearBoard = function () {
        $('.rm-img').remove();
        $(".btinfo-hidden").css("visibility", "hidden");
    };

    var fillTable = function () {
        var teybuhl = new Array(new Array(9), new Array(9), new Array(9), new Array(9), new Array(9), new Array(7));
        var count = 0;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < teybuhl[i].length; j++) {
                teybuhl[i][j] = deck[count];
                count++;
            }
        }
        return teybuhl;
    };

    var layThemOut = function () {
        $("#myModalLabel").css("visibility", "visible");
        var teybuhl = fillTable();
        var risk = risk_of_imprisonment(teybuhl);
        var relative_meanings = fillRelativeMeanings(createTokens(teybuhl));
        if (relative_meanings[0] === "" &&
                relative_meanings[1] === "" &&
                relative_meanings[2] === "" &&
                relative_meanings[3] === "" &&
                relative_meanings[4] === "" &&
                relative_meanings[5] === "" &&
                risk[0] === false &&
                risk[1] === false &&
                risk[2] === false &&
                risk[3] === false &&
                risk[4] === false &&
                risk[5] === false) {
            $('.modal-body').html(noprediction);
            $('#infoModal').modal({
                show: true
            });
        }
        var count = 1;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < teybuhl[i].length; j++) {
                var img = document.createElement("img");
                img.src = teybuhl[i][j].img;
                img.width = 50;
                img.height = 62.5;
                img.setAttribute('class', 'rm-img');
                img.setAttribute('title', teybuhl[i][j].individual_meaning[LANG]);
                var roh = '#card'.concat(count.toString());
                document.querySelector(roh).appendChild(img);
                count++;
            }
        }

        $(document).on("click", "#btlayout", function () {
            $("#board").removeClass("hidden");
        });


        if (risk[0]) {
            $("#btrisk1").css("visibility", "visible");
        } else {
            $("#btrisk1").css("visibility", "hidden");
        }
        if (risk[1]) {
            $("#btrisk2").css("visibility", "visible");
        } else {
            $("#btrisk2").css("visibility", "hidden");
        }
        if (risk[2]) {
            $("#btrisk3").css("visibility", "visible");
        } else {
            $("#btrisk3").css("visibility", "hidden");
        }
        if (risk[3]) {
            $("#btrisk4").css("visibility", "visible");
        } else {
            $("#btrisk4").css("visibility", "hidden");
        }
        if (risk[4]) {
            $("#btrisk5").css("visibility", "visible");
        } else {
            $("#btrisk5").css("visibility", "hidden");
        }
        if (risk[5]) {
            $("#btrisk6").css("visibility", "visible");
        } else {
            $("#btrisk6").css("visibility", "hidden");
        }

        $(document).on("click", "#btrisk1", function () {
            $(".modal-body").html(riskof);
        });

        $(document).on("click", "#btrisk2", function () {
            $(".modal-body").html(riskof);
        });

        $(document).on("click", "#btrisk3", function () {
            $(".modal-body").html(riskof);
        });

        $(document).on("click", "#btrisk4", function () {
            $(".modal-body").html(riskof);
        });

        $(document).on("click", "#btrisk5", function () {
            $(".modal-body").html(riskof);
        });

        $(document).on("click", "#btrisk6", function () {
            $(".modal-body").html(riskof);
        });


        if (relative_meanings[0].length === 0) {
            $("#btinfo1").css("visibility", "hidden");
        } else {
            $("#btinfo1").css("visibility", "visible");
        }
        if (relative_meanings[1].length === 0) {
            $("#btinfo2").css("visibility", "hidden");
        } else {
            $("#btinfo2").css("visibility", "visible");
        }
        if (relative_meanings[2].length === 0) {
            $("#btinfo3").css("visibility", "hidden");
        } else {
            $("#btinfo3").css("visibility", "visible");
        }
        if (relative_meanings[3].length === 0) {
            $("#btinfo4").css("visibility", "hidden");
        } else {
            $("#btinfo4").css("visibility", "visible");
        }
        if (relative_meanings[4].length === 0) {
            $("#btinfo5").css("visibility", "hidden");
        } else {
            $("#btinfo5").css("visibility", "visible");
        }
        if (relative_meanings[5].length === 0) {
            $("#btinfo6").css("visibility", "hidden");
        } else {
            $("#btinfo6").css("visibility", "visible");
        }

        $(document).on("click", "#btinfo1", function () {
            $(".modal-body").html(relative_meanings[0]);
        });

        $(document).on("click", "#btinfo2", function () {
            $(".modal-body").html(relative_meanings[1]);
        });

        $(document).on("click", "#btinfo3", function () {
            $(".modal-body").html(relative_meanings[2]);
        });

        $(document).on("click", "#btinfo4", function () {
            $(".modal-body").html(relative_meanings[3]);
        });

        $(document).on("click", "#btinfo5", function () {
            $(".modal-body").html(relative_meanings[4]);
        });

        $(document).on("click", "#btinfo6", function () {
            $(".modal-body").html(relative_meanings[5]);
        });

        $('#btlayout').addClass('hidden');
        $('#btshuffle').prop('disabled', false);

    };

    var risk_of_imprisonment = function (teybuhl) {
        var tokens = new Array(6);
        for (var i = 0; i < tokens.length; i++) {
            tokens[i] = false;
        }
        for (var row = 0; row < 6; row++) {
            for (var column = 0; column < teybuhl[row].length; column++) {
                if (teybuhl[row][column].name === "king" ||
                        teybuhl[row][column].name === "queen" ||
                        teybuhl[row][column].name === "jack") {
                    if (teybuhl[row][column - 1] !== undefined &&
                            teybuhl[row][column + 1] !== undefined &&
                            teybuhl[row][column - 1].name !== "king" &&
                            teybuhl[row][column - 1].name !== "queen" &&
                            teybuhl[row][column - 1].name !== "jack" &&
                            teybuhl[row][column - 1].name === teybuhl[row][column + 1].name) {
                        tokens[row] = true;
                    }

                }
            }
        }
        return tokens;
    };

    var createTokens = function (teybuhl) {
        var tokens = new Array(6);
        for (var i = 0; i < tokens.length; i++) {
            tokens[i] = "";
        }
        for (var row = 0; row < 6; row++) {
            for (var column = 0; column < teybuhl[row].length; column++) {
                var name_tmp = teybuhl[row][column].name;
                var tokens_temp = tokens[row];
                if (name_tmp === tokens_temp.substr(tokens_temp.length - name_tmp.length)) {
                    tokens[row] += teybuhl[row][column].name;
                } else {
                    tokens[row] += " " + teybuhl[row][column].name;
                }
            }
        }
        return tokens;
    };

    var fillRelativeMeanings = function (tokens) {
        var relative_meanings = [6];
        for (var x = 0; x < tokens.length; x++) {
            relative_meanings[x] = "";
        }
        for (var i = 0; i < tokens.length; i++) {
            var wordz = tokens[i].split(" ");
            for (var j = 0; j < wordz.length; j++) {
                switch (wordz[j]) {
                    case cartomancer.data.ace4.token :
                        relative_meanings[i] += " " + cartomancer.data.ace4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.ace3.token :
                        relative_meanings[i] += " " + cartomancer.data.ace3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.ace2.token :
                        relative_meanings[i] += " " + cartomancer.data.ace2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.king4.token :
                        relative_meanings[i] += " " + cartomancer.data.king4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.king2.token :
                        relative_meanings[i] += " " + cartomancer.data.king2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.queen4.token :
                        relative_meanings[i] += " " + cartomancer.data.queen4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.queen3.token :
                        relative_meanings[i] += " " + cartomancer.data.queen3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.queen2.token :
                        relative_meanings[i] += " " + cartomancer.data.queen2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.jack4.token :
                        relative_meanings[i] += " " + cartomancer.data.jack4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.jack3.token :
                        relative_meanings[i] += " " + cartomancer.data.jack3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.jack2.token :
                        relative_meanings[i] += " " + cartomancer.data.jack2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.ten4.token :
                        relative_meanings[i] += " " + cartomancer.data.ten4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.ten3.token :
                        relative_meanings[i] += " " + cartomancer.data.ten3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.ten2.token :
                        relative_meanings[i] += " " + cartomancer.data.ten2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.nine4.token :
                        relative_meanings[i] += " " + cartomancer.data.nine4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.nine3.token :
                        relative_meanings[i] += " " + cartomancer.data.nine3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.nine2.token :
                        relative_meanings[i] += " " + cartomancer.data.nine2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.eight4.token :
                        relative_meanings[i] += " " + cartomancer.data.eight4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.eight3.token :
                        relative_meanings[i] += " " + cartomancer.data.eight3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.eight2.token :
                        relative_meanings[i] += " " + cartomancer.data.eight2.relative_meaning[LANG];
                        break;
                    case cartomancer.data.seven4.token :
                        relative_meanings[i] += " " + cartomancer.data.seven4.relative_meaning[LANG];
                        break;
                    case cartomancer.data.seven3.token :
                        relative_meanings[i] += " " + cartomancer.data.seven3.relative_meaning[LANG];
                        break;
                    case cartomancer.data.seven2.token :
                        relative_meanings[i] += " " + cartomancer.data.seven2.relative_meaning[LANG];
                        break;
                }
            }
        }
        return relative_meanings;
    };

    $('#btcut3, #btlayout').prop('disabled', true);
    $('#btshuffle').click(shuffle);
    $('#btcut3').click(cut3times);
    $('#btlayout').click(layThemOut);

}(cartomancer));


