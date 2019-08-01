HTTP 协议 req response
状态码：HTTP响应(response)中包含状态码 作用：web服务器用来告诉客户端，发生了什么事。
浏览器 是代理 proxy

1xx  请求正在处理 继续等待  是临时响应
2xx  请求已经成功处理掉了  200 OK
3xx  重定向  这类状态码代表需要客户端采取进一步的操作才能完成请求  location进行跳转
4xx  客户端错误  用户出现的错误(地址错误) 404 not found 
5xx  服务器错误

301 永久跳转
用户A 请求www.xiaomi.com   => www.mi.com
告诉蜘蛛
www.xiaomi.com/a.html 红米手机
废弃了  就要发送301  www.mi.com/a.html
3XX 区别  永久跳转  告诉蜘蛛把记录更新掉
301 可以在改变状态码后 不变 来展示理解  有缓存功能的跳转
http://localhost:3000  301 永久跳转
再次访问  浏览器有缓存  不需要再走服务器了

302 临时移动 不会告知蜘蛛 也不会在前端缓存


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