(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{46:function(t,e,r){"use strict";r.r(e);var a=r(0),v=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"vue-js-知识点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-知识点","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue.js 知识点")]),t._v(" "),r("h2",{attrs:{id:"vue双向数据绑定原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue双向数据绑定原理","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue双向数据绑定原理")]),t._v(" "),r("p",[t._v("通过Object.defineProperty()数据劫持结合发布者-订阅者模式，设置setter和getter方法。数据更新时发布消息给订阅者，并触发订阅者的相应回调")]),t._v(" "),r("ol",[r("li",[t._v("m->v defineProperty()进行数据劫持(vue3中用Proxy())")]),t._v(" "),r("li",[t._v("v-m v-model方式，利用事件监听随着view的触发事件而改变")])]),t._v(" "),r("h2",{attrs:{id:"object-defineproperty的缺陷"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty的缺陷","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.defineProperty的缺陷")]),t._v(" "),r("ol",[r("li",[t._v("无法监控数组下标变化，通过数组下标添加元素时不能实时响应")]),t._v(" "),r("li",[t._v("只能劫持对象属性，对每个对象的属性进行遍历。如果属性是对象还要深度遍历，相比之下Proxy劫持整个对象并返回新的对象。")])]),t._v(" "),r("h2",{attrs:{id:"vuex是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vuex是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" vuex是什么")]),t._v(" "),r("p",[t._v("是vue.js底下的状态管理工具，包含state、getter、mutation、action四块。")]),t._v(" "),r("h2",{attrs:{id:"vuex中的为什么mutation是同步而action是异步的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vuex中的为什么mutation是同步而action是异步的","aria-hidden":"true"}},[t._v("#")]),t._v(" vuex中的为什么mutation是同步而action是异步的")]),t._v(" "),r("p",[t._v("因为异步的操作成功和失败不可测，何时进行异步操作也不可测，在异步成功或失败时不commit(mutation)，vuex就无法捕获到异步的结果并进行响应操作。")]),t._v(" "),r("h2",{attrs:{id:"vue-router"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-router","aria-hidden":"true"}},[t._v("#")]),t._v(" vue-router")])])},[],!1,null,null,null);e.default=v.exports}}]);