import{B as e,t}from"./data.ce7c5429.js";import{a}from"./index.6e83f1fa.js";import{_ as r}from"./index.ab4f9cce.js";import{d as s,h as i,o,i as l,w as d,j as n}from"./index.9980ecf6.js";import"./index.c977f47c.js";import"./domUtils.3e4d314d.js";import"./_stringToArray.af6be714.js";import"./RightOutlined.7c0e49be.js";/* empty css              */import"./useTimeout.8c3dbf36.js";import"./useScrollTo.16255ad3.js";import"./animation.5a794b55.js";import"./index.e1c3af5e.js";import"./index.8f875014.js";import"./EllipsisOutlined.e36bd7a1.js";import"./types.9f989451.js";import"./isEqual.c667f153.js";import"./toInteger.36506383.js";import"./DownOutlined.68a7a070.js";import"./index.dc9fb36a.js";import"./usePageContext.09429c6d.js";import"./transButton.be72a13c.js";import"./ArrowLeftOutlined.1c0e6922.js";import"./vendor.3b1829c7.js";var p=s({components:{BasicTree:e,CollapseContainer:a,PageWrapper:r},setup:()=>({treeData:t})});const m={class:"flex"};p.render=function(e,t,a,r,s,p){const c=i("BasicTree"),f=i("CollapseContainer"),j=i("PageWrapper");return o(),l(j,{title:"Tree基础示例"},{default:d((()=>[n("div",m,[n(f,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:d((()=>[n(c,{treeData:e.treeData},null,8,["treeData"])])),_:1}),n(f,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:d((()=>[n(c,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),n(f,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:d((()=>[n(c,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])])),_:1})};export default p;
