// 发布订阅模式
var Event = (function(){
    var list ={},
    listen,
    trigger,
    remove,
    // 发布
    listen = function(key,fn){
        if(!list[key]){
            list[key]=[]
        }
        list[key].push(fn)
    }
    // 订阅
    trigger = function(){
        // arguments不能直接调用shift，要用call或者...
        var key = Array.prototype.shift.call(arguments)
        fns = list[key]
        if(!fns||fns.length===0){
            return false
        }
        for(var i=0,fn;fn=fns[i++];){
            fn.apply(this,arguments)
        }
    }
// 取消订阅
    remove = function(key,fn){
            var fns = list[key]
            if(!fns){
                return false
            }
            if(!fn){
                fns&&(fns.length=0)
            }else{
                for(var i=fns.length;i>=0;i--){
                    var _fn=fns[i]
                    if(_fn===fn){
                        fns.splice(i,1)
                    }
                }
            }

    }
    return {
        listen,
        trigger,
        remove
    }
})()


Event.listen("color",fn1 = function(size){
    console.log(`第一次输出鞋子的尺码是${size}`)
})
Event.listen("color1",fn2 = function(size){
    console.log(`第二次输出鞋子的尺码是${size}`)
})

Event.trigger('color',42)
Event.trigger('color1',43)