---
title: "Switch npm registry on MAC"
description: "npm (Node Package Manager) is the default package manager for Node.js, used to install and manage JavaScript dependencie"
lastUpdated: 1773310815159
---

# Switching npm Registry on MAC

## Why Switch npm Registry

npm (Node Package Manager) is the default package manager for Node.js, used to install and manage JavaScript dependencies. Its default official registry is located overseas, and developers in China often experience slow download speeds, connection timeouts, or even installation failures when accessing it directly. This severely impacts development efficiency and experience.

Switching the npm registry means changing the package download address from the official overseas server to a mirror server located within China. Common domestic mirror services are provided by organizations such as Alibaba, Tencent, Huawei Cloud, and Tsinghua University. They regularly synchronize with the official npm registry. By switching, you can enjoy faster download speeds and more stable connections, significantly improving the efficiency of installing dependency packages.

## How to View and Switch npm Registry

Before switching, you can first check the currently used registry address.

### View Current Registry
Open your Terminal and enter the following command:
```bash
npm config get registry
```
If it returns `https://registry.npmjs.org/`, it means you are using the official npm registry.

### Switch to Commonly Used Domestic Mirrors

Here are several mainstream and stable domestic mirrors. You can choose one to switch to.

**1. Taobao NPM Mirror (Recommended)**
This is the most popular domestic mirror with very high synchronization frequency.
```bash
npm config set registry https://registry.npmmirror.com/
```
(Note: The old domain `registry.npm.taobao.org` is deprecated. Please use the new domain.)

**2. Tencent Cloud NPM Mirror**
```bash
npm config set registry https://mirrors.cloud.tencent.com/npm/
```

**3. Huawei Cloud NPM Mirror**
```bash
npm config set registry https://repo.huaweicloud.com/repository/npm/
```

After executing any of the above commands, run `npm config get registry` again to confirm if the switch was successful.

### Temporarily Using a Mirror
If you only want to use a mirror for a single installation without permanently modifying the configuration, you can use the `--registry` parameter:
```bash
npm install package-name --registry=https://registry.npmmirror.com
```

## Using nrm Tool to Manage Registries

If you need to frequently switch between different registries (e.g., for testing or using private sources), manually modifying the configuration can be cumbersome. It is recommended to use `nrm` (npm registry manager), a tool specifically designed for managing registries.

**1. Install nrm**
Ensure you have correctly installed Node.js and npm. For detailed steps on installing Node.js on macOS, you can refer to this guide: [MAC Installation Method](/catalog-2/directory-nesting-333/mac-installation). Installing nrm requires using npm, but for faster installation speed, you can first temporarily switch to the Taobao mirror to install nrm itself:
```bash
npm install -g nrm --registry=https://registry.npmmirror.com
```

**2. Using nrm**
- **List all available registries**: `nrm ls`
- **Switch registry**: `nrm use taobao` (switch to Taobao mirror)
- **Test the speed of each registry**: `nrm test`
- **Add a custom registry**: `nrm add <name> <url>`
- **Delete a registry**: `nrm del <name>`

Using nrm makes switching registries very simple and intuitive.

## Precautions and Best Practices

1.  **Switch Back to Official Registry When Publishing Packages**: If you need to publish your own package to the official npm repository, **be sure** to switch the registry back to the official address first; otherwise, the publish will fail.
    ```bash
    nrm use npm
    # or
    npm config set registry https://registry.npmjs.org/
    ```

2.  **Addressing Potential Issues with `cnpm`**: The Taobao mirror also provides a command-line tool called `cnpm`. Although it uses the Taobao mirror by default, its installation logic differs slightly from the native `npm`, which can sometimes lead to differences in `node_modules` structure or incompatibility with certain toolchains. For most projects, **it is more recommended to use `nrm` to switch the native `npm`'s registry** rather than directly using the `cnpm` command.

3.  **Check Mirror Synchronization Status**: In rare cases, the latest package versions might have a slight delay on the mirror. If installation of a specific version fails, you can visit the mirror site's homepage (e.g., `npmmirror.com`) to check the synchronization status or temporarily switch back to the official registry to try.

## Common Issues

### ### After switching the registry, installation is still slow. What should I do?
First, confirm whether the switch was successful: run `npm config get registry`. If confirmed, it might be a network or DNS issue. Try:
- Execute `nrm test` to test and select the source with the lowest latency.
- Clear the npm local cache: `npm cache clean --force`.
- Check your network connection or try using a different network environment.

### ### How to configure a company's private registry?
If your company has its own private npm repository, the configuration method is the same:
```bash
npm config set registry http://your-private-registry.com/
```
Or use nrm to add it:
```bash
nrm add company http://your-private-registry.com/
nrm use company
```
Private registries usually require login authentication. You may also need to run `npm login` to configure your access permissions.

### ### Does switching the registry affect existing projects?
No. The registry configuration is global and applies to all npm operations under your current user. After switching, all subsequent `npm install` commands will download packages from the new address. This does not change the content of your project's `package.json` file, nor does it affect packages already downloaded into `node_modules`. You only need to reinstall dependencies in the project directory to pull from the new source.

<RelatedCards :items='[{"title":"MAC Installation Method","link":"/catalog-2/directory-nesting-333/mac-installation"}]' />