import{d as e,bB as t,h as s,o,i as r,w as i,j as l,m as a}from"./index.9980ecf6.js";import{I as c}from"./index.8791975b.js";import{a as n}from"./index.6e83f1fa.js";import{_ as m}from"./index.ab4f9cce.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.85473e31.js";import"./EyeOutlined.22bc14f0.js";import"./index.c977f47c.js";import"./domUtils.3e4d314d.js";import"./_stringToArray.af6be714.js";import"./RightOutlined.7c0e49be.js";/* empty css              */import"./useTimeout.8c3dbf36.js";import"./useScrollTo.16255ad3.js";import"./animation.5a794b55.js";import"./index.e1c3af5e.js";import"./index.8f875014.js";import"./EllipsisOutlined.e36bd7a1.js";import"./types.9f989451.js";import"./isEqual.c667f153.js";import"./toInteger.36506383.js";import"./DownOutlined.68a7a070.js";import"./index.dc9fb36a.js";import"./usePageContext.09429c6d.js";import"./transButton.be72a13c.js";import"./ArrowLeftOutlined.1c0e6922.js";var p=e({name:"TabsDemo",components:{CollapseContainer:n,PageWrapper:m,[c.name]:c},setup(){const{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:i,refreshPage:l}=t();return{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:i,refreshPage:l}}});const d=a(" 关闭所有 "),f=a(" 关闭左侧 "),u=a(" 关闭右侧 "),j=a(" 关闭其他 "),C=a(" 关闭当前 "),b=a(" 刷新当前 ");p.render=function(e,t,a,c,n,m){const p=s("a-input"),h=s("CollapseContainer"),g=s("a-button"),k=s("PageWrapper");return o(),r(k,{title:"标签页操作示例"},{default:i((()=>[l(h,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:i((()=>[l(p,{placeholder:"请输入"})])),_:1}),l(h,{class:"mt-4",title:"标签页操作"},{default:i((()=>[l(g,{class:"mr-2",onClick:e.closeAll},{default:i((()=>[d])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeLeft},{default:i((()=>[f])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeRight},{default:i((()=>[u])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeOther},{default:i((()=>[j])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.closeCurrent},{default:i((()=>[C])),_:1},8,["onClick"]),l(g,{class:"mr-2",onClick:e.refreshPage},{default:i((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})};export default p;
