//父类
class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
}


//子类
class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number;
  }
  sayHi() {
    console.log(
      `姓名 ${this.name} ,学号 ${this.number}`
    );
  }
}

//子类
class Teacher extends People {
  constructor(name, major) {
    super(name)
    this.major = major
  }
  teach() {
    console.log(`${this.name} 教授 ${this.major}`);
  }
}

//实例
const xialuo = new Student('夏洛', 100);
console.log(xialuo.name);
console.log(xialuo.number);
xialuo.sayHi()
xialuo.eat()

//实例
const wanglaoshi = new Teacher('王老师', '语文')
console.log(wanglaoshi.name);
console.log(wanglaoshi.major);
wanglaoshi.eat()
wanglaoshi.teach()

console.log(xialuo instanceof Student);
console.log(xialuo instanceof People);
console.log(xialuo instanceof Object);
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({}
  instanceof Object);

console.log(typeof (People));
console.log(Student.prototype.__proto__);
console.log(People.prototype);
console.log(People.prototype === Student.prototype.__proto__);
console.log(xialuo.hasOwnProperty('name'));
console.log(Object.prototype.hasOwnProperty.call(xialuo, 'name'));