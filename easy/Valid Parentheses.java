import java.util.Stack;
//this will need to be commented out for the code to run on LC

class Solution {
    public boolean isValid(String s) {
        
        Stack<Integer> stack = new Stack<Integer>();
        int hold;
        
        try{
        for (int i = 0; i < s.length(); i++){
            
            if (s.charAt(i) == '('){
                stack.push(1);
            }
            if (s.charAt(i) == ')'){
                hold = stack.pop();
                if (hold != 1){
                    return false;
                }
            }
            if (s.charAt(i) == '{'){
                stack.push(2);
            }
            if (s.charAt(i) == '}'){
                hold = stack.pop();
                if (hold != 2){
                    return false;
                }
            }
            if (s.charAt(i) == '['){
                stack.push(3);
            }
            if (s.charAt(i) == ']'){
                hold = stack.pop();
                if (hold != 3){
                    return false;
                }
            }
        }
        } catch(Exception e) {
            return false;
        }
        
        if (stack.isEmpty()){
            return true;
        }
        return false;
    }
}