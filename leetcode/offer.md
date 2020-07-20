# 剑指-Offer

剑指 Offer 书中的题解

1. [数组中重复的数字](#数组中重复的数字)
2. [二维数组中的查找](#二维数组中的查找)
3. [替换空格](#替换空格)

## 数组中重复的数字

在一个长度为 n 的数组 nums 里的所有数字都在 0 ～ n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3

```js
var findRepeatNumber = function (nums) {
  const entry = {};
  for (let i = 0; i < nums.length; i++) {
    if (entry[nums[i]]) {
      return nums[i];
    } else {
      entry[nums[i]] = true;
    }
  }
  return;
};
```

## 二维数组中的查找

在一个 n \* m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:

```bash
现有矩阵 matrix 如下：

[
[1, 4, 7, 11, 15],
[2, 5, 8, 12, 19],
[3, 6, 9, 16, 22],
[10, 13, 14, 17, 24],
[18, 21, 23, 26, 30]
]
给定 target = 5，返回  true。

给定  target = 20，返回  false
```

```js
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0) return false;
  if (matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1] < target)
    return false;
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (matrix[j][i] === target) {
        return true;
      } else if (matrix[j][i] > target) {
        break;
      }
    }
  }
  return false;
};
```

## 替换空格

```js
var replaceSpace = function (s) {
  return s.replace(/\s/g, '%20');
};
```

## 从尾到头打印链表

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：

```bash
输入：head = [1,3,2]
输出：[2,3,1]
```

```js
var reversePrint = function (head) {
  const arr = [];
  while (head != null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.reverse();
};
```

## 重建二叉树

输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

例如，给出

```bash
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
```

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  if (preorder.length === 1 || inorder.length === 1)
    return new TreeNode(preorder[0]);
  const peek = preorder[0];
  const idx = inorder.indexOf(peek);
  if (idx === -1) return null;
  const tree = new TreeNode(peek);

  const leftIn = inorder.slice(0, idx),
    rightIn = inorder.slice(idx + 1);
  let leftPre = [],
    rightPre = [];
  preorder.splice(0, 1);
  for (let i = 0; i < preorder.length; i++) {
    const pre = preorder[i];
    const lPr = leftIn.indexOf(pre);
    if (lPr === -1) {
      rightPre = preorder.slice(i);
      break;
    } else {
      leftPre.push(pre);
    }
  }
  const left = buildTree(leftPre, leftIn);
  const right = buildTree(rightPre, rightIn);
  tree.left = left;
  tree.right = right;

  return tree;
};
```

## 用两个栈实现队列

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead  操作返回 -1 )

```js
var CQueue = function () {
  this.stack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack.length === 0) return -1;
  return this.stack.splice(0, 1);
};
```

## 斐波那契数列

写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：

```bash
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```

斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

```js
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let pre = 0,
    next = 1,
    res = 0;
  for (let i = 2; i <= n; i++) {
    res = (pre + next) % 1000000007;
    pre = next;
    next = res;
  }
  return res;
};
```

## 青蛙跳台阶

一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级台阶。求该青蛙跳上一个 n  级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

```bash
输入：n = 2
输出：2
```

示例 2：

```bash
输入：n = 7
输出：21
```

```js
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  let prev = 1,
    next = 1,
    res = 0;
  for (let i = 2; i <= n; i++) {
    res = (prev + next) % 1000000007;
    prev = next;
    next = res;
  }
  return res;
};
```

## 旋转数组的最小数字

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组  [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为 1。

示例 1：

```bash
输入：[3,4,5,1,2]
输出：1
```

示例 2：

```bash
输入：[2,2,2,0,1]
输出：0
```

```js
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let min = numbers[numbers.length - 1];
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (min >= numbers[i]) {
      min = numbers[i];
    } else {
      min = numbers[++i];
      break;
    }
  }
  return min;
};
```

## 矩阵中的路径

请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的 3×4 的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。

```bash
[["a","b","c","e"],
["s","f","c","s"],
["a","d","e","e"]]
```

但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符 b 占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。

示例 1：

```bash
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

示例 2：

```bash
输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
```

```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  function dfs(i, j, k) {
    if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) {
      // 超出矩阵下标就快速失败
      return false;
    }
    if (board[i][j] !== word[k]) return false;
    if (k === word.length - 1) return true; // 抵达最后一个字符就退出
    let tmp = board[i][j];
    board[i][j] = 'visited';
    const res =
      dfs(i - 1, j, k + 1) ||
      dfs(i + 1, j, k + 1) ||
      dfs(i, j - 1, k + 1) ||
      dfs(i, j + 1, k + 1);
    board[i][j] = tmp; // 内容回溯
    return !!res;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 查询str的首字母
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
};
```

## 机器人的运动范围

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
  function count(num) {
    return ('' + num)
      .split('')
      .reduce((prev, next) => prev + parseInt(next), 0);
  }
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (count(i) + count(j) <= k) {
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

## 剪绳子 1

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n 都是整数，n>1 并且 m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]_k[1]_...\*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18。

示例 1：

```
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
```

示例  2:

```
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jian-sheng-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
// dp[n] = max(dp[n] ,max( dp[n - i] * i,  (n - i) * i))
/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const dp = Array.from(new Array(n + 1), () => 0);
  dp[2] = 1;

  for (let i = 3; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }
  return dp[n];
};
```

## 剪绳子 2

给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m  段（m、n 都是整数，n>1 并且 m>1），每段绳子的长度记为 k[0],k[1]...k[m - 1] 。请问 k[0]_k[1]_...\*k[m - 1] 可能的最大乘积是多少？例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

```bash
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
```

示例  2:

```bash
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

```js
var cuttingRope = function (n) {
  const dp = Array.from(new Array(n + 1), () => 0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;
  dp[4] = 4;
  dp[5] = 6;
  dp[6] = 9;
  for (let i = 7; i <= n; i++) {
    dp[i] = (dp[i - 3] * 3) % 1000000007;
  }
  return dp[n];
};
```
