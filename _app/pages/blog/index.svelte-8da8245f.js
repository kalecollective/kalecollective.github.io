import{S as F,i as G,s as Q,e as k,t as V,k as A,c as $,a as I,h as q,d as u,m as w,b as d,g as S,J as v,j as N,w as W,x as X,y as Y,q as y,o as H,B as Z,L as x,p as ee,N as te,O as ae,P as le,n as se}from"../../chunks/vendor-5b43baeb.js";function z(o,e,t){const a=o.slice();return a[5]=e[t].metadata.title,a[6]=e[t].metadata.description,a[7]=e[t].metadata.date,a[8]=e[t].path,a}function J(o){let e,t,a,l=o[5]+"",i,m,b,h,c=o[7]+"",r,s,f,n=o[6]+"",g,P,E,M,C,D,j;return{c(){e=k("div"),t=k("h2"),a=k("a"),i=V(l),b=A(),h=k("small"),r=V(c),s=A(),f=k("div"),g=V(n),P=A(),E=k("a"),M=V("continue reading"),D=A(),j=k("hr"),this.h()},l(_){e=$(_,"DIV",{class:!0});var p=I(e);t=$(p,"H2",{class:!0});var K=I(t);a=$(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var O=I(a);i=q(O,l),O.forEach(u),K.forEach(u),b=w(p),h=$(p,"SMALL",{class:!0});var R=I(h);r=q(R,c),R.forEach(u),s=w(p),f=$(p,"DIV",{class:!0});var L=I(f);g=q(L,n),P=w(L),E=$(L,"A",{"sveltekit:prefetch":!0,href:!0});var T=I(E);M=q(T,"continue reading"),T.forEach(u),L.forEach(u),p.forEach(u),D=w(_),j=$(_,"HR",{class:!0}),this.h()},h(){d(a,"sveltekit:prefetch",""),d(a,"href",m=o[8].replace(/\.[^/.]+$/,"")),d(a,"class","svelte-19t77r7"),d(t,"class","svelte-19t77r7"),d(h,"class","svelte-19t77r7"),d(E,"sveltekit:prefetch",""),d(E,"href",C=o[8].replace(/\.[^/.]+$/,"")),d(f,"class","description svelte-19t77r7"),d(e,"class","article svelte-19t77r7"),d(j,"class","svelte-19t77r7")},m(_,p){S(_,e,p),v(e,t),v(t,a),v(a,i),v(e,b),v(e,h),v(h,r),v(e,s),v(e,f),v(f,g),v(f,P),v(f,E),v(E,M),S(_,D,p),S(_,j,p)},p(_,p){p&4&&l!==(l=_[5]+"")&&N(i,l),p&4&&m!==(m=_[8].replace(/\.[^/.]+$/,""))&&d(a,"href",m),p&4&&c!==(c=_[7]+"")&&N(r,c),p&4&&n!==(n=_[6]+"")&&N(g,n),p&4&&C!==(C=_[8].replace(/\.[^/.]+$/,""))&&d(E,"href",C)},d(_){_&&u(e),_&&u(D),_&&u(j)}}}function U(o){let e,t,a;return t=new le({props:{totalItems:o[3].length,pageSize:B,currentPage:o[1],limit:1,showStepOptions:!0}}),t.$on("setPage",o[4]),{c(){e=k("div"),W(t.$$.fragment),this.h()},l(l){e=$(l,"DIV",{class:!0});var i=I(e);X(t.$$.fragment,i),i.forEach(u),this.h()},h(){d(e,"class","pagination svelte-19t77r7")},m(l,i){S(l,e,i),Y(t,e,null),a=!0},p(l,i){const m={};i&2&&(m.currentPage=l[1]),t.$set(m)},i(l){a||(y(t.$$.fragment,l),a=!0)},o(l){H(t.$$.fragment,l),a=!1},d(l){l&&u(e),Z(t)}}}function re(o){let e,t,a,l,i,m,b,h=o[2],c=[];for(let s=0;s<h.length;s+=1)c[s]=J(z(o,h,s));let r=o[0].length>B&&U(o);return{c(){e=k("meta"),t=A(),a=k("main"),l=k("article"),i=k("div");for(let s=0;s<c.length;s+=1)c[s].c();m=A(),r&&r.c(),this.h()},l(s){const f=x('[data-svelte="svelte-1u25tui"]',document.head);e=$(f,"META",{name:!0,content:!0}),f.forEach(u),t=w(s),a=$(s,"MAIN",{});var n=I(a);l=$(n,"ARTICLE",{});var g=I(l);i=$(g,"DIV",{class:!0});var P=I(i);for(let E=0;E<c.length;E+=1)c[E].l(P);P.forEach(u),m=w(g),r&&r.l(g),g.forEach(u),n.forEach(u),this.h()},h(){document.title="Kale Collective - Blog",d(e,"name","description"),d(e,"content","Updates from Kale Collective"),d(i,"class","article-list")},m(s,f){v(document.head,e),S(s,t,f),S(s,a,f),v(a,l),v(l,i);for(let n=0;n<c.length;n+=1)c[n].m(i,null);v(l,m),r&&r.m(l,null),b=!0},p(s,[f]){if(f&4){h=s[2];let n;for(n=0;n<h.length;n+=1){const g=z(s,h,n);c[n]?c[n].p(g,f):(c[n]=J(g),c[n].c(),c[n].m(i,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=h.length}s[0].length>B?r?(r.p(s,f),f&1&&y(r,1)):(r=U(s),r.c(),y(r,1),r.m(l,null)):r&&(se(),H(r,1,1,()=>{r=null}),ee())},i(s){b||(y(r),b=!0)},o(s){H(r),b=!1},d(s){u(e),s&&u(t),s&&u(a),te(c,s),r&&r.d()}}}async function ie({fetch:o}){return{props:{posts:await(await o("/blog/posts.json")).json()}}}let B=10;function ne(o,e,t){let a,{posts:l}=e,i=l,m=1;const b=h=>t(1,m=h.detail.page);return o.$$set=h=>{"posts"in h&&t(0,l=h.posts)},o.$$.update=()=>{o.$$.dirty&2&&t(2,a=ae({items:i,pageSize:B,currentPage:m}))},[l,m,a,i,b]}class ce extends F{constructor(e){super();G(this,e,ne,re,Q,{posts:0})}}export{ce as default,ie as load};
