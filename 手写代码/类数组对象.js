/*
常见的类数组：
  1.用getElementsByTagName/ClassName()获得的HTMLCollection
  2.用querySelector获得的nodeList
*/

//将类数组转换成数组
//方法1:Array.prototype.slice.call()
function sum(a, b) {
  let args = Array.prototype.slice.call(arguments);
  console.log(args.reduce((sum, cur) => sum + cur));
}

sum(1, 2);

//方法2：Array.from()
function sum(a, b) {
  let args = Array.from(arguments);
  console.log(args.reduce((sum, cur) => sum + cur));
}

sum(1, 2);

//方法3：ES6展开运算符
function sum(a, b) {
  let args = [...arguments];
  console.log(args.reduce((sum, cur) => sum + cur));
}

sum(1, 2);

//方法4：利用concat+apply
function sum(a, b) {
  let args = Array.prototype.concat.apply([], arguments); //apply方法会把第二个参数展开
  console.log(args.reduce((sum, cur) => sum + cur));
}

sum(1, 2);