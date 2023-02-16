(function(){var e={8272:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("el-row",[t("el-col",{staticStyle:{"padding-right":"10px"},attrs:{span:8}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"user"},[t("img",{attrs:{src:a(4353),alt:""}}),t("div",{staticClass:"userinfo"},[t("p",{staticClass:"name"},[e._v("Admin")]),t("p",{staticClass:"access"},[e._v("管理员")])])]),t("div",{staticClass:"login-info"},[t("p",[e._v("上次登录的时间："),t("span",[e._v("2022-7-19")])]),t("p",[e._v("上次登录的地点："),t("span",[e._v("湖北省武汉市")])])])]),t("el-card",{staticStyle:{"margin-top":"20px",height:"460px"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t("el-table-column",{attrs:{prop:"todayBuy",label:"今日购买"}}),t("el-table-column",{attrs:{prop:"monthBuy",label:"本月购买"}}),t("el-table-column",{attrs:{prop:"totalBuy",label:"总购买"}})],1)],1)],1),t("el-col",{staticStyle:{"padding-right":"10px"},attrs:{span:16}},[t("div",{staticClass:"num"},e._l(e.countDate,(function(a){return t("el-card",{key:a.name,attrs:{"body-style":{display:"flex",padding:0}}},[t("i",{staticClass:"icon",class:`el-icon-${a.icon}`,style:{background:a.color}}),t("div",{staticClass:"detail"},[t("p",{staticClass:"price"},[e._v(" ¥ "+e._s(a.value)+" ")]),t("p",{staticClass:"desc"},[e._v(" "+e._s(a.name)+" ")])])])})),1),t("el-card",{staticStyle:{height:"280px"}},[t("div",{ref:"echarts1",staticStyle:{height:"280px"}})]),t("div",{staticClass:"graph"},[t("el-card",{staticStyle:{height:"260px"}},[t("div",{ref:"echarts2",staticStyle:{height:"260px"}})]),t("el-card",{staticStyle:{height:"260px"}},[t("div",{ref:"echarts3",staticStyle:{height:"240px"}})])],1)],1)],1)},o=[],r=(a(7658),a(586)),s=a(347),l={data(){return{tableData:[],tableLabel:{name:"课程",todayBuy:"今日购买",monthBuy:"本月购买",totalBuy:"总购买"},countDate:[{name:"今日支付订单",value:"1234",icon:"success",color:"#2ec7c9"},{name:"今日收藏订单",value:"234",icon:"star-on",color:"#ffb980"},{name:"今日下单订单",value:"1234",icon:"s-goods",color:"#5ab1ef"},{name:"今日未支付订单",value:"1234",icon:"success",color:"#2ec7c9"},{name:"今日未收藏订单",value:"134",icon:"star-on",color:"#ffb980"},{name:"今日未下单订单",value:"123",icon:"s-goods",color:"#5ab1ef"}]}},mounted(){(0,r.Yu)().then((e=>{let{data:t}=e;const{tableData:a}=t.data;this.tableData=a;const n=s.S1(this.$refs.echarts1);var o={};const{orderData:r,userData:l,videoData:i}=t.data,u=Object.keys(r.data[0]),c={data:u};o.xAxis=c,o.yAxis={},o.legend=c,o.series=[],u.forEach((e=>{o.series.push({name:e,data:r.data.map((t=>t[e])),type:"line"})})),n.setOption(o);const d=s.S1(this.$refs.echarts2),m={legend:{textStyle:{color:"#333"}},grid:{left:"20%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:l.map((e=>e.date)),axisLine:{lineStyle:{color:"#17b3a3"}},axisLabel:{interval:0,color:"#333"}},yAxis:[{type:"value",axisLine:{lineStyle:{color:"#17b3a3"}}}],color:["#2ec7c9","#b6a2de"],series:[{name:"新增用户",data:l.map((e=>e.new)),type:"bar"},{name:"活跃用户",data:l.map((e=>e.active)),type:"bar"}]};d.setOption(m);const p=s.S1(this.$refs.echarts3),f={tooltip:{trigger:"item"},color:["#3272f2","#dd536b","#e1bb22","#a6a6a6","#9462e5","#39c362","#3ed1cf"],series:[{data:i,type:"pie"}]};p.setOption(f)}))}},i=l,u=a(1001),c=(0,u.Z)(i,n,o,!1,null,"db4c8448",null),d=c.exports},8875:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",staticClass:"login-container",attrs:{"label-width":"70px",inline:!0,model:e.form,rules:e.rules}},[t("h3",{staticClass:"login_title"},[e._v("系统登录")]),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",[t("el-button",{staticStyle:{"margin-left":"105px","margin-top":"10px"},attrs:{type:"primary"},on:{click:e.submit}},[e._v("登录")])],1)],1)},o=[],r=(a(7658),a(7634),a(680)),s=a(586),l={data(){return{form:{username:"",password:""},rules:{username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"}]}}},methods:{submit(){this.$refs.form.validate((e=>{e&&(0,s.r7)(this.form).then((e=>{let{data:t}=e;console.log(t),2e4===t.code?(r.Z.set("token",t.data.token),this.$store.commit("setMenu",t.data.menu),this.$store.commit("addMenu",this.$router),this.$router.push("/home")):this.$message.error(t.data.message)}))}))}}},i=l,u=a(1001),c=(0,u.Z)(i,n,o,!1,null,"36a838fb",null),d=c.exports},3387:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return D}});var n=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{attrs:{width:"auto"}},[t("common-aside")],1),t("el-container",[t("el-header",[t("common-header")],1),t("common-tag"),t("el-main",[t("router-view")],1)],1)],1)],1)},o=[],r=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"笨笨后台管理系统"))]),e._l(e.noChildren,(function(a){return t("el-menu-item",{key:a.name,attrs:{index:a.name},on:{click:function(t){return e.clickMenu(a)}}},[t("i",{class:"el-icon-"+a.icon}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])])})),e._l(e.hasChildren,(function(a){return t("el-submenu",{key:a.label,attrs:{index:"item.label"}},[t("template",{slot:"title"},[t("i",{class:"el-icon-"+a.icon}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])]),e._l(a.children,(function(a){return t("el-menu-item-group",{key:a.path},[t("el-menu-item",{attrs:{index:a.path},on:{click:function(t){return e.clickMenu(a)}}},[e._v(e._s(a.label))])],1)}))],2)}))],2)},s=[],l=(a(7658),a(680)),i={data(){return{}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){console.log(e),this.$route.path===e.path||"/home"===this.$route.path&&"/"===e.path||this.$router.push(e.path),this.$store.commit("selectMenu",e)}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},hasChildren(){return this.menuData.filter((e=>e.children))},menuData(){return JSON.parse(l.Z.get("menu"))||this.$store.state.tab.menu},isCollapse(){return this.$store.state.tab.isCollapse}}},u=i,c=a(1001),d=(0,c.Z)(u,r,s,!1,null,"82cb84e4",null),m=d.exports,p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"heard-container"},[t("div",{staticClass:"l-concent"},[t("el-button",{attrs:{icon:"el-icon-menu",size:"mini"},on:{click:e.handleMenu}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tags,(function(a){return t("el-breadcrumb-item",{key:a.path,attrs:{to:{path:a.path}}},[e._v(e._s(a.label)+" ")])})),1)],1),t("div",{staticClass:"r-concent"},[t("el-dropdown",{on:{command:e.handleClick}},[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"user",attrs:{src:a(4353),alt:""}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",{attrs:{command:"cancel"}},[e._v("退出")])],1)],1)],1)])},f=[],h=a(3822),g={data(){return{}},methods:{handleMenu(){this.$store.commit("collapseMenu")},handleClick(e){"cancel"===e&&(console.log("登出"),l.Z.remove("token"),l.Z.remove("menu"),this.$router.push("/login"))}},computed:{...(0,h.rn)({tags:e=>e.tab.tabsList})},mounted(){console.log(this.tags,"tags")}},b=g,v=(0,c.Z)(b,p,f,!1,null,"1a22b443",null),y=v.exports,x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},e._l(e.tags,(function(a,n){return t("el-tag",{key:a.path,attrs:{closable:"home"!==a.name,effect:e.$route.name===a.name?"dark":"plain",size:"small"},on:{click:function(t){return e.changeMenu(a)},close:function(t){return e.handleClose(a,n)}}},[e._v(" "+e._s(a.label)+" ")])})),1)},_=[],k={name:"CommonTag",data(){return{}},computed:{...(0,h.rn)({tags:e=>e.tab.tabsList})},methods:{...(0,h.OI)(["closeTag"]),changeMenu(e){this.$router.push({name:e.name})},handleClose(e,t){this.closeTag(e);const a=this.tags.length;e.name===this.$route.name&&(t===a?this.$router.push({name:this.tags[t-1].name}):this.$router.push({name:this.tags[t].name}))}}},C=k,w=(0,c.Z)(C,x,_,!1,null,"61b9efbc",null),O=w.exports,S={data(){return{}},components:{CommonAside:m,CommonHeader:y,CommonTag:O}},$=S,M=(0,c.Z)($,n,o,!1,null,null,null),D=M.exports},3731:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",[e._v(" 我是Mall页面 ")])},o=[],r={name:"User",data(){return{}}},s=r,l=a(1001),i=(0,l.Z)(s,n,o,!1,null,null,null),u=i.exports},5041:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",[e._v(" 我是PageOne页面 ")])},o=[],r={name:"User",data(){return{}}},s=r,l=a(1001),i=(0,l.Z)(s,n,o,!1,null,null,null),u=i.exports},8497:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",[e._v(" 我是page2页面 ")])},o=[],r={name:"User",data(){return{}}},s=r,l=a(1001),i=(0,l.Z)(s,n,o,!1,null,null,null),u=i.exports},9521:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"manage"},[t("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"form",attrs:{rules:e.rules,inline:!0,model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"姓名",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{label:"性别",prop:"sex"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-option",{attrs:{label:"男",value:1}}),t("el-option",{attrs:{label:"女",value:0}})],1)],1),t("el-form-item",{attrs:{label:"出生日期",prop:"birth"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-DD"},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1),t("el-form-item",{attrs:{label:"地址",prop:"addr"}},[t("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr",t)},expression:"form.addr"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancel}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),t("div",{staticClass:"manage-header"},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v(" + 新增 ")]),t("el-form",{attrs:{inline:!0,model:e.userForm}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),t("div",{staticClass:"common-tabel"},[t("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",height:"90%",data:e.tableData}},[t("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(1==a.row.sex?"男":"女"))])]}}])}),t("el-table-column",{attrs:{prop:"age",label:"年龄"}}),t("el-table-column",{attrs:{prop:"birth",label:"出生日期"}}),t("el-table-column",{attrs:{prop:"addr",label:"地址"}}),t("el-table-column",{attrs:{prop:"addr",label:"地址"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.handleDelete(a.row)}}},[e._v("删除")])]}}])})],1),t("div",{staticClass:"pager"},[t("el-pagination",{attrs:{layout:"prev, pager, next",total:e.total},on:{"current-change":e.handlePage}})],1)],1)],1)},o=[],r=a(586),s={data(){return{dialogVisible:!1,form:{name:"",age:"",sex:"",birth:"",addr:""},rules:{name:[{required:!0,message:"请输入姓名"}],age:[{required:!0,message:"请输入年龄"}],sex:[{required:!0,message:"请选择性别"}],birth:[{required:!0,message:"请选择出生日期"}],addr:[{required:!0,message:"请输入地址"}]},tableData:[],modalType:0,total:0,pageData:{page:1,limit:10},userForm:{name:""}}},methods:{submit(){this.$refs.form.validate((e=>{e&&(0===this.modalType?(0,r.cn)(this.form).then((()=>{this.getList()})):(0,r.uz)(this.form).then((()=>{this.getList()})),this.$refs.form.resetFields(),this.dialogVisible=!1)}))},handleClose(){this.$refs.form.resetFields(),this.dialogVisible=!1},cancel(){this.handleClose()},handleEdit(e){this.modalType=1,this.dialogVisible=!0,this.form=JSON.parse(JSON.stringify(e))},handleDelete(e){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,r.ti)({id:e.id}).then((()=>{this.$message({type:"success",message:"删除成功!"}),this.getList()}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},handleAdd(){this.modalType=0,this.dialogVisible=!0},getList(){(0,r.PR)({params:{...this.userForm,...this.pageData}}).then((e=>{let{data:t}=e;console.log(t),this.tableData=t.list,this.total=t.count||0}))},handlePage(e){this.pageData.page=e,this.getList()},onSubmit(){this.getList()}},mounted(){this.getList()}},l=s,i=a(1001),u=(0,i.Z)(l,n,o,!1,null,"9cdeae7c",null),c=u.exports},586:function(e,t,a){"use strict";a.d(t,{cn:function(){return i},ti:function(){return c},uz:function(){return u},Yu:function(){return s},r7:function(){return d},PR:function(){return l}});var n=a(70);const o=n.ZP.create({baseURL:"/api",timeout:1e4});o.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var r=o;const s=()=>r.get("/home/getData"),l=e=>(console.log(e,"params"),r.get("/user/getUser",e)),i=e=>r.post("/user/add",e),u=e=>r.post("/user/edit",e),c=e=>r.post("/user/del",e),d=e=>r.post("/permission/getMenu",e)},382:function(e,t,a){"use strict";var n=a(7754),o=a.n(n),r=a(6369),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},l=[],i={name:"App"},u=i,c=a(1001),d=(0,c.Z)(u,s,l,!1,null,null,null),m=d.exports,p=a(2631),f=(a(9521),a(8272),a(3387)),h=(a(3731),a(5041),a(8497),a(8875));r["default"].use(p.ZP);const g=[{path:"/",component:f["default"],name:"Main",redirect:"/home",children:[]},{path:"/login",name:"login",component:h["default"]}],b=new p.ZP({routes:g});var v=b,y=a(3822),x=(a(7658),a(680)),_={state:{isCollapse:!1,tabsList:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}],menu:[]},mutations:{collapseMenu(e){e.isCollapse=!e.isCollapse},selectMenu(e,t){if(console.log(t,"val"),"Home"!==t.name){const a=e.tabsList.findIndex((e=>e.name===t.name));-1==a&&e.tabsList.push(t)}},closeTag(e,t){const a=e.tabsList.findIndex((e=>e.name===t.name));e.tabsList.splice(a,1)},setMenu(e,t){e.menu=t,x.Z.set("menu",JSON.stringify(t))},addMenu(e,t){if(!x.Z.get("menu"))return;const n=JSON.parse(x.Z.get("menu"));e.menu=n;const o=[];n.forEach((e=>{e.children?(e.children=e.children.map((e=>(console.log(e.url),e.component=()=>a(6968)(`./${e.url}`),e))),o.push(...e.children)):(console.log(e.url),e.component=()=>a(6968)(`./${e.url}`),o.push(e))})),console.log(o,"menuArray"),o.forEach((e=>{t.addRoute("Main",e)}))}}};r["default"].use(y.ZP);var k=new y.ZP.Store({modules:{tab:_}}),C=a(7634),w=a.n(C);let O=[];var S={getStatisticalData:()=>{for(let e=0;e<7;e++)O.push(w().mock({oppo:w().Random.float(100,8e3,0,0),"小米":w().Random.float(100,8e3,0,0),"魅族":w().Random.float(100,8e3,0,0),"苹果":w().Random.float(100,8e3,0,0),vivo:w().Random.float(100,8e3,0,0),"三星":w().Random.float(100,8e3,0,0)}));return{code:2e3,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:6999},{name:"vivo",value:1999},{name:"oppo",value:2999},{name:"三星",value:4999},{name:"魅族",value:999}],userData:[{date:"周一",new:33,active:870},{date:"周二",new:18,active:370},{date:"周三",new:63,active:170},{date:"周四",new:33,active:170},{date:"周五",new:13,active:370},{date:"周六",new:33,active:270},{date:"周日",new:93,active:770}],orderData:{date:["20191001","20191001","20191001","20211001","20211001","20211001","20211001"],data:O},tableData:[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"小米",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"魅族",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"苹果",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"三星",todayBuy:500,monthBuy:3500,totalBuy:22e3}]}}}};a(541);function $(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let M=[];const D=200;for(let P=0;P<D;P++)M.push(w().mock({id:w().Random.guid(),name:w().Random.cname(),addr:w().mock("@county(true)"),"age|18-60":1,birth:w().Random.date(),sex:w().Random.integer(0,1)}));var B={getUserList:e=>{console.log(e,"config");const{name:t,page:a=1,limit:n=20}=$(e.url);console.log("name:"+t,"page:"+a,"分页大小limit:"+n);const o=M.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),r=o.filter(((e,t)=>t<n*a&&t>=n*(a-1)));return{code:2e4,count:o.length,list:r}},createUser:e=>{const{name:t,addr:a,age:n,birth:o,sex:r}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),M.unshift({id:w().Random.guid(),name:t,addr:a,age:n,birth:o,sex:r}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(M=M.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=$(e.url);return t=t.split(","),M=M.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:a,addr:n,age:o,birth:r,sex:s}=JSON.parse(e.body),l=parseInt(s);return M.some((e=>{if(e.id===t)return e.name=a,e.addr=n,e.age=o,e.birth=r,e.sex=l,!0})),{code:2e4,data:{message:"编辑成功"}}}},L={getMenu:e=>{const{username:t,password:a}=JSON.parse(e.body);return"admin"===t&&"admin"===a?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"Mall.vue"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"User.vue"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"PageTwo.vue"}]}],token:w().Random.guid(),message:"获取成功"}}:"xiaoxiao"===t&&"xiaoxiao"===a?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/video",name:"video",label:"商品管理",icon:"video-play",url:"Mall.vue"}],token:w().Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码错误"}}}};w().mock("/api/home/getData",S.getStatisticalData),w().mock("/api/user/add","post",B.createUser),w().mock("/api/user/edit","post",B.updateUser),w().mock("/api/user/del","post",B.deleteUser),w().mock(/api\/user\/getUser/,B.getUserList),w().mock(/api\/permission\/getMenu/,"post",L.getMenu),r["default"].config.productionTip=!1,r["default"].use(o()),v.beforeEach(((e,t,a)=>{const n=x.Z.get("token");n||"login"===e.name?n&&"login"===e.name?a({name:"home"}):a():a({name:"login"})})),new r["default"]({router:v,store:k,render:e=>e(m),created(){k.commit("addMenu",v)}}).$mount("#app")},6968:function(e,t,a){var n={"./Home":8272,"./Home.vue":8272,"./Login":8875,"./Login.vue":8875,"./Main":3387,"./Main.vue":3387,"./Mall":3731,"./Mall.vue":3731,"./PageOne":5041,"./PageOne.vue":5041,"./PageTwo":8497,"./PageTwo.vue":8497,"./User":9521,"./User.vue":9521};function o(e){return Promise.resolve().then((function(){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var o=n[e];return a(o)}))}o.keys=function(){return Object.keys(n)},o.id=6968,e.exports=o},4353:function(e,t,a){"use strict";e.exports=a.p+"img/user.6b2df5f5.png"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],r=e[c][2];for(var l=!0,i=0;i<n.length;i++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(l=!1,r<s&&(s=r));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.e=function(){return Promise.resolve()}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],l=n[1],i=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(i)var c=i(a)}for(t&&t(n);u<s.length;u++)r=s[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},n=self["webpackChunkvue_manage"]=self["webpackChunkvue_manage"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(382)}));n=a.O(n)})();
//# sourceMappingURL=app.65dc78a3.js.map