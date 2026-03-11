---
title: "NodeJS Mirror Source Switching"
description: "When installing dependencies using NodeJS's default package managers npm and yarn, packages are downloaded from the offi"
lastUpdated: 1773263274000
---

# Switching NodeJS Mirror Sources

## Why Switch NodeJS Mirror Sources

When installing dependencies using NodeJS's default package managers npm and yarn, packages are downloaded from the official registry. For users in mainland China, due to network restrictions, directly connecting to the official source (https://registry.npmjs.org/) is often very slow, with frequent timeouts and download failures, significantly impacting development efficiency.

Switching the mirror source means pointing the download address to a server located within China or closer to you. These mirror servers regularly synchronize with the official source, providing nearly identical package content but with much faster access speeds. Commonly used domestic mirror sources in China include the Taobao NPM Mirror (cnpm), Tencent Cloud Mirror, etc., which can significantly improve the speed of package installation and project initialization.

## How to Switch NodeJS Mirror Sources

You can choose the corresponding method based on the package manager you use (npm, yarn, pnpm). Below are the most commonly used and recommended methods.

### Permanently Switching the Mirror Source for npm

Open your terminal (command-line tool) and enter the following command to set the default source to the Taobao mirror:

```bash
npm config set registry https://registry.npmmirror.com/
```

After executing, you can verify if the setting was successful with the following command:
```bash
npm config get registry
```
If the terminal displays `https://registry.npmmirror.com/`, the configuration is active.

If you want to revert to the official source, simply execute:
```bash
npm config set registry https://registry.npmjs.org/
```

### Permanently Switching the Mirror Source for yarn

If you use yarn, you can set the mirror source with the following command:

```bash
yarn config set registry https://registry.npmmirror.com/
```

The verification command is:
```bash
yarn config get registry
```

### Using the nrm Tool to Manage Multiple Mirror Sources (Recommended)

Manually modifying configurations can be cumbersome when frequently switching or testing different sources. `nrm` (npm registry manager) is a small tool specifically designed for quickly switching NPM sources.

First, install nrm globally:
```bash
npm install -g nrm
```

After installation, you can use the following commands:
- `nrm ls`: List all available mirror sources; the one marked with `*` is the currently used source.
- `nrm use taobao`: Switch to the Taobao mirror.
- `nrm use npm`: Switch back to the official source.
- `nrm test`: Test the response speed of all mirror sources to help you choose the fastest one.

### Temporarily Using a Mirror Source

If you only want to speed up a specific installation without modifying global configurations, you can temporarily specify the mirror source in the installation command.

For npm:
```bash
npm install package-name --registry=https://registry.npmmirror.com
```

For yarn:
```bash
yarn add package-name --registry=https://registry.npmmirror.com
```

## Recommended Mirror Source Addresses

Here are some stable and reliable domestic mirror source addresses, recommended for use:
- **Taobao NPM Mirror**: `https://registry.npmmirror.com/` (This is the new address; the old address `https://registry.npm.taobao.org` is no longer in service)
- **Tencent Cloud Mirror**: `https://mirrors.cloud.tencent.com/npm/`
- **Huawei Cloud Mirror**: `https://repo.huaweicloud.com/repository/npm/`

## Common Issues

### After switching the mirror source, installing certain packages still reports errors or cannot find them. What should I do?
This is usually because some special packages (especially C++ plugins that require compilation or private company packages) may not be synchronized to the mirror source in time. In this case, you can try the following methods:
1.  Wait a moment and try again, as there might be a delay in mirror synchronization.
2.  For private packages (@scope/package), ensure your mirror source supports them or that the private repository address is correctly configured.
3.  Temporarily switch back to the official source for installation: `npm install --registry=https://registry.npmjs.org`.

### When using `npm install`, certificate errors or SSL-related errors occur. How can I resolve this?
This may be due to network environment issues or mirror source certificate problems. You can try:
1.  Temporarily disable npm's strict SSL verification (not recommended for long-term use):
    ```bash
    npm config set strict-ssl false
    ```
2.  Check if the system time is correct.
3.  Try switching to another mirror source (e.g., from Taobao to Tencent Cloud).
4.  If you encounter other network issues while setting up your development environment, such as installing basic software on a Mac, you can refer to our detailed guide on **[MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation)**, which includes solutions for common network and permission issues.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />