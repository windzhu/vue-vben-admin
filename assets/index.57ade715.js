var e=Object.assign;import{d as t,r as i,a as r,aF as o,cr as s,cs as n,h as a,o as d,i as p,bz as m,j as c,H as j,bc as u,k as l}from"./index.50e8b5dc.js";import{S as b}from"./index.8ed40344.js";import f from"./Step1.f69edcb8.js";import x from"./Step2.baf25fb0.js";import S from"./Step3.ddbb7a84.js";import{_ as v}from"./index.705ab234.js";import"./CheckOutlined.6b085d0a.js";import"./index.d00232d0.js";import"./index.93fd3c0b.js";import"./SearchOutlined.f21918b7.js";import"./EyeOutlined.82f0228d.js";import"./index.4d32c4f3.js";import"./DownOutlined.511c1f73.js";import"./index.83e0220c.js";import"./index.049f6bbf.js";import"./responsiveObserve.c545f1cc.js";import"./index.b8a80e42.js";import"./findIndex.b67caeba.js";import"./isEqual.9055b911.js";import"./_baseProperty.74f89655.js";import"./toInteger.d50f777e.js";import"./index.c1a51e2c.js";import"./index.b4d537fa.js";import"./index.581cccd4.js";import"./UpOutlined.9e8a689d.js";import"./index.1eb09ce2.js";import"./colors.ecead0c8.js";import"./RightOutlined.bad02d13.js";import"./index.c5668e8a.js";import"./types.b7a21d2a.js";import"./Tree.3f8e42fc.js";import"./util.69d03ed7.js";import"./useAttrs.69eb42c1.js";import"./index.bed999aa.js";import"./index.1cccff52.js";import"./uuid.ea3aa4d9.js";import"./index.42611e40.js";import"./index.da8886dc.js";import"./useTimeout.7a6cd11a.js";import"./useWindowSizeFn.0f9e7345.js";import"./index.1be6d046.js";import"./index.e6824e1f.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./RightOutlined.656a20b0.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./FullscreenOutlined.5c535d53.js";import"./index.a4b4ad38.js";import"./index.b7a80bfd.js";import"./LeftOutlined.1c66b0ce.js";import"./download.9c02ebfa.js";import"./data.2505cb7f.js";import"./useForm.e966d398.js";import"./index.5a0d5197.js";import"./index.9afbdbb3.js";import"./index.99adaa1b.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";var h=t({components:{Step1:f,Step2:x,Step3:S,PageWrapper:v,[b.name]:b,[b.Step.name]:b.Step},setup(){const t=i(0),s=r({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,s.initSetp2=!0},handleStep2Next:function(e){t.value++,s.initSetp3=!0},handleRedo:function(){t.value=0,s.initSetp2=!1,s.initSetp3=!1},handleStepPrev:function(){t.value--}},o(s))}});const O=m("data-v-6a09ea8d");s("data-v-6a09ea8d");const g={class:"step-form-form"},N={class:"mt-5"};n();const P=O(((e,t,i,r,o,s)=>{const n=a("a-step"),m=a("a-steps"),b=a("Step1"),f=a("Step2"),x=a("Step3"),S=a("PageWrapper");return d(),p(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:O((()=>[c("div",g,[c(m,{current:e.current},{default:O((()=>[c(n,{title:"填写转账信息"}),c(n,{title:"确认转账信息"}),c(n,{title:"完成"})])),_:1},8,["current"])]),c("div",N,[j(c(b,{onNext:e.handleStep1Next},null,8,["onNext"]),[[u,0===e.current]]),e.initSetp2?j((d(),p(f,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[u,1===e.current]]):l("",!0),e.initSetp3?j((d(),p(x,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[u,2===e.current]]):l("",!0)])])),_:1})}));h.render=P,h.__scopeId="data-v-6a09ea8d";export default h;