import{_ as e}from"./index.382ec6c4.js";import{a as i}from"./index.fe2a3406.js";import{d as t,bP as s,g as r,h as o,o as d,i as a,w as n,j as m}from"./index.12192f00.js";import{T as p}from"./index.4190d8ea.js";import{_ as c}from"./index.006e14c0.js";import"./index.09d69b67.js";import"./index.ceef1048.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.c632e60a.js";import"./isEqual.292bb384.js";import"./get.6fddfe2d.js";import"./_baseProperty.74f89655.js";import"./toInteger.db0f0ea0.js";import"./index.bab8cfa1.js";import"./index.1bbbabab.js";import"./SearchOutlined.940caa2d.js";import"./EyeOutlined.8664505d.js";import"./index.90675504.js";import"./CheckOutlined.eb33baf8.js";import"./DownOutlined.dd186a31.js";import"./index.197c4eb2.js";import"./index.fcafca0f.js";import"./UpOutlined.4916bc51.js";import"./index.6d5a306c.js";import"./RightOutlined.c9c720ac.js";import"./RedoOutlined.5c75f95b.js";import"./index.7aebfa6d.js";import"./EllipsisOutlined.35ffd1d0.js";import"./types.4008733a.js";import"./Tree.1d725590.js";import"./util.fe3cd4e6.js";import"./useAttrs.1da06bfb.js";/* empty css              */import"./uuid.6cf4dc1a.js";import"./index.d3f9b625.js";import"./DeleteOutlined.d83cfd81.js";import"./index.d8b5d5c4.js";import"./index.12ea96cd.js";import"./useTimeout.061f51e0.js";import"./useWindowSizeFn.f842e9fc.js";import"./FullscreenOutlined.547d7f44.js";import"./index.c8c13533.js";import"./index.4c154755.js";import"./index.43f0da41.js";import"./LeftOutlined.72f8a14c.js";import"./download.2dd29e3d.js";import"./domUtils.75e9c3bf.js";import"./_stringToArray.2d6cff8f.js";import"./index.39f57c76.js";import"./useScrollTo.0f57f985.js";import"./animation.b2b1e4b8.js";import"./index.459ff6cc.js";import"./index.053639c6.js";import"./usePageContext.6e0d629c.js";import"./transButton.616a14bf.js";import"./ArrowLeftOutlined.e1191e7a.js";const l=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:i})=>s(p,{value:e[i],onChange:t=>{e[i]=t}})}];var f=t({components:{BasicForm:e,CollapseContainer:i,PageWrapper:c},setup(){const{createMessage:e}=r();return{schemas:l,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});f.render=function(e,i,t,s,r,p){const c=o("BasicForm"),l=o("CollapseContainer"),f=o("PageWrapper");return d(),a(f,{title:"富文本嵌入表单示例"},{default:n((()=>[m(l,{title:"富文本表单"},{default:n((()=>[m(c,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;