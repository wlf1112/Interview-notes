const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

//因为所有的promise都遵循这个规范，规定这里这个写法应该兼容所有的promise
const resolvePromise = (promise2, x, resolve, reject) => {
  //判断x的值和promise2是不是同一个，如果是同一个，就不要再等待了，直接出错即可
  if (x === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }

  //判断数据类型 typeof constructor instanceof toString
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    let called = false; //内部测试的时候，会成功和失败都调用
    try {
      let then = x.then; //取then有可能then属性是通过defineProperty来定义的
      if (typeof then === 'function') { //当前有then方法，我就姑且认为他是一个promise
        then.call(x, y => { //y可能还是promise,直到解析出来的结果是一个普通值为止
          if (called) {
            return;
          }
          called = true;
          resolvePromise(promise2, y, resolve, reject); //采用promise的成功结果将值向下传递
        }, r => {
          if (called) {
            return;
          }
          called = true; //防止多次调用成功或失败
          reject(r); //采用失败结果向下传递
        }); //能保证不用再次取then的值
      } else {
        resolve(x); //说明x是一个普通的对象，直接成功即可
      }
    } catch (e) {
      //promise失败了，有可能还能调用成功
      if (called) {
        return
      }
      called = true;
      reject(e);
    }
  } else {
    //x是一个普通值
    resolve(x); //直接让promise2成功即可
  }
}

class Promise {
  //定义属性的原则: 1)看属性是否在原型上使用
  //               2)看属性是否公用
  constructor(executor) {
    this.status = PENDING;

    //将初始化状态放在this上，便于then、catch访问 
    this.value = undefined;
    this.reason = undefined;
    //成功存放的数组
    this.onResolvedCallbacks = [];
    //失败存放的数组
    this.onRejectedCallbacks = [];

    //成功函数
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = RESOLVED;
        this.value = value;

        //一旦resolved执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }

    //失败函数
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }

    try {
      //exector会立即执行
      //把内部resolve和reject传入exector，用户可调用resolve和reject
      executor(resolve, reject);
    } catch (e) {
      //exector执行报错，将错误内容抛出
      reject(e)
    }

  }
  then(onFulfilled, onRejected) {
    //onFulfilled onRejected是可选参数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err;
    }

    //声明返回的promise2
    let promise2 = new Promise((resolve, reject) => {
      //状态为RESOLVED，调用onFulfilled
      if (this.status === RESOLVED) {
        setTimeout(() => { //宏任务  为了保证promise2已经new完成
          //加try catch的原因是：异步的报错不能被上面的try catch捕获
          try {
            let x = onFulfilled(this.value);
            // resolvePromise函数，处理自己return的promise和默认的promise2的关系
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }

      //状态为REJECTED，调用onRejected
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            console.log(e);
            reject(e);
          }
        }, 0);
      }

      //当状态state为PENGDING时
      if (this.status === PENDING) {
        //onFulfilled传入到成功数组
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);

        })

        //onRejected传入到失败数组
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this, reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);

        })
      }
    })
    return promise2;
  }
}

//延迟对象
Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  })
  return dfd
}

module.exports = Promise