
function quickSort(arr){
    quickSort1(arr,0,arr.length-1)
    return arr
}
  
function quickSort1(arr,start,end){
    // 如果区域内数字少于2个
    if(start>=end) return 
    // 将数字分区，并获得中间值的下标
    let middle = partition(arr,start,end)
    // 对左边区域快速排序
    quickSort1(arr,start,middle-1)
    // 对右边快速排序
    quickSort1(arr,middle+1,end)
}
  
  
//   分区函数
  function partition(arr,start,end){
    // 选第一个数为基数   
    let pivot=arr[start]
    // 左边界
    let left = start +1
    // 右边界
    let right = end
    while(left<right){
        // 找到第一个大于基数的位置
        while(left<right&&arr[left]<=pivot) left++
        // 找到第一个小于基数的位置
        while (left<right&&arr[right]>=pivot) right--
        // 交换这两个数，使得左边分区都小于或等于基数，右边分区大于或等于基数
        if(left<right){
            exchange(arr,left,right)
           left++
           right--

        }
    }
    // 如果left和right相等，单独比较arr[right]和privot
    if(left==right&&arr[right]>pivot) right--
    // 基数和中间数交换
     exchange(arr,start,right)
    // 返回中间值的下标                 
    return right
   }

   function exchange(arr,i,j){
       let temp = arr[i]
       arr[i]=arr[j]
       arr[j]=temp
   } 


   console.log(quickSort([1,2,4,3,5,1])) 