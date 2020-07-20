# 面经整理

这是专门用于进行面经整理的文件，基本都是失败的面经，屡战屡败、屡败屡战

## 京东一面二面 HR 面

### 一面

1.  自我介绍
2.  js 的基础数据类型
3.  js 的原型介绍一下
4.  将字符串转换为 int 类型
5.  创建数组的方法
6.  值传递和引用传递的区别
7.  vue 双向绑定的原理
8.  vue 工程中 static 和 assets 文件夹的用途
9.  vue 中阻止事件冒泡的方法
10. css 中的行内元素以及行内元素的特点
11. css 中 position 的属性值以及对应的用法
12. vue-router 实现页面切换的原理以及和 window.location.href 的区别
13. vue 的生命周期列举一下并解释
14. jquery 用过吗？(尴尬不怎么用)
15. 后端的语言了解吗？有用过 java 或者 c#吗？（用 node.js 的要哭出来了，继续尴尬）
16. 有什么想问的吗？（问了下对应部门的业务）

### 二面

1.  自我介绍
2.  分别讲一下冒泡排序、插入排序、快速排序和选择排序的原理
3.  栈和队列的异同
4.  在删除、插入操作上链式存储和队列存储的区别
5.  http 的状态码
6.  cookie 和 session 的区别
7.  cookie 在客户端的存储的特点
8.  （智力题）两根绳子各烧完需要一小时，如何测出 45 分钟
9.  接触过 java 吗？如果公司要求你转换技术栈你愿意吗？
10. 了解 spring-cloud 吗？(我一个面前端的真不了解)
11. 为什么投了京东的岗位？
12. 对于京东的页面有什么建议想提吗？
13. 反问环节

### HR 面

1.  自我介绍
2.  工作地点选择在哪里
3.  以后有考研的打算吗？为什么不考研呢？
4.  对于数据可视化感兴趣吗？
5.  了解 react 吗？
6.  比别人是晚上一年学吗？（抑郁症，高中和大学都各休学了一年）
7.  经典反问环节（问了部门的业务和薪酬）

## 字节跳动一面二面

### 一面

- 自我介绍
- 聊项目（主要讲自己用 vue3.0 写的开源项目，顺带连 vue3 和 vue2 的区别也讲了点）

1.  设计一个函数实现微信红包

```js
function hongbao(money, n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    let max = (money / (n - i)) * 2,
      min = 0.01;
    let tmp = Number((Math.random() * max).toFixed(2));
    tmp = Math.max(min, tmp);
    money -= tmp;
    arr.push(tmp);
  }
  return arr;
}
```

2.  随机排序

```js
function randomSort(arr) {
  return arr.sort((a, b) => (Math.random() > 0.5 ? -1 : 1));
}
```

3.  字符串首字母大写

```js
function upperFirst(str) {
  if (typeof str !== 'string' || str.length === 0) return;
  if (str.length === 1) return str.toUpperCase();
  return str.charAt(0).toUpperCase() + str.substr(1);
}
```

- typescript 中 type 和 interface 的区别
- 如何实现 typescript 中的 readonly 语法
- 用 css 实现列表内除最后一个元素外其余元素加上下划线

... 后面记不得了

面试官是一位开源作者，最近被业务困扰几乎没有接触新的技术，同组也有从 element 跳槽过来的，隐约间能感觉有点丧气。可能国内大厂的开源技术只是为了 KPI 吧，后来问了我点为什么要做开源项目，为什么之前实习的老板支持你做这件事……说实话我毕竟还是学生确实有精力去探索，也没为什么只是感觉好玩而已。

### 二面

1.  自我介绍
2.  echarts 中使用 svg 和使用 canvas 的区别
3.  如何在 echarts 中使用 svg 模式，原理是什么
4.  项目中为什么决定用 canvas 模式来绘图
5.  后端如何修改 cookie
6.  父域可以修改子域下的 cookie 吗
7.  vue3 中的 hooks 式的编写方式有什么优点
8.  vue3 中的生命周期部分产生了什么变化
9.  实现 promisify 函数，将如 fs.readFile 函数 promise 化

```js
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn.apply(
        null,
        args.concat((err, data) => {
          if (err != null) {
            reject(err);
          } else {
            resolve(data);
          }
        })
      );
    });
  };
}
```

10. 青蛙跳台阶，一次能跳一次或者两次

```javascript
function jump(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev = 1,
    next = 2;
  for (let i = 2; i < n; i++) {
    let tmp = next;
    next = prev + next;
    prev = tmp;
  }
  return next;
}
```

11. 变态青蛙跳台阶，一次能跳 1,2,3...n 阶（动态规划）

```js
// f[n] = f[n - 1] + f[n - 2]+...+f[n - i]+...f[0]
// f[n - 1] = f[n -2] + f[n -3]+...+f[0]
// -> f[n] = 2 * f[n - 1]
function jump2(n) {
  const dp = Array.from(new Array(n + 1), () => 0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i < n + 1; i++) {
    dp[i] = 2 * dp[i - 1];
  }
  return dp[n];
}
```
