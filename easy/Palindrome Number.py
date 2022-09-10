class Solution:
    def isPalindrome(self, x: int) -> bool:
        
        # have integer x
        # x = 121
        pal = str(x)
        paltest=""
        # pal = "121"
        
        for i in range(len(pal)-1,-1,-1):
            print(i)
            paltest += pal[i]
            
        
        if paltest == pal:
            return True
        return False