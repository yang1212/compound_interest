
* 取中间值作为标杆，比中间值小的放置左边数组，其他放置右边数组

* 采用递归方式，直到左右数组长度为1，利用contat将结果连接

````
function sortK<T>(arr: T[]):T[] {
  if (arr.length <= 1) { return arr }
  let tag = arr[Math.floor(arr.length / 2)]
  let leftArr = []
  let rightArr = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (tag > arr[i]) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return sortK(leftArr).concat(tag, sortK(rightArr))
}

````