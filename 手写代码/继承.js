//借助call  
//问题：父类原型对象中存在方法，子类无法继承
function Parent1() {
  this.name = 'parent1';
}

function Child1() {
  Parent1.call(this);
  this.type = 'child1';
}
console.log(new Child1())

//借助原型链
function Parent2() {
  this.name = 'parent2';
  this.play = [1, 2, 3]
}

function Child2() {
  this.type = 'child2';
}
Child2.prototype = new Parent2();

var s1 = new Child2();
var s2 = new Child2();

s1.play.push(4);
console.log(s1.play, s2.play);

//将上面两种组合  parent的构造函数会多执行一次
function Parent3() {
  this.name = 'parent3';
  this.play = [1, 2, 3]
}

function Child3() {
  Parent3.call(this);
  this.type = 'child3';
}

Child3.prototype = new Parent3();
console.log(new Child3())

//组合继承的优化  子类实例的构造函数是Parent4
function Parent4() {
  this.name = 'parent4';
  this.play = [1, 2, 3]
}

function Child4() {
  Parent4.call(this);
  this.type = 'child4';
}

Child4.prototype = Parent4.prototype
console.log(new Child4())

//寄生组合继承
function Parent5() {
  this.name = 'parent5';
  this.play = [1, 2, 3]
}

function Child5() {
  Parent5.call(this);
  this.type = 'child5';
}

Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;

console.log(new Child5())