//apply和call的区别在于传递的参数是数组
Function.prototype.apply = function (context, array) {
  context = context ? Object(context) : window;
  context.fn = this;

  let result;
  if (!array) {
    context.fn();
  }else{
    let args = [];
    for (let i = 1; i < arr.length; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')');
  }
  
  delete context.fn;
  return result;
}
