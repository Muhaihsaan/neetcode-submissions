class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
    const result = new Set(nums);

    for (let i = 0; i <= nums.length; i++){
        if (!result.has(i)) {
            return i
        }
    }
    return -1

    }
}
