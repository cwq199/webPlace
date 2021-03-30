// 1、无重复性
// 2、实现方式：对象中key和值相等

var Set2 = function () {
    var items = {}
    // 是否存在value has（value）
    // 为什么不用items[value]:防止对象去访问原型属性导致错误
    this.has = function (value) {
        return items.hasOwnProperty(value)

    }

    // 添加 add（value）
    this.add = function (value) {
        if (!this.has(value)) {
            return items[value] = value
        } else {
            return false
        }
    }


    // 移除  remove（value） 
    this.remove = function (value) {
        if (this.has(value)) {
            // delete 删除对象中的属性
            delete items[value]
            return true
        } else {
            return false
        }
    }
    // 获取属性
    this.getitems = function (value) {
        return items

    }
    // 清空
    this.clear = function () {
        items = {}

    }

    // 获取大小
    this.size = function () {
        // ES5
        // var count = 0
        // for(var i in items){
        //         if(items.hasOwnProperty(i)){
        //             count++
        //         }
        // }
        // return count
        return Object.keys(items).length
    }
    // 获取所有value
    this.getvalues = function () {
        var values = []
        for (var i in items) {
            if (items.hasOwnProperty(i)) {
                values.push(items[i])
            }
        }
        return values
    }
    // 并集
    this.union = function (otherSet) {
        var resultSet = new Set2()

        // 提取自己的值
        var arr = this.value()
        for (var i = 0; i < arr.length; i++) {
            resultSet.add(arr[i])
        }
        // 提取另一个集合
        arr = otherSet.value
        for (var i = 0; i < arr.length; i++) {
            resultSet.add(arr[i])

        }
        return resultSet

    }
    // 交集
    this.intersection = function (otherSet) {
        var resultSet = new Set2()
        var arr= this.value
        for(var i=0;i<arr.length;i++){
            if(otherSet.has(arr[i])){
                resultSet.add(arr[i])
            }
        }
        return resultSet
        
    }
    // 差集
    this.difference = function (otherSet) {
        var resultSet = new Set2()
        var arr= this.value
        for(var i=0;i<arr.length;i++){
            if(!otherSet.has(arr[i])){
                resultSet.add(arr[i])
            }
        }
        return resultSet
        
    }
}
