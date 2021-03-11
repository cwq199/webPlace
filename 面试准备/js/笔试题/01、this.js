var name =222
var a = {
    name:111,
    say:function(){
        console.log(this.name)
    }

}

var fun = a.say
fun()       //  fun.call(window) 222
a.say()     // a.say.call(a)  111

var b = {
    name:333,
    say:function(fun){
        fun()  //fn.call(window)  直接调用
    }
}
b.say(a.say)  //fn.call(window)  直接调用   222
b.say=a.say    
b.say           //b.say.call(b)  333

/*  
1、在函数中调用
 function fn(){console.log('你好')}
 fn()相当于fn.call(window)

 2、作为对像被调用时
 person  = { 
     run:function(){

     }
 }
     person.run() 相当与 person.run.call(person) 
     */
