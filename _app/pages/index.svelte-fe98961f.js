import{S as he,i as ve,s as be,e as k,k as O,c as E,a as g,m as N,d as c,b as v,N as P,g as S,H as b,O as de,o as Y,p as w,q as $,r as L,P as ye,Q as ge,F as X,I as Z,J as F,K as J,t as T,h as U,j as G,R as j,T as q,f as H,n as x,x as ke,y as Ee,z as Se,C as Le,l as ae,M as Pe}from"../chunks/index-a9845704.js";function Ie({items:l,pageSize:e,currentPage:s}){return l.slice((s-1)*e,(s-1)*e+e)}const M="PREVIOUS_PAGE",D="NEXT_PAGE",B="ELLIPSIS";function we({totalItems:l,pageSize:e,currentPage:s,limit:n=null,showStepOptions:t=!1}){const a=Math.ceil(l/e),r=Be({limit:n});let o=n&&a>r?Oe({totalPages:a,limit:n,currentPage:s}):Ae({totalPages:a});return t?Ne({options:o,currentPage:s,totalPages:a}):o}function Ae({totalPages:l}){return new Array(l).fill(null).map((e,s)=>({type:"number",value:s+1}))}function Oe({totalPages:l,limit:e,currentPage:s}){const n=e*2+2,t=1+n,a=l-n,r=t+2;if(s<=t-e)return Array(r).fill(null).map((u,o)=>o===r-1?{type:"number",value:l}:o===r-2?{type:"symbol",symbol:B,value:t+1}:{type:"number",value:o+1});if(s>=a+e)return Array(r).fill(null).map((u,o)=>o===0?{type:"number",value:1}:o===1?{type:"symbol",symbol:B,value:a-1}:{type:"number",value:a+o-2});if(s>=t-e&&s<=a+e)return Array(r).fill(null).map((u,o)=>o===0?{type:"number",value:1}:o===1?{type:"symbol",symbol:B,value:s-e+(o-2)}:o===r-1?{type:"number",value:l}:o===r-2?{type:"symbol",symbol:B,value:s+e+1}:{type:"number",value:s-e+(o-2)})}function Ne({options:l,currentPage:e,totalPages:s}){return[{type:"symbol",symbol:M,value:e<=1?1:e-1},...l,{type:"symbol",symbol:D,value:e>=s?s:e+1}]}function Be({limit:l}){return l*2+3+2}function oe(l,e,s){const n=l.slice();return n[12]=e[s],n}const Me=l=>({}),re=l=>({}),De=l=>({}),ie=l=>({}),Te=l=>({}),ue=l=>({}),Ue=l=>({value:l&4}),fe=l=>({value:l[12].value});function Ve(l){let e;const s=l[9].next,n=X(s,l,l[8],re),t=n||Ge();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,r){t&&t.m(a,r),e=!0},p(a,r){n&&n.p&&(!e||r&256)&&Z(n,s,a,a[8],e?J(s,a[8],r,Me):F(a[8]),re)},i(a){e||(L(t,a),e=!0)},o(a){w(t,a),e=!1},d(a){t&&t.d(a)}}}function ze(l){let e;const s=l[9].prev,n=X(s,l,l[8],ie),t=n||je();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,r){t&&t.m(a,r),e=!0},p(a,r){n&&n.p&&(!e||r&256)&&Z(n,s,a,a[8],e?J(s,a[8],r,De):F(a[8]),ie)},i(a){e||(L(t,a),e=!0)},o(a){w(t,a),e=!1},d(a){t&&t.d(a)}}}function Ce(l){let e;const s=l[9].ellipsis,n=X(s,l,l[8],ue),t=n||qe();return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,r){t&&t.m(a,r),e=!0},p(a,r){n&&n.p&&(!e||r&256)&&Z(n,s,a,a[8],e?J(s,a[8],r,Te):F(a[8]),ue)},i(a){e||(L(t,a),e=!0)},o(a){w(t,a),e=!1},d(a){t&&t.d(a)}}}function Re(l){let e;const s=l[9].number,n=X(s,l,l[8],fe),t=n||He(l);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,r){t&&t.m(a,r),e=!0},p(a,r){n?n.p&&(!e||r&260)&&Z(n,s,a,a[8],e?J(s,a[8],r,Ue):F(a[8]),fe):t&&t.p&&(!e||r&4)&&t.p(a,e?r:-1)},i(a){e||(L(t,a),e=!0)},o(a){w(t,a),e=!1},d(a){t&&t.d(a)}}}function Ge(l){let e,s;return{c(){e=j("svg"),s=j("path"),this.h()},l(n){e=q(n,"svg",{style:!0,viewBox:!0});var t=g(e);s=q(t,"path",{fill:!0,d:!0}),g(s).forEach(c),t.forEach(c),this.h()},h(){v(s,"fill","#000000"),v(s,"d","M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"),H(e,"width","24px"),H(e,"height","24px"),v(e,"viewBox","0 0 24 24")},m(n,t){S(n,e,t),b(e,s)},p:x,d(n){n&&c(e)}}}function je(l){let e,s;return{c(){e=j("svg"),s=j("path"),this.h()},l(n){e=q(n,"svg",{style:!0,viewBox:!0});var t=g(e);s=q(t,"path",{fill:!0,d:!0}),g(s).forEach(c),t.forEach(c),this.h()},h(){v(s,"fill","#000000"),v(s,"d","M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"),H(e,"width","24px"),H(e,"height","24px"),v(e,"viewBox","0 0 24 24")},m(n,t){S(n,e,t),b(e,s)},p:x,d(n){n&&c(e)}}}function qe(l){let e,s;return{c(){e=k("span"),s=T("...")},l(n){e=E(n,"SPAN",{});var t=g(e);s=U(t,"..."),t.forEach(c)},m(n,t){S(n,e,t),b(e,s)},p:x,d(n){n&&c(e)}}}function He(l){let e,s=l[12].value+"",n;return{c(){e=k("span"),n=T(s)},l(t){e=E(t,"SPAN",{});var a=g(e);n=U(a,s),a.forEach(c)},m(t,a){S(t,e,a),b(e,n)},p(t,a){a&4&&s!==(s=t[12].value+"")&&G(n,s)},d(t){t&&c(e)}}}function ce(l){let e,s,n,t,a,r,u;const o=[Re,Ce,ze,Ve],i=[];function p(f,m){return f[12].type==="number"?0:f[12].type==="symbol"&&f[12].symbol===B?1:f[12].type==="symbol"&&f[12].symbol===M?2:f[12].type==="symbol"&&f[12].symbol===D?3:-1}~(s=p(l))&&(n=i[s]=o[s](l));function _(){return l[10](l[12])}return{c(){e=k("span"),n&&n.c(),t=O(),this.h()},l(f){e=E(f,"SPAN",{class:!0});var m=g(e);n&&n.l(m),t=N(m),m.forEach(c),this.h()},h(){v(e,"class","option"),P(e,"number",l[12].type==="number"),P(e,"prev",l[12].type==="symbol"&&l[12].symbol===M),P(e,"next",l[12].type==="symbol"&&l[12].symbol===D),P(e,"disabled",l[12].type==="symbol"&&l[12].symbol===D&&l[0]>=l[1]||l[12].type==="symbol"&&l[12].symbol===M&&l[0]<=1),P(e,"ellipsis",l[12].type==="symbol"&&l[12].symbol===B),P(e,"active",l[12].type==="number"&&l[12].value===l[0])},m(f,m){S(f,e,m),~s&&i[s].m(e,null),b(e,t),a=!0,r||(u=de(e,"click",_),r=!0)},p(f,m){l=f;let I=s;s=p(l),s===I?~s&&i[s].p(l,m):(n&&(Y(),w(i[I],1,1,()=>{i[I]=null}),$()),~s?(n=i[s],n?n.p(l,m):(n=i[s]=o[s](l),n.c()),L(n,1),n.m(e,t)):n=null),m&4&&P(e,"number",l[12].type==="number"),m&4&&P(e,"prev",l[12].type==="symbol"&&l[12].symbol===M),m&4&&P(e,"next",l[12].type==="symbol"&&l[12].symbol===D),m&7&&P(e,"disabled",l[12].type==="symbol"&&l[12].symbol===D&&l[0]>=l[1]||l[12].type==="symbol"&&l[12].symbol===M&&l[0]<=1),m&4&&P(e,"ellipsis",l[12].type==="symbol"&&l[12].symbol===B),m&5&&P(e,"active",l[12].type==="number"&&l[12].value===l[0])},i(f){a||(L(n),a=!0)},o(f){w(n),a=!1},d(f){f&&c(e),~s&&i[s].d(),r=!1,u()}}}function Ke(l){let e,s,n=l[2],t=[];for(let r=0;r<n.length;r+=1)t[r]=ce(oe(l,n,r));const a=r=>w(t[r],1,1,()=>{t[r]=null});return{c(){e=k("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=E(r,"DIV",{class:!0});var u=g(e);for(let o=0;o<t.length;o+=1)t[o].l(u);u.forEach(c),this.h()},h(){v(e,"class","pagination-nav")},m(r,u){S(r,e,u);for(let o=0;o<t.length;o+=1)t[o].m(e,null);s=!0},p(r,[u]){if(u&271){n=r[2];let o;for(o=0;o<n.length;o+=1){const i=oe(r,n,o);t[o]?(t[o].p(i,u),L(t[o],1)):(t[o]=ce(i),t[o].c(),L(t[o],1),t[o].m(e,null))}for(Y(),o=n.length;o<t.length;o+=1)a(o);$()}},i(r){if(!s){for(let u=0;u<n.length;u+=1)L(t[u]);s=!0}},o(r){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)w(t[u]);s=!1},d(r){r&&c(e),ye(t,r)}}}function Xe(l,e,s){let n,t,{$$slots:a={},$$scope:r}=e;const u=ge();let{totalItems:o=0}=e,{pageSize:i=1}=e,{currentPage:p=1}=e,{limit:_=null}=e,{showStepOptions:f=!1}=e;function m(h){u("setPage",{page:h.value})}const I=h=>m(h);return l.$$set=h=>{"totalItems"in h&&s(4,o=h.totalItems),"pageSize"in h&&s(5,i=h.pageSize),"currentPage"in h&&s(0,p=h.currentPage),"limit"in h&&s(6,_=h.limit),"showStepOptions"in h&&s(7,f=h.showStepOptions),"$$scope"in h&&s(8,r=h.$$scope)},l.$$.update=()=>{l.$$.dirty&241&&s(2,n=we({totalItems:o,pageSize:i,currentPage:p,limit:_,showStepOptions:f})),l.$$.dirty&48&&s(1,t=Math.ceil(o/i))},[p,t,n,m,o,i,_,f,r,a,I]}class Ze extends he{constructor(e){super(),ve(this,e,Xe,Ke,be,{totalItems:4,pageSize:5,currentPage:0,limit:6,showStepOptions:7})}}function _e(l,e,s){const n=l.slice();return n[5]=e[s].metadata.title,n[6]=e[s].metadata.description,n[7]=e[s].metadata.date,n[8]=e[s].path,n}function me(l){let e,s,n,t=l[5]+"",a,r,u,o,i=l[7]+"",p,_,f,m,I=l[6]+"",h,Q,A,W,z,C,V;return{c(){e=k("div"),s=k("h1"),n=k("a"),a=T(t),u=O(),o=k("small"),p=T(i),_=O(),f=k("div"),m=k("p"),h=T(I),Q=O(),A=k("a"),W=T("continue reading"),C=O(),V=k("hr"),this.h()},l(y){e=E(y,"DIV",{class:!0});var d=g(e);s=E(d,"H1",{});var ee=g(s);n=E(ee,"A",{"sveltekit:prefetch":!0,href:!0});var te=g(n);a=U(te,t),te.forEach(c),ee.forEach(c),u=N(d),o=E(d,"SMALL",{class:!0});var le=g(o);p=U(le,i),le.forEach(c),_=N(d),f=E(d,"DIV",{class:!0});var se=g(f);m=E(se,"P",{});var R=g(m);h=U(R,I),Q=N(R),A=E(R,"A",{"sveltekit:prefetch":!0,href:!0});var ne=g(A);W=U(ne,"continue reading"),ne.forEach(c),R.forEach(c),se.forEach(c),d.forEach(c),C=N(y),V=E(y,"HR",{class:!0}),this.h()},h(){v(n,"sveltekit:prefetch",""),v(n,"href",r=l[8].replace(/\.[^/.]+$/,"")),v(o,"class","text-gray-400 mb-0"),v(A,"sveltekit:prefetch",""),v(A,"href",z=l[8].replace(/\.[^/.]+$/,"")),v(f,"class","mt-0"),v(e,"class","mb-4"),v(V,"class","border-solid text-gray-400 my-5")},m(y,d){S(y,e,d),b(e,s),b(s,n),b(n,a),b(e,u),b(e,o),b(o,p),b(e,_),b(e,f),b(f,m),b(m,h),b(m,Q),b(m,A),b(A,W),S(y,C,d),S(y,V,d)},p(y,d){d&4&&t!==(t=y[5]+"")&&G(a,t),d&4&&r!==(r=y[8].replace(/\.[^/.]+$/,""))&&v(n,"href",r),d&4&&i!==(i=y[7]+"")&&G(p,i),d&4&&I!==(I=y[6]+"")&&G(h,I),d&4&&z!==(z=y[8].replace(/\.[^/.]+$/,""))&&v(A,"href",z)},d(y){y&&c(e),y&&c(C),y&&c(V)}}}function pe(l){let e,s,n;return s=new Ze({props:{totalItems:l[3].length,pageSize:K,currentPage:l[1],limit:1,showStepOptions:!0}}),s.$on("setPage",l[4]),{c(){e=k("div"),ke(s.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var a=g(e);Ee(s.$$.fragment,a),a.forEach(c),this.h()},h(){v(e,"class","mx-auto")},m(t,a){S(t,e,a),Se(s,e,null),n=!0},p(t,a){const r={};a&2&&(r.currentPage=t[1]),s.$set(r)},i(t){n||(L(s.$$.fragment,t),n=!0)},o(t){w(s.$$.fragment,t),n=!1},d(t){t&&c(e),Le(s)}}}function Fe(l){let e,s,n,t,a,r=l[2],u=[];for(let i=0;i<r.length;i+=1)u[i]=me(_e(l,r,i));let o=l[0].length>K&&pe(l);return{c(){e=k("meta"),s=O();for(let i=0;i<u.length;i+=1)u[i].c();n=O(),o&&o.c(),t=ae(),this.h()},l(i){const p=Pe('[data-svelte="svelte-1u25tui"]',document.head);e=E(p,"META",{name:!0,content:!0}),p.forEach(c),s=N(i);for(let _=0;_<u.length;_+=1)u[_].l(i);n=N(i),o&&o.l(i),t=ae(),this.h()},h(){document.title="Kale Collective - Blog",v(e,"name","description"),v(e,"content","Updates from Kale Collective")},m(i,p){b(document.head,e),S(i,s,p);for(let _=0;_<u.length;_+=1)u[_].m(i,p);S(i,n,p),o&&o.m(i,p),S(i,t,p),a=!0},p(i,[p]){if(p&4){r=i[2];let _;for(_=0;_<r.length;_+=1){const f=_e(i,r,_);u[_]?u[_].p(f,p):(u[_]=me(f),u[_].c(),u[_].m(n.parentNode,n))}for(;_<u.length;_+=1)u[_].d(1);u.length=r.length}i[0].length>K?o?(o.p(i,p),p&1&&L(o,1)):(o=pe(i),o.c(),L(o,1),o.m(t.parentNode,t)):o&&(Y(),w(o,1,1,()=>{o=null}),$())},i(i){a||(L(o),a=!0)},o(i){w(o),a=!1},d(i){c(e),i&&c(s),ye(u,i),i&&c(n),o&&o.d(i),i&&c(t)}}}async function We({fetch:l}){return{props:{posts:await(await l("/posts.json")).json()}}}let K=10;function Je(l,e,s){let n,{posts:t}=e,a=t,r=1;const u=o=>s(1,r=o.detail.page);return l.$$set=o=>{"posts"in o&&s(0,t=o.posts)},l.$$.update=()=>{l.$$.dirty&2&&s(2,n=Ie({items:a,pageSize:K,currentPage:r}))},[t,r,n,a,u]}class Ye extends he{constructor(e){super(),ve(this,e,Je,Fe,be,{posts:0})}}export{Ye as default,We as load};