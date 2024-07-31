---
title: 常见算法套路
comment: true  
tags:
 - go
categories:
 - 面试
sticky: 1  
---


# 链表

## 双指针

用到双指针的几道链表题：

1、合并两个有序链表

2、链表的分解

3、合并 `k` 个有序链表（先把node存到pq里，每次取最小节点）

4、寻找单链表的倒数第 `k` 个节点

5、寻找单链表的中点

6、判断单链表是否包含环并找出环起点

7、判断两个单链表是否相交并找出交点

```go
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
    // 虚拟头结点
    dummy := &ListNode{-1, nil}
    p := dummy
    p1 := l1
    p2 := l2
    
    for p1 != nil && p2 != nil {
        // 比较 p1 和 p2 两个指针
        // 将值较小的的节点接到 p 指针
        if p1.Val > p2.Val {
            p.Next = p2
            p2 = p2.Next
        } else {
            p.Next = p1
            p1 = p1.Next
        }
        // p 指针不断前进
        p = p.Next
    }
    
    if p1 != nil {
        p.Next = p1
    }
    
    if p2 != nil {
        p.Next = p2
    }
    
    return dummy.Next
}
```

**链表题常用的虚拟头节点技巧，dummy节点**可以避免一些空指针的判断，降低代码复杂度。

:::tip 什么时候用dummy

当需要创建一条新的链表时，可以用dummy节点简化边界处理。

:::

# 数组

## 快慢指针

看一个例子，数组原地去重

```go
func removeDuplicates(nums []int) int {
    if len(nums) == 0 {
        return 0
    }
    slow,fast :=0,0
    for fast<len(nums) {
        if nums[fast] != nums[slow] {
            slow++
             // 维护 nums[0..slow] 无重复
            nums[slow] = nums[fast]
        }
        fast++
    }
    // 数组长度为索引 + 1
    return slow + 1
}
```

滑动窗口框架：

:::code-group

```go
// 滑动窗口算法框架
func slidingWindow(s string, t string) {
    // 初始化need 和 window
    need := make(map[rune]int)
    window := make(map[rune]int)
    for _, c := range t {
        need[c]++
    }

    left, right := 0, 0
    valid := 0
    for right < len(s) {
        c := rune(s[right])
        right++
        // 进行窗口内数据的更新

        for window needs shrink {
            d := rune(s[left])
            left++
            // 进行窗口内数据的一系列更新
        }
    }
}
```

```python
# 滑动窗口算法框架
def slidingWindow(s: str, t: str):
    from collections import defaultdict
    need = defaultdict(int)
    window = defaultdict(int)
    for c in t:
        need[c] += 1

    left, right = 0, 0
    valid = 0
    while right < len(s):
        c = s[right]
        right += 1
        # 进行窗口内数据的一系列更新
        window[c] += 1
        
        while window needs shrink:
            d = s[left]
            left += 1
            # 进行窗口内数据的一系列更新
```

:::

## 左右指针

### 二分查找

```go
func binarySearch(nums []int, target int) int {
    // 一左一右两个指针相向而行
    left, right := 0, len(nums)-1
    for left <= right {
        mid := (left + right) / 2
        if nums[mid] == target {
            return mid
        } else if nums[mid] < target {
            left = mid + 1
        } else if nums[mid] > target {
            right = mid - 1
        }
    }
    return -1
}
```

### 两数之和

**数组有序就可以考虑左右指针**， 类似二分法。

```go
    // 一左一右两个指针相向而行
    left, right := 0, len(nums) - 1
    for left < right {
        sum := nums[left] + nums[right]
        if sum == target {
            // 题目要求的索引是从 1 开始的
            return []int{left + 1, right + 1}
        } else if sum < target {
            left++ // 让 sum 大一点
        } else if sum > target {
            right-- // 让 sum 小一点
        }
    }
    return []int{-1, -1}
}
```

### 反转数组

```go
func reverseString(s []byte) {
    // 一左一右两个指针相向而行
    left, right := 0, len(s)-1
    for left < right {
        // 交换 s[left] 和 s[right]
        temp := s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
}
```

### 回文串判断

```go
func isPalindrome(s string) bool {
    // 一左一右两个指针相向而行
    left := 0
    right := len(s) - 1
    for left < right {
        if s[left] != s[right] {
            return false
        }
        left++
        right--
    }
    return true
}
```

最长回文串

```go
func longestPalindrome(s string) string {
    res := ""
    for i := 0; i < len(s); i++ {
        // 以 s[i] 为中心的最长回文子串
        s1 := palindrome(s, i, i)
        // 以 s[i] 和 s[i+1] 为中心的最长回文子串
        s2 := palindrome(s, i, i + 1)
        // res = longest(res, s1, s2)
        if len(res) > len(s1) {
            res = res
        } else {
            res = s1
        }
        if len(res) > len(s2) {
            res = res
        } else {
            res = s2
        }
    }
    return res
}

func palindrome(s string, l int, r int) string {
    // 防止索引越界
    for l >= 0 && r < len(s) && s[l] == s[r] {
        // 向两边展开
        l--
        r++
    }
    // 返回以 s[l] 和 s[r] 为中心的最长回文串
    return s[l+1 : r]
}
```

# 二叉树

二叉树解题的思维模式分两类：

**1、是否可以通过遍历一遍二叉树得到答案**？如果可以，用一个 `traverse` 函数配合外部变量来实现，这叫「遍历」的思维模式。

**2、是否可以定义一个递归函数，通过子问题（子树）的答案推导出原问题的答案**？如果可以，写出这个递归函数的定义，并充分利用这个函数的返回值，这叫「分解问题」的思维模式。

**如果单独抽出一个二叉树节点，它需要做什么事情？需要在什么时候（前/中/后序位置）做**？其他的节点不用你操心，递归函数会帮你在所有节点上执行相同的操作。

**如果你告诉我，快速排序就是个二叉树的前序遍历，归并排序就是个二叉树的后序遍历，那么我就知道你是个算法高手了**。

快排：

```go
func sort(nums []int, lo, hi int) {
    /****** 前序遍历位置 ******/
    // 通过交换元素构建分界点 p
    p := partition(nums, lo, hi)
    /************************/

    sort(nums, lo, p - 1)
    sort(nums, p + 1, hi)
}
```

归并：

```go
// 定义：排序 nums[lo..hi]
func sort(nums []int, lo int, hi int) {
    mid := (lo + hi) / 2
    // 排序 nums[lo..mid]
    sort(nums, lo, mid)
    // 排序 nums[mid+1..hi]
    sort(nums, mid + 1, hi)

    /****** 后序位置 ******/
    // 合并 nums[lo..mid] 和 nums[mid+1..hi]
    merge(nums, lo, mid, hi)
    /*********************/
}
```

## 遍历框架

```go
func traverse(root *TreeNode) {
    if root == nil {
        return
    }
    // 前序位置
    traverse(root.Left)
    // 中序位置
    traverse(root.Right)
    // 后序位置
}
```

```go

// 迭代遍历数组
func traverse(arr []int) {
    for i:=0; i<len(arr); i++ {

    }
}

// 递归遍历数组
func traverse(arr []int, i int) {
    if i == len(arr) {
        return
    }
    // 前序位置
    traverse(arr, i+1)
    // 后序位置
}

// 迭代遍历单链表
func traverse(head *ListNode) {
    for p:=head; p!=nil; p=p.Next {

    }
}

// 递归遍历单链表
func traverse(head *ListNode) {
    if head == nil {
        return
    }
    // 前序位置
    traverse(head.Next)
    // 后序位置
}
```

单链表和数组的遍历可以是迭代的，也可以是递归的，**二叉树这种结构无非就是二叉链表**，由于没办法简单改写成迭代形式，所以一般说二叉树的遍历框架都是指递归的形式。

只要是递归形式的遍历，都可以有前序位置和后序位置，分别在递归之前和递归之后。

如果让你**倒序打印**一条单链表上所有节点的值，你怎么搞？

实现方式当然有很多，但如果你对递归的理解足够透彻，可以利用后序位置来操作：

```go
func traverse(head *ListNode) {
    if head == nil {
        return
    }
    traverse(head.Next)
    // 后序位置
    fmt.Println(head.Val)
}
```

> 二叉树中用遍历思路解题时函数签名一般是 `void traverse(...)`，没有返回值，靠更新外部变量来计算结果，而用分解问题思路解题时函数名根据该函数具体功能而定，而且一般会有返回值，返回值是子问题的计算结果。

### 两种方案解决二叉树的最大深度

:::code-group

```go
// 记录最大深度
var res int
// 记录遍历到的节点的深度
var depth int

// 主函数
func maxDepth(root *TreeNode) int {
	traverse(root)
	return res
}

// 二叉树遍历框架
func traverse(root *TreeNode) {
	if root == nil {
		return
	}
	// 前序位置
	depth++
	if root.Left == nil && root.Right == nil {
		// 到达叶子节点，更新最大深度
		res = max(res, depth)
	}
	traverse(root.Left)
	traverse(root.Right)
	// 后序位置
	depth--
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```

```go
func maxDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }
    // 利用定义，计算左右子树的最大深度
    leftMax := maxDepth(root.Left)
    rightMax := maxDepth(root.Right)
    // 整棵树的最大深度等于左右子树的最大深度取最大值，
    // 然后再加上根节点自己
    res := max(leftMax, rightMax) + 1

    return res
}

func max(a int, b int) int {
    if a > b {
        return a
    }
    return b
}
```

:::

## 二叉树的前中后序遍历

- 前序遍历

  **一棵二叉树的前序遍历结果 = 根节点 + 左子树的前序遍历结果 + 右子树的前序遍历结果**

  :::code-group

  ```go
  func preorderTraversal(root *TreeNode) []int {
      res := make([]int, 0)
      traverse(root, &res)
      return res
  }
  
  // 二叉树遍历函数
  func traverse(root *TreeNode, res *[]int) {
      if root == nil {
          return
      }
      // 前序位置
      *res = append(*res, root.Val)
      traverse(root.Left, res)
      traverse(root.Right, res)
  }
  ```

  ```go
  func preorderTraversal(root *TreeNode) []int {
      res := make([]int, 0)
      if root == nil {
          return res
      }
      
      // 前序遍历的结果，root.val 在第一个
      res = append(res, root.Val)
      // 利用函数定义，后面接着左子树的前序遍历结果
      res = append(res, preorderTraversal(root.Left)...)
      // 利用函数定义，最后接着右子树的前序遍历结果
      res = append(res, preorderTraversal(root.Right)...)
      return res
  }
  ```

  :::

  

- 中序遍历

  :::code-group

  ```go
  func inorderTraversal(root *TreeNode) []int {
      result := make([]int, 0)
      traverse(root, &result)
      return result
  }
  
  func traverse(root *TreeNode, result *[]int) {
      if root == nil {
          return
      }
      
      traverse(root.Left, result)
      // 中序位置
      *result = append(*result, root.Val)
      traverse(root.Right, result)
  }
  ```

  ```go
  func inorderTraversal(root *TreeNode) []int {
      res := make([]int, 0)
      if root == nil {
          return res
      }
      
      // 利用函数定义，后面接着左子树的前序遍历结果
      res = append(res, inorderTraversal(root.Left)...)
      res = append(res, root.Val)
      // 利用函数定义，最后接着右子树的前序遍历结果
      res = append(res, inorderTraversal(root.Right)...)
      return res
  }
  ```

  :::

- 后序遍历

  :::code-group

  ```go
  func postorderTraversal(root *TreeNode) []int {
      result := make([]int, 0)
      traverse(root, &result)
      return result
  }
  
  func traverse(root *TreeNode, result *[]int) {
      if root == nil {
          return
      }
      
      traverse(root.Left, result)
      traverse(root.Right, result)
      // 后序位置
      *result = append(*result, root.Val)
  }
  ```

  ```go
  func postorderTraversal(root *TreeNode) []int {
      res := make([]int, 0)
      if root == nil {
          return res
      }
      
      // 利用函数定义，后面接着左子树的前序遍历结果
      res = append(res, postorderTraversal(root.Left)...)
      // 利用函数定义，最后接着右子树的前序遍历结果
      res = append(res, postorderTraversal(root.Right)...)
      res = append(res, root.Val)
      return res
  }
  ```

  :::

- 层序遍历

  :::code-group

  ```go
  func levelOrder(root *TreeNode) [][]int {
      res := [][]int{}
      if root == nil {
          return res
      }
      q := []*TreeNode{root}
      for len(q) > 0 {
          sz := len(q)
          level := []int{}
          for i := 0; i < sz; i++ {
              cur := q[0]
              q = q[1:]
              level = append(level, cur.Val)
              if cur.Left != nil {
                  q = append(q, cur.Left)
              }
              if cur.Right != nil {
                  q = append(q, cur.Right)
              }
          }
          res = append(res, level)
      }
      return res
  }
  ```

  ```go	
  func levelOrder(root *TreeNode) [][]int {
      res := make([][]int, 0)
      traverse(root, 0, &res)
      return res
  }
  
  func traverse(root *TreeNode, depth int, res *[][]int) {
      if root == nil {
          return
      }
      if len(*res) <= depth {
          *res = append(*res, []int{})
      }
      (*res)[depth] = append((*res)[depth], root.Val)
      traverse(root.Left, depth+1, res)
      traverse(root.Right, depth+1, res)
  }
  
  ```
  :::


:::tip 总结

遇到一道二叉树的题目时的通用思考过程是：

**1、是否可以通过遍历一遍二叉树得到答案**？如果可以，用一个 `traverse` 函数配合外部变量来实现。

**2、是否可以定义一个递归函数，通过子问题（子树）的答案推导出原问题的答案**？如果可以，写出这个递归函数的定义，并充分利用这个函数的返回值。

**3、无论使用哪一种思维模式，你都要明白二叉树的每一个节点需要做什么，需要在什么时候（前中后序）做**。

**前序位置的代码只能从函数参数中获取父节点传递来的数据，而后序位置的代码不仅可以获取参数数据，还可以获取到子树通过函数返回值传递回来的数据**。

**一旦你发现题目和子树有关，那大概率要给函数设置合理的定义和返回值，在后序位置写代码了**。

:::

## 参考

- [东哥带你刷二叉树](https://labuladong.github.io/algo/di-ling-zh-bfe1b/dong-ge-da-334dd/)



