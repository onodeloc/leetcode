class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        
        string = ""
        carry = 0
        
        while l1 is not None and l2 is not None:
            # print(l1.val)
            # print(l2.val)
            
            if (l1.val + l2.val) < 10:
                if carry == 1:
                    # if carry == 1, 1 to val, reset carry
                    string += str(l1.val + l2.val + 1)
                    carry = 0
                else:
                    # else add normally
                    string += str(l1.val + l2.val)
            else:
                string += str(l1.val + l2.val - 10)
                carry = 1
            l1 = l1.next
            l2 = l2.next
        
        print(string)
        
        finalist = ListNode(string[0])
        ptr = finalist
        
        for i in range(1,len(string)):
            ptr.next = ListNode(string[i])
            ptr = ptr.next
        
        return finalist
    
    # basic addition problem
    # add the first elements of each LL
    # if 10 or >, carry digit
    # otherwise pass new digit (l1[0] + l2[0]) ass l3[0]
            
        
            