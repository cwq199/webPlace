/* 
将待排序数组按照一定的间隔分为多个子数组，每组分别进行插入排序。
这里按照间隔分组指的不是取连续的一段数组，而是每跳跃一定间隔取一个值组成一组。
逐渐缩小间隔进行下一轮排序
最后一轮时，取间隔为 1，也就相当于直接使用插入排序。但这时经过前面的“宏观调控”，
数组已经基本有序了，所以此时的插入排序只需进行少量交换便可完成。
举个例子，对数组 [84, 83, 88, 87, 61, 50, 70, 60, 80, 99] 进行希尔排序的过程如下：
第一遍（5 间隔排序）：按照间隔 5 分割子数组，共分成五组，分别是 [84, 50], [83, 70], [88, 60], [87, 80], [61, 99]。
对它们进行插入排序，排序后它们分别变成： [50, 84], [70, 83], [60, 88], [80, 87], [61, 99]，
此时整个数组变成 [50, 70, 60, 80, 61, 84, 83, 88, 87, 99]
第二遍（2 间隔排序）：按照间隔 2 分割子数组，共分成两组，分别是 [50, 60, 61, 83, 87], [70, 80, 84, 88, 99]。
对他们进行插入排序，排序后它们分别变成：[50, 60, 61, 83, 87], [70, 80, 84, 88, 99]，
此时整个数组变成 [50, 70, 60, 80, 61, 84, 83, 88, 87, 99]。这里有一个非常重要的性质：
当我们完成 2 间隔排序后，这个数组仍然是保持 5 间隔有序的。也就是说，更小间隔的排序没有把上一步的结果变坏。
第三遍（1 间隔排序，等于直接插入排序）：按照间隔 1 分割子数组，分成一组，也就是整个数组。
对其进行插入排序，经过前两遍排序，数组已经基本有序了，所以这一步只需经过少量交换即可完成排序。
排序后数组变成 [50, 60, 61, 70, 80, 83, 84, 87, 88, 99]，整个排序完成。

*/
function shellSort(arr){
    // 间隔序列
    for(let gap=Math.floor(arr.length/2);gap>0;gap=Math.floor(gap/2)){
        // 分组
        for(let groupStartIndex=0;groupStartIndex<gap;groupStartIndex++){
            // 
            for(let currentIndex = groupStartIndex+gap;currentIndex<arr.length;currentIndex+=gap){
                let currentNumber = arr[currentIndex]
                let preIndex = currentIndex-gap
                while(preIndex>=groupStartIndex&&currentNumber<arr[preIndex]){
                    // 向后挪
                    arr[preIndex+gap] = arr[preIndex]
                    preIndex-=gap
                }
                arr[preIndex+gap]=currentNumber
            }
        }
    }
    return arr
}
console.log(shellSort([1,2,4,3,5,1])) 