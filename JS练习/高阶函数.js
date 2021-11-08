/**
 * 高阶函数是对其他函数进行操作的函数，它接受函数作为参数或将函数作为返回值输出
 */

// 接受函数作为参数:典型的是回调函数
function fn(callback){
    callback&&callback()
}

fn(function(){alert('hi')})

// 此时fn是高阶函数

// 将函数作为返回值
function fn1(){
    return function(){}
}

fn1();