<template>
  <div ref="container" class="tweet-card-wrapper">
    <a v-if="!loaded" :href="url" class="tweet-fallback" target="_blank" rel="noopener noreferrer">
      <span class="tweet-icon">𝕏</span>
      <span class="tweet-text">查看推文</span>
      <span class="tweet-url">{{ url }}</span>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  url: String
})

const container = ref(null)
const loaded = ref(false)

onMounted(() => {
  const tweetId = props.url?.match(/status\/(\d+)/)?.[1]
  if (!tweetId) return

  const renderTweet = () => {
    if (window.twttr?.widgets?.createTweet) {
      window.twttr.widgets.createTweet(tweetId, container.value, {
        align: 'center',
        conversation: 'none',
      }).then((el) => {
        if (el) loaded.value = true
      }).catch(() => {})
    }
  }

  if (window.twttr?.widgets) {
    renderTweet()
  } else {
    const existing = document.querySelector('script[src*="platform.twitter.com/widgets.js"]')
    if (existing) {
      existing.addEventListener('load', renderTweet)
    } else {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      script.onload = renderTweet
      document.body.appendChild(script)
    }
  }
})
</script>

<style scoped>
.tweet-card-wrapper {
  margin: 1em 0;
}
.tweet-fallback {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px 20px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.tweet-fallback:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.tweet-icon {
  font-size: 24px;
  font-weight: bold;
}
.tweet-text {
  font-weight: 500;
}
.tweet-url {
  color: var(--vp-c-text-3);
  font-size: 0.85em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
