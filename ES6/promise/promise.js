function loadImg(src) {
  const promise = new Promise(function (resolve, reject) {
    var img = document.createElement('img')
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

var src = 'http://www.imooc.com/static/img/index/logo_new.png'
var result = loadImg(src)

result.then(function (img) {
  console.log(img.width);
}, function () {
  console.log('failed');
})

result.then(function (img) {
  console.log(img.height);
})