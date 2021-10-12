````javaScript
class CreateNode {
  constructor(key) {
    this.value = key
    this.left = null
    this.right = null
  }
}
class CreateNodeTree {
  constructor() {
    this.aimRoot = null
  }
  // 排序二叉树
  insert(key) { // 插入节点
    const insertValue = new CreateNode(key)
    if (this.aimRoot === null) {
      this.aimRoot = insertValue
    } else {
      const insertNode = function(root, insertValue) {
        if (root.value > insertValue.value) {
          if (root.left === null) {
            root.left = insertValue.value ? insertValue : null // 当插入的值为null时,直接赋值null
          } else {
            insertNode(root.left, insertValue)
          }
        } else {
          if (root.right === null) {
            root.right = insertValue.value ? insertValue : null // 当插入的值为null时,直接赋值null
          } else {
            insertNode(root.right, insertValue)
          }
        }
      }
      insertNode(this.aimRoot, insertValue)
    }
  }
  frontTravel() { // 递归：先序遍历(中左右)
    const result = []
    const frontTravelNode = function(root) {
      if (root !== null) {
        result.push(root.value)
        frontTravelNode(root.left)
        frontTravelNode(root.right)
      }
    }
    frontTravelNode(this.aimRoot)
    return result
  }
  endTravel() { // 递归：后序遍历(左右中)
    const result = []
    const endTravellNode = function(root) {
      if (root !== null) {
        endTravellNode(root.left)
        endTravellNode(root.right)
        result.push(root.value)
      }
    }
    endTravellNode(this.aimRoot)
    return result
  }
  middleTravel() { // 递归：中序遍历(左中右)
    const result = []
    const middleTravelNode = function(root) {
      if (root !== null) {
        middleTravelNode(root.left)
        result.push(root.value)
        middleTravelNode(root.right)
      }
    }
    middleTravelNode(this.aimRoot)
    return result
  }
  revertTree() { // 翻转二叉树
    const frontNode = function(root) {
      if (root !== null) {
        const temp = root.left
        root.left = root.right
        root.right = temp
        frontNode(root.left)
        frontNode(root.right)
      }
    }
    frontNode(this.aimRoot)
    return this.aimRoot
  }
  dieFrontTravel() { // 迭代法: 先序遍历
    const result = []
    const stack = []
    const frontTravelNode = function(root) {
      if (root !== null) { stack.push(root) }
      while (stack.length > 0) {
        const currentNode = stack.pop()
        result.push(currentNode.value)
        if (currentNode.right !== null) {
          stack.push(currentNode.right)
        }
        if (currentNode.left !== null) {
          stack.push(currentNode.left)
        }
      }
    }
    frontTravelNode(this.aimRoot)
    return result
  }
  dieEndTravel() { // 迭代法： 后续遍历
    const result = []
    const stack = []
    const endTravelNode = function(root) {
      if (root !== null) { stack.push(root) }
      while (stack.length > 0) {
        const currentNode = stack.pop()
        result.unshift(currentNode.value)
        if (currentNode.left !== null) {
          stack.push(currentNode.left)
        }
        if (currentNode.right !== null) {
          stack.push(currentNode.right)
        }
      }
    }
    endTravelNode(this.aimRoot)
    return result
  }
  dieMiddleTravel() { // 迭代法：中序遍历
    const result = []
    const stack = []
    let head = this.aimRoot
    const middleTravelNode = function() {
      while (stack.length > 0 || head !== null) {
        while (head !== null) {
          stack.push(head)
          head = head.left
        }
        if (stack.length !== 0) {
          head = stack.pop()
          result.push(head.value)
          head = head.right
        }
      }
    }
    middleTravelNode()
    return result
  }
}

export default CreateNodeTree
````