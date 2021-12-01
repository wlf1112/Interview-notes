// ES5写法
Function.prototype.myApply=function(context){
  if(typeof this!=='function'){
    console.error('type error');
  }

  let result=null;

  context=context||window;
  context.fn=this;
  if(arguments[1]){
    result=context.fn(...arguments[1])
  }else{
    result=context.fn()
  }
  delete context.fn;
  return result;
}


// ES6写法
Function.prototype.myApply = function (context, args) {
  if (!context || context === null) {
    context = window;
  }

  let fn = Symbol();
  context[fn] = this;
  let result=context[fn](...args);
  delete context[fn];
  return result;
};


let obj={
  value:1
}
function fn(){
  console.log(this.value);
}

fn.myApply(obj,[1,2]);

