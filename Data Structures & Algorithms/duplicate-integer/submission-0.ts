class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
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
