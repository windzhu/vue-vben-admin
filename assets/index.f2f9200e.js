import{u as e}from"./useContextMenu.0a2d8397.js";import{a as t}from"./index.fe2a3406.js";import{d as i,g as n,h as o,o as s,i as a,w as l,j as r,m as p}from"./index.12192f00.js";import{_ as d}from"./index.006e14c0.js";import"./index.7aebfa6d.js";import"./RightOutlined.c9c720ac.js";import"./EllipsisOutlined.35ffd1d0.js";import"./types.4008733a.js";import"./isEqual.292bb384.js";import"./toInteger.db0f0ea0.js";/* empty css              */import"./index.c8c13533.js";import"./index.39f57c76.js";import"./domUtils.75e9c3bf.js";import"./_stringToArray.2d6cff8f.js";import"./useTimeout.061f51e0.js";import"./useScrollTo.0f57f985.js";import"./animation.b2b1e4b8.js";import"./vendor.3b1829c7.js";import"./index.459ff6cc.js";import"./DownOutlined.dd186a31.js";import"./index.053639c6.js";import"./usePageContext.6e0d629c.js";import"./transButton.616a14bf.js";import"./ArrowLeftOutlined.e1191e7a.js";var m=i({components:{CollapseContainer:t,PageWrapper:d},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const c=p(" Right Click on me "),u=p(" Right Click on me ");m.render=function(e,t,i,n,p,d){const m=o("a-button"),f=o("CollapseContainer"),b=o("PageWrapper");return s(),a(b,{title:"右键菜单示例"},{default:l((()=>[r(f,{title:"Simple"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[c])),_:1},8,["onContextmenu"])])),_:1}),r(f,{title:"Multiple",class:"mt-4"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;