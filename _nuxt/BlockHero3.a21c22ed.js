import f from"./Markdown.62fa4ade.js";import y from"./ButtonLink.af551b5c.js";import x from"./Terminal.3fd91843.js";import{d as g,b as s,c as r,g as o,w as c,e as l,f as n,J as i,D as _,t as m,an as h,cl as k}from"./entry.841c6d2a.js";import"./ContentSlot.b982af66.js";import"./MDCSlot.f1c26971.js";import"./node.676c5e99.js";import"./slot.745aad16.js";import"./index.a98d89b9.js";const w={class:"py-20 sm:py-24 lg:py-32"},$={class:"lg:col-span-2"},B={key:0,class:"mb-2 text-center lg:text-left"},b={class:"u-text-gray-900 text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-left lg:text-6xl"},v={class:"u-text-gray-500 mt-4 max-w-3xl text-center text-lg lg:text-left"},q={key:1,class:"mt-6"},C={class:"mt-6 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-6 lg:justify-start"},N=["href"],L=g({__name:"BlockHero3",props:{cta:{type:Array,required:!1},secondary:{type:Array,required:!1},snippet:{type:String,required:!1},video:{type:Array,required:!1}},setup(t){return(e,V)=>{const a=f,u=y,p=x,d=k;return s(),r("section",w,[o(d,{padded:"",class:"grid gap-8 lg:grid-cols-3"},{default:c(()=>[l("div",$,[e.$slots.top?(s(),r("p",B,[o(a,{use:e.$slots.top,unwrap:"p"},null,8,["use"])])):n("",!0),l("h1",b,[o(a,{use:e.$slots.title,unwrap:"p"},null,8,["use"])]),l("p",v,[o(a,{use:e.$slots.description,unwrap:"p"},null,8,["use"])]),e.$slots.extra?(s(),r("div",q,[o(a,{use:e.$slots.extra,unwrap:"p"},null,8,["use"])])):n("",!0),l("div",C,[t.cta?(s(),i(u,{key:0,class:"!mb-0",bold:"",size:"large",href:t.cta[1]},{default:c(()=>[_(m(t.cta[0]),1)]),_:1},8,["href"])):n("",!0),t.secondary?(s(),r("a",{key:1,href:t.secondary[1],class:"u-text-gray-500 hover:u-text-gray-700 py-px font-medium"},m(t.secondary[0]),9,N)):n("",!0)])]),h(e.$slots,"right",{},()=>[t.snippet?(s(),i(p,{key:0,content:t.snippet},null,8,["content"])):n("",!0)])]),_:3})])}}});export{L as default};