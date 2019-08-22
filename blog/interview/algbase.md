# 算法和数据结构知识点


## 排序算法

### 冒泡排序
```javascript
function bubbleSort(arr) {
  for (let i = arr.length-1;i>0;i--) {
      for (let j = 0;j<arr.length;j++) {
          if (arr[j+1]<arr[j]) {
              [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
          } 
      }
  }
  return arr
}
```

### 快速排序
```javascript
function quickSort(arr) {
    if (arr.length === 0) return []
    let left = []
    let right = []
    let pivot = arr[0]
    for (let i=0;i<arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return quickSort(left).concat(arr[0],quickSort(right))
  
}
```

## 查找算法

## 常见算法

### 青蛙跳台阶

```javascript

function jump(n) {
  if (n <= 1) return 1
  if (n === 2) return 2
  let first = 1
  let second = 2
  let third = 0
  for (let i=2;i<n;i++) {
      third = first + second
      first = second
      second = third
  }
  return third
}

```

### 浅拷贝和深拷贝
```javascript
/**
* 此版本深度克隆并非最佳实践
* @param obj
* @returns {*}
*/
function deepClone(obj) {
    let res = Array.isArray(obj) ? [] : {}
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            let temp = typeof obj[item] === 'object' ? deepClone(obj[item]) : obj[item]
            res[item] = temp
        }
    }
    return res
}
```

### 数组去重
```javascript
function removeDuplicate(arr) {
  return Array.isArray(arr) ? arr.reduce((prev,next)=>{
      if (prev.indexOf(next) === -1) {
          prev.push(next)
      }
      return prev
  },[]) : []
}
```

### 数组计数并排序
```javascript
function countNumber(arr=[]) {
  return Array.isArray(arr) ? arr.reduce((prev,next)=>{
      for (let i = 0;i<prev.length;i++) {
          if (prev[i].hasOwnProperty('key')) {
              if (prev[i]['key'] === next) {
                  prev[i]['count']++
                  return prev
              }
          }
      } 
      prev.push({
            'key': next,
            'count': 1
      })
      return prev
  },[]).sort((a,b)=> a.count-b.count) : undefined
}
```