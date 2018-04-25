/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let len = lists.length;
    let temp;
    if(!len) return lists;
    for(let i = 0; i < len; i++){
        temp = merge2Lists(temp, lists[i])
    }
    return temp;   
};

var merge2Lists =  function(l1,l2){
    if (!l1) return l2;
    if (!l2) return l1;
    let p1 = l1.val < l2.val ? l1 : l2;
    let p2 = l1.val >= l2.val ? l1 : l2;
    let pre1 = p1;
    let pre2 = p2;
    while(p1 && p2){
        if(p1.val <p2.val){
            pre1 = p1;
            p1 = p1.next;
        }else{
            pre2 = p2.next;
            p2.next = pre1.next;
            pre1.next = p2;
            pre1 = pre1.next;
            p2 = pre2;
        }
    }
    if(p2){
        pre1.next = p2;
    }
    return l1.val < l2.val ? l1 : l2;
}