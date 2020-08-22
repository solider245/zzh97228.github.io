```js
// 节流
function throttle(fn, timeout) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      fn.apply(null, args);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
      }, timeout);
    }
  };
}

// 防抖
function debounce(fn, timeout) {
  let timeId = null;
  return function (...args) {
    if (timeId) {
      clearTimeout(timeId);
      timeId = null;
    }

    timeId = setTimeout(() => {
      fn.apply(null, args);
    }, timeout);
  };
}
```

```js
function deepClone(obj) {
  if (obj == null || typeof obj !== 'object') return;
  const newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}
```

```js
Function.prototype.myCall = (context, ...args) => {
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.myApply = (context, args) => {
  context.fn = this;
  let result;
  if (Array.isArray(args)) {
    result = context.fn(...args);
  } else {
    result = context.fn();
  }
  return result;
};

Function.prototype.myBind = (context, ...args) => {
  const fn = this;
  return function Fn() {
    return fn.call(this instanceof Fn ? this : context, ...args);
  };
};
```

```js
function myInstanceof(l, r) {
  let proto = Object.getPrototyoeOf(l);
  let prototype = r.prototype;

  while (proto) {
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
```

```js
function myNew(constructor, ...args) {
  let newObj = null;

  if (typeof constructor !== 'function') {
    return;
  }

  newObj = Object.create(constructor.prototype);
  constructor.apply(newObj, args);

  return newObj;
}
```
