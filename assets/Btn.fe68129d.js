import{d as e,bb as s,bH as o,dA as t,dB as a,cp as r,cq as i,h as d,bA as n,o as c,i as m,bw as l,j as u,l as p,k as f,a3 as _,m as j}from"./index.12192f00.js";import{A as b}from"./index.d8b5d5c4.js";import{D as x}from"./index.c8c13533.js";import y from"./CurrentPermissionMode.879c2814.js";import{_ as P}from"./index.b00ddbb7.js";import{_ as h}from"./index.006e14c0.js";import"./vendor.3b1829c7.js";import"./index.459ff6cc.js";import"./index.7aebfa6d.js";import"./RightOutlined.c9c720ac.js";import"./EllipsisOutlined.35ffd1d0.js";import"./types.4008733a.js";import"./isEqual.292bb384.js";import"./toInteger.db0f0ea0.js";import"./DownOutlined.dd186a31.js";/* empty css              */import"./index.053639c6.js";import"./usePageContext.6e0d629c.js";import"./transButton.616a14bf.js";import"./ArrowLeftOutlined.e1191e7a.js";var g=e({components:{Alert:b,PageWrapper:h,CurrentPermissionMode:y,Divider:x,Authority:P},setup(){const{hasPermission:e}=t();async function r(e){const o=await a({userId:e});s.commitPermCodeListState(o)}return r("1"),{hasPermission:e,permissionStore:s,changePermissionCode:r,PermissionModeEnum:o}}});const C=l("data-v-66db6f51");r("data-v-66db6f51");const v=j(" 当前拥有的code列表: "),A=j(" 点击切换按钮权限(用户id为2) "),k=j(" 点击切换按钮权限(用户id为1,默认) "),w=j("组件方式判断权限"),D=j(" 拥有code ['1000']权限可见 "),M=j(" 拥有code ['2000']权限可见 "),O=j(" 拥有code ['1000','2000']角色权限可见 "),S=j("函数方式方式判断权限"),B=j(" 拥有code ['1000']权限可见 "),E=j(" 拥有code ['2000']权限可见 "),I=j(" 拥有code ['1000','2000']角色权限可见 "),L=j("指令方式方式判断权限(该方式不能动态修改权限.)"),q=j(" 拥有code ['1000']权限可见 "),W=j(" 拥有code ['2000']权限可见 "),H=j(" 拥有code ['1000','2000']角色权限可见 ");i();const R=C(((e,s,o,t,a,r)=>{const i=d("Alert"),l=d("CurrentPermissionMode"),j=d("Divider"),b=d("a-button"),x=d("Authority"),y=d("PageWrapper"),P=n("auth");return c(),m(y,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:C((()=>[u(i,{message:"刷新后会还原","show-icon":""}),u(l),u("p",null,[v,u("a",null,p(e.permissionStore.getPermCodeListState),1)]),u(j),u(i,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),u(j),u(b,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:C((()=>[A])),_:1}),u(b,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:C((()=>[k])),_:1}),u(j,null,{default:C((()=>[w])),_:1}),u(x,{value:"1000"},{default:C((()=>[u(b,{type:"primary",class:"mx-4"},{default:C((()=>[D])),_:1})])),_:1}),u(x,{value:"2000"},{default:C((()=>[u(b,{color:"success",class:"mx-4"},{default:C((()=>[M])),_:1})])),_:1}),u(x,{value:["1000","2000"]},{default:C((()=>[u(b,{color:"error",class:"mx-4"},{default:C((()=>[O])),_:1})])),_:1}),u(j,null,{default:C((()=>[S])),_:1}),e.hasPermission("1000")?(c(),m(b,{key:0,type:"primary",class:"mx-4"},{default:C((()=>[B])),_:1})):f("",!0),e.hasPermission("2000")?(c(),m(b,{key:1,color:"success",class:"mx-4"},{default:C((()=>[E])),_:1})):f("",!0),e.hasPermission(["1000","2000"])?(c(),m(b,{key:2,color:"error",class:"mx-4"},{default:C((()=>[I])),_:1})):f("",!0),u(j,null,{default:C((()=>[L])),_:1}),_(u(b,{type:"primary",class:"mx-4"},{default:C((()=>[q])),_:1},512),[[P,"1000"]]),_(u(b,{color:"success",class:"mx-4"},{default:C((()=>[W])),_:1},512),[[P,"2000"]]),_(u(b,{color:"error",class:"mx-4"},{default:C((()=>[H])),_:1},512),[[P,["1000","2000"]]])])),_:1})}));g.render=R,g.__scopeId="data-v-66db6f51";export default g;