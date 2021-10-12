### 有效的括号 (高频)

1、利用栈的特性：后进先出

* Attention: 如若为奇数，则直接不匹配

````typescript
function mulValidBrackets(s: string) :boolean {
  let result = []
  let temp = s.split('')
  if (temp.length % 2 === 1) { return false }
  for(let i = 0; i < temp.length; i++) {
    if (temp[i] === '(' || temp[i] === '{' || temp[i] === '[') {
      result.push(temp[i])
    }  else if ((result[result.length - 1] === '[' && temp[i] === ']') || 
    (result[result.length - 1] === '{' && temp[i] === '}') || 
    (result[result.length - 1] === '(' && temp[i] === ')')) {
      result.pop()
    } else {
      return false
    }
  } 
  return result.length === 0
}
````
时间复杂度: O(n)

空间复杂度: O(n)

<br/>

2、用字典也可，对于符号较多情况，确实可简写，但也未优化多少

````javaScript
  function mulValidBrackets(s) {
    let arr = s.split('')
    let stack = []
    let map = new Map()
    if (temp.length % 2 === 1) { return false }
    map.set('{', '}')
    map.set('(', ')')
    map.set('[', ']')
    for(let i = 0; i < arr.length; i++) {
      if (map.has(i)) {
        stack.push(arr[i])
      } else if (map.get(stack[stack.length - 1]) === arr[i] ) {
        stack.pop()
      } else {
        return false
      }
    }
    return stack.length === 0
  }
````

时间复杂度: O(n)

空间复杂度: O(n)