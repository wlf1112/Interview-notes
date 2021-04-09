const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

class Promise {
  //定义属性的原则: 1)看属性是否在原型上使用
  //               2)看属性是否公用
  contructor(exector) {
    this.status = PENDING; //默认是PENDING状态
    //将初始化状态放在this上，便于then、catch访问 
    this.value = undefined; //成功的值
    this.reason = undefined; //失败的原因

    //成功存放的数组
    this.onResolvedCallbacks = [];
    //失败存放的数组
    this.onRejectedCallbacks = [];
    //成功函数
    let resolve = (value) => {
      //只有进行中状态才能改变状态
      if (this.status === PENDING) {
        this.value = value;
        //resolve调用后，状态改变
        this.status = RESOLVED;
        //一旦resolved执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }

    //失败函数
    let reject = (reason) => {
      //只有进行中状态才能改变状态
      if (this.status == PENDING) {
        this.reason = reason;
        //reject调用后，状态改变
        this.status = REJECTED;
        //一旦reject执行，调用失败数组的函数
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    //exector会立即执行
    try {
      //把内部resolve和reject传入exector，用户可调用resolve和reject
      exector(resolve, reject);
    } catch (e) {
      //exector执行报错，将错误内容抛出
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    // onRejected如果不是函数，就忽略onRejected，直接扔出错误
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    };
    //声明返回的promise2
    let promise2 = new Promise((resolve, reject) => {
      //状态为RESOLVED，调用onFulfilled
      if (this.status == RESOLVED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            // resolvePromise函数，处理自己return的promise和默认的promise2的关系
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e)
          }
        })

      }
      //状态为REJECTED，调用onRejected
      if (this.status == REJECTED) {
        //异步
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e)
          }
        })

      }
      //当状态state为PENGDING时
      if (this.state === PENDING) {
        //onFulfilled传入到成功数组
        this.onResolvedCallbacks.push(() => {
          //异步
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          })
        })
        //onRejected传入到失败数组
        this.onRejectedCallbacks.push(() => {
          //异步
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          })
        })
      }
    })
    // 返回promise，完成链式
    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  //循环引用报错
  if (x === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }
  //防止多次调用
  let called;
  //x不是null 且x是对象或函数
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      // A+规定，声明then = x的then方法
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          // 成功和失败只能调用一个
          if (called) return;
          called = true;
          // resolve的结果依旧是promise 那就继续解析
          resolvePromise(promise2, y, resolve, reject);
        }, err => {
          // 成功和失败只能调用一个
          if (called) return;
          called = true;
          reject(err); // 失败了就失败了
        })
      } else {
        resolve(x); //直接成功即可
      }
    } catch (e) {
      //也属于失败
      if (called) return;
      called = true;
      // 取then出错了那就不要在继续执行了
      reject(e);
    }
  } else {
    resolve(x);
  }
}
