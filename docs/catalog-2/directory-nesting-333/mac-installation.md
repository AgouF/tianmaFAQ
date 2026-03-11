---
title: "MAC安装方式"
description: "1. 网络环境 VPN篇 1. ChatGPT账号注册 Claude&ChatGPT&Gemini注册使用 1. MAC硬件 MacBook或 Macmini ::: tip 使用的MAC设备，不要存放重要资料以及敏感资料，谨防资料泄露丢失"
readingTime: 3
lastUpdated: 1773215760000
ogImage: "https://tianma.xin/images/281adb04317a.webp"
---

# MAC安装方式

# 准备项目

1. 网络环境 [VPN篇](/network/vpn/)

1. ChatGPT账号注册 [Claude&ChatGPT&Gemini注册使用](/catalog-2/claude-chatgpt-gemini-registration-usage)

1. MAC硬件 MacBook或 Macmini

::: tip
## 注意事项

<div class="notion-block-red">

**使用的MAC设备，不要存放重要资料以及敏感资料，谨防资料泄露丢失造成不可挽回的损失**

</div>
:::

# 正式开始

### 准备安装Python &NodeJS

因为Open常用Python和Node作为运行环境，需要先安装Python和Node

## Python环境

1. 进入Python官方网站 [https://www.python.org/downloads/macos/](https://www.python.org/downloads/macos/)

1. 选择 Download macOS installer下载

![](/images/281adb04317a.webp)

1. 下载好后执行

```bash
python3 --version
which python3
```

出现

Python 3.13.12
/Library/Frameworks/Python.framework/Versions/3.13/bin/python3

即为安装成功

## NodeJs环境

访问 [https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download) 根据命令下载安装

```bash
# 下载并安装 nvm：
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# 代替重启 shell
\. "$HOME/.nvm/nvm.sh"

# 下载并安装 Node.js：
nvm install --lts

# 验证 Node.js 版本：
node -v # Should print "v24.14.0".

# 验证 npm 版本：
npm -v # Should print "11.9.0".

```

## OpenClaw安装

```bash
# 下载 OpenClaw
npm i -g openclaw

# 执行初始化
openclaw onboard
```

如果链接超时出错可以执行 来切换node的镜像源

```bash
npm config set registry https://registry.npmmirror.com
```

1.  I understand this is personal-by-default and shared/multi-user use requires lock-down. Continue? 我明白这个工具默认是给个人使用的，如果在共享或多用户环境使用，需要进行额外的安全限制。是否继续？ 直接选择  yes

1. Onboarding mode 初始化模式 / 首次配置方式 选择Manual我们来一起一步步配置

1. What do you want to set up?要配置哪种网关 我们选择默认的就好Local gateway (this machine)

1. Workspace directory 这是AI工作的文件夹，直接按回车就好

1. Model/auth provider开始配置AI ，使用OpenAI 选择OpenAI Codex (ChatGPT OAuth)就好 ，具体注册教程 [Claude&ChatGPT&Gemini注册使用](/catalog-2/claude-chatgpt-gemini-registration-usage) 等待授权好

1. 授权后，复制浏览器顶部链接到终端里，然后选择模型Default model “openai-codex/gpt-5.3-codex”回车

1. Gateway port 网关端口直接默认回车就行

1. Gateway bind默认选择127.0.0.1

1.  Gateway auth网关认证方式，默认回车就好 Token

1. Tailscale exposure 是否通过 Tailscale 暴露 OpenClaw 网关 个人使用直接选择off

1. How do you want to provide the gateway token?网关 Token 要怎么保存 直接回车选择默认

1. Gateway token (blank to generate) 网关访问令牌，留空就行直接回车

1. Configure chat channels now?现在配置聊天通道 选择yes就行

## 配置聊天bot

### 飞书

1. 下载飞书

1. 打开[https://open.feishu.cn/](https://open.feishu.cn/)

1. 创建应用应用名称描述随便填写

1. 应用能力，选择机器人

1. 点击上面创建版本 随便输入对应信息

1. 对外共享点击对勾，确认提交

1.

<RelatedCards :items='[{"title":"Claude&ChatGPT&Gemini注册使用","link":"/catalog-2/claude-chatgpt-gemini-registration-usage"},{"title":"Linux以及服务器安装方式","link":"/catalog-2/directory-nesting-333/linux-server-installation"},{"title":"Windows安装方式","link":"/catalog-2/directory-nesting-333/windows-installation"},{"title":"MAC安装Python教程","link":"/more-info/mac-install-python-tutorial"},{"title":"MAC安装NodeJS步骤","link":"/more-info/mac-install-nodejs-steps"},{"title":"OpenClaw怎么安装","link":"/more-info/how-to-install-openclaw"},{"title":"MAC设备安全注意事项","link":"/more-info/mac-device-security-precautions"},{"title":"Python环境配置MAC","link":"/more-info/python-environment-setup-mac"},{"title":"NodeJS镜像源切换","link":"/more-info/nodejs-mirror-switch"},{"title":"MAC安装AI工具","link":"/more-info/mac-install-ai-tools"},{"title":"OpenClaw初始化配置","link":"/more-info/openclaw-initialization-configuration"}]' />
