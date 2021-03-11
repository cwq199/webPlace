// 我们可以把数组不断地拆成两份，直到只剩下一个数字时，这一个数字组成的数组我们就可以认为它是有序的。
// 最后将数组合并成2个一组、4个一组。。。
// 时间复杂度为：nlog(n)，空间复杂度为n

// 经典归并排序
/* function mergeSort(arr){
    if(arr.length==0) return 
    let result = mergeSort1(arr,0,arr.length-1)
    // 将结果拷贝到arr数组中
    for(let i=0;i<result.length;i++){
        arr[i]=result[i]
    }
    return arr

}
// 对arr 的[start,end]区间归并排序
function mergeSort1(arr,start,end){
    // 只剩下一个数字,停止拆分，返回单个数字组成的数组
    if(start==end) return [arr[start]]
    let middle = Math.floor((start+end)/2)
    // 拆分左边区域
    let left = mergeSort1(arr,start,middle)
    // 拆分右边区域
    let right = mergeSort1(arr,middle+1,end)

    return merge(left,right)

}

function merge(arr1,arr2){
    let result = new Array(arr1.length+arr2.length)
    let index1=0,index2=0
        while(index1<arr1.length&&index2<arr2.length){
            result[index1+index2]=arr1[index1]<=arr2[index2]?arr1[index1++]:arr2[index2++]
        }
        while(index1<arr1.length){
           result[index1+index2]=arr1[index1++]
          
        }
        while(index2<arr2.length){
            result[index1+index2]=arr2[index2++]
        }

        return result
}

console.log(mergeSort([1,2,4,3,5,1]))  */

// 优化版

function mergeSort2(arr){
    if(arr.length==0) return 
    let result = new Array(arr.length)
    mergeSort3(arr,0,arr.length-1,result)
    return arr
}

// 对arr的[start,end]区间进行归并排序
function mergeSort3(arr,start,end,result){
    // 只剩下一个数字，停止拆分
    if(start==end) return
    let middle = Math.floor((start+end)/2)
    // 拆分左边区域
    mergeSort3(arr,start,middle,result)
    // 拆分右边区域
    mergeSort3(arr,middle+1,end,result)
    // 合并两边区间
    merge1(arr,start,end,result)
} 
function merge1(arr,start,end,result){
    let end1 = Math.floor((start+end)/2)
    let start2= end1+1
    //用来遍历的指针
    let index1 = start
    let index2 = start2
    while(index1<=end1&&index2<=end){
        result[index1+index2-start2]=arr[index1]<=arr[index2]?arr[index1++]:arr[index2++]
    }
    // 将剩余数字补到结果数组之后
    while(index1<=end1){
        result[index1+index2-start2] = arr[index1++]
    }
    while(index2<=end){
        result[index1+index2-start2] = arr[index2++]
    }
   // 将 result 操作区间的数字拷贝到 arr 数组中，以便下次比较
    while(start<=end){
        arr[start] = result[start++]
    }
}

console.log(mergeSort2([1,2,4,3,5,1])) 