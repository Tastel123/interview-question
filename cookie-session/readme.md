## cookie sessionStorage localStorage区别
1. cookie数据始终在同源的http请求中携带(即使不需要)，即cookie在浏览器和服务器间来回传递
2. cookie数据还有路径（path）的概念，可以限制。cookie只属于某个路径下
3. 存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如回话标识。
4. webStorage虽然也有存储大小的限制，但是比cookie大得多，可以达到5M或更大
5. 数据的有效期不同  
   sessionStorage：仅在当前的浏览器窗口关闭有效；
   localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
   cookie：只在设置的cookie过期时间之前一直有效，即使窗口和浏览器关闭
6. 作用域不同 
   sessionStorage：不在不同的浏览器窗口中共享，即使是同一个页面；
   localStorage：在所有同源窗口都是共享的；
   cookie：也是在所有同源窗口中共享的

## http 和 https
  http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
  http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
  https: 是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。
  HTTP是一个无状态协议，因此Cookie的最大的作用就是存储sessionId用来唯一标识用户

## __proto__ 和 prototype
  1. __proto__是每一个实例都有的属性，可以访问[prototype]属性，实例的__proto__与其构造函数的prototype指向的是同一对象
  2. 每个对象都有一个__proto__属性，指向创建该对象的函数的prototype。
  3. JavaScript的prototype是仅函数拥有, 而对象也拥有prototype是源于其constructor属性所拥有的prototype。
  4. 每个函数function都有一个prototype，即原型。每个对象都有一个__proto__，可成为隐式原型
  5. Object.__proto__ === Function.prototype;
  6. Function.prototype.__proto__ === Object.prototype;
  7. Object.prototype.__proto__ === null;

## http返回的状态码
200    OK    请求成功。一般用于GET与POST请求
201    Created    已创建。成功请求并创建了新的资源
204    No Content    无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
205    Reset Content    重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域
206    Partial Content    部分内容。服务器成功处理了部分GET请求
300    Multiple Choices    多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
301    Moved Permanently    永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
302    Found    临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI
303    See Other    查看其它地址。与301类似。使用GET和POST请求查看
304    Not Modified    未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
305    Use Proxy    使用代理。所请求的资源必须通过代理访问
306    Unused    已经被废弃的HTTP状态码
307    Temporary Redirect    临时重定向。与302类似。使用GET请求重定向
400    Bad Request    客户端请求的语法错误，服务器无法理解
401    Unauthorized    请求要求用户的身份认证
402    Payment Required    保留，将来使用
403    Forbidden    服务器理解请求客户端的请求，但是拒绝执行此请求
404    Not Found    服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
500    Internal Server Error    服务器内部错误，无法完成请求
501    Not Implemented    服务器不支持请求的功能，无法完成请求
502    Bad Gateway    作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应

## MVVM 
  两个方向：一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。