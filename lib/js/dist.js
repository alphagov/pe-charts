// https://d3js.org v5.16.0 Copyright 2020 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).d3=t.d3||{})}(this,function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){var e;return 1===t.length&&(e=t,t=function(t,r){return n(e(t),r)}),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}var r=e(n),i=r.right,o=r.left;function a(t,n){return[t,n]}function u(t){return null===t?NaN:+t}function c(t,n){var e,r,i=t.length,o=0,a=-1,c=0,f=0;if(null==n)for(;++a<i;)isNaN(e=u(t[a]))||(f+=(r=e-c)*(e-(c+=r/++o)));else for(;++a<i;)isNaN(e=u(n(t[a],a,t)))||(f+=(r=e-c)*(e-(c+=r/++o)));if(o>1)return f/(o-1)}function f(t,n){var e=c(t,n);return e?Math.sqrt(e):e}function s(t,n){var e,r,i,o=t.length,a=-1;if(null==n){for(;++a<o;)if(null!=(e=t[a])&&e>=e)for(r=i=e;++a<o;)null!=(e=t[a])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++a<o;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=i=e;++a<o;)null!=(e=n(t[a],a,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]}var l=Array.prototype,h=l.slice,d=l.map;function p(t){return function(){return t}}function v(t){return t}function g(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}var y=Math.sqrt(50),_=Math.sqrt(10),b=Math.sqrt(2);function m(t,n,e){var r,i,o,a,u=-1;if(e=+e,(t=+t)===(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(a=x(t,n,e))||!isFinite(a))return[];if(a>0)for(t=Math.ceil(t/a),n=Math.floor(n/a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*a;else for(t=Math.floor(t*a),n=Math.ceil(n*a),o=new Array(i=Math.ceil(t-n+1));++u<i;)o[u]=(t-u)/a;return r&&o.reverse(),o}function x(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=y?10:o>=_?5:o>=b?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=y?10:o>=_?5:o>=b?2:1)}function w(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=y?i*=10:o>=_?i*=5:o>=b&&(i*=2),n<t?-i:i}function M(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function N(t,n,e){if(null==e&&(e=u),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),a=+e(t[o],o,t);return a+(+e(t[o+1],o+1,t)-a)*(i-o)}}function T(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r}function A(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length;for(e=new Array(a);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--a]=r[n];return e}function S(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r}function k(t){if(!(i=t.length))return[];for(var n=-1,e=S(t,E),r=new Array(e);++n<e;)for(var i,o=-1,a=r[n]=new Array(i);++o<i;)a[o]=t[o][n];return r}function E(t){return t.length}var C=Array.prototype.slice;function P(t){return t}var z=1,R=2,D=3,q=4,L=1e-6;function U(t){return"translate("+(t+.5)+",0)"}function O(t){return"translate(0,"+(t+.5)+")"}function B(){return!this.__axis}function F(t,n){var e=[],r=null,i=null,o=6,a=6,u=3,c=t===z||t===q?-1:1,f=t===q||t===R?"x":"y",s=t===z||t===D?U:O;function l(l){var h=null==r?n.ticks?n.ticks.apply(n,e):n.domain():r,d=null==i?n.tickFormat?n.tickFormat.apply(n,e):P:i,p=Math.max(o,0)+u,v=n.range(),g=+v[0]+.5,y=+v[v.length-1]+.5,_=(n.bandwidth?function(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}:function(t){return function(n){return+t(n)}})(n.copy()),b=l.selection?l.selection():l,m=b.selectAll(".domain").data([null]),x=b.selectAll(".tick").data(h,n).order(),w=x.exit(),M=x.enter().append("g").attr("class","tick"),N=x.select("line"),T=x.select("text");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),x=x.merge(M),N=N.merge(M.append("line").attr("stroke","currentColor").attr(f+"2",c*o)),T=T.merge(M.append("text").attr("fill","currentColor").attr(f,c*p).attr("dy",t===z?"0em":t===D?"0.71em":"0.32em")),l!==b&&(m=m.transition(l),x=x.transition(l),N=N.transition(l),T=T.transition(l),w=w.transition(l).attr("opacity",L).attr("transform",function(t){return isFinite(t=_(t))?s(t):this.getAttribute("transform")}),M.attr("opacity",L).attr("transform",function(t){var n=this.parentNode.__axis;return s(n&&isFinite(n=n(t))?n:_(t))})),w.remove(),m.attr("d",t===q||t==R?a?"M"+c*a+","+g+"H0.5V"+y+"H"+c*a:"M0.5,"+g+"V"+y:a?"M"+g+","+c*a+"V0.5H"+y+"V"+c*a:"M"+g+",0.5H"+y),x.attr("opacity",1).attr("transform",function(t){return s(_(t))}),N.attr(f+"2",c*o),T.attr(f,c*p).text(d),b.filter(B).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===R?"start":t===q?"end":"middle"),b.each(function(){this.__axis=_})}return l.scale=function(t){return arguments.length?(n=t,l):n},l.ticks=function(){return e=C.call(arguments),l},l.tickArguments=function(t){return arguments.length?(e=null==t?[]:C.call(t),l):e.slice()},l.tickValues=function(t){return arguments.length?(r=null==t?null:C.call(t),l):r&&r.slice()},l.tickFormat=function(t){return arguments.length?(i=t,l):i},l.tickSize=function(t){return arguments.length?(o=a=+t,l):o},l.tickSizeInner=function(t){return arguments.length?(o=+t,l):o},l.tickSizeOuter=function(t){return arguments.length?(a=+t,l):a},l.tickPadding=function(t){return arguments.length?(u=+t,l):u},l}var Y={value:function(){}};function I(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new H(r)}function H(t){this._=t}function j(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function X(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function V(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=Y,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}H.prototype=I.prototype={constructor:H,on:function(t,n){var e,r=this._,i=j(t+"",r),o=-1,a=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<a;)if(e=(t=i[o]).type)r[e]=V(r[e],t.name,n);else if(null==n)for(e in r)r[e]=V(r[e],t.name,null);return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=X(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new H(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var G="http://www.w3.org/1999/xhtml",$={svg:"http://www.w3.org/2000/svg",xhtml:G,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function W(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),$.hasOwnProperty(n)?{space:$[n],local:t}:t}function Z(t){var n=W(t);return(n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===G&&n.documentElement.namespaceURI===G?n.createElement(t):n.createElementNS(e,t)}})(n)}function Q(){}function K(t){return null==t?Q:function(){return this.querySelector(t)}}function J(){return[]}function tt(t){return null==t?J:function(){return this.querySelectorAll(t)}}function nt(t){return function(){return this.matches(t)}}function et(t){return new Array(t.length)}function rt(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}rt.prototype={constructor:rt,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var it="$";function ot(t,n,e,r,i,o){for(var a,u=0,c=n.length,f=o.length;u<f;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new rt(t,o[u]);for(;u<c;++u)(a=n[u])&&(i[u]=a)}function at(t,n,e,r,i,o,a){var u,c,f,s={},l=n.length,h=o.length,d=new Array(l);for(u=0;u<l;++u)(c=n[u])&&(d[u]=f=it+a.call(c,c.__data__,u,n),f in s?i[u]=c:s[f]=c);for(u=0;u<h;++u)(c=s[f=it+a.call(t,o[u],u,o)])?(r[u]=c,c.__data__=o[u],s[f]=null):e[u]=new rt(t,o[u]);for(u=0;u<l;++u)(c=n[u])&&s[d[u]]===c&&(i[u]=c)}function ut(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function ct(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function ft(t,n){return t.style.getPropertyValue(n)||ct(t).getComputedStyle(t,null).getPropertyValue(n)}function st(t){return t.trim().split(/^|\s+/)}function lt(t){return t.classList||new ht(t)}function ht(t){this._node=t,this._names=st(t.getAttribute("class")||"")}function dt(t,n){for(var e=lt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function pt(t,n){for(var e=lt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function vt(){this.textContent=""}function gt(){this.innerHTML=""}function yt(){this.nextSibling&&this.parentNode.appendChild(this)}function _t(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function bt(){return null}function mt(){var t=this.parentNode;t&&t.removeChild(this)}function xt(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function wt(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}ht.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Mt={};(t.event=null,"undefined"!=typeof document)&&("onmouseenter"in document.documentElement||(Mt={mouseenter:"mouseover",mouseleave:"mouseout"}));function Nt(t,n,e){return t=Tt(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function Tt(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function At(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function St(t,n,e){var r=Mt.hasOwnProperty(t.type)?Nt:Tt;return function(i,o,a){var u,c=this.__on,f=r(n,o,a);if(c)for(var s=0,l=c.length;s<l;++s)if((u=c[s]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=f,u.capture=e),void(u.value=n);this.addEventListener(t.type,f,e),u={type:t.type,name:t.name,value:n,listener:f,capture:e},c?c.push(u):this.__on=[u]}}function kt(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function Et(t,n,e){var r=ct(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}var Ct=[null];function Pt(t,n){this._groups=t,this._parents=n}function zt(){return new Pt([[document.documentElement]],Ct)}function Rt(t){return"string"==typeof t?new Pt([[document.querySelector(t)]],[document.documentElement]):new Pt([[t]],Ct)}Pt.prototype=zt.prototype={constructor:Pt,select:function(t){"function"!=typeof t&&(t=K(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],c=u.length,f=r[i]=new Array(c),s=0;s<c;++s)(o=u[s])&&(a=t.call(o,o.__data__,s,u))&&("__data__"in o&&(a.__data__=o.__data__),f[s]=a);return new Pt(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=tt(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],c=u.length,f=0;f<c;++f)(a=u[f])&&(r.push(t.call(a,a.__data__,f,u)),i.push(a));return new Pt(r,i)},filter:function(t){"function"!=typeof t&&(t=nt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new Pt(r,this._parents)},data:function(t,n){if(!t)return d=new Array(this.size()),f=-1,this.each(function(t){d[++f]=t}),d;var e=n?at:ot,r=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var o=i.length,a=new Array(o),u=new Array(o),c=new Array(o),f=0;f<o;++f){var s=r[f],l=i[f],h=l.length,d=t.call(s,s&&s.__data__,f,r),p=d.length,v=u[f]=new Array(p),g=a[f]=new Array(p);e(s,l,v,g,c[f]=new Array(h),d,n);for(var y,_,b=0,m=0;b<p;++b)if(y=v[b]){for(b>=m&&(m=b+1);!(_=g[m])&&++m<p;);y._next=_||null}}return(a=new Pt(a,r))._enter=u,a._exit=c,a},enter:function(){return new Pt(this._enter||this._groups.map(et),this._parents)},exit:function(){return new Pt(this._exit||this._groups.map(et),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new Pt(a,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=ut);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],c=u.length,f=i[o]=new Array(c),s=0;s<c;++s)(a=u[s])&&(f[s]=a);f.sort(n)}return new Pt(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=W(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):ft(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=st(t+"");if(arguments.length<2){for(var r=lt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?dt:pt)(this,t)}}:n?function(t){return function(){dt(this,t)}}:function(t){return function(){pt(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?vt:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?gt:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(yt)},lower:function(){return this.each(_t)},append:function(t){var n="function"==typeof t?t:Z(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:Z(t),r=null==n?bt:"function"==typeof n?n:K(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(mt)},clone:function(t){return this.select(t?wt:xt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?St:At,null==e&&(e=!1),r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var c,f=0,s=u.length;f<s;++f)for(r=0,c=u[f];r<a;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return Et(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return Et(this,t,n)}})(t,n))}};var Dt=0;function qt(){return new Lt}function Lt(){this._="@"+(++Dt).toString(36)}function Ut(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function Ot(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}function Bt(t){var n=Ut();return n.changedTouches&&(n=n.changedTouches[0]),Ot(t,n)}function Ft(t,n,e){arguments.length<3&&(e=n,n=Ut().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return Ot(t,r);return null}function Yt(){t.event.stopImmediatePropagation()}function It(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function Ht(t){var n=t.document.documentElement,e=Rt(t).on("dragstart.drag",It,!0);"onselectstart"in n?e.on("selectstart.drag",It,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function jt(t,n){var e=t.document.documentElement,r=Rt(t).on("dragstart.drag",null);n&&(r.on("click.drag",It,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function Xt(t){return function(){return t}}function Vt(t,n,e,r,i,o,a,u,c,f){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=c,this._=f}function Gt(){return!t.event.ctrlKey&&!t.event.button}function $t(){return this.parentNode}function Wt(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Zt(){return navigator.maxTouchPoints||"ontouchstart"in this}function Qt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Kt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Jt(){}Lt.prototype=qt.prototype={constructor:Lt,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},Vt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var tn="\\s*([+-]?\\d+)\\s*",nn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",en="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",rn=/^#([0-9a-f]{3,8})$/,on=new RegExp("^rgb\\("+[tn,tn,tn]+"\\)$"),an=new RegExp("^rgb\\("+[en,en,en]+"\\)$"),un=new RegExp("^rgba\\("+[tn,tn,tn,nn]+"\\)$"),cn=new RegExp("^rgba\\("+[en,en,en,nn]+"\\)$"),fn=new RegExp("^hsl\\("+[nn,en,en]+"\\)$"),sn=new RegExp("^hsla\\("+[nn,en,en,nn]+"\\)$"),ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function hn(){return this.rgb().formatHex()}function dn(){return this.rgb().formatRgb()}function pn(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=rn.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?vn(n):3===e?new bn(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?gn(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?gn(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=on.exec(t))?new bn(n[1],n[2],n[3],1):(n=an.exec(t))?new bn(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=un.exec(t))?gn(n[1],n[2],n[3],n[4]):(n=cn.exec(t))?gn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=fn.exec(t))?Mn(n[1],n[2]/100,n[3]/100,1):(n=sn.exec(t))?Mn(n[1],n[2]/100,n[3]/100,n[4]):ln.hasOwnProperty(t)?vn(ln[t]):"transparent"===t?new bn(NaN,NaN,NaN,0):null}function vn(t){return new bn(t>>16&255,t>>8&255,255&t,1)}function gn(t,n,e,r){return r<=0&&(t=n=e=NaN),new bn(t,n,e,r)}function yn(t){return t instanceof Jt||(t=pn(t)),t?new bn((t=t.rgb()).r,t.g,t.b,t.opacity):new bn}function _n(t,n,e,r){return 1===arguments.length?yn(t):new bn(t,n,e,null==r?1:r)}function bn(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function mn(){return"#"+wn(this.r)+wn(this.g)+wn(this.b)}function xn(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function wn(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Mn(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new An(t,n,e,r)}function Nn(t){if(t instanceof An)return new An(t.h,t.s,t.l,t.opacity);if(t instanceof Jt||(t=pn(t)),!t)return new An;if(t instanceof An)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,c=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=c<.5?o+i:2-o-i,a*=60):u=c>0&&c<1?0:a,new An(a,u,c,t.opacity)}function Tn(t,n,e,r){return 1===arguments.length?Nn(t):new An(t,n,e,null==r?1:r)}function An(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Sn(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}Qt(Jt,pn,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:hn,formatHex:hn,formatHsl:function(){return Nn(this).formatHsl()},formatRgb:dn,toString:dn}),Qt(bn,_n,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new bn(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new bn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:mn,formatHex:mn,formatRgb:xn,toString:xn})),Qt(An,Tn,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new An(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new An(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new bn(Sn(t>=240?t-240:t+120,i,r),Sn(t,i,r),Sn(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var kn=Math.PI/180,En=180/Math.PI,Cn=.96422,Pn=1,zn=.82521,Rn=4/29,Dn=6/29,qn=3*Dn*Dn,Ln=Dn*Dn*Dn;function Un(t){if(t instanceof Bn)return new Bn(t.l,t.a,t.b,t.opacity);if(t instanceof Vn)return Gn(t);t instanceof bn||(t=yn(t));var n,e,r=Hn(t.r),i=Hn(t.g),o=Hn(t.b),a=Fn((.2225045*r+.7168786*i+.0606169*o)/Pn);return r===i&&i===o?n=e=a:(n=Fn((.4360747*r+.3850649*i+.1430804*o)/Cn),e=Fn((.0139322*r+.0971045*i+.7141733*o)/zn)),new Bn(116*a-16,500*(n-a),200*(a-e),t.opacity)}function On(t,n,e,r){return 1===arguments.length?Un(t):new Bn(t,n,e,null==r?1:r)}function Bn(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function Fn(t){return t>Ln?Math.pow(t,1/3):t/qn+Rn}function Yn(t){return t>Dn?t*t*t:qn*(t-Rn)}function In(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Hn(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function jn(t){if(t instanceof Vn)return new Vn(t.h,t.c,t.l,t.opacity);if(t instanceof Bn||(t=Un(t)),0===t.a&&0===t.b)return new Vn(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*En;return new Vn(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Xn(t,n,e,r){return 1===arguments.length?jn(t):new Vn(t,n,e,null==r?1:r)}function Vn(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function Gn(t){if(isNaN(t.h))return new Bn(t.l,0,0,t.opacity);var n=t.h*kn;return new Bn(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}Qt(Bn,On,Kt(Jt,{brighter:function(t){return new Bn(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Bn(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return new bn(In(3.1338561*(n=Cn*Yn(n))-1.6168667*(t=Pn*Yn(t))-.4906146*(e=zn*Yn(e))),In(-.9787684*n+1.9161415*t+.033454*e),In(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),Qt(Vn,Xn,Kt(Jt,{brighter:function(t){return new Vn(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Vn(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Gn(this).rgb()}}));var $n=-.14861,Wn=1.78277,Zn=-.29227,Qn=-.90649,Kn=1.97294,Jn=Kn*Qn,te=Kn*Wn,ne=Wn*Zn-Qn*$n;function ee(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof re)return new re(t.h,t.s,t.l,t.opacity);t instanceof bn||(t=yn(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(ne*r+Jn*n-te*e)/(ne+Jn-te),o=r-i,a=(Kn*(e-i)-Zn*o)/Qn,u=Math.sqrt(a*a+o*o)/(Kn*i*(1-i)),c=u?Math.atan2(a,o)*En-120:NaN;return new re(c<0?c+360:c,u,i,t.opacity)}(t):new re(t,n,e,null==r?1:r)}function re(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function ie(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function oe(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return ie((e-r/n)*n,a,i,o,u)}}function ae(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return ie((e-r/n)*n,i,o,a,u)}}function ue(t){return function(){return t}}function ce(t,n){return function(e){return t+e*n}}function fe(t,n){var e=n-t;return e?ce(t,e>180||e<-180?e-360*Math.round(e/360):e):ue(isNaN(t)?n:t)}function se(t){return 1==(t=+t)?le:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):ue(isNaN(n)?e:n)}}function le(t,n){var e=n-t;return e?ce(t,e):ue(isNaN(t)?n:t)}Qt(re,ee,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new re(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new re(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*kn,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new bn(255*(n+e*($n*r+Wn*i)),255*(n+e*(Zn*r+Qn*i)),255*(n+e*(Kn*r)),this.opacity)}}));var he=function t(n){var e=se(n);function r(t,n){var r=e((t=_n(t)).r,(n=_n(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=le(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1);function de(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=_n(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}var pe=de(oe),ve=de(ae);function ge(t,n){n||(n=[]);var e,r=t?Math.min(n.length,t.length):0,i=n.slice();return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o;return i}}function ye(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function _e(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=Te(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}}function be(t,n){var e=new Date;return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function me(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function xe(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=Te(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}var we=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Me=new RegExp(we.source,"g");function Ne(t,n){var e,r,i,o=we.lastIndex=Me.lastIndex=0,a=-1,u=[],c=[];for(t+="",n+="";(e=we.exec(t))&&(r=Me.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,c.push({i:a,x:me(e,r)})),o=Me.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?c[0]?function(t){return function(n){return t(n)+""}}(c[0].x):function(t){return function(){return t}}(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)u[(e=c[r]).i]=e.x(t);return u.join("")})}function Te(t,n){var e,r=typeof n;return null==n||"boolean"===r?ue(n):("number"===r?me:"string"===r?(e=pn(n))?(n=e,he):Ne:n instanceof pn?he:n instanceof Date?be:ye(n)?ge:Array.isArray(n)?_e:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?xe:me)(t,n)}function Ae(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}var Se,ke,Ee,Ce,Pe=180/Math.PI,ze={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Re(t,n,e,r,i,o){var a,u,c;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,c/=u),t*r<n*e&&(t=-t,n=-n,c=-c,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Pe,skewX:Math.atan(c)*Pe,scaleX:a,scaleY:u}}function De(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],c=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var c=a.push("translate(",null,n,null,e);u.push({i:c-4,x:me(t,i)},{i:c-2,x:me(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,c),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:me(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,c),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:me(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,c),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:me(t,e)},{i:u-2,x:me(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,c),o=a=null,function(t){for(var n,e=-1,r=c.length;++e<r;)u[(n=c[e]).i]=n.x(t);return u.join("")}}}var qe=De(function(t){return"none"===t?ze:(Se||(Se=document.createElement("DIV"),ke=document.documentElement,Ee=document.defaultView),Se.style.transform=t,t=Ee.getComputedStyle(ke.appendChild(Se),null).getPropertyValue("transform"),ke.removeChild(Se),Re(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),Le=De(function(t){return null==t?ze:(Ce||(Ce=document.createElementNS("http://www.w3.org/2000/svg","g")),Ce.setAttribute("transform",t),(t=Ce.transform.baseVal.consolidate())?Re((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):ze)},", ",")",")"),Ue=Math.SQRT2,Oe=2,Be=4,Fe=1e-12;function Ye(t){return((t=Math.exp(t))+1/t)/2}function Ie(t,n){var e,r,i=t[0],o=t[1],a=t[2],u=n[0],c=n[1],f=n[2],s=u-i,l=c-o,h=s*s+l*l;if(h<Fe)r=Math.log(f/a)/Ue,e=function(t){return[i+t*s,o+t*l,a*Math.exp(Ue*t*r)]};else{var d=Math.sqrt(h),p=(f*f-a*a+Be*h)/(2*a*Oe*d),v=(f*f-a*a-Be*h)/(2*f*Oe*d),g=Math.log(Math.sqrt(p*p+1)-p),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-g)/Ue,e=function(t){var n=t*r,e=Ye(g),u=a/(Oe*d)*(e*function(t){return((t=Math.exp(2*t))-1)/(t+1)}(Ue*n+g)-function(t){return((t=Math.exp(t))-1/t)/2}(g));return[i+u*s,o+u*l,a*e/Ye(Ue*n+g)]}}return e.duration=1e3*r,e}function He(t){return function(n,e){var r=t((n=Tn(n)).h,(e=Tn(e)).h),i=le(n.s,e.s),o=le(n.l,e.l),a=le(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var je=He(fe),Xe=He(le);function Ve(t){return function(n,e){var r=t((n=Xn(n)).h,(e=Xn(e)).h),i=le(n.c,e.c),o=le(n.l,e.l),a=le(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var Ge=Ve(fe),$e=Ve(le);function We(t){return function n(e){function r(n,r){var i=t((n=ee(n)).h,(r=ee(r)).h),o=le(n.s,r.s),a=le(n.l,r.l),u=le(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}var Ze=We(fe),Qe=We(le);var Ke,Je,tr=0,nr=0,er=0,rr=1e3,ir=0,or=0,ar=0,ur="object"==typeof performance&&performance.now?performance:Date,cr="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function fr(){return or||(cr(sr),or=ur.now()+ar)}function sr(){or=0}function lr(){this._call=this._time=this._next=null}function hr(t,n,e){var r=new lr;return r.restart(t,n,e),r}function dr(){fr(),++tr;for(var t,n=Ke;n;)(t=or-n._time)>=0&&n._call.call(null,t),n=n._next;--tr}function pr(){or=(ir=ur.now())+ar,tr=nr=0;try{dr()}finally{tr=0,function(){var t,n,e=Ke,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Ke=n);Je=t,gr(r)}(),or=0}}function vr(){var t=ur.now(),n=t-ir;n>rr&&(ar-=n,ir=t)}function gr(t){tr||(nr&&(nr=clearTimeout(nr)),t-or>24?(t<1/0&&(nr=setTimeout(pr,t-ur.now()-ar)),er&&(er=clearInterval(er))):(er||(ir=ur.now(),er=setInterval(vr,rr)),tr=1,cr(pr)))}function yr(t,n,e){var r=new lr;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r}lr.prototype=hr.prototype={constructor:lr,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?fr():+e)+(null==n?0:+n),this._next||Je===this||(Je?Je._next=this:Ke=this,Je=this),this._call=t,this._time=e,gr()},stop:function(){this._call&&(this._call=null,this._time=1/0,gr())}};var _r=I("start","end","cancel","interrupt"),br=[],mr=0,xr=1,wr=2,Mr=3,Nr=4,Tr=5,Ar=6;function Sr(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(c){var f,s,l,h;if(e.state!==xr)return u();for(f in i)if((h=i[f]).name===e.name){if(h.state===Mr)return yr(o);h.state===Nr?(h.state=Ar,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[f]):+f<n&&(h.state=Ar,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[f])}if(yr(function(){e.state===Mr&&(e.state=Nr,e.timer.restart(a,e.delay,e.time),a(c))}),e.state=wr,e.on.call("start",t,t.__data__,e.index,e.group),e.state===wr){for(e.state=Mr,r=new Array(l=e.tween.length),f=0,s=-1;f<l;++f)(h=e.tween[f].value.call(t,t.__data__,e.index,e.group))&&(r[++s]=h);r.length=s+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=Tr,1),o=-1,a=r.length;++o<a;)r[o].call(t,i);e.state===Tr&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=Ar,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=hr(function(t){e.state=xr,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)},0,e.time)}(t,e,{name:n,index:r,group:i,on:_r,tween:br,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:mr})}function kr(t,n){var e=Cr(t,n);if(e.state>mr)throw new Error("too late; already scheduled");return e}function Er(t,n){var e=Cr(t,n);if(e.state>Mr)throw new Error("too late; already running");return e}function Cr(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Pr(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>wr&&e.state<Tr,e.state=Ar,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}function zr(t,n,e){var r=t._id;return t.each(function(){var t=Er(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return Cr(t,r).value[n]}}function Rr(t,n){var e;return("number"==typeof n?me:n instanceof pn?he:(e=pn(n))?(n=e,he):Ne)(t,n)}var Dr=zt.prototype.constructor;function qr(t){return function(){this.style.removeProperty(t)}}var Lr=0;function Ur(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Or(t){return zt().transition(t)}function Br(){return++Lr}var Fr=zt.prototype;function Yr(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function Ir(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}Ur.prototype=Or.prototype={constructor:Ur,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=K(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,c,f=r[a],s=f.length,l=o[a]=new Array(s),h=0;h<s;++h)(u=f[h])&&(c=t.call(u,u.__data__,h,f))&&("__data__"in u&&(c.__data__=u.__data__),l[h]=c,Sr(l[h],n,e,h,l,Cr(u,e)));return new Ur(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=tt(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var c,f=r[u],s=f.length,l=0;l<s;++l)if(c=f[l]){for(var h,d=t.call(c,c.__data__,l,f),p=Cr(c,e),v=0,g=d.length;v<g;++v)(h=d[v])&&Sr(h,n,e,v,d,p);o.push(d),a.push(c)}return new Ur(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=nt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new Ur(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new Ur(a,this._parents,this._name,this._id)},selection:function(){return new Dr(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Br(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)if(a=u[f]){var s=Cr(a,n);Sr(a,t,e,f,u,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease})}return new Ur(r,this._parents,t,e)},call:Fr.call,nodes:Fr.nodes,node:Fr.node,size:Fr.size,empty:Fr.empty,each:Fr.each,on:function(t,n){var e=this._id;return arguments.length<2?Cr(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?kr:Er;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}(e,t,n))},attr:function(t,n){var e=W(t),r="transform"===e?Le:Rr;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttributeNS(t.space,t.local))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttributeNS(t.space,t.local)}}:function(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttribute(t))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttribute(t)}})(e,r,zr(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===r?i:i=n(r=a,e)}}:function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttribute(t);return a===o?null:a===r?i:i=n(r=a,e)}})(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=W(t);return this.tween(e,(r.local?function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}(t,i)),e}return i._value=n,i}:function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}(t,i)),e}return i._value=n,i})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?qe:Rr;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=ft(this,t),a=(this.style.removeProperty(t),ft(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,qr(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o;return function(){var a=ft(this,t),u=e(this),c=u+"";return null==u&&(this.style.removeProperty(t),c=u=ft(this,t)),a===c?null:a===r&&c===i?o:(i=c,o=n(r=a,u))}}(t,r,zr(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a;return function(){var c=Er(this,t),f=c.on,s=null==c.value[a]?o||(o=qr(n)):void 0;f===e&&i===s||(r=(e=f).copy()).on(u,i=s),c.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+"";return function(){var a=ft(this,t);return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&function(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}(t,o,e)),r}return o._value=n,o}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(zr(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,function(t){var n,e;function r(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&function(t){return function(n){this.textContent=t.call(this,n)}}(r)),n}return r._value=t,r}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Cr(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=Er(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Er(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},c=0,f=i.length;c<f;++c)if(i[c].name===n){i[c]=u;break}c===f&&i.push(u)}o.tween=i}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){kr(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){kr(this,t).delay=n}})(n,t)):Cr(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){Er(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){Er(this,t).duration=n}})(n,t)):Cr(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){Er(this,t).ease=n}}(n,t)):Cr(this.node(),n).ease},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,a){var u={value:a},c={value:function(){0==--i&&o()}};e.each(function(){var e=Er(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(c)),e.on=n})})}};var Hr=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),jr=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Xr=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),Vr=Math.PI,Gr=Vr/2;function $r(t){return(1-Math.cos(Vr*t))/2}function Wr(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function Zr(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var Qr=4/11,Kr=6/11,Jr=8/11,ti=.75,ni=9/11,ei=10/11,ri=.9375,ii=21/22,oi=63/64,ai=1/Qr/Qr;function ui(t){return(t=+t)<Qr?ai*t*t:t<Jr?ai*(t-=Kr)*t+ti:t<ei?ai*(t-=ni)*t+ri:ai*(t-=ii)*t+oi}var ci=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),fi=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),si=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),li=2*Math.PI,hi=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=li);function i(t){return n*Math.pow(2,10*--t)*Math.sin((r-t)/e)}return i.amplitude=function(n){return t(n,e*li)},i.period=function(e){return t(n,e)},i}(1,.3),di=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=li);function i(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/e)}return i.amplitude=function(n){return t(n,e*li)},i.period=function(e){return t(n,e)},i}(1,.3),pi=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=li);function i(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((r-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((r+t)/e))/2}return i.amplitude=function(n){return t(n,e*li)},i.period=function(e){return t(n,e)},i}(1,.3),vi={time:null,delay:0,duration:250,ease:Ir};function gi(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return vi.time=fr(),vi;return e}zt.prototype.interrupt=function(t){return this.each(function(){Pr(this,t)})},zt.prototype.transition=function(t){var n,e;t instanceof Ur?(n=t._id,t=t._name):(n=Br(),(e=vi).time=fr(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)(a=u[f])&&Sr(a,t,n,f,u,e||gi(a,n));return new Ur(r,this._parents,t,n)};var yi=[null];function _i(t){return function(){return t}}function bi(t,n,e){this.target=t,this.type=n,this.selection=e}function mi(){t.event.stopImmediatePropagation()}function xi(){t.event.preventDefault(),t.event.stopImmediatePropagation()}var wi={name:"drag"},Mi={name:"space"},Ni={name:"handle"},Ti={name:"center"};function Ai(t){return[+t[0],+t[1]]}function Si(t){return[Ai(t[0]),Ai(t[1])]}var ki={name:"x",handles:["w","e"].map(Li),input:function(t,n){return null==t?null:[[+t[0],n[0][1]],[+t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},Ei={name:"y",handles:["n","s"].map(Li),input:function(t,n){return null==t?null:[[n[0][0],+t[0]],[n[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},Ci={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(Li),input:function(t){return null==t?null:Si(t)},output:function(t){return t}},Pi={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},zi={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},Ri={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},Di={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},qi={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function Li(t){return{type:t}}function Ui(){return!t.event.ctrlKey&&!t.event.button}function Oi(){var t=this.ownerSVGElement||this;return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Bi(){return navigator.maxTouchPoints||"ontouchstart"in this}function Fi(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Yi(n){var e,r=Oi,i=Ui,o=Bi,a=!0,u=I("start","brush","end"),c=6;function f(t){var e=t.property("__brush",g).selectAll(".overlay").data([Li("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Pi.overlay).merge(e).each(function(){var t=Fi(this).extent;Rt(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([Li("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Pi.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=t.selectAll(".handle").data(n.handles,function(t){return t.type});r.exit().remove(),r.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return Pi[t.type]}),t.each(s).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",d).filter(o).on("touchstart.brush",d).on("touchmove.brush",p).on("touchend.brush touchcancel.brush",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function s(){var t=Rt(this),n=Fi(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-c/2:n[0][0]-c/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-c/2:n[0][1]-c/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+c:c}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+c:c})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function l(t,n,e){return!e&&t.__brush.emitter||new h(t,n)}function h(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function d(){if((!e||t.event.touches)&&i.apply(this,arguments)){var r,o,u,c,f,h,d,p,v,g,y,_,b=this,m=t.event.target.__data__.type,x="selection"===(a&&t.event.metaKey?m="overlay":m)?wi:a&&t.event.altKey?Ti:Ni,w=n===Ei?null:Di[m],M=n===ki?null:qi[m],N=Fi(b),T=N.extent,A=N.selection,S=T[0][0],k=T[0][1],E=T[1][0],C=T[1][1],P=0,z=0,R=w&&M&&a&&t.event.shiftKey,D=t.event.touches?(_=t.event.changedTouches[0].identifier,function(n){return Ft(n,t.event.touches,_)}):Bt,q=D(b),L=q,U=l(b,arguments,!0).beforestart();"overlay"===m?(A&&(v=!0),N.selection=A=[[r=n===Ei?S:q[0],u=n===ki?k:q[1]],[f=n===Ei?E:r,d=n===ki?C:u]]):(r=A[0][0],u=A[0][1],f=A[1][0],d=A[1][1]),o=r,c=u,h=f,p=d;var O=Rt(b).attr("pointer-events","none"),B=O.selectAll(".overlay").attr("cursor",Pi[m]);if(t.event.touches)U.moved=Y,U.ended=H;else{var F=Rt(t.event.view).on("mousemove.brush",Y,!0).on("mouseup.brush",H,!0);a&&F.on("keydown.brush",function(){switch(t.event.keyCode){case 16:R=w&&M;break;case 18:x===Ni&&(w&&(f=h-P*w,r=o+P*w),M&&(d=p-z*M,u=c+z*M),x=Ti,I());break;case 32:x!==Ni&&x!==Ti||(w<0?f=h-P:w>0&&(r=o-P),M<0?d=p-z:M>0&&(u=c-z),x=Mi,B.attr("cursor",Pi.selection),I());break;default:return}xi()},!0).on("keyup.brush",function(){switch(t.event.keyCode){case 16:R&&(g=y=R=!1,I());break;case 18:x===Ti&&(w<0?f=h:w>0&&(r=o),M<0?d=p:M>0&&(u=c),x=Ni,I());break;case 32:x===Mi&&(t.event.altKey?(w&&(f=h-P*w,r=o+P*w),M&&(d=p-z*M,u=c+z*M),x=Ti):(w<0?f=h:w>0&&(r=o),M<0?d=p:M>0&&(u=c),x=Ni),B.attr("cursor",Pi[m]),I());break;default:return}xi()},!0),Ht(t.event.view)}mi(),Pr(b),s.call(b),U.start()}function Y(){var t=D(b);!R||g||y||(Math.abs(t[0]-L[0])>Math.abs(t[1]-L[1])?y=!0:g=!0),L=t,v=!0,xi(),I()}function I(){var t;switch(P=L[0]-q[0],z=L[1]-q[1],x){case Mi:case wi:w&&(P=Math.max(S-r,Math.min(E-f,P)),o=r+P,h=f+P),M&&(z=Math.max(k-u,Math.min(C-d,z)),c=u+z,p=d+z);break;case Ni:w<0?(P=Math.max(S-r,Math.min(E-r,P)),o=r+P,h=f):w>0&&(P=Math.max(S-f,Math.min(E-f,P)),o=r,h=f+P),M<0?(z=Math.max(k-u,Math.min(C-u,z)),c=u+z,p=d):M>0&&(z=Math.max(k-d,Math.min(C-d,z)),c=u,p=d+z);break;case Ti:w&&(o=Math.max(S,Math.min(E,r-P*w)),h=Math.max(S,Math.min(E,f+P*w))),M&&(c=Math.max(k,Math.min(C,u-z*M)),p=Math.max(k,Math.min(C,d+z*M)))}h<o&&(w*=-1,t=r,r=f,f=t,t=o,o=h,h=t,m in zi&&B.attr("cursor",Pi[m=zi[m]])),p<c&&(M*=-1,t=u,u=d,d=t,t=c,c=p,p=t,m in Ri&&B.attr("cursor",Pi[m=Ri[m]])),N.selection&&(A=N.selection),g&&(o=A[0][0],h=A[1][0]),y&&(c=A[0][1],p=A[1][1]),A[0][0]===o&&A[0][1]===c&&A[1][0]===h&&A[1][1]===p||(N.selection=[[o,c],[h,p]],s.call(b),U.brush())}function H(){if(mi(),t.event.touches){if(t.event.touches.length)return;e&&clearTimeout(e),e=setTimeout(function(){e=null},500)}else jt(t.event.view,v),F.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);O.attr("pointer-events","all"),B.attr("cursor",Pi.overlay),N.selection&&(A=N.selection),function(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}(A)&&(N.selection=null,s.call(b)),U.end()}}function p(){l(this,arguments).moved()}function v(){l(this,arguments).ended()}function g(){var t=this.__brush||{selection:null};return t.extent=Si(r.apply(this,arguments)),t.dim=n,t}return f.move=function(t,e){t.selection?t.on("start.brush",function(){l(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){l(this,arguments).end()}).tween("brush",function(){var t=this,r=t.__brush,i=l(t,arguments),o=r.selection,a=n.input("function"==typeof e?e.apply(this,arguments):e,r.extent),u=Te(o,a);function c(n){r.selection=1===n&&null===a?null:u(n),s.call(t),i.brush()}return null!==o&&null!==a?c:c(1)}):t.each(function(){var t=this,r=arguments,i=t.__brush,o=n.input("function"==typeof e?e.apply(t,r):e,i.extent),a=l(t,r).beforestart();Pr(t),i.selection=null===o?null:o,s.call(t),a.start().brush().end()})},f.clear=function(t){f.move(t,null)},h.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting?(this.starting=!1,this.emit("start")):this.emit("brush"),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){kt(new bi(f,t,n.output(this.state.selection)),u.apply,u,[t,this.that,this.args])}},f.extent=function(t){return arguments.length?(r="function"==typeof t?t:_i(Si(t)),f):r},f.filter=function(t){return arguments.length?(i="function"==typeof t?t:_i(!!t),f):i},f.touchable=function(t){return arguments.length?(o="function"==typeof t?t:_i(!!t),f):o},f.handleSize=function(t){return arguments.length?(c=+t,f):c},f.keyModifiers=function(t){return arguments.length?(a=!!t,f):a},f.on=function(){var t=u.on.apply(u,arguments);return t===u?f:t},f}var Ii=Math.cos,Hi=Math.sin,ji=Math.PI,Xi=ji/2,Vi=2*ji,Gi=Math.max;function $i(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}var Wi=Array.prototype.slice;function Zi(t){return function(){return t}}var Qi=Math.PI,Ki=2*Qi,Ji=Ki-1e-6;function to(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function no(){return new to}function eo(t){return t.source}function ro(t){return t.target}function io(t){return t.radius}function oo(t){return t.startAngle}function ao(t){return t.endAngle}to.prototype=no.prototype={constructor:to,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,a=this._y1,u=e-t,c=r-n,f=o-t,s=a-n,l=f*f+s*s;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(s*u-c*f)>1e-6&&i){var h=e-o,d=r-a,p=u*u+c*c,v=h*h+d*d,g=Math.sqrt(p),y=Math.sqrt(l),_=i*Math.tan((Qi-Math.acos((p+l-v)/(2*g*y)))/2),b=_/y,m=_/g;Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*f)+","+(n+b*s)),this._+="A"+i+","+i+",0,0,"+ +(s*h>f*d)+","+(this._x1=t+m*u)+","+(this._y1=n+m*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,o=!!o;var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),c=t+a,f=n+u,s=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+f:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-f)>1e-6)&&(this._+="L"+c+","+f),e&&(l<0&&(l=l%Ki+Ki),l>Ji?this._+="A"+e+","+e+",0,1,"+s+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+s+","+(this._x1=c)+","+(this._y1=f):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=Qi)+","+s+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};function uo(){}function co(t,n){var e=new uo;if(t instanceof uo)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}function fo(){return{}}function so(t,n,e){t[n]=e}function lo(){return co()}function ho(t,n,e){t.set(n,e)}function po(){}uo.prototype=co.prototype={constructor:uo,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var vo=co.prototype;function go(t,n){var e=new po;if(t instanceof po)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}po.prototype=go.prototype={constructor:po,has:vo.has,add:function(t){return this["$"+(t+="")]=t,this},remove:vo.remove,clear:vo.clear,values:vo.keys,size:vo.size,empty:vo.empty,each:vo.each};var yo=Array.prototype.slice;function _o(t,n){return t-n}function bo(t){return function(){return t}}function mo(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=xo(t,n[r]))return e;return 0}function xo(t,n){for(var e=n[0],r=n[1],i=-1,o=0,a=t.length,u=a-1;o<a;u=o++){var c=t[o],f=c[0],s=c[1],l=t[u],h=l[0],d=l[1];if(wo(c,l,n))return 0;s>r!=d>r&&e<(h-f)*(r-s)/(d-s)+f&&(i=-i)}return i}function wo(t,n,e){var r,i,o,a;return function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])==(e[0]-t[0])*(n[1]-t[1])}(t,n,e)&&(i=t[r=+(t[0]===n[0])],o=e[r],a=n[r],i<=o&&o<=a||a<=o&&o<=i)}function Mo(){}var No=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function To(){var t=1,n=1,e=M,r=u;function i(t){var n=e(t);if(Array.isArray(n))n=n.slice().sort(_o);else{var r=s(t),i=r[0],a=r[1];n=w(i,a,n),n=g(Math.floor(i/n)*n,Math.floor(a/n)*n,n)}return n.map(function(n){return o(t,n)})}function o(e,i){var o=[],u=[];return function(e,r,i){var o,u,c,f,s,l,h=new Array,d=new Array;o=u=-1,f=e[0]>=r,No[f<<1].forEach(p);for(;++o<t-1;)c=f,f=e[o+1]>=r,No[c|f<<1].forEach(p);No[f<<0].forEach(p);for(;++u<n-1;){for(o=-1,f=e[u*t+t]>=r,s=e[u*t]>=r,No[f<<1|s<<2].forEach(p);++o<t-1;)c=f,f=e[u*t+t+o+1]>=r,l=s,s=e[u*t+o+1]>=r,No[c|f<<1|s<<2|l<<3].forEach(p);No[f|s<<3].forEach(p)}o=-1,s=e[u*t]>=r,No[s<<2].forEach(p);for(;++o<t-1;)l=s,s=e[u*t+o+1]>=r,No[s<<2|l<<3].forEach(p);function p(t){var n,e,r=[t[0][0]+o,t[0][1]+u],c=[t[1][0]+o,t[1][1]+u],f=a(r),s=a(c);(n=d[f])?(e=h[s])?(delete d[n.end],delete h[e.start],n===e?(n.ring.push(c),i(n.ring)):h[n.start]=d[e.end]={start:n.start,end:e.end,ring:n.ring.concat(e.ring)}):(delete d[n.end],n.ring.push(c),d[n.end=s]=n):(n=h[s])?(e=d[f])?(delete h[n.start],delete d[e.end],n===e?(n.ring.push(c),i(n.ring)):h[e.start]=d[n.end]={start:e.start,end:n.end,ring:e.ring.concat(n.ring)}):(delete h[n.start],n.ring.unshift(r),h[n.start=f]=n):h[f]=d[s]={start:f,end:s,ring:[r,c]}}No[s<<3].forEach(p)}(e,i,function(t){r(t,e,i),function(t){for(var n=0,e=t.length,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r}(t)>0?o.push([t]):u.push(t)}),u.forEach(function(t){for(var n,e=0,r=o.length;e<r;++e)if(-1!==mo((n=o[e])[0],t))return void n.push(t)}),{type:"MultiPolygon",value:i,coordinates:o}}function a(n){return 2*n[0]+n[1]*(t+1)*4}function u(e,r,i){e.forEach(function(e){var o,a=e[0],u=e[1],c=0|a,f=0|u,s=r[f*t+c];a>0&&a<t&&c===a&&(o=r[f*t+c-1],e[0]=a+(i-o)/(s-o)-.5),u>0&&u<n&&f===u&&(o=r[(f-1)*t+c],e[1]=u+(i-o)/(s-o)-.5)})}return i.contour=o,i.size=function(e){if(!arguments.length)return[t,n];var r=Math.ceil(e[0]),o=Math.ceil(e[1]);if(!(r>0&&o>0))throw new Error("invalid size");return t=r,n=o,i},i.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?bo(yo.call(t)):bo(t),i):e},i.smooth=function(t){return arguments.length?(r=t?u:Mo,i):r===u},i}function Ao(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<i;++a)for(var u=0,c=0;u<r+e;++u)u<r&&(c+=t.data[u+a*r]),u>=e&&(u>=o&&(c-=t.data[u-o+a*r]),n.data[u-e+a*r]=c/Math.min(u+1,r-1+o-u,o))}function So(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<r;++a)for(var u=0,c=0;u<i+e;++u)u<i&&(c+=t.data[a+u*r]),u>=e&&(u>=o&&(c-=t.data[a+(u-o)*r]),n.data[a+(u-e)*r]=c/Math.min(u+1,i-1+o-u,o))}function ko(t){return t[0]}function Eo(t){return t[1]}function Co(){return 1}var Po={},zo={},Ro=34,Do=10,qo=13;function Lo(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function Uo(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function Oo(t,n){var e=t+"",r=e.length;return r<n?new Array(n-r+1).join(0)+e:e}function Bo(t){var n=t.getUTCHours(),e=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":function(t){return t<0?"-"+Oo(-t,6):t>9999?"+"+Oo(t,6):Oo(t,4)}(t.getUTCFullYear())+"-"+Oo(t.getUTCMonth()+1,2)+"-"+Oo(t.getUTCDate(),2)+(i?"T"+Oo(n,2)+":"+Oo(e,2)+":"+Oo(r,2)+"."+Oo(i,3)+"Z":r?"T"+Oo(n,2)+":"+Oo(e,2)+":"+Oo(r,2)+"Z":e||n?"T"+Oo(n,2)+":"+Oo(e,2)+"Z":"")}function Fo(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function r(t,n){var r,i=[],o=t.length,a=0,u=0,c=o<=0,f=!1;function s(){if(c)return zo;if(f)return f=!1,Po;var n,r,i=a;if(t.charCodeAt(i)===Ro){for(;a++<o&&t.charCodeAt(a)!==Ro||t.charCodeAt(++a)===Ro;);return(n=a)>=o?c=!0:(r=t.charCodeAt(a++))===Do?f=!0:r===qo&&(f=!0,t.charCodeAt(a)===Do&&++a),t.slice(i+1,n-1).replace(/""/g,'"')}for(;a<o;){if((r=t.charCodeAt(n=a++))===Do)f=!0;else if(r===qo)f=!0,t.charCodeAt(a)===Do&&++a;else if(r!==e)continue;return t.slice(i,n)}return c=!0,t.slice(i,o)}for(t.charCodeAt(o-1)===Do&&--o,t.charCodeAt(o-1)===qo&&--o;(r=s())!==zo;){for(var l=[];r!==Po&&r!==zo;)l.push(r),r=s();n&&null==(l=n(l,u++))||i.push(l)}return i}function i(n,e){return n.map(function(n){return e.map(function(t){return a(n[t])}).join(t)})}function o(n){return n.map(a).join(t)}function a(t){return null==t?"":t instanceof Date?Bo(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,i,o=r(t,function(t,r){if(e)return e(t,r-1);i=t,e=n?function(t,n){var e=Lo(t);return function(r,i){return n(e(r),i,t)}}(t,n):Lo(t)});return o.columns=i||[],o},parseRows:r,format:function(n,e){return null==e&&(e=Uo(n)),[e.map(a).join(t)].concat(i(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=Uo(t)),i(t,n).join("\n")},formatRows:function(t){return t.map(o).join("\n")},formatRow:o,formatValue:a}}var Yo=Fo(","),Io=Yo.parse,Ho=Yo.parseRows,jo=Yo.format,Xo=Yo.formatBody,Vo=Yo.formatRows,Go=Yo.formatRow,$o=Yo.formatValue,Wo=Fo("\t"),Zo=Wo.parse,Qo=Wo.parseRows,Ko=Wo.format,Jo=Wo.formatBody,ta=Wo.formatRows,na=Wo.formatRow,ea=Wo.formatValue;var ra=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function ia(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}function oa(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.arrayBuffer()}function aa(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function ua(t,n){return fetch(t,n).then(aa)}function ca(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),ua(n,e).then(function(n){return t(n,r)})}}var fa=ca(Io),sa=ca(Zo);function la(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.json()}function ha(t){return function(n,e){return ua(n,e).then(function(n){return(new DOMParser).parseFromString(n,t)})}}var da=ha("application/xml"),pa=ha("text/html"),va=ha("image/svg+xml");function ga(t){return function(){return t}}function ya(){return 1e-6*(Math.random()-.5)}function _a(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,c,f,s,l,h,d=t._root,p={data:r},v=t._x0,g=t._y0,y=t._x1,_=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((f=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a,i=d,!(d=d[l=s<<1|f]))return i[l]=p,t;if(u=+t._x.call(null,d.data),c=+t._y.call(null,d.data),n===u&&e===c)return p.next=d,i?i[l]=p:t._root=p,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(f=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a}while((l=s<<1|f)==(h=(c>=a)<<1|u>=o));return i[h]=d,i[l]=p,t}function ba(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function ma(t){return t[0]}function xa(t){return t[1]}function wa(t,n,e){var r=new Ma(null==n?ma:n,null==e?xa:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function Ma(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function Na(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var Ta=wa.prototype=Ma.prototype;function Aa(t){return t.x+t.vx}function Sa(t){return t.y+t.vy}function ka(t){return t.index}function Ea(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function Ca(t){return t.x}function Pa(t){return t.y}Ta.copy=function(){var t,n,e=new Ma(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=Na(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=Na(n));return e},Ta.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return _a(this.cover(n,e),n,e,t)},Ta.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),c=1/0,f=1/0,s=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<c&&(c=r),r>s&&(s=r),i<f&&(f=i),i>l&&(l=i));if(c>s||f>l)return this;for(this.cover(c,f).cover(s,l),e=0;e<o;++e)_a(this,a[e],u[e],t[e]);return this},Ta.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{for(var a,u,c=i-e,f=this._root;e>t||t>=i||r>n||n>=o;)switch(u=(n<r)<<1|t<e,(a=new Array(4))[u]=f,f=a,c*=2,u){case 0:i=e+c,o=r+c;break;case 1:e=i-c,o=r+c;break;case 2:i=e+c,r=o-c;break;case 3:e=i-c,r=o-c}this._root&&this._root.length&&(this._root=f)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},Ta.data=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t},Ta.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},Ta.find=function(t,n,e){var r,i,o,a,u,c,f,s=this._x0,l=this._y0,h=this._x1,d=this._y1,p=[],v=this._root;for(v&&p.push(new ba(v,s,l,h,d)),null==e?e=1/0:(s=t-e,l=n-e,h=t+e,d=n+e,e*=e);c=p.pop();)if(!(!(v=c.node)||(i=c.x0)>h||(o=c.y0)>d||(a=c.x1)<s||(u=c.y1)<l))if(v.length){var g=(i+a)/2,y=(o+u)/2;p.push(new ba(v[3],g,y,a,u),new ba(v[2],i,y,g,u),new ba(v[1],g,o,a,y),new ba(v[0],i,o,g,y)),(f=(n>=y)<<1|t>=g)&&(c=p[p.length-1],p[p.length-1]=p[p.length-1-f],p[p.length-1-f]=c)}else{var _=t-+this._x.call(null,v.data),b=n-+this._y.call(null,v.data),m=_*_+b*b;if(m<e){var x=Math.sqrt(e=m);s=t-x,l=n-x,h=t+x,d=n+x,r=v.data}}return r},Ta.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,c,f,s,l,h,d=this._root,p=this._x0,v=this._y0,g=this._x1,y=this._y1;if(!d)return this;if(d.length)for(;;){if((f=o>=(u=(p+g)/2))?p=u:g=u,(s=a>=(c=(v+y)/2))?v=c:y=c,n=d,!(d=d[l=s<<1|f]))return this;if(!d.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},Ta.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},Ta.root=function(){return this._root},Ta.size=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t},Ta.visit=function(t){var n,e,r,i,o,a,u=[],c=this._root;for(c&&u.push(new ba(c,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&c.length){var f=(r+o)/2,s=(i+a)/2;(e=c[3])&&u.push(new ba(e,f,s,o,a)),(e=c[2])&&u.push(new ba(e,r,s,f,a)),(e=c[1])&&u.push(new ba(e,f,i,o,s)),(e=c[0])&&u.push(new ba(e,r,i,f,s))}return this},Ta.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new ba(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,a=n.x0,u=n.y0,c=n.x1,f=n.y1,s=(a+c)/2,l=(u+f)/2;(o=i[0])&&e.push(new ba(o,a,u,s,l)),(o=i[1])&&e.push(new ba(o,s,u,c,l)),(o=i[2])&&e.push(new ba(o,a,l,s,f)),(o=i[3])&&e.push(new ba(o,s,l,c,f))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},Ta.x=function(t){return arguments.length?(this._x=t,this):this._x},Ta.y=function(t){return arguments.length?(this._y=t,this):this._y};var za=10,Ra=Math.PI*(3-Math.sqrt(5));function Da(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function qa(t){return(t=Da(Math.abs(t)))?t[1]:NaN}var La,Ua=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Oa(t){if(!(n=Ua.exec(t)))throw new Error("invalid format: "+t);var n;return new Ba({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function Ba(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function Fa(t,n){var e=Da(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}Oa.prototype=Ba.prototype,Ba.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Ya={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Fa(100*t,n)},r:Fa,s:function(t,n){var e=Da(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(La=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Da(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function Ia(t){return t}var Ha,ja=Array.prototype.map,Xa=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Va(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?Ia:(n=ja.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],a=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),o.push(t.substring(i-=u,i+u)),!((c+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?Ia:function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(ja.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",f=void 0===t.minus?"-":t.minus+"",s=void 0===t.nan?"NaN":t.nan+"";function l(t){var n=(t=Oa(t)).fill,e=t.align,l=t.sign,h=t.symbol,d=t.zero,p=t.width,v=t.comma,g=t.precision,y=t.trim,_=t.type;"n"===_?(v=!0,_="g"):Ya[_]||(void 0===g&&(g=12),y=!0,_="g"),(d||"0"===n&&"="===e)&&(d=!0,n="0",e="=");var b="$"===h?i:"#"===h&&/[boxX]/.test(_)?"0"+_.toLowerCase():"",m="$"===h?o:/[%p]/.test(_)?c:"",x=Ya[_],w=/[defgprs%]/.test(_);function M(t){var i,o,c,h=b,M=m;if("c"===_)M=x(t)+M,t="";else{var N=(t=+t)<0||1/t<0;if(t=isNaN(t)?s:x(Math.abs(t),g),y&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),N&&0==+t&&"+"!==l&&(N=!1),h=(N?"("===l?l:f:"-"===l||"("===l?"":l)+h,M=("s"===_?Xa[8+La/3]:"")+M+(N&&"("===l?")":""),w)for(i=-1,o=t.length;++i<o;)if(48>(c=t.charCodeAt(i))||c>57){M=(46===c?a+t.slice(i+1):t.slice(i))+M,t=t.slice(0,i);break}}v&&!d&&(t=r(t,1/0));var T=h.length+t.length+M.length,A=T<p?new Array(p-T+1).join(n):"";switch(v&&d&&(t=r(A+t,A.length?p-M.length:1/0),A=""),e){case"<":t=h+t+M+A;break;case"=":t=h+A+t+M;break;case"^":t=A.slice(0,T=A.length>>1)+h+t+M+A.slice(T);break;default:t=A+h+t+M}return u(t)}return g=void 0===g?6:/[gprs]/.test(_)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),M.toString=function(){return t+""},M}return{format:l,formatPrefix:function(t,n){var e=l(((t=Oa(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(qa(n)/3))),i=Math.pow(10,-r),o=Xa[8+r/3];return function(t){return e(i*t)+o}}}}function Ga(n){return Ha=Va(n),t.format=Ha.format,t.formatPrefix=Ha.formatPrefix,Ha}function $a(t){return Math.max(0,-qa(Math.abs(t)))}function Wa(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(qa(n)/3)))-qa(Math.abs(t)))}function Za(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,qa(n)-qa(t))+1}function Qa(){return new Ka}function Ka(){this.reset()}Ga({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),Ka.prototype={constructor:Ka,reset:function(){this.s=this.t=0},add:function(t){tu(Ja,t,this.t),tu(this,Ja.s,this.s),this.s?this.t+=Ja.t:this.s=Ja.t},valueOf:function(){return this.s}};var Ja=new Ka;function tu(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}var nu=1e-6,eu=1e-12,ru=Math.PI,iu=ru/2,ou=ru/4,au=2*ru,uu=180/ru,cu=ru/180,fu=Math.abs,su=Math.atan,lu=Math.atan2,hu=Math.cos,du=Math.ceil,pu=Math.exp,vu=Math.log,gu=Math.pow,yu=Math.sin,_u=Math.sign||function(t){return t>0?1:t<0?-1:0},bu=Math.sqrt,mu=Math.tan;function xu(t){return t>1?0:t<-1?ru:Math.acos(t)}function wu(t){return t>1?iu:t<-1?-iu:Math.asin(t)}function Mu(t){return(t=yu(t/2))*t}function Nu(){}function Tu(t,n){t&&Su.hasOwnProperty(t.type)&&Su[t.type](t,n)}var Au={Feature:function(t,n){Tu(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)Tu(e[r].geometry,n)}},Su={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){ku(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)ku(e[r],n,0)},Polygon:function(t,n){Eu(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Eu(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)Tu(e[r],n)}};function ku(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function Eu(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)ku(t[e],n,1);n.polygonEnd()}function Cu(t,n){t&&Au.hasOwnProperty(t.type)?Au[t.type](t,n):Tu(t,n)}var Pu,zu,Ru,Du,qu,Lu=Qa(),Uu=Qa(),Ou={point:Nu,lineStart:Nu,lineEnd:Nu,polygonStart:function(){Lu.reset(),Ou.lineStart=Bu,Ou.lineEnd=Fu},polygonEnd:function(){var t=+Lu;Uu.add(t<0?au+t:t),this.lineStart=this.lineEnd=this.point=Nu},sphere:function(){Uu.add(au)}};function Bu(){Ou.point=Yu}function Fu(){Iu(Pu,zu)}function Yu(t,n){Ou.point=Iu,Pu=t,zu=n,Ru=t*=cu,Du=hu(n=(n*=cu)/2+ou),qu=yu(n)}function Iu(t,n){var e=(t*=cu)-Ru,r=e>=0?1:-1,i=r*e,o=hu(n=(n*=cu)/2+ou),a=yu(n),u=qu*a,c=Du*o+u*hu(i),f=u*r*yu(i);Lu.add(lu(f,c)),Ru=t,Du=o,qu=a}function Hu(t){return[lu(t[1],t[0]),wu(t[2])]}function ju(t){var n=t[0],e=t[1],r=hu(e);return[r*hu(n),r*yu(n),yu(e)]}function Xu(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Vu(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Gu(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function $u(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function Wu(t){var n=bu(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}var Zu,Qu,Ku,Ju,tc,nc,ec,rc,ic,oc,ac,uc,cc,fc,sc,lc,hc,dc,pc,vc,gc,yc,_c,bc,mc,xc,wc=Qa(),Mc={point:Nc,lineStart:Ac,lineEnd:Sc,polygonStart:function(){Mc.point=kc,Mc.lineStart=Ec,Mc.lineEnd=Cc,wc.reset(),Ou.polygonStart()},polygonEnd:function(){Ou.polygonEnd(),Mc.point=Nc,Mc.lineStart=Ac,Mc.lineEnd=Sc,Lu<0?(Zu=-(Ku=180),Qu=-(Ju=90)):wc>nu?Ju=90:wc<-nu&&(Qu=-90),oc[0]=Zu,oc[1]=Ku},sphere:function(){Zu=-(Ku=180),Qu=-(Ju=90)}};function Nc(t,n){ic.push(oc=[Zu=t,Ku=t]),n<Qu&&(Qu=n),n>Ju&&(Ju=n)}function Tc(t,n){var e=ju([t*cu,n*cu]);if(rc){var r=Vu(rc,e),i=Vu([r[1],-r[0],0],r);Wu(i),i=Hu(i);var o,a=t-tc,u=a>0?1:-1,c=i[0]*uu*u,f=fu(a)>180;f^(u*tc<c&&c<u*t)?(o=i[1]*uu)>Ju&&(Ju=o):f^(u*tc<(c=(c+360)%360-180)&&c<u*t)?(o=-i[1]*uu)<Qu&&(Qu=o):(n<Qu&&(Qu=n),n>Ju&&(Ju=n)),f?t<tc?Pc(Zu,t)>Pc(Zu,Ku)&&(Ku=t):Pc(t,Ku)>Pc(Zu,Ku)&&(Zu=t):Ku>=Zu?(t<Zu&&(Zu=t),t>Ku&&(Ku=t)):t>tc?Pc(Zu,t)>Pc(Zu,Ku)&&(Ku=t):Pc(t,Ku)>Pc(Zu,Ku)&&(Zu=t)}else ic.push(oc=[Zu=t,Ku=t]);n<Qu&&(Qu=n),n>Ju&&(Ju=n),rc=e,tc=t}function Ac(){Mc.point=Tc}function Sc(){oc[0]=Zu,oc[1]=Ku,Mc.point=Nc,rc=null}function kc(t,n){if(rc){var e=t-tc;wc.add(fu(e)>180?e+(e>0?360:-360):e)}else nc=t,ec=n;Ou.point(t,n),Tc(t,n)}function Ec(){Ou.lineStart()}function Cc(){kc(nc,ec),Ou.lineEnd(),fu(wc)>nu&&(Zu=-(Ku=180)),oc[0]=Zu,oc[1]=Ku,rc=null}function Pc(t,n){return(n-=t)<0?n+360:n}function zc(t,n){return t[0]-n[0]}function Rc(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var Dc={sphere:Nu,point:qc,lineStart:Uc,lineEnd:Fc,polygonStart:function(){Dc.lineStart=Yc,Dc.lineEnd=Ic},polygonEnd:function(){Dc.lineStart=Uc,Dc.lineEnd=Fc}};function qc(t,n){t*=cu;var e=hu(n*=cu);Lc(e*hu(t),e*yu(t),yu(n))}function Lc(t,n,e){cc+=(t-cc)/++ac,fc+=(n-fc)/ac,sc+=(e-sc)/ac}function Uc(){Dc.point=Oc}function Oc(t,n){t*=cu;var e=hu(n*=cu);bc=e*hu(t),mc=e*yu(t),xc=yu(n),Dc.point=Bc,Lc(bc,mc,xc)}function Bc(t,n){t*=cu;var e=hu(n*=cu),r=e*hu(t),i=e*yu(t),o=yu(n),a=lu(bu((a=mc*o-xc*i)*a+(a=xc*r-bc*o)*a+(a=bc*i-mc*r)*a),bc*r+mc*i+xc*o);uc+=a,lc+=a*(bc+(bc=r)),hc+=a*(mc+(mc=i)),dc+=a*(xc+(xc=o)),Lc(bc,mc,xc)}function Fc(){Dc.point=qc}function Yc(){Dc.point=Hc}function Ic(){jc(yc,_c),Dc.point=qc}function Hc(t,n){yc=t,_c=n,t*=cu,n*=cu,Dc.point=jc;var e=hu(n);bc=e*hu(t),mc=e*yu(t),xc=yu(n),Lc(bc,mc,xc)}function jc(t,n){t*=cu;var e=hu(n*=cu),r=e*hu(t),i=e*yu(t),o=yu(n),a=mc*o-xc*i,u=xc*r-bc*o,c=bc*i-mc*r,f=bu(a*a+u*u+c*c),s=wu(f),l=f&&-s/f;pc+=l*a,vc+=l*u,gc+=l*c,uc+=s,lc+=s*(bc+(bc=r)),hc+=s*(mc+(mc=i)),dc+=s*(xc+(xc=o)),Lc(bc,mc,xc)}function Xc(t){return function(){return t}}function Vc(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function Gc(t,n){return[fu(t)>ru?t+Math.round(-t/au)*au:t,n]}function $c(t,n,e){return(t%=au)?n||e?Vc(Zc(t),Qc(n,e)):Zc(t):n||e?Qc(n,e):Gc}function Wc(t){return function(n,e){return[(n+=t)>ru?n-au:n<-ru?n+au:n,e]}}function Zc(t){var n=Wc(t);return n.invert=Wc(-t),n}function Qc(t,n){var e=hu(t),r=yu(t),i=hu(n),o=yu(n);function a(t,n){var a=hu(n),u=hu(t)*a,c=yu(t)*a,f=yu(n),s=f*e+u*r;return[lu(c*i-s*o,u*e-f*r),wu(s*i+c*o)]}return a.invert=function(t,n){var a=hu(n),u=hu(t)*a,c=yu(t)*a,f=yu(n),s=f*i-c*o;return[lu(c*i+f*o,u*e+s*r),wu(s*e-u*r)]},a}function Kc(t){function n(n){return(n=t(n[0]*cu,n[1]*cu))[0]*=uu,n[1]*=uu,n}return t=$c(t[0]*cu,t[1]*cu,t.length>2?t[2]*cu:0),n.invert=function(n){return(n=t.invert(n[0]*cu,n[1]*cu))[0]*=uu,n[1]*=uu,n},n}function Jc(t,n,e,r,i,o){if(e){var a=hu(n),u=yu(n),c=r*e;null==i?(i=n+r*au,o=n-c/2):(i=tf(a,i),o=tf(a,o),(r>0?i<o:i>o)&&(i+=r*au));for(var f,s=i;r>0?s>o:s<o;s-=c)f=Hu([a,-u*hu(s),-u*yu(s)]),t.point(f[0],f[1])}}function tf(t,n){(n=ju(n))[0]-=t,Wu(n);var e=xu(-n[1]);return((-n[2]<0?-e:e)+au-nu)%au}function nf(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:Nu,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function ef(t,n){return fu(t[0]-n[0])<nu&&fu(t[1]-n[1])<nu}function rf(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function of(t,n,e,r,i){var o,a,u=[],c=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n];if(ef(r,a)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);i.lineEnd()}else u.push(e=new rf(r,t,null,!0)),c.push(e.o=new rf(r,null,e,!1)),u.push(e=new rf(a,t,null,!1)),c.push(e.o=new rf(a,null,e,!0))}}),u.length){for(c.sort(n),af(u),af(c),o=0,a=c.length;o<a;++o)c[o].e=e=!e;for(var f,s,l=u[0];;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;f=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,a=f.length;o<a;++o)i.point((s=f[o])[0],s[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(d)for(f=h.p.z,o=f.length-1;o>=0;--o)i.point((s=f[o])[0],s[1]);else r(h.x,h.p.x,-1,i);h=h.p}f=(h=h.o).z,d=!d}while(!h.v);i.lineEnd()}}}function af(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}Gc.invert=Gc;var uf=Qa();function cf(t){return fu(t[0])<=ru?t[0]:_u(t[0])*((fu(t[0])+ru)%au-ru)}function ff(t,n){var e=cf(n),r=n[1],i=yu(r),o=[yu(e),-hu(e),0],a=0,u=0;uf.reset(),1===i?r=iu+nu:-1===i&&(r=-iu-nu);for(var c=0,f=t.length;c<f;++c)if(l=(s=t[c]).length)for(var s,l,h=s[l-1],d=cf(h),p=h[1]/2+ou,v=yu(p),g=hu(p),y=0;y<l;++y,d=b,v=x,g=w,h=_){var _=s[y],b=cf(_),m=_[1]/2+ou,x=yu(m),w=hu(m),M=b-d,N=M>=0?1:-1,T=N*M,A=T>ru,S=v*x;if(uf.add(lu(S*N*yu(T),g*w+S*hu(T))),a+=A?M+N*au:M,A^d>=e^b>=e){var k=Vu(ju(h),ju(_));Wu(k);var E=Vu(o,k);Wu(E);var C=(A^M>=0?-1:1)*wu(E[2]);(r>C||r===C&&(k[0]||k[1]))&&(u+=A^M>=0?1:-1)}}return(a<-nu||a<nu&&uf<-nu)^1&u}function sf(t,n,e,r){return function(i){var o,a,u,c=n(i),f=nf(),s=n(f),l=!1,h={point:d,lineStart:v,lineEnd:g,polygonStart:function(){h.point=y,h.lineStart=_,h.lineEnd=b,a=[],o=[]},polygonEnd:function(){h.point=d,h.lineStart=v,h.lineEnd=g,a=A(a);var t=ff(o,r);a.length?(l||(i.polygonStart(),l=!0),of(a,hf,t,e,i)):t&&(l||(i.polygonStart(),l=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),l&&(i.polygonEnd(),l=!1),a=o=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function d(n,e){t(n,e)&&i.point(n,e)}function p(t,n){c.point(t,n)}function v(){h.point=p,c.lineStart()}function g(){h.point=d,c.lineEnd()}function y(t,n){u.push([t,n]),s.point(t,n)}function _(){s.lineStart(),u=[]}function b(){y(u[0][0],u[0][1]),s.lineEnd();var t,n,e,r,c=s.clean(),h=f.result(),d=h.length;if(u.pop(),o.push(u),u=null,d)if(1&c){if((n=(e=h[0]).length-1)>0){for(l||(i.polygonStart(),l=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1]);i.lineEnd()}}else d>1&&2&c&&h.push(h.pop().concat(h.shift())),a.push(h.filter(lf))}return h}}function lf(t){return t.length>1}function hf(t,n){return((t=t.x)[0]<0?t[1]-iu-nu:iu-t[1])-((n=n.x)[0]<0?n[1]-iu-nu:iu-n[1])}var df=sf(function(){return!0},function(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,a){var u=o>0?ru:-ru,c=fu(o-e);fu(c-ru)<nu?(t.point(e,r=(r+a)/2>0?iu:-iu),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&c>=ru&&(fu(e-i)<nu&&(e-=i*nu),fu(o-u)<nu&&(o-=u*nu),r=function(t,n,e,r){var i,o,a=yu(t-e);return fu(a)>nu?su((yu(n)*(o=hu(r))*yu(e)-yu(r)*(i=hu(n))*yu(t))/(i*o*a)):(n+r)/2}(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}},function(t,n,e,r){var i;if(null==t)i=e*iu,r.point(-ru,i),r.point(0,i),r.point(ru,i),r.point(ru,0),r.point(ru,-i),r.point(0,-i),r.point(-ru,-i),r.point(-ru,0),r.point(-ru,i);else if(fu(t[0]-n[0])>nu){var o=t[0]<n[0]?ru:-ru;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])},[-ru,-iu]);function pf(t){var n=hu(t),e=6*cu,r=n>0,i=fu(n)>nu;function o(t,e){return hu(t)*hu(e)>n}function a(t,e,r){var i=[1,0,0],o=Vu(ju(t),ju(e)),a=Xu(o,o),u=o[0],c=a-u*u;if(!c)return!r&&t;var f=n*a/c,s=-n*u/c,l=Vu(i,o),h=$u(i,f);Gu(h,$u(o,s));var d=l,p=Xu(h,d),v=Xu(d,d),g=p*p-v*(Xu(h,h)-1);if(!(g<0)){var y=bu(g),_=$u(d,(-p-y)/v);if(Gu(_,h),_=Hu(_),!r)return _;var b,m=t[0],x=e[0],w=t[1],M=e[1];x<m&&(b=m,m=x,x=b);var N=x-m,T=fu(N-ru)<nu;if(!T&&M<w&&(b=w,w=M,M=b),T||N<nu?T?w+M>0^_[1]<(fu(_[0]-m)<nu?w:M):w<=_[1]&&_[1]<=M:N>ru^(m<=_[0]&&_[0]<=x)){var A=$u(d,(-p+y)/v);return Gu(A,h),[_,Hu(A)]}}}function u(n,e){var i=r?t:ru-t,o=0;return n<-i?o|=1:n>i&&(o|=2),e<-i?o|=4:e>i&&(o|=8),o}return sf(o,function(t){var n,e,c,f,s;return{lineStart:function(){f=c=!1,s=1},point:function(l,h){var d,p=[l,h],v=o(l,h),g=r?v?0:u(l,h):v?u(l+(l<0?ru:-ru),h):0;if(!n&&(f=c=v)&&t.lineStart(),v!==c&&(!(d=a(n,p))||ef(n,d)||ef(p,d))&&(p[0]+=nu,p[1]+=nu,v=o(p[0],p[1])),v!==c)s=0,v?(t.lineStart(),d=a(p,n),t.point(d[0],d[1])):(d=a(n,p),t.point(d[0],d[1]),t.lineEnd()),n=d;else if(i&&n&&r^v){var y;g&e||!(y=a(p,n,!0))||(s=0,r?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!v||n&&ef(n,p)||t.point(p[0],p[1]),n=p,c=v,e=g},lineEnd:function(){c&&t.lineEnd(),n=null},clean:function(){return s|(f&&c)<<1}}},function(n,r,i,o){Jc(o,t,e,i,n,r)},r?[0,-t]:[-ru,t-ru])}var vf=1e9,gf=-vf;function yf(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,f){var s=0,l=0;if(null==i||(s=a(i,u))!==(l=a(o,u))||c(i,o)<0^u>0)do{f.point(0===s||3===s?t:e,s>1?r:n)}while((s=(s+u+4)%4)!==l);else f.point(o[0],o[1])}function a(r,i){return fu(r[0]-t)<nu?i>0?0:3:fu(r[0]-e)<nu?i>0?2:1:fu(r[1]-n)<nu?i>0?1:0:i>0?3:2}function u(t,n){return c(t.x,n.x)}function c(t,n){var e=a(t,1),r=a(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){var c,f,s,l,h,d,p,v,g,y,_,b=a,m=nf(),x={point:w,lineStart:function(){x.point=M,f&&f.push(s=[]);y=!0,g=!1,p=v=NaN},lineEnd:function(){c&&(M(l,h),d&&g&&m.rejoin(),c.push(m.result()));x.point=w,g&&b.lineEnd()},polygonStart:function(){b=m,c=[],f=[],_=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=f.length;e<i;++e)for(var o,a,u=f[e],c=1,s=u.length,l=u[0],h=l[0],d=l[1];c<s;++c)o=h,a=d,l=u[c],h=l[0],d=l[1],a<=r?d>r&&(h-o)*(r-a)>(d-a)*(t-o)&&++n:d<=r&&(h-o)*(r-a)<(d-a)*(t-o)&&--n;return n}(),e=_&&n,i=(c=A(c)).length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&of(c,u,n,o,a),a.polygonEnd());b=a,c=f=s=null}};function w(t,n){i(t,n)&&b.point(t,n)}function M(o,a){var u=i(o,a);if(f&&s.push([o,a]),y)l=o,h=a,d=u,y=!1,u&&(b.lineStart(),b.point(o,a));else if(u&&g)b.point(o,a);else{var c=[p=Math.max(gf,Math.min(vf,p)),v=Math.max(gf,Math.min(vf,v))],m=[o=Math.max(gf,Math.min(vf,o)),a=Math.max(gf,Math.min(vf,a))];!function(t,n,e,r,i,o){var a,u=t[0],c=t[1],f=0,s=1,l=n[0]-u,h=n[1]-c;if(a=e-u,l||!(a>0)){if(a/=l,l<0){if(a<f)return;a<s&&(s=a)}else if(l>0){if(a>s)return;a>f&&(f=a)}if(a=i-u,l||!(a<0)){if(a/=l,l<0){if(a>s)return;a>f&&(f=a)}else if(l>0){if(a<f)return;a<s&&(s=a)}if(a=r-c,h||!(a>0)){if(a/=h,h<0){if(a<f)return;a<s&&(s=a)}else if(h>0){if(a>s)return;a>f&&(f=a)}if(a=o-c,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>f&&(f=a)}else if(h>0){if(a<f)return;a<s&&(s=a)}return f>0&&(t[0]=u+f*l,t[1]=c+f*h),s<1&&(n[0]=u+s*l,n[1]=c+s*h),!0}}}}}(c,m,t,n,e,r)?u&&(b.lineStart(),b.point(o,a),_=!1):(g||(b.lineStart(),b.point(c[0],c[1])),b.point(m[0],m[1]),u||b.lineEnd(),_=!1)}p=o,v=a,g=u}return x}}var _f,bf,mf,xf=Qa(),wf={sphere:Nu,point:Nu,lineStart:function(){wf.point=Nf,wf.lineEnd=Mf},lineEnd:Nu,polygonStart:Nu,polygonEnd:Nu};function Mf(){wf.point=wf.lineEnd=Nu}function Nf(t,n){_f=t*=cu,bf=yu(n*=cu),mf=hu(n),wf.point=Tf}function Tf(t,n){t*=cu;var e=yu(n*=cu),r=hu(n),i=fu(t-_f),o=hu(i),a=r*yu(i),u=mf*e-bf*r*o,c=bf*e+mf*r*o;xf.add(lu(bu(a*a+u*u),c)),_f=t,bf=e,mf=r}function Af(t){return xf.reset(),Cu(t,wf),+xf}var Sf=[null,null],kf={type:"LineString",coordinates:Sf};function Ef(t,n){return Sf[0]=t,Sf[1]=n,Af(kf)}var Cf={Feature:function(t,n){return zf(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(zf(e[r].geometry,n))return!0;return!1}},Pf={Sphere:function(){return!0},Point:function(t,n){return Rf(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Rf(e[r],n))return!0;return!1},LineString:function(t,n){return Df(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Df(e[r],n))return!0;return!1},Polygon:function(t,n){return qf(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(qf(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(zf(e[r],n))return!0;return!1}};function zf(t,n){return!(!t||!Pf.hasOwnProperty(t.type))&&Pf[t.type](t,n)}function Rf(t,n){return 0===Ef(t,n)}function Df(t,n){for(var e,r,i,o=0,a=t.length;o<a;o++){if(0===(r=Ef(t[o],n)))return!0;if(o>0&&(i=Ef(t[o],t[o-1]))>0&&e<=i&&r<=i&&(e+r-i)*(1-Math.pow((e-r)/i,2))<eu*i)return!0;e=r}return!1}function qf(t,n){return!!ff(t.map(Lf),Uf(n))}function Lf(t){return(t=t.map(Uf)).pop(),t}function Uf(t){return[t[0]*cu,t[1]*cu]}function Of(t,n,e){var r=g(t,n-nu,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function Bf(t,n,e){var r=g(t,n-nu,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function Ff(){var t,n,e,r,i,o,a,u,c,f,s,l,h=10,d=h,p=90,v=360,y=2.5;function _(){return{type:"MultiLineString",coordinates:b()}}function b(){return g(du(r/p)*p,e,p).map(s).concat(g(du(u/v)*v,a,v).map(l)).concat(g(du(n/h)*h,t,h).filter(function(t){return fu(t%p)>nu}).map(c)).concat(g(du(o/d)*d,i,d).filter(function(t){return fu(t%v)>nu}).map(f))}return _.lines=function(){return b().map(function(t){return{type:"LineString",coordinates:t}})},_.outline=function(){return{type:"Polygon",coordinates:[s(r).concat(l(a).slice(1),s(e).reverse().slice(1),l(u).reverse().slice(1))]}},_.extent=function(t){return arguments.length?_.extentMajor(t).extentMinor(t):_.extentMinor()},_.extentMajor=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],u=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),u>a&&(t=u,u=a,a=t),_.precision(y)):[[r,u],[e,a]]},_.extentMinor=function(e){return arguments.length?(n=+e[0][0],t=+e[1][0],o=+e[0][1],i=+e[1][1],n>t&&(e=n,n=t,t=e),o>i&&(e=o,o=i,i=e),_.precision(y)):[[n,o],[t,i]]},_.step=function(t){return arguments.length?_.stepMajor(t).stepMinor(t):_.stepMinor()},_.stepMajor=function(t){return arguments.length?(p=+t[0],v=+t[1],_):[p,v]},_.stepMinor=function(t){return arguments.length?(h=+t[0],d=+t[1],_):[h,d]},_.precision=function(h){return arguments.length?(y=+h,c=Of(o,i,90),f=Bf(n,t,y),s=Of(u,a,90),l=Bf(r,e,y),_):y},_.extentMajor([[-180,-90+nu],[180,90-nu]]).extentMinor([[-180,-80-nu],[180,80+nu]])}function Yf(t){return t}var If,Hf,jf,Xf,Vf=Qa(),Gf=Qa(),$f={point:Nu,lineStart:Nu,lineEnd:Nu,polygonStart:function(){$f.lineStart=Wf,$f.lineEnd=Kf},polygonEnd:function(){$f.lineStart=$f.lineEnd=$f.point=Nu,Vf.add(fu(Gf)),Gf.reset()},result:function(){var t=Vf/2;return Vf.reset(),t}};function Wf(){$f.point=Zf}function Zf(t,n){$f.point=Qf,If=jf=t,Hf=Xf=n}function Qf(t,n){Gf.add(Xf*t-jf*n),jf=t,Xf=n}function Kf(){Qf(If,Hf)}var Jf=1/0,ts=Jf,ns=-Jf,es=ns,rs={point:function(t,n){t<Jf&&(Jf=t);t>ns&&(ns=t);n<ts&&(ts=n);n>es&&(es=n)},lineStart:Nu,lineEnd:Nu,polygonStart:Nu,polygonEnd:Nu,result:function(){var t=[[Jf,ts],[ns,es]];return ns=es=-(ts=Jf=1/0),t}};var is,os,as,us,cs=0,fs=0,ss=0,ls=0,hs=0,ds=0,ps=0,vs=0,gs=0,ys={point:_s,lineStart:bs,lineEnd:ws,polygonStart:function(){ys.lineStart=Ms,ys.lineEnd=Ns},polygonEnd:function(){ys.point=_s,ys.lineStart=bs,ys.lineEnd=ws},result:function(){var t=gs?[ps/gs,vs/gs]:ds?[ls/ds,hs/ds]:ss?[cs/ss,fs/ss]:[NaN,NaN];return cs=fs=ss=ls=hs=ds=ps=vs=gs=0,t}};function _s(t,n){cs+=t,fs+=n,++ss}function bs(){ys.point=ms}function ms(t,n){ys.point=xs,_s(as=t,us=n)}function xs(t,n){var e=t-as,r=n-us,i=bu(e*e+r*r);ls+=i*(as+t)/2,hs+=i*(us+n)/2,ds+=i,_s(as=t,us=n)}function ws(){ys.point=_s}function Ms(){ys.point=Ts}function Ns(){As(is,os)}function Ts(t,n){ys.point=As,_s(is=as=t,os=us=n)}function As(t,n){var e=t-as,r=n-us,i=bu(e*e+r*r);ls+=i*(as+t)/2,hs+=i*(us+n)/2,ds+=i,ps+=(i=us*t-as*n)*(as+t),vs+=i*(us+n),gs+=3*i,_s(as=t,us=n)}function Ss(t){this._context=t}Ss.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,au)}},result:Nu};var ks,Es,Cs,Ps,zs,Rs=Qa(),Ds={point:Nu,lineStart:function(){Ds.point=qs},lineEnd:function(){ks&&Ls(Es,Cs),Ds.point=Nu},polygonStart:function(){ks=!0},polygonEnd:function(){ks=null},result:function(){var t=+Rs;return Rs.reset(),t}};function qs(t,n){Ds.point=Ls,Es=Ps=t,Cs=zs=n}function Ls(t,n){Ps-=t,zs-=n,Rs.add(bu(Ps*Ps+zs*zs)),Ps=t,zs=n}function Us(){this._string=[]}function Os(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Bs(t){return function(n){var e=new Fs;for(var r in t)e[r]=t[r];return e.stream=n,e}}function Fs(){}function Ys(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),Cu(e,t.stream(rs)),n(rs.result()),null!=r&&t.clipExtent(r),t}function Is(t,n,e){return Ys(t,function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([a,u])},e)}function Hs(t,n,e){return Is(t,[[0,0],n],e)}function js(t,n,e){return Ys(t,function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1];t.scale(150*i).translate([o,a])},e)}function Xs(t,n,e){return Ys(t,function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,a])},e)}Us.prototype={_radius:4.5,_circle:Os(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=Os(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}},Fs.prototype={constructor:Fs,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Vs=16,Gs=hu(30*cu);function $s(t,n){return+n?function(t,n){function e(r,i,o,a,u,c,f,s,l,h,d,p,v,g){var y=f-r,_=s-i,b=y*y+_*_;if(b>4*n&&v--){var m=a+h,x=u+d,w=c+p,M=bu(m*m+x*x+w*w),N=wu(w/=M),T=fu(fu(w)-1)<nu||fu(o-l)<nu?(o+l)/2:lu(x,m),A=t(T,N),S=A[0],k=A[1],E=S-r,C=k-i,P=_*E-y*C;(P*P/b>n||fu((y*E+_*C)/b-.5)>.3||a*h+u*d+c*p<Gs)&&(e(r,i,o,a,u,c,S,k,T,m/=M,x/=M,w,v,g),g.point(S,k),e(S,k,T,m,x,w,f,s,l,h,d,p,v,g))}}return function(n){var r,i,o,a,u,c,f,s,l,h,d,p,v={point:g,lineStart:y,lineEnd:b,polygonStart:function(){n.polygonStart(),v.lineStart=m},polygonEnd:function(){n.polygonEnd(),v.lineStart=y}};function g(e,r){e=t(e,r),n.point(e[0],e[1])}function y(){s=NaN,v.point=_,n.lineStart()}function _(r,i){var o=ju([r,i]),a=t(r,i);e(s,l,f,h,d,p,s=a[0],l=a[1],f=r,h=o[0],d=o[1],p=o[2],Vs,n),n.point(s,l)}function b(){v.point=g,n.lineEnd()}function m(){y(),v.point=x,v.lineEnd=w}function x(t,n){_(r=t,n),i=s,o=l,a=h,u=d,c=p,v.point=_}function w(){e(s,l,f,h,d,p,i,o,r,a,u,c,Vs,n),v.lineEnd=b,b()}return v}}(t,n):function(t){return Bs({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}var Ws=Bs({point:function(t,n){this.stream.point(t*cu,n*cu)}});function Zs(t,n,e,r,i,o){var a=hu(o),u=yu(o),c=a*t,f=u*t,s=a/t,l=u/t,h=(u*e-a*n)/t,d=(u*n+a*e)/t;function p(t,o){return[c*(t*=r)-f*(o*=i)+n,e-f*t-c*o]}return p.invert=function(t,n){return[r*(s*t-l*n+h),i*(d-l*t-s*n)]},p}function Qs(t){return Ks(function(){return t})()}function Ks(t){var n,e,r,i,o,a,u,c,f,s,l=150,h=480,d=250,p=0,v=0,g=0,y=0,_=0,b=0,m=1,x=1,w=null,M=df,N=null,T=Yf,A=.5;function S(t){return c(t[0]*cu,t[1]*cu)}function k(t){return(t=c.invert(t[0],t[1]))&&[t[0]*uu,t[1]*uu]}function E(){var t=Zs(l,0,0,m,x,b).apply(null,n(p,v)),r=(b?Zs:function(t,n,e,r,i){function o(o,a){return[n+t*(o*=r),e-t*(a*=i)]}return o.invert=function(o,a){return[(o-n)/t*r,(e-a)/t*i]},o})(l,h-t[0],d-t[1],m,x,b);return e=$c(g,y,_),u=Vc(n,r),c=Vc(e,u),a=$s(u,A),C()}function C(){return f=s=null,S}return S.stream=function(t){return f&&s===t?f:f=Ws(function(t){return Bs({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}(e)(M(a(T(s=t)))))},S.preclip=function(t){return arguments.length?(M=t,w=void 0,C()):M},S.postclip=function(t){return arguments.length?(T=t,N=r=i=o=null,C()):T},S.clipAngle=function(t){return arguments.length?(M=+t?pf(w=t*cu):(w=null,df),C()):w*uu},S.clipExtent=function(t){return arguments.length?(T=null==t?(N=r=i=o=null,Yf):yf(N=+t[0][0],r=+t[0][1],i=+t[1][0],o=+t[1][1]),C()):null==N?null:[[N,r],[i,o]]},S.scale=function(t){return arguments.length?(l=+t,E()):l},S.translate=function(t){return arguments.length?(h=+t[0],d=+t[1],E()):[h,d]},S.center=function(t){return arguments.length?(p=t[0]%360*cu,v=t[1]%360*cu,E()):[p*uu,v*uu]},S.rotate=function(t){return arguments.length?(g=t[0]%360*cu,y=t[1]%360*cu,_=t.length>2?t[2]%360*cu:0,E()):[g*uu,y*uu,_*uu]},S.angle=function(t){return arguments.length?(b=t%360*cu,E()):b*uu},S.reflectX=function(t){return arguments.length?(m=t?-1:1,E()):m<0},S.reflectY=function(t){return arguments.length?(x=t?-1:1,E()):x<0},S.precision=function(t){return arguments.length?(a=$s(u,A=t*t),C()):bu(A)},S.fitExtent=function(t,n){return Is(S,t,n)},S.fitSize=function(t,n){return Hs(S,t,n)},S.fitWidth=function(t,n){return js(S,t,n)},S.fitHeight=function(t,n){return Xs(S,t,n)},function(){return n=t.apply(this,arguments),S.invert=n.invert&&k,E()}}function Js(t){var n=0,e=ru/3,r=Ks(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*cu,e=t[1]*cu):[n*uu,e*uu]},i}function tl(t,n){var e=yu(t),r=(e+yu(n))/2;if(fu(r)<nu)return function(t){var n=hu(t);function e(t,e){return[t*n,yu(e)/n]}return e.invert=function(t,e){return[t/n,wu(e*n)]},e}(t);var i=1+e*(2*r-e),o=bu(i)/r;function a(t,n){var e=bu(i-2*r*yu(n))/r;return[e*yu(t*=r),o-e*hu(t)]}return a.invert=function(t,n){var e=o-n,a=lu(t,fu(e))*_u(e);return e*r<0&&(a-=ru*_u(t)*_u(e)),[a/r,wu((i-(t*t+e*e)*r*r)/(2*r))]},a}function nl(){return Js(tl).scale(155.424).center([0,33.6442])}function el(){return nl().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function rl(t){return function(n,e){var r=hu(n),i=hu(e),o=t(r*i);return[o*i*yu(n),o*yu(e)]}}function il(t){return function(n,e){var r=bu(n*n+e*e),i=t(r),o=yu(i),a=hu(i);return[lu(n*o,r*a),wu(r&&e*o/r)]}}var ol=rl(function(t){return bu(2/(1+t))});ol.invert=il(function(t){return 2*wu(t/2)});var al=rl(function(t){return(t=xu(t))&&t/yu(t)});function ul(t,n){return[t,vu(mu((iu+n)/2))]}function cl(t){var n,e,r,i=Qs(t),o=i.center,a=i.scale,u=i.translate,c=i.clipExtent,f=null;function s(){var o=ru*a(),u=i(Kc(i.rotate()).invert([0,0]));return c(null==f?[[u[0]-o,u[1]-o],[u[0]+o,u[1]+o]]:t===ul?[[Math.max(u[0]-o,f),n],[Math.min(u[0]+o,e),r]]:[[f,Math.max(u[1]-o,n)],[e,Math.min(u[1]+o,r)]])}return i.scale=function(t){return arguments.length?(a(t),s()):a()},i.translate=function(t){return arguments.length?(u(t),s()):u()},i.center=function(t){return arguments.length?(o(t),s()):o()},i.clipExtent=function(t){return arguments.length?(null==t?f=n=e=r=null:(f=+t[0][0],n=+t[0][1],e=+t[1][0],r=+t[1][1]),s()):null==f?null:[[f,n],[e,r]]},s()}function fl(t){return mu((iu+t)/2)}function sl(t,n){var e=hu(t),r=t===n?yu(t):vu(e/hu(n))/vu(fl(n)/fl(t)),i=e*gu(fl(t),r)/r;if(!r)return ul;function o(t,n){i>0?n<-iu+nu&&(n=-iu+nu):n>iu-nu&&(n=iu-nu);var e=i/gu(fl(n),r);return[e*yu(r*t),i-e*hu(r*t)]}return o.invert=function(t,n){var e=i-n,o=_u(r)*bu(t*t+e*e),a=lu(t,fu(e))*_u(e);return e*r<0&&(a-=ru*_u(t)*_u(e)),[a/r,2*su(gu(i/o,1/r))-iu]},o}function ll(t,n){return[t,n]}function hl(t,n){var e=hu(t),r=t===n?yu(t):(e-hu(n))/(n-t),i=e/r+t;if(fu(r)<nu)return ll;function o(t,n){var e=i-n,o=r*t;return[e*yu(o),i-e*hu(o)]}return o.invert=function(t,n){var e=i-n,o=lu(t,fu(e))*_u(e);return e*r<0&&(o-=ru*_u(t)*_u(e)),[o/r,i-_u(r)*bu(t*t+e*e)]},o}al.invert=il(function(t){return t}),ul.invert=function(t,n){return[t,2*su(pu(n))-iu]},ll.invert=ll;var dl=1.340264,pl=-.081106,vl=893e-6,gl=.003796,yl=bu(3)/2;function _l(t,n){var e=wu(yl*yu(n)),r=e*e,i=r*r*r;return[t*hu(e)/(yl*(dl+3*pl*r+i*(7*vl+9*gl*r))),e*(dl+pl*r+i*(vl+gl*r))]}function bl(t,n){var e=hu(n),r=hu(t)*e;return[e*yu(t)/r,yu(n)/r]}function ml(t,n){var e=n*n,r=e*e;return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function xl(t,n){return[hu(n)*yu(t),yu(n)]}function wl(t,n){var e=hu(n),r=1+hu(t)*e;return[e*yu(t)/r,yu(n)/r]}function Ml(t,n){return[vu(mu((iu+n)/2)),-t]}function Nl(t,n){return t.parent===n.parent?1:2}function Tl(t,n){return t+n.x}function Al(t,n){return Math.max(t,n.y)}function Sl(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function kl(t,n){var e,r,i,o,a,u=new zl(t),c=+t.value&&(u.value=t.value),f=[u];for(null==n&&(n=El);e=f.pop();)if(c&&(e.value=+e.data.value),(i=n(e.data))&&(a=i.length))for(e.children=new Array(a),o=a-1;o>=0;--o)f.push(r=e.children[o]=new zl(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(Pl)}function El(t){return t.children}function Cl(t){t.data=t.data.data}function Pl(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function zl(t){this.data=t,this.depth=this.height=0,this.parent=null}_l.invert=function(t,n){for(var e,r=n,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=e=(r*(dl+pl*i+o*(vl+gl*i))-n)/(dl+3*pl*i+o*(7*vl+9*gl*i)))*r)*i*i,!(fu(e)<eu));++a);return[yl*t*(dl+3*pl*i+o*(7*vl+9*gl*i))/hu(r),wu(yu(r)/yl)]},bl.invert=il(su),ml.invert=function(t,n){var e,r=n,i=25;do{var o=r*r,a=o*o;r-=e=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-n)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)))}while(fu(e)>nu&&--i>0);return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},xl.invert=il(wu),wl.invert=il(function(t){return 2*su(t)}),Ml.invert=function(t,n){return[-n,2*su(pu(t))-iu]},zl.prototype=kl.prototype={constructor:zl,count:function(){return this.eachAfter(Sl)},each:function(t){var n,e,r,i,o=this,a=[o];do{for(n=a.reverse(),a=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length);return this},eachAfter:function(t){for(var n,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=a.pop();)t(i);return this},eachBefore:function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},sum:function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},sort:function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){var t=[];return this.each(function(n){t.push(n)}),t},leaves:function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},links:function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n},copy:function(){return kl(this).eachBefore(Cl)}};var Rl=Array.prototype.slice;function Dl(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n;return t}(Rl.call(t))).length,o=[];r<i;)n=t[r],e&&Ul(e,n)?++r:(e=Bl(o=ql(o,n)),r=0);return e}function ql(t,n){var e,r;if(Ol(n,t))return[n];for(e=0;e<t.length;++e)if(Ll(n,t[e])&&Ol(Fl(t[e],n),t))return[t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(Ll(Fl(t[e],t[r]),n)&&Ll(Fl(t[e],n),t[r])&&Ll(Fl(t[r],n),t[e])&&Ol(Yl(t[e],t[r],n),t))return[t[e],t[r],n];throw new Error}function Ll(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function Ul(t,n){var e=t.r-n.r+1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Ol(t,n){for(var e=0;e<n.length;++e)if(!Ul(t,n[e]))return!1;return!0}function Bl(t){switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0]);case 2:return Fl(t[0],t[1]);case 3:return Yl(t[0],t[1],t[2])}}function Fl(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,c=o-e,f=a-r,s=u-i,l=Math.sqrt(c*c+f*f);return{x:(e+o+c/l*s)/2,y:(r+a+f/l*s)/2,r:(l+i+u)/2}}function Yl(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,c=n.r,f=e.x,s=e.y,l=e.r,h=r-a,d=r-f,p=i-u,v=i-s,g=c-o,y=l-o,_=r*r+i*i-o*o,b=_-a*a-u*u+c*c,m=_-f*f-s*s+l*l,x=d*p-h*v,w=(p*m-v*b)/(2*x)-r,M=(v*g-p*y)/x,N=(d*b-h*m)/(2*x)-i,T=(h*y-d*g)/x,A=M*M+T*T-1,S=2*(o+w*M+N*T),k=w*w+N*N-o*o,E=-(A?(S+Math.sqrt(S*S-4*A*k))/(2*A):k/S);return{x:r+w+M*E,y:i+N+T*E,r:E}}function Il(t,n,e){var r,i,o,a,u=t.x-n.x,c=t.y-n.y,f=u*u+c*c;f?(i=n.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(r=(f+a-i)/(2*f),o=Math.sqrt(Math.max(0,a/f-r*r)),e.x=t.x-r*u-o*c,e.y=t.y-r*c+o*u):(r=(f+i-a)/(2*f),o=Math.sqrt(Math.max(0,i/f-r*r)),e.x=n.x+r*u-o*c,e.y=n.y+r*c+o*u)):(e.x=n.x+e.r,e.y=n.y)}function Hl(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function jl(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r;return i*i+o*o}function Xl(t){this._=t,this.next=null,this.previous=null}function Vl(t){if(!(i=t.length))return 0;var n,e,r,i,o,a,u,c,f,s,l;if((n=t[0]).x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;Il(e,n,r=t[2]),n=new Xl(n),e=new Xl(e),r=new Xl(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(u=3;u<i;++u){Il(n._,e._,r=t[u]),r=new Xl(r),c=e.next,f=n.previous,s=e._.r,l=n._.r;do{if(s<=l){if(Hl(c._,r._)){e=c,n.next=e,e.previous=n,--u;continue t}s+=c._.r,c=c.next}else{if(Hl(f._,r._)){(n=f).next=e,e.previous=n,--u;continue t}l+=f._.r,f=f.previous}}while(c!==f.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,o=jl(n);(r=r.next)!==e;)(a=jl(r))<o&&(n=r,o=a);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=Dl(n),u=0;u<i;++u)(n=t[u]).x-=r.x,n.y-=r.y;return r.r}function Gl(t){return null==t?null:$l(t)}function $l(t){if("function"!=typeof t)throw new Error;return t}function Wl(){return 0}function Zl(t){return function(){return t}}function Ql(t){return Math.sqrt(t.value)}function Kl(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function Jl(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0;if(u)for(i=0;i<a;++i)r[i].r+=u;if(o=Vl(r),u)for(i=0;i<a;++i)r[i].r-=u;e.r=o+u}}}function th(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function nh(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function eh(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(r-n)/t.value;++u<c;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*f}var rh="$",ih={depth:-1},oh={};function ah(t){return t.id}function uh(t){return t.parentId}function ch(t,n){return t.parent===n.parent?1:2}function fh(t){var n=t.children;return n?n[0]:t.t}function sh(t){var n=t.children;return n?n[n.length-1]:t.t}function lh(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function hh(t,n,e){return t.a.parent===n.parent?t.a:e}function dh(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function ph(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(i-e)/t.value;++u<c;)(o=a[u]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*f}dh.prototype=Object.create(zl.prototype);var vh=(1+Math.sqrt(5))/2;function gh(t,n,e,r,i,o){for(var a,u,c,f,s,l,h,d,p,v,g,y=[],_=n.children,b=0,m=0,x=_.length,w=n.value;b<x;){c=i-e,f=o-r;do{s=_[m++].value}while(!s&&m<x);for(l=h=s,g=s*s*(v=Math.max(f/c,c/f)/(w*t)),p=Math.max(h/g,g/l);m<x;++m){if(s+=u=_[m].value,u<l&&(l=u),u>h&&(h=u),g=s*s*v,(d=Math.max(h/g,g/l))>p){s-=u;break}p=d}y.push(a={value:s,dice:c<f,children:_.slice(b,m)}),a.dice?eh(a,e,r,i,w?r+=f*s/w:o):ph(a,e,r,w?e+=c*s/w:i,o),w-=s,b=m}return y}var yh=function t(n){function e(t,e,r,i,o){gh(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(vh);var _h=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,c,f,s,l=-1,h=a.length,d=t.value;++l<h;){for(c=(u=a[l]).children,f=u.value=0,s=c.length;f<s;++f)u.value+=c[f].value;u.dice?eh(u,e,r,i,r+=(o-r)*u.value/d):ph(u,e,r,e+=(i-e)*u.value/d,o),d-=u.value}else t._squarify=a=gh(n,t,e,r,i,o),a.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(vh);function bh(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}function mh(t,n){return t[0]-n[0]||t[1]-n[1]}function xh(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&bh(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function wh(){return Math.random()}var Mh=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(wh),Nh=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(wh),Th=function t(n){function e(){var t=Nh.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(wh),Ah=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(wh),Sh=function t(n){function e(t){var e=Ah.source(n)(t);return function(){return e()/t}}return e.source=t,e}(wh),kh=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(wh);function Eh(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}function Ch(t,n){switch(arguments.length){case 0:break;case 1:this.interpolator(t);break;default:this.interpolator(n).domain(t)}return this}var Ph=Array.prototype,zh=Ph.map,Rh=Ph.slice,Dh={name:"implicit"};function qh(){var t=co(),n=[],e=[],r=Dh;function i(i){var o=i+"",a=t.get(o);if(!a){if(r!==Dh)return r;t.set(o,a=n.push(i))}return e[(a-1)%e.length]}return i.domain=function(e){if(!arguments.length)return n.slice();n=[],t=co();for(var r,o,a=-1,u=e.length;++a<u;)t.has(o=(r=e[a])+"")||t.set(o,n.push(r));return i},i.range=function(t){return arguments.length?(e=Rh.call(t),i):e.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return qh(n,e).unknown(r)},Eh.apply(i,arguments),i}function Lh(){var t,n,e=qh().unknown(void 0),r=e.domain,i=e.range,o=[0,1],a=!1,u=0,c=0,f=.5;function s(){var e=r().length,s=o[1]<o[0],l=o[s-0],h=o[1-s];t=(h-l)/Math.max(1,e-u+2*c),a&&(t=Math.floor(t)),l+=(h-l-t*(e-u))*f,n=t*(1-u),a&&(l=Math.round(l),n=Math.round(n));var d=g(e).map(function(n){return l+t*n});return i(s?d.reverse():d)}return delete e.unknown,e.domain=function(t){return arguments.length?(r(t),s()):r()},e.range=function(t){return arguments.length?(o=[+t[0],+t[1]],s()):o.slice()},e.rangeRound=function(t){return o=[+t[0],+t[1]],a=!0,s()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(a=!!t,s()):a},e.padding=function(t){return arguments.length?(u=Math.min(1,c=+t),s()):u},e.paddingInner=function(t){return arguments.length?(u=Math.min(1,t),s()):u},e.paddingOuter=function(t){return arguments.length?(c=+t,s()):c},e.align=function(t){return arguments.length?(f=Math.max(0,Math.min(1,t)),s()):f},e.copy=function(){return Lh(r(),o).round(a).paddingInner(u).paddingOuter(c).align(f)},Eh.apply(s(),arguments)}function Uh(t){return+t}var Oh=[0,1];function Bh(t){return t}function Fh(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:function(t){return function(){return t}}(isNaN(n)?NaN:.5)}function Yh(t){var n,e=t[0],r=t[t.length-1];return e>r&&(n=e,e=r,r=n),function(t){return Math.max(e,Math.min(r,t))}}function Ih(t,n,e){var r=t[0],i=t[1],o=n[0],a=n[1];return i<r?(r=Fh(i,r),o=e(a,o)):(r=Fh(r,i),o=e(o,a)),function(t){return o(r(t))}}function Hh(t,n,e){var r=Math.min(t.length,n.length)-1,o=new Array(r),a=new Array(r),u=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<r;)o[u]=Fh(t[u],t[u+1]),a[u]=e(n[u],n[u+1]);return function(n){var e=i(t,n,1,r)-1;return a[e](o[e](n))}}function jh(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function Xh(){var t,n,e,r,i,o,a=Oh,u=Oh,c=Te,f=Bh;function s(){return r=Math.min(a.length,u.length)>2?Hh:Ih,i=o=null,l}function l(n){return isNaN(n=+n)?e:(i||(i=r(a.map(t),u,c)))(t(f(n)))}return l.invert=function(e){return f(n((o||(o=r(u,a.map(t),me)))(e)))},l.domain=function(t){return arguments.length?(a=zh.call(t,Uh),f===Bh||(f=Yh(a)),s()):a.slice()},l.range=function(t){return arguments.length?(u=Rh.call(t),s()):u.slice()},l.rangeRound=function(t){return u=Rh.call(t),c=Ae,s()},l.clamp=function(t){return arguments.length?(f=t?Yh(a):Bh,l):f!==Bh},l.interpolate=function(t){return arguments.length?(c=t,s()):c},l.unknown=function(t){return arguments.length?(e=t,l):e},function(e,r){return t=e,n=r,s()}}function Vh(t,n){return Xh()(t,n)}function Gh(n,e,r,i){var o,a=w(n,e,r);switch((i=Oa(null==i?",f":i)).type){case"s":var u=Math.max(Math.abs(n),Math.abs(e));return null!=i.precision||isNaN(o=Wa(a,u))||(i.precision=o),t.formatPrefix(i,u);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=Za(a,Math.max(Math.abs(n),Math.abs(e))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=$a(a))||(i.precision=o-2*("%"===i.type))}return t.format(i)}function $h(t){var n=t.domain;return t.ticks=function(t){var e=n();return m(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return Gh(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,i=n(),o=0,a=i.length-1,u=i[o],c=i[a];return c<u&&(r=u,u=c,c=r,r=o,o=a,a=r),(r=x(u,c,e))>0?r=x(u=Math.floor(u/r)*r,c=Math.ceil(c/r)*r,e):r<0&&(r=x(u=Math.ceil(u*r)/r,c=Math.floor(c*r)/r,e)),r>0?(i[o]=Math.floor(u/r)*r,i[a]=Math.ceil(c/r)*r,n(i)):r<0&&(i[o]=Math.ceil(u*r)/r,i[a]=Math.floor(c*r)/r,n(i)),t},t}function Wh(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}function Zh(t){return Math.log(t)}function Qh(t){return Math.exp(t)}function Kh(t){return-Math.log(-t)}function Jh(t){return-Math.exp(-t)}function td(t){return isFinite(t)?+("1e"+t):t<0?0:t}function nd(t){return function(n){return-t(-n)}}function ed(n){var e,r,i=n(Zh,Qh),o=i.domain,a=10;function u(){return e=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(a),r=function(t){return 10===t?td:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(a),o()[0]<0?(e=nd(e),r=nd(r),n(Kh,Jh)):n(Zh,Qh),i}return i.base=function(t){return arguments.length?(a=+t,u()):a},i.domain=function(t){return arguments.length?(o(t),u()):o()},i.ticks=function(t){var n,i=o(),u=i[0],c=i[i.length-1];(n=c<u)&&(h=u,u=c,c=h);var f,s,l,h=e(u),d=e(c),p=null==t?10:+t,v=[];if(!(a%1)&&d-h<p){if(h=Math.round(h)-1,d=Math.round(d)+1,u>0){for(;h<d;++h)for(s=1,f=r(h);s<a;++s)if(!((l=f*s)<u)){if(l>c)break;v.push(l)}}else for(;h<d;++h)for(s=a-1,f=r(h);s>=1;--s)if(!((l=f*s)<u)){if(l>c)break;v.push(l)}}else v=m(h,d,Math.min(d-h,p)).map(r);return n?v.reverse():v},i.tickFormat=function(n,o){if(null==o&&(o=10===a?".0e":","),"function"!=typeof o&&(o=t.format(o)),n===1/0)return o;null==n&&(n=10);var u=Math.max(1,a*n/i.ticks().length);return function(t){var n=t/r(Math.round(e(t)));return n*a<a-.5&&(n*=a),n<=u?o(t):""}},i.nice=function(){return o(Wh(o(),{floor:function(t){return r(Math.floor(e(t)))},ceil:function(t){return r(Math.ceil(e(t)))}}))},i}function rd(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function id(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function od(t){var n=1,e=t(rd(n),id(n));return e.constant=function(e){return arguments.length?t(rd(n=+e),id(n)):n},$h(e)}function ad(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function ud(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function cd(t){return t<0?-t*t:t*t}function fd(t){var n=t(Bh,Bh),e=1;function r(){return 1===e?t(Bh,Bh):.5===e?t(ud,cd):t(ad(e),ad(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,r()):e},$h(n)}function sd(){var t=fd(Xh());return t.copy=function(){return jh(t,sd()).exponent(t.exponent())},Eh.apply(t,arguments),t}var ld=new Date,hd=new Date;function dd(t,n,e,r){function i(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return i.floor=function(n){return t(n=new Date(+n)),n},i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r);return u},i.filter=function(e){return dd(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return ld.setTime(+n),hd.setTime(+r),t(ld),t(hd),Math.floor(e(ld,hd))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var pd=dd(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});pd.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?dd(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):pd:null};var vd=pd.range,gd=6e4,yd=6048e5,_d=dd(function(t){t.setTime(t-t.getMilliseconds())},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),bd=_d.range,md=dd(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds())},function(t,n){t.setTime(+t+n*gd)},function(t,n){return(n-t)/gd},function(t){return t.getMinutes()}),xd=md.range,wd=dd(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds()-t.getMinutes()*gd)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),Md=wd.range,Nd=dd(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*gd)/864e5},function(t){return t.getDate()-1}),Td=Nd.range;function Ad(t){return dd(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*gd)/yd})}var Sd=Ad(0),kd=Ad(1),Ed=Ad(2),Cd=Ad(3),Pd=Ad(4),zd=Ad(5),Rd=Ad(6),Dd=Sd.range,qd=kd.range,Ld=Ed.range,Ud=Cd.range,Od=Pd.range,Bd=zd.range,Fd=Rd.range,Yd=dd(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),Id=Yd.range,Hd=dd(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});Hd.every=function(t){return isFinite(t=Math.floor(t))&&t>0?dd(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var jd=Hd.range,Xd=dd(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*gd)},function(t,n){return(n-t)/gd},function(t){return t.getUTCMinutes()}),Vd=Xd.range,Gd=dd(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),$d=Gd.range,Wd=dd(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),Zd=Wd.range;function Qd(t){return dd(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/yd})}var Kd=Qd(0),Jd=Qd(1),tp=Qd(2),np=Qd(3),ep=Qd(4),rp=Qd(5),ip=Qd(6),op=Kd.range,ap=Jd.range,up=tp.range,cp=np.range,fp=ep.range,sp=rp.range,lp=ip.range,hp=dd(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),dp=hp.range,pp=dd(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});pp.every=function(t){return isFinite(t=Math.floor(t))&&t>0?dd(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var vp=pp.range;function gp(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function yp(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function _p(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}function bp(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,u=t.months,c=t.shortMonths,f=Sp(i),s=kp(i),l=Sp(o),h=kp(o),d=Sp(a),p=kp(a),v=Sp(u),g=kp(u),y=Sp(c),_=kp(c),b={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return c[t.getMonth()]},B:function(t){return u[t.getMonth()]},c:null,d:Wp,e:Wp,f:tv,H:Zp,I:Qp,j:Kp,L:Jp,m:nv,M:ev,p:function(t){return i[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:Cv,s:Pv,S:rv,u:iv,U:ov,V:av,w:uv,W:cv,x:null,X:null,y:fv,Y:sv,Z:lv,"%":Ev},m={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return c[t.getUTCMonth()]},B:function(t){return u[t.getUTCMonth()]},c:null,d:hv,e:hv,f:yv,H:dv,I:pv,j:vv,L:gv,m:_v,M:bv,p:function(t){return i[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:Cv,s:Pv,S:mv,u:xv,U:wv,V:Mv,w:Nv,W:Tv,x:null,X:null,y:Av,Y:Sv,Z:kv,"%":Ev},x={a:function(t,n,e){var r=d.exec(n.slice(e));return r?(t.w=p[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=l.exec(n.slice(e));return r?(t.w=h[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=y.exec(n.slice(e));return r?(t.m=_[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=v.exec(n.slice(e));return r?(t.m=g[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,e,r){return N(t,n,e,r)},d:Bp,e:Bp,f:Xp,H:Yp,I:Yp,j:Fp,L:jp,m:Op,M:Ip,p:function(t,n,e){var r=f.exec(n.slice(e));return r?(t.p=s[r[0].toLowerCase()],e+r[0].length):-1},q:Up,Q:Gp,s:$p,S:Hp,u:Cp,U:Pp,V:zp,w:Ep,W:Rp,x:function(t,n,r){return N(t,e,n,r)},X:function(t,n,e){return N(t,r,n,e)},y:qp,Y:Dp,Z:Lp,"%":Vp};function w(t,n){return function(e){var r,i,o,a=[],u=-1,c=0,f=t.length;for(e instanceof Date||(e=new Date(+e));++u<f;)37===t.charCodeAt(u)&&(a.push(t.slice(c,u)),null!=(i=xp[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),c=u+1);return a.push(t.slice(c,u)),a.join("")}}function M(t,n){return function(e){var r,i,o=_p(1900,void 0,1);if(N(o,t,e+="",0)!=e.length)return null;if("Q"in o)return new Date(o.Q);if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0));if(!n||"Z"in o||(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(i=(r=yp(_p(o.y,0,1))).getUTCDay(),r=i>4||0===i?Jd.ceil(r):Jd(r),r=Wd.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=gp(_p(o.y,0,1))).getDay(),r=i>4||0===i?kd.ceil(r):kd(r),r=Nd.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?yp(_p(o.y,0,1)).getUTCDay():gp(_p(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,yp(o)):gp(o)}}function N(t,n,e,r){for(var i,o,a=0,u=n.length,c=e.length;a<u;){if(r>=c)return-1;if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=x[i in xp?n.charAt(a++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return b.x=w(e,b),b.X=w(r,b),b.c=w(n,b),m.x=w(e,m),m.X=w(r,m),m.c=w(n,m),{format:function(t){var n=w(t+="",b);return n.toString=function(){return t},n},parse:function(t){var n=M(t+="",!1);return n.toString=function(){return t},n},utcFormat:function(t){var n=w(t+="",m);return n.toString=function(){return t},n},utcParse:function(t){var n=M(t+="",!0);return n.toString=function(){return t},n}}}var mp,xp={"-":"",_:" ",0:"0"},wp=/^\s*\d+/,Mp=/^%/,Np=/[\\^$*+?|[\]().{}]/g;function Tp(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function Ap(t){return t.replace(Np,"\\$&")}function Sp(t){return new RegExp("^(?:"+t.map(Ap).join("|")+")","i")}function kp(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function Ep(t,n,e){var r=wp.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function Cp(t,n,e){var r=wp.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function Pp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function zp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function Rp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function Dp(t,n,e){var r=wp.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function qp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function Lp(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function Up(t,n,e){var r=wp.exec(n.slice(e,e+1));return r?(t.q=3*r[0]-3,e+r[0].length):-1}function Op(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function Bp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function Fp(t,n,e){var r=wp.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function Yp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function Ip(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function Hp(t,n,e){var r=wp.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function jp(t,n,e){var r=wp.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function Xp(t,n,e){var r=wp.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function Vp(t,n,e){var r=Mp.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function Gp(t,n,e){var r=wp.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function $p(t,n,e){var r=wp.exec(n.slice(e));return r?(t.s=+r[0],e+r[0].length):-1}function Wp(t,n){return Tp(t.getDate(),n,2)}function Zp(t,n){return Tp(t.getHours(),n,2)}function Qp(t,n){return Tp(t.getHours()%12||12,n,2)}function Kp(t,n){return Tp(1+Nd.count(Hd(t),t),n,3)}function Jp(t,n){return Tp(t.getMilliseconds(),n,3)}function tv(t,n){return Jp(t,n)+"000"}function nv(t,n){return Tp(t.getMonth()+1,n,2)}function ev(t,n){return Tp(t.getMinutes(),n,2)}function rv(t,n){return Tp(t.getSeconds(),n,2)}function iv(t){var n=t.getDay();return 0===n?7:n}function ov(t,n){return Tp(Sd.count(Hd(t)-1,t),n,2)}function av(t,n){var e=t.getDay();return t=e>=4||0===e?Pd(t):Pd.ceil(t),Tp(Pd.count(Hd(t),t)+(4===Hd(t).getDay()),n,2)}function uv(t){return t.getDay()}function cv(t,n){return Tp(kd.count(Hd(t)-1,t),n,2)}function fv(t,n){return Tp(t.getFullYear()%100,n,2)}function sv(t,n){return Tp(t.getFullYear()%1e4,n,4)}function lv(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Tp(n/60|0,"0",2)+Tp(n%60,"0",2)}function hv(t,n){return Tp(t.getUTCDate(),n,2)}function dv(t,n){return Tp(t.getUTCHours(),n,2)}function pv(t,n){return Tp(t.getUTCHours()%12||12,n,2)}function vv(t,n){return Tp(1+Wd.count(pp(t),t),n,3)}function gv(t,n){return Tp(t.getUTCMilliseconds(),n,3)}function yv(t,n){return gv(t,n)+"000"}function _v(t,n){return Tp(t.getUTCMonth()+1,n,2)}function bv(t,n){return Tp(t.getUTCMinutes(),n,2)}function mv(t,n){return Tp(t.getUTCSeconds(),n,2)}function xv(t){var n=t.getUTCDay();return 0===n?7:n}function wv(t,n){return Tp(Kd.count(pp(t)-1,t),n,2)}function Mv(t,n){var e=t.getUTCDay();return t=e>=4||0===e?ep(t):ep.ceil(t),Tp(ep.count(pp(t),t)+(4===pp(t).getUTCDay()),n,2)}function Nv(t){return t.getUTCDay()}function Tv(t,n){return Tp(Jd.count(pp(t)-1,t),n,2)}function Av(t,n){return Tp(t.getUTCFullYear()%100,n,2)}function Sv(t,n){return Tp(t.getUTCFullYear()%1e4,n,4)}function kv(){return"+0000"}function Ev(){return"%"}function Cv(t){return+t}function Pv(t){return Math.floor(+t/1e3)}function zv(n){return mp=bp(n),t.timeFormat=mp.format,t.timeParse=mp.parse,t.utcFormat=mp.utcFormat,t.utcParse=mp.utcParse,mp}zv({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Rv=Date.prototype.toISOString?function(t){return t.toISOString()}:t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ");var Dv=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),qv=1e3,Lv=60*qv,Uv=60*Lv,Ov=24*Uv,Bv=7*Ov,Fv=30*Ov,Yv=365*Ov;function Iv(t){return new Date(t)}function Hv(t){return t instanceof Date?+t:+new Date(+t)}function jv(t,n,r,i,o,a,u,c,f){var s=Vh(Bh,Bh),l=s.invert,h=s.domain,d=f(".%L"),p=f(":%S"),v=f("%I:%M"),g=f("%I %p"),y=f("%a %d"),_=f("%b %d"),b=f("%B"),m=f("%Y"),x=[[u,1,qv],[u,5,5*qv],[u,15,15*qv],[u,30,30*qv],[a,1,Lv],[a,5,5*Lv],[a,15,15*Lv],[a,30,30*Lv],[o,1,Uv],[o,3,3*Uv],[o,6,6*Uv],[o,12,12*Uv],[i,1,Ov],[i,2,2*Ov],[r,1,Bv],[n,1,Fv],[n,3,3*Fv],[t,1,Yv]];function M(e){return(u(e)<e?d:a(e)<e?p:o(e)<e?v:i(e)<e?g:n(e)<e?r(e)<e?y:_:t(e)<e?b:m)(e)}function N(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(i-r)/n,u=e(function(t){return t[2]}).right(x,a);u===x.length?(o=w(r/Yv,i/Yv,n),n=t):u?(o=(u=x[a/x[u-1][2]<x[u][2]/a?u-1:u])[1],n=u[0]):(o=Math.max(w(r,i,n),1),n=c)}return null==o?n:n.every(o)}return s.invert=function(t){return new Date(l(t))},s.domain=function(t){return arguments.length?h(zh.call(t,Hv)):h().map(Iv)},s.ticks=function(t,n){var e,r=h(),i=r[0],o=r[r.length-1],a=o<i;return a&&(e=i,i=o,o=e),e=(e=N(t,i,o,n))?e.range(i,o+1):[],a?e.reverse():e},s.tickFormat=function(t,n){return null==n?M:f(n)},s.nice=function(t,n){var e=h();return(t=N(t,e[0],e[e.length-1],n))?h(Wh(e,t)):s},s.copy=function(){return jh(s,jv(t,n,r,i,o,a,u,c,f))},s}function Xv(){var t,n,e,r,i,o=0,a=1,u=Bh,c=!1;function f(n){return isNaN(n=+n)?i:u(0===e?.5:(n=(r(n)-t)*e,c?Math.max(0,Math.min(1,n)):n))}return f.domain=function(i){return arguments.length?(t=r(o=+i[0]),n=r(a=+i[1]),e=t===n?0:1/(n-t),f):[o,a]},f.clamp=function(t){return arguments.length?(c=!!t,f):c},f.interpolator=function(t){return arguments.length?(u=t,f):u},f.unknown=function(t){return arguments.length?(i=t,f):i},function(i){return r=i,t=i(o),n=i(a),e=t===n?0:1/(n-t),f}}function Vv(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function Gv(){var t=fd(Xv());return t.copy=function(){return Vv(t,Gv()).exponent(t.exponent())},Ch.apply(t,arguments)}function $v(){var t,n,e,r,i,o,a,u=0,c=.5,f=1,s=Bh,l=!1;function h(t){return isNaN(t=+t)?a:(t=.5+((t=+o(t))-n)*(t<n?r:i),s(l?Math.max(0,Math.min(1,t)):t))}return h.domain=function(a){return arguments.length?(t=o(u=+a[0]),n=o(c=+a[1]),e=o(f=+a[2]),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h):[u,c,f]},h.clamp=function(t){return arguments.length?(l=!!t,h):l},h.interpolator=function(t){return arguments.length?(s=t,h):s},h.unknown=function(t){return arguments.length?(a=t,h):a},function(a){return o=a,t=a(u),n=a(c),e=a(f),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h}}function Wv(){var t=fd($v());return t.copy=function(){return Vv(t,Wv()).exponent(t.exponent())},Ch.apply(t,arguments)}function Zv(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}var Qv=Zv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Kv=Zv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),Jv=Zv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),tg=Zv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),ng=Zv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),eg=Zv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),rg=Zv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),ig=Zv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),og=Zv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),ag=Zv("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function ug(t){return pe(t[t.length-1])}var cg=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Zv),fg=ug(cg),sg=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Zv),lg=ug(sg),hg=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Zv),dg=ug(hg),pg=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Zv),vg=ug(pg),gg=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Zv),yg=ug(gg),_g=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Zv),bg=ug(_g),mg=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Zv),xg=ug(mg),wg=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Zv),Mg=ug(wg),Ng=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Zv),Tg=ug(Ng),Ag=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Zv),Sg=ug(Ag),kg=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Zv),Eg=ug(kg),Cg=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Zv),Pg=ug(Cg),zg=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Zv),Rg=ug(zg),Dg=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Zv),qg=ug(Dg),Lg=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Zv),Ug=ug(Lg),Og=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Zv),Bg=ug(Og),Fg=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Zv),Yg=ug(Fg),Ig=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Zv),Hg=ug(Ig),jg=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Zv),Xg=ug(jg),Vg=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Zv),Gg=ug(Vg),$g=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Zv),Wg=ug($g),Zg=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Zv),Qg=ug(Zg),Kg=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Zv),Jg=ug(Kg),ty=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Zv),ny=ug(ty),ey=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Zv),ry=ug(ey),iy=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Zv),oy=ug(iy),ay=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Zv),uy=ug(ay);var cy=Qe(ee(300,.5,0),ee(-240,.5,1)),fy=Qe(ee(-100,.75,.35),ee(80,1.5,.8)),sy=Qe(ee(260,.75,.35),ee(80,1.5,.8)),ly=ee();var hy=_n(),dy=Math.PI/3,py=2*Math.PI/3;function vy(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}var gy=vy(Zv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),yy=vy(Zv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),_y=vy(Zv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),by=vy(Zv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function my(t){return function(){return t}}var xy=Math.abs,wy=Math.atan2,My=Math.cos,Ny=Math.max,Ty=Math.min,Ay=Math.sin,Sy=Math.sqrt,ky=1e-12,Ey=Math.PI,Cy=Ey/2,Py=2*Ey;function zy(t){return t>=1?Cy:t<=-1?-Cy:Math.asin(t)}function Ry(t){return t.innerRadius}function Dy(t){return t.outerRadius}function qy(t){return t.startAngle}function Ly(t){return t.endAngle}function Uy(t){return t&&t.padAngle}function Oy(t,n,e,r,i,o,a){var u=t-e,c=n-r,f=(a?o:-o)/Sy(u*u+c*c),s=f*c,l=-f*u,h=t+s,d=n+l,p=e+s,v=r+l,g=(h+p)/2,y=(d+v)/2,_=p-h,b=v-d,m=_*_+b*b,x=i-o,w=h*v-p*d,M=(b<0?-1:1)*Sy(Ny(0,x*x*m-w*w)),N=(w*b-_*M)/m,T=(-w*_-b*M)/m,A=(w*b+_*M)/m,S=(-w*_+b*M)/m,k=N-g,E=T-y,C=A-g,P=S-y;return k*k+E*E>C*C+P*P&&(N=A,T=S),{cx:N,cy:T,x01:-s,y01:-l,x11:N*(i/x-1),y11:T*(i/x-1)}}function By(t){this._context=t}function Fy(t){return new By(t)}function Yy(t){return t[0]}function Iy(t){return t[1]}function Hy(){var t=Yy,n=Iy,e=my(!0),r=null,i=Fy,o=null;function a(a){var u,c,f,s=a.length,l=!1;for(null==r&&(o=i(f=no())),u=0;u<=s;++u)!(u<s&&e(c=a[u],u,a))===l&&((l=!l)?o.lineStart():o.lineEnd()),l&&o.point(+t(c,u,a),+n(c,u,a));if(f)return o=null,f+""||null}return a.x=function(n){return arguments.length?(t="function"==typeof n?n:my(+n),a):t},a.y=function(t){return arguments.length?(n="function"==typeof t?t:my(+t),a):n},a.defined=function(t){return arguments.length?(e="function"==typeof t?t:my(!!t),a):e},a.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),a):i},a.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),a):r},a}function jy(){var t=Yy,n=null,e=my(0),r=Iy,i=my(!0),o=null,a=Fy,u=null;function c(c){var f,s,l,h,d,p=c.length,v=!1,g=new Array(p),y=new Array(p);for(null==o&&(u=a(d=no())),f=0;f<=p;++f){if(!(f<p&&i(h=c[f],f,c))===v)if(v=!v)s=f,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),l=f-1;l>=s;--l)u.point(g[l],y[l]);u.lineEnd(),u.areaEnd()}v&&(g[f]=+t(h,f,c),y[f]=+e(h,f,c),u.point(n?+n(h,f,c):g[f],r?+r(h,f,c):y[f]))}if(d)return u=null,d+""||null}function f(){return Hy().defined(i).curve(a).context(o)}return c.x=function(e){return arguments.length?(t="function"==typeof e?e:my(+e),n=null,c):t},c.x0=function(n){return arguments.length?(t="function"==typeof n?n:my(+n),c):t},c.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:my(+t),c):n},c.y=function(t){return arguments.length?(e="function"==typeof t?t:my(+t),r=null,c):e},c.y0=function(t){return arguments.length?(e="function"==typeof t?t:my(+t),c):e},c.y1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:my(+t),c):r},c.lineX0=c.lineY0=function(){return f().x(t).y(e)},c.lineY1=function(){return f().x(t).y(r)},c.lineX1=function(){return f().x(n).y(e)},c.defined=function(t){return arguments.length?(i="function"==typeof t?t:my(!!t),c):i},c.curve=function(t){return arguments.length?(a=t,null!=o&&(u=a(o)),c):a},c.context=function(t){return arguments.length?(null==t?o=u=null:u=a(o=t),c):o},c}function Xy(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Vy(t){return t}By.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var Gy=Wy(Fy);function $y(t){this._curve=t}function Wy(t){function n(n){return new $y(t(n))}return n._curve=t,n}function Zy(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Wy(t)):n()._curve},t}function Qy(){return Zy(Hy().curve(Gy))}function Ky(){var t=jy().curve(Gy),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Zy(e())},delete t.lineX0,t.lineEndAngle=function(){return Zy(r())},delete t.lineX1,t.lineInnerRadius=function(){return Zy(i())},delete t.lineY0,t.lineOuterRadius=function(){return Zy(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(Wy(t)):n()._curve},t}function Jy(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}$y.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var t_=Array.prototype.slice;function n_(t){return t.source}function e_(t){return t.target}function r_(t){var n=n_,e=e_,r=Yy,i=Iy,o=null;function a(){var a,u=t_.call(arguments),c=n.apply(this,u),f=e.apply(this,u);if(o||(o=a=no()),t(o,+r.apply(this,(u[0]=c,u)),+i.apply(this,u),+r.apply(this,(u[0]=f,u)),+i.apply(this,u)),a)return o=null,a+""||null}return a.source=function(t){return arguments.length?(n=t,a):n},a.target=function(t){return arguments.length?(e=t,a):e},a.x=function(t){return arguments.length?(r="function"==typeof t?t:my(+t),a):r},a.y=function(t){return arguments.length?(i="function"==typeof t?t:my(+t),a):i},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a}function i_(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function o_(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function a_(t,n,e,r,i){var o=Jy(n,e),a=Jy(n,e=(e+i)/2),u=Jy(r,e),c=Jy(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],c[0],c[1])}var u_={draw:function(t,n){var e=Math.sqrt(n/Ey);t.moveTo(e,0),t.arc(0,0,e,0,Py)}},c_={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},f_=Math.sqrt(1/3),s_=2*f_,l_={draw:function(t,n){var e=Math.sqrt(n/s_),r=e*f_;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},h_=Math.sin(Ey/10)/Math.sin(7*Ey/10),d_=Math.sin(Py/10)*h_,p_=-Math.cos(Py/10)*h_,v_={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=d_*e,i=p_*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var a=Py*o/5,u=Math.cos(a),c=Math.sin(a);t.lineTo(c*e,-u*e),t.lineTo(u*r-c*i,c*r+u*i)}t.closePath()}},g_={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},y_=Math.sqrt(3),__={draw:function(t,n){var e=-Math.sqrt(n/(3*y_));t.moveTo(0,2*e),t.lineTo(-y_*e,-e),t.lineTo(y_*e,-e),t.closePath()}},b_=Math.sqrt(3)/2,m_=1/Math.sqrt(12),x_=3*(m_/2+1),w_={draw:function(t,n){var e=Math.sqrt(n/x_),r=e/2,i=e*m_,o=r,a=e*m_+e,u=-o,c=a;t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,c),t.lineTo(-.5*r-b_*i,b_*r+-.5*i),t.lineTo(-.5*o-b_*a,b_*o+-.5*a),t.lineTo(-.5*u-b_*c,b_*u+-.5*c),t.lineTo(-.5*r+b_*i,-.5*i-b_*r),t.lineTo(-.5*o+b_*a,-.5*a-b_*o),t.lineTo(-.5*u+b_*c,-.5*c-b_*u),t.closePath()}},M_=[u_,c_,l_,g_,v_,__,w_];function N_(){}function T_(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function A_(t){this._context=t}function S_(t){this._context=t}function k_(t){this._context=t}function E_(t,n){this._basis=new A_(t),this._beta=n}A_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:T_(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:T_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},S_.prototype={areaStart:N_,areaEnd:N_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:T_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},k_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:T_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},E_.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*a),this._beta*n[c]+(1-this._beta)*(o+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var C_=function t(n){function e(t){return 1===n?new A_(t):new E_(t,n)}return e.beta=function(n){return t(+n)},e}(.85);function P_(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function z_(t,n){this._context=t,this._k=(1-n)/6}z_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:P_(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:P_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var R_=function t(n){function e(t){return new z_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function D_(t,n){this._context=t,this._k=(1-n)/6}D_.prototype={areaStart:N_,areaEnd:N_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:P_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var q_=function t(n){function e(t){return new D_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function L_(t,n){this._context=t,this._k=(1-n)/6}L_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:P_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var U_=function t(n){function e(t){return new L_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function O_(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>ky){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>ky){var f=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,s=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*f+t._x1*t._l23_2a-n*t._l12_2a)/s,a=(a*f+t._y1*t._l23_2a-e*t._l12_2a)/s}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function B_(t,n){this._context=t,this._alpha=n}B_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:O_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var F_=function t(n){function e(t){return n?new B_(t,n):new z_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function Y_(t,n){this._context=t,this._alpha=n}Y_.prototype={areaStart:N_,areaEnd:N_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:O_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var I_=function t(n){function e(t){return n?new Y_(t,n):new D_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function H_(t,n){this._context=t,this._alpha=n}H_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:O_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var j_=function t(n){function e(t){return n?new H_(t,n):new L_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function X_(t){this._context=t}function V_(t){return t<0?-1:1}function G_(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i);return(V_(o)+V_(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function $_(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function W_(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3;t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a)}function Z_(t){this._context=t}function Q_(t){this._context=new K_(t)}function K_(t){this._context=t}function J_(t){this._context=t}function tb(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1];for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function nb(t,n){this._context=t,this._t=n}function eb(t,n){if((i=t.length)>1)for(var e,r,i,o=1,a=t[n[0]],u=a.length;o<i;++o)for(r=a,a=t[n[o]],e=0;e<u;++e)a[e][1]+=a[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function rb(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function ib(t,n){return t[n]}function ob(t){var n=t.map(ab);return rb(t).sort(function(t,e){return n[t]-n[e]})}function ab(t){for(var n,e=-1,r=0,i=t.length,o=-1/0;++e<i;)(n=+t[e][1])>o&&(o=n,r=e);return r}function ub(t){var n=t.map(cb);return rb(t).sort(function(t,e){return n[t]-n[e]})}function cb(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function fb(t){return function(){return t}}function sb(t){return t[0]}function lb(t){return t[1]}function hb(){this._=null}function db(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function pb(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function vb(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function gb(t){for(;t.L;)t=t.L;return t}function yb(t,n,e,r){var i=[null,null],o=Yb.push(i)-1;return i.left=t,i.right=n,e&&bb(i,t,n,e),r&&bb(i,n,t,r),Bb[t.index].halfedges.push(o),Bb[n.index].halfedges.push(o),i}function _b(t,n,e){var r=[n,e];return r.left=t,r}function bb(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function mb(t,n,e,r,i){var o,a=t[0],u=t[1],c=a[0],f=a[1],s=0,l=1,h=u[0]-c,d=u[1]-f;if(o=n-c,h||!(o>0)){if(o/=h,h<0){if(o<s)return;o<l&&(l=o)}else if(h>0){if(o>l)return;o>s&&(s=o)}if(o=r-c,h||!(o<0)){if(o/=h,h<0){if(o>l)return;o>s&&(s=o)}else if(h>0){if(o<s)return;o<l&&(l=o)}if(o=e-f,d||!(o>0)){if(o/=d,d<0){if(o<s)return;o<l&&(l=o)}else if(d>0){if(o>l)return;o>s&&(s=o)}if(o=i-f,d||!(o<0)){if(o/=d,d<0){if(o>l)return;o>s&&(s=o)}else if(d>0){if(o<s)return;o<l&&(l=o)}return!(s>0||l<1)||(s>0&&(t[0]=[c+s*h,f+s*d]),l<1&&(t[1]=[c+l*h,f+l*d]),!0)}}}}}function xb(t,n,e,r,i){var o=t[1];if(o)return!0;var a,u,c=t[0],f=t.left,s=t.right,l=f[0],h=f[1],d=s[0],p=s[1],v=(l+d)/2,g=(h+p)/2;if(p===h){if(v<n||v>=r)return;if(l>d){if(c){if(c[1]>=i)return}else c=[v,e];o=[v,i]}else{if(c){if(c[1]<e)return}else c=[v,i];o=[v,e]}}else if(u=g-(a=(l-d)/(p-h))*v,a<-1||a>1)if(l>d){if(c){if(c[1]>=i)return}else c=[(e-u)/a,e];o=[(i-u)/a,i]}else{if(c){if(c[1]<e)return}else c=[(i-u)/a,i];o=[(e-u)/a,e]}else if(h<p){if(c){if(c[0]>=r)return}else c=[n,a*n+u];o=[r,a*r+u]}else{if(c){if(c[0]<n)return}else c=[r,a*r+u];o=[n,a*n+u]}return t[0]=c,t[1]=o,!0}function wb(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function Mb(t,n){return n[+(n.left!==t.site)]}function Nb(t,n){return n[+(n.left===t.site)]}X_.prototype={areaStart:N_,areaEnd:N_,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},Z_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:W_(this,this._t0,$_(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,W_(this,$_(this,e=G_(this,t,n)),e);break;default:W_(this,this._t0,e=G_(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(Q_.prototype=Object.create(Z_.prototype)).point=function(t,n){Z_.prototype.point.call(this,n,t)},K_.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},J_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=tb(t),i=tb(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},nb.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}},hb.prototype={constructor:hb,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=gb(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(pb(this,e),e=(t=e).U),e.C=!1,r.C=!0,vb(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(vb(this,e),e=(t=e).U),e.C=!1,r.C=!0,pb(this,r)),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,a=t.R;if(e=o?a?gb(a):o:a,i?i.L===t?i.L=e:i.R=e:this._=e,o&&a?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==a?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=a,a.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,pb(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,vb(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,pb(this,i),t=this._;break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,vb(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,pb(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,vb(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var Tb,Ab=[];function Sb(){db(this),this.x=this.y=this.arc=this.site=this.cy=null}function kb(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var a=i[0],u=i[1],c=r[0]-a,f=r[1]-u,s=o[0]-a,l=o[1]-u,h=2*(c*l-f*s);if(!(h>=-Hb)){var d=c*c+f*f,p=s*s+l*l,v=(l*d-f*p)/h,g=(c*p-s*d)/h,y=Ab.pop()||new Sb;y.arc=t,y.site=i,y.x=v+a,y.y=(y.cy=g+u)+Math.sqrt(v*v+g*g),t.circle=y;for(var _=null,b=Fb._;b;)if(y.y<b.y||y.y===b.y&&y.x<=b.x){if(!b.L){_=b.P;break}b=b.L}else{if(!b.R){_=b;break}b=b.R}Fb.insert(_,y),_||(Tb=y)}}}}function Eb(t){var n=t.circle;n&&(n.P||(Tb=n.N),Fb.remove(n),Ab.push(n),db(n),t.circle=null)}var Cb=[];function Pb(){db(this),this.edge=this.site=this.circle=null}function zb(t){var n=Cb.pop()||new Pb;return n.site=t,n}function Rb(t){Eb(t),Ob.remove(t),Cb.push(t),db(t)}function Db(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,a=t.N,u=[t];Rb(t);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<Ib&&Math.abs(r-c.circle.cy)<Ib;)o=c.P,u.unshift(c),Rb(c),c=o;u.unshift(c),Eb(c);for(var f=a;f.circle&&Math.abs(e-f.circle.x)<Ib&&Math.abs(r-f.circle.cy)<Ib;)a=f.N,u.push(f),Rb(f),f=a;u.push(f),Eb(f);var s,l=u.length;for(s=1;s<l;++s)f=u[s],c=u[s-1],bb(f.edge,c.site,f.site,i);c=u[0],(f=u[l-1]).edge=yb(c.site,f.site,null,i),kb(c),kb(f)}function qb(t){for(var n,e,r,i,o=t[0],a=t[1],u=Ob._;u;)if((r=Lb(u,a)-o)>Ib)u=u.L;else{if(!((i=o-Ub(u,a))>Ib)){r>-Ib?(n=u.P,e=u):i>-Ib?(n=u,e=u.N):n=e=u;break}if(!u.R){n=u;break}u=u.R}!function(t){Bb[t.index]={site:t,halfedges:[]}}(t);var c=zb(t);if(Ob.insert(n,c),n||e){if(n===e)return Eb(n),e=zb(n.site),Ob.insert(c,e),c.edge=e.edge=yb(n.site,c.site),kb(n),void kb(e);if(e){Eb(n),Eb(e);var f=n.site,s=f[0],l=f[1],h=t[0]-s,d=t[1]-l,p=e.site,v=p[0]-s,g=p[1]-l,y=2*(h*g-d*v),_=h*h+d*d,b=v*v+g*g,m=[(g*_-d*b)/y+s,(h*b-v*_)/y+l];bb(e.edge,f,p,m),c.edge=yb(f,t,null,m),e.edge=yb(t,p,null,m),kb(n),kb(e)}else c.edge=yb(n.site,c.site)}}function Lb(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var a=t.P;if(!a)return-1/0;var u=(e=a.site)[0],c=e[1],f=c-n;if(!f)return u;var s=u-r,l=1/o-1/f,h=s/f;return l?(-h+Math.sqrt(h*h-2*l*(s*s/(-2*f)-c+f/2+i-o/2)))/l+r:(r+u)/2}function Ub(t,n){var e=t.N;if(e)return Lb(e,n);var r=t.site;return r[1]===n?r[0]:1/0}var Ob,Bb,Fb,Yb,Ib=1e-6,Hb=1e-12;function jb(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function Xb(t,n){return n[1]-t[1]||n[0]-t[0]}function Vb(t,n){var e,r,i,o=t.sort(Xb).pop();for(Yb=[],Bb=new Array(t.length),Ob=new hb,Fb=new hb;;)if(i=Tb,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(qb(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;Db(i.arc)}if(function(){for(var t,n,e,r,i=0,o=Bb.length;i<o;++i)if((t=Bb[i])&&(r=(n=t.halfedges).length)){var a=new Array(r),u=new Array(r);for(e=0;e<r;++e)a[e]=e,u[e]=wb(t,Yb[n[e]]);for(a.sort(function(t,n){return u[n]-u[t]}),e=0;e<r;++e)u[e]=n[a[e]];for(e=0;e<r;++e)n[e]=u[e]}}(),n){var a=+n[0][0],u=+n[0][1],c=+n[1][0],f=+n[1][1];!function(t,n,e,r){for(var i,o=Yb.length;o--;)xb(i=Yb[o],t,n,e,r)&&mb(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>Ib||Math.abs(i[0][1]-i[1][1])>Ib)||delete Yb[o]}(a,u,c,f),function(t,n,e,r){var i,o,a,u,c,f,s,l,h,d,p,v,g=Bb.length,y=!0;for(i=0;i<g;++i)if(o=Bb[i]){for(a=o.site,u=(c=o.halfedges).length;u--;)Yb[c[u]]||c.splice(u,1);for(u=0,f=c.length;u<f;)p=(d=Nb(o,Yb[c[u]]))[0],v=d[1],l=(s=Mb(o,Yb[c[++u%f]]))[0],h=s[1],(Math.abs(p-l)>Ib||Math.abs(v-h)>Ib)&&(c.splice(u,0,Yb.push(_b(a,d,Math.abs(p-t)<Ib&&r-v>Ib?[t,Math.abs(l-t)<Ib?h:r]:Math.abs(v-r)<Ib&&e-p>Ib?[Math.abs(h-r)<Ib?l:e,r]:Math.abs(p-e)<Ib&&v-n>Ib?[e,Math.abs(l-e)<Ib?h:n]:Math.abs(v-n)<Ib&&p-t>Ib?[Math.abs(h-n)<Ib?l:t,n]:null))-1),++f);f&&(y=!1)}if(y){var _,b,m,x=1/0;for(i=0,y=null;i<g;++i)(o=Bb[i])&&(m=(_=(a=o.site)[0]-t)*_+(b=a[1]-n)*b)<x&&(x=m,y=o);if(y){var w=[t,n],M=[t,r],N=[e,r],T=[e,n];y.halfedges.push(Yb.push(_b(a=y.site,w,M))-1,Yb.push(_b(a,M,N))-1,Yb.push(_b(a,N,T))-1,Yb.push(_b(a,T,w))-1)}}for(i=0;i<g;++i)(o=Bb[i])&&(o.halfedges.length||delete Bb[i])}(a,u,c,f)}this.edges=Yb,this.cells=Bb,Ob=Fb=Yb=Bb=null}function Gb(t){return function(){return t}}function $b(t,n,e){this.target=t,this.type=n,this.transform=e}function Wb(t,n,e){this.k=t,this.x=n,this.y=e}Vb.prototype={constructor:Vb,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return Mb(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,a,u=e.site,c=-1,f=n[i[o-1]],s=f.left===u?f.right:f.left;++c<o;)a=s,s=(f=n[i[c]]).left===u?f.right:f.left,a&&s&&r<a.index&&r<s.index&&jb(u,a,s)<0&&t.push([u.data,a.data,s.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,a=o._found||0,u=o.cells.length;!(i=o.cells[a]);)if(++a>=u)return null;var c=t-i.site[0],f=n-i.site[1],s=c*c+f*f;do{i=o.cells[r=a],a=null,i.halfedges.forEach(function(e){var r=o.edges[e],u=r.left;if(u!==i.site&&u||(u=r.right)){var c=t-u[0],f=n-u[1],l=c*c+f*f;l<s&&(s=l,a=u.index)}})}while(null!==a);return o._found=r,null==e||s<=e*e?i.site:null}},Wb.prototype={constructor:Wb,scale:function(t){return 1===t?this:new Wb(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Wb(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Zb=new Wb(1,0,0);function Qb(t){for(;!t.__zoom;)if(!(t=t.parentNode))return Zb;return t.__zoom}function Kb(){t.event.stopImmediatePropagation()}function Jb(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function tm(){return!t.event.ctrlKey&&!t.event.button}function nm(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t).hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]:[[0,0],[t.clientWidth,t.clientHeight]]}function em(){return this.__zoom||Zb}function rm(){return-t.event.deltaY*(1===t.event.deltaMode?.05:t.event.deltaMode?1:.002)}function im(){return navigator.maxTouchPoints||"ontouchstart"in this}function om(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}Qb.prototype=Wb.prototype,t.FormatSpecifier=Ba,t.active=function(t,n){var e,r,i=t.__transition;if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>xr&&e.name===n)return new Ur([[t]],yi,n,+r);return null},t.arc=function(){var t=Ry,n=Dy,e=my(0),r=null,i=qy,o=Ly,a=Uy,u=null;function c(){var c,f,s=+t.apply(this,arguments),l=+n.apply(this,arguments),h=i.apply(this,arguments)-Cy,d=o.apply(this,arguments)-Cy,p=xy(d-h),v=d>h;if(u||(u=c=no()),l<s&&(f=l,l=s,s=f),l>ky)if(p>Py-ky)u.moveTo(l*My(h),l*Ay(h)),u.arc(0,0,l,h,d,!v),s>ky&&(u.moveTo(s*My(d),s*Ay(d)),u.arc(0,0,s,d,h,v));else{var g,y,_=h,b=d,m=h,x=d,w=p,M=p,N=a.apply(this,arguments)/2,T=N>ky&&(r?+r.apply(this,arguments):Sy(s*s+l*l)),A=Ty(xy(l-s)/2,+e.apply(this,arguments)),S=A,k=A;if(T>ky){var E=zy(T/s*Ay(N)),C=zy(T/l*Ay(N));(w-=2*E)>ky?(m+=E*=v?1:-1,x-=E):(w=0,m=x=(h+d)/2),(M-=2*C)>ky?(_+=C*=v?1:-1,b-=C):(M=0,_=b=(h+d)/2)}var P=l*My(_),z=l*Ay(_),R=s*My(x),D=s*Ay(x);if(A>ky){var q,L=l*My(b),U=l*Ay(b),O=s*My(m),B=s*Ay(m);if(p<Ey&&(q=function(t,n,e,r,i,o,a,u){var c=e-t,f=r-n,s=a-i,l=u-o,h=l*c-s*f;if(!(h*h<ky))return[t+(h=(s*(n-o)-l*(t-i))/h)*c,n+h*f]}(P,z,O,B,L,U,R,D))){var F=P-q[0],Y=z-q[1],I=L-q[0],H=U-q[1],j=1/Ay(function(t){return t>1?0:t<-1?Ey:Math.acos(t)}((F*I+Y*H)/(Sy(F*F+Y*Y)*Sy(I*I+H*H)))/2),X=Sy(q[0]*q[0]+q[1]*q[1]);S=Ty(A,(s-X)/(j-1)),k=Ty(A,(l-X)/(j+1))}}M>ky?k>ky?(g=Oy(O,B,P,z,l,k,v),y=Oy(L,U,R,D,l,k,v),u.moveTo(g.cx+g.x01,g.cy+g.y01),k<A?u.arc(g.cx,g.cy,k,wy(g.y01,g.x01),wy(y.y01,y.x01),!v):(u.arc(g.cx,g.cy,k,wy(g.y01,g.x01),wy(g.y11,g.x11),!v),u.arc(0,0,l,wy(g.cy+g.y11,g.cx+g.x11),wy(y.cy+y.y11,y.cx+y.x11),!v),u.arc(y.cx,y.cy,k,wy(y.y11,y.x11),wy(y.y01,y.x01),!v))):(u.moveTo(P,z),u.arc(0,0,l,_,b,!v)):u.moveTo(P,z),s>ky&&w>ky?S>ky?(g=Oy(R,D,L,U,s,-S,v),y=Oy(P,z,O,B,s,-S,v),u.lineTo(g.cx+g.x01,g.cy+g.y01),S<A?u.arc(g.cx,g.cy,S,wy(g.y01,g.x01),wy(y.y01,y.x01),!v):(u.arc(g.cx,g.cy,S,wy(g.y01,g.x01),wy(g.y11,g.x11),!v),u.arc(0,0,s,wy(g.cy+g.y11,g.cx+g.x11),wy(y.cy+y.y11,y.cx+y.x11),v),u.arc(y.cx,y.cy,S,wy(y.y11,y.x11),wy(y.y01,y.x01),!v))):u.arc(0,0,s,x,m,v):u.lineTo(R,D)}else u.moveTo(0,0);if(u.closePath(),c)return u=null,c+""||null}return c.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-Ey/2;return[My(r)*e,Ay(r)*e]},c.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:my(+n),c):t},c.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:my(+t),c):n},c.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:my(+t),c):e},c.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:my(+t),c):r},c.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:my(+t),c):i},c.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:my(+t),c):o},c.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:my(+t),c):a},c.context=function(t){return arguments.length?(u=null==t?null:t,c):u},c},t.area=jy,t.areaRadial=Ky,t.ascending=n,t.autoType=function(t){for(var n in t){var e,r,i=t[n].trim();if(i)if("true"===i)i=!0;else if("false"===i)i=!1;else if("NaN"===i)i=NaN;else if(isNaN(e=+i)){if(!(r=i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue;ra&&r[4]&&!r[7]&&(i=i.replace(/-/g,"/").replace(/T/," ")),i=new Date(i)}else i=e;else i=null;t[n]=i}return t},t.axisBottom=function(t){return F(D,t)},t.axisLeft=function(t){return F(q,t)},t.axisRight=function(t){return F(R,t)},t.axisTop=function(t){return F(z,t)},t.bisect=i,t.bisectLeft=o,t.bisectRight=i,t.bisector=e,t.blob=function(t,n){return fetch(t,n).then(ia)},t.brush=function(){return Yi(Ci)},t.brushSelection=function(t){var n=t.__brush;return n?n.dim.output(n.selection):null},t.brushX=function(){return Yi(ki)},t.brushY=function(){return Yi(Ei)},t.buffer=function(t,n){return fetch(t,n).then(oa)},t.chord=function(){var t=0,n=null,e=null,r=null;function i(i){var o,a,u,c,f,s,l=i.length,h=[],d=g(l),p=[],v=[],y=v.groups=new Array(l),_=new Array(l*l);for(o=0,f=-1;++f<l;){for(a=0,s=-1;++s<l;)a+=i[f][s];h.push(a),p.push(g(l)),o+=a}for(n&&d.sort(function(t,e){return n(h[t],h[e])}),e&&p.forEach(function(t,n){t.sort(function(t,r){return e(i[n][t],i[n][r])})}),c=(o=Gi(0,Vi-t*l)/o)?t:Vi/l,a=0,f=-1;++f<l;){for(u=a,s=-1;++s<l;){var b=d[f],m=p[b][s],x=i[b][m],w=a,M=a+=x*o;_[m*l+b]={index:b,subindex:m,startAngle:w,endAngle:M,value:x}}y[b]={index:b,startAngle:u,endAngle:a,value:h[b]},a+=c}for(f=-1;++f<l;)for(s=f-1;++s<l;){var N=_[s*l+f],T=_[f*l+s];(N.value||T.value)&&v.push(N.value<T.value?{source:T,target:N}:{source:N,target:T})}return r?v.sort(r):v}return i.padAngle=function(n){return arguments.length?(t=Gi(0,n),i):t},i.sortGroups=function(t){return arguments.length?(n=t,i):n},i.sortSubgroups=function(t){return arguments.length?(e=t,i):e},i.sortChords=function(t){return arguments.length?(null==t?r=null:(r=$i(t))._=t,i):r&&r._},i},t.clientPoint=Ot,t.cluster=function(){var t=Nl,n=1,e=1,r=!1;function i(i){var o,a=0;i.eachAfter(function(n){var e=n.children;e?(n.x=function(t){return t.reduce(Tl,0)/t.length}(e),n.y=function(t){return 1+t.reduce(Al,0)}(e)):(n.x=o?a+=t(n,o):0,n.y=0,o=n)});var u=function(t){for(var n;n=t.children;)t=n[0];return t}(i),c=function(t){for(var n;n=t.children;)t=n[n.length-1];return t}(i),f=u.x-t(u,c)/2,s=c.x+t(c,u)/2;return i.eachAfter(r?function(t){t.x=(t.x-i.x)*n,t.y=(i.y-t.y)*e}:function(t){t.x=(t.x-f)/(s-f)*n,t.y=(1-(i.y?t.y/i.y:1))*e})}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.color=pn,t.contourDensity=function(){var t=ko,n=Eo,e=Co,r=960,i=500,o=20,a=2,u=3*o,c=r+2*u>>a,f=i+2*u>>a,s=bo(20);function l(r){var i=new Float32Array(c*f),l=new Float32Array(c*f);r.forEach(function(r,o,s){var l=+t(r,o,s)+u>>a,h=+n(r,o,s)+u>>a,d=+e(r,o,s);l>=0&&l<c&&h>=0&&h<f&&(i[l+h*c]+=d)}),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),So({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),So({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),So({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a);var d=s(i);if(!Array.isArray(d)){var p=T(i);d=w(0,p,d),(d=g(0,Math.floor(p/d)*d,d)).shift()}return To().thresholds(d).size([c,f])(i).map(h)}function h(t){return t.value*=Math.pow(2,-2*a),t.coordinates.forEach(d),t}function d(t){t.forEach(p)}function p(t){t.forEach(v)}function v(t){t[0]=t[0]*Math.pow(2,a)-u,t[1]=t[1]*Math.pow(2,a)-u}function y(){return c=r+2*(u=3*o)>>a,f=i+2*u>>a,l}return l.x=function(n){return arguments.length?(t="function"==typeof n?n:bo(+n),l):t},l.y=function(t){return arguments.length?(n="function"==typeof t?t:bo(+t),l):n},l.weight=function(t){return arguments.length?(e="function"==typeof t?t:bo(+t),l):e},l.size=function(t){if(!arguments.length)return[r,i];var n=Math.ceil(t[0]),e=Math.ceil(t[1]);if(!(n>=0||n>=0))throw new Error("invalid size");return r=n,i=e,y()},l.cellSize=function(t){if(!arguments.length)return 1<<a;if(!((t=+t)>=1))throw new Error("invalid cell size");return a=Math.floor(Math.log(t)/Math.LN2),y()},l.thresholds=function(t){return arguments.length?(s="function"==typeof t?t:Array.isArray(t)?bo(yo.call(t)):bo(t),l):s},l.bandwidth=function(t){if(!arguments.length)return Math.sqrt(o*(o+1));if(!((t=+t)>=0))throw new Error("invalid bandwidth");return o=Math.round((Math.sqrt(4*t*t+1)-1)/2),y()},l},t.contours=To,t.create=function(t){return Rt(Z(t).call(document.documentElement))},t.creator=Z,t.cross=function(t,n,e){var r,i,o,u,c=t.length,f=n.length,s=new Array(c*f);for(null==e&&(e=a),r=o=0;r<c;++r)for(u=t[r],i=0;i<f;++i,++o)s[o]=e(u,n[i]);return s},t.csv=fa,t.csvFormat=jo,t.csvFormatBody=Xo,t.csvFormatRow=Go,t.csvFormatRows=Vo,t.csvFormatValue=$o,t.csvParse=Io,t.csvParseRows=Ho,t.cubehelix=ee,t.curveBasis=function(t){return new A_(t)},t.curveBasisClosed=function(t){return new S_(t)},t.curveBasisOpen=function(t){return new k_(t)},t.curveBundle=C_,t.curveCardinal=R_,t.curveCardinalClosed=q_,t.curveCardinalOpen=U_,t.curveCatmullRom=F_,t.curveCatmullRomClosed=I_,t.curveCatmullRomOpen=j_,t.curveLinear=Fy,t.curveLinearClosed=function(t){return new X_(t)},t.curveMonotoneX=function(t){return new Z_(t)},t.curveMonotoneY=function(t){return new Q_(t)},t.curveNatural=function(t){return new J_(t)},t.curveStep=function(t){return new nb(t,.5)},t.curveStepAfter=function(t){return new nb(t,1)},t.curveStepBefore=function(t){return new nb(t,0)},t.customEvent=kt,t.descending=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=f,t.dispatch=I,t.drag=function(){var n,e,r,i,o=Gt,a=$t,u=Wt,c=Zt,f={},s=I("start","drag","end"),l=0,h=0;function d(t){t.on("mousedown.drag",p).filter(c).on("touchstart.drag",y).on("touchmove.drag",_).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(){if(!i&&o.apply(this,arguments)){var u=m("mouse",a.apply(this,arguments),Bt,this,arguments);u&&(Rt(t.event.view).on("mousemove.drag",v,!0).on("mouseup.drag",g,!0),Ht(t.event.view),Yt(),r=!1,n=t.event.clientX,e=t.event.clientY,u("start"))}}function v(){if(It(),!r){var i=t.event.clientX-n,o=t.event.clientY-e;r=i*i+o*o>h}f.mouse("drag")}function g(){Rt(t.event.view).on("mousemove.drag mouseup.drag",null),jt(t.event.view,r),It(),f.mouse("end")}function y(){if(o.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=a.apply(this,arguments),u=r.length;for(n=0;n<u;++n)(e=m(r[n].identifier,i,Ft,this,arguments))&&(Yt(),e("start"))}}function _(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=f[r[n].identifier])&&(It(),e("drag"))}function b(){var n,e,r=t.event.changedTouches,o=r.length;for(i&&clearTimeout(i),i=setTimeout(function(){i=null},500),n=0;n<o;++n)(e=f[r[n].identifier])&&(Yt(),e("end"))}function m(n,e,r,i,o){var a,c,h,p=r(e,n),v=s.copy();if(kt(new Vt(d,"beforestart",a,n,l,p[0],p[1],0,0,v),function(){return null!=(t.event.subject=a=u.apply(i,o))&&(c=a.x-p[0]||0,h=a.y-p[1]||0,!0)}))return function t(u){var s,g=p;switch(u){case"start":f[n]=t,s=l++;break;case"end":delete f[n],--l;case"drag":p=r(e,n),s=l}kt(new Vt(d,u,a,n,s,p[0]+c,p[1]+h,p[0]-g[0],p[1]-g[1],v),v.apply,v,[u,i,o])}}return d.filter=function(t){return arguments.length?(o="function"==typeof t?t:Xt(!!t),d):o},d.container=function(t){return arguments.length?(a="function"==typeof t?t:Xt(t),d):a},d.subject=function(t){return arguments.length?(u="function"==typeof t?t:Xt(t),d):u},d.touchable=function(t){return arguments.length?(c="function"==typeof t?t:Xt(!!t),d):c},d.on=function(){var t=s.on.apply(s,arguments);return t===s?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d},t.dragDisable=Ht,t.dragEnable=jt,t.dsv=function(t,n,e,r){3===arguments.length&&"function"==typeof e&&(r=e,e=void 0);var i=Fo(t);return ua(n,e).then(function(t){return i.parse(t,r)})},t.dsvFormat=Fo,t.easeBack=si,t.easeBackIn=ci,t.easeBackInOut=si,t.easeBackOut=fi,t.easeBounce=ui,t.easeBounceIn=function(t){return 1-ui(1-t)},t.easeBounceInOut=function(t){return((t*=2)<=1?1-ui(1-t):ui(t-1)+1)/2},t.easeBounceOut=ui,t.easeCircle=Zr,t.easeCircleIn=function(t){return 1-Math.sqrt(1-t*t)},t.easeCircleInOut=Zr,t.easeCircleOut=function(t){return Math.sqrt(1- --t*t)},t.easeCubic=Ir,t.easeCubicIn=function(t){return t*t*t},t.easeCubicInOut=Ir,t.easeCubicOut=function(t){return--t*t*t+1},t.easeElastic=di,t.easeElasticIn=hi,t.easeElasticInOut=pi,t.easeElasticOut=di,t.easeExp=Wr,t.easeExpIn=function(t){return Math.pow(2,10*t-10)},t.easeExpInOut=Wr,t.easeExpOut=function(t){return 1-Math.pow(2,-10*t)},t.easeLinear=function(t){return+t},t.easePoly=Xr,t.easePolyIn=Hr,t.easePolyInOut=Xr,t.easePolyOut=jr,t.easeQuad=Yr,t.easeQuadIn=function(t){return t*t},t.easeQuadInOut=Yr,t.easeQuadOut=function(t){return t*(2-t)},t.easeSin=$r,t.easeSinIn=function(t){return 1-Math.cos(t*Gr)},t.easeSinInOut=$r,t.easeSinOut=function(t){return Math.sin(t*Gr)},t.entries=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},t.extent=s,t.forceCenter=function(t,n){var e;function r(){var r,i,o=e.length,a=0,u=0;for(r=0;r<o;++r)a+=(i=e[r]).x,u+=i.y;for(a=a/o-t,u=u/o-n,r=0;r<o;++r)(i=e[r]).x-=a,i.y-=u}return null==t&&(t=0),null==n&&(n=0),r.initialize=function(t){e=t},r.x=function(n){return arguments.length?(t=+n,r):t},r.y=function(t){return arguments.length?(n=+t,r):n},r},t.forceCollide=function(t){var n,e,r=1,i=1;function o(){for(var t,o,u,c,f,s,l,h=n.length,d=0;d<i;++d)for(o=wa(n,Aa,Sa).visitAfter(a),t=0;t<h;++t)u=n[t],s=e[u.index],l=s*s,c=u.x+u.vx,f=u.y+u.vy,o.visit(p);function p(t,n,e,i,o){var a=t.data,h=t.r,d=s+h;if(!a)return n>c+d||i<c-d||e>f+d||o<f-d;if(a.index>u.index){var p=c-a.x-a.vx,v=f-a.y-a.vy,g=p*p+v*v;g<d*d&&(0===p&&(g+=(p=ya())*p),0===v&&(g+=(v=ya())*v),g=(d-(g=Math.sqrt(g)))/g*r,u.vx+=(p*=g)*(d=(h*=h)/(l+h)),u.vy+=(v*=g)*d,a.vx-=p*(d=1-d),a.vy-=v*d)}}}function a(t){if(t.data)return t.r=e[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function u(){if(n){var r,i,o=n.length;for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=ga(null==t?1:+t)),o.initialize=function(t){n=t,u()},o.iterations=function(t){return arguments.length?(i=+t,o):i},o.strength=function(t){return arguments.length?(r=+t,o):r},o.radius=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),u(),o):t},o},t.forceLink=function(t){var n,e,r,i,o,a=ka,u=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},c=ga(30),f=1;function s(r){for(var i=0,a=t.length;i<f;++i)for(var u,c,s,l,h,d,p,v=0;v<a;++v)c=(u=t[v]).source,l=(s=u.target).x+s.vx-c.x-c.vx||ya(),h=s.y+s.vy-c.y-c.vy||ya(),l*=d=((d=Math.sqrt(l*l+h*h))-e[v])/d*r*n[v],h*=d,s.vx-=l*(p=o[v]),s.vy-=h*p,c.vx+=l*(p=1-p),c.vy+=h*p}function l(){if(r){var u,c,f=r.length,s=t.length,l=co(r,a);for(u=0,i=new Array(f);u<s;++u)(c=t[u]).index=u,"object"!=typeof c.source&&(c.source=Ea(l,c.source)),"object"!=typeof c.target&&(c.target=Ea(l,c.target)),i[c.source.index]=(i[c.source.index]||0)+1,i[c.target.index]=(i[c.target.index]||0)+1;for(u=0,o=new Array(s);u<s;++u)c=t[u],o[u]=i[c.source.index]/(i[c.source.index]+i[c.target.index]);n=new Array(s),h(),e=new Array(s),d()}}function h(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+u(t[e],e,t)}function d(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+c(t[n],n,t)}return null==t&&(t=[]),s.initialize=function(t){r=t,l()},s.links=function(n){return arguments.length?(t=n,l(),s):t},s.id=function(t){return arguments.length?(a=t,s):a},s.iterations=function(t){return arguments.length?(f=+t,s):f},s.strength=function(t){return arguments.length?(u="function"==typeof t?t:ga(+t),h(),s):u},s.distance=function(t){return arguments.length?(c="function"==typeof t?t:ga(+t),d(),s):c},s},t.forceManyBody=function(){var t,n,e,r,i=ga(-30),o=1,a=1/0,u=.81;function c(r){var i,o=t.length,a=wa(t,Ca,Pa).visitAfter(s);for(e=r,i=0;i<o;++i)n=t[i],a.visit(l)}function f(){if(t){var n,e,o=t.length;for(r=new Array(o),n=0;n<o;++n)e=t[n],r[e.index]=+i(e,n,t)}}function s(t){var n,e,i,o,a,u=0,c=0;if(t.length){for(i=o=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(u+=n.value,c+=e,i+=e*n.x,o+=e*n.y);t.x=i/c,t.y=o/c}else{(n=t).x=n.data.x,n.y=n.data.y;do{u+=r[n.data.index]}while(n=n.next)}t.value=u}function l(t,i,c,f){if(!t.value)return!0;var s=t.x-n.x,l=t.y-n.y,h=f-i,d=s*s+l*l;if(h*h/u<d)return d<a&&(0===s&&(d+=(s=ya())*s),0===l&&(d+=(l=ya())*l),d<o&&(d=Math.sqrt(o*d)),n.vx+=s*t.value*e/d,n.vy+=l*t.value*e/d),!0;if(!(t.length||d>=a)){(t.data!==n||t.next)&&(0===s&&(d+=(s=ya())*s),0===l&&(d+=(l=ya())*l),d<o&&(d=Math.sqrt(o*d)));do{t.data!==n&&(h=r[t.data.index]*e/d,n.vx+=s*h,n.vy+=l*h)}while(t=t.next)}}return c.initialize=function(n){t=n,f()},c.strength=function(t){return arguments.length?(i="function"==typeof t?t:ga(+t),f(),c):i},c.distanceMin=function(t){return arguments.length?(o=t*t,c):Math.sqrt(o)},c.distanceMax=function(t){return arguments.length?(a=t*t,c):Math.sqrt(a)},c.theta=function(t){return arguments.length?(u=t*t,c):Math.sqrt(u)},c},t.forceRadial=function(t,n,e){var r,i,o,a=ga(.1);function u(t){for(var a=0,u=r.length;a<u;++a){var c=r[a],f=c.x-n||1e-6,s=c.y-e||1e-6,l=Math.sqrt(f*f+s*s),h=(o[a]-l)*i[a]*t/l;c.vx+=f*h,c.vy+=s*h}}function c(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)o[n]=+t(r[n],n,r),i[n]=isNaN(o[n])?0:+a(r[n],n,r)}}return"function"!=typeof t&&(t=ga(+t)),null==n&&(n=0),null==e&&(e=0),u.initialize=function(t){r=t,c()},u.strength=function(t){return arguments.length?(a="function"==typeof t?t:ga(+t),c(),u):a},u.radius=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),c(),u):t},u.x=function(t){return arguments.length?(n=+t,u):n},u.y=function(t){return arguments.length?(e=+t,u):e},u},t.forceSimulation=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=co(),c=hr(s),f=I("tick","end");function s(){l(),f.call("tick",n),e<r&&(c.stop(),f.call("end",n))}function l(r){var c,f,s=t.length;void 0===r&&(r=1);for(var l=0;l<r;++l)for(e+=(o-e)*i,u.each(function(t){t(e)}),c=0;c<s;++c)null==(f=t[c]).fx?f.x+=f.vx*=a:(f.x=f.fx,f.vx=0),null==f.fy?f.y+=f.vy*=a:(f.y=f.fy,f.vy=0);return n}function h(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=za*Math.sqrt(e),o=e*Ra;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function d(n){return n.initialize&&n.initialize(t),n}return null==t&&(t=[]),h(),n={tick:l,restart:function(){return c.restart(s),n},stop:function(){return c.stop(),n},nodes:function(e){return arguments.length?(t=e,h(),u.each(d),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(a=1-t,n):1-a},force:function(t,e){return arguments.length>1?(null==e?u.remove(t):u.set(t,d(e)),n):u.get(t)},find:function(n,e,r){var i,o,a,u,c,f=0,s=t.length;for(null==r?r=1/0:r*=r,f=0;f<s;++f)(a=(i=n-(u=t[f]).x)*i+(o=e-u.y)*o)<r&&(c=u,r=a);return c},on:function(t,e){return arguments.length>1?(f.on(t,e),n):f.on(t)}}},t.forceX=function(t){var n,e,r,i=ga(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=ga(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:ga(+t),a(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),a(),o):t},o},t.forceY=function(t){var n,e,r,i=ga(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=ga(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:ga(+t),a(),o):i},o.y=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),a(),o):t},o},t.formatDefaultLocale=Ga,t.formatLocale=Va,t.formatSpecifier=Oa,t.geoAlbers=el,t.geoAlbersUsa=function(){var t,n,e,r,i,o,a=el(),u=nl().rotate([154,0]).center([-2,58.5]).parallels([55,65]),c=nl().rotate([157,0]).center([-3,19.9]).parallels([8,18]),f={point:function(t,n){o=[t,n]}};function s(t){var n=t[0],a=t[1];return o=null,e.point(n,a),o||(r.point(n,a),o)||(i.point(n,a),o)}function l(){return t=n=null,s}return s.invert=function(t){var n=a.scale(),e=a.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?u:i>=.166&&i<.234&&r>=-.214&&r<-.115?c:a).invert(t)},s.stream=function(e){return t&&n===e?t:(r=[a.stream(n=e),u.stream(e),c.stream(e)],i=r.length,t={point:function(t,n){for(var e=-1;++e<i;)r[e].point(t,n)},sphere:function(){for(var t=-1;++t<i;)r[t].sphere()},lineStart:function(){for(var t=-1;++t<i;)r[t].lineStart()},lineEnd:function(){for(var t=-1;++t<i;)r[t].lineEnd()},polygonStart:function(){for(var t=-1;++t<i;)r[t].polygonStart()},polygonEnd:function(){for(var t=-1;++t<i;)r[t].polygonEnd()}});var r,i},s.precision=function(t){return arguments.length?(a.precision(t),u.precision(t),c.precision(t),l()):a.precision()},s.scale=function(t){return arguments.length?(a.scale(t),u.scale(.35*t),c.scale(t),s.translate(a.translate())):a.scale()},s.translate=function(t){if(!arguments.length)return a.translate();var n=a.scale(),o=+t[0],s=+t[1];return e=a.translate(t).clipExtent([[o-.455*n,s-.238*n],[o+.455*n,s+.238*n]]).stream(f),r=u.translate([o-.307*n,s+.201*n]).clipExtent([[o-.425*n+nu,s+.12*n+nu],[o-.214*n-nu,s+.234*n-nu]]).stream(f),i=c.translate([o-.205*n,s+.212*n]).clipExtent([[o-.214*n+nu,s+.166*n+nu],[o-.115*n-nu,s+.234*n-nu]]).stream(f),l()},s.fitExtent=function(t,n){return Is(s,t,n)},s.fitSize=function(t,n){return Hs(s,t,n)},s.fitWidth=function(t,n){return js(s,t,n)},s.fitHeight=function(t,n){return Xs(s,t,n)},s.scale(1070)},t.geoArea=function(t){return Uu.reset(),Cu(t,Ou),2*Uu},t.geoAzimuthalEqualArea=function(){return Qs(ol).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=ol,t.geoAzimuthalEquidistant=function(){return Qs(al).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=al,t.geoBounds=function(t){var n,e,r,i,o,a,u;if(Ju=Ku=-(Zu=Qu=1/0),ic=[],Cu(t,Mc),e=ic.length){for(ic.sort(zc),n=1,o=[r=ic[0]];n<e;++n)Rc(r,(i=ic[n])[0])||Rc(r,i[1])?(Pc(r[0],i[1])>Pc(r[0],r[1])&&(r[1]=i[1]),Pc(i[0],r[1])>Pc(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(u=Pc(r[1],i[0]))>a&&(a=u,Zu=i[0],Ku=r[1])}return ic=oc=null,Zu===1/0||Qu===1/0?[[NaN,NaN],[NaN,NaN]]:[[Zu,Qu],[Ku,Ju]]},t.geoCentroid=function(t){ac=uc=cc=fc=sc=lc=hc=dc=pc=vc=gc=0,Cu(t,Dc);var n=pc,e=vc,r=gc,i=n*n+e*e+r*r;return i<eu&&(n=lc,e=hc,r=dc,uc<nu&&(n=cc,e=fc,r=sc),(i=n*n+e*e+r*r)<eu)?[NaN,NaN]:[lu(e,n)*uu,wu(r/bu(i))*uu]},t.geoCircle=function(){var t,n,e=Xc([0,0]),r=Xc(90),i=Xc(6),o={point:function(e,r){t.push(e=n(e,r)),e[0]*=uu,e[1]*=uu}};function a(){var a=e.apply(this,arguments),u=r.apply(this,arguments)*cu,c=i.apply(this,arguments)*cu;return t=[],n=$c(-a[0]*cu,-a[1]*cu,0).invert,Jc(o,u,c,1),a={type:"Polygon",coordinates:[t]},t=n=null,a}return a.center=function(t){return arguments.length?(e="function"==typeof t?t:Xc([+t[0],+t[1]]),a):e},a.radius=function(t){return arguments.length?(r="function"==typeof t?t:Xc(+t),a):r},a.precision=function(t){return arguments.length?(i="function"==typeof t?t:Xc(+t),a):i},a},t.geoClipAntimeridian=df,t.geoClipCircle=pf,t.geoClipExtent=function(){var t,n,e,r=0,i=0,o=960,a=500;return e={stream:function(e){return t&&n===e?t:t=yf(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}},t.geoClipRectangle=yf,t.geoConicConformal=function(){return Js(sl).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=sl,t.geoConicEqualArea=nl,t.geoConicEqualAreaRaw=tl,t.geoConicEquidistant=function(){return Js(hl).scale(131.154).center([0,13.9389])},t.geoConicEquidistantRaw=hl,t.geoContains=function(t,n){return(t&&Cf.hasOwnProperty(t.type)?Cf[t.type]:zf)(t,n)},t.geoDistance=Ef,t.geoEqualEarth=function(){return Qs(_l).scale(177.158)},t.geoEqualEarthRaw=_l,t.geoEquirectangular=function(){return Qs(ll).scale(152.63)},t.geoEquirectangularRaw=ll,t.geoGnomonic=function(){return Qs(bl).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=bl,t.geoGraticule=Ff,t.geoGraticule10=function(){return Ff()()},t.geoIdentity=function(){var t,n,e,r,i,o,a,u=1,c=0,f=0,s=1,l=1,h=0,d=null,p=1,v=1,g=Bs({point:function(t,n){var e=b([t,n]);this.stream.point(e[0],e[1])}}),y=Yf;function _(){return p=u*s,v=u*l,o=a=null,b}function b(e){var r=e[0]*p,i=e[1]*v;if(h){var o=i*t-r*n;r=r*t+i*n,i=o}return[r+c,i+f]}return b.invert=function(e){var r=e[0]-c,i=e[1]-f;if(h){var o=i*t+r*n;r=r*t-i*n,i=o}return[r/p,i/v]},b.stream=function(t){return o&&a===t?o:o=g(y(a=t))},b.postclip=function(t){return arguments.length?(y=t,d=e=r=i=null,_()):y},b.clipExtent=function(t){return arguments.length?(y=null==t?(d=e=r=i=null,Yf):yf(d=+t[0][0],e=+t[0][1],r=+t[1][0],i=+t[1][1]),_()):null==d?null:[[d,e],[r,i]]},b.scale=function(t){return arguments.length?(u=+t,_()):u},b.translate=function(t){return arguments.length?(c=+t[0],f=+t[1],_()):[c,f]},b.angle=function(e){return arguments.length?(n=yu(h=e%360*cu),t=hu(h),_()):h*uu},b.reflectX=function(t){return arguments.length?(s=t?-1:1,_()):s<0},b.reflectY=function(t){return arguments.length?(l=t?-1:1,_()):l<0},b.fitExtent=function(t,n){return Is(b,t,n)},b.fitSize=function(t,n){return Hs(b,t,n)},b.fitWidth=function(t,n){return js(b,t,n)},b.fitHeight=function(t,n){return Xs(b,t,n)},b},t.geoInterpolate=function(t,n){var e=t[0]*cu,r=t[1]*cu,i=n[0]*cu,o=n[1]*cu,a=hu(r),u=yu(r),c=hu(o),f=yu(o),s=a*hu(e),l=a*yu(e),h=c*hu(i),d=c*yu(i),p=2*wu(bu(Mu(o-r)+a*c*Mu(i-e))),v=yu(p),g=p?function(t){var n=yu(t*=p)/v,e=yu(p-t)/v,r=e*s+n*h,i=e*l+n*d,o=e*u+n*f;return[lu(i,r)*uu,lu(o,bu(r*r+i*i))*uu]}:function(){return[e*uu,r*uu]};return g.distance=p,g},t.geoLength=Af,t.geoMercator=function(){return cl(ul).scale(961/au)},t.geoMercatorRaw=ul,t.geoNaturalEarth1=function(){return Qs(ml).scale(175.295)},t.geoNaturalEarth1Raw=ml,t.geoOrthographic=function(){return Qs(xl).scale(249.5).clipAngle(90+nu)},t.geoOrthographicRaw=xl,t.geoPath=function(t,n){var e,r,i=4.5;function o(t){return t&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),Cu(t,e(r))),r.result()}return o.area=function(t){return Cu(t,e($f)),$f.result()},o.measure=function(t){return Cu(t,e(Ds)),Ds.result()},o.bounds=function(t){return Cu(t,e(rs)),rs.result()},o.centroid=function(t){return Cu(t,e(ys)),ys.result()},o.projection=function(n){return arguments.length?(e=null==n?(t=null,Yf):(t=n).stream,o):t},o.context=function(t){return arguments.length?(r=null==t?(n=null,new Us):new Ss(n=t),"function"!=typeof i&&r.pointRadius(i),o):n},o.pointRadius=function(t){return arguments.length?(i="function"==typeof t?t:(r.pointRadius(+t),+t),o):i},o.projection(t).context(n)},t.geoProjection=Qs,t.geoProjectionMutator=Ks,t.geoRotation=Kc,t.geoStereographic=function(){return Qs(wl).scale(250).clipAngle(142)},t.geoStereographicRaw=wl,t.geoStream=Cu,t.geoTransform=function(t){return{stream:Bs(t)}},t.geoTransverseMercator=function(){var t=cl(Ml),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):[(t=n())[1],-t[0]]},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):[(t=e())[0],t[1],t[2]-90]},e([0,0,90]).scale(159.155)},t.geoTransverseMercatorRaw=Ml,t.gray=function(t,n){return new Bn(t,0,0,null==n?1:n)},t.hcl=Xn,t.hierarchy=kl,t.histogram=function(){var t=v,n=s,e=M;function r(r){var o,a,u=r.length,c=new Array(u);for(o=0;o<u;++o)c[o]=t(r[o],o,r);var f=n(c),s=f[0],l=f[1],h=e(c,s,l);Array.isArray(h)||(h=w(s,l,h),h=g(Math.ceil(s/h)*h,l,h));for(var d=h.length;h[0]<=s;)h.shift(),--d;for(;h[d-1]>l;)h.pop(),--d;var p,v=new Array(d+1);for(o=0;o<=d;++o)(p=v[o]=[]).x0=o>0?h[o-1]:s,p.x1=o<d?h[o]:l;for(o=0;o<u;++o)s<=(a=c[o])&&a<=l&&v[i(h,a,0,d)].push(r[o]);return v}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:p(n),r):t},r.domain=function(t){return arguments.length?(n="function"==typeof t?t:p([t[0],t[1]]),r):n},r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?p(h.call(t)):p(t),r):e},r},t.hsl=Tn,t.html=pa,t.image=function(t,n){return new Promise(function(e,r){var i=new Image;for(var o in n)i[o]=n[o];i.onerror=r,i.onload=function(){e(i)},i.src=t})},t.interpolate=Te,t.interpolateArray=function(t,n){return(ye(n)?ge:_e)(t,n)},t.interpolateBasis=oe,t.interpolateBasisClosed=ae,t.interpolateBlues=Qg,t.interpolateBrBG=fg,t.interpolateBuGn=Sg,t.interpolateBuPu=Eg,t.interpolateCividis=function(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(-4.54-t*(35.34-t*(2381.73-t*(6402.7-t*(7024.72-2710.57*t)))))))+", "+Math.max(0,Math.min(255,Math.round(32.49+t*(170.73+t*(52.82-t*(131.46-t*(176.58-67.37*t)))))))+", "+Math.max(0,Math.min(255,Math.round(81.24+t*(442.36-t*(2482.43-t*(6167.24-t*(6614.94-2475.67*t)))))))+")"},t.interpolateCool=sy,t.interpolateCubehelix=Ze,t.interpolateCubehelixDefault=cy,t.interpolateCubehelixLong=Qe,t.interpolateDate=be,t.interpolateDiscrete=function(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}},t.interpolateGnBu=Pg,t.interpolateGreens=Jg,t.interpolateGreys=ny,t.interpolateHcl=Ge,t.interpolateHclLong=$e,t.interpolateHsl=je,t.interpolateHslLong=Xe,t.interpolateHue=function(t,n){var e=fe(+t,+n);return function(t){var n=e(t);return n-360*Math.floor(n/360)}},t.interpolateInferno=_y,t.interpolateLab=function(t,n){var e=le((t=On(t)).l,(n=On(n)).l),r=le(t.a,n.a),i=le(t.b,n.b),o=le(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}},t.interpolateMagma=yy,t.interpolateNumber=me,t.interpolateNumberArray=ge,t.interpolateObject=xe,t.interpolateOrRd=Rg,t.interpolateOranges=uy,t.interpolatePRGn=lg,t.interpolatePiYG=dg,t.interpolatePlasma=by,t.interpolatePuBu=Ug,t.interpolatePuBuGn=qg,t.interpolatePuOr=vg,t.interpolatePuRd=Bg,t.interpolatePurples=ry,t.interpolateRainbow=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return ly.h=360*t-100,ly.s=1.5-1.5*n,ly.l=.8-.9*n,ly+""},t.interpolateRdBu=yg,t.interpolateRdGy=bg,t.interpolateRdPu=Yg,t.interpolateRdYlBu=xg,t.interpolateRdYlGn=Mg,t.interpolateReds=oy,t.interpolateRgb=he,t.interpolateRgbBasis=pe,t.interpolateRgbBasisClosed=ve,t.interpolateRound=Ae,t.interpolateSinebow=function(t){var n;return t=(.5-t)*Math.PI,hy.r=255*(n=Math.sin(t))*n,hy.g=255*(n=Math.sin(t+dy))*n,hy.b=255*(n=Math.sin(t+py))*n,hy+""},t.interpolateSpectral=Tg,t.interpolateString=Ne,t.interpolateTransformCss=qe,t.interpolateTransformSvg=Le,t.interpolateTurbo=function(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(34.61+t*(1172.33-t*(10793.56-t*(33300.12-t*(38394.49-14825.05*t)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+t*(557.33+t*(1225.33-t*(3574.96-t*(1073.77+707.56*t)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+t*(3211.1-t*(15327.97-t*(27814-t*(22569.18-6838.66*t)))))))+")"},t.interpolateViridis=gy,t.interpolateWarm=fy,t.interpolateYlGn=Xg,t.interpolateYlGnBu=Hg,t.interpolateYlOrBr=Gg,t.interpolateYlOrRd=Wg,t.interpolateZoom=Ie,t.interrupt=Pr,t.interval=function(t,n,e){var r=new lr,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?fr():+e,r.restart(function o(a){a+=i,r.restart(o,i+=n,e),t(a)},n,e),r)},t.isoFormat=Rv,t.isoParse=Dv,t.json=function(t,n){return fetch(t,n).then(la)},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n},t.lab=On,t.lch=function(t,n,e,r){return 1===arguments.length?jn(t):new Vn(e,n,t,null==r?1:r)},t.line=Hy,t.lineRadial=Qy,t.linkHorizontal=function(){return r_(i_)},t.linkRadial=function(){var t=r_(a_);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t},t.linkVertical=function(){return r_(o_)},t.local=qt,t.map=co,t.matcher=nt,t.max=T,t.mean=function(t,n){var e,r=t.length,i=r,o=-1,a=0;if(null==n)for(;++o<r;)isNaN(e=u(t[o]))?--i:a+=e;else for(;++o<r;)isNaN(e=u(n(t[o],o,t)))?--i:a+=e;if(i)return a/i},t.median=function(t,e){var r,i=t.length,o=-1,a=[];if(null==e)for(;++o<i;)isNaN(r=u(t[o]))||a.push(r);else for(;++o<i;)isNaN(r=u(e(t[o],o,t)))||a.push(r);return N(a.sort(n),.5)},t.merge=A,t.min=S,t.mouse=Bt,t.namespace=W,t.namespaces=$,t.nest=function(){var t,n,e,r=[],i=[];function o(e,i,a,u){if(i>=r.length)return null!=t&&e.sort(t),null!=n?n(e):e;for(var c,f,s,l=-1,h=e.length,d=r[i++],p=co(),v=a();++l<h;)(s=p.get(c=d(f=e[l])+""))?s.push(f):p.set(c,[f]);return p.each(function(t,n){u(v,n,o(t,i,a,u))}),v}return e={object:function(t){return o(t,0,fo,so)},map:function(t){return o(t,0,lo,ho)},entries:function(t){return function t(e,o){if(++o>r.length)return e;var a,u=i[o-1];return null!=n&&o>=r.length?a=e.entries():(a=[],e.each(function(n,e){a.push({key:e,values:t(n,o)})})),null!=u?a.sort(function(t,n){return u(t.key,n.key)}):a}(o(t,0,lo,ho),0)},key:function(t){return r.push(t),e},sortKeys:function(t){return i[r.length-1]=t,e},sortValues:function(n){return t=n,e},rollup:function(t){return n=t,e}}},t.now=fr,t.pack=function(){var t=null,n=1,e=1,r=Wl;function i(i){return i.x=n/2,i.y=e/2,t?i.eachBefore(Kl(t)).eachAfter(Jl(r,.5)).eachBefore(th(1)):i.eachBefore(Kl(Ql)).eachAfter(Jl(Wl,1)).eachAfter(Jl(r,i.r/Math.min(n,e))).eachBefore(th(Math.min(n,e)/(2*i.r))),i}return i.radius=function(n){return arguments.length?(t=Gl(n),i):t},i.size=function(t){return arguments.length?(n=+t[0],e=+t[1],i):[n,e]},i.padding=function(t){return arguments.length?(r="function"==typeof t?t:Zl(+t),i):r},i},t.packEnclose=Dl,t.packSiblings=function(t){return Vl(t),t},t.pairs=function(t,n){null==n&&(n=a);for(var e=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);e<r;)o[e]=n(i,i=t[++e]);return o},t.partition=function(){var t=1,n=1,e=0,r=!1;function i(i){var o=i.height+1;return i.x0=i.y0=e,i.x1=t,i.y1=n/o,i.eachBefore(function(t,n){return function(r){r.children&&eh(r,r.x0,t*(r.depth+1)/n,r.x1,t*(r.depth+2)/n);var i=r.x0,o=r.y0,a=r.x1-e,u=r.y1-e;a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=u}}(n,o)),r&&i.eachBefore(nh),i}return i.round=function(t){return arguments.length?(r=!!t,i):r},i.size=function(e){return arguments.length?(t=+e[0],n=+e[1],i):[t,n]},i.padding=function(t){return arguments.length?(e=+t,i):e},i},t.path=no,t.permute=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},t.pie=function(){var t=Vy,n=Xy,e=null,r=my(0),i=my(Py),o=my(0);function a(a){var u,c,f,s,l,h=a.length,d=0,p=new Array(h),v=new Array(h),g=+r.apply(this,arguments),y=Math.min(Py,Math.max(-Py,i.apply(this,arguments)-g)),_=Math.min(Math.abs(y)/h,o.apply(this,arguments)),b=_*(y<0?-1:1);for(u=0;u<h;++u)(l=v[p[u]=u]=+t(a[u],u,a))>0&&(d+=l);for(null!=n?p.sort(function(t,e){return n(v[t],v[e])}):null!=e&&p.sort(function(t,n){return e(a[t],a[n])}),u=0,f=d?(y-h*b)/d:0;u<h;++u,g=s)c=p[u],s=g+((l=v[c])>0?l*f:0)+b,v[c]={data:a[c],index:u,value:l,startAngle:g,endAngle:s,padAngle:_};return v}return a.value=function(n){return arguments.length?(t="function"==typeof n?n:my(+n),a):t},a.sortValues=function(t){return arguments.length?(n=t,e=null,a):n},a.sort=function(t){return arguments.length?(e=t,n=null,a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:my(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:my(+t),a):i},a.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:my(+t),a):o},a},t.piecewise=function(t,n){for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e]);return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)));return o[n](t-n)}},t.pointRadial=Jy,t.polygonArea=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},t.polygonCentroid=function(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],c=0;++r<i;)n=u,u=t[r],c+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e;return[o/(c*=3),a/c]},t.polygonContains=function(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],c=o[0],f=o[1],s=!1,l=0;l<i;++l)e=(o=t[l])[0],(r=o[1])>u!=f>u&&a<(c-e)*(u-r)/(f-r)+e&&(s=!s),c=e,f=r;return s},t.polygonHull=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(mh),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=xh(r),a=xh(i),u=a[0]===o[0],c=a[a.length-1]===o[o.length-1],f=[];for(n=o.length-1;n>=0;--n)f.push(t[r[o[n]][2]]);for(n=+u;n<a.length-c;++n)f.push(t[r[a[n]][2]]);return f},t.polygonLength=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],c=0;++r<i;)n=a,e=u,n-=a=(o=t[r])[0],e-=u=o[1],c+=Math.sqrt(n*n+e*e);return c},t.precisionFixed=$a,t.precisionPrefix=Wa,t.precisionRound=Za,t.quadtree=wa,t.quantile=N,t.quantize=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},t.radialArea=Ky,t.radialLine=Qy,t.randomBates=Sh,t.randomExponential=kh,t.randomIrwinHall=Ah,t.randomLogNormal=Th,t.randomNormal=Nh,t.randomUniform=Mh,t.range=g,t.rgb=_n,t.ribbon=function(){var t=eo,n=ro,e=io,r=oo,i=ao,o=null;function a(){var a,u=Wi.call(arguments),c=t.apply(this,u),f=n.apply(this,u),s=+e.apply(this,(u[0]=c,u)),l=r.apply(this,u)-Xi,h=i.apply(this,u)-Xi,d=s*Ii(l),p=s*Hi(l),v=+e.apply(this,(u[0]=f,u)),g=r.apply(this,u)-Xi,y=i.apply(this,u)-Xi;if(o||(o=a=no()),o.moveTo(d,p),o.arc(0,0,s,l,h),l===g&&h===y||(o.quadraticCurveTo(0,0,v*Ii(g),v*Hi(g)),o.arc(0,0,v,g,y)),o.quadraticCurveTo(0,0,d,p),o.closePath(),a)return o=null,a+""||null}return a.radius=function(t){return arguments.length?(e="function"==typeof t?t:Zi(+t),a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:Zi(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:Zi(+t),a):i},a.source=function(n){return arguments.length?(t=n,a):t},a.target=function(t){return arguments.length?(n=t,a):n},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a},t.scaleBand=Lh,t.scaleDiverging=function t(){var n=$h($v()(Bh));return n.copy=function(){return Vv(n,t())},Ch.apply(n,arguments)},t.scaleDivergingLog=function t(){var n=ed($v()).domain([.1,1,10]);return n.copy=function(){return Vv(n,t()).base(n.base())},Ch.apply(n,arguments)},t.scaleDivergingPow=Wv,t.scaleDivergingSqrt=function(){return Wv.apply(null,arguments).exponent(.5)},t.scaleDivergingSymlog=function t(){var n=od($v());return n.copy=function(){return Vv(n,t()).constant(n.constant())},Ch.apply(n,arguments)},t.scaleIdentity=function t(n){var e;function r(t){return isNaN(t=+t)?e:t}return r.invert=r,r.domain=r.range=function(t){return arguments.length?(n=zh.call(t,Uh),r):n.slice()},r.unknown=function(t){return arguments.length?(e=t,r):e},r.copy=function(){return t(n).unknown(e)},n=arguments.length?zh.call(n,Uh):[0,1],$h(r)},t.scaleImplicit=Dh,t.scaleLinear=function t(){var n=Vh(Bh,Bh);return n.copy=function(){return jh(n,t())},Eh.apply(n,arguments),$h(n)},t.scaleLog=function t(){var n=ed(Xh()).domain([1,10]);return n.copy=function(){return jh(n,t()).base(n.base())},Eh.apply(n,arguments),n},t.scaleOrdinal=qh,t.scalePoint=function(){return function t(n){var e=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return t(e())},n}(Lh.apply(null,arguments).paddingInner(1))},t.scalePow=sd,t.scaleQuantile=function t(){var e,r=[],o=[],a=[];function u(){var t=0,n=Math.max(1,o.length);for(a=new Array(n-1);++t<n;)a[t-1]=N(r,t/n);return c}function c(t){return isNaN(t=+t)?e:o[i(a,t)]}return c.invertExtent=function(t){var n=o.indexOf(t);return n<0?[NaN,NaN]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},c.domain=function(t){if(!arguments.length)return r.slice();r=[];for(var e,i=0,o=t.length;i<o;++i)null==(e=t[i])||isNaN(e=+e)||r.push(e);return r.sort(n),u()},c.range=function(t){return arguments.length?(o=Rh.call(t),u()):o.slice()},c.unknown=function(t){return arguments.length?(e=t,c):e},c.quantiles=function(){return a.slice()},c.copy=function(){return t().domain(r).range(o).unknown(e)},Eh.apply(c,arguments)},t.scaleQuantize=function t(){var n,e=0,r=1,o=1,a=[.5],u=[0,1];function c(t){return t<=t?u[i(a,t,0,o)]:n}function f(){var t=-1;for(a=new Array(o);++t<o;)a[t]=((t+1)*r-(t-o)*e)/(o+1);return c}return c.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],f()):[e,r]},c.range=function(t){return arguments.length?(o=(u=Rh.call(t)).length-1,f()):u.slice()},c.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,a[0]]:n>=o?[a[o-1],r]:[a[n-1],a[n]]},c.unknown=function(t){return arguments.length?(n=t,c):c},c.thresholds=function(){return a.slice()},c.copy=function(){return t().domain([e,r]).range(u).unknown(n)},Eh.apply($h(c),arguments)},t.scaleSequential=function t(){var n=$h(Xv()(Bh));return n.copy=function(){return Vv(n,t())},Ch.apply(n,arguments)},t.scaleSequentialLog=function t(){var n=ed(Xv()).domain([1,10]);return n.copy=function(){return Vv(n,t()).base(n.base())},Ch.apply(n,arguments)},t.scaleSequentialPow=Gv,t.scaleSequentialQuantile=function t(){var e=[],r=Bh;function o(t){if(!isNaN(t=+t))return r((i(e,t)-1)/(e.length-1))}return o.domain=function(t){if(!arguments.length)return e.slice();e=[];for(var r,i=0,a=t.length;i<a;++i)null==(r=t[i])||isNaN(r=+r)||e.push(r);return e.sort(n),o},o.interpolator=function(t){return arguments.length?(r=t,o):r},o.copy=function(){return t(r).domain(e)},Ch.apply(o,arguments)},t.scaleSequentialSqrt=function(){return Gv.apply(null,arguments).exponent(.5)},t.scaleSequentialSymlog=function t(){var n=od(Xv());return n.copy=function(){return Vv(n,t()).constant(n.constant())},Ch.apply(n,arguments)},t.scaleSqrt=function(){return sd.apply(null,arguments).exponent(.5)},t.scaleSymlog=function t(){var n=od(Xh());return n.copy=function(){return jh(n,t()).constant(n.constant())},Eh.apply(n,arguments)},t.scaleThreshold=function t(){var n,e=[.5],r=[0,1],o=1;function a(t){return t<=t?r[i(e,t,0,o)]:n}return a.domain=function(t){return arguments.length?(e=Rh.call(t),o=Math.min(e.length,r.length-1),a):e.slice()},a.range=function(t){return arguments.length?(r=Rh.call(t),o=Math.min(e.length,r.length-1),a):r.slice()},a.invertExtent=function(t){var n=r.indexOf(t);return[e[n-1],e[n]]},a.unknown=function(t){return arguments.length?(n=t,a):n},a.copy=function(){return t().domain(e).range(r).unknown(n)},Eh.apply(a,arguments)},t.scaleTime=function(){return Eh.apply(jv(Hd,Yd,Sd,Nd,wd,md,_d,pd,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)},t.scaleUtc=function(){return Eh.apply(jv(pp,hp,Kd,Wd,Gd,Xd,_d,pd,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)},t.scan=function(t,e){if(r=t.length){var r,i,o=0,a=0,u=t[a];for(null==e&&(e=n);++o<r;)(e(i=t[o],u)<0||0!==e(u,u))&&(u=i,a=o);return 0===e(u,u)?a:void 0}},t.schemeAccent=Kv,t.schemeBlues=Zg,t.schemeBrBG=cg,t.schemeBuGn=Ag,t.schemeBuPu=kg,t.schemeCategory10=Qv,t.schemeDark2=Jv,t.schemeGnBu=Cg,t.schemeGreens=Kg,t.schemeGreys=ty,t.schemeOrRd=zg,t.schemeOranges=ay,t.schemePRGn=sg,t.schemePaired=tg,t.schemePastel1=ng,t.schemePastel2=eg,t.schemePiYG=hg,t.schemePuBu=Lg,t.schemePuBuGn=Dg,t.schemePuOr=pg,t.schemePuRd=Og,t.schemePurples=ey,t.schemeRdBu=gg,t.schemeRdGy=_g,t.schemeRdPu=Fg,t.schemeRdYlBu=mg,t.schemeRdYlGn=wg,t.schemeReds=iy,t.schemeSet1=rg,t.schemeSet2=ig,t.schemeSet3=og,t.schemeSpectral=Ng,t.schemeTableau10=ag,t.schemeYlGn=jg,t.schemeYlGnBu=Ig,t.schemeYlOrBr=Vg,t.schemeYlOrRd=$g,t.select=Rt,t.selectAll=function(t){return"string"==typeof t?new Pt([document.querySelectorAll(t)],[document.documentElement]):new Pt([null==t?[]:t],Ct)},t.selection=zt,t.selector=K,t.selectorAll=tt,t.set=go,t.shuffle=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},t.stack=function(){var t=my([]),n=rb,e=eb,r=ib;function i(i){var o,a,u=t.apply(this,arguments),c=i.length,f=u.length,s=new Array(f);for(o=0;o<f;++o){for(var l,h=u[o],d=s[o]=new Array(c),p=0;p<c;++p)d[p]=l=[0,+r(i[p],h,p,i)],l.data=i[p];d.key=h}for(o=0,a=n(s);o<f;++o)s[a[o]].index=o;return e(s,a),s}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:my(t_.call(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:my(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?rb:"function"==typeof t?t:my(t_.call(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?eb:t,i):e},i},t.stackOffsetDiverging=function(t,n){if((u=t.length)>0)for(var e,r,i,o,a,u,c=0,f=t[n[0]].length;c<f;++c)for(o=a=0,e=0;e<u;++e)(i=(r=t[n[e]][c])[1]-r[0])>0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):(r[0]=0,r[1]=i)},t.stackOffsetExpand=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}eb(t,n)}},t.stackOffsetNone=eb,t.stackOffsetSilhouette=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0;i[r][1]+=i[r][0]=-u/2}eb(t,n)}},t.stackOffsetWiggle=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,c=0,f=0;u<i;++u){for(var s=t[n[u]],l=s[a][1]||0,h=(l-(s[a-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]];h+=(p[a][1]||0)-(p[a-1][1]||0)}c+=l,f+=h*l}e[a-1][1]+=e[a-1][0]=o,c&&(o-=f/c)}e[a-1][1]+=e[a-1][0]=o,eb(t,n)}},t.stackOrderAppearance=ob,t.stackOrderAscending=ub,t.stackOrderDescending=function(t){return ub(t).reverse()},t.stackOrderInsideOut=function(t){var n,e,r=t.length,i=t.map(cb),o=ob(t),a=0,u=0,c=[],f=[];for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],c.push(e)):(u+=i[e],f.push(e));return f.reverse().concat(c)},t.stackOrderNone=rb,t.stackOrderReverse=function(t){return rb(t).reverse()},t.stratify=function(){var t=ah,n=uh;function e(e){var r,i,o,a,u,c,f,s=e.length,l=new Array(s),h={};for(i=0;i<s;++i)r=e[i],u=l[i]=new zl(r),null!=(c=t(r,i,e))&&(c+="")&&(h[f=rh+(u.id=c)]=f in h?oh:u);for(i=0;i<s;++i)if(u=l[i],null!=(c=n(e[i],i,e))&&(c+="")){if(!(a=h[rh+c]))throw new Error("missing: "+c);if(a===oh)throw new Error("ambiguous: "+c);a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots");o=u}if(!o)throw new Error("no root");if(o.parent=ih,o.eachBefore(function(t){t.depth=t.parent.depth+1,--s}).eachBefore(Pl),o.parent=null,s>0)throw new Error("cycle");return o}return e.id=function(n){return arguments.length?(t=$l(n),e):t},e.parentId=function(t){return arguments.length?(n=$l(t),e):n},e},t.style=ft,t.sum=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},t.svg=va,t.symbol=function(){var t=my(u_),n=my(64),e=null;function r(){var r;if(e||(e=r=no()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return r.type=function(n){return arguments.length?(t="function"==typeof n?n:my(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:my(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r},t.symbolCircle=u_,t.symbolCross=c_,t.symbolDiamond=l_,t.symbolSquare=g_,t.symbolStar=v_,t.symbolTriangle=__,t.symbolWye=w_,t.symbols=M_,t.text=ua,t.thresholdFreedmanDiaconis=function(t,e,r){return t=d.call(t,u).sort(n),Math.ceil((r-e)/(2*(N(t,.75)-N(t,.25))*Math.pow(t.length,-1/3)))},t.thresholdScott=function(t,n,e){return Math.ceil((e-n)/(3.5*f(t)*Math.pow(t.length,-1/3)))},t.thresholdSturges=M,t.tickFormat=Gh,t.tickIncrement=x,t.tickStep=w,t.ticks=m,t.timeDay=Nd,t.timeDays=Td,t.timeFormatDefaultLocale=zv,t.timeFormatLocale=bp,t.timeFriday=zd,t.timeFridays=Bd,t.timeHour=wd,t.timeHours=Md,t.timeInterval=dd,t.timeMillisecond=pd,t.timeMilliseconds=vd,t.timeMinute=md,t.timeMinutes=xd,t.timeMonday=kd,t.timeMondays=qd,t.timeMonth=Yd,t.timeMonths=Id,t.timeSaturday=Rd,t.timeSaturdays=Fd,t.timeSecond=_d,t.timeSeconds=bd,t.timeSunday=Sd,t.timeSundays=Dd,t.timeThursday=Pd,t.timeThursdays=Od,t.timeTuesday=Ed,t.timeTuesdays=Ld,t.timeWednesday=Cd,t.timeWednesdays=Ud,t.timeWeek=Sd,t.timeWeeks=Dd,t.timeYear=Hd,t.timeYears=jd,t.timeout=yr,t.timer=hr,t.timerFlush=dr,t.touch=Ft,t.touches=function(t,n){null==n&&(n=Ut().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Ot(t,n[e]);return i},t.transition=Or,t.transpose=k,t.tree=function(){var t=ch,n=1,e=1,r=null;function i(i){var c=function(t){for(var n,e,r,i,o,a=new dh(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new dh(r[i],i)),e.parent=n;return(a.parent=new dh(null,0)).children=[a],a}(i);if(c.eachAfter(o),c.parent.m=-c.z,c.eachBefore(a),r)i.eachBefore(u);else{var f=i,s=i,l=i;i.eachBefore(function(t){t.x<f.x&&(f=t),t.x>s.x&&(s=t),t.depth>l.depth&&(l=t)});var h=f===s?1:t(f,s)/2,d=h-f.x,p=n/(s.x+h+d),v=e/(l.depth||1);i.eachBefore(function(t){t.x=(t.x+d)*p,t.y=t.depth*v})}return i}function o(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null;if(e){!function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)}(n);var o=(e[0].z+e[e.length-1].z)/2;i?(n.z=i.z+t(n._,i._),n.m=n.z-o):n.z=o}else i&&(n.z=i.z+t(n._,i._));n.parent.A=function(n,e,r){if(e){for(var i,o=n,a=n,u=e,c=o.parent.children[0],f=o.m,s=a.m,l=u.m,h=c.m;u=sh(u),o=fh(o),u&&o;)c=fh(c),(a=sh(a)).a=n,(i=u.z+l-o.z-f+t(u._,o._))>0&&(lh(hh(u,n,r),n,i),f+=i,s+=i),l+=u.m,f+=o.m,h+=c.m,s+=a.m;u&&!sh(a)&&(a.t=u,a.m+=l-s),o&&!fh(c)&&(c.t=o,c.m+=f-h,r=n)}return r}(n,i,n.parent.A||r[0])}function a(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function u(t){t.x*=n,t.y=t.depth*e}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.treemap=function(){var t=yh,n=!1,e=1,r=1,i=[0],o=Wl,a=Wl,u=Wl,c=Wl,f=Wl;function s(t){return t.x0=t.y0=0,t.x1=e,t.y1=r,t.eachBefore(l),i=[0],n&&t.eachBefore(nh),t}function l(n){var e=i[n.depth],r=n.x0+e,s=n.y0+e,l=n.x1-e,h=n.y1-e;l<r&&(r=l=(r+l)/2),h<s&&(s=h=(s+h)/2),n.x0=r,n.y0=s,n.x1=l,n.y1=h,n.children&&(e=i[n.depth+1]=o(n)/2,r+=f(n)-e,s+=a(n)-e,(l-=u(n)-e)<r&&(r=l=(r+l)/2),(h-=c(n)-e)<s&&(s=h=(s+h)/2),t(n,r,s,l,h))}return s.round=function(t){return arguments.length?(n=!!t,s):n},s.size=function(t){return arguments.length?(e=+t[0],r=+t[1],s):[e,r]},s.tile=function(n){return arguments.length?(t=$l(n),s):t},s.padding=function(t){return arguments.length?s.paddingInner(t).paddingOuter(t):s.paddingInner()},s.paddingInner=function(t){return arguments.length?(o="function"==typeof t?t:Zl(+t),s):o},s.paddingOuter=function(t){return arguments.length?s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):s.paddingTop()},s.paddingTop=function(t){return arguments.length?(a="function"==typeof t?t:Zl(+t),s):a},s.paddingRight=function(t){return arguments.length?(u="function"==typeof t?t:Zl(+t),s):u},s.paddingBottom=function(t){return arguments.length?(c="function"==typeof t?t:Zl(+t),s):c},s.paddingLeft=function(t){return arguments.length?(f="function"==typeof t?t:Zl(+t),s):f},s},t.treemapBinary=function(t,n,e,r,i){var o,a,u=t.children,c=u.length,f=new Array(c+1);for(f[0]=a=o=0;o<c;++o)f[o+1]=a+=u[o].value;!function t(n,e,r,i,o,a,c){if(n>=e-1){var s=u[n];return s.x0=i,s.y0=o,s.x1=a,void(s.y1=c)}for(var l=f[n],h=r/2+l,d=n+1,p=e-1;d<p;){var v=d+p>>>1;f[v]<h?d=v+1:p=v}h-f[d-1]<f[d]-h&&n+1<d&&--d;var g=f[d]-l,y=r-g;if(a-i>c-o){var _=(i*y+a*g)/r;t(n,d,g,i,o,_,c),t(d,e,y,_,o,a,c)}else{var b=(o*y+c*g)/r;t(n,d,g,i,o,a,b),t(d,e,y,i,b,a,c)}}(0,c,t.value,n,e,r,i)},t.treemapDice=eh,t.treemapResquarify=_h,t.treemapSlice=ph,t.treemapSliceDice=function(t,n,e,r,i){(1&t.depth?ph:eh)(t,n,e,r,i)},t.treemapSquarify=yh,t.tsv=sa,t.tsvFormat=Ko,t.tsvFormatBody=Jo,t.tsvFormatRow=na,t.tsvFormatRows=ta,t.tsvFormatValue=ea,t.tsvParse=Zo,t.tsvParseRows=Qo,t.utcDay=Wd,t.utcDays=Zd,t.utcFriday=rp,t.utcFridays=sp,t.utcHour=Gd,t.utcHours=$d,t.utcMillisecond=pd,t.utcMilliseconds=vd,t.utcMinute=Xd,t.utcMinutes=Vd,t.utcMonday=Jd,t.utcMondays=ap,t.utcMonth=hp,t.utcMonths=dp,t.utcSaturday=ip,t.utcSaturdays=lp,t.utcSecond=_d,t.utcSeconds=bd,t.utcSunday=Kd,t.utcSundays=op,t.utcThursday=ep,t.utcThursdays=fp,t.utcTuesday=tp,t.utcTuesdays=up,t.utcWednesday=np,t.utcWednesdays=cp,t.utcWeek=Kd,t.utcWeeks=op,t.utcYear=pp,t.utcYears=vp,t.values=function(t){var n=[];for(var e in t)n.push(t[e]);return n},t.variance=c,t.version="5.16.0",t.voronoi=function(){var t=sb,n=lb,e=null;function r(r){return new Vb(r.map(function(e,i){var o=[Math.round(t(e,i,r)/Ib)*Ib,Math.round(n(e,i,r)/Ib)*Ib];return o.index=i,o.data=e,o}),e)}return r.polygons=function(t){return r(t).polygons()},r.links=function(t){return r(t).links()},r.triangles=function(t){return r(t).triangles()},r.x=function(n){return arguments.length?(t="function"==typeof n?n:fb(+n),r):t},r.y=function(t){return arguments.length?(n="function"==typeof t?t:fb(+t),r):n},r.extent=function(t){return arguments.length?(e=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],r):e&&[[e[0][0],e[0][1]],[e[1][0],e[1][1]]]},r.size=function(t){return arguments.length?(e=null==t?null:[[0,0],[+t[0],+t[1]]],r):e&&[e[1][0]-e[0][0],e[1][1]-e[0][1]]},r},t.window=ct,t.xml=da,t.zip=function(){return k(arguments)},t.zoom=function(){var n,e,r=tm,i=nm,o=om,a=rm,u=im,c=[0,1/0],f=[[-1/0,-1/0],[1/0,1/0]],s=250,l=Ie,h=I("start","zoom","end"),d=500,p=150,v=0;function g(t){t.property("__zoom",em).on("wheel.zoom",M).on("mousedown.zoom",N).on("dblclick.zoom",T).filter(u).on("touchstart.zoom",A).on("touchmove.zoom",S).on("touchend.zoom touchcancel.zoom",k).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function y(t,n){return(n=Math.max(c[0],Math.min(c[1],n)))===t.k?t:new Wb(n,t.x,t.y)}function _(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Wb(t.k,r,i)}function b(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function m(t,n,e){t.on("start.zoom",function(){x(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){x(this,arguments).end()}).tween("zoom",function(){var t=this,r=arguments,o=x(t,r),a=i.apply(t,r),u=null==e?b(a):"function"==typeof e?e.apply(t,r):e,c=Math.max(a[1][0]-a[0][0],a[1][1]-a[0][1]),f=t.__zoom,s="function"==typeof n?n.apply(t,r):n,h=l(f.invert(u).concat(c/f.k),s.invert(u).concat(c/s.k));return function(t){if(1===t)t=s;else{var n=h(t),e=c/n[2];t=new Wb(e,u[0]-n[0]*e,u[1]-n[1]*e)}o.zoom(null,t)}})}function x(t,n,e){return!e&&t.__zooming||new w(t,n)}function w(t,n){this.that=t,this.args=n,this.active=0,this.extent=i.apply(t,n),this.taps=0}function M(){if(r.apply(this,arguments)){var t=x(this,arguments),n=this.__zoom,e=Math.max(c[0],Math.min(c[1],n.k*Math.pow(2,a.apply(this,arguments)))),i=Bt(this);if(t.wheel)t.mouse[0][0]===i[0]&&t.mouse[0][1]===i[1]||(t.mouse[1]=n.invert(t.mouse[0]=i)),clearTimeout(t.wheel);else{if(n.k===e)return;t.mouse=[i,n.invert(i)],Pr(this),t.start()}Jb(),t.wheel=setTimeout(function(){t.wheel=null,t.end()},p),t.zoom("mouse",o(_(y(n,e),t.mouse[0],t.mouse[1]),t.extent,f))}}function N(){if(!e&&r.apply(this,arguments)){var n=x(this,arguments,!0),i=Rt(t.event.view).on("mousemove.zoom",function(){if(Jb(),!n.moved){var e=t.event.clientX-u,r=t.event.clientY-c;n.moved=e*e+r*r>v}n.zoom("mouse",o(_(n.that.__zoom,n.mouse[0]=Bt(n.that),n.mouse[1]),n.extent,f))},!0).on("mouseup.zoom",function(){i.on("mousemove.zoom mouseup.zoom",null),jt(t.event.view,n.moved),Jb(),n.end()},!0),a=Bt(this),u=t.event.clientX,c=t.event.clientY;Ht(t.event.view),Kb(),n.mouse=[a,this.__zoom.invert(a)],Pr(this),n.start()}}function T(){if(r.apply(this,arguments)){var n=this.__zoom,e=Bt(this),a=n.invert(e),u=n.k*(t.event.shiftKey?.5:2),c=o(_(y(n,u),e,a),i.apply(this,arguments),f);Jb(),s>0?Rt(this).transition().duration(s).call(m,c,e):Rt(this).call(g.transform,c)}}function A(){if(r.apply(this,arguments)){var e,i,o,a,u=t.event.touches,c=u.length,f=x(this,arguments,t.event.changedTouches.length===c);for(Kb(),i=0;i<c;++i)a=[a=Ft(this,u,(o=u[i]).identifier),this.__zoom.invert(a),o.identifier],f.touch0?f.touch1||f.touch0[2]===a[2]||(f.touch1=a,f.taps=0):(f.touch0=a,e=!0,f.taps=1+!!n);n&&(n=clearTimeout(n)),e&&(f.taps<2&&(n=setTimeout(function(){n=null},d)),Pr(this),f.start())}}function S(){if(this.__zooming){var e,r,i,a,u=x(this,arguments),c=t.event.changedTouches,s=c.length;for(Jb(),n&&(n=clearTimeout(n)),u.taps=0,e=0;e<s;++e)i=Ft(this,c,(r=c[e]).identifier),u.touch0&&u.touch0[2]===r.identifier?u.touch0[0]=i:u.touch1&&u.touch1[2]===r.identifier&&(u.touch1[0]=i);if(r=u.that.__zoom,u.touch1){var l=u.touch0[0],h=u.touch0[1],d=u.touch1[0],p=u.touch1[1],v=(v=d[0]-l[0])*v+(v=d[1]-l[1])*v,g=(g=p[0]-h[0])*g+(g=p[1]-h[1])*g;r=y(r,Math.sqrt(v/g)),i=[(l[0]+d[0])/2,(l[1]+d[1])/2],a=[(h[0]+p[0])/2,(h[1]+p[1])/2]}else{if(!u.touch0)return;i=u.touch0[0],a=u.touch0[1]}u.zoom("touch",o(_(r,i,a),u.extent,f))}}function k(){if(this.__zooming){var n,r,i=x(this,arguments),o=t.event.changedTouches,a=o.length;for(Kb(),e&&clearTimeout(e),e=setTimeout(function(){e=null},d),n=0;n<a;++n)r=o[n],i.touch0&&i.touch0[2]===r.identifier?delete i.touch0:i.touch1&&i.touch1[2]===r.identifier&&delete i.touch1;if(i.touch1&&!i.touch0&&(i.touch0=i.touch1,delete i.touch1),i.touch0)i.touch0[1]=this.__zoom.invert(i.touch0[0]);else if(i.end(),2===i.taps){var u=Rt(this).on("dblclick.zoom");u&&u.apply(this,arguments)}}}return g.transform=function(t,n,e){var r=t.selection?t.selection():t;r.property("__zoom",em),t!==r?m(t,n,e):r.interrupt().each(function(){x(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},g.scaleBy=function(t,n,e){g.scaleTo(t,function(){var t=this.__zoom.k,e="function"==typeof n?n.apply(this,arguments):n;return t*e},e)},g.scaleTo=function(t,n,e){g.transform(t,function(){var t=i.apply(this,arguments),r=this.__zoom,a=null==e?b(t):"function"==typeof e?e.apply(this,arguments):e,u=r.invert(a),c="function"==typeof n?n.apply(this,arguments):n;return o(_(y(r,c),a,u),t,f)},e)},g.translateBy=function(t,n,e){g.transform(t,function(){return o(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof e?e.apply(this,arguments):e),i.apply(this,arguments),f)})},g.translateTo=function(t,n,e,r){g.transform(t,function(){var t=i.apply(this,arguments),a=this.__zoom,u=null==r?b(t):"function"==typeof r?r.apply(this,arguments):r;return o(Zb.translate(u[0],u[1]).scale(a.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof e?-e.apply(this,arguments):-e),t,f)},r)},w.prototype={start:function(){return 1==++this.active&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(delete this.that.__zooming,this.emit("end")),this},emit:function(t){kt(new $b(g,t,this.that.__zoom),h.apply,h,[t,this.that,this.args])}},g.wheelDelta=function(t){return arguments.length?(a="function"==typeof t?t:Gb(+t),g):a},g.filter=function(t){return arguments.length?(r="function"==typeof t?t:Gb(!!t),g):r},g.touchable=function(t){return arguments.length?(u="function"==typeof t?t:Gb(!!t),g):u},g.extent=function(t){return arguments.length?(i="function"==typeof t?t:Gb([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),g):i},g.scaleExtent=function(t){return arguments.length?(c[0]=+t[0],c[1]=+t[1],g):[c[0],c[1]]},g.translateExtent=function(t){return arguments.length?(f[0][0]=+t[0][0],f[1][0]=+t[1][0],f[0][1]=+t[0][1],f[1][1]=+t[1][1],g):[[f[0][0],f[0][1]],[f[1][0],f[1][1]]]},g.constrain=function(t){return arguments.length?(o=t,g):o},g.duration=function(t){return arguments.length?(s=+t,g):s},g.interpolate=function(t){return arguments.length?(l=t,g):l},g.on=function(){var t=h.on.apply(h,arguments);return t===h?g:t},g.clickDistance=function(t){return arguments.length?(v=(t=+t)*t,g):Math.sqrt(v)},g},t.zoomIdentity=Zb,t.zoomTransform=Qb,Object.defineProperty(t,"__esModule",{value:!0})});

/* @license C3.js v0.7.20 | (c) C3 Team and other contributors | http://c3js.org/ */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).c3=e()}(this,function(){"use strict";function l(t){var e=this;e.d3=window.d3?window.d3:"undefined"!=typeof require?require("d3"):void 0,e.api=t,e.config=e.getDefaultConfig(),e.data={},e.cache={},e.axes={}}function n(t){this.internal=new l(this),this.internal.loadConfig(t),this.internal.beforeInit(t),this.internal.init(),this.internal.afterInit(t),function e(i,n,r){Object.keys(i).forEach(function(t){n[t]=i[t].bind(r),0<Object.keys(i[t]).length&&e(i[t],n[t],r)})}(n.prototype,this,this)}function a(t){return Math.ceil(t)+.5}function r(t){return 10*Math.ceil(t/10)}function R(t){return t[1]-t[0]}function B(t,e,i){return k(t[e])?t[e]:i}function m(t){var e=d(t),i=[t.pathSegList.getItem(0),t.pathSegList.getItem(1)];return{x:i[0].x,y:Math.min(i[0].y,i[1].y),width:e.width,height:e.height}}function o(t){return Array.isArray(t)}function u(t){return null==t||g(t)&&0===t.length||"object"==typeof t&&0===Object.keys(t).length}function h(t){return"function"==typeof t}function s(t){return"number"==typeof t}function w(t){return void 0===t}function C(t){return t||0===t}function L(t){return!u(t)}function _(t){return"string"==typeof t?t.replace(/</g,"&lt;").replace(/>/g,"&gt;"):t}function c(t){var e=function(t){void 0===t&&(t=window.navigator.userAgent);var e=t.indexOf("MSIE ");return 0<e?parseInt(t.substring(e+5,t.indexOf(".",e)),10):0<(e=t.indexOf("Trident/"))&&(e=t.indexOf("rv:"),parseInt(t.substring(e+3,t.indexOf(".",e)),10))}();return void 0===t?!!e:t===e}var d=function(t){try{return t.getBBox()}catch(t){return{x:0,y:0,width:0,height:0}}},k=function(t){return void 0!==t},g=function(t){return"string"==typeof t};function e(t,e){var i=this;i.component=t,i.params=e||{},i.d3=t.d3,i.scale=i.d3.scaleLinear(),i.range,i.orient="bottom",i.innerTickSize=6,i.outerTickSize=this.params.withOuterTick?6:0,i.tickPadding=3,i.tickValues=null,i.tickFormat,i.tickArguments,i.tickOffset=0,i.tickCulling=!0,i.tickCentered,i.tickTextCharSize,i.tickTextRotate=i.params.tickTextRotate,i.tickLength,i.axis=i.generateAxis()}e.prototype.axisX=function(t,e,i){t.attr("transform",function(t){return"translate("+Math.ceil(e(t)+i)+", 0)"})},e.prototype.axisY=function(t,e){t.attr("transform",function(t){return"translate(0,"+Math.ceil(e(t))+")"})},e.prototype.scaleExtent=function(t){var e=t[0],i=t[t.length-1];return e<i?[e,i]:[i,e]},e.prototype.generateTicks=function(t){var e,i,n=[];if(t.ticks)return t.ticks.apply(t,this.tickArguments);for(i=t.domain(),e=Math.ceil(i[0]);e<i[1];e++)n.push(e);return 0<n.length&&0<n[0]&&n.unshift(n[0]-(n[1]-n[0])),n},e.prototype.copyScale=function(){var t,e=this.scale.copy();return this.params.isCategory&&(t=this.scale.domain(),e.domain([t[0],t[1]-1])),e},e.prototype.textFormatted=function(t){var e=this.tickFormat?this.tickFormat(t):t;return void 0!==e?e:""},e.prototype.updateRange=function(){var t=this;return t.range=t.scale.rangeExtent?t.scale.rangeExtent():t.scaleExtent(t.scale.range()),t.range},e.prototype.updateTickTextCharSize=function(t){var a=this;if(a.tickTextCharSize)return a.tickTextCharSize;var o={h:11.5,w:5.5};return t.select("text").text(function(t){return a.textFormatted(t)}).each(function(t){var e=d(this),i=a.textFormatted(t),n=e.height,r=i?e.width/i.length:void 0;n&&r&&(o.h=n,o.w=r)}).text(""),a.tickTextCharSize=o},e.prototype.isVertical=function(){return"left"===this.orient||"right"===this.orient},e.prototype.tspanData=function(t,e,i){var n=this,r=n.params.tickMultiline?n.splitTickText(t,i):[].concat(n.textFormatted(t));return n.params.tickMultiline&&0<n.params.tickMultilineMax&&(r=n.ellipsify(r,n.params.tickMultilineMax)),r.map(function(t){return{index:e,splitted:t,length:r.length}})},e.prototype.splitTickText=function(t,e){var r,a,o,s=this,i=s.textFormatted(t),c=s.params.tickWidth;if("[object Array]"===Object.prototype.toString.call(i))return i;return(!c||c<=0)&&(c=s.isVertical()?95:s.params.isCategory?Math.ceil(e(1)-e(0))-12:110),function t(e,i){a=void 0;for(var n=1;n<i.length;n++)if(" "===i.charAt(n)&&(a=n),r=i.substr(0,n+1),o=s.tickTextCharSize.w*r.length,c<o)return t(e.concat(i.substr(0,a||n)),i.slice(a?a+1:n));return e.concat(i)}([],i+"")},e.prototype.ellipsify=function(t,e){if(t.length<=e)return t;for(var i=t.slice(0,e),n=3,r=e-1;0<=r;r--){var a=i[r].length;if(i[r]=i[r].substr(0,a-n).padEnd(a,"."),(n-=a)<=0)break}return i},e.prototype.updateTickLength=function(){this.tickLength=Math.max(this.innerTickSize,0)+this.tickPadding},e.prototype.lineY2=function(t){var e=this,i=e.scale(t)+(e.tickCentered?0:e.tickOffset);return e.range[0]<i&&i<e.range[1]?e.innerTickSize:0},e.prototype.textY=function(){var t=this.tickTextRotate;return t?11.5-t/15*2.5*(0<t?1:-1):this.tickLength},e.prototype.textTransform=function(){var t=this.tickTextRotate;return t?"rotate("+t+")":""},e.prototype.textTextAnchor=function(){var t=this.tickTextRotate;return t?0<t?"start":"end":"middle"},e.prototype.tspanDx=function(){var t=this.tickTextRotate;return t?8*Math.sin(Math.PI*(t/180)):0},e.prototype.tspanDy=function(t,e){var i=this.tickTextCharSize.h;return 0===e&&(i=this.isVertical()?-((t.length-1)*(this.tickTextCharSize.h/2)-3):".71em"),i},e.prototype.generateAxis=function(){var w=this,v=w.d3,b=w.params;function T(t,m){var S;return t.each(function(){var t,e,i,n=T.g=v.select(this),r=this.__chart__||w.scale,a=this.__chart__=w.copyScale(),o=w.tickValues?w.tickValues:w.generateTicks(a),s=n.selectAll(".tick").data(o,a),c=s.enter().insert("g",".domain").attr("class","tick").style("opacity",1e-6),d=s.exit().remove(),l=s.merge(c);b.isCategory?(w.tickOffset=Math.ceil((a(1)-a(0))/2),e=w.tickCentered?0:w.tickOffset,i=w.tickCentered?w.tickOffset:0):w.tickOffset=e=0,w.updateRange(),w.updateTickLength(),w.updateTickTextCharSize(n.select(".tick"));var u=l.select("line").merge(c.append("line")),h=l.select("text").merge(c.append("text")),g=l.selectAll("text").selectAll("tspan").data(function(t,e){return w.tspanData(t,e,a)}),p=g.enter().append("tspan").merge(g).text(function(t){return t.splitted});g.exit().remove();var f,_,x=n.selectAll(".domain").data([0]),y=x.enter().append("path").merge(x).attr("class","domain");switch(w.orient){case"bottom":t=w.axisX,u.attr("x1",e).attr("x2",e).attr("y2",function(t,e){return w.lineY2(t,e)}),h.attr("x",0).attr("y",function(t,e){return w.textY(t,e)}).attr("transform",function(t,e){return w.textTransform(t,e)}).style("text-anchor",function(t,e){return w.textTextAnchor(t,e)}),p.attr("x",0).attr("dy",function(t,e){return w.tspanDy(t,e)}).attr("dx",function(t,e){return w.tspanDx(t,e)}),y.attr("d","M"+w.range[0]+","+w.outerTickSize+"V0H"+w.range[1]+"V"+w.outerTickSize);break;case"top":t=w.axisX,u.attr("x1",e).attr("x2",e).attr("y2",function(t,e){return-1*w.lineY2(t,e)}),h.attr("x",0).attr("y",function(t,e){return-1*w.textY(t,e)-(b.isCategory?2:w.tickLength-2)}).attr("transform",function(t,e){return w.textTransform(t,e)}).style("text-anchor",function(t,e){return w.textTextAnchor(t,e)}),p.attr("x",0).attr("dy",function(t,e){return w.tspanDy(t,e)}).attr("dx",function(t,e){return w.tspanDx(t,e)}),y.attr("d","M"+w.range[0]+","+-w.outerTickSize+"V0H"+w.range[1]+"V"+-w.outerTickSize);break;case"left":t=w.axisY,u.attr("x2",-w.innerTickSize).attr("y1",i).attr("y2",i),h.attr("x",-w.tickLength).attr("y",w.tickOffset).style("text-anchor","end"),p.attr("x",-w.tickLength).attr("dy",function(t,e){return w.tspanDy(t,e)}),y.attr("d","M"+-w.outerTickSize+","+w.range[0]+"H0V"+w.range[1]+"H"+-w.outerTickSize);break;case"right":t=w.axisY,u.attr("x2",w.innerTickSize).attr("y1",i).attr("y2",i),h.attr("x",w.tickLength).attr("y",w.tickOffset).style("text-anchor","start"),p.attr("x",w.tickLength).attr("dy",function(t,e){return w.tspanDy(t,e)}),y.attr("d","M"+w.outerTickSize+","+w.range[0]+"H0V"+w.range[1]+"H"+w.outerTickSize)}a.rangeBand?(_=(f=a).rangeBand()/2,r=a=function(t){return f(t)+_}):r.rangeBand?r=a:d.call(t,a,w.tickOffset),c.call(t,r,w.tickOffset),S=(m?l.transition(m):l).style("opacity",1).call(t,a,w.tickOffset)}),S}return T.scale=function(t){return arguments.length?(w.scale=t,T):w.scale},T.orient=function(t){return arguments.length?(w.orient=t in{top:1,right:1,bottom:1,left:1}?t+"":"bottom",T):w.orient},T.tickFormat=function(t){return arguments.length?(w.tickFormat=t,T):w.tickFormat},T.tickCentered=function(t){return arguments.length?(w.tickCentered=t,T):w.tickCentered},T.tickOffset=function(){return w.tickOffset},T.tickInterval=function(){var t=b.isCategory?2*w.tickOffset:(T.g.select("path.domain").node().getTotalLength()-2*w.outerTickSize)/T.g.selectAll("line").size();return t===1/0?0:t},T.ticks=function(){return arguments.length?(w.tickArguments=arguments,T):w.tickArguments},T.tickCulling=function(t){return arguments.length?(w.tickCulling=t,T):w.tickCulling},T.tickValues=function(t){if("function"==typeof t)w.tickValues=function(){return t(w.scale.domain())};else{if(!arguments.length)return w.tickValues;w.tickValues=t}return T},T};var Y={target:"c3-target",chart:"c3-chart",chartLine:"c3-chart-line",chartLines:"c3-chart-lines",chartBar:"c3-chart-bar",chartBars:"c3-chart-bars",chartText:"c3-chart-text",chartTexts:"c3-chart-texts",chartArc:"c3-chart-arc",chartArcs:"c3-chart-arcs",chartArcsTitle:"c3-chart-arcs-title",chartArcsBackground:"c3-chart-arcs-background",chartArcsGaugeUnit:"c3-chart-arcs-gauge-unit",chartArcsGaugeMax:"c3-chart-arcs-gauge-max",chartArcsGaugeMin:"c3-chart-arcs-gauge-min",selectedCircle:"c3-selected-circle",selectedCircles:"c3-selected-circles",eventRect:"c3-event-rect",eventRects:"c3-event-rects",eventRectsSingle:"c3-event-rects-single",eventRectsMultiple:"c3-event-rects-multiple",zoomRect:"c3-zoom-rect",brush:"c3-brush",dragZoom:"c3-drag-zoom",focused:"c3-focused",defocused:"c3-defocused",region:"c3-region",regions:"c3-regions",title:"c3-title",tooltipContainer:"c3-tooltip-container",tooltip:"c3-tooltip",tooltipName:"c3-tooltip-name",shape:"c3-shape",shapes:"c3-shapes",line:"c3-line",lines:"c3-lines",bar:"c3-bar",bars:"c3-bars",circle:"c3-circle",circles:"c3-circles",arc:"c3-arc",arcLabelLine:"c3-arc-label-line",arcs:"c3-arcs",area:"c3-area",areas:"c3-areas",empty:"c3-empty",text:"c3-text",texts:"c3-texts",gaugeValue:"c3-gauge-value",grid:"c3-grid",gridLines:"c3-grid-lines",xgrid:"c3-xgrid",xgrids:"c3-xgrids",xgridLine:"c3-xgrid-line",xgridLines:"c3-xgrid-lines",xgridFocus:"c3-xgrid-focus",ygrid:"c3-ygrid",ygrids:"c3-ygrids",ygridLine:"c3-ygrid-line",ygridLines:"c3-ygrid-lines",colorScale:"c3-colorscale",stanfordElements:"c3-stanford-elements",stanfordLine:"c3-stanford-line",stanfordLines:"c3-stanford-lines",stanfordRegion:"c3-stanford-region",stanfordRegions:"c3-stanford-regions",stanfordText:"c3-stanford-text",stanfordTexts:"c3-stanford-texts",axis:"c3-axis",axisX:"c3-axis-x",axisXLabel:"c3-axis-x-label",axisY:"c3-axis-y",axisYLabel:"c3-axis-y-label",axisY2:"c3-axis-y2",axisY2Label:"c3-axis-y2-label",legendBackground:"c3-legend-background",legendItem:"c3-legend-item",legendItemEvent:"c3-legend-item-event",legendItemTile:"c3-legend-item-tile",legendItemHidden:"c3-legend-item-hidden",legendItemFocused:"c3-legend-item-focused",dragarea:"c3-dragarea",EXPANDED:"_expanded_",SELECTED:"_selected_",INCLUDED:"_included_"},p=function(t){this.owner=t,this.d3=t.d3,this.internal=e},t=p;t.prototype.init=function(){var t=this.owner,e=t.config,i=t.main;t.axes.x=i.append("g").attr("class",Y.axis+" "+Y.axisX).attr("clip-path",e.axis_x_inner?"":t.clipPathForXAxis).attr("transform",t.getTranslate("x")).style("visibility",e.axis_x_show?"visible":"hidden"),t.axes.x.append("text").attr("class",Y.axisXLabel).attr("transform",e.axis_rotated?"rotate(-90)":"").style("text-anchor",this.textAnchorForXAxisLabel.bind(this)),t.axes.y=i.append("g").attr("class",Y.axis+" "+Y.axisY).attr("clip-path",e.axis_y_inner?"":t.clipPathForYAxis).attr("transform",t.getTranslate("y")).style("visibility",e.axis_y_show?"visible":"hidden"),t.axes.y.append("text").attr("class",Y.axisYLabel).attr("transform",e.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForYAxisLabel.bind(this)),t.axes.y2=i.append("g").attr("class",Y.axis+" "+Y.axisY2).attr("transform",t.getTranslate("y2")).style("visibility",e.axis_y2_show?"visible":"hidden"),t.axes.y2.append("text").attr("class",Y.axisY2Label).attr("transform",e.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForY2AxisLabel.bind(this))},t.prototype.getXAxis=function(t,e,i,n,r,a,o){var s=this.owner,c=s.config,d={isCategory:s.isCategorized(),withOuterTick:r,tickMultiline:c.axis_x_tick_multiline,tickMultilineMax:c.axis_x_tick_multiline?Number(c.axis_x_tick_multilineMax):0,tickWidth:c.axis_x_tick_width,tickTextRotate:o?0:c.axis_x_tick_rotate,withoutTransition:a},l=new this.internal(this,d).axis.scale(t).orient(e);return s.isTimeSeries()&&n&&"function"!=typeof n&&(n=n.map(function(t){return s.parseDate(t)})),l.tickFormat(i).tickValues(n),s.isCategorized()&&(l.tickCentered(c.axis_x_tick_centered),u(c.axis_x_tick_culling)&&(c.axis_x_tick_culling=!1)),l},t.prototype.updateXAxisTickValues=function(t,e){var i,n=this.owner,r=n.config;return(r.axis_x_tick_fit||r.axis_x_tick_count)&&(i=this.generateTickValues(n.mapTargetsToUniqueXs(t),r.axis_x_tick_count,n.isTimeSeries())),e?e.tickValues(i):(n.xAxis.tickValues(i),n.subXAxis.tickValues(i)),i},t.prototype.getYAxis=function(t,e,i,n,r,a,o){var s=this.owner,c=s.config,d=c["axis_"+t+"_tick_format"];!d&&s.isAxisNormalized(t)&&(d=function(t){return t+"%"});var l=new this.internal(this,{withOuterTick:r,withoutTransition:a,tickTextRotate:o?0:c.axis_y_tick_rotate}).axis.scale(e).orient(i);return d&&l.tickFormat(d),s.isTimeSeriesY()?l.ticks(c.axis_y_tick_time_type,c.axis_y_tick_time_interval):l.tickValues(n),l},t.prototype.getId=function(t){var e=this.owner.config;return t in e.data_axes?e.data_axes[t]:"y"},t.prototype.getXAxisTickFormat=function(){var e=this.owner,i=e.config,n=e.isTimeSeries()?e.defaultAxisTimeFormat:e.isCategorized()?e.categoryName:function(t){return t};return i.axis_x_tick_format&&(h(i.axis_x_tick_format)?n=i.axis_x_tick_format:e.isTimeSeries()&&(n=function(t){return t?e.axisTimeFormat(i.axis_x_tick_format)(t):""})),h(n)?function(t){return n.call(e,t)}:n},t.prototype.getTickValues=function(t,e){return t||(e?e.tickValues():void 0)},t.prototype.getXAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_x_tick_values,this.owner.xAxis)},t.prototype.getYAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y_tick_values,this.owner.yAxis)},t.prototype.getY2AxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y2_tick_values,this.owner.y2Axis)},t.prototype.getLabelOptionByAxisId=function(t){var e,i=this.owner.config;return"y"===t?e=i.axis_y_label:"y2"===t?e=i.axis_y2_label:"x"===t&&(e=i.axis_x_label),e},t.prototype.getLabelText=function(t){var e=this.getLabelOptionByAxisId(t);return g(e)?e:e?e.text:null},t.prototype.setLabelText=function(t,e){var i=this.owner.config,n=this.getLabelOptionByAxisId(t);g(n)?"y"===t?i.axis_y_label=e:"y2"===t?i.axis_y2_label=e:"x"===t&&(i.axis_x_label=e):n&&(n.text=e)},t.prototype.getLabelPosition=function(t,e){var i=this.getLabelOptionByAxisId(t),n=i&&"object"==typeof i&&i.position?i.position:e;return{isInner:0<=n.indexOf("inner"),isOuter:0<=n.indexOf("outer"),isLeft:0<=n.indexOf("left"),isCenter:0<=n.indexOf("center"),isRight:0<=n.indexOf("right"),isTop:0<=n.indexOf("top"),isMiddle:0<=n.indexOf("middle"),isBottom:0<=n.indexOf("bottom")}},t.prototype.getXAxisLabelPosition=function(){return this.getLabelPosition("x",this.owner.config.axis_rotated?"inner-top":"inner-right")},t.prototype.getYAxisLabelPosition=function(){return this.getLabelPosition("y",this.owner.config.axis_rotated?"inner-right":"inner-top")},t.prototype.getY2AxisLabelPosition=function(){return this.getLabelPosition("y2",this.owner.config.axis_rotated?"inner-right":"inner-top")},t.prototype.getLabelPositionById=function(t){return"y2"===t?this.getY2AxisLabelPosition():"y"===t?this.getYAxisLabelPosition():this.getXAxisLabelPosition()},t.prototype.textForXAxisLabel=function(){return this.getLabelText("x")},t.prototype.textForYAxisLabel=function(){return this.getLabelText("y")},t.prototype.textForY2AxisLabel=function(){return this.getLabelText("y2")},t.prototype.xForAxisLabel=function(t,e){var i=this.owner;return t?e.isLeft?0:e.isCenter?i.width/2:i.width:e.isBottom?-i.height:e.isMiddle?-i.height/2:0},t.prototype.dxForAxisLabel=function(t,e){return t?e.isLeft?"0.5em":e.isRight?"-0.5em":"0":e.isTop?"-0.5em":e.isBottom?"0.5em":"0"},t.prototype.textAnchorForAxisLabel=function(t,e){return t?e.isLeft?"start":e.isCenter?"middle":"end":e.isBottom?"start":e.isMiddle?"middle":"end"},t.prototype.xForXAxisLabel=function(){return this.xForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},t.prototype.xForYAxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},t.prototype.xForY2AxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},t.prototype.dxForXAxisLabel=function(){return this.dxForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},t.prototype.dxForYAxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},t.prototype.dxForY2AxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},t.prototype.dyForXAxisLabel=function(){var t=this.owner,e=t.config,i=this.getXAxisLabelPosition();return e.axis_rotated?i.isInner?"1.2em":-25-(t.config.axis_x_inner?0:this.getMaxTickWidth("x")):i.isInner?"-0.5em":t.getHorizontalAxisHeight("x")-10},t.prototype.dyForYAxisLabel=function(){var t=this.owner,e=this.getYAxisLabelPosition();return t.config.axis_rotated?e.isInner?"-0.5em":"3em":e.isInner?"1.2em":-10-(t.config.axis_y_inner?0:this.getMaxTickWidth("y")+10)},t.prototype.dyForY2AxisLabel=function(){var t=this.owner,e=this.getY2AxisLabelPosition();return t.config.axis_rotated?e.isInner?"1.2em":"-2.2em":e.isInner?"-0.5em":15+(t.config.axis_y2_inner?0:this.getMaxTickWidth("y2")+15)},t.prototype.textAnchorForXAxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(!t.config.axis_rotated,this.getXAxisLabelPosition())},t.prototype.textAnchorForYAxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated,this.getYAxisLabelPosition())},t.prototype.textAnchorForY2AxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated,this.getY2AxisLabelPosition())},t.prototype.getMaxTickWidth=function(t,e){var i,n,r,a,o=this.owner,s=0;return e&&o.currentMaxTickWidths[t]||(o.svg&&(i=o.filterTargetsToShow(o.data.targets),"y"===t?(n=o.y.copy().domain(o.getYDomain(i,"y")),r=this.getYAxis(t,n,o.yOrient,o.yAxisTickValues,!1,!0,!0)):"y2"===t?(n=o.y2.copy().domain(o.getYDomain(i,"y2")),r=this.getYAxis(t,n,o.y2Orient,o.y2AxisTickValues,!1,!0,!0)):(n=o.x.copy().domain(o.getXDomain(i)),r=this.getXAxis(n,o.xOrient,o.xAxisTickFormat,o.xAxisTickValues,!1,!0,!0),this.updateXAxisTickValues(i,r)),(a=o.d3.select("body").append("div").classed("c3",!0)).append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0).append("g").call(r).each(function(){o.d3.select(this).selectAll("text").each(function(){var t=d(this);s<t.width&&(s=t.width)}),a.remove()})),o.currentMaxTickWidths[t]=s<=0?o.currentMaxTickWidths[t]:s),o.currentMaxTickWidths[t]},t.prototype.updateLabels=function(t){var e=this.owner,i=e.main.select("."+Y.axisX+" ."+Y.axisXLabel),n=e.main.select("."+Y.axisY+" ."+Y.axisYLabel),r=e.main.select("."+Y.axisY2+" ."+Y.axisY2Label);(t?i.transition():i).attr("x",this.xForXAxisLabel.bind(this)).attr("dx",this.dxForXAxisLabel.bind(this)).attr("dy",this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)),(t?n.transition():n).attr("x",this.xForYAxisLabel.bind(this)).attr("dx",this.dxForYAxisLabel.bind(this)).attr("dy",this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)),(t?r.transition():r).attr("x",this.xForY2AxisLabel.bind(this)).attr("dx",this.dxForY2AxisLabel.bind(this)).attr("dy",this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this))},t.prototype.getPadding=function(t,e,i,n){var r="number"==typeof t?t:t[e];return C(r)?"ratio"===t.unit?t[e]*n:this.convertPixelsToAxisPadding(r,n):i},t.prototype.convertPixelsToAxisPadding=function(t,e){var i=this.owner;return e*(t/(i.config.axis_rotated?i.width:i.height))},t.prototype.generateTickValues=function(t,e,i){var n,r,a,o,s,c,d,l=t;if(e)if(1===(n=h(e)?e():e))l=[t[0]];else if(2===n)l=[t[0],t[t.length-1]];else if(2<n){for(o=n-2,r=t[0],s=((a=t[t.length-1])-r)/(1+o),l=[r],c=0;c<o;c++)d=+r+s*(c+1),l.push(i?new Date(d):d);l.push(a)}return i||(l=l.sort(function(t,e){return t-e})),l},t.prototype.generateTransitions=function(t){var e=this.owner.axes;return{axisX:t?e.x.transition().duration(t):e.x,axisY:t?e.y.transition().duration(t):e.y,axisY2:t?e.y2.transition().duration(t):e.y2,axisSubX:t?e.subx.transition().duration(t):e.subx}},t.prototype.redraw=function(t,e){var i=this.owner,n=t?i.d3.transition().duration(t):null;i.axes.x.style("opacity",e?0:1).call(i.xAxis,n),i.axes.y.style("opacity",e?0:1).call(i.yAxis,n),i.axes.y2.style("opacity",e?0:1).call(i.y2Axis,n),i.axes.subx.style("opacity",e?0:1).call(i.subXAxis,n)};var i={version:"0.7.20",chart:{fn:n.prototype,internal:{fn:l.prototype,axis:{fn:p.prototype,internal:{fn:e.prototype}}}},generate:function(t){return new n(t)}};function f(t,e,i){var n=[.01,10];function r(t){return i(e(t))}return e||(e=t.scaleLinear()).range(n),i||((i=t.scaleLog()).domain(n),i.nice()),r.domain=function(t){return arguments.length?(e.domain(t),r):e.domain()},r.range=function(t){return arguments.length?(i.range(t),r):i.range()},r.ticks=function(t){return function(t,e,i){var n,r,a,o;if(arguments.length<3)i=10;else if(0===i)return[];o=(e-t)/(r=i-1),a=t,(n=new Array(i))[0]=Math.pow(10,a);for(var s=1;s<r;s++)a+=o,n[s]=Math.pow(10,a);return n[r]=Math.pow(10,e),n}(-2,1,t||10).map(function(t){return e.invert(t)})},r.copy=function(){return f(t,e.copy(),i.copy())},r}function x(t){return t/Math.pow(10,Math.ceil(Math.log(t)/Math.LN10-1e-12))==1}l.prototype.beforeInit=function(){},l.prototype.afterInit=function(){},l.prototype.init=function(){var t=this,e=t.config;if(t.initParams(),e.data_url)t.convertUrlToData(e.data_url,e.data_mimeType,e.data_headers,e.data_keys,t.initWithData);else if(e.data_json)t.initWithData(t.convertJsonToData(e.data_json,e.data_keys));else if(e.data_rows)t.initWithData(t.convertRowsToData(e.data_rows));else{if(!e.data_columns)throw Error("url or json or rows or columns is required.");t.initWithData(t.convertColumnsToData(e.data_columns))}},l.prototype.initParams=function(){var t=this,e=t.d3,i=t.config;t.clipId="c3-"+(new Date).valueOf()+"-clip",t.clipIdForXAxis=t.clipId+"-xaxis",t.clipIdForYAxis=t.clipId+"-yaxis",t.clipIdForGrid=t.clipId+"-grid",t.clipIdForSubchart=t.clipId+"-subchart",t.clipPath=t.getClipPath(t.clipId),t.clipPathForXAxis=t.getClipPath(t.clipIdForXAxis),t.clipPathForYAxis=t.getClipPath(t.clipIdForYAxis),t.clipPathForGrid=t.getClipPath(t.clipIdForGrid),t.clipPathForSubchart=t.getClipPath(t.clipIdForSubchart),t.dragStart=null,t.dragging=!1,t.flowing=!1,t.cancelClick=!1,t.mouseover=void 0,t.transiting=!1,t.color=t.generateColor(),t.levelColor=t.generateLevelColor(),t.dataTimeParse=(i.data_xLocaltime?e.timeParse:e.utcParse)(t.config.data_xFormat),t.axisTimeFormat=i.axis_x_localtime?e.timeFormat:e.utcFormat,t.defaultAxisTimeFormat=function(t){return(t.getMilliseconds()?e.timeFormat(".%L"):t.getSeconds()?e.timeFormat(":%S"):t.getMinutes()?e.timeFormat("%I:%M"):t.getHours()?e.timeFormat("%I %p"):t.getDay()&&1!==t.getDate()||1!==t.getDate()||t.getMonth()?e.timeFormat("%-m/%-d"):e.timeFormat("%Y/%-m/%-d"))(t)},t.hiddenTargetIds=[],t.hiddenLegendIds=[],t.focusedTargetIds=[],t.defocusedTargetIds=[],t.xOrient=i.axis_rotated?i.axis_x_inner?"right":"left":i.axis_x_inner?"top":"bottom",t.yOrient=i.axis_rotated?i.axis_y_inner?"top":"bottom":i.axis_y_inner?"right":"left",t.y2Orient=i.axis_rotated?i.axis_y2_inner?"bottom":"top":i.axis_y2_inner?"left":"right",t.subXOrient=i.axis_rotated?"left":"bottom",t.isLegendRight="right"===i.legend_position,t.isLegendInset="inset"===i.legend_position,t.isLegendTop="top-left"===i.legend_inset_anchor||"top-right"===i.legend_inset_anchor,t.isLegendLeft="top-left"===i.legend_inset_anchor||"bottom-left"===i.legend_inset_anchor,t.legendStep=0,t.legendItemWidth=0,t.legendItemHeight=0,t.currentMaxTickWidths={x:0,y:0,y2:0},t.rotated_padding_left=30,t.rotated_padding_right=i.axis_rotated&&!i.axis_x_show?0:30,t.rotated_padding_top=5,t.withoutFadeIn={},t.intervalForObserveInserted=void 0,t.axes.subx=e.selectAll([])},l.prototype.initChartElements=function(){this.initBar&&this.initBar(),this.initLine&&this.initLine(),this.initArc&&this.initArc(),this.initGauge&&this.initGauge(),this.initText&&this.initText()},l.prototype.initWithData=function(t){var e,i,n=this,r=n.d3,a=n.config,o=!0;n.axis=new p(n),a.bindto?"function"==typeof a.bindto.node?n.selectChart=a.bindto:n.selectChart=r.select(a.bindto):n.selectChart=r.selectAll([]),n.selectChart.empty()&&(n.selectChart=r.select(document.createElement("div")).style("opacity",0),n.observeInserted(n.selectChart),o=!1),n.selectChart.html("").classed("c3",!0),n.data.xs={},n.data.targets=n.convertDataToTargets(t),a.data_filter&&(n.data.targets=n.data.targets.filter(a.data_filter)),a.data_hide&&n.addHiddenTargetIds(!0===a.data_hide?n.mapToIds(n.data.targets):a.data_hide),a.legend_hide&&n.addHiddenLegendIds(!0===a.legend_hide?n.mapToIds(n.data.targets):a.legend_hide),n.isStanfordGraphType()&&n.initStanfordData(),n.updateSizes(),n.updateScales(),n.x.domain(r.extent(n.getXDomain(n.data.targets))),n.y.domain(n.getYDomain(n.data.targets,"y")),n.y2.domain(n.getYDomain(n.data.targets,"y2")),n.subX.domain(n.x.domain()),n.subY.domain(n.y.domain()),n.subY2.domain(n.y2.domain()),n.orgXDomain=n.x.domain(),n.svg=n.selectChart.append("svg").style("overflow","hidden").on("mouseenter",function(){return a.onmouseover.call(n)}).on("mouseleave",function(){return a.onmouseout.call(n)}),n.config.svg_classname&&n.svg.attr("class",n.config.svg_classname),e=n.svg.append("defs"),n.clipChart=n.appendClip(e,n.clipId),n.clipXAxis=n.appendClip(e,n.clipIdForXAxis),n.clipYAxis=n.appendClip(e,n.clipIdForYAxis),n.clipGrid=n.appendClip(e,n.clipIdForGrid),n.clipSubchart=n.appendClip(e,n.clipIdForSubchart),n.updateSvgSize(),i=n.main=n.svg.append("g").attr("transform",n.getTranslate("main")),n.initPie&&n.initPie(),n.initDragZoom&&n.initDragZoom(),a.subchart_show&&n.initSubchart&&n.initSubchart(),n.initTooltip&&n.initTooltip(),n.initLegend&&n.initLegend(),n.initTitle&&n.initTitle(),n.initZoom&&n.initZoom(),n.isStanfordGraphType()&&n.drawColorScale(),a.subchart_show&&n.initSubchartBrush&&n.initSubchartBrush(),i.append("text").attr("class",Y.text+" "+Y.empty).attr("text-anchor","middle").attr("dominant-baseline","middle"),n.initRegion(),n.initGrid(),i.append("g").attr("clip-path",n.clipPath).attr("class",Y.chart),a.grid_lines_front&&n.initGridLines(),n.initStanfordElements(),n.initEventRect(),n.initChartElements(),n.axis.init(),n.updateTargets(n.data.targets),a.axis_x_selection&&n.brush.selectionAsValue(n.getDefaultSelection()),o&&(n.updateDimension(),n.config.oninit.call(n),n.redraw({withTransition:!1,withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransitionForAxis:!1})),n.bindResize(),n.bindWindowFocus(),n.api.element=n.selectChart.node()},l.prototype.smoothLines=function(t,e){var a=this;"grid"===e&&t.each(function(){var t=a.d3.select(this),e=t.attr("x1"),i=t.attr("x2"),n=t.attr("y1"),r=t.attr("y2");t.attr({x1:Math.ceil(e),x2:Math.ceil(i),y1:Math.ceil(n),y2:Math.ceil(r)})})},l.prototype.updateSizes=function(){var t=this,e=t.config,i=t.legend?t.getLegendHeight():0,n=t.legend?t.getLegendWidth():0,r=t.isLegendRight||t.isLegendInset?0:i,a=t.hasArcType(),o=e.axis_rotated||a?0:t.getHorizontalAxisHeight("x"),s=e.axis_rotated||a?0:t.getHorizontalAxisHeight("x",!0),c=e.subchart_show&&!a?e.subchart_size_height+s:0;t.currentWidth=t.getCurrentWidth(),t.currentHeight=t.getCurrentHeight(),t.margin=e.axis_rotated?{top:t.getHorizontalAxisHeight("y2")+t.getCurrentPaddingTop(),right:a?0:t.getCurrentPaddingRight(),bottom:t.getHorizontalAxisHeight("y")+r+t.getCurrentPaddingBottom(),left:c+(a?0:t.getCurrentPaddingLeft())}:{top:4+t.getCurrentPaddingTop(),right:a?0:t.getCurrentPaddingRight(),bottom:o+c+r+t.getCurrentPaddingBottom(),left:a?0:t.getCurrentPaddingLeft()},t.margin2=e.axis_rotated?{top:t.margin.top,right:NaN,bottom:20+r,left:t.rotated_padding_left}:{top:t.currentHeight-c-r,right:NaN,bottom:s+r,left:t.margin.left},t.margin3={top:0,right:NaN,bottom:0,left:0},t.updateSizeForLegend&&t.updateSizeForLegend(i,n),t.width=t.currentWidth-t.margin.left-t.margin.right,t.height=t.currentHeight-t.margin.top-t.margin.bottom,t.width<0&&(t.width=0),t.height<0&&(t.height=0),t.width2=e.axis_rotated?t.margin.left-t.rotated_padding_left-t.rotated_padding_right:t.width,t.height2=e.axis_rotated?t.height:t.currentHeight-t.margin2.top-t.margin2.bottom,t.width2<0&&(t.width2=0),t.height2<0&&(t.height2=0),t.arcWidth=t.width-(t.isLegendRight?n+10:0),t.arcHeight=t.height-(t.isLegendRight?0:10),t.hasType("gauge")&&!e.gauge_fullCircle&&(t.arcHeight+=t.height-t.getGaugeLabelHeight()),t.updateRadius&&t.updateRadius(),t.isLegendRight&&a&&(t.margin3.left=t.arcWidth/2+1.1*t.radiusExpanded)},l.prototype.updateTargets=function(t){var e=this,i=e.config;e.updateTargetsForText(t),e.updateTargetsForBar(t),e.updateTargetsForLine(t),e.hasArcType()&&e.updateTargetsForArc&&e.updateTargetsForArc(t),i.subchart_show&&e.updateTargetsForSubchart&&e.updateTargetsForSubchart(t),e.showTargets()},l.prototype.showTargets=function(){var e=this;e.svg.selectAll("."+Y.target).filter(function(t){return e.isTargetToShow(t.id)}).transition().duration(e.config.transition_duration).style("opacity",1)},l.prototype.redraw=function(t,e){var i,n,r,a,o,s,c,d,l,u,h,g,p,f,_,x=this,y=x.main,m=x.d3,S=x.config,w=x.getShapeIndices(x.isAreaType),v=x.getShapeIndices(x.isBarType),b=x.getShapeIndices(x.isLineType),T=x.hasArcType(),A=x.filterTargetsToShow(x.data.targets),P=x.xv.bind(x),C=B(t=t||{},"withY",!0),L=B(t,"withSubchart",!0),V=B(t,"withTransition",!0),G=B(t,"withTransform",!1),E=B(t,"withUpdateXDomain",!1),O=B(t,"withUpdateOrgXDomain",!1),I=B(t,"withTrimXDomain",!0),R=B(t,"withUpdateXAxis",E),k=B(t,"withLegend",!1),F=B(t,"withEventRect",!0),D=B(t,"withDimension",!0),X=B(t,"withTransitionForExit",V),M=B(t,"withTransitionForAxis",V),z=V?S.transition_duration:0,H=X?z:0,N=M?z:0;if(e=e||x.axis.generateTransitions(N),k&&S.legend_show?x.updateLegend(x.mapToIds(x.data.targets),t,e):D&&x.updateDimension(!0),x.isCategorized()&&0===A.length&&x.x.domain([0,x.axes.x.selectAll(".tick").size()]),A.length?(x.updateXDomain(A,E,O,I),S.axis_x_tick_values||(u=x.axis.updateXAxisTickValues(A))):(x.xAxis.tickValues([]),x.subXAxis.tickValues([])),S.zoom_rescale&&!t.flow&&(p=x.x.orgDomain()),x.y.domain(x.getYDomain(A,"y",p)),x.y2.domain(x.getYDomain(A,"y2",p)),!S.axis_y_tick_values&&S.axis_y_tick_count&&x.yAxis.tickValues(x.axis.generateTickValues(x.y.domain(),S.axis_y_tick_count)),!S.axis_y2_tick_values&&S.axis_y2_tick_count&&x.y2Axis.tickValues(x.axis.generateTickValues(x.y2.domain(),S.axis_y2_tick_count)),x.axis.redraw(N,T),x.axis.updateLabels(V),(E||R)&&A.length)if(S.axis_x_tick_culling&&u){for(h=1;h<u.length;h++)if(u.length/h<S.axis_x_tick_culling_max){g=h;break}x.svg.selectAll("."+Y.axisX+" .tick text").each(function(t){var e=u.indexOf(t);0<=e&&m.select(this).style("display",e%g?"none":"block")})}else x.svg.selectAll("."+Y.axisX+" .tick text").style("display","block");i=x.generateDrawArea?x.generateDrawArea(w,!1):void 0,n=x.generateDrawBar?x.generateDrawBar(v):void 0,r=x.generateDrawLine?x.generateDrawLine(b,!1):void 0,a=x.generateXYForText(w,v,b,!0),o=x.generateXYForText(w,v,b,!1),x.updateCircleY(),f=(x.config.axis_rotated?x.circleY:x.circleX).bind(x),_=(x.config.axis_rotated?x.circleX:x.circleY).bind(x),C&&(x.subY.domain(x.getYDomain(A,"y")),x.subY2.domain(x.getYDomain(A,"y2"))),x.updateXgridFocus(),y.select("text."+Y.text+"."+Y.empty).attr("x",x.width/2).attr("y",x.height/2).text(S.data_empty_label_text).transition().style("opacity",A.length?0:1),F&&x.redrawEventRect(),x.updateGrid(z),x.updateStanfordElements(z),x.updateRegion(z),x.updateBar(H),x.updateLine(H),x.updateArea(H),x.updateCircle(f,_),x.hasDataLabel()&&x.updateText(a,o,H),x.redrawTitle&&x.redrawTitle(),x.redrawArc&&x.redrawArc(z,H,G),S.subchart_show&&x.redrawSubchart&&x.redrawSubchart(L,e,z,H,w,v,b),x.isStanfordGraphType()&&x.drawColorScale(),y.selectAll("."+Y.selectedCircles).filter(x.isBarType.bind(x)).selectAll("circle").remove(),t.flow&&(d=x.generateFlow({targets:A,flow:t.flow,duration:t.flow.duration,drawBar:n,drawLine:r,drawArea:i,cx:f,cy:_,xv:P,xForText:a,yForText:o})),z&&x.isTabVisible()?(l=m.transition().duration(z),s=[],[x.redrawBar(n,!0,l),x.redrawLine(r,!0,l),x.redrawArea(i,!0,l),x.redrawCircle(f,_,!0,l),x.redrawText(a,o,t.flow,!0,l),x.redrawRegion(!0,l),x.redrawGrid(!0,l)].forEach(function(t){t.forEach(function(t){s.push(t)})}),c=x.generateWait(),s.forEach(function(t){c.add(t)}),c(function(){d&&d(),S.onrendered&&S.onrendered.call(x)})):(x.redrawBar(n),x.redrawLine(r),x.redrawArea(i),x.redrawCircle(f,_),x.redrawText(a,o,t.flow),x.redrawRegion(),x.redrawGrid(),d&&d(),S.onrendered&&S.onrendered.call(x)),x.mapToIds(x.data.targets).forEach(function(t){x.withoutFadeIn[t]=!0})},l.prototype.updateAndRedraw=function(t){var e,i=this,n=i.config;(t=t||{}).withTransition=B(t,"withTransition",!0),t.withTransform=B(t,"withTransform",!1),t.withLegend=B(t,"withLegend",!1),t.withUpdateXDomain=B(t,"withUpdateXDomain",!0),t.withUpdateOrgXDomain=B(t,"withUpdateOrgXDomain",!0),t.withTransitionForExit=!1,t.withTransitionForTransform=B(t,"withTransitionForTransform",t.withTransition),i.updateSizes(),t.withLegend&&n.legend_show||(e=i.axis.generateTransitions(t.withTransitionForAxis?n.transition_duration:0),i.updateScales(),i.updateSvgSize(),i.transformAll(t.withTransitionForTransform,e)),i.redraw(t,e)},l.prototype.redrawWithoutRescale=function(){this.redraw({withY:!1,withSubchart:!1,withEventRect:!1,withTransitionForAxis:!1})},l.prototype.isTimeSeries=function(){return"timeseries"===this.config.axis_x_type},l.prototype.isCategorized=function(){return 0<=this.config.axis_x_type.indexOf("categor")},l.prototype.isCustomX=function(){var t=this.config;return!this.isTimeSeries()&&(t.data_x||L(t.data_xs))},l.prototype.isTimeSeriesY=function(){return"timeseries"===this.config.axis_y_type},l.prototype.getTranslate=function(t){var e,i,n=this,r=n.config;return"main"===t?(e=a(n.margin.left),i=a(n.margin.top)):"context"===t?(e=a(n.margin2.left),i=a(n.margin2.top)):"legend"===t?(e=n.margin3.left,i=n.margin3.top):"x"===t?(e=0,i=r.axis_rotated?0:n.height):"y"===t?(e=0,i=r.axis_rotated?n.height:0):"y2"===t?(e=r.axis_rotated?0:n.width,i=r.axis_rotated?1:0):"subx"===t?(e=0,i=r.axis_rotated?0:n.height2):"arc"===t&&(e=n.arcWidth/2,i=n.arcHeight/2-(n.hasType("gauge")?6:0)),"translate("+e+","+i+")"},l.prototype.initialOpacity=function(t){return null!==t.value&&this.withoutFadeIn[t.id]?1:0},l.prototype.initialOpacityForCircle=function(t){return null!==t.value&&this.withoutFadeIn[t.id]?this.opacityForCircle(t):0},l.prototype.opacityForCircle=function(t){var e=(h(this.config.point_show)?this.config.point_show(t):this.config.point_show)||this.isStanfordType(t)?1:0;return C(t.value)?this.isScatterType(t)?.5:e:0},l.prototype.opacityForText=function(){return this.hasDataLabel()?1:0},l.prototype.xx=function(t){return t?this.x(t.x):null},l.prototype.xvCustom=function(t,e){var i=this,n=e?t[e]:t.value;return i.isTimeSeries()?n=i.parseDate(t.value):i.isCategorized()&&"string"==typeof t.value&&(n=i.config.axis_x_categories.indexOf(t.value)),Math.ceil(i.x(n))},l.prototype.yvCustom=function(t,e){var i=t.axis&&"y2"===t.axis?this.y2:this.y,n=e?t[e]:t.value;return Math.ceil(i(n))},l.prototype.xv=function(t){var e=this,i=t.value;return e.isTimeSeries()?i=e.parseDate(t.value):e.isCategorized()&&"string"==typeof t.value&&(i=e.config.axis_x_categories.indexOf(t.value)),Math.ceil(e.x(i))},l.prototype.yv=function(t){var e=t.axis&&"y2"===t.axis?this.y2:this.y;return Math.ceil(e(t.value))},l.prototype.subxx=function(t){return t?this.subX(t.x):null},l.prototype.transformMain=function(t,e){var i,n,r,a=this;e&&e.axisX?i=e.axisX:(i=a.main.select("."+Y.axisX),t&&(i=i.transition())),e&&e.axisY?n=e.axisY:(n=a.main.select("."+Y.axisY),t&&(n=n.transition())),e&&e.axisY2?r=e.axisY2:(r=a.main.select("."+Y.axisY2),t&&(r=r.transition())),(t?a.main.transition():a.main).attr("transform",a.getTranslate("main")),i.attr("transform",a.getTranslate("x")),n.attr("transform",a.getTranslate("y")),r.attr("transform",a.getTranslate("y2")),a.main.select("."+Y.chartArcs).attr("transform",a.getTranslate("arc"))},l.prototype.transformAll=function(t,e){var i=this;i.transformMain(t,e),i.config.subchart_show&&i.transformContext(t,e),i.legend&&i.transformLegend(t)},l.prototype.updateSvgSize=function(){var t=this,e=t.svg.select("."+Y.brush+" .overlay");t.svg.attr("width",t.currentWidth).attr("height",t.currentHeight),t.svg.selectAll(["#"+t.clipId,"#"+t.clipIdForGrid]).select("rect").attr("width",t.width).attr("height",t.height),t.svg.select("#"+t.clipIdForXAxis).select("rect").attr("x",t.getXAxisClipX.bind(t)).attr("y",t.getXAxisClipY.bind(t)).attr("width",t.getXAxisClipWidth.bind(t)).attr("height",t.getXAxisClipHeight.bind(t)),t.svg.select("#"+t.clipIdForYAxis).select("rect").attr("x",t.getYAxisClipX.bind(t)).attr("y",t.getYAxisClipY.bind(t)).attr("width",t.getYAxisClipWidth.bind(t)).attr("height",t.getYAxisClipHeight.bind(t)),t.svg.select("#"+t.clipIdForSubchart).select("rect").attr("width",t.width).attr("height",e.size()&&e.attr("height")||0),t.selectChart.style("max-height",t.currentHeight+"px")},l.prototype.updateDimension=function(t){var e=this;t||(e.config.axis_rotated?(e.axes.x.call(e.xAxis),e.axes.subx.call(e.subXAxis)):(e.axes.y.call(e.yAxis),e.axes.y2.call(e.y2Axis))),e.updateSizes(),e.updateScales(),e.updateSvgSize(),e.transformAll(!1)},l.prototype.observeInserted=function(e){var i,n=this;"undefined"!=typeof MutationObserver?(i=new MutationObserver(function(t){t.forEach(function(t){"childList"===t.type&&t.previousSibling&&(i.disconnect(),n.intervalForObserveInserted=window.setInterval(function(){e.node().parentNode&&(window.clearInterval(n.intervalForObserveInserted),n.updateDimension(),n.brush&&n.brush.update(),n.config.oninit.call(n),n.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),e.transition().style("opacity",1))},10))})})).observe(e.node(),{attributes:!0,childList:!0,characterData:!0}):window.console.error("MutationObserver not defined.")},l.prototype.bindResize=function(){var t=this,e=t.config;t.resizeFunction=t.generateResize(),t.resizeFunction.add(function(){e.onresize.call(t)}),e.resize_auto&&t.resizeFunction.add(function(){void 0!==t.resizeTimeout&&window.clearTimeout(t.resizeTimeout),t.resizeTimeout=window.setTimeout(function(){delete t.resizeTimeout,t.updateAndRedraw({withUpdateXDomain:!1,withUpdateOrgXDomain:!1,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),t.brush&&t.brush.update()},100)}),t.resizeFunction.add(function(){e.onresized.call(t)}),t.resizeIfElementDisplayed=function(){null!=t.api&&t.api.element.offsetParent&&t.resizeFunction()},window.addEventListener("resize",t.resizeIfElementDisplayed,!1)},l.prototype.bindWindowFocus=function(){var t=this;this.windowFocusHandler||(this.windowFocusHandler=function(){t.redraw()},window.addEventListener("focus",this.windowFocusHandler))},l.prototype.unbindWindowFocus=function(){window.removeEventListener("focus",this.windowFocusHandler),delete this.windowFocusHandler},l.prototype.generateResize=function(){var i=[];function t(){i.forEach(function(t){t()})}return t.add=function(t){i.push(t)},t.remove=function(t){for(var e=0;e<i.length;e++)if(i[e]===t){i.splice(e,1);break}},t},l.prototype.endall=function(t,e){var i=0;t.each(function(){++i}).on("end",function(){--i||e.apply(this,arguments)})},l.prototype.generateWait=function(){function t(t){var i=setInterval(function(){var e;n.isTabVisible()&&(e=0,r.forEach(function(t){if(t.empty())e+=1;else try{t.transition()}catch(t){e+=1}}),e===r.length&&(clearInterval(i),t&&t()))},50)}var n=this,r=[];return t.add=function(t){r.push(t)},t},l.prototype.parseDate=function(t){var e;return t instanceof Date?e=t:"string"==typeof t?e=this.dataTimeParse(t):"object"!=typeof t&&("number"!=typeof t||isNaN(t))||(e=new Date(+t)),e&&!isNaN(+e)||window.console.error("Failed to parse x '"+t+"' to Date object"),e},l.prototype.isTabVisible=function(){return!document.hidden},l.prototype.getPathBox=m,l.prototype.CLASS=Y,"SVGPathSeg"in window||(window.SVGPathSeg=function(t,e,i){this.pathSegType=t,this.pathSegTypeAsLetter=e,this._owningPathSegList=i},window.SVGPathSeg.prototype.classname="SVGPathSeg",window.SVGPathSeg.PATHSEG_UNKNOWN=0,window.SVGPathSeg.PATHSEG_CLOSEPATH=1,window.SVGPathSeg.PATHSEG_MOVETO_ABS=2,window.SVGPathSeg.PATHSEG_MOVETO_REL=3,window.SVGPathSeg.PATHSEG_LINETO_ABS=4,window.SVGPathSeg.PATHSEG_LINETO_REL=5,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS=6,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL=7,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS=8,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL=9,window.SVGPathSeg.PATHSEG_ARC_ABS=10,window.SVGPathSeg.PATHSEG_ARC_REL=11,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS=12,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL=13,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS=14,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL=15,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS=16,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL=17,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS=18,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL=19,window.SVGPathSeg.prototype._segmentChanged=function(){this._owningPathSegList&&this._owningPathSegList.segmentChanged(this)},window.SVGPathSegClosePath=function(t){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CLOSEPATH,"z",t)},window.SVGPathSegClosePath.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegClosePath.prototype.toString=function(){return"[object SVGPathSegClosePath]"},window.SVGPathSegClosePath.prototype._asPathString=function(){return this.pathSegTypeAsLetter},window.SVGPathSegClosePath.prototype.clone=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathSegMovetoAbs=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_ABS,"M",t),this._x=e,this._y=i},window.SVGPathSegMovetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoAbs.prototype.toString=function(){return"[object SVGPathSegMovetoAbs]"},window.SVGPathSegMovetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoAbs.prototype.clone=function(){return new window.SVGPathSegMovetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegMovetoRel=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_REL,"m",t),this._x=e,this._y=i},window.SVGPathSegMovetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoRel.prototype.toString=function(){return"[object SVGPathSegMovetoRel]"},window.SVGPathSegMovetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoRel.prototype.clone=function(){return new window.SVGPathSegMovetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoAbs=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_ABS,"L",t),this._x=e,this._y=i},window.SVGPathSegLinetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoAbs.prototype.toString=function(){return"[object SVGPathSegLinetoAbs]"},window.SVGPathSegLinetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoAbs.prototype.clone=function(){return new window.SVGPathSegLinetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoRel=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_REL,"l",t),this._x=e,this._y=i},window.SVGPathSegLinetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoRel.prototype.toString=function(){return"[object SVGPathSegLinetoRel]"},window.SVGPathSegLinetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoRel.prototype.clone=function(){return new window.SVGPathSegLinetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicAbs=function(t,e,i,n,r,a,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,"C",t),this._x=e,this._y=i,this._x1=n,this._y1=r,this._x2=a,this._y2=o},window.SVGPathSegCurvetoCubicAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicAbs]"},window.SVGPathSegCurvetoCubicAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicAbs(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicRel=function(t,e,i,n,r,a,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,"c",t),this._x=e,this._y=i,this._x1=n,this._y1=r,this._x2=a,this._y2=o},window.SVGPathSegCurvetoCubicRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicRel]"},window.SVGPathSegCurvetoCubicRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicRel(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticAbs=function(t,e,i,n,r){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,"Q",t),this._x=e,this._y=i,this._x1=n,this._y1=r},window.SVGPathSegCurvetoQuadraticAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticAbs]"},window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticRel=function(t,e,i,n,r){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,"q",t),this._x=e,this._y=i,this._x1=n,this._y1=r},window.SVGPathSegCurvetoQuadraticRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticRel]"},window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticRel(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcAbs=function(t,e,i,n,r,a,o,s){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_ABS,"A",t),this._x=e,this._y=i,this._r1=n,this._r2=r,this._angle=a,this._largeArcFlag=o,this._sweepFlag=s},window.SVGPathSegArcAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcAbs.prototype.toString=function(){return"[object SVGPathSegArcAbs]"},window.SVGPathSegArcAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcAbs.prototype.clone=function(){return new window.SVGPathSegArcAbs(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcRel=function(t,e,i,n,r,a,o,s){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_REL,"a",t),this._x=e,this._y=i,this._r1=n,this._r2=r,this._angle=a,this._largeArcFlag=o,this._sweepFlag=s},window.SVGPathSegArcRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcRel.prototype.toString=function(){return"[object SVGPathSegArcRel]"},window.SVGPathSegArcRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcRel.prototype.clone=function(){return new window.SVGPathSegArcRel(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalAbs=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,"H",t),this._x=e},window.SVGPathSegLinetoHorizontalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalAbs]"},window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalAbs(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalRel=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,"h",t),this._x=e},window.SVGPathSegLinetoHorizontalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalRel.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalRel]"},window.SVGPathSegLinetoHorizontalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalRel.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalRel(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalAbs=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,"V",t),this._y=e},window.SVGPathSegLinetoVerticalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalAbs]"},window.SVGPathSegLinetoVerticalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalAbs(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalRel=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,"v",t),this._y=e},window.SVGPathSegLinetoVerticalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalRel.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalRel]"},window.SVGPathSegLinetoVerticalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalRel.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalRel(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothAbs=function(t,e,i,n,r){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,"S",t),this._x=e,this._y=i,this._x2=n,this._y2=r},window.SVGPathSegCurvetoCubicSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothAbs]"},window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothRel=function(t,e,i,n,r){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,"s",t),this._x=e,this._y=i,this._x2=n,this._y2=r},window.SVGPathSegCurvetoCubicSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothRel]"},window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothAbs=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,"T",t),this._x=e,this._y=i},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothAbs]"},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothRel=function(t,e,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,"t",t),this._x=e,this._y=i},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothRel]"},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathElement.prototype.createSVGPathSegClosePath=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathElement.prototype.createSVGPathSegMovetoAbs=function(t,e){return new window.SVGPathSegMovetoAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegMovetoRel=function(t,e){return new window.SVGPathSegMovetoRel(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegLinetoAbs=function(t,e){return new window.SVGPathSegLinetoAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegLinetoRel=function(t,e){return new window.SVGPathSegLinetoRel(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs=function(t,e,i,n,r,a){return new window.SVGPathSegCurvetoCubicAbs(void 0,t,e,i,n,r,a)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel=function(t,e,i,n,r,a){return new window.SVGPathSegCurvetoCubicRel(void 0,t,e,i,n,r,a)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs=function(t,e,i,n){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel=function(t,e,i,n){return new window.SVGPathSegCurvetoQuadraticRel(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegArcAbs=function(t,e,i,n,r,a,o){return new window.SVGPathSegArcAbs(void 0,t,e,i,n,r,a,o)},window.SVGPathElement.prototype.createSVGPathSegArcRel=function(t,e,i,n,r,a,o){return new window.SVGPathSegArcRel(void 0,t,e,i,n,r,a,o)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs=function(t){return new window.SVGPathSegLinetoHorizontalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel=function(t){return new window.SVGPathSegLinetoHorizontalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs=function(t){return new window.SVGPathSegLinetoVerticalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel=function(t){return new window.SVGPathSegLinetoVerticalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs=function(t,e,i,n){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel=function(t,e,i,n){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,t,e,i,n)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs=function(t,e){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel=function(t,e){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,t,e)},"getPathSegAtLength"in window.SVGPathElement.prototype||(window.SVGPathElement.prototype.getPathSegAtLength=function(t){if(void 0===t||!isFinite(t))throw"Invalid arguments.";var e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("d",this.getAttribute("d"));var i=e.pathSegList.numberOfItems-1;if(i<=0)return 0;do{if(e.pathSegList.removeItem(i),t>e.getTotalLength())break;i--}while(0<i);return i})),"SVGPathSegList"in window||(window.SVGPathSegList=function(t){this._pathElement=t,this._list=this._parsePath(this._pathElement.getAttribute("d")),this._mutationObserverConfig={attributes:!0,attributeFilter:["d"]},this._pathElementMutationObserver=new MutationObserver(this._updateListFromPathMutations.bind(this)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.classname="SVGPathSegList",Object.defineProperty(window.SVGPathSegList.prototype,"numberOfItems",{get:function(){return this._checkPathSynchronizedToList(),this._list.length},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"pathSegList",{get:function(){return this._pathSegList||(this._pathSegList=new window.SVGPathSegList(this)),this._pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"normalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedNormalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),window.SVGPathSegList.prototype._checkPathSynchronizedToList=function(){this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())},window.SVGPathSegList.prototype._updateListFromPathMutations=function(t){var e;this._pathElement&&(e=!1,t.forEach(function(t){"d"==t.attributeName&&(e=!0)}),e&&(this._list=this._parsePath(this._pathElement.getAttribute("d"))))},window.SVGPathSegList.prototype._writeListToPath=function(){this._pathElementMutationObserver.disconnect(),this._pathElement.setAttribute("d",window.SVGPathSegList._pathSegArrayAsString(this._list)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.segmentChanged=function(t){this._writeListToPath()},window.SVGPathSegList.prototype.clear=function(){this._checkPathSynchronizedToList(),this._list.forEach(function(t){t._owningPathSegList=null}),this._list=[],this._writeListToPath()},window.SVGPathSegList.prototype.initialize=function(t){return this._checkPathSynchronizedToList(),this._list=[t],(t._owningPathSegList=this)._writeListToPath(),t},window.SVGPathSegList.prototype._checkValidIndex=function(t){if(isNaN(t)||t<0||t>=this.numberOfItems)throw"INDEX_SIZE_ERR"},window.SVGPathSegList.prototype.getItem=function(t){return this._checkPathSynchronizedToList(),this._checkValidIndex(t),this._list[t]},window.SVGPathSegList.prototype.insertItemBefore=function(t,e){return this._checkPathSynchronizedToList(),e>this.numberOfItems&&(e=this.numberOfItems),t._owningPathSegList&&(t=t.clone()),this._list.splice(e,0,t),(t._owningPathSegList=this)._writeListToPath(),t},window.SVGPathSegList.prototype.replaceItem=function(t,e){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._checkValidIndex(e),((this._list[e]=t)._owningPathSegList=this)._writeListToPath(),t},window.SVGPathSegList.prototype.removeItem=function(t){this._checkPathSynchronizedToList(),this._checkValidIndex(t);var e=this._list[t];return this._list.splice(t,1),this._writeListToPath(),e},window.SVGPathSegList.prototype.appendItem=function(t){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._list.push(t),(t._owningPathSegList=this)._writeListToPath(),t},window.SVGPathSegList._pathSegArrayAsString=function(t){var e="",i=!0;return t.forEach(function(t){i?(i=!1,e+=t._asPathString()):e+=" "+t._asPathString()}),e},window.SVGPathSegList.prototype._parsePath=function(t){if(!t||0==t.length)return[];function e(){this.pathSegList=[]}var n=this;e.prototype.appendSegment=function(t){this.pathSegList.push(t)};function i(t){this._string=t,this._currentIndex=0,this._endIndex=this._string.length,this._previousCommand=window.SVGPathSeg.PATHSEG_UNKNOWN,this._skipOptionalSpaces()}i.prototype._isCurrentSpace=function(){var t=this._string[this._currentIndex];return t<=" "&&(" "==t||"\n"==t||"\t"==t||"\r"==t||"\f"==t)},i.prototype._skipOptionalSpaces=function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex++;return this._currentIndex<this._endIndex},i.prototype._skipOptionalSpacesOrDelimiter=function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!=this._string.charAt(this._currentIndex))&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","==this._string.charAt(this._currentIndex)&&(this._currentIndex++,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},i.prototype.hasMoreData=function(){return this._currentIndex<this._endIndex},i.prototype.peekSegmentType=function(){var t=this._string[this._currentIndex];return this._pathSegTypeFromChar(t)},i.prototype._pathSegTypeFromChar=function(t){switch(t){case"Z":case"z":return window.SVGPathSeg.PATHSEG_CLOSEPATH;case"M":return window.SVGPathSeg.PATHSEG_MOVETO_ABS;case"m":return window.SVGPathSeg.PATHSEG_MOVETO_REL;case"L":return window.SVGPathSeg.PATHSEG_LINETO_ABS;case"l":return window.SVGPathSeg.PATHSEG_LINETO_REL;case"C":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;case"c":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;case"Q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;case"q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;case"A":return window.SVGPathSeg.PATHSEG_ARC_ABS;case"a":return window.SVGPathSeg.PATHSEG_ARC_REL;case"H":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;case"h":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;case"V":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;case"v":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;case"S":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;case"s":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;case"T":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;case"t":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;default:return window.SVGPathSeg.PATHSEG_UNKNOWN}},i.prototype._nextCommandHelper=function(t,e){return("+"==t||"-"==t||"."==t||"0"<=t&&t<="9")&&e!=window.SVGPathSeg.PATHSEG_CLOSEPATH?e==window.SVGPathSeg.PATHSEG_MOVETO_ABS?window.SVGPathSeg.PATHSEG_LINETO_ABS:e==window.SVGPathSeg.PATHSEG_MOVETO_REL?window.SVGPathSeg.PATHSEG_LINETO_REL:e:window.SVGPathSeg.PATHSEG_UNKNOWN},i.prototype.initialCommandIsMoveTo=function(){if(!this.hasMoreData())return!0;var t=this.peekSegmentType();return t==window.SVGPathSeg.PATHSEG_MOVETO_ABS||t==window.SVGPathSeg.PATHSEG_MOVETO_REL},i.prototype._parseNumber=function(){var t=0,e=0,i=1,n=0,r=1,a=1,o=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:this._currentIndex<this._endIndex&&"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,r=-1),!(this._currentIndex==this._endIndex||(this._string.charAt(this._currentIndex)<"0"||"9"<this._string.charAt(this._currentIndex))&&"."!=this._string.charAt(this._currentIndex))){for(var s=this._currentIndex;this._currentIndex<this._endIndex&&"0"<=this._string.charAt(this._currentIndex)&&this._string.charAt(this._currentIndex)<="9";)this._currentIndex++;if(this._currentIndex!=s)for(var c=this._currentIndex-1,d=1;s<=c;)e+=d*(this._string.charAt(c--)-"0"),d*=10;if(this._currentIndex<this._endIndex&&"."==this._string.charAt(this._currentIndex)){if(this._currentIndex++,this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||"9"<this._string.charAt(this._currentIndex))return;for(;this._currentIndex<this._endIndex&&"0"<=this._string.charAt(this._currentIndex)&&this._string.charAt(this._currentIndex)<="9";)i*=10,n+=(this._string.charAt(this._currentIndex)-"0")/i,this._currentIndex+=1}if(this._currentIndex!=o&&this._currentIndex+1<this._endIndex&&("e"==this._string.charAt(this._currentIndex)||"E"==this._string.charAt(this._currentIndex))&&"x"!=this._string.charAt(this._currentIndex+1)&&"m"!=this._string.charAt(this._currentIndex+1)){if(this._currentIndex++,"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,a=-1),this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||"9"<this._string.charAt(this._currentIndex))return;for(;this._currentIndex<this._endIndex&&"0"<=this._string.charAt(this._currentIndex)&&this._string.charAt(this._currentIndex)<="9";)t*=10,t+=this._string.charAt(this._currentIndex)-"0",this._currentIndex++}var l=e+n;if(l*=r,t&&(l*=Math.pow(10,a*t)),o!=this._currentIndex)return this._skipOptionalSpacesOrDelimiter(),l}},i.prototype._parseArcFlag=function(){if(!(this._currentIndex>=this._endIndex)){var t=!1,e=this._string.charAt(this._currentIndex++);if("0"==e)t=!1;else{if("1"!=e)return;t=!0}return this._skipOptionalSpacesOrDelimiter(),t}},i.prototype.parseSegment=function(){var t=this._string[this._currentIndex],e=this._pathSegTypeFromChar(t);if(e==window.SVGPathSeg.PATHSEG_UNKNOWN){if(this._previousCommand==window.SVGPathSeg.PATHSEG_UNKNOWN)return null;if((e=this._nextCommandHelper(t,this._previousCommand))==window.SVGPathSeg.PATHSEG_UNKNOWN)return null}else this._currentIndex++;switch(this._previousCommand=e){case window.SVGPathSeg.PATHSEG_MOVETO_REL:return new window.SVGPathSegMovetoRel(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_MOVETO_ABS:return new window.SVGPathSegMovetoAbs(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_REL:return new window.SVGPathSegLinetoRel(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_ABS:return new window.SVGPathSegLinetoAbs(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:return new window.SVGPathSegLinetoHorizontalRel(n,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:return new window.SVGPathSegLinetoHorizontalAbs(n,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:return new window.SVGPathSegLinetoVerticalRel(n,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:return new window.SVGPathSegLinetoVerticalAbs(n,this._parseNumber());case window.SVGPathSeg.PATHSEG_CLOSEPATH:return this._skipOptionalSpaces(),new window.SVGPathSegClosePath(n);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:var i={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicRel(n,i.x,i.y,i.x1,i.y1,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:i={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicAbs(n,i.x,i.y,i.x1,i.y1,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:i={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicSmoothRel(n,i.x,i.y,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:i={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicSmoothAbs(n,i.x,i.y,i.x2,i.y2);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:i={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoQuadraticRel(n,i.x,i.y,i.x1,i.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:i={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoQuadraticAbs(n,i.x,i.y,i.x1,i.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:return new window.SVGPathSegCurvetoQuadraticSmoothRel(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:return new window.SVGPathSegCurvetoQuadraticSmoothAbs(n,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_ARC_REL:i={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegArcRel(n,i.x,i.y,i.x1,i.y1,i.arcAngle,i.arcLarge,i.arcSweep);case window.SVGPathSeg.PATHSEG_ARC_ABS:i={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegArcAbs(n,i.x,i.y,i.x1,i.y1,i.arcAngle,i.arcLarge,i.arcSweep);default:throw"Unknown path seg type."}};var r=new e,a=new i(t);if(!a.initialCommandIsMoveTo())return[];for(;a.hasMoreData();){var o=a.parseSegment();if(!o)return[];r.appendSegment(o)}return r.pathSegList}),String.prototype.padEnd||(String.prototype.padEnd=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),String(this)+e.slice(0,t))}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(i[a]=r[a])}return i},writable:!0,configurable:!0}),(n.prototype.axis=function(){}).labels=function(e){var i=this.internal;arguments.length&&(Object.keys(e).forEach(function(t){i.axis.setLabelText(t,e[t])}),i.axis.updateLabels())},n.prototype.axis.max=function(t){var e=this.internal,i=e.config;if(!arguments.length)return{x:i.axis_x_max,y:i.axis_y_max,y2:i.axis_y2_max};"object"==typeof t?(C(t.x)&&(i.axis_x_max=t.x),C(t.y)&&(i.axis_y_max=t.y),C(t.y2)&&(i.axis_y2_max=t.y2)):i.axis_y_max=i.axis_y2_max=t,e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})},n.prototype.axis.min=function(t){var e=this.internal,i=e.config;if(!arguments.length)return{x:i.axis_x_min,y:i.axis_y_min,y2:i.axis_y2_min};"object"==typeof t?(C(t.x)&&(i.axis_x_min=t.x),C(t.y)&&(i.axis_y_min=t.y),C(t.y2)&&(i.axis_y2_min=t.y2)):i.axis_y_min=i.axis_y2_min=t,e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})},n.prototype.axis.range=function(t){if(!arguments.length)return{max:this.axis.max(),min:this.axis.min()};k(t.max)&&this.axis.max(t.max),k(t.min)&&this.axis.min(t.min)},n.prototype.axis.types=function(t){var e=this.internal;if(void 0===t)return{y:e.config.axis_y_type,y2:e.config.axis_y2_type};k(t.y)&&(e.config.axis_y_type=t.y),k(t.y2)&&(e.config.axis_y2_type=t.y2),e.updateScales(),e.redraw()},n.prototype.category=function(t,e){var i=this.internal,n=i.config;return 1<arguments.length&&(n.axis_x_categories[t]=e,i.redraw()),n.axis_x_categories[t]},n.prototype.categories=function(t){var e=this.internal,i=e.config;return arguments.length&&(i.axis_x_categories=t,e.redraw()),i.axis_x_categories},n.prototype.resize=function(t){var e=this.internal.config;e.size_width=t?t.width:null,e.size_height=t?t.height:null,this.flush()},n.prototype.flush=function(){this.internal.updateAndRedraw({withLegend:!0,withTransition:!1,withTransitionForTransform:!1})},n.prototype.destroy=function(){var e=this.internal;return window.clearInterval(e.intervalForObserveInserted),void 0!==e.resizeTimeout&&window.clearTimeout(e.resizeTimeout),window.removeEventListener("resize",e.resizeIfElementDisplayed),e.resizeFunction.remove(),e.unbindWindowFocus(),e.selectChart.classed("c3",!1).html(""),Object.keys(e).forEach(function(t){e[t]=null}),null},n.prototype.color=function(t){return this.internal.color(t)},(n.prototype.data=function(e){var t=this.internal.data.targets;return void 0===e?t:t.filter(function(t){return 0<=[].concat(e).indexOf(t.id)})}).shown=function(t){return this.internal.filterTargetsToShow(this.data(t))},n.prototype.data.values=function(t,n){void 0===n&&(n=!0);var e,i=null;return!t||(e=this.data(t))&&o(e)&&(i=e.reduce(function(t,e){var i=e.values.map(function(t){return t.value});return n?t=t.concat(i):t.push(i),t},[])),i},n.prototype.data.names=function(t){return this.internal.clearLegendItemTextBoxCache(),this.internal.updateDataAttributes("names",t)},n.prototype.data.colors=function(t){return this.internal.updateDataAttributes("colors",t)},n.prototype.data.axes=function(t){return this.internal.updateDataAttributes("axes",t)},n.prototype.data.stackNormalized=function(t){if(void 0===t)return this.internal.isStackNormalized();this.internal.config.data_stack_normalize=!!t,this.internal.redraw()},(n.prototype.donut=function(){}).padAngle=function(t){if(void 0===t)return this.internal.config.donut_padAngle;this.internal.config.donut_padAngle=t,this.flush()},n.prototype.flow=function(t){var r,e,i,n,a,o,s,c=this.internal,d=[],l=c.getMaxDataCount(),u=0,h=0;if(t.json)e=c.convertJsonToData(t.json,t.keys);else if(t.rows)e=c.convertRowsToData(t.rows);else{if(!t.columns)return;e=c.convertColumnsToData(t.columns)}r=c.convertDataToTargets(e,!0),c.data.targets.forEach(function(t){for(var e,i=!1,n=0;n<r.length;n++)if(t.id===r[n].id){for(i=!0,t.values[t.values.length-1]&&(h=t.values[t.values.length-1].index+1),u=r[n].values.length,e=0;e<u;e++)r[n].values[e].index=h+e,c.isTimeSeries()||(r[n].values[e].x=h+e);t.values=t.values.concat(r[n].values),r.splice(n,1);break}i||d.push(t.id)}),c.data.targets.forEach(function(t){for(var e,i=0;i<d.length;i++)if(t.id===d[i])for(h=t.values[t.values.length-1].index+1,e=0;e<u;e++)t.values.push({id:t.id,index:h+e,x:c.isTimeSeries()?c.getOtherTargetX(h+e):h+e,value:null})}),c.data.targets.length&&r.forEach(function(t){for(var e=[],i=c.data.targets[0].values[0].index;i<h;i++)e.push({id:t.id,index:i,x:c.isTimeSeries()?c.getOtherTargetX(i):i,value:null});t.values.forEach(function(t){t.index+=h,c.isTimeSeries()||(t.x+=h)}),t.values=e.concat(t.values)}),c.data.targets=c.data.targets.concat(r),c.getMaxDataCount(),a=(n=c.data.targets[0]).values[0],k(t.to)?(u=0,s=c.isTimeSeries()?c.parseDate(t.to):t.to,n.values.forEach(function(t){t.x<s&&u++})):k(t.length)&&(u=t.length),l?1===l&&c.isTimeSeries()&&(o=(n.values[n.values.length-1].x-a.x)/2,i=[new Date(a.x-o),new Date(+a.x+o)],c.updateXDomain(null,!0,!0,!1,i)):(o=c.isTimeSeries()?1<n.values.length?n.values[n.values.length-1].x-a.x:a.x-c.getXDomain(c.data.targets)[0]:1,i=[a.x-o,a.x],c.updateXDomain(null,!0,!0,!1,i)),c.updateTargets(c.data.targets),c.redraw({flow:{index:a.index,length:u,duration:C(t.duration)?t.duration:c.config.transition_duration,done:t.done,orgDataCount:l},withLegend:!0,withTransition:1<l,withTrimXDomain:!1,withUpdateXAxis:!0})},l.prototype.generateFlow=function(G){var E=this,O=E.config,I=E.d3;return function(){var t,e,n,r,a,o,s,c,d,l,i=G.targets,u=G.flow,h=G.drawBar,g=G.drawLine,p=G.drawArea,f=G.cx,_=G.cy,x=G.xv,y=G.xForText,m=G.yForText,S=G.duration,w=u.index,v=u.length,b=E.getValueOnIndex(E.data.targets[0].values,w),T=E.getValueOnIndex(E.data.targets[0].values,w+v),A=E.x.domain(),P=u.duration||S,C=u.done||function(){},L=E.generateWait();E.flowing=!0,E.data.targets.forEach(function(t){t.values.splice(0,v)}),e=E.updateXDomain(i,!0,!0),E.updateXGrid&&E.updateXGrid(!0),n=E.xgrid||I.selectAll([]),r=E.xgridLines||I.selectAll([]),a=E.mainRegion||I.selectAll([]),o=E.mainText||I.selectAll([]),s=E.mainBar||I.selectAll([]),c=E.mainLine||I.selectAll([]),d=E.mainArea||I.selectAll([]),l=E.mainCircle||I.selectAll([]),t="translate("+(u.orgDataCount?1===u.orgDataCount||(b&&b.x)===(T&&T.x)||E.isTimeSeries()?E.x(A[0])-E.x(e[0]):E.x(b.x)-E.x(T.x):1!==E.data.targets[0].values.length?E.x(A[0])-E.x(e[0]):E.isTimeSeries()?(b=E.getValueOnIndex(E.data.targets[0].values,0),T=E.getValueOnIndex(E.data.targets[0].values,E.data.targets[0].values.length-1),E.x(b.x)-E.x(T.x)):R(e)/2)+",0) scale("+R(A)/R(e)+",1)",E.hideXGridFocus();var V=I.transition().ease(I.easeLinear).duration(P);L.add(E.xAxis(E.axes.x,V)),L.add(s.transition(V).attr("transform",t)),L.add(c.transition(V).attr("transform",t)),L.add(d.transition(V).attr("transform",t)),L.add(l.transition(V).attr("transform",t)),L.add(o.transition(V).attr("transform",t)),L.add(a.filter(E.isRegionOnX).transition(V).attr("transform",t)),L.add(n.transition(V).attr("transform",t)),L.add(r.transition(V).attr("transform",t)),L(function(){var t,e=[],i=[];if(v){for(t=0;t<v;t++)e.push("."+Y.shape+"-"+(w+t)),i.push("."+Y.text+"-"+(w+t));E.svg.selectAll("."+Y.shapes).selectAll(e).remove(),E.svg.selectAll("."+Y.texts).selectAll(i).remove(),E.svg.select("."+Y.xgrid).remove()}n.attr("transform",null).attr("x1",E.xgridAttr.x1).attr("x2",E.xgridAttr.x2).attr("y1",E.xgridAttr.y1).attr("y2",E.xgridAttr.y2).style("opacity",E.xgridAttr.opacity),r.attr("transform",null),r.select("line").attr("x1",O.axis_rotated?0:x).attr("x2",O.axis_rotated?E.width:x),r.select("text").attr("x",O.axis_rotated?E.width:0).attr("y",x),s.attr("transform",null).attr("d",h),c.attr("transform",null).attr("d",g),d.attr("transform",null).attr("d",p),l.attr("transform",null).attr("cx",f).attr("cy",_),o.attr("transform",null).attr("x",y).attr("y",m).style("fill-opacity",E.opacityForText.bind(E)),a.attr("transform",null),a.filter(E.isRegionOnX).attr("x",E.regionX.bind(E)).attr("width",E.regionWidth.bind(E)),C(),E.flowing=!1})}},n.prototype.focus=function(e){var t,i=this.internal;e=i.mapToTargetIds(e),t=i.svg.selectAll(i.selectorTargets(e.filter(i.isTargetToShow,i))),this.revert(),this.defocus(),t.classed(Y.focused,!0).classed(Y.defocused,!1),i.hasArcType()&&i.expandArc(e),i.toggleFocusLegend(e,!0),i.focusedTargetIds=e,i.defocusedTargetIds=i.defocusedTargetIds.filter(function(t){return e.indexOf(t)<0})},n.prototype.defocus=function(e){var t=this.internal;e=t.mapToTargetIds(e),t.svg.selectAll(t.selectorTargets(e.filter(t.isTargetToShow,t))).classed(Y.focused,!1).classed(Y.defocused,!0),t.hasArcType()&&t.unexpandArc(e),t.toggleFocusLegend(e,!1),t.focusedTargetIds=t.focusedTargetIds.filter(function(t){return e.indexOf(t)<0}),t.defocusedTargetIds=e},n.prototype.revert=function(t){var e=this.internal;t=e.mapToTargetIds(t),e.svg.selectAll(e.selectorTargets(t)).classed(Y.focused,!1).classed(Y.defocused,!1),e.hasArcType()&&e.unexpandArc(t),e.config.legend_show&&(e.showLegend(t.filter(e.isLegendToShow.bind(e))),e.legend.selectAll(e.selectorLegends(t)).filter(function(){return e.d3.select(this).classed(Y.legendItemFocused)}).classed(Y.legendItemFocused,!1)),e.focusedTargetIds=[],e.defocusedTargetIds=[]},(n.prototype.xgrids=function(t){var e=this.internal,i=e.config;return t&&(i.grid_x_lines=t,e.redrawWithoutRescale()),i.grid_x_lines}).add=function(t){var e=this.internal;return this.xgrids(e.config.grid_x_lines.concat(t||[]))},n.prototype.xgrids.remove=function(t){this.internal.removeGridLines(t,!0)},(n.prototype.ygrids=function(t){var e=this.internal,i=e.config;return t&&(i.grid_y_lines=t,e.redrawWithoutRescale()),i.grid_y_lines}).add=function(t){var e=this.internal;return this.ygrids(e.config.grid_y_lines.concat(t||[]))},n.prototype.ygrids.remove=function(t){this.internal.removeGridLines(t,!1)},n.prototype.groups=function(t){var e=this.internal,i=e.config;return w(t)||(i.data_groups=t,e.redraw()),i.data_groups},(n.prototype.legend=function(){}).show=function(t){var e=this.internal;e.showLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})},n.prototype.legend.hide=function(t){var e=this.internal;e.hideLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!1})},n.prototype.load=function(e){var t=this.internal,i=t.config;e.xs&&t.addXs(e.xs),"names"in e&&n.prototype.data.names.bind(this)(e.names),"classes"in e&&Object.keys(e.classes).forEach(function(t){i.data_classes[t]=e.classes[t]}),"categories"in e&&t.isCategorized()&&(i.axis_x_categories=e.categories),"axes"in e&&Object.keys(e.axes).forEach(function(t){i.data_axes[t]=e.axes[t]}),"colors"in e&&Object.keys(e.colors).forEach(function(t){i.data_colors[t]=e.colors[t]}),"cacheIds"in e&&t.hasCaches(e.cacheIds)?t.load(t.getCaches(e.cacheIds),e.done):e.unload?t.unload(t.mapToTargetIds(!0===e.unload?null:e.unload),function(){t.loadFromArgs(e)}):t.loadFromArgs(e)},n.prototype.unload=function(t){var e=this.internal;(t=t||{})instanceof Array?t={ids:t}:"string"==typeof t&&(t={ids:[t]}),e.unload(e.mapToTargetIds(t.ids),function(){e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),t.done&&t.done()})},(n.prototype.pie=function(){}).padAngle=function(t){if(void 0===t)return this.internal.config.pie_padAngle;this.internal.config.pie_padAngle=t,this.flush()},(n.prototype.regions=function(t){var e=this.internal,i=e.config;return t&&(i.regions=t,e.redrawWithoutRescale()),i.regions}).add=function(t){var e=this.internal,i=e.config;return t&&(i.regions=i.regions.concat(t),e.redrawWithoutRescale()),i.regions},n.prototype.regions.remove=function(t){var e=this.internal,i=e.config,n=B(t=t||{},"duration",i.transition_duration),r=B(t,"classes",[Y.region]),a=e.main.select("."+Y.regions).selectAll(r.map(function(t){return"."+t}));return(n?a.transition().duration(n):a).style("opacity",0).remove(),i.regions=i.regions.filter(function(t){var e=!1;return!t.class||(t.class.split(" ").forEach(function(t){0<=r.indexOf(t)&&(e=!0)}),!e)}),i.regions},n.prototype.selected=function(t){var e=this.internal,i=e.d3;return e.main.selectAll("."+Y.shapes+e.getTargetSelectorSuffix(t)).selectAll("."+Y.shape).filter(function(){return i.select(this).classed(Y.SELECTED)}).nodes().map(function(t){var e=t.__data__;return e.data?e.data:e})},n.prototype.select=function(c,d,l){var u=this.internal,h=u.d3,g=u.config;g.data_selection_enabled&&u.main.selectAll("."+Y.shapes).selectAll("."+Y.shape).each(function(t,e){var i=h.select(this),n=t.data?t.data.id:t.id,r=u.getToggle(this,t).bind(u),a=g.data_selection_grouped||!c||0<=c.indexOf(n),o=!d||0<=d.indexOf(e),s=i.classed(Y.SELECTED);i.classed(Y.line)||i.classed(Y.area)||(a&&o?g.data_selection_isselectable(t)&&!s&&r(!0,i.classed(Y.SELECTED,!0),t,e):k(l)&&l&&s&&r(!1,i.classed(Y.SELECTED,!1),t,e))})},n.prototype.unselect=function(c,d){var l=this.internal,u=l.d3,h=l.config;h.data_selection_enabled&&l.main.selectAll("."+Y.shapes).selectAll("."+Y.shape).each(function(t,e){var i=u.select(this),n=t.data?t.data.id:t.id,r=l.getToggle(this,t).bind(l),a=h.data_selection_grouped||!c||0<=c.indexOf(n),o=!d||0<=d.indexOf(e),s=i.classed(Y.SELECTED);i.classed(Y.line)||i.classed(Y.area)||a&&o&&h.data_selection_isselectable(t)&&s&&r(!1,i.classed(Y.SELECTED,!1),t,e)})},n.prototype.show=function(t,e){var i,n=this.internal;t=n.mapToTargetIds(t),e=e||{},n.removeHiddenTargetIds(t),(i=n.svg.selectAll(n.selectorTargets(t))).transition().style("display",c()?"block":"initial","important").style("opacity",1,"important").call(n.endall,function(){i.style("opacity",null).style("opacity",1)}),e.withLegend&&n.showLegend(t),n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},n.prototype.hide=function(t,e){var i,n=this.internal;t=n.mapToTargetIds(t),e=e||{},n.addHiddenTargetIds(t),(i=n.svg.selectAll(n.selectorTargets(t))).transition().style("opacity",0,"important").call(n.endall,function(){i.style("opacity",null).style("opacity",0),i.style("display","none")}),e.withLegend&&n.hideLegend(t),n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},n.prototype.toggle=function(t,e){var i=this,n=this.internal;n.mapToTargetIds(t).forEach(function(t){n.isTargetToShow(t)?i.hide(t,e):i.show(t,e)})},(n.prototype.subchart=function(){}).isShown=function(){return this.internal.config.subchart_show},n.prototype.subchart.show=function(){var e=this.internal;e.config.subchart_show||(e.config.subchart_show=!0,e.initSubchart(),e.updateDimension(),e.initSubchartBrush(),e.updateTargetsForSubchart(e.getTargets()),e.mapToIds(e.data.targets).forEach(function(t){e.withoutFadeIn[t]=!1}),e.updateAndRedraw(),e.showTargets())},n.prototype.subchart.hide=function(){var t=this.internal;t.config.subchart_show&&(t.config.subchart_show=!1,t.removeSubchart(),t.redraw())},(n.prototype.tooltip=function(){}).show=function(e){var t,i,n=this.internal,r={},r=e.mouse?e.mouse:(e.data?i=e.data:void 0!==e.x&&(t=e.id?n.data.targets.filter(function(t){return t.id===e.id}):n.data.targets,i=n.filterByX(t,e.x).slice(0,1)[0]),i?n.getMousePosition(i):null);n.dispatchEvent("mousemove",r),n.config.tooltip_onshow.call(n,i)},n.prototype.tooltip.hide=function(){this.internal.dispatchEvent("mouseout",0),this.internal.config.tooltip_onhide.call(this)},n.prototype.transform=function(t,e){var i=this.internal,n=0<=["pie","donut"].indexOf(t)?{withTransform:!0}:null;i.transformTo(e,t,n)},l.prototype.transformTo=function(t,e,i){var n=this,r=!n.hasArcType(),a=i||{withTransitionForAxis:r};a.withTransitionForTransform=!1,n.transiting=!1,n.setTargetType(t,e),n.updateTargets(n.data.targets),n.updateAndRedraw(a)},n.prototype.x=function(t){var e=this.internal;return arguments.length&&(e.updateTargetX(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),e.data.xs},n.prototype.xs=function(t){var e=this.internal;return arguments.length&&(e.updateTargetXs(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),e.data.xs},(n.prototype.zoom=function(t){var e=this.internal;return t?(e.isTimeSeries()&&(t=t.map(function(t){return e.parseDate(t)})),e.config.subchart_show?e.brush.selectionAsValue(t,!0):(e.updateXDomain(null,!0,!1,!1,t),e.redraw({withY:e.config.zoom_rescale,withSubchart:!1})),e.config.zoom_onzoom.call(this,e.x.orgDomain()),t):e.x.domain()}).enable=function(t){var e=this.internal;e.config.zoom_enabled=t,e.updateAndRedraw()},n.prototype.unzoom=function(){var t=this.internal;t.config.subchart_show?t.brush.clear():(t.updateXDomain(null,!0,!1,!1,t.subX.domain()),t.redraw({withY:t.config.zoom_rescale,withSubchart:!1}))},n.prototype.zoom.max=function(t){var e=this.internal,i=e.config,n=e.d3;if(0!==t&&!t)return i.zoom_x_max;i.zoom_x_max=n.max([e.orgXDomain[1],t])},n.prototype.zoom.min=function(t){var e=this.internal,i=e.config,n=e.d3;if(0!==t&&!t)return i.zoom_x_min;i.zoom_x_min=n.min([e.orgXDomain[0],t])},n.prototype.zoom.range=function(t){if(!arguments.length)return{max:this.domain.max(),min:this.domain.min()};k(t.max)&&this.domain.max(t.max),k(t.min)&&this.domain.min(t.min)},l.prototype.initPie=function(){var t=this,e=t.d3;t.pie=e.pie().padAngle(this.getPadAngle.bind(this)).value(function(t){return t.values.reduce(function(t,e){return t+e.value},0)});var i,n=t.getOrderFunction();n&&(t.isOrderAsc()||t.isOrderDesc())&&(i=n,n=function(t,e){return-1*i(t,e)}),t.pie.sort(n||null)},l.prototype.updateRadius=function(){var t=this,e=t.config,i=e.gauge_width||e.donut_width,n=t.filterTargetsToShow(t.data.targets).length*t.config.gauge_arcs_minWidth;t.radiusExpanded=Math.min(t.arcWidth,t.arcHeight)/2*(t.hasType("gauge")?.85:1),t.radius=.95*t.radiusExpanded,t.innerRadiusRatio=i?(t.radius-i)/t.radius:.6,t.innerRadius=t.hasType("donut")||t.hasType("gauge")?t.radius*t.innerRadiusRatio:0,t.gaugeArcWidth=i||(n<=t.radius-t.innerRadius?t.radius-t.innerRadius:n<=t.radius?n:t.radius)},l.prototype.getPadAngle=function(){return this.hasType("pie")?this.config.pie_padAngle||0:this.hasType("donut")&&this.config.donut_padAngle||0},l.prototype.updateArc=function(){var t=this;t.svgArc=t.getSvgArc(),t.svgArcExpanded=t.getSvgArcExpanded(),t.svgArcExpandedSub=t.getSvgArcExpanded(.98)},l.prototype.updateAngle=function(e){var t,i,n,r,a=this,o=a.config,s=!1,c=0;return o?(a.pie(a.filterTargetsToShow(a.data.targets)).forEach(function(t){s||t.data.id!==e.data.id||(s=!0,(e=t).index=c),c++}),isNaN(e.startAngle)&&(e.startAngle=0),isNaN(e.endAngle)&&(e.endAngle=e.startAngle),a.isGaugeType(e.data)&&(t=o.gauge_min,i=o.gauge_max,n=Math.PI*(o.gauge_fullCircle?2:1)/(i-t),r=e.value<t?0:e.value<i?e.value-t:i-t,e.startAngle=o.gauge_startingAngle,e.endAngle=e.startAngle+n*r),s?e:null):null},l.prototype.getSvgArc=function(){function t(t,e){var i;return e?r(t):(i=n.updateAngle(t))?r(i):"M 0 0"}var n=this,e=n.hasType("gauge"),i=n.gaugeArcWidth/n.filterTargetsToShow(n.data.targets).length,r=n.d3.arc().outerRadius(function(t){return e?n.radius-i*t.index:n.radius}).innerRadius(function(t){return e?n.radius-i*(t.index+1):n.innerRadius});return t.centroid=r.centroid,t},l.prototype.getSvgArcExpanded=function(e){e=e||1;var i=this,n=i.hasType("gauge"),r=i.gaugeArcWidth/i.filterTargetsToShow(i.data.targets).length,a=Math.min(i.radiusExpanded*e-i.radius,.8*r-100*(1-e)),o=i.d3.arc().outerRadius(function(t){return n?i.radius-r*t.index+a:i.radiusExpanded*e}).innerRadius(function(t){return n?i.radius-r*(t.index+1):i.innerRadius});return function(t){var e=i.updateAngle(t);return e?o(e):"M 0 0"}},l.prototype.getArc=function(t,e,i){return i||this.isArcType(t.data)?this.svgArc(t,e):"M 0 0"},l.prototype.transformForArcLabel=function(t){var e,i,n,r,a,o,s=this,c=s.config,d=s.updateAngle(t),l="",u=s.hasType("gauge");return d&&!u?(e=this.svgArc.centroid(d),a=isNaN(e[0])?0:e[0],o=isNaN(e[1])?0:e[1],i=Math.sqrt(a*a+o*o),l="translate("+a*(n=s.hasType("donut")&&c.donut_label_ratio?h(c.donut_label_ratio)?c.donut_label_ratio(t,s.radius,i):c.donut_label_ratio:s.hasType("pie")&&c.pie_label_ratio?h(c.pie_label_ratio)?c.pie_label_ratio(t,s.radius,i):c.pie_label_ratio:s.radius&&i?(.375<36/s.radius?1.175-36/s.radius:.8)*s.radius/i:0)+","+o*n+")"):d&&u&&1<s.filterTargetsToShow(s.data.targets).length&&(r=Math.sin(d.endAngle-Math.PI/2),l="translate("+(a=Math.cos(d.endAngle-Math.PI/2)*(s.radiusExpanded+25))+","+(o=r*(s.radiusExpanded+15-Math.abs(10*r))+3)+")"),l},l.prototype.getArcRatio=function(t){return this.getRatio("arc",t)},l.prototype.convertToArcData=function(t){return this.addName({id:t.data.id,value:t.value,ratio:this.getRatio("arc",t),index:t.index})},l.prototype.textForArcLabel=function(t){var e,i,n,r,a,o=this;return o.shouldShowArcLabel()?(i=(e=o.updateAngle(t))?e.value:null,n=o.getRatio("arc",e),r=t.data.id,o.hasType("gauge")||o.meetsArcLabelThreshold(n)?(a=o.getArcLabelFormat())?a(i,n,r):o.defaultArcValueFormat(i,n):""):""},l.prototype.textForGaugeMinMax=function(t,e){var i=this.getGaugeLabelExtents();return i?i(t,e):t},l.prototype.expandArc=function(t){var e,i=this;i.transiting?e=window.setInterval(function(){i.transiting||(window.clearInterval(e),0<i.legend.selectAll(".c3-legend-item-focused").size()&&i.expandArc(t))},10):(t=i.mapToTargetIds(t),i.svg.selectAll(i.selectorTargets(t,"."+Y.chartArc)).each(function(t){i.shouldExpand(t.data.id)&&i.d3.select(this).selectAll("path").transition().duration(i.expandDuration(t.data.id)).attr("d",i.svgArcExpanded).transition().duration(2*i.expandDuration(t.data.id)).attr("d",i.svgArcExpandedSub).each(function(t){i.isDonutType(t.data)})}))},l.prototype.unexpandArc=function(t){var e=this;e.transiting||(t=e.mapToTargetIds(t),e.svg.selectAll(e.selectorTargets(t,"."+Y.chartArc)).selectAll("path").transition().duration(function(t){return e.expandDuration(t.data.id)}).attr("d",e.svgArc),e.svg.selectAll("."+Y.arc))},l.prototype.expandDuration=function(t){var e=this.config;return this.isDonutType(t)?e.donut_expand_duration:this.isGaugeType(t)?e.gauge_expand_duration:this.isPieType(t)?e.pie_expand_duration:50},l.prototype.shouldExpand=function(t){var e=this.config;return this.isDonutType(t)&&e.donut_expand||this.isGaugeType(t)&&e.gauge_expand||this.isPieType(t)&&e.pie_expand},l.prototype.shouldShowArcLabel=function(){var t=this.config,e=!0;return this.hasType("donut")?e=t.donut_label_show:this.hasType("pie")&&(e=t.pie_label_show),e},l.prototype.meetsArcLabelThreshold=function(t){var e=this.config;return(this.hasType("donut")?e.donut_label_threshold:e.pie_label_threshold)<=t},l.prototype.getArcLabelFormat=function(){var t=this.config,e=t.pie_label_format;return this.hasType("gauge")?e=t.gauge_label_format:this.hasType("donut")&&(e=t.donut_label_format),e},l.prototype.getGaugeLabelExtents=function(){return this.config.gauge_label_extents},l.prototype.getArcTitle=function(){return this.hasType("donut")?this.config.donut_title:""},l.prototype.updateTargetsForArc=function(t){var e=this,i=e.main,n=e.classChartArc.bind(e),r=e.classArcs.bind(e),a=e.classFocus.bind(e),o=i.select("."+Y.chartArcs).selectAll("."+Y.chartArc).data(e.pie(t)).attr("class",function(t){return n(t)+a(t.data)}).enter().append("g").attr("class",n);o.append("g").attr("class",r),o.append("text").attr("dy",e.hasType("gauge")?"-.1em":".35em").style("opacity",0).style("text-anchor","middle").style("pointer-events","none")},l.prototype.initArc=function(){var t=this;t.arcs=t.main.select("."+Y.chart).append("g").attr("class",Y.chartArcs).attr("transform",t.getTranslate("arc")),t.arcs.append("text").attr("class",Y.chartArcsTitle).style("text-anchor","middle").text(t.getArcTitle())},l.prototype.redrawArc=function(t,e,i){var n,r,a,o,l=this,u=l.d3,s=l.config,c=l.main,d=l.hasType("gauge"),h=c.selectAll("."+Y.arcs).selectAll("."+Y.arc).data(l.arcData.bind(l)),g=h.enter().append("path").attr("class",l.classArc.bind(l)).style("fill",function(t){return l.color(t.data)}).style("cursor",function(t){return s.interaction_enabled&&s.data_selection_isselectable(t)?"pointer":null}).each(function(t){l.isGaugeType(t.data)&&(t.startAngle=t.endAngle=s.gauge_startingAngle),this._current=t}).merge(h);d&&(r=(n=c.selectAll("."+Y.arcs).selectAll("."+Y.arcLabelLine).data(l.arcData.bind(l))).enter().append("rect").attr("class",function(t){return Y.arcLabelLine+" "+Y.target+" "+Y.target+"-"+t.data.id}).merge(n),1===l.filterTargetsToShow(l.data.targets).length?r.style("display","none"):r.style("fill",function(t){return l.levelColor?l.levelColor(t.data.values.reduce(function(t,e){return t+e.value},0)):l.color(t.data)}).style("display",s.gauge_labelLine_show?"":"none").each(function(t){var e,i,n,r,a,o=0,s=0,c=0,d="";l.hiddenTargetIds.indexOf(t.data.id)<0&&(e=l.updateAngle(t),i=l.gaugeArcWidth/l.filterTargetsToShow(l.data.targets).length*(e.index+1),a=(n=e.endAngle-Math.PI/2)-(0==(r=l.radius-i)?0:1/r),o=l.radiusExpanded-l.radius+i,s=Math.cos(a)*r,c=Math.sin(a)*r,d="rotate("+180*n/Math.PI+", "+s+", "+c+")"),u.select(this).attr("x",s).attr("y",c).attr("width",o).attr("height",2).attr("transform",d).style("stroke-dasharray","0, "+(o+2)+", 0")})),g.attr("transform",function(t){return!l.isGaugeType(t.data)&&i?"scale(0)":""}).on("mouseover",s.interaction_enabled?function(t){var e,i;l.transiting||(e=l.updateAngle(t))&&(i=l.convertToArcData(e),l.expandArc(e.data.id),l.api.focus(e.data.id),l.toggleFocusLegend(e.data.id,!0),l.config.data_onmouseover(i,this))}:null).on("mousemove",s.interaction_enabled?function(t){var e,i=l.updateAngle(t);i&&(e=[l.convertToArcData(i)],l.showTooltip(e,this))}:null).on("mouseout",s.interaction_enabled?function(t){var e,i;l.transiting||(e=l.updateAngle(t))&&(i=l.convertToArcData(e),l.unexpandArc(e.data.id),l.api.revert(),l.revertLegend(),l.hideTooltip(),l.config.data_onmouseout(i,this))}:null).on("click",s.interaction_enabled?function(t,e){var i,n=l.updateAngle(t);n&&(i=l.convertToArcData(n),l.toggleShape&&l.toggleShape(this,i,e),l.config.data_onclick.call(l.api,i,this))}:null).each(function(){l.transiting=!0}).transition().duration(t).attrTween("d",function(i){var n,t=l.updateAngle(i);return t?(isNaN(this._current.startAngle)&&(this._current.startAngle=0),isNaN(this._current.endAngle)&&(this._current.endAngle=this._current.startAngle),n=u.interpolate(this._current,t),this._current=n(0),function(t){if(null===l.config)return"M 0 0";var e=n(t);return e.data=i.data,l.getArc(e,!0)}):function(){return"M 0 0"}}).attr("transform",i?"scale(1)":"").style("fill",function(t){return l.levelColor?l.levelColor(t.data.values.reduce(function(t,e){return t+e.value},0)):l.color(t.data.id)}).call(l.endall,function(){l.transiting=!1}),h.exit().transition().duration(e).style("opacity",0).remove(),c.selectAll("."+Y.chartArc).select("text").style("opacity",0).attr("class",function(t){return l.isGaugeType(t.data)?Y.gaugeValue:""}).text(l.textForArcLabel.bind(l)).attr("transform",l.transformForArcLabel.bind(l)).style("font-size",function(t){return l.isGaugeType(t.data)&&1===l.filterTargetsToShow(l.data.targets).length?Math.round(l.radius/5)+"px":""}).transition().duration(t).style("opacity",function(t){return l.isTargetToShow(t.data.id)&&l.isArcType(t.data)?1:0}),c.select("."+Y.chartArcsTitle).style("opacity",l.hasType("donut")||d?1:0),d&&(a=0,(o=l.arcs.select("g."+Y.chartArcsBackground).selectAll("path."+Y.chartArcsBackground).data(l.data.targets)).enter().append("path").attr("class",function(t,e){return Y.chartArcsBackground+" "+Y.chartArcsBackground+"-"+e}).merge(o).attr("d",function(t){if(0<=l.hiddenTargetIds.indexOf(t.id))return"M 0 0";var e={data:[{value:s.gauge_max}],startAngle:s.gauge_startingAngle,endAngle:-1*s.gauge_startingAngle*(s.gauge_fullCircle?Math.PI:1),index:a++};return l.getArc(e,!0,!0)}),o.exit().remove(),l.arcs.select("."+Y.chartArcsGaugeUnit).attr("dy",".75em").text(s.gauge_label_show?s.gauge_units:""),l.arcs.select("."+Y.chartArcsGaugeMin).attr("dx",-1*(l.innerRadius+(l.radius-l.innerRadius)/(s.gauge_fullCircle?1:2))+"px").attr("dy","1.2em").text(s.gauge_label_show?l.textForGaugeMinMax(s.gauge_min,!1):""),l.arcs.select("."+Y.chartArcsGaugeMax).attr("dx",l.innerRadius+(l.radius-l.innerRadius)/(s.gauge_fullCircle?1:2)+"px").attr("dy","1.2em").text(s.gauge_label_show?l.textForGaugeMinMax(s.gauge_max,!0):""))},l.prototype.initGauge=function(){var t=this.arcs;this.hasType("gauge")&&(t.append("g").attr("class",Y.chartArcsBackground),t.append("text").attr("class",Y.chartArcsGaugeUnit).style("text-anchor","middle").style("pointer-events","none"),t.append("text").attr("class",Y.chartArcsGaugeMin).style("text-anchor","middle").style("pointer-events","none"),t.append("text").attr("class",Y.chartArcsGaugeMax).style("text-anchor","middle").style("pointer-events","none"))},l.prototype.getGaugeLabelHeight=function(){return this.config.gauge_label_show?20:0},l.prototype.addToCache=function(t,e){this.cache["$"+t]=e},l.prototype.getFromCache=function(t){return this.cache["$"+t]},l.prototype.resetCache=function(){var e=this;Object.keys(this.cache).filter(function(t){return/^\$/.test(t)}).forEach(function(t){delete e.cache[t]})},l.prototype.hasCaches=function(t){for(var e=0;e<t.length;e++)if(!(t[e]in this.cache))return!1;return!0},l.prototype.addCache=function(t,e){this.cache[t]=this.cloneTarget(e)},l.prototype.getCaches=function(t){for(var e=[],i=0;i<t.length;i++)t[i]in this.cache&&e.push(this.cloneTarget(this.cache[t[i]]));return e},l.prototype.categoryName=function(t){var e=this.config;return t<e.axis_x_categories.length?e.axis_x_categories[t]:t},l.prototype.generateTargetClass=function(t){return t||0===t?("-"+t).replace(/\s/g,"-"):""},l.prototype.generateClass=function(t,e){return" "+t+" "+t+this.generateTargetClass(e)},l.prototype.classText=function(t){return this.generateClass(Y.text,t.index)},l.prototype.classTexts=function(t){return this.generateClass(Y.texts,t.id)},l.prototype.classShape=function(t){return this.generateClass(Y.shape,t.index)},l.prototype.classShapes=function(t){return this.generateClass(Y.shapes,t.id)},l.prototype.classLine=function(t){return this.classShape(t)+this.generateClass(Y.line,t.id)},l.prototype.classLines=function(t){return this.classShapes(t)+this.generateClass(Y.lines,t.id)},l.prototype.classCircle=function(t){return this.classShape(t)+this.generateClass(Y.circle,t.index)},l.prototype.classCircles=function(t){return this.classShapes(t)+this.generateClass(Y.circles,t.id)},l.prototype.classBar=function(t){return this.classShape(t)+this.generateClass(Y.bar,t.index)},l.prototype.classBars=function(t){return this.classShapes(t)+this.generateClass(Y.bars,t.id)},l.prototype.classArc=function(t){return this.classShape(t.data)+this.generateClass(Y.arc,t.data.id)},l.prototype.classArcs=function(t){return this.classShapes(t.data)+this.generateClass(Y.arcs,t.data.id)},l.prototype.classArea=function(t){return this.classShape(t)+this.generateClass(Y.area,t.id)},l.prototype.classAreas=function(t){return this.classShapes(t)+this.generateClass(Y.areas,t.id)},l.prototype.classRegion=function(t,e){return this.generateClass(Y.region,e)+" "+("class"in t?t.class:"")},l.prototype.classEvent=function(t){return this.generateClass(Y.eventRect,t.index)},l.prototype.classTarget=function(t){var e=this.config.data_classes[t],i=e?" "+Y.target+"-"+e:"";return this.generateClass(Y.target,t)+i},l.prototype.classFocus=function(t){return this.classFocused(t)+this.classDefocused(t)},l.prototype.classFocused=function(t){return" "+(0<=this.focusedTargetIds.indexOf(t.id)?Y.focused:"")},l.prototype.classDefocused=function(t){return" "+(0<=this.defocusedTargetIds.indexOf(t.id)?Y.defocused:"")},l.prototype.classChartText=function(t){return Y.chartText+this.classTarget(t.id)},l.prototype.classChartLine=function(t){return Y.chartLine+this.classTarget(t.id)},l.prototype.classChartBar=function(t){return Y.chartBar+this.classTarget(t.id)},l.prototype.classChartArc=function(t){return Y.chartArc+this.classTarget(t.data.id)},l.prototype.getTargetSelectorSuffix=function(t){var e=this.generateTargetClass(t);return window.CSS&&window.CSS.escape?window.CSS.escape(e):e.replace(/([?!@#$%^&*()=+,.<>'":;\[\]\/|~`{}\\])/g,"\\$1")},l.prototype.selectorTarget=function(t,e){return(e||"")+"."+Y.target+this.getTargetSelectorSuffix(t)},l.prototype.selectorTargets=function(t,e){var i=this;return(t=t||[]).length?t.map(function(t){return i.selectorTarget(t,e)}):null},l.prototype.selectorLegend=function(t){return"."+Y.legendItem+this.getTargetSelectorSuffix(t)},l.prototype.selectorLegends=function(t){var e=this;return t&&t.length?t.map(function(t){return e.selectorLegend(t)}):null},l.prototype.getClipPath=function(t){return"url("+(c(9)?"":document.URL.split("#")[0])+"#"+t+")"},l.prototype.appendClip=function(t,e){return t.append("clipPath").attr("id",e).append("rect")},l.prototype.getAxisClipX=function(t){var e=Math.max(30,this.margin.left);return t?-(1+e):-(e-1)},l.prototype.getAxisClipY=function(t){return t?-20:-this.margin.top},l.prototype.getXAxisClipX=function(){return this.getAxisClipX(!this.config.axis_rotated)},l.prototype.getXAxisClipY=function(){return this.getAxisClipY(!this.config.axis_rotated)},l.prototype.getYAxisClipX=function(){return this.config.axis_y_inner?-1:this.getAxisClipX(this.config.axis_rotated)},l.prototype.getYAxisClipY=function(){return this.getAxisClipY(this.config.axis_rotated)},l.prototype.getAxisClipWidth=function(t){var e=Math.max(30,this.margin.left),i=Math.max(30,this.margin.right);return t?this.width+2+e+i:this.margin.left+20},l.prototype.getAxisClipHeight=function(t){return(t?this.margin.bottom:this.margin.top+this.height)+20},l.prototype.getXAxisClipWidth=function(){return this.getAxisClipWidth(!this.config.axis_rotated)},l.prototype.getXAxisClipHeight=function(){return this.getAxisClipHeight(!this.config.axis_rotated)},l.prototype.getYAxisClipWidth=function(){return this.getAxisClipWidth(this.config.axis_rotated)+(this.config.axis_y_inner?20:0)},l.prototype.getYAxisClipHeight=function(){return this.getAxisClipHeight(this.config.axis_rotated)},l.prototype.generateColor=function(){var t=this.config,e=this.d3,n=t.data_colors,r=L(t.color_pattern)?t.color_pattern:e.schemeCategory10,a=t.data_color,o=[];return function(t){var e,i=t.id||t.data&&t.data.id||t;return n[i]instanceof Function?e=n[i](t):n[i]?e=n[i]:(o.indexOf(i)<0&&o.push(i),e=r[o.indexOf(i)%r.length],n[i]=e),a instanceof Function?a(e,t):e}},l.prototype.generateLevelColor=function(){var t=this.config,n=t.color_pattern,e=t.color_threshold,r="value"===e.unit,a=e.values&&e.values.length?e.values:[],o=e.max||100;return L(e)&&L(n)?function(t){for(var e=n[n.length-1],i=0;i<a.length;i++)if((r?t:100*t/o)<a[i]){e=n[i];break}return e}:null},l.prototype.getDefaultConfig=function(){var e={bindto:"#chart",svg_classname:void 0,size_width:void 0,size_height:void 0,padding_left:void 0,padding_right:void 0,padding_top:void 0,padding_bottom:void 0,resize_auto:!0,zoom_enabled:!1,zoom_initialRange:void 0,zoom_type:"scroll",zoom_disableDefaultBehavior:!1,zoom_privileged:!1,zoom_rescale:!1,zoom_onzoom:function(){},zoom_onzoomstart:function(){},zoom_onzoomend:function(){},zoom_x_min:void 0,zoom_x_max:void 0,interaction_brighten:!0,interaction_enabled:!0,onmouseover:function(){},onmouseout:function(){},onresize:function(){},onresized:function(){},oninit:function(){},onrendered:function(){},transition_duration:350,data_epochs:"epochs",data_x:void 0,data_xs:{},data_xFormat:"%Y-%m-%d",data_xLocaltime:!0,data_xSort:!0,data_idConverter:function(t){return t},data_names:{},data_classes:{},data_groups:[],data_axes:{},data_type:void 0,data_types:{},data_labels:{},data_order:"desc",data_regions:{},data_color:void 0,data_colors:{},data_hide:!1,data_filter:void 0,data_selection_enabled:!1,data_selection_grouped:!1,data_selection_isselectable:function(){return!0},data_selection_multiple:!0,data_selection_draggable:!1,data_stack_normalize:!1,data_onclick:function(){},data_onmouseover:function(){},data_onmouseout:function(){},data_onselected:function(){},data_onunselected:function(){},data_url:void 0,data_headers:void 0,data_json:void 0,data_rows:void 0,data_columns:void 0,data_mimeType:void 0,data_keys:void 0,data_empty_label_text:"",subchart_show:!1,subchart_size_height:60,subchart_axis_x_show:!0,subchart_onbrush:function(){},color_pattern:[],color_threshold:{},legend_show:!0,legend_hide:!1,legend_position:"bottom",legend_inset_anchor:"top-left",legend_inset_x:10,legend_inset_y:0,legend_inset_step:void 0,legend_item_onclick:void 0,legend_item_onmouseover:void 0,legend_item_onmouseout:void 0,legend_equally:!1,legend_padding:0,legend_item_tile_width:10,legend_item_tile_height:10,axis_rotated:!1,axis_x_show:!0,axis_x_type:"indexed",axis_x_localtime:!0,axis_x_categories:[],axis_x_tick_centered:!1,axis_x_tick_format:void 0,axis_x_tick_culling:{},axis_x_tick_culling_max:10,axis_x_tick_count:void 0,axis_x_tick_fit:!0,axis_x_tick_values:null,axis_x_tick_rotate:0,axis_x_tick_outer:!0,axis_x_tick_multiline:!0,axis_x_tick_multilineMax:0,axis_x_tick_width:null,axis_x_max:void 0,axis_x_min:void 0,axis_x_padding:{},axis_x_height:void 0,axis_x_selection:void 0,axis_x_label:{},axis_x_inner:void 0,axis_y_show:!0,axis_y_type:"linear",axis_y_max:void 0,axis_y_min:void 0,axis_y_inverted:!1,axis_y_center:void 0,axis_y_inner:void 0,axis_y_label:{},axis_y_tick_format:void 0,axis_y_tick_outer:!0,axis_y_tick_values:null,axis_y_tick_rotate:0,axis_y_tick_count:void 0,axis_y_tick_time_type:void 0,axis_y_tick_time_interval:void 0,axis_y_padding:{},axis_y_default:void 0,axis_y2_show:!1,axis_y2_type:"linear",axis_y2_max:void 0,axis_y2_min:void 0,axis_y2_inverted:!1,axis_y2_center:void 0,axis_y2_inner:void 0,axis_y2_label:{},axis_y2_tick_format:void 0,axis_y2_tick_outer:!0,axis_y2_tick_values:null,axis_y2_tick_count:void 0,axis_y2_padding:{},axis_y2_default:void 0,grid_x_show:!1,grid_x_type:"tick",grid_x_lines:[],grid_y_show:!1,grid_y_lines:[],grid_y_ticks:10,grid_focus_show:!0,grid_lines_front:!0,point_show:!0,point_r:2.5,point_sensitivity:10,point_focus_expand_enabled:!0,point_focus_expand_r:void 0,point_select_r:void 0,line_connectNull:!1,line_step_type:"step",bar_width:void 0,bar_width_ratio:.6,bar_width_max:void 0,bar_zerobased:!0,bar_space:0,area_zerobased:!0,area_above:!1,pie_label_show:!0,pie_label_format:void 0,pie_label_threshold:.05,pie_label_ratio:void 0,pie_expand:{},pie_expand_duration:50,pie_padAngle:0,gauge_fullCircle:!1,gauge_label_show:!0,gauge_labelLine_show:!0,gauge_label_format:void 0,gauge_min:0,gauge_max:100,gauge_startingAngle:-1*Math.PI/2,gauge_label_extents:void 0,gauge_units:void 0,gauge_width:void 0,gauge_arcs_minWidth:5,gauge_expand:{},gauge_expand_duration:50,donut_label_show:!0,donut_label_format:void 0,donut_label_threshold:.05,donut_label_ratio:void 0,donut_width:void 0,donut_title:"",donut_expand:{},donut_expand_duration:50,donut_padAngle:0,spline_interpolation_type:"cardinal",stanford_lines:[],stanford_regions:[],stanford_texts:[],stanford_scaleMin:void 0,stanford_scaleMax:void 0,stanford_scaleWidth:void 0,stanford_scaleFormat:void 0,stanford_scaleValues:void 0,stanford_colors:void 0,stanford_padding:{top:0,right:0,bottom:0,left:0},regions:[],tooltip_show:!0,tooltip_grouped:!0,tooltip_order:void 0,tooltip_format_title:void 0,tooltip_format_name:void 0,tooltip_format_value:void 0,tooltip_horizontal:void 0,tooltip_position:void 0,tooltip_contents:function(t,e,i,n){return this.getTooltipContent?this.getTooltipContent(t,e,i,n):""},tooltip_init_show:!1,tooltip_init_x:0,tooltip_init_position:{top:"0px",left:"50px"},tooltip_onshow:function(){},tooltip_onhide:function(){},title_text:void 0,title_padding:{top:0,right:0,bottom:0,left:0},title_position:"top-center"};return Object.keys(this.additionalConfig).forEach(function(t){e[t]=this.additionalConfig[t]},this),e},l.prototype.additionalConfig={},l.prototype.loadConfig=function(e){var i,n,r,a=this.config;Object.keys(a).forEach(function(t){i=e,n=t.split("_"),r=function t(){var e=n.shift();return e&&i&&"object"==typeof i&&e in i?(i=i[e],t()):e?void 0:i}(),k(r)&&(a[t]=r)})},l.prototype.convertUrlToData=function(t,e,i,n,r){var a,o=this,s=e||"csv",c="json"===s?(a=o.d3.json,o.convertJsonToData):(a="tsv"===s?o.d3.tsv:o.d3.csv,o.convertXsvToData);a(t,i).then(function(t){r.call(o,c.call(o,t,n))}).catch(function(t){throw t})},l.prototype.convertXsvToData=function(t){var e=t.columns;return 0===t.length?{keys:e,rows:[e.reduce(function(t,e){var i;return Object.assign(t,((i={})[e]=null,i))},{})]}:{keys:e,rows:[].concat(t)}},l.prototype.convertJsonToData=function(e,t){var r,a=this,o=[],i=t?(t.x?(r=t.value.concat(t.x),a.config.data_x=t.x):r=t.value,o.push(r),e.forEach(function(i){var n=[];r.forEach(function(t){var e=a.findValueInJson(i,t);w(e)&&(e=null),n.push(e)}),o.push(n)}),a.convertRowsToData(o)):(Object.keys(e).forEach(function(t){o.push([t].concat(e[t]))}),a.convertColumnsToData(o));return i},l.prototype.findValueInJson=function(t,e){if(e in t)return t[e];for(var i=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n=0;n<i.length;++n){var r=i[n];if(!(r in t))return;t=t[r]}return t},l.prototype.convertRowsToData=function(t){for(var e=[],i=t[0],n=1;n<t.length;n++){for(var r={},a=0;a<t[n].length;a++){if(w(t[n][a]))throw new Error("Source data is missing a component at ("+n+","+a+")!");r[i[a]]=t[n][a]}e.push(r)}return{keys:i,rows:e}},l.prototype.convertColumnsToData=function(t){for(var e=[],i=[],n=0;n<t.length;n++){for(var r=t[n][0],a=1;a<t[n].length;a++){if(w(e[a-1])&&(e[a-1]={}),w(t[n][a]))throw new Error("Source data is missing a component at ("+n+","+a+")!");e[a-1][r]=t[n][a]}i.push(r)}return{keys:i,rows:e}},l.prototype.convertDataToTargets=function(t,n){var e,i,r,a,d,l=this,u=l.config;if(o(t)?a=Object.keys(t[0]):(a=t.keys,t=t.rows),r=a.filter(l.isX,l),l.isStanfordGraphType()){if(d=a.filter(l.isEpochs,l),i=a.filter(l.isNotXAndNotEpochs,l),1!==r.length||1!==d.length||1!==i.length)throw new Error("You must define the 'x' key name and the 'epochs' for Stanford Diagrams")}else i=a.filter(l.isNotX,l);return i.forEach(function(i){var e=l.getXKey(i);l.isCustomX()||l.isTimeSeries()?0<=r.indexOf(e)?l.data.xs[i]=(n&&l.data.xs[i]?l.data.xs[i]:[]).concat(t.map(function(t){return t[e]}).filter(C).map(function(t,e){return l.generateTargetX(t,i,e)})):u.data_x?l.data.xs[i]=l.getOtherTargetXs():L(u.data_xs)&&(l.data.xs[i]=l.getXValuesOfXKey(e,l.data.targets)):l.data.xs[i]=t.map(function(t,e){return e})}),i.forEach(function(t){if(!l.data.xs[t])throw new Error('x is not defined for id = "'+t+'".')}),(e=i.map(function(o,s){var c=u.data_idConverter(o);return{id:c,id_org:o,values:t.map(function(t,e){var i,n,r=t[l.getXKey(o)],a=null===t[o]||isNaN(t[o])?null:+t[o];return l.isCustomX()&&l.isCategorized()&&!w(r)?(0===s&&0===e&&(u.axis_x_categories=[]),-1===(i=u.axis_x_categories.indexOf(r))&&(i=u.axis_x_categories.length,u.axis_x_categories.push(r))):i=l.generateTargetX(r,o,e),(w(t[o])||l.data.xs[o].length<=e)&&(i=void 0),n={x:i,value:a,id:c},l.isStanfordGraphType()&&(n.epochs=t[d]),n}).filter(function(t){return k(t.x)})}})).forEach(function(t){var e;u.data_xSort&&(t.values=t.values.sort(function(t,e){return(t.x||0===t.x?t.x:1/0)-(e.x||0===e.x?e.x:1/0)})),e=0,t.values.forEach(function(t){t.index=e++}),l.data.xs[t.id].sort(function(t,e){return t-e})}),l.hasNegativeValue=l.hasNegativeValueInTargets(e),l.hasPositiveValue=l.hasPositiveValueInTargets(e),u.data_type&&l.setTargetType(l.mapToIds(e).filter(function(t){return!(t in u.data_types)}),u.data_type),e.forEach(function(t){l.addCache(t.id_org,t)}),e},l.prototype.isEpochs=function(t){var e=this.config;return e.data_epochs&&t===e.data_epochs},l.prototype.isX=function(t){var e,i,n,r=this.config;return r.data_x&&t===r.data_x||L(r.data_xs)&&(e=r.data_xs,i=t,n=!1,Object.keys(e).forEach(function(t){e[t]===i&&(n=!0)}),n)},l.prototype.isNotX=function(t){return!this.isX(t)},l.prototype.isNotXAndNotEpochs=function(t){return!this.isX(t)&&!this.isEpochs(t)},l.prototype.isStackNormalized=function(){return this.config.data_stack_normalize&&0<this.config.data_groups.length},l.prototype.isAxisNormalized=function(e){var i=this;return!!i.isStackNormalized()&&i.data.targets.filter(function(t){return i.axis.getId(t.id)===e}).some(function(t){return i.isTargetNormalized(t.id)})},l.prototype.isTargetNormalized=function(e){return this.isStackNormalized()&&this.config.data_groups.some(function(t){return t.includes(e)})},l.prototype.getXKey=function(t){var e=this.config;return e.data_x?e.data_x:L(e.data_xs)?e.data_xs[t]:null},l.prototype.getTotalPerIndex=function(t){var e=this;if(!e.isStackNormalized())return null;var i=e.getFromCache("getTotalPerIndex");if(void 0!==i)return i[t];var n={y:[],y2:[]};return e.data.targets.filter(function(t){return e.isTargetNormalized(t.id)}).filter(function(t){return e.isTargetToShow(t.id)}).forEach(function(t){var i=n[e.axis.getId(t.id)];t.values.forEach(function(t,e){i[e]||(i[e]=0),i[e]+=s(t.value)?t.value:0})}),e.addToCache("getTotalPerIndex",n),n[t]},l.prototype.getTotalDataSum=function(){var e=this,t=e.getFromCache("getTotalDataSum");if(void 0!==t)return t;var i,n=(i=e.data.targets.filter(function(t){return e.isTargetToShow(t.id)}).map(function(t){return t.values}),(Array.isArray(i)?[].concat.apply([],i):[]).map(function(t){return t.value}).reduce(function(t,e){return t+e},0));return e.addToCache("getTotalDataSum",n),n},l.prototype.getXValuesOfXKey=function(e,t){var i,n=this;return(t&&L(t)?n.mapToIds(t):[]).forEach(function(t){n.getXKey(t)===e&&(i=n.data.xs[t])}),i},l.prototype.getXValue=function(t,e){return t in this.data.xs&&this.data.xs[t]&&C(this.data.xs[t][e])?this.data.xs[t][e]:e},l.prototype.getOtherTargetXs=function(){var t=Object.keys(this.data.xs);return t.length?this.data.xs[t[0]]:null},l.prototype.getOtherTargetX=function(t){var e=this.getOtherTargetXs();return e&&t<e.length?e[t]:null},l.prototype.addXs=function(e){var i=this;Object.keys(e).forEach(function(t){i.config.data_xs[t]=e[t]})},l.prototype.addName=function(t){var e;return t&&(e=this.config.data_names[t.id],t.name=void 0!==e?e:t.id),t},l.prototype.getValueOnIndex=function(t,e){var i=t.filter(function(t){return t.index===e});return i.length?i[0]:null},l.prototype.updateTargetX=function(t,n){var r=this;t.forEach(function(i){i.values.forEach(function(t,e){t.x=r.generateTargetX(n[e],i.id,e)}),r.data.xs[i.id]=n})},l.prototype.updateTargetXs=function(t,e){var i=this;t.forEach(function(t){e[t.id]&&i.updateTargetX([t],e[t.id])})},l.prototype.generateTargetX=function(t,e,i){var n=this,r=n.isTimeSeries()?t?n.parseDate(t):n.parseDate(n.getXValue(e,i)):n.isCustomX()&&!n.isCategorized()?C(t)?+t:n.getXValue(e,i):i;return r},l.prototype.cloneTarget=function(t){return{id:t.id,id_org:t.id_org,values:t.values.map(function(t){return{x:t.x,value:t.value,id:t.id}})}},l.prototype.getMaxDataCount=function(){return this.d3.max(this.data.targets,function(t){return t.values.length})},l.prototype.mapToIds=function(t){return t.map(function(t){return t.id})},l.prototype.mapToTargetIds=function(t){return t?[].concat(t):this.mapToIds(this.data.targets)},l.prototype.hasTarget=function(t,e){for(var i=this.mapToIds(t),n=0;n<i.length;n++)if(i[n]===e)return!0;return!1},l.prototype.isTargetToShow=function(t){return this.hiddenTargetIds.indexOf(t)<0},l.prototype.isLegendToShow=function(t){return this.hiddenLegendIds.indexOf(t)<0},l.prototype.getTargetsToShow=function(){return this.filterTargetsToShow(this.data.targets)},l.prototype.filterTargetsToShow=function(t){var e=this;return t.filter(function(t){return e.isTargetToShow(t.id)})},l.prototype.getTargets=function(){return this.data.targets},l.prototype.mapTargetsToUniqueXs=function(t){var e=this.d3.set(this.d3.merge(t.map(function(t){return t.values.map(function(t){return+t.x})}))).values();return(e=this.isTimeSeries()?e.map(function(t){return new Date(+t)}):e.map(function(t){return+t})).sort(function(t,e){return t<e?-1:e<t?1:e<=t?0:NaN})},l.prototype.addHiddenTargetIds=function(t){t=t instanceof Array?t:new Array(t);for(var e=0;e<t.length;e++)this.hiddenTargetIds.indexOf(t[e])<0&&(this.hiddenTargetIds=this.hiddenTargetIds.concat(t[e]));this.resetCache()},l.prototype.removeHiddenTargetIds=function(e){this.hiddenTargetIds=this.hiddenTargetIds.filter(function(t){return e.indexOf(t)<0}),this.resetCache()},l.prototype.addHiddenLegendIds=function(t){t=t instanceof Array?t:new Array(t);for(var e=0;e<t.length;e++)this.hiddenLegendIds.indexOf(t[e])<0&&(this.hiddenLegendIds=this.hiddenLegendIds.concat(t[e]))},l.prototype.removeHiddenLegendIds=function(e){this.hiddenLegendIds=this.hiddenLegendIds.filter(function(t){return e.indexOf(t)<0})},l.prototype.getValuesAsIdKeyed=function(t){var i={};return t.forEach(function(e){i[e.id]=[],e.values.forEach(function(t){i[e.id].push(t.value)})}),i},l.prototype.checkValueInTargets=function(t,e){for(var i,n,r=Object.keys(t),a=0;a<r.length;a++)for(n=t[r[a]].values,i=0;i<n.length;i++)if(e(n[i].value))return!0;return!1},l.prototype.hasNegativeValueInTargets=function(t){return this.checkValueInTargets(t,function(t){return t<0})},l.prototype.hasPositiveValueInTargets=function(t){return this.checkValueInTargets(t,function(t){return 0<t})},l.prototype.isOrderDesc=function(){var t=this.config;return"string"==typeof t.data_order&&"desc"===t.data_order.toLowerCase()},l.prototype.isOrderAsc=function(){var t=this.config;return"string"==typeof t.data_order&&"asc"===t.data_order.toLowerCase()},l.prototype.getOrderFunction=function(){var t=this.config,r=this.isOrderAsc(),e=this.isOrderDesc();if(r||e){var a=function(t,e){return t+Math.abs(e.value)};return function(t,e){var i=t.values.reduce(a,0),n=e.values.reduce(a,0);return r?n-i:i-n}}if(h(t.data_order))return t.data_order;if(o(t.data_order)){var i=t.data_order;return function(t,e){return i.indexOf(t.id)-i.indexOf(e.id)}}},l.prototype.orderTargets=function(t){var e=this.getOrderFunction();return e&&t.sort(e),t},l.prototype.filterByIndex=function(t,e){return this.d3.merge(t.map(function(t){return t.values.filter(function(t){return t.index===e})}))},l.prototype.filterByX=function(t,e){return this.d3.merge(t.map(function(t){return t.values})).filter(function(t){return t.x-e==0})},l.prototype.filterRemoveNull=function(t){return t.filter(function(t){return C(t.value)})},l.prototype.filterByXDomain=function(t,e){return t.map(function(t){return{id:t.id,id_org:t.id_org,values:t.values.filter(function(t){return e[0]<=t.x&&t.x<=e[1]})}})},l.prototype.hasDataLabel=function(){var t=this.config;return!("boolean"!=typeof t.data_labels||!t.data_labels)||!("object"!=typeof t.data_labels||!L(t.data_labels))},l.prototype.getDataLabelLength=function(t,e,i){var n=this,r=[0,0];return n.selectChart.select("svg").selectAll(".dummy").data([t,e]).enter().append("text").text(function(t){return n.dataLabelFormat(t.id)(t)}).each(function(t,e){r[e]=1.3*d(this)[i]}).remove(),r},l.prototype.isNoneArc=function(t){return this.hasTarget(this.data.targets,t.id)},l.prototype.isArc=function(t){return"data"in t&&this.hasTarget(this.data.targets,t.data.id)},l.prototype.findClosestFromTargets=function(t,e){var i=this,n=t.map(function(t){return i.findClosest(t.values,e,i.config.tooltip_horizontal?i.horizontalDistance.bind(i):i.dist.bind(i),i.config.point_sensitivity)}).filter(function(t){return t});return 0===n.length?void 0:1===n.length?n[0]:i.findClosest(n,e,i.dist.bind(i))},l.prototype.findClosestFromTargetsByX=function(t,i){var n,r;return t.forEach(function(t){t.values.forEach(function(t){var e=Math.abs(i-t.x);(void 0===r||e<r)&&(n=t,r=e)})}),n},l.prototype.findClosest=function(t,i,n,r){void 0===r&&(r=1/0);var a,o=this;return t.filter(function(t){return t&&o.isBarType(t.id)}).forEach(function(t){var e;a||(e=o.main.select("."+Y.bars+o.getTargetSelectorSuffix(t.id)+" ."+Y.bar+"-"+t.index).node(),o.isWithinBar(i,e)&&(a=t))}),t.filter(function(t){return t&&!o.isBarType(t.id)}).forEach(function(t){var e=n(t,i);e<r&&(r=e,a=t)}),a},l.prototype.dist=function(t,e){var i=this.config,n=i.axis_rotated?1:0,r=i.axis_rotated?0:1,a=this.circleY(t,t.index),o=this.x(t.x);return Math.sqrt(Math.pow(o-e[n],2)+Math.pow(a-e[r],2))},l.prototype.horizontalDistance=function(t,e){var i=this.config.axis_rotated?1:0,n=this.x(t.x);return Math.abs(n-e[i])},l.prototype.convertValuesToStep=function(t){var e,i=[].concat(t);if(!this.isCategorized())return t;for(e=t.length+1;0<e;e--)i[e]=i[e-1];return i[0]={x:i[0].x-1,value:i[0].value,id:i[0].id},i[t.length+1]={x:i[t.length].x+1,value:i[t.length].value,id:i[t.length].id},i},l.prototype.getRatio=function(t,e,i){void 0===i&&(i=!1);var n,r=this,a=r.api,o=0;return e&&a.data.shown.call(a).length&&(o=e.ratio||e.value,"arc"===t?o=r.hasType("gauge")?(e.endAngle-e.startAngle)/(Math.PI*(r.config.gauge_fullCircle?2:1)):(n=r.getTotalDataSum(),e.value/n):"index"===t&&(n=r.getTotalPerIndex(r.axis.getId(e.id)),e.ratio=s(e.value)&&n&&0<n[e.index]?e.value/n[e.index]:0,o=e.ratio)),i&&o?100*o:o},l.prototype.updateDataAttributes=function(t,e){var i=this.config["data_"+t];return void 0===e||(Object.keys(e).forEach(function(t){i[t]=e[t]}),this.redraw({withLegend:!0})),i},l.prototype.load=function(i,n){var r=this;i&&(n.filter&&(i=i.filter(n.filter)),(n.type||n.types)&&i.forEach(function(t){var e=n.types&&n.types[t.id]?n.types[t.id]:n.type;r.setTargetType(t.id,e)}),r.data.targets.forEach(function(t){for(var e=0;e<i.length;e++)if(t.id===i[e].id){t.values=i[e].values,i.splice(e,1);break}}),r.data.targets=r.data.targets.concat(i)),r.updateTargets(r.data.targets),r.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),n.done&&n.done()},l.prototype.loadFromArgs=function(e){var i=this;i.resetCache(),e.data?i.load(i.convertDataToTargets(e.data),e):e.url?i.convertUrlToData(e.url,e.mimeType,e.headers,e.keys,function(t){i.load(i.convertDataToTargets(t),e)}):e.json?i.load(i.convertDataToTargets(i.convertJsonToData(e.json,e.keys)),e):e.rows?i.load(i.convertDataToTargets(i.convertRowsToData(e.rows)),e):e.columns?i.load(i.convertDataToTargets(i.convertColumnsToData(e.columns)),e):i.load(null,e)},l.prototype.unload=function(t,e){var i=this;i.resetCache(),e=e||function(){},(t=t.filter(function(t){return i.hasTarget(i.data.targets,t)}))&&0!==t.length?(i.svg.selectAll(t.map(function(t){return i.selectorTarget(t)})).transition().style("opacity",0).remove().call(i.endall,e),t.forEach(function(e){i.withoutFadeIn[e]=!1,i.legend&&i.legend.selectAll("."+Y.legendItem+i.getTargetSelectorSuffix(e)).remove(),i.data.targets=i.data.targets.filter(function(t){return t.id!==e})})):e()},l.prototype.getYDomainMin=function(t){var e,i,n,r,a,o,s=this,c=s.config,d=s.mapToIds(t),l=s.getValuesAsIdKeyed(t);if(0<c.data_groups.length)for(o=s.hasNegativeValueInTargets(t),e=0;e<c.data_groups.length;e++)if(0!==(r=c.data_groups[e].filter(function(t){return 0<=d.indexOf(t)})).length)for(n=r[0],o&&l[n]&&l[n].forEach(function(t,e){l[n][e]=t<0?t:0}),i=1;i<r.length;i++)a=r[i],l[a]&&l[a].forEach(function(t,e){s.axis.getId(a)!==s.axis.getId(n)||!l[n]||o&&0<+t||(l[n][e]+=+t)});return s.d3.min(Object.keys(l).map(function(t){return s.d3.min(l[t])}))},l.prototype.getYDomainMax=function(t){var e,i,n,r,a,o,s=this,c=s.config,d=s.mapToIds(t),l=s.getValuesAsIdKeyed(t);if(0<c.data_groups.length)for(o=s.hasPositiveValueInTargets(t),e=0;e<c.data_groups.length;e++)if(0!==(r=c.data_groups[e].filter(function(t){return 0<=d.indexOf(t)})).length)for(n=r[0],o&&l[n]&&l[n].forEach(function(t,e){l[n][e]=0<t?t:0}),i=1;i<r.length;i++)a=r[i],l[a]&&l[a].forEach(function(t,e){s.axis.getId(a)!==s.axis.getId(n)||!l[n]||o&&+t<0||(l[n][e]+=+t)});return s.d3.max(Object.keys(l).map(function(t){return s.d3.max(l[t])}))},l.prototype.getYDomain=function(t,e,i){var n=this,r=n.config;if(n.isAxisNormalized(e))return[0,100];var a,o,s,c,d,l,u,h,g,p,f,_=t.filter(function(t){return n.axis.getId(t.id)===e}),x=i?n.filterByXDomain(_,i):_,y="y2"===e?r.axis_y2_min:r.axis_y_min,m="y2"===e?r.axis_y2_max:r.axis_y_max,S=n.getYDomainMin(x),w=n.getYDomainMax(x),v="y2"===e?r.axis_y2_center:r.axis_y_center,b=n.hasType("bar",x)&&r.bar_zerobased||n.hasType("area",x)&&r.area_zerobased,T="y2"===e?r.axis_y2_inverted:r.axis_y_inverted,A=n.hasDataLabel()&&r.axis_rotated,P=n.hasDataLabel()&&!r.axis_rotated,S=C(y)?y:!C(m)||S<m?S:m-10,w=C(m)?m:!C(y)||y<w?w:y+10;return 0===x.length?"y2"===e?n.y2.domain():n.y.domain():(isNaN(S)&&(S=0),isNaN(w)&&(w=S),S===w&&(S<0?w=0:S=0),g=0<=S&&0<=w,p=S<=0&&w<=0,(C(y)&&g||C(m)&&p)&&(b=!1),b&&(g&&(S=0),p&&(w=0)),s=c=.1*(o=Math.abs(w-S)),void 0!==v&&(w=v+(d=Math.max(Math.abs(S),Math.abs(w))),S=v-d),A?(l=n.getDataLabelLength(S,w,"width"),u=R(n.y.range()),s+=o*((h=[l[0]/u,l[1]/u])[1]/(1-h[0]-h[1])),c+=o*(h[0]/(1-h[0]-h[1]))):P&&(l=n.getDataLabelLength(S,w,"height"),s+=(f=n.getY(r["axis_"+e+"_type"],[0,r.axis_rotated?n.width:n.height],[0,o]))(l[1]),c+=f(l[0])),"y"===e&&L(r.axis_y_padding)&&(s=n.axis.getPadding(r.axis_y_padding,"top",s,o),c=n.axis.getPadding(r.axis_y_padding,"bottom",c,o)),"y2"===e&&L(r.axis_y2_padding)&&(s=n.axis.getPadding(r.axis_y2_padding,"top",s,o),c=n.axis.getPadding(r.axis_y2_padding,"bottom",c,o)),b&&(g&&(c=S),p&&(s=-w)),a=[S-c,w+s],T?a.reverse():a)},l.prototype.getXDomainMin=function(t){var e=this,i=e.config;return k(i.axis_x_min)?e.isTimeSeries()?this.parseDate(i.axis_x_min):i.axis_x_min:e.d3.min(t,function(t){return e.d3.min(t.values,function(t){return t.x})})},l.prototype.getXDomainMax=function(t){var e=this,i=e.config;return k(i.axis_x_max)?e.isTimeSeries()?this.parseDate(i.axis_x_max):i.axis_x_max:e.d3.max(t,function(t){return e.d3.max(t.values,function(t){return t.x})})},l.prototype.getXDomainPadding=function(t){var e,i,n,r=this.config,a=t[1]-t[0],o=this.isCategorized()?0:this.hasType("bar")?1<(e=this.getMaxDataCount())?a/(e-1)/2:.5:.01*a;return"object"==typeof r.axis_x_padding&&L(r.axis_x_padding)?(i=C(r.axis_x_padding.left)?r.axis_x_padding.left:o,n=C(r.axis_x_padding.right)?r.axis_x_padding.right:o):i=n="number"==typeof r.axis_x_padding?r.axis_x_padding:o,{left:i,right:n}},l.prototype.getXDomain=function(t){var e=this,i=[e.getXDomainMin(t),e.getXDomainMax(t)],n=i[0],r=i[1],a=e.getXDomainPadding(i),o=0,s=0;return n-r!=0||e.isCategorized()||(r=e.isTimeSeries()?(n=new Date(.5*n.getTime()),new Date(1.5*r.getTime())):(n=0===n?1:.5*n,0===r?-1:1.5*r)),!n&&0!==n||(o=e.isTimeSeries()?new Date(n.getTime()-a.left):n-a.left),!r&&0!==r||(s=e.isTimeSeries()?new Date(r.getTime()+a.right):r+a.right),[o,s]},l.prototype.updateXDomain=function(t,e,i,n,r){var a=this,o=a.config;return i&&(a.x.domain(r||a.d3.extent(a.getXDomain(t))),a.orgXDomain=a.x.domain(),o.zoom_enabled&&a.zoom.update(),a.subX.domain(a.x.domain()),a.brush&&a.brush.updateScale(a.subX)),e&&a.x.domain(r||(!a.brush||a.brush.empty()?a.orgXDomain:a.brush.selectionAsValue())),n&&a.x.domain(a.trimXDomain(a.x.orgDomain())),a.x.domain()},l.prototype.trimXDomain=function(t){var e=this.getZoomDomain(),i=e[0],n=e[1];return t[0]<=i&&(t[1]=+t[1]+(i-t[0]),t[0]=i),n<=t[1]&&(t[0]=t[0]-(t[1]-n),t[1]=n),t},l.prototype.drag=function(t){var e,i,n,r,h,g,p,f,_=this,x=_.config,a=_.main,y=_.d3;_.hasArcType()||x.data_selection_enabled&&x.data_selection_multiple&&(e=_.dragStart[0],i=_.dragStart[1],n=t[0],r=t[1],h=Math.min(e,n),g=Math.max(e,n),p=x.data_selection_grouped?_.margin.top:Math.min(i,r),f=x.data_selection_grouped?_.height:Math.max(i,r),a.select("."+Y.dragarea).attr("x",h).attr("y",p).attr("width",g-h).attr("height",f-p),a.selectAll("."+Y.shapes).selectAll("."+Y.shape).each(function(t,e){if(x.data_selection_isselectable(t)){var i,n,r,a,o,s,c=y.select(this),d=c.classed(Y.SELECTED),l=c.classed(Y.INCLUDED),u=!1;if(c.classed(Y.circle))i=+c.attr("cx"),n=+c.attr("cy"),o=_.togglePoint,u=h<i&&i<g&&p<n&&n<f;else{if(!c.classed(Y.bar))return;i=(s=m(this)).x,n=s.y,r=s.width,a=s.height,o=_.togglePath,u=!(g<i||i+r<h||f<n||n+a<p)}u^l&&(c.classed(Y.INCLUDED,!l),c.classed(Y.SELECTED,!d),o.call(_,!d,c,t,e))}}))},l.prototype.dragstart=function(t){var e=this,i=e.config;e.hasArcType()||i.data_selection_enabled&&(e.dragStart=t,e.main.select("."+Y.chart).append("rect").attr("class",Y.dragarea).style("opacity",.1),e.dragging=!0)},l.prototype.dragend=function(){var t=this,e=t.config;t.hasArcType()||e.data_selection_enabled&&(t.main.select("."+Y.dragarea).transition().duration(100).style("opacity",0).remove(),t.main.selectAll("."+Y.shape).classed(Y.INCLUDED,!1),t.dragging=!1)},l.prototype.getYFormat=function(t){var n=this,r=t&&!n.hasType("gauge")?n.defaultArcValueFormat:n.yFormat,a=t&&!n.hasType("gauge")?n.defaultArcValueFormat:n.y2Format;return function(t,e,i){return("y2"===n.axis.getId(i)?a:r).call(n,t,e)}},l.prototype.yFormat=function(t){var e=this.config;return(e.axis_y_tick_format?e.axis_y_tick_format:this.defaultValueFormat)(t)},l.prototype.y2Format=function(t){var e=this.config;return(e.axis_y2_tick_format?e.axis_y2_tick_format:this.defaultValueFormat)(t)},l.prototype.defaultValueFormat=function(t){return C(t)?+t:""},l.prototype.defaultArcValueFormat=function(t,e){return(100*e).toFixed(1)+"%"},l.prototype.dataLabelFormat=function(t){function e(t){return C(t)?+t:""}var i=this.config.data_labels,n="function"==typeof i.format?i.format:"object"==typeof i.format?i.format[t]?!0===i.format[t]?e:i.format[t]:function(){return""}:e;return n},l.prototype.initGrid=function(){var t=this,e=t.config,i=t.d3;t.grid=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class",Y.grid),e.grid_x_show&&t.grid.append("g").attr("class",Y.xgrids),e.grid_y_show&&t.grid.append("g").attr("class",Y.ygrids),e.grid_focus_show&&t.grid.append("g").attr("class",Y.xgridFocus).append("line").attr("class",Y.xgridFocus),t.xgrid=i.selectAll([]),e.grid_lines_front||t.initGridLines()},l.prototype.initGridLines=function(){var t=this,e=t.d3;t.gridLines=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class",Y.grid+" "+Y.gridLines),t.gridLines.append("g").attr("class",Y.xgridLines),t.gridLines.append("g").attr("class",Y.ygridLines),t.xgridLines=e.selectAll([])},l.prototype.updateXGrid=function(t){var e=this,i=e.config,n=e.d3,r=e.generateGridData(i.grid_x_type,e.x),a=e.isCategorized()?e.xAxis.tickOffset():0;e.xgridAttr=i.axis_rotated?{x1:0,x2:e.width,y1:function(t){return e.x(t)-a},y2:function(t){return e.x(t)-a}}:{x1:function(t){return e.x(t)+a},x2:function(t){return e.x(t)+a},y1:0,y2:e.height},e.xgridAttr.opacity=function(){return+n.select(this).attr(i.axis_rotated?"y1":"x1")===(i.axis_rotated?e.height:0)?0:1};var o=e.main.select("."+Y.xgrids).selectAll("."+Y.xgrid).data(r),s=o.enter().append("line").attr("class",Y.xgrid).attr("x1",e.xgridAttr.x1).attr("x2",e.xgridAttr.x2).attr("y1",e.xgridAttr.y1).attr("y2",e.xgridAttr.y2).style("opacity",0);e.xgrid=s.merge(o),t||e.xgrid.attr("x1",e.xgridAttr.x1).attr("x2",e.xgridAttr.x2).attr("y1",e.xgridAttr.y1).attr("y2",e.xgridAttr.y2).style("opacity",e.xgridAttr.opacity),o.exit().remove()},l.prototype.updateYGrid=function(){var t=this,e=t.config,i=t.yAxis.tickValues()||t.y.ticks(e.grid_y_ticks),n=t.main.select("."+Y.ygrids).selectAll("."+Y.ygrid).data(i),r=n.enter().append("line").attr("class",Y.ygrid);t.ygrid=r.merge(n),t.ygrid.attr("x1",e.axis_rotated?t.y:0).attr("x2",e.axis_rotated?t.y:t.width).attr("y1",e.axis_rotated?0:t.y).attr("y2",e.axis_rotated?t.height:t.y),n.exit().remove(),t.smoothLines(t.ygrid,"grid")},l.prototype.gridTextAnchor=function(t){return t.position?t.position:"end"},l.prototype.gridTextDx=function(t){return"start"===t.position?4:"middle"===t.position?0:-4},l.prototype.xGridTextX=function(t){return"start"===t.position?-this.height:"middle"===t.position?-this.height/2:0},l.prototype.yGridTextX=function(t){return"start"===t.position?0:"middle"===t.position?this.width/2:this.width},l.prototype.updateGrid=function(t){var e,i,n,r,a=this,o=a.main,s=a.config,c=a.xv.bind(a),d=a.yv.bind(a),l=a.xGridTextX.bind(a),u=a.yGridTextX.bind(a);a.grid.style("visibility",a.hasArcType()?"hidden":"visible"),o.select("line."+Y.xgridFocus).style("visibility","hidden"),s.grid_x_show&&a.updateXGrid(),(i=(e=o.select("."+Y.xgridLines).selectAll("."+Y.xgridLine).data(s.grid_x_lines)).enter().append("g").attr("class",function(t){return Y.xgridLine+(t.class?" "+t.class:"")})).append("line").attr("x1",s.axis_rotated?0:c).attr("x2",s.axis_rotated?a.width:c).attr("y1",s.axis_rotated?c:0).attr("y2",s.axis_rotated?c:a.height).style("opacity",0),i.append("text").attr("text-anchor",a.gridTextAnchor).attr("transform",s.axis_rotated?"":"rotate(-90)").attr("x",s.axis_rotated?u:l).attr("y",c).attr("dx",a.gridTextDx).attr("dy",-5).style("opacity",0),a.xgridLines=i.merge(e),e.exit().transition().duration(t).style("opacity",0).remove(),s.grid_y_show&&a.updateYGrid(),(r=(n=o.select("."+Y.ygridLines).selectAll("."+Y.ygridLine).data(s.grid_y_lines)).enter().append("g").attr("class",function(t){return Y.ygridLine+(t.class?" "+t.class:"")})).append("line").attr("x1",s.axis_rotated?d:0).attr("x2",s.axis_rotated?d:a.width).attr("y1",s.axis_rotated?0:d).attr("y2",s.axis_rotated?a.height:d).style("opacity",0),r.append("text").attr("text-anchor",a.gridTextAnchor).attr("transform",s.axis_rotated?"rotate(-90)":"").attr("x",s.axis_rotated?l:u).attr("y",d).attr("dx",a.gridTextDx).attr("dy",-5).style("opacity",0),a.ygridLines=r.merge(n),a.ygridLines.select("line").transition().duration(t).attr("x1",s.axis_rotated?d:0).attr("x2",s.axis_rotated?d:a.width).attr("y1",s.axis_rotated?0:d).attr("y2",s.axis_rotated?a.height:d).style("opacity",1),a.ygridLines.select("text").transition().duration(t).attr("x",s.axis_rotated?a.xGridTextX.bind(a):a.yGridTextX.bind(a)).attr("y",d).text(function(t){return t.text}).style("opacity",1),n.exit().transition().duration(t).style("opacity",0).remove()},l.prototype.redrawGrid=function(t,e){var i=this,n=i.config,r=i.xv.bind(i),a=i.xgridLines.select("line"),o=i.xgridLines.select("text");return[(t?a.transition(e):a).attr("x1",n.axis_rotated?0:r).attr("x2",n.axis_rotated?i.width:r).attr("y1",n.axis_rotated?r:0).attr("y2",n.axis_rotated?r:i.height).style("opacity",1),(t?o.transition(e):o).attr("x",n.axis_rotated?i.yGridTextX.bind(i):i.xGridTextX.bind(i)).attr("y",r).text(function(t){return t.text}).style("opacity",1)]},l.prototype.showXGridFocus=function(t){var e=this,i=e.config,n=t.filter(function(t){return t&&C(t.value)}),r=e.main.selectAll("line."+Y.xgridFocus),a=e.xx.bind(e);i.tooltip_show&&(e.hasType("stanford")||e.hasArcType()||(r.style("visibility","visible").data([n[0]]).attr(i.axis_rotated?"y1":"x1",a).attr(i.axis_rotated?"y2":"x2",a),e.smoothLines(r,"grid")))},l.prototype.hideXGridFocus=function(){this.main.select("line."+Y.xgridFocus).style("visibility","hidden")},l.prototype.updateXgridFocus=function(){var t=this.config;this.main.select("line."+Y.xgridFocus).attr("x1",t.axis_rotated?0:-10).attr("x2",t.axis_rotated?this.width:-10).attr("y1",t.axis_rotated?-10:0).attr("y2",t.axis_rotated?-10:this.height)},l.prototype.generateGridData=function(t,e){var i,n,r,a,o=[],s=this.main.select("."+Y.axisX).selectAll(".tick").size();if("year"===t)for(n=(i=this.getXDomain())[0].getFullYear(),r=i[1].getFullYear(),a=n;a<=r;a++)o.push(new Date(a+"-01-01 00:00:00"));else(o=e.ticks(10)).length>s&&(o=o.filter(function(t){return(""+t).indexOf(".")<0}));return o},l.prototype.getGridFilterToRemove=function(t){return t?function(e){var i=!1;return[].concat(t).forEach(function(t){("value"in t&&e.value===t.value||"class"in t&&e.class===t.class)&&(i=!0)}),i}:function(){return!0}},l.prototype.removeGridLines=function(t,e){function i(t){return!r(t)}var n=this.config,r=this.getGridFilterToRemove(t),a=e?Y.xgridLines:Y.ygridLines,o=e?Y.xgridLine:Y.ygridLine;this.main.select("."+a).selectAll("."+o).filter(r).transition().duration(n.transition_duration).style("opacity",0).remove(),e?n.grid_x_lines=n.grid_x_lines.filter(i):n.grid_y_lines=n.grid_y_lines.filter(i)},l.prototype.initEventRect=function(){var t=this,e=t.config;t.main.select("."+Y.chart).append("g").attr("class",Y.eventRects).style("fill-opacity",0),t.eventRect=t.main.select("."+Y.eventRects).append("rect").attr("class",Y.eventRect),e.zoom_enabled&&t.zoom&&(t.eventRect.call(t.zoom).on("dblclick.zoom",null),e.zoom_initialRange&&t.eventRect.transition().duration(0).call(t.zoom.transform,t.zoomTransform(e.zoom_initialRange)))},l.prototype.redrawEventRect=function(){var s=this,c=s.d3,d=s.config;function l(){s.svg.select("."+Y.eventRect).style("cursor",null),s.hideXGridFocus(),s.hideTooltip(),s.unexpandCircles(),s.unexpandBars()}function u(t,e){return e&&(s.isBarType(e.id)||s.dist(e,t)<d.point_sensitivity)}function h(t){return t?s.addName(Object.assign({},t)):null}s.main.select("."+Y.eventRects).style("cursor",d.zoom_enabled?d.axis_rotated?"ns-resize":"ew-resize":null),s.eventRect.attr("x",0).attr("y",0).attr("width",s.width).attr("height",s.height).on("mouseout",d.interaction_enabled?function(){d&&(s.hasArcType()||(s.mouseover&&(d.data_onmouseout.call(s.api,s.mouseover),s.mouseover=void 0),l()))}:null).on("mousemove",d.interaction_enabled?function(){if(!s.dragging){var t=s.getTargetsToShow();if(!s.hasArcType(t)){var e,i,n,r=c.mouse(this),a=h(s.findClosestFromTargets(t,r)),o=u(r,a);if(!s.mouseover||a&&a.id===s.mouseover.id&&a.index===s.mouseover.index||(d.data_onmouseout.call(s.api,s.mouseover),s.mouseover=void 0),a&&!s.mouseover&&(d.data_onmouseover.call(s.api,a),s.mouseover=a),s.svg.select("."+Y.eventRect).style("cursor",o?"pointer":null),!d.tooltip_grouped||s.hasType("stanford",t)?a&&(e=[a]):(n=void 0,(n=a||(i=d.axis_rotated?r[1]:r[0],s.findClosestFromTargetsByX(t,s.x.invert(i))))&&(e=s.filterByX(t,n.x))),!e||0===e.length)return l();e=e.map(h),s.showTooltip(e,this),d.point_focus_expand_enabled&&(s.unexpandCircles(),e.forEach(function(t){s.expandCircles(t.index,t.id,!1)})),s.unexpandBars(),e.forEach(function(t){s.expandBars(t.index,t.id,!1)}),s.showXGridFocus(e)}}}:null).on("click",d.interaction_enabled?function(){var t,e,i,n=s.getTargetsToShow();s.hasArcType(n)||(t=c.mouse(this),e=h(s.findClosestFromTargets(n,t)),u(t,e)&&((!d.data_selection_grouped||s.isStanfordType(e)?[e]:s.filterByX(n,e.x)).forEach(function(t){s.main.selectAll("."+Y.shapes+s.getTargetSelectorSuffix(t.id)).selectAll("."+Y.shape+"-"+t.index).each(function(){(d.data_selection_grouped||s.isWithinShape(this,t))&&s.toggleShape(this,t,t.index)})}),e&&(i=s.main.selectAll("."+Y.shapes+s.getTargetSelectorSuffix(e.id)).select("."+Y.shape+"-"+e.index),d.data_onclick.call(s.api,e,i.node()))))}:null).call(d.interaction_enabled&&d.data_selection_draggable&&s.drag?c.drag().on("drag",function(){s.drag(c.mouse(this))}).on("start",function(){s.dragstart(c.mouse(this))}).on("end",function(){s.dragend()}):function(){})},l.prototype.getMousePosition=function(t){return[this.x(t.x),this.getYScale(t.id)(t.value)]},l.prototype.dispatchEvent=function(t,e){var i="."+Y.eventRect,n=this.main.select(i).node(),r=n.getBoundingClientRect(),a=r.left+(e?e[0]:0),o=r.top+(e?e[1]:0),s=document.createEvent("MouseEvents");s.initMouseEvent(t,!0,!0,window,0,a,o,a,o,!1,!1,!1,!1,0,null),n.dispatchEvent(s)},l.prototype.initLegend=function(){var t=this;if(t.legendItemTextBox={},t.legendHasRendered=!1,t.legend=t.svg.append("g").attr("transform",t.getTranslate("legend")),!t.config.legend_show)return t.legend.style("visibility","hidden"),void(t.hiddenLegendIds=t.mapToIds(t.data.targets));t.updateLegendWithDefaults()},l.prototype.updateLegendWithDefaults=function(){this.updateLegend(this.mapToIds(this.data.targets),{withTransform:!1,withTransitionForTransform:!1,withTransition:!1})},l.prototype.updateSizeForLegend=function(t,e){var i=this,n=i.config,r={top:i.isLegendTop?i.getCurrentPaddingTop()+n.legend_inset_y+5.5:i.currentHeight-t-i.getCurrentPaddingBottom()-n.legend_inset_y,left:i.isLegendLeft?i.getCurrentPaddingLeft()+n.legend_inset_x+.5:i.currentWidth-e-i.getCurrentPaddingRight()-n.legend_inset_x+.5};i.margin3={top:i.isLegendRight?0:i.isLegendInset?r.top:i.currentHeight-t,right:NaN,bottom:0,left:i.isLegendRight?i.currentWidth-e:i.isLegendInset?r.left:0}},l.prototype.transformLegend=function(t){(t?this.legend.transition():this.legend).attr("transform",this.getTranslate("legend"))},l.prototype.updateLegendStep=function(t){this.legendStep=t},l.prototype.updateLegendItemWidth=function(t){this.legendItemWidth=t},l.prototype.updateLegendItemHeight=function(t){this.legendItemHeight=t},l.prototype.getLegendWidth=function(){var t=this;return t.config.legend_show?t.isLegendRight||t.isLegendInset?t.legendItemWidth*(t.legendStep+1):t.currentWidth:0},l.prototype.getLegendHeight=function(){var t=this,e=0;return t.config.legend_show&&(e=t.isLegendRight?t.currentHeight:Math.max(20,t.legendItemHeight)*(t.legendStep+1)),e},l.prototype.opacityForLegend=function(t){return t.classed(Y.legendItemHidden)?null:1},l.prototype.opacityForUnfocusedLegend=function(t){return t.classed(Y.legendItemHidden)?null:.3},l.prototype.toggleFocusLegend=function(e,t){var i=this;e=i.mapToTargetIds(e),i.legend.selectAll("."+Y.legendItem).filter(function(t){return 0<=e.indexOf(t)}).classed(Y.legendItemFocused,t).transition().duration(100).style("opacity",function(){return(t?i.opacityForLegend:i.opacityForUnfocusedLegend).call(i,i.d3.select(this))})},l.prototype.revertLegend=function(){var t=this,e=t.d3;t.legend.selectAll("."+Y.legendItem).classed(Y.legendItemFocused,!1).transition().duration(100).style("opacity",function(){return t.opacityForLegend(e.select(this))})},l.prototype.showLegend=function(t){var e=this,i=e.config;i.legend_show||(i.legend_show=!0,e.legend.style("visibility","visible"),e.legendHasRendered||e.updateLegendWithDefaults()),e.removeHiddenLegendIds(t),e.legend.selectAll(e.selectorLegends(t)).style("visibility","visible").transition().style("opacity",function(){return e.opacityForLegend(e.d3.select(this))})},l.prototype.hideLegend=function(t){var e=this,i=e.config;i.legend_show&&u(t)&&(i.legend_show=!1,e.legend.style("visibility","hidden")),e.addHiddenLegendIds(t),e.legend.selectAll(e.selectorLegends(t)).style("opacity",0).style("visibility","hidden")},l.prototype.clearLegendItemTextBoxCache=function(){this.legendItemTextBox={}},l.prototype.updateLegend=function(f,t,e){var i,n,r,a,o,s,c,d,l,u,h,g,p,_,x,y,m=this,S=m.config,w=4,v=10,b=0,T=0,A=10,P=S.legend_item_tile_width+5,C=0,L={},V={},G={},E=[0],O={},I=0;function R(t,e,i){var n,r,a,o,s=0===i,c=i===f.length-1,d=(a=t,o=e,m.legendItemTextBox[o]||(m.legendItemTextBox[o]=m.getTextRect(a.textContent,Y.legendItem,a)),m.legendItemTextBox[o]),l=d.width+P+(!c||m.isLegendRight||m.isLegendInset?v:0)+S.legend_padding,u=d.height+w,h=m.isLegendRight||m.isLegendInset?u:l,g=m.isLegendRight||m.isLegendInset?m.getLegendHeight():m.getLegendWidth();function p(t,e){e||(n=(g-C-h)/2)<A&&(n=(g-h)/2,C=0,I++),O[t]=I,E[I]=m.isLegendInset?10:n,L[t]=C,C+=h}s&&(T=b=I=C=0),!S.legend_show||m.isLegendToShow(e)?(V[e]=l,G[e]=u,(!b||b<=l)&&(b=l),(!T||T<=u)&&(T=u),r=m.isLegendRight||m.isLegendInset?T:b,S.legend_equally?(Object.keys(V).forEach(function(t){V[t]=b}),Object.keys(G).forEach(function(t){G[t]=T}),(n=(g-r*f.length)/2)<A?(I=C=0,f.forEach(function(t){p(t)})):p(e,!0)):p(e)):V[e]=G[e]=O[e]=L[e]=0}f=f.filter(function(t){return!k(S.data_names[t])||null!==S.data_names[t]}),h=B(t=t||{},"withTransition",!0),g=B(t,"withTransitionForTransform",!0),m.isLegendInset&&(I=S.legend_inset_step?S.legend_inset_step:f.length,m.updateLegendStep(I)),a=m.isLegendRight?(i=function(t){return b*O[t]},function(t){return E[O[t]]+L[t]}):m.isLegendInset?(i=function(t){return b*O[t]+10},function(t){return E[O[t]]+L[t]}):(i=function(t){return E[O[t]]+L[t]},function(t){return T*O[t]}),n=function(t,e){return i(t,e)+4+S.legend_item_tile_width},o=function(t,e){return a(t,e)+9},r=function(t,e){return i(t,e)},s=function(t,e){return a(t,e)-5},c=function(t,e){return i(t,e)-2},d=function(t,e){return i(t,e)-2+S.legend_item_tile_width},l=function(t,e){return a(t,e)+4},(u=m.legend.selectAll("."+Y.legendItem).data(f).enter().append("g").attr("class",function(t){return m.generateClass(Y.legendItem,t)}).style("visibility",function(t){return m.isLegendToShow(t)?"visible":"hidden"}).style("cursor",function(){return S.interaction_enabled?"pointer":"auto"}).on("click",S.interaction_enabled?function(t){S.legend_item_onclick?S.legend_item_onclick.call(m,t):m.d3.event.altKey?(m.api.hide(),m.api.show(t)):(m.api.toggle(t),m.isTargetToShow(t)?m.api.focus(t):m.api.revert())}:null).on("mouseover",S.interaction_enabled?function(t){S.legend_item_onmouseover?S.legend_item_onmouseover.call(m,t):(m.d3.select(this).classed(Y.legendItemFocused,!0),!m.transiting&&m.isTargetToShow(t)&&m.api.focus(t))}:null).on("mouseout",S.interaction_enabled?function(t){S.legend_item_onmouseout?S.legend_item_onmouseout.call(m,t):(m.d3.select(this).classed(Y.legendItemFocused,!1),m.api.revert())}:null)).append("text").text(function(t){return k(S.data_names[t])?S.data_names[t]:t}).each(function(t,e){R(this,t,e)}).style("pointer-events","none").attr("x",m.isLegendRight||m.isLegendInset?n:-200).attr("y",m.isLegendRight||m.isLegendInset?-200:o),u.append("rect").attr("class",Y.legendItemEvent).style("fill-opacity",0).attr("x",m.isLegendRight||m.isLegendInset?r:-200).attr("y",m.isLegendRight||m.isLegendInset?-200:s),u.append("line").attr("class",Y.legendItemTile).style("stroke",m.color).style("pointer-events","none").attr("x1",m.isLegendRight||m.isLegendInset?c:-200).attr("y1",m.isLegendRight||m.isLegendInset?-200:l).attr("x2",m.isLegendRight||m.isLegendInset?d:-200).attr("y2",m.isLegendRight||m.isLegendInset?-200:l).attr("stroke-width",S.legend_item_tile_height),y=m.legend.select("."+Y.legendBackground+" rect"),m.isLegendInset&&0<b&&0===y.size()&&(y=m.legend.insert("g","."+Y.legendItem).attr("class",Y.legendBackground).append("rect")),p=m.legend.selectAll("text").data(f).text(function(t){return k(S.data_names[t])?S.data_names[t]:t}).each(function(t,e){R(this,t,e)}),(h?p.transition():p).attr("x",n).attr("y",o),_=m.legend.selectAll("rect."+Y.legendItemEvent).data(f),(h?_.transition():_).attr("width",function(t){return V[t]}).attr("height",function(t){return G[t]}).attr("x",r).attr("y",s),x=m.legend.selectAll("line."+Y.legendItemTile).data(f),(h?x.transition():x).style("stroke",m.levelColor?function(t){return m.levelColor(m.cache[t].values.reduce(function(t,e){return t+e.value},0))}:m.color).attr("x1",c).attr("y1",l).attr("x2",d).attr("y2",l),y&&(h?y.transition():y).attr("height",m.getLegendHeight()-12).attr("width",b*(I+1)+10),m.legend.selectAll("."+Y.legendItem).classed(Y.legendItemHidden,function(t){return!m.isTargetToShow(t)}),m.updateLegendItemWidth(b),m.updateLegendItemHeight(T),m.updateLegendStep(I),m.updateSizes(),m.updateScales(),m.updateSvgSize(),m.transformAll(g,e),m.legendHasRendered=!0},l.prototype.initRegion=function(){this.region=this.main.append("g").attr("clip-path",this.clipPath).attr("class",Y.regions)},l.prototype.updateRegion=function(t){var e=this,i=e.config;e.region.style("visibility",e.hasArcType()?"hidden":"visible");var n=e.main.select("."+Y.regions).selectAll("."+Y.region).data(i.regions),r=n.enter().append("g");r.append("rect").attr("x",e.regionX.bind(e)).attr("y",e.regionY.bind(e)).attr("width",e.regionWidth.bind(e)).attr("height",e.regionHeight.bind(e)).style("fill-opacity",function(t){return C(t.opacity)?t.opacity:.1}),r.append("text").text(e.labelRegion.bind(e)),e.mainRegion=r.merge(n).attr("class",e.classRegion.bind(e)),n.exit().transition().duration(t).style("opacity",0).remove()},l.prototype.redrawRegion=function(t,e){var i=this,n=i.mainRegion,r=i.mainRegion.selectAll("text");return[(t?n.transition(e):n).attr("x",i.regionX.bind(i)).attr("y",i.regionY.bind(i)).attr("width",i.regionWidth.bind(i)).attr("height",i.regionHeight.bind(i)).style("fill-opacity",function(t){return C(t.opacity)?t.opacity:.1}),(t?r.transition(e):r).attr("x",i.labelOffsetX.bind(i)).attr("y",i.labelOffsetY.bind(i)).attr("transform",i.labelTransform.bind(i)).attr("style","text-anchor: left;")]},l.prototype.regionX=function(t){var e=this,i=e.config,n="y"===t.axis?e.y:e.y2,r="y"===t.axis||"y2"===t.axis?i.axis_rotated&&"start"in t?n(t.start):0:!i.axis_rotated&&"start"in t?e.x(e.isTimeSeries()?e.parseDate(t.start):t.start):0;return r},l.prototype.regionY=function(t){var e=this,i=e.config,n="y"===t.axis?e.y:e.y2,r="y"===t.axis||"y2"===t.axis?!i.axis_rotated&&"end"in t?n(t.end):0:i.axis_rotated&&"start"in t?e.x(e.isTimeSeries()?e.parseDate(t.start):t.start):0;return r},l.prototype.regionWidth=function(t){var e=this,i=e.config,n=e.regionX(t),r="y"===t.axis?e.y:e.y2,a="y"===t.axis||"y2"===t.axis?i.axis_rotated&&"end"in t?r(t.end):e.width:!i.axis_rotated&&"end"in t?e.x(e.isTimeSeries()?e.parseDate(t.end):t.end):e.width;return a<n?0:a-n},l.prototype.regionHeight=function(t){var e=this,i=e.config,n=this.regionY(t),r="y"===t.axis?e.y:e.y2,a="y"===t.axis||"y2"===t.axis?!i.axis_rotated&&"start"in t?r(t.start):e.height:i.axis_rotated&&"end"in t?e.x(e.isTimeSeries()?e.parseDate(t.end):t.end):e.height;return a<n?0:a-n},l.prototype.isRegionOnX=function(t){return!t.axis||"x"===t.axis},l.prototype.labelRegion=function(t){return"label"in t?t.label:""},l.prototype.labelTransform=function(t){return"vertical"in t&&t.vertical?"rotate(90)":""},l.prototype.labelOffsetX=function(t){var e="paddingX"in t?t.paddingX:3,i="paddingY"in t?t.paddingY:3;return"vertical"in t&&t.vertical?this.regionY(t)+i:this.regionX(t)+e},l.prototype.labelOffsetY=function(t){var e="paddingX"in t?t.paddingX:3,i="paddingY"in t?t.paddingY:3;return"vertical"in t&&t.vertical?-(this.regionX(t)+e):this.regionY(t)+10+i},l.prototype.getScale=function(t,e,i){return(i?this.d3.scaleTime():this.d3.scaleLinear()).range([t,e])},l.prototype.getX=function(t,e,i,n){var r,a=this.getScale(t,e,this.isTimeSeries()),o=i?a.domain(i):a,a=this.isCategorized()?(n=n||function(){return 0},function(t,e){var i=o(t)+n(t);return e?i:Math.ceil(i)}):function(t,e){var i=o(t);return e?i:Math.ceil(i)};for(r in o)a[r]=o[r];return a.orgDomain=function(){return o.domain()},this.isCategorized()&&(a.domain=function(t){return arguments.length?(o.domain(t),a):[(t=this.orgDomain())[0],t[1]+1]}),a},l.prototype.getY=function(t,e,i){var n;if("timeseries"===t||"time"===t)n=this.d3.scaleTime();else if("log"===t)n=f(this.d3);else{if("linear"!==t&&void 0!==t)throw new Error('Invalid Y axis type: "'+t+'"');n=this.d3.scaleLinear()}return e&&n.domain(e),i&&n.range(i),n},l.prototype.getYScale=function(t){return"y2"===this.axis.getId(t)?this.y2:this.y},l.prototype.getSubYScale=function(t){return"y2"===this.axis.getId(t)?this.subY2:this.subY},l.prototype.updateScales=function(){var e=this,t=e.config,i=!e.x;e.xMin=t.axis_rotated?1:0,e.xMax=t.axis_rotated?e.height:e.width,e.yMin=t.axis_rotated?0:e.height,e.yMax=t.axis_rotated?e.width:1,e.subXMin=e.xMin,e.subXMax=e.xMax,e.subYMin=t.axis_rotated?0:e.height2,e.subYMax=t.axis_rotated?e.width2:1,e.x=e.getX(e.xMin,e.xMax,i?void 0:e.x.orgDomain(),function(){return e.xAxis.tickOffset()}),e.y=e.getY(t.axis_y_type,i?t.axis_y_default:e.y.domain(),[e.yMin,e.yMax]),e.y2=e.getY(t.axis_y2_type,i?t.axis_y2_default:e.y2.domain(),[e.yMin,e.yMax]),e.subX=e.getX(e.xMin,e.xMax,e.orgXDomain,function(t){return t%1?0:e.subXAxis.tickOffset()}),e.subY=e.getY(t.axis_y_type,i?t.axis_y_default:e.subY.domain(),[e.subYMin,e.subYMax]),e.subY2=e.getY(t.axis_y2_type,i?t.axis_y2_default:e.subY2.domain(),[e.subYMin,e.subYMax]),e.xAxisTickFormat=e.axis.getXAxisTickFormat(),e.xAxisTickValues=e.axis.getXAxisTickValues(),e.yAxisTickValues=e.axis.getYAxisTickValues(),e.y2AxisTickValues=e.axis.getY2AxisTickValues(),e.xAxis=e.axis.getXAxis(e.x,e.xOrient,e.xAxisTickFormat,e.xAxisTickValues,t.axis_x_tick_outer),e.subXAxis=e.axis.getXAxis(e.subX,e.subXOrient,e.xAxisTickFormat,e.xAxisTickValues,t.axis_x_tick_outer),e.yAxis=e.axis.getYAxis("y",e.y,e.yOrient,e.yAxisTickValues,t.axis_y_tick_outer),e.y2Axis=e.axis.getYAxis("y2",e.y2,e.y2Orient,e.y2AxisTickValues,t.axis_y2_tick_outer),i||e.brush&&e.brush.updateScale(e.subX),e.updateArc&&e.updateArc()},l.prototype.selectPoint=function(t,e,i){var n=this,r=n.config,a=(r.axis_rotated?n.circleY:n.circleX).bind(n),o=(r.axis_rotated?n.circleX:n.circleY).bind(n),s=n.pointSelectR.bind(n);r.data_onselected.call(n.api,e,t.node()),n.main.select("."+Y.selectedCircles+n.getTargetSelectorSuffix(e.id)).selectAll("."+Y.selectedCircle+"-"+i).data([e]).enter().append("circle").attr("class",function(){return n.generateClass(Y.selectedCircle,i)}).attr("cx",a).attr("cy",o).attr("stroke",function(){return n.color(e)}).attr("r",function(t){return 1.4*n.pointSelectR(t)}).transition().duration(100).attr("r",s)},l.prototype.unselectPoint=function(t,e,i){this.config.data_onunselected.call(this.api,e,t.node()),this.main.select("."+Y.selectedCircles+this.getTargetSelectorSuffix(e.id)).selectAll("."+Y.selectedCircle+"-"+i).transition().duration(100).attr("r",0).remove()},l.prototype.togglePoint=function(t,e,i,n){t?this.selectPoint(e,i,n):this.unselectPoint(e,i,n)},l.prototype.selectPath=function(t,e){var i=this;i.config.data_onselected.call(i,e,t.node()),i.config.interaction_brighten&&t.transition().duration(100).style("fill",function(){return i.d3.rgb(i.color(e)).brighter(.75)})},l.prototype.unselectPath=function(t,e){var i=this;i.config.data_onunselected.call(i,e,t.node()),i.config.interaction_brighten&&t.transition().duration(100).style("fill",function(){return i.color(e)})},l.prototype.togglePath=function(t,e,i,n){t?this.selectPath(e,i,n):this.unselectPath(e,i,n)},l.prototype.getToggle=function(t,e){var i;return"circle"===t.nodeName?i=this.isStepType(e)?function(){}:this.togglePoint:"path"===t.nodeName&&(i=this.togglePath),i},l.prototype.toggleShape=function(t,e,i){var n=this,r=n.d3,a=n.config,o=r.select(t),s=o.classed(Y.SELECTED),c=n.getToggle(t,e).bind(n);a.data_selection_enabled&&a.data_selection_isselectable(e)&&(a.data_selection_multiple||n.main.selectAll("."+Y.shapes+(a.data_selection_grouped?n.getTargetSelectorSuffix(e.id):"")).selectAll("."+Y.shape).each(function(t,e){var i=r.select(this);i.classed(Y.SELECTED)&&c(!1,i.classed(Y.SELECTED,!1),t,e)}),o.classed(Y.SELECTED,!s),c(!s,o,e,i))},l.prototype.initBar=function(){this.main.select("."+Y.chart).append("g").attr("class",Y.chartBars)},l.prototype.updateTargetsForBar=function(t){var e=this,i=e.config,n=e.classChartBar.bind(e),r=e.classBars.bind(e),a=e.classFocus.bind(e);e.main.select("."+Y.chartBars).selectAll("."+Y.chartBar).data(t).attr("class",function(t){return n(t)+a(t)}).enter().append("g").attr("class",n).style("pointer-events","none").append("g").attr("class",r).style("cursor",function(t){return i.data_selection_isselectable(t)?"pointer":null})},l.prototype.updateBar=function(t){function e(t){return i.color(t.id)}var i=this,n=i.barData.bind(i),r=i.classBar.bind(i),a=i.initialOpacity.bind(i),o=i.main.selectAll("."+Y.bars).selectAll("."+Y.bar).data(n),s=o.enter().append("path").attr("class",r).style("stroke",e).style("fill",e);i.mainBar=s.merge(o).style("opacity",a),o.exit().transition().duration(t).style("opacity",0)},l.prototype.redrawBar=function(t,e,i){var n=this;return[(e?this.mainBar.transition(i):this.mainBar).attr("d",t).style("stroke",this.color).style("fill",this.color).style("opacity",function(t){return n.isTargetToShow(t.id)?1:0})]},l.prototype.getBarW=function(t,e){var i=this.config,n="number"==typeof i.bar_width?i.bar_width:e?t.tickInterval()*i.bar_width_ratio/e:0;return i.bar_width_max&&n>i.bar_width_max?i.bar_width_max:n},l.prototype.getBars=function(t,e){return(e?this.main.selectAll("."+Y.bars+this.getTargetSelectorSuffix(e)):this.main).selectAll("."+Y.bar+(C(t)?"-"+t:""))},l.prototype.expandBars=function(t,e,i){i&&this.unexpandBars(),this.getBars(t,e).classed(Y.EXPANDED,!0)},l.prototype.unexpandBars=function(t){this.getBars(t).classed(Y.EXPANDED,!1)},l.prototype.generateDrawBar=function(t,e){var a=this.config,o=this.generateGetBarPoints(t,e);return function(t,e){var i=o(t,e),n=a.axis_rotated?1:0,r=a.axis_rotated?0:1;return"M "+i[0][n]+","+i[0][r]+" L"+i[1][n]+","+i[1][r]+" L"+i[2][n]+","+i[2][r]+" L"+i[3][n]+","+i[3][r]+" z"}},l.prototype.generateGetBarPoints=function(t,e){var o=this,i=e?o.subXAxis:o.xAxis,n=t.__max__+1,s=o.getBarW(i,n),c=o.getShapeX(s,n,t,!!e),d=o.getShapeY(!!e),l=o.getShapeOffset(o.isBarType,t,!!e),u=s*(o.config.bar_space/2),h=e?o.getSubYScale:o.getYScale;return function(t,e){var i=h.call(o,t.id)(0),n=l(t,e)||i,r=c(t),a=d(t);return o.config.axis_rotated&&(0<t.value&&a<i||t.value<0&&i<a)&&(a=i),[[r+u,n],[r+u,a-=i-n],[r+s-u,a],[r+s-u,n]]}},l.prototype.isWithinBar=function(t,e){return function(t,e,i){void 0===i&&(i=0);var n=e.x-i,r=e.x+e.width+i,a=e.y+e.height+i,o=e.y-i;return n<t[0]&&t[0]<r&&o<t[1]&&t[1]<a}(t,d(e),2)},l.prototype.getShapeIndices=function(t){var e,i,n=this.config,r={},a=0;return this.filterTargetsToShow(this.data.targets.filter(t,this)).forEach(function(t){for(e=0;e<n.data_groups.length;e++)if(!(n.data_groups[e].indexOf(t.id)<0))for(i=0;i<n.data_groups[e].length;i++)if(n.data_groups[e][i]in r){r[t.id]=r[n.data_groups[e][i]];break}w(r[t.id])&&(r[t.id]=a++)}),r.__max__=a-1,r},l.prototype.getShapeX=function(i,n,r,t){var a=t?this.subX:this.x;return function(t){var e=t.id in r?r[t.id]:0;return t.x||0===t.x?a(t.x)-i*(n/2-e):0}},l.prototype.getShapeY=function(e){var i=this;return function(t){return(e?i.getSubYScale(t.id):i.getYScale(t.id))(i.isTargetNormalized(t.id)?i.getRatio("index",t,!0):t.value)}},l.prototype.getShapeOffset=function(t,d,e){var l=this,i=l.orderTargets(l.filterTargetsToShow(l.data.targets.filter(t,l))),u=i.map(function(t){return t.id});return function(r,a){var o=e?l.getSubYScale(r.id):l.getYScale(r.id),s=o(0),c=s;return i.forEach(function(t){var e=l.isStepType(r)?l.convertValuesToStep(t.values):t.values,i=l.isTargetNormalized(r.id),n=e.map(function(t){return i?l.getRatio("index",t,!0):t.value});t.id!==r.id&&d[t.id]===d[r.id]&&u.indexOf(t.id)<u.indexOf(r.id)&&(!w(e[a])&&+e[a].x==+r.x||(a=-1,e.forEach(function(t,e){(t.x.constructor===Date?+t.x:t.x)===(r.x.constructor===Date?+r.x:r.x)&&(a=e)})),a in e&&0<=e[a].value*r.value&&(c+=o(n[a])-s))}),c}},l.prototype.isWithinShape=function(t,e){var i,n=this,r=n.d3.select(t);return n.isTargetToShow(e.id)?"circle"===t.nodeName?i=n.isStepType(e)?n.isWithinStep(t,n.getYScale(e.id)(e.value)):n.isWithinCircle(t,1.5*n.pointSelectR(e)):"path"===t.nodeName&&(i=!r.classed(Y.bar)||n.isWithinBar(n.d3.mouse(t),t)):i=!1,i},l.prototype.getInterpolate=function(t){var e=this,i=e.d3,n={linear:i.curveLinear,"linear-closed":i.curveLinearClosed,basis:i.curveBasis,"basis-open":i.curveBasisOpen,"basis-closed":i.curveBasisClosed,bundle:i.curveBundle,cardinal:i.curveCardinal,"cardinal-open":i.curveCardinalOpen,"cardinal-closed":i.curveCardinalClosed,monotone:i.curveMonotoneX,step:i.curveStep,"step-before":i.curveStepBefore,"step-after":i.curveStepAfter},r=e.isSplineType(t)?n[e.config.spline_interpolation_type]||n.cardinal:e.isStepType(t)?n[e.config.line_step_type]:n.linear;return r},l.prototype.initLine=function(){this.main.select("."+Y.chart).append("g").attr("class",Y.chartLines)},l.prototype.updateTargetsForLine=function(t){var i=this,e=i.config,n=i.classChartLine.bind(i),r=i.classLines.bind(i),a=i.classAreas.bind(i),o=i.classCircles.bind(i),s=i.classFocus.bind(i),c=i.main.select("."+Y.chartLines).selectAll("."+Y.chartLine).data(t).attr("class",function(t){return n(t)+s(t)}).enter().append("g").attr("class",n).style("opacity",0).style("pointer-events","none");c.append("g").attr("class",r),c.append("g").attr("class",a),c.append("g").attr("class",function(t){return i.generateClass(Y.selectedCircles,t.id)}),c.append("g").attr("class",o).style("cursor",function(t){return e.data_selection_isselectable(t)?"pointer":null}),t.forEach(function(e){i.main.selectAll("."+Y.selectedCircles+i.getTargetSelectorSuffix(e.id)).selectAll("."+Y.selectedCircle).each(function(t){t.value=e.values[t.index].value})})},l.prototype.updateLine=function(t){var e=this,i=e.main.selectAll("."+Y.lines).selectAll("."+Y.line).data(e.lineData.bind(e)),n=i.enter().append("path").attr("class",e.classLine.bind(e)).style("stroke",e.color);e.mainLine=n.merge(i).style("opacity",e.initialOpacity.bind(e)).style("shape-rendering",function(t){return e.isStepType(t)?"crispEdges":""}).attr("transform",null),i.exit().transition().duration(t).style("opacity",0)},l.prototype.redrawLine=function(t,e,i){return[(e?this.mainLine.transition(i):this.mainLine).attr("d",t).style("stroke",this.color).style("opacity",1)]},l.prototype.generateDrawLine=function(t,s){function e(t){return(s?c.subxx:c.xx).call(c,t)}function i(t,e){return 0<d.data_groups.length?n(t,e)[0][1]:u.call(c,t.id)(t.value)}var c=this,d=c.config,l=c.d3.line(),n=c.generateGetLinePoints(t,s),u=s?c.getSubYScale:c.getYScale,l=d.axis_rotated?l.x(i).y(e):l.x(e).y(i);return d.line_connectNull||(l=l.defined(function(t){return null!=t.value})),function(t){var e=d.line_connectNull?c.filterRemoveNull(t.values):t.values,i=s?c.subX:c.x,n=u.call(c,t.id),r=0,a=0,o=c.isLineType(t)?d.data_regions[t.id]?c.lineWithRegions(e,i,n,d.data_regions[t.id]):(c.isStepType(t)&&(e=c.convertValuesToStep(e)),l.curve(c.getInterpolate(t))(e)):(e[0]&&(r=i(e[0].x),a=n(e[0].value)),d.axis_rotated?"M "+a+" "+r:"M "+r+" "+a);return o||"M 0 0"}},l.prototype.generateGetLinePoints=function(t,e){var o=this,s=o.config,i=t.__max__+1,c=o.getShapeX(0,i,t,!!e),d=o.getShapeY(!!e),l=o.getShapeOffset(o.isLineType,t,!!e),u=e?o.getSubYScale:o.getYScale;return function(t,e){var i=u.call(o,t.id)(0),n=l(t,e)||i,r=c(t),a=d(t);return s.axis_rotated&&(0<t.value&&a<i||t.value<0&&i<a)&&(a=i),[[r,a-(i-n)],[r,a-(i-n)],[r,a-(i-n)],[r,a-(i-n)]]}},l.prototype.lineWithRegions=function(t,d,l,e){var i,n,r,a,u,o,s,c,h,g,p,f=this,_=f.config,x="M",y=f.isCategorized()?.5:0,m=[];if(k(e))for(i=0;i<e.length;i++)m[i]={},w(e[i].start)?m[i].start=t[0].x:m[i].start=f.isTimeSeries()?f.parseDate(e[i].start):e[i].start,w(e[i].end)?m[i].end=t[t.length-1].x:m[i].end=f.isTimeSeries()?f.parseDate(e[i].end):e[i].end;function S(t){return"M"+t[0][0]+" "+t[0][1]+" "+t[1][0]+" "+t[1][1]}for(g=_.axis_rotated?function(t){return l(t.value)}:function(t){return d(t.x)},p=_.axis_rotated?function(t){return d(t.x)}:function(t){return l(t.value)},r=f.isTimeSeries()?function(t,e,i,n){var r=t.x.getTime(),a=e.x-t.x,o=new Date(r+a*i),s=new Date(r+a*(i+n)),c=_.axis_rotated?[[l(u(i)),d(o)],[l(u(i+n)),d(s)]]:[[d(o),l(u(i))],[d(s),l(u(i+n))]];return S(c)}:function(t,e,i,n){var r=_.axis_rotated?[[l(u(i),!0),d(a(i))],[l(u(i+n),!0),d(a(i+n))]]:[[d(a(i),!0),l(u(i))],[d(a(i+n),!0),l(u(i+n))]];return S(r)},i=0;i<t.length;i++){if(w(m)||!function(t,e){for(var i=0;i<e.length;i++)if(e[i].start<t&&t<=e[i].end)return 1}(t[i].x,m))x+=" "+g(t[i])+" "+p(t[i]);else for(a=f.getScale(t[i-1].x+y,t[i].x+y,f.isTimeSeries()),u=f.getScale(t[i-1].value,t[i].value),o=d(t[i].x)-d(t[i-1].x),s=l(t[i].value)-l(t[i-1].value),h=2*(c=2/Math.sqrt(Math.pow(o,2)+Math.pow(s,2))),n=c;n<=1;n+=h)x+=r(t[i-1],t[i],n,c);t[i].x}return x},l.prototype.updateArea=function(t){var e=this,i=e.d3,n=e.main.selectAll("."+Y.areas).selectAll("."+Y.area).data(e.lineData.bind(e)),r=n.enter().append("path").attr("class",e.classArea.bind(e)).style("fill",e.color).style("opacity",function(){return e.orgAreaOpacity=+i.select(this).style("opacity"),0});e.mainArea=r.merge(n).style("opacity",e.orgAreaOpacity),n.exit().transition().duration(t).style("opacity",0)},l.prototype.redrawArea=function(t,e,i){return[(e?this.mainArea.transition(i):this.mainArea).attr("d",t).style("fill",this.color).style("opacity",this.orgAreaOpacity)]},l.prototype.generateDrawArea=function(t,e){function i(t){return(e?a.subxx:a.xx).call(a,t)}function n(t,e){return 0<o.data_groups.length?c(t,e)[0][1]:d.call(a,t.id)(a.getAreaBaseValue(t.id))}function r(t,e){return 0<o.data_groups.length?c(t,e)[1][1]:d.call(a,t.id)(t.value)}var a=this,o=a.config,s=a.d3.area(),c=a.generateGetAreaPoints(t,e),d=e?a.getSubYScale:a.getYScale,s=o.axis_rotated?s.x0(n).x1(r).y(i):s.x(i).y0(o.area_above?0:n).y1(r);return o.line_connectNull||(s=s.defined(function(t){return null!==t.value})),function(t){var e=o.line_connectNull?a.filterRemoveNull(t.values):t.values,i=0,n=0,r=a.isAreaType(t)?(a.isStepType(t)&&(e=a.convertValuesToStep(e)),s.curve(a.getInterpolate(t))(e)):(e[0]&&(i=a.x(e[0].x),n=a.getYScale(t.id)(e[0].value)),o.axis_rotated?"M "+n+" "+i:"M "+i+" "+n);return r||"M 0 0"}},l.prototype.getAreaBaseValue=function(){return 0},l.prototype.generateGetAreaPoints=function(t,e){var o=this,s=o.config,i=t.__max__+1,c=o.getShapeX(0,i,t,!!e),d=o.getShapeY(!!e),l=o.getShapeOffset(o.isAreaType,t,!!e),u=e?o.getSubYScale:o.getYScale;return function(t,e){var i=u.call(o,t.id)(0),n=l(t,e)||i,r=c(t),a=d(t);return s.axis_rotated&&(0<t.value&&a<i||t.value<0&&i<a)&&(a=i),[[r,n],[r,a-(i-n)],[r,a-(i-n)],[r,n]]}},l.prototype.updateCircle=function(t,e){var i=this,n=i.main.selectAll("."+Y.circles).selectAll("."+Y.circle).data(i.lineOrScatterOrStanfordData.bind(i)),r=n.enter().append("circle").attr("shape-rendering",i.isStanfordGraphType()?"crispEdges":"").attr("class",i.classCircle.bind(i)).attr("cx",t).attr("cy",e).attr("r",i.pointR.bind(i)).style("color",i.isStanfordGraphType()?i.getStanfordPointColor.bind(i):i.color);i.mainCircle=r.merge(n).style("opacity",i.isStanfordGraphType()?1:i.initialOpacityForCircle.bind(i)),n.exit().style("opacity",0)},l.prototype.redrawCircle=function(t,e,i,n){var r=this,a=r.main.selectAll("."+Y.selectedCircle);return[(i?r.mainCircle.transition(n):r.mainCircle).style("opacity",this.opacityForCircle.bind(r)).style("color",r.isStanfordGraphType()?r.getStanfordPointColor.bind(r):r.color).attr("cx",t).attr("cy",e),(i?a.transition(n):a).attr("cx",t).attr("cy",e)]},l.prototype.circleX=function(t){return t.x||0===t.x?this.x(t.x):null},l.prototype.updateCircleY=function(){var t,i,e=this;0<e.config.data_groups.length?(t=e.getShapeIndices(e.isLineType),i=e.generateGetLinePoints(t),e.circleY=function(t,e){return i(t,e)[0][1]}):e.circleY=function(t){return e.getYScale(t.id)(t.value)}},l.prototype.getCircles=function(t,e){return(e?this.main.selectAll("."+Y.circles+this.getTargetSelectorSuffix(e)):this.main).selectAll("."+Y.circle+(C(t)?"-"+t:""))},l.prototype.expandCircles=function(t,e,i){var n=this.pointExpandedR.bind(this);i&&this.unexpandCircles(),this.getCircles(t,e).classed(Y.EXPANDED,!0).attr("r",n)},l.prototype.unexpandCircles=function(t){var e=this,i=e.pointR.bind(e);e.getCircles(t).filter(function(){return e.d3.select(this).classed(Y.EXPANDED)}).classed(Y.EXPANDED,!1).attr("r",i)},l.prototype.pointR=function(t){var e=this.config;return this.isStepType(t)?0:h(e.point_r)?e.point_r(t):e.point_r},l.prototype.pointExpandedR=function(t){var e=this.config;return e.point_focus_expand_enabled?h(e.point_focus_expand_r)?e.point_focus_expand_r(t):e.point_focus_expand_r?e.point_focus_expand_r:1.75*this.pointR(t):this.pointR(t)},l.prototype.pointSelectR=function(t){var e=this.config;return h(e.point_select_r)?e.point_select_r(t):e.point_select_r?e.point_select_r:4*this.pointR(t)},l.prototype.isWithinCircle=function(t,e){var i=this.d3,n=i.mouse(t),r=i.select(t),a=+r.attr("cx"),o=+r.attr("cy");return Math.sqrt(Math.pow(a-n[0],2)+Math.pow(o-n[1],2))<e},l.prototype.isWithinStep=function(t,e){return Math.abs(e-this.d3.mouse(t)[1])<30},l.prototype.getCurrentWidth=function(){var t=this.config;return t.size_width?t.size_width:this.getParentWidth()},l.prototype.getCurrentHeight=function(){var t=this.config,e=t.size_height?t.size_height:this.getParentHeight();return 0<e?e:320/(this.hasType("gauge")&&!t.gauge_fullCircle?2:1)},l.prototype.getCurrentPaddingTop=function(){var t=this.config,e=C(t.padding_top)?t.padding_top:0;return this.title&&this.title.node()&&(e+=this.getTitlePadding()),e},l.prototype.getCurrentPaddingBottom=function(){var t=this.config;return C(t.padding_bottom)?t.padding_bottom:0},l.prototype.getCurrentPaddingLeft=function(t){var e=this.config;return C(e.padding_left)?e.padding_left:e.axis_rotated?!e.axis_x_show||e.axis_x_inner?1:Math.max(r(this.getAxisWidthByAxisId("x",t)),40):!e.axis_y_show||e.axis_y_inner?this.axis.getYAxisLabelPosition().isOuter?30:1:r(this.getAxisWidthByAxisId("y",t))},l.prototype.getCurrentPaddingRight=function(){var t=this,e=t.config,i=0,n=t.isLegendRight?t.getLegendWidth()+20:0,i=C(e.padding_right)?e.padding_right+1:e.axis_rotated?10+n:!e.axis_y2_show||e.axis_y2_inner?2+n+(t.axis.getY2AxisLabelPosition().isOuter?20:0):r(t.getAxisWidthByAxisId("y2"))+n;return t.colorScale&&t.colorScale.node()&&(i+=t.getColorScalePadding()),i},l.prototype.getParentRectValue=function(e){for(var i,n=this.selectChart.node();n&&"BODY"!==n.tagName;){try{i=n.getBoundingClientRect()[e]}catch(t){"width"===e&&(i=n.offsetWidth)}if(i)break;n=n.parentNode}return i},l.prototype.getParentWidth=function(){return this.getParentRectValue("width")},l.prototype.getParentHeight=function(){var t=this.selectChart.style("height");return 0<t.indexOf("px")?+t.replace("px",""):0},l.prototype.getSvgLeft=function(t){var e=this,i=e.config,n=i.axis_rotated||!i.axis_rotated&&!i.axis_y_inner,r=i.axis_rotated?Y.axisX:Y.axisY,a=e.main.select("."+r).node(),o=a&&n?a.getBoundingClientRect():{right:0},s=e.selectChart.node().getBoundingClientRect(),c=e.hasArcType(),d=o.right-s.left-(c?0:e.getCurrentPaddingLeft(t));return 0<d?d:0},l.prototype.getAxisWidthByAxisId=function(t,e){var i=this.axis.getLabelPositionById(t);return this.axis.getMaxTickWidth(t,e)+(i.isInner?20:40)},l.prototype.getHorizontalAxisHeight=function(t,e){var i=this,n=i.config,r=30;return"x"!==t||(k(e)&&e?n.subchart_axis_x_show:n.axis_x_show)?"x"===t&&n.axis_x_height?n.axis_x_height:"y"!==t||n.axis_y_show?"y2"!==t||n.axis_y2_show?("x"===t&&!n.axis_rotated&&n.axis_x_tick_rotate&&(r=30+i.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-Math.abs(n.axis_x_tick_rotate))/180)),"y"===t&&n.axis_rotated&&n.axis_y_tick_rotate&&(r=30+i.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-Math.abs(n.axis_y_tick_rotate))/180)),r+(i.axis.getLabelPositionById(t).isInner?0:10)+("y2"===t?-10:0)):i.rotated_padding_top:!n.legend_show||i.isLegendRight||i.isLegendInset?1:10:8},l.prototype.initBrush=function(t){var r=this,e=r.d3;return r.brush=(r.config.axis_rotated?e.brushY():e.brushX()).on("brush",function(){var t=e.event.sourceEvent;t&&"zoom"===t.type||r.redrawForBrush()}).on("end",function(){var t=e.event.sourceEvent;t&&"zoom"===t.type||r.brush.empty()&&t&&"end"!==t.type&&r.brush.clear()}),r.brush.updateExtent=function(){var t=this.scale.range(),e=r.config.axis_rotated?[[0,t[0]],[r.width2,t[1]]]:[[t[0],0],[t[1],r.height2]];return this.extent(e),this},r.brush.updateScale=function(t){return this.scale=t,this},r.brush.update=function(t){this.updateScale(t||r.subX).updateExtent(),r.context.select("."+Y.brush).call(this)},r.brush.clear=function(){r.context.select("."+Y.brush).call(r.brush.move,null)},r.brush.selection=function(){return e.brushSelection(r.context.select("."+Y.brush).node())},r.brush.selectionAsValue=function(t,e){var i,n;return t?(r.context&&(i=[this.scale(t[0]),this.scale(t[1])],n=r.context.select("."+Y.brush),e&&(n=n.transition()),r.brush.move(n,i)),[]):(i=r.brush.selection()||[0,0],[this.scale.invert(i[0]),this.scale.invert(i[1])])},r.brush.empty=function(){var t=r.brush.selection();return!t||t[0]===t[1]},r.brush.updateScale(t)},l.prototype.initSubchart=function(){var t=this,e=t.config,i=t.context=t.svg.append("g").attr("transform",t.getTranslate("context"));i.style("visibility","visible"),i.append("g").attr("clip-path",t.clipPathForSubchart).attr("class",Y.chart),i.select("."+Y.chart).append("g").attr("class",Y.chartBars),i.select("."+Y.chart).append("g").attr("class",Y.chartLines),i.append("g").attr("clip-path",t.clipPath).attr("class",Y.brush),t.axes.subx=i.append("g").attr("class",Y.axisX).attr("transform",t.getTranslate("subx")).attr("clip-path",e.axis_rotated?"":t.clipPathForXAxis).style("visibility",e.subchart_axis_x_show?"visible":"hidden")},l.prototype.initSubchartBrush=function(){this.initBrush(this.subX).updateExtent(),this.context.select("."+Y.brush).call(this.brush)},l.prototype.updateTargetsForSubchart=function(t){var e,i,n=this,r=n.context,a=n.config,o=n.classChartBar.bind(n),s=n.classBars.bind(n),c=n.classChartLine.bind(n),d=n.classLines.bind(n),l=n.classAreas.bind(n),u=r.select("."+Y.chartBars).selectAll("."+Y.chartBar).data(t),h=u.enter().append("g").style("opacity",0);h.merge(u).attr("class",o),h.append("g").attr("class",s),(e=(i=r.select("."+Y.chartLines).selectAll("."+Y.chartLine).data(t)).enter().append("g").style("opacity",0)).merge(i).attr("class",c),e.append("g").attr("class",d),e.append("g").attr("class",l),r.selectAll("."+Y.brush+" rect").attr(a.axis_rotated?"width":"height",a.axis_rotated?n.width2:n.height2)},l.prototype.updateBarForSubchart=function(t){var e=this,i=e.context.selectAll("."+Y.bars).selectAll("."+Y.bar).data(e.barData.bind(e)),n=i.enter().append("path").attr("class",e.classBar.bind(e)).style("stroke","none").style("fill",e.color);i.exit().transition().duration(t).style("opacity",0).remove(),e.contextBar=n.merge(i).style("opacity",e.initialOpacity.bind(e))},l.prototype.redrawBarForSubchart=function(t,e,i){(e?this.contextBar.transition(Math.random().toString()).duration(i):this.contextBar).attr("d",t).style("opacity",1)},l.prototype.updateLineForSubchart=function(t){var e=this,i=e.context.selectAll("."+Y.lines).selectAll("."+Y.line).data(e.lineData.bind(e)),n=i.enter().append("path").attr("class",e.classLine.bind(e)).style("stroke",e.color);i.exit().transition().duration(t).style("opacity",0).remove(),e.contextLine=n.merge(i).style("opacity",e.initialOpacity.bind(e))},l.prototype.redrawLineForSubchart=function(t,e,i){(e?this.contextLine.transition(Math.random().toString()).duration(i):this.contextLine).attr("d",t).style("opacity",1)},l.prototype.updateAreaForSubchart=function(t){var e=this,i=e.d3,n=e.context.selectAll("."+Y.areas).selectAll("."+Y.area).data(e.lineData.bind(e)),r=n.enter().append("path").attr("class",e.classArea.bind(e)).style("fill",e.color).style("opacity",function(){return e.orgAreaOpacity=+i.select(this).style("opacity"),0});n.exit().transition().duration(t).style("opacity",0).remove(),e.contextArea=r.merge(n).style("opacity",0)},l.prototype.redrawAreaForSubchart=function(t,e,i){(e?this.contextArea.transition(Math.random().toString()).duration(i):this.contextArea).attr("d",t).style("fill",this.color).style("opacity",this.orgAreaOpacity)},l.prototype.redrawSubchart=function(t,e,i,n,r,a,o){var s,c,d,l=this,u=l.d3;u.event&&"zoom"===u.event.type&&l.brush.selectionAsValue(l.x.orgDomain()),t&&(l.brush.empty()||l.brush.selectionAsValue(l.x.orgDomain()),s=l.generateDrawArea(r,!0),c=l.generateDrawBar(a,!0),d=l.generateDrawLine(o,!0),l.updateBarForSubchart(i),l.updateLineForSubchart(i),l.updateAreaForSubchart(i),l.redrawBarForSubchart(c,i,i),l.redrawLineForSubchart(d,i,i),l.redrawAreaForSubchart(s,i,i))},l.prototype.redrawForBrush=function(){var t,e=this,i=e.x,n=e.d3;e.redraw({withTransition:!1,withY:e.config.zoom_rescale,withSubchart:!1,withUpdateXDomain:!0,withEventRect:!1,withDimension:!1}),t=n.event.selection||e.brush.scale.range(),e.main.select("."+Y.eventRect).call(e.zoom.transform,n.zoomIdentity.scale(e.width/(t[1]-t[0])).translate(-t[0],0)),e.config.subchart_onbrush.call(e.api,i.orgDomain())},l.prototype.transformContext=function(t,e){var i;e&&e.axisSubX?i=e.axisSubX:(i=this.context.select("."+Y.axisX),t&&(i=i.transition())),this.context.attr("transform",this.getTranslate("context")),i.attr("transform",this.getTranslate("subx"))},l.prototype.getDefaultSelection=function(){var t=this,e=t.config,i=h(e.axis_x_selection)?e.axis_x_selection(t.getXDomain(t.data.targets)):e.axis_x_selection;return t.isTimeSeries()&&(i=[t.parseDate(i[0]),t.parseDate(i[1])]),i},l.prototype.removeSubchart=function(){this.brush=null,this.context.remove(),this.context=null},l.prototype.initText=function(){this.main.select("."+Y.chart).append("g").attr("class",Y.chartTexts),this.mainText=this.d3.selectAll([])},l.prototype.updateTargetsForText=function(t){var e=this,i=e.classChartText.bind(e),n=e.classTexts.bind(e),r=e.classFocus.bind(e),a=e.main.select("."+Y.chartTexts).selectAll("."+Y.chartText).data(t),o=a.enter().append("g").attr("class",i).style("opacity",0).style("pointer-events","none");o.append("g").attr("class",n),o.merge(a).attr("class",function(t){return i(t)+r(t)})},l.prototype.updateText=function(t,e,i){var n=this,r=n.config,a=n.barOrLineData.bind(n),o=n.classText.bind(n),s=n.main.selectAll("."+Y.texts).selectAll("."+Y.text).data(a),c=s.enter().append("text").attr("class",o).attr("text-anchor",function(t){return r.axis_rotated?t.value<0?"end":"start":"middle"}).style("stroke","none").attr("x",t).attr("y",e).style("fill",function(t){return n.color(t)}).style("fill-opacity",0);n.mainText=c.merge(s).text(function(t,e,i){return n.dataLabelFormat(t.id)(t.value,t.id,e,i)}),s.exit().transition().duration(i).style("fill-opacity",0).remove()},l.prototype.redrawText=function(t,e,i,n,r){return[(n?this.mainText.transition(r):this.mainText).attr("x",t).attr("y",e).style("fill",this.color).style("fill-opacity",i?0:this.opacityForText.bind(this))]},l.prototype.getTextRect=function(t,e,i){var n,r=this.d3.select("body").append("div").classed("c3",!0),a=r.append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0),o=this.d3.select(i).style("font");return a.selectAll(".dummy").data([t]).enter().append("text").classed(e||"",!0).style("font",o).text(t).each(function(){n=d(this)}),r.remove(),n},l.prototype.generateXYForText=function(t,e,i,n){var r=this,a=r.generateGetAreaPoints(t,!1),o=r.generateGetBarPoints(e,!1),s=r.generateGetLinePoints(i,!1),c=n?r.getXForText:r.getYForText;return function(t,e){var i=r.isAreaType(t)?a:r.isBarType(t)?o:s;return c.call(r,i(t,e),t,this)}},l.prototype.getXForText=function(t,e,i){var n,r=this,a=d(i),o=r.config.axis_rotated?(n=r.isBarType(e)?4:6,t[2][1]+n*(e.value<0?-1:1)):r.hasType("bar")?(t[2][0]+t[0][0])/2:t[0][0];return null===e.value&&(o>r.width?o=r.width-a.width:o<0&&(o=4)),o},l.prototype.getYForText=function(t,e,i){var n,r=this,a=d(i);return r.config.axis_rotated?n=(t[0][0]+t[2][0]+.6*a.height)/2:(n=t[2][1],e.value<0||0===e.value&&!r.hasPositiveValue?(n+=a.height,r.isBarType(e)&&r.isSafari()?n-=3:!r.isBarType(e)&&r.isChrome()&&(n+=3)):n+=r.isBarType(e)?-3:-6),null!==e.value||r.config.axis_rotated||(n<a.height?n=a.height:n>this.height&&(n=this.height-4)),n},l.prototype.initTitle=function(){this.title=this.svg.append("text").text(this.config.title_text).attr("class",this.CLASS.title)},l.prototype.redrawTitle=function(){var t=this;t.title.attr("x",t.xForTitle.bind(t)).attr("y",t.yForTitle.bind(t))},l.prototype.xForTitle=function(){var t=this,e=t.config,i=e.title_position||"left",n=0<=i.indexOf("right")?t.currentWidth-t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).width-e.title_padding.right:0<=i.indexOf("center")?Math.max((t.currentWidth-t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).width)/2,0):e.title_padding.left;return n},l.prototype.yForTitle=function(){var t=this;return t.config.title_padding.top+t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).height},l.prototype.getTitlePadding=function(){return this.yForTitle()+this.config.title_padding.bottom},l.prototype.drawColorScale=function(){var t,e,i,n,r,a,o=this,s=o.d3,c=o.config,d=o.data.targets[0],l=isNaN(c.stanford_scaleWidth)?20:c.stanford_scaleWidth;if(l<0)throw Error("Colorscale's barheight and barwidth must be greater than 0.");a=o.height-c.stanford_padding.bottom-c.stanford_padding.top,e=s.range(c.stanford_padding.bottom,a,5),r=s.scaleSequential(d.colors).domain([e[e.length-1],e[0]]),o.colorScale&&o.colorScale.remove(),o.colorScale=o.svg.append("g").attr("width",50).attr("height",a).attr("class",Y.colorScale),o.colorScale.append("g").attr("transform","translate(0, "+c.stanford_padding.top+")").selectAll("bars").data(e).enter().append("rect").attr("y",function(t,e){return 5*e}).attr("x",0).attr("width",l).attr("height",5).attr("fill",function(t){return r(t)}),n=s.scaleLog().domain([d.minEpochs,d.maxEpochs]).range([e[0]+c.stanford_padding.top+e[e.length-1]+5-1,e[0]+c.stanford_padding.top]),i=s.axisRight(n),"pow10"===c.stanford_scaleFormat?i.tickValues([1,10,100,1e3,1e4,1e5,1e6,1e7]):h(c.stanford_scaleFormat)?i.tickFormat(c.stanford_scaleFormat):i.tickFormat(s.format("d")),h(c.stanford_scaleValues)&&i.tickValues(c.stanford_scaleValues(d.minEpochs,d.maxEpochs)),t=o.colorScale.append("g").attr("class","legend axis").attr("transform","translate("+l+",0)").call(i),"pow10"===c.stanford_scaleFormat&&t.selectAll(".tick text").text(null).filter(x).text(10).append("tspan").attr("dy","-.7em").text(function(t){return Math.round(Math.log(t)/Math.LN10)}),o.colorScale.attr("transform","translate("+(o.currentWidth-o.xForColorScale())+", 0)")},l.prototype.xForColorScale=function(){return this.config.stanford_padding.right+d(this.colorScale.node()).width},l.prototype.getColorScalePadding=function(){return this.xForColorScale()+this.config.stanford_padding.left+20},l.prototype.isStanfordGraphType=function(){return"stanford"===this.config.data_type},l.prototype.initStanfordData=function(){var t,e,i,n=this.d3,r=this.config,a=this.data.targets[0];if(a.values.sort(v),t=a.values.map(function(t){return t.epochs}),i=isNaN(r.stanford_scaleMin)?n.min(t):r.stanford_scaleMin,(e=isNaN(r.stanford_scaleMax)?n.max(t):r.stanford_scaleMax)<i)throw Error("Number of minEpochs has to be smaller than maxEpochs");a.colors=h(r.stanford_colors)?r.stanford_colors:n.interpolateHslLong(n.hsl(250,1,.5),n.hsl(0,1,.5)),a.colorscale=n.scaleSequentialLog(a.colors).domain([i,e]),a.minEpochs=i,a.maxEpochs=e},l.prototype.getStanfordPointColor=function(t){return this.data.targets[0].colorscale(t.epochs)},l.prototype.getCentroid=function(t){for(var e,i,n,r=y(t),a=0,o=0,s=0,c=t.length-1;s<t.length;c=s,s+=1)i=t[s],n=t[c],e=i.x*n.y-n.x*i.y,a+=(i.x+n.x)*e,o+=(i.y+n.y)*e;return{x:a/(e=6*r),y:o/e}},l.prototype.getStanfordTooltipTitle=function(t){var e=this.axis.getLabelText("x"),i=this.axis.getLabelText("y");return"\n      <tr><th>"+(e?_(e):"x")+"</th><th class='value'>"+t.x+"</th></tr>\n      <tr><th>"+(i?_(i):"y")+"</th><th class='value'>"+t.value+"</th></tr>\n    "},l.prototype.countEpochsInRegion=function(i){var t=this.data.targets[0],e=t.values.reduce(function(t,e){return t+Number(e.epochs)},0),n=t.values.reduce(function(t,e){return S(e,i)?t+Number(e.epochs):t},0);return{value:n,percentage:0!==n?(n/e*100).toFixed(1):0}};var y=function(t){for(var e,i,n=0,r=0,a=t.length-1;r<t.length;a=r,r+=1)e=t[r],i=t[a],n+=e.x*i.y,n-=e.y*i.x;return n/=2},S=function(t,e){for(var i,n,r,a,o=t.x,s=t.value,c=!1,d=0,l=e.length-1;d<e.length;l=d++)i=e[d].x,n=e[d].y,a=e[l].x,s<n!=s<(r=e[l].y)&&o<(a-i)*(s-n)/(r-n)+i&&(c=!c);return c},v=function(t,e){return t.epochs<e.epochs?-1:t.epochs>e.epochs?1:0};return l.prototype.initStanfordElements=function(){var t=this;t.stanfordElements=t.main.select("."+Y.chart).append("g").attr("class",Y.stanfordElements),t.stanfordElements.append("g").attr("class",Y.stanfordLines),t.stanfordElements.append("g").attr("class",Y.stanfordTexts),t.stanfordElements.append("g").attr("class",Y.stanfordRegions)},l.prototype.updateStanfordElements=function(t){var e,i,n,r,a=this,o=a.main,s=a.config,c=a.xvCustom.bind(a),d=a.yvCustom.bind(a),l=a.countEpochsInRegion.bind(a),u=o.select("."+Y.stanfordLines).style("shape-rendering","geometricprecision").selectAll("."+Y.stanfordLine).data(s.stanford_lines),h=u.enter().append("g").attr("class",function(t){return Y.stanfordLine+(t.class?" "+t.class:"")});h.append("line").attr("x1",function(t){return s.axis_rotated?d(t,"value_y1"):c(t,"value_x1")}).attr("x2",function(t){return s.axis_rotated?d(t,"value_y2"):c(t,"value_x2")}).attr("y1",function(t){return s.axis_rotated?c(t,"value_x1"):d(t,"value_y1")}).attr("y2",function(t){return s.axis_rotated?c(t,"value_x2"):d(t,"value_y2")}).style("opacity",0),a.stanfordLines=h.merge(u),a.stanfordLines.select("line").transition().duration(t).attr("x1",function(t){return s.axis_rotated?d(t,"value_y1"):c(t,"value_x1")}).attr("x2",function(t){return s.axis_rotated?d(t,"value_y2"):c(t,"value_x2")}).attr("y1",function(t){return s.axis_rotated?c(t,"value_x1"):d(t,"value_y1")}).attr("y2",function(t){return s.axis_rotated?c(t,"value_x2"):d(t,"value_y2")}).style("opacity",1),u.exit().transition().duration(t).style("opacity",0).remove(),(r=(n=o.select("."+Y.stanfordTexts).selectAll("."+Y.stanfordText).data(s.stanford_texts)).enter().append("g").attr("class",function(t){return Y.stanfordText+(t.class?" "+t.class:"")})).append("text").attr("x",function(t){return s.axis_rotated?d(t,"y"):c(t,"x")}).attr("y",function(t){return s.axis_rotated?c(t,"x"):d(t,"y")}).style("opacity",0),a.stanfordTexts=r.merge(n),a.stanfordTexts.select("text").transition().duration(t).attr("x",function(t){return s.axis_rotated?d(t,"y"):c(t,"x")}).attr("y",function(t){return s.axis_rotated?c(t,"x"):d(t,"y")}).text(function(t){return t.content}).style("opacity",1),n.exit().transition().duration(t).style("opacity",0).remove(),(i=(e=o.select("."+Y.stanfordRegions).selectAll("."+Y.stanfordRegion).data(s.stanford_regions)).enter().append("g").attr("class",function(t){return Y.stanfordRegion+(t.class?" "+t.class:"")})).append("polygon").attr("points",function(t){return t.points.map(function(t){return[s.axis_rotated?d(t,"y"):c(t,"x"),s.axis_rotated?c(t,"x"):d(t,"y")].join(",")}).join(" ")}).style("opacity",0),i.append("text").attr("x",function(t){return a.getCentroid(t.points).x}).attr("y",function(t){return a.getCentroid(t.points).y}).style("opacity",0),a.stanfordRegions=i.merge(e),a.stanfordRegions.select("polygon").transition().duration(t).attr("points",function(t){return t.points.map(function(t){return[s.axis_rotated?d(t,"y"):c(t,"x"),s.axis_rotated?c(t,"x"):d(t,"y")].join(",")}).join(" ")}).style("opacity",function(t){return t.opacity?t.opacity:.2}),a.stanfordRegions.select("text").transition().duration(t).attr("x",function(t){return s.axis_rotated?d(a.getCentroid(t.points),"y"):c(a.getCentroid(t.points),"x")}).attr("y",function(t){return s.axis_rotated?c(a.getCentroid(t.points),"x"):d(a.getCentroid(t.points),"y")}).text(function(t){var e,i,n;return t.text?(a.isStanfordGraphType()&&(e=(n=l(t.points)).value,i=n.percentage),t.text(e,i)):""}).attr("text-anchor","middle").attr("dominant-baseline","middle").style("opacity",1),e.exit().transition().duration(t).style("opacity",0).remove()},l.prototype.initTooltip=function(){var t,e=this,i=e.config;if(e.tooltip=e.selectChart.style("position","relative").append("div").attr("class",Y.tooltipContainer).style("position","absolute").style("pointer-events","none").style("display","none"),i.tooltip_init_show){if(e.isTimeSeries()&&g(i.tooltip_init_x)){for(i.tooltip_init_x=e.parseDate(i.tooltip_init_x),t=0;t<e.data.targets[0].values.length&&e.data.targets[0].values[t].x-i.tooltip_init_x!=0;t++);i.tooltip_init_x=t}e.tooltip.html(i.tooltip_contents.call(e,e.data.targets.map(function(t){return e.addName(t.values[i.tooltip_init_x])}),e.axis.getXAxisTickFormat(),e.getYFormat(e.hasArcType()),e.color)),e.tooltip.style("top",i.tooltip_init_position.top).style("left",i.tooltip_init_position.left).style("display","block")}},l.prototype.getTooltipSortFunction=function(){var t=this,e=t.config;if(0!==e.data_groups.length&&void 0===e.tooltip_order){var i=t.orderTargets(t.data.targets).map(function(t){return t.id});return(t.isOrderAsc()||t.isOrderDesc())&&(i=i.reverse()),function(t,e){return i.indexOf(t.id)-i.indexOf(e.id)}}var n=e.tooltip_order;void 0===n&&(n=e.data_order);function r(t){return t?t.value:null}if(g(n)&&"asc"===n.toLowerCase())return function(t,e){return r(t)-r(e)};if(g(n)&&"desc"===n.toLowerCase())return function(t,e){return r(e)-r(t)};if(h(n)){var a=n;return void 0===e.tooltip_order&&(a=function(t,e){return n(t?{id:t.id,values:[t]}:null,e?{id:e.id,values:[e]}:null)}),a}return o(n)?function(t,e){return n.indexOf(t.id)-n.indexOf(e.id)}:void 0},l.prototype.getTooltipContent=function(t,e,i,n){var r,a,o,s,c,d,l=this,u=l.config,h=u.tooltip_format_title||e,g=u.tooltip_format_name||function(t){return t},p=(p=u.tooltip_format_value)||(l.isTargetNormalized(t.id)?function(t,e){return(100*e).toFixed(2)+"%"}:i),f=this.getTooltipSortFunction();for(f&&t.sort(f),a=0;a<t.length;a++)if(t[a]&&(t[a].value||0===t[a].value)){if(l.isStanfordGraphType())r||(o=l.getStanfordTooltipTitle(t[a]),r="<table class='"+l.CLASS.tooltip+"'>"+o),d=l.getStanfordPointColor(t[a]),c=_(u.data_epochs),s=t[a].epochs;else if(r||(o=_(h?h(t[a].x,t[a].index):t[a].x),r="<table class='"+l.CLASS.tooltip+"'>"+(o||0===o?"<tr><th colspan='2'>"+o+"</th></tr>":"")),void 0!==(s=_(p(t[a].value,t[a].ratio,t[a].id,t[a].index,t)))){if(null===t[a].name)continue;c=_(g(t[a].name,t[a].ratio,t[a].id,t[a].index)),d=l.levelColor?l.levelColor(t[a].value):n(t[a].id)}void 0!==s&&(r+="<tr class='"+l.CLASS.tooltipName+"-"+l.getTargetSelectorSuffix(t[a].id)+"'>",r+="<td class='name'><span style='background-color:"+d+"'></span>"+c+"</td>",r+="<td class='value'>"+s+"</td>",r+="</tr>")}return r+"</table>"},l.prototype.tooltipPosition=function(t,e,i,n){var r,a,o,s,c,d=this,l=d.config,u=d.d3,h=d.hasArcType(),g=u.mouse(n);return h?(a=(d.width-(d.isLegendRight?d.getLegendWidth():0))/2+g[0],s=(d.hasType("gauge")?d.height:d.height/2)+g[1]+20):(r=d.getSvgLeft(!0),s=l.axis_rotated?(o=(a=r+g[0]+100)+e,c=d.currentWidth-d.getCurrentPaddingRight(),d.x(t[0].x)+20):(o=(a=r+d.getCurrentPaddingLeft(!0)+d.x(t[0].x)+20)+e,c=r+d.currentWidth-d.getCurrentPaddingRight(),g[1]+15),c<o&&(a-=o-c+20),s+i>d.currentHeight&&(s-=i+30)),s<0&&(s=0),{top:s,left:a}},l.prototype.showTooltip=function(t,e){var i,n,r,a=this,o=a.config,s=a.hasArcType(),c=t.filter(function(t){return t&&C(t.value)}),d=o.tooltip_position||l.prototype.tooltipPosition;0!==c.length&&o.tooltip_show?(a.tooltip.html(o.tooltip_contents.call(a,t,a.axis.getXAxisTickFormat(),a.getYFormat(s),a.color)).style("display","block"),i=a.tooltip.property("offsetWidth"),n=a.tooltip.property("offsetHeight"),r=d.call(this,c,i,n,e),a.tooltip.style("top",r.top+"px").style("left",r.left+"px")):a.hideTooltip()},l.prototype.hideTooltip=function(){this.tooltip.style("display","none")},l.prototype.setTargetType=function(t,e){var i=this,n=i.config;i.mapToTargetIds(t).forEach(function(t){i.withoutFadeIn[t]=e===n.data_types[t],n.data_types[t]=e}),t||(n.data_type=e)},l.prototype.hasType=function(i,t){var n=this.config.data_types,r=!1;return(t=t||this.data.targets)&&t.length?t.forEach(function(t){var e=n[t.id];(e&&0<=e.indexOf(i)||!e&&"line"===i)&&(r=!0)}):Object.keys(n).length?Object.keys(n).forEach(function(t){n[t]===i&&(r=!0)}):r=this.config.data_type===i,r},l.prototype.hasArcType=function(t){return this.hasType("pie",t)||this.hasType("donut",t)||this.hasType("gauge",t)},l.prototype.isLineType=function(t){var e=this.config,i=g(t)?t:t.id;return!e.data_types[i]||0<=["line","spline","area","area-spline","step","area-step"].indexOf(e.data_types[i])},l.prototype.isStepType=function(t){var e=g(t)?t:t.id;return 0<=["step","area-step"].indexOf(this.config.data_types[e])},l.prototype.isSplineType=function(t){var e=g(t)?t:t.id;return 0<=["spline","area-spline"].indexOf(this.config.data_types[e])},l.prototype.isAreaType=function(t){var e=g(t)?t:t.id;return 0<=["area","area-spline","area-step"].indexOf(this.config.data_types[e])},l.prototype.isBarType=function(t){var e=g(t)?t:t.id;return"bar"===this.config.data_types[e]},l.prototype.isScatterType=function(t){var e=g(t)?t:t.id;return"scatter"===this.config.data_types[e]},l.prototype.isStanfordType=function(t){var e=g(t)?t:t.id;return"stanford"===this.config.data_types[e]},l.prototype.isPieType=function(t){var e=g(t)?t:t.id;return"pie"===this.config.data_types[e]},l.prototype.isGaugeType=function(t){var e=g(t)?t:t.id;return"gauge"===this.config.data_types[e]},l.prototype.isDonutType=function(t){var e=g(t)?t:t.id;return"donut"===this.config.data_types[e]},l.prototype.isArcType=function(t){return this.isPieType(t)||this.isDonutType(t)||this.isGaugeType(t)},l.prototype.lineData=function(t){return this.isLineType(t)?[t]:[]},l.prototype.arcData=function(t){return this.isArcType(t.data)?[t]:[]},l.prototype.barData=function(t){return this.isBarType(t)?t.values:[]},l.prototype.lineOrScatterOrStanfordData=function(t){return this.isLineType(t)||this.isScatterType(t)||this.isStanfordType(t)?t.values:[]},l.prototype.barOrLineData=function(t){return this.isBarType(t)||this.isLineType(t)?t.values:[]},l.prototype.isSafari=function(){var t=window.navigator.userAgent;return 0<=t.indexOf("Safari")&&t.indexOf("Chrome")<0},l.prototype.isChrome=function(){return 0<=window.navigator.userAgent.indexOf("Chrome")},l.prototype.initZoom=function(){var e,i=this,n=i.d3,r=i.config;return i.zoom=n.zoom().on("start",function(){var t;"scroll"===r.zoom_type&&((t=n.event.sourceEvent)&&"brush"===t.type||(e=t,r.zoom_onzoomstart.call(i.api,t)))}).on("zoom",function(){var t;"scroll"===r.zoom_type&&((t=n.event.sourceEvent)&&"brush"===t.type||(i.redrawForZoom(),r.zoom_onzoom.call(i.api,i.x.orgDomain())))}).on("end",function(){var t;"scroll"===r.zoom_type&&((t=n.event.sourceEvent)&&"brush"===t.type||t&&e.clientX===t.clientX&&e.clientY===t.clientY||r.zoom_onzoomend.call(i.api,i.x.orgDomain()))}),i.zoom.updateDomain=function(){return n.event&&n.event.transform&&(r.axis_rotated&&"scroll"===r.zoom_type&&"mousemove"===n.event.sourceEvent.type?i.x.domain(n.event.transform.rescaleY(i.subX).domain()):i.x.domain(n.event.transform.rescaleX(i.subX).domain())),this},i.zoom.updateExtent=function(){return this.scaleExtent([1,1/0]).translateExtent([[0,0],[i.width,i.height]]).extent([[0,0],[i.width,i.height]]),this},i.zoom.update=function(){return this.updateExtent().updateDomain()},i.zoom.updateExtent()},l.prototype.zoomTransform=function(t){var e=[this.x(t[0]),this.x(t[1])];return this.d3.zoomIdentity.scale(this.width/(e[1]-e[0])).translate(-e[0],0)},l.prototype.initDragZoom=function(){var e,t,i=this,n=i.d3,r=i.config,a=i.context=i.svg,o=i.margin.left+20.5,s=i.margin.top+.5;"drag"===r.zoom_type&&r.zoom_enabled&&(e=function(t){return t&&t.map(function(t){return i.x.invert(t)})},t=i.dragZoomBrush=n.brushX().on("start",function(){i.api.unzoom(),i.svg.select("."+Y.dragZoom).classed("disabled",!1),r.zoom_onzoomstart.call(i.api,n.event.sourceEvent)}).on("brush",function(){r.zoom_onzoom.call(i.api,e(n.event.selection))}).on("end",function(){var t;null!=n.event.selection&&(t=e(n.event.selection),r.zoom_disableDefaultBehavior||i.api.zoom(t),i.svg.select("."+Y.dragZoom).classed("disabled",!0),r.zoom_onzoomend.call(i.api,t))}),a.append("g").classed(Y.dragZoom,!0).attr("clip-path",i.clipPath).attr("transform","translate("+o+","+s+")").call(t))},l.prototype.getZoomDomain=function(){var t=this.config,e=this.d3;return[e.min([this.orgXDomain[0],t.zoom_x_min]),e.max([this.orgXDomain[1],t.zoom_x_max])]},l.prototype.redrawForZoom=function(){var t=this,e=t.d3,i=t.config,n=t.zoom,r=t.x;i.zoom_enabled&&0!==t.filterTargetsToShow(t.data.targets).length&&(n.update(),i.zoom_disableDefaultBehavior||(t.isCategorized()&&r.orgDomain()[0]===t.orgXDomain[0]&&r.domain([t.orgXDomain[0]-1e-10,r.orgDomain()[1]]),t.redraw({withTransition:!1,withY:i.zoom_rescale,withSubchart:!1,withEventRect:!1,withDimension:!1}),e.event.sourceEvent&&"mousemove"===e.event.sourceEvent.type&&(t.cancelClick=!0)))},i});
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'should conform to valid custom element name in html5 specification.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i], vm);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
    if (!valid && haveExpectedTypes) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

  function assertType (value, type, vm) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      try {
        valid = value instanceof type;
      } catch (e) {
        warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
        valid = false;
      }
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  var functionTypeCheckRE = /^\s*function (\w+)/;

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(functionTypeCheckRE);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    // check if we need to specify expected value
    if (
      expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      isExplicable(typeof value) &&
      !isBoolean(expectedType, receivedType)
    ) {
      message += " with value " + (styleValue(value, expectedType));
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + (styleValue(value, receivedType)) + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
  function isExplicable (value) {
    return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals. ' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      var vnode = res && res[0];
      return res && (
        !vnode ||
        (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallbackRender,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
      // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes =
        scopedSlotFn(props) ||
        (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
    } else {
      nodes =
        this.$slots[name] ||
        (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
    return eventKeyCode === undefined
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a special value for explicitly removing a binding
        warn(
          ("Invalid value for dynamic directive argument (expected string or null): " + key),
          this
        );
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    // we know it's MountedComponentVNode but flow doesn't
    vnode,
    // activeInstance in lifecycle state
    parent
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        if (isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
          warn(
            ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
            context
          );
        }
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack because all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
      (!newScopedSlots && vm.$scopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (
      performance &&
      typeof performance.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          var info = "callback for watcher \"" + (this.expression) + "\"";
          invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        } else if (vm.$options.methods && key in vm.$options.methods) {
          warn(("The computed property \"" + key + "\" is already defined as a method."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
        pushTarget();
        invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
        popTarget();
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */





  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var entry = cache[key];
      if (entry) {
        var name = entry.name;
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var entry = cache[key];
    if (entry && (!current || entry.tag !== current.tag)) {
      entry.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    methods: {
      cacheVNode: function cacheVNode() {
        var ref = this;
        var cache = ref.cache;
        var keys = ref.keys;
        var vnodeToCache = ref.vnodeToCache;
        var keyToCache = ref.keyToCache;
        if (vnodeToCache) {
          var tag = vnodeToCache.tag;
          var componentInstance = vnodeToCache.componentInstance;
          var componentOptions = vnodeToCache.componentOptions;
          cache[keyToCache] = {
            name: getComponentName(componentOptions),
            tag: tag,
            componentInstance: componentInstance,
          };
          keys.push(keyToCache);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
          this.vnodeToCache = null;
        }
      }
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.cacheVNode();
      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    updated: function updated () {
      this.cacheVNode();
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          // delay setting the cache until update
          this.vnodeToCache = vnode;
          this.keyToCache = key;
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.14';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key &&
      a.asyncFactory === b.asyncFactory && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes([oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur, vnode.data.pre);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value, isInPre) {
    if (isInPre || el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */



  /* eslint-disable no-unused-vars */
  function baseWarn (msg, range) {
    console.error(("[Vue compiler]: " + msg));
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr (el, name, value, range, dynamic) {
    var attrs = dynamic
      ? (el.dynamicAttrs || (el.dynamicAttrs = []))
      : (el.attrs || (el.attrs = []));
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    isDynamicArg,
    modifiers,
    range
  ) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker (symbol, name, dynamic) {
    return dynamic
      ? ("_p(" + name + ",\"" + symbol + "\")")
      : symbol + name // mark the event as captured
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn,
    range,
    dynamic
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.',
        range
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr (
    el,
    name
  ) {
    return el.rawAttrsMap[':' + name] ||
      el.rawAttrsMap['v-bind:' + name] ||
      el.rawAttrsMap[name]
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  function getAndRemoveAttrByRegex (
    el,
    name
  ) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr
      }
    }
  }

  function rangeSetItem (
    item,
    range
  ) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead.",
          el.rawAttrsMap['v-model']
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.',
        el.rawAttrsMap['v-model']
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally',
          el.rawAttrsMap[binding]
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.',
          el.rawAttrsMap['class']
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.',
            el.rawAttrsMap['style']
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being passed as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag."),
              { start: stack[i].start, end: stack[i].end }
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:|^#/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /[ \f\t\r\n]+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) { return !!(
      el.component ||
      el.attrsMap[':is'] ||
      el.attrsMap['v-bind:is'] ||
      !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag))
    ); };
    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement (element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead.",
            { start: element.start }
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) { return !(c).slotScope; });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace (el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while (
          (lastNode = el.children[el.children.length - 1]) &&
          lastNode.type === 3 &&
          lastNode.text === ' '
        ) {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints (el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce(
          "Cannot use <" + (el.tag) + "> as component root element because it may " +
          'contain multiple nodes.',
          { start: el.start }
        );
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce(
          'Cannot use v-for on stateful component root element because ' +
          'it renders multiple elements.',
          el.rawAttrsMap['v-for']
        );
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start (tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2(
                "Invalid dynamic argument expression: attribute names cannot contain " +
                "spaces, quotes, <, >, / or =.",
                {
                  start: attr.start + attr.name.indexOf("["),
                  end: attr.start + attr.name.length
                }
              );
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.',
            { start: element.start }
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end (tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars (text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.',
                { start: start }
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored."),
                { start: start }
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment (text, start, end) {
        // adding anything as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (
    element,
    options
  ) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = (
      !element.key &&
      !element.scopedSlots &&
      !element.attrsList.length
    );

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2(
            "<template> cannot be keyed. Place the key on real elements instead.",
            getRawBindingAttr(el, 'key')
          );
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys.",
              getRawBindingAttr(el, 'key'),
              true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp),
          el.rawAttrsMap['v-for']
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if.",
        el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored.",
            children[i]
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent (el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          el.rawAttrsMap['scope'],
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          el.rawAttrsMap['slot-scope'],
          true
        );
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2(
                "<template v-slot> can only appear at the root level inside " +
                "the receiving component",
                el
              );
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2(
                "v-slot can only be used on components or <template>.",
                slotBinding$1
              );
            }
            if (el.slotScope || el.slotTarget) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.scopedSlots) {
              warn$2(
                "To avoid scope ambiguity, the default slot should also use " +
                "<template> syntax when there are other named slots.",
                slotBinding$1
              );
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName (binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2(
          "v-slot shorthand syntax requires a slot name.",
          binding
        );
      }
    }
    return dynamicArgRE.test(name)
      // dynamic [name]
      ? { name: name.slice(1, -1), dynamic: true }
      // static name
      : { name: ("\"" + name + "\""), dynamic: false }
  }

  // handle <slot/> outlets
  function processSlotOutlet (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead.",
          getRawBindingAttr(el, 'key')
        );
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(
                  el,
                  ("update:" + (camelize(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(
                    el,
                    ("update:" + (hyphenate(name))),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i]
                  );
                }
              } else {
                // handler w/ dynamic event name
                addHandler(
                  el,
                  ("\"update:\"+(" + name + ")"),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i],
                  true // dynamic
                );
              }
            }
          }
          if ((modifiers && modifiers.prop) || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.',
              list[i]
            );
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead.",
          el.rawAttrsMap['v-model']
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
    } else {
      return prefix + staticHandlers
    }
  }

  function genHandler (handler) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + ".apply(null, arguments)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ").apply(null, arguments)")
          : isFunctionInvocation
            ? ("return " + (handler.value))
            : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" +
      (keys.map(genFilterCode).join('&&')) + ")return null;"
    )
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    // fix #11483, Root level <script> tags should not be rendered.
    var code = ast ? (ast.tag === 'script' ? 'null' : genElement(ast, state)) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. ",
          el.rawAttrsMap['v-once']
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        el.rawAttrsMap['v-for'],
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + (genProps(el.attrs)) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + (genProps(el.props)) + ",";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn(
        'Inline-template components must have exactly one child element.',
        { start: el.start }
      );
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    el,
    slots,
    state
  ) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return (
        slot.slotTargetDynamic ||
        slot.if ||
        slot.for ||
        containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      )
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (
          (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
          parent.for
        ) {
          needsForceUpdate = true;
          break
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots)
      .map(function (key) { return genScopedSlot(slots[key], state); })
      .join(',');

    return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
  }

  function containsSlotChild (el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true
      }
      return el.children.some(containsSlotChild)
    }
    return false
  }

  function genScopedSlot (
    el,
    state
  ) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null")
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot)
    }
    var slotScope = el.slotScope === emptySlotScopeToken
      ? ""
      : String(el.slotScope);
    var fn = "function(" + slotScope + "){" +
      "return " + (el.tag === 'template'
        ? el.if && isLegacySyntax
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? (",function(){return " + children + "}") : '');
    var attrs = el.attrs || el.dynamicAttrs
      ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
          // slot props are camelized
          name: camelize(attr.name),
          value: attr.value,
          dynamic: attr.dynamic
        }); }))
      : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += (prop.name) + "," + value + ",";
      } else {
        staticProps += "\"" + (prop.name) + "\":" + value + ",";
      }
    }
    staticProps = "{" + (staticProps.slice(0, -1)) + "}";
    if (dynamicProps) {
      return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
    } else {
      return staticProps
    }
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */



  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode (node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), warn, range);
            } else if (name === 'v-slot' || name[0] === '#') {
              checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), warn, range);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent (exp, text, warn, range) {
    var stripped = exp.replace(stripStringRE, '');
    var keywordMatch = stripped.match(unaryOperatorsRE);
    if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
      warn(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
        range
      );
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor (node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    warn,
    range
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
      }
    }
  }

  function checkExpression (exp, text, warn, range) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
          range
        );
      } else {
        warn(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n",
          range
        );
      }
    }
  }

  function checkFunctionParameterExpression (exp, text, warn, range) {
    try {
      new Function(exp, '');
    } catch (e) {
      warn(
        "invalid function parameter expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame (
    source,
    start,
    end
  ) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) { continue }
          res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break
      }
    }
    return res.join('\n')
  }

  function repeat$1 (str, n) {
    var result = '';
    if (n > 0) {
      while (true) { // eslint-disable-line
        if (n & 1) { result += str; }
        n >>>= 1;
        if (n <= 0) { break }
        str += str;
      }
    }
    return result
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1(
                "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                generateCodeFrame(template, e.start, e.end),
                vm
              );
            });
          } else {
            warn$$1(
              "Error compiling template:\n\n" + template + "\n\n" +
              compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
              vm
            );
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
          } else {
            compiled.tips.forEach(function (msg) { return tip(msg, vm); });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function (msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function (msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

}));

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define('GOVUKFrontend', ['exports'], factory) :
	(factory((global.GOVUKFrontend = {})));
}(this, (function (exports) { 'use strict';

/**
 * TODO: Ideally this would be a NodeList.prototype.forEach polyfill
 * This seems to fail in IE8, requires more investigation.
 * See: https://github.com/imagitama/nodelist-foreach-polyfill
 */
function nodeListForEach (nodes, callback) {
  if (window.NodeList.prototype.forEach) {
    return nodes.forEach(callback)
  }
  for (var i = 0; i < nodes.length; i++) {
    callback.call(window, nodes[i], i, nodes);
  }
}

// Used to generate a unique string, allows multiple instances of the component without
// Them conflicting with each other.
// https://stackoverflow.com/a/8809472
function generateUniqueID () {
  var d = new Date().getTime();
  if (typeof window.performance !== 'undefined' && typeof window.performance.now === 'function') {
    d += window.performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js
var detect = (
  // In IE8, defineProperty could only act on DOM elements, so full support
  // for the feature requires the ability to set a property on an arbitrary object
  'defineProperty' in Object && (function() {
  	try {
  		var a = {};
  		Object.defineProperty(a, 'test', {value:42});
  		return true;
  	} catch(e) {
  		return false
  	}
  }())
);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always
(function (nativeDefineProperty) {

	var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
	var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
	var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

	Object.defineProperty = function defineProperty(object, property, descriptor) {

		// Where native support exists, assume it
		if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
			return nativeDefineProperty(object, property, descriptor);
		}

		if (object === null || !(object instanceof Object || typeof object === 'object')) {
			throw new TypeError('Object.defineProperty called on non-object');
		}

		if (!(descriptor instanceof Object)) {
			throw new TypeError('Property description must be an object');
		}

		var propertyString = String(property);
		var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
		var getterType = 'get' in descriptor && typeof descriptor.get;
		var setterType = 'set' in descriptor && typeof descriptor.set;

		// handle descriptor.get
		if (getterType) {
			if (getterType !== 'function') {
				throw new TypeError('Getter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineGetter__.call(object, propertyString, descriptor.get);
		} else {
			object[propertyString] = descriptor.value;
		}

		// handle descriptor.set
		if (setterType) {
			if (setterType !== 'function') {
				throw new TypeError('Setter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineSetter__.call(object, propertyString, descriptor.set);
		}

		// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
		if ('value' in descriptor) {
			object[propertyString] = descriptor.value;
		}

		return object;
	};
}(Object.defineProperty));
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {
  // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Function/prototype/bind/detect.js
  var detect = 'bind' in Function.prototype;

  if (detect) return

  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Function.prototype.bind&flags=always
  Object.defineProperty(Function.prototype, 'bind', {
      value: function bind(that) { // .length is 1
          // add necessary es5-shim utilities
          var $Array = Array;
          var $Object = Object;
          var ObjectPrototype = $Object.prototype;
          var ArrayPrototype = $Array.prototype;
          var Empty = function Empty() {};
          var to_string = ObjectPrototype.toString;
          var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
          var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };
          var array_slice = ArrayPrototype.slice;
          var array_concat = ArrayPrototype.concat;
          var array_push = ArrayPrototype.push;
          var max = Math.max;
          // /add necessary es5-shim utilities

          // 1. Let Target be the this value.
          var target = this;
          // 2. If IsCallable(Target) is false, throw a TypeError exception.
          if (!isCallable(target)) {
              throw new TypeError('Function.prototype.bind called on incompatible ' + target);
          }
          // 3. Let A be a new (possibly empty) internal list of all of the
          //   argument values provided after thisArg (arg1, arg2 etc), in order.
          // XXX slicedArgs will stand in for "A" if used
          var args = array_slice.call(arguments, 1); // for normal call
          // 4. Let F be a new native ECMAScript object.
          // 11. Set the [[Prototype]] internal property of F to the standard
          //   built-in Function prototype object as specified in 15.3.3.1.
          // 12. Set the [[Call]] internal property of F as described in
          //   15.3.4.5.1.
          // 13. Set the [[Construct]] internal property of F as described in
          //   15.3.4.5.2.
          // 14. Set the [[HasInstance]] internal property of F as described in
          //   15.3.4.5.3.
          var bound;
          var binder = function () {

              if (this instanceof bound) {
                  // 15.3.4.5.2 [[Construct]]
                  // When the [[Construct]] internal method of a function object,
                  // F that was created using the bind function is called with a
                  // list of arguments ExtraArgs, the following steps are taken:
                  // 1. Let target be the value of F's [[TargetFunction]]
                  //   internal property.
                  // 2. If target has no [[Construct]] internal method, a
                  //   TypeError exception is thrown.
                  // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                  //   property.
                  // 4. Let args be a new list containing the same values as the
                  //   list boundArgs in the same order followed by the same
                  //   values as the list ExtraArgs in the same order.
                  // 5. Return the result of calling the [[Construct]] internal
                  //   method of target providing args as the arguments.

                  var result = target.apply(
                      this,
                      array_concat.call(args, array_slice.call(arguments))
                  );
                  if ($Object(result) === result) {
                      return result;
                  }
                  return this;

              } else {
                  // 15.3.4.5.1 [[Call]]
                  // When the [[Call]] internal method of a function object, F,
                  // which was created using the bind function is called with a
                  // this value and a list of arguments ExtraArgs, the following
                  // steps are taken:
                  // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                  //   property.
                  // 2. Let boundThis be the value of F's [[BoundThis]] internal
                  //   property.
                  // 3. Let target be the value of F's [[TargetFunction]] internal
                  //   property.
                  // 4. Let args be a new list containing the same values as the
                  //   list boundArgs in the same order followed by the same
                  //   values as the list ExtraArgs in the same order.
                  // 5. Return the result of calling the [[Call]] internal method
                  //   of target providing boundThis as the this value and
                  //   providing args as the arguments.

                  // equiv: target.call(this, ...boundArgs, ...args)
                  return target.apply(
                      that,
                      array_concat.call(args, array_slice.call(arguments))
                  );

              }

          };

          // 15. If the [[Class]] internal property of Target is "Function", then
          //     a. Let L be the length property of Target minus the length of A.
          //     b. Set the length own property of F to either 0 or L, whichever is
          //       larger.
          // 16. Else set the length own property of F to 0.

          var boundLength = max(0, target.length - args.length);

          // 17. Set the attributes of the length own property of F to the values
          //   specified in 15.3.5.1.
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
              array_push.call(boundArgs, '$' + i);
          }

          // XXX Build a dynamic function with desired amount of arguments is the only
          // way to set the length property of a function.
          // In environments where Content Security Policies enabled (Chrome extensions,
          // for ex.) all use of eval or Function costructor throws an exception.
          // However in all of these environments Function.prototype.bind exists
          // and so this code will never be executed.
          bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

          if (target.prototype) {
              Empty.prototype = target.prototype;
              bound.prototype = new Empty();
              // Clean up dangling references.
              Empty.prototype = null;
          }

          // TODO
          // 18. Set the [[Extensible]] internal property of F to true.

          // TODO
          // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
          // 20. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
          //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
          //   false.
          // 21. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
          //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
          //   and false.

          // TODO
          // NOTE Function objects created using Function.prototype.bind do not
          // have a prototype property or the [[Code]], [[FormalParameters]], and
          // [[Scope]] internal properties.
          // XXX can't delete prototype in pure-js.

          // 22. Return F.
          return bound;
      }
  });
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/detect.js
    var detect = (
      'DOMTokenList' in this && (function (x) {
        return 'classList' in x ? !x.classList.toggle('x', false) && !x.className : true;
      })(document.createElement('x'))
    );

    if (detect) return

    // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/polyfill.js
    (function (global) {
      var nativeImpl = "DOMTokenList" in global && global.DOMTokenList;

      if (
          !nativeImpl ||
          (
            !!document.createElementNS &&
            !!document.createElementNS('http://www.w3.org/2000/svg', 'svg') &&
            !(document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList)
          )
        ) {
        global.DOMTokenList = (function() { // eslint-disable-line no-unused-vars
          var dpSupport = true;
          var defineGetter = function (object, name, fn, configurable) {
            if (Object.defineProperty)
              Object.defineProperty(object, name, {
                configurable: false === dpSupport ? true : !!configurable,
                get: fn
              });

            else object.__defineGetter__(name, fn);
          };

          /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
          try {
            defineGetter({}, "support");
          }
          catch (e) {
            dpSupport = false;
          }


          var _DOMTokenList = function (el, prop) {
            var that = this;
            var tokens = [];
            var tokenMap = {};
            var length = 0;
            var maxLength = 0;
            var addIndexGetter = function (i) {
              defineGetter(that, i, function () {
                preop();
                return tokens[i];
              }, false);

            };
            var reindex = function () {

              /** Define getter functions for array-like access to the tokenList's contents. */
              if (length >= maxLength)
                for (; maxLength < length; ++maxLength) {
                  addIndexGetter(maxLength);
                }
            };

            /** Helper function called at the start of each class method. Internal use only. */
            var preop = function () {
              var error;
              var i;
              var args = arguments;
              var rSpace = /\s+/;

              /** Validate the token/s passed to an instance method, if any. */
              if (args.length)
                for (i = 0; i < args.length; ++i)
                  if (rSpace.test(args[i])) {
                    error = new SyntaxError('String "' + args[i] + '" ' + "contains" + ' an invalid character');
                    error.code = 5;
                    error.name = "InvalidCharacterError";
                    throw error;
                  }


              /** Split the new value apart by whitespace*/
              if (typeof el[prop] === "object") {
                tokens = ("" + el[prop].baseVal).replace(/^\s+|\s+$/g, "").split(rSpace);
              } else {
                tokens = ("" + el[prop]).replace(/^\s+|\s+$/g, "").split(rSpace);
              }

              /** Avoid treating blank strings as single-item token lists */
              if ("" === tokens[0]) tokens = [];

              /** Repopulate the internal token lists */
              tokenMap = {};
              for (i = 0; i < tokens.length; ++i)
                tokenMap[tokens[i]] = true;
              length = tokens.length;
              reindex();
            };

            /** Populate our internal token list if the targeted attribute of the subject element isn't empty. */
            preop();

            /** Return the number of tokens in the underlying string. Read-only. */
            defineGetter(that, "length", function () {
              preop();
              return length;
            });

            /** Override the default toString/toLocaleString methods to return a space-delimited list of tokens when typecast. */
            that.toLocaleString =
              that.toString = function () {
                preop();
                return tokens.join(" ");
              };

            that.item = function (idx) {
              preop();
              return tokens[idx];
            };

            that.contains = function (token) {
              preop();
              return !!tokenMap[token];
            };

            that.add = function () {
              preop.apply(that, args = arguments);

              for (var args, token, i = 0, l = args.length; i < l; ++i) {
                token = args[i];
                if (!tokenMap[token]) {
                  tokens.push(token);
                  tokenMap[token] = true;
                }
              }

              /** Update the targeted attribute of the attached element if the token list's changed. */
              if (length !== tokens.length) {
                length = tokens.length >>> 0;
                if (typeof el[prop] === "object") {
                  el[prop].baseVal = tokens.join(" ");
                } else {
                  el[prop] = tokens.join(" ");
                }
                reindex();
              }
            };

            that.remove = function () {
              preop.apply(that, args = arguments);

              /** Build a hash of token names to compare against when recollecting our token list. */
              for (var args, ignore = {}, i = 0, t = []; i < args.length; ++i) {
                ignore[args[i]] = true;
                delete tokenMap[args[i]];
              }

              /** Run through our tokens list and reassign only those that aren't defined in the hash declared above. */
              for (i = 0; i < tokens.length; ++i)
                if (!ignore[tokens[i]]) t.push(tokens[i]);

              tokens = t;
              length = t.length >>> 0;

              /** Update the targeted attribute of the attached element. */
              if (typeof el[prop] === "object") {
                el[prop].baseVal = tokens.join(" ");
              } else {
                el[prop] = tokens.join(" ");
              }
              reindex();
            };

            that.toggle = function (token, force) {
              preop.apply(that, [token]);

              /** Token state's being forced. */
              if (undefined !== force) {
                if (force) {
                  that.add(token);
                  return true;
                } else {
                  that.remove(token);
                  return false;
                }
              }

              /** Token already exists in tokenList. Remove it, and return FALSE. */
              if (tokenMap[token]) {
                that.remove(token);
                return false;
              }

              /** Otherwise, add the token and return TRUE. */
              that.add(token);
              return true;
            };

            return that;
          };

          return _DOMTokenList;
        }());
      }

      // Add second argument to native DOMTokenList.toggle() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.toggle('x', false);
        if (!e.classList.contains('x')) return;
        e.classList.constructor.prototype.toggle = function toggle(token /*, force*/) {
          var force = arguments[1];
          if (force === undefined) {
            var add = !this.contains(token);
            this[add ? 'add' : 'remove'](token);
            return add;
          }
          force = !!force;
          this[force ? 'add' : 'remove'](token);
          return force;
        };
      }());

      // Add multiple arguments to native DOMTokenList.add() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a', 'b');
        if (e.classList.contains('b')) return;
        var native = e.classList.constructor.prototype.add;
        e.classList.constructor.prototype.add = function () {
          var args = arguments;
          var l = arguments.length;
          for (var i = 0; i < l; i++) {
            native.call(this, args[i]);
          }
        };
      }());

      // Add multiple arguments to native DOMTokenList.remove() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a');
        e.classList.add('b');
        e.classList.remove('a', 'b');
        if (!e.classList.contains('b')) return;
        var native = e.classList.constructor.prototype.remove;
        e.classList.constructor.prototype.remove = function () {
          var args = arguments;
          var l = arguments.length;
          for (var i = 0; i < l; i++) {
            native.call(this, args[i]);
          }
        };
      }());

    }(this));

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js
var detect = ("Document" in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {

	if (this.HTMLDocument) { // IE8

		// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
		this.Document = this.HTMLDocument;

	} else {

		// Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
		this.Document = this.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
		this.Document.prototype = document;
	}
}


})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Element/detect.js
var detect = ('Element' in this && 'HTMLElement' in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element&flags=always
(function () {

	// IE8
	if (window.Element && !window.HTMLElement) {
		window.HTMLElement = window.Element;
		return;
	}

	// create Element constructor
	window.Element = window.HTMLElement = new Function('return function Element() {}')();

	// generate sandboxed iframe
	var vbody = document.appendChild(document.createElement('body'));
	var frame = vbody.appendChild(document.createElement('iframe'));

	// use sandboxed iframe to replicate Element functionality
	var frameDocument = frame.contentWindow.document;
	var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
	var cache = {};

	// polyfill Element.prototype on an element
	var shiv = function (element, deep) {
		var
		childNodes = element.childNodes || [],
		index = -1,
		key, value, childNode;

		if (element.nodeType === 1 && element.constructor !== Element) {
			element.constructor = Element;

			for (key in cache) {
				value = cache[key];
				element[key] = value;
			}
		}

		while (childNode = deep && childNodes[++index]) {
			shiv(childNode, deep);
		}

		return element;
	};

	var elements = document.getElementsByTagName('*');
	var nativeCreateElement = document.createElement;
	var interval;
	var loopLimit = 100;

	prototype.attachEvent('onpropertychange', function (event) {
		var
		propertyName = event.propertyName,
		nonValue = !cache.hasOwnProperty(propertyName),
		newValue = prototype[propertyName],
		oldValue = cache[propertyName],
		index = -1,
		element;

		while (element = elements[++index]) {
			if (element.nodeType === 1) {
				if (nonValue || element[propertyName] === oldValue) {
					element[propertyName] = newValue;
				}
			}
		}

		cache[propertyName] = newValue;
	});

	prototype.constructor = Element;

	if (!prototype.hasAttribute) {
		// <Element>.hasAttribute
		prototype.hasAttribute = function hasAttribute(name) {
			return this.getAttribute(name) !== null;
		};
	}

	// Apply Element prototype to the pre-existing DOM as soon as the body element appears.
	function bodyCheck() {
		if (!(loopLimit--)) clearTimeout(interval);
		if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
			shiv(document, true);
			if (interval && document.body.prototype) clearTimeout(interval);
			return (!!document.body.prototype);
		}
		return false;
	}
	if (!bodyCheck()) {
		document.onreadystatechange = bodyCheck;
		interval = setInterval(bodyCheck, 25);
	}

	// Apply to any new elements created after load
	document.createElement = function createElement(nodeName) {
		var element = nativeCreateElement(String(nodeName).toLowerCase());
		return shiv(element);
	};

	// remove sandboxed iframe
	document.removeChild(vbody);
}());

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/8717a9e04ac7aff99b4980fbedead98036b0929a/packages/polyfill-library/polyfills/Element/prototype/classList/detect.js
    var detect = (
      'document' in this && "classList" in document.documentElement && 'Element' in this && 'classList' in Element.prototype && (function () {
        var e = document.createElement('span');
        e.classList.add('a', 'b');
        return e.classList.contains('b');
      }())
    );

    if (detect) return

    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element.prototype.classList&flags=always
    (function (global) {
      var dpSupport = true;
      var defineGetter = function (object, name, fn, configurable) {
        if (Object.defineProperty)
          Object.defineProperty(object, name, {
            configurable: false === dpSupport ? true : !!configurable,
            get: fn
          });

        else object.__defineGetter__(name, fn);
      };
      /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
      try {
        defineGetter({}, "support");
      }
      catch (e) {
        dpSupport = false;
      }
      /** Polyfills a property with a DOMTokenList */
      var addProp = function (o, name, attr) {

        defineGetter(o.prototype, name, function () {
          var tokenList;

          var THIS = this,

          /** Prevent this from firing twice for some reason. What the hell, IE. */
          gibberishProperty = "__defineGetter__" + "DEFINE_PROPERTY" + name;
          if(THIS[gibberishProperty]) return tokenList;
          THIS[gibberishProperty] = true;

          /**
           * IE8 can't define properties on native JavaScript objects, so we'll use a dumb hack instead.
           *
           * What this is doing is creating a dummy element ("reflection") inside a detached phantom node ("mirror")
           * that serves as the target of Object.defineProperty instead. While we could simply use the subject HTML
           * element instead, this would conflict with element types which use indexed properties (such as forms and
           * select lists).
           */
          if (false === dpSupport) {

            var visage;
            var mirror = addProp.mirror || document.createElement("div");
            var reflections = mirror.childNodes;
            var l = reflections.length;

            for (var i = 0; i < l; ++i)
              if (reflections[i]._R === THIS) {
                visage = reflections[i];
                break;
              }

            /** Couldn't find an element's reflection inside the mirror. Materialise one. */
            visage || (visage = mirror.appendChild(document.createElement("div")));

            tokenList = DOMTokenList.call(visage, THIS, attr);
          } else tokenList = new DOMTokenList(THIS, attr);

          defineGetter(THIS, name, function () {
            return tokenList;
          });
          delete THIS[gibberishProperty];

          return tokenList;
        }, true);
      };

      addProp(global.Element, "classList", "className");
      addProp(global.HTMLElement, "classList", "className");
      addProp(global.HTMLLinkElement, "relList", "rel");
      addProp(global.HTMLAnchorElement, "relList", "rel");
      addProp(global.HTMLAreaElement, "relList", "rel");
    }(this));

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

function Accordion ($module) {
  this.$module = $module;
  this.moduleId = $module.getAttribute('id');
  this.$sections = $module.querySelectorAll('.govuk-accordion__section');
  this.$openAllButton = '';
  this.browserSupportsSessionStorage = helper.checkForSessionStorage();

  this.controlsClass = 'govuk-accordion__controls';
  this.openAllClass = 'govuk-accordion__open-all';
  this.iconClass = 'govuk-accordion__icon';

  this.sectionHeaderClass = 'govuk-accordion__section-header';
  this.sectionHeaderFocusedClass = 'govuk-accordion__section-header--focused';
  this.sectionHeadingClass = 'govuk-accordion__section-heading';
  this.sectionSummaryClass = 'govuk-accordion__section-summary';
  this.sectionButtonClass = 'govuk-accordion__section-button';
  this.sectionExpandedClass = 'govuk-accordion__section--expanded';
}

// Initialize component
Accordion.prototype.init = function () {
  // Check for module
  if (!this.$module) {
    return
  }

  this.initControls();

  this.initSectionHeaders();

  // See if "Open all" button text should be updated
  var areAllSectionsOpen = this.checkIfAllSectionsOpen();
  this.updateOpenAllButton(areAllSectionsOpen);
};

// Initialise controls and set attributes
Accordion.prototype.initControls = function () {
  // Create "Open all" button and set attributes
  this.$openAllButton = document.createElement('button');
  this.$openAllButton.setAttribute('type', 'button');
  this.$openAllButton.innerHTML = 'Open all <span class="govuk-visually-hidden">sections</span>';
  this.$openAllButton.setAttribute('class', this.openAllClass);
  this.$openAllButton.setAttribute('aria-expanded', 'false');
  this.$openAllButton.setAttribute('type', 'button');

  // Create control wrapper and add controls to it
  var accordionControls = document.createElement('div');
  accordionControls.setAttribute('class', this.controlsClass);
  accordionControls.appendChild(this.$openAllButton);
  this.$module.insertBefore(accordionControls, this.$module.firstChild);

  // Handle events for the controls
  this.$openAllButton.addEventListener('click', this.onOpenOrCloseAllToggle.bind(this));
};

// Initialise section headers
Accordion.prototype.initSectionHeaders = function () {
  // Loop through section headers
  nodeListForEach(this.$sections, function ($section, i) {
    // Set header attributes
    var header = $section.querySelector('.' + this.sectionHeaderClass);
    this.initHeaderAttributes(header, i);

    this.setExpanded(this.isExpanded($section), $section);

    // Handle events
    header.addEventListener('click', this.onSectionToggle.bind(this, $section));

    // See if there is any state stored in sessionStorage and set the sections to
    // open or closed.
    this.setInitialState($section);
  }.bind(this));
};

// Set individual header attributes
Accordion.prototype.initHeaderAttributes = function ($headerWrapper, index) {
  var $module = this;
  var $span = $headerWrapper.querySelector('.' + this.sectionButtonClass);
  var $heading = $headerWrapper.querySelector('.' + this.sectionHeadingClass);
  var $summary = $headerWrapper.querySelector('.' + this.sectionSummaryClass);

  // Copy existing span element to an actual button element, for improved accessibility.
  var $button = document.createElement('button');
  $button.setAttribute('type', 'button');
  $button.setAttribute('id', this.moduleId + '-heading-' + (index + 1));
  $button.setAttribute('aria-controls', this.moduleId + '-content-' + (index + 1));

  // Copy all attributes (https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) from $span to $button
  for (var i = 0; i < $span.attributes.length; i++) {
    var attr = $span.attributes.item(i);
    $button.setAttribute(attr.nodeName, attr.nodeValue);
  }

  $button.addEventListener('focusin', function (e) {
    if (!$headerWrapper.classList.contains($module.sectionHeaderFocusedClass)) {
      $headerWrapper.className += ' ' + $module.sectionHeaderFocusedClass;
    }
  });

  $button.addEventListener('blur', function (e) {
    $headerWrapper.classList.remove($module.sectionHeaderFocusedClass);
  });

  if (typeof ($summary) !== 'undefined' && $summary !== null) {
    $button.setAttribute('aria-describedby', this.moduleId + '-summary-' + (index + 1));
  }

  // $span could contain HTML elements (see https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content)
  $button.innerHTML = $span.innerHTML;

  $heading.removeChild($span);
  $heading.appendChild($button);

  // Add "+/-" icon
  var icon = document.createElement('span');
  icon.className = this.iconClass;
  icon.setAttribute('aria-hidden', 'true');

  $heading.appendChild(icon);
};

// When section toggled, set and store state
Accordion.prototype.onSectionToggle = function ($section) {
  var expanded = this.isExpanded($section);
  this.setExpanded(!expanded, $section);

  // Store the state in sessionStorage when a change is triggered
  this.storeState($section);
};

// When Open/Close All toggled, set and store state
Accordion.prototype.onOpenOrCloseAllToggle = function () {
  var $module = this;
  var $sections = this.$sections;

  var nowExpanded = !this.checkIfAllSectionsOpen();

  nodeListForEach($sections, function ($section) {
    $module.setExpanded(nowExpanded, $section);
    // Store the state in sessionStorage when a change is triggered
    $module.storeState($section);
  });

  $module.updateOpenAllButton(nowExpanded);
};

// Set section attributes when opened/closed
Accordion.prototype.setExpanded = function (expanded, $section) {
  var $button = $section.querySelector('.' + this.sectionButtonClass);
  $button.setAttribute('aria-expanded', expanded);

  if (expanded) {
    $section.classList.add(this.sectionExpandedClass);
  } else {
    $section.classList.remove(this.sectionExpandedClass);
  }

  // See if "Open all" button text should be updated
  var areAllSectionsOpen = this.checkIfAllSectionsOpen();
  this.updateOpenAllButton(areAllSectionsOpen);
};

// Get state of section
Accordion.prototype.isExpanded = function ($section) {
  return $section.classList.contains(this.sectionExpandedClass)
};

// Check if all sections are open
Accordion.prototype.checkIfAllSectionsOpen = function () {
  // Get a count of all the Accordion sections
  var sectionsCount = this.$sections.length;
  // Get a count of all Accordion sections that are expanded
  var expandedSectionCount = this.$module.querySelectorAll('.' + this.sectionExpandedClass).length;
  var areAllSectionsOpen = sectionsCount === expandedSectionCount;

  return areAllSectionsOpen
};

// Update "Open all" button
Accordion.prototype.updateOpenAllButton = function (expanded) {
  var newButtonText = expanded ? 'Close all' : 'Open all';
  newButtonText += '<span class="govuk-visually-hidden"> sections</span>';
  this.$openAllButton.setAttribute('aria-expanded', expanded);
  this.$openAllButton.innerHTML = newButtonText;
};

// Check for `window.sessionStorage`, and that it actually works.
var helper = {
  checkForSessionStorage: function () {
    var testString = 'this is the test string';
    var result;
    try {
      window.sessionStorage.setItem(testString, testString);
      result = window.sessionStorage.getItem(testString) === testString.toString();
      window.sessionStorage.removeItem(testString);
      return result
    } catch (exception) {
      if ((typeof console === 'undefined' || typeof console.log === 'undefined')) {
        console.log('Notice: sessionStorage not available.');
      }
    }
  }
};

// Set the state of the accordions in sessionStorage
Accordion.prototype.storeState = function ($section) {
  if (this.browserSupportsSessionStorage) {
    // We need a unique way of identifying each content in the accordion. Since
    // an `#id` should be unique and an `id` is required for `aria-` attributes
    // `id` can be safely used.
    var $button = $section.querySelector('.' + this.sectionButtonClass);

    if ($button) {
      var contentId = $button.getAttribute('aria-controls');
      var contentState = $button.getAttribute('aria-expanded');

      if (typeof contentId === 'undefined' && (typeof console === 'undefined' || typeof console.log === 'undefined')) {
        console.error(new Error('No aria controls present in accordion section heading.'));
      }

      if (typeof contentState === 'undefined' && (typeof console === 'undefined' || typeof console.log === 'undefined')) {
        console.error(new Error('No aria expanded present in accordion section heading.'));
      }

      // Only set the state when both `contentId` and `contentState` are taken from the DOM.
      if (contentId && contentState) {
        window.sessionStorage.setItem(contentId, contentState);
      }
    }
  }
};

// Read the state of the accordions from sessionStorage
Accordion.prototype.setInitialState = function ($section) {
  if (this.browserSupportsSessionStorage) {
    var $button = $section.querySelector('.' + this.sectionButtonClass);

    if ($button) {
      var contentId = $button.getAttribute('aria-controls');
      var contentState = contentId ? window.sessionStorage.getItem(contentId) : null;

      if (contentState !== null) {
        this.setExpanded(contentState === 'true', $section);
      }
    }
  }
};

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Window/detect.js
var detect = ('Window' in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Window&flags=always
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {
	(function (global) {
		if (global.constructor) {
			global.Window = global.constructor;
		} else {
			(global.Window = global.constructor = new Function('return function Window() {}')()).prototype = this;
		}
	}(this));
}

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Event/detect.js
var detect = (
  (function(global) {

  	if (!('Event' in global)) return false;
  	if (typeof global.Event === 'function') return true;

  	try {

  		// In IE 9-11, the Event object exists but cannot be instantiated
  		new Event('click');
  		return true;
  	} catch(e) {
  		return false;
  	}
  }(this))
);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Event&flags=always
(function () {
	var unlistenableWindowEvents = {
		click: 1,
		dblclick: 1,
		keyup: 1,
		keypress: 1,
		keydown: 1,
		mousedown: 1,
		mouseup: 1,
		mousemove: 1,
		mouseover: 1,
		mouseenter: 1,
		mouseleave: 1,
		mouseout: 1,
		storage: 1,
		storagecommit: 1,
		textinput: 1
	};

	// This polyfill depends on availability of `document` so will not run in a worker
	// However, we asssume there are no browsers with worker support that lack proper
	// support for `Event` within the worker
	if (typeof document === 'undefined' || typeof window === 'undefined') return;

	function indexOf(array, element) {
		var
		index = -1,
		length = array.length;

		while (++index < length) {
			if (index in array && array[index] === element) {
				return index;
			}
		}

		return -1;
	}

	var existingProto = (window.Event && window.Event.prototype) || null;
	window.Event = Window.prototype.Event = function Event(type, eventInitDict) {
		if (!type) {
			throw new Error('Not enough arguments');
		}

		var event;
		// Shortcut if browser supports createEvent
		if ('createEvent' in document) {
			event = document.createEvent('Event');
			var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
			var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

			event.initEvent(type, bubbles, cancelable);

			return event;
		}

		event = document.createEventObject();

		event.type = type;
		event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
		event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

		return event;
	};
	if (existingProto) {
		Object.defineProperty(window.Event, 'prototype', {
			configurable: false,
			enumerable: false,
			writable: true,
			value: existingProto
		});
	}

	if (!('createEvent' in document)) {
		window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1];

			if (element === window && type in unlistenableWindowEvents) {
				throw new Error('In IE8 the event: ' + type + ' is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.');
			}

			if (!element._events) {
				element._events = {};
			}

			if (!element._events[type]) {
				element._events[type] = function (event) {
					var
					list = element._events[event.type].list,
					events = list.slice(),
					index = -1,
					length = events.length,
					eventElement;

					event.preventDefault = function preventDefault() {
						if (event.cancelable !== false) {
							event.returnValue = false;
						}
					};

					event.stopPropagation = function stopPropagation() {
						event.cancelBubble = true;
					};

					event.stopImmediatePropagation = function stopImmediatePropagation() {
						event.cancelBubble = true;
						event.cancelImmediate = true;
					};

					event.currentTarget = element;
					event.relatedTarget = event.fromElement || null;
					event.target = event.target || event.srcElement || element;
					event.timeStamp = new Date().getTime();

					if (event.clientX) {
						event.pageX = event.clientX + document.documentElement.scrollLeft;
						event.pageY = event.clientY + document.documentElement.scrollTop;
					}

					while (++index < length && !event.cancelImmediate) {
						if (index in events) {
							eventElement = events[index];

							if (indexOf(list, eventElement) !== -1 && typeof eventElement === 'function') {
								eventElement.call(element, event);
							}
						}
					}
				};

				element._events[type].list = [];

				if (element.attachEvent) {
					element.attachEvent('on' + type, element._events[type]);
				}
			}

			element._events[type].list.push(listener);
		};

		window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1],
			index;

			if (element._events && element._events[type] && element._events[type].list) {
				index = indexOf(element._events[type].list, listener);

				if (index !== -1) {
					element._events[type].list.splice(index, 1);

					if (!element._events[type].list.length) {
						if (element.detachEvent) {
							element.detachEvent('on' + type, element._events[type]);
						}
						delete element._events[type];
					}
				}
			}
		};

		window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
			if (!arguments.length) {
				throw new Error('Not enough arguments');
			}

			if (!event || typeof event.type !== 'string') {
				throw new Error('DOM Events Exception 0');
			}

			var element = this, type = event.type;

			try {
				if (!event.bubbles) {
					event.cancelBubble = true;

					var cancelBubbleEvent = function (event) {
						event.cancelBubble = true;

						(element || window).detachEvent('on' + type, cancelBubbleEvent);
					};

					this.attachEvent('on' + type, cancelBubbleEvent);
				}

				this.fireEvent('on' + type, event);
			} catch (error) {
				event.target = element;

				do {
					event.currentTarget = element;

					if ('_events' in element && typeof element._events[type] === 'function') {
						element._events[type].call(element, event);
					}

					if (typeof element['on' + type] === 'function') {
						element['on' + type].call(element, event);
					}

					element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
				} while (element && !event.cancelBubble);
			}

			return true;
		};

		// Add the DOMContentLoaded Event
		document.attachEvent('onreadystatechange', function() {
			if (document.readyState === 'complete') {
				document.dispatchEvent(new Event('DOMContentLoaded', {
					bubbles: true
				}));
			}
		});
	}
}());

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

/**
 * JavaScript 'shim' to trigger the click event of element(s) when the space key is pressed.
 *
 * Created since some Assistive Technologies (for example some Screenreaders)
 * will tell a user to press space on a 'button', so this functionality needs to be shimmed
 * See https://github.com/alphagov/govuk_elements/pull/272#issuecomment-233028270
 *
 * Usage instructions:
 * the 'shim' will be automatically initialised
 */

var KEY_SPACE = 32;
var DEBOUNCE_TIMEOUT_IN_SECONDS = 1;
var debounceFormSubmitTimer = null;

function Button ($module) {
  this.$module = $module;
}

/**
* if the event target element has a role='button' and the event is key space pressed
* then it prevents the default event and triggers a click event
* @param {object} event event
*/
Button.prototype.handleKeyDown = function (event) {
  // get the target element
  var target = event.target;
  // if the element has a role='button' and the pressed key is a space, we'll simulate a click
  if (target.getAttribute('role') === 'button' && event.keyCode === KEY_SPACE) {
    event.preventDefault();
    // trigger the target's click event
    target.click();
  }
};

/**
* If the click quickly succeeds a previous click then nothing will happen.
* This stops people accidentally causing multiple form submissions by
* double clicking buttons.
*/
Button.prototype.debounce = function (event) {
  var target = event.target;
  // Check the button that is clicked on has the preventDoubleClick feature enabled
  if (target.getAttribute('data-prevent-double-click') !== 'true') {
    return
  }

  // If the timer is still running then we want to prevent the click from submitting the form
  if (debounceFormSubmitTimer) {
    event.preventDefault();
    return false
  }

  debounceFormSubmitTimer = setTimeout(function () {
    debounceFormSubmitTimer = null;
  }, DEBOUNCE_TIMEOUT_IN_SECONDS * 1000);
};

/**
* Initialise an event listener for keydown at document level
* this will help listening for later inserted elements with a role="button"
*/
Button.prototype.init = function () {
  this.$module.addEventListener('keydown', this.handleKeyDown);
  this.$module.addEventListener('click', this.debounce);
};

/**
 * JavaScript 'polyfill' for HTML5's <details> and <summary> elements
 * and 'shim' to add accessiblity enhancements for all browsers
 *
 * http://caniuse.com/#feat=details
 *
 * Usage instructions:
 * the 'polyfill' will be automatically initialised
 */

var KEY_ENTER = 13;
var KEY_SPACE$1 = 32;

// Create a flag to know if the browser supports navtive details
var NATIVE_DETAILS = typeof document.createElement('details').open === 'boolean';

function Details ($module) {
  this.$module = $module;
}

/**
* Handle cross-modal click events
* @param {object} node element
* @param {function} callback function
*/
Details.prototype.handleInputs = function (node, callback) {
  node.addEventListener('keypress', function (event) {
    var target = event.target;
    // When the key gets pressed - check if it is enter or space
    if (event.keyCode === KEY_ENTER || event.keyCode === KEY_SPACE$1) {
      if (target.nodeName.toLowerCase() === 'summary') {
        // Prevent space from scrolling the page
        // and enter from submitting a form
        event.preventDefault();
        // Click to let the click event do all the necessary action
        if (target.click) {
          target.click();
        } else {
          // except Safari 5.1 and under don't support .click() here
          callback(event);
        }
      }
    }
  });

  // Prevent keyup to prevent clicking twice in Firefox when using space key
  node.addEventListener('keyup', function (event) {
    var target = event.target;
    if (event.keyCode === KEY_SPACE$1) {
      if (target.nodeName.toLowerCase() === 'summary') {
        event.preventDefault();
      }
    }
  });

  node.addEventListener('click', callback);
};

Details.prototype.init = function () {
  var $module = this.$module;

  if (!$module) {
    return
  }

  // Save shortcuts to the inner summary and content elements
  var $summary = this.$summary = $module.getElementsByTagName('summary').item(0);
  var $content = this.$content = $module.getElementsByTagName('div').item(0);

  // If <details> doesn't have a <summary> and a <div> representing the content
  // it means the required HTML structure is not met so the script will stop
  if (!$summary || !$content) {
    return
  }

  // If the content doesn't have an ID, assign it one now
  // which we'll need for the summary's aria-controls assignment
  if (!$content.id) {
    $content.id = 'details-content-' + generateUniqueID();
  }

  // Add ARIA role="group" to details
  $module.setAttribute('role', 'group');

  // Add role=button to summary
  $summary.setAttribute('role', 'button');

  // Add aria-controls
  $summary.setAttribute('aria-controls', $content.id);

  // Set tabIndex so the summary is keyboard accessible for non-native elements
  // http://www.saliences.com/browserBugs/tabIndex.html
  if (!NATIVE_DETAILS) {
    $summary.tabIndex = 0;
  }

  // Detect initial open state
  var openAttr = $module.getAttribute('open') !== null;
  if (openAttr === true) {
    $summary.setAttribute('aria-expanded', 'true');
    $content.setAttribute('aria-hidden', 'false');
  } else {
    $summary.setAttribute('aria-expanded', 'false');
    $content.setAttribute('aria-hidden', 'true');
    if (!NATIVE_DETAILS) {
      $content.style.display = 'none';
    }
  }

  // Bind an event to handle summary elements
  this.handleInputs($summary, this.setAttributes.bind(this));
};

/**
* Define a statechange function that updates aria-expanded and style.display
* @param {object} summary element
*/
Details.prototype.setAttributes = function () {
  var $module = this.$module;
  var $summary = this.$summary;
  var $content = this.$content;

  var expanded = $summary.getAttribute('aria-expanded') === 'true';
  var hidden = $content.getAttribute('aria-hidden') === 'true';

  $summary.setAttribute('aria-expanded', (expanded ? 'false' : 'true'));
  $content.setAttribute('aria-hidden', (hidden ? 'false' : 'true'));

  if (!NATIVE_DETAILS) {
    $content.style.display = (expanded ? 'none' : '');

    var hasOpenAttr = $module.getAttribute('open') !== null;
    if (!hasOpenAttr) {
      $module.setAttribute('open', 'open');
    } else {
      $module.removeAttribute('open');
    }
  }
  return true
};

/**
* Remove the click event from the node element
* @param {object} node element
*/
Details.prototype.destroy = function (node) {
  node.removeEventListener('keypress');
  node.removeEventListener('keyup');
  node.removeEventListener('click');
};

function CharacterCount ($module) {
  this.$module = $module;
  this.$textarea = $module.querySelector('.js-character-count');
}

CharacterCount.prototype.defaults = {
  characterCountAttribute: 'data-maxlength',
  wordCountAttribute: 'data-maxwords'
};

// Initialize component
CharacterCount.prototype.init = function () {
  // Check for module
  var $module = this.$module;
  var $textarea = this.$textarea;
  if (!$textarea) {
    return
  }

  // Read options set using dataset ('data-' values)
  this.options = this.getDataset($module);

  // Determine the limit attribute (characters or words)
  var countAttribute = this.defaults.characterCountAttribute;
  if (this.options.maxwords) {
    countAttribute = this.defaults.wordCountAttribute;
  }

  // Save the element limit
  this.maxLength = $module.getAttribute(countAttribute);

  // Check for limit
  if (!this.maxLength) {
    return
  }

  // Generate and reference message
  var boundCreateCountMessage = this.createCountMessage.bind(this);
  this.countMessage = boundCreateCountMessage();

  // If there's a maximum length defined and the count message exists
  if (this.countMessage) {
    // Remove hard limit if set
    $module.removeAttribute('maxlength');

    // Bind event changes to the textarea
    var boundChangeEvents = this.bindChangeEvents.bind(this);
    boundChangeEvents();

    // Update count message
    var boundUpdateCountMessage = this.updateCountMessage.bind(this);
    boundUpdateCountMessage();
  }
};

// Read data attributes
CharacterCount.prototype.getDataset = function (element) {
  var dataset = {};
  var attributes = element.attributes;
  if (attributes) {
    for (var i = 0; i < attributes.length; i++) {
      var attribute = attributes[i];
      var match = attribute.name.match(/^data-(.+)/);
      if (match) {
        dataset[match[1]] = attribute.value;
      }
    }
  }
  return dataset
};

// Counts characters or words in text
CharacterCount.prototype.count = function (text) {
  var length;
  if (this.options.maxwords) {
    var tokens = text.match(/\S+/g) || []; // Matches consecutive non-whitespace chars
    length = tokens.length;
  } else {
    length = text.length;
  }
  return length
};

// Generate count message and bind it to the input
// returns reference to the generated element
CharacterCount.prototype.createCountMessage = function () {
  var countElement = this.$textarea;
  var elementId = countElement.id;
  // Check for existing info count message
  var countMessage = document.getElementById(elementId + '-info');
  // If there is no existing info count message we add one right after the field
  if (elementId && !countMessage) {
    countElement.insertAdjacentHTML('afterend', '<span id="' + elementId + '-info" class="govuk-hint govuk-character-count__message" aria-live="polite"></span>');
    this.describedBy = countElement.getAttribute('aria-describedby');
    this.describedByInfo = this.describedBy + ' ' + elementId + '-info';
    countElement.setAttribute('aria-describedby', this.describedByInfo);
    countMessage = document.getElementById(elementId + '-info');
  } else {
  // If there is an existing info count message we move it right after the field
    countElement.insertAdjacentElement('afterend', countMessage);
  }
  return countMessage
};

// Bind input propertychange to the elements and update based on the change
CharacterCount.prototype.bindChangeEvents = function () {
  var $textarea = this.$textarea;
  $textarea.addEventListener('keyup', this.checkIfValueChanged.bind(this));

  // Bind focus/blur events to start/stop polling
  $textarea.addEventListener('focus', this.handleFocus.bind(this));
  $textarea.addEventListener('blur', this.handleBlur.bind(this));
};

// Speech recognition software such as Dragon NaturallySpeaking will modify the
// fields by directly changing its `value`. These changes don't trigger events
// in JavaScript, so we need to poll to handle when and if they occur.
CharacterCount.prototype.checkIfValueChanged = function () {
  if (!this.$textarea.oldValue) this.$textarea.oldValue = '';
  if (this.$textarea.value !== this.$textarea.oldValue) {
    this.$textarea.oldValue = this.$textarea.value;
    var boundUpdateCountMessage = this.updateCountMessage.bind(this);
    boundUpdateCountMessage();
  }
};

// Update message box
CharacterCount.prototype.updateCountMessage = function () {
  var countElement = this.$textarea;
  var options = this.options;
  var countMessage = this.countMessage;

  // Determine the remaining number of characters/words
  var currentLength = this.count(countElement.value);
  var maxLength = this.maxLength;
  var remainingNumber = maxLength - currentLength;

  // Set threshold if presented in options
  var thresholdPercent = options.threshold ? options.threshold : 0;
  var thresholdValue = maxLength * thresholdPercent / 100;
  if (thresholdValue > currentLength) {
    countMessage.classList.add('govuk-character-count__message--disabled');
  } else {
    countMessage.classList.remove('govuk-character-count__message--disabled');
  }

  // Update styles
  if (remainingNumber < 0) {
    countElement.classList.add('govuk-textarea--error');
    countMessage.classList.remove('govuk-hint');
    countMessage.classList.add('govuk-error-message');
  } else {
    countElement.classList.remove('govuk-textarea--error');
    countMessage.classList.remove('govuk-error-message');
    countMessage.classList.add('govuk-hint');
  }

  // Update message
  var charVerb = 'remaining';
  var charNoun = 'character';
  var displayNumber = remainingNumber;
  if (options.maxwords) {
    charNoun = 'word';
  }
  charNoun = charNoun + ((remainingNumber === -1 || remainingNumber === 1) ? '' : 's');

  charVerb = (remainingNumber < 0) ? 'too many' : 'remaining';
  displayNumber = Math.abs(remainingNumber);

  countMessage.innerHTML = 'You have ' + displayNumber + ' ' + charNoun + ' ' + charVerb;
};

CharacterCount.prototype.handleFocus = function () {
  // Check if value changed on focus
  this.valueChecker = setInterval(this.checkIfValueChanged.bind(this), 1000);
};

CharacterCount.prototype.handleBlur = function () {
  // Cancel value checking on blur
  clearInterval(this.valueChecker);
};

function Checkboxes ($module) {
  this.$module = $module;
  this.$inputs = $module.querySelectorAll('input[type="checkbox"]');
}

Checkboxes.prototype.init = function () {
  var $module = this.$module;
  var $inputs = this.$inputs;

  /**
  * Loop over all items with [data-controls]
  * Check if they have a matching conditional reveal
  * If they do, assign attributes.
  **/
  nodeListForEach($inputs, function ($input) {
    var controls = $input.getAttribute('data-aria-controls');

    // Check if input controls anything
    // Check if content exists, before setting attributes.
    if (!controls || !$module.querySelector('#' + controls)) {
      return
    }

    // If we have content that is controlled, set attributes.
    $input.setAttribute('aria-controls', controls);
    $input.removeAttribute('data-aria-controls');
    this.setAttributes($input);
  }.bind(this));

  // Handle events
  $module.addEventListener('click', this.handleClick.bind(this));
};

Checkboxes.prototype.setAttributes = function ($input) {
  var inputIsChecked = $input.checked;
  $input.setAttribute('aria-expanded', inputIsChecked);

  var $content = this.$module.querySelector('#' + $input.getAttribute('aria-controls'));
  if ($content) {
    $content.classList.toggle('govuk-checkboxes__conditional--hidden', !inputIsChecked);
  }
};

Checkboxes.prototype.handleClick = function (event) {
  var $target = event.target;

  // If a checkbox with aria-controls, handle click
  var isCheckbox = $target.getAttribute('type') === 'checkbox';
  var hasAriaControls = $target.getAttribute('aria-controls');
  if (isCheckbox && hasAriaControls) {
    this.setAttributes($target);
  }
};

(function(undefined) {

  // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/matches/detect.js
  var detect = (
    'document' in this && "matches" in document.documentElement
  );

  if (detect) return

  // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/matches/polyfill.js
  Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function matches(selector) {
    var element = this;
    var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
    var index = 0;

    while (elements[index] && elements[index] !== element) {
      ++index;
    }

    return !!elements[index];
  };

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

(function(undefined) {

  // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/closest/detect.js
  var detect = (
    'document' in this && "closest" in document.documentElement
  );

  if (detect) return

    // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/closest/polyfill.js
  Element.prototype.closest = function closest(selector) {
    var node = this;

    while (node) {
      if (node.matches(selector)) return node;
      else node = 'SVGElement' in window && node instanceof SVGElement ? node.parentNode : node.parentElement;
    }

    return null;
  };

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

function ErrorSummary ($module) {
  this.$module = $module;
}

ErrorSummary.prototype.init = function () {
  var $module = this.$module;
  if (!$module) {
    return
  }
  $module.focus();

  $module.addEventListener('click', this.handleClick.bind(this));
};

/**
* Click event handler
*
* @param {MouseEvent} event - Click event
*/
ErrorSummary.prototype.handleClick = function (event) {
  var target = event.target;
  if (this.focusTarget(target)) {
    event.preventDefault();
  }
};

/**
 * Focus the target element
 *
 * By default, the browser will scroll the target into view. Because our labels
 * or legends appear above the input, this means the user will be presented with
 * an input without any context, as the label or legend will be off the top of
 * the screen.
 *
 * Manually handling the click event, scrolling the question into view and then
 * focussing the element solves this.
 *
 * This also results in the label and/or legend being announced correctly in
 * NVDA (as tested in 2018.3.2) - without this only the field type is announced
 * (e.g. "Edit, has autocomplete").
 *
 * @param {HTMLElement} $target - Event target
 * @returns {boolean} True if the target was able to be focussed
 */
ErrorSummary.prototype.focusTarget = function ($target) {
  // If the element that was clicked was not a link, return early
  if ($target.tagName !== 'A' || $target.href === false) {
    return false
  }

  var inputId = this.getFragmentFromUrl($target.href);
  var $input = document.getElementById(inputId);
  if (!$input) {
    return false
  }

  var $legendOrLabel = this.getAssociatedLegendOrLabel($input);
  if (!$legendOrLabel) {
    return false
  }

  // Prefer using the history API where possible, as updating
  // window.location.hash causes the viewport to jump to the input briefly
  // before then scrolling to the label/legend in IE10, IE11 and Edge (as tested
  // in Edge 17).
  if (window.history.pushState) {
    window.history.pushState(null, null, '#' + inputId);
  } else {
    window.location.hash = inputId;
  }

  // Scroll the legend or label into view *before* calling focus on the input to
  // avoid extra scrolling in browsers that don't support `preventScroll` (which
  // at time of writing is most of them...)
  $legendOrLabel.scrollIntoView();
  $input.focus({ preventScroll: true });

  return true
};

/**
 * Get fragment from URL
 *
 * Extract the fragment (everything after the hash) from a URL, but not including
 * the hash.
 *
 * @param {string} url - URL
 * @returns {string} Fragment from URL, without the hash
 */
ErrorSummary.prototype.getFragmentFromUrl = function (url) {
  if (url.indexOf('#') === -1) {
    return false
  }

  return url.split('#').pop()
};

/**
 * Get associated legend or label
 *
 * Returns the first element that exists from this list:
 *
 * - The `<legend>` associated with the closest `<fieldset>` ancestor
 * - The first `<label>` that is associated with the input using for="inputId"
 * - The closest parent `<label>`
 *
 * @param {HTMLElement} $input - The input
 * @returns {HTMLElement} Associated legend or label, or null if no associated
 *                        legend or label can be found
 */
ErrorSummary.prototype.getAssociatedLegendOrLabel = function ($input) {
  var $fieldset = $input.closest('fieldset');

  if ($fieldset) {
    var legends = $fieldset.getElementsByTagName('legend');

    if (legends.length) {
      return legends[0]
    }
  }

  return document.querySelector("label[for='" + $input.getAttribute('id') + "']") ||
    $input.closest('label')
};

function Header ($module) {
  this.$module = $module;
}

Header.prototype.init = function () {
  // Check for module
  var $module = this.$module;
  if (!$module) {
    return
  }

  // Check for button
  var $toggleButton = $module.querySelector('.js-header-toggle');
  if (!$toggleButton) {
    return
  }

  // Handle $toggleButton click events
  $toggleButton.addEventListener('click', this.handleClick.bind(this));
};

/**
* Toggle class
* @param {object} node element
* @param {string} className to toggle
*/
Header.prototype.toggleClass = function (node, className) {
  if (node.className.indexOf(className) > 0) {
    node.className = node.className.replace(' ' + className, '');
  } else {
    node.className += ' ' + className;
  }
};

/**
* An event handler for click event on $toggleButton
* @param {object} event event
*/
Header.prototype.handleClick = function (event) {
  var $module = this.$module;
  var $toggleButton = event.target || event.srcElement;
  var $target = $module.querySelector('#' + $toggleButton.getAttribute('aria-controls'));

  // If a button with aria-controls, handle click
  if ($toggleButton && $target) {
    this.toggleClass($target, 'govuk-header__navigation--open');
    this.toggleClass($toggleButton, 'govuk-header__menu-button--open');

    $toggleButton.setAttribute('aria-expanded', $toggleButton.getAttribute('aria-expanded') !== 'true');
    $target.setAttribute('aria-hidden', $target.getAttribute('aria-hidden') === 'false');
  }
};

function Radios ($module) {
  this.$module = $module;
  this.$inputs = $module.querySelectorAll('input[type="radio"]');
}

Radios.prototype.init = function () {
  var $module = this.$module;
  var $inputs = this.$inputs;

  /**
  * Loop over all items with [data-controls]
  * Check if they have a matching conditional reveal
  * If they do, assign attributes.
  **/
  nodeListForEach($inputs, function ($input) {
    var controls = $input.getAttribute('data-aria-controls');

    // Check if input controls anything
    // Check if content exists, before setting attributes.
    if (!controls || !$module.querySelector('#' + controls)) {
      return
    }

    // If we have content that is controlled, set attributes.
    $input.setAttribute('aria-controls', controls);
    $input.removeAttribute('data-aria-controls');
    this.setAttributes($input);
  }.bind(this));

  // Handle events
  $module.addEventListener('click', this.handleClick.bind(this));
};

Radios.prototype.setAttributes = function ($input) {
  var inputIsChecked = $input.checked;
  $input.setAttribute('aria-expanded', inputIsChecked);

  var $content = this.$module.querySelector('#' + $input.getAttribute('aria-controls'));
  if ($content) {
    $content.classList.toggle('govuk-radios__conditional--hidden', !inputIsChecked);
  }
};

Radios.prototype.handleClick = function (event) {
  nodeListForEach(this.$inputs, function ($input) {
    // If a radio with aria-controls, handle click
    var isRadio = $input.getAttribute('type') === 'radio';
    var hasAriaControls = $input.getAttribute('aria-controls');
    if (isRadio && hasAriaControls) {
      this.setAttributes($input);
    }
  }.bind(this));
};

function Tabs ($module) {
  this.$module = $module;
  this.$tabs = $module.querySelectorAll('.govuk-tabs__tab');

  this.keys = { left: 37, right: 39, up: 38, down: 40 };
  this.jsHiddenClass = 'govuk-tabs__panel--hidden';
}

Tabs.prototype.init = function () {
  if (typeof window.matchMedia === 'function') {
    this.setupResponsiveChecks();
  } else {
    this.setup();
  }
};

Tabs.prototype.setupResponsiveChecks = function () {
  this.mql = window.matchMedia('(min-width: 40.0625em)');
  this.mql.addListener(this.checkMode.bind(this));
  this.checkMode();
};

Tabs.prototype.checkMode = function () {
  if (this.mql.matches) {
    this.setup();
  } else {
    this.teardown();
  }
};

Tabs.prototype.setup = function () {
  var $module = this.$module;
  var $tabs = this.$tabs;
  var $tabList = $module.querySelector('.govuk-tabs__list');
  var $tabListItems = $module.querySelectorAll('.govuk-tabs__list-item');

  if (!$tabs || !$tabList || !$tabListItems) {
    return
  }

  $tabList.setAttribute('role', 'tablist');

  nodeListForEach($tabListItems, function ($item) {
    $item.setAttribute('role', 'presentation');
  });

  nodeListForEach($tabs, function ($tab) {
    // Set HTML attributes
    this.setAttributes($tab);

    // Save bounded functions to use when removing event listeners during teardown
    $tab.boundTabClick = this.onTabClick.bind(this);
    $tab.boundTabKeydown = this.onTabKeydown.bind(this);

    // Handle events
    $tab.addEventListener('click', $tab.boundTabClick, true);
    $tab.addEventListener('keydown', $tab.boundTabKeydown, true);

    // Remove old active panels
    this.hideTab($tab);
  }.bind(this));

  // Show either the active tab according to the URL's hash or the first tab
  var $activeTab = this.getTab(window.location.hash) || this.$tabs[0];
  this.showTab($activeTab);

  // Handle hashchange events
  $module.boundOnHashChange = this.onHashChange.bind(this);
  window.addEventListener('hashchange', $module.boundOnHashChange, true);
};

Tabs.prototype.teardown = function () {
  var $module = this.$module;
  var $tabs = this.$tabs;
  var $tabList = $module.querySelector('.govuk-tabs__list');
  var $tabListItems = $module.querySelectorAll('.govuk-tabs__list-item');

  if (!$tabs || !$tabList || !$tabListItems) {
    return
  }

  $tabList.removeAttribute('role');

  nodeListForEach($tabListItems, function ($item) {
    $item.removeAttribute('role', 'presentation');
  });

  nodeListForEach($tabs, function ($tab) {
    // Remove events
    $tab.removeEventListener('click', $tab.boundTabClick, true);
    $tab.removeEventListener('keydown', $tab.boundTabKeydown, true);

    // Unset HTML attributes
    this.unsetAttributes($tab);
  }.bind(this));

  // Remove hashchange event handler
  window.removeEventListener('hashchange', $module.boundOnHashChange, true);
};

Tabs.prototype.onHashChange = function (e) {
  var hash = window.location.hash;
  var $tabWithHash = this.getTab(hash);
  if (!$tabWithHash) {
    return
  }

  // Prevent changing the hash
  if (this.changingHash) {
    this.changingHash = false;
    return
  }

  // Show either the active tab according to the URL's hash or the first tab
  var $previousTab = this.getCurrentTab();

  this.hideTab($previousTab);
  this.showTab($tabWithHash);
  $tabWithHash.focus();
};

Tabs.prototype.hideTab = function ($tab) {
  this.unhighlightTab($tab);
  this.hidePanel($tab);
};

Tabs.prototype.showTab = function ($tab) {
  this.highlightTab($tab);
  this.showPanel($tab);
};

Tabs.prototype.getTab = function (hash) {
  return this.$module.querySelector('.govuk-tabs__tab[href="' + hash + '"]')
};

Tabs.prototype.setAttributes = function ($tab) {
  // set tab attributes
  var panelId = this.getHref($tab).slice(1);
  $tab.setAttribute('id', 'tab_' + panelId);
  $tab.setAttribute('role', 'tab');
  $tab.setAttribute('aria-controls', panelId);
  $tab.setAttribute('tabindex', '-1');

  // set panel attributes
  var $panel = this.getPanel($tab);
  $panel.setAttribute('role', 'tabpanel');
  $panel.setAttribute('aria-labelledby', $tab.id);
  $panel.classList.add(this.jsHiddenClass);
};

Tabs.prototype.unsetAttributes = function ($tab) {
  // unset tab attributes
  $tab.removeAttribute('id');
  $tab.removeAttribute('role');
  $tab.removeAttribute('aria-controls');
  $tab.removeAttribute('tabindex');

  // unset panel attributes
  var $panel = this.getPanel($tab);
  $panel.removeAttribute('role');
  $panel.removeAttribute('aria-labelledby');
  $panel.classList.remove(this.jsHiddenClass);
};

Tabs.prototype.onTabClick = function (e) {
  e.preventDefault();
  var $newTab = e.target;
  var $currentTab = this.getCurrentTab();
  this.hideTab($currentTab);
  this.showTab($newTab);
  this.createHistoryEntry($newTab);
};

Tabs.prototype.createHistoryEntry = function ($tab) {
  var $panel = this.getPanel($tab);

  // Save and restore the id
  // so the page doesn't jump when a user clicks a tab (which changes the hash)
  var id = $panel.id;
  $panel.id = '';
  this.changingHash = true;
  window.location.hash = this.getHref($tab).slice(1);
  $panel.id = id;
};

Tabs.prototype.onTabKeydown = function (e) {
  switch (e.keyCode) {
    case this.keys.left:
    case this.keys.up:
      this.activatePreviousTab();
      e.preventDefault();
      break
    case this.keys.right:
    case this.keys.down:
      this.activateNextTab();
      e.preventDefault();
      break
  }
};

Tabs.prototype.activateNextTab = function () {
  var currentTab = this.getCurrentTab();
  var nextTabListItem = currentTab.parentNode.nextElementSibling;
  if (nextTabListItem) {
    var nextTab = nextTabListItem.firstElementChild;
  }
  if (nextTab) {
    this.hideTab(currentTab);
    this.showTab(nextTab);
    nextTab.focus();
    this.createHistoryEntry(nextTab);
  }
};

Tabs.prototype.activatePreviousTab = function () {
  var currentTab = this.getCurrentTab();
  var previousTabListItem = currentTab.parentNode.previousElementSibling;
  if (previousTabListItem) {
    var previousTab = previousTabListItem.firstElementChild;
  }
  if (previousTab) {
    this.hideTab(currentTab);
    this.showTab(previousTab);
    previousTab.focus();
    this.createHistoryEntry(previousTab);
  }
};

Tabs.prototype.getPanel = function ($tab) {
  var $panel = this.$module.querySelector(this.getHref($tab));
  return $panel
};

Tabs.prototype.showPanel = function ($tab) {
  var $panel = this.getPanel($tab);
  $panel.classList.remove(this.jsHiddenClass);
};

Tabs.prototype.hidePanel = function (tab) {
  var $panel = this.getPanel(tab);
  $panel.classList.add(this.jsHiddenClass);
};

Tabs.prototype.unhighlightTab = function ($tab) {
  $tab.setAttribute('aria-selected', 'false');
  $tab.classList.remove('govuk-tabs__tab--selected');
  $tab.setAttribute('tabindex', '-1');
};

Tabs.prototype.highlightTab = function ($tab) {
  $tab.setAttribute('aria-selected', 'true');
  $tab.classList.add('govuk-tabs__tab--selected');
  $tab.setAttribute('tabindex', '0');
};

Tabs.prototype.getCurrentTab = function () {
  return this.$module.querySelector('.govuk-tabs__tab--selected')
};

// this is because IE doesn't always return the actual value but a relative full path
// should be a utility function most prob
// http://labs.thesedays.com/blog/2010/01/08/getting-the-href-value-with-jquery-in-ie/
Tabs.prototype.getHref = function ($tab) {
  var href = $tab.getAttribute('href');
  var hash = href.slice(href.indexOf('#'), href.length);
  return hash
};

function initAll (options) {
  // Set the options to an empty object by default if no options are passed.
  options = typeof options !== 'undefined' ? options : {};

  // Allow the user to initialise GOV.UK Frontend in only certain sections of the page
  // Defaults to the entire document if nothing is set.
  var scope = typeof options.scope !== 'undefined' ? options.scope : document;

  // Find all buttons with [role=button] on the scope to enhance.
  new Button(scope).init();

  // Find all global accordion components to enhance.
  var $accordions = scope.querySelectorAll('[data-module="accordion"]');
  nodeListForEach($accordions, function ($accordion) {
    new Accordion($accordion).init();
  });

  // Find all global details elements to enhance.
  var $details = scope.querySelectorAll('details');
  nodeListForEach($details, function ($detail) {
    new Details($detail).init();
  });

  var $characterCount = scope.querySelectorAll('[data-module="character-count"]');
  nodeListForEach($characterCount, function ($characterCount) {
    new CharacterCount($characterCount).init();
  });

  var $checkboxes = scope.querySelectorAll('[data-module="checkboxes"]');
  nodeListForEach($checkboxes, function ($checkbox) {
    new Checkboxes($checkbox).init();
  });

  // Find first error summary module to enhance.
  var $errorSummary = scope.querySelector('[data-module="error-summary"]');
  new ErrorSummary($errorSummary).init();

  // Find first header module to enhance.
  var $toggleButton = scope.querySelector('[data-module="header"]');
  new Header($toggleButton).init();

  var $radios = scope.querySelectorAll('[data-module="radios"]');
  nodeListForEach($radios, function ($radio) {
    new Radios($radio).init();
  });

  var $tabs = scope.querySelectorAll('[data-module="tabs"]');
  nodeListForEach($tabs, function ($tabs) {
    new Tabs($tabs).init();
  });
}

exports.initAll = initAll;
exports.Accordion = Accordion;
exports.Button = Button;
exports.Details = Details;
exports.CharacterCount = CharacterCount;
exports.Checkboxes = Checkboxes;
exports.ErrorSummary = ErrorSummary;
exports.Header = Header;
exports.Radios = Radios;
exports.Tabs = Tabs;

})));

var TableChart = Vue.extend({
    //props: ['type','series'],
    data: function () {

        return {
            'tableData': [[]],
            'charts': [],
            'c3Charts': [],
            'above': false,
            'separate': false,
            'order': null,
            'stacked': false,
            'smoothed': true,
            'palette': null,
            'rotated': false,
            'reversed': false,
            'height': null
        }
    },

    methods: {

        getTableData: function () {

            var table = this.$el.querySelector('TABLE')
            var id = table.getAttribute('id')

            this.caption = table.querySelector('CAPTION').textContent

            var data = []

            if (table.rows[0]) {
                for (y=0;y<table.rows.length;y++) {
                    data.push([])
                    for (x=0;x<table.rows[y].cells.length;x++) {
                        data[y][x] = table.rows[y].cells[x].textContent.trim();
                        if ((x * y) > 0) {
                            data[y][x] = parseFloat(data[y][x]);
                        }
                    }
                }
            }

            console.log("tableData", data);

            // Reverse the rows and put the first row back at the front.
            if (this.reversed) {
                console.log("reversing");
                data.reverse();
                data.unshift(data.pop());

            }
            console.log("tableData", data);

            this.tableData = data
        },

        loadAttributes: function() {

            var i, attributes, attr;

            attributes = this.$el.attributes;

            for(i in attributes) {
                attr = attributes[i];
                this[attr.name] = this.parseAttributeValue(attr.value);
                console.log(attr.name, this.parseAttributeValue(attr.value));
            }
        },

        parseAttributeValue: function(value) {

            var parsed;

            switch(true) {

                case value == "true": {
                    parsed = true;
                } break;

                case value == "false": {
                    parsed = false;
                } break;

                case value == "":
                case value == "null": {
                    parsed = null;
                } break;

                default: {
                    parsed = value;
                } break;

            }
            return parsed;
        },

        buildChartData: function() {

            // clone the table data
            var i, chartData, types, options, selector, chart, seriesData, seriesTypes, title;

            chartData = this.tableData.slice(0);

            switch(this.series) {
            case 'columns':
            case 'cols': {
                chartData = this.transpose(chartData);
            } break;
            }

            options = this.getChartOptions();

            if (this.separate) {
                console.log('separate:true');
                for(i=1;i<chartData.length;i++) {
                    seriesData = [
                        chartData[0],
                        chartData[i]
                    ];

                    if (options.isPie | options.isDonut) {
                        seriesData = this.transpose(seriesData);
                    }

                    title = chartData[i][0];

                    options.index = (i-1);

                    chart = this.buildChartObject(options, seriesData);
                    chart.title = title;

                    this.charts.push(chart)

                }
            } else {
                console.log('separate:false');

                options.index = 0;

                chart = this.buildChartObject(options, chartData);

                this.charts.push(chart)
            }

        },

        getChartType: function() {

            var prepend = "", append = "";

            if (this.smoothed) {
                switch(this.type) {
                    case "line": {
                        prepend = "sp";
                    } break;
                    case "area": {
                        append = "-spline";
                    } break;
                }
            }

            return prepend + this.type + append;
        },

        getRowHeadings: function(data) {

            var i, headings = [];
            for (i=1;i<data.length;i++) {
                headings.push(data[i][0]);
            }
            return headings;
        },

        getColHeadings: function(data) {

            var i, headings = [];
            for (i=1;i<data[0].length;i++) {
                headings.push(data[0][i])
            }
            return headings;

        },

        getTypeList: function(headings) {

            var i,types = {};
            for (i in headings) {
                types[headings[i]] = this.getChartType();
            }

            console.log(types);

            return types;
        },

        getChartOptions: function() {

            var options = {
                type: this.type,
                isBar: false,
                isPie: false,
                isDonut: false,
                axisData: this.getAxisData()
            };

            switch (this.type) {
                case 'donut': {
                    options.isDonut = true;
                    options.dataLabels = {
                        format: function (value, ratio, id) {
                            return d3.format(".0%")(ratio);
                        }
                    }
                } break;
                case 'pie': {
                    options.isPie = true;
                    options.dataLabels =  {
                        format: function (value, ratio, id) {
                            return d3.format(".0%")(ratio);
                        }
                    }
                } break;
                case 'bar': {
                    options.isBar = true;
                    options.dataLabels = {
                        format: function (v, id, i, j) {
                            return id + " (" + v + ")";
                        }
                    };
                } break;
                default: {
                    options.dataLabels = {
                        format: function (v, id, i, j) {
                            return v;
                        }
                    };
                } break;
            }

            return options;

        },

        buildChartObject: function(options, chartData) {

            var i, groups, types, selector, chart, headers;

            selector = "#" + "chart-container-" + this.id + '-chart-' + options.index;

            options.axisData.categories = this.getColHeadings(chartData);

            types = this.getTypeList(this.getRowHeadings(chartData));

            chart = {
                bindto: selector,
                data: {
                    x: chartData[0][0],
                    columns: chartData,
                    order: this.order,
                    type: this.getChartType(),
                    types: types
                },
                axis: options.axisData
            }

            if (this.height) {
                chart.size = {
                    height: this.height
                };
            }

            if (this.palette) {
                let palette = null;
                let type = typeof this.palette;
                console.log("Palette data type", type);
                console.log("Palette", this.palette);
                switch (true) {
                    case ((type == 'string')
                            && /^\[.*\]$/.test(this.palette)): {
                        console.log('Custom palette');
                        try {
                            palette = JSON.parse(this.palette);
                        } catch (err) {
                            console.log("Parse error", err);
                        }
                    } break;
                    case ((type == 'string')
                            && /^[a-zA-Z0-9_]+$/.test(this.palette)): {
                        console.log('Named palette');
                        palette = this.getPalettePattern(this.palette);
                    } break;
                    case (type == 'array'): {
                        console.log('Custom palette');
                        palette = this.palette;
                    } break;
                    default: {
                        console.log('Default palette');
                    }
                }
                if (palette) {
                    chart.color = {
                        pattern: palette
                    };
                }
            }

            switch (this.type) {
                case "pie":
                case "donut": {
                    chart[this.type] = {
                        label: options.dataLabels
                    };
                } break;
                case "bar":
                case "line":
                case "area": {
                    if (this.stacked) {
                        groups = this.getRowHeadings(chartData);
                        chart.data.groups = [groups];
                    }
                }
                default: {
                    chart.data.labels = options.dataLabels;
                    chart.padding = {
                        right: 20
                    };
                }
            }

            return chart;

        },

        getAxisData: function() {

            var xLabel = this['x-axis']
            var yLabel = this['y-axis']

            var axisData = {
                x: {
                    type: 'category',
                    label: {
                        text: xLabel,
                        position: 'outer-center'
                    }
                },
                y: {
                    label: {
                        text: yLabel,
                        position: 'outer-middle'
                    }
                }
            };
            axisData.rotated = this.rotated;

            return axisData;
        },

        drawCharts: function() {

            var i, chart;
            this.c3Charts = [];

            for (i in this.charts) {
                (function (vue, i) {
                    chart = vue.charts[i];
                    console.log(chart);
                    vue.c3Charts.push(c3.generate(chart));
                })(this, i);
            }

            window.addEventListener("hashchange", this.hashchange, false);
        },

        hashchange: function() {
            console.log("Rerendering charts following hash change");
            this.rerender();
        },

        rerender: function() {
            var i, chart;
            for (i in this.c3Charts) {
                chart = this.c3Charts[i];
                chart.flush();
            }
        },

        transpose: function(sourceData) {

            var targetData = [];
            var sourceRows, sourceCols

            sourceCols = sourceData[0].length;
            sourceRows = sourceData.length

            for(var y = 0; y < sourceRows; y++){
                for(var x = 0; x < sourceCols; x++){

                    cell = sourceData[y][x]

                    if (!targetData[x]) targetData[x] = [];

                    targetData[x][y] = cell;

                }
            }

            return targetData;

        },

        getPalettePattern(palette) {

            var palettes = {
                govuk: [
                    "#005ea5", // blue
                    "#ffbf47", // yellow
                    "#2e358b", // purple
                    "#006435", // green
                    "#f47738", // orange
                    "#2b8cc4", // light-blue
                    "#28a197", // turquoise
                    "#f499be", // light-pink
                    "#b10e1e", // red
                    "#6f72af", // light-purple
                    "#d53880", // pink
                    "#df3034", // bright-red
                    "#912b88", // bright-purple
                    "#b58840", // brown
                    "#85994b"  // light-green
                ],
                monochrome_blue:   ["#0F084B","#26408B","#3D60A7","#81B1D5","#A0D2E7"],
                monochrome_purple: ["#4B0F08","#8B2640","#A73D60","#D581B1","#E7A0D2"],
                monochrome_green:  ["#084B0F","#408B26","#60A73D","#B1D581","#D2E7A0"]
            };

            return palettes[palette];
        }
    },
    template: '<div class="chart-wrapped">'+
            '<div v-if="!above" class="chart-wrap-table" v-html="this.$el.innerHTML"></div>'+
            '<a v-bind:href="\'#skip-\' + this.id" class="govuk-skip-link">Skip chart</a>'+
            '<div v-if="type != \'none\'" class="govuk-grid-row">'+
            '<div v-bind:id="\'chart-container-\' + this.id">'+
                '<div v-for="(chart, index) in charts" '+
                     'v-bind:class="{\'govuk-grid-column-one-half\':(charts.length>1), '+
                                    '\'govuk-grid-column-full\':(charts.length == 1)}" >'+
                    '<caption class="govuk-caption-m" v-if="chart.title">{{ chart.title }}</caption>'+
                    '<div v-bind:id="\'chart-container-\'+ this.id + \'-chart-\' + index" '+
                        'style="background-color: #fafafa; outline: 1px solid #ddd;padding: 1em 0;margin-bottom:2em;">'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '</div>'+
            '<div v-if="above" class="chart-wrap-table" v-html="this.$el.innerHTML"></div>'+
            '<a v-bind:name="\'skip-\' + this.id"></a>'+
        '</div>',

    beforeCreate: function() {
        console.log("BEFORE CREATE");
    },
    created: function() {
        console.log("CREATED");
    },
    beforeMount: function() {
        console.log("BEFORE MOUNT");

        this.loadAttributes();

        this.getTableData();

        this.buildChartData();

    },
    mounted: function() {
        console.log('MOUNTED');

        if (this.type != 'none') {

            //TODO - fix this.
            //this.drawCharts();
            window.setTimeout(this.drawCharts,500);
        }
    }
});

module.exports = TableChart;
