import{d as e,K as s,bH as o,dA as i,bG as n,h as r,o as t,i as a,j as d,w as m,m as c,l}from"./index.24307e55.js";import{D as p}from"./index.d91c8c4a.js";import"./vendor.3b1829c7.js";var u=e({name:"CurrentPermissionMode",components:{Divider:p},setup(){const e=s((()=>n.getProjectConfig.permissionMode)),{togglePermissionMode:r}=i();return{permissionMode:e,PermissionModeEnum:o,togglePermissionMode:r}}});const M={class:"mt-2"},g=c(" 当前权限模式： "),f=c(" 切换权限模式 ");u.render=function(e,s,o,i,n,p){const u=r("a-button"),P=r("Divider");return t(),a("div",M,[g,d(u,{type:"link"},{default:m((()=>[c(l(e.permissionMode===e.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),d(u,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:m((()=>[f])),_:1},8,["onClick"]),d(P)])};export default u;