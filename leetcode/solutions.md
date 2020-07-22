## 两数相加

给出两个非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

```bash
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let num1 = 0,
    num2 = 0,
    res = new ListNode(0),
    temp = res;

  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + res.val;
    num1 = Math.floor(sum / 10);
    num2 = sum % 10;
    res.val = num2;
    if ((l1 && l1.next) || (l2 && l2.next) || num1 > 0) {
      res.next = new ListNode(num1);
      res = res.next;
    }
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }
  return temp;
};
```

## 两数之和

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

```bash
示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (obj[res] !== undefined) {
      return [obj[res], i];
    }
    obj[nums[i]] = i;
  }
  return [];
};
```

## 无重复字符的最长子串

给定一个字符串，请你找出其中不含有重复字符的   最长子串   的长度。

示例  1:

```bash
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:

```bash
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3:

```bash
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var result = 0;
  var curr = 0;
  var temp = '';
  for (var i = 0; i < s.length; i++) {
    var al = s.charAt(i);
    curr++;
    while (temp.indexOf(al) !== -1) {
      temp = '' + temp.slice(1);
      curr--;
    }
    if (result < curr) result = curr;
    temp += al;
  }
  return result;
};
```

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = -1,
    m = 0;
  const record = {};
  for (let i = 0; i < s.length; i++) {
    const rec = record[s[i]];
    if (rec !== undefined && rec > left) {
      left = rec;
    } else {
      m = Math.max(m, i - left);
    }
    record[s[i]] = i;
  }
  return m;
};
```
