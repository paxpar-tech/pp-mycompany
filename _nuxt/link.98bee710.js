import{d as r,L as _,b as c,J as p,w as d,e as t,g as s,an as u,t as f,I as m,aA as h,M as v,k as x}from"./entry.2d2af821.js";const b={class:"m-2 w-36 text-center text-xs"},k={class:"w-full relative file"},w={class:"absolute inset-x-0 top-10"},y=r({__name:"link",props:{href:{},download_on_click:{type:Boolean,default:!0},name:{},strip_extension:{type:Boolean,default:!1},icon:{default:"cib:adobe-acrobat-reader"}},setup(l){const n=l,i=_(()=>{const e=(n.name||n.href).split("/").pop()||"";if(n.strip_extension===!0){let o=e.split(".");return o.pop(),o.join(".")}else return e});return(e,o)=>{const a=v;return c(),p(h(e.download_on_click?"a":"span"),{href:e.href,target:"_blank"},{default:d(()=>[t("div",b,[t("div",k,[s(a,{name:"ic:twotone-insert-drive-file",size:"96"}),t("div",w,[s(a,{name:e.icon,size:"32"},null,8,["name"])]),u(e.$slots,"default",{},void 0,!0)]),t("p",null,f(m(i)),1)])]),_:3},8,["href"])}}});const g=x(y,[["__scopeId","data-v-623a0aeb"]]);export{g as default};
