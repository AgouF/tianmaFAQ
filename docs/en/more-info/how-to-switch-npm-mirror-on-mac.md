---
title: "How to switch npm registry mirror on macOS"
description: "npm (Node Package Manager) is the package management tool for Node.js, and its default official registry is located over"
lastUpdated: 1773251073187
---

# How to Switch npm Registry Mirror on Mac

## Why Switch npm Registry Mirror

npm (Node Package Manager) is the package management tool for Node.js, and its default official registry is located overseas. For developers in China, directly accessing the official registry may lead to extremely slow download speeds, connection timeouts, or even complete inaccessibility, which severely impacts development efficiency and project build processes. By switching the npm registry mirror to a domestic mirror site, you can significantly increase package download speeds, reduce waiting times when installing dependencies, and achieve a smoother development experience.

Commonly used domestic mirror sources include the Taobao NPM Mirror (cnpm), Huawei Cloud Mirror, etc. They synchronize regularly with the official registry to ensure package timeliness.

## How to Check the Current npm Registry Mirror

Before switching, you can confirm the currently used registry address. Open your Terminal or command-line tool and enter the following command:

```bash
npm config get registry
```

After execution, the terminal will display the current registry address. If it shows `https://registry.npmjs.org/`, it means you are using the official npm registry.

## Methods to Switch npm Registry Mirror

There are two common methods to switch the registry mirror: one is permanent, and the other is temporary. For most developers, a permanent switch is recommended.

### Method 1: Permanently Switch Registry Mirror (Recommended)

This method permanently changes the registry address in your npm configuration to a specified domestic mirror. The most common switch is to the Taobao NPM Mirror.

**Switch to Taobao NPM Mirror:**
```bash
npm config set registry https://registry.npmmirror.com/
```
Or use its old address (which also redirects to the new address):
```bash
npm config set registry https://registry.npm.taobao.org/
```

**Switch to Huawei Cloud Mirror:**
```bash
npm config set registry https://mirrors.huaweicloud.com/repository/npm/
```

After executing any of the above commands, subsequent commands like `npm install` will download packages from the domestic mirror you set.

### Method 2: Temporarily Use a Mirror for Installing a Single Package

If you don't want to permanently change the configuration and only want to use a domestic mirror to speed up the installation of a specific package, you can use the `--registry` parameter.

For example, temporarily use the Taobao mirror to install the `vue` package:
```bash
npm install vue --registry=https://registry.npmmirror.com
```

This method only takes effect for the current command and does not affect the global npm configuration.

### Method 3: Use the cnpm Tool (Alternative)

The Taobao mirror also provides a command-line tool called `cnpm`, which is a complete replacement for npm and uses the Taobao mirror by default. You can install and use it.

First, install cnpm globally:
```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```

After installation, you can use the `cnpm` command instead of the `npm` command, for example:
```bash
cnpm install [package-name]
```

## How to Revert to the Official Registry Mirror

If you need to switch back to the official npm registry, simply execute the following command:
```bash
npm config set registry https://registry.npmjs.org/
```

## Verify if the Switch Was Successful

After switching, run the check command again to confirm the address has changed:
```bash
npm config get registry
```
If the displayed address is the domestic mirror address you just set (e.g., `https://registry.npmmirror.com/`), the switch was successful.

## Common Issues

### After switching the registry mirror, package installation is still slow or reports errors. What should I do?
First, use `npm config get registry` again to confirm if the switch took effect. If it is effective but the speed is still slow, it might be due to network issues or temporary synchronization problems with the mirror. You can try:
1.  Clear the npm cache: `npm cache clean --force`
2.  Switch to another domestic mirror source (e.g., from Taobao to Huawei Cloud).
3.  Check your network connection or proxy settings. If you previously configured a proxy for npm, you may need to clear or update the proxy settings.

### What's the difference between using cnpm and switching the registry?
These are two different approaches.
*   **Switching the registry**: Modifies the configuration of the npm tool itself. Afterward, all your `npm` commands (like `npm install`, `npm publish`) will point to the new mirror address. This is the most direct and mainstream method.
*   **Using cnpm**: Installs a new command-line tool. You need to use the `cnpm` command to get the speed-up effect, while the original `npm` command still points to its configured source (default is the official registry). This method isolates the two environments and is suitable for special scenarios where you need to operate with different sources simultaneously.

### Are there other Node.js-related configuration optimizations on Mac?
Yes. Besides configuring the npm registry mirror, properly installing and managing Node.js itself on Mac is also important. A clear installation method can help you better manage multiple Node.js versions. For a detailed guide on how to install Node.js on Mac, you can refer to this comprehensive guide: [MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation), which introduces recommended methods like using Homebrew and nvm.

<RelatedCards :items='[{"title":"MAC Installation Method","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />