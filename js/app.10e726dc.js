(function(){"use strict";var t={4394:function(t,e,i){var s=i(9963),n=i(6252);function a(t,e,i,s,a,r){const o=(0,n.up)("RouterView");return(0,n.wg)(),(0,n.j4)(o)}var r={name:"App"},o=i(3744);const u=(0,o.Z)(r,[["render",a]]);var l=u,d=i(2201);const c=(0,n._)("h1",null,"Главная",-1);function h(t,e,i,s,a,r){const o=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[c,(0,n.Wm)(o,{to:"/task"},{default:(0,n.w5)((()=>[(0,n.Uk)("Список задач")])),_:1})],64)}var k={name:"MainPage"};const f=(0,o.Z)(k,[["render",h]]);var p=f;const T=(0,n._)("h1",null,"Задачи",-1),m=(0,n._)("button",null,"Добавить задачу",-1);function v(t,e,i,a,r,o){const u=(0,n.up)("TaskItem");return(0,n.wg)(),(0,n.iD)(n.HY,null,[T,(0,n._)("form",{onSubmit:e[1]||(e[1]=(...t)=>o.addTask&&o.addTask(...t))},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.newTaskText=t),placeholder:"Введите название задачи"},null,512),[[s.nr,r.newTaskText]]),m],32),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.taskList,(t=>((0,n.wg)(),(0,n.iD)("ul",{key:t},[(0,n.Wm)(u,{item:t,onDeliteTask:o.deliteTask,onUpdateTask:o.updateTask},null,8,["item","onDeliteTask","onUpdateTask"])])))),128))],64)}i(7658);const x=["value"];function w(t,e,i,s,a,r){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("input",{onInput:e[0]||(e[0]=(...t)=>r.editText&&r.editText(...t)),value:i.item.text},null,40,x),(0,n._)("button",{onClick:e[1]||(e[1]=(...t)=>r.saveTask&&r.saveTask(...t))},"Сохранить"),(0,n._)("button",{onClick:e[2]||(e[2]=(...t)=>r.deliteTask&&r.deliteTask(...t))},"Удалить")],64)}var g={name:"TaskItem",props:["item"],emits:["updateTask","deliteTask"],data(){return{text:this.item.text}},methods:{editText(t){this.text=t.target.value},saveTask(){this.$emit("updateTask",this.item.id,this.text)},deliteTask(){this.$emit("deliteTask",this.item.id)}}};const L=(0,o.Z)(g,[["render",w]]);var b=L,y={name:"TaskPage",components:{TaskItem:b},data(){return{taskList:[],newTaskText:""}},created(){this.taskList=this.$store.state.list},methods:{addTask(t){t.preventDefault(),0!=this.taskList.length?this.taskList.push({id:this.taskList[this.taskList.length-1].id+1,text:this.newTaskText}):this.taskList.push({id:0,text:this.newTaskText}),this.newTaskText="",this.$store.dispatch("editList",this.taskList)},filterList(t){return this.taskList.filter((function(e){return e.id!==t}))},deliteTask(t){this.taskList=this.filterList(t),this.$store.dispatch("editList",this.taskList)},findIndex(t){return this.taskList.findIndex((function(e){return e.id==t}))},updateTask(t,e){this.taskList[this.findIndex(t)].text=e,this.$store.dispatch("editList",this.taskList)}}};const O=(0,o.Z)(y,[["render",v]]);var _=O,D=(0,d.p7)({history:(0,d.r5)(),routes:[{path:"/",component:p},{path:"/task",component:_}]}),j=i(3907),I=i(4702);const Z=new j.ZP.Store({plugins:[(0,I.Z)({storage:window.sessionStorage})],state:{list:[{id:0,text:"test1"},{id:1,text:"test2"}]},mutations:{edit(t,e){t.list=e}},actions:{editList({commit:t},e){t("edit",e)}}});(0,s.ri)(l).use(D).use(Z).mount("#app")}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,i),a.exports}i.m=t,function(){var t=[];i.O=function(e,s,n,a){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],a=t[d][2];for(var o=!0,u=0;u<s.length;u++)(!1&a||r>=a)&&Object.keys(i.O).every((function(t){return i.O[t](s[u])}))?s.splice(u--,1):(o=!1,a<r&&(r=a));if(o){t.splice(d--,1);var l=n();void 0!==l&&(e=l)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,n,a]}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,r=s[0],o=s[1],u=s[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(u)var d=u(i)}for(e&&e(s);l<r.length;l++)a=r[l],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(d)},s=self["webpackChunktsetovoe"]=self["webpackChunktsetovoe"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(4394)}));s=i.O(s)})();
//# sourceMappingURL=app.10e726dc.js.map