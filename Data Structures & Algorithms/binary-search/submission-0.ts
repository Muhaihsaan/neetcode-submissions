class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number { //Binary search for O(log n) time complexity and O(1) space complexity
        let l = 0 //left pointer at first index
        let r = nums.length - 1 //right pointer at last index

        while (l <= r) { // loop will run until both pointers overlapping each other (still include l === r)
            let m = l + Math.floor((r - l) / 2) // Calculate middle pointers (Math.floor for decimal number)

            if (nums[m] < target) { // if target is higher than the middle, then move left pointer to m + 1
                l = m + 1
            }
            else if (nums[m] > target) { // if target is lower than the middle, then move right pointer to m - 1
                r = m - 1
            }
            else return m // if target is equal to middle, then return m (also force the target number to always be on m)
        }
        return -1 // return -1 if the target is not found anywhere on array





    }
}
