function createElement(vnode) {
  var tag = vnode.tag || {};
  var attrs = vnode.attrs || {};
  var children = vnode.children || [];

  if (!tag) {
    return null;
  }

  //创建元素
  var elem = document.createElement(tag);

  var attrName;
  for (attrName in attrs) {
    if (attrs.hasOwnProperty(attrName)) {
      elem.setAttribute(attrName, attrs[attrName])
    }
  }

  //子元素
  children.foreach(function (childVnode) {
    // 递归调用createElement创建子元素
    elem.appendChild(createElement(childVnode))
  })
  return elem
}