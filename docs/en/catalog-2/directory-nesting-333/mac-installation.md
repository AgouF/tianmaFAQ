---
title: "MAC Installation Method"
description: "1. Network Environment VPN Section 1. ChatGPT Account Registration Claude&ChatGPT&Gemini Registration & Usage 1. MAC Har"
lastUpdated: 1773215760000
---

# MAC Installation Method

# Prepare the Project

1. Network Environment [VPN Section](/network/vpn/)

1. ChatGPT Account Registration [Claude&ChatGPT&Gemini Registration & Usage](/catalog-2/claude-chatgpt-gemini-registration-usage)

1. MAC Hardware MacBook or Macmini

::: tip
## Important Notes

<div class="notion-block-red">

**Do not store important or sensitive data on the MAC device used for this setup. Be cautious to prevent data leaks or loss that could lead to irreparable damage.**

</div>
:::

# Begin Installation

### Prepare to Install Python & NodeJS

Since Open commonly uses Python and Node as runtime environments, you need to install Python and Node first.

## Python Environment

1. Go to the official Python website [https://www.python.org/downloads/macos/](https://www.python.org/downloads/macos/)

1. Select Download macOS installer to download.

![](/images/281adb04317a.webp)

1. After downloading, execute:

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

# Instead of restarting the shell
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

If you encounter a timeout error, you can execute the following to switch the Node.js mirror source:

```bash
npm config set registry https://registry.npmmirror.com
```

1.  I understand this is personal-by-default and shared/multi-user use requires lock-down. Continue? I understand this tool is for personal use by default, and additional security restrictions are required for shared or multi-user environments. Continue? Directly select yes.

1. Onboarding mode Initialization mode / First-time configuration method Select Manual to configure step-by-step together.

1. What do you want to set up? Which gateway to configure? We'll select the default: Local gateway (this machine).

1. Workspace directory This is the folder where the AI works. Just press Enter.

1. Model/auth provider Start configuring the AI. Using OpenAI, select OpenAI Codex (ChatGPT OAuth). For specific registration tutorial, see [Claude&ChatGPT&Gemini Registration & Usage](/catalog-2/claude-chatgpt-gemini-registration-usage). Wait for authorization to complete.

1. After authorization, copy the link from the top of the browser into the terminal, then select the model Default model “openai-codex/gpt-5.3-codex” and press Enter.

1. Gateway port Gateway port, just use the default by pressing Enter.

1. Gateway bind Default selection is 127.0.0.1.

1.  Gateway auth Gateway authentication method, default is fine. Press Enter for Token.

1. Tailscale exposure Whether to expose the OpenClaw gateway via Tailscale. For personal use, directly select off.

1. How do you want to provide the gateway token? How to save the gateway token? Press Enter to select the default.

1. Gateway token (blank to generate) Gateway access token. Leave it blank and press Enter.

1. Configure chat channels now? Configure chat channels now? Select yes.

## Configure Chat Bot

### Feishu (Lark)

1. Download Feishu.

1. Open [https://open.feishu.cn/](https://open.feishu.cn/)

1. Create an application. Fill in the application name and description arbitrarily.

1. Application capabilities, select Bot.

1. Click on "Create Version" above and enter any corresponding information.

1. Under "External Sharing," check the box, then confirm and submit.

1.

<RelatedCards :items='[{"title":"Claude&ChatGPT&Gemini Registration & Usage","link":"/catalog-2/claude-chatgpt-gemini-registration-usage"},{"title":"Linux and Server Installation Method","link":"/catalog-2/directory-nesting-333/linux-server-installation"},{"title":"Windows Installation Method","link":"/catalog-2/directory-nesting-333/windows-installation"},{"title":"MAC Python Installation Tutorial","link":"/more-info/mac-install-python-tutorial"},{"title":"MAC NodeJS Installation Steps","link":"/more-info/mac-install-nodejs-steps"},{"title":"How to Install OpenClaw","link":"/more-info/how-to-install-openclaw"},{"title":"MAC Device Security Precautions","link":"/more-info/mac-device-security-precautions"},{"title":"Python Environment Setup MAC","link":"/more-info/python-environment-setup-mac"},{"title":"NodeJS Mirror Source Switch","link":"/more-info/nodejs-mirror-switch"},{"title":"MAC AI Tool Installation","link":"/more-info/mac-install-ai-tools"},{"title":"OpenClaw Initialization Configuration","link":"/more-info/openclaw-initialization-configuration"}]' />