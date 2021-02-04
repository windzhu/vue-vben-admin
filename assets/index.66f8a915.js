import{d as e,r as o,cp as t,cq as i,h as r,o as s,i as n,bw as p,j as l,m as d}from"./index.9980ecf6.js";import{C as a}from"./index.eebe8adb.js";import"./index.a6e3238e.js";import"./index.9f58ca6b.js";import{_ as c}from"./index.c402d592.js";import m from"./PersonTable.2ce32d17.js";import{_ as f}from"./index.ab4f9cce.js";import{u}from"./useForm.6f73cf9b.js";import"./vendor.3b1829c7.js";import"./index.9af0cf7b.js";import"./UpOutlined.e7f05749.js";import"./LeftOutlined.d4eb9cde.js";import"./DownOutlined.68a7a070.js";import"./RightOutlined.7c0e49be.js";import"./PlusOutlined.67562156.js";import"./responsiveObserve.c545f1cc.js";import"./index.908cffc8.js";import"./findIndex.cf51b4cf.js";import"./isEqual.c667f153.js";import"./get.3aa978ca.js";import"./_baseProperty.74f89655.js";import"./toInteger.36506383.js";import"./index.8791975b.js";import"./SearchOutlined.85473e31.js";import"./EyeOutlined.22bc14f0.js";import"./index.2495084e.js";import"./CheckOutlined.f834f4c5.js";import"./index.55ce64da.js";import"./colors.ab7acfff.js";import"./index.f7b01e21.js";import"./index.1dd170b3.js";import"./RedoOutlined.bf1cabfc.js";import"./index.8f875014.js";import"./EllipsisOutlined.e36bd7a1.js";import"./types.9f989451.js";import"./Tree.cccd488a.js";import"./util.d4029dd2.js";import"./useAttrs.adda98f8.js";/* empty css              */import"./uuid.4fb381fc.js";import"./index.bb1461e8.js";import"./DeleteOutlined.a002a5d7.js";import"./index.ed755aa0.js";import"./index.c177e243.js";import"./useTimeout.8c3dbf36.js";import"./useWindowSizeFn.43e81504.js";import"./index.6e83f1fa.js";import"./index.c977f47c.js";import"./domUtils.3e4d314d.js";import"./_stringToArray.af6be714.js";import"./useScrollTo.16255ad3.js";import"./animation.5a794b55.js";import"./FullscreenOutlined.598706d7.js";import"./index.21f0127c.js";import"./index.6ee8c3eb.js";import"./index.10572d85.js";import"./download.d07fee2f.js";import"./index.545f677c.js";import"./index.c6d167ec.js";import"./DoubleLeftOutlined.e5d2cf94.js";import"./DoubleRightOutlined.2080bb59.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.be72a13c.js";import"./CaretDownFilled.6bbc7c8a.js";import"./clickOutside.8b651673.js";import"./useSortable.ee7c1ef0.js";import"./SettingOutlined.ed74a9e8.js";import"./useExpose.dee436c6.js";import"./useTable.ecb10c7a.js";import"./index.e1c3af5e.js";import"./index.dc9fb36a.js";import"./usePageContext.09429c6d.js";import"./ArrowLeftOutlined.1c0e6922.js";const j=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],b=[{label:"私密",value:"1"},{label:"公开",value:"2"}],x=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:j},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:b},required:!0,colProps:{offset:2}}],P=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:j},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:b},required:!0,colProps:{offset:2}}];var g=e({components:{BasicForm:c,PersonTable:m,PageWrapper:f,[a.name]:a},setup(){const e=o(null),[t,{validate:i}]=u({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1}),[r,{validate:s}]=u({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1});return{register:t,registerTask:r,submitAll:async function(){try{e.value;const[o,t]=await Promise.all([i(),s()])}catch(o){}},tableRef:e}}});const O=p("data-v-2d2b3260");t("data-v-2d2b3260");const h=d(" 提交 ");i();const q=O(((e,o,t,i,p,d)=>{const a=r("BasicForm"),c=r("a-card"),m=r("PersonTable"),f=r("a-button"),u=r("PageWrapper");return s(),n(u,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。",contentClass:"p-4"},{rightFooter:O((()=>[l(f,{type:"primary",onClick:e.submitAll},{default:O((()=>[h])),_:1},8,["onClick"])])),default:O((()=>[l(c,{title:"仓库管理",bordered:!1},{default:O((()=>[l(a,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(c,{title:"任务管理",bordered:!1,class:"mt-5"},{default:O((()=>[l(a,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),l(c,{title:"成员管理",bordered:!1,class:"mt-5"},{default:O((()=>[l(m,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=q,g.__scopeId="data-v-2d2b3260";export default g;
