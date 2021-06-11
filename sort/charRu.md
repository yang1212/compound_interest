* 将key值插入一个有序数组中

* 原数组越有序，执行效率越高
````
function sortC<T>(arr: T[]):T[] {
  for(let j = 1; j < arr.length; j++) {
    let key = arr[j]
    let orderlyNum = j - 1 // 有序数组下标最大值即为key值前一项
    while (arr[orderlyNum] > key && orderlyNum > -1) {
      arr[orderlyNum + 1] = arr[orderlyNum]
      orderlyNum--
    }
    arr[orderlyNum + 1] = key //  此步是用于完全有序的数组
  }
  return arr
}
````