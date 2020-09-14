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

## 阿里二面

1、下列事件哪个不是由鼠标触发的事件（D）

```
A、click
B、contextmenu
C、mouseout
D、keydown
```

2、下面关于 CSS 布局的描述，不正确的是？ （D）

```
A、块级元素实际占用的宽度与它的 width 属性有关；
B、块级元素实际占用的宽度与它的 border 属性有关；
C、块级元素实际占用的宽度与它的 padding 属性有关；
D、块级元素实际占用的宽度与它的 background 属性有关。
```

3、下面有关 html 的描述，不推荐的是？(B)

```
A、在页面顶部添加 doctype 声明；
B、在 </head> … <body> 中间插入 HTML 代码；
C、避免使用 <font> 标签；
D、使用 <table> 元素展现学生成绩表等数据。
```

4、浏览器在一次 HTTP 请求中，需要传输一个 4097 字节的文本数据给服务端，可以采用的方式? (E)

```
A、存入 IndexdDB
B、写入 COOKIE
C、放在 URL 参数
D、写入 Session
E、使用 POST
F、放在 Local Storage
```

5、下面哪个属性不会让 div 脱离文档流（normal flow）？(C)

```
A、position: absolute;
B、position: fixed;
C、position: relative;
D、float: left;
```

6、请编程计算 n 的阶乘
// 代码写在这，编程语言不限，请用递归实现

```js
function resolve(n) {
if (n <= 0) return 0
if (n === 1) return 1
return resolve(n - 1) \* n
}
```

7、请封装一个异步函数，入参为图片地址，在图片加载成功之后返回 true,失败返回 false.
// 代码写在这

```js
function helper(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(true);
    };
    img.onerror = () => {
      resolve(false);
    };
    img.src = src;
  });
}
```

8、请写出一下代码输出的日志结果

```js
console.log('1');

setTimeout(function () {
  console.log('2');
  new Promise(function (resolve) {
    console.log('3');
    resolve();
  }).then(function () {
    console.log('4');
  });
});

new Promise(function (resolve) {
  console.log('5');
  setTimeout(function () {
    console.log('6');
  });
  resolve();
}).then(function () {
  console.log('7');
});
```

[1,5,7,2,3,4,6]

9、在不固定宽度的浏览器里，有 3 列布局，其中左右 2 列是固定宽度 100px，中间的 1 列充满剩下的空间，纯 css 实现，请写出 2 种或以上的实现方法
// 代码写在这里 ↓↓↓↓↓
// html 部分

```html
<div class="container">
  <div class="left"></div>
  <div class="middle"></div>
  <div class="right"></div>
</div>

<div class="container2">
  <div class="left2"></div>
  <div class="middle2"></div>
  <div class="right2"></div>
</div>
// css部分 .container { width: 100%; display: flex } .left { width: 100px; }
.right { width: 100px; } .middle { flex: 1; } .container2 { position: relative;
width: 100%; height: 100%; } .left2 { width: 100px; position: absolute; top: 0;
left: 0; bottom: 0; } .right2 { width: 100px; position: absolute; right: 0; top:
0; bottom: 0; } .middle2 { position: absolute; top: 0; bottom: 0; left: 100px;
right: 100px; }
```

// 代码写在这里 ↑↑↑↑↑

10、请实现 find 函数，使下列的代码调用正确。

```js
约定：
• title数据类型为String
• userId为主键，数据类型为Number

var data = [
 {userId: 8, title: 'title1'},
 {userId: 11, title: 'other'},
 {userId: 15, title: null},
 {userId: 19, title: 'title2'}
];

//查找data中，符合条件的数据，并进行排序
var result = find(data).where({
 "title": /\d$/
}).orderBy('userId', 'desc');

console.log(result);
// [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];

var find = function(origin) {
 //将find方法实现的代码谢在这里
 const result = [];
 const obj = {
 	where: (record) => {
   	if (typeof record !== 'object') return;

       for (let i = 0;i < origin.length;i++) {
           const o = origin[i];
           let flag = true;
         	for (let key in record) {
             if (key === 'userId') {
               if (typeof o[key] !== 'number' || o[key] !== record[key]) {
                 flag = false;
                 break;
               }
             } else if (key === 'title') {
               if (Object.prototype.toString.call(record[key]) === '[object RegExp]') {
                 const reg = new RegExp(record[key].source)
                 if (!reg.test(o[key])) {
                   flag = false;
                   break;
                 }
               } else {
                 if (o[key] !== record[key]) {
                   flag = false;
                   break;
                 }
               }
             } else {
               flag = false;
               break;
             }
           }
           if (flag) {
             result.push(o);
           }
       }


   	return obj;
 	},
   orderBy: (keyname, order) => {
    result.sort((a, b) => {
         if (order === 'desc') {
           return b[keyname] - a[keyname]
         } else {
           return a[keyname] - b[keyname]
         }
       })
       return obj
 	}
 }
 obj.valueOf = () => result;
 return obj;
}
```

11、四个人（A、B、C、D）晚上过桥，并且只有一个手电筒，每次只能过两个人，
并且还需要有一个人回来传递手电筒，每次只能过两个人，并且还需要有一个人回来传递手电筒，
四个人过桥的速度不一样分别是 1、2、5、10 分钟，问怎么过桥最快？总共用多长时间？

ab-b-cd-a-ab
17 分钟