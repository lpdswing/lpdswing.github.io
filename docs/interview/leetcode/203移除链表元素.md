---
title: 203. 移除链表元素
comment: true  
tags:
 - go
 - python
categories:
 - 面试
# 设置首页的精选文章，值越大越靠前
sticky: 1  
---
# 203.移除链表元素
[传送门](https://leetcode.cn/problems/remove-linked-list-elements/)

![](https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202305190923246.png)
## 解题思路
- 创建哑结点方便操作， 避免链表头判断
## 代码
:::code-group
```go [go迭代]
func removeElements(head *ListNode, val int) *ListNode {
    if head == nil {
        return head
    }
    dummy := &ListNode{Val: 0, Next: head}
    cur := dummy
    for cur.Next != nil {
        if cur.Next.Val == val {
            cur.Next = cur.Next.Next
        } else {
            cur = cur.Next
        }
    }
    return dummy.Next
}
```

```python [python递归]
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        if not head:
            return head
        head.next = self.removeElements(head.next, val)
        if head.val == val:
            return head.next
        return head
```

```python [python迭代]
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        if not head:
            return head
        res = ListNode('inf', head)
        prev = res
        while prev.next:
            if prev.next.val == val:
                prev.next = prev.next.next
            else:
                prev = prev.next
        return res.next
```
:::


