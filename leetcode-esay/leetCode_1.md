### 两数之和 (高频)
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]

```

1、暴力解法双重for循环(不提倡)

````javaScript
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target)  {
        return [i, j]
      }
    }
  }
  return []
}
````

时间复杂度: O(n²)

空间复杂度: O(1) 

<br/>

2、基于字典：空间换时间

````javaScript
  function twoSum(nums, target) {
    if (nums.length < 2) { return [] }
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
      if (map.has(target - nums[i])) {
        return [map.get(target - nums[i]), i]
      } else {
        map.set(nums[i], i)
      }
    }
  }
````   

时间复杂度: O(n)

空间复杂度: O(n)     