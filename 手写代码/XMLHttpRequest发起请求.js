//get请求
const xhr = new XMLHttpRequest()
xhr.open("GET", "/api", true)  //表示异步请求
xhr.onreadystatechange = function () {
  //这里的函数异步执行
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      alert(xhr.responseText)
    }
  }
}


//post请求
const xhr=new XMLHttpRequest()
xhr.open('POST','/login',true)  //表示异步请求
xhr.onreadystatechange = function () {
  //这里的函数异步执行
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      alert(xhr.responseText)
    }
  }
}

const postData={
  userName:'zhangsan',
  password:'xxx'
}
xhr.send(JSON.stringify(postData))