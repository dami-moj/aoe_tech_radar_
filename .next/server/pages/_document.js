"use strict";(()=>{var e={};e.id=660,e.ids=[660],e.modules={7418:(e,t,r)=>{let o=r(6513),i=o.basePath&&"/"!==o.basePath?o.basePath:"";e.exports={basePath:i,output:"export",trailingSlash:!0,reactStrictMode:!0}},2030:(e,t,r)=>{r.d(t,{Z:()=>a});let o=JSON.parse('{"basePath":"/techradar","baseUrl":"","editUrl":"https://github.dev/AOEpeople/techradar/blob/main/radar/{release}/{id}.md","logoFile":"logo.svg","jsFile":"","toggles":{"showChart":true,"showTagFilter":true,"showQuadrantList":true,"showEmptyRings":false},"sections":["radar","tags","list"],"colors":{"foreground":"#fcf2e6","background":"#113521","highlight":"#d4a373","content":"#fff","text":"#575757","link":"#bc6c25","border":"rgba(255, 255, 255, 0.1)","tag":"rgba(255, 255, 255, 0.1)"},"quadrants":[{"id":"languages-and-frameworks","title":"Languages & Frameworks","description":"A selection of programming languages, alongside essential frameworks for building a variety of custom software.","color":"#a3b18a"},{"id":"methods-and-patterns","title":"Methods & Patterns","description":"Key software development methods and design patterns, covering everything from continuous integration and testing to architecture.","color":"#588157"},{"id":"platforms-and-operations","title":"Platforms & Operations","description":"Technologies and tools for software and infrastructure operations, including platforms and services for managing and scaling applications.","color":"#3f633e"},{"id":"tools","title":"Tools","description":"A range of software tools, from simple productivity enhancers to comprehensive project solutions, catering to various project needs.","color":"#40713f"}],"rings":[{"id":"adopt","title":"Adopt","description":"","color":"#588157","radius":0.5,"strokeWidth":5},{"id":"trial","title":"Trial","description":"","color":"#457b9d","radius":0.69,"strokeWidth":3},{"id":"assess","title":"Assess","description":"","color":"#bc6c25","radius":0.85,"strokeWidth":2},{"id":"hold","title":"Hold","description":"","color":"#d62828","radius":1,"strokeWidth":0.75}],"flags":{"new":{"color":"#f1235a","title":"New","titleShort":"N","description":"New in this version"},"changed":{"color":"#40a7d1","title":"Changed","titleShort":"C","description":"Recently changed"},"default":{"description":"Unchanged"}},"chart":{"size":800,"blipSize":12},"social":[{"href":"https://twitter.com/aoepeople","icon":"x"},{"href":"https://www.linkedin.com/company/aoe","icon":"linkedIn"},{"href":"https://www.xing.com/company/aoe","icon":"xing"},{"href":"https://github.com/aoepeople","icon":"github"}],"imprint":"https://www.aoe.com/en/imprint.html","labels":{"title":"Technology Radar","imprint":"Legal Information","quadrant":"Quadrant","quadrantOverview":"Quadrant Overview","zoomIn":"Zoom in","filterByTag":"Filter by Tag","footer":"The technology radar is a project by AOE GmbH. Feel free to build your own radar based on the open source project.","notUpdated":"This item was not updated in last three versions of the Radar. Should it have appeared in one of the more recent editions, there is a good chance it remains pertinent. However, if the item dates back further, its relevance may have diminished and our current evaluation could vary. Regrettably, our capacity to consistently revisit items from past Radar editions is limited.","notFound":"404 - Page not found","pageAbout":"How to use AOE Technology Radar?","pageOverview":"Technologies Overview","pageSearch":"Search","searchPlaceholder":"What are you looking for?","metaDescription":""}}');var i=r(6513);let n={...o,...i};i.colors&&(n.colors={...o.colors,...i.colors}),i.labels&&(n.labels={...o.labels,...i.labels}),i.toggles&&(n.toggles={...o.toggles,...i.toggles});let a=n},9221:(e,t,r)=>{r.a(e,async(e,o)=>{try{r.d(t,{B4:()=>F,EC:()=>m,H1:()=>S,Hr:()=>Z,J7:()=>N,L6:()=>w,NJ:()=>T,OW:()=>f,OY:()=>u,PO:()=>h,TX:()=>v,VM:()=>O,VU:()=>y,Y6:()=>U,dv:()=>x,f6:()=>g,id:()=>l,ie:()=>j,kk:()=>q,mE:()=>c,pS:()=>k,r0:()=>b,rV:()=>P,uW:()=>p});var i=r(1684),n=r(2030),a=r(147),s=r(1071),d=e([a,s]);function l(e){return n.Z.labels[e]||""}function c(e){return n.Z.toggles[e]||!1}function u(){return n.Z.sections}function h(){return l("title")}function f(){return(0,s.p)(n.Z.logoFile)}function p(){return n.Z.jsFile?(0,s.p)(n.Z.jsFile):""}function g(){return n.Z.chart}function m(){return n.Z.colors}function w(){return n.Z.flags}function b(e){return n.Z.flags[e]}function v(){return n.Z.rings}function y(e){return v().find(t=>t.id===e)}function k(){return i.yN}function x(){return n.Z.social}function T(){return i.pJ}function Z(e){return n.Z.editUrl?(0,a.WU)(n.Z.editUrl,e):""}function j(){return n.Z.quadrants.map((e,t)=>({...e,position:t+1}))}function O(e){return j().find(t=>t.id===e)}function q(e,t){return i.ev.filter(r=>(!e||r.quadrant===e)&&!(t&&!r.featured))}function S(){return n.Z.imprint}function P(e){return i.ev.find(t=>t.id===e)}[a,s]=d.then?(await d)():d;let N=(e,t)=>Number(t.featured)-Number(e.featured)||e.title.localeCompare(t.title),U=e=>{let t=c("showEmptyRings");return v().reduce((r,o)=>{let i=e.filter(e=>e.ring===o.id);return(i.length||t)&&(r[o.id]=i),r},{})},F=e=>j().reduce((t,r)=>{let o=e.filter(e=>e.quadrant===r.id);return o.length&&(t[r.id]=o),t},{});o()}catch(e){o(e)}})},147:(e,t,r)=>{r.a(e,async(e,o)=>{try{r.d(t,{Ui:()=>s,WU:()=>a,vf:()=>d});var i=r(9221),n=e([i]);function a(e,t){return e.replace(/{(\w+)}/g,(e,r)=>t[r]||e)}function s(...e){return[...e,(0,i.PO)()].join(" | ")}function d(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}i=(n.then?(await n)():n)[0],o()}catch(e){o(e)}})},1071:(e,t,r)=>{r.a(e,async(e,o)=>{try{r.d(t,{cn:()=>d,p:()=>l});var i=r(6593),n=r(7418),a=r.n(n),s=e([i]);function d(...e){return(0,i.clsx)(e)}function l(e){return/^https?:/.test(e)||!a().basePath?e:(e.startsWith("/")||(e="/"+e),`${a().basePath}${e}`)}i=(s.then?(await s)():s)[0],o()}catch(e){o(e)}})},9297:(e,t,r)=>{r.a(e,async(e,o)=>{try{r.r(t),r.d(t,{default:()=>l});var i=r(997),n=r(6859),a=r(6689),s=r(9221),d=e([s]);function l(){let e=(0,a.useMemo)(()=>{let e={},t=(0,s.EC)();return Object.entries(t).forEach(([t,r])=>{e[`--${t}`]=r}),e},[]);return(0,i.jsxs)(n.Html,{lang:"en",style:e,children:[i.jsx(n.Head,{}),(0,i.jsxs)("body",{children:[i.jsx(n.Main,{}),i.jsx(n.NextScript,{})]})]})}s=(d.then?(await d)():d)[0],o()}catch(e){o(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},5315:e=>{e.exports=require("path")},6593:e=>{e.exports=import("clsx")},6513:e=>{e.exports=JSON.parse('{"basePath":"/techradar"}')},1684:e=>{e.exports=JSON.parse('{"yN":["2017-03-01","2024-03-01"],"pJ":["backend","coding","frontend","new"],"ev":[{"id":"demo-1","release":"2017-03-01","title":"Demo 1","ring":"assess","quadrant":"methods-and-patterns","body":"<p>This is a demo entry. It is used to show how a radar item is written in Markdown format. The meta header is used to define the attributes of the item. The content of the file is used as the description of the item.</p>\\n","featured":true,"flag":"default","tags":["coding"],"position":[687,256]},{"id":"demo-2","release":"2024-03-01","title":"Demo 2","ring":"adopt","quadrant":"platforms-and-operations","body":"<p>This is a revision of the 2nd demo item. It moved from trail to adopt.</p>\\n","featured":true,"flag":"changed","tags":["coding","backend"],"revisions":[{"release":"2017-03-01","ring":"trial","body":"<p>This is a demo entry. It is used to show how a radar item is written in Markdown format. The meta header is used to define the attributes of the item. The content of the file is used as the description of the item.</p>\\n"}],"position":[270,425]},{"id":"demo-3","release":"2017-03-01","title":"Demo 3","ring":"hold","quadrant":"tools","body":"<p>This is a demo entry. It is used to show how a radar item is written in Markdown format. The meta header is used to define the attributes of the item. The content of the file is used as the description of the item.</p>\\n","featured":true,"flag":"default","tags":["coding","frontend"],"position":[727,555]},{"id":"demo-4","release":"2024-03-01","title":"Demo 4","ring":"trial","quadrant":"languages-and-frameworks","body":"<p>This is a new demo entry. Items can <a href=\\"/techradar/methods-and-patterns/demo-1/\\">link</a> to other items and replaces the old links with a html extension to the new link structure, whereas a new <a href=\\"/techradar/methods-and-patterns/demo-1/\\">link</a> should be untouched.</p>\\n","featured":true,"flag":"new","tags":["new"],"position":[173,317]}]}')}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[395,859],()=>r(9297));module.exports=o})();