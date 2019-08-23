# Vue.js 知识点


## Vue双向数据绑定原理

通过Object.defineProperty()数据劫持结合发布者-订阅者模式，设置setter和getter方法。数据更新时发布消息给订阅者，并触发订阅者的相应回调

1.  m->v defineProperty()进行数据劫持(vue3中用Proxy())
2.  v-m v-model方式，利用事件监听随着view的触发事件而改变

## Object.defineProperty的缺陷

1.  无法监控数组下标变化，通过数组下标添加元素时不能实时响应
2.  只能劫持对象属性，对每个对象的属性进行遍历。如果属性是对象还要深度遍历，相比之下Proxy劫持整个对象并返回新的对象。

## vuex是什么

是vue.js底下的状态管理工具，包含state、getter、mutation、action四块。

## vuex中的为什么mutation是同步而action是异步的

因为异步的操作成功和失败不可测，何时进行异步操作也不可测，在异步成功或失败时不commit(mutation)，vuex就无法捕获到异步的结果并进行响应操作。
