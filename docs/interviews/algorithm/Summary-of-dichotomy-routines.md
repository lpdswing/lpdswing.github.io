---
title: 二分法套路总结
comment: true  
tags:
 - go
categories:
 - 面试
sticky: 1  
---

## 寻找一个数

基本的二分搜索, leetcode:704

```go
func binarySearch(nums []int, target int) int {
    left := 0 // 左指针
    right := len(nums) - 1 // 右指针，注意

    for left <= right {
        mid := left + (right - left) / 2 // 中间位置
        if nums[mid] == target { // 找到目标值
            return mid
        } else if nums[mid] < target { // 目标值在右半部分，注意
            left = mid + 1
        } else if nums[mid] > target { // 目标值在左半部分，注意
            right = mid - 1
        }
    }
    return -1 // 未找到
}
```

## 寻找左侧边界

比如给一个数组[1,2,2,2,3], target=2, 寻找左侧边界，应该返回index为1.

```go
func leftBound(nums []int, target int) int {
    left := 0
    right := len(nums)

    for left < right {
        mid := left + (right - left) / 2
        if nums[mid] == target {
            right = mid
        } else if nums[mid] < target {
            left = mid + 1
        } else if nums[mid] > target {
            right = mid
        }
    }
    return left
}
```

:::tip 答疑

**1、为什么 while 中是 `<` 而不是 `<=`**?

因为 `right = nums.length` 而不是 `nums.length - 1`。因此每次循环的「搜索区间」是 `[left, right)` 左闭右开。

2、**为什么没有返回 -1 的操作？如果 `nums` 中不存在 `target` 这个值，怎么办**？

在返回的时候额外判断一下 `nums[left]` 是否等于 `target` 就行了，如果不等于，就说明 `target` 不存在。

:::

完整代码：

```go
func left_bound(nums []int, target int) int {
    left, right := 0, len(nums)-1
    // 搜索区间为 [left, right]
    for left <= right {
        mid := left + (right - left) / 2
        
        if nums[mid] < target {
            // 搜索区间变为 [mid+1, right]
            left = mid + 1
        } else if nums[mid] > target {
            // 搜索区间变为 [left, mid-1]
            right = mid - 1
        } else if nums[mid] == target {
            // 收缩右侧边界
            right = mid - 1
        }
    }
    
    // 判断 target 是否存在于 nums 中
    // 此时 target 比所有数都大，返回 -1
    if left == len(nums) {
        return -1
    }
    
    // 判断一下 nums[left] 是不是 target
    if nums[left] == target {
        return left
    } else{
        return -1
    }
}
```

## 寻找右边界

```go
func right_bound(nums []int, target int) int {
    left, right := 0, len(nums)-1
    for left <= right {
        mid := left + (right-left)/2
        if nums[mid] < target {
            left = mid + 1
        } else if nums[mid] > target {
            right = mid - 1
        } else if nums[mid] == target {
            // 这里改成收缩左侧边界即可
            left = mid + 1
        }
    }
    // 最后改成返回 left - 1
    if left-1 < 0 {
        return -1
    }
    if nums[left-1] == target {
        return left - 1
    }
    return -1
}
```

:::tip 总结

这样就可以轻松解决[34. 在排序数组中查找元素的第一个和最后一个位置 - 力扣（LeetCode）](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)了

:::

