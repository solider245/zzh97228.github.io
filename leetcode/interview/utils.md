```js
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
