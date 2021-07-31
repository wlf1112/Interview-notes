function loadImg(src) {
  const promise = new Promise(function (resolve, reject) {
    const img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject()
    }
    img.src = src
  })
  return promise
}


var src = 'https://www.imooc.com/static/img/index/logo2020.png'
var result = loadImg(src)
result.then(function (img) {
  console.log(img.width)
}, function () {
  console.log('fail')
})

result.then(function (img) {
  console.log(img.height)
})