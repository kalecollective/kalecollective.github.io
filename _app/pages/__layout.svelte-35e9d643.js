import{F as R,S as X,i as Y,s as Z,e as w,t as B,k as j,c as E,a as y,h as F,d as _,m as q,b as c,G as g,g as K,H as k,j as ee,l as J,I as le,o as H,p as te,q as S,J as se,K as re,n as ae,L as O,M as U,N as V,O as z}from"../chunks/vendor-b3205926.js";const oe=()=>{const r=R("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session}},ne={subscribe(r){return oe().page.subscribe(r)}};function D(r,t,l){const o=r.slice();return o[4]=t[l].slug,o[5]=t[l].title,o[6]=t[l].currentPage,o}function Q(r){let t,l,o,e=r[5]+"",s,n,b;return{c(){t=w("li"),l=w("a"),o=w("h1"),s=B(e),b=j(),this.h()},l(i){t=E(i,"LI",{class:!0});var u=y(t);l=E(u,"A",{href:!0,"sveltekit:prefecth":!0,class:!0});var L=y(l);o=E(L,"H1",{class:!0});var I=y(o);s=F(I,e),I.forEach(_),L.forEach(_),b=q(u),u.forEach(_),this.h()},h(){c(o,"class","navText relative"),g(o,"-top-px",r[6]),c(l,"href",n=r[4]),c(l,"sveltekit:prefecth",""),c(l,"class","my-auto h-12 sm:h-16 flex flex-col justify-center px-3 relative"),g(l,"bg-white",r[6]),g(l,"top-px",r[6]),g(l,"text-logoborder",r[6]),c(t,"class","ml-2.5 sm:ml-6 flex-grow-0 border-l border-r"),g(t,"border-gray-200",r[6]),g(t,"border-header",!r[6]),g(t,"bg-white",r[6])},m(i,u){K(i,t,u),k(t,l),k(l,o),k(o,s),k(t,b)},p(i,u){u&1&&e!==(e=i[5]+"")&&ee(s,e),u&1&&g(o,"-top-px",i[6]),u&1&&n!==(n=i[4])&&c(l,"href",n),u&1&&g(l,"bg-white",i[6]),u&1&&g(l,"top-px",i[6]),u&1&&g(l,"text-logoborder",i[6]),u&1&&g(t,"border-gray-200",i[6]),u&1&&g(t,"border-header",!i[6]),u&1&&g(t,"bg-white",i[6])},d(i){i&&_(t)}}}function ie(r){let t,l;const o=r[3].default,e=O(o,r,r[2],null);return{c(){t=w("main"),e&&e.c()},l(s){t=E(s,"MAIN",{});var n=y(t);e&&e.l(n),n.forEach(_)},m(s,n){K(s,t,n),e&&e.m(t,null),l=!0},p(s,n){e&&e.p&&(!l||n&4)&&U(e,o,s,s[2],l?z(o,s[2],n,null):V(s[2]),null)},i(s){l||(S(e,s),l=!0)},o(s){H(e,s),l=!1},d(s){s&&_(t),e&&e.d(s)}}}function ue(r){let t,l;const o=r[3].default,e=O(o,r,r[2],null);return{c(){t=w("main"),e&&e.c(),this.h()},l(s){t=E(s,"MAIN",{class:!0});var n=y(t);e&&e.l(n),n.forEach(_),this.h()},h(){c(t,"class","container px-3 sm:px-10 mx-auto py-4 sm:py-8")},m(s,n){K(s,t,n),e&&e.m(t,null),l=!0},p(s,n){e&&e.p&&(!l||n&4)&&U(e,o,s,s[2],l?z(o,s[2],n,null):V(s[2]),null)},i(s){l||(S(e,s),l=!0)},o(s){H(e,s),l=!1},d(s){s&&_(t),e&&e.d(s)}}}function ce(r){let t,l,o,e,s,n,b,i,u,L,I,M,m,d,N,P,x=r[0],f=[];for(let a=0;a<x.length;a+=1)f[a]=Q(D(r,x,a));const G=[ue,ie],A=[];function T(a,h){return h&1&&(M=null),M==null&&(M=!!a[0].some(fe)),M?0:1}return m=T(r,-1),d=A[m]=G[m](r),{c(){t=w("nav"),l=w("ul"),o=w("li"),e=w("a"),s=w("img"),b=j(),i=w("h1"),u=B("Kale Collective"),L=j();for(let a=0;a<f.length;a+=1)f[a].c();I=j(),d.c(),N=J(),this.h()},l(a){t=E(a,"NAV",{class:!0});var h=y(t);l=E(h,"UL",{class:!0});var v=y(l);o=E(v,"LI",{class:!0});var p=y(o);e=E(p,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var C=y(e);s=E(C,"IMG",{src:!0,class:!0,alt:!0}),b=q(C),i=E(C,"H1",{class:!0});var W=y(i);u=F(W,"Kale Collective"),W.forEach(_),C.forEach(_),p.forEach(_),L=q(v);for(let $=0;$<f.length;$+=1)f[$].l(v);v.forEach(_),h.forEach(_),I=q(a),d.l(a),N=J(),this.h()},h(){le(s.src,n="/leaf_only.svg")||c(s,"src",n),c(s,"class","w-12 h-12 sm:w-16 sm:h-16 p-1.5 sm:p-3"),c(s,"alt","Kale Collective Logo"),c(i,"class","ml-1 navText "),c(e,"href","/"),c(e,"sveltekit:prefetch",""),c(e,"class","flex flex-row items-center max-w-max text-logoborder"),c(o,"class","logo flex-grow h-12 sm:h-16"),c(l,"class","container px-1 xs:px-3 sm:px-7 mx-auto flex flex-row list-none"),c(t,"class","w-full bg-header border-b border-solid border-gray-200 sticky top-0")},m(a,h){K(a,t,h),k(t,l),k(l,o),k(o,e),k(e,s),k(e,b),k(e,i),k(i,u),k(l,L);for(let v=0;v<f.length;v+=1)f[v].m(l,null);K(a,I,h),A[m].m(a,h),K(a,N,h),P=!0},p(a,[h]){if(h&1){x=a[0];let p;for(p=0;p<x.length;p+=1){const C=D(a,x,p);f[p]?f[p].p(C,h):(f[p]=Q(C),f[p].c(),f[p].m(l,null))}for(;p<f.length;p+=1)f[p].d(1);f.length=x.length}let v=m;m=T(a,h),m===v?A[m].p(a,h):(ae(),H(A[v],1,1,()=>{A[v]=null}),te(),d=A[m],d?d.p(a,h):(d=A[m]=G[m](a),d.c()),S(d,1),d.m(N.parentNode,N))},i(a){P||(S(d),P=!0)},o(a){H(d),P=!1},d(a){a&&_(t),se(f,a),a&&_(I),A[m].d(a),a&&_(N)}}}const fe=r=>r.currentPage;function _e(r,t,l){let o,e;re(r,ne,b=>l(1,e=b));let{$$slots:s={},$$scope:n}=t;return r.$$set=b=>{"$$scope"in b&&l(2,n=b.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&l(0,o=[{slug:"/about",title:"About",currentPage:e.url.pathname.startsWith("/about")},{slug:"/blog",title:"Blog",currentPage:e.url.pathname.startsWith("/blog")}])},[o,e,n,s]}class pe extends X{constructor(t){super();Y(this,t,_e,ce,Z,{})}}export{pe as default};
