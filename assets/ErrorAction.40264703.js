import{d as t,b1 as o,u as e,aQ as r,K as a,aB as n,du as s,h as i,o as u,i as d,w as l,j as c}from"./index.9980ecf6.js";/* empty css              */import{B as m}from"./index.98e86b23.js";import{B as f}from"./BugOutlined.b44591f5.js";import"./vendor.3b1829c7.js";import"./colors.ab7acfff.js";import"./isNumeric.2bec345d.js";var p=t({name:"ErrorAction",components:{BugOutlined:f,Tooltip:o,Badge:m},setup(){const{t:t}=e(),{push:o}=r();return{t:t,getCount:a((()=>s.getErrorListCountState)),handleToErrorList:function(){o(n.ERROR_LOG_PAGE).then((()=>{s.commitErrorListCountState(0)}))}}}});p.render=function(t,o,e,r,a,n){const s=i("BugOutlined"),m=i("Badge"),f=i("Tooltip");return u(),d(f,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:l((()=>[c(m,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:l((()=>[c(s)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default p;
