import{bu as o,bY as u,bZ as c}from"./index.de7a3c72.js";function m(s,i=150,n){let e=()=>{s()};const[d,a]=o(e,i,n);e=d;const t=()=>{n&&n.immediate&&e(),window.addEventListener("resize",e)},r=()=>{window.removeEventListener("resize",e),a()};return u(()=>{t()}),c(()=>{r()}),[t,r]}export{m as u};