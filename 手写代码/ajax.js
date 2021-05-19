/**
 * 简易ajax请求:ES5
 * @param {url} 请求地址 
 * @param {successFn} 回调函数 
 */
function ajax(url, successFn) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readystate === 4) {
      if (xhr.status === 200) {
        successFn(xhr.reponseText)
      }
    }
  }
  xhr.send(null)
}

/**
 * 简易ajax请求：Promise
 * @param {url} 请求地址
 */
function ajax(url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.reponseText))
        } else if (xhr.status === 404) {
          reject(
            new Error('404 not found')
          )
        }
      }
    }
    xhr.send(null)
  })
  return p
}

ajax('/test.json').then((val) => {
  console.log(val);
}).catch((err) => {
  console.error(err)
})
