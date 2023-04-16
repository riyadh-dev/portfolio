(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=i(n);fetch(n.href,l)}})();const Me={context:void 0,registry:void 0},Je=(e,t)=>e===t,Re=Symbol("solid-track"),ie={equals:Je};let Ae=Le;const U=1,se=2,Ee={owned:null,cleanups:null,context:null,owner:null};var C=null;let de=null,_=null,L=null,F=null,oe=0;function X(e,t){const i=_,s=C,n=e.length===0,l=n?Ee:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},o=n?e:()=>e(()=>O(()=>re(l)));C=l,_=null;try{return V(o,!0)}finally{_=i,C=s}}function P(e,t){t=t?Object.assign({},ie,t):ie;const i={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=n=>(typeof n=="function"&&(n=n(i.value)),Te(i,n));return[Ie.bind(i),s]}function E(e,t,i){const s=pe(e,t,!1,U);ee(s)}function he(e,t,i){Ae=ze;const s=pe(e,t,!1,U);(!i||!i.render)&&(s.user=!0),F?F.push(s):ee(s)}function Y(e,t,i){i=i?Object.assign({},ie,i):ie;const s=pe(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=i.equals||void 0,ee(s),Ie.bind(s)}function ue(e){return V(e,!1)}function O(e){if(_===null)return e();const t=_;_=null;try{return e()}finally{_=t}}function Z(e){he(()=>O(e))}function z(e){return C===null||(C.cleanups===null?C.cleanups=[e]:C.cleanups.push(e)),e}function Be(){return C}function Oe(e,t){const i=C,s=_;C=e,_=null;try{return V(t,!0)}catch(n){ve(n)}finally{C=i,_=s}}function He(e,t){const i=Symbol("context");return{id:i,Provider:Ve(i),defaultValue:e}}function Fe(e){let t;return(t=Pe(C,e.id))!==void 0?t:e.defaultValue}function We(e){const t=Y(e),i=Y(()=>fe(t()));return i.toArray=()=>{const s=i();return Array.isArray(s)?s:s!=null?[s]:[]},i}function Ie(){if(this.sources&&this.state)if(this.state===U)ee(this);else{const e=L;L=null,V(()=>le(this),!1),L=e}if(_){const e=this.observers?this.observers.length:0;_.sources?(_.sources.push(this),_.sourceSlots.push(e)):(_.sources=[this],_.sourceSlots=[e]),this.observers?(this.observers.push(_),this.observerSlots.push(_.sources.length-1)):(this.observers=[_],this.observerSlots=[_.sources.length-1])}return this.value}function Te(e,t,i){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&V(()=>{for(let n=0;n<e.observers.length;n+=1){const l=e.observers[n],o=de&&de.running;o&&de.disposed.has(l),(o?!l.tState:!l.state)&&(l.pure?L.push(l):F.push(l),l.observers&&Ne(l)),o||(l.state=U)}if(L.length>1e6)throw L=[],new Error},!1)),t}function ee(e){if(!e.fn)return;re(e);const t=C,i=_,s=oe;_=C=e,Ge(e,e.value,s),_=i,C=t}function Ge(e,t,i){let s;try{s=e.fn(t)}catch(n){return e.pure&&(e.state=U,e.owned&&e.owned.forEach(re),e.owned=null),e.updatedAt=i+1,ve(n)}(!e.updatedAt||e.updatedAt<=i)&&(e.updatedAt!=null&&"observers"in e?Te(e,s):e.value=s,e.updatedAt=i)}function pe(e,t,i,s=U,n){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:C,context:null,pure:i};return C===null||C!==Ee&&(C.owned?C.owned.push(l):C.owned=[l]),l}function ne(e){if(e.state===0)return;if(e.state===se)return le(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<oe);)e.state&&t.push(e);for(let i=t.length-1;i>=0;i--)if(e=t[i],e.state===U)ee(e);else if(e.state===se){const s=L;L=null,V(()=>le(e,t[0]),!1),L=s}}function V(e,t){if(L)return e();let i=!1;t||(L=[]),F?i=!0:F=[],oe++;try{const s=e();return Ue(i),s}catch(s){i||(F=null),L=null,ve(s)}}function Ue(e){if(L&&(Le(L),L=null),e)return;const t=F;F=null,t.length&&V(()=>Ae(t),!1)}function Le(e){for(let t=0;t<e.length;t++)ne(e[t])}function ze(e){let t,i=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[i++]=s:ne(s)}for(t=0;t<i;t++)ne(e[t])}function le(e,t){e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];if(s.sources){const n=s.state;n===U?s!==t&&(!s.updatedAt||s.updatedAt<oe)&&ne(s):n===se&&le(s,t)}}}function Ne(e){for(let t=0;t<e.observers.length;t+=1){const i=e.observers[t];i.state||(i.state=se,i.pure?L.push(i):F.push(i),i.observers&&Ne(i))}}function re(e){let t;if(e.sources)for(;e.sources.length;){const i=e.sources.pop(),s=e.sourceSlots.pop(),n=i.observers;if(n&&n.length){const l=n.pop(),o=i.observerSlots.pop();s<n.length&&(l.sourceSlots[o]=s,n[s]=l,i.observerSlots[s]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)re(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ve(e){throw e}function Pe(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Pe(e.owner,t):void 0}function fe(e){if(typeof e=="function"&&!e.length)return fe(e());if(Array.isArray(e)){const t=[];for(let i=0;i<e.length;i++){const s=fe(e[i]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Ve(e,t){return function(s){let n;return E(()=>n=O(()=>(C.context={[e]:s.value},We(()=>s.children))),void 0),n}}const qe=Symbol("fallback");function $e(e){for(let t=0;t<e.length;t++)e[t]()}function Qe(e,t,i={}){let s=[],n=[],l=[],o=0,a=t.length>1?[]:null;return z(()=>$e(l)),()=>{let c=e()||[],d,r;return c[Re],O(()=>{let f=c.length,u,b,h,p,$,y,x,w,I;if(f===0)o!==0&&($e(l),l=[],s=[],n=[],o=0,a&&(a=[])),i.fallback&&(s=[qe],n[0]=X(H=>(l[0]=H,i.fallback())),o=1);else if(o===0){for(n=new Array(f),r=0;r<f;r++)s[r]=c[r],n[r]=X(g);o=f}else{for(h=new Array(f),p=new Array(f),a&&($=new Array(f)),y=0,x=Math.min(o,f);y<x&&s[y]===c[y];y++);for(x=o-1,w=f-1;x>=y&&w>=y&&s[x]===c[w];x--,w--)h[w]=n[x],p[w]=l[x],a&&($[w]=a[x]);for(u=new Map,b=new Array(w+1),r=w;r>=y;r--)I=c[r],d=u.get(I),b[r]=d===void 0?-1:d,u.set(I,r);for(d=y;d<=x;d++)I=s[d],r=u.get(I),r!==void 0&&r!==-1?(h[r]=n[d],p[r]=l[d],a&&($[r]=a[d]),r=b[r],u.set(I,r)):l[d]();for(r=y;r<f;r++)r in h?(n[r]=h[r],l[r]=p[r],a&&(a[r]=$[r],a[r](r))):n[r]=X(g);n=n.slice(0,o=f),s=c.slice(0)}return n});function g(f){if(l[r]=f,a){const[u,b]=P(r);return a[r]=b,t(c[r],u)}return t(c[r])}}}function v(e,t){return O(()=>e(t||{}))}const Ke=e=>`Stale read from <${e}>.`;function N(e){const t="fallback"in e&&{fallback:()=>e.fallback};return Y(Qe(()=>e.each,e.children,t||void 0))}function ce(e){const t=e.keyed,i=Y(()=>e.when,void 0,{equals:(s,n)=>t?s===n:!s==!n});return Y(()=>{const s=i();if(s){const n=e.children;return typeof n=="function"&&n.length>0?O(()=>n(t?s:()=>{if(!O(i))throw Ke("Show");return e.when})):n}return e.fallback},void 0,void 0)}function Xe(e,t,i){let s=i.length,n=t.length,l=s,o=0,a=0,c=t[n-1].nextSibling,d=null;for(;o<n||a<l;){if(t[o]===i[a]){o++,a++;continue}for(;t[n-1]===i[l-1];)n--,l--;if(n===o){const r=l<s?a?i[a-1].nextSibling:i[l-a]:c;for(;a<l;)e.insertBefore(i[a++],r)}else if(l===a)for(;o<n;)(!d||!d.has(t[o]))&&t[o].remove(),o++;else if(t[o]===i[l-1]&&i[a]===t[n-1]){const r=t[--n].nextSibling;e.insertBefore(i[a++],t[o++].nextSibling),e.insertBefore(i[--l],r),t[n]=i[l]}else{if(!d){d=new Map;let g=a;for(;g<l;)d.set(i[g],g++)}const r=d.get(t[o]);if(r!=null)if(a<r&&r<l){let g=o,f=1,u;for(;++g<n&&g<l&&!((u=d.get(t[g]))==null||u!==r+f);)f++;if(f>r-a){const b=t[o];for(;a<r;)e.insertBefore(i[a++],b)}else e.replaceChild(i[a++],t[o++])}else o++;else t[o++].remove()}}}const _e="_$DX_DELEGATE";function Ye(e,t,i,s={}){let n;return X(l=>{n=l,t===document?e():m(t,e(),t.firstChild?null:void 0,i)},s.owner),()=>{n(),t.textContent=""}}function S(e,t,i){let s;const n=()=>{const o=document.createElement("template");return o.innerHTML=e,i?o.content.firstChild.firstChild:o.content.firstChild},l=t?()=>(s||(s=n())).cloneNode(!0):()=>O(()=>document.importNode(s||(s=n()),!0));return l.cloneNode=l,l}function te(e,t=window.document){const i=t[_e]||(t[_e]=new Set);for(let s=0,n=e.length;s<n;s++){const l=e[s];i.has(l)||(i.add(l),t.addEventListener(l,tt))}}function T(e,t,i){i==null?e.removeAttribute(t):e.setAttribute(t,i)}function K(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ze(e,t,i,s){if(s)Array.isArray(i)?(e[`$$${t}`]=i[0],e[`$$${t}Data`]=i[1]):e[`$$${t}`]=i;else if(Array.isArray(i)){const n=i[0];e.addEventListener(t,i[0]=l=>n.call(e,i[1],l))}else e.addEventListener(t,i)}function et(e,t,i){return O(()=>e(t,i))}function m(e,t,i,s){if(i!==void 0&&!s&&(s=[]),typeof t!="function")return ae(e,t,s,i);E(n=>ae(e,t(),n,i),s)}function tt(e){const t=`$$${e.type}`;let i=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==i&&Object.defineProperty(e,"target",{configurable:!0,value:i}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return i||document}});i;){const s=i[t];if(s&&!i.disabled){const n=i[`${t}Data`];if(n!==void 0?s.call(i,n,e):s.call(i,e),e.cancelBubble)return}i=i._$host||i.parentNode||i.host}}function ae(e,t,i,s,n){for(;typeof i=="function";)i=i();if(t===i)return i;const l=typeof t,o=s!==void 0;if(e=o&&i[0]&&i[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),o){let a=i[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),i=Q(e,i,s,a)}else i!==""&&typeof i=="string"?i=e.firstChild.data=t:i=e.textContent=t;else if(t==null||l==="boolean")i=Q(e,i,s);else{if(l==="function")return E(()=>{let a=t();for(;typeof a=="function";)a=a();i=ae(e,a,i,s)}),()=>i;if(Array.isArray(t)){const a=[],c=i&&Array.isArray(i);if(me(a,t,i,n))return E(()=>i=ae(e,a,i,s,!0)),()=>i;if(a.length===0){if(i=Q(e,i,s),o)return i}else c?i.length===0?Se(e,a,s):Xe(e,i,a):(i&&Q(e),Se(e,a));i=a}else if(t instanceof Node){if(Array.isArray(i)){if(o)return i=Q(e,i,s,t);Q(e,i,null,t)}else i==null||i===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);i=t}else console.warn("Unrecognized value. Skipped inserting",t)}return i}function me(e,t,i,s){let n=!1;for(let l=0,o=t.length;l<o;l++){let a=t[l],c=i&&i[l];if(a instanceof Node)e.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))n=me(e,a,c)||n;else if(typeof a=="function")if(s){for(;typeof a=="function";)a=a();n=me(e,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||n}else e.push(a),n=!0;else{const d=String(a);c&&c.nodeType===3?(c.data=d,e.push(c)):e.push(document.createTextNode(d))}}return n}function Se(e,t,i=null){for(let s=0,n=t.length;s<n;s++)e.insertBefore(t[s],i)}function Q(e,t,i,s){if(i===void 0)return e.textContent="";const n=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(n!==a){const c=a.parentNode===e;!l&&!o?c?e.replaceChild(n,a):e.insertBefore(n,i):c&&a.remove()}else l=!0}}else e.insertBefore(n,i);return[n]}const it="http://www.w3.org/2000/svg";function st(e,t=!1){return t?document.createElementNS(it,e):document.createElement(e)}function je(e){const{useShadow:t}=e,i=document.createTextNode(""),s=()=>e.mount||document.body,n=Be();let l,o=!!Me.context;return he(()=>{l||(l=Oe(n,()=>e.children));const a=s();if(a instanceof HTMLHeadElement){const[c,d]=P(!1),r=()=>d(!0);X(g=>m(a,()=>c()?g():l,null)),z(r)}else{const c=st(e.isSVG?"g":"div",e.isSVG),d=t&&c.attachShadow?c.attachShadow({mode:"open"}):c;Object.defineProperty(c,"_$host",{get(){return i.parentNode},configurable:!0}),m(d,l),a.appendChild(c),e.ref&&e.ref(c),z(()=>a.removeChild(c))}},void 0,{render:!o}),i}const ge={introduction:"Full Stack Web developer with a master’s degree in Computer Science. I have several years of experience in Web and Desktop development, focusing on frontend development (ReactJS) as well as back-End development (NodeJS). I am self-motivated person, fast learner and open to new challenges for the development of my skills.",projectsDone:"+ 10",gitHubCommits:"+ 600"};const nt=S('<section class="about section" id="about"><div class="container"><h2 class="section-title px-15">About Me</h2><div class="about-content"><p class="about-text"></p><div class="btn btn-default"><a href="./docs/baatchia-resume.pdf" download="baatchia-resume.pdf" target="_blank">DOWNLOAD RESUME</a></div></div><div class="row stats-items"><div class="stats-item px-15"><a href="#projects"><i class="fa-solid fa-circle-check"></i></a><div class="details"><h3></h3><p>Projects Done</p></div></div><div class="stats-item px-15"><i class="fa-solid fa-code-commit"></i><div class="details"><h3></h3><p>GitHub Commits'),lt=()=>(()=>{const e=nt(),t=e.firstChild,i=t.firstChild,s=i.nextSibling,n=s.firstChild,l=s.nextSibling,o=l.firstChild,a=o.firstChild,c=a.nextSibling,d=c.firstChild,r=o.nextSibling,g=r.firstChild,f=g.nextSibling,u=f.firstChild;return m(n,()=>ge.introduction),m(d,()=>ge.projectsDone),m(u,()=>ge.gitHubCommits),e})(),B={phoneNumber:"+213 657 73 50 82",email:"Baatchia_Riyadh@protonmail.com",github:"https://github.com/riyadh-dev",linkedin:"https://linkedin.com/in/baatchia-riyadh",twitter:"",whatsapp:""};const at=S('<section class="section contact" id="contact"><div class="container"><h2 class="section-title px-15">Contact Me</h2><div class="contact-container"><div class="contact-box px-15"><div class="contact-data"><div class="contact-info"><h3 class="contact-subtitle">Text Me</h3><a class="contact-description"><i class="fa-solid fa-phone"></i></a></div><div class="contact-info"><h3 class="contact-subtitle">Email Me</h3><a class="contact-description"><i class="fa-solid fa-envelope"></i></a></div></div></div><form class="contact-form px-15"><div class="contact-inputs"><div class="contact-content"><input type="email" name="email" class="contact-input"><label class="contact-label">Email</label><span></span></div><div class="contact-content"><input type="text" name="subject" class="contact-input"><label class="contact-label">Subject</label><span></span></div><div class="contact-content contact-area"><textarea name="body" cols="30" rows="10" class="contact-input"></textarea><label class="contact-label">Message</label><span></span></div></div><button type="submit" class="btn btn-default">Sent'),ot=()=>(()=>{const e=at(),t=e.firstChild,i=t.firstChild,s=i.nextSibling,n=s.firstChild,l=n.firstChild,o=l.firstChild,a=o.firstChild,c=a.nextSibling;c.firstChild;const d=o.nextSibling,r=d.firstChild,g=r.nextSibling;g.firstChild;const f=n.nextSibling;return m(c,()=>B.phoneNumber,null),m(g,()=>B.email,null),E(u=>{const b=`tel:${B.phoneNumber}`,h=`mailto:${B.email}`,p=`mailto:${B.email}`;return b!==u._v$&&T(c,"href",u._v$=b),h!==u._v$2&&T(g,"href",u._v$2=h),p!==u._v$3&&T(f,"action",u._v$3=p),u},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})(),ye=[{fontAwesomeIcon:"fa-solid fa-briefcase timeline-icon",period:"2020 - 2022",company:"Sirius Services - Abb Partner Algeria",jobTitle:"Software Developer",description:["Developed various scripts to automate a variety of repetitive task to increase productivity and efficiency.","Designed and develop internal software applications for addressing company problems and needs."]},{fontAwesomeIcon:"fa-solid fa-briefcase timeline-icon",period:"2019 - 2020",company:"Freelancing",jobTitle:"Software Developer",description:["Designed and developed some simple applications for local small business"]},{fontAwesomeIcon:"fa-solid fa-briefcase timeline-icon",period:"24/03/2018 – 05/04/2018",company:"Electricity And Gas Distribution Administration Algeria",jobTitle:"Internship",description:["Was responsible for daily backing up customers database.","Was giving a basic walk-through on the IT department daily operations."]},{fontAwesomeIcon:"fa-solid fa-user-graduate timeline-icon",period:"July 2019",company:"Institute Of Electrical And Electronics Engineering (Ex-INELEC) Algeria",jobTitle:"Degree",description:["Master’s in Computer Engineering.","Developed a Fullstack Web Application to facilitate the management of the Scientific Council of the institute."]},{fontAwesomeIcon:"fa-solid fa-user-graduate timeline-icon",period:"July 2017",company:"Institute Of Electrical And Electronics Engineering (Ex-INELEC) Algeria",jobTitle:"Degree",description:["License in Electrical and Electronics Engineering."]}];const rt=S('<section class="experience section" id="experience"><div class="container"><h2 class="section-title px-15">Experience</h2><div class="experience-container"><div class="experience-card"></div><div class="experience-card">'),xe=S('<div class="timeline-item"><i></i><h3 class="timeline-date"><i class="fa-solid fa-calendar-days"></i> </h3><h3 class="timeline-title"></h3><h4 class="timeline-subtitle"></h4><ul class="timeline-text">'),we=S("<li>"),ct=()=>(()=>{const e=rt(),t=e.firstChild,i=t.firstChild,s=i.nextSibling,n=s.firstChild,l=n.nextSibling;return m(n,v(N,{get each(){return ye.slice(0,3)},children:o=>(()=>{const a=xe(),c=a.firstChild,d=c.nextSibling;d.firstChild.nextSibling;const g=d.nextSibling,f=g.nextSibling,u=f.nextSibling;return m(d,()=>o.period,null),m(g,()=>o.company),m(f,()=>o.jobTitle),m(u,v(N,{get each(){return o.description},children:b=>(()=>{const h=we();return m(h,b),h})()})),E(()=>K(c,o.fontAwesomeIcon)),a})()})),m(l,v(N,{get each(){return ye.slice(3,6)},children:o=>(()=>{const a=xe(),c=a.firstChild,d=c.nextSibling;d.firstChild.nextSibling;const g=d.nextSibling,f=g.nextSibling,u=f.nextSibling;return m(d,()=>o.period,null),m(g,()=>o.company),m(f,()=>o.jobTitle),m(u,v(N,{get each(){return o.description},children:b=>(()=>{const h=we();return m(h,b),h})()})),E(()=>K(c,o.fontAwesomeIcon)),a})()})),e})();const dt=S('<div class="footer"><div class="container"><div class="footer-text px-15"><p>&copy;2023 Baatchia Riyadh.'),gt=()=>dt();const ut=S('<section class="home section" id="home"><div class="intro"><img src="./logo.png" alt="logo"><h1>RIYADH BAATCHIA</h1><span>FULL STACK WEB DEVELOPER</span><ul class="social-icons"><li><a rel="noreferrer" target="_blank"><i class="fa-brands fa-github"></i></a></li><li><a rel="noreferrer" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li><li><a rel="noreferrer" target="_blank"><i class="fa-brands fa-twitter"></i></a></li><li><a rel="noreferrer" target="_blank"><i class="fa-solid fa-envelope"></i></a></li><li><a rel="noreferrer" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li></ul><div class="btn btn-default"><a href="#contact">Contact me</a></div><div class="scroll-down"><h3>Scroll For More</h3><i class="fa-solid fa-angles-down">'),ft=()=>(()=>{const e=ut(),t=e.firstChild,i=t.firstChild,s=i.nextSibling,n=s.nextSibling,l=n.nextSibling,o=l.firstChild,a=o.firstChild,c=o.nextSibling,d=c.firstChild,r=c.nextSibling,g=r.firstChild,f=r.nextSibling,u=f.firstChild,b=f.nextSibling,h=b.firstChild;return E(p=>{const $=B.github,y=B.linkedin,x=B.twitter,w=`mailto:${B.email}`,I=`tel:${B.phoneNumber}`;return $!==p._v$&&T(a,"href",p._v$=$),y!==p._v$2&&T(d,"href",p._v$2=y),x!==p._v$3&&T(g,"href",p._v$3=x),w!==p._v$4&&T(u,"href",p._v$4=w),I!==p._v$5&&T(h,"href",p._v$5=I),p},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),e})();function mt(e,t){const i=s=>!e.contains(s.target)&&t()?.();document.body.addEventListener("click",i),z(()=>document.body.removeEventListener("click",i))}const G={fontSizes:["12px","14px","16px","18px"],colorHues:["252","127","352","49","229"],backgrounds:[{text:"Light",values:["92%","17%","100%"]},{text:"Dim",values:["15%","95%","20%"]},{text:"Dark",values:["10%","95%","0%"]}]},De=He();function ht(e){const[t,i]=P(2),[s,n]=P(2),[l,o]=P(1);he(()=>{const c=document.querySelector("html")?.style;c&&(c.fontSize=G.fontSizes[t()],c.setProperty("--primary-color-hue",G.colorHues[s()]),c.setProperty("--light-color-lightness",G.backgrounds[l()].values[0]),c.setProperty("--dark-color-lightness",G.backgrounds[l()].values[1]),c.setProperty("--white-color-lightness",G.backgrounds[l()].values[2]))}),Z(()=>ue(()=>{i(parseInt(localStorage.getItem("fontSizeIdx")??"2",10)),n(parseInt(localStorage.getItem("colorHueIdx")??"2",10)),o(parseInt(localStorage.getItem("bgColorIdx")??"1",10))}));const a={fontSizeIdx:t,setFontSizeIdx:i,colorHueIdx:s,setColorHueIdx:n,bgColorIdx:l,setBgColorIdx:o};return v(De.Provider,{value:a,get children(){return e.children}})}function pt(){const e=Fe(De);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e}const vt=S('<div class="theme-panel-container" id="theme-panel-container"><div class="theme-panel"><h2>Customize The Theme</h2><p>Manage the font size, color and theme mode.</p><div class="theme-font-size"><h3>Font Size</h3><div class="theme-font-size-slider"><h6>Aa</h6><ul></ul><h3>Aa</h3></div></div><div class="theme-color"><h3>Color</h3><ul></ul></div><div class="theme-background"><h3>Theme Mode</h3><ul>'),Ce=S("<li>"),bt=S("<li><h4>"),$t=e=>{const{bgColorIdx:t,colorHueIdx:i,fontSizeIdx:s,setBgColorIdx:n,setColorHueIdx:l,setFontSizeIdx:o}=pt();Z(()=>document.body.style.overflow="hidden"),z(()=>{document.body.style.position="",document.body.style.overflow="auto"});const a=g=>{l(g()),localStorage.setItem("colorHueIdx",i().toString())},c=g=>{o(g()),localStorage.setItem("fontSizeIdx",s().toString())},d=g=>{n(g()),localStorage.setItem("bgColorIdx",t().toString())},r=mt;return(()=>{const g=vt(),f=g.firstChild,u=f.firstChild,b=u.nextSibling,h=b.nextSibling,p=h.firstChild,$=p.nextSibling,y=$.firstChild,x=y.nextSibling,w=h.nextSibling,I=w.firstChild,H=I.nextSibling,k=w.nextSibling,D=k.firstChild,M=D.nextSibling;return et(r,f,()=>e.closeThemePanel),m(x,v(N,{get each(){return G.fontSizes},children:(q,J)=>(()=>{const A=Ce();return A.$$click=c,A.$$clickData=J,E(j=>{const R=`font-size-${J()+1}`,W=J()===s();return R!==j._v$&&K(A,j._v$=R),W!==j._v$2&&A.classList.toggle("active",j._v$2=W),j},{_v$:void 0,_v$2:void 0}),A})()})),m(H,v(N,{get each(){return G.colorHues},children:(q,J)=>(()=>{const A=Ce();return A.$$click=a,A.$$clickData=J,E(j=>{const R=`color-${J()+1}`,W=J()===i();return R!==j._v$3&&K(A,j._v$3=R),W!==j._v$4&&A.classList.toggle("active",j._v$4=W),j},{_v$3:void 0,_v$4:void 0}),A})()})),m(M,v(N,{get each(){return G.backgrounds},children:({text:q},J)=>(()=>{const A=bt(),j=A.firstChild;return A.$$click=d,A.$$clickData=J,m(j,q),E(R=>{const W=`bg-${J()+1}`,be=J()===t();return W!==R._v$5&&K(A,R._v$5=W),be!==R._v$6&&A.classList.toggle("active",R._v$6=be),R},{_v$5:void 0,_v$6:void 0}),A})()})),g})()};te(["click"]);const _t=S('<header id="header" class="header"><nav class="nav container px-15"><div class="nav-logo"><h2>Riyadh</h2></div><div class="nav-menu"><ul class="nav-list"></ul><div class="nav-close" id="nav-close"><i class="fa-solid fa-xmark"></i></div></div><div class="nav-btn-group"><i class="fa-solid fa-palette" id="nav-theme-btn"></i><div class="nav-btn nav-toggle" id="nav-toggle"><i class="fa-solid fa-bars">'),St=S('<li class="nav-item"><a class="nav-link">'),yt=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Experience",href:"#experience"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}],xt=()=>{const[e,t]=P(!1),[i,s]=P(!1),[n,l]=P("#home"),o=()=>t(!1),a=()=>s(!1),c=()=>{const d=document.querySelectorAll("section[id]");for(const r of d)new IntersectionObserver(f=>{f[0].isIntersecting&&l(`#${r.id}`)},{threshold:.5}).observe(r)};return Z(()=>{c(),l(window.location.hash)}),(()=>{const d=_t(),r=d.firstChild,g=r.firstChild,f=g.nextSibling,u=f.firstChild,b=u.nextSibling,h=b.firstChild,p=f.nextSibling,$=p.firstChild,y=$.nextSibling,x=y.firstChild;return m(u,v(N,{each:yt,children:w=>(()=>{const I=St(),H=I.firstChild;return I.$$click=o,m(H,()=>w.name),E(k=>{const D=w.href,M=n()===w.href;return D!==k._v$&&T(H,"href",k._v$=D),M!==k._v$2&&H.classList.toggle("active-link",k._v$2=M),k},{_v$:void 0,_v$2:void 0}),I})()})),h.$$click=o,$.$$click=()=>s(!0),x.$$click=()=>t(!0),m(d,v(ce,{get when(){return i()},get children(){return v(je,{get children(){return v($t,{closeThemePanel:a})}})}}),null),E(()=>f.classList.toggle("show",!!e())),d})()};te(["click"]);const wt=S('<div class="loader">');function Ct(){const[e,t]=P(!1);let i;return Z(()=>{i=setTimeout(()=>{t(!0)},500)}),z(()=>clearTimeout(i)),v(ce,{get when(){return e()},get children(){return wt()}})}const kt=S('<div class="gallery-slider-container"><div class="close-button circular-Button"><i class="fa-solid fa-xmark"></i></div><div class="back-button circular-Button"><i class="fa-solid fa-arrow-left"></i></div><div class="forward-button circular-Button"><i class="fa-solid fa-arrow-right"></i></div><div class="gallery-slider-middle-section"><img loading="eager"></div><div class="gallery-slider-circles bottom-section">'),At=S("<span>"),Et=e=>{const[t,i]=P(0),[s,n]=P(!1),l=()=>{e.images.length-1<=t()||ue(()=>{i(t()+1),n(!1)})},o=()=>{t()!==0&&ue(()=>{i(t()-1),n(!1)})},a=c=>i(c());return Z(()=>{document.body.style.overflow="hidden"}),z(()=>{document.body.style.overflow="auto",document.body.style.position=""}),(()=>{const c=kt(),d=c.firstChild,r=d.nextSibling,g=r.nextSibling,f=g.nextSibling,u=f.firstChild,b=f.nextSibling;return d.$$click=()=>e.closeGallerySlider(),r.$$click=o,g.$$click=l,m(f,v(ce,{get when(){return!s()},get children(){return v(Ct,{})}}),u),u.addEventListener("load",()=>n(!0)),m(b,v(N,{get each(){return e.images},children:(h,p)=>(()=>{const $=At();return $.$$click=a,$.$$clickData=p,E(()=>$.classList.toggle("gallery-slider-circle-active",p()===t())),$})()})),E(h=>{const p=e.images[t()],$=`image ${t()}`,y=!!s(),x=!s();return p!==h._v$&&T(u,"src",h._v$=p),$!==h._v$2&&T(u,"alt",h._v$2=$),y!==h._v$3&&u.classList.toggle("show",h._v$3=y),x!==h._v$4&&u.classList.toggle("hide",h._v$4=x),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),c})()};te(["click"]);const It=[{name:"Social Media App",links:["https://social-media-app-production.up.railway.app","https://social-media-app-eoga.onrender.com/"],repo:"https://github.com/riyadh-dev/social-media-app",thumbnail:"./images/social-media-app/3.png",images:["./images/social-media-app/1.png","./images/social-media-app/2.png","./images/social-media-app/3.png","./images/social-media-app/4.png","./images/social-media-app/5.png","./images/social-media-app/6.png","./images/social-media-app/7.png","./images/social-media-app/8.png","./images/social-media-app/9.png","./images/social-media-app/10.png"],tags:["ReactJS","ExpressJS","MongoDB","MUI","WebSockets","Typescript","RecoilJS","React Router","React Query"]},{name:"Online Store",links:["https://e-commerce-app-self.vercel.app/"],repo:"https://github.com/riyadh-dev/e-commerce-app",thumbnail:"./images/e-commerce-app/1.png",images:["./images/e-commerce-app/1.png","./images/e-commerce-app/2.png","./images/e-commerce-app/3.png","./images/e-commerce-app/4.png","./images/e-commerce-app/5.png","./images/e-commerce-app/6.png","./images/e-commerce-app/7.png","./images/e-commerce-app/8.png","./images/e-commerce-app/9.png"],tags:["NextJS","TailwindCSS","Typescript","Stripe","RecoilJS"]},{name:"Instant Messaging App",links:["https://messaging-app.up.railway.app","https://messaging-app-2b7q.onrender.com"],repo:"https://github.com/riyadh-dev/messaging-app",thumbnail:"./images/messaging-app/4.png",images:["./images/messaging-app/1.png","./images/messaging-app/2.png","./images/messaging-app/3.png","./images/messaging-app/4.png","./images/messaging-app/5.png","./images/messaging-app/6.png"],tags:["ReactJS","ExpressJS","MongoDB","MUI","WebSockets","Typescript","RecoilJS","React Router","React Query"]},{name:"Dashboard (frontend only)",links:["https://dashboard-nextjs-weld.vercel.app/"],repo:"https://github.com/riyadh-dev/dashboard-nextjs",thumbnail:"./images/dashboard-nextjs/1.png",images:["./images/dashboard-nextjs/1.png","./images/dashboard-nextjs/2.png","./images/dashboard-nextjs/3.png","./images/dashboard-nextjs/4.png","./images/dashboard-nextjs/5.png","./images/dashboard-nextjs/6.png"],tags:["NextJS","Typescript","RecoilJS","TailwindCSS","Tremor"]},{name:"Airbnb Clone (work in progress...)",links:["https://airbnb-clone-rust-omega.vercel.app/"],repo:"https://github.com/riyadh-dev/airbnb-clone",thumbnail:"./images/airbnb-clone/7.png",images:["./images/airbnb-clone/1.png","./images/airbnb-clone/2.png","./images/airbnb-clone/3.png","./images/airbnb-clone/4.png","./images/airbnb-clone/5.png","./images/airbnb-clone/6.png","./images/airbnb-clone/7.png"],tags:["NextJS","Typescript","TailwindCSS","Next-auth","Jotai","Drizzle","Prisma"]},{name:"Scientific Consul Management System",links:["https://scms-client.netlify.app/"],repo:"https://github.com/riyadh-dev/scms-client",thumbnail:"./images/scms/5.png",images:["./images/scms/1.png","./images/scms/2.png","./images/scms/3.png","./images/scms/4.png","./images/scms/5.png","./images/scms/6.png","./images/scms/7.png","./images/scms/8.png","./images/scms/9.png","./images/scms/10.png","./images/scms/11.png","./images/scms/12.png","./images/scms/13.png"],tags:["ReactJS","ExpressJS","MongoDB","MUI","GraphQL"]},{name:"Card Matching Game",links:["https://riyadh-dev.github.io/memory-matching-game/","https://riyadh-dev-memory-matching-game.netlify.app/"],repo:"https://github.com/riyadh-dev/memory-matching-game",thumbnail:"./images/memory-matching-game/1.png",images:["./images/memory-matching-game/1.png"],tags:["ReactJS","PreactJS","Typescript","ViteJS","CSS"]},{name:"Portfolio Website (React JS)",links:["https://riyadh-dev.github.io/portfolio-website-react"],repo:"https://github.com/riyadh-dev/portfolio-website-react",thumbnail:"./images/portfolio-website-image/1.png",images:["./images/portfolio-website-image/1.png","./images/portfolio-website-image/2.png","./images/portfolio-website-image/3.png","./images/portfolio-website-image/4.png","./images/portfolio-website-image/5.png","./images/portfolio-website-image/6.png"],tags:["ReactJS","Typescript","PreactJS","ViteJS","CSS"]},{name:"Authentication Demo",links:["https://authentication-demo.up.railway.app/","https://authentication-demo-jqhr.onrender.com/"],repo:"https://github.com/riyadh-dev/authentication-demo",thumbnail:"./images/authentication-demo/2.png",images:["./images/authentication-demo/1.png","./images/authentication-demo/2.png","./images/authentication-demo/3.png","./images/authentication-demo/4.png","./images/authentication-demo/5.png"],tags:["ReactJS","Chakra UI","Typescript","ExpressJS","MongoDB","CSURF","HTTPOnly cookies"]},{name:"Portfolio Website (No Framework)",links:["https://riyadh-dev.github.io/portfolio-website"],repo:"https://github.com/riyadh-dev/portfolio-website",thumbnail:"./images/portfolio-website-image/3.png",images:["./images/portfolio-website-image/1.png","./images/portfolio-website-image/2.png","./images/portfolio-website-image/3.png","./images/portfolio-website-image/4.png","./images/portfolio-website-image/5.png","./images/portfolio-website-image/6.png"],tags:["HTML","Typescript","SASS","ParcelJS"]},{name:"IEC101 Master Sim",links:["https://github.com/riyadh-dev/iec101-master-sim/releases/download/v1.0.0/IEC101MasterSim.exe"],repo:"https://github.com/riyadh-dev/iec101-master-sim",thumbnail:"./images/iec101-master-sim/2.png",images:["./images/iec101-master-sim/1.png","./images/iec101-master-sim/2.png"],tags:[".NET","WPF","C#","XAML","IEC 60870-5-101"]}];const Tt=S('<section class="projects section" id="projects"><div class="container"><h2 class="section-title px-15">Projects</h2><div class="projects-container">'),Lt=S('<div><div class="project-card"><img class="project-img"><div class="project-card-hover"><h3 class="project-title"></h3><div class="project-buttons"><div class="project-buttons-group"><span class="circular-Button-no-hover"><i class="fa-solid fa-link"></i></span><div class="project-buttons-group-links"></div></div><a rel="noreferrer" target="_blank"><i class="fa-brands fa-github"></i></a><span class="circular-Button"><i class="fa-solid fa-images"></i></span></div></div></div><ul class="project-tags-container">'),Nt=S('<a rel="noreferrer" target="_blank">'),Pt=S('<li class="project-tag">'),jt=()=>{const[e,t]=P([]),[i,s]=P(!1),n=()=>s(!1),l=o=>()=>{t(o),s(!0)};return(()=>{const o=Tt(),a=o.firstChild,c=a.firstChild,d=c.nextSibling;return m(d,v(N,{each:It,children:r=>(()=>{const g=Lt(),f=g.firstChild,u=f.firstChild,b=u.nextSibling,h=b.firstChild,p=h.nextSibling,$=p.firstChild,y=$.firstChild,x=y.nextSibling,w=$.nextSibling,I=w.nextSibling,H=f.nextSibling;return m(h,()=>r.name),m(x,v(N,{get each(){return r.links},children:(k,D)=>(()=>{const M=Nt();return T(M,"href",k),m(M,()=>D()+1),M})()})),Ze(I,"click",l(r.images),!0),m(H,v(N,{get each(){return r.tags},children:k=>(()=>{const D=Pt();return m(D,k),D})()})),E(k=>{const D=r.thumbnail,M=r.name,q=r.repo;return D!==k._v$&&T(u,"src",k._v$=D),M!==k._v$2&&T(u,"alt",k._v$2=M),q!==k._v$3&&T(w,"href",k._v$3=q),k},{_v$:void 0,_v$2:void 0,_v$3:void 0}),g})()})),m(o,v(ce,{get when(){return i()},get children(){return v(je,{get children(){return v(Et,{get images(){return e()},closeGallerySlider:n})}})}}),null),o})()};te(["click"]);const ke=[{categoryName:"Web Frontend",fontAwesomeClasses:"fa-brands fa-firefox-browser skills-icon",skills:[{name:"React",image:"./images/logos/react.png"},{name:"NextJS",image:"./images/logos/next.png"},{name:"SolidJS",image:"./images/logos/solid.svg"},{name:"React-Query",image:"./images/logos/react-query.svg"},{name:"RecoilJS",image:"./images/logos/recoil.ico"},{name:"Jotai",image:"./images/logos/jotai.png"},{name:"Tailwind",image:"./images/logos/tailwind.svg"},{name:"MUI",image:"./images/logos/mui.svg"},{name:"Bootstrap",image:"./images/logos/bootstrap.png"},{name:"Chakra UI",image:"./images/logos/chakra-ui.png"},{name:"Typescript",image:"./images/logos/ts.png"},{name:"Javascript",image:"./images/logos/js.png"},{name:"CSS",image:"./images/logos/css.png"},{name:"SASS",image:"./images/logos/sass.png"},{name:"HTML",image:"./images/logos/html.png"}]},{categoryName:"Web Backend",fontAwesomeClasses:"fa-solid fa-server skills-icon",skills:[{name:"NodeJS",image:"./images/logos/node.png"},{name:"MongoDB",image:"./images/logos/mongodb.svg"},{name:"Postgres",image:"./images/logos/postgres.png"},{name:"ExpressJS",image:"./images/logos/express.png",dark:!0},{name:"GraphQL",image:"./images/logos/graphql.png"},{name:"WebSockets",image:"./images/logos/ws.png",dark:!0}]},{categoryName:"Desktop",fontAwesomeClasses:"fa-solid fa-display skills-icon",skills:[{name:"C#",image:"./images/logos/csharp.png"},{name:"XAML",image:"./images/logos/xaml.png"},{name:".NET",image:"./images/logos/dotnet.svg"},{name:"WPF",image:"./images/logos/dotnet.svg"},{name:"WinForms",image:"./images/logos/dotnet.svg"}]},{categoryName:"Other Skills",fontAwesomeClasses:"fa-solid fa-laptop-code skills-icon",skills:[{name:"ParcelJS",image:"./images/logos/parcel.png"},{name:"ViteJS",image:"./images/logos/vite.png"},{name:"Turborepo",image:"./images/logos/turborepo.svg"}]}];const Dt=S('<section class="skills section" id="skills"><div class="container"><h2 class="section-title px-15">Skills</h2><div class="skills-container"><div class="skills-tabs"></div><div class="skills-content"><div class="skills-group">'),Mt=S('<div class="skills-tab"><i></i><div><h1 class="skills-title">'),Jt=S('<div class="skill-container"><img><h3>'),Rt=()=>{const[e,t]=P(0);return(()=>{const i=Dt(),s=i.firstChild,n=s.firstChild,l=n.nextSibling,o=l.firstChild,a=o.nextSibling,c=a.firstChild;return m(o,v(N,{each:ke,children:(d,r)=>(()=>{const g=Mt(),f=g.firstChild,u=f.nextSibling,b=u.firstChild;return g.$$click=()=>t(r()),m(b,()=>d.categoryName),E(h=>{const p=r()===e(),$=d.fontAwesomeClasses;return p!==h._v$&&g.classList.toggle("skills-active",h._v$=p),$!==h._v$2&&K(f,h._v$2=$),h},{_v$:void 0,_v$2:void 0}),g})()})),m(c,v(N,{get each(){return ke[e()].skills},children:d=>(()=>{const r=Jt(),g=r.firstChild,f=g.nextSibling;return m(f,()=>d.name),E(u=>{const b=!!d.dark,h=d.image,p=d.name;return b!==u._v$3&&g.classList.toggle("skill-image-lighten",u._v$3=b),h!==u._v$4&&T(g,"src",u._v$4=h),p!==u._v$5&&T(g,"alt",u._v$5=p),u},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),r})()})),i})()};te(["click"]);const Bt=S('<main class="main-content">'),Ot=()=>[v(ht,{get children(){return v(xt,{})}}),(()=>{const e=Bt();return m(e,v(ft,{}),null),m(e,v(lt,{}),null),m(e,v(Rt,{}),null),m(e,v(ct,{}),null),m(e,v(jt,{}),null),m(e,v(ot,{}),null),m(e,v(gt,{}),null),e})()],Ht=document.getElementById("root");Ye(()=>v(Ot,{}),Ht);