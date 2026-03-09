import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import TweetCard from './TweetCard.vue'
import BackToTop from './BackToTop.vue'
import ReadingTime from './ReadingTime.vue'
import NotFound from './NotFound.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  NotFound,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(ReadingTime),
      'layout-bottom': () => h(BackToTop),
    })
  },
  enhanceApp({ app }) {
    app.component('TweetCard', TweetCard)
  }
}
