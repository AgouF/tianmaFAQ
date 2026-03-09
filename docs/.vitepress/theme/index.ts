import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    function loadTwitterWidgets() {
      if (typeof window === 'undefined') return

      nextTick(() => {
        const twttr = (window as any).twttr
        if (twttr?.widgets) {
          twttr.widgets.load()
        } else {
          // widgets.js not loaded yet — load dynamically and let it auto-scan
          const existing = document.querySelector('script[src*="platform.twitter.com"]')
          if (!existing) {
            const script = document.createElement('script')
            script.src = 'https://platform.twitter.com/widgets.js'
            script.async = true
            document.head.appendChild(script)
          } else {
            // Script tag exists but hasn't finished loading — wait for it
            existing.addEventListener('load', () => {
              (window as any).twttr?.widgets?.load()
            })
          }
        }
      })
    }

    onMounted(loadTwitterWidgets)
    watch(() => route.path, loadTwitterWidgets)
  }
}
