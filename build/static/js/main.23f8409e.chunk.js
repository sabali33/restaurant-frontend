(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{18:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(8),c=a.n(r),l=(a(18),a(4)),i=a.n(l),o=a(5),d=a(3),b=a(6),j=a(2),u={apiRoot:"http://localhost:5000/api/v1/"},m="LOGIN_USER",x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=window.localStorage,s=a.getItem("ra-user-token"),n=JSON.parse(s);return function(){var s=Object(o.a)(i.a.mark((function s(r){var c,l,o,d;return i.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(e||t||!n){s.next=15;break}return s.next=3,fetch("".concat(u.apiRoot,"user/").concat(n.userId),{headers:{Authorization:"Bearer ".concat(n.token)}});case 3:return c=s.sent,s.next=6,c.json();case 6:if(!(l=s.sent).error){s.next=12;break}if("TokenExpiredError"!==l.message.name){s.next=11;break}throw a.removeItem("ra-user-token"),new Error("Session has expired");case 11:throw new Error(l.message);case 12:return s.abrupt("return",r({user:l,token:n,type:m}));case 15:return s.next=17,fetch("".concat(u.apiRoot,"login"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email:e,password:t})});case 17:return o=s.sent,s.next=20,o.json();case 20:if(!(d=s.sent).error){s.next=23;break}throw new Error(d.message);case 23:return a.setItem("ra-user-token",JSON.stringify({token:d.token,userId:d.user.id})),s.abrupt("return",r(Object(j.a)(Object(j.a)({},d),{},{type:m})));case 25:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},p=a(0),h=void 0,O=function(e){var t=Object(s.useState)(""),a=Object(b.a)(t,2),n=a[0],r=a[1],c=Object(s.useState)(""),l=Object(b.a)(c,2),j=l[0],u=l[1],m=Object(s.useState)(null),O=Object(b.a)(m,2),f=O[0],g=O[1],w=Object(d.b)(),N=function(e,t){t.persist(),e(t.target.value)},v=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(x(n,j));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),g(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"login-box w-1/2 p-12 border-2 border-solid border-gray-600 border-opacity-100",children:[f&&Object(p.jsxs)("div",{className:"text-red-400 pt-3 mb-8",children:[" Error: ",f]}),Object(p.jsx)("h2",{className:"text-2xl font-bold mb-16",children:"Login"}),Object(p.jsxs)("div",{className:"text-field mb-10",children:[Object(p.jsx)("p",{className:"mb-2",children:Object(p.jsx)("label",{htmlFor:"login-email",className:"text-gray-700",children:" Email "})}),Object(p.jsx)("p",{children:Object(p.jsx)("input",{type:"email",onChange:N.bind(h,r),value:n,id:"login-email",className:"rounded w-full leading-10 pl-5 shadow bg-gray-400 text-white"})})]}),Object(p.jsxs)("div",{className:"text-field mb-10",children:[Object(p.jsx)("p",{className:"mb-2",children:Object(p.jsx)("label",{htmlFor:"login-password",className:"text-gray-700",children:" Password "})}),Object(p.jsx)("p",{children:Object(p.jsx)("input",{type:"password",onChange:N.bind(h,u),value:j,id:"login-password",className:"rounded w-full leading-10 pl-5 shadow bg-gray-400"})})]}),Object(p.jsx)("p",{children:Object(p.jsx)("button",{onClick:v,className:"rounded px-10 py-3 bg-yellow-200",children:" Login "})})]})},f=a(7),g=void 0,w=function(e,t){switch(t.type){case"INPUT_CHANGE":return Object(j.a)(Object(j.a)({},e),{},{data:Object(j.a)(Object(j.a)({},e.data),{},Object(f.a)({},t.field,t.value))});case"FIELD_TOUCH":return Object(j.a)(Object(j.a)({},e),{},{fieldsDirty:Object(j.a)(Object(j.a)({},e.fieldsDirty),{},Object(f.a)({},t.field,!0))});default:return e}},N=function(e){var t=Object(d.c)((function(e){return e.auth})),a=Object(d.b)(),n=Object(s.useReducer)(w,{data:{first_name:"",last_name:"",email:"",password:"",password_confirm:""},fieldsDirty:{first_name:!1,last_name:!1,email:!1,password:!1,password_confirm:!1}}),r=Object(b.a)(n,2),c=r[0],l=r[1];Object(s.useEffect)((function(){}),[a,t]);var i=function(e,t){t.persist(),l({type:"INPUT_CHANGE",field:e,value:t.target.value})};return Object(p.jsxs)("div",{className:"signup-box w-1/2 bg-gray-200 p-12 rounded-md",children:[Object(p.jsx)("h2",{className:"text-2xl font-bold mb-16",children:"Sign up"}),Object(p.jsxs)("div",{className:"text-field mb-10",children:[Object(p.jsx)("p",{className:"mb-2",children:Object(p.jsx)("label",{htmlFor:"first-name",className:"text-gray-700",children:" First Name "})}),Object(p.jsx)("p",{children:Object(p.jsx)("input",{type:"text",onChange:i.bind(g,"first_name"),value:c.data.first_name,id:"first-name",className:"rounded w-full leading-10 pl-5 shadow"})})]}),Object(p.jsxs)("div",{className:"text-field mb-10",children:[Object(p.jsx)("p",{className:"mb-2",children:Object(p.jsx)("label",{htmlFor:"last-name",className:"text-gray-700",children:" Last Name "})}),Object(p.jsx)("p",{children:Object(p.jsx)("input",{type:"text",onChange:i.bind(g,"last_name"),value:c.data.last_name,id:"last-name",className:"rounded w-full leading-10 pl-5 shadow"})})]}),Object(p.jsxs)("div",{className:"text-field mb-10",children:[Object(p.jsx)("p",{className:"mb-2",children:Object(p.jsx)("label",{htmlFor:"email",className:"text-gray-700",children:" Email "})}),Object(p.jsx)("p",{children:Object(p.jsx)("input",{type:"email",onChange:i.bind(g,"email"),value:c.data.email,id:"email",className:"rounded w-full leading-10 pl-5 shadow"})})]}),Object(p.jsxs)("div",{className:"text-field mb-10",children:[Object(p.jsx)("p",{className:"mb-2",children:Object(p.jsx)("label",{htmlFor:"password",className:"text-gray-700",children:" Password "})}),Object(p.jsx)("p",{children:Object(p.jsx)("input",{type:"password",onChange:i.bind(g,"password"),value:c.data.password,id:"password",className:"rounded w-full leading-10 pl-5 shadow"})})]}),Object(p.jsxs)("div",{className:"text-field mb-10",children:[Object(p.jsx)("p",{className:"mb-2",children:Object(p.jsx)("label",{htmlFor:"password-confirm",className:"text-gray-700",children:" Password Confirm "})}),Object(p.jsx)("p",{children:Object(p.jsx)("input",{type:"password",onChange:i.bind(g,"password_confirm"),value:c.data.password_confirm,id:"password-confirm",className:"rounded w-full leading-10 pl-5 shadow"})})]}),Object(p.jsx)("div",{className:"text-field mb-10",children:Object(p.jsx)("p",{children:Object(p.jsx)("button",{className:"bg-yellow-200 text-gray-600 px-10 py-3 rounded font-bold",children:" Sign up"})})})]})},v=function(e){return Object(p.jsx)("div",{className:"login-signup-box mx-auto",children:Object(p.jsxs)("div",{className:"flex justify-between w-full",children:[Object(p.jsx)(N,{}),Object(p.jsx)(O,{})]})})},y=function(e){return Object(p.jsx)("div",{children:"Welcome"})};var k=function(){var e=Object(d.c)((function(e){return e.auth})),t=Object(d.b)(),a=Object(s.useCallback)(Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(x());case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))),[t]);return Object(s.useEffect)((function(){a()}),[a]),console.log(e),Object(p.jsxs)("div",{className:"App pt-10",children:[Object(p.jsx)("header",{className:"App-header mb-10 mx-auto container text-center",children:Object(p.jsxs)("div",{className:"flex",children:[Object(p.jsx)("div",{className:"w-1/3",children:Object(p.jsxs)("a",{className:"font-extrabold text-4xl",href:"/",rel:"noopener noreferrer",children:["Restaurant ",Object(p.jsx)("span",{className:"text-yellow-200 px-2 bg-gray-600 rounded",children:"App"})]})}),Object(p.jsx)("div",{className:"w-2/3",children:e.user&&Object(p.jsxs)("span",{className:"text-gray-500 font-bold",children:[" ","".concat(e.user.first_name," ").concat(e.user.last_name)," ",Object(p.jsx)("a",{href:"/",className:"text-red-400",children:"Logout"})]})})]})}),Object(p.jsx)("main",{className:"w-3/5 mx-auto",children:e.user?Object(p.jsx)(y,{user:e.user}):Object(p.jsx)(v,{})})]})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))},C=a(9),E=a(13),S={user:null,token:null},F=Object(C.c)(Object(C.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(j.a)(Object(j.a)({},e),{},{user:t.user,token:t.token});default:return e}}}),Object(C.a)(E.a));c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(d.a,{store:F,children:Object(p.jsx)(k,{})})}),document.getElementById("root")),_()}},[[27,1,2]]]);
//# sourceMappingURL=main.23f8409e.chunk.js.map