---
title: "MAC Installation Method"
description: "1.  Network Environment VPN Section 1.  ChatGPT Account Registration Claude&ChatGPT&Gemini Registration & Usage 1.  MAC "
lastUpdated: 1773225000000
---

# MAC Installation Method

# Prepare the Project

1.  Network Environment [VPN Section](/network/vpn/)

1.  ChatGPT Account Registration [Claude&ChatGPT&Gemini Registration & Usage](/catalog-2/claude-chatgpt-gemini-registration-usage)

1.  MAC Hardware MacBook or Macmini

::: tip
## Important Notes

<div class="notion-block-red">

**Do not store important or sensitive data on the MAC device used for this, to prevent irreversible losses from data leaks or loss.**

</div>
:::

# Begin Installation

### Prepare to Install Python & NodeJS

Since Open commonly uses Python and Node as runtime environments, you need to install Python and Node first.

## Python Environment

1.  Go to the official Python website [https://www.python.org/downloads/macos/](https://www.python.org/downloads/macos/)

1.  Select Download macOS installer to download.

![](/images/cf21cde6df11.webp)

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

If there is a timeout error, you can execute this to switch the Node mirror source:

```bash
npm config set registry https://registry.npmmirror.com
```

1.  I understand this is personal-by-default and shared/multi-user use requires lock-down. Continue? I understand this tool is for personal use by default, and additional security restrictions are required for shared or multi-user environments. Continue? Directly select yes.

1.  Onboarding mode Initialization mode / First-time configuration method Select Manual to configure step by step together.

1.  What do you want to set up? Which gateway to configure? We'll choose the default: Local gateway (this machine).

1.  Workspace directory This is the folder where the AI works. Just press Enter.

1.  Model/auth provider Start configuring the AI. Using OpenAI, select OpenAI Codex (ChatGPT OAuth). For specific registration tutorial, see [Claude&ChatGPT&Gemini Registration & Usage](/catalog-2/claude-chatgpt-gemini-registration-usage). Wait for authorization to complete.

1.  After authorization, copy the link from the top of the browser to the terminal, then select the model Default model “openai-codex/gpt-5.3-codex” and press Enter.

1.  Gateway port Gateway port, just use the default by pressing Enter.

1.  Gateway bind Default selection is 127.0.0.1.

1.  Gateway auth Gateway authentication method, default (Token) is fine, press Enter.

1.  Tailscale exposure Whether to expose the OpenClaw gateway via Tailscale. For personal use, directly select off.

1.  How do you want to provide the gateway token? How to save the gateway token? Press Enter to select the default.

1.  Gateway token (blank to generate) Gateway access token, leave it blank and press Enter.

1.  Configure chat channels now? Configure chat channels now? Select yes.

### Configure Chat Bot

### Feishu

1.  Download Feishu.

1.  Open [https://open.feishu.cn/](https://open.feishu.cn/).

1.  Create an application. Fill in the application name and description arbitrarily.

1.  Application capabilities, select Bot.

1.  Click "Create Version" above and enter corresponding information arbitrarily.

1.  Do not check "Public Sharing".

1.  Click "Credentials & Basic Info" on the left to see **App ID and App Secret**.

1.  Permission Management: Enable permissions. Configure all permissions related to messages.

1.  At this point, you can continue the setup in the Openclaw terminal.

1.  After setup, click "Events & Callbacks", select WSS long connection. After selecting, add events and callback events. Search for "message", add all related to messages. Do the same for callbacks. This way you can chat with Openclaw. Remember to publish the application.

### Telegram

---

1.  Select Feishu/Lark (飞书).

1.  Install Feishu plugin? Select Download from npm (@openclaw/feishu).

1.  How do you want to provide this App Secret? Select Enter App Secret and input the App Secret and App ID.

1.  Feishu connection mode Connection method. Select WebSocket for long connection (no public IP needed).

1.  Which Feishu domain? If in China, select feishu.cn; for overseas, select larksuite.com.

1.  Group chat policy Reply method. Choose as needed.

| Option | Meaning |
| --- | --- |
| **Allowlist** | Only replies in specified groups. |
| Open | Replies in all groups (must @ the bot). |
| Disabled | No replies in group chats at all. |

1.  I select the first one: Group chat allowlist (chat_ids). Open the APP on your phone, select the group, and find ocxxxx at the very bottom of the group.

1.  Then select Finished (Done) to confirm configuration.

1.  Configure DM access policies now? (default: pairing) Configure Direct Message access policies now? Select Yes.

1.  Feishu DM policy Direct Message policy. Select the first one: Pairing (only paired users can DM).

1.  Search provider Which search engine should OpenClaw use to search the internet for information? Select skip.

1.  Configure skills now? (recommended) Install default Skills? Select yes.

1.  Many skills. Use spacebar to select the ones you need. Use up/down arrow keys. After selecting, press Enter.

1.  Preferred node manager for skill installs Installation method. Select the first one.

1.  Wait for installation to finish. Install Gateway service (recommended) Install the gateway service? Select yes, then select default by pressing Enter.

1.  How do you want to hatch your bot? Select Open the Web UI.

1.  View the webpage and chat with the AI.

1.  Click on the left: Configuration > Tools.

1.  Turn on all options that look like green buttons. After turning them on, click Save in the top right corner.

1.  This way you can use all the tools.

![](/images/8c26fd63d5ef.webp)

<RelatedCards :items='[{"title":"Claude&ChatGPT&Gemini注册使用","link":"/catalog-2/claude-chatgpt-gemini-registration-usage"},{"title":"Linux以及服务器安装方式","link":"/catalog-2/directory-nesting-333/linux-server-installation"},{"title":"Windows安装方式","link":"/catalog-2/directory-nesting-333/windows-installation"},{"title":"MAC安装Python教程","link":"/more-info/mac-install-python-tutorial"},{"title":"MAC安装NodeJS步骤","link":"/more-info/mac-install-nodejs-steps"},{"title":"OpenClaw怎么安装","link":"/more-info/how-to-install-openclaw"},{"title":"MAC设备安全注意事项","link":"/more-info/mac-device-security-precautions"},{"title":"ChatGPT注册使用指南","link":"/more-info/chatgpt-registration-usage-guide"},{"title":"MAC开发环境配置","link":"/more-info/mac-development-environment-setup"},{"title":"VPN网络环境设置","link":"/more-info/vpn-network-environment-setup"},{"title":"MAC安装AI工具教程","link":"/more-info/mac-install-ai-tools-tutorial"}]' />