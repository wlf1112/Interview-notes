/**
 * js中的this指向
 */

//1.this指向全局对象
var value=10;
var obj={
    value:100,
    method:function(){
        var foo=function(){
            console.log(this.value);
            console.log(this);
        }
        foo();
        return this.value;
    }
}

obj.method();//10  window

//2.this指向所属对象
var value=10;
var obj={
    value:100,
    method:function(){
        var foo=function(){
            console.log(this.value);
            console.log(this);
        }
        foo();
        return this.value;
    }
}

console.log(obj.method());//10  window

//3.this指向对象实例
var number=10;
function Person(){
    number=20;
    this.number=30;
}

Person.prototype.getNumber=function(){
    return this.number;
}

var p=new Person();
console.log(p.getNumber());  //30

//4.this指向call()函数、apply()函数、bind()函数调用后重新绑定的对象
var value=10;
var obj={
    value:20
}
var method=function(){
    console.log(this.value);
}

method();//10
method.call(obj);//20
method.apply(obj);//20

var newMethod=method.bind(obj);
newMethod();//20

//5.闭包中的this
var user={
    sport:'basketball',
    data:[
        {name:'kingx1',age:11},
        {name:'kingx2',age:12},
    ],
    clickHandler:function(){
        this.data.forEach(function(person){
            //foreach循环是一个匿名函数，this指向全局window
            console.log(this);
            console.log(person.name+'is playing' + this.sport);
        })
    }
}

user.clickHandler();
//'kingx1 is playing undefined'
//'kingx2 is playing undefined'