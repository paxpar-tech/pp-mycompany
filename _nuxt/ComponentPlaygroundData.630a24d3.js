import b from"./TabsHeader.f44df11c.js";import g from"./ComponentPlaygroundProps.b857bf1d.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.ffd52717.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.38df9aca.js";import{a as k}from"./index.17c1087e.js";import{d as D,r as V,b as n,c as C,g as P,I as o,J as m,Y as T,f as s,k as I}from"./entry.e01930dd.js";import"./ProseH4.032a2b23.js";import"./ProseCodeInline.b5370de8.js";import"./Badge.9f97a41e.js";import"./slot.8b83d4af.js";import"./node.676c5e99.js";import"./ProseP.4aabc8b1.js";const B={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=k(t,"modelValue",p),e=V(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=c=>e.value=c;return(c,l)=>{const u=b,_=g,i=v,f=x;return n(),C("div",B,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":l[0]||(l[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const w=I(j,[["__scopeId","data-v-ff75821c"]]);export{w as default};