"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{304:function(e,r,t){t.d(r,{Pv:function(){return p},bs:function(){return o},cJ:function(){return v},cu:function(){return i},yW:function(){return f}});var n=t(861),a=t(757),c=t.n(a),u=t(44),s="https://api.themoviedb.org/3",i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(s,"/trending/all/day"),{params:{api_key:"e589c321259a53f509b2181777f7ae5f"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(s,"/search/movie"),{params:{api_key:"e589c321259a53f509b2181777f7ae5f",query:r}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(s,"/movie/").concat(r),{params:{api_key:"e589c321259a53f509b2181777f7ae5f"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(s,"/movie/").concat(r,"/credits"),{params:{api_key:"e589c321259a53f509b2181777f7ae5f"}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(s,"/movie/").concat(r,"/reviews"),{params:{api_key:"e589c321259a53f509b2181777f7ae5f"}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},415:function(e,r,t){t.r(r);var n=t(982),a=t(861),c=t(885),u=t(757),s=t.n(u),i=t(791),o=t(689),f=t(304),p=t(676),v=t(184);r.default=function(){var e=(0,i.useState)([]),r=(0,c.Z)(e,2),t=r[0],u=r[1],h=(0,o.TH)();return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.cu)();case 3:r=e.sent,console.log("=>",r),u((0,n.Z)(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)("main",{children:[(0,v.jsx)("h2",{children:"Trending this week"}),(0,v.jsx)("ul",{children:t.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(p.OL,{to:"movies/".concat(e.id),state:{from:h},children:(0,v.jsx)("p",{children:e.name||e.title})})},e.id)}))})]})}}}]);
//# sourceMappingURL=415.86f45bef.chunk.js.map