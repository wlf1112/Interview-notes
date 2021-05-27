function createElement(vnode) {
  var tag = vnode.tag
  var attrs = vnode.attrs || {}
  var children = vnode.chaildren || []
  if (!tag) {
    return null
  }

  //创建真实的 DOM 元素
  var elem = docuument.createElement(tag)
  //属性
  var attrName
  for (attrName in attrs) {
    if (attrs.hasOenProperty(attrName)) {
      //给
      elem.setAttribute(attrName, attrs[attrName])
    }
  }
  //子元素
  children.forEach(function (childVnode) {
    //给elem添加子元素
    elem.appendChild(createElement(childVnode))
  })
  //返回真实的
  return elem
}