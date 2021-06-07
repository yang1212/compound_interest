 #### 最后一个单词的长度

 首先利用去除首尾空格，后将值进行以空格的拆分
 ````
 function lastWordLength1(s: string):number {
  if (!s) { return 0 }
  let arr = s.replace(/(^\s*)|(\s*$)/g, "").split(' ')
  return arr[arr.length - 1].length
}
 ````