//父类
class People{
    constructor(name){
        this.name=name
    }
    eat(){
        console.log(`${this.name} eat something`);
    }
}

//子类
class Student extends People{
    constructor(name,number){
        super(name)
        this.number=number
    }
    sayHi(){
        console.log(`姓名 ${this.name} 学号 ${this.number}`);
    }
}

//子类
class Teacher extends People{
    constructor(name,major){
        super(name)
        this.major=major
    }
    teach(){
        console.log(`${this.name} 教授 ${this.major}`);
    }
}

const xialuo=new Student('夏洛',100);
console.log(xialuo.name);
console.log(xialuo.number);
console.log(xialuo.sayHi());

//实例
const wanglaoshi=new Teacher('王老师','语文')
console.log(wanglaoshi.name);
console.log(wanglaoshi.major);
console.log(wanglaoshi.teach());
console.log(wanglaoshi.eat());

console.log(typeof People);
console.log(typeof Student);

console.log(xialuo.__proto__);
console.log(xialuo.__proto__.constructor);
console.log(Student.prototype);
console.log(Student.prototype.constructor);
console.log(xialuo.__proto__===Student.prototype);
console.log(xialuo.__proto__.constructor==Student.prototype.constructor);

console.log(Student.prototype.__proto__);
console.log(Student.prototype.__proto__.constructor);
console.log(People.prototype);
console.log(People.prototype.constructor);
console.log(Student.prototype.__proto__===People.prototype);
console.log(Student.prototype.__proto__.constructor===People.prototype.constructor);