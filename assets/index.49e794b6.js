import{d as e,aT as t,a0 as a,e as r,h as s,o as n,i,w as o,m as p,l as m,j as d}from"./index.d4318adc.js";import{_ as u}from"./index.025c1173.js";import"./vendor.783aefe0.js";import"./index.045fcbee.js";import"./index.f10db5c5.js";import"./RightOutlined.aa2d326a.js";import"./EllipsisOutlined.078d6602.js";import"./types.4f1ac25d.js";import"./isEqual.9fc12f76.js";import"./toInteger.daaae8e7.js";import"./DownOutlined.b7602ab2.js";import"./index.95c10fda.js";import"./index.86bc52fe.js";import"./usePageContext.0b56e62c.js";import"./transButton.1a8cd0b2.js";import"./ArrowLeftOutlined.ae61cb07.js";var l=e({name:"TestTab",components:{PageWrapper:u},setup(){const{currentRoute:e}=t();return{params:a((()=>r(e).params))}}});const c=d("br",null,null,-1),j=p(" Keep Alive "),f=d("input",null,null,-1);l.render=function(e,t,a,r,d,u){const l=s("PageWrapper");return n(),i(l,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:o((()=>[p(" Current Param : "+m(e.params)+" ",1),c,j,f])),_:1})};export default l;