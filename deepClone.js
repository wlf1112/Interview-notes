/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象 
 */
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    // obj是null,或者不是对象和数组，直接返回
    return obj
  }

  //初始化返回结果
  let result
  //判断obj是对象还是数组
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    //保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      //递归
      result[key] = deepClone(obj[key])

    }
  }

  //返回结果
  return result
}