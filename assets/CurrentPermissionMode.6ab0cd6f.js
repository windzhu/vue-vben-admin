import{d as e,K as s,bH as o,dy as i,bG as n,h as r,o as t,i as a,j as m,w as d,m as c,l}from"./index.9980ecf6.js";import{D as p}from"./index.21f0127c.js";import"./vendor.3b1829c7.js";var u=e({name:"CurrentPermissionMode",components:{Divider:p},setup(){const e=s((()=>n.getProjectConfig.permissionMode)),{togglePermissionMode:r}=i();return{permissionMode:e,PermissionModeEnum:o,togglePermissionMode:r}}});const f={class:"mt-2"},M=c(" 当前权限模式： "),g=c(" 切换权限模式 ");u.render=function(e,s,o,i,n,p){const u=r("a-button"),P=r("Divider");return t(),a("div",f,[M,m(u,{type:"link"},{default:d((()=>[c(l(e.permissionMode===e.PermissionModeEnum.BACK?"后台权限模式":"前端角色权限模式"),1)])),_:1}),m(u,{class:"ml-4",onClick:e.togglePermissionMode,type:"primary"},{default:d((()=>[g])),_:1},8,["onClick"]),m(P)])};export default u;
