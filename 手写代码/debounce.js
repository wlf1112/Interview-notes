function debounce(fn, delay = 500) {
  //timer是在闭包中
  let timer = null

  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay);
  }
}

const input1 = document.getElementById('input1')
input1.addEventListener('keyup', debounce(function () {
  console.log(input1.value);
}), 600)