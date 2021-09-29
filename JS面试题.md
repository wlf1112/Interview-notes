# JS知识点梳理

## 变量类型

js是一种弱类型脚本语言。弱类型指的是变量定义时，不需要指定类型，在程序运行过程中会自动判断。

ECMAScript中定义了6种原始类型：

- Boolean
- Number
- String
- Null
- Undefined
- Symbol
- Object

### JS变量类型判断的方法：

1. typeof
2. instanceof
3. constructor
4. Object.prototype.toString.call() 

#### typeof

- typeof取得的值有：boolean、number、string、object、undefined、symbol、function
- typeof null的结果是object，这是typeof的一个bug

```
console.log(typeof 2);              //number
console.log(typeof true);           //boolean
console.log(typeof 'str');          //string
console.log(typeof []);             //object
console.log(typeof function(){});   //function
console.log(typeof {});             //object
console.log(typeof undefined);      //undefined
console.log(typeof null);           //object

```

### instanceof

- instanceof用来判断对象的类型，不能判断基本数据类型
- 内部运行机制：判断在原型链中能否找到该类型的原型，如果能找到，返回true

```
console.log(2 instanceof Number);                //false
console.log(true instanceof Boolean);            //false 
console.log('str' instanceof String);            //false
console.log([] instanceof Array);                //true
console.log(function(){}  instanceof Function);  //true
console.log({} instanceof Object);               //true

```

### constructor

- 判断数据类型，可以用来判断基本数据类型
- 对象实例可以通过constructor对象访问它的构造函数
- 存在的问题：如果改变了实例的原型，constructor就不能准确地判断数据类型

```
console.log((2).constructor===Number);                  //true
console.log((true).constructor===Boolean);              //true
console.log(('str').constructor===String);              //true
console.log(([]).constructor===Array);                  //true
console.log((function(){}).constructor===Function);     //true
console.log(({}).constructor===Object);                 //true

```

### Object.prototype.toString.call()

- Object.prototype.toString.call()可以得到对象的具体类型

```
var a =Object.prototype.toString;

console.log(a.call(2));                     //'[object Number]'     
console.log(a.call(true));                  //'[object Boolean]'
console.log(a.call('str'));                 //'[object String]'
console.log(a.call([]));                    //'[object Array]'
console.log(a.call(function(){}));          //'[object Function'
console.log(a.call({}));                    //'[object Object]'

```

### 值类型和引用类型

- 区别：在参数传递上，值类型是按值传递，引用类型是按共享传递。
- JS这样设计的原因是：
    1. 按值传递的类型，复制一份存入栈内存，一般不会占用太多内存，保证了访问速度
    2. 按引用传递的类型，复制其引用，不是整个复制值，保证了过大的对象不会因为不停复制内容造成内存浪费

## 原型

protype在规范中的定义是：给其它对象提供共享属性的对象

- 所有的引用类型（数组、对象、函数），都具有对象特性，可以自由扩展属性（null除外）
- 所有的引用类型（数组、对象、函数），都具有__proto__属性，属性值是一个普通的对象
- 所有的函数，都有一个prototype属性，属性值也是一个普通的对象
- 所有的引用类型（数组、对象、函数），__proto__属性指向它的构造函数的prototype属性值

当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proro__（即它的构造函数的prototype）中寻找

## 原型链

当试图得到一个对象的某个属性时，会先在这个对象上面找，如果这个对象本身没有这个属性，就会去它的__proto__中寻找，如果找不到，就会到它的__proto__对象的__proto__中寻找...直到某个对象的原型为null为止。如果找到了，就把值返回回来；如果没有找到，就返回undefined。这种从对象本身往__proto__寻找下去的链成为原型链

## 作用域

### 作用域

JavaScript中变量的定义和调用在固定的范围中进行，这个范围成为作用域。作用域分为全局作用域、函数作用域和块级作用域。

### 变量提升

变量提升是将变量的声明提升到函数顶部，但是变量的赋值不会被提升

### 执行上下文



## 作用域链

