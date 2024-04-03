import{a0 as L,h as v,g as C,j as S,o as A,c as E,n as P,l as O,s as b,a1 as $,a2 as D,a3 as N,a4 as j,a5 as k,a6 as M,a7 as B,a8 as F,a9 as H,aa as V,V as I,d as z,u as G,y as U,ab as q,ac as J,ad as K,ae as Q}from"./chunks/framework.4313453f.js";import{t as W}from"./chunks/theme.dba58d3f.js";async function X(t){try{return navigator.clipboard.writeText(t)}catch{const e=document.createElement("textarea"),n=document.activeElement;e.value=t,e.setAttribute("readonly",""),e.style.contain="strict",e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="12pt";const a=document.getSelection(),l=a?a.rangeCount>0&&a.getRangeAt(0):null;document.body.appendChild(e),e.select(),e.selectionStart=0,e.selectionEnd=t.length,document.execCommand("copy"),document.body.removeChild(e),a&&l&&(a.removeAllRanges(),a.addRange(l)),n&&n.focus()}}const Y=(t,e)=>{const n=t.__vccOpts||t;for(const[a,l]of e)n[a]=l;return n},Z=["data-message","data-label"],ee=["innerHTML"],f={position:"auto",target:"auto",message:"copied",label:null,classes:"copy-btn",preferSibling:"previous"},te={__name:"CopyButton",props:{position:{type:String,default:()=>f.position},target:{type:String,default:()=>f.target},message:{type:String,default:()=>f.message},label:{type:String,default:()=>f.label},classes:{type:String,default:()=>f.classes},content:{type:String,default:null}},setup(t){var e,n;const a=t,l=L(),o=v(null),s=v(null),h=v(!0),m=v(null),p=v(null),x=a.label?a.label:(n=(e=l.default)==null?void 0:e.call(l)[0])==null?void 0:n.children,_=C(()=>`<!-- Button not rendered: ${m.value} -->`),R=C(()=>a.message.replace("$CONTENT",p.value));S(()=>{var g,y;const r=((g=o.value.previousElementSibling)==null?void 0:g.tagName)==="CODE"?o.value.previousElementSibling:null,d=((y=o.value.nextElementSibling)==null?void 0:y.tagName)==="CODE"?o.value.nextElementSibling:null;if(!r&&!d&&!a.content){h.value=!1,m.value="No code element found and no content prop given";return}if(a.content){p.value=a.content;return}let u=a.position;if(a.target==="auto"?r&&d?(s.value=r,u==="auto"&&(u="end")):s.value=r||d:a.target==="previous"?(s.value=r,u==="auto"&&(u="end")):a.target==="next"&&(s.value=d,u==="auto"&&(u="start")),!s.value){m.value="Failed to select code node";return}let i="beforeend";u==="auto"?r?i="beforeend":d&&(i="afterbegin"):u==="start"?i="afterbegin":u==="end"&&(i="beforeend"),p.value=s.value.innerText,s.value.innerText="",s.value.insertAdjacentHTML("beforeend",`<span>${p.value}</span>`),s.value.insertAdjacentElement(i,o.value),o.value.classList.add(`copy-btn-${i}`)});async function w(){await X(p.value),o.value.classList.add("copied"),setTimeout(()=>{o.value.classList.remove("copied")},1e3)}return(g,y)=>h.value?(A(),E("span",{key:0,class:P(t.classes),ref_key:"btn",ref:o,onClick:w,"data-message":R.value,"data-label":O(x)},null,10,Z)):(A(),E("span",{key:1,innerHTML:_.value},null,8,ee))}},ae=Y(te,[["__scopeId","data-v-32f61984"]]);const ne={extends:W,enhanceApp({app:t}){t.component("C",ae)}};function T(t){if(t.extends){const e=T(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const c=T(ne),le=z({name:"VitePressApp",setup(){const{site:t}=G();return S(()=>{U(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),q(),J(),K(),c.setup&&c.setup(),()=>Q(c.Layout)}});async function oe(){const t=ue(),e=se();e.provide(D,t);const n=N(t.route);return e.provide(j,n),e.component("Content",k),e.component("ClientOnly",M),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),c.enhanceApp&&await c.enhanceApp({app:e,router:t,siteData:B}),{app:e,router:t,data:n}}function se(){return F(le)}function ue(){let t=b,e;return H(n=>{let a=V(n),l=null;return a&&(t&&(e=a),(t||e===a)&&(a=a.replace(/\.js$/,".lean.js")),l=I(()=>import(a),[])),b&&(t=!1),l},c.NotFound)}b&&oe().then(({app:t,router:e,data:n})=>{e.go().then(()=>{$(e.route,n.site),t.mount("#app")})});export{oe as createApp};
