import{_ as d}from"./actor.vue.b6bbb3c0.js";import{d as l,r as _,L as h,O as v,o as g,b as m,c as f,a0 as y,e as i,g as b,t as B,n as k,I as x,F,cp as w}from"./entry.9a39bf12.js";import{t as z}from"./index.es.b37c1088.js";const A={class:"chat-image avatar"},C={class:"chat-bubble"},O=l({__name:"conversation",props:{conversation:{},animate:{type:Boolean,default:!1},right:{type:Boolean,default:!1},animate_period:{default:1}},setup(p){const s=p,r=_([]),u=h(()=>{const t=[];var e,o=s.right?"start":"end";for(var a of s.conversation){const n=Object.keys(a)[0];e!==n&&(o=o=="start"?"end":"start"),t.push({actor:n,msg:a[n],pos:o}),e=n}return t});function c(){s.animate===!0&&w(()=>{const t=[];for(const e of r.value)t.push([e,{opacity:0},{duration:0}]);for(const e of r.value)t.push([e,{opacity:1},{duration:s.animate_period,easing:"linear"}]);z(t)},100)}return v(()=>s.conversation,()=>{c()}),g(()=>{c()}),(t,e)=>{const o=d;return m(!0),f(F,null,y(x(u),(a,n)=>(m(),f("div",{ref_for:!0,ref_key:"itemRefs",ref:r},[i("div",{class:k(["chat",a.pos=="start"?"chat-start":"chat-end"])},[i("div",A,[b(o,{name:a.actor,hidename:"",size:"8"},null,8,["name"])]),i("div",C,B(a.msg),1)],2)],512))),256)}}});export{O as _};