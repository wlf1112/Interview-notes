function loadImg(src, callback, fail) {
  var img = document.createElement('img')
  img.onload = function () {
    callback(img)
  }
  img.onerror = function () {
    fail()
  }
  img.src = src
}

var src = 'http://www.imooc.com/static/img/index/logo_new.png'
loadImg(src, function (img) {
  console.log(img.width);
}, function () {
  console.log('failed');
})