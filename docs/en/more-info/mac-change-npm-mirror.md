---
title: "Switch npm registry on MAC"
description: "npm (Node Package Manager) is the default package manager for Node.js, used to install and manage JavaScript dependencie"
lastUpdated: 1773259214891
---

# Switching npm Registry on MAC

## Why Switch npm Registry

npm (Node Package Manager) is the default package manager for Node.js, used to install and manage JavaScript dependencies. Its official registry is located overseas, and direct access from within China can result in slow download speeds, frequent timeouts, and failures, significantly impacting development efficiency. By switching the npm registry to a domestic mirror server, you can greatly improve package download speeds, reduce waiting times, and make the development environment more stable and reliable.

Popular domestic mirror services are provided by companies like Alibaba, Tencent, and Huawei. They regularly synchronize with the official npm registry to ensure you have access to the latest package versions.

## How to Check the Current Registry

Before switching, you can confirm the current registry address. Open Terminal or your command-line tool and enter the following command:

```bash
npm config get registry
```

If it returns `https://registry.npmjs.org/`, you are using the official npm registry.

## Switching to Popular Domestic Mirrors

You can choose any of the following domestic mirrors to switch to. The Taobao npm Mirror (note: `npm.taobao.org` has migrated to a new domain) is recommended due to its long history, stability, and timely updates.

**1. Switch to Taobao npm Mirror**
This is the most popular choice in China. Execute in the terminal:
```bash
npm config set registry https://registry.npmmirror.com/
```

**2. Switch to Tencent Cloud Mirror**
Tencent Cloud also provides an npm mirror service:
```bash
npm config set registry https://mirrors.cloud.tencent.com/npm/
```

**3. Switch to Huawei Cloud Mirror**
Huawei Cloud's mirror service is another good option:
```bash
npm config set registry https://repo.huaweicloud.com/repository/npm/
```

After executing any of the above commands, run `npm config get registry` again to verify the switch was successful.

## Using nrm to Manage Registries

If you frequently need to switch between different registries (e.g., sometimes needing the official registry to publish packages), manually modifying the configuration can be cumbersome. It is recommended to use the `nrm` (npm registry manager) tool for convenient registry management and switching.

First, install nrm globally:
```bash
npm install -g nrm
```

After installation, you can use the following commands:
- `nrm ls`: List all available registries. The one marked with `*` is currently in use.
- `nrm use <registry_name>`: Switch to the specified registry, e.g., `nrm use taobao`.
- `nrm test`: Test the response speed of all registries to help you choose the fastest one.
- `nrm add <name> <url>`: Add a custom registry.

To switch to the Taobao mirror using nrm, simply execute:
```bash
nrm use taobao
```

## Other Considerations

1.  **Permission Issues**: When installing global packages or executing certain npm commands, if you encounter permission errors (especially on Linux or macOS), avoid using `sudo`. It is better to fix the default directory permissions for npm or use a Node version management tool (like nvm) to install Node.js, which installs packages in your user directory. For better installation and permission management on macOS, you can refer to this guide: [MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation).

2.  **Reverting to the Official Registry**: If you need to publish a package to the official npm registry or ensure absolute dependency consistency, be sure to switch back to the official registry:
    ```bash
    npm config set registry https://registry.npmjs.org/
    ```
    Or use nrm: `nrm use npm`.

3.  **cnpm**: The Taobao mirror also provides a command-line tool called `cnpm`, which is a complete alternative to npm. You can install it via `npm install -g cnpm`. After that, you can directly use the `cnpm install` command, which by default uses the Taobao mirror without affecting your system's npm configuration. This is suitable for scenarios where you only want to use the mirror for specific projects.

## Common Questions

### After switching the registry, package installation is still slow or reports errors. What should I do?
First, double-check if the switch was successful by running `npm config get registry`. If confirmed, it might be a temporary network issue or the mirror is synchronizing. You can try:
1.  Use `nrm test` to test and switch to another faster domestic mirror.
2.  Clear the npm cache: `npm cache clean --force`, then retry.
3.  Check your network proxy settings to ensure they are not pointing to an unavailable proxy.

### Is it safe to use mirrors like Taobao?
Mainstream domestic mirror services (like Taobao, Tencent, Huawei) are generally safe and reliable. Their goal is to provide acceleration services, not to tamper with package content. These mirrors regularly sync from the official npm registry. However, theoretically, any third-party source carries potential risks. For projects with extremely high-security requirements, consider switching back to the official registry for verification before final builds or deployment. Using domestic mirrors for daily development is a common and widely accepted practice.

### Will switching the registry affect existing projects?
It does not affect the project's code itself. It affects **where** packages are downloaded from when you execute `npm install` in the future. After switching, you might download the same version of a package from a different server, which usually doesn't cause issues. However, if a mirror has a synchronization delay, you might temporarily be unable to install the very latest version of a package. For team collaboration, it's advisable to document the recommended registry in the project documentation to maintain environment consistency.

<RelatedCards :items='[{"title":"MAC Installation Method","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />