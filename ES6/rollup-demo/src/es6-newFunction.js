//ES6常用功能

//变量定义
// let i = 10;
// i = 100;
// const j = 20;
// // j = 200;

//字符串变量
// var name = 'zhangsan',
//   age = 20,
//   html = '';

// html += '<div>';
// html += ' <p>' + name + '</p>';
// html += ' <p>' + age + '</p>';
// html += '</div>';

// const name = 'zhangsan',
//   age = 20;
// const html = `
//   <div>
//     <p>${name}</p>
//     <p>${age}</p>
//   </div>
// `

//解构赋值
// var obj = {
//   a: 100,
//   b: 200
// }
// var a = obj.a
// var b = obj.b

// var arr = [1, 2, 3]
// var x = arr[0]
// var y = arr[2]

// const obj = {
//   a: 100,
//   b: 200
// }
// const {
//   a,
//   b
// } = obj

// const arr = [1, 2, 3]
// const [x, y, z] = arr


//块级作用域
// var obj = {
//   a: 100,
//   b: 200
// }

// for (var item in obj) {
//   console.log(item);
// }
// console.log(item)

// const obj = {
//   a: 100,
//   b: 200
// }

// for (let item in obj) {
//   console.log(item);
// }
// console.log(item)

//函数默认参数
// function fn(a, b) {
//   if (b == null) {
//     b = 0
//   }
// }

// function fn(a, b = 0) {

// }

//箭头函数
// var arr = [1, 2, 3]
// arr.map(function (item) {
//   return item + 1
// })

// const arr = [1, 2, 3]
// arr.map(item => item + 1)
// arr.map((item, index) => {
//   console.log(item)
//   return item + 1
// })

//this
// function fn() {
//   console.log('real', this) //real { a: 100 }

//   var arr = [1, 2, 3]
//   arr.map(function (item) {
//     console.log(this); //window
//   })
// }
// fn.call({
//   a: 100
// })

function fn() {
  console.log('real', this) //real { a: 100 }

  var arr = [1, 2, 3]
  arr.map(item => {
    console.log(this); //{a:100}
  })
}
fn.call({
  a: 100
})