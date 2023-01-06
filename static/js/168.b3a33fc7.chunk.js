"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{7945:function(e,n,t){t.d(n,{Hg:function(){return u},Pg:function(){return p},qF:function(){return d},tx:function(){return f},yA:function(){return o},yO:function(){return l}});var r=t(5861),a=t(7757),c=t.n(a),i=t(2388),s="817d0625144161de217baa97c19455ca";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="https://image.tmdb.org/t/p/w500",u=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(s));case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:s,language:"en-US",query:n,page:1,include_adult:!1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(n,"/credits"),{params:{api_key:s,language:"en-US"}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(n,"/reviews"),{params:{api_key:s,language:"en-US",page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results[0]);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},7168:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r,a,c,i,s,o=t(5861),u=t(9439),p=t(7757),d=t.n(p),l=t(7689),f=t(2791),v=t(7945),h=t(168),x=t(6444),g=t(1087),m=x.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  padding-top: 20px;\n"]))),w=x.ZP.main(a||(a=(0,h.Z)(["\n  margin-top: 20px;\n"]))),b=x.ZP.li(c||(c=(0,h.Z)(["\n  margin-bottom: 30px;\n"]))),Z=x.ZP.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 30px;\n"]))),k=(0,x.ZP)(g.OL)(s||(s=(0,h.Z)(["\n  padding: 8px 16px;\n  margin-top: 20px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: red;\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: white;\n    background-color: red;\n  }\n"]))),j=t(184),y=function(){var e,n,t=(0,l.UO)().movieId,r=(0,f.useState)({}),a=(0,u.Z)(r,2),c=a[0],i=a[1],s=null!==(e=null===(n=(0,l.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";(0,f.useEffect)((function(){var e=function(){var e=(0,o.Z)(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.Pg)(Number(t));case 3:n=e.sent,i(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var p=c.poster_path,h=c.overview,x=c.title,g=c.genres,y=c.release_date,_=c.vote_average,P=new Date(y).getFullYear();return(0,j.jsxs)(w,{children:[(0,j.jsx)(k,{to:s,children:" GO BACK"}),(0,j.jsxs)(m,{children:[(0,j.jsx)("img",{src:v.yA+p,alt:x,loading:"lazy",width:250}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h2",{children:[x,"(",P,")"]}),(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"User score: "}),_?_.toFixed(1):"not found"]}),(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"Overview"}),": ",h]}),(0,j.jsxs)("p",{children:[(0,j.jsx)("b",{children:"Genres "}),g&&g.map((function(e){return e.name})).join(", ")]})]})]}),(0,j.jsxs)(Z,{children:[(0,j.jsx)(b,{children:(0,j.jsx)(k,{to:"cast",state:{from:s},children:"Cast"})}),(0,j.jsx)(b,{children:(0,j.jsx)(k,{to:"reviews",state:{from:s},children:"Reviews"})})]}),(0,j.jsx)(l.j3,{})]})}}}]);
//# sourceMappingURL=168.b3a33fc7.chunk.js.map