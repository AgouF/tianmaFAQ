---
title: API 接入指南
order: 1
---

# API 接入指南

本指南帮助您快速接入我们的 API 服务。

## 获取 API Key

1. 登录后进入 **「开发者中心」**
2. 点击 **「创建 API Key」**
3. 设置 Key 的权限范围
4. 复制并妥善保管您的 API Key

::: danger 安全提醒
请勿在客户端代码中暴露 API Key，建议通过服务端调用 API。
:::

## 基础请求

```bash
curl -X GET https://api.example.com/v1/data \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

## 响应格式

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "items": []
  }
}
```

## 错误码说明

| 错误码 | 说明 | 解决方案 |
|--------|------|----------|
| 401 | 未授权 | 检查 API Key 是否正确 |
| 403 | 权限不足 | 检查 API Key 权限范围 |
| 429 | 请求频率超限 | 降低请求频率或升级方案 |
| 500 | 服务器错误 | 稍后重试或联系技术支持 |

## 速率限制

| 方案 | 限制 |
|------|------|
| 免费版 | 100 次/分钟 |
| 专业版 | 1,000 次/分钟 |
| 企业版 | 自定义 |
