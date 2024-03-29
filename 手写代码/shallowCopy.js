//方案一：Object.assign：拷贝的是对象属性的引用，不是对象本身
let obj = {
  name: 'sy',
  age: 18
};
const obj2 = Object.assign({}, obj);
console.log(obj2);

//方案二：concat
let arr = [1, 2, 3];
let newArr = arr.concat();
newArr[1] = 100;
console.log(arr);

//方案三：slice
let arr = [1, 2, 3];
let newArr = arr.slice();
newArr[1] = 100;
console.log(arr)

//方案四：...展开运算符
let arr = [1, 2, 3];
let newArr = [...arr];
console.log(newArr)

//方案五：手动实现
const shallowCopy = (target) => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = target[prop];
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}