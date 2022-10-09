/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var currVal = "";
    var currNum = 0;
    var remainder = false;
    var l3 = new ListNode();
    var head = l3;
    
   while (l1 || l2){
       // console.log(l1.val);
       // console.log(l2.val);
       
       if (remainder){
           remainder = false;
           currNum += 1;
           // if there was a remainder from last iteration, add remainder
       }
       
       if (l1){
           currNum += l1.val;
           l1 = l1.next;
       }
       
       if (l2){
           currNum += l2.val;
           l2 = l2.next;
       }
       
       
       if (currNum >= 10){
           remainder = true;
           currNum -= 10;
           // if the number is 10 or greater, remove 10 and add remainder to next iteration
       }
       
       //currVal = currVal.concat(currNum);
       
       // l1.val = currNum;
       // console.log(l1);
       
       head.next = new ListNode(currNum);
       head = head.next;
       
       currNum = 0;
   }
    
    if (remainder){
       head.next = new ListNode(1);
       head = head.next;
    }
    
    return l3.next;
    
};