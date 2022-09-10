# initial linked list printing
# output test

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        
        class Node:
            def __init__(self, val=0, next=None):
                self.val = val
                self.next = next
        
        class linker:
            def __init__(self):
                self.head = None

            def linkerprint(self):
                toprint = self.head
                while toprint is not None:
                    print (toprint.val)
                    toprint = toprint.next
                    
                
        l1 = linker()
        l1.head = Node("")
        l1.linkerprint()