import 'babel-polyfill'

function loadImg(src) {
  const promise = new Promise((resolve, reject) => {
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

var src1 = 'https://www.imooc.com/static/img/index/logo2020.png'
var src2 = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"

const load = async function () {
  const result1 = await loadImg(src1)
  console.log(result1)
  const result2 = await loadImg(src2)
  console.log(result2)
}

load()