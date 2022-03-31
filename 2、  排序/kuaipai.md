
* 取中间值作为标杆，比中间值小的放置左边数组，其他放置右边数组

* 采用递归方式，直到左右数组长度为1，利用contat将结果连接

* attention: 中间值的剔除，以及剔除后需存为临时变量

````typescript
function sortK<T>(arr: T[]):T[] {
  if (arr.length <= 1) { return arr }
  let tag = arr[Math.floor(arr.length / 2)]
  let leftArr = []
  let rightArr = []
  arr.splice(Math.floor(arr.length / 2), 1)
  for (let i = 0; i < arr.length; i++) {
    if (tag > arr[i]) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return sortK(leftArr).concat(tag, sortK(rightArr))
}

````

时间复杂度:

空间复杂度:
