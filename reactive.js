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
  depend() {
    this.dep.depend();
  }
  update() {
    if (this.watch) {
      const old = this.value;
      this.get();
      this.callback(this.value, old);
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

function watchEffect(getter) {
  new Watcher(getter);
}

function computed(getter) {
  const watcher = new Watcher(getter, { computed: true });
  const obj = { value: undefined };
  const res = new Proxy(obj, {
    get() {
      watcher.depend();
      return watcher.get();
    },
  });
  return res;
}

function reactive(data) {
  if (typeof data !== 'object') return;
  return createReactive(data);
}

function createReactive(raw) {
  const dep = new Dep();

  const res = new Proxy(raw, {
    set(target, key, val) {
      const result = Reflect.set(target, key, val);
      dep.notify();

      return result;
    },
    get(target, key) {
      const result = Reflect.get(target, key);
      dep.depend();
      if (typeof result === 'object') {
        return reactive(result);
      }
      return result;
    },
  });

  return res;
}

const state = reactive({ k: 2 });
const key = computed(() => state.k + 1);

watchEffect(() => {
  console.log('state.k is: ' + state.k);
});
state.k = 5;

console.log(key.value);
