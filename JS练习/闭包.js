/**
 * 闭包经典练习题
 */

//1.ul中有若干个li，每次单击li，输出li的值（见闭包.html文件）

//2.定时器问题
var arr=['one','two','three'];
for(var i=0;i<arr.length;i++){
    setTimeout(function(){
        console.log(arr[i]);
    },i*1000);
}

//方法1
var arr=['one','two','three'];
for(let i=0;i<arr.length;i++){
    setTimeout(function(){
        console.log(arr[i]);
    },i*1000);
}

//方法2
var arr=['one','two','three'];
for(var i=0;i<arr.length;i++){
    (function(idx){
        setTimeout(function(){
            console.log(arr[idx]);
        },idx*1000);
    })(i)
}

//3.作用域链问题
var name='outer';
var obj={
    name:'inner',
    method:function(){
        return function(){//在匿名函数中this指向全局window，相当于一个外部变量，形成闭包
            return this.name;
        }
    }
}
console.log(obj.method()());

//如果想要输出obj对象自身的name属性，修改如下：
var name='outer';
var obj={
    name:'inner',
    method:function(){
        var _this=this;
        return function(){
            return _this.name;
        }
    }
}
console.log(obj.method()());

//4.多个相同函数名问题
function foo(a,b){
    console.log(b);
    return{
        foo:function(c){
            return foo(c,a)
        }
    }
}

var x=foo(0); x.foo(1); x.foo(2); x.foo(3);
var y=foo(1).foo(1).foo(3);
var z=foo(0).foo(1);  z.foo(2); z.foo(3);