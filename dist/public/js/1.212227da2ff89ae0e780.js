webpackJsonp([1,14],{2:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var s=n(19),a=o(s);e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},3:function(t,e){},4:function(t,e){},5:function(t,e,n){var o,s;o=n(16);var a=n(9);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},6:function(t,e,n){var o,s;n(4),o=n(17);var a=n(10);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},7:function(t,e,n){var o,s;n(3),o=n(18);var a=n(8);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-info"},[t.userInfo.loginname?t._e():n("ul",{staticClass:"login-no"},[n("li",{staticClass:"login",on:{click:t.goEnter}},[n("a",[t._v("登录")])])]),t._v(" "),t.userInfo.loginname?n("div",{staticClass:"login-yes",on:{click:t.goUser}},[n("div",{staticClass:"avertar"},[t.userInfo.avatar_url?n("img",{attrs:{src:t.userInfo.avatar_url}}):t._e()]),t._v(" "),n("div",{staticClass:"info"},[t.userInfo.loginname?n("p",{domProps:{textContent:t._s(t.userInfo.loginname)}}):t._e()])]):t._e()])},staticRenderFns:[]}},9:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.show&&t.fixHead?n("div",{staticClass:"page-cover",on:{click:t.showMenus}}):t._e(),t._v(" "),n("header",{class:{show:t.show&&t.fixHead,"fix-header":t.fixHead,"no-fix":!t.fixHead},attrs:{id:"hd"}},[n("div",{staticClass:"nv-toolbar"},[t.fixHead?n("div",{staticClass:"toolbar-nav",on:{click:t.openMenu}}):t._e(),t._v(" "),n("span",{domProps:{textContent:t._s(t.pageType)}}),t._v(" "),t.messageCount>0?n("i",{staticClass:"num"},[t._v(" "+t._s(t.messageCount))]):t._e(),t._v(" "),n("router-link",{attrs:{to:"/add"}},[t.needAdd?n("i",{directives:[{name:"show",rawName:"v-show",value:!t.messageCount||t.messageCount<=0,expression:"!messageCount || messageCount <= 0"}],staticClass:"iconfont add-icon"},[t._v("")]):t._e()])],1)]),t._v(" "),t.fixHead?n("nv-menu",{attrs:{"show-menu":t.show,"page-type":t.pageType,"nick-name":t.nickname,"profile-url":t.profileimgurl}}):t._e()],1)},staticRenderFns:[]}},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"nav-list",class:{show:t.showMenu},attrs:{id:"sideBar"}},[n("user-info"),t._v(" "),n("section",{staticClass:"list-ul"},[n("router-link",{staticClass:"icon-quanbu iconfont item",attrs:{to:{name:"list",query:{tab:"all"}}}},[t._v("全部")]),t._v(" "),n("router-link",{staticClass:"icon-hao iconfont item",attrs:{to:{name:"list",query:{tab:"good"}}}},[t._v("精华")]),t._v(" "),n("router-link",{staticClass:"icon-fenxiang iconfont item",attrs:{to:{name:"list",query:{tab:"share"}}}},[t._v("分享")]),t._v(" "),n("router-link",{staticClass:"icon-wenda iconfont item",attrs:{to:{name:"list",query:{tab:"ask"}}}},[t._v("问答")]),t._v(" "),n("router-link",{staticClass:"icon-zhaopin iconfont item",attrs:{to:{name:"list",query:{tab:"job"}}}},[t._v("招聘")]),t._v(" "),n("router-link",{staticClass:"icon-xiaoxi iconfont item line",attrs:{to:{name:"message"}}},[t._v("消息")]),t._v(" "),n("router-link",{staticClass:"icon-about iconfont item",attrs:{to:{name:"about"}}},[t._v("关于")])],1)],1)},staticRenderFns:[]}},11:function(t,e,n){n(15),t.exports=n(21).Object.assign},12:function(t,e,n){"use strict";var o=n(25),s=n(13),a=n(14),i=n(26),r=n(24),c=Object.assign;t.exports=!c||n(22)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=o})?function(t,e){for(var n=i(t),c=arguments.length,u=1,l=s.f,f=a.f;c>u;)for(var d,p=r(arguments[u++]),h=l?o(p).concat(l(p)):o(p),v=h.length,w=0;v>w;)f.call(p,d=h[w++])&&(n[d]=p[d]);return n}:c},13:function(t,e){e.f=Object.getOwnPropertySymbols},14:function(t,e){e.f={}.propertyIsEnumerable},15:function(t,e,n){var o=n(23);o(o.S+o.F,"Object",{assign:n(12)})},16:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),a=o(s);e.default={replace:!0,props:{pageType:String,fixHead:Boolean,messageCount:Number,needAdd:{type:Boolean,default:!0}},data:function(){return{nickname:"",profileimgurl:"",show:!1}},methods:{openMenu:function(){(0,a.default)("html, body, #page").addClass("scroll-hide"),this.show=!this.show},showMenus:function(){this.show=!this.show,(0,a.default)("html, body, #page").removeClass("scroll-hide")}},components:{nvMenu:n(6)}}},17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={replace:!0,props:["showMenu","pageType","nickName","profileUrl"],components:{userInfo:n(7)}}},18:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),a=o(s),i=n(20);e.default={replace:!0,computed:(0,a.default)({},(0,i.mapGetters)({userInfo:"getUserInfo"})),methods:{goEnter:function(){this.$router.push({name:"login",query:{redirect:encodeURIComponent(this.$route.path)}})},goUser:function(){this.$router.push({name:"user",params:{loginname:this.userInfo.loginname}})}}}},19:function(t,e,n){t.exports={default:n(11),__esModule:!0}},29:function(t,e){},33:function(t,e,n){var o,s;n(29),o=n(39);var a=n(34);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},34:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"iconfont icon-top",on:{click:t.goTop}},[t._v("")])},staticRenderFns:[]}},35:function(t,e,n){var o=n(21),s=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},39:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),a=o(s);e.default={replace:!0,data:function(){return{show:!1}},mounted:function(){var t=this;(0,a.default)(window).on("scroll",function(){(0,a.default)(window).scrollTop()>100?t.show=!0:t.show=!1})},beforeDestory:function(){(0,a.default)(window).off("scroll")},methods:{goTop:function(){(0,a.default)(window).scrollTop(0),this.show=!1}}}},40:function(t,e,n){t.exports={default:n(35),__esModule:!0}},43:function(t,e,n){var o,s;o=n(127);var a=n(82);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=o},82:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nv-head",{ref:"head",attrs:{"page-type":t.getTitleStr(t.searchKey.tab),"fix-head":!0,"need-add":!0}}),t._v(" "),n("section",{attrs:{id:"page"}},[n("ul",{staticClass:"posts-list"},t._l(t.topics,function(e){return n("li",[n("router-link",{attrs:{to:{name:"topic",params:{id:e.id}}}},[n("h3",{class:t.getTabInfo(e.tab,e.good,e.top,!0),attrs:{title:t.getTabInfo(e.tab,e.good,e.top,!1)},domProps:{textContent:t._s(e.title)}}),t._v(" "),n("div",{staticClass:"content"},[n("img",{staticClass:"avatar",attrs:{src:e.author.avatar_url}}),t._v(" "),n("div",{staticClass:"info"},[n("p",[n("span",{staticClass:"name"},[t._v("\n                                "+t._s(e.author.loginname)+"\n                            ")]),t._v(" "),e.reply_count>0?n("span",{staticClass:"status"},[n("b",[t._v(t._s(e.reply_count))]),t._v("\n                                /"+t._s(e.visit_count)+"\n                            ")]):t._e()]),t._v(" "),n("p",[n("time",[t._v(t._s(t._f("getLastTimeStr")(e.create_at,!0)))]),t._v(" "),n("time",[t._v(t._s(t._f("getLastTimeStr")(e.last_reply_at,!0)))])])])])])],1)}))]),t._v(" "),n("nv-top")],1)},staticRenderFns:[]}},127:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(40),a=o(s),i=n(1),r=o(i),c=n(27),u=o(c),l=n(5),f=o(l),d=n(33),p=o(d);e.default={filters:{getLastTimeStr:function(t,e){return u.default.getLastTimeStr(t,e)}},data:function(){return{scroll:!0,topics:[],searchKey:{page:1,limit:20,tab:"all",mdrender:!0},searchDataStr:""}},mounted:function(){this.$route.query&&this.$route.query.tab&&(this.searchKey.tab=this.$route.query.tab),window.window.sessionStorage.searchKey&&window.window.sessionStorage.tab===this.searchKey.tab?(this.topics=JSON.parse(window.window.sessionStorage.topics),this.searchKey=JSON.parse(window.window.sessionStorage.searchKey),this.$nextTick(function(){return(0,r.default)(window).scrollTop(window.window.sessionStorage.scrollTop)})):this.getTopics(),(0,r.default)(window).on("scroll",u.default.throttle(this.getScrollData,300,1e3))},beforeRouteLeave:function(t,e,n){"topic"===t.name&&(window.window.sessionStorage.scrollTop=(0,r.default)(window).scrollTop(),window.window.sessionStorage.topics=(0,a.default)(this.topics),window.window.sessionStorage.searchKey=(0,a.default)(this.searchKey),window.window.sessionStorage.tab=e.query.tab||"all"),(0,r.default)(window).off("scroll"),n()},beforeRouteEnter:function(t,e,n){"topic"!==e.name&&window.window.sessionStorage.tab&&(window.window.sessionStorage.removeItem("topics"),window.window.sessionStorage.removeItem("searchKey"),window.window.sessionStorage.removeItem("tab")),n()},methods:{getTitleStr:function(t){var e="";switch(t){case"share":e="分享";break;case"ask":e="问答";break;case"job":e="招聘";break;case"good":e="精华";break;default:e="全部"}return e},getTabInfo:function(t,e,n,o){return u.default.getTabInfo(t,e,n,o)},getTopics:function(){var t=this,e=r.default.param(this.searchKey);r.default.get("https://cnodejs.org/api/v1/topics?"+e,function(e){t.scroll=!0,e&&e.data&&(t.topics=e.data)})},getScrollData:function(){if(this.scroll){var t=parseInt((0,r.default)(window).height(),20)+parseInt((0,r.default)(window).scrollTop(),20);(0,r.default)(document).height()<=t+200&&(this.scroll=!1,this.searchKey.limit+=20,this.getTopics())}}},watch:{$route:function(t,e){t.query&&t.query.tab&&(this.searchKey.tab=t.query.tab),this.searchKey.limit=20,this.getTopics(),this.$refs.head.show=!1}},components:{nvHead:f.default,nvTop:p.default}}}});
//# sourceMappingURL=1.212227da2ff89ae0e780.js.map