class Animal {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name) //注意！！！！
    this.name = name
  }
  say() {
    console.log(`${this.name} say`);
  }
}

const dog = new Dog('哈士奇')
dog.say()
dog.eat()