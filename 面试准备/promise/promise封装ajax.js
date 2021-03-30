// 原版本
var onSuccess = function(result){}  //成功的回调
var onFail = function(error){}  // 失败的回调
var req = new  XMLHttpRequest()
req.open("POST",'www.baidu.com',true)
req.onload = function(){
    if(req.readyState===4&&req.status===200){
        onSuccess(req.response)
    }else{
        onFail(req.statusText)
    }
}
req.onerror = function(){
    onFail(Error('网络异常'))
}


// promise版本
var ajax  = url=>{
    return new Promise((resolve,reject)=>{
        let req = new XMLHttpRequest()
        req.open("POST",url,true)
        req.onload =()=>{
            if(req.readyState===4&&req.status===200){
                resolve(req.response)
            }else{
                reject(req.statusText)
            }
        }
        req.onerror=()=>{
            reject(Error('网络异常'))
        }
    })
}