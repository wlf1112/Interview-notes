/**
 * 防抖：短时间内大量触发同一事件，只执行一次函数
 * 原理：设置一个定时器，约定在xxx毫秒后再出发事件处理，每次触发事件都会重新设置计时器，知道xx毫秒内无第二次操作
 * 应用：搜索框/滚动条的监听事件处理
 * 
 * @param {事件或执行函数} fn 
 * @param {延时} delay 
 * @returns 
 */

function debounce(fn, delay = 500) {
  //timer是在闭包中
  let timer = null

  return function () {
    const args=arguments;
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay);
  }
}

const input1 = document.getElementById('input1')
input1.addEventListener('keyup', debounce(function () {
  console.log(input1.value);
}), 600)