/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-core='ionicons.0nygxack.js'][data-path]");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t,e,o,i,c,u,r){return u=e.split(":"),t&&u.length>1&&(t=n.t.n(t,u[0]),e=u[1]),t?(r=o,(u=e.split(".")).length>1&&(e=u[0],r=(n=>{n.keyCode===nn[u[1]]&&o(n)})),n.t.e(t,e,r,i,c)):X}function u(n){n.o&&(Object.keys(n.o).forEach(t=>n.o[t]()),n.o=null)}function r(n,t,e){const o={i:t.documentElement,c:t.head,u:t.body,r:n=>n.nodeType,l:n=>t.createElement(n),f:(n,e)=>t.createElementNS(n,e),s:n=>t.createTextNode(n),a:n=>t.createComment(n),d:(n,t,e)=>n.insertBefore(t,e),m:(n,t)=>n.removeChild(t),p:(n,t)=>n.appendChild(t),v:n=>n.childNodes,b:n=>n.parentNode,h:n=>n.nextSibling,y:n=>V(n.tagName),g:n=>n.textContent,w:(n,t)=>n.textContent=t,C:(n,t)=>n.getAttribute(t),N:(n,t,e)=>n.setAttribute(t,e),j:(n,t,e,o)=>n.setAttributeNS(t,e,o),O:(n,t)=>n.removeAttribute(t),e:(n,t,e,i,c,u)=>(u=o.T?{capture:!!i,passive:!!c}:!!i,n.addEventListener(t,e,u),()=>n&&n.removeEventListener(t,e,u)),n:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.x(e):"body"===i?o.u:"document"===i?t:"window"===i?n:e};return o.x=((n,t)=>(t=o.b(n))&&11===o.r(t)?t.host:t),o}function l(n,t,e,o,i){const c=11===e.k.nodeType&&e.k.host?e.k.host:e.k,u=t&&t.A||Y,r=e.A||Y;for(i in u)r&&null!=r[i]||null==u[i]||f(n,c,i,u[i],void 0,o);for(i in r)i in u&&r[i]===("value"===i||"checked"===i?c[i]:u[i])||f(n,c,i,u[i],r[i],o)}function f(n,t,e,o,i,u,r,l){if("class"!==e||u)if("style"===e){o=o||Y,i=i||Y;for(r in o)i[r]||(t.style[r]="");for(r in i)i[r]!==o[r]&&(t.style[r]=i[r])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!u&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.M(t);o&&o.P&&e in o.P?s(t,e,i):(s(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(r=e!==(e=e.replace(/^xlink\:?/,"")),1!==tn[e]||i&&"false"!==i?"function"!=typeof i&&(r?t.setAttributeNS(en,V(e),i):t.setAttribute(e,i)):r?t.removeAttributeNS(en,V(e)):t.removeAttribute(e));else{e=V(e).substring(2);const u=t.o=t.o||{};i?o||(u[e]=c(n,t,e,i)):u[e]&&u[e]()}else if(o!==i){const n=null==o||""===o?_:o.trim().split(/\s+/),e=null==i||""===i?_:i.trim().split(/\s+/);let c=null==t.className||""===t.className?_:t.className.trim().split(/\s+/);for(r=0,l=n.length;r<l;r++)-1===e.indexOf(n[r])&&(c=c.filter(t=>t!==n[r]));for(r=0,l=e.length;r<l;r++)-1===n.indexOf(e[r])&&(c=[...c,e[r]]);t.className=c.join(" ")}}function s(n,t,e){try{n[t]=e}catch(n){}}function a(n,t){function e(o,i,c){let u=0;if("function"==typeof o.S&&(o=o.S(Object.assign({},o.A,{B:o.R}))),Q(o.q))o.k=t.s(o.q);else{const i=o.k=on||"svg"===o.S?t.f("http://www.w3.org/2000/svg",o.S):t.l(o.S);on="svg"===o.S||"foreignObject"!==o.S&&on,l(n,null,o,on),null!==d&&i.D!==d&&t.N(i,i.D=d,"");const c=o.R;if(c){let n;for(;u<c.length;++u)(n=e(c[u],i,u))&&t.p(i,n)}}return o.k}function o(n,o,i,c,u){const r=n.$defaultHolder&&t.b(n.$defaultHolder)||n;let l;for(;c<=u;++c){var f=i[c];Q(f)&&(l=Q(f.q)?t.s(f.q):e(f,n,c),Q(l)&&(f.k=l,t.d(r,l,o)))}}function i(n,e,o,i){for(;o<=i;++o)Q(e[o])&&t.m(n,e[o].k)}function c(n,c,l){let s,a,d,m,p=0,v=0,b=c.length-1,h=c[0],$=c[b],y=l.length-1,g=l[0],w=l[y];for(;p<=b&&v<=y;)null==h?h=c[++p]:null==$?$=c[--b]:null==g?g=l[++v]:null==w?w=l[--y]:u(h,g)?(f(h,g),h=c[++p],g=l[++v]):u($,w)?(f($,w),$=c[--b],w=l[--y]):u(h,w)?(f(h,w),t.d(n,h.k,t.h($.k)),h=c[++p],w=l[--y]):u($,g)?(f($,g),t.d(n,$.k,h.k),$=c[--b],g=l[++v]):(U(s)&&(s=r(c,p,b)),a=s[g.H],U(a)?(m=e(g,n,v),g=l[++v]):((d=c[a]).S!==g.S?m=e(g,n,a):(f(d,g),c[a]=void 0,m=d.k),g=l[++v]),m&&t.d(n,m,h.k));p>b?o(n,null==l[y+1]?null:l[y+1].k,l,v,y):v>y&&i(n,c,p,b)}function u(n,t){return n.S===t.S&&n.H===t.H}function r(n,t,e){let o,i,c,u={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.H)&&(u.I=o);return u}function f(e,u){const r=u.k=e.k,f=e.R,s=u.R;if(on=u.k&&null!=u.k.parentElement&&void 0!==u.k.L,on="svg"===u.S||"foreignObject"!==u.S&&on,U(u.q))"slot"!==u.S&&l(n,e,u,on),Q(f)&&Q(s)?c(r,f,s):Q(s)?(Q(e.q)&&t.w(r,""),o(r,null,s,0,s.length-1)):Q(f)&&i(r,f,0,f.length-1);else if(r.z&&r.z.F){let n=r.z.F[0].parentElement;t.w(n,u.q),r.z.F=[n.childNodes[0]]}else e.q!==u.q&&t.w(r,u.q)}let s,a,d;return function n(e,o,i,c,u,r){return s=i,a=c,d=2===u||1===u&&!t.Z?"data-"+t.y(e.k):null,s||d&&t.N(e.k,d+"-host",""),f(e,o),o}}function d(n,t){n&&(n.G&&n.G(t?null:n.k),n.R&&n.R.forEach(n=>{d(n,t)}))}function m(n,t,e){for(var o,i=!1,c=!1,u=arguments.length;u-- >2;)un.push(arguments[u]);for(;un.length;)if((e=un.pop())&&void 0!==e.pop)for(u=e.length;u--;)un.push(e[u]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].q+=e:void 0===o?o=[c?p(e):e]:o.push(c?p(e):e),i=c;const r=new cn;if(r.S=n,r.R=o,t&&(r.A=t,r.H=t.J,r.G=t.K,t.className&&(t.class=t.className),"object"==typeof t.class)){for(u in t.class)t.class[u]&&un.push(u);t.class=un.join(" "),un.length=0}return r}function p(n){const t=new cn;return t.q=n,t}function v(n,t,e,o){function i(){for(;l.length>0;)l.shift()();e=!1}function c(e){for(e=t(),i();f.length>0&&t()-e<40;)f.shift()();(o=f.length>0)&&n(u)}function u(e){for(i(),e=4+t();f.length>0&&t()<e;)f.shift()();(o=f.length>0)&&n(c)}const r=Promise.resolve(),l=[],f=[];return{add:(t,u)=>{3===u?(l.push(t),e||(e=!0,r.then(i))):(f.push(t),o||(o=!0,n(c)))}}}function b(n,t,e){const o={Q:n[0],P:{mode:{U:1},color:{U:1,V:"color"}}};return o.W=n[1],$(o,n[3],e),o.X=n[4],o.Y=n[5],n[6]&&(o._=n[6].map(h)),o.nn=n[7],t[o.Q]=o}function h(n){return{tn:n[0],en:n[1],on:!!n[2],in:!!n[3],cn:!!n[4]}}function $(n,t,e){if(t){n.P=n.P||{};for(var o=0;o<t.length;o++){var i=t[o];n.P[i[0]]={U:i[1],V:i[2]?1===e?V(i[0]):W(i[0]):0,un:i[3],rn:i[4]}}}}function y(n,t,e,o){const i=n[e[0]];i.ln=t[e[0]],$(i,e[1],o),i.fn=e[2],e[3]&&(i.sn=e[3].map(g)),i.an=e[4],i.dn=e[5]}function g(n){return{tn:n[0],en:n[1]||n[0],mn:!n[2],pn:!n[3],vn:!n[4]}}function w(n,t){if(Q(t)){if(3===n)return"false"!==t&&(""===t||!!t);if(4===n)return parseFloat(t)}return t}function C(n,t,e,o,i,c){if(o!==i&&n){e=V(e);for(c in n)if(n[c].V===e){t[c]=w(n[c].un,i);break}}}function N(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].U;1===i||2===i?E(e,o,function n(){return(this.bn=this.bn||{})[o]},function t(e){T(n,this,o,e)}):6===i&&x(e,o,X)})}function j(n,t,e,o){o.hn=e,e.bn=e.bn||{},t.P&&Object.keys(t.P).forEach(i=>{O(n,t,e,o,i)})}function O(n,t,e,o,i){const c=t.P[i],u=c.U;if(1===u||5===u||2===u){if(5!==u){if(c.V&&(void 0===e.bn[i]||""===e.bn[i])){const n=e.getAttribute(c.V);null!=n&&(e.bn[i]=w(c.un,n))}e.hasOwnProperty(i)&&(void 0===e.bn[i]&&(e.bn[i]=e[i]),n.isClient&&delete e[i])}o.hasOwnProperty(i)&&void 0===e.bn[i]&&(e.bn[i]=o[i]),E(o,i,function r(){const n=this.hn;return n&&n.bn&&n.bn[i]},function l(t){const e=this.hn;1!==u&&T(n,e,i,t)})}else if(3===u){var f=n.$n(c.rn);f&&x(o,i,f.yn&&f.yn(e)||f)}}function T(n,t,e,o){const i=t.bn=t.bn||{};o!==i[e]&&(i[e]=o,t.gn&&!n.wn&&D(n,t))}function x(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function E(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function k(n,t,e){return{create:M(n,t,e,"create"),componentOnReady:M(n,t,e,"componentOnReady")}}function A(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.u.querySelector(e)),i||(i=t[e]=n.l(e),n.p(n.u,i)),i.componentOnReady(o)})}function M(n,t,e,o){return function(){const i=arguments;return A(n,t,e).then(n=>n[o].apply(n,i))}}function P(n,t,e){try{e=n.M(t),t.gn=new e.ln,j(n,e,t,t.gn)}catch(e){t.gn={},n.Cn(e,7,t,!0)}}function S(n,t,e){if(t.gn&&!t.Nn&&(!t.$activeLoading||!t.$activeLoading.length)){t.$activeLoading=null,t.jn=!0;try{t.On&&(t.On.forEach(n=>n(t)),t.On=null),d(t.Tn)}catch(e){n.Cn(e,4,t)}t.classList.add(e),B(t)}}function B(n,t,e){n.xn&&((e=n.xn.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.xn.$initLoad()),n.xn=null)}function R(n,t,e){return e.split(" ").reduce((e,o)=>(e[o]=!0,n&&(e[`${o}-${n}`]=!0,t&&(e[`${o}-${t}`]=!0,e[`${o}-${n}-${t}`]=!0)),e),{})}function q(n,t,e,o){const i=t.gn,c=e.fn;if(i.render||i.hostData||c){n.wn=!0;const u=i.render&&i.render();let r;r=i.hostData&&i.hostData(),n.wn=!1,c&&(r=Object.keys(c).reduce((n,t)=>{switch(t){case"theme":n.class=n.class||{},n.class=Object.assign(n.class,R(i.mode,i.color,c.theme))}return n},r||{}));const l=t.Tn||new cn;l.k=t,t.Tn=n.render(l,m(null,r,u),o,t.z,e.X)}t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}function D(n,t){t.En||(t.En=!0,n.kn.add(()=>{t.En=!1,H(n,t)}))}function H(n,t){if(!t.Nn){const e=!t.gn;if(e){const e=t.xn;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{H(n,t)});P(n,t)}I(n,t,e)}}function I(n,t,e){try{q(n,t,n.M(t),!e)}catch(e){n.Cn(e,8,t,!0)}try{e&&t.$initLoad()}catch(e){n.Cn(e,6,t,!0)}}function L(n,t,e){e.$connected||(e.$connected=!0,e.Nn=null,z(n,e),n.kn.add(()=>{n.An(t,e),n.Mn(t,e,()=>D(n,e))},3))}function z(n,t,e){for(e=t;e=n.t.x(e);)if(n.Pn(e)){e.jn||(t.xn=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}function F(n,t){!n.Sn&&Z(n.t,t)&&(t.Nn=!0,B(t),d(t.Tn,!0),u(t),t.gn&&(t.gn=t.gn.hn=null),t.$activeLoading=t.$connected=t.$defaultHolder=t.Bn=t.bn=t.Tn=t.xn=t.jn=t.En=t.Rn=null)}function Z(n,t){for(;t;){if(!n.b(t))return 9!==n.r(t);t=n.b(t)}}function G(n,t,e,o){e.connectedCallback=function(){L(n,t,this)},e.attributeChangedCallback=function(n,e,o){C(t.P,this,n,e,o)},e.disconnectedCallback=function(){F(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),J(this,n),t},e.$initLoad=function(){S(n,this,o)},N(n,t.P,e)}function J(n,t){n.Nn||(n.jn?t(n):(n.On=n.On||[]).push(t))}function K(n,t){return 2===t.X||1===t.X&&!n}const Q=n=>void 0!==n&&null!==n,U=n=>void 0===n||null===n,V=n=>n.toLowerCase(),W=n=>n.replace(/([A-Z])/g,n=>"-"+V(n[0])),X=()=>{},Y={},_=[],nn={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},tn={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},en="http://www.w3.org/1999/xlink";let on=!1;class cn{}const un=[],rn=n[o]=n[o]||{},ln=function fn(t,e,o,i,c,u){function l(n,t,e,o,i){function u(){clearTimeout(o),i.onerror=i.onload=null,g.m(g.b(i),i),h[e]=!1}e=c+t+(K(g.Z,n)?".sc":"")+".js",h[e]||(h[e]=!0,(i=g.l("script")).charset="utf-8",i.async=!0,i.src=e,o=setTimeout(u,12e4),i.onerror=i.onload=u,g.p(g.c,i))}const f={html:{}},s={},d={},p={},h={},$={},g=r(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i;const w=o.qn=o.qn||{},C={An:function N(n,e){e.mode||(e.mode=g.C(e,"mode")||t.mode),g.Z||1!==n.X||(e.shadowRoot=e)},t:g,Dn:function j(n,t){const e=n.Q;if(!w[e]){w[e]=!0,G(C,n,t.prototype,u);{const e=[];for(var i in n.P)n.P[i].V&&e.push(n.P[i].V);t.observedAttributes=e}o.customElements.define(e,t)}},Hn:t.emit,M:n=>f[g.y(n)],$n:n=>t[n],isClient:!0,Pn:n=>!(!w[g.y(n)]&&!C.M(n)),Mn:function O(n,t,e,o){o=(n.W[t.mode]||n.W)[0],p[o]?e():((d[o]=d[o]||[]).push(e),l(n,o))},Cn:(n,t,e)=>void 0,In:n=>k(g,$,n),kn:v(t=>n.requestAnimationFrame(t),()=>o.performance.now()),Ln:n=>(n||[]).map(n=>b(n,f))};C.render=a(C,g);const T=g.i;return T.$rendered=!0,T.$activeLoading=[],T.$initLoad=(()=>T.jn=!0),e.loadComponents=function n(e,o){const i=arguments;o(s,m,t,c);for(var u=2;u<i.length;u++)y(f,s,i[u]);var r=d[e];if(r){for(u=0;u<r.length;u++)r[u]();d[e]=null}p[e]=!0},C}(e,rn,n,t,i,hydratedCssClass);ln.Ln(rn.components).forEach(n=>ln.Dn(n,class extends HTMLElement{}))})(window,document,Context,appNamespace,publicPath);
})({},"ionicons","hydrated","/build/ionicons/");