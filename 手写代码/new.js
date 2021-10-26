/**
 * 手写new
 * 1.ES5实现
 * 2.ES6实现
 */

//ES5实现
function myNew(){
  let newObject=null
  //获取构造函数
  let constructor=Array.prototype.shift.call(arguments)
  if(typeof constructor!=='function'){
    console.error('type error')
    return;
  }

  newObject=Object.create(constructor.prototype);
  let result=null
  result=constructor.apply(newObject,arguments)
  
  let flag=result && (typeof result==='object' || typeof result==='function')
  return flag ? result : newObject;
}


//ES6实现
function myNew(fn,...args){
  let obj=Object.create(fn.prototype)
  let res=fn.call(obj,...args)
  if(res && (typeof res==='object'|| typeof res==='function')){
    return res
  }
  return obj
}


//构造函数形式一
// function Person(name,age){
//   this.name=name
//   this.age=age
// }

//构造函数形式二：返回对象
// function Person(name,age){
//   this.name=name
//   this.age=age
  
//   return {
//     info:`${this.name}的年龄是${this.age}`
//   }
// }

//构造函数形式三
function Person(name,age){
  this.name=name
  this.age=age

  return 'demo'
}


Person.prototype.say=function(){
  console.log(this.age);
}

let p1=myNew(Person,'lihua',18)
console.log(p1);
p1.say()