function fn(a,c){
    console.log(a)  //function(){}
    var a = 111   
    console.log(a)  //111
    console.log(c)  //function(){}
    function a(){
    }
    if(false){
        var d = 222
    }
    console.log(a)  /// 111
    console.log(d)  //undefined  not und
    console.log(b)  //undefined
    var b = function(){}
    console.log(b)   //function(){}
    function c(){

    }
    console.log(c)  //function(){}

}

fn(1,3)

/*
        函数作用域 AO
            创建AO对象
            找变量声明 形参 将变量名、形参名 当作AO对象的属性名 值为undefined
            将实参和形参相统一
            在函数体里面找函数声明 值赋予函数体
            AO{
                a:undefined     1     function
                c:undefined     3     function
                b:undefined     
                d:undefined
            }

 */