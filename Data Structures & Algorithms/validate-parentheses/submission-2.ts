class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean { 
      const closingBracket = { //Declare closingBracket and its opening pair
        ')' : '(',
        '}' : '{',
        ']' : '['
      }  

      const result = []

      for (let i = 0; i < s.length; i++) { //Stack method to iterate once
        if (s[i] in closingBracket) { //if s[i] contains closing bracket, pop last item and compare with its opening bracket
            const topElement = result.pop() 

            if (topElement !== closingBracket[s[i]]) { // if result[length -1] isnt match with its pair, return false
                return false
            }
        } 
        else { // if s[i] contains opening bracket, push to the result array
        result.push(s[i])
        }
      }
        return result.length === 0 //if length === 0, then every bracket pair is correct
    }
}
