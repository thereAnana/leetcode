/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode pHead(0),*li=&pHead;
        int plus=0,sum;
       while(l1||l2||plus){
            sum = (l1?l1->val:0) + (l2?l2->val:0) + plus;  
            plus = sum/10;
            li->next =new ListNode(sum%10); //how to continue?
            //li =new ListNode(sum%10);
            //pnew->pNext=NULL;ptemp->pNext=pnew;ptemp=pnew;
            li =li->next;
            l1 =(l1?l1->next:0);
            l2 =(l2?l2->next:0);
        }
        return pHead.next;
    }
};