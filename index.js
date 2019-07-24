// 1.
// function Person(name) {
//     this.name = name
// }
// let p = new Person('zz')
// 1. p.__proto__ = Person.prototype
// 实例的__proto__等于其构造函数的prototype
// 2. Person.__proto__ == Function.prototype
// 3. Function.__proto__ == Object.prototype

// var foo = {},
//     F = function(){}

// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)  // 'valA'   foo是对象，继承到Object原型链上的a
// console.log(foo.b)  // undefined
// console.log(F.a)    // 'valA'   F可以继承到Object的a  F继承 Function, Function继承 Object
// console.log(F.b)    // 'valB'

// 2.
// function Person(name) {
//     this.name = name
//     return null
// }
// let p = new Person('zz')
// console.log(p)

// 构造函数是不需要返回值的，使用new来创建对象时，如果return的是非对象（string,number,boolean等)类型，会忽略返回值。
// 如果return 的是对象，则返回该对象   {}, []等   (若 return null 也会忽略返回值)

// 3.
// function Person(name) {
//     this.name = name
// }
// function Student() {

// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student  // 让Student变成构造函数

// let s = new Student('wn')
// console.log(s instanceof Person)    // true   无法继承Person的属性

// 4.
// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)   // 10个10
//     },0)
// }
// for (var i = 0; i < 10; i++) {
//     (function(i) {
//         setTimeout(() => {
//             console.log(i)   
//         },0)  
//     })(i)
// }
// let 输出0-9， var 输出10个10
// let 每次循环会生成一个封闭的作用域和setTimeout绑定， var每次循环会覆盖掉上一次的作用域

// 5.
// for ... in ... 输出的是索引值
// for ... of ... 遍历数组 输出的是内容
// var myArr = [15,37,2,8,5,7]
// for (let index in myArr) {
//     console.log(index)
// }
// for in
// 1. index索引为字符串型的数字，不能直接进行几何运算
// 2. 遍历顺序有可能不是按照实际数组的内部顺序进行的
// 3. 使用for in 会遍历数组所有可枚举属性，包括原型链，所以for in更适合遍历对象

// for of
// for in 遍历的是数组的索引， for of 遍历的是数组的元素
// for of 遍历的只是数组内的元素，而不包括数组原型属性和索引

let gArr = [1, 2, [3, 4], 5, [2, 7, [3, 9]]]
let oArr = [1, 2, 3, 4, 5, 2, 7, 3, 9]    
// 递归  层层遍历
// function outputArr(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             res = res.concat(outputArr(arr[i]))   // concat() 数组拼接
//         } else {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
function outputArr(arr) {
    return arr.reduce(function(pre, item) {
        return pre.concat(Array.isArray(item) ? outputArr(item) : item)
    }, [])
}
console.log(outputArr(gArr))