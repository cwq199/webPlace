/**
 * 🌟 确保获取/存储的值 始终是最新 -> delete then set
 * put逻辑：
 * 1. 现判定是否存在 若存在则将其放置最新位置 
 * 2. 存入cache 
 * 3. 判定插入后是否超出容器体积 若超出则移除首位
*/
class LRUCache {
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity
    }
    get(k) {
        if (!this.cache.has(k)) return -1
        const v = this.cache.get(k)
        // make sure it is latest
        this.cache.delete(k)
        this.cache.set(k, v)
        return v
    }
    put(k, v) {
       // delete if if it exists
       if (this.cache.has(k)) this.cache.delete(k)

       // store it in cache
       this.cache.set(k, v)

       // make sure not to exceed the range after store it in cache
       if (this.cache.size > this.capacity) {
           const first = this.cache.keys().next().value
           this.cache.delete(first)
       }
    }
}