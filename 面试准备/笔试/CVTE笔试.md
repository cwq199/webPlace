## CVTE笔试 2021/3/12
  ##### 25道选择，js代码为单项选择，其他大部分为多项选择，一道算法（数据结构），一道js编程，90分钟，不能跳题

#### js部分
    闭包,原型链,看代码求输出

#### 网络方面
    跨域,网络缓存，http

#### 浏览器方面
    重绘，会流，合成

#### css
    BFC触发

### 算法
实现一个函数buildTree(root,tavalLevel),生成一颗二叉树，二叉树的节点等于所在的层 ，并实现一个方法printTree(root)层序遍历这颗树

```javascript

 let node = function(val,left,right){
       this.val = val
       this.left = left
       this.right = right
 }
    var root = new node(0,null,null)
    buildTree(root,4)
    printTree(root)
//[[0],[1,1],[2,2,2,2],[3,3,3,3,3,3,3,3],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]]
```

####编程

补充代码实现下面的输出结果

```javascript
    function  main(){
        console.log("this is main excture")
    }
    main.protype.before = function(fn){
        //补充代码
    }
    main.protype.after = function(fn){
        //补充代码
    }

    main.before(function(){
        console.log('this is before main excture')
    }).after(function(){
        console.log('this is after main excture')
    })()
/* 
    输出：
    this is before main excture
    this is main excture
    this is after main excture
*/
