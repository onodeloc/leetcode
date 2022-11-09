// 5/5

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
 * @return {number}
 */
 var maxDepth = function(root) {
    // given root of binary tree
    // return maximum depth
    // essentially, go through all nodes

    var currDepth = 0;
    var maxDepth = 0;
    // console.log(root.val);
    // console.log(root.left);
    // console.log(root.right);

    // while currNode is not null
    // if left node is not null, recurse on left node
    // increment depth?
    // if right node is not null, recurse on right node
    // increment depth?

    const searchTree = (root) => {
        console.log(root);
        if (root !== null){
            currDepth++;
            if (root.left !== null){
                searchTree(root.left);
            }
            if (root.right !== null){
                searchTree(root.right);
            }

            if (currDepth > maxDepth){
                maxDepth = currDepth;
            }
            currDepth--;
        }

        return maxDepth;
    }

    return searchTree(root);
    
};