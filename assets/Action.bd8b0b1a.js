import{_ as s}from"./index.fe2a3406.js";import{_ as o}from"./index.006e14c0.js";import{d as t,r,e as l,cp as a,cq as e,h as i,o as c,i as n,j as d,aL as m,aM as p,l as f,bw as u,m as j}from"./index.12192f00.js";import"./index.39f57c76.js";import"./domUtils.75e9c3bf.js";import"./_stringToArray.2d6cff8f.js";import"./RightOutlined.c9c720ac.js";/* empty css              */import"./useTimeout.061f51e0.js";import"./useScrollTo.0f57f985.js";import"./animation.b2b1e4b8.js";import"./index.459ff6cc.js";import"./index.7aebfa6d.js";import"./EllipsisOutlined.35ffd1d0.js";import"./types.4008733a.js";import"./isEqual.292bb384.js";import"./toInteger.db0f0ea0.js";import"./DownOutlined.dd186a31.js";import"./index.053639c6.js";import"./usePageContext.6e0d629c.js";import"./transButton.616a14bf.js";import"./ArrowLeftOutlined.e1191e7a.js";import"./vendor.3b1829c7.js";var b=t({components:{ScrollContainer:s,PageWrapper:o},setup(){const s=r(null),o=()=>{const o=l(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const x=u("data-v-331a2139");a("data-v-331a2139");const _={class:"my-4"},T=j(" 滚动到100px位置 "),v=j(" 滚动到800px位置 "),C=j(" 滚动到顶部 "),g=j(" 滚动到底部 "),w={class:"scroll-wrap"},k={class:"p-3"};e();const y=x(((s,o,t,r,l,a)=>{const e=i("a-button"),u=i("ScrollContainer"),j=i("PageWrapper");return c(),n(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:x((()=>[d("div",_,[d(e,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:x((()=>[T])),_:1}),d(e,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:x((()=>[v])),_:1}),d(e,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:x((()=>[C])),_:1}),d(e,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:x((()=>[g])),_:1})]),d("div",w,[d(u,{class:"mt-4",ref:"scrollRef"},{default:x((()=>[d("ul",k,[(c(),n(m,null,p(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},f(s),1))),64))])])),_:1},512)])])),_:1})}));b.render=y,b.__scopeId="data-v-331a2139";export default b;