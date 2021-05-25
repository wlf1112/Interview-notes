/**
 * jquery1.5之后的第一种写法
 */
var ajax = $.ajax('data.json')
ajax.done(function () {
    console.log('success1');
  })
  .fail(function () {
    console.log('error');
  })
  .done(function () {
    console.log('success2');
  })
console.log(ajax); //返回一个deferred对象

/**
 * jquery1.5之后的第二种写法
 */
var ajax = $.ajax('data.json')
ajax.then(function () {
    console.log('success 1');
  }, function () {
    console.log('error 1');
  })
  .then(function () {
    console.log('success 2');
  }, function () {
    console.log('error 2');
  })
