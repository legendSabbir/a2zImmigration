import{a6 as C,ai as T,b as V,aj as h,w as _,L as j,ak as x}from"./runtime.Bp9YDXMw.js";import{b as M,c as q,d as B,n as D,e as F}from"./events.ToPeoOOA.js";function G(s,r){if(r){const t=document.body;s.autofocus=!0,C(()=>{document.activeElement===t&&s.focus()})}}function Q(s,r,t){T(()=>{var i=V(()=>r(s,t==null?void 0:t())||{});if(i!=null&&i.destroy)return()=>i.destroy()})}function w(s){var r,t,i="";if(typeof s=="string"||typeof s=="number")i+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(r=0;r<a;r++)s[r]&&(t=w(s[r]))&&(i&&(i+=" "),i+=t)}else for(t in s)s[t]&&(i&&(i+=" "),i+=t);return i}function K(){for(var s,r,t=0,i="",a=arguments.length;t<a;t++)(s=arguments[t])&&(r=w(s))&&(i&&(i+=" "),i+=r);return i}function P(s){return typeof s=="object"?K(s):s??""}function R(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function S(s,r,t,i){var a=s.__attributes??(s.__attributes={});_&&(a[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||a[r]!==(a[r]=t)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[h]=t),t==null?s.removeAttribute(r):typeof t!="string"&&L(s).includes(r)?s[r]=t:s.setAttribute(r,t))}function U(s,r,t,i,a=!1,v=!1,Y=!1){var n=r||{},g=s.tagName==="OPTION";for(var y in r)y in t||(t[y]=null);t.class&&(t.class=P(t.class));var E=L(s),I=s.__attributes??(s.__attributes={});for(const e in t){let c=t[e];if(g&&e==="value"&&c==null){s.value=s.__value="",n[e]=c;continue}var b=n[e];if(c!==b){n[e]=c;var A=e[0]+e[1];if(A!=="$$"){if(A==="on"){const o={},l="$$"+e;let u=e.slice(2);var p=F(u);if(M(u)&&(u=u.slice(0,-7),o.capture=!0),!p&&b){if(c!=null)continue;s.removeEventListener(u,n[l],o),n[l]=null}if(c!=null)if(p)s[`__${u}`]=c,B([u]);else{let O=function(z){n[e].call(this,z)};n[l]=q(u,s,O,o)}else p&&(s[`__${u}`]=void 0)}else if(e==="style"&&c!=null)s.style.cssText=c+"";else if(e==="autofocus")G(s,!!c);else if(e==="__value"||e==="value"&&c!=null)s.value=s[e]=s.__value=c;else if(e==="selected"&&g)R(s,c);else{var f=e;a||(f=D(f));var N=f==="defaultValue"||f==="defaultChecked";if(c==null&&!v&&!N)if(I[e]=null,f==="value"||f==="checked"){let o=s;if(f==="value"){let l=o.defaultValue;o.removeAttribute(f),o.defaultValue=l}else{let l=o.defaultChecked;o.removeAttribute(f),o.defaultChecked=l}}else s.removeAttribute(e);else N||E.includes(f)&&(v||typeof c!="string")?s[f]=c:typeof c!="function"&&(_&&(f==="src"||f==="href"||f==="srcset")||S(s,f,c))}e==="style"&&"__styles"in s&&(s.__styles={})}}}return n}var k=new Map;function L(s){var r=k.get(s.nodeName);if(r)return r;k.set(s.nodeName,r=[]);for(var t,i=s,a=Element.prototype;a!==i;){t=x(i);for(var v in t)t[v].set&&r.push(v);i=j(i)}return r}function W(s){if(!_&&s.loading==="lazy"){var r=s.src;s[h]=null,s.loading="eager",s.removeAttribute("src"),requestAnimationFrame(()=>{s[h]!=="eager"&&(s.loading="lazy"),s.src=r})}}function X(s,r,t){var i=s.__className,a=$(r);_&&s.getAttribute("class")===a?s.__className=a:(i!==a||_&&s.getAttribute("class")!==a)&&(a===""?s.removeAttribute("class"):s.setAttribute("class",a),s.__className=a)}function Z(s,r,t){var i=s.__className,a=$(r);_&&s.className===a?s.__className=a:(i!==a||_&&s.className!==a)&&(r==null?s.removeAttribute("class"):s.className=a,s.__className=a)}function $(s,r){return(s??"")+""}function m(s,r,t){if(t){if(s.classList.contains(r))return;s.classList.add(r)}else{if(!s.classList.contains(r))return;s.classList.remove(r)}}const d=typeof IntersectionObserver>"u"?null:new IntersectionObserver(s=>{s.forEach(r=>{if(r.isIntersecting){const t=r.target;t.dispatchEvent(new CustomEvent("enterViewport")),t.dataset.visible=!0,d.unobserve(t)}})},{rootMargin:"0px 0px 100px 0px"});function ss(s){return d.observe(s),{destroy(){d.unobserve(s)}}}export{Q as a,Z as b,P as c,S as d,X as e,W as h,U as s,m as t,ss as v};
