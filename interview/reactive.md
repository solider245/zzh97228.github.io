```js
function defineReactive(data, key) {
  let tmpValue = data[key];

  Object.defineProperty(data, key, {
    set(val) {
      tmpValue = val;
    },
    get() {
      return tmpValue;
    },
  });

  if (typeof tmpValue === 'object') {
    reactive(tmpValue);
  }
}

function reactive(data) {
  if (typeof data === 'object') {
    Object.keys(data).forEach((key) => {
      defineReactive(data, key);
    });
  }

  return data;
}
```

```js
class Dep {
  constructor() {
    this.deps = new Set();
  }

  depend() {
    if (Dep.target) {
      this.deps.add(Dep.target);
    }
  }
  notify() {
    this.deps.forEach((d) => d.update());
  }
}

Dep.target = null;
const targetStack = [];
function pushTarget(target) {
  if (Dep.target) {
    targetStack.push(Dep.target);
  }
  Dep.target = target;
}
function popTarget() {
  Dep.target = targetStack.pop();
}

class Watcher {
  constructor(getter, options = {}) {
    this.getter = getter;
    this.computed = options.computed;
    this.watch = options.watch;
    this.value = undefined;
    this.callback = options.callback;

    if (this.computed) {
      this.dep = new Dep();
    } else {
      this.get();
    }
  }
  get() {
    pushTarget(this);
    this.value = this.getter();
    popTarget();
    return this.value;
  }
  update() {
    if (this.watch) {
      const old = this.value;
      this.get();
      this.callback(this.value, oldValue);
    } else if (this.computed) {
      this.get();
      this.dep.notify();
    } else {
      this.get();
    }
  }
}

function watch(getter, callback) {
  new Watcher(getter, { watch: true, callback });
}

function reactive(data) {
  if (typeof data !== 'object') return;
  return createReactive(data);
}

function createReactive(raw) {
  const dep = new Dep();

  const reactive = new Proxy(raw, {
    set(target, key, val) {
      const result = Reflect.set(target, key, val);
      console.log(key + '  ' + val);
      dep.notify();
      return result;
    },
    get(target, key) {
      const result = Reflect.get(target, key);

      if (typeof result === 'object') {
        return reactive(result);
      }
      dep.depend();

      return result;
    },
  });

  return reactive;
}
```
