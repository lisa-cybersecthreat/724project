(this.webpackJsonp724project=this.webpackJsonp724project||[]).push([[0],{21:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(23),i=c.n(a),j=c(3),r=c(20),o=c(5),l=c(7),b=(c(30),c(31),c(4)),d=c(1);var h=function(e){var t=Object(n.useState)({name:"hello",date:"today"}),c=Object(b.a)(t,2),s=c[0];return c[1],Object(d.jsxs)("main",{children:["home",Object(d.jsx)("button",{onClick:function(t){console.log("click redirect button"),e.history.push({pathname:"/app",state:s})},children:"redirect"})]})},u=c(11),O=Object(n.createContext)(),p=function(e){var t=Object(n.useState)("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/UserAuthentication"),c=Object(b.a)(t,1)[0],s=Object(n.useState)("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionUsers"),a=Object(b.a)(s,1)[0],i=Object(n.useState)("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionCheckURL"),j=Object(b.a)(i,1)[0];return Object(d.jsx)(O.Provider,{value:{authUrl:c,transactionUsersUrl:a,transactionCheckURL:j},children:e.children})};c(33);var x=function(e){var t=Object(n.useContext)(O),c=(t.authUrl,t.transactionUsersUrl),s=Object(n.useState)({userid:"",password:""}),a=Object(b.a)(s,2),i=a[0],r=a[1],o=Object(n.useState)(null),l=Object(b.a)(o,2),h=l[0],p=l[1],x=Object(n.useState)(""),m=Object(b.a)(x,2),f=m[0],g=m[1],v=function(e){r(Object(j.a)(Object(j.a)({},i),{},Object(u.a)({},e.target.name,e.target.value))),f.length>0&&g("")};return Object(d.jsx)("main",{id:"Login",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(i)},children:[Object(d.jsx)("h2",{children:"Login"}),null===h?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{name:"userid",type:"text",placeholder:"user id",value:i.userid,onChange:v,required:!0}),Object(d.jsx)("input",{type:"submit",value:"next",onClick:function(){console.log("click userid button"),fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"Query",userid:i.userid})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.length>0?p(e):g("wrong userid")})).catch((function(e){return console.error(e)}))}})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{name:"password",type:"password",placeholder:"password",value:i.password,onChange:v,required:!0}),Object(d.jsx)("input",{type:"submit",value:"next",onClick:function(){console.log(h[0].password),i.password!==h[0].password?g("worng password"):(g("Login Successfully"),setTimeout((function(){e.history.push({pathname:"/app",state:h})}),1e3))}})]}),f.length>0&&Object(d.jsx)("h1",{className:"alert",style:{background:f.toLowerCase().indexOf("ok")>0||f.toLowerCase().indexOf("success")>0?"var(--green)":"var(--red)"},children:f}),Object(d.jsx)("a",{href:"#",children:"forget password??"})]})})},m=(c(21),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAApCAMAAAAbOBfqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAVlQTFRFAAAAqo3FqYzEqo3FqYzEc0Ogc0Ogc0Ofc0OfVRqLVRqLVRqLjGSw2s3m6+Tx1MXifU+mtZvN59/vtJrMZjGXw67W1snjiGCuk2617OXy////5dztgleqwqzV+/n8wazVaDSY0cLg6ODvj2mzkm216+XxwKvUj2iy//7//Pv9/f3+/v3++vn8/fz9/v7+6+Xy+ff70cHgxbHYy7nc597v7ObyuKDPsZfK6uPxyLTayLXa0sLgybbavKXSh16t5t3uimGvrpHHzbvdbTqbbzydkmy1WSCOYCiSwazUkWu0bDmbuaDP9vP50MDf6eHwspfKs5rLspnKnXy8eEqjsJbJsJXJdUWgrJDGn369oYG/h12tWyKPWiGOVx2NVx2MkWuzVhyMWiCOVxyMWB+NVRuLVRqLVRqLXyeSWiGPtZvM597u1sjjiF+tVRqLVRqL1MXilXG31MXiuKDP7NEqSAAAAHN0Uk5TAE+YmEmF//96hf96//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////914PP//////+9rmv9cmBRQKqQAAAGJSURBVHic7ZdXV8JAEEaRaLDF3sWGICp2RVFUrLErKooKNuy9/P8HdxZTmYiJBD2e3LMPM/l2z2X2ibXZskSOnWFkyy4soWIY9QZ95FJLHsuyDmk5kotlhUaRwled5FNLQaG5FFkW45ZiriSV0jKIyiuQqLIKomokkVFTq7LU1Tek0uiEqKkZiVpaIWpDEhmudpXF7dFn6fiWxfvLs3R2UboRi68H6MVm8dFDfVAmz6OzuPuF/QODQ4ThEcTiHx0jcJglME4OTfihDML5SfzGJMsU9NOYJTQD/Sx2Y3PzpF0IQrnIk3IJvzGdFvUsuOWnsywbm8Wjz2JsFstiWdJZVlYJayZb1rkNwqbJFhmWJUuWrfAn2zvQ70ZIubevtATCIlFqiYr9AbUcQnkElhhUEbWFj4nEoT+m5YnS4jqVdp1BJLXnCdIm4lBeQHJJv/IqyxfILN40W1H+n+XqWoubW9h1dy/8V3x4hP5Jcz/Oc5r304tT+7dlDsui2/Kq/U7MHG/v2m/eP8gHzVlFLf8Qm90AAAAASUVORK5CYIIZdQAAAABJRU5ErkJggg==");var f=function(e){return Object(d.jsxs)("nav",{children:[Object(d.jsx)("a",{href:"/",children:Object(d.jsx)("img",{src:m,alt:"logo"})}),Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsx)(l.d,{exact:!0,to:"/",activeClassName:"active-link",children:"home"}),Object(d.jsx)(l.d,{exact:!0,to:"/login",activeClassName:"active-link",children:"login"}),Object(d.jsx)(l.d,{exact:!0,to:"/register",activeClassName:"active-link",children:"register"})]})]})},g=(c(39),c(40),c(25));var v=function(e){var t=Object(n.useContext)(O).transactionCheckURL,c=Object(n.useState)(e.location.state[0]),s=Object(b.a)(c,2),a=s[0],i=(s[1],Object(n.useState)(!1)),r=Object(b.a)(i,2),o=r[0],l=r[1],h=Object(n.useState)(""),p=Object(b.a)(h,2),x=p[0],m=p[1],f=Object(n.useState)({action:"Update",usersseqno:a.seqno,pageurl:"",noticemail:a.email}),v=Object(b.a)(f,2),y=v[0],A=v[1];return Object(d.jsxs)(d.Fragment,{children:[console.log("return"),Object(d.jsxs)("main",{id:"Dashboard",children:[Object(d.jsx)("h1",{children:"Dashboard"}),Object(d.jsxs)("p",{children:["welcome ",a.userid]}),Object(d.jsx)("p",{children:a.email}),Object(d.jsxs)("p",{children:["seqno: ",Object(d.jsx)("span",{children:a.seqno})]}),Object(d.jsxs)("div",{className:"action-card",onClick:function(e){return l(!o)},children:[Object(d.jsxs)("div",{className:"top-div",children:[Object(d.jsx)(g.a,{}),Object(d.jsx)("h1",{children:"\u76e3\u63a7\u7db2\u9801\u5167\u5bb9"})]}),Object(d.jsx)("p",{children:"\u53ef\u8a2d\u5b9a\u7570\u52d5\u9700\u8981\u5f8c\u7aef\u76e3\u63a7\u7db2\u9801\u5167\u5bb9\u7684pageurl"})]}),Object(d.jsx)("div",{style:{display:o?"block":"none"},children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(y),fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e),m(e.result)})).catch((function(e){return console.error(e)}))},children:[Object(d.jsx)("input",{type:"url",name:"pageurl",value:y.pageurl,onChange:function(e){A(Object(j.a)(Object(j.a)({},y),{},Object(u.a)({},e.target.name,e.target.value)))},required:!0}),Object(d.jsx)("input",{type:"submit",value:"submit"}),Object(d.jsx)("p",{children:x})]})})]})]})};var y=function(e){var t=Object(n.useContext)(O).transactionUsersUrl,c=Object(n.useState)({}),s=Object(b.a)(c,2),a=s[0],i=s[1],r=Object(n.useState)(""),o=Object(b.a)(r,2),l=o[0],h=o[1],p=Object(n.useState)(0),x=Object(b.a)(p,2),f=(x[0],x[1],function(e){i(Object(j.a)(Object(j.a)({},a),{},Object(u.a)({},e.target.name,e.target.value)))});return Object(n.useEffect)((function(){console.log(e.history),fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"Query",userid:""})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.error(e)}))}),[]),Object(d.jsxs)("main",{id:"Register",children:[Object(d.jsxs)("div",{className:"top-div",children:[Object(d.jsx)("a",{href:"/",className:"logo",children:Object(d.jsx)("img",{src:m,alt:"logo"})}),Object(d.jsxs)("p",{className:"login",children:["Have an account??\xa0\xa0",Object(d.jsx)("a",{href:"/login",children:"Login"})]})]}),Object(d.jsxs)("form",{onSubmit:function(c){c.preventDefault();var n=Object(j.a)(Object(j.a)({},a),{},{action:"Add"});console.log(n),fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){console.log(t),h(t.result),"ok"===t.result.toLowerCase()&&setTimeout((function(){e.history.push({pathname:"/app",state:t})}),1e3)})).catch((function(e){return console.error(e)})),setTimeout((function(){e.history.push("/app")}),1e3)},children:[Object(d.jsx)("h2",{children:"Sign Up for free 30 days trial!"}),Object(d.jsxs)("div",{className:"input-div",children:[Object(d.jsxs)("label",{children:[Object(d.jsxs)("p",{children:["user id",Object(d.jsx)("span",{children:"*"})]}),Object(d.jsx)("input",{name:"userid",type:"text",placeholder:"",onChange:f,required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsxs)("p",{children:["password",Object(d.jsx)("span",{children:"*"})]}),Object(d.jsx)("input",{name:"password",type:"password",placeholder:"",onChange:f,required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"company"}),Object(d.jsx)("input",{name:"company",type:"text",placeholder:"",onChange:f})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"user name"}),Object(d.jsx)("input",{name:"username",type:"text",placeholder:"",onChange:f})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"title"}),Object(d.jsx)("input",{name:"title",type:"text",placeholder:"",onChange:f})]}),Object(d.jsxs)("label",{children:[Object(d.jsxs)("p",{children:["email",Object(d.jsx)("span",{children:"*"})]}),Object(d.jsx)("input",{name:"email",type:"email",placeholder:"",onChange:f,required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"birthday"}),Object(d.jsx)("input",{name:"birthday",type:"date",placeholder:"",onChange:f})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"gender"}),Object(d.jsxs)("select",{name:"gender",onChange:f,defaultValue:"",children:[Object(d.jsx)("option",{value:""}),Object(d.jsx)("option",{value:"m",children:"male"}),Object(d.jsx)("option",{value:"f",children:"female"})]})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"telephone"}),Object(d.jsx)("input",{name:"telephone",type:"tel",placeholder:"",onChange:f})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"mobile"}),Object(d.jsx)("input",{name:"mobile",type:"tel",placeholder:"",onChange:f})]})]}),Object(d.jsxs)("div",{className:"address-div",children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"zipcode"}),Object(d.jsx)("input",{name:"zipcode",type:"text",placeholder:"",value:a.zipcode,onChange:f})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"address"}),Object(d.jsx)("input",{name:"address",type:"text",placeholder:"",value:a.address,onChange:f})]})]}),Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"submit",value:"sign up"})}),l.length>0&&Object(d.jsx)("h1",{className:"alert",style:{background:l.indexOf("ok")>0?"var(--green)":"var(--red)"},children:l})]})]})};var A=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"404 page not found"}),Object(d.jsx)("button",{onClick:function(t){e.history.push("/")},children:"go to home page"})]})};var C=c(18),S=c(19);var k=function(e){var t=Object(n.useState)(!1),c=Object(b.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(e.location.state[0]),j=Object(b.a)(i,2),r=j[0];return j[1],console.log(void 0===e.location.state),Object(d.jsxs)("header",{className:"app-header",children:[void 0===e.location.state&&e.history.push("/404"),Object(d.jsxs)("nav",{className:"app-nav",children:[Object(d.jsx)("a",{href:"/",children:Object(d.jsx)("img",{src:m,alt:"logo"})}),Object(d.jsx)("div",{className:"menu",children:Object(d.jsxs)("div",{className:"user-icon",onClick:function(e){a(!s)},children:[Object(d.jsx)(C.a,{}),Object(d.jsxs)("div",{className:"user-card",onClick:function(e){a(!1)},style:{display:s?"block":"none"},children:[Object(d.jsxs)("div",{className:"top-div",children:[Object(d.jsx)(C.a,{}),Object(d.jsx)("p",{children:r.userid}),Object(d.jsx)("p",{children:r.email})]}),Object(d.jsxs)("div",{className:"bottom-div",children:[Object(d.jsx)(l.c,{to:{pathname:"".concat(e.match.path,"/myaccount"),state:e.location.state},children:"my account"}),Object(d.jsx)("a",{href:"/",children:"log out"})]})]})]})})]}),Object(d.jsxs)("nav",{className:"control-nav",children:[Object(d.jsxs)(l.d,{exact:!0,to:{pathname:"/app",state:e.location.state},activeClassName:"control-nav-active",children:[Object(d.jsx)(S.a,{}),Object(d.jsx)("p",{children:"home"})]}),Object(d.jsxs)(l.d,{exact:!0,to:{pathname:"/app/myaccount",state:e.location.state},activeClassName:"control-nav-active",children:[Object(d.jsx)(S.b,{}),Object(d.jsx)("p",{children:"my account"})]})]})]})};c(41);var w=function(e){var t=Object(n.useState)(e.location.state[0]),c=Object(b.a)(t,2),s=c[0];return c[1],Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("main",{id:"MyAccount",children:[Object(d.jsx)("h1",{children:"my account"}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:"personal infomation"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["user id: ",Object(d.jsx)("span",{children:s.userid})]}),Object(d.jsxs)("li",{children:["user name: ",Object(d.jsx)("span",{children:s.username})]}),Object(d.jsxs)("li",{children:["email: ",Object(d.jsx)("span",{children:s.email})]}),Object(d.jsxs)("li",{children:["company: ",Object(d.jsx)("span",{children:s.company})]}),Object(d.jsxs)("li",{children:["title: ",Object(d.jsx)("span",{children:s.title})]}),Object(d.jsxs)("li",{children:["telephone: ",Object(d.jsx)("span",{children:s.telephone})]}),Object(d.jsxs)("li",{children:["zipcode: ",Object(d.jsx)("span",{children:s.zipcode})]}),Object(d.jsxs)("li",{children:["address: ",Object(d.jsx)("span",{children:s.address})]})]})]}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:"account details"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["membership: ",Object(d.jsx)("span",{children:s.usertype})]}),Object(d.jsxs)("li",{children:["membership account status: ",Object(d.jsx)("span",{children:s.enabled})]}),Object(d.jsxs)("li",{children:["uname: ",Object(d.jsx)("span",{children:s.name})]})]})]})]})})},q=["exact","path","component"],N=["exact","path","component"],L=function(e){var t=e.exact,c=e.path,n=e.component,s=Object(r.a)(e,q);return Object(d.jsx)(o.a,Object(j.a)(Object(j.a)({exact:t,path:c},s),{},{render:function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,Object(j.a)({},e)),Object(d.jsx)(n,Object(j.a)({},e))]})}}))},F=function(e){var t=e.exact,c=e.path,n=e.component,s=Object(r.a)(e,N);return Object(d.jsx)(o.a,Object(j.a)(Object(j.a)({exact:t,path:c},s),{},{render:function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,Object(j.a)({},e)),Object(d.jsx)(n,Object(j.a)({},e))]})}}))};var U=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(l.b,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(L,{exact:!0,path:"/",component:function(e){return Object(d.jsx)(h,Object(j.a)({},e))}}),Object(d.jsx)(o.a,{exact:!0,path:"/login",component:function(e){return Object(d.jsx)(x,Object(j.a)({},e))}}),Object(d.jsx)(o.a,{exact:!0,path:"/register",component:function(e){return Object(d.jsx)(y,Object(j.a)({},e))}}),Object(d.jsx)(F,{exact:!0,path:"/app",component:function(e){return Object(d.jsx)(v,Object(j.a)({},e))}}),Object(d.jsx)(F,{exact:!0,path:"/app/myaccount",component:function(e){return Object(d.jsx)(w,Object(j.a)({},e))}}),Object(d.jsx)(o.a,{path:"*",exact:!0,component:A})]})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{children:Object(d.jsx)(U,{})})}),document.getElementById("root")),J()}},[[42,1,2]]]);
//# sourceMappingURL=main.9ab9518d.chunk.js.map