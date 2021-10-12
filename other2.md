let obj1 = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 4,
          children: null
        },
        {
          val: 5,
          children: null
        }
      ]
    },
    {
      val: 3,
      children: null
    }
  ]  
}

let obj2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}


// 深度优先：---数据格式obj2（基于递归）
function dfsTraverse2(root) {
  let arr = []
  const traverse = ((root) => {
    if (!root) { return }
    arr.push(root.val)
    root.left && traverse(root.left)
    root.right && traverse(root.right)
  })
  traverse(root)
  return arr
}


// 广度优先：---数据格式obj2（基于队列）
function bfsTraverse2(root) {
  let stack = [root]
  let arr = []
  while(stack.length) {
    let temp = stack.shift()
    arr.push(temp.val)
    temp.left && stack.push(temp.left)
    temp.right && stack.push(temp.right)
  }
  return arr
}


// 层序遍历返回对应层的数组值： ---数据格式obj2(基于队列)
function bfsTraverse(root) {
  if (!root) { return []}
  let stack = [[root, 0]]
  let arr = [[]]
  while(stack.length) {
    let [temp, i] = stack.shift()
    arr[i] ? arr[i].push(temp.val) : (arr[i] = [temp.val])
    temp.left && stack.push([temp.left, i + 1])
    temp.right && stack.push([temp.right, i + 1])
  }
  return arr
}

function revertTree(root) {
  if (root.length === 0) { return '' }
  const travseR = function(root) {
    let temp = root.left
    root.left = root.right
    root.right = temp
    root.left && travseR(root.left)
    root.right && travseR(root.right)
  }
  travseR(root)
  return root
}

// 对称 || 相等  --> 拓展：两个数组是否一致
function allTree(root) {
  let stack = [root]
  let arr = []
  while(stack.length) {
    let temp = stack.pop()
    arr.push(temp ? temp.val : null)
    temp && temp.right && stack.push(temp.right)
    temp && (temp.right || temp.left) && stack.push(temp.left)
  }
  return arr
}
// 相等
function isSameTree(p, q) {
  if (!p && !q) { return true }
  if ((p && !q) || (!p && q) || (p.val !== q.val)) { return false }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
// 对称
function symmetryTree(root) {
  if (!root) { return true }
  let p = root.left
  let q = root.right
  const travseT = function(p, q) {
    if (!p && !q) { return true }
    if ((p && !q) || (!p && q) || (p.val !== q.val)) { return false }
    return travseT(p.left, q.right) && travseT(p.right, q.left)
  }
  return travseT(p, q)
}
