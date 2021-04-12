//finally 最终的  es9/node11版本支持

let p = new Promise((resolve, reject) => {
  reject(1000);
})

//Promise.resolve的实现
//1)如果放的是普通值会将这个值包装成promise，如果放的是promise会等待这个
//promise执行完后再继续执行
Promise.resolve(1).then(data => {
  console.log(data);
})

Promise.prototype.finally = function (cb) {
  return p.then(data => {
    //Promise.resolve()可以等待这个Promise执行完成
    return Promise.resolve(cb()).then(() => data);
    //finally传入的函数无论成功或者失败，都会执行
    //return data; //如果是成功走到下一个成功里
  }, err => {
    return Promise.resolve(cb()).then(() => {
      throw err;
    });
  })
}

p.finally(() => { //返回的是一个Promise实例
  console.log('最终的');
}).then(data => {
  console.log(data);
}).catch(e => {
  console.log(e);
})