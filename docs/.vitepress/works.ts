import type { Theme } from '@sugarat/theme'

const workConfig: Theme.UserWorks = {
  title: '个人项目/线上作品',
  description: '记录开发的点点滴滴',
  topTitle: '存档',
  list: [
    {
      top: 1,
      title: 'GPTFusion',
      description: '基于 wails 实现的GPT跨平台客户端',
      time: {
        start: '2023/04/07'
      },
      github: {
        owner: 'lpdswing',
        repo: 'GPTFusion',
        branch: 'main',
        path: '/'
      },
      status: {
        text: '存档'
      },
      url: 'https://github.com/lpdswing/GPTFusion',
      cover:
            'https://github.com/lpdswing/GPTFusion/blob/main/demo/win2.png?raw=true',
      tags: ['wails', 'go']
    },
  ]
}

export default workConfig
