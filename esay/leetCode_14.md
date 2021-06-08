### 最长公共前缀

由题目可推导： 最长前缀长度不会超过数组中任意一个数据的长度

故将第一个值依次与所有值的字符一一比较，取公共值
````
function findCommonPrefix1(strs: Array<string>):string {
  if (strs.length === 1) {
    return strs[0]
  }
  const tempArr = strs.map(item => item.split(''))
  for (let i = 0; i < tempArr[0].length; i++) {
    for(let j = 1; j < tempArr.length; j++) {
      if (tempArr[0][i] !== tempArr[j][i]) { // 不相等时立即返回结果
        return tempArr[0].slice(0, i).join('')
      }
    }
  }
  return tempArr[0].join('') // 值全部相等时，直接返回第一个值
}
````
