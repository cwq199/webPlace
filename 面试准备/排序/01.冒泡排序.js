//时间复杂度O(n^2) 空间复杂度O(1)
// 普通排序
function bubblesort1(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j + 1] = arr[j] + arr[j + 1]
                arr[j] = arr[j + 1] - arr[j]
                arr[j + 1] = arr[j + 1] - arr[j]
            }

        }
    }
    return arr
}
// 优化1
function bubblesort2(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let flash = true
        if (!flash) break
        flash = false
        for (let j = 0; j < len - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                arr[j + 1] = arr[j] + arr[j + 1]
                arr[j] = arr[j + 1] - arr[j]
                arr[j + 1] = arr[j + 1] - arr[j]
                flash = true
            }

        }
    }
    return arr
}
// 
function bubblesort3(arr) {
        // 是否交换
        let flash = true
        // 上次没有经过交换的位置
        let lastIndex = arr.length - 1
        // 上次发生交换的位置
        let swappedIndex = -1
        while (flash) {
            flash = false
            for (let j = 0; j < lastIndex; j++) {
                if (arr[j] > arr[j + 1]) {
                    arr[j + 1] = arr[j] + arr[j + 1]
                    arr[j] = arr[j + 1] - arr[j]
                    arr[j + 1] = arr[j + 1] - arr[j]
                    flash = true
                    swappedIndex = j
                }

            }
            lastIndex = swappedIndex

        }


    return arr
}


console.log(bubblesort1([1, 3, 5, 4, 7]))

console.log(bubblesort2([1, 3, 5, 4, 7]))
console.log(bubblesort3([1, 3, 5, 4, 7]))