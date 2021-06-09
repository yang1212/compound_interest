
* n个数，外层需要经过 n - 1轮

* 内层两两比较， 一圈过后，可确认一个最值。 比较次数为： 剩下未排序数个数 - 1，以此循环


````
function sortM<T>(arr: T[]):T[]{
  let i = arr.length - 1
  let temp
  while (i > 0) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    i--
  }
  return arr
}

````