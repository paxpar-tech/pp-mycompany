import{_ as k}from"./icon.vue.0517a238.js";import{d as L,r as P,o as I,L as S,b as l,c as i,F as f,$ as u,J as B,w as C,e as c,g as F,t as p,I as T,E as $,p as M,i as N,k as E}from"./entry.841c6d2a.js";import{u as H}from"./usePaxparAPI.cd3eb86c.js";import"./fetch.f389ef76.js";import"./url.6edfad5e.js";import"./useToast.097b5e9a.js";const U=o=>(M("data-v-6b2fe6cf"),o=o(),N(),o),V={id:"products",class:"item grid -mt-20 mx-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-16 bg-gallery drop-shadow-xl p-10 text-left"},j={class:"flex"},A=U(()=>c("div",{class:"grow"},null,-1)),D={class:"float-right"},J=["innerHTML"],O={class:"mt-5 mb-2 text-lg"},R={class:"font-light text-xs mb-2"},q=L({__name:"products",props:{filterType:{default:""},showUnpublished:{type:Boolean,default:!1},tags:{default:()=>[]},filterSearch:{default:""}},setup(o,{expose:m}){const r=o,{useFetchPP:h}=H(),d=P([]);var _;function g(){_()}I(async()=>{const{data:e,refresh:t}=await h("/api/ref/public");Object.assign(d.value,e.value),_=t});const x=S(()=>d.value.filter(e=>{var t;return e.name.toLowerCase().includes(r.filterSearch.toLowerCase())&&e.type==r.filterType&&(((t=e==null?void 0:e.gallery)==null?void 0:t.published)===!0||r.showUnpublished===!0)&&(r.tags.length===0||(e.tags||[]).some(a=>r.tags.includes(a)))}).sort((e,t)=>e.name<t.name?-1:1));function y(e){var a;const t=(a=e==null?void 0:e.gallery)==null?void 0:a.actions.filter(n=>n.name=="default");return t.length>0?t[0].url.replace("/craftform/","/craft/"):`/${e.type=="checklist"?"check":e.type}?id=${e.id}`}return m({refresh:g}),(e,t)=>{const a=k,n=$;return l(),i("section",V,[(l(!0),i(f,null,u(T(x),(s,b)=>(l(),B(n,{key:b,to:y(s),noPrefetch:"",class:"pp-anim1"},{default:C(()=>[c("div",j,[F(a,{def:s.image2||s.image},null,8,["def"]),A,c("div",D,[(l(!0),i(f,null,u(s.tags,(v,w)=>(l(),i("div",{key:w,class:"border-solid border-2 px-2 border-primary bg-primary text-white rounded-lg my-1",innerHTML:v},null,8,J))),128))])]),c("h3",O,p(s.name),1),c("p",R,p(s.desc),1)]),_:2},1032,["to"]))),128))])}}});const Y=E(q,[["__scopeId","data-v-6b2fe6cf"]]);export{Y as default};