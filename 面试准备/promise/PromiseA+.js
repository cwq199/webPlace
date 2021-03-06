function Promise(fn) {
    let state = 'pending'
    let value = null
    const callbacks = []

    this.then = function (onFulfilled) {
        return new Promise((resolve, reject) => {
            handle({ // 桥梁，将新的promise的resolve方法放到前一个promise对象中
                onFulfilled,
                onRejected,
                resolve,
                reject

            })
        })
    }

    // 添加中间的catch
    this.catch = function (onError) {
        this.then(null, onError)
    }

    // 添加finally方法 ,无论前面操作成功与否都要进行最后一步
    this.finally = function (onDone) {
        this.then(onDone, onDone)
    }
    // 添加resolve方法
    this.resolve = function (value) {
        if (value && value instanceof Promise) {
            return value
        } else if (value && typeof value === 'object' && typeof value.then === 'function') {
            let then = value.then
            return new Promise((value) => {
                then(resolve)
            })
        } else if (value) {
            return new Promise(resolve => resolve(value))
        } else {
            return new Promise(resolve => resolve())
        }
    }
    // 添加reject
    this.reject = function (value) {
        return new Promise((resolve, reject) => [
            reject(value)
        ])
    }

        // 添加all
    this.all = function (arr) {
        var args = Array.prototype.slice.call(arr)
        return new Promise(function (resolve, reject) {
            if (args.length === 0) return resolve([])
            var remaining = args.length
            function res(i, val) {
                try {
                    if (val && (typeof val === 'object' || typeof val === 'function')) {
                        var then = val.then
                        if (typeof then === 'function') {
                            then.call(val, function (val) {
                                res(i, val)
                            }, reject)
                            return
                        }
                    }

                    args[i] = val
                    if(--remaining===0){
                        resolve(args)
                    }

                }catch(ex){
                    reject(ex)
                }
            }
            for(var i=0;i<args.length;i++){
                res(i,args[i])
            }
        })
    }


/* race 它的入参也是一个 Promise 实例数组，
然后其 then 注册的回调方法是数组中的某一个 Promise 的状态变为 fulfilled 的时候就执行。
因为 Promise 的状态只能改变一次，
那么我们只需要把 Promise.race 中产生的 Promise 对象的 resolve 方法，
注入到数组中的每一个 Promise 实例中的回调函数中即可。 */

    this.race = function(values){
        return new Promise(function(resolve,reject){
            for(var i=0,len= values.length;i<len;i++){
                valuep[i].then(resolve,reject)
            }
        })
    }


    function handle(callback) {
        if (state === 'pending') {
            callbacks.push(callback)
            return
        }
        const cb = state === 'fulfilled' ? callback.onFulfilled : callback.onRejected
        const next = state === 'fulfilled' ? callback.resolve : callback.reject

        if (!cb) {
            next(value)
            return
        }
        try {
            const ret = cb(value)
            next(ret)
        } catch (e) {
            callback.reject(e)
        }


    }
    function resolve(newValue) {
        const fn = () => {
            if (state !== 'pending') return
            if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
                const { then } = newValue
                if (typeof then === 'function') {
                    // newValue 为新产生的 Promise,此时resolve为上个 promise 的resolve
                    //相当于调用了新产生 Promise 的then方法，注入了上个 promise 的resolve 为其回调
                    then.call(newValue, resolve, reject)
                    return

                }
            }
            state = 'fulfilled'
            value = value
            hendleCb()
        }
        setTimeout(fn, 0)
    }
    function reject(error) {
        const fn = () => {
            if (state !== 'pendding') return
            if (error && (typeof error === 'object' || typeof error === 'function')) {
                const { then } = error
                if (typeof then === 'function') {
                    then.call(error, resolve, reject)
                    return
                }
            }
            state = 'rejected'
            value = error
            handleCb()
        }
        setTimeout(fn, 0)
    }
    function handleCb() {
        while (callbacks.length) {
            const fn = callbacks.shift()
            handle(fn)
        }
    }
    fn(resolve, reject)
}