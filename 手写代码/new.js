function myNew() {
  //获取第一个参数
  let Constructor = [].shift.call(arguments);
  //定义返回的obj
  let obj = {};
  //obj继承原型上的方法
  obj._proto_ = Constructor.prototype;
  //继承构造函数实例上的属性
  let r = Constructor.apply(obj, arguments);
  //返回obj
  return r instanceof Object ? r : obj;
}


//测试
function Animal(type) {
  this.type = type;
  //如果当前构造函数返回的是一个引用类型，需要把这个对象（或者函数）返回
  return {name:'jw'}
}
Animal.prototype.say = function () {
  console.log("say");
};

let animal = new myNew(Animal, "哺乳类");
//console.log(animal.type);
console.log(animal)
