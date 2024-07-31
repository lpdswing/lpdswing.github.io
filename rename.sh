#!/bin/bash

# 指定需要搜索的目录
dir="./docs"



# 遍历目录中的所有文件和文件夹
find "$dir" -depth -name "*[一-龥]*.md" | while read file
do
    # 获取文件的目录
    dir=$(dirname "$file")
    # 获取文件的基本名（不含目录）
    base=$(basename "$file")
    # 使用 trans 将文件名从中文翻译为英文
    newbase=$(echo "$base" | trans -b :en | sed 's/ /-/g')
    # 打印原始文件名和新的文件名
    echo "Original: $file"
    echo "Renamed: $dir/$newbase"
    mv "$file" "$dir/$newbase"
    echo "-------------------"
done
