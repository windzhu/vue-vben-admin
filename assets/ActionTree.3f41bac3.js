import{B as e,t}from"./data.ce7c5429.js";import{a}from"./index.6e83f1fa.js";import{d as n,r as s,g as l,e as o,h as c,o as i,i as r,w as d,j as p,m as u}from"./index.9980ecf6.js";import{_ as f}from"./index.ab4f9cce.js";import"./index.c977f47c.js";import"./domUtils.3e4d314d.js";import"./_stringToArray.af6be714.js";import"./RightOutlined.7c0e49be.js";/* empty css              */import"./useTimeout.8c3dbf36.js";import"./useScrollTo.16255ad3.js";import"./animation.5a794b55.js";import"./vendor.3b1829c7.js";import"./index.e1c3af5e.js";import"./index.8f875014.js";import"./EllipsisOutlined.e36bd7a1.js";import"./types.9f989451.js";import"./isEqual.c667f153.js";import"./toInteger.36506383.js";import"./DownOutlined.68a7a070.js";import"./index.dc9fb36a.js";import"./usePageContext.09429c6d.js";import"./transButton.be72a13c.js";import"./ArrowLeftOutlined.1c0e6922.js";var m=n({components:{BasicTree:e,CollapseContainer:a,PageWrapper:f},setup(){const e=s(null),{createMessage:a}=l();function n(){const t=o(e);if(!t)throw new Error("tree is null!");return t}return{treeData:t,treeRef:e,handleLevel:function(e){n().filterByLevel(e)},handleSetCheckData:function(){n().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=n().getCheckedKeys();a.success(JSON.stringify(e))},handleSetSelectData:function(){n().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=n().getSelectedKeys();a.success(JSON.stringify(e))},handleSetExpandData:function(){n().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=n().getExpandedKeys();a.success(JSON.stringify(e))},appendNodeByKey:function(e=null){n().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){n().deleteNodeByKey(e)},updateNodeByKey:function(e){n().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=u(" 显示到第2级 "),h=u(" 显示到第1级 "),k=u(" 设置勾选数据 "),j=u(" 获取勾选数据 "),x=u(" 设置选中数据 "),D=u(" 获取选中数据 "),K=u(" 设置展开数据 "),B=u(" 获取展开数据 "),S={class:"mb-4"},_=u(" 添加根节点 "),g=u(" 添加在parent3内添加节点 "),b=u(" 删除parent3节点 "),N=u(" 更新parent2节点 ");m.render=function(e,t,a,n,s,l){const o=c("a-button"),u=c("BasicTree"),f=c("CollapseContainer"),m=c("PageWrapper");return i(),r(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:d((()=>[p("div",y,[p(o,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:d((()=>[C])),_:1}),p(o,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:d((()=>[h])),_:1}),p(o,{onClick:e.handleSetCheckData,class:"mr-2"},{default:d((()=>[k])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetCheckData,class:"mr-2"},{default:d((()=>[j])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetSelectData,class:"mr-2"},{default:d((()=>[x])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetSelectData,class:"mr-2"},{default:d((()=>[D])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetExpandData,class:"mr-2"},{default:d((()=>[K])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetExpandData,class:"mr-2"},{default:d((()=>[B])),_:1},8,["onClick"])]),p("div",S,[p(o,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:d((()=>[_])),_:1}),p(o,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:d((()=>[g])),_:1}),p(o,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:d((()=>[b])),_:1}),p(o,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:d((()=>[N])),_:1})]),p(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:d((()=>[p(u,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;
