import{d as l,b as s,c as a,t,f as i,e as n}from"./entry.731e469e.js";const p={class:"h-full p-6 rounded-lg rounded-b-none border-2 border-b-0 relative overflow-hidden"},d={key:0,class:"bg-primary px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl"},c={class:"text-2xl tracking-widest title-font mb-1 font-medium"},m={class:"text-sm tracking-widest title-font mb-1 font-medium"},h={class:"text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-800 flex justify-center"},_={class:"text-lg ml-1 font-normal"},u=l({__name:"head",props:{plan:{},monthly:{type:Boolean}},setup(r){const o=r;return(e,b)=>(s(),a("div",p,[e.plan.chip!=="x"?(s(),a("span",d,t(e.plan.chip),1)):i("",!0),n("h2",c,t(e.plan.title),1),n("h2",m,t(e.plan.price_msg),1),n("h1",h,[n("span",null,t(o.monthly?e.plan.price_per_month:e.plan.price_per_year)+"€",1),n("span",_,"/"+t(o.monthly?"mois":"an"),1)])]))}});export{u as _};