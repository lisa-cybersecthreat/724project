(this.webpackJsonp724project=this.webpackJsonp724project||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},39:function(e){e.exports=JSON.parse('{"home":"home","login":"login","register":"sign up","next":"next","forgot_password":"forgot password?","userid":"user id","password":"password","company":"company","user_name":"user name","title":"title","birthday":"birthday","gender":"gender","tel":"telephone number","mobile":"mobile number","zipcode":"zipcode","address":"address","have_account":"have an account?","sign_up_free":"Sign Up for free 30 days trial!","wrong_userid":"worng userid!","wrong_password":"wrong password!","login_success":"Login Successfully","my_account":"my account","logout":"log out","monitor_web_content":{"title":"Monitor web content","text":"can set the pageurl of the web page content that needs to be monitored by the back-end when the transaction is changed"},"personal_info":"personal information","account_details":"account details","update":"update","delete_account":"delete my account","membership":"membership","membership_status":"membership account status","userid_password_wrong":"wrong user id or password","TransactionUsers":{"0":"disabled","1":"enabled","free":"free member","ordered":"An order has been placed as a member, but no payment has been made","customer":"paid member"},"update_personal_info":"update personal informaiton","update_password":"update password","old_password":"old password","new_password":"new password","password_not_match":"password didn\'t match","confirm_password":"confirm password","confirm":"confirm","update_success":"updated successfully","male":"male","female":"female","TransactionCheckURL":{"conflict":"pageurl duplicate"},"delete":"delete","add_success":"add successfully"}')},40:function(e){e.exports=JSON.parse('{"home":"\u9996\u9801","login":"\u767b\u9304","register":"\u8a3b\u518a","next":"\u4e0b\u4e00\u6b65","forgot_password":"\u5fd8\u8a18\u5bc6\u78bc?","userid":"\u4f7f\u7528\u8005ID","password":"\u5bc6\u78bc","company":"\u516c\u53f8","user_name":"\u4f7f\u7528\u8005\u540d\u7a31","title":"\u8077\u7a31","birthday":"\u751f\u65e5","gender":"\u6027\u5225","tel":"\u96fb\u8a71\u865f\u78bc","mobile":"\u624b\u6a5f\u865f\u78bc","zipcode":"\u90f5\u905e\u5340\u865f","address":"\u5730\u5740","have_account":"\u5df2\u7d93\u6709\u5e33\u865f\u4e86\uff1f","sign_up_free":"\u8a3b\u518a\u4eab\u670930\u5e74\u7684\u514d\u8cbb\u8a66\u7528\uff01","wrong_userid":"\u4f7f\u7528\u8005ID\u932f\u8aa4\uff01","wrong_password":"\u5bc6\u78bc\u932f\u8aa4\uff01","login_success":"\u8a3b\u518a\u6210\u529f","my_account":"\u6211\u7684\u5e33\u6236","logout":"\u767b\u51fa","welcome":"\u6b61\u8fce\u767b\u5165","monitor_web_content":{"title":"\u76e3\u63a7\u7db2\u9801\u5167\u5bb9","text":"\u53ef\u8a2d\u5b9a\u7570\u52d5\u9700\u8981\u5f8c\u7aef\u76e3\u63a7\u7db2\u9801\u5167\u5bb9\u7684pageurl"},"personal_info":"\u500b\u4eba\u8cc7\u8a0a","account_details":"\u5e33\u6236\u8a2d\u7f6e","update":"\u4fee\u6539\u8cc7\u6599","delete_account":"\u8a3b\u92b7\u6211\u7684\u5e33\u6236","membership":"\u6703\u54e1\u8eab\u4efd","membership_status":"\u6703\u54e1\u72c0\u614b","userid_password_wrong":"\u4f7f\u7528\u8005ID\u6216\u5e33\u865f\u932f\u8aa4","language":"\u8a9e\u8a00","TransactionUsers":{"0":"\u505c\u7528","1":"\u555f\u7528","free":"\u514d\u8cbb\u6703\u54e1","ordered":"\u5df2\u4e0b\u55ae\u6210\u6703\u54e1,\u672a\u4ed8\u6b3e","customer":"\u5df2\u4ed8\u6b3e\u6210\u6703\u54e1"},"update_personal_info":"\u4fee\u6539\u500b\u4eba\u8cc7\u6599","update_password":"\u4fee\u6539\u5bc6\u78bc","old_password":"\u820a\u5bc6\u78bc","new_password":"\u65b0\u5bc6\u78bc","password_not_match":"\u5bc6\u78bc\u4e0d\u4e00\u6a23","confirm_password":"\u518d\u8f38\u5165\u4e00\u6b21\u5bc6\u78bc","confirm":"\u78ba\u8a8d","update_success":"\u66f4\u65b0\u6210\u529f","male":"\u7537","female":"\u5973","TransactionCheckURL":{"conflict":"url\u91cd\u8986"},"delete":"\u522a\u9664","add_success":"\u8cc7\u6599\u5df2\u6210\u529f\u52a0\u5165"}')},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(31),r=n.n(a),i=n(4),o=n(27),l=n(5),j=n(7),d=(n(45),n(46),n(8)),u=n(3),b=n(66),h=n(65),O=(n(47),n(35)),p=n(1),x=Object(c.createContext)(),m=function(e){var t=Object(c.useState)("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/UserAuthentication"),n=Object(u.a)(t,1)[0],s=Object(c.useState)("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionUsers"),a=Object(u.a)(s,1)[0],r=Object(c.useState)("https://jqobw5w2ef.execute-api.ap-southeast-1.amazonaws.com/TransactionCheckURL"),i=Object(u.a)(r,1)[0],o=Object(c.useState)({"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}),l=Object(u.a)(o,1)[0];return Object(p.jsx)(x.Provider,{value:{authUrl:n,transactionUsersUrl:a,transactionCheckURL:i,header_auth:l},children:e.children})},f=Object(c.createContext)(),g=function(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(!1),i=Object(u.a)(r,2),o=i[0],l=i[1];return Object(p.jsx)(f.Provider,{value:{thisUser:s,setThisUser:a,runFetch:o,setRunFetch:l},children:e.children})};var v=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(!1),o=Object(u.a)(r,2),l=o[0],j=o[1],b=Object(c.useState)({}),h=Object(u.a)(b,2),O=h[0],x=h[1],m=Object(c.useState)(""),f=Object(u.a)(m,2),g=f[0],v=f[1],y=Object(c.useRef)(),w=Object(c.useRef)();Object(c.useEffect)((function(){v(""),x({}),w.current.disabled=!0}),[s,l]);var C=function(t){t.target.value===e.url.pageurl&&(w.current.disabled=!1),x(Object(i.a)(Object(i.a)({},O),{},Object(d.a)({},t.target.name,t.target.value)))};return Object(p.jsxs)("div",{id:"UrlCard",children:[Object(p.jsxs)("ul",{className:"info-div",children:[Object(p.jsxs)("li",{children:["usersseqno: ",Object(p.jsx)("span",{children:e.url.usersseqno})]}),Object(p.jsxs)("li",{children:["seqno: ",Object(p.jsx)("span",{children:e.url.seqno})]}),Object(p.jsxs)("li",{children:["pageurl: ",Object(p.jsx)("span",{children:e.url.pageurl})]}),Object(p.jsxs)("li",{children:["noticemail: ",Object(p.jsx)("span",{children:e.url.noticemail})]}),Object(p.jsxs)("li",{children:["createdatetime:",Object(p.jsx)("span",{children:e.url.createdatetime.toLocaleString()})]}),Object(p.jsxs)("li",{children:["updatedatetime:",Object(p.jsx)("span",{children:e.url.updatedatetime})]}),Object(p.jsxs)("li",{children:["lastcheckdatetime: ",Object(p.jsx)("span",{children:e.url.lastcheckdatetime})]})]}),Object(p.jsxs)("div",{className:"btn-div",children:[Object(p.jsx)("button",{onClick:function(){return a(!s)},children:e.t("update")}),Object(p.jsx)("button",{onClick:function(){return j(!l)},children:e.t("delete")})]}),Object(p.jsx)("div",{className:"UpdateCard",style:{display:s?"block":"none"},children:Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),y.current.disabled=!0,fetch(e.transactionCheckURL,{method:"POST",headers:e.header_auth,body:JSON.stringify({action:"Update",usersseqno:e.url.usersseqno,pageurl:e.url.pageurl,noticemail:O.noticemail})}).then((function(e){return e.json()})).then((function(t){console.log(t),v(t.result.toLowerCase()),e.setFetchUrls(!e.fetchUrls)})).catch((function(e){return console.error(e)}))},children:[Object(p.jsx)("div",{className:"x-btn",onClick:function(){return a(!1)},children:"X"}),Object(p.jsx)("h1",{children:e.t("update")}),Object(p.jsxs)("li",{children:["pageurl: ",Object(p.jsx)("span",{children:e.url.pageurl})]}),Object(p.jsxs)("label",{children:["noticemail:",Object(p.jsx)("input",{type:"email",name:"noticemail",value:void 0===O.noticemail?"":O.noticemail,onChange:C,required:!0})]}),Object(p.jsx)("input",{type:"submit",value:e.t("confirm"),ref:y}),Object(p.jsx)("h1",{style:{color:-1!==g.indexOf("ok")?"var(--green)":"var(--red)"},children:-1!==g.indexOf("ok")?e.t("update_success"):g})]})}),Object(p.jsx)("div",{className:"DeleteCard",style:{display:l?"block":"none"},children:Object(p.jsx)("div",{id:"DelBox",className:"overlay",children:Object(p.jsxs)("div",{className:"box",children:[Object(p.jsxs)("div",{className:"top",children:[Object(p.jsx)("h1",{children:"Are you absolutely sure?"}),Object(p.jsx)("button",{className:"x-btn",onClick:function(){return j(!1)},children:"X"})]}),Object(p.jsxs)("form",{className:"bottom",onSubmit:function(t){t.preventDefault(),fetch(e.transactionCheckURL,{method:"POST",headers:e.header_auth,body:JSON.stringify({action:"Delete",usersseqno:e.url.usersseqno,pageurl:e.url.pageurl})}).then((function(e){return e.json()})).then((function(t){console.log(t),v(t.result.toLowerCase()),e.setFetchUrls(!e.fetchUrls)})).catch((function(e){return console.error(e)}))},children:[Object(p.jsxs)("p",{children:["This will permanently delete the ",Object(p.jsx)("span",{children:e.url.pageurl})," url."]}),Object(p.jsxs)("p",{children:["Please type ",Object(p.jsx)("span",{children:e.url.pageurl})," to confirm."]}),Object(p.jsx)("input",{type:"text",name:"pageurl",value:void 0===O.pageurl?"":O.pageurl,onChange:C,required:!0}),Object(p.jsx)("input",{type:"submit",value:"delete this url",ref:w,disabled:!0}),Object(p.jsx)("h1",{style:{color:-1!==g.indexOf("ok")?"var(--green)":"var(--red)"},children:-1!==g.indexOf("ok")?e.t("delete"):g})]})]})})})]})};var y=function(e){var t=Object(c.useContext)(x),n=t.transactionCheckURL,s=t.header_auth,a=Object(c.useContext)(f),r=a.thisUser,o=(a.setThisUser,a.runFetch,a.setRunFetch,Object(b.a)()),l=o.t,j=(o.i18n,Object(c.useState)(!1)),m=Object(u.a)(j,2),g=m[0],y=m[1],w=Object(c.useState)(!1),C=Object(u.a)(w,2),U=C[0],S=C[1],_=Object(c.useState)(""),k=Object(u.a)(_,2),N=k[0],A=k[1],I=Object(c.useState)({noticemail:r.email}),L=Object(u.a)(I,2),q=L[0],T=L[1],F=Object(c.useState)([]),z=Object(u.a)(F,2),J=z[0],R=z[1],P=Object(c.useRef)(),D=function(e){T(Object(i.a)(Object(i.a)({},q),{},Object(d.a)({},e.target.name,e.target.value))),P.current.disabled=!1,A("")};return Object(c.useEffect)((function(){A(""),T({noticemail:r.email})}),[U]),Object(c.useEffect)((function(){console.log(localStorage.getItem("token")),void 0!==r.seqno&&fetch(n,{method:"POST",headers:s,body:JSON.stringify({action:"Query",usersseqno:9,pageurl:"",noticemail:"ningsen.cheng@cybersecthreat.com"})}).then((function(e){return e.json()})).then((function(e){console.log(e),R(e)})).catch((function(e){return console.error(e)}))}),[r,g]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("main",{id:"Dashboard",children:[Object(p.jsxs)("h1",{children:[l("welcome"),Object(p.jsx)("span",{children:r.userid})]}),Object(p.jsxs)("section",{children:[Object(p.jsxs)("p",{children:["email: ",r.email]}),Object(p.jsxs)("p",{children:["seqno: ",Object(p.jsx)("span",{children:r.seqno})]}),Object(p.jsxs)("p",{children:["usersseqno: ",Object(p.jsx)("span",{children:r.usersseqno})]}),Object(p.jsxs)("div",{className:"action-card",children:[Object(p.jsxs)("div",{className:"top-div",children:[Object(p.jsx)(O.a,{}),Object(p.jsx)("h1",{children:l("monitor_web_content.title")})]}),Object(p.jsx)("p",{children:l("monitor_web_content.text")}),Object(p.jsx)("button",{onClick:function(e){return S(!U)},children:"add url"}),Object(p.jsx)("div",{className:"url-cards-div",children:J.length>0&&J.map((function(e){return Object(p.jsx)(v,{url:e,t:l,transactionCheckURL:n,header_auth:s,fetchUrls:g,setFetchUrls:y},Object(h.a)())}))})]}),Object(p.jsx)("div",{style:{display:U?"flex":"none"},className:"overlay",children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch(n,{method:"POST",headers:s,body:JSON.stringify({action:"Add",usersseqno:r.seqno,pageurl:q.pageurl,noticemail:r.email})}).then((function(e){return e.json()})).then((function(e){console.log(e),A(e.result.toLowerCase()),y(!g)})).catch((function(e){return console.error(e)}))},children:[Object(p.jsx)("div",{className:"x-btn",onClick:function(){return S(!1)},children:"X"}),Object(p.jsxs)("label",{children:["url:*",Object(p.jsx)("input",{type:"url",name:"pageurl",value:void 0===q.pageurl?"":q.pageurl,onChange:D,required:!0})]}),Object(p.jsxs)("label",{children:["notice email:",Object(p.jsx)("input",{type:"email",name:"noticemail",value:void 0===q.noticemail?"":q.noticemail,onChange:D})]}),Object(p.jsx)("input",{type:"submit",value:"submit",ref:P}),N.length>0&&Object(p.jsx)("p",{style:{color:-1!==N.toLowerCase().indexOf("ok")?"green":"red"},children:l("add_success")})]})})]})]})})};var w=function(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),s=n[0];return n[1],Object(p.jsxs)("main",{children:["home",Object(p.jsx)("button",{onClick:function(t){console.log("click redirect button"),e.history.push({pathname:"/app",state:s})},children:"redirect"})]})},C=(n(28),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAApCAMAAAAbOBfqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAVlQTFRFAAAAqo3FqYzEqo3FqYzEc0Ogc0Ogc0Ofc0OfVRqLVRqLVRqLjGSw2s3m6+Tx1MXifU+mtZvN59/vtJrMZjGXw67W1snjiGCuk2617OXy////5dztgleqwqzV+/n8wazVaDSY0cLg6ODvj2mzkm216+XxwKvUj2iy//7//Pv9/f3+/v3++vn8/fz9/v7+6+Xy+ff70cHgxbHYy7nc597v7ObyuKDPsZfK6uPxyLTayLXa0sLgybbavKXSh16t5t3uimGvrpHHzbvdbTqbbzydkmy1WSCOYCiSwazUkWu0bDmbuaDP9vP50MDf6eHwspfKs5rLspnKnXy8eEqjsJbJsJXJdUWgrJDGn369oYG/h12tWyKPWiGOVx2NVx2MkWuzVhyMWiCOVxyMWB+NVRuLVRqLVRqLXyeSWiGPtZvM597u1sjjiF+tVRqLVRqL1MXilXG31MXiuKDP7NEqSAAAAHN0Uk5TAE+YmEmF//96hf96//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////914PP//////+9rmv9cmBRQKqQAAAGJSURBVHic7ZdXV8JAEEaRaLDF3sWGICp2RVFUrLErKooKNuy9/P8HdxZTmYiJBD2e3LMPM/l2z2X2ibXZskSOnWFkyy4soWIY9QZ95FJLHsuyDmk5kotlhUaRwled5FNLQaG5FFkW45ZiriSV0jKIyiuQqLIKomokkVFTq7LU1Tek0uiEqKkZiVpaIWpDEhmudpXF7dFn6fiWxfvLs3R2UboRi68H6MVm8dFDfVAmz6OzuPuF/QODQ4ThEcTiHx0jcJglME4OTfihDML5SfzGJMsU9NOYJTQD/Sx2Y3PzpF0IQrnIk3IJvzGdFvUsuOWnsywbm8Wjz2JsFstiWdJZVlYJayZb1rkNwqbJFhmWJUuWrfAn2zvQ70ZIubevtATCIlFqiYr9AbUcQnkElhhUEbWFj4nEoT+m5YnS4jqVdp1BJLXnCdIm4lBeQHJJv/IqyxfILN40W1H+n+XqWoubW9h1dy/8V3x4hP5Jcz/Oc5r304tT+7dlDsui2/Kq/U7MHG/v2m/eP8gHzVlFLf8Qm90AAAAASUVORK5CYIIZdQAAAABJRU5ErkJggg==");var U=function(e){var t=Object(b.a)(),n=t.t,c=t.i18n;return console.log(c.language),Object(p.jsxs)("nav",{children:[Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("img",{src:C,alt:"logo"})}),Object(p.jsxs)("div",{className:"menu",children:[Object(p.jsx)(j.c,{exact:!0,to:"/",activeClassName:"active-link",children:n("home")}),Object(p.jsx)(j.c,{exact:!0,to:"/login",activeClassName:"active-link",children:n("login")}),Object(p.jsx)(j.c,{exact:!0,to:"/register",activeClassName:"active-link",children:n("register")}),Object(p.jsxs)("select",{onChange:function(e){return c.changeLanguage(e.target.value)},defaultValue:c.language,children:[Object(p.jsx)("option",{value:"en",children:"En"}),Object(p.jsx)("option",{value:"zh",children:"\u6587"})]})]})]})};var S=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"404 page not found"}),Object(p.jsx)("button",{onClick:function(t){e.history.push("/")},children:"go to home page"})]})};n(59);var _=function(e){var t=Object(c.useContext)(x),n=t.authUrl,s=(t.transactionUsersUrl,Object(b.a)()),a=s.t,r=(s.i18n,Object(c.useState)({userid:"",password:""})),o=Object(u.a)(r,2),l=o[0],h=o[1],O=Object(c.useState)(""),m=Object(u.a)(O,2),f=m[0],g=m[1],v=Object(c.useRef)(),y=function(e){v.current.disabled=!1,h(Object(i.a)(Object(i.a)({},l),{},Object(d.a)({},e.target.name,e.target.value))),f.length>0&&g("")};return Object(p.jsxs)("main",{id:"Login",children:[Object(p.jsx)(j.c,{exact:!0,to:"/",children:Object(p.jsx)("img",{src:C,alt:"logo",className:"logo"})}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),v.current.disabled=!0,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:l.userid,password:l.password})}).then((function(e){return e.json()})).then((function(t){console.log(t),g(t.result.toLowerCase()),-1!==t.result.toLowerCase().indexOf("ok")&&(localStorage.setItem("userid",l.userid),localStorage.setItem("token",t.token),setTimeout((function(){e.history.push({pathname:"/app",state:t.token})}),500))})).catch((function(e){return console.error(e)}))},children:[Object(p.jsx)("h2",{children:a("login")}),Object(p.jsx)("input",{name:"userid",type:"text",placeholder:a("userid"),value:l.userid,onChange:y,required:!0}),Object(p.jsx)("input",{name:"password",type:"password",placeholder:a("password"),value:l.password,onChange:y,required:!0}),Object(p.jsx)("input",{type:"submit",value:a("next"),disabled:-1!==f.indexOf("not"),ref:v}),f.length>0&&Object(p.jsx)("h1",{className:"alert",style:{background:-1!==f.indexOf("ok")?"var(--green)":"var(--red)"},children:-1!==f.indexOf("ok")?a("welcome"):a("userid_password_wrong")}),Object(p.jsx)("a",{href:"#",children:a("forgot_password")})]})]})};n(60);var k=function(e){return Object(p.jsxs)("section",{className:"personal-info-inputs",children:[Object(p.jsxs)("div",{className:"input-div",children:[Object(p.jsxs)("label",{children:[Object(p.jsxs)("p",{children:[e.t("userid"),Object(p.jsx)("span",{children:"*"})]}),Object(p.jsx)("input",{name:"userid",type:"text",placeholder:"",onChange:e.changeInput,required:!0})]}),Object(p.jsxs)("label",{children:[Object(p.jsxs)("p",{children:[e.t("password"),Object(p.jsx)("span",{children:"*"})]}),Object(p.jsx)("input",{name:"password",type:"password",placeholder:"",onChange:e.changeInput,required:!0})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("company")}),Object(p.jsx)("input",{name:"company",type:"text",placeholder:"",onChange:e.changeInput})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("user_name")}),Object(p.jsx)("input",{name:"username",type:"text",placeholder:"",onChange:e.changeInput})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("title")}),Object(p.jsx)("input",{name:"title",type:"text",placeholder:"",onChange:e.changeInput})]}),Object(p.jsxs)("label",{children:[Object(p.jsxs)("p",{children:["email",Object(p.jsx)("span",{children:"*"})]}),Object(p.jsx)("input",{name:"email",type:"email",placeholder:"",onChange:e.changeInput,required:!0})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("birthday")}),Object(p.jsx)("input",{name:"birthday",type:"date",placeholder:"",onChange:e.changeInput})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("gender")}),Object(p.jsxs)("select",{name:"gender",onChange:e.changeInput,defaultValue:"",children:[Object(p.jsx)("option",{value:""}),Object(p.jsx)("option",{value:"m",children:"male"}),Object(p.jsx)("option",{value:"f",children:"female"})]})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("tel")}),Object(p.jsx)("input",{name:"telephone",type:"tel",placeholder:"",onChange:e.changeInput,pattern:"^[0-9-+\\s()]*$"})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("mobile")}),Object(p.jsx)("input",{name:"mobile",type:"tel",placeholder:"",onChange:e.changeInput,pattern:"^[0-9-+\\s()]*$"})]})]}),Object(p.jsxs)("div",{className:"address-div",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("zipcode")}),Object(p.jsx)("input",{name:"zipcode",type:"text",placeholder:"",onChange:e.changeInput})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("address")}),Object(p.jsx)("input",{name:"address",type:"text",placeholder:"",onChange:e.changeInput})]})]})]})};var N=function(e){var t=Object(c.useContext)(x),n=t.authUrl,s=t.transactionUsersUrl,a=Object(b.a)(),r=a.t,o=(a.i18n,Object(c.useState)({})),l=Object(u.a)(o,2),h=l[0],O=l[1],m=Object(c.useState)(""),f=Object(u.a)(m,2),g=f[0],v=f[1],y=Object(c.useState)(0),w=Object(u.a)(y,2);return w[0],w[1],Object(c.useEffect)((function(){console.log(e.history),fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfb\u2026Q3OH0.QfzRxlhCx-OF_Hv1n2a8lT3rpH8UxhQ_5Q-DRrlkPtc"},body:JSON.stringify({action:"Query",userid:""})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.error(e)}))}),[]),Object(p.jsxs)("main",{id:"Register",children:[Object(p.jsxs)("div",{className:"top-div",children:[Object(p.jsx)(j.c,{exact:!0,to:"/",children:Object(p.jsx)("img",{src:C,alt:"logo"})}),Object(p.jsxs)("p",{className:"login",children:[r("have_account"),"\xa0\xa0",Object(p.jsx)(j.c,{exact:!0,to:"/login",children:r("login")})]})]}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=Object(i.a)(Object(i.a)({},h),{},{action:"Add"});console.log(c),fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(t){console.log(t),v(t.result.toLowerCase()),-1===t.result.toLowerCase().indexOf("ok")&&-1===t.result.toLowerCase().indexOf("success")||(localStorage.setItem("userid",h.userid),fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:h.userid,password:h.password})}).then((function(e){return e.json()})).then((function(t){console.log(t),v(t.result.toLowerCase()),-1!==t.result.toLowerCase().indexOf("ok")&&(localStorage.setItem("userid",h.userid),localStorage.setItem("token",t.token),setTimeout((function(){e.history.push({pathname:"/app",state:t.token})}),500))})).catch((function(e){return console.error(e)})))})).catch((function(e){return console.error(e)}))},children:[Object(p.jsx)("h2",{children:r("sign_up_free")}),Object(p.jsx)(k,{changeInput:function(e){O(Object(i.a)(Object(i.a)({},h),{},Object(d.a)({},e.target.name,e.target.value))),v("")},inputValue:h,t:r}),Object(p.jsx)("label",{children:Object(p.jsx)("input",{type:"submit",value:r("register"),disabled:g.length>0})}),g.length>0&&Object(p.jsx)("h1",{className:"alert",style:{background:-1!==g.indexOf("ok")||-1!==g.indexOf("success")?"var(--green)":"var(--red)"},children:g})]})]})},A=n(24),I=n(25);var L=function(e){var t=Object(c.useContext)(x),n=t.transactionUsersUrl,s=t.header_auth,a=Object(b.a)(),r=a.t,i=(a.i18n,Object(c.useContext)(f)),o=i.thisUser,l=i.setThisUser,d=i.runFetch,h=(i.setRunFetch,Object(c.useState)(!1)),O=Object(u.a)(h,2),m=O[0],g=O[1];Object(c.useEffect)((function(){null===localStorage.getItem("userid")&&e.history.goBack(),fetch(n,{method:"POST",headers:s,body:JSON.stringify({action:"Query",userid:localStorage.getItem("userid")})}).then((function(e){return e.json()})).then((function(e){console.log(e),l(e[0])})).catch((function(e){return console.error(e)}))}),[d]);var v=function(e){localStorage.removeItem("userid"),localStorage.removeItem("token")};return Object(p.jsxs)("header",{className:"app-header",children:[Object(p.jsxs)("nav",{className:"app-nav",children:[Object(p.jsx)(j.c,{exact:!0,to:"/",onClick:v,children:Object(p.jsx)("img",{src:C,alt:"logo"})}),Object(p.jsx)("div",{className:"menu",children:Object(p.jsxs)("div",{className:"user-icon",onClick:function(e){return g(!m)},children:[Object(p.jsx)(A.a,{}),Object(p.jsxs)("div",{className:"user-card",onClick:function(e){return g(!1)},style:{display:m?"block":"none"},children:[Object(p.jsxs)("div",{className:"top-div",children:[Object(p.jsx)(A.a,{}),Object(p.jsx)("p",{children:o.userid}),Object(p.jsx)("p",{children:o.email})]}),Object(p.jsxs)("div",{className:"bottom-div",children:[Object(p.jsx)(j.b,{to:{pathname:"".concat(e.match.path,"/myaccount"),state:e.thisUser},children:r("my_account")}),Object(p.jsx)(j.c,{exact:!0,to:"/",onClick:v,children:r("logout")})]})]})]})})]}),Object(p.jsxs)("nav",{className:"control-nav",children:[Object(p.jsxs)(j.c,{exact:!0,to:{pathname:"/app",state:e.thisUser},activeClassName:"control-nav-active",children:[Object(p.jsx)(I.a,{}),Object(p.jsx)("p",{children:r("home")})]}),Object(p.jsxs)(j.c,{exact:!0,to:{pathname:"/app/myaccount",state:e.thisUser},activeClassName:"control-nav-active",children:[Object(p.jsx)(I.b,{}),Object(p.jsx)("p",{children:r("my_account")})]})]})]})};n(61),n(62);var q=function(e){var t=Object(c.useRef)();return Object(p.jsx)("div",{id:"DelBox",className:"overlay",children:Object(p.jsxs)("div",{className:"box",children:[Object(p.jsxs)("div",{className:"top",children:[Object(p.jsx)("h1",{children:"Are you absolutely sure?"}),Object(p.jsx)("button",{className:"x-btn",onClick:function(){return e.setIsDelBtn(!1)},children:"X"})]}),Object(p.jsxs)("form",{className:"bottom",onSubmit:function(t){t.preventDefault(),fetch(e.transactionUsersUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"Delete",userid:e.thisUser.userid})}).then((function(e){return e.json()})).then((function(t){console.log(t),console.log(e.thisUser.userid),alert(t.result),e.setIsDelBtn(!1),localStorage.removeItem("userid"),e.history.push("/")})).catch((function(e){return console.error(e)}))},children:[Object(p.jsxs)("p",{children:["This will permanently delete the ",Object(p.jsx)("span",{children:e.thisUser.userid})," account."]}),Object(p.jsx)("p",{children:"Once you delete this account, there is no going back. Please be certain."}),Object(p.jsxs)("p",{children:["Please type ",Object(p.jsx)("span",{children:e.thisUser.userid})," to confirm."]}),Object(p.jsx)("input",{type:"text",name:"confirm-text",onChange:function(n){n.target.value===e.thisUser.userid?t.current.disabled=!1:t.current.disabled=!0},required:!0}),Object(p.jsx)("input",{type:"submit",value:"delete this account",ref:t,disabled:!0})]})]})})},T=(n(30),function(e){var t=Object(c.useContext)(f),n=t.runFetch,s=t.setRunFetch,a=Object(c.useState)(e.thisUser),r=Object(u.a)(a,2),o=r[0],l=r[1],j=Object(c.useState)(""),b=Object(u.a)(j,2),h=b[0],O=b[1],x=function(t){l(Object(i.a)(Object(i.a)({},o),{},Object(d.a)({userid:e.thisUser.userid},t.target.name,t.target.value)))};return Object(p.jsx)("div",{className:"overlay",id:"UpdateBox",children:Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),fetch(e.transactionUsersUrl,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify(Object(i.a)(Object(i.a)({},o),{},{action:"Update"}))}).then((function(e){return e.json()})).then((function(t){console.log(t),-1===t.result.toLowerCase().indexOf("ok")&&-1===t.result.toLowerCase().indexOf("success")||(O(t.result.toLowerCase()),s(!n),setTimeout((function(){e.setIsUpdateBtn(!1)}),1e3))})).catch((function(e){return console.error(e)}))},children:[Object(p.jsx)("div",{className:"x-btn",onClick:function(){return e.setIsUpdateBtn(!1)},children:"X"}),Object(p.jsxs)("div",{className:"personal-info-inputs",children:[Object(p.jsxs)("div",{className:"input-div",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("user_name")}),Object(p.jsx)("input",{name:"username",type:"text",value:null===o.username?"":o.username,onChange:x})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("company")}),Object(p.jsx)("input",{name:"company",type:"text",value:null===o.company?"":o.company,onChange:x})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("title")}),Object(p.jsx)("input",{name:"title",type:"text",value:null===o.title?"":o.title,onChange:x})]}),Object(p.jsxs)("label",{children:[Object(p.jsxs)("p",{children:["email",Object(p.jsx)("span",{})]}),Object(p.jsx)("input",{name:"email",type:"email",value:null===o.email?"":o.email,onChange:x,required:!0})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("birthday")}),Object(p.jsx)("input",{name:"birthday",type:"date",value:null===o.birthday?"":o.birthday,onChange:x})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("gender")}),Object(p.jsxs)("select",{name:"gender",value:null===o.gender?"":o.gender,onChange:x,children:[Object(p.jsx)("option",{value:""}),Object(p.jsx)("option",{value:"m",children:e.t("male")}),Object(p.jsx)("option",{value:"f",children:e.t("female")})]})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("tel")}),Object(p.jsx)("input",{name:"telephone",type:"tel",value:null===o.telephone?"":o.telephone,onChange:x,pattern:"^[0-9-+\\s()]*$"})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("mobile")}),Object(p.jsx)("input",{name:"mobile",type:"tel",value:null===o.mobile?"":o.mobile,onChange:x,pattern:"^[0-9-+\\s()]*$"})]})]}),Object(p.jsxs)("div",{className:"address-div",children:[Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("zipcode")}),Object(p.jsx)("input",{name:"zipcode",type:"text",value:null===o.zipcode?"":o.zipcode,onChange:x})]}),Object(p.jsxs)("label",{children:[Object(p.jsx)("p",{children:e.t("address")}),Object(p.jsx)("input",{name:"address",type:"text",value:null===o.address?"":o.address,onChange:x})]})]})]}),Object(p.jsx)("input",{type:"submit",value:e.t("confirm")}),h.length>0&&Object(p.jsx)("h1",{style:{color:-1!==h.indexOf("ok")?"var(--green)":"var(--red)"},children:-1!==h.indexOf("ok")?e.t("update_success"):h})]})})}),F=function(e){var t=Object(c.useContext)(f),n=t.runFetch,s=t.setRunFetch,a=Object(c.useState)({userid:e.thisUser.userid}),r=Object(u.a)(a,2),o=r[0],l=r[1],j=Object(c.useState)(""),b=Object(u.a)(j,2),h=b[0],O=b[1],x=Object(c.useRef)(),m=function(e){l(Object(i.a)(Object(i.a)({},o),{},Object(d.a)({},e.target.name,e.target.value))),O(""),x.current.disabled=!1};return Object(p.jsx)("div",{className:"overlay",id:"UpdatePWBox",children:Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),x.current.disabled=!0,console.log(o),console.log(e.thisUser.password),console.log(o.password),console.log(o.confirm_password),o.password===o.confirm_password?(O("ok"),fetch(e.transactionUsersUrl,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify(Object(i.a)(Object(i.a)({},o),{},{action:"Update"}))}).then((function(e){return e.json()})).then((function(t){console.log(t),-1===t.result.toLowerCase().indexOf("ok")&&-1===t.result.toLowerCase().indexOf("success")||(O(t.result.toLowerCase()),s(!n),setTimeout((function(){e.setIsUpdatePWBtn(!1)}),1e3))})).catch((function(e){return console.error(e)}))):O("password not match")},children:[Object(p.jsx)("div",{className:"x-btn",onClick:function(){return e.setIsUpdatePWBtn(!1)},children:"X"}),Object(p.jsxs)("div",{className:"input-div",children:[Object(p.jsxs)("label",{children:[Object(p.jsxs)("p",{children:[e.t("new_password"),Object(p.jsx)("span",{children:"*"})]}),Object(p.jsx)("input",{name:"password",type:"password",onChange:m,required:!0})]}),Object(p.jsxs)("label",{children:[Object(p.jsxs)("p",{children:[e.t("confirm_password"),Object(p.jsx)("span",{children:"*"})]}),Object(p.jsx)("input",{name:"confirm_password",type:"password",onChange:m,required:!0})]})]}),Object(p.jsx)("input",{type:"submit",value:e.t("confirm"),ref:x}),h.length>0&&Object(p.jsx)("h1",{style:{color:-1!==h.indexOf("ok")?"var(--green)":"var(--red)"},children:-1!==h.indexOf("ok")?e.t("update_success"):e.t("password_not_match")})]})})};var z=function(e){var t=Object(c.useContext)(f),n=t.thisUser,s=t.setThisUser,a=Object(c.useContext)(x).transactionUsersUrl,r=Object(b.a)(),i=r.t,o=r.i18n,l=Object(c.useState)(!1),j=Object(u.a)(l,2),d=j[0],h=j[1],O=Object(c.useState)(!1),m=Object(u.a)(O,2),g=m[0],v=m[1],y=Object(c.useState)(!1),w=Object(u.a)(y,2),C=w[0],U=w[1],S=Object(c.useState)(""),_=Object(u.a)(S,2);return _[0],_[1],Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("main",{id:"MyAccount",children:[Object(p.jsx)("h1",{children:i("my_account")}),Object(p.jsxs)("section",{className:"personal-info-div",children:[Object(p.jsx)("h2",{children:i("personal_info")}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[i("userid"),": ",Object(p.jsx)("span",{children:n.userid})]}),Object(p.jsxs)("li",{children:[i("user_name"),": ",Object(p.jsx)("span",{children:n.username})]}),Object(p.jsxs)("li",{children:[i("birthday"),": ",Object(p.jsx)("span",{children:n.birthday})]}),Object(p.jsxs)("li",{children:[i("gender"),": ",Object(p.jsx)("span",{children:n.gender})]}),Object(p.jsxs)("li",{children:["email: ",Object(p.jsx)("span",{children:n.email})]}),Object(p.jsxs)("li",{children:[i("company"),": ",Object(p.jsx)("span",{children:n.company})]}),Object(p.jsxs)("li",{children:[i("title"),": ",Object(p.jsx)("span",{children:n.title})]}),Object(p.jsxs)("li",{children:[i("tel"),": ",Object(p.jsx)("span",{children:n.telephone})]}),Object(p.jsxs)("li",{children:[i("mobile"),": ",Object(p.jsx)("span",{children:n.mobile})]}),Object(p.jsxs)("li",{children:[i("zipcode"),": ",Object(p.jsx)("span",{children:n.zipcode})]}),Object(p.jsxs)("li",{children:[i("address"),": ",Object(p.jsx)("span",{children:n.address})]}),Object(p.jsx)("button",{onClick:function(e){return h(!d)},children:i("update_personal_info")}),Object(p.jsx)("button",{onClick:function(e){return v(!g)},children:i("update_password")})]}),d&&Object(p.jsx)(T,{thisUser:n,setThisUser:s,transactionUsersUrl:a,setIsUpdateBtn:h,t:i}),g&&Object(p.jsx)(F,{thisUser:n,transactionUsersUrl:a,setIsUpdatePWBtn:v,t:i}),C&&Object(p.jsx)(q,{thisUser:n,transactionUsersUrl:a,setIsDelBtn:U,history:e.history})]}),Object(p.jsxs)("section",{className:"account-setting",children:[Object(p.jsx)("h2",{children:i("account_details")}),Object(p.jsxs)("div",{className:"lists",children:[Object(p.jsxs)("p",{children:[i("membership"),":",Object(p.jsx)("span",{children:i("TransactionUsers.".concat(n.usertype))})]}),Object(p.jsxs)("p",{children:[i("membership_status"),":",Object(p.jsx)("span",{children:i("TransactionUsers.".concat(n.enabled))})]}),Object(p.jsxs)("label",{children:[i("language"),":",Object(p.jsxs)("select",{onChange:function(e){return o.changeLanguage(e.target.value)},defaultValue:o.language,children:[Object(p.jsx)("option",{value:"en",children:"En"}),Object(p.jsx)("option",{value:"zh",children:"\u6587"})]})]}),Object(p.jsx)("button",{onClick:function(e){return U(!C)},children:i("delete_account")})]})]})]})})},J=["exact","path","component"],R=["exact","path","component"];var P=function(){var e=function(e){var t=e.exact,n=e.path,c=e.component,s=Object(o.a)(e,J);return Object(p.jsx)(l.a,Object(i.a)(Object(i.a)({exact:t,path:n},s),{},{render:function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(U,Object(i.a)({},e)),Object(p.jsx)(c,Object(i.a)({},e))]})}}))},t=function(e){e.exact;var t=e.path,n=e.component,c=Object(o.a)(e,R);return Object(p.jsx)(l.a,Object(i.a)(Object(i.a)({exact:!0,path:t},c),{},{render:function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(L,Object(i.a)({},e)),Object(p.jsx)(n,Object(i.a)({},e))]})}}))};return Object(c.useEffect)((function(){if(console.log("run App useEffect"),console.log("localStorge userid: "+localStorage.getItem("userid")),-1===window.location.hash.indexOf("app"))return console.log("not /app path, return, do not fetch"),void localStorage.removeItem("userid")}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(j.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(e,{exact:!0,path:"/",component:function(e){return Object(p.jsx)(w,Object(i.a)({},e))}}),Object(p.jsx)(l.a,{exact:!0,path:"/login",component:function(e){return Object(p.jsx)(_,Object(i.a)({},e))}}),Object(p.jsx)(l.a,{exact:!0,path:"/register",component:function(e){return Object(p.jsx)(N,Object(i.a)({},e))}}),Object(p.jsx)(t,{exact:!0,path:"/app",component:function(e){return Object(p.jsx)(y,Object(i.a)({},e))}}),Object(p.jsx)(t,{exact:!0,path:"/app/myaccount",component:function(e){return Object(p.jsx)(z,Object(i.a)({},e))}}),Object(p.jsx)(l.a,{path:"*",exact:!0,component:S})]})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},V=n(26),B=n(17),W=n(38),E=n(39),X=n(40);V.a.use(W.a).use(B.e).init({debug:!0,lng:navigator.language.indexOf("en")>=0?"en":"zh",fallbackLng:"zh",interpolation:{escapeValue:!1},resources:{en:{translation:E},zh:{translation:X}}});V.a;r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(m,{children:Object(p.jsx)(g,{children:Object(p.jsx)(c.Suspense,{fallback:Object(p.jsx)("h1",{children:"Loading profile..."}),children:Object(p.jsx)(P,{})})})})}),document.getElementById("root")),D()}},[[63,1,2]]]);
//# sourceMappingURL=main.72333b68.chunk.js.map