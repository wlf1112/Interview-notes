/*
作用域链：当访问一个变量时，解释器会首先在当前作用域查找标识符，如果没有找到，
         就去父作用域找，直到找到该变量的标识符或者不在父作用域中，这就是作用域链。
         每个子函数都会拷贝上级的作用域，形成一个作用域的链条。

闭包的本质：当前环境中存在指向父级作用域的引用。

闭包的表现形式: 1.返回一个函数
              2.作为函数参数传递
              3.在定时器、事件监听、Ajax请求、跨窗口通信、Web Worker或者任何异步
                中，只要使用了回调函数，实际上就是在使用闭包
              4.IIFE（立即执行函数表达式）创建闭包，保存了全局作用域window和当前函数的作用域，
                因此可以使用全局变量
*/
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, 0)
} //6

// 改进方案一：立即执行函数
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j)
    }, 0)
  })(i)
}

//改进方案二：传递参数
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer(j) {
    console.log(j)
  }, 0, i)
}

//改进方案三：let
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0);
}