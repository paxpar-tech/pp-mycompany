import{I as m,a1 as S,L as a,d as _,am as b,b as $,c as I,n as w,p as P,i as C,e as x,k as u,af as E,r as D,a2 as r}from"./entry.73f850e2.js";import j from"./ComponentPlaygroundData.93ba7a1a.js";import"./TabsHeader.5608ca5f.js";import"./ComponentPlaygroundProps.dde65e5b.js";import"./ProseH4.50444ae8.js";import"./ProseCodeInline.daf9ab5e.js";import"./Badge.1d42289f.js";import"./slot.313e88ad.js";import"./node.676c5e99.js";import"./ProseP.1be5e675.js";import"./index.8c8642e7.js";import"./ComponentPlaygroundSlots.vue.9d4f11ed.js";import"./ComponentPlaygroundTokens.vue.556f2c48.js";async function z(o){const e=m(o);{const{data:n}=await S(`nuxt-component-meta${e?`-${e}`:""}`,()=>$fetch(`/api/component-meta${e?`/${e}`:""}`));return a(()=>n.value)}}const B=o=>(P("data-v-94a679cf"),o=o(),C(),o),k=B(()=>x("div",{class:"ellipsis-item"},null,-1)),N=[k],V=_({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(o){const e=o,n=a(()=>((t=e)=>t.top)()),s=a(()=>((t=e)=>t.left)()),c=a(()=>((t=e)=>t.right)()),i=a(()=>((t=e)=>t.zIndex)()),f=a(()=>((t=e)=>t.width)()),g=a(()=>((t=e)=>t.height)()),y=a(()=>((t=e)=>`blur(${t.blur})`)()),h=a(()=>((t=e)=>{var l,p,d;return`linear-gradient(97.62deg, ${(l=t==null?void 0:t.colors)==null?void 0:l[0]} 2.27%, ${(p=t==null?void 0:t.colors)==null?void 0:p[1]} 50.88%, ${(d=t==null?void 0:t.colors)==null?void 0:d[2]} 98.48%)`})()),{$pinceau:v}=b(e,void 0,{_cCN_top:n,_eih_insetInlineStart:s,_IfB_insetInlineEnd:c,_SsE_zIndex:i,_wj8_maxWidth:f,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,l)=>($(),I("div",{class:w(["ellipsis",[m(v)]])},N,2))}});const q=u(V,[["__scopeId","data-v-94a679cf"]]),A=_({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const e=a(()=>E(o.component)),n=D({...o.props}),s=await z(o.component);return{as:e,formProps:n,componentData:s}},render(o){const e=Object.entries(this.$slots).reduce((n,[s,c])=>{if(s.startsWith("component-")){const i=s.replace("component-","");n[i]=c}return n},{});return r("div",{class:"component-playground"},[r("div",{class:"component-playground-wrapper"},[r(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),r(o.as,{...o.formProps,class:"component-playground-component"},{...e})]),r(j,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const X=u(A,[["__scopeId","data-v-1cd0b156"]]);export{X as default};
