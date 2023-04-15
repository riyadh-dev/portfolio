(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();const Ne={context:void 0,registry:void 0},je=(e,s)=>e===s,Me=Symbol("solid-track"),Y={equals:je};let xe=Ee;const W=1,Z=2,Ce={owned:null,cleanups:null,context:null,owner:null};var I=null;let oe=null,w=null,j=null,J=null,le=0;function Q(e,s){const t=w,i=I,n=e.length===0,l=n?Ce:{owned:null,cleanups:null,context:null,owner:s===void 0?i:s},o=n?e:()=>e(()=>H(()=>ae(l)));I=l,w=null;try{return V(o,!0)}finally{w=t,I=i}}function P(e,s){s=s?Object.assign({},Y,s):Y;const t={value:e,observers:null,observerSlots:null,comparator:s.equals||void 0},i=n=>(typeof n=="function"&&(n=n(t.value)),Ae(t,n));return[ke.bind(t),i]}function L(e,s,t){const i=me(e,s,!1,W);K(i)}function ge(e,s,t){xe=Je;const i=me(e,s,!1,W);(!t||!t.render)&&(i.user=!0),J?J.push(i):K(i)}function ce(e,s,t){t=t?Object.assign({},Y,t):Y;const i=me(e,s,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,K(i),ke.bind(i)}function H(e){if(w===null)return e();const s=w;w=null;try{return e()}finally{w=s}}function fe(e){ge(()=>H(e))}function q(e){return I===null||(I.cleanups===null?I.cleanups=[e]:I.cleanups.push(e)),e}function Pe(){return I}function Re(e,s){const t=I,i=w;I=e,w=null;try{return V(s,!0)}catch(n){ue(n)}finally{I=t,w=i}}function ke(){if(this.sources&&this.state)if(this.state===W)K(this);else{const e=j;j=null,V(()=>se(this),!1),j=e}if(w){const e=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(e)):(w.sources=[this],w.sourceSlots=[e]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Ae(e,s,t){let i=e.value;return(!e.comparator||!e.comparator(i,s))&&(e.value=s,e.observers&&e.observers.length&&V(()=>{for(let n=0;n<e.observers.length;n+=1){const l=e.observers[n],o=oe&&oe.running;o&&oe.disposed.has(l),(o?!l.tState:!l.state)&&(l.pure?j.push(l):J.push(l),l.observers&&Ie(l)),o||(l.state=W)}if(j.length>1e6)throw j=[],new Error},!1)),s}function K(e){if(!e.fn)return;ae(e);const s=I,t=w,i=le;w=I=e,De(e,e.value,i),w=t,I=s}function De(e,s,t){let i;try{i=e.fn(s)}catch(n){return e.pure&&(e.state=W,e.owned&&e.owned.forEach(ae),e.owned=null),e.updatedAt=t+1,ue(n)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Ae(e,i):e.value=i,e.updatedAt=t)}function me(e,s,t,i=W,n){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:s,owner:I,context:null,pure:t};return I===null||I!==Ce&&(I.owned?I.owned.push(l):I.owned=[l]),l}function ee(e){if(e.state===0)return;if(e.state===Z)return se(e);if(e.suspense&&H(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<le);)e.state&&s.push(e);for(let t=s.length-1;t>=0;t--)if(e=s[t],e.state===W)K(e);else if(e.state===Z){const i=j;j=null,V(()=>se(e,s[0]),!1),j=i}}function V(e,s){if(j)return e();let t=!1;s||(j=[]),J?t=!0:J=[],le++;try{const i=e();return Be(t),i}catch(i){t||(J=null),j=null,ue(i)}}function Be(e){if(j&&(Ee(j),j=null),e)return;const s=J;J=null,s.length&&V(()=>xe(s),!1)}function Ee(e){for(let s=0;s<e.length;s++)ee(e[s])}function Je(e){let s,t=0;for(s=0;s<e.length;s++){const i=e[s];i.user?e[t++]=i:ee(i)}for(s=0;s<t;s++)ee(e[s])}function se(e,s){e.state=0;for(let t=0;t<e.sources.length;t+=1){const i=e.sources[t];if(i.sources){const n=i.state;n===W?i!==s&&(!i.updatedAt||i.updatedAt<le)&&ee(i):n===Z&&se(i,s)}}}function Ie(e){for(let s=0;s<e.observers.length;s+=1){const t=e.observers[s];t.state||(t.state=Z,t.pure?j.push(t):J.push(t),t.observers&&Ie(t))}}function ae(e){let s;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),n=t.observers;if(n&&n.length){const l=n.pop(),o=t.observerSlots.pop();i<n.length&&(l.sourceSlots[o]=i,n[i]=l,t.observerSlots[i]=o)}}if(e.owned){for(s=e.owned.length-1;s>=0;s--)ae(e.owned[s]);e.owned=null}if(e.cleanups){for(s=e.cleanups.length-1;s>=0;s--)e.cleanups[s]();e.cleanups=null}e.state=0,e.context=null}function ue(e){throw e}const Oe=Symbol("fallback");function he(e){for(let s=0;s<e.length;s++)e[s]()}function Fe(e,s,t={}){let i=[],n=[],l=[],o=0,a=s.length>1?[]:null;return q(()=>he(l)),()=>{let c=e()||[],d,r;return c[Me],H(()=>{let g=c.length,f,v,h,p,_,$,x,y,E;if(g===0)o!==0&&(he(l),l=[],i=[],n=[],o=0,a&&(a=[])),t.fallback&&(i=[Oe],n[0]=Q(R=>(l[0]=R,t.fallback())),o=1);else if(o===0){for(n=new Array(g),r=0;r<g;r++)i[r]=c[r],n[r]=Q(m);o=g}else{for(h=new Array(g),p=new Array(g),a&&(_=new Array(g)),$=0,x=Math.min(o,g);$<x&&i[$]===c[$];$++);for(x=o-1,y=g-1;x>=$&&y>=$&&i[x]===c[y];x--,y--)h[y]=n[x],p[y]=l[x],a&&(_[y]=a[x]);for(f=new Map,v=new Array(y+1),r=y;r>=$;r--)E=c[r],d=f.get(E),v[r]=d===void 0?-1:d,f.set(E,r);for(d=$;d<=x;d++)E=i[d],r=f.get(E),r!==void 0&&r!==-1?(h[r]=n[d],p[r]=l[d],a&&(_[r]=a[d]),r=v[r],f.set(E,r)):l[d]();for(r=$;r<g;r++)r in h?(n[r]=h[r],l[r]=p[r],a&&(a[r]=_[r],a[r](r))):n[r]=Q(m);n=n.slice(0,o=g),i=c.slice(0)}return n});function m(g){if(l[r]=g,a){const[f,v]=P(r);return a[r]=v,s(c[r],f)}return s(c[r])}}}function b(e,s){return H(()=>e(s||{}))}const He=e=>`Stale read from <${e}>.`;function M(e){const s="fallback"in e&&{fallback:()=>e.fallback};return ce(Fe(()=>e.each,e.children,s||void 0))}function Te(e){const s=e.keyed,t=ce(()=>e.when,void 0,{equals:(i,n)=>s?i===n:!i==!n});return ce(()=>{const i=t();if(i){const n=e.children;return typeof n=="function"&&n.length>0?H(()=>n(s?i:()=>{if(!H(t))throw He("Show");return e.when})):n}return e.fallback},void 0,void 0)}function We(e,s,t){let i=t.length,n=s.length,l=i,o=0,a=0,c=s[n-1].nextSibling,d=null;for(;o<n||a<l;){if(s[o]===t[a]){o++,a++;continue}for(;s[n-1]===t[l-1];)n--,l--;if(n===o){const r=l<i?a?t[a-1].nextSibling:t[l-a]:c;for(;a<l;)e.insertBefore(t[a++],r)}else if(l===a)for(;o<n;)(!d||!d.has(s[o]))&&s[o].remove(),o++;else if(s[o]===t[l-1]&&t[a]===s[n-1]){const r=s[--n].nextSibling;e.insertBefore(t[a++],s[o++].nextSibling),e.insertBefore(t[--l],r),s[n]=t[l]}else{if(!d){d=new Map;let m=a;for(;m<l;)d.set(t[m],m++)}const r=d.get(s[o]);if(r!=null)if(a<r&&r<l){let m=o,g=1,f;for(;++m<n&&m<l&&!((f=d.get(s[m]))==null||f!==r+g);)g++;if(g>r-a){const v=s[o];for(;a<r;)e.insertBefore(t[a++],v)}else e.replaceChild(t[a++],s[o++])}else o++;else s[o++].remove()}}}const ve="_$DX_DELEGATE";function Ge(e,s,t,i={}){let n;return Q(l=>{n=l,s===document?e():u(s,e(),s.firstChild?null:void 0,t)},i.owner),()=>{n(),s.textContent=""}}function k(e,s,t){let i;const n=()=>{const o=document.createElement("template");return o.innerHTML=e,t?o.content.firstChild.firstChild:o.content.firstChild},l=s?()=>(i||(i=n())).cloneNode(!0):()=>H(()=>document.importNode(i||(i=n()),!0));return l.cloneNode=l,l}function X(e,s=window.document){const t=s[ve]||(s[ve]=new Set);for(let i=0,n=e.length;i<n;i++){const l=e[i];t.has(l)||(t.add(l),s.addEventListener(l,ze))}}function T(e,s,t){t==null?e.removeAttribute(s):e.setAttribute(s,t)}function z(e,s){s==null?e.removeAttribute("class"):e.className=s}function Ue(e,s,t,i){if(i)Array.isArray(t)?(e[`$$${s}`]=t[0],e[`$$${s}Data`]=t[1]):e[`$$${s}`]=t;else if(Array.isArray(t)){const n=t[0];e.addEventListener(s,t[0]=l=>n.call(e,t[1],l))}else e.addEventListener(s,t)}function u(e,s,t,i){if(t!==void 0&&!i&&(i=[]),typeof s!="function")return te(e,s,i,t);L(n=>te(e,s(),n,t),i)}function ze(e){const s=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const i=t[s];if(i&&!t.disabled){const n=t[`${s}Data`];if(n!==void 0?i.call(t,n,e):i.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function te(e,s,t,i,n){for(;typeof t=="function";)t=t();if(s===t)return t;const l=typeof s,o=i!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(s=s.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=s:a=document.createTextNode(s),t=G(e,t,i,a)}else t!==""&&typeof t=="string"?t=e.firstChild.data=s:t=e.textContent=s;else if(s==null||l==="boolean")t=G(e,t,i);else{if(l==="function")return L(()=>{let a=s();for(;typeof a=="function";)a=a();t=te(e,a,t,i)}),()=>t;if(Array.isArray(s)){const a=[],c=t&&Array.isArray(t);if(de(a,s,t,n))return L(()=>t=te(e,a,t,i,!0)),()=>t;if(a.length===0){if(t=G(e,t,i),o)return t}else c?t.length===0?be(e,a,i):We(e,t,a):(t&&G(e),be(e,a));t=a}else if(s instanceof Node){if(Array.isArray(t)){if(o)return t=G(e,t,i,s);G(e,t,null,s)}else t==null||t===""||!e.firstChild?e.appendChild(s):e.replaceChild(s,e.firstChild);t=s}else console.warn("Unrecognized value. Skipped inserting",s)}return t}function de(e,s,t,i){let n=!1;for(let l=0,o=s.length;l<o;l++){let a=s[l],c=t&&t[l];if(a instanceof Node)e.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))n=de(e,a,c)||n;else if(typeof a=="function")if(i){for(;typeof a=="function";)a=a();n=de(e,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||n}else e.push(a),n=!0;else{const d=String(a);c&&c.nodeType===3?(c.data=d,e.push(c)):e.push(document.createTextNode(d))}}return n}function be(e,s,t=null){for(let i=0,n=s.length;i<n;i++)e.insertBefore(s[i],t)}function G(e,s,t,i){if(t===void 0)return e.textContent="";const n=i||document.createTextNode("");if(s.length){let l=!1;for(let o=s.length-1;o>=0;o--){const a=s[o];if(n!==a){const c=a.parentNode===e;!l&&!o?c?e.replaceChild(n,a):e.insertBefore(n,t):c&&a.remove()}else l=!0}}else e.insertBefore(n,t);return[n]}const Ve="http://www.w3.org/2000/svg";function Qe(e,s=!1){return s?document.createElementNS(Ve,e):document.createElement(e)}function Le(e){const{useShadow:s}=e,t=document.createTextNode(""),i=()=>e.mount||document.body,n=Pe();let l,o=!!Ne.context;return ge(()=>{l||(l=Re(n,()=>e.children));const a=i();if(a instanceof HTMLHeadElement){const[c,d]=P(!1),r=()=>d(!0);Q(m=>u(a,()=>c()?m():l,null)),q(r)}else{const c=Qe(e.isSVG?"g":"div",e.isSVG),d=s&&c.attachShadow?c.attachShadow({mode:"open"}):c;Object.defineProperty(c,"_$host",{get(){return t.parentNode},configurable:!0}),u(d,l),a.appendChild(c),e.ref&&e.ref(c),q(()=>a.removeChild(c))}},void 0,{render:!o}),t}const re={introduction:"Full Stack Web developer with a master’s degree in Computer Science. I have several years of experience in Web and Desktop development, focusing on frontend development (ReactJS) as well as back-End development (NodeJS). I am self-motivated person, fast learner and open to new challenges for the development of my skills.",projectsDone:"+ 9",gitHubCommits:"+ 600"};const qe=k('<section class="about section" id="about"><div class="container"><h2 class="section-title px-15">About Me</h2><div class="about-content"><p class="about-text"></p><div class="btn btn-default"><a href="./documents/baatchia-resume.pdf" download="baatchia-resume.pdf">DOWNLOAD RESUME</a></div></div><div class="row stats-items"><div class="stats-item px-15"><a href="#projects"><i class="fa-solid fa-circle-check"></i></a><div class="details"><h3></h3><p>Projects Done</p></div></div><div class="stats-item px-15"><i class="fa-solid fa-code-commit"></i><div class="details"><h3></h3><p>GitHub Commits'),Ke=()=>(()=>{const e=qe(),s=e.firstChild,t=s.firstChild,i=t.nextSibling,n=i.firstChild,l=i.nextSibling,o=l.firstChild,a=o.firstChild,c=a.nextSibling,d=c.firstChild,r=o.nextSibling,m=r.firstChild,g=m.nextSibling,f=g.firstChild;return u(n,()=>re.introduction),u(d,()=>re.projectsDone),u(f,()=>re.gitHubCommits),e})(),B={phoneNumber:"+213 657 73 50 82",email:"Baatchia_Riyadh@protonmail.com",github:"https://github.com/riyadh-dev",linkedin:"https://linkedin.com/in/baatchia-riyadh",twitter:"",whatsapp:""};const Xe=k('<section class="section contact" id="contact"><div class="container"><h2 class="section-title px-15">Contact Me</h2><div class="contact-container"><div class="contact-box px-15"><div class="contact-data"><div class="contact-info"><h3 class="contact-subtitle">Text Me</h3><a class="contact-description"><i class="fa-solid fa-phone"></i></a></div><div class="contact-info"><h3 class="contact-subtitle">Email Me</h3><a class="contact-description"><i class="fa-solid fa-envelope"></i></a></div></div></div><form class="contact-form px-15"><div class="contact-inputs"><div class="contact-content"><input type="email" name="email" class="contact-input"><label class="contact-label">Email</label><span></span></div><div class="contact-content"><input type="text" name="subject" class="contact-input"><label class="contact-label">Subject</label><span></span></div><div class="contact-content contact-area"><textarea name="body" cols="30" rows="10" class="contact-input"></textarea><label class="contact-label">Message</label><span></span></div></div><button type="submit" class="btn btn-default">Sent'),Ye=()=>(()=>{const e=Xe(),s=e.firstChild,t=s.firstChild,i=t.nextSibling,n=i.firstChild,l=n.firstChild,o=l.firstChild,a=o.firstChild,c=a.nextSibling;c.firstChild;const d=o.nextSibling,r=d.firstChild,m=r.nextSibling;m.firstChild;const g=n.nextSibling;return u(c,()=>B.phoneNumber,null),u(m,()=>B.email,null),L(f=>{const v=`tel:${B.phoneNumber}`,h=`mailto:${B.email}`,p=`mailto:${B.email}`;return v!==f._v$&&T(c,"href",f._v$=v),h!==f._v$2&&T(m,"href",f._v$2=h),p!==f._v$3&&T(g,"action",f._v$3=p),f},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})(),$e=[{fontAwesomeIcon:"fa-solid fa-briefcase timeline-icon",period:"2020 - 2022",company:"Sirius Services - Abb Partner Algeria",jobTitle:"Software Developer",description:["Developed various scripts to automate a variety of repetitive task to increase productivity and efficiency.","Designed and develop internal software applications for addressing company problems and needs."]},{fontAwesomeIcon:"fa-solid fa-briefcase timeline-icon",period:"2019 - 2020",company:"Freelancing",jobTitle:"Software Developer",description:["Designed and developed some simple applications for local small business"]},{fontAwesomeIcon:"fa-solid fa-briefcase timeline-icon",period:"24/03/2018 – 05/04/2018",company:"Electricity And Gas Distribution Administration Algeria",jobTitle:"Internship",description:["Was responsible for daily backing up customers database.","Was giving a basic walk-through on the IT department daily operations."]},{fontAwesomeIcon:"fa-solid fa-user-graduate timeline-icon",period:"July 2019",company:"Institute Of Electrical And Electronics Engineering (Ex-INELEC) Algeria",jobTitle:"Degree",description:["Master’s in Computer Engineering.","Developed a Fullstack Web Application to facilitate the management of the Scientific Council of the institute."]},{fontAwesomeIcon:"fa-solid fa-user-graduate timeline-icon",period:"July 2017",company:"Institute Of Electrical And Electronics Engineering (Ex-INELEC) Algeria",jobTitle:"Degree",description:["License in Electrical and Electronics Engineering."]}];const Ze=k('<section class="experience section" id="experience"><div class="container"><h2 class="section-title px-15">Experience</h2><div class="experience-container"><div class="experience-card"></div><div class="experience-card">'),_e=k('<div class="timeline-item"><i></i><h3 class="timeline-date"><i class="fa-solid fa-calendar-days"></i> </h3><h3 class="timeline-title"></h3><h4 class="timeline-subtitle"></h4><ul class="timeline-text">'),Se=k("<li>"),es=()=>(()=>{const e=Ze(),s=e.firstChild,t=s.firstChild,i=t.nextSibling,n=i.firstChild,l=n.nextSibling;return u(n,b(M,{get each(){return $e.slice(0,3)},children:o=>(()=>{const a=_e(),c=a.firstChild,d=c.nextSibling;d.firstChild.nextSibling;const m=d.nextSibling,g=m.nextSibling,f=g.nextSibling;return u(d,()=>o.period,null),u(m,()=>o.company),u(g,()=>o.jobTitle),u(f,b(M,{get each(){return o.description},children:v=>(()=>{const h=Se();return u(h,v),h})()})),L(()=>z(c,o.fontAwesomeIcon)),a})()})),u(l,b(M,{get each(){return $e.slice(3,6)},children:o=>(()=>{const a=_e(),c=a.firstChild,d=c.nextSibling;d.firstChild.nextSibling;const m=d.nextSibling,g=m.nextSibling,f=g.nextSibling;return u(d,()=>o.period,null),u(m,()=>o.company),u(g,()=>o.jobTitle),u(f,b(M,{get each(){return o.description},children:v=>(()=>{const h=Se();return u(h,v),h})()})),L(()=>z(c,o.fontAwesomeIcon)),a})()})),e})();const ss=k('<div class="footer"><div class="container"><div class="footer-text px-15"><p>&copy;2023 Baatchia Riyadh.'),ts=()=>ss();const is=k('<section class="home section" id="home"><div class="intro"><img src="./src/assets/logo.png" alt=""><h1>RIYADH BAATCHIA</h1><span>FULL STACK WEB DEVELOPER</span><ul class="social-icons"><li><a rel="noreferrer" target="_blank"><i class="fa-brands fa-github"></i></a></li><li><a rel="noreferrer" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li><li><a rel="noreferrer" target="_blank"><i class="fa-brands fa-twitter"></i></a></li><li><a rel="noreferrer" target="_blank"><i class="fa-solid fa-envelope"></i></a></li><li><a rel="noreferrer" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li></ul><div class="btn btn-default"><a href="#contact">Contact me</a></div><div class="scroll-down"><h3>Scroll For More</h3><i class="fa-solid fa-angles-down">'),ns=()=>(()=>{const e=is(),s=e.firstChild,t=s.firstChild,i=t.nextSibling,n=i.nextSibling,l=n.nextSibling,o=l.firstChild,a=o.firstChild,c=o.nextSibling,d=c.firstChild,r=c.nextSibling,m=r.firstChild,g=r.nextSibling,f=g.firstChild,v=g.nextSibling,h=v.firstChild;return L(p=>{const _=B.github,$=B.linkedin,x=B.twitter,y=`mailto:${B.email}`,E=`tel:${B.phoneNumber}`;return _!==p._v$&&T(a,"href",p._v$=_),$!==p._v$2&&T(d,"href",p._v$2=$),x!==p._v$3&&T(m,"href",p._v$3=x),y!==p._v$4&&T(f,"href",p._v$4=y),E!==p._v$5&&T(h,"href",p._v$5=E),p},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),e})(),F={fontSizes:["12px","14px","16px","18px"],colorHues:["252","127","352","49","229"],backgrounds:[{text:"Light",values:["92%","17%","100%"]},{text:"Dim",values:["15%","95%","20%"]},{text:"Dark",values:["10%","95%","0%"]}]},ie=P(2),ne=P(2),U=P(1),ls=()=>{ie[1](parseInt(localStorage.getItem("activeFontSizeIndex")??"2",10)),ne[1](parseInt(localStorage.getItem("activeColorHueIndex")??"2",10)),U[1](parseInt(localStorage.getItem("activeBackgroundColorIndex")??"1",10))},as=()=>ge(()=>{localStorage.setItem("activeFontSizeIndex",ie[0]().toString()),localStorage.setItem("activeColorHueIndex",ne[0]().toString()),localStorage.setItem("activeBackgroundColorIndex",U[0]().toString());const e=document.querySelector("html")?.style;e&&(e.fontSize=F.fontSizes[ie[0]()],e.setProperty("--primary-color-hue",F.colorHues[ne[0]()]),e.setProperty("--light-color-lightness",F.backgrounds[U[0]()].values[0]),e.setProperty("--dark-color-lightness",F.backgrounds[U[0]()].values[1]),e.setProperty("--white-color-lightness",F.backgrounds[U[0]()].values[2]))});const os=k('<div class="theme-panel-container" id="theme-panel-container"><div class="theme-panel"><h2>Customize The Theme</h2><p>Manage the font size, color and theme mode.</p><div class="theme-font-size"><h3>Font Size</h3><div class="theme-font-size-slider"><h6>Aa</h6><ul></ul><h3>Aa</h3></div></div><div class="theme-color"><h3>Color</h3><ul></ul></div><div class="theme-background"><h3>Theme Mode</h3><ul>'),ye=k("<li>"),rs=k("<li><h4>"),cs=e=>{const[s,t]=ie,[i,n]=ne,[l,o]=U;fe(()=>document.body.style.overflow="hidden"),q(()=>{document.body.style.position="",document.body.style.overflow="auto"});const a=c=>{c.target.id==="theme-panel-container"&&e.closeThemePanel()};return(()=>{const c=os(),d=c.firstChild,r=d.firstChild,m=r.nextSibling,g=m.nextSibling,f=g.firstChild,v=f.nextSibling,h=v.firstChild,p=h.nextSibling,_=g.nextSibling,$=_.firstChild,x=$.nextSibling,y=_.nextSibling,E=y.firstChild,R=E.nextSibling;return c.$$click=a,u(p,b(M,{get each(){return F.fontSizes},children:(A,C)=>(()=>{const S=ye();return S.$$click=()=>t(C()),L(N=>{const D=`font-size-${C()+1}`,O=C()===s();return D!==N._v$&&z(S,N._v$=D),O!==N._v$2&&S.classList.toggle("active",N._v$2=O),N},{_v$:void 0,_v$2:void 0}),S})()})),u(x,b(M,{get each(){return F.colorHues},children:(A,C)=>(()=>{const S=ye();return S.$$click=()=>n(C()),L(N=>{const D=`color-${C()+1}`,O=C()===i();return D!==N._v$3&&z(S,N._v$3=D),O!==N._v$4&&S.classList.toggle("active",N._v$4=O),N},{_v$3:void 0,_v$4:void 0}),S})()})),u(R,b(M,{get each(){return F.backgrounds},children:({text:A},C)=>(()=>{const S=rs(),N=S.firstChild;return S.$$click=()=>o(C()),u(N,A),L(D=>{const O=`bg-${C()+1}`,pe=C()===l();return O!==D._v$5&&z(S,D._v$5=O),pe!==D._v$6&&S.classList.toggle("active",D._v$6=pe),D},{_v$5:void 0,_v$6:void 0}),S})()})),c})()};X(["click"]);const ds=k('<header id="header" class="header"><nav class="nav container px-15"><div class="nav-logo"><h2>Riyadh</h2></div><div class="nav-menu"><ul class="nav-list"></ul><div class="nav-close" id="nav-close"><i class="fa-solid fa-xmark"></i></div></div><div class="nav-btn-group"><i class="fa-solid fa-palette" id="nav-theme-btn"></i><div class="nav-btn nav-toggle" id="nav-toggle"><i class="fa-solid fa-bars">'),gs=k('<li class="nav-item"><a class="nav-link">'),fs=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Experience",href:"#experience"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}],ms=()=>{const[e,s]=P(!1),[t,i]=P(!1),[n,l]=P("#home"),o=()=>s(!1),a=()=>i(!1),c=()=>{const d=document.querySelectorAll("section[id]");for(const r of d)new IntersectionObserver(g=>{g[0].isIntersecting&&l(`#${r.id}`)},{threshold:.5}).observe(r)};return fe(()=>{ls(),c(),l(window.location.hash)}),as(),(()=>{const d=ds(),r=d.firstChild,m=r.firstChild,g=m.nextSibling,f=g.firstChild,v=f.nextSibling,h=v.firstChild,p=g.nextSibling,_=p.firstChild,$=_.nextSibling,x=$.firstChild;return u(f,b(M,{each:fs,children:y=>(()=>{const E=gs(),R=E.firstChild;return E.$$click=o,u(R,()=>y.name),L(A=>{const C=y.href,S=n()===y.href;return C!==A._v$&&T(R,"href",A._v$=C),S!==A._v$2&&R.classList.toggle("active-link",A._v$2=S),A},{_v$:void 0,_v$2:void 0}),E})()})),h.$$click=o,_.$$click=()=>i(!0),x.$$click=()=>s(!0),u(d,b(Te,{get when(){return t()},get children(){return b(Le,{get children(){return b(cs,{closeThemePanel:a})}})}}),null),L(()=>g.classList.toggle("show",!!e())),d})()};X(["click"]);const us=k('<div class="gallery-slider-container"><div class="close-button circular-Button"><i class="fa-solid fa-xmark"></i></div><div class="back-button circular-Button"><i class="fa-solid fa-arrow-left"></i></div><div class="forward-button circular-Button"><i class="fa-solid fa-arrow-right"></i></div><div class="gallery-slider-middle-section"><div class="loader"></div><img loading="eager"></div><div class="gallery-slider-circles bottom-section">'),ps=k("<span>"),hs=e=>{const[s,t]=P(0),[i,n]=P(!1),l=()=>{e.images.length-1<=s()||(t(s()+1),n(!1))},o=()=>{s()!==0&&(t(s()-1),n(!1))},a=c=>t(c);return fe(()=>{document.body.style.overflow="hidden"}),q(()=>{document.body.style.overflow="auto",document.body.style.position=""}),(()=>{const c=us(),d=c.firstChild,r=d.nextSibling,m=r.nextSibling,g=m.nextSibling,f=g.firstChild,v=f.nextSibling,h=g.nextSibling;return d.$$click=()=>e.closeGallerySlider(),r.$$click=o,m.$$click=l,v.addEventListener("load",()=>n(!0)),u(h,b(M,{get each(){return e.images},children:(p,_)=>(()=>{const $=ps();return $.$$click=()=>a(_()),L(()=>$.classList.toggle("gallery-slider-circle-active",_()===s())),$})()})),L(p=>{const _=!i(),$=!!i(),x=e.images[s()],y=`image ${s()}`,E=!!i(),R=!i();return _!==p._v$&&f.classList.toggle("show",p._v$=_),$!==p._v$2&&f.classList.toggle("hide",p._v$2=$),x!==p._v$3&&T(v,"src",p._v$3=x),y!==p._v$4&&T(v,"alt",p._v$4=y),E!==p._v$5&&v.classList.toggle("show",p._v$5=E),R!==p._v$6&&v.classList.toggle("hide",p._v$6=R),p},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),c})()};X(["click"]);const vs=[{name:"Social Media App",links:["https://social-media-app-production.up.railway.app","https://social-media-app-eoga.onrender.com/"],repo:"https://github.com/riyadh-dev/social-media-app",thumbnail:"/src/assets/images/social-media-app/3.png",images:["/src/assets/images/social-media-app/1.png","/src/assets/images/social-media-app/2.png","/src/assets/images/social-media-app/3.png","/src/assets/images/social-media-app/4.png","/src/assets/images/social-media-app/5.png","/src/assets/images/social-media-app/6.png","/src/assets/images/social-media-app/7.png","/src/assets/images/social-media-app/8.png","/src/assets/images/social-media-app/9.png","/src/assets/images/social-media-app/10.png"],tags:["ReactJS","ExpressJS","MongoDB","MUI","WebSockets","Typescript","RecoilJS","React Router","React Query"]},{name:"Online Store",links:["https://e-commerce-app-self.vercel.app/"],repo:"https://github.com/riyadh-dev/e-commerce-app",thumbnail:"/src/assets/images/e-commerce-app/1.png",images:["/src/assets/images/e-commerce-app/1.png","/src/assets/images/e-commerce-app/2.png","/src/assets/images/e-commerce-app/3.png","/src/assets/images/e-commerce-app/4.png","/src/assets/images/e-commerce-app/5.png","/src/assets/images/e-commerce-app/6.png","/src/assets/images/e-commerce-app/7.png","/src/assets/images/e-commerce-app/8.png","/src/assets/images/e-commerce-app/9.png"],tags:["NextJS","TailwindCSS","Typescript","Stripe","RecoilJS"]},{name:"Instant Messaging App",links:["https://messaging-app.up.railway.app","https://messaging-app-2b7q.onrender.com"],repo:"https://github.com/riyadh-dev/messaging-app",thumbnail:"/src/assets/images/messaging-app/4.png",images:["/src/assets/images/messaging-app/1.png","/src/assets/images/messaging-app/2.png","/src/assets/images/messaging-app/3.png","/src/assets/images/messaging-app/4.png","/src/assets/images/messaging-app/5.png","/src/assets/images/messaging-app/6.png"],tags:["ReactJS","ExpressJS","MongoDB","MUI","WebSockets","Typescript","RecoilJS","React Router","React Query"]},{name:"Scientific Consul Management System",links:["https://scms-client.netlify.app/"],repo:"https://github.com/riyadh-dev/scms-client",thumbnail:"/src/assets/images/scms/5.png",images:["/src/assets/images/scms/1.png","/src/assets/images/scms/2.png","/src/assets/images/scms/3.png","/src/assets/images/scms/4.png","/src/assets/images/scms/5.png","/src/assets/images/scms/6.png","/src/assets/images/scms/7.png","/src/assets/images/scms/8.png","/src/assets/images/scms/9.png","/src/assets/images/scms/10.png","/src/assets/images/scms/11.png","/src/assets/images/scms/12.png","/src/assets/images/scms/13.png"],tags:["ReactJS","ExpressJS","MongoDB","MUI","GraphQL"]},{name:"Card Matching Game",links:["https://riyadh-dev.github.io/memory-matching-game/","https://riyadh-dev-memory-matching-game.netlify.app/"],repo:"https://github.com/riyadh-dev/memory-matching-game",thumbnail:"/src/assets/images/memory-matching-game/1.png",images:["/src/assets/images/memory-matching-game/1.png"],tags:["ReactJS","PreactJS","Typescript","ViteJS","CSS"]},{name:"Dashboard (frontend only)",links:["https://dashboard-nextjs-weld.vercel.app/"],repo:"https://github.com/riyadh-dev/dashboard-nextjs",thumbnail:"/src/assets/images/dashboard-nextjs/1.png",images:["/src/assets/images/dashboard-nextjs/1.png","/src/assets/images/dashboard-nextjs/2.png","/src/assets/images/dashboard-nextjs/3.png","/src/assets/images/dashboard-nextjs/4.png","/src/assets/images/dashboard-nextjs/5.png","/src/assets/images/dashboard-nextjs/6.png"],tags:["NextJS","Typescript","RecoilJS","TailwindCSS","Tremor"]},{name:"Portfolio Website (React JS)",links:["https://riyadh-dev.github.io/portfolio-website-react"],repo:"https://github.com/riyadh-dev/portfolio-website-react",thumbnail:"/src/assets/images/portfolio-website-image/1.png",images:["/src/assets/images/portfolio-website-image/1.png","/src/assets/images/portfolio-website-image/2.png","/src/assets/images/portfolio-website-image/3.png","/src/assets/images/portfolio-website-image/4.png","/src/assets/images/portfolio-website-image/5.png","/src/assets/images/portfolio-website-image/6.png"],tags:["ReactJS","Typescript","PreactJS","ViteJS","CSS"]},{name:"Authentication Demo",links:["https://authentication-demo.up.railway.app/","https://authentication-demo-jqhr.onrender.com/"],repo:"https://github.com/riyadh-dev/authentication-demo",thumbnail:"/src/assets/images/authentication-demo/2.png",images:["/src/assets/images/authentication-demo/1.png","/src/assets/images/authentication-demo/2.png","/src/assets/images/authentication-demo/3.png","/src/assets/images/authentication-demo/4.png","/src/assets/images/authentication-demo/5.png"],tags:["ReactJS","Chakra UI","Typescript","ExpressJS","MongoDB","CSURF","HTTPOnly cookies"]},{name:"Portfolio Website (No Framework)",links:["https://riyadh-dev.github.io/portfolio-website"],repo:"https://github.com/riyadh-dev/portfolio-website",thumbnail:"/src/assets/images/portfolio-website-image/3.png",images:["/src/assets/images/portfolio-website-image/1.png","/src/assets/images/portfolio-website-image/2.png","/src/assets/images/portfolio-website-image/3.png","/src/assets/images/portfolio-website-image/4.png","/src/assets/images/portfolio-website-image/5.png","/src/assets/images/portfolio-website-image/6.png"],tags:["HTML","Typescript","SASS","ParcelJS"]},{name:"IEC101 Master Sim",links:["https://github.com/riyadh-dev/iec101-master-sim/releases/download/v1.0.0/IEC101MasterSim.exe"],repo:"https://github.com/riyadh-dev/iec101-master-sim",thumbnail:"/src/assets/images/iec101-master-sim/2.png",images:["/src/assets/images/iec101-master-sim/1.png","/src/assets/images/iec101-master-sim/2.png"],tags:[".NET","WPF","C#","XAML","IEC 60870-5-101"]}];const bs=k('<section class="projects section" id="projects"><div class="container"><h2 class="section-title px-15">Projects</h2><div class="projects-container">'),$s=k('<div><div class="project-card"><img class="project-img"><div class="project-card-hover"><h3 class="project-title"></h3><div class="project-buttons"><div class="project-buttons-group"><span class="circular-Button-no-hover"><i class="fa-solid fa-link"></i></span><div class="project-buttons-group-links"></div></div><a rel="noreferrer" target="_blank"><i class="fa-brands fa-github"></i></a><span class="circular-Button"><i class="fa-solid fa-images"></i></span></div></div></div><ul class="project-tags-container">'),_s=k('<a rel="noreferrer" target="_blank">'),Ss=k('<li class="project-tag">'),ys=()=>{const[e,s]=P([]),[t,i]=P(!1),n=()=>i(!1),l=o=>()=>{s(o),i(!0)};return(()=>{const o=bs(),a=o.firstChild,c=a.firstChild,d=c.nextSibling;return u(d,b(M,{each:vs,children:r=>(()=>{const m=$s(),g=m.firstChild,f=g.firstChild,v=f.nextSibling,h=v.firstChild,p=h.nextSibling,_=p.firstChild,$=_.firstChild,x=$.nextSibling,y=_.nextSibling,E=y.nextSibling,R=g.nextSibling;return u(h,()=>r.name),u(x,b(M,{get each(){return r.links},children:(A,C)=>(()=>{const S=_s();return T(S,"href",A),u(S,()=>C()+1),S})()})),Ue(E,"click",l(r.images),!0),u(R,b(M,{get each(){return r.tags},children:A=>(()=>{const C=Ss();return u(C,A),C})()})),L(A=>{const C=r.thumbnail,S=r.name,N=r.repo;return C!==A._v$&&T(f,"src",A._v$=C),S!==A._v$2&&T(f,"alt",A._v$2=S),N!==A._v$3&&T(y,"href",A._v$3=N),A},{_v$:void 0,_v$2:void 0,_v$3:void 0}),m})()})),u(o,b(Te,{get when(){return t()},get children(){return b(Le,{get children(){return b(hs,{get images(){return e()},closeGallerySlider:n})}})}}),null),o})()};X(["click"]);const we=[{categoryName:"Web Frontend",fontAwesomeClasses:"fa-brands fa-firefox-browser skills-icon",skills:[{name:"React",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"},{name:"Tailwind",image:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"},{name:"NextJS",image:"https://img.icons8.com/color/512/nextjs.png"},{name:"RecoilJS",image:"https://external-content.duckduckgo.com/ip3/recoiljs.org.ico"},{name:"TS",image:"https://cdn-icons-png.flaticon.com/128/5968/5968381.png"},{name:"SASS",image:"https://cdn-icons-png.flaticon.com/128/5968/5968358.png"},{name:"Bootstrap",image:"https://cdn-icons-png.flaticon.com/512/5968/5968672.png"},{name:"MUI",image:"https://raw.githubusercontent.com/mui/material-ui/master/docs/public/static/logo.svg"},{name:"Chakra UI",image:"https://images.opencollective.com/chakra-ui/eb43264/logo/256.png"},{name:"HTML",image:"https://cdn-icons-png.flaticon.com/128/174/174854.png"},{name:"CSS",image:"https://cdn-icons-png.flaticon.com/128/732/732190.png"},{name:"JS",image:"https://cdn-icons-png.flaticon.com/128/5968/5968292.png"}]},{categoryName:"Web Backend",fontAwesomeClasses:"fa-solid fa-server skills-icon",skills:[{name:"NodeJS",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"},{name:"MongoDB",image:"https://www.svgrepo.com/show/331488/mongodb.svg"},{name:"PostgreSQL",image:"https://cdn-icons-png.flaticon.com/512/5968/5968342.png"},{name:"ExpressJS",image:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"},{name:"GraphQL",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"},{name:"WebSockets",image:"https://seeklogo.com/images/W/websocket-logo-91B815D333-seeklogo.com.png"}]},{categoryName:"Desktop",fontAwesomeClasses:"fa-solid fa-display skills-icon",skills:[{name:"C#",image:"https://cdn-icons-png.flaticon.com/512/6132/6132221.png"},{name:"XAML",image:"https://user-images.githubusercontent.com/16964652/66596008-f4e3ed80-eb50-11e9-9a8a-3e9a5adf4d7c.png"},{name:".NET",image:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"},{name:"WPF",image:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"},{name:"WinForms",image:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"}]},{categoryName:"Other Skills",fontAwesomeClasses:"fa-solid fa-laptop-code skills-icon",skills:[{name:"ParcelJS",image:"https://parceljs.org/avatar.66e613b2.avif"}]}];const ws=k('<section class="skills section" id="skills"><div class="container"><h2 class="section-title px-15">Skills</h2><div class="skills-container"><div class="skills-tabs"></div><div class="skills-content"><div class="skills-group">'),xs=k('<div class="skills-tab"><i></i><div><h1 class="skills-title"></h1></div><i class="fa-solid fa-chevron-down skills-arrow">'),Cs=k('<div class="skill-container"><img><h3>'),ks=()=>{const[e,s]=P(0);return(()=>{const t=ws(),i=t.firstChild,n=i.firstChild,l=n.nextSibling,o=l.firstChild,a=o.nextSibling,c=a.firstChild;return u(o,b(M,{each:we,children:(d,r)=>(()=>{const m=xs(),g=m.firstChild,f=g.nextSibling,v=f.firstChild;return m.$$click=()=>s(r()),u(v,()=>d.categoryName),L(h=>{const p=r()===e(),_=d.fontAwesomeClasses;return p!==h._v$&&m.classList.toggle("skills-active",h._v$=p),_!==h._v$2&&z(g,h._v$2=_),h},{_v$:void 0,_v$2:void 0}),m})()})),u(c,b(M,{get each(){return we[e()].skills},children:d=>(()=>{const r=Cs(),m=r.firstChild,g=m.nextSibling;return u(g,()=>d.name),L(f=>{const v=d.image,h=d.name;return v!==f._v$3&&T(m,"src",f._v$3=v),h!==f._v$4&&T(m,"alt",f._v$4=h),f},{_v$3:void 0,_v$4:void 0}),r})()})),t})()};X(["click"]);const As=k('<main class="main-content">'),Es=()=>[b(ms,{}),(()=>{const e=As();return u(e,b(ns,{}),null),u(e,b(Ke,{}),null),u(e,b(ks,{}),null),u(e,b(es,{}),null),u(e,b(ys,{}),null),u(e,b(Ye,{}),null),u(e,b(ts,{}),null),e})()],Is=document.getElementById("root");Ge(()=>b(Es,{}),Is);
