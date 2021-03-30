 function Stack(){
    //  <!-- 创建栈 -->
    var items =[]
        // <!-- push 入栈-->
     this.push=function(element){
         items.push(element)
     }
    //  <!-- 检查items -->
     this.getItem=function(){
         return items
     }
    //    <!-- pop  出栈 -->
     this.pop=function(){
         return items.pop()
     }
    //  检查栈顶
     this.peek = function(){
         return items[items.length-1]
     }
    //  检查栈是否为空
    this.isEmpty = function(){
        return items.length==0
    }
    // 栈大小
    this.size = function(){
        return items.length
    }
 }
//  十进制转二进制
 var divBy2 = function(number){
    var stack = new Stack()
    var string2 =""
    while(number>0){
        // 取整
        var yushu = number%2
        stack.push(yushu)
        number=Math.floor( number/2)
        
    }
    while(!stack.isEmpty()){
        string2+=stack.pop()
    }
    return string2
   
}