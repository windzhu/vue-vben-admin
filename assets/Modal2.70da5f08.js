import{_ as e,a as s}from"./index.c177e243.js";import{d as t,h as o,o as i,i as r,w as a,j as l,a7 as d,m as n}from"./index.9980ecf6.js";import"./useTimeout.8c3dbf36.js";import"./useAttrs.adda98f8.js";import"./useWindowSizeFn.43e81504.js";import"./index.6e83f1fa.js";import"./index.c977f47c.js";import"./domUtils.3e4d314d.js";import"./_stringToArray.af6be714.js";import"./RightOutlined.7c0e49be.js";/* empty css              */import"./useScrollTo.16255ad3.js";import"./animation.5a794b55.js";import"./FullscreenOutlined.598706d7.js";import"./isEqual.c667f153.js";import"./vendor.3b1829c7.js";var p=t({components:{BasicModal:e},setup(){const[e,{closeModal:t,setModalProps:o}]=s();return{register:e,closeModal:t,setModalProps:()=>{o({title:"Modal New Title"})}}}});const c=n(" 从内部关闭弹窗 "),m=n(" 从内部修改title ");p.render=function(e,s,t,n,p,u){const j=o("a-button"),f=o("BasicModal");return i(),r(f,d(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:a((()=>[l(j,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:a((()=>[c])),_:1},8,["onClick"]),l(j,{type:"primary",onClick:e.setModalProps},{default:a((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;
