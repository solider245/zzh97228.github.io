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

### apply、bind和call的区别
