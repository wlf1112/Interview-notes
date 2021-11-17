/**
 * 数组去重
 * 
 * 说明：Set是ES6提供的新的数据结构，类似于数组。它的成员是独一无二的，没有重复的值。
 *      根据这个特点，可以用来对数组进行去重操作，可以按照插入的顺序迭代其中的元素
 * 语法：new Set([iterable])  //返回一个新的Set对象
 * @param {数组} arr 
 * @returns 
 */
function uniqueArr(arr){
    return [...new Set(arr)];
}

var arr=[1,1,1,2,3,4,8,8,8,1];
console.log(uniqueArr(arr));