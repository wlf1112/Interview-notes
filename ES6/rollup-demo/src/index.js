// import util1 from './util1'
// import {
//   fn1,
//   fn2
// } from './util2'

// console.log(util1);
// fn1()
// fn2()

// [1, 2, 4].map(item => item + 1)

class Animal {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(this.name + 'eat');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
    this.name = name
  }
  bar() {
    console.log(this.name + 'bar');
  }
}

const hashiqi = new Dog('哈士奇')
hashiqi.eat()
hashiqi.bar()