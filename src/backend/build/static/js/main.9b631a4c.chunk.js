(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,a){},40:function(e,t,a){e.exports=a(74)},65:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=(a(45),a(4)),s=a(35),o=a.n(s),u=(a(65),function(){return r.a.createElement("div",{className:"player-wrapper"},r.a.createElement(o.a,{className:"react-player",url:"https://www.youtube.com/watch?v=Rq5SEhs9lws",width:"50%",height:"100%",controls:!0}))});function m(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement("h1",null," \u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 "),r.a.createElement(u,null)))}var p=a(3),h=a.n(p),f=a(9),d=a(6);function E(){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/wishlists",e.next=3,fetch("/api/wishlists",{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"});case 3:return t=e.sent,e.abrupt("return",t.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){var e=Object(i.g)(),t=r.a.useState(""),a=Object(f.a)(t,2),n=a[0],c=a[1],l=r.a.useState([]),s=Object(f.a)(l,2),o=s[0],u=s[1];r.a.useEffect((function(){(function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=function(){var t=Object(d.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.push("/wishlists/".concat(n));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cover"},r.a.createElement("h1",{className:"main_h1"},"Friend's WishList - \u044d\u0442\u043e \u0443\u044e\u0442\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u043b\u044f \u043f\u043e\u043c\u043e\u0449\u0438 \u0432 \u043f\u043e\u0434\u0431\u043e\u0440\u0435 \u043f\u043e\u0434\u0430\u0440\u043a\u043e\u0432 \u0441\u0432\u043e\u0438\u043c \u0431\u043b\u0438\u0437\u043a\u0438\u043c"),r.a.createElement("h2",{className:"main_h2"},"\u0427\u0442\u043e\u0431\u044b \u043d\u0430\u0439\u0442\u0438 \u0441\u0432\u043e\u0439 WishList \u0438\u043b\u0438 WishList \u0434\u0440\u0443\u0433\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0443\u044e\u0449\u0438\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440"),r.a.createElement("input",{className:"inputID",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0434\u0440\u0443\u0433\u0430",onChange:function(e){c(e.target.value)}}),r.a.createElement("button",{className:"btn1",onClick:m},"\u041d\u0430\u0439\u0442\u0438"),r.a.createElement("h2",{className:"main_h2"},"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043d\u0438\u0436\u0435:")),r.a.createElement("div",null,r.a.createElement("table",{className:"table1"},o.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("div",{style:{flexBasis:160,flexGrow:0,flexShrink:0}},e.owner.name)),r.a.createElement("td",null,r.a.createElement("div",{className:"wishlist_id",style:{flexBasis:160,flexGrow:0,flexShrink:0}},e._id)))})))))}function w(){}var y=Object(n.createContext)({token:null,userId:null,login:w,logout:w,isAuthenticated:!1});function g(e){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={userId:t},"/api/wishlists",e.next=4,fetch("/api/wishlists",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){var e=Object(i.g)(),t=Object(n.useContext)(y).userId,a=function(){var a=Object(d.a)(h.a.mark((function a(){var n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g(t);case 2:n=a.sent,e.push("/wishlists/".concat(n._id));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," \u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 WishList "),r.a.createElement("div",null,r.a.createElement("button",{className:"btn1",onClick:a},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))}a(70);function O(e,t,a,n,r){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(h.a.mark((function e(t,a,n,r,c){var l,i,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={picture:a,title:n,comment:r,desireDegree:c},i="/api/wishlists/".concat(t,"/wishlist_item/"),e.next=4,fetch(i,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(l)});case 4:return s=e.sent,e.abrupt("return",s.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,a,n,r,c){return S.apply(this,arguments)}function S(){return(S=Object(d.a)(h.a.mark((function e(t,a,n,r,c,l){var i,s,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={picture:n,title:r,comment:c,desireDegree:l},s="/api/wishlists/".concat(t,"/wishlist_item/").concat(a),e.next=4,fetch(s,{method:"PATCH",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(i)});case 4:return o=e.sent,e.abrupt("return",o.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,a,n,r,c,l){return I.apply(this,arguments)}function I(){return(I=Object(d.a)(h.a.mark((function e(t,a,n,r,c,l,i){var s,o,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={picture:n,title:r,comment:c,desireDegree:l,assigneeId:i},o="/api/wishlists/".concat(t,"/wishlist_item/").concat(a,"/set_assignee"),e.next=4,fetch(o,{method:"PATCH",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(s)});case 4:return u=e.sent,e.abrupt("return",u.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return L.apply(this,arguments)}function L(){return(L=Object(d.a)(h.a.mark((function e(t,a){var n,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},r="/api/wishlists/".concat(a,"/wishlist_item/").concat(t),e.next=4,fetch(r,{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n)});case 4:return c=e.sent,e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return P.apply(this,arguments)}function P(){return(P=Object(d.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/api/wishlists/".concat(t,"/wishlist_item"),e.next=3,fetch(a,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"});case 3:return n=e.sent,e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){var e=Object(i.h)().wishListId;console.log("wishListId",e);var t=r.a.useState([]),a=Object(f.a)(t,2),n=a[0],c=a[1];console.log("wishListItems",n);var l=r.a.useState(""),s=Object(f.a)(l,2),o=s[0],u=s[1],m=r.a.useState(""),p=Object(f.a)(m,2),E=p[0],v=p[1],b=r.a.useState(""),w=Object(f.a)(b,2),y=w[0],g=w[1],x=r.a.useState(""),j=Object(f.a)(x,2),k=j[0],S=j[1],I=r.a.useState(""),L=Object(f.a)(I,2),P=L[0],F=L[1],D=r.a.useState(""),G=Object(f.a)(D,2),B=G[0],J=G[1];r.a.useEffect((function(){(function(){var t=Object(d.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:a=t.sent,c(a);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var W=function(){var t=Object(d.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(P){t.next=5;break}return t.next=3,O(e,o,E,y,k);case 3:t.next=7;break;case 5:return t.next=7,N(e,P,o,E,y,k,B);case 7:return t.next=9,T(e);case 9:a=t.sent,c(a),v(""),g(""),S(""),u(""),F(""),J("");case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(e){return function(){F(e._id),v(e.title),g(e.comment),S(e.desireDegree),u(e.picture)}},H=function(t){return Object(d.a)(h.a.mark((function a(){var n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_(t._id,e);case 2:return a.next=4,T(e);case 4:n=a.sent,c(n),v(""),g(""),S(""),u(""),F("");case 11:case"end":return a.stop()}}),a)})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Andrey's WishList "),r.a.createElement("div",null),r.a.createElement("div",{class:"table-container"},r.a.createElement("table",{width:"100%"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"),r.a.createElement("th",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0436\u0435\u043b\u0430\u043d\u0438\u044f"),r.a.createElement("th",null,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"),r.a.createElement("th",null,"\u0421\u0442\u0435\u043f\u0435\u043d\u044c \u0436\u0435\u043b\u0430\u0435\u043c\u043e\u0441\u0442\u0438"),r.a.createElement("th",null,"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e"),r.a.createElement("th",null,"WishListItemID")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{className:"inputItem",placeholder:"\u0417\u0434\u0435\u0441\u044c \u043d\u0443\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0430\u0434\u0440\u0435\u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0436\u0435\u043b\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u0434\u0430\u0440\u043a\u0430 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435",onChange:function(e){u(e.target.value)},value:o})),r.a.createElement("td",null,r.a.createElement("input",{className:"inputItem",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: Iphone 12 PRO \u043d\u0430 128 GB \u0432 \u0441\u0438\u043d\u0435\u043c \u0446\u0432\u0435\u0442\u0435",onChange:function(e){v(e.target.value)},value:E})),r.a.createElement("td",null,r.a.createElement("input",{className:"inputItem",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u043a\u0430\u043a\u0438\u0445-\u0442\u043e \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044f\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430, \u0441\u0444\u0435\u0440\u0435 \u0435\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u043b\u044e\u0431\u0443\u044e \u0434\u0440\u0443\u0433\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",onChange:function(e){g(e.target.value)},value:y})),r.a.createElement("td",{className:"rating-area",onChange:function(e){S(e.target.value)}},r.a.createElement("input",{type:"radio",id:"star-5",name:"rating",value:"5"}),r.a.createElement("label",{htmlFor:"star-5",title:"\u041e\u0446\u0435\u043d\u043a\u0430 \xab5\xbb"}),r.a.createElement("input",{type:"radio",id:"star-4",name:"rating",value:"4"}),r.a.createElement("label",{htmlFor:"star-4",title:"\u041e\u0446\u0435\u043d\u043a\u0430 \xab4\xbb"}),r.a.createElement("input",{type:"radio",id:"star-3",name:"rating",value:"3"}),r.a.createElement("label",{htmlFor:"star-3",title:"\u041e\u0446\u0435\u043d\u043a\u0430 \xab3\xbb"}),r.a.createElement("input",{type:"radio",id:"star-2",name:"rating",value:"2"}),r.a.createElement("label",{htmlFor:"star-2",title:"\u041e\u0446\u0435\u043d\u043a\u0430 \xab2\xbb"}),r.a.createElement("input",{type:"radio",id:"star-1",name:"rating",value:"1"}),r.a.createElement("label",{htmlFor:"star-1",title:"\u041e\u0446\u0435\u043d\u043a\u0430 \xab1\xbb"})),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox"})),r.a.createElement("td",null,r.a.createElement("input",{className:"inputItem",disabled:!0,onChange:function(e){F(e.target.value)},value:P})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn1",onClick:W},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))),n.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,r.a.createElement("div",{style:{flexBasis:160,flexGrow:0,flexShrink:0}},r.a.createElement("img",{width:150,alt:"\u0416\u0435\u043b\u0430\u043d\u0438\u0435",src:t.picture}))),r.a.createElement("td",null,r.a.createElement("div",{style:{flexBasis:160,flexGrow:0,flexShrink:0}},t.title)),r.a.createElement("td",null,r.a.createElement("div",{style:{flexBasis:160,flexGrow:0,flexShrink:0}},t.comment)),r.a.createElement("td",null,r.a.createElement("div",{className:"rating-area",style:{flexBasis:160,flexGrow:0,flexShrink:0}},t.desireDegree)),r.a.createElement("td",null,r.a.createElement("div",{style:{flexBasis:160,flexGrow:0,flexShrink:0}},r.a.createElement("input",{type:"checkbox",name:"assignee",onClick:(a=t,Object(d.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e,a._id,a.picture,a.title,a.comment,a.desireDegree,a.assigneeId);case 2:case"end":return t.stop()}}),t)}))))}))),r.a.createElement("td",null,r.a.createElement("input",{className:"inputItem",disabled:!0,value:t._id})),r.a.createElement("td",null,r.a.createElement("div",{style:{flexBasis:160,flexGrow:0,flexShrink:0}},r.a.createElement("button",{className:"btn1",onClick:A(t)},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))),r.a.createElement("td",null,r.a.createElement("div",{style:{flexBasis:160,flexGrow:0,flexShrink:0}},r.a.createElement("button",{className:"btn1",onClick:H(t)},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))));var a}))))))}var D=a(21),G=a(19),B=a(76);function J(){return(J=Object(d.a)(h.a.mark((function e(t){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),n=Object(G.a)({},a),"/api/registration",e.next=5,fetch("/api/registration",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n)});case 5:return r=e.sent,e.abrupt("return",r.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return A.apply(this,arguments)}function A(){return(A=Object(d.a)(h.a.mark((function e(t){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},t),n=Object(G.a)({},a),"/api/login",e.next=5,fetch("/api/login",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n)});case 5:return r=e.sent,e.abrupt("return",r.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){var e=Object(n.useContext)(y),t=Object(n.useState)({name:"",email:"",password:""}),a=Object(f.a)(t,2),c=a[0],l=a[1],i=function(e){l(Object(G.a)(Object(G.a)({},c),{},Object(D.a)({},e.target.name,e.target.value)))},s=function(){var t=Object(d.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(Object(G.a)({},c));case 2:a=t.sent,e.login(a.token,a.userId);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," \u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f "),r.a.createElement("div",{className:"auth"},r.a.createElement("div",null,r.a.createElement("input",{className:"inputAuth",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0418\u041e",id:"name",type:"text",name:"name",onChange:i}),r.a.createElement("label",{htmlFor:"name"}," \u0424\u0418\u041e ")),r.a.createElement("div",null,r.a.createElement("input",{className:"inputAuth",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",id:"email",type:"text",name:"email",value:c.email,onChange:i}),r.a.createElement("label",{htmlFor:"email"}," Email ")),r.a.createElement("div",null,r.a.createElement("input",{className:"inputAuth",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password",type:"password",name:"password",value:c.password,onChange:i}),r.a.createElement("label",{htmlFor:"password"}," \u041f\u0430\u0440\u043e\u043b\u044c ")),r.a.createElement("div",null,r.a.createElement(B.a,{className:"mr-2",variant:"primary",onClick:s}," \u0412\u043e\u0439\u0442\u0438 "),r.a.createElement(B.a,{className:"mr-2",variant:"primary",onClick:function(){!function(e){J.apply(this,arguments)}(Object(G.a)({},c))}}," \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f "))))}var R={id:"wishList",title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/"},Z={id:"howItWorks",title:"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",path:"/how_it_works.html"},q={id:"newWishList",title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 WishList",path:"/wishlists"},z={id:"editWishList",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 WishList",path:"/wishlists/:wishListId"},K=a(14),M=a(77),Q=a(78),U=function(){var e=Object(i.g)(),t=Object(n.useContext)(y);return r.a.createElement(M.a,{className:"navibar",collapseOnSelect:!0,expand:"md"},r.a.createElement(M.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(M.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(Q.a,{className:"mr-auto"},r.a.createElement(Q.a.Link,null,r.a.createElement(K.b,{to:R.path}," ",R.title," ")),r.a.createElement(Q.a.Link,null,r.a.createElement(K.b,{to:Z.path}," ",Z.title," ")),r.a.createElement(Q.a.Link,null,r.a.createElement(K.b,{to:q.path}," ",q.title," "))),r.a.createElement(Q.a,null,r.a.createElement(B.a,{variant:"primary"},r.a.createElement("a",{href:R.path,onClick:function(a){a.preventDefault(),t.logout(),e.push("/")}}," \u0412\u044b\u0439\u0442\u0438 ")))))};a(34);function V(){var e=function(){var e=Object(n.useState)(null),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(f.a)(c,2),i=l[0],s=l[1],o=Object(n.useCallback)((function(e,t){r(e),s(t),localStorage.setItem("userData",JSON.stringify({userId:t,token:e}))}),[]),u=Object(n.useCallback)((function(){r(null),s(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&o(e.token,e.userId)}),[o]),{token:a,userId:i,login:o,logout:u}}(),t=e.token,a=e.login,c=e.logout,l=e.userId,s=!!t,o=function(e){return e?r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:Z.path},r.a.createElement(m,null)),r.a.createElement(i.b,{exact:!0,path:R.path},r.a.createElement(b,null)),r.a.createElement(i.b,{exact:!0,path:q.path},r.a.createElement(j,null)),r.a.createElement(i.b,{exact:!0,path:z.path},r.a.createElement(F,null)),r.a.createElement(i.a,{to:R.path})):r.a.createElement(i.d,null,r.a.createElement(i.b,{path:R.path,exact:!0},r.a.createElement(H,null)),r.a.createElement(i.a,{to:R.path}))}(s);return r.a.createElement(y.Provider,{value:{token:t,login:a,logout:c,userId:l,isAuthenticated:s}},r.a.createElement(K.a,null,r.a.createElement("div",{className:"wrapper"},s&&r.a.createElement(U,null),r.a.createElement("div",{className:"content"},o),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:EZaykovskiy@mail.ru"},"EZaykovskiy@mail.ru"),", 2020")))))}l.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9b631a4c.chunk.js.map