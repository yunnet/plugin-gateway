(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-552ca6f6"],{2546:function(t,e,i){},be69:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[i("el-form-item",[i("el-input",{attrs:{placeholder:"搜索名称关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1),t._v(" "),i("el-form-item",{staticStyle:{float:"right"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.onLogSearch}},[t._v("日志查询")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.onLogTail}},[t._v("日志跟踪")])],1)],1),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pageList,border:"",fit:""}},[i("el-table-column",{attrs:{prop:"Name",label:"名称"}}),t._v(" "),i("el-table-column",{attrs:{label:"尺寸",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("unitSpeedFormatFilter")(e.row.Size))+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-link",{attrs:{type:"primary",target:"_blank",href:t.logOpenHref+""+e.row.Name}},[t._v("打开")]),t._v(" "),i("el-link",{attrs:{type:"primary",target:"_blank",href:t.logOpenHref+""+e.row.Name}},[t._v("下载")])]}}])})],1),t._v(" "),i("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":t.currentLogPage,total:t.dataListFilter.length},on:{"update:currentPage":function(e){t.currentLogPage=e},"update:current-page":function(e){t.currentLogPage=e}}}),t._v(" "),i("el-dialog",{attrs:{title:"日志跟踪",visible:t.dialogVisible,"before-close":t.handleCloseDialog,width:"700px","show-close":!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"log-container"},[i("el-switch",{on:{change:t.handleAutoScroll},model:{value:t.autoScroll,callback:function(e){t.autoScroll=e},expression:"autoScroll"}}),t._v(" "),i("span",[t._v("自动滚动 "),i("span",[t._v("（"+t._s(t.autoScroll?"开":"关")+"）")])]),t._v(" "),i("div",{ref:"logList",staticClass:"log-list"},[i("pre",[t._l(t.logTailList,(function(e){return[t._v(t._s(e+"\n"))]}))],2)])],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleCloseDialog}},[t._v("关 闭")])],1)]),t._v(" "),i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible2,"show-close":!1,width:"700px"},on:{"update:visible":function(e){t.dialogVisible2=e}}},[i("div",{staticClass:"log-search-container"},[i("el-input",{attrs:{placeholder:"输入查询关键词"},on:{input:t.doLogSearch},model:{value:t.searchKey2,callback:function(e){t.searchKey2=e},expression:"searchKey2"}}),t._v(" "),i("div",{staticClass:"log-search-result"},[i("pre",[t._v(t._s(t.searchResult))])])],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleCloseDialog2}},[t._v("关 闭")])],1)])],1)},l=[],o=i("4ec3"),s={name:"logs",data:function(){return{dataList:[],searchKey:"",searchKey2:"",currentLogPage:1,dialogVisible:!1,dialogVisible2:!1,logTailList:[],searchResult:"",autoScroll:!1,logOpenHref:"/logrotate/open?file=",logDownloadHref:"/logrotate/download?file="}},logsES:null,created:function(){this.init()},computed:{dataListFilter:function(){var t=[],e=this.searchKey.trim();return t=e?this.dataList.filter((function(t){return-1!==t.Name.indexOf(e)})):this.dataList,t},pageList:function(){return this.dataListFilter.slice(10*(this.currentLogPage-1),10*this.currentLogPage)}},methods:{init:function(){var t=this;this.dataList=[],Object(o["f"])().then((function(e){Array.isArray(e)&&(t.dataList=e)}))},onLogTail:function(){var t=this,e=Object(o["g"])();e.onmessage=function(e){e.data&&t.logTailList.push(e.data)},this.$options.logsES=e,this.dialogVisible=!0},onLogSearch:function(){this.searchResult="",this.dialogVisible2=!0},doLogSearch:function(){var t=this;this.searchKey2.trim()&&Object(o["v"])(this.searchKey2.trim()).then((function(e){t.searchResult=e}))},handleCloseDialog:function(){this.dialogVisible=!1,this.logTailList=[],this.$options.logsES.close(),this.$options.logsES=null},handleCloseDialog2:function(){this.dialogVisible2=!1,this.searchResult="",this.searchKey2=""},handleAutoScroll:function(){this.autoScroll&&this.$refs.logList&&(this.$refs.logList.scrollTop=this.$refs.logList.offsetHeight)}}},r=s,n=(i("deac"),i("2877")),c=Object(n["a"])(r,a,l,!1,null,"1185c4d0",null);e["default"]=c.exports},deac:function(t,e,i){"use strict";i("2546")}}]);