class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
    // Could use sort here, but Set have generally better time complexity (uses more memory as tradeoffs because of extra Set variable), and O(n) space complexity is enough for small datasets so we use Set.
     const seen = new Set<number>()
        for (let i = 0; i < nums.length; i++) {
            const current = nums[i]
            if (seen.has(current)) {
                return true
            } 
            seen.add(current)
        }
        return false
    }
}
