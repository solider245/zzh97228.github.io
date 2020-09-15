```js
// 快排
// 数组中选择一个锚点，左边的数都小于锚点，右边的数都大于锚点
function solution(arr) {
  if (!Array.isArray(arr)) return;
  if (arr.length === 0) return;
  quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, start, end) {
  if (arr.length <= 1 || start >= end) return;
  let pivot = arr[start];
  let left = start,
    right = end,
    mid = start;
  while (start < end) {
    while (arr[end] >= pivot && start < end) {
      end--;
    }
    arr[start] = arr[end];

    while (arr[start] <= pivot && start < end) {
      start++;
    }

    arr[end] = arr[start];
  }
  arr[start] = pivot;
  mid = start;

  quickSort(arr, left, mid - 1);
  quickSort(arr, mid + 1, right);
}
```

```js
function mergeSort(arr) {
  if (arr.length === 0) return;
  if (arr.length === 1) return arr;

  let mid = parseInt(arr.length >> 1);

  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(left, right) {
  let i = 0,
    j = 0;
  let tmp = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      tmp.push(left[i]);
      i++;
    } else {
      tmp.push(right[j]);
      j++;
    }
  }

  if (i < left.length) {
    tmp = tmp.concat(left.slice(i));
  }

  if (j < right.length) {
    tmp = tmp.concat(right.slice(j));
  }
  return tmp;
}
```

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

```js
function choseSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}
```
