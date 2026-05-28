class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, ''); //turn string to lowercase, use RegEx to strip away non alphabet and number
        
        return cleanStr.split('').reverse().join('') === cleanStr
    }
}
