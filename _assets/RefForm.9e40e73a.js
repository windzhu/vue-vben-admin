import{a as s,r as e,h as o,i as t,o as l,j as i,k as a,w as n,p as r}from"./index.4a20657c.js";import"./xlsx.a48e520c.js";import"./index.e03530a2.js";import"./Trigger.ac5d4b81.js";import"./omit.836c1bd6.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.4ce5e280.js";import"./CheckOutlined.1be330dc.js";import{s as c}from"./index.9c067c1c.js";import"./colors.b0a3d4bc.js";import"./RightOutlined.9fa77bad.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.7a5207ea.js";import"./index.e1c0b789.js";import"./index.a172b251.js";import"./index.76eb4ecf.js";import"./index.bce375da.js";import"./UpOutlined.09ea3d5a.js";import"./index.9d3583b5.js";import"./index.f91ebcc0.js";import"./index.bfe08aa3.js";import"./index.658fe8df.js";import"./index.e33fc4bc.js";import{a as p}from"./index.92ed2934.js";import"./CloseOutlined.15684c2a.js";import"./FullscreenOutlined.fcdbf0a9.js";import"./LoadingOutlined.110c74b1.js";import"./RightOutlined.204b1f99.js";import"./useTimeout.98476688.js";import"./tsxHelper.681cabc4.js";import"./index.d58e2269.js";import"./animation.89606e29.js";import"./useScrollTo.a7e7001a.js";import"./useAttrs.5a25a26a.js";import"./index.f8e54d62.js";import"./index.1fc7357a.js";import"./useWindowSizeFn.e0ce7d91.js";const d=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:s=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var m=s({components:{BasicForm:c,CollapseContainer:p},setup(){const s=e(null),{createMessage:t}=o();return{formElRef:s,schemas:d,handleSubmit:s=>{t.success("click search,values:"+JSON.stringify(s))},setProps(e){const o=s.value;o&&o.setProps(e)}}}});const u={class:"m-4"},f={class:"mb-4"},b=r("更改labelWidth"),j=r("还原labelWidth"),P=r("更改Size"),C=r("还原Size"),h=r("禁用表单"),k=r("解除禁用"),x=r("紧凑表单"),_=r("还原正常间距"),O=r(" 操作按钮位置 "),S={class:"mb-4"},v=r(" 隐藏操作按钮 "),g=r(" 显示操作按钮 "),w=r(" 隐藏重置按钮 "),B=r(" 显示重置按钮 "),R=r(" 隐藏查询按钮 "),W=r(" 显示查询按钮 "),z=r(" 修改重置按钮 "),y=r(" 修改查询按钮 ");m.render=function(s,e,o,r,c,p){const d=t("a-button"),m=t("BasicForm"),A=t("CollapseContainer");return l(),i("div",u,[a("div",f,[a(d,{onClick:e[1]||(e[1]=e=>s.setProps({labelWidth:150})),class:"mr-2"},{default:n((()=>[b])),_:1}),a(d,{onClick:e[2]||(e[2]=e=>s.setProps({labelWidth:120})),class:"mr-2"},{default:n((()=>[j])),_:1}),a(d,{onClick:e[3]||(e[3]=e=>s.setProps({size:"large"})),class:"mr-2"},{default:n((()=>[P])),_:1}),a(d,{onClick:e[4]||(e[4]=e=>s.setProps({size:"default"})),class:"mr-2"},{default:n((()=>[C])),_:1}),a(d,{onClick:e[5]||(e[5]=e=>s.setProps({disabled:!0})),class:"mr-2"},{default:n((()=>[h])),_:1}),a(d,{onClick:e[6]||(e[6]=e=>s.setProps({disabled:!1})),class:"mr-2"},{default:n((()=>[k])),_:1}),a(d,{onClick:e[7]||(e[7]=e=>s.setProps({compact:!0})),class:"mr-2"},{default:n((()=>[x])),_:1}),a(d,{onClick:e[8]||(e[8]=e=>s.setProps({compact:!1})),class:"mr-2"},{default:n((()=>[_])),_:1}),a(d,{onClick:e[9]||(e[9]=e=>s.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:n((()=>[O])),_:1})]),a("div",S,[a(d,{onClick:e[10]||(e[10]=e=>s.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:n((()=>[v])),_:1}),a(d,{onClick:e[11]||(e[11]=e=>s.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:n((()=>[g])),_:1}),a(d,{onClick:e[12]||(e[12]=e=>s.setProps({showResetButton:!1})),class:"mr-2"},{default:n((()=>[w])),_:1}),a(d,{onClick:e[13]||(e[13]=e=>s.setProps({showResetButton:!0})),class:"mr-2"},{default:n((()=>[B])),_:1}),a(d,{onClick:e[14]||(e[14]=e=>s.setProps({showSubmitButton:!1})),class:"mr-2"},{default:n((()=>[R])),_:1}),a(d,{onClick:e[15]||(e[15]=e=>s.setProps({showSubmitButton:!0})),class:"mr-2"},{default:n((()=>[W])),_:1}),a(d,{onClick:e[16]||(e[16]=e=>s.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:n((()=>[z])),_:1}),a(d,{onClick:e[17]||(e[17]=e=>s.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:n((()=>[y])),_:1})]),a(A,{title:"使用ref调用表单内部函数示例"},{default:n((()=>[a(m,{schemas:s.schemas,ref:"formElRef",labelWidth:100,onSubmit:s.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])};export default m;