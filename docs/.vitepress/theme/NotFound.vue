<template>
  <div class="not-found">
    <p class="code">404</p>
    <h1 class="title">页面未找到</h1>
    <p class="desc">抱歉，您访问的页面不存在或已被移动。</p>
    <div class="actions">
      <a class="link" href="/">返回首页</a>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  padding: 64px 24px 96px;
  text-align: center;
}
.code {
  font-size: 64px;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.title {
  font-size: 24px;
  font-weight: 600;
  margin-top: 12px;
  color: var(--vp-c-text-1);
}
.desc {
  margin-top: 12px;
  color: var(--vp-c-text-2);
  font-size: 16px;
}
.actions {
  margin-top: 24px;
}
.link {
  display: inline-block;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-white);
  background-color: var(--vp-c-brand-1);
  transition: background-color 0.25s;
  text-decoration: none;
}
.link:hover {
  background-color: var(--vp-c-brand-2);
}
</style>
