let e=document.createElement("style");e.innerHTML=".qrcode-demo-item[data-v-727cd0d1]{width:30%;margin-right:1%}",document.head.appendChild(e);import{ao as o,y as l,a as t,r as a,l as d,f as r,cT as n,cU as s,i as c,o as i,j as u,k as m,aQ as g,p as v}from"./index.4201f4f7.js";import"./xlsx.a48e520c.js";import{C as b}from"./index.bcb6dbba.js";const p=o((()=>import("./index.22bb109b.js")));l(p);var f=t({components:{CollapseContainer:b,QrCode:p},setup(){const e=a(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:d,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const q=g("data-v-727cd0d1");n("data-v-727cd0d1");const C={class:"p-4 flex flex-wrap"},x=v(" 下载 "),_=m("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1);s();const U=q(((e,o,l,t,a,d)=>{const r=c("QrCode"),n=c("CollapseContainer"),s=c("a-button");return i(),u("div",C,[m(n,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:q((()=>[m(r,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),m(n,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:q((()=>[m(r,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),m(n,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:q((()=>[m(r,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(n,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:q((()=>[m(r,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),m(n,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:q((()=>[m(r,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(n,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:q((()=>[m(r,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),m(n,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:q((()=>[m(r,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),m(s,{class:"mb-2",type:"primary",onClick:e.download},{default:q((()=>[x])),_:1},8,["onClick"]),_])),_:1}),m(n,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:q((()=>[m(r,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])}));f.render=U,f.__scopeId="data-v-727cd0d1";export default f;