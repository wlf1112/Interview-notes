//ES5
// var obj = {
//   a: 100,
//   b: 200
// }
// var a = obj.a
// var b = obj.b

// var arr = ['xxx', 'yyy', 'zzzz']
// var x = arr[0]
// var z = arr[2]

//ES6
const obj = {
  a: 100,
  b: 200
}
const {
  a,
  b
} = obj
console.log(a, b);

const arr = ['xxx', 'yyy', 'zzz']
const [x, y, z] = arr
console.log(x, y, z);