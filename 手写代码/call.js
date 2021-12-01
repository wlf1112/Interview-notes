// call的本质：1.改变了当前函数的this指向  
//             2.执行当前函数

//ES5写法
Function.prototype.myCall=function(context){
  if(typeof this!=='function'){
    console.error('type error');
  }
  //获取参数
  let args=[...arguments].slice(1),
    result=null;
  
  //判断context是否传入，如未传入则设置为window
  context=context||window;
  //将调用函数设为对象的方法
  context.fn=this;
  //调用函数
  result=context.fn(...args);
  //将属性删除
  delete context.fn;
  return result;
}

// ES6实现
Function.prototype.myCall=function(context,...args){
  if(!context||context===null){
    context=window;
  }

  // 创建唯一的key值，作为我们构造的context内部方法名
  let fn=Symbol();
  // this指向调用call的函数
  context[fn]=this;
  let result=context[fn](...args);
  delete context[fn];
  return result;
}

let obj={
  value:1
}

function fn(){
  console.log(this.value)
}

fn.myCall(obj,2,3);