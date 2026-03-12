---
title: "Switch npm registry on MAC"
description: "npm (Node Package Manager) is the package manager for Node.js, used to install and manage JavaScript dependencies. By de"
lastUpdated: 1773302847585
---

# Switching npm Registry on MAC

## Why Switch npm Registry

npm (Node Package Manager) is the package manager for Node.js, used to install and manage JavaScript dependencies. By default, npm downloads packages from the official registry located abroad (registry.npmjs.org). For users in mainland China, due to network latency and bandwidth limitations, directly connecting to the official registry often results in very slow download speeds, and frequent timeouts or installation failures.

Switching to a domestic mirror registry (such as the Taobao npm mirror, Tencent Cloud mirror, etc.) can significantly improve package download speeds, sometimes even by more than 10 times. This not only saves developers time but also enhances the reliability of team collaboration and continuous integration/deployment workflows.

## How to View and Switch Registry

Before switching, you can first check the currently used registry address.

**View Current Registry:**
Open Terminal and enter the following command:
```bash
npm config get registry
```
If it returns `https://registry.npmjs.org/`, it means you are using the official registry.

**Switch to Commonly Used Domestic Mirrors:**

The most commonly used is the Taobao NPM mirror, which has high synchronization frequency and is very stable.
```bash
npm config set registry https://registry.npmmirror.com/
```
(Note: The old Taobao mirror address `registry.npm.taobao.org` has been discontinued. Please use the new address `registry.npmmirror.com`.)

You can also choose other domestic mirrors, such as the Tencent Cloud mirror:
```bash
npm config set registry https://mirrors.cloud.tencent.com/npm/
```

**Verify the Switch:**
Run `npm config get registry` again to confirm the output address has changed to the mirror you set.

## Using nrm Tool to Manage Registries

If you frequently need to switch between different registries (e.g., sometimes using a company private registry), manually modifying configurations can be cumbersome. It is recommended to use a small tool called **nrm** (npm registry manager) to manage multiple registries.

**1. Install nrm globally:**
```bash
npm install -g nrm
```

**2. Using nrm:**
- **List all available registries:**
  ```bash
  nrm ls
  ```
  The one marked with `*` is the currently used registry.
- **Switch registry:**
  ```bash
  nrm use taobao  # Switch to Taobao mirror
  nrm use npm     # Switch back to official npm registry
  nrm use tencent # Switch to Tencent Cloud mirror
  ```
- **Test the response speed of each registry:**
  ```bash
  nrm test
  ```
  This can help you choose the fastest registry under your current network.

After using nrm, all `npm install` commands will automatically go through your selected registry without additional configuration.

## Notes and Best Practices

1.  **Mirror Synchronization Delay**: Domestic mirrors are not synchronized in real-time; there is usually a delay of a few minutes. If you need to install a package that was just released to the official registry, it might temporarily fail. In this case, you can temporarily switch back to the official registry or wait a moment before trying again.
2.  **Project-Specific Configuration**: The `npm config set` command mentioned above modifies the global configuration, affecting all your projects. If a specific project requires a different registry (such as a private repository), you can create a `.npmrc` file in the project's root directory and write `registry=your_private_registry_address`. npm will prioritize project-level configuration.
3.  **Other Package Managers**: If you use `yarn` or `pnpm`, they have independent configuration commands. For example, the command to set the Taobao mirror for yarn is `yarn config set registry https://registry.npmmirror.com/`.
4.  **macOS System Environment**: Ensure your Node.js and npm are correctly installed. If you haven't installed Node.js on macOS yet, you can refer to our other guide: [MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation), which details installation steps using tools like Homebrew.

## Common Issues

### After switching the registry, package installation is still slow or reports errors. What should I do?
First, confirm again whether the switch was successful (`npm config get registry`). If the address is correct, it might be a temporary network issue or instability of the mirror itself. Try the following steps:
1.  Run `nrm test` to test and switch to another faster domestic mirror.
2.  Clear npm cache: `npm cache clean --force`.
3.  Check your network proxy settings to ensure there are no conflicts.

### How to permanently delete or restore default npm configuration?
- **Restore default official registry**: Run `npm config set registry https://registry.npmjs.org/`.
- **Delete a configuration item**: For example, to delete the registry you set, run `npm config delete registry`. This will delete the configuration item, and npm will fall back to using the built-in default official registry.
- **View all configurations**: `npm config list` can list all current npm configuration items.

<RelatedCards :items='[{"title":"MAC Installation Method","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />