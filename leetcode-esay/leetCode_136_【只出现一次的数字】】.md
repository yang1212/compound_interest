#### 只出现一次的数字

#### ^满足交换律:
0 ^ A = A；A ^ A = 0；A ^ B ^ B = A


```typescript
function singleNum(nums: Array<number>):number {
  return nums.reduce((a, b) => {
    return a^b
  })
}
```
