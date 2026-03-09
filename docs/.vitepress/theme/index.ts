import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    function loadTwitterWidgets() {
      if (typeof window !== 'undefined' && (window as any).twttr?.widgets) {
        nextTick(() => {
          (window as any).twttr.widgets.load()
        })
      }
    }

    onMounted(loadTwitterWidgets)
    watch(() => route.path, loadTwitterWidgets)
  }
}
