---
title: "NodeJS Mirror Source Switching"
description: "In the domestic network environment, downloading packages from the Node.js official source (registry.npmjs.org) can be v"
lastUpdated: 1773326996213
---

# NodeJS Mirror Source Switching

## Node.js Mirror Source Switching Guide

In the domestic network environment, downloading packages from the Node.js official source (registry.npmjs.org) can be very slow or even fail. To solve this problem, switching the mirror source to a domestic mirror server is an essential optimization for developers. This not only greatly improves the speed of commands like `npm install` or `yarn add` but also enhances development efficiency and stability.

## Why Switch Mirror Sources?

Node.js package managers (npm, yarn, pnpm) by default pull packages from the official repository located abroad. Due to network latency and bandwidth limitations, download speeds are often unsatisfactory. Several domestic technology companies (such as Taobao, Tencent, Huawei) provide complete and synchronized mirror services, offering faster download speeds and more stable connections. Switching the mirror source essentially instructs the package manager to fetch data from these domestic servers.

## How to Switch Mirror Sources

You can choose the corresponding method below based on the package manager you are using.

### 1. Using `npm` to Switch Mirror Sources

`npm` is the most commonly used Node.js package manager.

*   **Check the current source:**
    ```bash
    npm config get registry
    ```

*   **Switch to the Taobao mirror source:**
    ```bash
    npm config set registry https://registry.npmmirror.com/
    ```
    (The old Taobao mirror address `https://registry.npm.taobao.org/` has been redirected to the new address. It is recommended to use the new address directly.)

*   **Switch to the Tencent Cloud mirror source:**
    ```bash
    npm config set registry https://mirrors.cloud.tencent.com/npm/
    ```

*   **Switch back to the official source:**
    ```bash
    npm config set registry https://registry.npmjs.org/
    ```

### 2. Using `yarn` to Switch Mirror Sources

If you are using `yarn` as your package manager.

*   **Check the current source:**
    ```bash
    yarn config get registry
    ```

*   **Switch to the Taobao mirror source:**
    ```bash
    yarn config set registry https://registry.npmmirror.com/
    ```

*   **Switch back to the official source:**
    ```bash
    yarn config set registry https://registry.yarnpkg.com/
    ```

### 3. Using `pnpm` to Switch Mirror Sources

`pnpm` is another efficient package manager.

*   **Check the current source:**
    ```bash
    pnpm config get registry
    ```

*   **Switch to the Taobao mirror source:**
    ```bash
    pnpm config set registry https://registry.npmmirror.com/
    ```

*   **Switch back to the official source:**
    ```bash
    pnpm config set registry https://registry.npmjs.org/
    ```

### 4. Using `nrm` or `yrm` Tools for Quick Source Management

Manually switching and remembering addresses can be cumbersome. You can use dedicated source management tools.

*   **Install `nrm` (npm registry manager):**
    ```bash
    npm install -g nrm
    ```

*   **Using `nrm`:**
    *   `nrm ls`: List all available mirror sources. The one marked with `*` is the currently used source.
    *   `nrm use taobao`: Switch to the Taobao mirror source.
    *   `nrm use npm`: Switch back to the official source.
    *   `nrm test`: Test the response speed of all sources.

For `yarn` users, there is a corresponding `yrm` tool with similar usage.

## Notes on Mirror Source Switching

1.  **Consistency**: In team projects, it is recommended that all developers use the same mirror source to avoid dependency installation discrepancies caused by package version synchronization issues.
2.  **Publishing Packages**: When you need to publish your own npm package to the official repository, you **must** switch the source back to the official one (`https://registry.npmjs.org/`), otherwise the publication will fail.
3.  **Temporary Use**: If you only want to use a mirror source temporarily for a specific installation, you can use the `--registry` parameter, for example:
    ```bash
    npm install express --registry=https://registry.npmmirror.com
    ```
4.  **Other Mirrors**: Besides the package repository mirror, downloading the Node.js installation package itself can also be slow. If you encounter difficulties installing Node.js, you can refer to our article on **[MAC Installation Methods](/catalog-2/directory-nesting-333/mac-installation)**, which also mentions how to use domestic mirrors to accelerate binary file downloads.

## Frequently Asked Questions

### What to do if installation is still slow or reports errors after switching the mirror source?
First, use `npm config get registry` to confirm if the switch took effect. If it is effective but still slow, it might be a network issue or temporary fluctuation of the mirror site. You can try:
1.  Clear the npm cache: `npm cache clean --force`
2.  Switch to another domestic mirror source (e.g., from Taobao to Tencent Cloud).
3.  Check your network connection or try again later.

### Is using a mirror source safe?
Mainstream domestic mirror services (such as Taobao, Tencent Cloud) are official partners or reputable service providers. They synchronize with the official source regularly, ensuring security. However, for absolute security when installing dependencies involving highly sensitive information, you might consider temporarily switching back to the official source.

### Is the mirror source related to the global package installation path?
No direct relation. The mirror source only affects **where packages are downloaded from**. The storage path for globally installed packages is determined by configurations like `npm config get prefix` or `yarn global dir` and is unrelated to the mirror source setting. Switching the mirror source does not affect already installed global packages.

<RelatedCards :items='[{"title":"MAC Installation Methods","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />