import{M as e}from"./index.f61c7dad.js";import{_ as t}from"./index.ab4f9cce.js";import{d as n,r as a,e as o,h as r,o as i,i as s,w as m,j as l,m as p}from"./index.9980ecf6.js";import"./index.e1c3af5e.js";import"./index.8f875014.js";import"./RightOutlined.7c0e49be.js";import"./EllipsisOutlined.e36bd7a1.js";import"./types.9f989451.js";import"./isEqual.c667f153.js";import"./toInteger.36506383.js";import"./DownOutlined.68a7a070.js";/* empty css              */import"./index.dc9fb36a.js";import"./usePageContext.09429c6d.js";import"./transButton.be72a13c.js";import"./ArrowLeftOutlined.1c0e6922.js";import"./vendor.3b1829c7.js";var d=n({components:{MarkDown:e,PageWrapper:t},setup(){const e=a(null),t=a("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const t=o(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const c=p(" 黑暗主题 ");d.render=function(e,t,n,a,o,p){const d=r("a-button"),u=r("MarkDown"),f=r("PageWrapper");return i(),s(f,{title:"MarkDown组件示例"},{default:m((()=>[l(d,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:m((()=>[c])),_:1},8,["onClick"]),l(u,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default d;
