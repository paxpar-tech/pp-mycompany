import{d as N,r as j,L as y,o as L,b as n,c as a,I as t,e as g,F as d,J as p,g as k,D as $,f as u,$ as b,M as z}from"./entry.73f850e2.js";import{_ as A}from"./CopyButton.vue.3a67ca8b.js";const B={key:0,class:"ml-3"},P={class:"flex"},T=["innerHTML"],C=["innerHTML"],_="32",H=N({__name:"datav",props:{node:{},show_root:{type:Boolean,default:!0},path:{default:""}},setup(v){const e=v,c=j(!1);function w(l){const s=[];for(let[o,r]of Object.entries(l))console.log(o,r),s.push({id:o,content:r,icon:"mdi:developer-board"});return s}const x=y(()=>{const l=[];console.log("props.node.props",e.node.props);const s=new Map(Object.entries(e.node.props||{}));return console.log("nodeProps",s),s.forEach((o,r)=>{console.log(r,o);const i=[];o!==null&&(Array.isArray(o)?console.log("the prop value is an array"):typeof o=="object"?(console.log("the prop value is an object"),i.push(...w(o))):console.log("the prop value is an unknown type, we assume it has no children to show !")),l.push({id:r,name:"N/A",icon:"mdi:developer-board",children:i})}),l}),m=y(()=>e.path===void 0||e.path.length==0?`${e.node.id}`:`${e.path}.${e.node.id}`),M=y(()=>(e.node.content||"").substring(0,40));return L(()=>{e.show_root||(c.value=!0)}),(l,s)=>{const o=z,r=A,i=H;return e.node?(n(),a("div",B,[e.show_root?(n(),a("div",{key:0,onClick:s[0]||(s[0]=h=>c.value=!t(c)),class:"flex justify-between"},[g("div",P,[(e.node.children||[]).length>0?(n(),a(d,{key:0},[t(c)?(n(),p(o,{key:0,name:"mdi:menu-right",rotate:"90deg",size:_})):(n(),p(o,{key:1,name:"mdi:menu-right",size:_}))],64)):(n(),p(o,{key:1,name:"mdi:menu-right-outline",style:{color:"rgba(0, 0, 0, 0)"},size:_})),k(o,{name:e.node.icon||"mdi:dev-to",inline:"",size:_},null,8,["name"]),g("span",{innerHTML:e.node.id,class:""},null,8,T),e.node.content?(n(),a(d,{key:2},[$(" =  "),k(r,{content:e.node.content},null,8,["content"]),g("span",{innerHTML:t(M),class:"bg-blue-400"},null,8,C)],64)):u("",!0),k(r,{content:t(m)},null,8,["content"])])])):u("",!0),t(c)?(n(),a(d,{key:1},[],64)):u("",!0),t(c)?(n(),a(d,{key:2},[(n(!0),a(d,null,b(t(x),(h,f)=>(n(),p(i,{key:f,node:h,show_root:!0,path:t(m)},null,8,["node","path"]))),128)),(n(!0),a(d,null,b(e.node.children,(h,f)=>(n(),p(i,{key:f,node:h,show_root:!0,path:t(m)},null,8,["node","path"]))),128))],64)):u("",!0)])):u("",!0)}}});export{H as _};
