(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=(n(12),n(6)),u=n(2),d=n(1),i=function(e){var t=e.color,n=e.text,a=e.onClick;return r.a.createElement("button",{className:"btn",style:{backgroundColor:t},onClick:a},n)};i.defaultProps={color:"steelblue"};var m=i,s=function(e){var t=e.title,n=e.onAdd,a=e.showAdd;return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,t),r.a.createElement(m,{color:a?"orange":"purple",text:a?"Close":"Add",onClick:n}))};s.defaultProps={title:"Task Tracker"};var f=s,b=n(5),E=function(e){var t=e.task,n=e.onDelete,a=e.onToggle;return r.a.createElement("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return a(t.id)}},r.a.createElement("h3",null,t.text," ",r.a.createElement(b.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})),r.a.createElement("p",null,t.day))},p=function(e){var t=e.tasks,n=e.onDelete,a=e.onToggle;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(E,{key:e.id,task:e,onDelete:n,onToggle:a})})))},v=function(e){var t=e.onAdd,n=Object(a.useState)(""),c=Object(d.a)(n,2),l=c[0],o=c[1],u=Object(a.useState)(""),i=Object(d.a)(u,2),m=i[0],s=i[1],f=Object(a.useState)(!1),b=Object(d.a)(f,2),E=b[0],p=b[1];return r.a.createElement("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),l?(t({text:l,day:m,reminder:E}),o(""),s(""),p(!1)):alert("Please add Text")}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Grocery Name"),r.a.createElement("input",{type:"text",placeholder:"Add Grocery",value:l,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Day"),r.a.createElement("input",{type:"text",placeholder:"Add Day",value:m,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"form-control-check"},r.a.createElement("label",null,"Set Reminder"),r.a.createElement("input",{type:"checkbox",checked:E,value:E,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("input",{className:"btn btn-block",type:"submit",value:"Save Grocery"}))};var h=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([{id:1,text:"Cereal",day:"Tomorrow",reminder:!0},{id:2,text:"Chicken",day:"Today",reminder:!0},{id:4,text:"Cereal",day:"December 13, 2021",reminder:!1}]),i=Object(d.a)(l,2),m=i[0],s=i[1];return r.a.createElement("div",{className:"container"},r.a.createElement(f,{onAdd:function(){return c(!n)},showAdd:n}),n&&r.a.createElement(v,{onAdd:function(e){var t=Math.floor(1e3*Math.random())+1,n=Object(u.a)({id:t},e);s([].concat(Object(o.a)(m),[n]))}}),m.length>0?r.a.createElement(p,{tasks:m,onDelete:function(e){s(m.filter((function(t){return t.id!==e})))},onToggle:function(e){s(m.map((function(t){return t.id===e?Object(u.a)({},t,{reminder:!t.reminder}):t})))}}):"No Tasks to Show")};l.a.render(r.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.1aee161c.chunk.js.map