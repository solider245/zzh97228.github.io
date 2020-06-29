# Longest-Substring

无重复字符的最长子串

## Summary

给定一个字符串，请你找出其中不含有重复字符的   最长子串   的长度。

示例  1:

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3:

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## Solution

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
