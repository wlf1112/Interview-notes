//ES5
var obj = {
  a: 100,
  b: 200
}
for (var item in obj) {
  console.log(item);
}
console.log(item);

//ES6
const obj = {
  a: 100,
  b: 200
}
for (let item in obj) {
  console.log(item);
}
console.log(item);