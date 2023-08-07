import{j as e,a as i,S as d,P as m,A as h,b as p,r as c,R as g,B as x}from"./vendor.af8b022a.js";const u=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerpolicy&&(t.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?t.credentials="include":l.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(l){if(l.ep)return;l.ep=!0;const t=n(l);fetch(l.href,t)}};u();const f=()=>{const a=[{icon:"mail",link:"https://mail.google.com/mail/?view=cm&to=jromeroacive@gmail.com"},{icon:"logo-github",link:"https://github.com/Jumicode"},{icon:"logo-linkedin",link:"https://www.linkedin.com/in/julio-romero-582143242/"},{icon:"logo-reddit",link:"https://www.reddit.com/user/Jumi18"}];return e("section",{id:"home",className:"min-h-screen mt-20 flex py-10 md:flex-row flex-col items-center",children:e("div",{className:"flex-1 mb-15",children:i("div",{className:"text-center",children:[i("h1",{className:"md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold",children:[i("span",{className:"text-cyan-600 md:text-6xl text-5xl",children:["Hello!",e("br",{})]}),"My Name is ",e("span",{children:"Julio Romero"})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:"Front end Developer"}),e("button",{className:"btn-primary mt-8",children:"Contact Me"}),e("div",{className:"mt-8 text-3xl flex items-center justify-center gap-5",children:a==null?void 0:a.map(r=>e("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",children:e("div",{className:"text-gray-600 hover:text-white cursor-pointer",children:e("ion-icon",{name:r.icon})})},r.icon))}),e("a",{href:"./src/assets/Code_a_program.pdf",download:!0,children:e("button",{className:"btn-primary mt-10 bg-cyan-600 p-5 rounded-xl",children:"Download CV"})})]})})})},y=()=>e("section",{id:"about",className:"py-10 text-white",children:i("div",{className:"text-center mt-8",children:[i("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My introduction"}),e("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:e("div",{className:"p-2",children:i("div",{className:"text-gray-300 my-3",children:[e("p",{className:"text-justify leading-7 w-11/12 mx-auto",children:"Computer engineering student, passionate about technology, fan of videogames, anime and music, interest in sports and astronomy, I love programming, I like to learn new technologies and ways to improve"}),e("br",{}),e("br",{})]})})})]})}),b=()=>{const a=[{logo:"logo-html5"},{logo:"logo-css3"},{logo:"logo-nodejs"},{logo:"logo-react"},{logo:"logo-sass"},{logo:"logo-github"}];return e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:i("div",{className:"mt-8 text-gray-100 text-center",children:[i("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"flex items-center justify-center mt-12 gap-10 flex-wrap",children:a==null?void 0:a.map((r,n)=>e("div",{className:"border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl",children:e("div",{style:{background:"conic-gradient(rgb(8,145,170)  "},className:"w-32 h-32 flex items-center justify-center rounded-full",children:e("div",{className:"text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600",children:e("ion-icon",{name:r.logo})})})},n))})]})})};var v="/assets/project-1.3a8241c3.png",N="/assets/project-2.9317652c.jpg",w="/assets/project-3.09712f5a.jpg";const k=()=>i("section",{id:"projects",className:"py-10 text-white",children:[i("div",{className:"text-center",children:[i("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Projects"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My awesome works"})]}),e("br",{}),e("div",{className:"flex max-w-6xl gap-6 px-5 mx-auto items-center relative",children:e("div",{className:"lg:w-2/3 w-full",children:e(d,{slidesPerview:1.2,spaceBetween:20,breakpoints:{768:{slidesPerView:2}},loop:!0,autoplay:{delay:3e3},pagination:{clickable:!0},modules:[m,h],children:[{img:v,name:"Currency Converter App",github_link:"https://github.com/Jumicode/Currency-Converter-Julio",live_link:"https://currencyconverterjulio.netlify.app"},{img:N,name:"Weather App",github_link:"https://github.com/Jumicode/Weather-App-Julio-Romero",live_link:"https://weatherappjulio.netlify.app"},{img:w,name:"Portfolio",github_link:"https://github.com/Jumicode/Julio-Portfolio"}].map((r,n)=>e(p,{children:i("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl",children:[e("img",{src:r.img,alt:"",className:"rounded-lg"}),e("h3",{className:"text-xl my-4",children:r.name}),i("div",{className:"flex gap-3",children:[e("a",{href:r.github_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Github"}),e("a",{href:r.live_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Live Demo"})]})]})},n))})})})]}),j=()=>e("div",{className:"bg-gray-800 text-sm p-4 text-center text-white",children:"Copyright \xA9 2023 Julio Romero.All Rights reserved."}),S=()=>{const[a,r]=c.exports.useState(!1),[n,s]=c.exports.useState(!1),l=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"SKILLS",link:"#skills"},{name:"PROJECTS",link:"#projects"}];return c.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?r(!0):r(!1)})},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] ${a?"bg-white/60  text-gray-900":"text-white"}`,children:i("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:i("h4",{className:"text-4xl uppercase font-bold",children:["Ju",e("span",{className:"text-cyan-600",children:"li"}),"o"]})}),e("div",{className:` ${a?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:e("ul",{className:"flex items-center gap-1 py-2 text-lg",children:l==null?void 0:l.map((t,o)=>e("li",{className:"px-6 hover:text-cyan-600",children:e("a",{href:t==null?void 0:t.link,children:t==null?void 0:t.name})},o))})}),e("div",{onClick:()=>s(!n),className:`z-[999]  ${n?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${n?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:l==null?void 0:l.map((t,o)=>e("li",{onClick:()=>s(!1),className:"px-6 hover:text-cyan-600",children:e("a",{href:t==null?void 0:t.link,children:t==null?void 0:t.name})},o))})})]})})},A=()=>i("div",{children:[e(S,{}),e(f,{}),e(y,{}),e(b,{}),e(k,{}),e(j,{})]});g.render(e(x,{children:e(A,{})}),document.getElementById("root"));
