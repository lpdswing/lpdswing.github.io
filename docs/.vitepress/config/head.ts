import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
    [
        'link',
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-VEjtXGitUS' }],  // www
    ['meta', { name: 'google-site-verification', content: '2z10OBbRtcHMNBM5K8NAJy8pSES6ZtZk1kmh-HJJKHY' }],
    ['script', { src: "/_vercel/insights/script.js", defer: "true"}]

]
