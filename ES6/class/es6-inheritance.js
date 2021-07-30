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