---
title: "MAC Installation Method"
description: "1.  Network Environment VPN Guide 1.  ChatGPT Account Registration Claude&ChatGPT&Gemini Registration & Usage 1.  MAC Ha"
lastUpdated: 1773225000000
---

# MAC Installation Guide

# Prepare the Project

1.  Network Environment [VPN Guide](/network/vpn/)

1.  ChatGPT Account Registration [Claude&ChatGPT&Gemini Registration & Usage](/catalog-2/claude-chatgpt-gemini-registration-usage)

1.  MAC Hardware MacBook or Macmini

::: tip
## Important Notes

<div class="notion-block-red">

**Do not store important or sensitive data on the MAC device used for this setup to prevent irreversible loss or leakage of data.**

</div>
:::

# Let's Begin

### Prepare to Install Python & NodeJS

Since Open commonly uses Python and Node as runtime environments, you need to install Python and Node first.

## Python Environment

1.  Go to the official Python website [https://www.python.org/downloads/macos/](https://www.python.org/downloads/macos/)

1.  Select Download macOS installer to download.

![](/images/a50f23e24caa.webp)

1.  After downloading, execute:

```bash
python3 --version
which python3
```

If you see:

Python 3.13.12
/Library/Frameworks/Python.framework/Versions/3.13/bin/python3

Then the installation is successful.

## NodeJs Environment

Visit [https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download) to download and install according to the commands.

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Alternative to restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install --lts

# Verify Node.js version:
node -v # Should print "v24.14.0".

# Verify npm version:
npm -v # Should print "11.9.0".

```

## OpenClaw Installation

```bash
# Download OpenClaw
npm i -g openclaw

# Execute initialization
openclaw onboard
```

If you encounter a connection timeout error, you can execute the following to switch the Node.js registry mirror:

```bash
npm config set registry https://registry.npmmirror.com
```

1.  I understand this is personal-by-default and shared/multi-user use requires lock-down. Continue? Select `yes` directly.

1.  Onboarding mode Select `Manual` to configure step-by-step together.

1.  What do you want to set up? Which gateway to configure? We'll choose the default `Local gateway (this machine)`.

1.  Workspace directory This is the folder where the AI works. Just press Enter.

1.  Model/auth provider Start configuring the AI. Use OpenAI. Choose `OpenAI Codex (ChatGPT OAuth)`. For specific registration tutorial, see [Claude&ChatGPT&Gemini Registration & Usage](/catalog-2/claude-chatgpt-gemini-registration-usage). Wait for authorization to complete.

1.  After authorization, copy the link from the top of the browser to the terminal, then select the model `Default model “openai-codex/gpt-5.3-codex”` and press Enter.

1.  Gateway port Just press Enter for the default gateway port.

1.  Gateway bind Default selection is `127.0.0.1`.

1.  Gateway auth Gateway authentication method. Just press Enter for the default `Token`.

1.  Tailscale exposure Whether to expose the OpenClaw gateway via Tailscale. For personal use, directly select `off`.

1.  How do you want to provide the gateway token? How to save the gateway token? Just press Enter to choose the default.

1.  Gateway token (blank to generate) Gateway access token. Leave it blank and press Enter directly.

1.  Configure chat channels now? Configure chat channels now? Select `yes`.

### Configure Chat Bot

### Feishu (Lark)

1.  Download Feishu.

1.  Open [https://open.feishu.cn/](https://open.feishu.cn/)

1.  Create an application. Fill in the application name and description arbitrarily.

1.  Application capabilities, select Bot.

1.  Click on "Create Version" above and enter corresponding information arbitrarily.

1.  Do not check "Public Sharing".

1.  Click on "Credentials & Basic Info" on the left to see **App ID and App Secret**.

1.  Permission Management. Enable permissions. Configure all permissions related to messages.

1.  At this point, you can continue setting up in the OpenClaw terminal.

1.  After setting up, click on "Events & Callbacks", select "WSS Long Connection". After selecting, add events and callback events. Search for "message", add all related to messages. Do the same for callbacks. This way you can chat with OpenClaw. Remember to publish the application.

### Telegram

---

1.  Select `Feishu/Lark (飞书)`.

1.  Install Feishu plugin? Select `Download from npm (@openclaw/feishu)`.

1.  How do you want to provide this App Secret? Select `Enter App Secret` and input the App Secret and App ID.

1.  Feishu connection mode Connection method. Select `WebSocket` for long connection without needing a public IP.

1.  Which Feishu domain? If it's for China, select `feishu.cn`. For overseas, select `larksuite.com`.

1.  Group chat policy Reply method. Choose as needed.

| Option | Meaning |
| --- | --- |
| **Allowlist** | Reply only in specified groups |
| Open | Reply in all groups (must @ the bot) |
| Disabled | Do not reply in group chats at all |

1.  I choose the first one `Group chat allowlist (chat_ids)`. Open the APP on your phone, select the group, and find `ocxxxx` at the very bottom of the group.

1.  Then select `Finished (Done)` to confirm the configuration.

1.  Configure DM access policies now? (default: pairing) Configure Direct Message access policies now? Select `Yes`.

1.  Feishu DM policy Direct Message policy. Select the first one `Pairing`. Only paired users can send DMs.

1.  Search provider Which search engine should OpenClaw use to search the internet for information? Select to skip.

1.  Configure skills now? (recommended) Install default Skills? Select `yes`.

1.  Many skills. Use the spacebar to select the ones you need. Use the up/down arrow keys. After selecting, press Enter.

1.  Preferred node manager for skill installs Installation method. Select the first one.

1.  Wait for the installation to finish. `Install Gateway service (recommended)`? Install the gateway service? Select `yes`, then press Enter for the default.

1.  How do you want to hatch your bot? Select `Open the Web UI`.

1.  View the webpage and chat with the AI.

1.  Click on `Configuration > Tools` on the left.

1.  Turn on all options that look like green buttons. After turning them on, click `Save` in the top right corner.

1.  This way you can use all the tools.

![](/images/2493ba14a078.webp)

<RelatedCards :items='[{"title":"Claude&ChatGPT&Gemini注册使用","link":"/catalog-2/claude-chatgpt-gemini-registration-usage"},{"title":"Linux以及服务器安装方式","link":"/catalog-2/directory-nesting-333/linux-server-installation"},{"title":"Windows安装方式","link":"/catalog-2/directory-nesting-333/windows-installation"},{"title":"MAC安装Python教程","link":"/more-info/mac-install-python-tutorial"},{"title":"MAC安装NodeJS步骤","link":"/more-info/mac-install-nodejs-steps"},{"title":"OpenClaw怎么安装","link":"/more-info/how-to-install-openclaw"},{"title":"MAC设备安全注意事项","link":"/more-info/mac-device-security-precautions"},{"title":"VPN网络环境配置","link":"/more-info/vpn-network-environment-setup"},{"title":"ChatGPT账号注册方法","link":"/more-info/chatgpt-account-registration-method"},{"title":"nvm安装NodeJS指南","link":"/more-info/nvm-install-nodejs-guide"},{"title":"MAC开发环境搭建","link":"/more-info/mac-development-environment-setup"}]' />