<template>
  <div ref="container" v-html="embedHtml"></div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  url: String
})

const container = ref(null)

const embedHtml = computed(() => `
  <blockquote class="twitter-tweet">
    <a href="${props.url}"></a>
  </blockquote>
`)

onMounted(() => {
  if (window.twttr?.widgets) {
    window.twttr.widgets.load(container.value)
  } else {
    const existing = document.querySelector('script[src*="platform.twitter.com/widgets.js"]')
    if (!existing) {
      const script = document.createElement('script')
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      script.onload = () => {
        window.twttr?.widgets?.load(container.value)
      }
      document.body.appendChild(script)
    }
  }
})
</script>
