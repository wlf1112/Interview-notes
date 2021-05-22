function Animal() {
  this.eat = function () {
    console.log('animal eat');
  }
}

function Dog() {
  this.bark = function () {
    console.log('dog bark');
  }
}

//绑定原型，实现继承
Dog.prototype = new Animal()

//哈士奇
var hashiqi = new Dog()
hashiqi.bark()
hashiqi.eat()