<template>
  <span v-if="minutes" class="reading-time">
    {{ minutes }} {{ lang === 'zh-CN' ? '分钟阅读' : 'min read' }}
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, lang } = useData()
const minutes = computed(() => frontmatter.value.readingTime)
</script>

<style scoped>
.reading-time {
  color: var(--vp-c-text-3);
  font-size: 0.85em;
}
</style>
