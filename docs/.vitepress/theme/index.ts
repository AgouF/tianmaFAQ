import DefaultTheme from 'vitepress/theme'
import TweetCard from './TweetCard.vue'
import NotFound from './NotFound.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  NotFound,
  enhanceApp({ app }) {
    app.component('TweetCard', TweetCard)
  }
}
