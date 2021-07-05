### 有效的括号
* 利用栈的特性：后进先出

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