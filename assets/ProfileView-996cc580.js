import{F as g,G as q,v as S,o as v,c as h,w as a,a as e,H as k,I as U,j as t,f as p,B as j,J as C,u as i,K as M,g as f,t as b,_ as P,b as R,d,x as V,y as x,z as m,A,i as B,D as y,k as F,E as D,L as E,M as $}from"./index-cf3c8f7a.js";import{a as G,_ as r}from"./FormField-ae5ec00c.js";import{_ as H}from"./FormFilePicker-9d08cb15.js";const Y={class:"space-y-3 text-center md:text-left lg:mx-12"},L={class:"flex justify-center md:block"},O={class:"text-2xl"},T=t("p",null,[p("Last login "),t("b",null,"12 mins ago"),p(" from "),t("b",null,"127.0.0.1")],-1),z={class:"flex justify-center md:block"},I={__name:"UserCard",setup(N){const u=g(),n=q(()=>u.userName),s=S(!1);return(_,c)=>(v(),h(f,null,{default:a(()=>[e(k,{type:"justify-around lg:justify-center"},{default:a(()=>[e(U,{class:"lg:mx-12"}),t("div",Y,[t("div",L,[e(G,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=w=>s.value=w),name:"notifications-switch",type:"switch",label:"Notifications","input-value":!0},null,8,["modelValue"])]),t("h1",O,[p(" Howdy, "),t("b",null,j(n.value),1),p("! ")]),T,t("div",z,[e(C,{label:"Verified",color:"info",icon:i(M)},null,8,["icon"])])])]),_:1})]),_:1}))}},J={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},X={__name:"ProfileView",setup(N){const u=g(),n=b({name:u.userName,email:u.userEmail}),s=b({password_current:"",password:"",password_confirmation:""}),_=()=>{u.setUser(n)},c=()=>{};return(w,o)=>(v(),h(P,null,{default:a(()=>[e(B,null,{default:a(()=>[e(R,{icon:i(y),title:"Profile",main:""},{default:a(()=>[e(d,{href:"https://github.com/justboil/admin-one-vue-tailwind",target:"_blank",icon:i(F),label:"Star on GitHub",color:"contrast","rounded-full":"",small:""},null,8,["icon"])]),_:1},8,["icon"]),e(I,{class:"mb-6"}),t("div",J,[e(f,{"is-form":"",onSubmit:V(_,["prevent"])},{footer:a(()=>[e(x,null,{default:a(()=>[e(d,{color:"info",type:"submit",label:"Submit"}),e(d,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Avatar",help:"Max 500kb"},{default:a(()=>[e(H,{label:"Upload"})]),_:1}),e(r,{label:"Name",help:"Required. Your name"},{default:a(()=>[e(m,{modelValue:n.name,"onUpdate:modelValue":o[0]||(o[0]=l=>n.name=l),icon:i(y),name:"username",required:"",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"E-mail",help:"Required. Your e-mail"},{default:a(()=>[e(m,{modelValue:n.email,"onUpdate:modelValue":o[1]||(o[1]=l=>n.email=l),icon:i(D),type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue","icon"])]),_:1})]),_:1}),e(f,{"is-form":"",onSubmit:V(c,["prevent"])},{footer:a(()=>[e(x,null,{default:a(()=>[e(d,{type:"submit",color:"info",label:"Submit"}),e(d,{color:"info",label:"Options",outline:""})]),_:1})]),default:a(()=>[e(r,{label:"Current password",help:"Required. Your current password"},{default:a(()=>[e(m,{modelValue:s.password_current,"onUpdate:modelValue":o[2]||(o[2]=l=>s.password_current=l),icon:i(E),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(A),e(r,{label:"New password",help:"Required. New password"},{default:a(()=>[e(m,{modelValue:s.password,"onUpdate:modelValue":o[3]||(o[3]=l=>s.password=l),icon:i($),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1}),e(r,{label:"Confirm password",help:"Required. New password one more time"},{default:a(()=>[e(m,{modelValue:s.password_confirmation,"onUpdate:modelValue":o[4]||(o[4]=l=>s.password_confirmation=l),icon:i($),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue","icon"])]),_:1})]),_:1})])]),_:1})]),_:1}))}};export{X as default};
