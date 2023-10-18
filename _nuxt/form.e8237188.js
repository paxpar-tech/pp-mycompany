import{_ as M}from"./debug-panel.vue.c16a3622.js";import{d as V,r as l,o as j,b as i,c as d,e,t as J,I as o,g as O,w as U,D as W,f as c,W as m,X as b,Y as f}from"./entry.73f850e2.js";import{u as $}from"./useFeatureFlag.112e1939.js";const B=e("label",{for:"my-modal",class:"btn"},"Sign with CMD",-1),P=e("input",{type:"checkbox",id:"my-modal",class:"modal-toggle"},null,-1),T={class:"modal"},I={class:"modal-box"},R=e("h3",{class:"font-bold text-lg"},"Congratulations random Internet user!",-1),Y=e("p",{class:"py-4"}," You've been selected for a chance to get one year of subscription to use Wikipedia for free! ",-1),E=e("h2",{class:"card-title"},"Signature in progress",-1),L=e("progress",{class:"progress w-56"},null,-1),X=e("p",null,"CMD sign debug panel ....",-1),q=e("div",{class:"modal-action"},[e("label",{for:"my-modal",class:"btn"},"Yay!")],-1),z={class:"card card-compact w-96 bg-base-100 shadow-xl"},A={class:"card-body"},G=e("h2",{class:"card-title"},"Screenshot",-1),H=["src"],K={class:"card-actions justify-end"},Q={class:"card card-compact w-96 bg-base-100 shadow-xl"},Z={class:"card-body"},ee=e("h2",{class:"card-title"},"Websocket",-1),se=e("div",null,"ws journal ...",-1),te={class:"card-actions justify-end"},oe={key:0,class:"card card-compact w-96 bg-base-100 shadow-xl"},ne={class:"card-body"},ae=e("h2",{class:"card-title"},"Stage 1",-1),le=e("input",{type:"text",placeholder:"PDF file",class:"input input-bordered w-full max-w-xs"},null,-1),ie={key:1,class:"card card-compact w-96 bg-base-100 shadow-xl"},de={class:"card-body"},ce=e("h2",{class:"card-title"},"Stage 2",-1),re=e("ul",{id:"messages"},null,-1),ue="ws://localhost:8881/api/sign/provider/cmd/ws",ve=V({__name:"form",setup(pe){const h=l("disconnected");l(),l();const r=l(),u=l(""),p=l(""),g=l(""),v=l(),n=l(),{featureFlagPreview:ge,toggleFeatureFlagPreview:_e,featureFlagDebug:y,toggleFeatureFlagDebug:me}=$();j(()=>{console.log("mounted ...")});function w(){n.value=new WebSocket(ue),n.value.onmessage=S}function x(){var t;(t=n.value)==null||t.close(),n.value=void 0}function k(t){var s;(s=n.value)==null||s.send(t)}function S(t){const s=JSON.parse(t.data);"screenshot"in s&&(v.value=s.screenshot),"msg"in s&&console.log(`onMessage msg=${s.msg}`)}function C(t,s){var _;(_=n.value)==null||_.send(JSON.stringify({phone:t,pin:s}))}function D(t){var s;(s=n.value)==null||s.send(JSON.stringify({otp:t}))}function F(){var t;(t=n.value)==null||t.send(JSON.stringify({screenshot:""}))}function N(){var t;(t=n.value)==null||t.send(JSON.stringify({reset:""}))}return(t,s)=>{const _=M;return i(),d("div",null,[B,P,e("div",T,[e("div",I,[R,Y,e("div",{class:"card-body"},[E,L,e("div",{class:"card-actions justify-end"},[e("button",{onClick:N,class:"btn btn-primary"},"Stop")])]),e("p",null,"featureFlagDebug = "+J(o(y)),1),O(_,null,{default:U(()=>[X]),_:1}),q])]),e("div",z,[e("div",A,[G,e("div",null,[W(" screenshot ... "),e("img",{src:"data:image/jpeg;base64,"+o(v)},null,8,H)]),e("div",K,[o(n)?(i(),d("button",{key:0,onClick:F,class:"btn btn-primary"}," Screenshot ")):c("",!0)])])]),e("div",Q,[e("div",Z,[ee,se,m(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>f(r)?r.value=a:null),type:"text",placeholder:"Message to send",class:"input input-bordered w-full max-w-xs"},null,512),[[b,o(r)]]),e("div",te,[e("button",{onClick:s[1]||(s[1]=a=>k(o(r))),class:"btn btn-primary"}," Send "),o(n)?c("",!0):(i(),d("button",{key:0,onClick:w,class:"btn btn-primary"},"Connect")),o(n)?(i(),d("button",{key:1,onClick:x,class:"btn btn-primary"},"Disconnect")):c("",!0)])])]),(h.value="stage1_input")?(i(),d("div",oe,[e("div",ne,[ae,le,m(e("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>f(u)?u.value=a:null),type:"text",placeholder:"Telephone",class:"input input-bordered w-full max-w-xs"},null,512),[[b,o(u)]]),m(e("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>f(p)?p.value=a:null),type:"text",placeholder:"PIN",class:"input input-bordered w-full max-w-xs"},null,512),[[b,o(p)]]),o(n)?(i(),d("button",{key:0,onClick:s[4]||(s[4]=a=>C(o(u),o(p))),class:"btn btn-primary"}," stage 1 ")):c("",!0)])])):c("",!0),(h.value="stage2_input")?(i(),d("div",ie,[e("div",de,[ce,m(e("input",{"onUpdate:modelValue":s[5]||(s[5]=a=>f(g)?g.value=a:null),type:"text",placeholder:"on-time password",class:"input input-bordered w-full max-w-xs"},null,512),[[b,o(g)]]),o(n)?(i(),d("button",{key:0,onClick:s[6]||(s[6]=a=>D(o(g))),class:"btn btn-primary"}," stage 2 ")):c("",!0)])])):c("",!0),re])}}});export{ve as default};
