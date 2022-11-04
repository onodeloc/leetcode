//super unoptimized

class Solution {
    public int lengthOfLastWord(String s) {
        
        // given a string with words and spaces
        // return length of the last word in the string
        // keep track of curr length of word
        // reset on space

        int currLen = 0;
        int lastLen = 0;

        for (int i = 0; i < s.length(); i++){
            if (s.charAt(i) != ' '){
                currLen++;
                lastLen = currLen;
            } else {
                currLen = 0;
            }
        }

        return lastLen;

    }
}