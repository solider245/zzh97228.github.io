# Build-Tree

重建二叉树。

## Summary

输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

```bash
例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
```

## Solutions

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
