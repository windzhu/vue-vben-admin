import{d as e,r as a,e as t,g as o,h as i,o as s,i as r,w as n,j as p,m as d}from"./index.50e8b5dc.js";import{I as l}from"./index.93fd3c0b.js";import{a as m}from"./index.1be6d046.js";import{u}from"./useCopyToClipboard.67afa4f4.js";import{_ as c}from"./index.705ab234.js";import"./SearchOutlined.f21918b7.js";import"./EyeOutlined.82f0228d.js";import"./index.e6824e1f.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./RightOutlined.656a20b0.js";import"./index.bed999aa.js";import"./useTimeout.7a6cd11a.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./index.99adaa1b.js";import"./index.c5668e8a.js";import"./RightOutlined.bad02d13.js";import"./types.b7a21d2a.js";import"./isEqual.9055b911.js";import"./toInteger.d50f777e.js";import"./DownOutlined.511c1f73.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";var j=e({name:"Copy",components:{CollapseContainer:m,PageWrapper:c,[l.name]:l},setup(){const e=a(""),{createMessage:i}=o(),{clipboardRef:s,copiedRef:r}=u();return{handleCopy:function(){const a=t(e);a?(s.value=a,t(r)&&i.warning("copy success！")):i.warning("请输入要拷贝的内容！")},value:e}}});const f={class:"flex justify-center"},b=d("Copy");j.render=function(e,a,t,o,d,l){const m=i("a-input"),u=i("a-button"),c=i("CollapseContainer"),j=i("PageWrapper");return s(),r(j,{title:"文本复制示例"},{default:n((()=>[p(c,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n((()=>[p("div",f,[p(m,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),p(u,{type:"primary",onClick:e.handleCopy},{default:n((()=>[b])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default j;