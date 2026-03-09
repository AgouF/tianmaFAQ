<template>
  <div v-if="items && items.length" class="related-cards-section">
    <hr class="related-divider" />
    <h2 class="related-title">{{ lang === 'zh-CN' ? '相关文章' : 'Related Articles' }}</h2>
    <div class="related-cards-grid">
      <a
        v-for="(item, index) in items"
        :key="index"
        :href="item.link"
        class="related-card"
      >
        <span class="related-card-icon">📄</span>
        <span class="related-card-title">{{ item.title }}</span>
        <span class="related-card-arrow">→</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { lang } = useData()

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.related-cards-section {
  margin-top: 2rem;
}

.related-divider {
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  margin: 2rem 0 1.5rem;
}

.related-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #5b6cf0, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.related-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
}

.related-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.related-card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 6px 16px rgba(91, 108, 240, 0.15);
}

.dark .related-card:hover {
  box-shadow: 0 6px 16px rgba(91, 108, 240, 0.25);
}

.related-card-icon {
  font-size: 1.2em;
  flex-shrink: 0;
}

.related-card-title {
  flex: 1;
  font-weight: 500;
  font-size: 0.95em;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.related-card-arrow {
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
  font-size: 1.1em;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.related-card:hover .related-card-arrow {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 640px) {
  .related-cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
