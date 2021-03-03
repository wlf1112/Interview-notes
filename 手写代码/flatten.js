//数组扁平化:多维数组=>一维数组

let arr = [1, [2, [3, [4, 5]]], 6];

//方法一：普通递归
let result = [];
let fn = function (array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (Array.isArray(item)) {
      fn(item);
    } else {
      result.push(item);
    }
  }
  return result;
}

fn([1, [2, [3, [4, 5]]], 6]) //[1,2,3,4,5,6]

//方法二：利用reduce函数迭代
function flatten(array) {
  return array.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}
console.log(flatten(arr))
