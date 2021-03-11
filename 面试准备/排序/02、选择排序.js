// 选择排序，不稳定的  ,可以新开一个数组把每轮找出最小值添加到数组中  时间复杂度O(n^2) 空间复杂度O(1)
function  selectionSort1(arr){
    let minIndex
    let len = arr.length
    for(let i=0;i<len-1;i++){
        minIndex = i
        for(let j=i+1;j<len;j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j
            }
        }
       let temp = arr[i]
       arr[i]=arr[minIndex]
       arr[minIndex ]=temp
    }
    return arr
}

// 二元选择排序 
function selectionSort2(arr){
    let minIndex,maxIndex
    let len = arr.length
    // i只需要遍历一半
    for(let i=0;i<len/2;i++){
        minIndex=i
        maxIndex =i
        for(let j=i+1;j<len-i;j++){
            // 记录最小值下标
            if(arr[minIndex]>arr[j]) minIndex =j
            // 记录最大值下标
            if(arr[maxIndex]<arr[j]) maxIndex=j
        }
        if(minIndex==maxIndex) break
        let temp1 = arr[i]
        arr[i]=temp1
        arr[minIndex] = temp1
         // 如果最大值的下标刚好是 i，由于 arr[i] 和 arr[minIndex] 已经交换了，所以这里要更新 maxIndex 的值。
        if(maxIndex==i) maxIndex = minIndex
        let lastIndex = len-1-i
        let temp2 = arr[lastIndex]
        arr[lastIndex]=arr[maxIndex]
        arr[maxIndex] = temp2
    }
    return arr
}




 console.log(selectionSort1([1,2,4,3,5,1])) 
 console.log(selectionSort2([1,2,4,3,5,1])) 