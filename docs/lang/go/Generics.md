---
title: go语言泛型
comment: true
tags:
 - go
 - golang
categories:
 - 语言
# 设置首页的精选文章，值越大越靠前
sticky: 1
---

# Go语言泛型

Go 语言自从推出以来，一直被人诟病没有泛型。泛型是一种非常重要的编程概念，它可以让我们编写更加通用、可复用的代码。在 Go 语言中，我们可以使用接口和类型断言来实现类似泛型的功能，但是这种方式并不是很灵活，而且有一定的性能损失。因此，Go 语言社区一直在呼吁加入泛型支持。最近，Go 语言官方终于在 2021 年发布的 Go 1.18 版本中加入了泛型支持，这是 Go 语言发展历程中的一个重要里程碑。

在 Go 语言中，泛型的实现方式是通过类型参数化来实现的。也就是说，我们可以在函数、结构体等定义中使用类型参数，这些类型参数可以在使用时被具体的类型替换。下面是一个简单的示例，演示了如何使用泛型函数来计算两个数的和：

```go
type Numeric interface {
	float64 | int | int8 | int16 | int32 | int64 | uint | uint8 | uint16 | uint32 | uint64 | uintptr | float32 | complex64 | complex128
}

func Add[T Numeric](a, b T) T {
	return a + b
}

func AddInt(a, b int) int {
	return a + b
}

func AddFloat(a, b float64) float64 {
	return a + b
}

func main(){
  fmt.Println(AddInt(1, 2))
	fmt.Println(AddFloat(1.1, 2.2))
	fmt.Println(Add(1, 2))
	fmt.Println(Add(1.1, 2.2))
}
	//3
	//3.3000000000000003
	//3
	//3.3000000000000003
```

在上面的代码中，我们定义了一个泛型函数 `Add`，它接受两个类型为 `T` 的参数，并返回类型为 `T` 的结果。其中，`T Numeric` 表示 `T` 必须是数字类型。在 `main` 函数中，我们分别使用整数和浮点数调用了 `Add` 函数，并输出了结果。

除了函数，Go 语言的泛型还支持结构体、接口等定义。下面是一个示例，演示了如何使用泛型结构体来实现一个通用的栈：

```go
package main

import "fmt"

type Stack[T any] []T

func (s *Stack[T]) Push(v T) {
	*s = append(*s, v)
}

func (s *Stack[T]) Pop() T {
	res := (*s)[len(*s)-1]
	*s = (*s)[:len(*s)-1]
	return res
}

func main() {
	var s Stack[int]
	s.Push(1)
	s.Push(2)
	fmt.Println(s.Pop())
	fmt.Println(s.Pop())

	var strStack Stack[string]
	strStack.Push("hello")
	strStack.Push("world")
	fmt.Println(strStack.Pop())
	fmt.Println(strStack.Pop())
}
```

在上面的代码中，我们定义了一个泛型结构体 `Stack`，它接受一个类型参数 `T`，表示栈中的元素类型。我们在结构体中使用了类型参数 `T`，并在 `Push` 和 `Pop` 方法中使用了 `T`。在 `main` 函数中，我们分别创建了一个整数类型的栈和一个字符串类型的栈，并使用 `Push` 和 `Pop` 方法来操作栈中的元素。

总的来说，Go 语言的泛型支持为我们提供了更加灵活、通用、可复用的编程方式。通过使用泛型，我们可以写出更加简洁、高效、可读性强的代码，提高开发效率和代码质量。

# Refense

[教程：泛型入门 - Go 编程语言](https://go.dev/doc/tutorial/generics)

