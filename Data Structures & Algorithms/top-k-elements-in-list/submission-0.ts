class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>(); // build hashmap for frequency counting

        for (let i = 0; i < nums.length; i++) { // frequency counting
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        } 
        const entries = Array.from(map.entries()); //convert map to array
        entries.sort((a, b) => b[1] - a[1]) //descending sort the value (frequency) of each key

        const result: number[] = []

        for (let i = 0; i < k; i++) {
            result.push(entries[i][0]) //push only the highest number based on k
        }
        return result
    }
}
