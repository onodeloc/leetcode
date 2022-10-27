import java.util.Stack;
//this will need to be commented out for the code to run on LC

// Runtime: 1 ms, faster than 99.78% of Java online submissions for Valid Parentheses.
// Memory Usage: 40.2 MB, less than 94.20% of Java online submissions for Valid Parentheses.

class Solution {
    public boolean isValid(String s) {
        
        Stack<Integer> stack = new Stack<Integer>(); // the basic premise is FILO to match parentheses
        
        for (int i = 0; i < s.length(); i++){
            
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
            else if (!stack.isEmpty()){
                if (s.charAt(i) == ')'){
                    if (stack.pop() != 1){
                        return false;
                    }
                } 
                else if (s.charAt(i) == '}'){
                    if (stack.pop() != 2){
                        return false;
                    }
                }
                else if (s.charAt(i) == ']'){
                    if (stack.pop() != 3){
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