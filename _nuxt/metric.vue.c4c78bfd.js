import{d as _,r as h,S as v,U as y,o as g,cg as p,b as i,c as r,e as s,g as V,f as k,D as B,t as n,an as M,I as P,M as w}from"./entry.841c6d2a.js";import{u as I}from"./usePaxparAPI.cd3eb86c.js";const R={class:"stat place-items-center"},S={key:0,class:"stat-figure text-secondary"},C={class:"stat-title"},E={class:"stat-value"},F={class:"stat-desc"},l=1e4,D=_({__name:"metric",props:{name:{default:"go_memstats_frees_total"},title:{default:""},desc:{default:""},icon:{},noRefresh:{type:Boolean,default:!1},fake:{type:Boolean,default:!1},domain:{},user:{},offset:{}},setup(d){const e=d,{useFetchPP:u}=I(),a=h(0),f=v(a,{duration:l,transition:y.easeInOutCubic});async function o(){if(e.fake)a.value=a.value+5+Math.floor(Math.random()*100);else{const{data:t}=await u(`/api/metric/${e.name}`,{query:{domain:e==null?void 0:e.domain,user:e==null?void 0:e.user,offset:e==null?void 0:e.offset}}),c=parseFloat(t.value);a.value=c}}return g(async()=>{await o(),e.noRefresh===!1&&p(async()=>{await o()},l)}),(t,c)=>{const m=w;return i(),r("div",{onClick:o,class:"stats shadow"},[s("div",R,[t.icon?(i(),r("div",S,[V(m,{name:"uil:github",size:"32"})])):k("",!0),s("div",C,[B(n(t.title),1),M(t.$slots,"default")]),s("div",E,n(Math.round(P(f)).toLocaleString()),1),s("div",F,n(t.desc),1)])])}}});export{D as _};
