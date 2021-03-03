Array.prototype.map=function(callbackFn,thisArg){
  //处理数组类型异常
  if(this===null||this===undefined){
    throw new TypeError("Cannot read property 'map' of null or undefined");
  }
  //处理回调类型异常
  if(Object.prototype.toString.call(callbackFn)!="[object Function]"){
    throw new TypeError(callbackFn + 'is not a function');
  }

  //转换为对象
  let O=Object(this);
  let T=thisArg;

  //保证len是数字且是整数
  let len=O.length>>>0;
  let A=new Array(len);
  for(let k=0;k<len;k++){
    if(k in O){
      let kValue=O[k];
      let mappedValue=callbackFn.call(T,kValue,k,O);
      A[k]=mappedValue;
    }
  }
  return A;
}

//测试
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
