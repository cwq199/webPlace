
/* 
    分隔数字，每隔三为使用逗号分隔一次
    paddingNum(-987654.3) return '-987,654,.3'
*/

function paddingNum(num){
    let [integer,point] = num.toString().split('.')
    let res
    let reg = /\d{3}(?=\d)/g
    let newStr = integer.split('').reverse().join('').replace(reg,(match,$1)=>{
        return match+','
    })
    newStr = newStr.split('').reverse().join('')
    res=point?newStr+'.'+point:newStr
    return res
}
console.log(paddingNum(33))
console.log(paddingNum(1234.56))
console.log(paddingNum(123456789))
console.log(paddingNum(987654.321))
console.log(paddingNum(-987654.3))