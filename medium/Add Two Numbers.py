# Definition for singly-linked list.
class Node:
    def __init__(self, data):
        self.data = data
        self.next = next

class Link:
    def __init__(self):
        self.head = None

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        
        head = None
        data = None
        
        l1arr = []
        l2arr = []
        cnt = 0
        
        while l1 is not None:
            # print(l1.val)
            l1arr += [l1.val]
            l1 = l1.next
            cnt += 1
            
        while l2 is not None:
            # print(l2.val)
            l2arr += [l2.val]
            l2 = l2.next
            
        l1val = 0
        l2val = 0
        
        for i in range(cnt):
            cnt -= 1
            l1val += l1arr[i]*(10**cnt)
            l2val += l2arr[i]*(10**cnt)
        
        # print(l1val," ",l2val)
        finalsum = l1val + l2val
        string = str(finalsum)
        
        for i in range(len(string)-1,-1,-1):
            print(string[i])
        