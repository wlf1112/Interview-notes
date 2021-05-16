/**
 * this的使用场景
 */

//作为普通函数
function fn1() {
  console.log(this)
}
fn1() //window

//call
fn1.call({
  x: 100
}) //{x:100}

//bind
const fn2 = fn1.bind({
  x: 200
})
fn2() //{x:200}

//在对象方法被调用
const zhangsan = {
  name: 'zhangsan',
  sayHi() {
    //this即当前对象
    console.log(this);
  },
  wait() {
    setTimeout(function () {
      //this === window
      console.log(this);
    });
  }
}
zhangsan.sayHi()
zhangsan.wait()

//箭头函数
const lisi = {
  name: 'zhangsan',
  sayHi() {
    //this即当前对象
    console.log(this);
  },
  wait() {
    setTimeout(() => {
      //this即当前对象
      console.log(this);
    });
  }
}
lisi.sayHi()
lisi.wait()

//在class方法中调用
class People {
  constructor(name) {
    this.name = name
    this.age = 20
  }
  sayHi() {
    console.log(this)
  }
}

const wangwu = new People('王五')
wangwu.sayHi()