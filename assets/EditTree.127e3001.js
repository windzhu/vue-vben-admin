import{B as t,t as e}from"./data.83992a57.js";import{a as r}from"./index.1be6d046.js";import{_ as a}from"./index.705ab234.js";import{j as n,aH as i,aI as o,d as s,bS as l,h as c,o as u,i as d,w as p}from"./index.50e8b5dc.js";import"./index.e6824e1f.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./RightOutlined.656a20b0.js";import"./index.bed999aa.js";import"./useTimeout.7a6cd11a.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./index.99adaa1b.js";import"./index.c5668e8a.js";import"./RightOutlined.bad02d13.js";import"./types.b7a21d2a.js";import"./isEqual.9055b911.js";import"./toInteger.d50f777e.js";import"./DownOutlined.511c1f73.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=function(t,e){var r=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){f(t,e,r[e])}))}return t}({},t,e.attrs);return n(o,i(r,{icon:b}),null)};m.displayName="DeleteOutlined",m.inheritAttrs=!1;var h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=function(t,e){var r=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?Object(arguments[e]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),a.forEach((function(e){j(t,e,r[e])}))}return t}({},t,e.attrs);return n(o,i(r,{icon:h}),null)};g.displayName="PlusOutlined",g.inheritAttrs=!1;var v=s({components:{BasicTree:t,CollapseContainer:r,PageWrapper:a},setup:()=>({treeData:e,actionList:[{render:t=>l(g,{class:"ml-2",onClick:()=>{}})},{render:()=>l(m)}],getRightMenuList:function(t){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]}})});const y={class:"flex"};v.render=function(t,e,r,a,i,o){const s=c("BasicTree"),l=c("CollapseContainer"),b=c("PageWrapper");return u(),d(b,{title:"Tree函数操作示例"},{default:p((()=>[n("div",y,[n(l,{title:"右侧操作按钮",class:"mr-4",style:{width:"33%"}},{default:p((()=>[n(s,{treeData:t.treeData,actionList:t.actionList},null,8,["treeData","actionList"])])),_:1}),n(l,{title:"右键菜单",class:"mr-4",style:{width:"33%"}},{default:p((()=>[n(s,{treeData:t.treeData,beforeRightClick:t.getRightMenuList},null,8,["treeData","beforeRightClick"])])),_:1})])])),_:1})};export default v;