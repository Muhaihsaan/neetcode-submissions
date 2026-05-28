class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const result = [];

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === '+') {
                const last = result[result.length -1]
                const secondLast = result[result.length -2]
                result.push(last + secondLast)
            }
            else if (operations[i] === 'C') {
                result.pop()
            }
            else if (operations[i] === 'D') {
                const last = result[result.length -1]
                result.push(last * 2)
            }
            else {
            result.push(Number(operations[i]))
            }
        }
        return result.reduce((total, curr) => total + curr, 0)
    }
}
