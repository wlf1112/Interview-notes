/**
 * 寄生组合继承采用call的方式调用父类构造函数，继承父类的属性和方法。
 * 如果同样的属性和方法在子类上有，输出的时候优先输出子类的属性和方法。（根据原型链）
 */
function Parent(name,age){
    // this.name=name;
    // this.age=age;
    this.type='person';
    this.say=()=>{
        console.log(111);
    }
}

Parent.prototype.play=()=>{
    console.log(222);
}

function Children(name,age){
    Parent.call(this);
    // Parent.call(this,name,age);
    this.name=name;
    this.age=age;
}

Children.prototype=Object.create(Parent.prototype);
Children.prototype.constructor=Children;

let child=new Children('xiaowang',18);
console.log(child.name);
console.log(child.age);
console.log(child.type);
console.log(child.say());