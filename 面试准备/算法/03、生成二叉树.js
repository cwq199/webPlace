/* 实现一个函数buildTree(root,tavalLevel),生成一颗二叉树，二叉树的节点等于所在的层 ，并实现一个方法printTree(root)层序遍历这颗树

javascript

 let node = function(val,left,right){
       this.val = val
       this.left = left
       this.right = right
 }
    var root = new node(0,null,null)
    buildTree(root,4)
    printTree(root)
//[[0],[1,1],[2,2,2,2],[3,3,3,3,3,3,3,3],[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]]
 */


let node = function(val,left,right){
    this.val = val
    this.left = left
    this.right = right
}
var root = new node(0,null,null)
buildTree(root,2)
console.log(printTree(root))


function buildTree(root,n){
    let  level = 0
    let  stack = [root]
    while(level<=n){
        level++
        let len = stack.length
        for(let i=0;i<len;i++){
            let n = stack.shift()
            n.left=new node(level,null,null)        
            n.right=new node(level,null,null)
            stack.push(n.left)
            stack.push(n.right) 
            
        }
    }
    return root
}
function printTree(root){
        var res=[]
        let stack = [root]
        while(stack.length){
            let len = stack.length
            let arr=[]
            for(let i=0;i<len;i++){
                let node = stack.shift()
                arr.push(node.val)
                if(node.left) stack.push(node.left)
                if(node.right) stack.push(node.right)
            }
            res.push(arr)
        }
        return res

}
