// ES5实现
// 总结：一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造函数。提供的this值被忽略
//      同时调用时的参数被提供给模拟函数
// Function.prototype.myBind=function(){
//   if(typeof this!=='function'){
//     console.error('type error');
//   }

//   var self=this;
//   var args=Array.prototype.slice.call(arguments,1);

//   var fn=function(){};
//   var fBind=function(){
//     var bindArgs=Array.prototype.slice.call(arguments);
//     return self.apply(this instanceof fn?this:context,args.concat(bindArgs))
//   }
//   fn.prototype=this.prototype;
//   fBind.prototype=new fn();
//   return fBind;
// }


// ES6实现
Function.prototype.myBind=function(context,...args){
  if(!context||context==null){
    console.error('type error');
  }

  let fn=Symbol();
  context[fn]=this;
  let _this=this;

  const result=function(...innerArgs){
    // 第一种情况：若是将bind 绑定后的函数作为构造函数，通过new造作赋使用，则不绑定传入
    // 的this,而是将this指向实例化出来的对象
    // 此时new操作符用this指向result实例对象，而result又继承自传入的_this 根据原型链可知：
    // this.__proto__===result.prototype
    // this.__proto__.__proto__===result.prototype.__ptoto__===_this.prototype
    if(this instanceof _this===true){
      this[fn]=_this;
      this[fn](...[...args,...innerArgs]);
    }else{
      context[fn](...[...args,...innerArgs]);
    }
  }
  // 如果绑定的是构造函数，那么需要继承构造函数原型属性和方法
  // 实现继承的方式，使用Object.create
  result.prototype=Object.create(this.prototype);
  return result;
}

var value=2

var foo={
  value:1
}

function bar(name,age){
  this.habit='shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend='kevin';
var bindFoo=bar.myBind(foo,'daisy');
var obj=new bindFoo('18');
console.log(obj.habit);
console.log(obj.friend);