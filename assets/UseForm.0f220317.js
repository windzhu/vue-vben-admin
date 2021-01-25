import{_ as e}from"./index.83e0220c.js";import{a as s}from"./index.1be6d046.js";import{d as o,g as t,h as i,o as a,i as l,w as r,j as n,m as p}from"./index.50e8b5dc.js";import{_ as d}from"./index.705ab234.js";import{u as c}from"./useForm.e966d398.js";import"./index.049f6bbf.js";import"./responsiveObserve.c545f1cc.js";import"./index.b8a80e42.js";import"./findIndex.b67caeba.js";import"./isEqual.9055b911.js";import"./_baseProperty.74f89655.js";import"./toInteger.d50f777e.js";import"./index.c1a51e2c.js";import"./index.4d32c4f3.js";import"./SearchOutlined.f21918b7.js";import"./DownOutlined.511c1f73.js";import"./CheckOutlined.6b085d0a.js";import"./index.b4d537fa.js";import"./index.581cccd4.js";import"./UpOutlined.9e8a689d.js";import"./index.93fd3c0b.js";import"./EyeOutlined.82f0228d.js";import"./index.1eb09ce2.js";import"./colors.ecead0c8.js";import"./RightOutlined.bad02d13.js";import"./index.c5668e8a.js";import"./types.b7a21d2a.js";import"./Tree.3f8e42fc.js";import"./util.69d03ed7.js";import"./useAttrs.69eb42c1.js";import"./index.bed999aa.js";import"./index.1cccff52.js";import"./uuid.ea3aa4d9.js";import"./index.42611e40.js";import"./index.da8886dc.js";import"./useTimeout.7a6cd11a.js";import"./useWindowSizeFn.0f9e7345.js";import"./FullscreenOutlined.5c535d53.js";import"./index.d00232d0.js";import"./index.a4b4ad38.js";import"./index.b7a80bfd.js";import"./LeftOutlined.1c66b0ce.js";import"./download.9c02ebfa.js";import"./domUtils.7471ed8a.js";import"./_stringToArray.e20740db.js";import"./index.e6824e1f.js";import"./RightOutlined.656a20b0.js";import"./useScrollTo.5a3db6eb.js";import"./animation.0475f0b1.js";import"./index.99adaa1b.js";import"./index.7c2f4390.js";import"./usePageContext.555c8737.js";import"./transButton.469a8bab.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=o({components:{BasicForm:e,CollapseContainer:s,PageWrapper:d},setup(){const{createMessage:e}=t(),[s,{setProps:o}]=c({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:s,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:o}}});const b={class:"mb-4"},f=p("更改labelWidth"),j=p("还原labelWidth"),P=p("更改Size"),x=p("还原Size"),C=p("禁用表单"),h=p("解除禁用"),k=p("紧凑表单"),_=p("还原正常间距"),g=p(" 操作按钮位置 "),O={class:"mb-4"},S=p(" 隐藏操作按钮 "),v=p(" 显示操作按钮 "),w=p(" 隐藏重置按钮 "),B=p(" 显示重置按钮 "),W=p(" 隐藏查询按钮 "),y=p(" 显示查询按钮 "),F=p(" 修改重置按钮 "),R=p(" 修改查询按钮 ");u.render=function(e,s,o,t,p,d){const c=i("a-button"),m=i("BasicForm"),u=i("CollapseContainer"),z=i("PageWrapper");return a(),l(z,{title:"UseForm操作示例"},{default:r((()=>[n("div",b,[n(c,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:r((()=>[f])),_:1}),n(c,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:r((()=>[j])),_:1}),n(c,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:r((()=>[P])),_:1}),n(c,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:r((()=>[x])),_:1}),n(c,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:r((()=>[C])),_:1}),n(c,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:r((()=>[h])),_:1}),n(c,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:r((()=>[k])),_:1}),n(c,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:r((()=>[_])),_:1}),n(c,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:r((()=>[g])),_:1})]),n("div",O,[n(c,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:r((()=>[S])),_:1}),n(c,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:r((()=>[v])),_:1}),n(c,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:r((()=>[w])),_:1}),n(c,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:r((()=>[B])),_:1}),n(c,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:r((()=>[W])),_:1}),n(c,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:r((()=>[y])),_:1}),n(c,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:r((()=>[F])),_:1}),n(c,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:r((()=>[R])),_:1})]),n(u,{title:"useForm示例"},{default:r((()=>[n(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;