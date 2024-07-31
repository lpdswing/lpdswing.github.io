---
title: python算法之栈
date: 2019-04-24 16:10:15
tags:
 - python
 - 算法
categories:
 - 知识库
---

栈(stack)又称之为堆栈是一个特殊的有序表，其插入和删除操作都在栈顶进行操作，并且按照先进后出，后进先出的规则进行运作。

## 栈的接口

list 就类似一个栈

| 接口      | list 对应方法 |
| --------- | ------------- |
| push()    | append()      |
| pop()     | pop()         |
| isEmpty() | not list      |
| length()  | len()         |
| getTop()  | list[-1]      |

## 应用

- 假如表达式中允许包含三中括号`()`、`[]`、`{}`，其嵌套顺序是任意的，例如：

`{()[]}`

错误的格式如:

> [(]),[()),(()}

编写一个函数，判断一个表达式字符串，括号匹配是否正确

- 思路

创建一个空栈，用来存储尚未找到的左括号；

便利字符串，遇到左括号则压栈，遇到右括号则出栈一个左括号进行匹配；

在第二步骤过程中，如果空栈情况下遇到右括号，说明缺少左括号，不匹配；

在第二步骤遍历结束时，栈不为空，说明缺少右括号，不匹配；

- 代码

```python
LEFT = {'(', '[', '{'}
RIGHT = {')', ']', '}'}


def match(expr):
    '''
    :param expr : str
    :return bool
    '''
    stack = []
    for brackets in expr:
        if brackets in LEFT:
            stack.append(brackets) # 左括号入栈
        elif brackets in RIGHT:
            if not stack or not 1 <= ord(brackets) - ord(stack[-1]) <=2:
                return False
            stack.pop()
    return not stack
```

## 拓展

检测一段代码的括号是否正确

- 代码

```python
import re

LEFT = {'(', '[', '{'}
RIGHT = {')', ']', '}'}

def get_brackets(s):
    '''获取括号'''
    result = ''.join(re.findall(r'[\(\)\[\]\{\}]',s))
    return result

def match(expr):
    '''
    :param expr : str
    :return bool
    '''
    stack = []
    for brackets in expr:
        if brackets in LEFT:
            stack.append(brackets) # 左括号入栈
        elif brackets in RIGHT:
            if not stack or not 1 <= ord(brackets) - ord(stack[-1]) <=2:
                return False
            stack.pop()
    return not stack



if __name__ == "__main__":
    s = '''

    function myFunction(x, y) {
    if (y === undefined) {
          y = 0;
    } (
}
    '''
    expr = get_brackets(s)
    print(expr)    # (){(){}(}
    print(match(expr)) # False
```
