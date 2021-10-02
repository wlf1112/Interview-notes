/**
 * JS变量提升的缺点：
 * 1.函数执行上下文和全局上下文定义相同名称的变量，函数执行过程中，函数执行上下文中定义的变量会覆盖全局上下文定义的变量，导致结果不是想要的
 * 2.for循环中定义的初始变量是全局变量，在函数结束后不会销毁
 */

//第一种情况
var tmp=new Date();
function fn(){
    console.log(tmp);
    if(false){
        var tmp='hello world';
    }
}
fn();//undefined

//第二种情况
var tmp="hello world";
for(var i=0;i<tmp.length;i++){
    console.log(tmp[i]);
}

console.log(i);