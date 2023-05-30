---
title: 算法框架思维
comment: true  
tags:
 - go
categories:
 - 面试
# 设置首页的精选文章，值越大越靠前
sticky: 1  
---

# 数据结构的存储方式

数据结构的存储结构只有2种，只有链表和数组。

比如说「队列」、「栈」这两种数据结构既可以使用链表也可以使用数组实现。用数组实现，就要处理扩容缩容的问题；用链表实现，没有这个问题，但需要更多的内存空间存储节点指针。

「图」的两种表示方法，邻接表就是链表，邻接矩阵就是二维数组。邻接矩阵判断连通性迅速，并可以进行矩阵运算解决一些问题，但是如果图比较稀疏的话很耗费空间。邻接表比较节省空间，但是很多操作的效率上肯定比不过邻接矩阵。

「树」，用数组实现就是「堆」，因为「堆」是一个完全二叉树，用数组存储不需要节点指针，操作也比较简单；用链表实现就是很常见的那种「树」，因为不一定是完全二叉树，所以不适合用数组存储。为此，在这种链表「树」结构之上，又衍生出各种巧妙的设计，比如二叉搜索树、AVL 树、红黑树、区间树、B 树等等，以应对不同的问题。

二者的优缺点：

**数组**由于是紧凑连续存储,可以随机访问，通过索引快速找到对应元素，而且相对节约存储空间。但正因为连续存储，内存空间必须一次性分配够，所以说数组如果要扩容，需要重新分配一块更大的空间，再把数据全部复制过去，时间复杂度 O(N)；而且你如果想在数组中间进行插入和删除，每次必须搬移后面的所有数据以保持连续，时间复杂度 O(N)。

**链表**因为元素不连续，而是靠指针指向下一个元素的位置，所以不存在数组的扩容问题；如果知道某一元素的前驱和后驱，操作指针即可删除该元素或者插入新元素，时间复杂度 O(1)。但是正因为存储空间不连续，你无法根据一个索引算出对应元素的地址，所以不能随机访问；而且由于每个元素必须存储指向前后元素位置的指针，会消耗相对更多的储存空间。

> 参考自laubladong算法

# 数据结构的基本操作

对任何数据结构，操作无非是遍历和访问。也就是增删改查。

从顶端来看，遍历和访问分为两种形式： 线性访问，非线性访问。

- 数组访问

  ```go
  func traverse(arr []int) {
      for i := 0; i < len(arr); i++ {
          // 迭代访问 arr[i]
      }
  }
  ```

- 链表访问

  ```go
  type ListNode struct {
      val int
      next *ListNode
  }
  
  func traverse(head *ListNode) {
      for p := head; p != nil; p = p.next {
          // 迭代访问 p.val
      }
  }
  
  func traverseRecursively(head *ListNode) {
      // 递归访问 head.val
      traverseRecursively(head.next)
  }
  ```

- 二叉树的遍历

  ```go
  // 基本的二叉树节点
  type TreeNode struct {
      val int
      left *TreeNode
      right *TreeNode
  }
  
  // 后序遍历二叉树
  func traverse(root *TreeNode) {
      if root != nil {
          traverse(root.left)
          traverse(root.right)
      }
  }
  ```

- N叉树的遍历框架

  ```go
  type TreeNode struct {
      val int
      children []*TreeNode
  }
  
  func traverse(root *TreeNode) {
      for _, child := range root.children {
          traverse(child)
      }
  }
  ```

  `N` 叉树的遍历又可以扩展为图的遍历，因为图就是好几 `N` 叉棵树的结合体。



> 刷题顺序，先刷二叉树，链表，数组。再去刷动态规划，回溯等算法。

> 涉及到递归的问题，基本上都是树的问题。

