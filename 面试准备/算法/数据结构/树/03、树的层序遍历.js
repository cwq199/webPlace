

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    // 存放所有节点
    const res = []
    // 如果root为空
    if(!root){
        return res
    }
    // 存放每一层的节点
    const q = []
    q.push(root)
    while(q.length!==0){
        // 保存本层节点数
        const currentLevelSize = q.length
        // 为本层创建一个数组
        res.push([])
        // 将本层节点放入结果中
        for(let i=1;i<=currentLevelSize;i++){
            const node = q.shift()
            res[res.length-1].push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
    }
    return res
};