webpackJsonp([1],{"/yic":function(t,e){},"0gOy":function(t,e){},DInD:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),l=o("mvHQ"),s=o.n(l),d={data:function(){return{text:""}},methods:{additem:function(){var t=this.text.trim();t||alert("请输入任务内容");var e={title:t,complete:!1};this.$emit("addtodo",e),this.text=""}}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{attrs:{type:"flex",justify:"center"}},[o("el-col",{staticClass:"grid-content",attrs:{span:6}},[o("div",[o("el-input",{attrs:{placeholder:"请输入任务内容"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}},[o("el-button",{attrs:{slot:"append"},on:{click:t.additem},slot:"append"},[t._v("提交")])],1)],1)])],1)},staticRenderFns:[]};var c=o("VU/8")(d,i,!1,function(t){o("DInD")},null,null).exports,r={props:{todo:Object,index:Number,deletetodo:Function},methods:{deleteitem:function(){this.deletetodo(this.index)}}},a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("el-checkbox",{model:{value:t.todo.complete,callback:function(e){t.$set(t.todo,"complete",e)},expression:"todo.complete"}},[t._v(t._s(t.todo.title))]),t._v(" "),o("el-button",{on:{click:t.deleteitem}},[t._v("删除")])],1)},staticRenderFns:[]};var u=o("VU/8")(r,a,!1,function(t){o("b5uY")},null,null).exports,p={props:{todos:Array,deletetodo:Function},components:{todoitem:u}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{attrs:{type:"flex",justify:"center"}},[o("el-col",{staticClass:"grid-content",attrs:{span:6}},[o("div",[o("ul",{staticClass:"list-ul"},t._l(t.todos,function(e,n){return o("todoitem",{key:n,attrs:{todo:e,index:n,deletetodo:t.deletetodo}})}),1)])])],1)},staticRenderFns:[]};var m=o("VU/8")(p,f,!1,function(t){o("YEz0")},null,null).exports,h={props:{todos:Array},methods:{deleteCompleteItem:function(){this.$emit("deleteCompleteTodos")}},computed:{completeSize:function(){return this.todos.reduce(function(t,e){return t+(e.complete?1:0)},0)},AllComplete:{get:function(){return this.completeSize===this.todos.length},set:function(t){this.$emit("selectAllTodo",t)}}}},v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-row",{attrs:{type:"flex",justify:"center"}},[o("el-col",{staticClass:"grid-content",attrs:{span:6}},[o("div",[o("el-checkbox",{model:{value:t.AllComplete,callback:function(e){t.AllComplete=e},expression:"AllComplete"}}),t._v(" "),o("span",[t._v("已完成"+t._s(t.completeSize)+"/全部"+t._s(t.todos.length))]),t._v(" "),o("el-button",{on:{click:t.deleteCompleteItem}},[t._v("清除已完成的任务")])],1)])],1)},staticRenderFns:[]};var _={name:"App",data:function(){return{todos:JSON.parse(window.localStorage.getItem("todos_key")||"[]")}},methods:{addtodo:function(t){this.todos.unshift(t)},deletetodo:function(t){this.todos.splice(t,1)},selectAllTodo:function(t){this.todos.forEach(function(e){return e.complete=t})},deleteCompleteTodos:function(){this.todos=this.todos.filter(function(t){return!t.complete})}},watch:{todos:{deep:!0,handler:function(t){window.localStorage.setItem("todos_key",s()(t))}}},components:{todoheader:c,todolist:m,todofooter:o("VU/8")(h,v,!1,function(t){o("/yic")},null,null).exports}},x={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"App"}},[o("todoheader",{on:{addtodo:t.addtodo}}),t._v(" "),o("todolist",{attrs:{todos:t.todos,deletetodo:t.deletetodo}}),t._v(" "),o("todofooter",{attrs:{todos:t.todos},on:{selectAllTodo:t.selectAllTodo,deleteCompleteTodos:t.deleteCompleteTodos}})],1)},staticRenderFns:[]};var y=o("VU/8")(_,x,!1,function(t){o("0gOy")},null,null).exports,b=o("bQIR"),g=o.n(b);o("gFLX");n.default.config.productionTip=!1,n.default.use(g.a),new n.default({el:"#app",components:{App:y},template:"<App/>"})},YEz0:function(t,e){},b5uY:function(t,e){},gFLX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5149da16381d74e046f6.js.map