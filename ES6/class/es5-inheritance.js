function Animal() {
  this.eat = function () {
    alert('Animal eat')
  }
}

function Dog() {
  this.bar = function () {
    alert('Dog bar')
  }
}

Dog.prototype = new Animal()

var hashiqi = new Dog()
hashiqi.eat();
hashiqi.bar();