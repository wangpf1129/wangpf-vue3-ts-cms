(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-faac5df0"],{5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("1d80"),o=n("577e"),c=n("5899"),r="["+c+"]",i=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),s=function(e){return function(t){var n=o(a(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(e,t,n){var a=n("1626"),o=n("861d"),c=n("d2bb");e.exports=function(e,t,n){var r,i;return c&&a(r=t.constructor)&&r!==n&&o(i=r.prototype)&&i!==n.prototype&&c(e,i),e}},"7cbb":function(e,t,n){"use strict";n("d434")},a9e3:function(e,t,n){"use strict";var a=n("83ab"),o=n("da84"),c=n("94ca"),r=n("6eeb"),i=n("5135"),l=n("c6b6"),s=n("7156"),u=n("d9b5"),p=n("c04e"),d=n("d039"),b=n("7c73"),f=n("241c").f,g=n("06cf").f,m=n("9bf2").f,O=n("58a8").trim,h="Number",j=o[h],C=j.prototype,N=l(b(C))==h,y=function(e){if(u(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,a,o,c,r,i,l,s=p(e,"number");if("string"==typeof s&&s.length>2)if(s=O(s),t=s.charCodeAt(0),43===t||45===t){if(n=s.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+s}for(c=s.slice(2),r=c.length,i=0;i<r;i++)if(l=c.charCodeAt(i),l<48||l>o)return NaN;return parseInt(c,a)}return+s};if(c(h,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var v,S=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof S&&(N?d((function(){C.valueOf.call(n)})):l(n)!=h)?s(new j(y(t)),n,S):y(t)},k=a?f(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;k.length>w;w++)i(j,v=k[w])&&!i(S,v)&&m(S,v,g(j,v));S.prototype=C,C.constructor=S,r(o,h,S)}},ab96:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o={class:"menu"};function c(e,t,n,c,r,i){var l=Object(a["resolveComponent"])("page-content");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(l,{ref:"pageContentRef","content-table-config":e.contentTableConfig,"page-name":"menu"},null,8,["content-table-config"])])}var r=n("c0bb"),i={title:"菜单列表",propListConfig:[{prop:"name",label:"菜单名称",minWidth:"150"},{prop:"type",label:"类型",minWidth:"60"},{prop:"url",label:"菜单url",minWidth:"100"},{prop:"icon",label:"菜单icon",minWidth:"100"},{prop:"permission",label:"按钮权限",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"220",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"220",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handler"}],isShowIndexColumn:!1,isShowSelectColumn:!1,childrenProps:{rowKey:"id",treeProp:{children:"children"}},isShowFooter:!1},l=Object(a["defineComponent"])({name:"sys-menu",components:{pageContent:r["a"]},setup:function(){return{contentTableConfig:i}}}),s=n("6b0d"),u=n.n(s);const p=u()(l,[["render",c]]);t["default"]=p},c0bb:function(e,t,n){"use strict";n("fb6a");var a=n("7a23"),o=Object(a["createTextVNode"])(" 编辑 "),c=Object(a["createTextVNode"])(" 删除 ");function r(e,t,n,r,i,l){var s=Object(a["resolveComponent"])("el-button"),u=Object(a["resolveComponent"])("pf-table");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(u,Object(a["mergeProps"])({"list-data":e.dataList,"list-count":e.dataCount},e.contentTableConfig,{onSelectChange:e.selectChange,page:e.pageInfo,"onUpdate:page":t[0]||(t[0]=function(t){return e.pageInfo=t})}),Object(a["createSlots"])({headerHandle:Object(a["withCtx"])((function(){return[e.isCreate?(Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:0,type:"primary",size:"medium",onClick:e.addPageData},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])("新建"+e.contentTableConfig.title.slice(0,-2)),1)]})),_:1},8,["onClick"])):Object(a["createCommentVNode"])("",!0)]})),createAt:Object(a["withCtx"])((function(t){return[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$filters.formatTime(t.row.createAt)),1)]})),updateAt:Object(a["withCtx"])((function(t){return[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$filters.formatTime(t.row.updateAt)),1)]})),handler:Object(a["withCtx"])((function(t){return[Object(a["createElementVNode"])("div",null,[e.isUpdate?(Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:0,type:"text",size:"mini",icon:"el-icon-edit",onClick:function(n){return e.editPageData(t.row)}},{default:Object(a["withCtx"])((function(){return[o]})),_:2},1032,["onClick"])):Object(a["createCommentVNode"])("",!0),e.isDelete?(Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:1,type:"text",size:"mini",icon:"el-icon-delete",style:{color:"red"},onClick:function(n){return e.deletePageData(t.row)}},{default:Object(a["withCtx"])((function(){return[c]})),_:2},1032,["onClick"])):Object(a["createCommentVNode"])("",!0)])]})),_:2},[Object(a["renderList"])(e.otherPropList,(function(t){return{name:t.slotName,fn:Object(a["withCtx"])((function(n){return[t.slotName?Object(a["renderSlot"])(e.$slots,t.slotName,{key:0,row:n.row}):Object(a["createCommentVNode"])("",!0)]}))}}))]),1040,["list-data","list-count","onSelectChange","page"])])}var i=n("5530"),l=(n("4de4"),n("0613"));Object(a["pushScopeId"])("data-v-54155a6b");var s={class:"pf_table"},u={class:"header"},p={class:"title"},d={class:"header-handle"},b={key:0,class:"footer"};function f(e,t,n,o,c,r){var i=Object(a["resolveComponent"])("el-table-column"),l=Object(a["resolveComponent"])("el-table"),f=Object(a["resolveComponent"])("el-pagination");return Object(a["openBlock"])(),Object(a["createElementBlock"])("section",s,[Object(a["createElementVNode"])("section",u,[Object(a["renderSlot"])(e.$slots,"header",{},(function(){return[Object(a["createElementVNode"])("span",p,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("span",d,[Object(a["renderSlot"])(e.$slots,"headerHandle",{},void 0,!0)])]}),{},!0)]),Object(a["createVNode"])(l,Object(a["mergeProps"])(e.childrenProps,{data:e.listData,stripe:"",style:{width:"100%"},onSelectionChange:e.handleSelectChange}),{default:Object(a["withCtx"])((function(){return[e.isShowSelectColumn?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:0,type:"selection",align:"center",width:"60"})):Object(a["createCommentVNode"])("",!0),e.isShowIndexColumn?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:1,type:"index",label:"序号",width:"80",align:"center"})):Object(a["createCommentVNode"])("",!0),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.propListConfig,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(i,Object(a["mergeProps"])({key:t.prop},t,{align:"center","show-overflow-tooltip":""}),{default:Object(a["withCtx"])((function(n){return[Object(a["renderSlot"])(e.$slots,t.slotName,{row:n.row},(function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(n.row[t.prop]),1)]}),!0)]})),_:2},1040)})),128))]})),_:3},16,["data","onSelectionChange"]),e.isShowFooter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("section",b,[Object(a["renderSlot"])(e.$slots,"footer",{},(function(){return[Object(a["createVNode"])(f,{onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange,"current-page":e.page.currentPage,"page-sizes":[10,20,30],"page-size":e.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.listCount},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]}),{},!0)])):Object(a["createCommentVNode"])("",!0)])}Object(a["popScopeId"])();n("a9e3");var g=Object(a["defineComponent"])({props:{title:{type:String,default:""},listData:{type:Array,required:!0},listCount:{type:Number,default:0},propListConfig:{type:Array,required:!0},isShowIndexColumn:{type:Boolean,default:!1},isShowSelectColumn:{type:Boolean,default:!1},childrenProps:{type:Object,default:function(){return{}}},page:{type:Object,default:function(){return{currentPage:1,pageSize:10}}},isShowFooter:{type:Boolean,default:!0}},emits:["selectChange","update:page"],setup:function(e,t){var n=t.emit,a=function(e){n("selectChange",e)},o=function(t){n("update:page",Object(i["a"])(Object(i["a"])({},e.page),{},{pageSize:t}))},c=function(t){n("update:page",Object(i["a"])(Object(i["a"])({},e.page),{},{currentPage:t}))};return{handleSelectChange:a,handleSizeChange:o,handleCurrentChange:c}}}),m=(n("7cbb"),n("6b0d")),O=n.n(m);const h=O()(g,[["render",f],["__scopeId","data-v-54155a6b"]]);var j=h,C=j;n("99af"),n("7db0");function N(e,t){var n=Object(l["c"])(),a=n.state.login.permissions,o="system:".concat(e,":").concat(t);return!!a.find((function(e){return e===o}))}n("7f17");var y=n("6573"),v=n.n(y),S=(n("0769"),n("31b0")),k=n.n(S),w=function(e,t){k.a.confirm(e.titleContent,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){v()({type:"success",message:e.thenMessage}),t()})).catch((function(){v()({type:"info",message:e.catchMessage})}))},B=Object(a["defineComponent"])({components:{PfTable:C},props:{pageName:{type:String,required:!0},contentTableConfig:{type:Object,required:!0}},emits:["editBtnClick","addBtnClick"],setup:function(e,t){var n,o=t.emit,c=Object(l["c"])(),r=N(e.pageName,"create"),s=N(e.pageName,"update"),u=N(e.pageName,"delete"),p=N(e.pageName,"query"),d=Object(a["ref"])({currentPage:1,pageSize:10});Object(a["watch"])(d,(function(){b()}));var b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p&&c.dispatch("system/fetchPageListAction",{pageName:e.pageName,queryInfo:Object(i["a"])({offset:d.value.pageSize*(d.value.currentPage-1),size:d.value.pageSize},t)})};b();var f=Object(a["computed"])((function(){return c.getters["system/pageListData"](e.pageName)})),g=Object(a["computed"])((function(){return c.getters["system/pageListCount"](e.pageName)})),m=function(e){console.log(e,111)},O=null===(n=e.contentTableConfig)||void 0===n?void 0:n.propListConfig.filter((function(e){return"createAt"!==e.slotName&&("updateAt"!==e.slotName&&"handler"!==e.slotName)})),h=function(t){var n=function(){c.dispatch("system/deletePageDataAction",{pageName:e.pageName,id:t.id})};w({titleContent:"确定删除吗？",thenMessage:"删除成功！",catchMessage:"已取消删除"},n)},j=function(e){o("editBtnClick",e)},C=function(){o("addBtnClick")};return{dataList:f,dataCount:g,selectChange:m,getPageData:b,pageInfo:d,otherPropList:O,isCreate:r,isUpdate:s,isDelete:u,deletePageData:h,editPageData:j,addPageData:C}}});const x=O()(B,[["render",r]]);t["a"]=x},d434:function(e,t,n){}}]);
//# sourceMappingURL=chunk-faac5df0.52c878c2.js.map