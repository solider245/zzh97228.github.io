# Moving-Count

机器人运动范围

## Summary

地上有一个 m 行 n 列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于 k 的格子。例如，当 k 为 18 时，机器人能够进入方格 [35, 37] ，因为 3+5+3+7=18。但它不能进入方格 [35, 38]，因为 3+5+3+8=19。请问该机器人能够到达多少个格子？

示例 1：

```
输入：m = 2, n = 3, k = 1
输出：3
```

示例 2：

```
输入：m = 3, n = 1, k = 0
输出：1
```

## Solutions

```js
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const finalArr = Array.from(new Array(m), () =>
    Array.from(new Array(n), () => 0)
  );
  function count(str) {
    return str.split('').reduce((prev, next) => {
      prev = prev + parseInt(next);
      return prev;
    }, 0);
  }
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let ti = '' + i,
        tj = '' + j;
      if (count(ti) + count(tj) <= k) {
        if (
          (i === 0 && j === 0) ||
          (j - 1 >= 0 && finalArr[i][j - 1]) ||
          (i - 1 >= 0 && finalArr[i - 1][j])
        ) {
          res++;
          finalArr[i][j] = 1;
        }
      }
    }
  }
  return res;
};
```
