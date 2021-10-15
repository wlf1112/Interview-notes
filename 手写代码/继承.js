//原型链继承

//父类
// function Animal(name){
//   this.type='Animal';
//   this.name=name||'动物';

//   this.sleep=function(){
//     console.log(`${this.name} 正在睡觉`);
//   }
//   //引用类型属性
//   this.feature=['fat','thin']
// }

// Animal.prototype.eat=function(food){
//   console.log(`${this.name} 正在吃 ${food}`);
// }

// //子类
// function Cat(name){
//   this.name=name;
// }

// Cat.prototype=new Animal();
// Cat.prototype.constructor=Cat;

// var cat=new Cat('加菲猫');
// console.log(cat.type);
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat.eat('猫粮'));

// var cat1=new Cat();
// var cat2=new Cat();
// console.log(cat1.feature);
// console.log(cat2.feature);

// //修改
// cat1.feature.push('small')
// console.log(cat1.feature);
// console.log(cat2.feature);
// console.log(cat instanceof Animal);
// console.log(cat instanceof Cat);


//构造继承

//父类
// function Animal(age){
//   this.name='Animal';
//   this.age=age;
//   //实例函数
//   this.sleep=function(){
//     console.log(`${this.name} 正在睡觉`);
//   }
// }

// Animal.prototype.eat=function(food){
//   console.log(`${this.name} 正在吃 ${food}`);
// }

// //子类
// function Cat(name,age){
//   Animal.call(this,age);
//   this.name=name||'tom';
// }

// var cat=new Cat('tony',11)
// console.log(cat.age);
// console.log(cat.sleep());
// // console.log(cat.eat());
// console.log(cat instanceof Cat);
// console.log(cat instanceof Animal);


//复制继承

//父类
// function Animal(parentage){
//   this.name='Animal';
//   this.age=parentage;
//   //实例函数
//   this.sleep=function(){
//     console.log(`${this.name} 正在睡觉`);
//   }
// }

// Animal.prototype.eat=function(food){
//   console.log(`${this.name} 正在吃 ${food}`);
// }

// //子类
// function Cat(name,age){
//   this.name=name;
//   var animal=new Animal(age);
//   for(var key in animal){
//     if(animal.hasOwnProperty(key)){
//       this[key]=animal[key]
//     }else{
//       Cat.prototype[key]=animal[key]
//     }
//   }
// }

// var cat=new Cat('tony',12)
// console.log(cat.age);
// console.log(cat.sleep());
// console.log(cat.eat('猫粮'));
// console.log(cat instanceof Cat);
// console.log(cat instanceof Animal);


//组合继承

//父类
// function Animal(age){
//   this.name='Animal';
//   this.age=age;
//   //实例函数
//   this.sleep=function(){
//     console.log(`${this.name} 正在睡觉`);
//   },
//   this.feature=['fat','thin']
// }

// Animal.prototype.eat=function(food){
//   console.log(`${this.name} 正在吃 ${food}`);
// }

// //子类
// function Cat(name,age){
//   Animal.call(this,age);
//   this.name=name;
// }

// Cat.prototype=new Animal();
// Cat.prototype.contructor=Cat;

// var cat=new Cat('tony',10)
// console.log(cat.age);
// console.log(cat.name);
// console.log(cat.sleep());
// console.log(cat.eat());


//寄生组合继承

//父类
function Animal(age){
  this.name='Animal';
  this.age=age;
  //实例函数
  this.sleep=function(){
    console.log(`${this.name} 正在睡觉`);
  },
  this.feature=['fat','thin']
}

Animal.prototype.eat=function(food){
  console.log(`${this.name} 正在吃 ${food}`);
}

function Cat(name){
  Animal.call(this);
  this.name=name;
}

Cat.prototype=Object.create(Animal.prototype);
Cat.prototype.contructor=Cat;

var cat=new Cat('tony');
var cat1=new Cat('john');
console.log(cat.name);
console.log(cat.sleep());
console.log(cat.eat('猫粮'));
cat.feature.push('small');
console.log(cat.feature);
console.log(cat1.feature);
