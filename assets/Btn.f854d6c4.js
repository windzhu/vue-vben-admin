import{d as e,bb as s,bH as o,dA as t,dB as a,cp as r,cq as i,h as d,bA as n,o as c,i as m,bw as l,j as u,l as p,k as f,a3 as b,m as _}from"./index.d77f02a9.js";import{A as j}from"./index.d61bd1bf.js";import{D as x}from"./index.52f18b9b.js";import y from"./CurrentPermissionMode.d57c1e6f.js";import{_ as P}from"./index.b4534a22.js";import{_ as h}from"./index.6781f66c.js";import"./vendor.3b1829c7.js";import"./index.afd079bf.js";import"./index.7e51aec0.js";import"./RightOutlined.91dd89cb.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./isEqual.66f620a0.js";import"./toInteger.007e1a46.js";import"./DownOutlined.4bb15dc2.js";/* empty css              */import"./index.f3100edb.js";import"./usePageContext.b4dcd332.js";import"./transButton.29cc983c.js";import"./ArrowLeftOutlined.3f5c2cff.js";var g=e({components:{Alert:j,PageWrapper:h,CurrentPermissionMode:y,Divider:x,Authority:P},setup(){const{hasPermission:e}=t();async function r(e){const o=await a({userId:e});s.commitPermCodeListState(o)}return r("1"),{hasPermission:e,permissionStore:s,changePermissionCode:r,PermissionModeEnum:o}}});const C=l("data-v-66db6f51");r("data-v-66db6f51");const v=_(" 当前拥有的code列表: "),A=_(" 点击切换按钮权限(用户id为2) "),k=_(" 点击切换按钮权限(用户id为1,默认) "),w=_("组件方式判断权限"),D=_(" 拥有code ['1000']权限可见 "),M=_(" 拥有code ['2000']权限可见 "),O=_(" 拥有code ['1000','2000']角色权限可见 "),S=_("函数方式方式判断权限"),B=_(" 拥有code ['1000']权限可见 "),E=_(" 拥有code ['2000']权限可见 "),I=_(" 拥有code ['1000','2000']角色权限可见 "),L=_("指令方式方式判断权限(该方式不能动态修改权限.)"),q=_(" 拥有code ['1000']权限可见 "),W=_(" 拥有code ['2000']权限可见 "),H=_(" 拥有code ['1000','2000']角色权限可见 ");i();const R=C(((e,s,o,t,a,r)=>{const i=d("Alert"),l=d("CurrentPermissionMode"),_=d("Divider"),j=d("a-button"),x=d("Authority"),y=d("PageWrapper"),P=n("auth");return c(),m(y,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:C((()=>[u(i,{message:"刷新后会还原","show-icon":""}),u(l),u("p",null,[v,u("a",null,p(e.permissionStore.getPermCodeListState),1)]),u(_),u(i,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),u(_),u(j,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:C((()=>[A])),_:1}),u(j,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:C((()=>[k])),_:1}),u(_,null,{default:C((()=>[w])),_:1}),u(x,{value:"1000"},{default:C((()=>[u(j,{type:"primary",class:"mx-4"},{default:C((()=>[D])),_:1})])),_:1}),u(x,{value:"2000"},{default:C((()=>[u(j,{color:"success",class:"mx-4"},{default:C((()=>[M])),_:1})])),_:1}),u(x,{value:["1000","2000"]},{default:C((()=>[u(j,{color:"error",class:"mx-4"},{default:C((()=>[O])),_:1})])),_:1}),u(_,null,{default:C((()=>[S])),_:1}),e.hasPermission("1000")?(c(),m(j,{key:0,type:"primary",class:"mx-4"},{default:C((()=>[B])),_:1})):f("",!0),e.hasPermission("2000")?(c(),m(j,{key:1,color:"success",class:"mx-4"},{default:C((()=>[E])),_:1})):f("",!0),e.hasPermission(["1000","2000"])?(c(),m(j,{key:2,color:"error",class:"mx-4"},{default:C((()=>[I])),_:1})):f("",!0),u(_,null,{default:C((()=>[L])),_:1}),b(u(j,{type:"primary",class:"mx-4"},{default:C((()=>[q])),_:1},512),[[P,"1000"]]),b(u(j,{color:"success",class:"mx-4"},{default:C((()=>[W])),_:1},512),[[P,"2000"]]),b(u(j,{color:"error",class:"mx-4"},{default:C((()=>[H])),_:1},512),[[P,["1000","2000"]]])])),_:1})}));g.render=R,g.__scopeId="data-v-66db6f51";export default g;