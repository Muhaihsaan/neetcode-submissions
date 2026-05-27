class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]> //declare hashmap to store char freq and the actual strings

        for (const str of strs) {
            const count = Array(26).fill(0) // create array with length of 26 (alphabets) and fill it with 0 as initial value

            for (const char of str) {
                count[char.charCodeAt(0) - 97]++ //-97 used to get the index of the alphabet (eg: ASCII: "a" = 97, "b" = 98, "c" = 99)
            }

            const key = count.join(',') //join the alphabet indexes to group it as unique string key for the anagram

            if(!map.has(key)) { //if hashmap doesnt store the key for alphabet index, then store it
                map.set(key, [])
            }

            map.get(key).push(str) //if key exists on hashmap, store the value
        }
        return Array.from(map.values()) //return only the value from hashmap
    }
}
