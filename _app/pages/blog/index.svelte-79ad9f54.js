import{S as t,i as s,s as a,e,t as l,k as r,c,a as n,g as o,d as i,n as h,b as f,f as p,E as u,h as g,j as m,m as d,o as v,x as $,u as E,v as w,w as y,K as I,G as P,J as j,L as k,P as S,r as A}from"../../chunks/vendor-09c63405.js";import{s as L}from"../../chunks/store-feec3c0c.js";function x(t,s,a){const e=t.slice();return e[6]=s[a].metadata.title,e[7]=s[a].metadata.description,e[8]=s[a].metadata.date,e[9]=s[a].path,e}function C(t){let s,a,m,d,v,$,E,w,y,I,P,j,k=t[6]+"",S=t[8]+"",A=t[7]+"";return{c(){s=e("div"),a=e("a"),m=e("h2"),d=l(k),$=r(),E=e("small"),w=l(S),y=r(),I=e("p"),P=l(A),j=r(),this.h()},l(t){s=c(t,"DIV",{class:!0});var e=n(s);a=c(e,"A",{"sveltekit:prefetch":!0,href:!0});var l=n(a);m=c(l,"H2",{class:!0});var r=n(m);d=o(r,k),r.forEach(i),l.forEach(i),$=h(e),E=c(e,"SMALL",{class:!0});var f=n(E);w=o(f,S),f.forEach(i),y=h(e),I=c(e,"P",{class:!0});var p=n(I);P=o(p,A),p.forEach(i),j=h(e),e.forEach(i),this.h()},h(){f(m,"class","svelte-1ywoyp8"),f(a,"sveltekit:prefetch",""),f(a,"href",v=t[9].replace(/\.[^/.]+$/,"")),f(E,"class","svelte-1ywoyp8"),f(I,"class","svelte-1ywoyp8"),f(s,"class","article")},m(t,e){p(t,s,e),u(s,a),u(a,m),u(m,d),u(s,$),u(s,E),u(E,w),u(s,y),u(s,I),u(I,P),u(s,j)},p(t,s){4&s&&k!==(k=t[6]+"")&&g(d,k),4&s&&v!==(v=t[9].replace(/\.[^/.]+$/,""))&&f(a,"href",v),4&s&&S!==(S=t[8]+"")&&g(w,S),4&s&&A!==(A=t[7]+"")&&g(P,A)},d(t){t&&i(s)}}}function D(t){let s,a,l;return a=new S({props:{totalItems:t[3].length,pageSize:b,currentPage:t[1],limit:1,showStepOptions:!0}}),a.$on("setPage",t[4]),{c(){s=e("div"),m(a.$$.fragment),this.h()},l(t){s=c(t,"DIV",{class:!0});var e=n(s);d(a.$$.fragment,e),e.forEach(i),this.h()},h(){f(s,"class","pagination")},m(t,e){p(t,s,e),v(a,s,null),l=!0},p(t,s){const e={};2&s&&(e.currentPage=t[1]),a.$set(e)},i(t){l||($(a.$$.fragment,t),l=!0)},o(t){E(a.$$.fragment,t),l=!1},d(t){t&&i(s),w(a)}}}function K(t){let s,a,l,o,g,m=t[2],d=[];for(let e=0;e<m.length;e+=1)d[e]=C(x(t,m,e));let v=t[0].length>b&&D(t);return{c(){s=e("main"),a=e("article"),l=e("div");for(let t=0;t<d.length;t+=1)d[t].c();o=r(),v&&v.c(),this.h()},l(t){s=c(t,"MAIN",{});var e=n(s);a=c(e,"ARTICLE",{});var r=n(a);l=c(r,"DIV",{class:!0});var f=n(l);for(let s=0;s<d.length;s+=1)d[s].l(f);f.forEach(i),o=h(r),v&&v.l(r),r.forEach(i),e.forEach(i),this.h()},h(){f(l,"class","article-list")},m(t,e){p(t,s,e),u(s,a),u(a,l);for(let s=0;s<d.length;s+=1)d[s].m(l,null);u(a,o),v&&v.m(a,null),g=!0},p(t,[s]){if(4&s){let a;for(m=t[2],a=0;a<m.length;a+=1){const e=x(t,m,a);d[a]?d[a].p(e,s):(d[a]=C(e),d[a].c(),d[a].m(l,null))}for(;a<d.length;a+=1)d[a].d(1);d.length=m.length}t[0].length>b?v?(v.p(t,s),1&s&&$(v,1)):(v=D(t),v.c(),$(v,1),v.m(a,null)):v&&(A(),E(v,1,1,(()=>{v=null})),y())},i(t){g||($(v),g=!0)},o(t){E(v),g=!1},d(t){t&&i(s),I(d,t),v&&v.d()}}}async function V({fetch:t}){const s=await t("/blog/posts.json");return{props:{posts:await s.json()}}}let b=10;function z(t,s,a){let e,l;P(t,L,(t=>a(5,l=t)));let{posts:r}=s,c=r,n=1;j(L,l={title:"Kale Collective - Blog",description:"Updates from Kale Collective"},l);return t.$$set=t=>{"posts"in t&&a(0,r=t.posts)},t.$$.update=()=>{2&t.$$.dirty&&a(2,e=k({items:c,pageSize:b,currentPage:n}))},[r,n,e,c,t=>a(1,n=t.detail.page)]}class M extends t{constructor(t){super(),s(this,t,z,K,a,{posts:0})}}export{M as default,V as load};
