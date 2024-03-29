# JS知识点梳理

## 变量类型

js是一种弱类型脚本语言。弱类型指的是变量定义时，不需要指定类型，在程序运行过程中会自动判断。

ECMAScript中定义了7种原始类型：

- Boolean
- Number
- String
- Null
- Undefined
- Symbol：代表创建后独一无二且不可改变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题
- BigInt

### JS变量类型判断的方法：

1. typeof
2. instanceof
3. constructor
4. Object.prototype.toString.call() 

#### typeof

- typeof取得的值有：boolean、number、string、object、undefined、symbol、function
- typeof null的结果是object，这是typeof的一个bug
- typeof Array的结果是function，typeof Onject的结果是function

```
console.log(typeof 2);              //number
console.log(typeof true);           //boolean
console.log(typeof 'str');          //string
console.log(typeof []);             //object
console.log(typeof function(){});   //function
console.log(typeof {});             //object
console.log(typeof undefined);      //undefined
console.log(typeof null);           //object

const s =Symbol('s');
console.log(typeof s);              //symbol

```

#### instanceof

- instanceof用来判断对象的类型，不能判断基本数据类型
- 内部运行机制：用来检测构造函数的原型是否在对象object的原型链上
- 举例说明：obj instanceof Object是检测Object的原型是否存在于参数obj的原型链上

```
console.log(2 instanceof Number);                //false
console.log(true instanceof Boolean);            //false 
console.log('str' instanceof String);            //false
console.log([] instanceof Array);                //true
console.log(function(){}  instanceof Function);  //true
console.log({} instanceof Object);               //true

```

#### constructor

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

#### Object.prototype.toString.call()

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
#### 判断数组的方法

- Object.prototype.toString.call()

```
 Object.prototype.toString.call([1,2,3]).slice(8,-1)==='Array'

```
- 通过原型链判断  obj.__proto__==Array.prototype
- ES6 Array.isArray()
- 通过instanceof
- 通过Array.prototype.isPrototypeOf(obj)
  - isPrototypeOf和instanceof的区别：
  - isPrototypeOf()方法用于测试一个对象是否在另一个对象的原型链上
  - instanceof用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上
  - 两者的不同在于：表达式'obj instanceof AFunction'中，obj的原型链是针对AFunction.protoype进行检查的，不是针对AFunction本身


### 值类型和引用类型

- 区别：在参数传递上，值类型是按值传递，引用类型是按共享传递。
- JS这样设计的原因是：
    1. 按值传递的类型，复制一份存入栈内存，一般不会占用太多内存，保证了访问速度
    2. 按引用传递的类型，复制其引用，不是整个复制值，保证了过大的对象不会因为不停复制内容造成内存浪费

值类型用图表示：
![](https://s3.bmp.ovh/imgs/2021/10/e2a9073c3d8d13e4.png)

引用类型用图表示：
![](https://s3.bmp.ovh/imgs/2021/10/23fd7e559abc44b0.png)

### 类型转换

#### 字符串拼接

#### ==

除了`==null`外，其他都一律用`===`

#### if语句和逻辑判断

- truly变量：!!a===true的变量
- falsely变量：!!a===false的变量 (0、NaN、''、null、undefined、false)
  
逻辑判断：例如 10||0 ，可以理解为 truely变量||falsy变量 ，短路输出10

## 原型

protype在规范中的定义是：给其它对象提供共享属性的对象

- 每个class都有显示原型prototype
- 每个实例都有隐式原型__proto__
- 实例的__proto__指向对应class的prototype
- 获取属性或执行方法时，先在自身属性和方法寻找，如果找不到则自动去__proto__中寻找

## 原型链

当试图得到一个对象的某个属性时，会先在这个对象上面找，如果这个对象本身没有这个属性，就会去它的__proto__中寻找，如果找不到，就会到它的__proto__对象的__proto__中寻找...直到某个对象的原型为null为止。如果找到了，就把值返回回来；如果没有找到，就返回undefined。这种从对象本身往__proto__寻找下去的链成为原型链

### 重难点

1. 底层实现js的时候创建了Function，然后这个底层的Function创建了js的Function，所以Function.prototype=Function.__proto__
2. Function创建了Object，让Object创建对象，并设置它为终点，因此Object.prototype.__proto__=null
  

## 继承

### 原型链继承

#### 主要思想

重写子类的prototype属性，将其指向父类的实例

#### 优点

- 简单，易于实现：只需要设置子类的prototype属性为父类的实例
- 继承关系纯粹：生成的实例既是子类的实例，又是父类的实例
- 可通过子类直接访问父类原型链属性和函数

#### 缺点

- 子类所有的实例将共享父类的属性
  如果父类有引用类型的属性，改变子类某个实例的属性值，将会影响其他实例的属性值
- 在创建子类实例时，无法向父类的构造函数传递参数
- 无法实现多继承
- 为子类增加原型对象的属性和函数时，必须放在`new 父类构造函数()`之后

### 构造继承

#### 主要思想

在子类的构造函数通过call()函数改变this指向，调用父类的构造函数，从而将父类实例的属性和函数绑定到子类的this上

#### 优点
- 可以解决子类实例共享父类属性的问题
- 创建子类的实例时，可以向父类传递参数
- 可以实现多继承：通过多次调用call()函数来继承多个父对象

#### 缺点
- 实例只是子类的实例，不是父类的实例
- 只能继承父类实例的属性和函数，不能继承原型对象上的属性和函数
- 无法复用父类的实例函数

### 复制继承

#### 主要思想

- 生成父类的实例
- 通过for...in遍历父类实例的属性和函数
- 将其依次设置为子类实例的属性和函数或者原型对象上的属性和函数

#### 优点

- 支持多继承
- 能同时继承实例的属性和函数与原型对象上的属性和函数
- 可以向父类构造函数中传值

#### 缺点

- 父类所有的属性都需要复制，消耗内存
- 实例只是子类的实例，不是父类的实例

### 组合继承

#### 主要思想

- 在子类构造函数中通过call()函数调用父类的构造函数，将父类实例的属性和函数绑定到子类的this中
- 改变子类的prototype属性，继承父类原型对象的属性和函数

#### 优点

- 既能继承父类实例属性和函数，又能继承原型对象上的属性和函数
- 既是子类的实例，又是父类的实例
- 不存在引用属性共享的问题
- 可以向父类的构造函数中传递参数

#### 缺点

- 父类的实例属性会绑定两次
  - 子类构造函数中，通过call()函数调用了父类的构造函数
  - 改写子类的prototype属性，生成父类的实例时调用了父类的构造函数

### 寄生组合继承

### class继承

class实际上是函数，语法糖

- extends
- super
- 扩展或重写方法

class继承子类的__proto__指向父类

## 作用域

### 作用域

JavaScript中变量的定义和调用在固定的范围中进行，这个范围成为作用域。作用域分为全局作用域、函数作用域和块级作用域。

### 变量提升

变量提升是将变量的声明提升到函数顶部，但是变量的赋值不会被提升

优点：
- 提升性能：解析和预编译过程中的声明提升可以提高性能，让函数可以在执行时预先为变量分配栈空间
- 容错性更好：声明提升可以提高JS代码的容错性，使一些不规范的代码也可以正常执行

缺点：
- 函数执行上下文和全局上下文定义相同名称的变量，函数执行过程中，函数执行上下文中定义的变量会覆盖全局上下文定义的变量，导致结果不是想要的
- for循环中定义的初始变量是全局变量，在函数结束后不会销毁

### 执行上下文

在执行一段JS代码之前，需要先解析代码。解析的时候会先创建全局执行上下文环境，先把代码中即将执行的变量、函数声明都拿出来，变量赋值为undefined，函数先声明好可使用。这一步执行完，才开始正式的执行程序

在一个函数执行之前，也会创建一个函数执行上下文环境，跟全局执行上下文类似，不过函数执行上下文会多出this、arguments和函数的参数

- 全局上下文：变量定义、函数声明
- 函数上下文：变量定义、函数声明、this、arguments

### this

this取什么值，是在函数执行的时候确定的，不是在函数定义的时候确定的

- this指向全局对象：当函数没有所属对象而直接调用时，this指向全局对象
- this指向所属对象(例如obj.fn())
- this指向对象实例：当通过new操作符调用构造函数生成对象实例时，this指向该实例
- this指向call()函数、apply()函数、bind()函数的调用后重新绑定的对象
- 闭包中的this：函数的this变量只能被自身访问，其内部函数无法访问。当遇到闭包时，闭包美不的this关键字无法访问到外部函数的this变量
- 箭头函数中的this：箭头函数不会创建自己的this，而是会从自己作用域链的上一层继承this

## 作用域链

### 自由变量

一个变量在当前作用域没有定义，但被使用了

### 定义

在当前作用域中查找所需变量，但是在该作用域没有找到，这个变量就是自由变量。如果在自己作用域找不到该变量，就去父级作用域查找，依次向上级作用域查找，直到访问到window对象为止，这一层层的关系就是作用域链

### 作用

保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，可以访问到外层环境的变量和函数

### 本质

指向变量对象的指针列表。作用域链的前端始终都是当前执行上下文的变量对象，最后一个对象是全局执行上下文的变量对象（全局对象）

## 闭包

闭包是指有权访问另一个函数作用域变量的函数

### 特点

作用域应用的特殊情况，有两种表现：
- 函数作为参数被传递
- 函数作为返回值被返回

### 优点

 - 保护函数及变量的安全，实现封装，防止变量流入其他环境中发生命名冲突，造成环境污染
 - 可以在内存中维护变量并缓存，提高执行效率

### 缺点

 - 消耗内存
 - 泄漏内存

### 注意

闭包及所有自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方查找

## 作用域链和原型链的区别

### 针对的对象不同
 
 - 作用域链：针对变量
 - 原型链：针对对象的属性、方法

### 形式不同
  
  - 变量取值会到创建这个变量的函数作用域中查找，如果找不到，就去父级作用域查找，依次向上查找，直到访问到window对象为止，这个查找过程形成的链条叫做作用域链
  - 当访问一个对象的属性时，会在这个对象的属性上去找，如果没有找到就会去这个对象的__proto__（即构造函数prototype）上去找，如果没有会一直在__proto__上找，直到最顶层，找不到即为undefined。这种从对象本身到__proto__查找形成的链条叫做原型链

### 顶层不同

- 作用域链的顶层是window，原型链的顶层是Object

## 异步

### 进程和线程

#### 进程

- CPU承担了所有的计算任务
- 进程是CPU资源分配的最小单位
- 在同一个时间内，单个CPU只能执行一个任务，只能运行一个进程
- 如果有一个进程正在执行，其它进程就得暂停
- CPU 使用了时间片轮的算法实现多进程的调度

#### 线程

- 线程是CPU调度的最小单位
- 一个进程可以包括多个线程，这些线程共享这个进程的资源

#### chrome浏览器进程

- 浏览器是多进程的
- 每个tab页是一个进程
- 浏览器上的进程
  - 控制其他子进程的创建和销毁
  - 浏览器界面显示，比如用户交互、前进、后退等操作
  - 将渲染的内容绘制到用户界面上

- 渲染进程
  - 负责页面的渲染、样本执行、事件处理
  - 每个tab页都有一个渲染进程

- 网络进程 处理网络请求、文件访问等操作
- GPU进程 用于3D绘制
- 第三方插件进程

#### 渲染进程

- GUI渲染线程
  - 渲染、布局和绘制页面
  - 当页面需要重绘和回流时，此线程会执行
  - 与JS引擎互斥

- JS引擎线程
  - 负责解析执行JS脚本
  - 只有一个JS引擎线程（单线程）
  - 与GUI渲染线程互斥

- 事件触发线程
  - 用来控制事件循环（鼠标点击、setTimeout、ajax等）
  - 当事件满足出发条件时，把事件放入到JS引擎所有的执行队列中

- 定时器触发线程
  - setInterval和setTimeout所在线程
  - 定时任务并不是由JS引擎计时，而是由定时器出发线程来计时的
  - 计时完毕后会通知事件触发线程

- 异步HTTP请求线程
  - 浏览器有一个单独的线程处理AJAX请求
  - 当请求完毕后，如果有回调函数，会通知事件触发线程

### 单线程

- JS是单线程语言，只能同时做一件事
- JS和DOM渲染共用同一个线程，因为JS可修改DOM结构
- 遇到等待（网络请求，定时任务），不能卡住
- 因此需要异步，异步是基于回调callback函数形式

### 异步和同步的区别

基于JS是单线程语言，异步不会阻塞代码执行，同步会阻塞代码执行

### 异步的应用场景

- 网络请求，如ajax，图片加载
- 定时任务，如setTimeout

### Promise

Promise是为了解决callback hell

#### 三种状态

- pending resolved rejected
- pending ——> resolved 或 pending ——> rejected
- 变化不可逆

#### 状态的表现和变化

- 状态的表现
  - pending状态，不会触发then和catch
  - resolved状态，会触发后续的then回调函数
  - rejected状态，会触发后续的catch回调函数

#### then和catch对状态的影响

- then正常返回resolved，里面有报错则返回返回rejected
- catch正常返回resolved，里面有报错则返回rejected

### event loop

event loop是异步回调实现的原理

#### JS如何执行

- 从前到后，一行一行执行
- 如果某一行执行报错，则停止下面代码的执行
- 先把同步代码执行完，再执行异步

#### event loop过程

- 同步代码，一行一行放在call back执行
- 遇到异步，会先“记录”下，等待时机（定时、网络请求等）
- 时机到了，就移动到Callback Queue
- 如Call Stack为空（即同步代码执行完），Event loop开始工作
- Event loop轮询查找Callback Queue，如有则移动到Call Stack执行
- 然后继续轮询查找

#### DOM事件和event loop

- JS是单线程的
- 异步（setTimeout，ajax等）使用回调，基于event loop
- DOM事件也使用回调，基于event loop

#### event loop和DOM渲染

- JS是单线程的，而且和DOM渲染共用一个线程
- JS执行的时候，得留一些时机供DOM渲染
- 每次Call Stack清空（即每次轮询结束），即同步任务执行完，都是DOM重新渲染的机会，DOM结构如有改变则重新渲染
- 然后再去触发下一次Event Loop

### async/await

背景：Promise then catch链式调用也是基于回调函数。async/await是同步语法，彻底消灭回调函数

#### async/await和Promise的关系

- async/await是消灭异步回调的终极武器，但和Promise并不互斥，二者相辅相成
- 执行async函数，返回的是Promise对象。await相当于Promise的then
- try..catch可捕获异常，代替了Promise的catch
- 注意：await都可以看作是异步回调 callback 的内容

### 异步的本质

- async/await是消灭异步回调的终极武器
- JS还是单线程，还得有异步，还得是基于event loop
- async/await只是一个语法糖

### for...of

- for...in（以及forEach for）是常规的同步遍历
- for..of常用于异步的遍历

### 宏任务macroTask和微任务microTask

#### 宏任务和微任务

##### 宏任务

- 页面的大部分任务是在主任务上执行的，比如下面这些都是宏任务
  - 渲染事件（DOM解析、布局、绘制）
  - 用户交互（鼠标点击、页面缩放）
  - JS脚本执行
  - 网络请求
  - 文件读写

- 宏任务会添加消息到消息队列的尾部，当主程序执行到该消息的时候就会执行
- 每次从事件队列中获取一个事件回调并放到执行栈中的就是一个宏任务，宏任务执行过程中不会执行其它内容
- 每次宏任务执行完毕后会进行GUI渲染线程的渲染，然后再执行下一个宏任务
- 宏任务：script(整体代码)、setTimeout、setInterval、setImmediate、I/O、UI rendering
- 宏任务的颗粒度大，不适合需要精简控制的任务
- 宏任务：setTimeout，setInterval，Ajax，DOM事件
- 微任务：Promise，async/await
- 微任务执行时机比宏任务要早

##### 微任务

- 宏任务结束后会进行渲染然后执行下一个宏任务
- 微任务是当前宏任务执行后立即执行的宏任务
- 当宏任务执行完，就达到了检查点，会先将执行期间所产生的所有微任务都执行完再去进行渲染
- 微任务是由V8引擎控制的，在创建全局执行上下文的时，也会在V8引擎内创建一个微任务队列
- 微任务：process.nextTick(Nodejs)，Promise,Object.observe,MutationObserver


#### 宏任务和微任务的区别

- 宏任务：DOM渲染后触发，如setTimeout
- 微任务：DOM渲染前触发，如果Promise

#### 从event loop角度解析为何微任务执行更早

- 微任务是ES6语法规定的
- 宏任务是由浏览器规定的

## JS Web API

### 从JS基础知识到JS Web API

- JS基础知识，规定语法（ECMA 262标准）
- JS Web API，网页操作的API（W3C标准）
- 前者是后者的基础

#### attr和property的区别

- property：修改对象属性，不会体现到html结构（指html标签）中
- attribute：修改html属性，会改变html结构（指html标签）
- 两者都可能引起DOM重新渲染

## ajax

### XMLHttpRequest

#### readyState
- 0：(未初始化)还没有调用send()方法
- 1：(载入)已调用send()方法，正在发送请求
- 2:（载入完成）send()方法执行完成，已经接收到全部响应
- 3：(交互)正在解析响应内容
- 4：(完成)响应内容解析完成，可以在客户端调用

#### status
- 2xx 表示完成处理请求，如200
- 3xx 需要重定向，浏览器直接跳转，如果301,302,304
- 4xx 客户端请求错误，如404 403
- 5xx 服务端错误

### 跨域：同源策略，跨域解决方案

#### 同源策略

- ajax请求时，浏览器要求网页和server必须同源（安全）
- 同源：协议、域名、端口，三者必须一致

#### 加载图片 css js可无视同源策略

- <img src=跨域的图片地址> 可用于统计打点，可使用第三方统计服务
- <link href=跨域的图片地址>  可使用CDN
- <script src="跨域的js地址"></script> 可使用CDN，实现JSONP

#### 跨域

- 所有的跨域，都必须经过server端允许和配合
- 未经server端允许就实现跨域，说明浏览器有漏洞
 
重点：要知道JSONP的原理

## 存储

### cookie

#### cookie

- 本身用于浏览器和server通讯
- 被“借用”到本地存储来
- 可用document.cookie='...'进行修改

#### 缺点
- 存储大小最大4k
- http请求时需要发送到服务端，增加请求数量
- 只能用document.cookie='...'来修改，太过简陋

### localStorage和sessionStorage

- HTML5专门为存储而设计，最大可存5M
- API简单易用 setItem getItem
- 不会随着http请求被发送出去

#### 二者的区别

- localStorage数据会永久存储，除非代码或手动删除
- sessionStorage数据只存在于当前会话，浏览器关闭则清空
- 一般用localStorage会更多一些


