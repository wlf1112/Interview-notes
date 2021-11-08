/**
 * 1.bind不会调用原来的函数，可以改变原来函数内部的this指向
 * 2.返回的是原函数改变this之后产生的新函数
 * 3.如果有的函数我们不需要立即调用，但是又想改变这个函数内部的this指向，此时使用bind
 * 4.如果有一个按钮，当我们点击了之后，就禁用这个按钮，三秒之后开启这个按钮
 */

//  普通函数调用
var o={
    name:'andy'
}

function fn(a,b,c){
    console.log(this);
    console.log(a+b+c);
}

var f=fn.bind(o,1,2);
f(3);


// 定时器绑定
var btn=document.querySelector('button');
btn.onclick=function(){
    this.disabled=true;   // this指的是btn按钮
    setTimeout(function(){
        this.disabled=false;  //此时定时器里面的this指向btn
    }.bind(this),3000)// this指向的是btn对象
}


