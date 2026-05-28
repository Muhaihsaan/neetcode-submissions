class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number { // two pointers for calculating buy and sell time
        let result = 0
        let l = 0 // left pointer for buy time
        let r = l + 1 // right pointer for sell time

        while (r < prices.length) { // loop until end of sell time
            if (prices[l] < prices[r]) { // if selling today is profit, update the result
                const profit = prices[r] - prices[l]
                profit > result ? result = profit : result
            }
            if (prices[l] > prices[r]) { // if not profit (loss or equal), move left pointer to the sell day (this means today is the cheapest day)
                l = r
            }
            r++ // move right pointer (sell day) forward to continue iteration for the next day

        }
        return result

        }
    }
