import{_ as s}from"./index.6e83f1fa.js";import{_ as o}from"./index.ab4f9cce.js";import{d as t,r,e as l,cp as a,cq as e,h as i,o as c,i as n,j as m,aL as p,aM as d,l as f,bw as u,m as j}from"./index.9980ecf6.js";import"./index.c977f47c.js";import"./domUtils.3e4d314d.js";import"./_stringToArray.af6be714.js";import"./RightOutlined.7c0e49be.js";/* empty css              */import"./useTimeout.8c3dbf36.js";import"./useScrollTo.16255ad3.js";import"./animation.5a794b55.js";import"./index.e1c3af5e.js";import"./index.8f875014.js";import"./EllipsisOutlined.e36bd7a1.js";import"./types.9f989451.js";import"./isEqual.c667f153.js";import"./toInteger.36506383.js";import"./DownOutlined.68a7a070.js";import"./index.dc9fb36a.js";import"./usePageContext.09429c6d.js";import"./transButton.be72a13c.js";import"./ArrowLeftOutlined.1c0e6922.js";import"./vendor.3b1829c7.js";var b=t({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=r(null),o=()=>{const o=l(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const x=u("data-v-331a2139");a("data-v-331a2139");const _={class:"my-4"},T=j(" 滚动到100px位置 "),v=j(" 滚动到800px位置 "),C=j(" 滚动到顶部 "),g=j(" 滚动到底部 "),w={class:"scroll-wrap"},k={class:"p-3"};e();const y=x(((s,o,t,r,l,a)=>{const e=i("a-button"),u=i("ScrollContainer"),j=i("PageWrapper");return c(),n(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:x((()=>[m("div",_,[m(e,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:x((()=>[T])),_:1}),m(e,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:x((()=>[v])),_:1}),m(e,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:x((()=>[C])),_:1}),m(e,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:x((()=>[g])),_:1})]),m("div",w,[m(u,{class:"mt-4",ref:"scrollRef"},{default:x((()=>[m("ul",k,[(c(),n(p,null,d(100,(s=>m("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},f(s),1))),64))])])),_:1},512)])])),_:1})}));b.render=y,b.__scopeId="data-v-331a2139";export default b;
