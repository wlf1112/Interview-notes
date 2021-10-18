# HTTP基础知识点整理

## http常见的状态码有哪些

### 状态码分类 

- 1xx 服务器收到请求
- 2xx 请求成功，如200
- 3xx 重定向，如302
- 4xx 客户端错误，如404
- 5xx 服务端错误，如500
  
## 常见状态码

- 200 成功
- 301 永久重定向（配合location，浏览器自动处理）
- 302 临时重定向（配合location，浏览器自动处理）
- 304 资源未被修改
- 404 资源未找到
- 403 没有权限
- 500 服务器错误
- 504 网关超时

## http method

### 传统method

- get 获取服务器数据
- post 向服务器提交数据

### 现在的method

- get 获取数据
- post 新建数据
- patch/put 更新数据
- delete 删除数据

## http常见的header有哪些

### 常见的Request Headers

- Accept 浏览器可接收的数据格式
- Accept-Encoding 浏览器可接收的压缩算法，如gzip
- Accept-Language 浏览器可接收到的语言，如zh-CN
- Connection:keep-alive 一次TCP连接重复使用
- cookie 
- Host
- User-Agent(简称UA)浏览器信息
- Content-type发送数据格式，如application/json

### 常见的Response Headers

- Content-type返回数据格式，如application/json
- Content-length返回数据大小，多少字节
- Content-Encoding返回数据的压缩算法，如gzip
- Set-Cookie服务端向客户端设置cookie
- Cache-Control控制强制缓存的逻辑
  - max-age
  - no-cache
  - no-store
  - private
  - public

### 缓存相关的headers

- Cache-Control  Expires
- Last-Modified  If-Modified-Since
- Etag           iF-None-Match

## 什么是Restful API

### Restful API和传统API的区别

- 传统API设计：把每个url当做一个功能
- Restful API设计：把每个url当做一个唯一的资源

### 如何设计成一个资源

- 尽量不用url参数  例如：/api/list/2
- 用method表示操作类型
  - post 请求：/api/blog
  - patch请求：/api/blog/100
  - get请求：/api/blog/100

## 描述一下http的缓存机制

### 什么是缓存

### 为什么需要缓存

### 哪些资源可以被缓存

静态资源（js css img）

### 强制缓存

### 协商缓存（对比缓存）

- 服务端缓存策略
- 服务端判断客户端资源，是否和服务端资源一致
- 一致则返回304，否则返回200和最新资源

#### 资源标识

- Last-Modified 资源的最后修改时间
- Etag资源的唯一标识（一个字符串，类似人类的指纹）

##### Last-Modified的区别

- Last-Modified和Etag同时存在，会优先使用Etag
- Last-Modified只能精确到秒级
- 如果资源被重复生成，而内容不变，则Etag更精确

### 不同刷新操作，不同的缓存策略

- 正常操作：强制缓存有效，协商缓存有效
- 手动刷新：强制缓存失效，协商缓存有效
- 强制刷新：强制缓存失效，协商缓存失效