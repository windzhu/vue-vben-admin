import{d as e,aN as a,h as s,o as i,i as r,j as t,w as l,k as n,aO as o,aP as d}from"./index.d4318adc.js";import{I as m}from"./index.7a0b53c5.js";import"./vendor.783aefe0.js";import"./LeftOutlined.9f33daa5.js";import"./RightOutlined.aa2d326a.js";var p=e({name:"TableImage",components:{Image:m,PreviewGroup:m.PreviewGroup},props:{imgList:{type:Array,default:null},size:{type:Number,default:40}},setup(){const{prefixCls:e}=a("basic-table-img");return{prefixCls:e}}});p.render=function(e,a,m,p,u,f){const c=s("Image"),g=s("PreviewGroup");return e.imgList&&e.imgList.length?(i(),r("div",{key:0,class:e.prefixCls},[t(g,null,{default:l((()=>[(i(!0),r(o,null,d(e.imgList,(a=>(i(),r(c,{key:a,width:e.size,src:a},null,8,["width","src"])))),128))])),_:1})],2)):n("",!0)};export default p;