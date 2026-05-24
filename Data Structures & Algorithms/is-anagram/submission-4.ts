     class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
    const normalize = (str: string) =>
    str.split('').sort().join('')
    return normalize(s) === normalize(t)
    }
}
