import{g as u,ag as p,ah as h,w as f,j as o,x as v,h as g,r as l,f as E}from"./runtime.Bp9YDXMw.js";function m(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=v;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&p)!==0,_=(t&h)!==0,a,d=!r.startsWith("<!>");return()=>{if(f)return n(o,null),o;a===void 0&&(a=m(d?r:"<!>"+r),e||(a=u(a)));var s=_?document.importNode(a,!0):a.cloneNode(!0);if(e){var c=u(s),i=s.lastChild;n(c,i)}else n(s,s);return s}}function N(r,t,e="svg"){var _=!r.startsWith("<!>"),a=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(f)return n(o,null),o;if(!d){var s=m(a),c=u(s);d=u(c)}var i=d.cloneNode(!0);return n(i,i),i}}function x(r=""){if(!f){var t=l(r+"");return n(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=l()),E(e)),n(e,e),e}function M(){if(f)return n(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=l();return r.append(t,e),n(t,e),r}function L(r,t){if(f){v.nodes_end=o,g();return}r!==null&&r.before(t)}const T="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(T);export{n as a,L as b,M as c,x as d,N as n,y as t};
