let e=document.createElement("style");e.innerHTML=".vben-setting-switch-item[data-v-2b7b2ae4]{display:flex;justify-content:space-between;margin:16px 0}",document.head.appendChild(e);import{a as t,aY as i,u as a,I as s,i as n,o as d,j as o,k as r,n as l,J as p,bi as c}from"./index.4a20657c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7a5207ea.js";import"./index.156d08e6.js";import{S as m}from"./index.e33fc4bc.js";import"./index.1434c1eb.js";import"./index.92ed2934.js";import"./index.49625164.js";import"./RightOutlined.204b1f99.js";import"./SettingOutlined.ba60aba1.js";import"./useTimeout.98476688.js";import"./tsxHelper.681cabc4.js";import"./index.d58e2269.js";import"./animation.89606e29.js";import"./useScrollTo.a7e7001a.js";import"./useAttrs.5a25a26a.js";import"./useHeaderSetting.33d2feee.js";import{b as u}from"./index.1cf0059b.js";var b=t({name:"SwitchItem",components:{Switch:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=i("setting-switch-item"),{t:n}=a();return{prefixCls:t,t:n,handleChange:function(t){e.event&&u(e.event,t)},getBindValue:s((()=>e.def?{checked:e.def}:{}))}}});const h=c("data-v-2b7b2ae4")(((e,t,i,a,s,c)=>{const m=n("Switch");return d(),o("div",{class:e.prefixCls},[r("span",null,l(e.title),1),r(m,p(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));b.render=h,b.__scopeId="data-v-2b7b2ae4";export default b;