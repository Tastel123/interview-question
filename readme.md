# q1. js全局执行上下文为我们创建了两个东西：全局对象和this关键字
  new的实现原理：
    1. 创建一个空对象，构造函数的this指向这个空对象
    2. 这个新对象被执行【原型】连接
    3. 执行构造函数，将属性或方法添加到this引用的对象上
    4. 如果构造函数中没有返回其他对象，那么返回this，即创建的新对象。否则，返回构造函数返回的对象

# q2. call, bind, apply（修改作用域）
    1. b.call(a) 就相当于把b里面的作用域强行指向到a里面去
      第一个参数是要指向的地方，第二三...个参数是该作用域里用到的值 b.call(a, 5, 6...)
    2. b.apply(a, [9, 8, 3])  需要用到数组类型 
    3. b.call() || b.apply() 没有参数， 指向全局window
    4. c = b.call(a)
       c()
       bind方法返回的是一个修改过的函数，所以该用函数该有的姿态去调用
       bind方法接受的参数是按照形参的顺序进行的
    
#q3. 浅拷贝和深拷贝
    1. 数组解构：
      let [x, y] = [1, 2]
      // x = 1,
      // y = 2
    2. 对象解构：
      let { foo, bar } = { foo: "aaa", bar: "bbb" }
      // foo = "aaa"
      // bar = "bbb"
      另：（允许给赋值的变量重命名）
      let { foo: baz } = { foo: "abc" }
      // baz = "abc"
    3. 浅拷贝：只是第一层属性进行拷贝，当第一层的属性为基本数据类型时，新对象和原对象互不影响（不被修改）
       如果第一层的属性值是 # 复杂数据类型 #，那么新对象和原对象的属性值指向的是同一块内存地址

       深拷贝是将对象及值复制过来，两个对象修改其中任意一个的

#q4. 闭包
    让一个函数有权限访问另一个函数的变量
    所有的JavaSrcipt函数都是闭包，因为他们都是对象
    1.闭包的缺点就是常驻内存会增大内存使用量，并且使用不当容易造成内存泄漏
		2.如果不是因为某些特殊任务而需要闭包，在没有必要的情况下，在其它函数中创建函数是不明智的，因为闭包对脚本性能具有负面影响，包括处理速度和内存消耗。 

    1. 所有的JavaScript都是闭包
    2. 闭包是让一个函数A有权限访问另一个函数B的变量的函数 能访问其他函数的作用域
    3. 函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。
    4. 闭包存在的意义就是让我们可以间接访问函数内部的变量。闭包会阻止词法作用域的回收 js中有垃圾回收机制
    5. 所谓的词法作用域就是在你写代码时将变量和块作用域写在哪里来决定，也就是词法作用域是静态的作用域，在你书写代码时就确定了。
    6. 闭包就是能够读取其他函数内部变量的函数。闭包可以简单理解成“定义在一个函数内部的函数“。在本质上，闭包是将函数内部和函数外部连接起来的桥梁。
    7. 它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中，不会在f1调用后被自动清除。


    闭包是指有权限访问另一个函数作用域中的变量的函数
      1. 能够访问函数定义是所在的词法作用域（阻止其被回收）
      2. 私有化变量
      3. 模拟块级作用域

#q5. 数组去重
    1. set()方法
    2. indexOf()
    3. includes()
    4. map()
    5. reduce()

#q6. 节流防抖函数原理

#q7. __proto__ 和 prototype 关联
   __proto__是每一个实例都有的属性，可以访问[prototype]属性，实例的__proto__与其构造函数的prototype指向的是同一对象
判断数据类型
  1. typeof  只能判断基本数据类型
  2. instanceof

准确判断数据类型
  Object.prototype.toString.call()

#q8. 事件委托
利用冒泡机制

#q11. get 和 post 请求在缓存方面的区别
    get请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存
    post不同，post一般做的是修改和删除数据的工作，所以必须与数据库交互，所以不能使用缓存
    因此get请求更适合用于请求缓存

    post是加密传输的
# url长度限制
    http协议并没有限制url的长度，是浏览器或者web浏览器做了url长度的限制，并且只针对于get请求做的限制
    IE : 2803
    Firefox:65536
    Chrome:8182
    Safari:80000
    Opera:190000

#q12. 前端事件流
捕获 目标 冒泡
addEventListener三个参数："click",function,true    
第三个参数  true为捕获，false为冒泡

事件委托：冒泡机制  点击li，作用在ul上

  在DOM标准的事件模型中，事件流包括下面几个阶段：
    1. 事件捕获阶段
    2. 处于目标阶段
    3. 事件冒泡阶段
  addEventListener第三个参数，为true时捕获，为false时冒泡，默认false (IE只支持事件冒泡)

#q13. 图片懒加载和预加载的区别
    预加载：提前加载图片，当用户需要查看图片时可直接从本地缓存中渲染
    懒加载：服务器的前端优化，减少请求或延迟请求
    （懒加载对服务器有一定的缓解压力作用，预加载会增加服务器的压力）

#q14. js中的各种位置
    clientHeight: 表示可视区域的高度，不包含border和滚动条
    offsetHeight: 表示可视区域的高度，包含border和滚动条
    scrollHeight: 表示所有区域的高度，包含因为滚动被隐藏的部分
    clientTop: 表示边框border的厚度，在未指定的情况下一般为0
    scrollTop: 滚动后被隐藏的高度

#q15. js拖拽功能的实现
    
#q16. 类的创建和继承

#q17. 300ms
  click在 ios 手机上有300ms延迟，原因及解决方法
    1. <meta name="viewport" content="width=device-width,initial-scale=no"/>
    2. fastclick, 其原理是检测到 touchend事件后，立刻发出模拟click事件，并把浏览器300ms之后真实发出的事件阻断

#q18. Cookie sessionStorage localStorage
  Cookie: 数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下,存储的大小很小只有4K左右。 

  sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持。
  localStorage：在所有的同源窗口都是共享的。始终有效，窗口或浏览器关闭也一直保存。
  cookie: 也是在所有的同源窗口都是共享的。只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

