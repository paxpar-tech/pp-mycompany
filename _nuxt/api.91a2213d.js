import{d,r as n,o as m,b as f,J as v,w as P,e as a,t as e,I as t,U as w}from"./entry.9a39bf12.js";import{u as b}from"./usePaxparAPI.949ddd1c.js";import"./url.6edfad5e.js";import"./useToast.c2d38294.js";import"./fetch.cb02518a.js";const h=a("h1",null,"DEBUG API",-1),y=a("p",null,"confFrontPublic :",-1),S=d({__name:"api",setup(x){const{backend:u,useFetchPP:s,confFrontPublic:c}=b(),o=n(),l=n(),i=n(),p=n(),r=n();return m(async()=>{o.value=await s("/api/version"),l.value=await s("/api/status"),i.value=await s("/api/alive"),p.value=await s("/api/ready"),r.value=await c()}),(k,B)=>{const _=w;return f(),v(_,null,{default:P(()=>[a("div",null,[h,a("p",null,"backend : "+e(t(u)),1),a("p",null,"/api/version : "+e(t(o)),1),a("p",null,"/api/alive : "+e(t(i)),1),a("p",null,"/api/ready : "+e(t(p)),1),a("p",null,"/api/status : "+e(t(l)),1),y,a("pre",null,e(t(r)),1)])]),_:1})}}});export{S as default};