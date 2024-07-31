import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: '知识库',
        items: [
            { text: '技术教程', link: '/technology/learn/' },
            { text: '源码学习', link: '/technology/source/' },
            { text: '杂谈', link: '/technology/other/' },
        ]
    },
    {
        text: 'Nas玩机',
        items: [
            { text: '杂七杂八', link: '/nas/note/' }
        ]
    },
    {
        text: '学习小册',
        items: [
            { text: '架构', link: '/booklet/design/' },
            { text: 'Mysql45讲', link: '/booklet/mysql45/' },
            { text: '高并发系统设计', link: '/booklet/highConcurrency/' },
            { text: '分布式系统', link: '/booklet/distributed/' },
            { text: 'Kubernetes从上手到实践', link: '/booklet/k8s/' },
        ]
    },
    {
        text: '语言',
        items: [
            { text: 'Python', link: '/lang/python/' },
            { text: 'Go', link: '/lang/go/' },
            { text: 'Rust', link: '/lang/rust/' },
            { text: 'TypeScript', link: '/lang/ts/' },
        ]
    },
    {
        text: '面试',
        items: [
            { text: 'LeetCode', link: '/interviews/leetcode/' },
            { text: '算法技巧', link: '/interviews/algorithm/' },
        ]
    },
    {
        text: '个人项目',
        items: [
            {
                text: 'GPTFusion',
                link: 'https://github.com/lpdswing/GPTFusion'
            }
        ]
    },
    {
        text: '关于我',
        link: '/about'
    },
]
