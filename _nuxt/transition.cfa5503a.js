import{d as f,r as i,b as o,c as r,e as t,g as u,w as c,f as b,T as h,F as p,$ as v,aN as g,t as y,p as k,i as C,k as w}from"./entry.73f850e2.js";const d=a=>(k("data-v-e9c06fe4"),a=a(),C(),a),x=d(()=>t("h1",null,"Debug transition X",-1)),B={key:0,src:"https://images.unsplash.com/photo-1689481172416-dae28c4a08b4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=warren-umoh-uCPhB996wW8-unsplash.jpg&w=640"},I=d(()=>t("hr",null,null,-1)),N=f({__name:"transition",setup(a){i(0);const l=i(!0),s=i(["Alice","Bob","Charly","David","Eve"]);function _(){s.value=s.value.sort((m,e)=>.5-Math.random())}return(m,e)=>(o(),r(p,null,[x,t("button",{onClick:e[0]||(e[0]=n=>l.value=!l.value),class:"btn btn-primary"},"toggle"),u(h,{name:"fade"},{default:c(()=>[l.value?(o(),r("img",B)):b("",!0)]),_:1}),I,t("button",{onClick:e[1]||(e[1]=n=>s.value.push("You")),class:"btn btn-primary"},"add"),t("button",{onClick:_,class:"btn btn-primary"},"shuffle"),u(g,{name:"list",tag:"ul"},{default:c(()=>[(o(!0),r(p,null,v(s.value,n=>(o(),r("li",{key:n},y(n),1))),128))]),_:1})],64))}});const D=w(N,[["__scopeId","data-v-e9c06fe4"]]);export{D as default};
