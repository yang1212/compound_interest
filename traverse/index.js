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

let obj3 = {
  val: 1,
  left: {
    val: null
  },
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
}

// 深度优先：---数据格式obj1（基于递归）
function dfsTraverse1(root) {
  let arr = []
  const traverse = ((root) => {
    if (!root) { return }
    arr.push(root.val)
    root.children && root.children.forEach((item) => traverse(item))
  })
  traverse(root)
  return arr
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

// 广度优先：---数据格式obj1（基于队列）
function bfsTraverse1(root) {
  let arr = []
  let stack = [root]
  while(stack.length) {
    let temp = stack.shift()
    arr.push(temp.val)
    temp.children && temp.children.forEach((item) => stack.push(item) )
  }
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

// 中序： ---数据格式obj2(基于栈 & 链表)
function middleTravese(root) {
  let p = root
  let arr = []
  let stack = []
  while(stack.length || p) {
    while(p) {
      stack.push(p)
      p = p.left
    }
    let n = stack.pop()
    arr.push(n.val)
    p = n.right
  }
  return arr
}

// 层序遍历返回对应层的数组值： ---数据格式obj2(基于队列)
function bfsTraverse(root) {
  let i = 0
  let stack = [[root, i]]
  let arr = [[]]
  while(stack.length) {
    let [temp, i] = stack.shift()
    arr[i] ? arr[i].push(temp.val) : (arr[i] = [temp.val])
    temp.left && stack.push([temp.left, i + 1])
    temp.right && stack.push([temp.right, i + 1])
  }
  return arr
}