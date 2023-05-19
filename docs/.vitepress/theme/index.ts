import BlogTheme from '@sugarat/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
// 自定义样式重载
// import './style.scss'

export default {
    ...BlogTheme,
    enhanceApp(ctx:any) {
      enhanceAppWithTabs(ctx.app)
    }
}
