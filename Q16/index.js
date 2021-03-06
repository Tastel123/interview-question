function Animal(name) {
    this.name = name
    this.sleep = function() {
        console.log(this.name + '睡着了')
    }
}
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃' + food)
}

// 原型链的继承
// function Cat() {}
// Cat.prototype = new Animal()
// Cat.prototype.name = 'cat'
// var cat = new Cat()
// console.log(cat.name)
// console.log(cat.eat('fish'))
// console.log(cat.sleep())
// console.log(cat instanceof Animal)   // true
// console.log(cat instanceof Cat)   // true


// 构造函数的继承
// function Cat(name) {
//     Animal.call(this)
//     this.name = name || 'Tom'
// }
// var cat = new Cat('wn')
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat instanceof Cat)   // true
// console.log(cat instanceof Animal)   // false


// 组合继承
// function Cat(name) {
//     Animal.call(this)
//     this.name = name || 'Tom'
// }
// Cat.prototype = new Animal()
// var cat = new Cat()
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat instanceof Cat)   // true
// console.log(cat instanceof Animal)   // true


// 寄生组合继承
function Cat(name) {
    Animal.call(this)
    this.name = name || 'Tom'
}
(function() {
    // 创建一个没有实例方法的类
    var Super = function() {}   // 匿名函数没有构造函数
    Super.prototype = Animal.prototype
    Cat.prototype = new Super()
})()
var cat = new Cat()
console.log(cat.name)
console.log(cat.sleep())
console.log(cat instanceof Cat)   // true
console.log(cat instanceof Animal)   // true
