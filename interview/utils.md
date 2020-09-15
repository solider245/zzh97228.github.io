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
// 浅拷贝/深拷贝

function shallowClone(obj) {
  if (typeof obj !== 'object') return;
  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwProperty(key)) {
      copy[key] = obj[key];
    }
  }

  return copy;
}



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

```js
function request(options) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url, true);
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };

    xhr.onerror = function () {
      reject(new Error(this.statusText));
    };

    xhr.responseType = options.type;
    const header = options.header || {};
    xhr.setRequestHeader('Accept', 'application/json');

    Object.keys(header).forEach((h) => {
      xhr.setRequestHeader(h, header[h]);
    });
    xhr.send(options.data || null);
  });
}
```


```js
// 手写promise

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECT = 'reject';
function myPromise(fn) {
  this.state = PENDING;
  this.value = null;
  this.resolveCbs = [];
  this.rejectCbs = [];
  const self = this;

  function resolve(value) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = RESOLVED;
        self.value = value;
        this.resolveCbs.forEach((cb) => {
          cb(value);
        });
      }
    }, 0);
  }

  function reject(value) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = REJECT;
        self.value = value;
        this.rejectCbs.forEach((cb) => {
          cb(value);
        });
      }
    }, 0);
  }

  try {
    fn(resolve, reject);
  } catch (err) {
    console.error(err);
  }
}

myPromise.prototype.then = function (onResolved, onReject) {
  onResolved =
    typeof onResolved === 'function'
      ? onResolved
      : function (value) {
          return value;
        };

  if (this.state === PENDING) {
    this.resolveCbs.push(onResolved);
    this.rejectCbs.push(onReject);
  }

  if (this.state === RESOLVED) {
    onResolved(this.value);
  }

  if (this.state === REJECT) {
    onReject(this.value);
  }
};
```

```js
// 发布订阅模式
function EventUtils() {
  const topics = {};

  return {
    subscribe(topic, handler) {
      if (topics[topic] === undefined) {
        topics[topic] = [];
      }
      topics[topic].push(handler);
    },
    publish(topic, value) {
      if (topics[topic] === undefined) {
        return;
      }
      topics[topic].forEach((h) => {
        h(value);
      });
    },
    remove(topic, handler) {
      if (topics[topic] === undefined) {
        return;
      }
      let idx = 0;
      topics[topic].forEach((v, i) => {
        if (v === handler) {
          idx = i;
        }
      });
      topics[topic].splice(idx, 1);
    },
  };
}
```

```js
// apply,call,bind实现
Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  context.fn = this;

  const result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.myApply = function (context, args) {
  context = context || window;
  context.fn = this;
  let result = null;
  if (Array.isArray(args)) {
    result = context.fn(...args);
  }

  return result;
};

Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
```

```js
// 柯里化
function currying(fn) {
  let totalArgs = [];
  function next(...args) {
    totalArgs = totalArgs.concat(args);
    return next;
  }
  next.toString = function () {
    return fn.apply(null, totalArgs);
  };
  next.valueOf = function () {
    return fn.apply(null, totalArgs);
  };
  return next;
}
```

```js
// 寄生组合继承
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return "I'm a " + this.name;
};

function Student(name) {
  Person.call(this, name);
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
```