import{S as G,i as Q,s as W,e as v,t as C,k as w,c as g,a as E,h as D,d as p,m as y,b as d,g as P,H as _,j as L,w as Z,x,y as ee,q as H,o as M,B as te,l as U,T as ae,p as le,J as se,X as ne,Y as re,n as oe}from"../../chunks/vendor-eed7e57e.js";function X(o,t,l){const s=o.slice();return s[5]=t[l].metadata.title,s[6]=t[l].metadata.description,s[7]=t[l].metadata.date,s[8]=t[l].path,s}function Y(o){let t,l,s,n=o[5]+"",c,f,i,a,e=o[7]+"",h,r,k,$,I=o[6]+"",j,V,b,K,A,q,S;return{c(){t=v("div"),l=v("h1"),s=v("a"),c=C(n),i=w(),a=v("small"),h=C(e),r=w(),k=v("div"),$=v("p"),j=C(I),V=w(),b=v("a"),K=C("continue reading"),q=w(),S=v("hr"),this.h()},l(u){t=g(u,"DIV",{class:!0});var m=E(t);l=g(m,"H1",{});var T=E(l);s=g(T,"A",{"sveltekit:prefetch":!0,href:!0});var z=E(s);c=D(z,n),z.forEach(p),T.forEach(p),i=y(m),a=g(m,"SMALL",{class:!0});var J=E(a);h=D(J,e),J.forEach(p),r=y(m),k=g(m,"DIV",{class:!0});var O=E(k);$=g(O,"P",{});var B=E($);j=D(B,I),V=y(B),b=g(B,"A",{"sveltekit:prefetch":!0,href:!0});var R=E(b);K=D(R,"continue reading"),R.forEach(p),B.forEach(p),O.forEach(p),m.forEach(p),q=y(u),S=g(u,"HR",{class:!0}),this.h()},h(){d(s,"sveltekit:prefetch",""),d(s,"href",f=o[8].replace(/\.[^/.]+$/,"")),d(a,"class","text-gray-400 mb-0"),d(b,"sveltekit:prefetch",""),d(b,"href",A=o[8].replace(/\.[^/.]+$/,"")),d(k,"class","mt-0"),d(t,"class","mb-4"),d(S,"class","border-solid text-gray-400 my-5")},m(u,m){P(u,t,m),_(t,l),_(l,s),_(s,c),_(t,i),_(t,a),_(a,h),_(t,r),_(t,k),_(k,$),_($,j),_($,V),_($,b),_(b,K),P(u,q,m),P(u,S,m)},p(u,m){m&4&&n!==(n=u[5]+"")&&L(c,n),m&4&&f!==(f=u[8].replace(/\.[^/.]+$/,""))&&d(s,"href",f),m&4&&e!==(e=u[7]+"")&&L(h,e),m&4&&I!==(I=u[6]+"")&&L(j,I),m&4&&A!==(A=u[8].replace(/\.[^/.]+$/,""))&&d(b,"href",A)},d(u){u&&p(t),u&&p(q),u&&p(S)}}}function F(o){let t,l,s;return l=new re({props:{totalItems:o[3].length,pageSize:N,currentPage:o[1],limit:1,showStepOptions:!0}}),l.$on("setPage",o[4]),{c(){t=v("div"),Z(l.$$.fragment),this.h()},l(n){t=g(n,"DIV",{class:!0});var c=E(t);x(l.$$.fragment,c),c.forEach(p),this.h()},h(){d(t,"class","mx-auto")},m(n,c){P(n,t,c),ee(l,t,null),s=!0},p(n,c){const f={};c&2&&(f.currentPage=n[1]),l.$set(f)},i(n){s||(H(l.$$.fragment,n),s=!0)},o(n){M(l.$$.fragment,n),s=!1},d(n){n&&p(t),te(l)}}}function ie(o){let t,l,s,n,c,f=o[2],i=[];for(let e=0;e<f.length;e+=1)i[e]=Y(X(o,f,e));let a=o[0].length>N&&F(o);return{c(){t=v("meta"),l=w();for(let e=0;e<i.length;e+=1)i[e].c();s=w(),a&&a.c(),n=U(),this.h()},l(e){const h=ae('[data-svelte="svelte-1u25tui"]',document.head);t=g(h,"META",{name:!0,content:!0}),h.forEach(p),l=y(e);for(let r=0;r<i.length;r+=1)i[r].l(e);s=y(e),a&&a.l(e),n=U(),this.h()},h(){document.title="Kale Collective - Blog",d(t,"name","description"),d(t,"content","Updates from Kale Collective")},m(e,h){_(document.head,t),P(e,l,h);for(let r=0;r<i.length;r+=1)i[r].m(e,h);P(e,s,h),a&&a.m(e,h),P(e,n,h),c=!0},p(e,[h]){if(h&4){f=e[2];let r;for(r=0;r<f.length;r+=1){const k=X(e,f,r);i[r]?i[r].p(k,h):(i[r]=Y(k),i[r].c(),i[r].m(s.parentNode,s))}for(;r<i.length;r+=1)i[r].d(1);i.length=f.length}e[0].length>N?a?(a.p(e,h),h&1&&H(a,1)):(a=F(e),a.c(),H(a,1),a.m(n.parentNode,n)):a&&(oe(),M(a,1,1,()=>{a=null}),le())},i(e){c||(H(a),c=!0)},o(e){M(a),c=!1},d(e){p(t),e&&p(l),se(i,e),e&&p(s),a&&a.d(e),e&&p(n)}}}async function he({fetch:o}){return{props:{posts:await(await o("/blog/posts.json")).json()}}}let N=10;function ce(o,t,l){let s,{posts:n}=t,c=n,f=1;const i=a=>l(1,f=a.detail.page);return o.$$set=a=>{"posts"in a&&l(0,n=a.posts)},o.$$.update=()=>{o.$$.dirty&2&&l(2,s=ne({items:c,pageSize:N,currentPage:f}))},[n,f,s,c,i]}class ue extends G{constructor(t){super();Q(this,t,ce,ie,W,{posts:0})}}export{ue as default,he as load};
