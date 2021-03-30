/* 
在介绍堆排序具体实现之前，我们先要了解完全二叉树的几个性质。将根节点的下标视为 0，则完全二叉树有如下性质：

对于完全二叉树中的第 i 个数，它的左子节点下标：left = 2i + 1
对于完全二叉树中的第 i 个数，它的右子节点下标：right = left + 1
对于有 n 个元素的完全二叉树（n >2），它的最后一个非叶子结点的下标：n/2 - 1

堆排序时间复杂度：构建时为O(n)  平均为 O(nlogn) 空间复杂度为O(1)
*/

function heapSort(arr){
    buildMaxHeap(arr)
    for(let i=arr.length-1;i>0;i--){
        exchange(arr,0,i)
        maxHeapify(arr,0,i)

    }
    return arr
}

function buildMaxHeap(arr){
    for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
        maxHeapify(arr,i,arr.length)
    }

}

function maxHeapify(arr,i,heapSize){
    let l=i*2+1
    let r =l+1
    let largest=i
    if(l<heapSize&&arr[l]>arr[largest]) largest=l
    if(r<heapSize&&arr[r]>arr[largest]) largest=r
    if(largest!=i){
        exchange(arr,i,largest)
        maxHeapify(arr,largest,heapSize)
    }


}

function exchange(arr,i,j){
    let temp = arr[j]
    arr[j]=arr[i]
    arr[i]=temp
}


/* function heapSort(arr){
    buildMaxHeap(arr)
    for(let i=arr.length-1;i>0;i--){
        // 将最大值放到数组最后
        exchange(arr,0,i)
        // 调整剩余数组，使其满足大顶堆
        maxHeapify(arr,0,i)
    }

    return arr

    // 初始化大顶堆
    function buildMaxHeap(arr){
        for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
            maxHeapify(arr,i,arr.length)
        }
    }

    // 调整大顶堆，第三个参数表示剩余未排序的数字的数量，也是剩余堆的大小
    function maxHeapify(arr,i,heapSize){
          // 左子结点下标
        let l = 2*i+1
        //右结点下标
        let r = l+1
     // 记录根结点、左子树结点、右子树结点三者中的最大值下标
        let largest = i
        // 与左子树结点比较
        if(l<heapSize&&arr[l]>arr[largest]){
            largest = l
        }
        // 与右子树结点比较
        if(r<heapSize&&arr[r]>arr[largest]){
            largest = r
        }
        if(largest!=i){
            // 将最大值交换为根结点
            exchange(arr,i,largest)
            // 再次调整交换数字后的大顶堆
            maxHeapify(arr,largest,heapSize)
        }

    }
// 交换元素
    function exchange(arr,i,j){
        let temp = arr[i]
        arr[i]=arr[j]
        arr[j]=temp

    }
    

} */
console.log(heapSort([1,2,4,3,5,1])) 