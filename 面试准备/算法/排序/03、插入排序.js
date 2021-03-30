// 插入排序
/* <!-- 插入排序 时间复杂度为 O(n^2)；只需要常量级的临时变量，空间复杂度为 O(1)。  --> */
function insertSort1(arr){
 for(let i=1;i<arr.length;i++){
     let currment = arr[i]
     let j =i-1
     while(j>=0&&currment<arr[j]){
         arr[j+1]=arr[j]
         j--
     }
     arr[j+1]=currment
 }
 return arr
}


// 使用交换元素方式插入
function insertSort2(arr){
    for(let i=1;i<arr.length;i++){
        let j =i
        while(j>=1&&arr[j]<arr[j-1]){
            let temp = arr[j]
            arr[j] =arr[j-1]
            arr[j-1]=temp
            j--
        }
    }
    return arr
   }


console.log(insertSort1([1,2,4,3,5,1])) 
console.log(insertSort2([1,2,4,3,5,1])) 