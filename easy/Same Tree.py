# 93/73

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:

        # roots of two binary trees
        # trees p and q
        # see if they are the same tree
        # all children must be identical

        def treeCheck(p,q):
            if not p and not q:
                return True
            if not p or not q:
                return False
            if p.val != q.val:
                return False
            return treeCheck(p.right,q.right) and treeCheck(p.left,q.left)
        
        return treeCheck(p,q)