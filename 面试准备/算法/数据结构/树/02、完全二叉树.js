/*
    树的基本结构
 */
    function TreeNode(value,left,right){
        this.value = value
        this.left = left
        this.right = right
    }

    TreeNode.prototype = {
        show:function(){
            console.log(this.data)
        }
    }

    function Tree(){
        this.root = null
    }

Tree.prototype ={
    /* 
        插入
    */
   insert:function(data){
    //    创建一个新节点
       var node = new TreeNode(data,null,null)
    //   不存在根节点
       if(!this.root){
           this.root = node
           return 
       }
    // 记录当前节点 
       var current = thid.root
    //    记录父节点
       var parent = null
    //    遍历
       while(current){
        //    当前父节点为当前节点
                   parent = current
        //   
           if(data<parent.value){
               current = current.left
               if(!current){
                   parent.left = node
                   return
               }
           }else{
               current = current.right
               if(!right){
                   parent.right = node
                   return
               }
           }
       }

   },

//    前序遍历
   preOrder:function(node){
        if(node){
            node.show()
            this.preOrder(this.left)
            this.preOrder(right)
        }

   },

// 中序遍历
middleOrder:function(node){
    if(node){
        this.middleOrder(this.left)
        node.show()
        this.middleOrder(right)
    }

},
// 后序遍历
laterOrder:function(node){
    if(node){
        this.laterOrder(node.left)
        this.laterOrder(node.right)
        node.show()
    }
},
// 获取最小节点 :寻找最左子节点
getMin:function(){
    var current = this.root
    while(current){
        if(!current.left){
            return current
        }
        current = current.left
    }
},

// 获取最大节点
getMin:function(){
  var current = this.root
  while(current){
      if(!current.right){
          return current
      }
      current = current.right
  }
},
// 获取节点深度
getDeep:function(node,deep){
    deep =deep||0
    if(node==null){
        return deep
    }
    deep++
    var dleft = this.getDeep(node.left,deep)
    var dright = this.getDeep(node.right,deep)
    return Math.max(dleft,dright)
}

}