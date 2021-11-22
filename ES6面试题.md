#### 如何在ES5环境下实现let

```
// ES6中的let
for(let i=0;i<10;i++){
    console.log(i);
}
console.log(i)

// babel转化后
for(var _i=0;_i<10;_i++){
    console.log(_i);
}
console.log(i);

```

可以通过自执行函数来模拟块级作用域

```
(function(){
    for(var i=0;i<5;i++){
        console.log(i)
    }
})();

console.log(i);
```

#### 如何在ES5环境下实现const

实现const的关键在于Object.defineProperty()这个API。用于在一个对象上增加或修改属性，并返回这此对象。
Object.defineProperty()接收三个参数：

> Object.defineProperty(obj,prop,desc)

|   参数    |   说明    |
|   ----    |   ----    |
|    obj    |    要定义属性的对象       |
|   prop    |    要定义或修改的属性的名称   |
|   descriptor  |   要定义或修改的属性描述符    |

对象里目前存在的属性描述符有两种形式：数据描述符和存取描述符。
数据描述符：具有值的属性，该值可以是可写的，也可以是不可写的
存取描述符：由getter函数和setter函数描述的属性

|   属性描述符  |   说明    |   默认值  |
|   ----      |    ----   |   ----   |
|   value(数据描述符)     | 该属性对应的值。可以是任何有效的JavaScript值（数值、对象、函数等）| undefined|
|   writable(数据描述符 )    |  当且仅当该属性的writable键值为true时，属性的值（即上面的value），才能被赋值运算符改变。 |   false   |
|   get(存取描述符) |   一个给属性提供getter的方法，如果没有getter则为undefined。当访问该属性时，会调用此函数 | undefined |
|   set(存取描述符) | 一个给属性提供setter的方法，如果没有setter则为undefined。当属性值被修改时，触发执行该方法 |   undefined   |
|   configurable   |    当且仅当该属性的configurable键值为true时，该属性的描述符才能被改变，同时该属性也能从对应的对象上被删除  | false |
|   enumerable   |  当且仅当该属性的enumerable键值为true时，该属性才会出现在对象的枚举属性中    |   false   |

对于const不可修改的特性，我们通过设置writable属性来实现：

```
var _const=function _const(data,value){
    window.data=value;// 把要定义的data挂载到window下，并赋值value
    Object.defineProperty(window,data,{ // 利用Object.defineProperty劫持当前对象，并修改其属性描述符
        enumerable:false,
        configurable:false,
        get:function(){
            return value
        },
        set:function(data){
            if(data!==value){
                throw new TypeError('Assignment to constant variable');
            }else{
                return value;
            }
        }
    })
}

_const('a',10);
console.log(a);
delete(a);
console.log(a);
a=20;
```

