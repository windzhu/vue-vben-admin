let t=document.createElement("style");t.innerHTML=".news-list__item-avatar[data-v-1006fc50]{width:35px;height:35px;border-radius:50%}.news-list__item-title[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.65}.news-list__item-time[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.45}.news-list__item-light[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.85}.news-list__item-cnte[data-v-1006fc50]{background:#eef3fb;border-radius:2px;opacity:.6}.news-list__item-cnte__title[data-v-1006fc50]{font-size:14px;line-height:22px;color:rgba(0,0,0,.85)}",document.head.appendChild(t);import{a as e,d0 as s,d1 as i,i as a,o as l,j as n,k as o,aM as r,b9 as d,n as c,p as m,bi as p}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./index.1e7ca35a.js";import"./Trigger.20ed9977.js";import"./omit.e94ccb8d.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.71c323b3.js";import"./CheckOutlined.04ceadd9.js";import"./RightOutlined.5a1d395b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import"./LeftOutlined.3c8aea2a.js";import"./index.2eda427c.js";import"./zh_CN.0242bd16.js";import{L as _}from"./index.b5da176f.js";import{a as u,s as f}from"./index.a5990709.js";import"./RightOutlined.b735e334.js";import"./useTimeout.261f68e1.js";import"./tsxHelper.877239e6.js";import"./index.2418dbe9.js";import"./domUtils.34789ce4.js";import"./index.0f525ba4.js";import"./animation.e52d0262.js";import"./useScrollTo.73d3059d.js";import{n as j}from"./data.edc06832.js";import{_ as x}from"./header.0299ae16.js";var b=e({components:{List:_,ListItem:_.Item,ListItemMeta:_.Item.Meta,CollapseContainer:u,ScrollContainer:f},setup:()=>({newList:j})});const h=p("data-v-1006fc50");s("data-v-1006fc50");const w=o("img",{src:x,class:"news-list__item-avatar"},null,-1),v={class:"news-list__item-desc"},g={class:"news-list__item-time mb-1"},L={class:"news-list__item-title mb-1"},C={class:"news-list__item-light"},y=m("申请迭代 "),I={class:"news-list__item-light"},S=m("发布 "),T={class:"news-list__item-cnte p-2"},z={class:"news-list__item-cnte__title"},M=o("br",null,null,-1),O=o("br",null,null,-1),k=o("br",null,null,-1);i();const R=h(((t,e,s,i,p,_)=>{const u=a("ListItemMeta"),f=a("ListItem"),j=a("List"),x=a("ScrollContainer"),b=a("CollapseContainer");return l(),n(b,{class:"news-list",title:"动态",canExpan:!1},{default:h((()=>[o(x,null,{default:h((()=>[o(j,null,{default:h((()=>[(l(!0),n(r,null,d(t.newList,(t=>(l(),n(f,{key:t.id,class:"news-list__item"},{default:h((()=>[o(u,null,{avatar:h((()=>[w])),description:h((()=>[o("div",v,[o("div",g,c(t.sendTime),1),o("div",L,[o("span",C,c(t.sender)+" ",1),y,o("span",I," "+c(t.title)+" ",1),S]),o("div",T,[o("span",z,c(t.cnteId),1),M,m(" Status: "+c(t.cnteStas)+" ",1),O,m(" Repository: "+c(t.cnteRepo)+" ",1),k])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}));b.render=R,b.__scopeId="data-v-1006fc50";export default b;