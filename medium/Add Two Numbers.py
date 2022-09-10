# Definition for singly-linked list.
class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next
        
        
def printList(head):
 
    ptr = head
    while ptr:
        print(ptr.data, end=' —> ')
        ptr = ptr.next
    print('None')

def pop(headRef):
 
    # underflow condition
    if headRef is None:
        return None
 
    result = headRef.data       # pull out data before the node is deleted
    headRef = headRef.next      # unlink the head node for the caller
 
    print('The popped node is', result)
 
    return headRef

class Link:
    def __init__(self):
        self.head = None

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        
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
        
        finalist = Link()
        finalist = head = Node(string[i])
        
        for i in range(len(string)-2,-1,-1):
            finalist.next = Node(string[i])
            finalist = finalist.next
            
            
            
        # points to the head node of the linked list
        head = None
 
        # construct a linked list
        for i in reversed(range(1, 5)):
            head = Node(i, head)
 
        head = pop(head)
 
        # print remaining linked list
        printList(head)
 
            
        
            