# Add Two Numbers

两数相加

## Summary

给出两个非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

```bash
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

## Solution

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
