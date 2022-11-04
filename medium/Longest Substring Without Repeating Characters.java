// this is super unoptimized
//... maybe ill fix it later

class Solution {
    public int lengthOfLongestSubstring(String s) {

        //read through
        //read each character
        //keep track of read characters
        //if character matches existing character, end length of string, start at 0
        //start at... start of current string + 1 (unoptimized)

        String currString = "";
        //currLen will be currString.length, compared against maxLen

        int maxLen = 0;

        for (int i = 0; i < s.length(); i++){

            char currChar = s.charAt(i);

            if (currString.indexOf(currChar) == -1){
                currString += currChar;
            } else {
                i -= currString.length(); 
                currString = "";
                // if repeat character, start at i at next character after start of string
                // ensures that we can look at all longest strings
            }
            if (currString.length() > maxLen){
                maxLen = currString.length();
            }

            //System.out.println(currString +" "+ maxLen);

        }

        return maxLen;

    }
}