import{bg as l}from"./index.de7a3c72.js";function w(e){const a=e.split(","),i=a[0].match(/:(.*?);/)[1],t=atob(a[1]);let n=t.length;const o=new Uint8Array(n);for(;n--;)o[n]=t.charCodeAt(n);return new Blob([o],{type:i})}function u(e,a){return new Promise((r,i)=>{let t=document.createElement("CANVAS");const n=t.getContext("2d"),o=new Image;o.crossOrigin="",o.onload=function(){if(!t||!n)return i();t.height=o.height,t.width=o.width,n.drawImage(o,0,0);const d=t.toDataURL(a||"image/png");t=null,r(d)},o.src=e})}function f(e,a,r,i){u(e).then(t=>{s(t,a,r,i)})}function s(e,a,r,i){const t=w(e);c(t,a,r,i)}function c(e,a,r,i){const t=typeof i!="undefined"?[i,e]:[e],n=new Blob(t,{type:r||"application/octet-stream"});if(typeof window.navigator.msSaveBlob!="undefined")window.navigator.msSaveBlob(n,a);else{const o=window.URL.createObjectURL(n),d=document.createElement("a");d.style.display="none",d.href=o,d.setAttribute("download",a),typeof d.download=="undefined"&&d.setAttribute("target","_blank"),document.body.appendChild(d),d.click(),document.body.removeChild(d),window.URL.revokeObjectURL(o)}}function m({url:e,target:a="_blank",fileName:r}){const i=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,t=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return console.error("Your browser does not support download!"),!1;if(i||t){const n=document.createElement("a");if(n.href=e,n.target=a,n.download!==void 0&&(n.download=r||e.substring(e.lastIndexOf("/")+1,e.length)),document.createEvent){const o=document.createEvent("MouseEvents");return o.initEvent("click",!0,!0),n.dispatchEvent(o),!0}}return e.indexOf("?")===-1&&(e+="?download"),l(e,{target:a}),!0}export{c as a,s as b,f as c,m as d};