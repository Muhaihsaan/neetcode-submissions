class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hash = new Map<number, number>() // use one hash for O(n) time complexity (also reduce space complexity instead of using nested loop on [i] and [j])

        for (let i = 0; i < nums.length; i++) { //one iteration only for O(n) time complexity
            const difference = target - nums[i] //used to directly gets the remaining number (desired value) when reduced with target

            if (hash.has(difference)) { //if the remaining number is on hash, we return the [idx, i]
            return [hash.get(difference), i]
            } 

            hash.set(nums[i], i) // if not found yet, build the hash key:value for later result
        }
        return [] // if no results found, return empty array
    }
}
