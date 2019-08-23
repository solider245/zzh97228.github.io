# 面经合集

## 作业帮

2019年8月23日19点一面，赛码答题(北京的公司都喜欢用这个系统)

### 作业帮一面

- vue双向绑定原理(Object.defineProperty、Dom事件绑定)
- 父子组件之间传值的方法
- 非父子组件之间传值的方法，除vuex
- vue生命周期中的钩子函数
- beforeCreated中能使用用props的数据吗
- vdom中通过什么方法能使得只更新部分数据节点
- url从输入到显示页面的过程
- tcp协议、三次握手
- https的流程
- http2.0的特点(二进制分帧、多路复用、压缩头部)
- http拥塞机制
- http滑动窗口
- 进程和线程
- 线程同步的方法
- 进程间的通信
- 写一道获取树的最大高度的算法
    ```javascript
      function getHeight(tree) {
        if (tree === null) return 0
        let left = getHeight(tree.left)+1
        let right = getHeight(tree.right)+1
        return left > right ? left : right
    }
    ```
- 给定数值、数字和数组，求数组中用数字数量的数求和等于数值的数组元素 func Num(arr,n,target)
- 讲一下hashmap
- ArrayList和LinkedList区别
- 为何学习前端、学习前端的方法、遇到问题如何解决


## 美团

2019年8月19日19点美团现场北新泾一面

### 美团一面

- 介绍项目
- http1.0、http1.1、http2.0的区别
- http2.0多路复用的原理
- https握手的原理
- 写一个深拷贝
- url从输入到显示页面的过程
- vue双向绑定原理
- http缓存机制中强缓存和协商缓存的原理
- 两栏布局怎么实现
- call、apply、bind的区别
- 如何用apply实现bind
- 在dom节点中递归遍历出以'mt-'开头的类元素



