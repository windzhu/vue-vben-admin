import{H as e,a as t,r as s,I as a,f as i,ay as l,Z as o,de as n,cZ as r}from"./index.4a20657c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7a5207ea.js";import{a as d}from"./index.92ed2934.js";import"./RightOutlined.204b1f99.js";import{D as p}from"./index.761e3b72.js";import"./useTimeout.98476688.js";import{g as c}from"./tsxHelper.681cabc4.js";import"./index.d58e2269.js";import"./animation.89606e29.js";import"./useScrollTo.a7e7001a.js";var m={useCollapse:e.bool.def(!0),title:e.string.def(""),size:e.oneOf(["small","default","middle",void 0]).def("small"),bordered:e.bool.def(!0),column:{type:[Number,Object],default:()=>({xxl:4,xl:3,lg:3,md:3,sm:2,xs:1})},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:e.object};var u=t({name:"Description",props:m,emits:["register"],setup(e,{attrs:t,slots:m,emit:u}){const f=s(null),x=a((()=>({...e,...i(f)}))),b=a((()=>({...i(x),title:void 0}))),j=a((()=>!!i(x).title)),h=a((()=>({canExpand:!1,...i(b).collapseOptions}))),y=a((()=>({...t,...i(b)})));function g({label:e,labelMinWidth:t,labelStyle:s}){if(!s&&!t)return e;const a={...s,minWidth:`${t}px `};return l("div",{style:a},e)}const v=()=>l(p,{class:"description",...i(y)},(()=>function(){const{schema:e}=i(b);return i(e).map((e=>{const{render:t,field:s,span:a,show:n,contentMinWidth:r}=e,{data:d}=i(b);if(n&&o(n)&&!n(d))return null;const c=()=>o(t)?t(null==d?void 0:d[s],d):i(d)&&i(d)[s],m=r;return l(p.Item,{label:g(e),key:s,span:a},(()=>r?l("div",{style:{minWidth:`${m}px`}},c()):c()))}))}()));return u("register",{setDescProps:function(e){const t=n(i(f)||{},e);f.value=r(t)}}),()=>i(j)?(()=>{const t=e.useCollapse?v():l("div",null,v());if(!e.useCollapse)return t;const{canExpand:s,helpMessage:a}=i(h),{title:o}=i(x);return l(d,{title:o,canExpan:s,helpMessage:a},{default:()=>t,action:()=>c(m,"action")})})():v()}});export default u;