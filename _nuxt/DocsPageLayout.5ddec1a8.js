import J from"./DocsAside.07776a78.js";import O from"./ProseCodeInline.f6c84af1.js";import R from"./Alert.2ac27237.js";import U from"./DocsPageBottom.24935341.js";import K from"./DocsPrevNext.0173eb07.js";import{d as Q,G as W,cp as X,s as Y,L as m,r as V,m as Z,o as ee,aq as oe,b as p,J as A,w as h,I as t,c as g,g as r,f as y,e as u,a5 as te,D as k,t as ne,F as se,n as x,M as ae,ck as ce,p as le,i as re,k as _e}from"./entry.e5ec0771.js";import ie from"./DocsToc.7ca33374.js";import"./slot.b26274b9.js";import"./node.3daaa61c.js";import"./ProseA.e5ef4fdd.js";import"./EditOnLink.vue.a8675996.js";import"./DocsTocLinks.2338d67e.js";import"./useScrollspy.3861acd5.js";const pe=d=>(le("data-v-73d798d2"),d=d(),re(),d),ue={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=pe(()=>u("span",{class:"title"},"Table of Contents",-1)),ve=Q({__name:"DocsPageLayout",setup(d){const{page:s}=W(),{config:f,tree:T}=X(),L=Y(),M=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},P=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),S=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),b=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(n=T.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),F=m(()=>M("bottom",!0)),_=V(!1),a=V(null),v=()=>L.path.split("/").slice(0,2).join("/"),i=Z("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function C(){a.value&&(a.value.scrollHeight===0&&setTimeout(C,0),a.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):C()}),oe(()=>{a.value&&(i.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var D,w,B,I,N,$;const n=J,c=O,l=R,H=U,j=K,q=ae,z=ie,E=ce;return p(),A(E,{fluid:(w=(D=t(f))==null?void 0:D.main)==null?void 0:w.fluid,padded:(I=(B=t(f))==null?void 0:B.main)==null?void 0:I.padded,class:x(["docs-page-content",{fluid:($=(N=t(f))==null?void 0:N.main)==null?void 0:$.fluid,"has-toc":t(S),"has-aside":t(b)}])},{default:h(()=>[t(b)?(p(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):y("",!0),u("article",ue,[t(P)?te(e.$slots,"default",{key:0},void 0,!0):(p(),A(l,{key:1,type:"info"},{default:h(()=>[k(" Start writing in "),r(c,null,{default:h(()=>[k("content/"+ne(t(s)._file),1)]),_:1}),k(" to see this page taking shape. ")]),_:1})),t(P)&&t(s)&&t(F)?(p(),g(se,{key:2},[r(H),r(j)],64)):y("",!0)]),t(S)?(p(),g("div",de,[u("div",me,[u("button",{onClick:o[0]||(o[0]=G=>_.value=!t(_))},[fe,r(q,{name:"heroicons-outline:chevron-right",class:x(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),u("div",{class:x(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(z,{onMove:o[1]||(o[1]=G=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const Ie=_e(ve,[["__scopeId","data-v-73d798d2"]]);export{Ie as default};