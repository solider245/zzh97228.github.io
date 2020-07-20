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

// new 的实现
function myNew(constructor, ...args) {
  let newObj = null;

  if (typeof constructor !== 'function') {
    return;
  }

  newObj = Object.create(constructor.prototype);
  constructor.apply(newObj, args);

  return newObj;
}

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
  if (typeof obj !== 'object') return;
  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwProperty(key)) {
      copy[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }

  return copy;
}

// 快速排序

function quickSort(arr, start, end) {
  if (arr.length === 0 || start >= end) return;
  let mid = 0,
    left = start,
    right = end;
  let pivot = arr[left];
  while (left < right) {
    while (pivot <= arr[right] && left < right) {
      right--;
    }

    arr[left] = arr[right];

    while (pivot >= arr[left] && left < right) {
      left++;
    }
    arr[right] = arr[left];
  }
  pivot[left] = pivot;
  mid = left;

  quickSort(arr, start, mid - 1);
  quickSort(arr, mid + 1, end);
}

// 选择排序
function choseSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

// 冒泡排序
function bubbleSort(arr) {}
