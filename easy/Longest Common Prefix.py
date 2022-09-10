class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # print(strs)
        # print(strs[0])
        # print(strs[0][0])
        
        # iterate over length of strs array
        # find loggest string
        # find shortest string?
        # set length of second iterative loop to length of shortest string
        # track if strs[0,1,2..][i] all equal each other
        # ba da bop boop pow
        
        minlen = len(strs[0])
        # set longest string to initial 0
        # compare in iterative loop
        
        for i in range(1,len(strs)):
            # print(i)
            if minlen > len(strs[i]):
                minlen = len(strs[i])
        
        # print(minlen)
        # works, prints 4 from "flow"
        
        str = ""
        
        for i in range(0,minlen):
            match = strs[0][i]
            for x in range(1,len(strs)):
                # print(strs[x][i])
                if strs[x][i] != match:
                    return str
            str += match
        return str