import{S as he,i as be,s as ve,e as k,k as O,c as E,a as g,m as N,d as c,b,G as P,g as S,H as v,R as de,o as Y,p as I,q as $,r as L,J as ye,T as ge,L as X,M as Z,N as J,O as Q,t as V,h as D,j as R,U as j,V as q,f as H,n as x,x as ke,y as Ee,z as Se,C as Le,l as oe,Q as Pe}from"../../chunks/index-7a38471d.js";function we({items:l,pageSize:e,currentPage:s}){return l.slice((s-1)*e,(s-1)*e+e)}const M="PREVIOUS_PAGE",U="NEXT_PAGE",B="ELLIPSIS";function Ie({totalItems:l,pageSize:e,currentPage:s,limit:n=null,showStepOptions:t=!1}){const o=Math.ceil(l/e),r=Be({limit:n});let a=n&&o>r?Oe({totalPages:o,limit:n,currentPage:s}):Ae({totalPages:o});return t?Ne({options:a,currentPage:s,totalPages:o}):a}function Ae({totalPages:l}){return new Array(l).fill(null).map((e,s)=>({type:"number",value:s+1}))}function Oe({totalPages:l,limit:e,currentPage:s}){const n=e*2+2,t=1+n,o=l-n,r=t+2;if(s<=t-e)return Array(r).fill(null).map((u,a)=>a===r-1?{type:"number",value:l}:a===r-2?{type:"symbol",symbol:B,value:t+1}:{type:"number",value:a+1});if(s>=o+e)return Array(r).fill(null).map((u,a)=>a===0?{type:"number",value:1}:a===1?{type:"symbol",symbol:B,value:o-1}:{type:"number",value:o+a-2});if(s>=t-e&&s<=o+e)return Array(r).fill(null).map((u,a)=>a===0?{type:"number",value:1}:a===1?{type:"symbol",symbol:B,value:s-e+(a-2)}:a===r-1?{type:"number",value:l}:a===r-2?{type:"symbol",symbol:B,value:s+e+1}:{type:"number",value:s-e+(a-2)})}function Ne({options:l,currentPage:e,totalPages:s}){return[{type:"symbol",symbol:M,value:e<=1?1:e-1},...l,{type:"symbol",symbol:U,value:e>=s?s:e+1}]}function Be({limit:l}){return l*2+3+2}function ae(l,e,s){const n=l.slice();return n[12]=e[s],n}const Me=l=>({}),re=l=>({}),Ue=l=>({}),ie=l=>({}),Ve=l=>({}),ue=l=>({}),De=l=>({value:l&4}),fe=l=>({value:l[12].value});function Te(l){let e;const s=l[9].next,n=X(s,l,l[8],re),t=n||Re();return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,r){t&&t.m(o,r),e=!0},p(o,r){n&&n.p&&(!e||r&256)&&Z(n,s,o,o[8],e?Q(s,o[8],r,Me):J(o[8]),re)},i(o){e||(L(t,o),e=!0)},o(o){I(t,o),e=!1},d(o){t&&t.d(o)}}}function ze(l){let e;const s=l[9].prev,n=X(s,l,l[8],ie),t=n||je();return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,r){t&&t.m(o,r),e=!0},p(o,r){n&&n.p&&(!e||r&256)&&Z(n,s,o,o[8],e?Q(s,o[8],r,Ue):J(o[8]),ie)},i(o){e||(L(t,o),e=!0)},o(o){I(t,o),e=!1},d(o){t&&t.d(o)}}}function Ce(l){let e;const s=l[9].ellipsis,n=X(s,l,l[8],ue),t=n||qe();return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,r){t&&t.m(o,r),e=!0},p(o,r){n&&n.p&&(!e||r&256)&&Z(n,s,o,o[8],e?Q(s,o[8],r,Ve):J(o[8]),ue)},i(o){e||(L(t,o),e=!0)},o(o){I(t,o),e=!1},d(o){t&&t.d(o)}}}function Ge(l){let e;const s=l[9].number,n=X(s,l,l[8],fe),t=n||He(l);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,r){t&&t.m(o,r),e=!0},p(o,r){n?n.p&&(!e||r&260)&&Z(n,s,o,o[8],e?Q(s,o[8],r,De):J(o[8]),fe):t&&t.p&&(!e||r&4)&&t.p(o,e?r:-1)},i(o){e||(L(t,o),e=!0)},o(o){I(t,o),e=!1},d(o){t&&t.d(o)}}}function Re(l){let e,s;return{c(){e=j("svg"),s=j("path"),this.h()},l(n){e=q(n,"svg",{style:!0,viewBox:!0});var t=g(e);s=q(t,"path",{fill:!0,d:!0}),g(s).forEach(c),t.forEach(c),this.h()},h(){b(s,"fill","#000000"),b(s,"d","M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"),H(e,"width","24px"),H(e,"height","24px"),b(e,"viewBox","0 0 24 24")},m(n,t){S(n,e,t),v(e,s)},p:x,d(n){n&&c(e)}}}function je(l){let e,s;return{c(){e=j("svg"),s=j("path"),this.h()},l(n){e=q(n,"svg",{style:!0,viewBox:!0});var t=g(e);s=q(t,"path",{fill:!0,d:!0}),g(s).forEach(c),t.forEach(c),this.h()},h(){b(s,"fill","#000000"),b(s,"d","M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"),H(e,"width","24px"),H(e,"height","24px"),b(e,"viewBox","0 0 24 24")},m(n,t){S(n,e,t),v(e,s)},p:x,d(n){n&&c(e)}}}function qe(l){let e,s;return{c(){e=k("span"),s=V("...")},l(n){e=E(n,"SPAN",{});var t=g(e);s=D(t,"..."),t.forEach(c)},m(n,t){S(n,e,t),v(e,s)},p:x,d(n){n&&c(e)}}}function He(l){let e,s=l[12].value+"",n;return{c(){e=k("span"),n=V(s)},l(t){e=E(t,"SPAN",{});var o=g(e);n=D(o,s),o.forEach(c)},m(t,o){S(t,e,o),v(e,n)},p(t,o){o&4&&s!==(s=t[12].value+"")&&R(n,s)},d(t){t&&c(e)}}}function ce(l){let e,s,n,t,o,r,u;const a=[Ge,Ce,ze,Te],i=[];function p(f,m){return f[12].type==="number"?0:f[12].type==="symbol"&&f[12].symbol===B?1:f[12].type==="symbol"&&f[12].symbol===M?2:f[12].type==="symbol"&&f[12].symbol===U?3:-1}~(s=p(l))&&(n=i[s]=a[s](l));function _(){return l[10](l[12])}return{c(){e=k("span"),n&&n.c(),t=O(),this.h()},l(f){e=E(f,"SPAN",{class:!0});var m=g(e);n&&n.l(m),t=N(m),m.forEach(c),this.h()},h(){b(e,"class","option"),P(e,"number",l[12].type==="number"),P(e,"prev",l[12].type==="symbol"&&l[12].symbol===M),P(e,"next",l[12].type==="symbol"&&l[12].symbol===U),P(e,"disabled",l[12].type==="symbol"&&l[12].symbol===U&&l[0]>=l[1]||l[12].type==="symbol"&&l[12].symbol===M&&l[0]<=1),P(e,"ellipsis",l[12].type==="symbol"&&l[12].symbol===B),P(e,"active",l[12].type==="number"&&l[12].value===l[0])},m(f,m){S(f,e,m),~s&&i[s].m(e,null),v(e,t),o=!0,r||(u=de(e,"click",_),r=!0)},p(f,m){l=f;let w=s;s=p(l),s===w?~s&&i[s].p(l,m):(n&&(Y(),I(i[w],1,1,()=>{i[w]=null}),$()),~s?(n=i[s],n?n.p(l,m):(n=i[s]=a[s](l),n.c()),L(n,1),n.m(e,t)):n=null),m&4&&P(e,"number",l[12].type==="number"),m&4&&P(e,"prev",l[12].type==="symbol"&&l[12].symbol===M),m&4&&P(e,"next",l[12].type==="symbol"&&l[12].symbol===U),m&7&&P(e,"disabled",l[12].type==="symbol"&&l[12].symbol===U&&l[0]>=l[1]||l[12].type==="symbol"&&l[12].symbol===M&&l[0]<=1),m&4&&P(e,"ellipsis",l[12].type==="symbol"&&l[12].symbol===B),m&5&&P(e,"active",l[12].type==="number"&&l[12].value===l[0])},i(f){o||(L(n),o=!0)},o(f){I(n),o=!1},d(f){f&&c(e),~s&&i[s].d(),r=!1,u()}}}function Ke(l){let e,s,n=l[2],t=[];for(let r=0;r<n.length;r+=1)t[r]=ce(ae(l,n,r));const o=r=>I(t[r],1,1,()=>{t[r]=null});return{c(){e=k("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=E(r,"DIV",{class:!0});var u=g(e);for(let a=0;a<t.length;a+=1)t[a].l(u);u.forEach(c),this.h()},h(){b(e,"class","pagination-nav")},m(r,u){S(r,e,u);for(let a=0;a<t.length;a+=1)t[a].m(e,null);s=!0},p(r,[u]){if(u&271){n=r[2];let a;for(a=0;a<n.length;a+=1){const i=ae(r,n,a);t[a]?(t[a].p(i,u),L(t[a],1)):(t[a]=ce(i),t[a].c(),L(t[a],1),t[a].m(e,null))}for(Y(),a=n.length;a<t.length;a+=1)o(a);$()}},i(r){if(!s){for(let u=0;u<n.length;u+=1)L(t[u]);s=!0}},o(r){t=t.filter(Boolean);for(let u=0;u<t.length;u+=1)I(t[u]);s=!1},d(r){r&&c(e),ye(t,r)}}}function Xe(l,e,s){let n,t,{$$slots:o={},$$scope:r}=e;const u=ge();let{totalItems:a=0}=e,{pageSize:i=1}=e,{currentPage:p=1}=e,{limit:_=null}=e,{showStepOptions:f=!1}=e;function m(h){u("setPage",{page:h.value})}const w=h=>m(h);return l.$$set=h=>{"totalItems"in h&&s(4,a=h.totalItems),"pageSize"in h&&s(5,i=h.pageSize),"currentPage"in h&&s(0,p=h.currentPage),"limit"in h&&s(6,_=h.limit),"showStepOptions"in h&&s(7,f=h.showStepOptions),"$$scope"in h&&s(8,r=h.$$scope)},l.$$.update=()=>{l.$$.dirty&241&&s(2,n=Ie({totalItems:a,pageSize:i,currentPage:p,limit:_,showStepOptions:f})),l.$$.dirty&48&&s(1,t=Math.ceil(a/i))},[p,t,n,m,a,i,_,f,r,o,w]}class Ze extends he{constructor(e){super(),be(this,e,Xe,Ke,ve,{totalItems:4,pageSize:5,currentPage:0,limit:6,showStepOptions:7})}}function _e(l,e,s){const n=l.slice();return n[5]=e[s].metadata.title,n[6]=e[s].metadata.description,n[7]=e[s].metadata.date,n[8]=e[s].path,n}function me(l){let e,s,n,t=l[5]+"",o,r,u,a,i=l[7]+"",p,_,f,m,w=l[6]+"",h,F,A,W,z,C,T;return{c(){e=k("div"),s=k("h1"),n=k("a"),o=V(t),u=O(),a=k("small"),p=V(i),_=O(),f=k("div"),m=k("p"),h=V(w),F=O(),A=k("a"),W=V("continue reading"),C=O(),T=k("hr"),this.h()},l(y){e=E(y,"DIV",{class:!0});var d=g(e);s=E(d,"H1",{});var ee=g(s);n=E(ee,"A",{"sveltekit:prefetch":!0,href:!0});var te=g(n);o=D(te,t),te.forEach(c),ee.forEach(c),u=N(d),a=E(d,"SMALL",{class:!0});var le=g(a);p=D(le,i),le.forEach(c),_=N(d),f=E(d,"DIV",{class:!0});var se=g(f);m=E(se,"P",{});var G=g(m);h=D(G,w),F=N(G),A=E(G,"A",{"sveltekit:prefetch":!0,href:!0});var ne=g(A);W=D(ne,"continue reading"),ne.forEach(c),G.forEach(c),se.forEach(c),d.forEach(c),C=N(y),T=E(y,"HR",{class:!0}),this.h()},h(){b(n,"sveltekit:prefetch",""),b(n,"href",r=l[8].replace(/\.[^/.]+$/,"")),b(a,"class","text-gray-400 mb-0"),b(A,"sveltekit:prefetch",""),b(A,"href",z=l[8].replace(/\.[^/.]+$/,"")),b(f,"class","mt-0"),b(e,"class","mb-4"),b(T,"class","border-solid text-gray-400 my-5")},m(y,d){S(y,e,d),v(e,s),v(s,n),v(n,o),v(e,u),v(e,a),v(a,p),v(e,_),v(e,f),v(f,m),v(m,h),v(m,F),v(m,A),v(A,W),S(y,C,d),S(y,T,d)},p(y,d){d&4&&t!==(t=y[5]+"")&&R(o,t),d&4&&r!==(r=y[8].replace(/\.[^/.]+$/,""))&&b(n,"href",r),d&4&&i!==(i=y[7]+"")&&R(p,i),d&4&&w!==(w=y[6]+"")&&R(h,w),d&4&&z!==(z=y[8].replace(/\.[^/.]+$/,""))&&b(A,"href",z)},d(y){y&&c(e),y&&c(C),y&&c(T)}}}function pe(l){let e,s,n;return s=new Ze({props:{totalItems:l[3].length,pageSize:K,currentPage:l[1],limit:1,showStepOptions:!0}}),s.$on("setPage",l[4]),{c(){e=k("div"),ke(s.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var o=g(e);Ee(s.$$.fragment,o),o.forEach(c),this.h()},h(){b(e,"class","mx-auto")},m(t,o){S(t,e,o),Se(s,e,null),n=!0},p(t,o){const r={};o&2&&(r.currentPage=t[1]),s.$set(r)},i(t){n||(L(s.$$.fragment,t),n=!0)},o(t){I(s.$$.fragment,t),n=!1},d(t){t&&c(e),Le(s)}}}function Je(l){let e,s,n,t,o,r=l[2],u=[];for(let i=0;i<r.length;i+=1)u[i]=me(_e(l,r,i));let a=l[0].length>K&&pe(l);return{c(){e=k("meta"),s=O();for(let i=0;i<u.length;i+=1)u[i].c();n=O(),a&&a.c(),t=oe(),this.h()},l(i){const p=Pe('[data-svelte="svelte-1u25tui"]',document.head);e=E(p,"META",{name:!0,content:!0}),p.forEach(c),s=N(i);for(let _=0;_<u.length;_+=1)u[_].l(i);n=N(i),a&&a.l(i),t=oe(),this.h()},h(){document.title="Kale Collective - Blog",b(e,"name","description"),b(e,"content","Updates from Kale Collective")},m(i,p){v(document.head,e),S(i,s,p);for(let _=0;_<u.length;_+=1)u[_].m(i,p);S(i,n,p),a&&a.m(i,p),S(i,t,p),o=!0},p(i,[p]){if(p&4){r=i[2];let _;for(_=0;_<r.length;_+=1){const f=_e(i,r,_);u[_]?u[_].p(f,p):(u[_]=me(f),u[_].c(),u[_].m(n.parentNode,n))}for(;_<u.length;_+=1)u[_].d(1);u.length=r.length}i[0].length>K?a?(a.p(i,p),p&1&&L(a,1)):(a=pe(i),a.c(),L(a,1),a.m(t.parentNode,t)):a&&(Y(),I(a,1,1,()=>{a=null}),$())},i(i){o||(L(a),o=!0)},o(i){I(a),o=!1},d(i){c(e),i&&c(s),ye(u,i),i&&c(n),a&&a.d(i),i&&c(t)}}}async function We({fetch:l}){return{props:{posts:await(await l("/blog/posts.json")).json()}}}let K=10;function Qe(l,e,s){let n,{posts:t}=e,o=t,r=1;const u=a=>s(1,r=a.detail.page);return l.$$set=a=>{"posts"in a&&s(0,t=a.posts)},l.$$.update=()=>{l.$$.dirty&2&&s(2,n=we({items:o,pageSize:K,currentPage:r}))},[t,r,n,o,u]}class Ye extends he{constructor(e){super(),be(this,e,Qe,Je,ve,{posts:0})}}export{Ye as default,We as load};