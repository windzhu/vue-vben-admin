import{d as e,h as i,o as t,i as r,bw as o,j as s}from"./index.9980ecf6.js";import{D as d}from"./index.21f0127c.js";import{D as a}from"./index.ae8fbe5b.js";import{_ as m}from"./index.545f677c.js";import{_ as n}from"./index.ab4f9cce.js";import{refundSchema as p,refundData as c,personSchema as j,personData as f,refundTableData as l,refundTableSchema as u,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.7c2ed0b6.js";import{u as g}from"./useTable.ecb10c7a.js";import"./vendor.3b1829c7.js";import"./index.df82476b.js";import"./responsiveObserve.c545f1cc.js";import"./index.6e83f1fa.js";import"./index.c977f47c.js";import"./domUtils.3e4d314d.js";import"./_stringToArray.af6be714.js";import"./RightOutlined.7c0e49be.js";/* empty css              */import"./useTimeout.8c3dbf36.js";import"./useScrollTo.16255ad3.js";import"./animation.5a794b55.js";import"./get.3aa978ca.js";import"./index.2495084e.js";import"./SearchOutlined.85473e31.js";import"./CheckOutlined.f834f4c5.js";import"./DownOutlined.68a7a070.js";import"./index.c402d592.js";import"./index.908cffc8.js";import"./index.9f58ca6b.js";import"./findIndex.cf51b4cf.js";import"./isEqual.c667f153.js";import"./_baseProperty.74f89655.js";import"./toInteger.36506383.js";import"./index.9af0cf7b.js";import"./index.8791975b.js";import"./EyeOutlined.22bc14f0.js";import"./index.55ce64da.js";import"./colors.ab7acfff.js";import"./index.f7b01e21.js";import"./UpOutlined.e7f05749.js";import"./index.1dd170b3.js";import"./RedoOutlined.bf1cabfc.js";import"./index.8f875014.js";import"./EllipsisOutlined.e36bd7a1.js";import"./types.9f989451.js";import"./Tree.cccd488a.js";import"./util.d4029dd2.js";import"./useAttrs.adda98f8.js";import"./uuid.4fb381fc.js";import"./index.bb1461e8.js";import"./DeleteOutlined.a002a5d7.js";import"./index.ed755aa0.js";import"./index.c177e243.js";import"./useWindowSizeFn.43e81504.js";import"./FullscreenOutlined.598706d7.js";import"./index.6ee8c3eb.js";import"./index.10572d85.js";import"./LeftOutlined.d4eb9cde.js";import"./download.d07fee2f.js";import"./index.c6d167ec.js";import"./DoubleLeftOutlined.e5d2cf94.js";import"./DoubleRightOutlined.2080bb59.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.be72a13c.js";import"./CaretDownFilled.6bbc7c8a.js";import"./clickOutside.8b651673.js";import"./useSortable.ee7c1ef0.js";import"./SettingOutlined.ed74a9e8.js";import"./useExpose.dee436c6.js";import"./useForm.6f73cf9b.js";import"./index.e1c3af5e.js";import"./index.dc9fb36a.js";import"./usePageContext.09429c6d.js";import"./ArrowLeftOutlined.1c0e6922.js";import"./index.98e86b23.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:a,BasicTable:m,PageWrapper:n,[d.name]:d},setup(){const[e]=g({title:"退货商品",dataSource:l,columns:u,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,t=0;return e.forEach((e=>{i+=e.t5,t+=e.t6})),[{t1:"总计",t5:i,t6:t}]}}),[i]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:p,refundData:c,personSchema:j,personData:f}}});const O=o("data-v-ada482fc"),T=O(((e,o,d,a,m,n)=>{const p=i("Description"),c=i("a-divider"),j=i("BasicTable"),f=i("PageWrapper");return t(),r(f,{title:"基础详情页",contentBackground:""},{default:O((()=>[s(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),s(c),s(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),s(c),s(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),s(c),s(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=T,h.__scopeId="data-v-ada482fc";export default h;
