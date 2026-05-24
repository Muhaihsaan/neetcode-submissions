class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const count = new Map<string, number>() //declare one hashmap instead of two to reduce space complexity(it becomes O(n) since each character will be unique)

        for (const str of s) { //increment the value of each key value pair (O(n) time complexity)
            count.set(str, (count.get(str) || 0) + 1 )
        } 
         for (const str of t) {//cancels out the value of each key value pair (O(n) time complexity)
            count.set(str, (count.get(str) || 0) - 1 )
        } 
        for (const val of count.values()) {//checks for duplication. If val contains other than 0, then the characters for both args are not identical (O(n) time complexity)
            if (val !== 0) {
                return false
            }
        }
        return true 
    }
}
