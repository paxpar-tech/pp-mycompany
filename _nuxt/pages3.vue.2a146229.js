import{d as D,r as c,O as x,o as L,bG as R,b as f,c as m,e as u,W as z,g as v,F as S,a0 as Y,t as N,n as A,f as q,M as F}from"./entry.30b368c5.js";import{u as H}from"./useToast.46b32267.js";import{g as I}from"./index.4db78ffb.js";const P={class:"stack w-full"},W=["innerHTML"],X={key:0,class:"flex my-4 w-full"},j=["onClick"],O=20,J=1,K=1,Q=.1,ne=D({__name:"pages3",props:{href:{},transposeDef:{},transposeSpot:{},noControls:{type:Boolean}},setup(E){const h=E,k=H();var i;const y=c(),_=c(),C=c(),g=c({node:void 0,pages:[]}),d=c(!0),p=c(1);x(h,async(e,t)=>{}),x(d,async(e,t)=>{e?i.play():i.pause()}),x(p,async(e,t)=>{i.timeScale(e)}),L(async()=>{await b()});const b=async()=>{if(i===void 0&&(i=I.timeline({repeat:-1,repeatDelay:2})),h.href)try{var e=await $fetch(h.href,{parseResponse:t=>t});y.value=e,setTimeout(T)}catch{k.error(`Erreur lors de la récupération de l'animation ${h.href}`)}};function $(e){d.value?i.seek(`page${e}`):i.seek(`page${e+1}`)}const T=()=>{const e=_.value.querySelector("svg");e.setAttribute("width","100%"),e.setAttribute("height","100%");const t={node:e,pages:[]},a=e.children[0].children;Array.prototype.forEach.call(a,(o,r)=>{const s=e.createSVGRect();s.x=o.getAttribute("x"),s.y=o.getAttribute("y"),s.width=o.getAttribute("width"),s.height=o.getAttribute("height");const l={rect:s,viewBox:G(s),stages:[]};t.pages.push(l)});for(var n=1;n<=O;n++)e.querySelectorAll(`svg [ref='stage${n}']`).forEach((r,s)=>{t.pages.forEach((l,U)=>{const M=V(B(r),l.rect);if(r.getBBox(),l.rect,M){for(;l.stages.length<n;)l.stages.push({nodes:[]});l.stages[n-1].nodes.push(r)}})});g.value=t,C.value=e,t.pages.forEach((o,r)=>{i.to(g.value.node,{attr:{viewBox:o.viewBox},duration:J},`page${r+1}`),o.stages.forEach((s,l)=>{s.nodes.length>0&&i.from(s.nodes,{opacity:0,duration:K,stagger:Q})})}),i.restart()};function V(e,t){const a=e.x+e.width/2,n=e.y+e.height/2;return t.x<=a&&a<=t.x+t.width&&t.y<=n&&n<=t.y+t.height}function G(e){return`${Math.round(e.x)} ${Math.round(e.y)} ${Math.round(e.width)} ${Math.round(e.height)}`}function B(e){const t=e.getBBox();var a=e.ownerSVGElement,n=a.createSVGPoint();n.x=t.x,n.y=t.y;const o=n.matrixTransform(w(e,a));n.x=t.x+t.width,n.y=t.y+t.height;const r=n.matrixTransform(w(e,a));var s=a.createSVGRect();return s.x=o.x,s.y=o.y,s.width=r.x-o.x,s.height=r.y-o.y,s}function w(e,t){return t.getCTM().inverse().multiply(e.getCTM())}return(e,t)=>{const a=F,n=R("motion-fade");return f(),m(S,null,[u("div",P,[z(u("div",{ref_key:"container",ref:_,class:"object-contain w-full",innerHTML:y.value},null,8,W),[[n]])]),e.noControls!==!0?(f(),m("div",X,[u("button",{onClick:t[0]||(t[0]=o=>d.value=!d.value),class:"btn px-6 mx-4"},[v(a,{name:d.value?"mdi:pause":"mdi:play",size:"32"},null,8,["name"])]),(f(!0),m(S,null,Y(g.value.pages,(o,r)=>(f(),m("button",{onClick:s=>$(r+1),class:"btn px-2 m-1"},N(r+1),9,j))),256)),u("button",{onClick:b,class:"btn px-2 mx-4"},[v(a,{name:"oi:reload",size:"32"})]),u("button",{onClick:t[1]||(t[1]=o=>p.value=.5),class:A(["btn px-2 mx-1",p.value==.5?"":"btn-outline"])},[v(a,{name:"fluent:animal-turtle-16-filled",size:"32"})],2),u("button",{onClick:t[2]||(t[2]=o=>p.value=1),class:A(["btn px-2 mx-1",p.value==1?"":"btn-outline"])},[v(a,{name:"fluent:animal-rabbit-24-filled",size:"32"})],2)])):q("",!0)],64)}}});export{ne as _};
