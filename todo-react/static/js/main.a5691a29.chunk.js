(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),s=(a(70),a(13)),i=a(14),l=a(16),u=a(15),p=a(17),m=a(64),d=a.n(m),h=a(34),k=a.n(h),f=a(28),v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,null,r.a.createElement(k.a.Brand,null,r.a.createElement(f.a,{icon:"check-circle",size:"1x"})," Task Finisher")))}}]),t}(n.Component),E=a(9),b=a.n(E),j=a(19),O=a(27),y=a(63),T=a.n(y),w=a(30),x=a.n(w),C=a(60),g=a(35),N=a.n(g),S=a(61),B=a.n(S),_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"deleteTask",value:function(){var e=Object(j.a)(b.a.mark(function e(t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("https://heroku-todos-api.herokuapp.com/api/v1","todos/3/items",!window.confirm('Are you sure you want to delete: "'.concat(t.name,'"'))){e.next=6;break}return e.next=5,fetch("".concat("https://heroku-todos-api.herokuapp.com/api/v1","/").concat("todos/3/items","/").concat(t.id),{method:"DELETE"});case 5:this.props.loadTasks();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"checkTask",value:function(){var e=Object(j.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://heroku-todos-api.herokuapp.com/api/v1","todos/3/items",a={item:{done:"true"}},e.next=5,fetch("".concat("https://heroku-todos-api.herokuapp.com/api/v1","/").concat("todos/3/items","/").concat(t.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 5:this.props.loadTasks();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(N.a,null,r.a.createElement(N.a.Body,null,r.a.createElement(B.a,{responsive:!0},r.a.createElement("tbody",null,this.props.tasks.map(function(t,a){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"col-md-10"},t.name),r.a.createElement("td",null,0==t.done?r.a.createElement("a",{className:"check",href:"#"},r.a.createElement(f.a,Object(C.a)({icon:"check-circle",size:"lg",onClick:function(){return e.checkTask(t)}},"size","lg"))):null),r.a.createElement("td",null,r.a.createElement("a",{className:"delete",href:"#",onClick:function(){return e.deleteTask(t)}},r.a.createElement(f.a,{icon:"trash-alt"}))))}))))))}}]),t}(n.Component),A=a(36),J=a(24),z=a.n(J),D=a(22),F=a.n(D),H=a(62),P=a.n(H);var W=function(e){var t=Object(n.useState)(""),a=Object(A.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),i=Object(A.a)(s,2),l=i[0],u=i[1],p=function(){var t=Object(j.a)(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://heroku-todos-api.herokuapp.com/api/v1","/").concat("todos/3/items"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({item:{name:c,done:!1}})});case 2:u(!1),o(""),e.loadTasks();case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(F.a,{onClick:function(e){return u(!0)},variant:"dark",className:"float-right create_task_btn"},"+ Tasks"),r.a.createElement(z.a,{show:l||!1,onHide:function(e){return u(!1)}},r.a.createElement(z.a.Header,{closeButton:!0},r.a.createElement(z.a.Title,null,"New Task")),r.a.createElement(z.a.Body,null,r.a.createElement(P.a.Control,{type:"email",placeholder:"Enter with your task...",value:c||"",onChange:function(e){return o(e.target.value)}})),r.a.createElement(z.a.Footer,null,r.a.createElement(F.a,{variant:"secondary",onClick:function(e){return u(!1)}},"Close"),r.a.createElement("form",{onSubmit:p},r.a.createElement(F.a,{variant:"dark",type:"submit"},"Create")))))},I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={tasks:[]},a.loadTasks=a.loadTasks.bind(Object(O.a)(Object(O.a)(a))),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"loadTasks",value:function(){var e=Object(j.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://heroku-todos-api.herokuapp.com/api/v1","todos/3/items",e.next=4,fetch("".concat("https://heroku-todos-api.herokuapp.com/api/v1","/").concat("todos/3/items"));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,this.setState({tasks:a});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadTasks()}},{key:"render",value:function(){return r.a.createElement(T.a,null,r.a.createElement(x.a,{xs:{span:8,offset:2},className:"tasks_list"},r.a.createElement("p",{className:"title"},"To-do"),r.a.createElement(_,{loadTasks:this.loadTasks,tasks:this.state.tasks.filter(function(e){return 1!=e.done})}),r.a.createElement(W,{loadTasks:this.loadTasks})),r.a.createElement(x.a,{xs:{span:8,offset:2},className:"tasks_list"},r.a.createElement("p",{className:"title"},"Done"),r.a.createElement(_,{loadTasks:this.loadTasks,tasks:this.state.tasks.filter(function(e){return 1==e.done})}),r.a.createElement(F.a,{variant:"danger",className:"float-right remove_tasks_btn"},"Remove all tasks")))}}]),t}(n.Component),L=(a(129),a(18)),M=a(23);L.b.add(M.a,M.b);var R=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(d.a,null,r.a.createElement(I,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));L.b.add(M.a,M.b),o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){e.exports=a(130)},70:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.a5691a29.chunk.js.map