import{d as y,r as l,az as k,cv as w,x,b as s,c as p,e as m,g as v,w as S,J as _,I as f,T as $,n as C,M as b,p as I,i as P,k as h,t as z,f as M,an as N}from"./entry.73f850e2.js";const T=e=>(I("data-v-d1891d80"),e=e(),P(),e),V=T(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),A={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=l(),{copy:t}=k();w(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=x(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(d=>{console.warn("Couldn't copy to clipboard!",d)})};return(B,d)=>{const u=b;return s(),p("button",{ref_key:"copyButtonRef",ref:a,class:C([(e.show||o.value==="copied")&&"show"]),onClick:g},[V,m("span",A,[v($,{name:"fade"},{default:S(()=>{var r,i;return[o.value==="copied"?(s(),_(u,{key:0,name:(r=f(c).copyButton)==null?void 0:r.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),_(u,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const D=h(R,[["__scopeId","data-v-d1891d80"]]),E={key:0,class:"filename"},J=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(a,t)=>{const c=D;return s(),p("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),p("span",E,z(e.filename),1)):M("",!0),N(a.$slots,"default",{},void 0,!0),v(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const j=h(J,[["__scopeId","data-v-1e125056"]]);export{j as default};
