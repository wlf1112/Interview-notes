//get请求
const xhr = new XMLHttpRequest()
xhr.open("GET", "/api", false)
xhr.onreadystatechange = function () {
  //这里的函数异步执行
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      alert(xhr.responseText)
    }
  }
}