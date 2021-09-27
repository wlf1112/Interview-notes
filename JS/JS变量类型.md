### JS变量类型

js是一种弱类型脚本语言。弱类型指的是变量定义时，不需要指定类型，在程序运行过程中会自动判断。

ECMAScript中定义了6种原始类型：

- Boolean
- Number
- String
- Null
- Undefined
- Symbol

### JS变量类型判断的方法：

1. typeof
2. instanceof
3. constructor
4. Object.prototype.toString.call() 

#### typeof

- typeof取得的值有：boolean、number、string、object、undefined、symbol、function
- typeof null的结果是object，这是typeof的一个bug

```

```

### instanceof

- instanceof用来判断对象的类型，不能判断基本数据类型
- 内部运行机制：判断在原型链中能否找到该类型的原型，如果能找到，返回true

### constructor

- 判断数据类型，可以用来判断基本数据类型
- 对象实例可以通过constructor对象访问它的构造函数
- 存在的问题：如果改变了实例的原型，constructor就不能准确地判断数据类型

### Object.prototype.toString.call()

- Object.prototype.toString.call()可以得到对象的具体类型




