/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if (!head) return null

        let prev = null // prev set to null for initial state
        let curr = head // set current on head for initial state

        while (curr !== null) {
            const temp = curr.next //save the next node to continue the next chain
            curr.next = prev //reverse next to point at previous
            prev = curr // update previous be set at current
            curr = temp // update current to set at next node
        }
        return prev // return prev since now prev is on the last item (new head)
    }
}
