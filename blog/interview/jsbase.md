# JavaScript 知识点

## 原型链

### 写出一种继承方法
```javascript
// 组合寄生继承
function Nnn(name) {
  this.name = name
}

Nnn.prototype.getName = function() {
  return this.name
}

let n1 = new Nnn('hahahaha')

function nnn(name) {
  Nnn.call(this,name)
}

(function() {
  let temp = Object.create(Nnn.prototype)
  nnn.prototype = temp
  temp.constructor = nnn
})()

let n2 = new nnn('hehehehe')
console.log(n1.getName())   //hahahaha
console.log(n2.getName())   //hehehehe

```

## apply、bind和call的区别

1.  apply(this,[arg1,arg2...])  立即执行
2.  bind(this,arg1,arg2) 返回函数
3.  call(this,arg1,arg2) 立即执行

## 用apply实现bind

```javascript
Function.prototype.bind = function(context) {
    let self = this
    args = Array.prototype.slice.call(arguments)
    return function() {
      return self.apply(context,args.slice(1))
    }
}
```


## 箭头函数的特点

1.  函数体内的this指向自己所在作用域中的this
2.  不可以用arguments对象，用...args替代
3.  不可用yield命令，无法作为Generator函数
4.  无法new，因为没有自己的this、没有prototype属性

## var、let和const的区别

1.  遇到有var的作用域，在任何语句执行之前都已经完成了声明和初始化，会有变量提升
2.  解析器进入一个块级作用域发现let关键字，变量只是先完成了声明并没有初始化
3.  const关键字修饰的变量无法更改其值

## 判断一个对象是否为数组

```javascript
Object.prototype.toString().call(arr) === '[object Array]'

[1,2,3] instanceof Array
```

## 简单的发布者订阅者模式

```javascript
class Observer {
  constructor() {
      this.event = {}
  }
  subscribe(type,fn) {
      if (typeof this.event[type] === 'undefined') {
          this.event[type] = [fn]
      } else {
          this.event[type].push(fn)
      }
  }
  publish(type,args={}) {
      if (!this.event[type]) return
      
      let len = this.event[type].length
      for (let i = 0;i< len; i++) {
          this.event[type][i].call(this,{type,args})
      }  
  }
}
```
