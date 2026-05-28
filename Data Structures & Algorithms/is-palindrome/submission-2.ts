class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNumeric(char: string): boolean { //detect alphanumeric 
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        )
    } 
    isPalindrome(s: string): boolean { // use two pointers to detect palindrome
        let l = 0; // left pointer
        let r = s.length -1 ; // right pointer

        while (l < r) {
            while (l < r && !this.isAlphaNumeric(s[l])) { //skip by moving l pointer forward if l is not overlapping with r and not alphanumeric
                l++
            }

            while (r > l && !this.isAlphaNumeric(s[r])) { // vice versa (move pointer backward)
                r--
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) { // return false if palindrome mismatch
                return false
            }

            l++ //increment and decrement each pointer after each check (until overlap)
            r--
        }
        return true
    }
}
