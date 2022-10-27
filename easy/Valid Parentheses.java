import java.util.Stack;
//this will need to be commented out for the code to run on LC

// Runtime: 2 ms, faster than 90.92% of Java online submissions for Valid Parentheses.
// Memory Usage: 40.1 MB, less than 96.56% of Java online submissions for Valid Parentheses.

class Solution {
    public boolean isValid(String s) {
        
        Stack<Integer> stack = new Stack<Integer>(); // the basic premise is FILO to match parentheses

        int hold; // this will hold popped vals
        boolean noPop; // this will ensure we don't pop an empty stack
        
        for (int i = 0; i < s.length(); i++){
            
            noPop = stack.isEmpty() ? true : false;
            // if stack is empty, noPop = true
            
            // the first three if statements here push assigned values to be checked later
            //  the next three exist after a noPop check, to match the previously inserted values
            //  before popping any values, there is an if statement to check if the array is empty (do it once for optimization)
            // After all statements, it returns false in other cases. 
            //  this will happen if there is a non-parentheses character or if the stack is going to be called while empty
            
            if (s.charAt(i) == '('){
                stack.push(1);
            } 
            else if (s.charAt(i) == '{'){
                stack.push(2);
            }
            else if (s.charAt(i) == '['){
                stack.push(3);
            }
            else if (!noPop){
                if (s.charAt(i) == ')'){
                    hold = stack.pop();
                    if (hold != 1){
                        return false;
                    }
                } 
                else if (s.charAt(i) == '}'){
                    hold = stack.pop();
                    if (hold != 2){
                        return false;
                    }
                }
                else if (s.charAt(i) == ']'){
                    hold = stack.pop();
                    if (hold != 3){
                        return false;
                    }
                }
            } else {
                return false;
            }
        }
        
        return stack.isEmpty();
    }
}