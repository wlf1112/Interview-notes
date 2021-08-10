function updateChildren(vnode, newVnode) {
  var children = vnode.children;
  var newChildren = newVnode.children;

  children.forEach(function (child, index) {
    var newChild = newChildren[index]
    if (newChild == null) {
      return;
    }

    if (newChild.tag == child.tag) {
      // 两者tag一样
      updateChildren(child, newChild)
    } else {
      // 两者tag不一样
      replace(child, newChild)
    }
  })
}