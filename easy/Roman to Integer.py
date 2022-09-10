class Solution:
    def romanToInt(self, s: str) -> int:
        
        totalsum = 0
        toggle = True
        # s[i+1] results in an error on last element
        # we can track the toggle length
        
        
        i = len(s)-1
        
        while (i != -1):
            
            if i == 0:
                # if i == 0, no dual symbols
                if s[i] == "I":
                    totalsum+=1
                    i = i - 1
                elif s[i] == "V":
                    totalsum+=5
                    i = i - 1
                elif s[i] == "X":
                    totalsum+=10
                    i = i - 1
                elif s[i] == "L":
                    totalsum+=50
                    i = i - 1
                elif s[i] == "C":
                    totalsum+=100
                    i = i - 1
                elif s[i] == "D":
                    totalsum+=500
                    i = i - 1
                elif s[i] == "M":
                    totalsum+=1000
                    i = i - 1
            else:
                # else, count s[i-1]
                if s[i-1]+s[i] == "IV":
                    print("iv ",totalsum," ",i)
                    totalsum+=4
                    i = i - 2
                elif s[i-1]+s[i] == "IX":
                    print("ix")
                    totalsum+=9
                    i = i - 2
                elif s[i-1]+s[i] == "XL":
                    print("xl")
                    totalsum+=40
                    i = i - 2
                elif s[i-1]+s[i] == "XC":
                    print("xc ",totalsum)
                    totalsum+=90
                    i = i - 2
                elif s[i-1]+s[i] == "CD":
                    print("cd")
                    totalsum+=400
                    i = i - 2
                elif s[i-1]+s[i] == "CM":
                    print("cm")
                    totalsum+=900
                    i = i - 2
                elif s[i] == "I":
                    totalsum+=1
                    i = i - 1
                    print(totalsum," ",i)
                elif s[i] == "V":
                    totalsum+=5
                    i = i - 1
                elif s[i] == "X":
                    totalsum+=10
                    i = i - 1
                elif s[i] == "L":
                    totalsum+=50
                    i = i - 1
                elif s[i] == "C":
                    totalsum+=100
                    i = i - 1
                elif s[i] == "D":
                    totalsum+=500
                    i = i - 1
                elif s[i] == "M":
                    totalsum+=1000
                    i = i - 1
                    
                
        
        
        return totalsum
            