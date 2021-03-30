function  main(){
    this.before = function(fn){
        //补充代码
        fn()
        return this
    }
    this.after = function(fn){
        //补充代码
        setTimeout(fn,0)
        return this
    }
    
    console.log("this is main excture")
}

var M = new main()
M.before(function(){
    console.log('this is before main excture')
}).after(function(){
    console.log('this is after main excture')
})