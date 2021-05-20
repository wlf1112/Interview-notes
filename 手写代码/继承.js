/**
 * 借助原型链实现继承，缺点：引用类型被所有实例共享
 */
function Parent() {
  this.name = 'kevin'
  this.type = [1, 2, 3, 4]
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child() {

}

Child.prototype = new Parent()
var child1 = new Child()
child1.type.push(5)
console.log(child1.type)
var child2 = new Child()
console.log(child2.type)

/**
 * 借助call实现继承，缺点：方法在构造函数中定义，每次创建实例都会创建一遍方法；
 *                        继承不了父级原型上的函数
 */
function Parent() {
  this.type = [1, 2, 3, 4]
}

Parent.prototype.sayName = function () {
  console.log(`${this.name} say`);
}

function Child() {
  Parent.call(this)
}

var child = new Child()
child.type.push(5)
console.log(child);

var child1 = new Child()
console.log(child1);

/**
 * 组合继承（结合原型链和call）缺点：会调用两次构造函数
 */
function Parent() {
  this.name = 'parent'
  this.type = [1, 2, 3, 4]
}

Parent.prototype.sayName = function () {
  console.log(`${this.name} say`);
}

function Child() {
  Parent.call(this)
}

Child.prototype = new Parent()

var child1 = new Child()
child1.type.push(5)
console.log(child1.type);
console.log(child1);
console.log(child1.sayName());

var child2 = new Child()
console.log(child2.type);
console.log(child2);
console.log(child2.sayName());


/**
 * 原型式继承：包含引用类型的属性值会共享
 */
function createObj(o) {
  function F() {

  }
  F.prototype = o
  return new F()
}

var person = {
  name: 'kevin',
  friends: ['daisy', 'candy']
}

var person1 = createObj(person)
var person2 = createObj(person)

person1.name = 'person1'
console.log(person1)
console.log(person2)

person1.friends.push('taylor')
console.log(person2.friends);
console.log(person1.friends);


/**
 * 寄生组合式继承
 */
function Parent(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

var F = function () {}

F.prototype = Parent.prototype

Child.prototype = new F()

var child1 = new Child('kevin', '18')
console.log(child1);
