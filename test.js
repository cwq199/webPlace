function demo(arr,k){
    var res=0
    var j =0
    var m = []
    for(let i=0;i<arr.length;i++){
        if(parseInt(arr[i])>0){
            res+= parseInt(arr[i])
            j++
            if(j%3==0){
                res+=k
            }
        }else{
            m.push(parseInt(arr[i]))
        }
    }
   m.sort((a,b)=>{
       return b-a
   })
   console.log(m)
    if(j%3==2&&(m[0]+k)>0){
            res=res+m[0]+k
            m.shift()
    }else if(j%3==1&&(m[0]+m[1]+k)>0){
            res=res+m[0]+m[1]+k
            m.shift()
            m.shift()
    }
    while(m.length>2){
         if((m[0]+m[1]+m[2]+k)>0){
             res=res+m[0]+m[1]+m[2]+k
             m.shift()
             m.shift()
             m.shift()
         }else{
             break
         }
    }
    return res
}
var a=[1,2,3,-1,0,0]
console.log(demo(a,5))