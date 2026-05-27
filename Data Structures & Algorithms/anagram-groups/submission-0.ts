class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]> //declare hashmap to store sorted value

        for (let i = 0; i < strs.length; i++) {
            const current = strs[i].split('').sort().join('') // use sort to get anagrams
            if (!map.has(current)){ // store the sorted key to hashmap if the key havent been stored yet
            map.set(current, [])
            }
            map.get(current).push(strs[i]) //if hashmap already have the sorted key, push it to the hashmap value
        }
        return Array.from(map.values()); //return the hashmap value only
    }
}
