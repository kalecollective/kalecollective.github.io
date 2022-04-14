import{F as R,S as X,i as Y,s as Z,e as w,t as O,k as q,c as E,a as y,h as U,d as _,m as H,b as c,G as g,g as K,H as k,j as ee,l as B,I as te,p as S,q as le,r as $,J as se,K as ae,o as re,L as V,M as z,N as D,O as Q}from"../chunks/index-5d6fd3c5.js";const oe=()=>{const a=R("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},ne={subscribe(a){return oe().page.subscribe(a)}};function F(a,l,t){const o=a.slice();return o[4]=l[t].slug,o[5]=l[t].title,o[6]=l[t].currentPage,o}function J(a){let l,t,o,e=a[5]+"",s,n,m;return{c(){l=w("li"),t=w("a"),o=w("h1"),s=O(e),m=q(),this.h()},l(i){l=E(i,"LI",{class:!0});var u=y(l);t=E(u,"A",{href:!0,"sveltekit:prefecth":!0,class:!0});var L=y(t);o=E(L,"H1",{class:!0});var I=y(o);s=U(I,e),I.forEach(_),L.forEach(_),m=H(u),u.forEach(_),this.h()},h(){c(o,"class","navText relative"),g(o,"-top-px",a[6]),c(t,"href",n=a[4]),c(t,"sveltekit:prefecth",""),c(t,"class","my-auto h-12 sm:h-16 flex flex-col justify-center px-3 relative"),g(t,"bg-white",a[6]),g(t,"top-px",a[6]),g(t,"text-logoborder",a[6]),c(l,"class","ml-2.5 sm:ml-6 flex-grow-0 border-l border-r"),g(l,"border-gray-200",a[6]),g(l,"border-header",!a[6]),g(l,"bg-white",a[6])},m(i,u){K(i,l,u),k(l,t),k(t,o),k(o,s),k(l,m)},p(i,u){u&1&&e!==(e=i[5]+"")&&ee(s,e),u&1&&g(o,"-top-px",i[6]),u&1&&n!==(n=i[4])&&c(t,"href",n),u&1&&g(t,"bg-white",i[6]),u&1&&g(t,"top-px",i[6]),u&1&&g(t,"text-logoborder",i[6]),u&1&&g(l,"border-gray-200",i[6]),u&1&&g(l,"border-header",!i[6]),u&1&&g(l,"bg-white",i[6])},d(i){i&&_(l)}}}function ie(a){let l,t;const o=a[3].default,e=V(o,a,a[2],null);return{c(){l=w("main"),e&&e.c()},l(s){l=E(s,"MAIN",{});var n=y(l);e&&e.l(n),n.forEach(_)},m(s,n){K(s,l,n),e&&e.m(l,null),t=!0},p(s,n){e&&e.p&&(!t||n&4)&&z(e,o,s,s[2],t?Q(o,s[2],n,null):D(s[2]),null)},i(s){t||($(e,s),t=!0)},o(s){S(e,s),t=!1},d(s){s&&_(l),e&&e.d(s)}}}function ue(a){let l,t;const o=a[3].default,e=V(o,a,a[2],null);return{c(){l=w("main"),e&&e.c(),this.h()},l(s){l=E(s,"MAIN",{class:!0});var n=y(l);e&&e.l(n),n.forEach(_),this.h()},h(){c(l,"class","container px-3 sm:px-10 mx-auto py-4 sm:py-8")},m(s,n){K(s,l,n),e&&e.m(l,null),t=!0},p(s,n){e&&e.p&&(!t||n&4)&&z(e,o,s,s[2],t?Q(o,s[2],n,null):D(s[2]),null)},i(s){t||($(e,s),t=!0)},o(s){S(e,s),t=!1},d(s){s&&_(l),e&&e.d(s)}}}function ce(a){let l,t,o,e,s,n,m,i,u,L,I,M,b,d,N,P,x=a[0],f=[];for(let r=0;r<x.length;r+=1)f[r]=J(F(a,x,r));const G=[ue,ie],A=[];function T(r,h){return h&1&&(M=null),M==null&&(M=!!r[0].some(fe)),M?0:1}return b=T(a,-1),d=A[b]=G[b](a),{c(){l=w("nav"),t=w("ul"),o=w("li"),e=w("a"),s=w("img"),m=q(),i=w("h1"),u=O("Kale Collective"),L=q();for(let r=0;r<f.length;r+=1)f[r].c();I=q(),d.c(),N=B(),this.h()},l(r){l=E(r,"NAV",{class:!0});var h=y(l);t=E(h,"UL",{class:!0});var v=y(t);o=E(v,"LI",{class:!0});var p=y(o);e=E(p,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var C=y(e);s=E(C,"IMG",{src:!0,class:!0,alt:!0}),m=H(C),i=E(C,"H1",{class:!0});var W=y(i);u=U(W,"Kale Collective"),W.forEach(_),C.forEach(_),p.forEach(_),L=H(v);for(let j=0;j<f.length;j+=1)f[j].l(v);v.forEach(_),h.forEach(_),I=H(r),d.l(r),N=B(),this.h()},h(){te(s.src,n="/leaf_only.svg")||c(s,"src",n),c(s,"class","w-12 h-12 sm:w-16 sm:h-16 p-1.5 sm:p-3"),c(s,"alt","Kale Collective Logo"),c(i,"class","ml-0.5 sm:ml-1 navText "),c(e,"href","/"),c(e,"sveltekit:prefetch",""),c(e,"class","flex flex-row items-center max-w-max text-logoborder"),c(o,"class","logo flex-grow h-12 sm:h-16"),c(t,"class","container px-1 xs:px-3 sm:px-7 mx-auto flex flex-row list-none"),c(l,"class","w-full bg-header border-b border-solid border-gray-200 sticky top-0")},m(r,h){K(r,l,h),k(l,t),k(t,o),k(o,e),k(e,s),k(e,m),k(e,i),k(i,u),k(t,L);for(let v=0;v<f.length;v+=1)f[v].m(t,null);K(r,I,h),A[b].m(r,h),K(r,N,h),P=!0},p(r,[h]){if(h&1){x=r[0];let p;for(p=0;p<x.length;p+=1){const C=F(r,x,p);f[p]?f[p].p(C,h):(f[p]=J(C),f[p].c(),f[p].m(t,null))}for(;p<f.length;p+=1)f[p].d(1);f.length=x.length}let v=b;b=T(r,h),b===v?A[b].p(r,h):(re(),S(A[v],1,1,()=>{A[v]=null}),le(),d=A[b],d?d.p(r,h):(d=A[b]=G[b](r),d.c()),$(d,1),d.m(N.parentNode,N))},i(r){P||($(d),P=!0)},o(r){S(d),P=!1},d(r){r&&_(l),se(f,r),r&&_(I),A[b].d(r),r&&_(N)}}}const fe=a=>a.currentPage;function _e(a,l,t){let o,e;ae(a,ne,m=>t(1,e=m));let{$$slots:s={},$$scope:n}=l;return a.$$set=m=>{"$$scope"in m&&t(2,n=m.$$scope)},a.$$.update=()=>{a.$$.dirty&2&&t(0,o=[{slug:"/about",title:"About",currentPage:e.url.pathname.startsWith("/about")},{slug:"/blog",title:"Blog",currentPage:e.url.pathname.startsWith("/blog")}])},[o,e,n,s]}class pe extends X{constructor(l){super(),Y(this,l,_e,ce,Z,{})}}export{pe as default};
