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
