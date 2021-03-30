## 笔试遇到的js题目

* 属性遍历
    * for of
    遍历对象的属性值(value)
    遍历数组的元素值(arr[index])
    不会遍历原型链

    * for in 
    遍历对象的属性名(key)
    遍历数组的下标值(index)
    会遍历原型链（性能开销大）
    遍历可枚举属性
    * Object.keys()
    遍历对象的属性名(key)
    遍历数组的下标值(index)
    不会遍历原型链
    遍历可枚举属性

* 冒泡
    * event.initEvent
    通过DocumentEvent的接口给被创建的事件初始化某些值。
    * event.preventCapture 已废弃 Gecko 24
    已弃用，请使用 event.stopPropagation代替它。
    * event.preventDefault
    取消事件（如果该事件可取消）。阻止事件默认行为
    * event.stopImmediatePropagation
    对这个特定的事件而言，没有其他监听器被调用。这个事件既不会添加到相同的元素上，也不会添加到以后将要遍历的元素上（例如在捕获阶段）。
    * event.stopPropagation
    停止事件冒泡。


* 模块化
    * ES6 Modue 规范：JavaScript 语言标准模块化方案，浏览器和服务器通用，模块功能主要由 export 和 import 两个命令构成。export 用于定义模块的对外接口，import 用于输入其他模块提供的功能。
    * CommonJS 规范：主要用于服务端的 JavaScript 模块化方案，Node.js 采用的就是这种方案，所以各种 Node.js 环境的前端构建工具都支持该规范。CommonJS 规范规定通过 require 命令加载其他模块，通过 module.exports 或者 exports 对外暴露接口。
    * AMD 规范：全称是 Asynchronous Modules Definition，异步模块定义规范，一种更主要用于浏览器端的 JavaScript 模块化方案，该方案的代表实现者是 RequireJS，通过 define 方法定义模块，通过 require 方法加载模块

    