"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[808],{211:function(e,n,r){r.d(n,{BF:function(){return d},E3:function(){return v},SU:function(){return u},np:function(){return l},yw:function(){return p}});var t=r(861),c=r(757),a=r.n(c),i=r(243),s="https://api.themoviedb.org/3",o="fbcd27110e3ea351d2ea352461b15e7c",u=function(){var e=(0,t.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/search/movie?query=").concat(n,"&api_key=").concat(o));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},808:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t=r(861),c=r(439),a=r(757),i=r.n(a),s=r(211),o=r(87),u=r(184),d=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})]})},l=r(686),p=r.n(l),v=r(791),f=r(689),h=function(){var e,n,r=(0,v.useState)({}),a=(0,c.Z)(r,2),l=a[0],h=a[1],x=(0,v.useState)(!1),m=(0,c.Z)(x,2),j=m[0],w=m[1],g=(0,f.TH)(),k=(0,v.useRef)(null!==(e=null===(n=g.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),y=(0,f.UO)().movieId;(0,v.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!1),e.next=4,(0,s.BF)(y);case 4:n=e.sent,console.log("first",n.homepage),n.homepage||w(!0),h(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),p().Notify.failure(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]);var b=l.poster_path,Z=l.title,_=l.release_date,S=l.vote_average,U=l.overview,F=l.genres,B=b&&Z&&_&&S&&U&&(null===F||void 0===F?void 0:F.length)>0;return(0,u.jsx)(u.Fragment,{children:B?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.rU,{to:k,children:"Go Back"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(b),alt:"Movie poster",width:300,height:400}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("h2",{children:[Z," (",null===_||void 0===_?void 0:_.split("-")[0],")"]}),(0,u.jsxs)("p",{children:["User Score: ",Number(S).toFixed(2)]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:U}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("div",{children:null===F||void 0===F?void 0:F.map((function(e){var n=e.id,r=e.name;return(0,u.jsx)("p",{children:r},n)}))})]})]}),(0,u.jsx)("div",{children:(0,u.jsx)(d,{id:y,location:g})}),(0,u.jsx)(v.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading info..."}),children:(0,u.jsx)(f.j3,{})})]}):j&&(0,u.jsx)("h2",{children:"Sorry ... No information"})})}}}]);
//# sourceMappingURL=808.7007d131.chunk.js.map