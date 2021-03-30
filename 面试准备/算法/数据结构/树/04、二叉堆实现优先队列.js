// 二叉堆
function MaxBinaryHeap(key){
    if(!(this instanceof MaxBinaryHeap)) 
         return new MaxBinaryHeap(key)
       
    this.key = key  // key表示用来排序的关键字
    this.size = 0  // 堆大小
    this.list = []  // 存放堆元素（对象）

}

MaxBinaryHeap.prototype = {
    constructor :MaxBinaryHeap,
    // 获取某个节点的父节点
    parent:function(i){
        let p=Math.floor((i-1)/2)
        if(i>this.size-1||p<0) return null
        return p
    },
    // 获取某个节点的左孩子
    left:function(i){
            let l=2*i+1
            if(l>this.size-1) return null
            return l
        
    },
    // 获取某个节点的右孩子
    right:function(i){
        let r  = 2*i+2
        if(r>this.size-1) return null
        return r
    },
    // 元素下沉 对下标为i的元素向下调整
    maxHeapify:function(i){
        let list = this.list
        let key =this.key
        let l =this.left(i)
        let r = this.right(i)
        let larget = null
        if(l!=null){ //左孩子为空则右孩子一定为空
            if (r == null) larget = l;
            else larget = list[l][key] > list[r][key] ? l : r

            if(list[i][key]>=list[larget][key]) return 
            else{
                let t = list[i]
                list[i] = list[larget]
                list[larget] = t
                this.maxHeapify(larget)
            }
        }
    },
    // 上升
    increase:function(i){
        let list = this.list
        let p = this.parent(i)
        while(i>0&&list[p][this.key]<list[i][this.key]){ //i > 0 一定能保证 p != null
            let t = list[i]
            list[i]=list[p]
            list[p]=t
            // 当前节点变为父节点
            i =this.parent(i)
            // 父节点继续上移
            p = this.parent(i)
        }
    },
// 构建堆
    buildHeap:function(a){
        this.list=a
        this.size = a.length
        for(let i =Math.floor(a.length/2)-1;i>-1;i--){
            this.maxHeapify(i)
        }
    },


    // 堆排序
    heapSort:function(a){
       if(a!=null) this.buildHeap(a)
        for(let i=this.size-1;i>0;i--){
            let t = this.list[0]
            this.list[0] = this.list[i]
            this.list[i]= t
            this.size--
            this.maxHeapify(0)
        }
        return this.list
    }
}
//测试用例
var a = [{key:1},{key:7},{key:2},{key:5},{key:3},{key:2},{key:6},{key:10}];
var heap = MaxBinaryHeap('key');
heap.buildHeap(a);
console.log(heap.heapSort());

// 优先队列
function MaxPriorityQueue(key,a){
        if(!(this instanceof MaxPriorityQueue)){
            return new MaxPriorityQueue(key,a)
        }
        this.maxBinaryHeap = MaxBinaryHeap(key)
        if(a!=null) this.maxBinaryHeap.buildHeap(a)
        this.key = key 
}

MaxPriorityQueue.prototype = {
    constructor:MaxPriorityQueue,
    insert:function(x){  //加入一个元素
        this.maxBinaryHeap.size++
        this.maxBinaryHeap.list[this.maxBinaryHeap.size-1] = x
        // 向上调整
        this.maxBinaryHeap.increase(this.maxBinaryHeap.size-1)
    },
    max:function(){//获取最大元素
        let max = this.maxBinaryHeap.list[0]
        this.removeMax()
        return max

    },
    removeMax:function(){//移除最大元素
        let list = this.maxBinaryHeap.list
        let size = this.maxBinaryHeap.size
        let max= list[0]
        list[0] = list[size-1]
        list.shift(size-1)  //删除
        this.maxBinaryHeap.size--
        this.maxBinaryHeap.maxHeapify(0)
        return max
    },
    update:function(i,x){
        this.maxBinaryHeap.list[i] =x
        this.maxBinaryHeap.maxHeapify(i) //  元素下沉操作
        this.maxBinaryHeap.increase(i) // 元素上浮操作
    }

}
var a = [{key:1},{key:7},{key:2},{key:5},{key:3},{key:2},{key:6},{key:10}];
var priorityQueue = MaxPriorityQueue('key', a);
// priorityQueue.insert({key:11}); //插入一个元素
console.log(a);
// priorityQueue.max(); //获取最大元素并删除
// priorityQueue.removeMax(); //删除最大元素
// priorityQueue.update(3,{key:100}); //更新下标为3的元素
console.log(a);