---
title: "Switch npm registry on MAC"
description: "npm (Node Package Manager) is the package manager for Node.js, used to install and manage JavaScript dependencies. Its d"
lastUpdated: 1773269948755
---

# Switching npm Registry on macOS

## Why Switch npm Registry?

npm (Node Package Manager) is the package manager for Node.js, used to install and manage JavaScript dependencies. Its default official registry is located overseas. Developers in China often experience extremely slow download speeds, connection timeouts, or even installation failures when accessing it directly. This not only severely impacts development efficiency but can also cause build failures in automated processes like Continuous Integration (CI).

Switching to a registry located within China, such as the Taobao npm Mirror (cnpm) or Tencent Cloud Mirror, can dramatically increase package download speeds, often reaching several MB/s. This reduces dependency installation time from several minutes or even tens of minutes to just seconds. This is an almost essential optimization step for Node.js developers in China.

## How to View and Switch Registry

Before switching, you can first check the registry address currently in use.

### View Current Registry
Open Terminal and enter the following command:
```bash
npm config get registry
```
If it returns `https://registry.npmjs.org/`, you are using the official registry.

### Switch to a Domestic Registry (Recommended: Taobao Mirror)
Currently, the most stable and widely used is the Taobao npm Mirror. Execute the following command in the terminal to switch:
```bash
npm config set registry https://registry.npmmirror.com/
```
(Note: The old Taobao mirror address `https://registry.npm.taobao.org` has fully migrated to the new address `https://registry.npmmirror.com`. It is recommended to use the new address).

### Other Optional Mirrors
If you prefer more options, you can also consider:
*   **Tencent Cloud Mirror**: `https://mirrors.cloud.tencent.com/npm/`
*   **Huawei Cloud Mirror**: `https://mirrors.huaweicloud.com/repository/npm/`

The switching command format is the same; just replace the address.

### Temporarily Using a Mirror
If you don't want to permanently modify the configuration, you can temporarily specify a mirror when installing packages using the `--registry` parameter:
```bash
npm install package-name --registry=https://registry.npmmirror.com
```

## Using the nrm Tool to Manage Registries

If you need to frequently switch between different registries (e.g., sometimes needing to publish packages to the official registry), manually modifying the configuration can be cumbersome. It is recommended to use the `nrm` (NPM Registry Manager) tool to manage multiple registries.

### Installing and Using nrm
1.  **Install nrm globally**:
    ```bash
    npm install -g nrm
    ```
2.  **List all available registries**:
    ```bash
    nrm ls
    ```
    You will see a list with an asterisk (*) marking the currently active registry.
3.  **Switch registry** (e.g., switch to `taobao`):
    ```bash
    nrm use taobao
    ```
4.  **Test the response speed of each registry**:
    ```bash
    nrm test
    ```
    This helps you choose the fastest registry for your current network.

Using nrm makes switching registries very simple and intuitive. It is highly recommended for all Node.js developers.

## Considerations After Switching Registry

1.  **Publishing Packages**: When you need to publish your own package to the official npm registry, **you must ensure you are using the official registry** (`https://registry.npmjs.org/`). You cannot execute `npm publish` on the Taobao mirror. Using nrm makes it easy to switch back: `nrm use npm`.
2.  **Permission Issues**: On macOS or Linux systems, if you encounter permission errors (EACCES), it is recommended to refer to proper permission solutions rather than using `sudo`. For detailed guidance on correctly configuring the Node.js and npm environment on macOS, you can refer to our detailed guide: [MAC Installation Guide](/catalog-2/directory-nesting-333/mac-installation), which includes best practices for using nvm to manage Node versions and avoid permission issues.
3.  **Clear Cache**: If you encounter issues after switching registries, you can try clearing the npm cache:
    ```bash
    npm cache clean --force
    ```

## Frequently Asked Questions

### After switching the registry, installing certain packages still reports errors or is very slow. What should I do?
This situation may have two causes. First, some packages download binary files or additional resources from GitHub or other overseas addresses during installation. The mirror only proxies the npm registry itself and cannot help with these resources. Second, there might be cached error information locally. You can try:
1.  Run `npm cache clean --force` to clear the cache.
2.  Check the installation script or documentation of that package to see if there are methods to set domestic environment variables (e.g., Puppeteer can skip Chromium download or use a domestic mirror).
3.  If it's only for a specific package, you can try installing it separately using `cnpm` (the command-line tool provided by Taobao).

### The installation of `npm install -g nrm` fails. How to resolve this?
This is a "chicken or egg" problem. You want to install nrm to manage the registry, but the installation of nrm itself fails due to slow network. You can proceed in two steps:
1.  **Temporarily use a mirror to install nrm**:
    ```bash
    npm install -g nrm --registry=https://registry.npmmirror.com
    ```
    This command temporarily specifies downloading nrm from the Taobao mirror.
2.  After successful installation, you can use the `nrm use taobao` command to switch permanently. All future `npm install` commands will benefit.

### The company has an internal private npm registry. How should I configure it?
You need to add the internal registry address to the configuration. It is usually not recommended to directly override the global registry. Instead, use a Scoped Registry. For example, for all packages within the company starting with `@mycompany`, you can set it like this:
```bash
npm config set @mycompany:registry http://internal-registry-address/
```
This way, when you install `@mycompany/awesome-package`, npm will automatically search the internal registry, while installing other public packages (like `lodash`) will still use your configured Taobao or official public mirror, achieving separation between private and public packages.

<RelatedCards :items='[{"title":"MAC Installation Guide","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />