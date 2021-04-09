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
    this.reason = undefined; //失败的值

    //成功函数
    let resolve = (value) => {
      //只有进行中状态才能改变状态
      if (this.status === PENDING) {
        this.value = value;
        this.status = RESOLVED;
      }
    }

    //失败函数
    let reject = (reason) => {
      //只有进行中状态才能改变状态
      if (this.status == PENDING) {
        this.reason = reason;
        this.status = REJECTED;
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

  }
}