function P(){}function ge(e,t){for(const n in t)e[n]=t[n];return e}function ee(e){return e()}function te(){return Object.create(null)}function I(e){e.forEach(ee)}function ve(e){return typeof e=="function"}function ne(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let z;function ot(e,t){return z||(z=document.createElement("a")),z.href=t,e===z.href}function ke(e){return Object.keys(e).length===0}function D(e,t,n,i){if(e){const l=le(e,t,n,i);return e[0](l)}}function le(e,t,n,i){return e[1]&&i?ge(n.ctx.slice(),e[1](i(t))):n.ctx}function G(e,t,n,i){if(e[2]&&i){const l=e[2](i(n));if(t.dirty===void 0)return l;if(typeof l=="object"){const o=[],r=Math.max(t.dirty.length,l.length);for(let u=0;u<r;u+=1)o[u]=t.dirty[u]|l[u];return o}return t.dirty|l}return t.dirty}function U(e,t,n,i,l,o){if(l){const r=le(t,n,i,o);e.p(r,l)}}function V(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function rt(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}let F=!1;function Ee(){F=!0}function we(){F=!1}function Se(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function Le(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let c=0;c<t.length;c++){const _=t[c];_.claim_order!==void 0&&s.push(_)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let s=0;s<t.length;s++){const c=t[s].claim_order,_=(l>0&&t[n[l]].claim_order<=c?l+1:Se(1,l,f=>t[n[f]].claim_order,c))-1;i[s]=n[_]+1;const m=_+1;n[m]=s,l=Math.max(m,l)}const o=[],r=[];let u=t.length-1;for(let s=n[l]+1;s!=0;s=i[s-1]){for(o.push(t[s-1]);u>=s;u--)r.push(t[u]);u--}for(;u>=0;u--)r.push(t[u]);o.reverse(),r.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<r.length;s++){for(;c<o.length&&r[s].claim_order>=o[c].claim_order;)c++;const _=c<o.length?o[c]:null;e.insertBefore(r[s],_)}}function S(e,t){if(F){for(Le(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function L(e,t,n){F&&!n?S(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function Ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function B(e){return document.createElement(e)}function j(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function C(e){return document.createTextNode(e)}function Ne(){return C(" ")}function st(){return C("")}function Oe(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e){return Array.from(e.childNodes)}function Pe(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function ie(e,t,n,i,l=!1){Pe(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const u=e[r];if(t(u)){const s=n(u);return s===void 0?e.splice(r,1):e[r]=s,l||(e.claim_info.last_index=r),u}}for(let r=e.claim_info.last_index-1;r>=0;r--){const u=e[r];if(t(u)){const s=n(u);return s===void 0?e.splice(r,1):e[r]=s,l?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=r,u}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function oe(e,t,n,i){return ie(e,l=>l.nodeName===t,l=>{const o=[];for(let r=0;r<l.attributes.length;r++){const u=l.attributes[r];n[u.name]||o.push(u.name)}o.forEach(r=>l.removeAttribute(r))},()=>i(t))}function H(e,t,n){return oe(e,t,n,B)}function R(e,t,n){return oe(e,t,n,j)}function W(e,t){return ie(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(t),!0)}function Ie(e){return W(e," ")}function Be(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function X(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function p(e,t,n){e.classList[n?"add":"remove"](t)}function je(e,t,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,!1,t),i}function ut(e,t=document.body){return Array.from(t.querySelectorAll(e))}let M;function q(e){M=e}function Z(){if(!M)throw new Error("Function called outside component initialization");return M}function ct(e){Z().$$.on_mount.push(e)}function ft(e){Z().$$.after_update.push(e)}function Ce(){const e=Z();return(t,n)=>{const i=e.$$.callbacks[t];if(i){const l=je(t,n);i.slice().forEach(o=>{o.call(e,l)})}}}function at(e,t){Z().$$.context.set(e,t)}const T=[],re=[],J=[],se=[],ue=Promise.resolve();let Y=!1;function ce(){Y||(Y=!0,ue.then(fe))}function _t(){return ce(),ue}function x(e){J.push(e)}const $=new Set;let K=0;function fe(){const e=M;do{for(;K<T.length;){const t=T[K];K++,q(t),Me(t.$$)}for(q(null),T.length=0,K=0;re.length;)re.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];$.has(n)||($.add(n),n())}J.length=0}while(T.length);for(;se.length;)se.pop()();Y=!1,$.clear(),q(e)}function Me(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const Q=new Set;let E;function ae(){E={r:0,c:[],p:E}}function _e(){E.r||I(E.c),E=E.p}function y(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function k(e,t,n,i){if(e&&e.o){if(Q.has(e))return;Q.add(e),E.c.push(()=>{Q.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function mt(e,t){const n={},i={},l={$$scope:1};let o=e.length;for(;o--;){const r=e[o],u=t[o];if(u){for(const s in r)s in u||(i[s]=1);for(const s in u)l[s]||(n[s]=u[s],l[s]=1);e[o]=u}else for(const s in r)l[s]=1}for(const r in i)r in n||(n[r]=void 0);return n}function dt(e){return typeof e=="object"&&e!==null?e:{}}function ht(e){e&&e.c()}function pt(e,t){e&&e.l(t)}function qe(e,t,n,i){const{fragment:l,on_mount:o,on_destroy:r,after_update:u}=e.$$;l&&l.m(t,n),i||x(()=>{const s=o.map(ee).filter(ve);r?r.push(...s):I(s),e.$$.on_mount=[]}),u.forEach(x)}function Te(e,t){const n=e.$$;n.fragment!==null&&(I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(e,t){e.$$.dirty[0]===-1&&(T.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function De(e,t,n,i,l,o,r,u=[-1]){const s=M;q(e);const c=e.$$={fragment:null,ctx:null,props:o,update:P,not_equal:l,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:te(),dirty:u,skip_bound:!1,root:t.target||s.$$.root};r&&r(c.root);let _=!1;if(c.ctx=n?n(e,t.props||{},(m,f,...a)=>{const g=a.length?a[0]:f;return c.ctx&&l(c.ctx[m],c.ctx[m]=g)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](g),_&&ze(e,m)),f}):[],c.update(),_=!0,I(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){Ee();const m=b(t.target);c.fragment&&c.fragment.l(m),m.forEach(h)}else c.fragment&&c.fragment.c();t.intro&&y(e.$$.fragment),qe(e,t.target,t.anchor,t.customElement),we(),fe()}q(s)}class Ge{$destroy(){Te(this,1),this.$destroy=P}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!ke(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const A=[];function yt(e,t=P){let n;const i=new Set;function l(u){if(ne(e,u)&&(e=u,n)){const s=!A.length;for(const c of i)c[1](),A.push(c,e);if(s){for(let c=0;c<A.length;c+=2)A[c][0](A[c+1]);A.length=0}}}function o(u){l(u(e))}function r(u,s=P){const c=[u,s];return i.add(c),i.size===1&&(n=t(l)||P),u(e),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:l,update:o,subscribe:r}}function bt({items:e,pageSize:t,currentPage:n}){return e.slice((n-1)*t,(n-1)*t+t)}const N="PREVIOUS_PAGE",O="NEXT_PAGE",w="ELLIPSIS";function Ue({totalItems:e,pageSize:t,currentPage:n,limit:i=null,showStepOptions:l=!1}){const o=Math.ceil(e/t),r=Re({limit:i});let s=i&&o>r?Fe({totalPages:o,limit:i,currentPage:n}):Ve({totalPages:o});return l?He({options:s,currentPage:n,totalPages:o}):s}function Ve({totalPages:e}){return new Array(e).fill(null).map((t,n)=>({type:"number",value:n+1}))}function Fe({totalPages:e,limit:t,currentPage:n}){const i=t*2+2,l=1+i,o=e-i,r=l+2;if(n<=l-t)return Array(r).fill(null).map((u,s)=>s===r-1?{type:"number",value:e}:s===r-2?{type:"symbol",symbol:w,value:l+1}:{type:"number",value:s+1});if(n>=o+t)return Array(r).fill(null).map((u,s)=>s===0?{type:"number",value:1}:s===1?{type:"symbol",symbol:w,value:o-1}:{type:"number",value:o+s-2});if(n>=l-t&&n<=o+t)return Array(r).fill(null).map((u,s)=>s===0?{type:"number",value:1}:s===1?{type:"symbol",symbol:w,value:n-t+(s-2)}:s===r-1?{type:"number",value:e}:s===r-2?{type:"symbol",symbol:w,value:n+t+1}:{type:"number",value:n-t+(s-2)})}function He({options:e,currentPage:t,totalPages:n}){return[{type:"symbol",symbol:N,value:t<=1?1:t-1},...e,{type:"symbol",symbol:O,value:t>=n?n:t+1}]}function Re({limit:e}){const t=3,n=2;return e*2+t+n}function me(e,t,n){const i=e.slice();return i[12]=t[n],i}const Xe=e=>({}),de=e=>({}),Ze=e=>({}),he=e=>({}),Je=e=>({}),pe=e=>({}),Ke=e=>({value:e&4}),ye=e=>({value:e[12].value});function Qe(e){let t;const n=e[9].next,i=D(n,e,e[8],de),l=i||$e();return{c(){l&&l.c()},l(o){l&&l.l(o)},m(o,r){l&&l.m(o,r),t=!0},p(o,r){i&&i.p&&(!t||r&256)&&U(i,n,o,o[8],t?G(n,o[8],r,Xe):V(o[8]),de)},i(o){t||(y(l,o),t=!0)},o(o){k(l,o),t=!1},d(o){l&&l.d(o)}}}function We(e){let t;const n=e[9].prev,i=D(n,e,e[8],he),l=i||et();return{c(){l&&l.c()},l(o){l&&l.l(o)},m(o,r){l&&l.m(o,r),t=!0},p(o,r){i&&i.p&&(!t||r&256)&&U(i,n,o,o[8],t?G(n,o[8],r,Ze):V(o[8]),he)},i(o){t||(y(l,o),t=!0)},o(o){k(l,o),t=!1},d(o){l&&l.d(o)}}}function Ye(e){let t;const n=e[9].ellipsis,i=D(n,e,e[8],pe),l=i||tt();return{c(){l&&l.c()},l(o){l&&l.l(o)},m(o,r){l&&l.m(o,r),t=!0},p(o,r){i&&i.p&&(!t||r&256)&&U(i,n,o,o[8],t?G(n,o[8],r,Je):V(o[8]),pe)},i(o){t||(y(l,o),t=!0)},o(o){k(l,o),t=!1},d(o){l&&l.d(o)}}}function xe(e){let t;const n=e[9].number,i=D(n,e,e[8],ye),l=i||nt(e);return{c(){l&&l.c()},l(o){l&&l.l(o)},m(o,r){l&&l.m(o,r),t=!0},p(o,r){i?i.p&&(!t||r&260)&&U(i,n,o,o[8],t?G(n,o[8],r,Ke):V(o[8]),ye):l&&l.p&&(!t||r&4)&&l.p(o,t?r:-1)},i(o){t||(y(l,o),t=!0)},o(o){k(l,o),t=!1},d(o){l&&l.d(o)}}}function $e(e){let t,n;return{c(){t=j("svg"),n=j("path"),this.h()},l(i){t=R(i,"svg",{style:!0,viewBox:!0});var l=b(t);n=R(l,"path",{fill:!0,d:!0}),b(n).forEach(h),l.forEach(h),this.h()},h(){v(n,"fill","#000000"),v(n,"d","M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"),X(t,"width","24px"),X(t,"height","24px"),v(t,"viewBox","0 0 24 24")},m(i,l){L(i,t,l),S(t,n)},d(i){i&&h(t)}}}function et(e){let t,n;return{c(){t=j("svg"),n=j("path"),this.h()},l(i){t=R(i,"svg",{style:!0,viewBox:!0});var l=b(t);n=R(l,"path",{fill:!0,d:!0}),b(n).forEach(h),l.forEach(h),this.h()},h(){v(n,"fill","#000000"),v(n,"d","M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"),X(t,"width","24px"),X(t,"height","24px"),v(t,"viewBox","0 0 24 24")},m(i,l){L(i,t,l),S(t,n)},d(i){i&&h(t)}}}function tt(e){let t,n;return{c(){t=B("span"),n=C("...")},l(i){t=H(i,"SPAN",{});var l=b(t);n=W(l,"..."),l.forEach(h)},m(i,l){L(i,t,l),S(t,n)},d(i){i&&h(t)}}}function nt(e){let t,n=e[12].value+"",i;return{c(){t=B("span"),i=C(n)},l(l){t=H(l,"SPAN",{});var o=b(t);i=W(o,n),o.forEach(h)},m(l,o){L(l,t,o),S(t,i)},p(l,o){o&4&&n!==(n=l[12].value+"")&&Be(i,n)},d(l){l&&h(t)}}}function be(e){let t,n,i,l,o,r,u;const s=[xe,Ye,We,Qe],c=[];function _(f,a){return f[12].type==="number"?0:f[12].type==="symbol"&&f[12].symbol===w?1:f[12].type==="symbol"&&f[12].symbol===N?2:f[12].type==="symbol"&&f[12].symbol===O?3:-1}~(n=_(e))&&(i=c[n]=s[n](e));function m(){return e[10](e[12])}return{c(){t=B("span"),i&&i.c(),l=Ne(),this.h()},l(f){t=H(f,"SPAN",{class:!0});var a=b(t);i&&i.l(a),l=Ie(a),a.forEach(h),this.h()},h(){v(t,"class","option"),p(t,"number",e[12].type==="number"),p(t,"prev",e[12].type==="symbol"&&e[12].symbol===N),p(t,"next",e[12].type==="symbol"&&e[12].symbol===O),p(t,"disabled",e[12].type==="symbol"&&e[12].symbol===O&&e[0]>=e[1]||e[12].type==="symbol"&&e[12].symbol===N&&e[0]<=1),p(t,"ellipsis",e[12].type==="symbol"&&e[12].symbol===w),p(t,"active",e[12].type==="number"&&e[12].value===e[0])},m(f,a){L(f,t,a),~n&&c[n].m(t,null),S(t,l),o=!0,r||(u=Oe(t,"click",m),r=!0)},p(f,a){e=f;let g=n;n=_(e),n===g?~n&&c[n].p(e,a):(i&&(ae(),k(c[g],1,1,()=>{c[g]=null}),_e()),~n?(i=c[n],i?i.p(e,a):(i=c[n]=s[n](e),i.c()),y(i,1),i.m(t,l)):i=null),a&4&&p(t,"number",e[12].type==="number"),a&4&&p(t,"prev",e[12].type==="symbol"&&e[12].symbol===N),a&4&&p(t,"next",e[12].type==="symbol"&&e[12].symbol===O),a&7&&p(t,"disabled",e[12].type==="symbol"&&e[12].symbol===O&&e[0]>=e[1]||e[12].type==="symbol"&&e[12].symbol===N&&e[0]<=1),a&4&&p(t,"ellipsis",e[12].type==="symbol"&&e[12].symbol===w),a&5&&p(t,"active",e[12].type==="number"&&e[12].value===e[0])},i(f){o||(y(i),o=!0)},o(f){k(i),o=!1},d(f){f&&h(t),~n&&c[n].d(),r=!1,u()}}}function lt(e){let t,n,i=e[2],l=[];for(let r=0;r<i.length;r+=1)l[r]=be(me(e,i,r));const o=r=>k(l[r],1,1,()=>{l[r]=null});return{c(){t=B("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){t=H(r,"DIV",{class:!0});var u=b(t);for(let s=0;s<l.length;s+=1)l[s].l(u);u.forEach(h),this.h()},h(){v(t,"class","pagination-nav")},m(r,u){L(r,t,u);for(let s=0;s<l.length;s+=1)l[s].m(t,null);n=!0},p(r,[u]){if(u&271){i=r[2];let s;for(s=0;s<i.length;s+=1){const c=me(r,i,s);l[s]?(l[s].p(c,u),y(l[s],1)):(l[s]=be(c),l[s].c(),y(l[s],1),l[s].m(t,null))}for(ae(),s=i.length;s<l.length;s+=1)o(s);_e()}},i(r){if(!n){for(let u=0;u<i.length;u+=1)y(l[u]);n=!0}},o(r){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)k(l[u]);n=!1},d(r){r&&h(t),Ae(l,r)}}}function it(e,t,n){let i,l,{$$slots:o={},$$scope:r}=t;const u=Ce();let{totalItems:s=0}=t,{pageSize:c=1}=t,{currentPage:_=1}=t,{limit:m=null}=t,{showStepOptions:f=!1}=t;function a(d){u("setPage",{page:d.value})}const g=d=>a(d);return e.$$set=d=>{"totalItems"in d&&n(4,s=d.totalItems),"pageSize"in d&&n(5,c=d.pageSize),"currentPage"in d&&n(0,_=d.currentPage),"limit"in d&&n(6,m=d.limit),"showStepOptions"in d&&n(7,f=d.showStepOptions),"$$scope"in d&&n(8,r=d.$$scope)},e.$$.update=()=>{e.$$.dirty&241&&n(2,i=Ue({totalItems:s,pageSize:c,currentPage:_,limit:m,showStepOptions:f})),e.$$.dirty&48&&n(1,l=Math.ceil(s/c))},[_,l,i,a,s,c,m,f,r,o,g]}class gt extends Ge{constructor(t){super();De(this,t,it,lt,ne,{totalItems:4,pageSize:5,currentPage:0,limit:6,showStepOptions:7})}}export{dt as A,Te as B,ge as C,yt as D,_t as E,D as F,U as G,V as H,G as I,S as J,P as K,ut as L,ot as M,Ae as N,bt as O,gt as P,rt as Q,Ge as S,b as a,v as b,H as c,h as d,B as e,X as f,L as g,W as h,De as i,Be as j,Ne as k,st as l,Ie as m,ae as n,k as o,_e as p,y as q,at as r,ne as s,C as t,ft as u,ct as v,ht as w,pt as x,qe as y,mt as z};
