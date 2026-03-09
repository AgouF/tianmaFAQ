import DefaultTheme from 'vitepress/theme'
import TweetCard from './TweetCard.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TweetCard', TweetCard)
  }
}
