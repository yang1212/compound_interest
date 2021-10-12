````javascript
function xiEr(arr) {
  if (arr.length === 0) { return arr }
  for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    const n = arr.length
    let key
    let j
    for (let i = gap; i < n; i++) {
      key = arr[i]
      j = i
      while (arr[j - gap] > key && (j - gap) >= 0) {
        arr[j] = arr[j - gap]
        j = j - gap
      }
      arr[j] = key
    }
  }
}
````
