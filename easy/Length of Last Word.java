// 100/8

class Solution {
    public int lengthOfLastWord(String s) {
        
        // given a string with words and spaces
        // return length of the last word in the string
        // keep track of curr length of word
        // reset on space

        int currLen = 0;

        for (int i = s.length() - 1; i > -1; i--){
            if (s.charAt(i) != ' '){
                currLen++;
            } else {
                if (currLen > 0){
                    return currLen;
                }
            }
        }

        return currLen;

    }
}