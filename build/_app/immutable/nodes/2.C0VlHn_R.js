var pe=a=>{throw TypeError(a)};var ue=(a,e,s)=>e.has(a)||pe("Cannot "+s);var R=(a,e,s)=>(ue(a,e,"read from private field"),s?s.call(a):e.get(a)),F=(a,e,s)=>e.has(a)?pe("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,s),Q=(a,e,s,t)=>(ue(a,e,"write to private field"),t?t.call(a,s):e.set(a,s),s);import{b as Ae,m as Ve,c as h,l as $,t as U,o as X,p as ze}from"../chunks/disclose-version.CpHYcuHM.js";import{i as ke}from"../chunks/legacy.YBtYyoAN.js";import{k as I,w as he,p as ee,j as Se,ak as Me,D as Le,q as Ue,i as He,s as ge,o as fe,F as Re,aw as we,ao as Ke,an as Te,au as Be,J as f,at as L,K as o,L as n,M as r,P as xe,ap as je,R as te,g as D,E as ye,ax as ae,G as _e,ay as ie,u as Ie,az as Pe,aA as De,av as Ne}from"../chunks/runtime.CXWaRmbf.js";import{s as T,a as We}from"../chunks/render.2zH2_bZD.js";import{s as _,a as w,h as le,v as y,b as ce,d as Oe}from"../chunks/viewport.DZgcx4Uq.js";import{r as E}from"../chunks/props.H79S9_EJ.js";function Ge(a,e,s,t,i,d){let l=I;I&&he();var c,p,v=null;I&&ee.nodeType===1&&(v=ee,he());var m=I?ee:a,x;Se(()=>{const u=e()||null;var b=u==="svg"?we:null;u!==c&&(x&&(u===null?Ke(x,()=>{x=null,p=null}):u===p?Te(x):Be(x)),u&&u!==p&&(x=Le(()=>{v=I?v:b?document.createElementNS(b,u):document.createElement(u),Ae(v,v);{I&&Ve(u)&&v.append(document.createComment(""));var g=I?Ue(v):v.appendChild(He());I&&(g===null?ge(!1):fe(g)),t(v,g)}Re.nodes_end=v,m.before(v)})),c=u,c&&(p=c))},Me),l&&(ge(!0),fe(m))}const qe=()=>performance.now(),B={tick:a=>requestAnimationFrame(a),now:()=>qe(),tasks:new Set};function $e(){const a=B.now();B.tasks.forEach(e=>{e.c(a)||(B.tasks.delete(e),e.f())}),B.tasks.size!==0&&B.tick($e)}function Fe(a){let e;return B.tasks.size===0&&B.tick($e),{promise:new Promise(s=>{B.tasks.add(e={c:a,f:s})}),abort(){B.tasks.delete(e)}}}var Ye=$('<svg><path fill="currentColor" d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71"></path></svg>');function Je(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=Ye();let i;f(()=>i=_(t,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}const se=(a,e=L,s=L,t=L,i=L,d=L)=>{var l=Ze(),c=o(l),p=o(c);n(c);var v=r(c,2),m=o(v),x=o(m,!0);n(m);var u=r(m,2),b=o(u,!0);n(u);var g=r(u,2),C=o(g,!0);n(g);var S=r(g,2),V=r(o(S));Je(V,{height:"24",width:"24",class:"-translate-y-px"}),n(S),n(v),n(l),w(l,H=>{var k;return(k=y)==null?void 0:k(H)}),f(()=>{ce(l,`flex flex-col rounded-xl border bg-white border-slate-200 ${e()??""} viewport relative z-10 after:-z-10 after:absolute after:inset-0 after:transition-shadow after:duration-[400ms] after:rounded-xl hover:after:shadow-xl after:ease-out`),Oe(p,"src",t()),T(x,s()),T(b,i()),T(C,d())}),le(p),h(a,l)};var Ze=U('<div><figure class="w-full aspect-square max-h-[350px] rounded-xl overflow-hidden"><img alt="blog thumbnail" height="150" width="150" loading="lazy" class="w-full h-full object-cover hover:scale-110 duration-300 transition-transform"></figure> <div class="flex-1 p-4 lg:p-6 flex flex-col"><span class="text-primary text-xs font-bold mb-1 uppercase"> </span> <h3 class="text-lg text-slate-700 font-bold mb-4"> </h3> <p class="font-nunito font-medium text-slate-600 mb-4"> </p> <a href="/" class="text-slate-600 py-2 flex items-center text-sm uppercase font-bold hover:text-primary mt-auto">Read more <!></a></div></div>'),Qe=U('<section class="py-20"><div class="container"><h2 class="section-title mb-20 indicator viewport">Blog & News</h2> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"><!> <!> <!></div></div></section>');function Xe(a){var e=Qe(),s=o(e),t=o(s);w(t,p=>{var v;return(v=y)==null?void 0:v(p)});var i=r(t,2),d=o(i);se(d,()=>"lg:delay[200ms]",()=>"DECEMBER 19, 2024",()=>"/images/blog-1.jpeg",()=>"Unlock Your Future in the UK_ All About the New Entrant Skill Visa",()=>"Start your UK career with the New Entrant Skill Visa—low barriers, great opportunities, tailored support.");var l=r(d,2);se(l,()=>"lg:delay-[400ms]",()=>"November 29, 2024",()=>"/images/blog-2.jpeg",()=>"Everything You Need to Know About the UK’s New Travel Authorization (ETA) for 2025",()=>"Starting January 2025, non-European travelers must apply for the UK ETA, a digital travel authorization streamlining UK entry processes.");var c=r(l,2);se(c,()=>"lg:delay-[600ms]",()=>"NOVEMBER 22, 2024",()=>"/images/blog-3.webp",()=>"Unlock Your Dream UK Trip: The Ultimate Tourist Visa Guide",()=>"Your guide to a smooth UK visa!"),n(i),n(s),n(e),h(a,e)}var et=$('<svg><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05c.02.01.03.03.04.04c1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5"></path></svg>');function tt(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=et();let i;f(()=>i=_(t,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var at=$('<svg><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>');function it(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=at();let i;f(()=>i=_(t,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var st=$('<svg><path fill="currentColor" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"></path></svg>');function rt(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=st();let i;f(()=>i=_(t,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}function be(a){return Object.prototype.toString.call(a)==="[object Date]"}function Z(a){return a}function ot(a){const e=a-1;return e*e*e+1}function ne(a,e){if(a===e||a!==a)return()=>a;const s=typeof a;if(s!==typeof e||Array.isArray(a)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(a)){const t=e.map((i,d)=>ne(a[d],i));return i=>t.map(d=>d(i))}if(s==="object"){if(!a||!e)throw new Error("Object cannot be null");if(be(a)&&be(e)){const d=a.getTime(),c=e.getTime()-d;return p=>new Date(d+p*c)}const t=Object.keys(e),i={};return t.forEach(d=>{i[d]=ne(a[d],e[d])}),d=>{const l={};return t.forEach(c=>{l[c]=i[c](d)}),l}}if(s==="number"){const t=e-a;return i=>a+i*t}throw new Error(`Cannot interpolate ${s} values`)}var N,O,J,G;const de=class de{constructor(e,s={}){F(this,N,xe(void 0));F(this,O,xe(void 0));F(this,J);F(this,G,null);R(this,N).v=R(this,O).v=e,Q(this,J,s)}static of(e,s){const t=new de(e(),s);return je(()=>{t.set(e())}),t}set(e,s){te(R(this,O),e);let t=R(this,G),i=!1,{delay:d=0,duration:l=400,easing:c=Z,interpolate:p=ne}={...R(this,J),...s};const v=B.now()+d;let m;return Q(this,G,Fe(x=>{if(x<v)return!0;if(!i){i=!0;const b=R(this,N).v;m=p(b,e),typeof l=="function"&&(l=l(b,e)),t==null||t.abort()}const u=x-v;return u>l?(te(R(this,N),e),!1):(te(R(this,N),m(c(u/l))),!0)})),R(this,G).promise}get current(){return D(R(this,N))}get target(){return D(R(this,O))}set target(e){this.set(e)}};N=new WeakMap,O=new WeakMap,J=new WeakMap,G=new WeakMap;let W=de;var nt=U('<section class="pt-16 lg:pt-0 lg:pb-16"><div class="container relative"><div class="w-full max-w-[968px] z-10 lg:absolute top-0 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex"><div class="h-[120px] lg:h-[150px] flex pl-10 pr-4 items-center gap-6 bg-primary flex-1 scale-0 data-[visible]:scale-100 transition-transform duration-[900ms] ease-out shadow-xl"><div class="p-3.5 bg-white text-primary"><!></div> <div><h3 class="font-nunito text-xl font-bold text-white">Clients</h3> <p class="text-white font-nunito font-extrabold text-3xl lg:text-4xl"> </p></div></div> <div class="h-[120px] lg:h-[150px] flex pl-10 pr-4 items-center gap-6 bg-slate-200 flex-1 scale-0 data-[visible]:scale-100 duration-[900ms] delay-[200ms] transition-transform ease-out shadow-xl"><div class="p-3.5 bg-primary text-white"><!></div> <div><h3 class="font-nunito text-xl font-bold text-primary">Positive Reviews</h3> <p class="font-nunito font-extrabold text-3xl lg:text-4xl text-slate-800"> </p></div></div> <div class="h-[120px] lg:h-[150px] flex pl-10 pr-4 items-center gap-6 bg-primary flex-1 scale-0 data-[visible]:scale-100 duration-[900ms] delay-[400ms] transition-transform ease-out shadow-xl"><div class="p-3.5 bg-white text-primary"><!></div> <div><h3 class="font-nunito text-xl font-bold text-white">Sucess Rate</h3> <p class="text-white font-nunito font-extrabold text-3xl lg:text-4xl"> </p></div></div></div></div></section>');function lt(a,e){ye(e,!1);const s=ae(new W(0,{duration:2500,easing:Z})),t=ae(new W(0,{duration:2500,delay:300,easing:Z})),i=ae(new W(0,{duration:2500,delay:600,easing:Z}));ke();var d=nt(),l=o(d),c=o(l),p=o(c),v=o(p),m=o(v);tt(m,{height:"32",width:"32"}),n(v);var x=r(v,2),u=r(o(x),2),b=o(u);f(()=>T(b,`${Math.floor(D(s).current)??""}+`)),n(u),n(x),n(p),w(p,q=>{var j;return(j=y)==null?void 0:j(q)});var g=r(p,2),C=o(g),S=o(C);it(S,{height:"32",width:"32"}),n(C);var V=r(C,2),H=r(o(V),2),k=o(H);f(()=>T(k,`${Math.floor(D(t).current)??""}+`)),n(H),n(V),n(g),w(g,q=>{var j;return(j=y)==null?void 0:j(q)});var A=r(g,2),M=o(A),z=o(M);rt(z,{height:"32",width:"32"}),n(M);var ve=r(M,2),me=r(o(ve),2),Ce=o(me);f(()=>T(Ce,`${Math.floor(D(i).current)??""}%`)),n(me),n(ve),n(A),w(A,q=>{var j;return(j=y)==null?void 0:j(q)}),n(c),n(l),n(d),X("enterViewport",p,()=>ie(s,D(s).target=60)),X("enterViewport",g,()=>ie(t,D(t).target=60)),X("enterViewport",A,()=>ie(i,D(i).target=100)),h(a,d),_e()}var ct=U(`<section><div class="camera_wrap overflow-hidden relative h-[calc(100vh+150px)]" id="camera-slide"><div data-src="/images/hero-pattern.svg"><img src="/images/hero-pattern.svg" alt="hero-pattern" class="sr-only"> <div class="w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8"><div class="mx-auto sm:max-w-md md:max-w-xl lg:max-w-2xl -mt-4 lg:mt-0 flex flex-col items-center justify-center text-center"><h2 class="font-nunito text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 lg:mb-5 motion-scale-in-[0] motion-opacity-in-[0%] motion-duration-[1500ms] motion-ease-out-cubic">100% Success Rate</h2> <p class="text-gray-200 px-2 text-sm sm:text-base font-nunito font-bold md:text-lg motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-ease-spring-smooth">OISC Approved Immigration Advisors – Specialised in Sponsor License &
            Work Permit Visa</p> <button class="bg-white text-primary lg:text-lg font-bold font-nunito px-6 py-3 lg:px-10 lg:py-4 rounded-full mt-10 hover:bg-sky-500 hover:text-white outline outline-1 outline-offset-4 outline-white transition-colors duration-300 motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-ease-spring-smooth">Get in touch</button></div></div></div> <div data-src="/images/hero-pattern.svg"><img src="/images/hero-pattern.svg" alt="hero-pattern" class="sr-only"> <div class="w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8"><div class="mx-auto sm:max-w-md md:max-w-xl lg:max-w-2xl -mt-4 lg:mt-0 flex flex-col items-center justify-center text-center"><h2 class="font-nunito text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-3 lg:mb-5 motion-scale-in-[0] motion-opacity-in-[0%] motion-duration-[1500ms] motion-ease-out-cubic">100% Success Rate</h2> <p class="text-gray-200 px-2 text-sm sm:text-base font-nunito font-bold md:text-lg motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-ease-spring-smooth">OISC Approved Immigration Advisors – Specialised in Sponsor License &
            Work Permit Visa</p> <button class="bg-white text-primary lg:text-lg font-bold font-nunito px-6 py-3 lg:px-10 lg:py-4 rounded-full mt-10 hover:bg-sky-500 hover:text-white outline outline-1 outline-offset-4 outline-white transition-colors duration-300 motion-translate-x-in-[0%] motion-translate-y-in-[43%] motion-opacity-in-[0%] motion-duration-[0.74s]/opacity motion-ease-spring-smooth">Get in touch</button></div></div></div></div></section>`);function dt(a,e){ye(e,!0);const s=new W(0,{duration:2e3,delay:500,easing:ot});Ie(()=>{jQuery(document).ready(function(i){i("#camera-slide").camera({height:"50%",minHeight:Math.min(window.innerHeight+150,1100)+"px",thumbnails:!1,hover:!0,fx:"random",time:3e3,transPeriod:1500,pagination:!1,loader:"none"})}),s.target=100});var t=ct();h(a,t),_e()}var vt=$('<svg><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4"></path></svg>');function mt(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=vt();let i;f(()=>i=_(t,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var pt=$('<svg><g fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884"></path><path d="m18 8.118l-8 4l-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"></path></g></svg>');function ut(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=pt();let i;f(()=>i=_(t,i,{viewBox:"0 0 20 20",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var ht=$('<svg><path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1m0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1"></path></svg>');function gt(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=ht();let i;f(()=>i=_(t,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var ft=$('<svg><path fill="currentColor" fill-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0" clip-rule="evenodd"></path></svg>');function Ee(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=ft();let i;f(()=>i=_(t,i,{viewBox:"0 0 20 20",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}const Y=(a,e=L)=>{var s=xt(),t=o(s);Ee(t,{class:"size-6 text-emerald-500 shrink-0"});var i=r(t);n(s),f(()=>T(i,` ${e()??""}`)),h(a,s)},re=(a,e=L,s=L,t)=>{let i=()=>t==null?void 0:t().Icon,d=()=>Pe(t==null?void 0:t(),["Icon"]);var l=bt(),c=o(l),p=o(c,!0);n(c);var v=r(c,2),m=o(v),x=o(m);i()(x,{height:"20",width:"20",class:"text-slate-400"}),n(m);var u=r(m,2);Ge(u,e,!1,(b,g)=>{let C;f(()=>C=_(b,C,{...d(),class:["w-full border-2 pl-12 pr-4 border-slate-200 rounded-lg focus:outline-none focus:border-primary bg-slate-100 transition-colors",e()==="input"?"h-14":"h-28 pt-3 resize-none"]},void 0,b.namespaceURI===we,b.nodeName.includes("-")))}),n(v),n(l),w(l,b=>{var g;return(g=y)==null?void 0:g(b)}),f(()=>{ce(l,`flex-1 viewport ${s()??""}`),T(p,d().label)}),h(a,l)};var xt=U('<li class="font-nunito font-bold flex gap-4"><!> </li>'),bt=U('<label><span class="inline-block font-nunito font-bold ml-2 mb-1 text-slate-600"> </span> <div class="relative"><span class="absolute top-0 left-0 h-14 w-14 grid place-items-center"><!></span> <!></div></label>'),wt=U('<section class="py-20"><div class="container"><div class="grid md:grid-cols-2 gap-20 lg:gap-14 mx-auto max-w-[1024px]"><div><h2 class="section-title text-left mb-12 lg:mb-20 scale-100 indicator indicator-left viewport">Why Choose Us</h2> <ul class="viewport text-slate-600 space-y-4 mb-10 lg:delay-200"><!> <!> <!> <!> <!></ul> <button class="bg-primary text-white px-8 py-3 delay-[400ms] font-medium rounded btn-ripple viewport">Get in touch</button></div> <form class="w-full max-w-xl"><h2 class="section-title text-left mb-12 lg:mb-20 indicator indicator-left viewport">Message us</h2> <div class="flex flex-col gap-6"><!> <!> <!> <button class="h-14 uppercase font-bold font-nunito rounded-md bg-primary text-white btn-ripple delay-[400ms] viewport" type="submit">Submit</button></div></form></div></div></section>');function yt(a){const e={name:{label:"Your Name",placeholder:"Your Name",type:"text",required:!0,Icon:mt},email:{label:"E-mail",placeholder:"Your E-mail",type:"email",required:!0,Icon:ut},message:{label:"Message",placeholder:"Leave a message",type:"text",required:!0,Icon:gt}};var s=wt(),t=o(s),i=o(t),d=o(i),l=o(d);w(l,M=>{var z;return(z=y)==null?void 0:z(M)});var c=r(l,2),p=o(c);Y(p,()=>"Immigration Services From Expert Agents");var v=r(p,2);Y(v,()=>"Experience");var m=r(v,2);Y(m,()=>"Affordable Prices");var x=r(m,2);Y(x,()=>"Customised service");var u=r(x,2);Y(u,()=>"Dependable"),n(c),w(c,M=>{var z;return(z=y)==null?void 0:z(M)});var b=r(c,2);w(b,M=>{var z;return(z=y)==null?void 0:z(M)}),n(d);var g=r(d,2),C=o(g);w(C,M=>{var z;return(z=y)==null?void 0:z(M)});var S=r(C,2),V=o(S);re(V,()=>"input",()=>"lg:delay-[100ms]",()=>e.name);var H=r(V,2);re(H,()=>"input",()=>"lg:delay-[200ms]",()=>e.email);var k=r(H,2);re(k,()=>"textarea",()=>"lg:delay-[300ms]",()=>e.message);var A=r(k,2);w(A,M=>{var z;return(z=y)==null?void 0:z(M)}),n(S),n(g),n(i),n(t),n(s),h(a,s)}var _t=$('<svg><path fill="currentColor" d="M12 6c-.41.62-.75 1.29-.96 2h1.92A7.2 7.2 0 0 0 12 6m-1.3.22C9.78 6.53 9 7.17 8.54 8H10c.18-.62.4-1.22.7-1.78m2.59 0c.3.56.53 1.16.71 1.78h1.46c-.46-.83-1.25-1.46-2.17-1.78M8.13 9c-.08.32-.13.65-.13 1s.05.68.13 1h1.69c-.04-.33-.07-.66-.07-1s.03-.67.07-1zm2.7 0c-.05.32-.08.66-.08 1s.03.67.08 1h2.34c.04-.33.08-.66.08-1s-.04-.68-.08-1zm3.35 0c.04.33.07.66.07 1s-.03.67-.07 1h1.69c.08-.32.13-.65.13-1s-.05-.68-.13-1zm-5.64 3c.46.83 1.24 1.46 2.16 1.78c-.3-.56-.52-1.15-.7-1.78zm2.5 0c.21.72.55 1.38.96 2c.42-.62.75-1.28.96-2zM14 12c-.18.63-.41 1.22-.71 1.78c.92-.32 1.71-.95 2.17-1.78zM6 2c-.53 0-1.04.21-1.41.59C4.21 2.96 4 3.47 4 4v16c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h8.8c-.51-.88-.8-1.91-.8-3H7v-2h7.34c.83-2.33 3.05-4 5.66-4V4c0-.53-.21-1.04-.59-1.41C19.04 2.21 18.53 2 18 2zm6 3c1.33 0 2.6.53 3.54 1.46C16.47 7.4 17 8.67 17 10s-.53 2.6-1.46 3.54C14.6 14.47 13.33 15 12 15s-2.6-.53-3.54-1.46A5.04 5.04 0 0 1 7 10c0-1.33.53-2.6 1.46-3.54C9.4 5.53 10.67 5 12 5m6.75 17.16l-2.75-3L17.16 18l1.59 1.59L22.34 16l1.16 1.41z"></path></svg>');function oe(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=_t();let i;f(()=>i=_(t,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var $t=$('<svg><path fill="currentColor" d="m20.99 17.99l-4.94-4.94l-2.12 2.12l4.94 4.94c.59.59 1.54.59 2.12 0s.58-1.54 0-2.12M17.65 10c1.93 0 3.5-1.57 3.5-3.5c0-.58-.16-1.12-.41-1.6l-2.7 2.7l-1.49-1.49l2.7-2.7c-.48-.25-1.02-.41-1.6-.41c-1.93 0-3.5 1.57-3.5 3.5c0 .41.08.8.21 1.16l-1.85 1.85l-1.78-1.78a.996.996 0 0 0 0-1.41l-.71-.71l2.12-2.12a3 3 0 0 0-4.24 0L5.08 6.32a.996.996 0 0 0 0 1.41l.71.71H3.25c-.19 0-.37.07-.5.21a.7.7 0 0 0 0 1l2.54 2.54a.7.7 0 0 0 1 0c.13-.13.21-.31.21-.5V9.15l.7.7c.39.39 1.02.39 1.41 0l1.78 1.78l-6.35 6.35a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0L16.48 9.79c.37.13.76.21 1.17.21"></path></svg>');function Et(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=$t();let i;f(()=>i=_(t,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var Ct=$('<svg><path fill="currentColor" d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8M13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3c0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57c0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6"></path></svg>');function At(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=Ct();let i;f(()=>i=_(t,i,{viewBox:"0 0 448 512",width:"1.06em",height:"1.2em",...s},void 0,!0)),h(a,t)}var Vt=$('<svg><path fill="currentColor" d="M4 0v19c0 .555-.445 1-1 1s-1-.445-1-1V7h1V5H0v14c0 1.645 1.355 3 3 3h10c-.2-.6-.313-1.3-.313-2H5.814c.114-.316.187-.647.187-1V2h16v11c.7.2 1.4.5 2 1V0zm4 4v4h12V4zm0 6v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm12 1c-3.324 0-6 2.676-6 6s2.676 6 6 6v-2c-2.276 0-4-1.724-4-4s1.724-4 4-4s4 1.724 4 4c0 .868-.247 1.67-.688 2.313L22 21l-.5 4.5L26 25l-1.25-1.25C25.581 22.706 26 21.377 26 20c0-3.324-2.676-6-6-6M8 16v2h5v-2z"></path></svg>');function zt(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=Vt();let i;f(()=>i=_(t,i,{viewBox:"0 0 26 26",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var kt=$('<svg><path fill="currentColor" fill-rule="evenodd" d="M6.267 3.455a3.07 3.07 0 0 0 1.745-.723a3.066 3.066 0 0 1 3.976 0a3.07 3.07 0 0 0 1.745.723a3.066 3.066 0 0 1 2.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 0 1 0 3.976a3.07 3.07 0 0 0-.723 1.745a3.066 3.066 0 0 1-2.812 2.812a3.07 3.07 0 0 0-1.745.723a3.066 3.066 0 0 1-3.976 0a3.07 3.07 0 0 0-1.745-.723a3.066 3.066 0 0 1-2.812-2.812a3.07 3.07 0 0 0-.723-1.745a3.066 3.066 0 0 1 0-3.976a3.07 3.07 0 0 0 .723-1.745a3.066 3.066 0 0 1 2.812-2.812m7.44 5.252a1 1 0 0 0-1.414-1.414L9 10.586L7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z" clip-rule="evenodd"></path></svg>');function St(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=kt();let i;f(()=>i=_(t,i,{viewBox:"0 0 20 20",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var Mt=$('<svg><path fill="currentColor" fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 0 0 1.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 0 0 0 2h.013a9 9 0 0 0 0 1H6a1 1 0 1 0 0 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 1 0-1.715-1.029c-.472.786-.96.979-1.264.979s-.792-.193-1.264-.979a4 4 0 0 1-.264-.521H10a1 1 0 1 0 0-2H8.017a7 7 0 0 1 0-1H10a1 1 0 1 0 0-2H8.472q.12-.279.264-.521" clip-rule="evenodd"></path></svg>');function Lt(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=Mt();let i;f(()=>i=_(t,i,{viewBox:"0 0 20 20",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var Ut=$('<svg><path fill="currentColor" d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 0 0-1.92 0"></path></svg>');function Ht(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=Ut();let i;f(()=>i=_(t,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var Rt=$('<svg><path fill="currentColor" d="M2 3h20c1.05 0 2 .95 2 2v14c0 1.05-.95 2-2 2H2c-1.05 0-2-.95-2-2V5c0-1.05.95-2 2-2m12 3v1h8V6zm0 2v1h8V8zm0 2v1h7v-1zm-6 3.91C6 13.91 2 15 2 17v1h12v-1c0-2-4-3.09-6-3.09M8 6a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>');function Kt(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=Rt();let i;f(()=>i=_(t,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var Tt=$('<svg><path fill="currentColor" d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8c-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6c3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9"></path></svg>');function Bt(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=Tt();let i;f(()=>i=_(t,i,{viewBox:"0 0 576 512",width:"1.36em",height:"1.2em",...s},void 0,!0)),h(a,t)}var jt=$('<svg><path fill="currentColor" d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"></path></svg>');function It(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=jt();let i;f(()=>i=_(t,i,{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}var Pt=$('<svg><path fill="currentColor" fill-rule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"></path></svg>');function Dt(a,e){const s=E(e,["$$slots","$$events","$$legacy"]);var t=Pt();let i;f(()=>i=_(t,i,{viewBox:"0 0 20 20",width:"1.2em",height:"1.2em",...s},void 0,!0)),h(a,t)}const K=(a,e=L,s=L,t=L,i=L)=>{var d=Nt(),l=o(d),c=o(l),p=o(c);e()(p,{height:"40",width:"40",class:"-rotate-45 size-8 lg:size-10"}),n(c);var v=r(c,2),m=o(v),x=o(m,!0);n(m);var u=r(m,2),b=o(u,!0);n(u),n(v),n(l),w(l,S=>{var V;return(V=y)==null?void 0:V(S)});var g=r(l,2),C=o(g);Dt(C,{height:"24",width:"24"}),n(g),n(d),f(()=>{ce(l,`bg-sky-100 px-4 sm:px-6 md:px-4 xl:px-6 pt-8 pb-8 flex flex-col items-center justify-center gap-8 rounded-lg relative viewport-scale ${t()??""}`),T(x,s()),T(b,i())}),h(a,d)};var Nt=U('<div class="relative group rounded-xl"><div><div class="p-3 lg:p-5 bg-primary text-white flex items-center justify-center rotate-45"><!></div> <div><h3 class="text-center text-xl font-bold text-slate-800 mb-2"> </h3> <p class="line-clamp-2 text-slate-600 font-nunito font-medium mb-2"> </p></div></div> <a href="/" class="px-4 py-3 bg-primary text-white absolute z-20 bottom-0 left-1/2 -translate-x-1/2 translate-y-[100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-1/2 transition-all duration-[500ms] ease-out"><!></a></div>'),Wt=U('<section class="pb-20"><div class="container"><h2 class="section-title mb-12 lg:mb-20 viewport indicator">Our Services</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></div></div></section>');function Ot(a){var e=Wt(),s=o(e),t=o(s);w(t,V=>{var H;return(H=y)==null?void 0:H(V)});var i=r(t,2),d=o(i);K(d,()=>oe,()=>"Visit Visa",()=>"lg:delay-[200ms]",()=>"The Visit Visa is designed for individuals who wish to visit the UK for tourism, leisure, business, or to meet family and friends. It allows you to stay in the UK for a limited period, typically up to six months, depending on the purpose of your visit.");var l=r(d,2);K(l,()=>Et,()=>"Skilled Worker Visa",()=>"lg:delay-[400ms]",()=>"The Skilled Worker Visa is part of the UK’s Points-Based Immigration System, designed to enable employers to hire skilled workers from overseas. This visa replaced the Tier 2 (General) Visa and is open to both EU and non-EU citizens.");var c=r(l,2);K(c,()=>Ht,()=>"Student Visa",()=>"lg:delay-[600ms]",()=>"We offer comprehensive services to helping aspiring students achieve their academic dreams by providing expert assistance in securing offers.");var p=r(c,2);K(p,()=>At,()=>"Graduate Visa",()=>"lg:delay-[200ms]",()=>"The UK Graduate visa allows international students to remain in the UK for a limited period after completing their studies. We provide specialist Home Office application support.");var v=r(p,2);K(v,()=>oe,()=>"Spouse Visa",()=>"lg:delay-[400ms]",()=>"The Spouse Visa allows British citizens and settled individuals (those with Indefinite Leave to Remain) in the UK to bring their foreign spouses.");var m=r(v,2);K(m,()=>oe,()=>"ADR Visa",()=>"lg:delay-[600ms]",()=>"The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.");var x=r(m,2);K(x,()=>zt,()=>"Renew Passport",()=>"lg:delay-[200ms]",()=>"The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family.");var u=r(x,2);K(u,()=>St,()=>"Indefinite Leave to Remain",()=>"lg:delay-[400ms]",()=>"The UK Graduate visa allows international students to remain in the UK for a limited period after completing their studies. We provide specialist Home Office application support.");var b=r(u,2);K(b,()=>Lt,()=>"EU Settlement Scheme",()=>"lg:delay-[600ms]",()=>"The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.");var g=r(b,2);K(g,()=>Kt,()=>"Sponsor License",()=>"lg:delay-[200ms]",()=>"The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.");var C=r(g,2);K(C,()=>Bt,()=>"Naturalisation",()=>"lg:delay-[400ms]",()=>"The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need.");var S=r(C,2);K(S,()=>It,()=>"Entrepreneur Extension Visa",()=>"lg:delay-[600ms]",()=>"The Adult Dependent Relative Visa is intended for non-EEA (European Economic Area) adult individuals who are dependent on a close family member settled in the UK. This visa allows eligible dependents to join their family members in the UK and receive the care and support they need."),n(i),n(s),n(e),h(a,e)}var Gt=U(`<section class="py-20 lg:py-28"><div class="container grid gap-10 lg:gap-20 lg:grid-cols-2"><div class="grid place-items-center"><div><h2 class="section-title lg:text-left mb-12 lg:mb-16 viewport-left indicator lg:indicator-left lg:after:-bottom-4 lg:before:-bottom-4">Welcome to <br> A2Z Immigration</h2> <div class="viewport-left"><p class="font-nunito font-medium md:text-lg text-slate-600 mb-6">A2Z Immigration Solution Limited has spent the last 5 years as region leader in UK Immigration Law. We have been a fully OISC regulated immigration firm for over 5 years now and have
            specialised in immigration matters.</p> <p class="font-nunito font-medium md:text-lg text-slate-600">Our expert team have more than 50 years of combined immigration expertise. We have proudly handled more than 30 immigration cases and our general success rate has been over 100% across all application types, so we are the go to experts for all matters regarding UK immigration laws, applications and procedures.</p></div></div></div> <div class="grid place-items-center viewport-right"><img src="/images/banner-1.svg" alt="hero banner" loading="lazy" class="w-full max-w-md"></div></div></section>`);function qt(a){var e=Gt(),s=o(e),t=o(s),i=o(t),d=o(i);w(d,v=>{var m;return(m=y)==null?void 0:m(v)});var l=r(d,2);w(l,v=>{var m;return(m=y)==null?void 0:m(v)}),n(i),n(t);var c=r(t,2),p=o(c);n(c),w(c,v=>{var m;return(m=y)==null?void 0:m(v)}),n(s),n(e),le(p),h(a,e)}const P=(a,e=L)=>{var s=Ft(),t=o(s);Ee(t,{class:"size-6 text-emerald-500 shrink-0"});var i=r(t);n(s),f(()=>T(i,` ${e()??""}`)),h(a,s)};var Ft=U('<li class="font-nunito font-bold flex gap-4"><!> </li>'),Yt=U('<section class="pt-4 pb-8 lg:py-24"><div class="container"><div class=" grid gap-14 lg:gap-20 lg:grid-cols-2 max-w-[1024px] mx-auto"><div><div><h2 class="section-title lg:text-left mb-12 lg:mb-20 scale-100 viewport indicator lg:indicator-left">What we do</h2> <ul class="viewport-scale text-slate-600 space-y-4 mb-10"><!> <!> <!> <!> <!> <!> <!> <!></ul> <button class="delay-[200ms] bg-primary text-white px-8 py-3 font-medium rounded btn-ripple viewport-scale">Get in touch</button></div></div> <div class="grid place-items-center delay-200 viewport-scale"><img src="/images/banner-2.svg" alt="hero banner" loading="lazy" height="923" width="1142" class="w-full max-w-md"></div></div></div></section>');function Jt(a){var e=Yt(),s=o(e),t=o(s),i=o(t),d=o(i),l=o(d);w(l,k=>{var A;return(A=y)==null?void 0:A(k)});var c=r(l,2),p=o(c);P(p,()=>"Skilled Worker Sponsorship Management Services");var v=r(p,2);P(v,()=>"Hand-holding support across all stages of applications");var m=r(v,2);P(m,()=>"Support to draft online application");var x=r(m,2);P(x,()=>"Support to collate appropriate supporting Documentation");var u=r(x,2);P(u,()=>"Providing template HR Compliance");var b=r(u,2);P(b,()=>"Auditing HR systems and Procedures");var g=r(b,2);P(g,()=>"Support towards Job Advertisement & Recruitment Process");var C=r(g,2);P(C,()=>"Provide training inmanaging and retaining license"),n(c),w(c,k=>{var A;return(A=y)==null?void 0:A(k)});var S=r(c,2);w(S,k=>{var A;return(A=y)==null?void 0:A(k)}),n(d),n(i);var V=r(i,2),H=o(V);n(V),w(V,k=>{var A;return(A=y)==null?void 0:A(k)}),n(t),n(s),n(e),le(H),h(a,e)}var Zt=ze('<link rel="stylesheet" href="/lib/camera.css"> <script src="/lib/jquery.js"><\/script> <script src="/lib/jquery.easing.1.3.js"><\/script> <script src="/lib/camera.js"><\/script> <link rel="preload" href="/images/hero-pattern.svg" as="image">',1),Qt=U('<main class="overflow-hidden"><!> <!> <!> <!> <!> <!> <!></main>');function oa(a){var e=Qt();We(v=>{var m=Zt();De.title="A2Z ImmiMigration",Ne(8),h(v,m)});var s=o(e);dt(s,{});var t=r(s,2);lt(t,{});var i=r(t,2);qt(i);var d=r(i,2);Ot(d);var l=r(d,2);Jt(l);var c=r(l,2);yt(c);var p=r(c,2);Xe(p),n(e),h(a,e)}export{oa as component};
