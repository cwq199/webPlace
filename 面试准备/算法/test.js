
var N,M
var res = [[1]]
while((N=readInt())!=null&&(M=readInt())!=null){
	for(var i=0;i<M;i++){
        var a=readInt()
        var b=readInt()
        var c=readInt()
        if(c){
            var aInd=-1
            var bInd=-1
            for(var j=0;i<res.length;i++){
                if(res[j].includes(a)) aInd=j
                if(res[j].includes(b)) bInd=j
            }
            if(aInd==bInd){
                if(aInd==-1){
                    res.push([a,b])
                }
            }else{
                if(aInd==-1) res[bInd].push(a)
                else if(bInd==-1) res[aInd].push(b)
                else{
                    res[aInd]= res[aInd].concat(res[bInd])
                    res.splice(bInd,1)
                }
            }
        }
    }
    print((res[0].length-1))
}


