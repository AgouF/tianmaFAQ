---
title: "Switch npm registry on MAC"
description: "npm (Node Package Manager) is the default package manager for Node.js, used to install and manage JavaScript dependencie"
lastUpdated: 1773317219727
---

# Switching npm Registry on MAC

## Why Switch npm Registry

npm (Node Package Manager) is the default package manager for Node.js, used to install and manage JavaScript dependencies. Its default official registry is located overseas, which can lead to slow download speeds, frequent timeouts, and failures when accessed directly from within China, significantly impacting development efficiency. To address this issue, several domestic companies and organizations provide npm mirror registries (also known as "Taobao Mirror" or "cnpm Mirror"). These mirrors regularly synchronize with the official registry, offering extremely fast access speeds within China, which greatly improves the success rate and speed of package installations.

## How to Check the Current npm Registry

Before switching, you can confirm the currently used registry address. Open Terminal and enter the following command:

```bash
npm config get registry
```

If it returns `https://registry.npmjs.org/`, it means you are using the official npm registry.

## Switching to Commonly Used Domestic Mirrors

The most commonly used and stable domestic mirror is maintained by the Taobao team. The switching command is very simple.

**1. Switch to the Taobao Mirror:**
This is the most recommended method, offering good compatibility and timely synchronization.
```bash
npm config set registry https://registry.npmmirror.com/
```
(Note: The old domain `https://registry.npm.taobao.org` has been discontinued; please use the new domain.)

**2. Switch to the Tencent Cloud Mirror:**
Tencent Cloud also provides a public mirror service.
```bash
npm config set registry https://mirrors.cloud.tencent.com/npm/
```

**3. Switch to the Huawei Cloud Mirror:**
```bash
npm config set registry https://repo.huaweicloud.com/repository/npm/
```

After executing any of the above commands, run `npm config get registry` again to verify if the switch was successful.

## Using the nrm Tool to Manage Registries

If you need to frequently switch between different registries (for example, sometimes needing to publish packages to the official registry), manually modifying the configuration can be cumbersome. It is recommended to use a small tool called **nrm** (npm registry manager) to manage multiple registries.

**Install nrm:**
```bash
npm install -g nrm
```

**Using nrm:**
- `nrm ls`: Lists all available registries; the one marked with `*` is currently in use.
- `nrm use taobao`: Switches to the Taobao registry.
- `nrm use npm`: Switches back to the official npm registry.
- `nrm test`: Tests the response speed of all registries to help you choose the fastest one.

nrm essentially modifies your local `.npmrc` configuration file, providing a more convenient interface for operations.

## Precautions and Restoring Defaults

*   **Temporarily Changing Registry for Installing Specific Packages**: If you don't want to make permanent changes, you can temporarily specify a registry using the `--registry` parameter when using `npm install`.
    ```bash
    npm install package-name --registry=https://registry.npmmirror.com
    ```
*   **When Publishing Packages**: If you need to publish a package to the official npm repository, **be sure** to switch the registry back to the official one first; otherwise, the publish will fail.
    ```bash
    npm config set registry https://registry.npmjs.org/
    ```
*   **Restoring the Default Official Registry**: If you wish to revert for any reason, simply execute:
    ```bash
    npm config set registry https://registry.npmjs.org/
    ```
*   **Permission Issues**: On Mac systems, if you encounter permission errors (EACCES), you may need to use `sudo` or configure permissions correctly. For guidance on correctly installing and configuring the Node.js and npm environment on Mac, you can refer to our other guide: [MAC Installation Guide](/catalog-2/directory-nesting-333/mac-installation).

## Common Questions

### Why do I still get errors or slow installations for some packages after switching the registry?
Mirror registries synchronize with the official registry at regular intervals (usually every 10 minutes), so there might be a very brief delay. If a package was just published, the mirror might not have synced it yet; you can wait a moment and try again. Also, ensure you are using the correct mirror address (especially note that the Taobao mirror has a new domain). If the issue persists, try using `nrm test` to switch to another faster domestic mirror.

### What's the difference between using the cnpm command and switching the npm registry?
`cnpm` is a complete command-line tool provided by the Taobao team. After installation, you can use the `cnpm install` command, which by default points to the Taobao mirror. "Switching the npm registry" modifies the configuration of the `npm` command itself. For most developers, **it is recommended to modify the npm registry** because this way, all projects and all npm commands (`install`, `publish`, `run`, etc.) will benefit, and it avoids dependency inconsistency issues that can arise from mixing `npm` and `cnpm`.

### Does switching the registry affect package versions in my project?
Not at all. The registry only affects the download location of packages; it does not alter any content of the packages. The version specified in your project's `package.json` is exactly what will be downloaded, regardless of which registry it comes from. The mirror registry is simply a complete copy of the official registry.

<RelatedCards :items='[{"title":"MAC Installation Guide","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />